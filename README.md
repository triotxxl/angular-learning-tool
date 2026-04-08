# React Glossar Boilerplate

React + Vite + TypeScript Grundgeruest fuer ein Nachschlagewerk zu React-Themen
(inhaltlich angelehnt an typische Themen einer umfassenden React-Udemy-Lernstrecke).

## Status

- Boilerplate ist eingerichtet und lauffaehig.
- Beispiel-Startseite mit Topic-Karten ist vorhanden.
- Linke Themen-Navigation (Desktop sticky) ist integriert.
- Dark Theme ist als Standard gestaltet.
- Inhalte sind aktuell Platzhalter und koennen Schritt fuer Schritt ersetzt/erweitert werden.

## Stack

- React 19
- Vite 8
- TypeScript 6
- ESLint 9 (Vite Standard-Setup)

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
  components/
    TopicCard.tsx          # Wiederverwendbare Themenkarte
  data/
    glossaryTopics.ts      # Platzhalter-Daten fuer Themen
  types/
    glossary.ts            # Zentrale Typdefinitionen
  App.tsx                  # App-Komposition (Hero + Topic-Grid)
  App.css                  # Komponentennahe Styles
  index.css                # Globale Styles + Variablen
  main.tsx                 # React Entry Point
```

## Aktuelle Architekturentscheidungen

- Daten sind bewusst lokal in TypeScript-Dateien gehalten, damit spaeter problemlos
  ein API-Layer oder Markdown-/JSON-Import eingefuehrt werden kann.
- Das UI ist absichtlich einfach und erweiterbar gehalten, aber bereits responsive.
- Typen liegen zentral in `src/types`, damit spaetere Features konsistent bleiben.

## Guide Fuer Den Naechsten Agent

Ziel in den naechsten Schritten ist der schrittweise Ausbau vom Boilerplate zum
vollstaendigen React-Nachschlagewerk. Empfohlene Reihenfolge:

1. Routing aufsetzen (z. B. React Router) mit Uebersichtsseite + Detailseiten pro Thema.
2. Datenmodell erweitern (z. B. Kapitel, Lernziele, Codebeispiele, weiterfuehrende Links).
3. Inhaltsquelle festlegen:
   - kurz: weiter TypeScript-Daten
   - mittel: Markdown-Dateien pro Thema
   - spaeter: CMS/API
4. Basis-Navigation und Suchfunktion vorbereiten (Client-seitiger Filter reicht anfangs).
5. Testgrundlage ergaenzen (z. B. Vitest + Testing Library) sobald mehr Logik entsteht.

## Konventionen

- Sprache im Code: englische Symbolnamen.
- Sprache im sichtbaren UI-Text: deutsch (wenn nicht anders gewuenscht).
- Neue Themen nach Moeglichkeit ueber das Typmodell in `src/types/glossary.ts` fuehren.
- Komponenten klein halten und in `src/components` ablegen.

## Bekannte Offene Punkte

- Kein Routing eingebaut.
- Keine persistente Datenspeicherung.
- Keine Tests vorhanden (bewusst in diesem Boilerplate-Stand).

## Hinweise Zur Uebergabe

- Diese README dient als Schnellstart fuer neue Agent-Sessions.
- Bei strukturellen Aenderungen bitte diesen Abschnitt mitpflegen, damit der
  Einstieg fuer den jeweils naechsten Agent schnell bleibt.
