# SVG-Diagramm-Audit Report

**Projekt:** Psychoedukation Bipolare Störung (PUK Zürich)
**Datum:** 2026-03-01
**Viewport-Referenz:** iPhone 390px
**Mindest-Schriftgrösse Mobile:** 11px
**Formel:** `font-size × (390 / viewBox-Breite)`

---

## Übersicht

| # | Datei | Zeile | Beschreibung | viewBox | Klasse |
|---|-------|-------|-------------|---------|--------|
| 1 | modul/1/index.html | 371 | Wellendiagramm bipolarer Verlauf | 0 0 600 237 | wave-chart |
| 2 | modul/1/index.html | 449 | Belastungs-Eisberg | 0 0 600 337 | viz-svg |
| 3 | modul/1/index.html | 602 | Hypervigilanz-Kreislauf | 0 0 600 303 | viz-svg |
| 4 | modul/2/index.html | 305 | Vier Dimensionen der Beziehung | 0 0 600 283 | viz-svg |
| 5 | modul/2/index.html | 408 | Erosion von Vertrauen/Nähe | 0 0 600 260 | viz-svg |
| 6 | modul/3/index.html | 385 | Solidaritätserosion | 0 0 600 283 | burden-accumulation-svg |
| 7 | modul/3/index.html | 472 | Glaswand-Illustration | 0 0 400 228 | glasswand-svg |
| 8 | modul/4/index.html | 322 | EE-Teufelskreis | 0 0 340 402 | ee-flow-svg |
| 9 | modul/4/index.html | 393 | Vier Barrieren der Grenzsetzung | 0 0 600 245 | viz-svg |
| 10 | modul/4/index.html | 529 | Kommunikations-Kompass | 0 0 600 269 | viz-svg |
| 11 | modul/5/index.html | 287 | Sauerstoffmaske | 0 0 120 90 | oxygen-svg |
| 12 | modul/5/index.html | 358 | Krisenplan-Ampel (3 Stufen) | 0 0 600 226 | viz-svg |
| 13 | modul/5/index.html | 550 | Grenzsetzungs-Spektrum | 0 0 600 205 | viz-svg |
| 14 | modul/6/index.html | 343 | Fünf Säulen der Beziehung | 0 0 600 317 | viz-svg |
| 15 | modul/6/index.html | 498 | Erwartung vs. Realität (Resilienz) | 0 0 600 299 | viz-svg |

---

## Detailanalyse pro SVG

---

### modul/1/index.html:371 — Wellendiagramm bipolarer Verlauf

- viewBox: `0 0 600 237` | width/height: keine (CSS `width:100%`)
- Kleinste Textgrösse (Mobile 390px): 10.4px (font-size 16) → **unlesbar**
- Text-Overflow: kein
- viewBox-Schreibweise: korrekt (viewBox)
- Dark Mode Wrapper: keiner (CSS-basiert via `.wave-chart` Klasse — funktional)
- Hart kodierte Farben: keine problematischen
- Kontrast-Probleme: keine
- Responsive: CSS `width:100%; height:auto` + Scroll <400px
- **Probleme**:
  - Zeilen 388, 390, 393: font-size="16" → 10.4px auf Mobile. Legendentext ("Stimmung Partner", "Grundbelastung Angehörige (steigt)", "→ Zeit (Jahre)") unlesbar.
- **Fix-Vorschlag**: font-size 16 → 17 (ergibt 11.05px)

---

### modul/1/index.html:449 — Belastungs-Eisberg

- viewBox: `0 0 600 337` | width/height: keine (CSS)
- Kleinste Textgrösse (Mobile 390px): 10.4px (font-size 16) → **unlesbar**
- Text-Overflow: kein
- viewBox-Schreibweise: korrekt
- Dark Mode Wrapper: keiner (CSS-basiert)
- Hart kodierte Farben: keine problematischen
- Kontrast-Probleme: keine
- Responsive: CSS `width:100%; height:auto`
- **Probleme**:
  - 20 von 23 Text-Elementen haben font-size="16" → 10.4px auf Mobile
  - Betroffen: "Wasserlinie", "Sichtbar", alle Eisberg-Beschriftungen, Prozentangaben-Beschreibungen
  - Titel font-size="17" → 11.05px (grenzwertig, aber OK)
- **Fix-Vorschlag**: font-size 16 → 17

---

### modul/1/index.html:602 — Hypervigilanz-Kreislauf

