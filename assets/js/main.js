/* main.js – Portfolio Jasper Haas */
'use strict';

/* =============================================
   i18n – Translations
   ============================================= */
const i18n = {
  de: {
    nav_about:         'Über mich',
    nav_projects:      'Projekte',
    nav_skills:        'Skills',
    nav_timeline:      'Timeline',
    nav_contact:       'Kontakt',
    hero_badge:        'Offen für Projekte',
    hero_sub:          'Python Developer & KI-Enthusiast',
    hero_desc:         'Ich baue intelligente Systeme an der Schnittstelle von Mensch und Maschine.',
    hero_cta_projects: 'Projekte ansehen',
    hero_cta_contact:  'Kontakt',
    about_title:       'Über mich',
    about_p1:          'Ich bin ein leidenschaftlicher Python-Entwickler mit Fokus auf KI, Machine Learning und innovative Interfaces. Ich baue Dinge, die die Grenze zwischen Mensch und Maschine neu definieren.',
    about_p2:          'Meine Projekte reichen von komplexen neuronalen Netzen über Hand-Tracking-Interfaces bis hin zu KI-gestützten Spielen und sozialen Plattformen. Ich lerne kontinuierlich und treibe technische Grenzen voran.',
    stat_projects:     'Projekte',
    stat_years:        'Jahre Erfahrung',
    stat_ideas:        'Ideen',
    projects_title:    'Projekte',
    projects_sub:      'Eine Auswahl meiner Arbeiten',
    proj1_desc:        'Ein Spiel, wo man alles machen kann durch KI-Einbindung – eine vollständig dynamische Spielwelt.',
    proj2_desc:        'Eine Plattform, wo sich Leute sozialisieren können und dadurch XP kriegen, mit weiteren Gamification-Funktionen.',
    proj3_desc:        'Ein Programm, das mit Handtracking und Machine Learning eine einzigartige Benutzeroberfläche schafft.',
    proj4_title:       'Fluid Simulation',
    proj4_desc:        'Komplexe Berechnungen mit Einbindung von Hand Tracking für interaktive Fluid-Simulationen.',
    proj5_title:       'Neanderthaler Simulation',
    proj5_desc:        'Komplexe Simulation mit einer Welt aus zellulären Automaten und neuronalen Netzen, die lernen zu überleben.',
    card_github:       'GitHub ansehen',
    skills_title:      'Skills',
    skills_sub:        'Technologien & Werkzeuge',
    timeline_title:    'Timeline',
    timeline_sub:      'Meine Entwicklungsreise',
    tl1_date:          '2023 – heute',
    tl1_title:         'Selbstständige KI-Entwicklung',
    tl1_desc:          'Aktive Entwicklung von KI-Projekten: Skotos, ConnectionQuest und weitere. Fokus auf OpenAI-Integration und ML-Systeme.',
    tl2_title:         'J.A.R.V.I.S Prototyp',
    tl2_desc:          'Erstes Hand-Tracking-Projekt mit MediaPipe und OpenCV. Entwicklung einer gestengesteuerten KI-Oberfläche.',
    tl3_title:         'Fluid Simulation & Neanderthaler',
    tl3_desc:          'Aufbau komplexer physikalischer Simulationen und evolutionärer neuronaler Netzwerke.',
    tl4_title:         'Beginn der Python-Reise',
    tl4_desc:          'Erste Schritte mit Python, Algorithmen und Datenstrukturen. Leidenschaft für KI und maschinelles Lernen entdeckt.',
    contact_title:     'Kontakt',
    contact_sub:       'Lass uns zusammenarbeiten',
    contact_info_title:'Schreib mir',
    contact_info_desc: 'Ob Projektanfragen, Kollaborationen oder einfach ein kurzes Hallo – ich freue mich über jede Nachricht.',
    form_name:         'Name',
    form_email:        'E-Mail',
    form_message:      'Nachricht',
    form_send:         'Senden',
    form_fallback_pre: 'Problem beim Senden? ',
    form_fallback_link:'Direkt per E-Mail schreiben',
    form_success:      'Nachricht gesendet! Ich melde mich bald.',
    form_error:        'Fehler beim Senden. Bitte versuche es erneut oder schreib direkt per E-Mail.',
    form_validation:   'Bitte alle Felder ausfüllen.',
    form_email_invalid:'Bitte eine gültige E-Mail-Adresse eingeben.',
    footer_tagline:    'Built with ❤️ and Python',
  },
  en: {
    nav_about:         'About',
    nav_projects:      'Projects',
    nav_skills:        'Skills',
    nav_timeline:      'Timeline',
    nav_contact:       'Contact',
    hero_badge:        'Open to Projects',
    hero_sub:          'Python Developer & AI Enthusiast',
    hero_desc:         'I build intelligent systems at the intersection of human and machine.',
    hero_cta_projects: 'View Projects',
    hero_cta_contact:  'Contact',
    about_title:       'About Me',
    about_p1:          'I am a passionate Python developer focused on AI, machine learning, and innovative interfaces. I build things that redefine the boundary between human and machine.',
    about_p2:          'My projects range from complex neural networks and hand-tracking interfaces to AI-powered games and social platforms. I learn continuously and push technical boundaries.',
    stat_projects:     'Projects',
    stat_years:        'Years Experience',
    stat_ideas:        'Ideas',
    projects_title:    'Projects',
    projects_sub:      'A selection of my work',
    proj1_desc:        'A game where you can do anything through AI integration – a fully dynamic game world.',
    proj2_desc:        'A platform where people can socialize and earn XP, with additional gamification features.',
    proj3_desc:        'A program that creates a unique user interface using hand tracking and machine learning.',
    proj4_title:       'Fluid Simulation',
    proj4_desc:        'Complex calculations combined with hand tracking for interactive fluid simulations.',
    proj5_title:       'Neanderthal Simulation',
    proj5_desc:        'Complex simulation with a world of cellular automata and neural networks that learn to survive.',
    card_github:       'View on GitHub',
    skills_title:      'Skills',
    skills_sub:        'Technologies & Tools',
    timeline_title:    'Timeline',
    timeline_sub:      'My Development Journey',
    tl1_date:          '2023 – present',
    tl1_title:         'Independent AI Development',
    tl1_desc:          'Active development of AI projects: Skotos, ConnectionQuest and more. Focus on OpenAI integration and ML systems.',
    tl2_title:         'J.A.R.V.I.S Prototype',
    tl2_desc:          'First hand-tracking project using MediaPipe and OpenCV. Development of a gesture-controlled AI interface.',
    tl3_title:         'Fluid Simulation & Neanderthal',
    tl3_desc:          'Building complex physical simulations and evolutionary neural networks.',
    tl4_title:         'Beginning the Python Journey',
    tl4_desc:          'First steps with Python, algorithms and data structures. Discovered a passion for AI and machine learning.',
    contact_title:     'Contact',
    contact_sub:       "Let's work together",
    contact_info_title:'Get in Touch',
    contact_info_desc: 'Whether project inquiries, collaborations, or just a quick hello – I look forward to every message.',
    form_name:         'Name',
    form_email:        'Email',
    form_message:      'Message',
    form_send:         'Send',
    form_fallback_pre: 'Having trouble? ',
    form_fallback_link:'Write directly by email',
    form_success:      'Message sent! I\'ll get back to you soon.',
    form_error:        'Error sending. Please try again or write directly by email.',
    form_validation:   'Please fill in all fields.',
    form_email_invalid:'Please enter a valid email address.',
    footer_tagline:    'Built with ❤️ and Python',
  },
};

