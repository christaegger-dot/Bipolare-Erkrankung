# User-Journey-Audit

**Datum:** 2026-03-08
**Methode:** Statische Analyse der HTML-Dateien (kein Browser-Test)
**Geprüfte Dateien:** `index.html`, `handouts/notfall/index.html`, `modul/1/index.html`, `modul/3/index.html`, `modul/5/index.html`, `handouts/index.html`, `search-index.js`

---

## Journey A — Akute Krise

**Persona:** Jemand googelt panisch "Partner Manie was tun" und landet auf der Homepage.

### Klick-Pfad

| Schritt | Aktion | Klicks |
|---------|--------|--------|
| 1 | Homepage lädt | 0 |
| 2 | Situationshelfer "Akute Krise" klicken ODER Notfall-FAB klicken ODER Nav-Link "Notfall" klicken | 1 |
| 3 | Notfall-Seite: Erste Telefonnummer sichtbar | 1 (kein weiterer Klick nötig) |
| 4 | Telefonnummer antippen (tel:-Link) | 2 |

**Gesamt: 2 Klicks bis zum Anruf.**

### Prüfpunkte

**Ist der Notfall-Situationshelfer sofort sichtbar (oberes Drittel)?**
- ✅ JA. Der Situationshelfer ("Womit möchten Sie beginnen?") erscheint im Hero-Bereich der Homepage mit 4 Karten, davon "Akute Krise 🆘" als erste Option. Zusätzlich gibt es:
  - Roten "Notfall"-Link in der Hauptnavigation (Line 95)
  - Floating Action Button (FAB) 🆘 "Hilfe" — permanent sichtbar (Lines 303–306)

**Wie viele Klicks bis Telefonnummer?**
- ✅ **2 Klicks**: Homepage → Notfall-Seite → Telefonnummer antippen.
- Die Notfall-Seite zeigt 6 Nummern direkt nach dem Titel, vor den Detail-Guides.

**Was wenn man direkt auf M1 landet?**
- ✅ FAB "Hilfe" (🆘) ist auf jeder Modulseite vorhanden (M1: Lines 1043–1046).
- ✅ "Notfall"-Link (rot) in der Hauptnavigation auf jeder Seite.
- **Ergebnis:** Notfall-Zugang von jeder Seite in 1 Klick erreichbar.

**Notfall-Seite: Erste sichtbare Info eine Telefonnummer?**
- ⚠️ TEILWEISE. Die erste sichtbare Info ist der Titel "Notfall — Was tun Sie jetzt?" und ein kurzer Einleitungstext. Die 6 Telefonnummern folgen direkt danach. Auf einem mobilen Gerät könnte minimales Scrollen nötig sein.

### Potenzielle Absprungstellen

1. **Einleitungstext auf Notfall-Seite:** In Panik will niemand Text lesen. Die Nummern sollten idealerweise VOR dem Erklärtext stehen.
2. **Situationshelfer "Akute Krise" verlinkt auf `/notfall/`:** Korrekt, aber der Button könnte auf Mobilgeräten unter dem Fold sein, wenn die Erkennungskarten darüber viel Platz einnehmen.

### Verbesserungsvorschläge

| # | Problem | Vorschlag |
|---|---------|-----------|
| A1 | Notfall-Seite: Telefonnummern erst nach Einleitungstext | Erste Nummer (0800 33 66 55) direkt unter den Titel setzen, ÜBER den Erklärtext |
| A2 | Auf Mobilgeräten könnte der Situationshelfer unter dem Fold liegen | FAB ist der Rettungsanker — funktioniert bereits gut |

---

## Journey B — Frische Diagnose

**Persona:** Partner wurde gerade diagnostiziert. Braucht Orientierung.

### Klick-Pfad

| Schritt | Aktion | Klicks |
|---------|--------|--------|
| 1 | Homepage lädt | 0 |
| 2 | Situationshelfer "Gerade erfahren 🔍" klicken | 1 |
| 3 | M1 lädt | 1 |
| 4 | Lesen, interagieren | — |
| 5 | "Weiter zu Modul 2 →" klicken | 2 |