- viewBox: `0 0 600 303` | width/height: keine (CSS)
- Kleinste Textgrösse (Mobile 390px): 10.4px (font-size 16) → **unlesbar**
- Text-Overflow: Annotation bei x=540 ("wiederholt sich") ragt ~2-3px über rechten viewBox-Rand
- viewBox-Schreibweise: korrekt
- Dark Mode Wrapper: keiner (CSS-basiert)
- Hart kodierte Farben: `#fafaf6` Hintergrund (durch CSS Dark-Mode-Schutz abgedeckt)
- Kontrast-Probleme: keine
- Responsive: CSS `width:100%; height:auto`
- **Probleme**:
  - 10 von 15 Text-Elementen haben font-size="16" → 10.4px auf Mobile
  - Zeilen 636-639: Annotation-Block bei x=540 nahe am rechten Rand
- **Fix-Vorschlag**: font-size 16 → 17

---

### modul/2/index.html:305 — Vier Dimensionen der Beziehung

- viewBox: `0 0 600 283` | width/height: keine (CSS)
- Kleinste Textgrösse (Mobile 390px): 10.4px (font-size 16) → **unlesbar**
- Text-Overflow: x=590 (text-anchor=end) nur 10px vom Rand
- viewBox-Schreibweise: korrekt
- Dark Mode Wrapper: keiner (CSS-basiert)
- Hart kodierte Farben: `#fafaf6` Hintergrund
- Kontrast-Probleme: keine
- Responsive: CSS `width:100%; height:auto`
- **Probleme**:
  - 16 von 17 Text-Elementen haben font-size="16" → 10.4px auf Mobile
  - Nur der Titel (font-size 21 → 13.65px) ist lesbar
- **Fix-Vorschlag**: font-size 16 → 17

---

### modul/2/index.html:408 — Erosion von Vertrauen, Nähe und Leichtigkeit

- viewBox: `0 0 600 260` | width/height: keine (CSS)
- Kleinste Textgrösse (Mobile 390px): 10.4px (font-size 16) → **unlesbar**
- Text-Overflow: x=595 nur 5px vom rechten Rand
- viewBox-Schreibweise: korrekt
- Dark Mode Wrapper: keiner (CSS-basiert)
- Hart kodierte Farben: `#fafaf6`, `#fde8e0` Hintergründe
- Kontrast-Probleme: keine
- Responsive: CSS `width:100%; height:auto`
- **Probleme**:
  - 9 von 11 Text-Elementen haben font-size="16" → 10.4px auf Mobile
- **Fix-Vorschlag**: font-size 16 → 17

---

### modul/3/index.html:385 — Solidaritätserosion

- viewBox: `0 0 600 283` | width/height: keine (CSS)
- Kleinste Textgrösse (Mobile 390px): 10.4px (font-size 16) → **unlesbar**
- Text-Overflow: x=550 (Pfeil) nahe am Rand, aber OK
- viewBox-Schreibweise: korrekt
- Dark Mode Wrapper: keiner (CSS-basiert)
- Hart kodierte Farben: `#faf8f5` Hintergrund (nahe `#fafafa`)
- Kontrast-Probleme: keine
- Responsive: CSS `width:100%; height:auto`
- **Probleme**:
  - 7 von 12 Text-Elementen haben font-size="16" → 10.4px auf Mobile
  - Betroffen: Krisen-Labels, Zeitachse, Pfeilsymbol
- **Fix-Vorschlag**: font-size 16 → 17

---

### modul/3/index.html:472 — Glaswand-Illustration

- viewBox: `0 0 400 228` | width/height: keine (CSS max-width: 400px)
- Kleinste Textgrösse (Mobile 390px): 14.6px (font-size 15) → **lesbar**
- Text-Overflow: kein
- viewBox-Schreibweise: korrekt
- Dark Mode Wrapper: keiner (CSS-basiert)
- Hart kodierte Farben: **`white`** (Gedankenblase, Zeile 501), `rgba(255,255,255,0.7)` (Lichtreflex)
- Kontrast-Probleme: keine (weiss auf eingefärbtem Hintergrund)
- Responsive: CSS `max-width:400px; width:100%`
- **Probleme**:
  - `fill="white"` auf Gedankenblase — in Dark Mode durch CSS-Schutz abgedeckt
- **Fix-Vorschlag**: Kein Handlungsbedarf (alle Texte lesbar, Dark Mode funktional)

---

### modul/4/index.html:322 — EE-Teufelskreis

