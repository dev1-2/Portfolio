/* three-bg.js – Pure canvas particle system (no Three.js dependency) */
(function () {
  'use strict';

  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    canvas.style.background = '#0d0d14';
    return;
  }

  const isMobile = window.innerWidth < 768;
  const PARTICLE_COUNT = isMobile ? 35 : 80;
  const MAX_DIST = 150;
  const COLORS = [
    { r: 124, g: 58,  b: 237 }, // violet
    { r: 245, g: 158, b: 11  }, // gold
    { r: 167, g: 139, b: 250 }, // light violet
  ];

  let W = window.innerWidth;
  let H = window.innerHeight;
  let animId = null;
  let particles = [];

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createParticle() {
    const c = COLORS[Math.floor(Math.random() * COLORS.length)];
    return {
      x:   rand(0, W),
      y:   rand(0, H),
      vx:  rand(-0.3, 0.3),
      vy:  rand(-0.3, 0.3),
      r:   rand(1.5, 3.5),
      a:   rand(0.3, 0.8),
      c:   c,
    };
  }

  function init() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(createParticle());
    }
  }

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width  = W;
    canvas.height = H;
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.25;
          const ci = particles[i].c;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${ci.r},${ci.g},${ci.b},${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Draw particles
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.c.r},${p.c.g},${p.c.b},${p.a})`;
      ctx.fill();
    }
  }

  function update() {
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < -10) p.x = W + 10;
      if (p.x > W + 10) p.x = -10;
      if (p.y < -10) p.y = H + 10;
      if (p.y > H + 10) p.y = -10;
    }
  }

  function loop() {
    update();
    draw();
    animId = requestAnimationFrame(loop);
  }

  // Debounced resize
  let resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      resize();
      init();
    }, 200);
  });

  resize();
  init();
  loop();
})();