**Gesamt: 1 Klick bis M1, 2 Klicks bis M2.**

### Prüfpunkte

**Ist der Pfad Homepage → "Gerade erfahren" → M1 offensichtlich?**
- ✅ JA. Der Situationshelfer zeigt "Gerade erfahren — Die Diagnose verstehen, Orientierung finden" mit direktem Link zu `/modul/1/`.

**Ist M1 für Laien verständlich?**
- ✅ JA. Die ersten Inhalte sind:
  1. **Vignette** (anonymer Partner-Bericht) — emotionaler Einstieg, keine Fachsprache
  2. **Lernziele** — klar formuliert, was man nach dem Lesen wissen wird
  3. **Inhaltsverzeichnis** — Orientierung
  4. **30-Sekunden-Zusammenfassung** — sofortiger Überblick
- Fachbegriffe werden inline erklärt: "Hypomanie" (Line 196), "Euthymie" (Line 240), "Lithium" (Line 506), "Rapid Cycling" (Line 454) — jeweils mit Tooltip-Erklärung.

**Gibt es einen "Weiter zu M2" Link?**
- ✅ JA. Zweifach vorhanden:
  - Primärer CTA: "Weiter zu Modul 2 →" mit Vorschau-Text (Line 940)
  - Prev/Next-Navigation am Seitenende (Lines 991–995)

**Wie lang ist M1?**
- ⚠️ Ca. **5.600 Wörter**, geschätzte Lesezeit **12 Minuten** (wird angezeigt).
- Für jemanden in emotionalem Stress ist das lang. ABER: Die 30-Sekunden-Zusammenfassung am Anfang gibt sofortige Orientierung, und das Inhaltsverzeichnis erlaubt gezieltes Springen.

### Potenzielle Absprungstellen

1. **Länge von M1:** 5.600 Wörter können überwältigend wirken, besonders bei emotionalem Stress.
2. **Interaktive Elemente mitten im Text:** Der Pol-Toggle (Manie/Stabil/Depression) ist informativ, könnte aber bei Touchscreen-Nutzung Verwirrung stiften wenn unklar ist, dass man Tabs wechseln muss.

### Verbesserungsvorschläge

| # | Problem | Vorschlag |
|---|---------|-----------|
| B1 | 5.600 Wörter sind für Stress-Situation lang | Die 30-Sek-Zusammenfassung ist bereits gut. Optional: "Kurzversion"-Toggle, der nur die Kernsätze zeigt |
| B2 | Kein visueller Fortschrittsindikator INNERHALB des Moduls | Ein Scroll-Fortschrittsbalken existiert bereits im Header — funktioniert |

---

## Journey C — Jahrelange Erschöpfung

**Persona:** Angehörige seit 8 Jahren, am Ende der Kräfte.

### Klick-Pfad

| Schritt | Aktion | Klicks |
|---------|--------|--------|
| 1 | Homepage lädt | 0 |
| 2 | Situationshelfer "Erschöpft 😔" klicken | 1 |
| 3 | M3 lädt | 1 |
| 4 | Self-Check durchführen | 1 (+ Interaktion) |
| 5 | "Weiter zu Modul 4 →" klicken | 2 |

**Gesamt: 1 Klick bis M3.**

### Prüfpunkte

**Pfad Homepage → "Erschöpft" → M3?**
- ✅ FUNKTIONIERT. Situationshelfer "Erschöpft — Eigene Belastung erkennen, Kraft tanken" verlinkt direkt auf `/modul/3/`.