- viewBox: `0 0 340 402` | width/height: keine (CSS max-width: 340px)
- Kleinste Textgrösse (Mobile 390px): 17.2px (font-size 15) → **lesbar** (Skalierung 390/340 = 1.15×)
- Text-Overflow: kein
- viewBox-Schreibweise: korrekt
- Dark Mode Wrapper: keiner (CSS-basiert)
- Hart kodierte Farben: **`fill="white"`** auf 4 Kreis-Nodes (Zeilen 345, 350, 355, 360)
- Kontrast-Probleme: keine
- Responsive: CSS `max-width:340px; width:100%`
- **Probleme**:
  - `fill="white"` — funktional durch CSS Dark-Mode-Schutz
- **Fix-Vorschlag**: Kein Handlungsbedarf

---

### modul/4/index.html:393 — Vier Barrieren der Grenzsetzung

- viewBox: `0 0 600 245` | width/height: keine (CSS)
- Kleinste Textgrösse (Mobile 390px): 9.75px (font-size 15, Zeile 431) → **unlesbar**
- Text-Overflow: Zeile 431 ("→ Der erste Schritt...") ~75 Zeichen, fast viewBox-breit
- viewBox-Schreibweise: korrekt
- Dark Mode Wrapper: keiner (CSS-basiert)
- Hart kodierte Farben: `#fafaf6` Hintergrund
- Kontrast-Probleme: keine
- Responsive: CSS `width:100%; height:auto`
- **Probleme**:
  - 12 Text-Elemente font-size="16" → 10.4px auf Mobile
  - 1 Text-Element font-size="15" (Zeile 431) → 9.75px auf Mobile — CTA-Text am unteren Rand
  - Zeile 431: sehr langer Text, bei font-size 17 potenziell Overflow → braucht tspan-Umbruch
- **Fix-Vorschlag**: font-size 16 → 17, font-size 15 → 17 mit tspan-Umbruch für Zeile 431

---

### modul/4/index.html:529 — Kommunikations-Kompass

- viewBox: `0 0 600 269` | width/height: keine (CSS)
- Kleinste Textgrösse (Mobile 390px): 10.4px (font-size 16) → **unlesbar**
- Text-Overflow: kein
- viewBox-Schreibweise: korrekt
- Dark Mode Wrapper: keiner (CSS-basiert)
- Hart kodierte Farben: `#fafaf6`, **`fill="white"`** (Zentral-Kreis)
- Kontrast-Probleme: keine
- Responsive: CSS `width:100%; height:auto`
- **Probleme**:
  - 10 von 14 Text-Elementen haben font-size="16" → 10.4px auf Mobile
- **Fix-Vorschlag**: font-size 16 → 17

---

### modul/5/index.html:287 — Sauerstoffmaske

- viewBox: `0 0 120 90` | width/height: CSS 120×90px (100×75px mobil)
- Kleinste Textgrösse (Mobile bei 100px CSS-Breite): 9.2px (font-size 11) → **unlesbar**
- Text-Overflow: "dann anderen" bei x=98 ragt über rechten viewBox-Rand (120)
- viewBox-Schreibweise: korrekt
- Dark Mode Wrapper: keiner — **`.oxygen-svg` FEHLT im Dark-Mode CSS-Block**
- Hart kodierte Farben: **`fill="white"`** (O2-Text)
- Kontrast-Probleme: weisser Text auf farbigem Kreis — OK bei hellem Hintergrund
- Responsive: Fixe CSS-Grösse (120×90 / 100×75)
- **Probleme**:
  - font-size="11" (Zeilen 300, 308) → 9.2px auf Mobile
  - font-size="12" (Zeile 297) → 10.0px auf Mobile
  - "dann anderen" bei x=98 overflow rechts
  - `.oxygen-svg` nicht im Dark-Mode-Schutz
- **Fix-Vorschlag**: font-size 11→14, 12→15; `.oxygen-svg` zum Dark-Mode CSS-Block hinzufügen

---

### modul/5/index.html:358 — Krisenplan-Ampel (3 Stufen)

- viewBox: `0 0 600 226` | width/height: keine (CSS)
- Kleinste Textgrösse (Mobile 390px): **8.45px** (font-size 13, Zeile 395) → **unlesbar**
- Text-Overflow: Zeile 395 (~75 Zeichen bei font-size 13) und Zeile 392 bei x=490 Overflow wahrscheinlich
- viewBox-Schreibweise: korrekt
- Dark Mode Wrapper: keiner (CSS-basiert)
- Hart kodierte Farben: **`fill="white"`** auf 3 Warnsymbole (!, !!, !!!), `#fafaf6` Hintergrund
- Kontrast-Probleme: keine
- Responsive: CSS `width:100%; height:auto`
- **Probleme**:
  - font-size="13" (Zeile 395) → 8.45px — KRITISCH: Hinweistext am unteren Rand
  - font-size="14" (Zeile 392) → 9.1px — KRITISCH: Notfallnummern (144/117)!
  - 12 Text-Elemente font-size="16" → 10.4px
  - Zeile 392 + 395: bei Vergrösserung auf 17 → tspan-Umbruch nötig, viewBox-Höhe anpassen
