# React Glossar Boilerplate

React + Vite + TypeScript Grundgerüst für ein Nachschlagewerk zu React-Themen
(inhaltlich angelehnt an typische Themen einer umfassenden React-Udemy-Lernstrecke).

## Status

- Boilerplate ist eingerichtet und lauffähig.
- Route-basierte Navigation mit Detailansicht pro Thema ist aktiv (`/thema/:slug`).
- Dark Theme ist als Standard gestaltet, angelehnt an Vite-Docs-Ästhetik.
- UI-Komponenten basieren auf **Mantine** (kostenlose Component Library).
- Codebeispiele sind per Toggle zwischen JavaScript und TypeScript umschaltbar.
- Der JS/TS-Toggle sitzt global unten in der linken Navigation (via React Context).
- TypeScript-spezifische Zeilen werden im TS-Modus farblich hervorgehoben.
- **Dreispaltiges Layout**: Themen-Nav (links, 240px) → Inhalt (flex) → "Auf dieser Seite"-Nav (rechts, 200px).
- Unterthemen-Navigation scrollt smooth zu den jeweiligen Sektionen.
- Aktives Unterthema wird per `IntersectionObserver` erkannt und cyan hervorgehoben.
- Sektionen sind als fließendes Dokument mit Divider dargestellt (keine Cards).
- Jede Sektion hat ein optionales `keywords`-Feld für Schlagwort-Badges.
- Übersichtskarten sind direkt klickbar und navigieren zur Detailansicht.
- Nummerierung: Themen in der Nav (`1. 2. 3.`), Unterthemen in der Sidebar (`1.1 1.2 ...`).
- Pages sind per `React.lazy` + `Suspense` lazy geladen.
- Section-Blöcke sind per `React.memo` gememoized für bessere Render-Performance.

## Stack

- React 19
- Vite 8
- TypeScript 6
- Mantine 9 (`@mantine/core`, `@mantine/hooks`)
- React Router 7
- ESLint 9

## Projektstart

```bash
pnpm install
pnpm dev
```

Weitere Skripte:

```bash
pnpm build
pnpm preview
pnpm lint
```

## Struktur

```text
src/
  context/
    CodeLanguageContext.ts  # Globaler JS/TS-Toggle-State (React Context)
  data/
    glossaryTopics.ts       # Themen-Metadaten (Titel, Slug, Level, Status, Tags)
    topicContent.ts         # Didaktische Inhalte inkl. JS/TS-Snippets und keywords
  pages/
    OverviewPage.tsx        # Themenübersicht mit klickbaren Karten
    TopicDetailPage.tsx     # Detailansicht: fließende Sektionen, Sidebar, Memo-Blöcke
  types/
    glossary.ts             # Typdefinitionen für Themen
    topicContent.ts         # Typdefinitionen für Inhaltssektionen (inkl. keywords)
  App.tsx                   # Shell-Layout: linke Nav + Outlet + JS/TS-Toggle
  App.css                   # Ergänzende Styles (Codeblock, TS-Diff, Prose)
  index.css                 # Globale Farben, Hintergrund, Basis-Styles
  main.tsx                  # App-Setup: Mantine, Router, lazy Pages, Suspense
```

## Aktuelle Routen

- `/` Übersicht mit allen vorbereiteten Themenkarten
- `/thema/:slug` Detailansicht eines Themas

## Inhalt ergänzen

- Neue Sektionen in `src/data/topicContent.ts` unter dem passenden Slug ergänzen.
- Jede Sektion kann optional ein `keywords`-Array für Schlagwort-Chips enthalten.
- Für neue Top-Level-Themen zuerst `src/data/glossaryTopics.ts` erweitern (Nummerierung folgt automatisch).
- Bei strukturellen Änderungen die README mitpflegen.

## Readability-Entscheidungen

- Farbschema: `#1b1b1f` Hintergrund, `#d4d6db` Fließtext – angelehnt an Vite-Docs, kein hartes Weiß.
- Akzentfarbe: React-Cyan (`#4ec9e8`) für aktive Zustände, Interaktionselemente und TS-Diff.
- Semantische Badge-Farben: Schwierigkeitsgrad (Teal/Orange/Rot), Status (Grau/Gelb/Grün).
- Mantine-Transitions deaktiviert (`--mantine-transition-duration: 0ms`) für sofortiges UI-Feedback.
- Section-Seitentitel: `gray.1`, Keywords: Cyan-Outline-Badges mit `opacity: 0.75`.
- Lesefreundliche Zeilenlängen in Detailtexten (ca. 72 Zeichen via `.readable-prose`).
- `scroll-margin-top: 32px` auf Sektions-Anchors für sauberes Anchor-Scrolling.