/* =============================================
   Language Management
   ============================================= */
let currentLang = localStorage.getItem('lang') || 'de';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.dataset.i18n;
    if (i18n[lang] && i18n[lang][key] !== undefined) {
      el.textContent = i18n[lang][key];
    }
  });

  // Update lang toggle button label
  const labelEl = document.getElementById('lang-label');
  if (labelEl) {
    labelEl.textContent = lang === 'de' ? 'EN' : 'DE';
  }

  // Update page title
  const titleMap = {
    de: 'Jasper Haas \u2013 Python Developer & KI-Enthusiast',
    en: 'Jasper Haas \u2013 Python Developer & AI Enthusiast',
  };
  document.title = titleMap[lang] || document.title;
}

/* =============================================
   Navigation
   ============================================= */
function initNav() {
  const nav = document.getElementById('main-nav');
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');

  // Scroll class
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile toggle
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      const isOpen = links.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
    });

    // Close on link click
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.classList.remove('open');
      });
    });
  }

  // Active nav state via IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav-links a[href^="#"]');

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinkEls.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });
  }
}

/* =============================================
   Smooth Scroll
   ============================================= */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* =============================================
   Scroll Animations
   ============================================= */
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) {
    // Fallback: make all visible
    document.querySelectorAll('[data-animate]').forEach(function (el) {
      el.dataset.visible = '';
    });
    return;
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.dataset.visible = '';
        observer.unobserve(entry.target);

        // Trigger skill bar animations when skills section is visible
        if (entry.target.closest('#skills')) {
          animateSkillBars();
        }
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('[data-animate]').forEach(function (el) {
    observer.observe(el);
  });
}