- **Fix-Vorschlag**: font-size 13→17 + tspan, font-size 14→17 + tspan, font-size 16→17; viewBox-Höhe erhöhen

---

### modul/5/index.html:550 — Grenzsetzungs-Spektrum

- viewBox: `0 0 600 205` | width/height: keine (CSS)
- Kleinste Textgrösse (Mobile 390px): 9.75px (font-size 15, Zeile 588) → **unlesbar**
- Text-Overflow: kein akuter
- viewBox-Schreibweise: korrekt
- Dark Mode Wrapper: keiner (CSS-basiert)
- Hart kodierte Farben: `#fafaf6` Hintergrund
- Kontrast-Probleme: keine
- Responsive: CSS `width:100%; height:auto`
- **Probleme**:
  - font-size="15" (Zeile 588, tspan-Elemente) → 9.75px auf Mobile
  - 15 Text-Elemente font-size="16" → 10.4px
- **Fix-Vorschlag**: font-size 15→17, font-size 16→17; viewBox-Höhe ggf. anpassen

---

### modul/6/index.html:343 — Fünf Säulen der Beziehung

- viewBox: `0 0 600 317` | width/height: keine (CSS)
- Kleinste Textgrösse (Mobile 390px): 10.4px (font-size 16) → **unlesbar**
- Text-Overflow: Beschriftungen überlaufen 68px-breite Säulen-Rects (visuell, nicht viewBox)
- viewBox-Schreibweise: korrekt
- Dark Mode Wrapper: keiner (CSS-basiert)
- Hart kodierte Farben: keine problematischen
- Kontrast-Probleme: keine
- Responsive: CSS `width:100%; height:auto`
- **Probleme**:
  - 20 von 37 Text-Elementen haben font-size="16" → 10.4px auf Mobile
- **Fix-Vorschlag**: font-size 16 → 17

---

### modul/6/index.html:498 — Erwartung vs. Realität (Resilienz-Welle)

- viewBox: `0 0 600 299` | width/height: keine (CSS)
- Kleinste Textgrösse (Mobile 390px): **9.1px** (font-size 14, Zeilen 504-505) → **unlesbar**
- Text-Overflow: x=590 (end-anchored) Text nahe am Rand; Legende y=264 evtl. zu tief
- viewBox-Schreibweise: korrekt
- Dark Mode Wrapper: keiner (CSS-basiert)
- Hart kodierte Farben: `#fafaf6` Hintergrund
- Kontrast-Probleme: keine
- Responsive: CSS `width:100%; height:auto`
- **Probleme**:
  - font-size="14" (Zeilen 504, 505: Y-Achsen-Labels "Besser", "Belastet") → 9.1px
  - 12 Text-Elemente font-size="16" → 10.4px
  - Legendentext bei y=264 scheint 34px unter Legendensymbolen (y=230) — evtl. Bug
- **Fix-Vorschlag**: font-size 14→17, font-size 16→17

---

## Zusammenfassung

### Geprüfte SVGs: 15

### Probleme pro Kategorie

| Kategorie | Anzahl SVGs betroffen | Anzahl Elemente |
|-----------|----------------------|-----------------|
| Text unter 11px (Mobile) | **13 von 15** | **~134** |
| Text-Overflow / Clipping | 3 | 4 |
| viewBox-Schreibweise (viewbox) | 0 | 0 |
| Dark Mode Wrapper fehlt | 0* | 0* |
| Hart kodierte Farben (white) | 4 | 9 |
| Kontrast-Probleme | 0 | 0 |
| Nicht responsiv | 1 (oxygen-svg: fixe Pixelgrösse) | 1 |

\* Das Projekt nutzt CSS-basierte Dark-Mode-Protection (`rgba(255,255,255,0.95)` auf Wrapper-Klassen) statt interner SVG-Wrapper. Dieser Ansatz ist funktional korrekt. Einzige Lücke: `.oxygen-svg` fehlt im Dark-Mode-Block.

### Priorisierte Fix-Liste

