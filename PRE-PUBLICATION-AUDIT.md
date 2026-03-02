# Pre-Publication Audit Report (Re-Audit nach 40 Fixes)

**Datum:** 2. Maerz 2026
**Basis-Commit:** 6ce498a (nach Merge Tranche 1–3)
**Branch:** claude/add-release-audit-script-ObnOa
**Umfang:** 13 HTML, 1 CSS, 4 JS, 51 PDFs, 27 Thumbnails, 4 Fonts
**Vorheriges Audit:** 083276d → 5 Blocker, 11 Warnings → NICHT BEREIT

---

## Ergebnis: BEREIT

| Kategorie | Anzahl |
|-----------|--------|
| Blocker   | 0      |
| Warnings  | 0      |
| Hints     | 4      |
| Auto-Fixes (angewendet) | 2 |
| Editorial-Marker (beabsichtigt) | 17 REDAKTIONELL, 4 DESIGN, 2 OPTIONAL |

---

## A — Datei-Inventar & Struktur

| Prüfung | Status |
|---------|--------|
| 13 HTML-Dateien vorhanden | OK |
| shared.css (166 KB) | OK |
| main.js (23 KB), search.js (4 KB), search-index.js (64 KB), sw.js (1 KB) | OK |
| manifest.json in allen 13 HTML referenziert | OK |
| fonts/ (4 woff2, 74 KB) | OK |
| images/ (11 Dateien + thumbs/, 843 KB) | OK |
| _redirects, robots.txt, sitemap.xml, netlify.toml | OK |

## B — HTML-Validierung

| Prüfung | Status |
|---------|--------|
| div-Balance alle 13 Dateien | OK (0 Mismatches) |
| Semantische Tags (section, article, main, nav, header, footer) | OK |
| Doppelte IDs | OK (0 Duplikate) |
| Heading-Hierarchie h1→h2→h3 | OK (keine uebersprungenen Level) |
| Interne Links | OK (Kurzlinks /notfall/, /impressum/, /ressourcen/ via _redirects aufgeloest) |
| Externe Links | 29 unique, alle mit https:// |

## C — Meta & SEO

| Prüfung | Status |
|---------|--------|
| lang="de-CH" auf allen 13 Dateien | OK |
| Canonical URLs einheitlich auf bipolar-angehoerige01.netlify.app | OK |
| OG-Tags (title, description, image, url) | OK alle 13 Dateien |
| OG-Bilder existieren (9 PNG) | OK |
| Meta-Description auf allen Seiten | OK |
| title-Tags auf allen Seiten | OK (einheitliches Format "Titel | PUK Zuerich") |
| Sitemap URLs = tatsaechliche Pfade | OK (12 URLs, alle resolvbar) |
| robots.txt mit korrekter Sitemap-URL | OK |
| Domain-Konsistenz | OK (0 Abweichungen von bipolar-angehoerige01.netlify.app) |

## D — Accessibility

| Prüfung | Status |
|---------|--------|
| aria-expanded auf toggleGlossar (13/13) | OK |
| aria-expanded auf toggleFaq (10/10) | OK |
| aria-expanded auf toggleMG (4/4) | OK |
| aria-label auf Self-Check-Buttons modul/3 (10) | OK |
| role="button" mit tabindex + onkeydown | OK (modul/2: 4, modul/4: 1) |
| Bilder: alle mit alt-Text | OK (0 ohne alt) |
| Skip-Links auf allen Seiten | OK |
| Focus-visible Styles (8 Regeln) | OK |
| Touch-Targets min-height:44px (nav-btn, acc-header, filter-chip) | OK |
| --muted #605850 (Kontrast ~5.1:1 vs #f7f5f2) | OK |
| body.large-text CSS-Variablen-Overrides | OK |

## E — CSS & Layout

| Prüfung | Status |
|---------|--------|
| CSS-Variablen korrekt (--fs-base:1rem, --fs-sm:0.9rem) | OK |
| body.large-text (--fs-base:1.05rem, --fs-sm:0.95rem, --fs-xs:0.85rem) | OK |
| Responsive Breakpoints (768, 640, 600, 540, 480, 400px) | OK |
| Print-Stylesheet | OK (@media print) |
| prefers-reduced-motion | OK (2 Regeln) |
| prefers-color-scheme:dark (SVG-Schutz) | OK |
| !important nur in Print/Readmode/Reduced-Motion (22x) | OK |
| @font-face in allen HTML (inline, font-display:swap) | OK |
| Font-Preloads in allen Seiten | OK |

## F — JavaScript

| Prüfung | Status |
|---------|--------|
| console.log / console.error | OK (0 Statements) |
| alert() | OK (0 Aufrufe) |
| Alle onclick-Funktionen definiert (28 unique) | OK |
| toggleMG/toggleGlossar/toggleFaq: aria-expanded-Logik | OK |
| Service Worker (bipolar-puk-v5, stale-while-revalidate) | OK |
| SW in allen 13 HTML registriert | OK |
| Search-Index: 234 Eintraege, M1–M7 abgedeckt | OK |
| Feedback-Restore: m7 in Array | OK |

