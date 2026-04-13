# Portfolio Jasper Haas

Modernes Portfolio-Website für Jasper Haas – Python Developer & KI-Enthusiast.  
Dark Premium Aesthetic · DE/EN · Canvas-Partikel-Hintergrund · Kontaktformular mit PHP.

---

## Übersicht

Eine vollständig statische Portfolio-Website ohne Build-Tools oder Frameworks.  
Alle Asset-Pfade sind relativ – die Seite funktioniert auf jedem Webserver in beliebigen Unterordnern.

**Features:**
- 🌑 Dark Premium Design (Violet + Gold Akzente, Glassmorphism)
- 🌍 Deutsch / Englisch (Umschalter, `localStorage`-Persistenz)
- ✨ Animierter Canvas-Partikel-Hintergrund (reines JavaScript)
- 🎯 5 Projekt-Karten mit 3D-Tilt-Effekt
- 📊 Animierte Skill-Bars & Timeline
- 📬 AJAX-Kontaktformular (PHP, kein Spam durch Honeypot + Zeitprüfung)
- ♿ Barrierefrei (ARIA-Labels, `focus-visible`, `prefers-reduced-motion`)

---

## Strato Upload

1. **FTP-Verbindung** herstellen (FileZilla o. Ä.):
   - Host, Nutzername und Passwort aus dem Strato-Kundenbereich
2. Alle Dateien und Ordner in das Zielverzeichnis hochladen:
   ```
   Portfolio Jasper Haas/
   ├── index.html
   ├── contact.php
   ├── README.md
   └── assets/
       ├── css/
       │   └── style.css
       └── js/
           ├── main.js
           └── three-bg.js
   ```
3. Im **Strato-Adminpanel** → Hosting → Webseiten:
   - Dokumentenverzeichnis auf `Portfolio Jasper Haas/` setzen  
   (oder den Ordner direkt ins Root-Verzeichnis `public_html/` legen)
4. Seite im Browser aufrufen – fertig! 🎉

> **Hinweis**: Alle Links zu Assets sind relativ (kein führendes `/`), daher funktioniert die Seite auch in Unterordnern korrekt.

---

## Kontaktformular aktivieren

Das Kontaktformular (`contact.php`) ist sofort einsatzbereit:

- Strato Basic-Webspace unterstützt PHP – kein zusätzliches Setup nötig
- Keine Datenbank erforderlich
- Spam-Schutz durch **Honeypot-Feld** und **Zeitprüfung**
- E-Mail wird über `mail()` an `info@jasperhaas.de` gesendet

Falls PHP auf deinem Webspace nicht verfügbar ist, zeigt das Formular automatisch einen Fallback-Link `mailto:info@jasperhaas.de` an.

---

## Lokale Vorschau

### Option 1 – Python (empfohlen)
```bash
cd "Portfolio Jasper Haas"
python -m http.server 8000
# → http://localhost:8000
```

### Option 2 – VSCode Live Server
1. Extension **Live Server** von Ritwick Dey installieren
2. `index.html` öffnen → rechtsklick → *Open with Live Server*

> **Hinweis**: Das PHP-Kontaktformular funktioniert lokal nur mit einem PHP-Server (z. B. XAMPP, MAMP oder `php -S localhost:8080`). Im Live-Betrieb auf Strato funktioniert alles.

---

## Struktur

```
Portfolio Jasper Haas/
│
├── index.html          # Haupt-HTML (alle Sections)
├── contact.php         # PHP-Kontaktformular-Handler
├── README.md           # Diese Datei
│
└── assets/
    ├── css/
    │   └── style.css   # Alle Styles (CSS Custom Properties, Dark Theme)
    └── js/
        ├── three-bg.js # Canvas-Partikel-Hintergrund (reines JS)
        └── main.js     # i18n, Animationen, Tilt, Nav, Formular
```

---

## Anpassungen

| Was | Wo |
|-----|----|
| Texte DE/EN ändern | `assets/js/main.js` → `const i18n = { de: {...}, en: {...} }` |
| Farben ändern | `assets/css/style.css` → `:root { --accent: ...; --accent2: ...; }` |
| Neue Projekte | `index.html` → Section `#projects`, neues `<article class="project-card">` |
| E-Mail-Empfänger | `contact.php` → `$to = 'deine@email.de';` |
| Social Links | `index.html` → Footer `.footer-links` → `href="#"` ersetzen |

---

© 2025 Jasper Haas