**Wird die Person sofort validiert?**
- ✅ JA, HERVORRAGEND. Der Einstieg ist:
  1. Vignette: *"Ich sage allen, es geht mir gut. Aber nachts liege ich wach und frage mich, wie lange ich das noch schaffe. Ich bin so müde — nicht körperlich, sondern in meiner Seele."* (Anonyme Partnerin, 38)
  2. Danach Normalisierung: *"Das ist kein Zeichen von Schwäche, sondern eine natürliche Reaktion auf eine unberechenbare Situation."*
- Keine Theorie vor der Validierung.

**Gibt es einen Self-Check?**
- ✅ JA. "Wo stehen Sie gerade?" — 5 Ja/Nein-Fragen (Lines 189–225):
  1. Ängstliches Denken an das, was als Nächstes schiefgehen könnte
  2. Eigene Bedürfnisse vernachlässigen
  3. Freunde/Hobbys aufgeben
  4. Sich allein fühlen mit der Situation
  5. Sich fragen, wie lange man das noch schafft
- Dynamisches Feedback nach Beantwortung.

**Verweist M3 auf konkrete Hilfsangebote?**
- ✅ JA:
  - Fachstelle Angehörigenarbeit PUK: **058 384 38 00** (Footer + Line 510)
  - VASK (Selbsthilfe-Vereinigung)
  - bipolar-forum.de (Online-Forum)
  - kinderseele.ch (für Kinder)
  - Notfall-FAB permanent sichtbar

### Potenzielle Absprungstellen

1. **Self-Check erst nach Lernzielen und Inhaltsverzeichnis:** Jemand am Ende der Kräfte möchte sich vielleicht sofort "gesehen" fühlen, nicht erst ein Inhaltsverzeichnis durchlesen.
2. **Hilfsangebote-Nummern erst im unteren Bereich:** Die Fachstellen-Nummer erscheint erst im Footer und in einem Abschnitt über Kinder — nicht prominent im Haupttext.

### Verbesserungsvorschläge

| # | Problem | Vorschlag |
|---|---------|-----------|
| C1 | Hilfsangebote-Nummern nicht prominent im Haupttext | Einen "Sofort-Hilfe"-Kasten nach dem Self-Check einfügen: "Sie erkennen sich wieder? Die Fachstelle Angehörigenarbeit PUK ist für Sie da: 058 384 38 00" |
| C2 | Self-Check steht nach TOC/Lernzielen | Für erschöpfte Personen wäre der Self-Check als ERSTES interaktives Element ideal — evtl. vor oder direkt nach der Vignette |

---

## Journey D — Konkretes Tool suchen (Krisenplan)

**Persona:** Person will einen Krisenplan erstellen.

### Pfad 1: Suche

| Schritt | Aktion | Klicks |
|---------|--------|--------|
| 1 | Suche öffnen (Ctrl+K oder Suchicon) | 1 |
| 2 | "Krisenplan" eintippen | — |
| 3 | Suchergebnis anklicken | 2 |
| 4 | PDF-Download klicken | 3 |

- ✅ **Suche funktioniert:** `search-index.js` enthält 4 Einträge für "Krisenplan".
- ✅ Suchfeld zeigt als Hinweis explizit: *"z.B. «Krisenplan», «Trennung» oder «Suizid»"*

### Pfad 2: Homepage → M5 → Krisenplan → PDF

| Schritt | Aktion | Klicks |
|---------|--------|--------|
| 1 | Homepage: "Modul 5: Handeln" klicken | 1 |
| 2 | Quick-Jump-Link "→ Krisenplan" klicken (Line 194) | 2 |
| 3 | Krisenplan-Accordion öffnet sich, PDF-Link klicken | 3 |

- ✅ **3 Klicks bis zum PDF.**
- ✅ Quick-Jump-Link im Inhaltsverzeichnis von M5 vorhanden.
- ✅ PDF-Datei existiert: `/downloads/krisenplan-vorlage-bipolare-stoerung-puk-zuerich.pdf` (5 KB)

### Pfad 3: Homepage → Handouts → Krisenplan