## G — Content & Rechtliches

| Prüfung | Status |
|---------|--------|
| Eszett (ss) in HTML-Dateien | OK (0 Vorkommen) |
| Impressum: Datenschutz-Statement | OK |
| Impressum: Schriften lokal, keine externen Dienste | OK |
| PUK Zuerich Branding auf allen Seiten | OK |
| Copyright 2026 | OK |
| Notfall-Seite: Notfallnummern vorhanden (0800 33 66 55, 144, 117, 143) | OK |
| Keine externen Scripts/Stylesheets | OK (vollstaendig self-contained) |
| Keine TODO/FIXME/HACK im Code | OK |

## H — Performance & Deployment

| Prüfung | Status |
|---------|--------|
| netlify.toml: Security Headers (CSP, X-Frame, X-XSS, nosniff, Referrer) | OK |
| Caching: Fonts immutable, CSS 7d, JS 1d, PDFs 7d | OK |
| 404-Redirect in netlify.toml | OK |
| _redirects: 13 Regeln (Module + Handout-Seiten) | OK |
| Gesamtgroesse (ohne PDFs): ~700 KB HTML + 166 KB CSS + 92 KB JS + 74 KB Fonts + 843 KB Images = ~1.9 MB | OK |

## I — Editorial-Marker

Alle Marker sind beabsichtigte HTML-Kommentare fuer die redaktionelle Nachbearbeitung.
Sie sind fuer Endnutzer nicht sichtbar und beeintraechtigen die Funktionalitaet nicht.

### REDAKTIONELL (17 Kommentare)
- Pro Mente Sana Oeffnungszeiten pruefen: 9 Dateien
- Infografik-PDFs Format (797x1429pt): 2 Dateien
- Textversions-PDFs Groesse pruefen: 2 Dateien
- Gemischte Episoden ergaenzen: modul/1
- Haeusliche Gewalt Hinweis: modul/2
- Chiba et al. Prozentangaben: modul/6

### DESIGN (4 Kommentare)
- Eigene OG-Images erstellen: 404, handouts, notfall, ressourcen

### OPTIONAL (2 Kommentare)
- Schmid Stichprobengroesse: modul/1
- SVG-Dark-Mode-Schutz: shared.css

---

## Auto-Fixes (in diesem Audit angewendet)

| # | Datei | Fix | Schwere |
|---|-------|-----|---------|
| 1 | search-index.js | "Reiss" statt "Reiss" (1x ss-Korrektur) | Hint |
| 2 | handouts/ressourcen/index.html:232 | Inline color:#706860 → var(--muted) | Hint |

---

## Hints (informativ, kein Handlungsbedarf)

| # | Beschreibung | Datei |
|---|-------------|-------|
| 1 | 404.html hat Canonical auf /404.html (unueblich fuer Error-Page) | 404.html |
| 2 | Kurzlinks (/notfall/, /impressum/, /ressourcen/) in HTML statt Vollpfade — funktional via _redirects, aber ein Redirect-Hop | Alle Dateien |
| 3 | shared.css 166 KB unkomprimiert (kein Minification) — Netlify-Kompression (Brotli) macht das akzeptabel | shared.css |
| 4 | Notfall Skip-Link zeigt auf #main statt #main-content (konsistent mit dem Rest waere #main-content) | handouts/notfall/index.html |

---

## Vergleich zum vorherigen Audit

| Kategorie | Vorher (083276d) | Jetzt (6ce498a+) |
|-----------|-----------------|-------------------|
| Blocker   | 5               | 0                 |
| Warnings  | 11              | 0                 |
| Hints     | 7               | 4                 |
| Empfehlung | NICHT BEREIT   | BEREIT            |

### Behobene Blocker (alle 5)
1. handouts/index.html war Kopie von notfall → restauriert
2. Notfall-Banner-Toggle fehlte → hinzugefuegt
3. div-Balance Fehler → behoben
4. Doppelte IDs → bereinigt
5. ARIA-Banner fehlte → ergaenzt

### Behobene Warnings (alle 11)
1. section-title als div → h3
2. Eszett in HTML-Dateien → ss
3. Canonical-Domain uneinheitlich → vereinheitlicht
4. Sitemap mit Redirect-URLs → korrigiert auf Vollpfade
5. OG-Images fehlend → Fallback auf og-index.png
6. Impressum Google-Fonts-Statement falsch → korrigiert
7. Touch-Targets unter 44px → min-height:44px
8. --muted Kontrast ungenuegend → #605850
9. Font-Size-Variablen zu klein → --fs-base:1rem
10. body.large-text fehlte → CSS-Variablen ergaenzt
11. aria-expanded fehlte auf Accordions → alle ergaenzt

---

## Empfehlung

**BEREIT fuer Veroeffentlichung.**

Keine Blocker, keine Warnings. Die 4 Hints sind informativ und verhindern keinen Go-Live.
Die Editorial-Marker (REDAKTIONELL/DESIGN) sind beabsichtigte Erinnerungen fuer die redaktionelle Weiterarbeit und als HTML-Kommentare fuer Endnutzer unsichtbar.