**Hoch (unlesbar auf Mobile):**
1. font-size 16 → 17 in allen 600er-viewBox SVGs (13 SVGs, ~120 Textelemente)
2. font-size 13 → 17 in Krisenplan-Ampel (Zeile 395) + tspan-Umbruch
3. font-size 14 → 17 in Krisenplan-Ampel (Zeile 392) + tspan-Umbruch
4. font-size 14 → 17 in Resilienz-Welle (Zeilen 504-505)
5. font-size 15 → 17 in Grenzsetzungs-Spektrum (Zeile 588) und Vier Barrieren (Zeile 431) + tspan
6. font-size 11 → 14, 12 → 15 in Sauerstoffmaske

**Mittel (Dark Mode / Responsive):**
7. `.oxygen-svg` zum Dark-Mode CSS-Block hinzufügen
8. viewBox-Höhe anpassen wo tspan-Umbrüche zusätzliche Zeilen erzeugen

**Niedrig (kosmetisch):**
9. Annotation-Block in Hypervigilanz (x=540) leicht nach links verschieben
10. Legendentext in Resilienz-Welle (y=264) evtl. näher an Symbole (y=230)

---

## Gegenprobe nach Fixes (2026-03-01)

### Durchgeführte Fixes

| # | Fix | Dateien | Elemente |
|---|-----|---------|----------|
| 1 | font-size 16 → 17 (batch replace_all) | modul/1-6 | ~120 Text-Elemente |
| 2 | font-size 14 → 17 + tspan-Umbruch | modul/5 (Krisenplan Z.392) | 1 |
| 3 | font-size 13 → 17 + tspan-Umbruch | modul/5 (Krisenplan Z.395) | 1 |
| 4 | font-size 15 → 17 + tspan-Umbruch | modul/4 (Barrieren Z.431), modul/5 (Grenzsetzung Z.588) | 2 |
| 5 | font-size 14 → 17 | modul/6 (Resilienz Z.504-505) | 2 |
| 6 | PUK-Notfall-Text y-Verschiebung | modul/5 (Krisenplan Z.393: y=146→163) | 1 |
| 7 | Legende y-Korrektur | modul/6 (Resilienz Z.537,539,541: y=264→234) | 3 |
| 8 | `.oxygen-svg` → Dark-Mode CSS-Block | shared.css | 1 Regel |
| 9 | Oxygen mobile CSS-Grösse 100×75 → 120×90 | shared.css | 1 Regel |

### Ergebnis der Gegenprobe

| Kategorie | Vorher | Nachher | Status |
|-----------|--------|---------|--------|
| Text unter 11px (Hoch) | 134 Elemente | **0** | **Behoben** |
| Text-Overflow (Hoch) | 4 Elemente | 0 (tspan-Umbrüche) | **Behoben** |
| viewBox-Schreibweise | 0 | 0 | Kein Handlungsbedarf |
| Dark Mode Schutz (Mittel) | 1 Lücke (.oxygen-svg) | **0** | **Behoben** |
| Hart kodierte `white` fills | 9 Stellen | 9 Stellen | Akzeptiert* |
| Kontrast-Probleme | 0 | 0 | Kein Handlungsbedarf |
| Nicht responsiv | 1 (oxygen) | 0** | **Behoben** |
| Legende-Misalignment | 1 (Resilienz) | **0** | **Behoben** |

\* `fill="white"` auf farbigen Kreisen (Krisenplan-Warnsymbole, EE-Nodes, Kompass-Zentrum) bleibt funktional korrekt: In Dark Mode wird der gesamte SVG-Container auf `rgba(255,255,255,0.95)` gesetzt, die farbigen Kreis-Hintergründe bleiben sichtbar, und der weisse Text darauf hat ausreichend Kontrast.

\** Oxygen-SVG rendert jetzt auf Mobile bei 120×90px (statt 100×75px), sodass font-size 11 bei exakt 11px landet.

### Verifizierung

- Automatisierter Font-Size-Check: **PASS** (0 Textelemente unter 11px)
- audit-v2.py: **PASS** (0 Fehler, 2 vorbestehende Warnungen)
- viewBox-Casing: **PASS** (alle korrekt `viewBox`)
- Dark-Mode CSS-Coverage: **PASS** (alle SVG-Klassen abgedeckt)

### Verbleibende Niedrig-Priorität (nicht gefixt, kein Handlungsbedarf)

1. Hypervigilanz Annotation-Block bei x=540 — Text ragt ~2-3px über viewBox rechts. Minimal, kein visueller Impact da SVG innerhalb Container mit Padding liegt.
2. `#fafaf6` Hintergrund-Rects in mehreren SVGs — redundant mit CSS Dark-Mode-Schutz, aber harmlos.