| Schritt | Aktion | Klicks |
|---------|--------|--------|
| 1 | Homepage: Quick-Link "Alle Handouts zum Download" klicken | 1 |
| 2 | Krisenplan-Vorlage ist erstes Item im Bereich "Vorlagen & Hilfsmittel" — klicken | 2 |

- ✅ **2 Klicks bis zum PDF.**
- ✅ Krisenplan-Vorlage steht als erstes Item prominent in der Handout-Übersicht.

### PDF-Link-Prüfung

- ✅ `/downloads/krisenplan-vorlage-bipolare-stoerung-puk-zuerich.pdf` ist korrekt verlinkt in:
  - M5 (Line 339)
  - Handouts-Seite (Line 92)
- ✅ Datei existiert im Dateisystem (5.003 Bytes)
- ℹ️ Zusätzlich existiert ein separates Handout `c1_krisenplan.pdf` unter `/handouts/` — dies ist ein Begleit-Handout, nicht die Vorlage.

### Potenzielle Absprungstellen

1. **M5 Krisenplan ist in einem Accordion versteckt:** Die Sektion ist zugeklappt (details/summary). Jemand, der schnell scrollt, könnte den Inhalt übersehen.
2. **Zwei verschiedene Krisenplan-Dokumente:** Die Vorlage (`krisenplan-vorlage-...pdf`) und das Handout (`c1_krisenplan.pdf`) könnten verwirren.

### Verbesserungsvorschläge

| # | Problem | Vorschlag |
|---|---------|-----------|
| D1 | Krisenplan-Accordion ist initial zugeklappt | Quick-Jump-Link "→ Krisenplan" könnte via JS das Accordion automatisch öffnen (anchor-basiertes Auto-Open) |
| D2 | Zwei verschiedene Krisenplan-PDFs | Auf der Handouts-Seite beide klar unterscheiden: "Vorlage zum Ausfüllen" vs. "Anleitung zum Erstellen" |

---

## Zusammenfassung

### Stärken der Website

| Bereich | Bewertung |
|---------|-----------|
| Notfall-Erreichbarkeit | ✅ Exzellent — FAB + Nav + Situationshelfer auf jeder Seite |
| Emotionaler Einstieg | ✅ Exzellent — Vignetten und Validierung vor Theorie |
| Navigation zwischen Modulen | ✅ Gut — Prev/Next-Links + Situationshelfer |
| Suchfunktion | ✅ Gut — Krisenplan und andere Begriffe indexiert |
| Handout-Zugang | ✅ Gut — Dedizierte Seite + Links in Modulen |
| Barrierefreiheit | ✅ Gut — Skip-Links, ARIA-Labels, tel:-Links |

### Priorisierte Verbesserungen

| Prio | ID | Beschreibung | Aufwand |
|------|----|-------------|---------|
| 🔴 | A1 | Notfall-Seite: Erste Telefonnummer VOR Erklärtext | Klein |
| 🟡 | C1 | M3: Fachstellen-Nummer prominent nach Self-Check | Klein |
| 🟡 | D1 | M5: Krisenplan-Accordion via Anchor automatisch öffnen | Mittel |
| 🟢 | C2 | M3: Self-Check näher an Vignette rücken | Klein |
| 🟢 | B1 | M1: Optional Kurzversion-Toggle | Gross |
| 🟢 | D2 | Handouts: Krisenplan-Dokumente klar unterscheiden | Klein |
| 🟢 | A2 | Situationshelfer auf Mobil prüfen (Fold-Position) | Test nötig |

### Klick-Effizienz-Übersicht

| Journey | Ziel | Klicks | Bewertung |
|---------|------|--------|-----------|
| A: Akute Krise | Telefonnummer anrufen | 2 | ✅ Optimal |
| B: Frische Diagnose | M1 lesen | 1 | ✅ Optimal |
| C: Erschöpfung | M3 + Self-Check | 1–2 | ✅ Gut |
| D: Krisenplan PDF | Download | 2–3 | ✅ Gut |