/* =============================================
   Skill Bar Animations
   ============================================= */
let skillsAnimated = false;

function animateSkillBars() {
  if (skillsAnimated) return;
  skillsAnimated = true;
  document.querySelectorAll('.skill-fill').forEach(function (fill) {
    // Small delay to ensure transition fires
    requestAnimationFrame(function () {
      fill.classList.add('animated');
    });
  });
}

/* =============================================
   3D Card Tilt
   ============================================= */
function initCardTilt() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 768) return;

  document.querySelectorAll('.project-card[data-tilt]').forEach(function (card) {
    const MAX_TILT = 10;

    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const rotateX = -dy * MAX_TILT;
      const rotateY =  dx * MAX_TILT;
      card.style.transform =
        'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateZ(8px)';
    });

    card.addEventListener('mouseleave', function () {
      card.style.transform = '';
    });
  });
}

/* =============================================
   Contact Form
   ============================================= */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Set form_time on load
  const formTimeEl = document.getElementById('form_time');
  if (formTimeEl) {
    formTimeEl.value = Date.now();
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    submitForm(form);
  });
}

function submitForm(form) {
  const msgEl    = document.getElementById('form-message');
  const submitEl = document.getElementById('form-submit');
  const lang     = currentLang;

  // Client-side validation
  const name    = form.querySelector('#name').value.trim();
  const email   = form.querySelector('#email').value.trim();
  const message = form.querySelector('#message').value.trim();

  if (!name || !email || !message) {
    showFormMsg(msgEl, i18n[lang].form_validation, 'error');
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showFormMsg(msgEl, i18n[lang].form_email_invalid, 'error');
    return;
  }

  submitEl.disabled = true;
  submitEl.textContent = '...';

  fetch('contact.php', {
    method: 'POST',
    body: new FormData(form),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      if (data.success) {
        showFormMsg(msgEl, i18n[lang].form_success, 'success');
        form.reset();
        // Reset form_time
        const ftEl = document.getElementById('form_time');
        if (ftEl) ftEl.value = Date.now();
      } else {
        showFormMsg(msgEl, data.message || i18n[lang].form_error, 'error');
      }
    })
    .catch(function () {
      // PHP not available – show mailto fallback
      showFormMsg(
        msgEl,
        i18n[lang].form_error,
        'error'
      );
    })
    .finally(function () {
      submitEl.disabled = false;
      // Re-apply translations (restores button label via data-i18n)
      applyLang(currentLang);
    });
}

function showFormMsg(el, text, type) {
  el.textContent = text;
  el.className = 'form-message ' + type;
  // Auto-hide after 6s
  setTimeout(function () {
    el.className = 'form-message';
  }, 6000);
}

/* =============================================
   Language Toggle
   ============================================= */
function initLangToggle() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;

  btn.addEventListener('click', function () {
    applyLang(currentLang === 'de' ? 'en' : 'de');
  });
}

/* =============================================
   Init
   ============================================= */
document.addEventListener('DOMContentLoaded', function () {
  applyLang(currentLang);
  initNav();
  initSmoothScroll();
  initScrollAnimations();
  initCardTilt();
  initContactForm();
  initLangToggle();
});
