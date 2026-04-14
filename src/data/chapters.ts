import type { Chapter } from '../types/glossary'

export const chapters: Chapter[] = [
  {
    id: 'tools-setup',
    title: 'Abschnitt 1: Tools & Entwicklungsumgebung',
    slug: 'tools-setup',
    shortDescription: 'VS Code, Node.js, pnpm und React+Vite einrichten – alles was du zum Starten brauchst.',
    lessons: [
      {
        id: 'ts-01',
        title: 'VS Code installieren & einrichten',
        duration: '5 Min.',
        explanation: `**Visual Studio Code** (VS Code) ist der beliebteste Code-Editor für Web-Entwicklung – kostenlos, schnell und durch Extensions erweiterbar.

**Installation**
Lade VS Code von der offiziellen Seite herunter und installiere es:
\`\`\`
https://code.visualstudio.com/
\`\`\`

**Empfohlene Extensions**
Öffne die Extension-Suche mit \`Strg+Shift+X\` und installiere:
- **ESLint** – zeigt Code-Fehler direkt im Editor
- **Prettier – Code formatter** – formatiert deinen Code automatisch
- **ES7+ React/Redux/... Snippets** – praktische Kürzel für React
- **TypeScript Error Translator** – übersetzt TypeScript-Fehler ins Deutsche

**Nützliche Tastenkürzel**
- \`Strg+P\` – Datei schnell öffnen
- \`Strg+Shift+P\` – Befehlspalette öffnen
- \`Strg+\`\` – integriertes Terminal öffnen
- \`Alt+Shift+F\` – aktuellen Code formatieren
- \`F2\` – Symbol umbenennen (alle Vorkommen)
- \`Strg+D\` – nächstes gleiche Wort markieren`,
      },
      {
        id: 'ts-02',
        title: 'Node.js installieren',
        duration: '5 Min.',
        explanation: `**Node.js** ist die JavaScript-Laufzeitumgebung, die du brauchst, um JavaScript außerhalb des Browsers auszuführen – und die Grundlage für alle modernen Build-Tools wie Vite.

**Installation via nvm (empfohlen)**
Mit dem **Node Version Manager (nvm)** kannst du mehrere Node-Versionen verwalten:

Für Windows: https://github.com/coreybutler/nvm-windows/releases

Nach der Installation:
\`\`\`bash
nvm install lts        # aktuellste LTS-Version installieren
nvm use lts            # aktivieren
\`\`\`

**Installation direkt**
Alternativ lade das Installer-Paket von der offiziellen Seite:
\`\`\`
https://nodejs.org/
\`\`\`
Wähle die **LTS-Version** (Long Term Support) – stabiler für Projekte.

**Installation prüfen**
\`\`\`bash
node --version     # z. B. v22.14.0
npm --version      # z. B. 10.9.2
\`\`\`

**Wichtig:** Node.js bringt \`npm\` mit – wir ersetzen es aber durch \`pnpm\` (schneller, sparsamer).`,
      },
      {
        id: 'ts-03',
        title: 'pnpm als Paketmanager',
        duration: '4 Min.',
        explanation: `**pnpm** ist ein moderner Paketmanager, der schneller und speicherschonender als \`npm\` oder \`yarn\` ist. Pakete werden zentral gespeichert und per Hardlink in Projekte eingebunden – kein doppelter Download.

**Installation**
\`\`\`bash
npm install -g pnpm
\`\`\`

**Installation prüfen**
\`\`\`bash
pnpm --version     # z. B. 10.7.0
\`\`\`

**Die wichtigsten Befehle im Vergleich**
- \`pnpm install\` – Abhängigkeiten installieren (wie \`npm install\`)
- \`pnpm add react\` – Paket hinzufügen
- \`pnpm add -D vite\` – Dev-Dependency hinzufügen
- \`pnpm remove react\` – Paket entfernen
- \`pnpm run dev\` – Skript aus package.json starten
- \`pnpm dlx create-vite\` – Paket einmalig ausführen (wie \`npx\`)

**pnpm-workspace** erlaubt außerdem Monorepo-Setups mit mehreren Paketen in einem Repository – ideal für größere Projekte.`,
      },
      {
        id: 'ts-04',
        title: 'React-Projekt mit Vite erstellen',
        duration: '6 Min.',
        explanation: `**Vite** ist ein blitzschnelles Build-Tool für moderne Web-Apps. Es startet sofort (kein langsames Bündeln beim Start) und bietet Hot Module Replacement (HMR) – Änderungen sind im Browser sofort sichtbar.

**Projekt anlegen**
\`\`\`bash
pnpm create vite mein-projekt --template react-ts
cd mein-projekt
pnpm install
pnpm run dev
\`\`\`

Verfügbare Templates: \`react\`, \`react-ts\`, \`vue\`, \`vue-ts\`, \`vanilla\`, u. a.

**Projektstruktur**
- \`index.html\` – Einstiegspunkt der App
- \`src/main.tsx\` – Root-Datei, mounted die React-App
- \`src/App.tsx\` – Haupt-Komponente
- \`vite.config.ts\` – Vite-Konfiguration
- \`tsconfig.json\` – TypeScript-Konfiguration

**Wichtige Skripte in package.json**
- \`pnpm run dev\` – Entwicklungsserver starten (http://localhost:5173)
- \`pnpm run build\` – Produktions-Build erstellen (Ausgabe: dist/)
- \`pnpm run preview\` – Build lokal vorschauen
- \`pnpm run lint\` – ESLint-Prüfung ausführen`,
      },
      {
        id: 'ts-05',
        title: 'TypeScript im Projekt',
        duration: '5 Min.',
        explanation: `**TypeScript** ist eine typisierte Erweiterung von JavaScript. Es fängt viele Fehler bereits beim Schreiben ab, statt erst zur Laufzeit.

**Warum TypeScript?**
- Fehler werden im Editor angezeigt (kein "undefined is not a function" mehr)
- Autovervollständigung ist präziser
- Code ist selbstdokumentierend durch Typen
- Pflichtstandard in professionellen React-Projekten

**Grundkonfiguration: tsconfig.json**
Vite legt die Konfiguration automatisch an. Die wichtigsten Optionen:
\`\`\`json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "strict": true,          // alle strikten Checks aktivieren
    "jsx": "react-jsx",      // JSX-Transform für React 17+
    "moduleResolution": "bundler"
  }
}
\`\`\`

**Dateierweiterungen**
- \`.ts\` – TypeScript ohne JSX
- \`.tsx\` – TypeScript mit JSX (React-Komponenten)
- \`.js\` / \`.jsx\` – weiterhin erlaubt im Projekt

**TypeScript kompiliert nicht selbst** – Vite nutzt \`esbuild\` zum Transpilieren (sehr schnell). TypeScript prüft aber die Typen. Führe \`pnpm run build\` aus, um beide zusammen zu testen.`,
      },
    ],
  },
  {
    id: 'javascript-refresher',
    title: 'Abschnitt 2: JavaScript Refresher',
    slug: 'javascript-refresher',
    shortDescription: 'Grundlagen und Next-Gen-JavaScript als kompakter Auffrischungskurs.',
    lessons: [
      {
        id: 'jsr-15',
        title: '"import" & "export"',
        duration: '12 Min.',
        explanation: `In modernen JavaScript-Projekten wird Code in Module aufgeteilt. Jede Datei ist ein eigenes Modul. Mit \`export\` machst du Werte nach außen verfügbar, mit \`import\` holst du sie in eine andere Datei.

Es gibt zwei Arten von Exports:
- **Named Export**: Du kannst mehrere Werte pro Datei exportieren. Beim Import musst du den exakten Namen verwenden (oder mit \`as\` umbenennen).
- **Default Export**: Pro Datei darf es nur einen geben. Beim Import kannst du einen beliebigen Namen vergeben.`,
        codeExamples: [
          {
            title: 'Named Export & Import',
            js: `// utils.js
export const apiUrl = 'https://example.com';

export function formatDate(date) {
  return date.toLocaleDateString('de-DE');
}

// app.js
import { apiUrl, formatDate } from './utils.js';

console.log(apiUrl);
console.log(formatDate(new Date()));`,
            ts: `// utils.ts
export const apiUrl: string = 'https://example.com';

export function formatDate(date: Date): string {
  return date.toLocaleDateString('de-DE');
}

// app.ts
import { apiUrl, formatDate } from './utils';

console.log(apiUrl);
console.log(formatDate(new Date()));`,
          },
          {
            title: 'Default Export & Import',
            js: `// logger.js
export default function log(message) {
  console.log('[LOG]', message);
}

// app.js
import log from './logger.js';
// Name frei wählbar:
import meinLogger from './logger.js';

log('Hallo Welt');`,
            ts: `// logger.ts
export default function log(message: string): void {
  console.log('[LOG]', message);
}

// app.ts
import log from './logger';
// Name frei wählbar:
import meinLogger from './logger';

log('Hallo Welt');`,
          },
        ],
      },
      {
        id: 'jsr-16',
        title: 'Variablen & Werte',
        duration: '7 Min.',
        explanation: `JavaScript kennt drei Schlüsselwörter zum Deklarieren von Variablen:

- **\`let\`**: Blockscoped, kann neu zugewiesen werden. Nutze \`let\`, wenn sich der Wert ändern soll.
- **\`const\`**: Blockscoped, kann **nicht** neu zugewiesen werden. Nutze \`const\` als Standard – das macht den Code lesbarer.
- **\`var\`**: Funktionsscoped, veraltet. Vermeide \`var\` in modernem Code.

Wichtige Datentypen: \`string\`, \`number\`, \`boolean\`, \`null\`, \`undefined\`, \`object\`, \`symbol\`, \`bigint\`.`,
        codeExamples: [
          {
            title: 'let vs const',
            js: `let alter = 25;
alter = 26; // ✅ erlaubt

const name = 'Max';
// name = 'Anna'; // ❌ TypeError – const kann nicht neu zugewiesen werden

const person = { name: 'Max' };
person.name = 'Anna'; // ✅ erlaubt – das Objekt selbst ändert sich nicht`,
            ts: `let alter: number = 25;
alter = 26; // ✅ erlaubt

const name: string = 'Max';
// name = 'Anna'; // ❌ TypeError

const person: { name: string } = { name: 'Max' };
person.name = 'Anna'; // ✅ erlaubt – nur die Referenz ist const`,
          },
        ],
      },
      {
        id: 'jsr-17',
        title: 'Operatoren',
        duration: '3 Min.',
        explanation: `Ein kurzer Überblick über die wichtigsten Operatoren:

- **Vergleich**: \`===\` (strikt gleich) statt \`==\` (lose gleich). Strikt prüft Typ **und** Wert.
- **Logisch**: \`&&\` (UND), \`||\` (ODER), \`!\` (NICHT).
- **Ternärer Operator**: \`bedingung ? wennWahr : wennFalsch\` – kompakte Alternative zu \`if/else\`.
- **Nullish Coalescing**: \`??\` gibt den rechten Wert zurück, wenn der linke \`null\` oder \`undefined\` ist.
- **Optional Chaining**: \`?.\` greift sicher auf verschachtelte Properties zu.`,
        codeExamples: [
          {
            js: `// Strikter Vergleich
console.log(1 === '1');  // false
console.log(1 == '1');   // true  (vermeiden!)

// Ternärer Operator
const alter = 20;
const status = alter >= 18 ? 'Erwachsen' : 'Minderjährig';

// Nullish Coalescing
const eingabe = null;
const wert = eingabe ?? 'Standardwert'; // 'Standardwert'

// Optional Chaining
const user = { adresse: { stadt: 'Berlin' } };
console.log(user.adresse?.stadt);    // 'Berlin'
console.log(user.kontakt?.email);    // undefined (kein Fehler)`,
            ts: `// Strikter Vergleich
console.log(1 === 1);   // true – TypeScript erzwingt gleiche Typen

// Ternärer Operator
const alter: number = 20;
const status: string = alter >= 18 ? 'Erwachsen' : 'Minderjährig';

// Nullish Coalescing
const eingabe: string | null = null;
const wert: string = eingabe ?? 'Standardwert';

// Optional Chaining
type User = { adresse?: { stadt: string }; kontakt?: { email: string } };
const user: User = { adresse: { stadt: 'Berlin' } };
console.log(user.adresse?.stadt);    // 'Berlin'
console.log(user.kontakt?.email);    // undefined`,
          },
        ],
      },
      {
        id: 'jsr-18',
        title: 'Funktionen & Parameter',
        duration: '8 Min.',
        explanation: `Funktionen sind der Kern von JavaScript. Es gibt verschiedene Wege, sie zu definieren:

- **Function Declaration**: Wird gehoisted – kann vor der Definition aufgerufen werden.
- **Function Expression**: Wird einer Variablen zugewiesen.
- **Default-Parameter**: Werte, die greifen, wenn kein Argument übergeben wird.
- **Rest-Parameter**: Sammelt beliebig viele Argumente in einem Array.`,
        codeExamples: [
          {
            title: 'Deklaration & Default-Parameter',
            js: `// Function Declaration
function grüße(name, gruß = 'Hallo') {
  return gruß + ', ' + name + '!';
}

console.log(grüße('Max'));           // 'Hallo, Max!'
console.log(grüße('Anna', 'Hi'));    // 'Hi, Anna!'

// Function Expression
const addiere = function(a, b) {
  return a + b;
};`,
            ts: `// Function Declaration
function grüße(name: string, gruß: string = 'Hallo'): string {
  return gruß + ', ' + name + '!';
}

console.log(grüße('Max'));           // 'Hallo, Max!'
console.log(grüße('Anna', 'Hi'));    // 'Hi, Anna!'

// Function Expression
const addiere = function(a: number, b: number): number {
  return a + b;
};`,
          },
          {
            title: 'Rest-Parameter',
            js: `function summe(...zahlen) {
  return zahlen.reduce((acc, z) => acc + z, 0);
}

console.log(summe(1, 2, 3));    // 6
console.log(summe(10, 20));     // 30`,
            ts: `function summe(...zahlen: number[]): number {
  return zahlen.reduce((acc, z) => acc + z, 0);
}

console.log(summe(1, 2, 3));    // 6
console.log(summe(10, 20));     // 30`,
          },
        ],
      },
      {
        id: 'jsr-19',
        title: 'Arrow Functions',
        duration: '2 Min.',
        explanation: `Arrow Functions sind eine kompaktere Schreibweise für Funktionen. Sie haben kein eigenes \`this\` – stattdessen erben sie \`this\` aus dem umgebenden Scope. Das ist besonders in React-Komponenten nützlich.

Kurzschreibweisen:
- Nur ein Parameter → Klammern optional: \`x => x * 2\`
- Nur ein Ausdruck → kein \`return\` und keine geschweiften Klammern nötig.
- Mehrere Zeilen → geschweifte Klammern + explizites \`return\`.`,
        codeExamples: [
          {
            js: `// Klassische Funktion
const verdopple = function(x) {
  return x * 2;
};

// Arrow Function – lang
const verdoppleArrow = (x) => {
  return x * 2;
};

// Arrow Function – kurz (ein Ausdruck)
const verdoppleKurz = (x) => x * 2;

// Mehrere Parameter
const addiere = (a, b) => a + b;

// Kein Parameter
const sagHallo = () => 'Hallo!';

// Array-Methode mit Arrow Function
const zahlen = [1, 2, 3];
const doppelt = zahlen.map(z => z * 2); // [2, 4, 6]`,
            ts: `// Klassische Funktion
const verdopple = function(x: number): number {
  return x * 2;
};

// Arrow Function – lang
const verdoppleArrow = (x: number): number => {
  return x * 2;
};

// Arrow Function – kurz (ein Ausdruck)
const verdoppleKurz = (x: number): number => x * 2;

// Mehrere Parameter
const addiere = (a: number, b: number): number => a + b;

// Kein Parameter
const sagHallo = (): string => 'Hallo!';

// Array-Methode mit Arrow Function
const zahlen: number[] = [1, 2, 3];
const doppelt: number[] = zahlen.map(z => z * 2);`,
          },
        ],
      },
      {
        id: 'jsr-20',
        title: 'Arrow-Function-Syntax im Detail',
        duration: '1 Min.',
        explanation: `Besonderheiten der Arrow-Function-Syntax:

- **Objekt zurückgeben**: Wenn du ein Objekt-Literal direkt zurückgeben willst, musst du es in runde Klammern setzen, sonst interpretiert JS die geschweiften Klammern als Funktionskörper.
- **Kein eigenes \`this\`**: Arrow Functions binden kein eigenes \`this\`. Sie nutzen das \`this\` des umgebenden Scopes.
- **Kein \`arguments\`-Objekt**: Nutze stattdessen Rest-Parameter (\`...args\`).`,
        codeExamples: [
          {
            title: 'Objekt direkt zurückgeben',
            js: `// ❌ Fehler – JS denkt, {} ist ein Funktionskörper
// const erstelleUser = (name) => { name: name };

// ✅ Richtig – runde Klammern um das Objekt
const erstelleUser = (name) => ({ name: name });

console.log(erstelleUser('Max')); // { name: 'Max' }`,
            ts: `// ✅ Richtig – runde Klammern um das Objekt
const erstelleUser = (name: string): { name: string } =>
  ({ name: name });

// Noch kürzer mit Shorthand
const erstelleUser2 = (name: string) => ({ name });

console.log(erstelleUser('Max')); // { name: 'Max' }`,
          },
        ],
      },
      {
        id: 'jsr-21',
        title: 'Objekte & Klassen',
        duration: '6 Min.',
        explanation: `**Objekte** sind Sammlungen von Key-Value-Paaren. Du kannst Properties mit Punkt- oder Bracket-Notation lesen und setzen.

**Klassen** sind syntaktischer Zucker für Prototyp-basierte Vererbung. Sie haben:
- **\`constructor\`**: Wird beim Erstellen aufgerufen.
- **Methoden**: Funktionen, die auf der Instanz verfügbar sind.
- **\`extends\`**: Vererbung von einer anderen Klasse.

In React wirst du Klassen selten direkt nutzen (Funktionskomponenten sind Standard), aber das Verständnis hilft beim Lesen von Libraries.`,
        codeExamples: [
          {
            title: 'Objekte',
            js: `const auto = {
  marke: 'VW',
  modell: 'Golf',
  baujahr: 2023,
  beschreibung() {
    return this.marke + ' ' + this.modell;
  },
};

console.log(auto.marke);           // 'VW'
console.log(auto['baujahr']);       // 2023
console.log(auto.beschreibung());  // 'VW Golf'`,
            ts: `type Auto = {
  marke: string;
  modell: string;
  baujahr: number;
  beschreibung(): string;
};

const auto: Auto = {
  marke: 'VW',
  modell: 'Golf',
  baujahr: 2023,
  beschreibung() {
    return this.marke + ' ' + this.modell;
  },
};

console.log(auto.beschreibung());  // 'VW Golf'`,
          },
          {
            title: 'Klassen',
            js: `class Tier {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  sppielen() {
    return this.name + ' macht ' + this.sound;
  }
}

class Hund extends Tier {
  constructor(name) {
    super(name, 'Wuff');
  }
}

const rex = new Hund('Rex');
console.log(rex.sppielen()); // 'Rex macht Wuff'`,
            ts: `class Tier {
  name: string;
  sound: string;

  constructor(name: string, sound: string) {
    this.name = name;
    this.sound = sound;
  }

  sprechen(): string {
    return this.name + ' macht ' + this.sound;
  }
}

class Hund extends Tier {
  constructor(name: string) {
    super(name, 'Wuff');
  }
}

const rex = new Hund('Rex');
console.log(rex.sprechen()); // 'Rex macht Wuff'`,
          },
        ],
      },
      {
        id: 'jsr-22',
        title: 'Arrays & Array-Methoden wie map()',
        duration: '11 Min.',
        explanation: `Arrays sind geordnete Listen von Werten. Die wichtigsten Methoden, die du in React ständig brauchst:

- **\`map()\`**: Erstellt ein neues Array, indem jedes Element transformiert wird. In React nutzt du \`map()\` zum Rendern von Listen.
- **\`filter()\`**: Erstellt ein neues Array mit nur den Elementen, die eine Bedingung erfüllen.
- **\`find()\`**: Gibt das erste Element zurück, das eine Bedingung erfüllt.
- **\`findIndex()\`**: Gibt den Index des ersten Treffers zurück.
- **\`reduce()\`**: Reduziert ein Array auf einen einzelnen Wert (z. B. Summe).

Alle diese Methoden erzeugen ein **neues** Array – das Original bleibt unverändert (Immutability).`,
        codeExamples: [
          {
            title: 'map() & filter()',
            js: `const produkte = [
  { name: 'Laptop', preis: 999 },
  { name: 'Maus', preis: 29 },
  { name: 'Monitor', preis: 349 },
];

// map – Namen extrahieren
const namen = produkte.map(p => p.name);
// ['Laptop', 'Maus', 'Monitor']

// filter – nur teure Produkte
const teuer = produkte.filter(p => p.preis > 100);
// [{ name: 'Laptop', ... }, { name: 'Monitor', ... }]

// Beides kombinieren
const teureNamen = produkte
  .filter(p => p.preis > 100)
  .map(p => p.name);
// ['Laptop', 'Monitor']`,
            ts: `type Produkt = { name: string; preis: number };

const produkte: Produkt[] = [
  { name: 'Laptop', preis: 999 },
  { name: 'Maus', preis: 29 },
  { name: 'Monitor', preis: 349 },
];

// map – Namen extrahieren
const namen: string[] = produkte.map(p => p.name);

// filter – nur teure Produkte
const teuer: Produkt[] = produkte.filter(p => p.preis > 100);

// Kombination
const teureNamen: string[] = produkte
  .filter(p => p.preis > 100)
  .map(p => p.name);`,
          },
          {
            title: 'find(), findIndex() & reduce()',
            js: `const zahlen = [10, 20, 30, 40];

// find – erstes Element > 15
const gefunden = zahlen.find(z => z > 15); // 20

// findIndex
const index = zahlen.findIndex(z => z > 15); // 1

// reduce – Summe
const summe = zahlen.reduce((acc, z) => acc + z, 0); // 100`,
            ts: `const zahlen: number[] = [10, 20, 30, 40];

// find – erstes Element > 15
const gefunden: number | undefined = zahlen.find(z => z > 15);

// findIndex
const index: number = zahlen.findIndex(z => z > 15);

// reduce – Summe
const summe: number = zahlen.reduce((acc, z) => acc + z, 0);`,
          },
        ],
      },
      {
        id: 'jsr-23',
        title: 'Destructuring',
        duration: '5 Min.',
        explanation: `Destructuring erlaubt es, Werte aus Arrays oder Properties aus Objekten direkt in Variablen zu extrahieren.

**Objekt-Destructuring**: Du ziehst Properties anhand ihres Namens heraus. Du kannst sie auch umbenennen oder Standardwerte setzen.

**Array-Destructuring**: Du ziehst Werte anhand ihrer Position heraus. Das nutzt React z. B. bei \`useState\`: \`const [count, setCount] = useState(0)\`.`,
        codeExamples: [
          {
            title: 'Objekt-Destructuring',
            js: `const person = {
  name: 'Max',
  alter: 30,
  stadt: 'Berlin',
};

// Statt: const name = person.name; const alter = person.alter;
const { name, alter, stadt } = person;

console.log(name);  // 'Max'
console.log(alter); // 30

// Umbenennen
const { name: vorname } = person;
console.log(vorname); // 'Max'

// Standardwert
const { beruf = 'Unbekannt' } = person;
console.log(beruf); // 'Unbekannt'`,
            ts: `type Person = {
  name: string;
  alter: number;
  stadt: string;
  beruf?: string;
};

const person: Person = {
  name: 'Max',
  alter: 30,
  stadt: 'Berlin',
};

const { name, alter, stadt } = person;

// Umbenennen
const { name: vorname } = person;
console.log(vorname); // 'Max'

// Standardwert
const { beruf = 'Unbekannt' } = person;
console.log(beruf); // 'Unbekannt'`,
          },
          {
            title: 'Array-Destructuring',
            js: `const farben = ['rot', 'grün', 'blau'];

const [erste, zweite] = farben;
console.log(erste);  // 'rot'
console.log(zweite); // 'grün'

// Element überspringen
const [, , dritte] = farben;
console.log(dritte); // 'blau'

// Wie in React:
// const [count, setCount] = useState(0);`,
            ts: `const farben: string[] = ['rot', 'grün', 'blau'];

const [erste, zweite]: string[] = farben;
console.log(erste);  // 'rot'
console.log(zweite); // 'grün'

// Element überspringen
const [, , dritte]: string[] = farben;
console.log(dritte); // 'blau'

// Wie in React:
// const [count, setCount] = useState<number>(0);`,
          },
        ],
      },
      {
        id: 'jsr-24',
        title: 'Destructuring in Funktionsparametern',
        duration: '1 Min.',
        explanation: `Du kannst Destructuring direkt in der Parameterliste einer Funktion verwenden. Das ist sehr verbreitet in React, wo Props als Objekt übergeben werden.

Statt das ganze Objekt entgegenzunehmen und dann einzeln zuzugreifen, ziehst du die gewünschten Werte gleich im Parameter heraus.`,
        codeExamples: [
          {
            js: `// Ohne Destructuring
function zeigeUser(user) {
  console.log(user.name + ' ist ' + user.alter);
}

// Mit Destructuring im Parameter
function zeigeUser({ name, alter }) {
  console.log(name + ' ist ' + alter);
}

zeigeUser({ name: 'Max', alter: 30 });

// In React sähe das so aus:
// function Greeting({ name, color }) {
//   return <h1 style={{ color }}>Hallo {name}</h1>;
// }`,
            ts: `type User = { name: string; alter: number };

// Ohne Destructuring
function zeigeUser(user: User): void {
  console.log(user.name + ' ist ' + user.alter);
}

// Mit Destructuring im Parameter
function zeigeUser2({ name, alter }: User): void {
  console.log(name + ' ist ' + alter);
}

zeigeUser2({ name: 'Max', alter: 30 });

// In React:
// function Greeting({ name, color }: { name: string; color: string }) {
//   return <h1 style={{ color }}>Hallo {name}</h1>;
// }`,
          },
        ],
      },
      {
        id: 'jsr-25',
        title: 'Der Spread-Operator',
        duration: '3 Min.',
        explanation: `Der Spread-Operator (\`...\`) „verteilt" die Elemente eines Arrays oder die Properties eines Objekts. Er ist essenziell in React für immutable State-Updates.

Typische Anwendungen:
- **Arrays kopieren oder zusammenführen**
- **Objekte kopieren und einzelne Properties überschreiben** (State-Updates)
- **Funktionsargumente aus einem Array übergeben**`,
        codeExamples: [
          {
            title: 'Arrays',
            js: `const zahlen = [1, 2, 3];

// Kopie erstellen
const kopie = [...zahlen];

// Arrays zusammenführen
const mehr = [...zahlen, 4, 5]; // [1, 2, 3, 4, 5]

// Am Anfang hinzufügen
const vorher = [0, ...zahlen]; // [0, 1, 2, 3]`,
            ts: `const zahlen: number[] = [1, 2, 3];

// Kopie erstellen
const kopie: number[] = [...zahlen];

// Arrays zusammenführen
const mehr: number[] = [...zahlen, 4, 5];

// Am Anfang hinzufügen
const vorher: number[] = [0, ...zahlen];`,
          },
          {
            title: 'Objekte (wichtig für State-Updates)',
            js: `const user = { name: 'Max', alter: 30, stadt: 'Berlin' };

// Kopie mit Änderung – das Original bleibt unverändert
const aktualisiert = { ...user, alter: 31 };
// { name: 'Max', alter: 31, stadt: 'Berlin' }

// In React:
// setUser(prev => ({ ...prev, alter: prev.alter + 1 }));`,
            ts: `type User = { name: string; alter: number; stadt: string };

const user: User = { name: 'Max', alter: 30, stadt: 'Berlin' };

// Kopie mit Änderung
const aktualisiert: User = { ...user, alter: 31 };

// In React:
// setUser((prev) => ({ ...prev, alter: prev.alter + 1 }));`,
          },
        ],
      },
      {
        id: 'jsr-26',
        title: 'Kontrollstrukturen',
        duration: '5 Min.',
        explanation: `Kontrollstrukturen steuern den Programmfluss:

- **\`if / else if / else\`**: Standardbedingung.
- **\`for\`-Schleife**: Klassische Iteration (in React aber selten – stattdessen \`map()\`).
- **\`for...of\`**: Iteriert über Array-Werte (moderner als \`for\`).
- **\`while\` / \`do...while\`**: Schleife mit Bedingung.
- **\`switch\`**: Mehrere Fälle elegant abbilden.

In React/JSX nutzt du häufiger den **ternären Operator** oder **\`&&\`** für bedingtes Rendering statt \`if/else\`.`,
        codeExamples: [
          {
            js: `// if / else
const note = 2;
let bewertung;

if (note === 1) {
  bewertung = 'Sehr gut';
} else if (note <= 3) {
  bewertung = 'Gut bis befriedigend';
} else {
  bewertung = 'Ausbaufähig';
}

// for...of
const sprachen = ['JS', 'TS', 'Python'];
for (const sprache of sprachen) {
  console.log(sprache);
}

// Bedingtes Rendering in React (JSX):
// {istEingeloggt && <Dashboard />}
// {istAdmin ? <AdminPanel /> : <UserPanel />}`,
            ts: `// if / else
const note: number = 2;
let bewertung: string;

if (note === 1) {
  bewertung = 'Sehr gut';
} else if (note <= 3) {
  bewertung = 'Gut bis befriedigend';
} else {
  bewertung = 'Ausbaufähig';
}

// for...of
const sprachen: string[] = ['JS', 'TS', 'Python'];
for (const sprache of sprachen) {
  console.log(sprache);
}

// Bedingtes Rendering in React (JSX):
// {istEingeloggt && <Dashboard />}
// {istAdmin ? <AdminPanel /> : <UserPanel />}`,
          },
        ],
      },
      {
        id: 'jsr-27',
        title: 'DOM-Manipulation – nicht mit React!',
        duration: '1 Min.',
        explanation: `In Vanilla-JavaScript manipulierst du das DOM direkt mit Methoden wie \`document.getElementById()\`, \`querySelector()\`, \`createElement()\` usw.

**In React machst du das NICHT.** React verwaltet das DOM für dich über den Virtual DOM. Du beschreibst in JSX, wie die UI aussehen soll, und React kümmert sich um die Updates.

Das folgende Beispiel zeigt, wie Vanilla-JS funktioniert – damit du verstehst, was React im Hintergrund für dich übernimmt.`,
        codeExamples: [
          {
            title: 'Vanilla JS (NICHT in React verwenden!)',
            js: `// ❌ So macht man es in Vanilla JS – nicht in React!
const titel = document.getElementById('titel');
titel.textContent = 'Neuer Titel';

const liste = document.querySelector('ul');
const neuesElement = document.createElement('li');
neuesElement.textContent = 'Neuer Eintrag';
liste.appendChild(neuesElement);

// ✅ In React stattdessen:
// function App() {
//   const [titel, setTitel] = useState('Alter Titel');
//   return <h1>{titel}</h1>;
// }`,
            ts: `// ❌ Vanilla JS – nicht in React verwenden!
const titel = document.getElementById('titel') as HTMLElement;
titel.textContent = 'Neuer Titel';

const liste = document.querySelector('ul') as HTMLUListElement;
const neuesElement = document.createElement('li');
neuesElement.textContent = 'Neuer Eintrag';
liste.appendChild(neuesElement);

// ✅ In React stattdessen:
// function App() {
//   const [titel, setTitel] = useState<string>('Alter Titel');
//   return <h1>{titel}</h1>;
// }`,
          },
        ],
      },
      {
        id: 'jsr-28',
        title: 'Funktionen als Werte',
        duration: '7 Min.',
        explanation: `In JavaScript sind Funktionen **First-Class Citizens** – sie können wie jeder andere Wert behandelt werden:

- In Variablen gespeichert
- Als Argument an andere Funktionen übergeben (Callbacks)
- Von Funktionen zurückgegeben

Das ist das Fundament von Patterns wie \`map()\`, \`filter()\`, Event-Handlern in React und vielen Hooks.`,
        codeExamples: [
          {
            title: 'Funktionen als Argumente (Callbacks)',
            js: `// Funktion als Argument übergeben
function wiederhole(aktion, anzahl) {
  for (let i = 0; i < anzahl; i++) {
    aktion(i);
  }
}

wiederhole((i) => console.log('Durchlauf ' + i), 3);
// Durchlauf 0
// Durchlauf 1
// Durchlauf 2

// Timeout – Callback wird später aufgerufen
setTimeout(() => {
  console.log('2 Sekunden vorbei');
}, 2000);`,
            ts: `// Funktion als Argument übergeben
function wiederhole(aktion: (index: number) => void, anzahl: number): void {
  for (let i = 0; i < anzahl; i++) {
    aktion(i);
  }
}

wiederhole((i) => console.log('Durchlauf ' + i), 3);

// Timeout – Callback wird später aufgerufen
setTimeout(() => {
  console.log('2 Sekunden vorbei');
}, 2000);`,
          },
          {
            title: 'Funktionen als Rückgabewert',
            js: `function erstelleMultiplizierer(faktor) {
  return (zahl) => zahl * faktor;
}

const verdopple = erstelleMultiplizierer(2);
const verdreifache = erstelleMultiplizierer(3);

console.log(verdopple(5));     // 10
console.log(verdreifache(5));  // 15`,
            ts: `function erstelleMultiplizierer(faktor: number): (zahl: number) => number {
  return (zahl) => zahl * faktor;
}

const verdopple = erstelleMultiplizierer(2);
const verdreifache = erstelleMultiplizierer(3);

console.log(verdopple(5));     // 10
console.log(verdreifache(5));  // 15`,
          },
        ],
      },
      {
        id: 'jsr-29',
        title: 'Funktionen innerhalb von Funktionen',
        duration: '2 Min.',
        explanation: `Du kannst Funktionen innerhalb anderer Funktionen definieren. Die innere Funktion hat Zugriff auf die Variablen der äußeren Funktion – das nennt man **Closure**.

In React passiert das ständig: Event-Handler werden innerhalb von Komponenten definiert und haben Zugriff auf Props und State.`,
        codeExamples: [
          {
            js: `function init() {
  const nachricht = 'Hallo von init!';

  function zeigeNachricht() {
    // Hat Zugriff auf 'nachricht' (Closure)
    console.log(nachricht);
  }

  zeigeNachricht();
}

init(); // 'Hallo von init!'

// React-Beispiel (Konzept):
// function Counter() {
//   const [count, setCount] = useState(0);
//
//   function increment() {   // ← Funktion in Funktion
//     setCount(count + 1);   // ← hat Zugriff auf count
//   }
//
//   return <button onClick={increment}>{count}</button>;
// }`,
            ts: `function init(): void {
  const nachricht: string = 'Hallo von init!';

  function zeigeNachricht(): void {
    console.log(nachricht);
  }

  zeigeNachricht();
}

init();

// React-Beispiel (Konzept):
// function Counter(): JSX.Element {
//   const [count, setCount] = useState<number>(0);
//
//   function increment(): void {
//     setCount(count + 1);
//   }
//
//   return <button onClick={increment}>{count}</button>;
// }`,
          },
        ],
      },
      {
        id: 'jsr-30',
        title: 'Referenz- vs. primitive Werte',
        duration: '5 Min.',
        explanation: `JavaScript unterscheidet zwei Kategorien von Werten:

**Primitive Werte** (\`string\`, \`number\`, \`boolean\`, \`null\`, \`undefined\`, \`symbol\`, \`bigint\`) werden **kopiert**. Änderungen an der Kopie beeinflussen das Original nicht.

**Referenzwerte** (\`object\`, \`array\`, \`function\`) werden **per Referenz** gespeichert. Wenn du ein Objekt einer neuen Variablen zuweist, zeigen beide auf **dasselbe** Objekt im Speicher.

Das ist extrem wichtig in React: State-Updates müssen immer **neue** Objekte/Arrays erzeugen (mit Spread), damit React die Änderung erkennt.`,
        codeExamples: [
          {
            title: 'Primitive – werden kopiert',
            js: `let a = 10;
let b = a;    // b ist eine Kopie
b = 20;

console.log(a); // 10 – a bleibt unverändert
console.log(b); // 20`,
            ts: `let a: number = 10;
let b: number = a;
b = 20;

console.log(a); // 10
console.log(b); // 20`,
          },
          {
            title: 'Referenz – zeigen auf dasselbe Objekt',
            js: `const original = { name: 'Max' };
const kopie = original;    // KEINE echte Kopie!

kopie.name = 'Anna';
console.log(original.name); // 'Anna' ❗ auch geändert!

// Echte Kopie mit Spread:
const echteKopie = { ...original };
echteKopie.name = 'Lisa';
console.log(original.name); // 'Anna' – bleibt unverändert

// In React:
// ❌ state.items.push(neuesItem);
// ✅ setItems(prev => [...prev, neuesItem]);`,
            ts: `const original: { name: string } = { name: 'Max' };
const kopie = original;    // KEINE echte Kopie!

kopie.name = 'Anna';
console.log(original.name); // 'Anna' ❗

// Echte Kopie mit Spread:
const echteKopie = { ...original };
echteKopie.name = 'Lisa';
console.log(original.name); // 'Anna'

// In React:
// ❌ state.items.push(neuesItem);
// ✅ setItems(prev => [...prev, neuesItem]);`,
          },
        ],
      },
      {
        id: 'jsr-32',
        title: 'JS Array Functions – Übersicht',
        duration: '1 Min.',
        explanation: `Hier eine kompakte Übersicht der wichtigsten Array-Methoden, die du in React-Projekten ständig brauchst:

| Methode | Gibt zurück | Verändert Original? |
|---------|------------|-------------------|
| \`map()\` | Neues Array | Nein |
| \`filter()\` | Neues Array | Nein |
| \`find()\` | Element oder \`undefined\` | Nein |
| \`findIndex()\` | Index oder \`-1\` | Nein |
| \`reduce()\` | Einzelwert | Nein |
| \`concat()\` | Neues Array | Nein |
| \`slice()\` | Neues Array | Nein |
| \`splice()\` | Entfernte Elemente | **Ja** ⚠️ |
| \`push()\` / \`pop()\` | Länge / Element | **Ja** ⚠️ |

In React immer die **nicht-mutierenden** Methoden + Spread bevorzugen!`,
        codeExamples: [
          {
            title: 'Alle auf einen Blick',
            js: `const zahlen = [1, 2, 3, 4, 5];

// map – transformieren
zahlen.map(z => z * 10);        // [10, 20, 30, 40, 50]

// filter – filtern
zahlen.filter(z => z > 3);      // [4, 5]

// find – erstes finden
zahlen.find(z => z > 3);        // 4

// reduce – zusammenfassen
zahlen.reduce((s, z) => s + z, 0); // 15

// slice – Ausschnitt (ohne Mutation)
zahlen.slice(1, 3);              // [2, 3]

// concat – zusammenführen
zahlen.concat([6, 7]);           // [1, 2, 3, 4, 5, 6, 7]

// Spread-Alternative zu concat:
[...zahlen, 6, 7];               // [1, 2, 3, 4, 5, 6, 7]`,
            ts: `const zahlen: number[] = [1, 2, 3, 4, 5];

// map – transformieren
const x10: number[] = zahlen.map(z => z * 10);

// filter – filtern
const großeZahlen: number[] = zahlen.filter(z => z > 3);

// find – erstes finden
const gefunden: number | undefined = zahlen.find(z => z > 3);

// reduce – zusammenfassen
const summe: number = zahlen.reduce((s, z) => s + z, 0);

// slice – Ausschnitt
const teil: number[] = zahlen.slice(1, 3);

// concat
const erweitert: number[] = zahlen.concat([6, 7]);

// Spread
const mitSpread: number[] = [...zahlen, 6, 7];`,
          },
        ],
      },
    ],
  },
  {
    id: 'react-essentials',
    title: 'Abschnitte 3–4: React Essentials',
    slug: 'react-essentials',
    shortDescription: 'Components, JSX, Props, State, Events und fortgeschrittene Patterns: Komposition, Lifting State, Immutability und flexible Komponenten-Architektur.',
    lessons: [
      {
        id: 're-components-jsx',
        title: 'Komponenten & JSX',
        duration: '15 Min.',
        explanation: `React-Apps bestehen aus **Komponenten**. Eine Komponente ist eine Funktion, die JSX zurückgibt – eine HTML-ähnliche Syntax direkt in JavaScript.

Regeln für Komponenten:
- Der Funktionsname beginnt **immer mit Großbuchstabe** (\`App\`, \`Header\`, nicht \`app\`).
- Eine Komponente gibt **genau ein Wurzelelement** zurück (oder ein Fragment \`<>...</>\`).
- Dateiendung: \`.jsx\` oder \`.tsx\` (TypeScript).

JSX ist **kein HTML** – es wird von React in \`React.createElement()\`-Aufrufe umgewandelt. Deshalb gelten ein paar Unterschiede:
- \`class\` → \`className\`
- \`for\` → \`htmlFor\`
- Selbstschließende Tags brauchen immer \`/\`: \`<img />\`, \`<br />\`

React baut intern einen **Component Tree** auf: Deine Root-Komponente (\`<App />\`) rendert Kind-Komponenten, die wiederum eigene Kinder haben.`,
        codeExamples: [
          {
            title: 'Erste eigene Komponente',
            js: `// Header.jsx
function Header() {
  return (
    <header>
      <h1>Meine React App</h1>
      <p>Willkommen!</p>
    </header>
  );
}

export default Header;

// App.jsx
import Header from './Header';

function App() {
  return (
    <div>
      <Header />
      <main>Inhalt hier...</main>
    </div>
  );
}

export default App;`,
            ts: `// Header.tsx
function Header(): JSX.Element {
  return (
    <header>
      <h1>Meine React App</h1>
      <p>Willkommen!</p>
    </header>
  );
}

export default Header;

// App.tsx
import Header from './Header';

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <main>Inhalt hier...</main>
    </div>
  );
}

export default App;`,
          },
          {
            title: 'Fragment statt Wrapper-div',
            js: `// ❌ Unnötiges div
function Card() {
  return (
    <div>
      <h2>Titel</h2>
      <p>Text</p>
    </div>
  );
}

// ✅ Fragment – kein Extra-Element im DOM
function Card() {
  return (
    <>
      <h2>Titel</h2>
      <p>Text</p>
    </>
  );
}`,
            ts: `// ✅ Fragment – kein Extra-Element im DOM
function Card(): JSX.Element {
  return (
    <>
      <h2>Titel</h2>
      <p>Text</p>
    </>
  );
}`,
          },
        ],
      },
      {
        id: 're-dynamic-values',
        title: 'Dynamische Werte & Attribute',
        duration: '10 Min.',
        explanation: `In JSX kannst du mit **geschweiften Klammern \`{}\`** JavaScript-Ausdrücke einbetten. Das gilt für:

- **Textinhalt**: \`<p>{userName}</p>\`
- **Attribute**: \`<img src={imageUrl} />\`
- **Berechnungen**: \`<p>{preis * 1.19}</p>\`
- **Funktionsaufrufe**: \`<p>{formatDate(new Date())}</p>\`

Für Bilder in React-Projekten (mit Vite/Webpack): Nutze \`import\`, damit der Bundler den Pfad korrekt auflöst.`,
        codeExamples: [
          {
            title: 'Dynamischer Content',
            js: `const user = { name: 'Max', role: 'Admin' };

function UserBadge() {
  const formattedDate = new Date().toLocaleDateString('de-DE');

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Rolle: {user.role}</p>
      <p>Heute ist der {formattedDate}</p>
      <p>Berechnung: {2 + 3}</p>
    </div>
  );
}`,
            ts: `type User = { name: string; role: string };
const user: User = { name: 'Max', role: 'Admin' };

function UserBadge(): JSX.Element {
  const formattedDate: string = new Date().toLocaleDateString('de-DE');

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Rolle: {user.role}</p>
      <p>Heute ist der {formattedDate}</p>
      <p>Berechnung: {2 + 3}</p>
    </div>
  );
}`,
          },
          {
            title: 'Bilder importieren & dynamische Attribute',
            js: `import reactLogo from './assets/react.svg';

function Logo() {
  const altText = 'React Logo';

  return (
    <img
      src={reactLogo}
      alt={altText}
      className="logo"
      style={{ width: 80, height: 80 }}
    />
  );
}`,
            ts: `import reactLogo from './assets/react.svg';

function Logo(): JSX.Element {
  const altText: string = 'React Logo';

  return (
    <img
      src={reactLogo}
      alt={altText}
      className="logo"
      style={{ width: 80, height: 80 }}
    />
  );
}`,
          },
        ],
      },
      {
        id: 're-props',
        title: 'Props – Daten an Komponenten übergeben',
        duration: '15 Min.',
        explanation: `**Props** (Properties) sind der Mechanismus, mit dem du Daten von einer Eltern- an eine Kind-Komponente übergibst. Props sind **read-only** – eine Komponente darf ihre eigenen Props nicht verändern.

Wichtige Konzepte:
- Props werden wie HTML-Attribute übergeben: \`<Card title="Hallo" count={5} />\`
- In der Komponente empfängst du sie als Objekt – idealerweise direkt mit **Destructuring**.
- Du kannst **jeden Wert** als Prop übergeben: Strings, Zahlen, Arrays, Objekte, Funktionen, sogar andere Komponenten.
- **Spread-Syntax**: Mit \`{...props}\` kannst du ein ganzes Objekt als Props verteilen.
- **Default-Werte**: Mit Destructuring-Defaults oder \`defaultProps\`.`,
        codeExamples: [
          {
            title: 'Grundlagen: Props mit Destructuring',
            js: `function CourseCard({ title, description, price }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <span className="price">{price} €</span>
    </article>
  );
}

// Verwendung
function App() {
  return (
    <div>
      <CourseCard
        title="React Kurs"
        description="Lerne React von Grund auf"
        price={49}
      />
      <CourseCard
        title="TypeScript Kurs"
        description="TypeScript für React-Entwickler"
        price={39}
      />
    </div>
  );
}`,
            ts: `type CourseCardProps = {
  title: string;
  description: string;
  price: number;
};

function CourseCard({ title, description, price }: CourseCardProps) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <span className="price">{price} €</span>
    </article>
  );
}

// Verwendung
function App(): JSX.Element {
  return (
    <div>
      <CourseCard
        title="React Kurs"
        description="Lerne React von Grund auf"
        price={49}
      />
      <CourseCard
        title="TypeScript Kurs"
        description="TypeScript für React-Entwickler"
        price={39}
      />
    </div>
  );
}`,
          },
          {
            title: 'Spread-Props & Default-Werte',
            js: `function Button({ label, variant = 'primary', ...rest }) {
  return (
    <button className={'btn btn--' + variant} {...rest}>
      {label}
    </button>
  );
}

// Spread: Objekt als Props verteilen
const btnConfig = { label: 'Klick mich', onClick: () => alert('Hi!') };

function App() {
  return (
    <div>
      <Button {...btnConfig} />
      <Button label="Sekundär" variant="secondary" />
    </div>
  );
}`,
            ts: `type ButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ label, variant = 'primary', ...rest }: ButtonProps) {
  return (
    <button className={'btn btn--' + variant} {...rest}>
      {label}
    </button>
  );
}

const btnConfig = { label: 'Klick mich', onClick: () => alert('Hi!') };

function App(): JSX.Element {
  return (
    <div>
      <Button {...btnConfig} />
      <Button label="Sekundär" variant="secondary" />
    </div>
  );
}`,
          },
        ],
      },
      {
        id: 're-children-composition',
        title: 'children & Komposition',
        duration: '8 Min.',
        explanation: `Das spezielle **\`children\`-Prop** enthält alles, was du **zwischen** die öffnenden und schließenden Tags einer Komponente schreibst. Das ist das Fundament für **Komposition** – du baust flexible Wrapper-Komponenten, die beliebigen Inhalt aufnehmen.

Typische Anwendungen:
- **Layout-Wrapper**: \`<Card>...</Card>\`, \`<Modal>...</Modal>\`
- **Wiederverwendbare Container**: Die Struktur kommt von der Wrapper-Komponente, der Inhalt von außen.

Das ist mächtiger als Vererbung – React bevorzugt **Komposition über Vererbung**.`,
        codeExamples: [
          {
            title: 'Wrapper-Komponente mit children',
            js: `function Card({ children, title }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <div className="card__body">
        {children}
      </div>
    </article>
  );
}

function App() {
  return (
    <Card title="Willkommen">
      <p>Das hier ist der Inhalt der Karte.</p>
      <button>Mehr erfahren</button>
    </Card>
  );
}`,
            ts: `import { type ReactNode } from 'react';

type CardProps = {
  title: string;
  children: ReactNode;
};

function Card({ children, title }: CardProps) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <div className="card__body">
        {children}
      </div>
    </article>
  );
}

function App(): JSX.Element {
  return (
    <Card title="Willkommen">
      <p>Das hier ist der Inhalt der Karte.</p>
      <button>Mehr erfahren</button>
    </Card>
  );
}`,
          },
          {
            title: 'Tabs als Kompositions-Pattern',
            js: `function TabPanel({ children, isActive }) {
  if (!isActive) return null;
  return <div className="tab-panel">{children}</div>;
}

function App() {
  const [tab, setTab] = useState(0);

  return (
    <div>
      <button onClick={() => setTab(0)}>Info</button>
      <button onClick={() => setTab(1)}>Details</button>

      <TabPanel isActive={tab === 0}>
        <p>Allgemeine Informationen</p>
      </TabPanel>
      <TabPanel isActive={tab === 1}>
        <p>Detaillierte Beschreibung</p>
      </TabPanel>
    </div>
  );
}`,
            ts: `import { type ReactNode } from 'react';

type TabPanelProps = {
  children: ReactNode;
  isActive: boolean;
};

function TabPanel({ children, isActive }: TabPanelProps) {
  if (!isActive) return null;
  return <div className="tab-panel">{children}</div>;
}

function App(): JSX.Element {
  const [tab, setTab] = useState<number>(0);

  return (
    <div>
      <button onClick={() => setTab(0)}>Info</button>
      <button onClick={() => setTab(1)}>Details</button>

      <TabPanel isActive={tab === 0}>
        <p>Allgemeine Informationen</p>
      </TabPanel>
      <TabPanel isActive={tab === 1}>
        <p>Detaillierte Beschreibung</p>
      </TabPanel>
    </div>
  );
}`,
          },
        ],
      },
      {
        id: 're-events',
        title: 'Events & Event-Handling',
        duration: '12 Min.',
        explanation: `In React reagierst du auf Benutzerinteraktionen über **Event-Handler**. Statt \`addEventListener\` (Vanilla JS) übergibst du Funktionen direkt als Props:

- \`onClick\`, \`onChange\`, \`onSubmit\`, \`onMouseEnter\`, usw.
- Du übergibst eine **Funktionsreferenz**, keinen Funktionsaufruf: \`onClick={handleClick}\` – nicht \`onClick={handleClick()}\`!
- Für **zusätzliche Argumente** nutzt du eine Arrow Function: \`onClick={() => handleSelect(id)}\`.
- Event-Handler-Funktionen erhalten automatisch das **Event-Objekt** als erstes Argument.
- Funktionen als Props übergeben: Eine Eltern-Komponente übergibt einen Handler an das Kind – so fließen Daten **nach oben** (Lifting State Up).`,
        codeExamples: [
          {
            title: 'Click-Events & Argumente',
            js: `function App() {
  function handleClick() {
    console.log('Button geklickt!');
  }

  function handleSelect(topic) {
    console.log('Ausgewählt:', topic);
  }

  return (
    <div>
      {/* Einfacher Handler */}
      <button onClick={handleClick}>Klick mich</button>

      {/* Handler mit Argument */}
      <button onClick={() => handleSelect('React')}>React</button>
      <button onClick={() => handleSelect('Vue')}>Vue</button>
    </div>
  );
}`,
            ts: `function App(): JSX.Element {
  function handleClick(): void {
    console.log('Button geklickt!');
  }

  function handleSelect(topic: string): void {
    console.log('Ausgewählt:', topic);
  }

  return (
    <div>
      <button onClick={handleClick}>Klick mich</button>
      <button onClick={() => handleSelect('React')}>React</button>
      <button onClick={() => handleSelect('Vue')}>Vue</button>
    </div>
  );
}`,
          },
          {
            title: 'Funktionen als Props übergeben (Kind → Eltern)',
            js: `function TabButton({ children, onSelect }) {
  return (
    <button onClick={onSelect}>
      {children}
    </button>
  );
}

function App() {
  function handleSelect(thema) {
    console.log(thema + ' wurde gewählt');
  }

  return (
    <div>
      <TabButton onSelect={() => handleSelect('Components')}>
        Components
      </TabButton>
      <TabButton onSelect={() => handleSelect('Props')}>
        Props
      </TabButton>
    </div>
  );
}`,
            ts: `type TabButtonProps = {
  children: React.ReactNode;
  onSelect: () => void;
};

function TabButton({ children, onSelect }: TabButtonProps) {
  return (
    <button onClick={onSelect}>
      {children}
    </button>
  );
}

function App(): JSX.Element {
  function handleSelect(thema: string): void {
    console.log(thema + ' wurde gewählt');
  }

  return (
    <div>
      <TabButton onSelect={() => handleSelect('Components')}>
        Components
      </TabButton>
      <TabButton onSelect={() => handleSelect('Props')}>
        Props
      </TabButton>
    </div>
  );
}`,
          },
        ],
      },
      {
        id: 're-state',
        title: 'State & useState',
        duration: '15 Min.',
        explanation: `**State** ist Daten, die sich über die Zeit ändern und dazu führen, dass React die UI neu rendert. Das ist der zentrale Unterschied zu normalen Variablen:

- Eine **normale Variable** (\`let x = 0\`) triggert kein Re-Render – die UI bleibt stehen.
- **\`useState\`** gibt dir eine State-Variable + eine Setter-Funktion. Wenn du den Setter aufrufst, rendert React die Komponente **neu**.

Regeln für Hooks:
- Nur **auf Top-Level** der Komponente aufrufen – nicht in \`if\`, \`for\` oder verschachtelten Funktionen.
- Nur in **React-Funktionskomponenten** oder eigenen Hooks aufrufen.

Du kannst **abgeleitete Werte** (Derived State) direkt berechnen statt in eigenem State zu speichern – mache keinen State, wenn es eine Berechnung tut.`,
        codeExamples: [
          {
            title: 'Warum normale Variablen nicht reichen',
            js: `// ❌ Das funktioniert NICHT – kein Re-Render!
function Counter() {
  let count = 0;

  function handleClick() {
    count++;
    console.log(count); // Zählt hoch...
    // ...aber die UI zeigt immer 0
  }

  return <button onClick={handleClick}>Zähler: {count}</button>;
}`,
            ts: `// ❌ Das funktioniert NICHT – kein Re-Render!
function Counter(): JSX.Element {
  let count: number = 0;

  function handleClick(): void {
    count++;
    // UI zeigt immer 0 – React weiß nichts von der Änderung
  }

  return <button onClick={handleClick}>Zähler: {count}</button>;
}`,
          },
          {
            title: 'useState richtig einsetzen',
            js: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
    // Oder mit Updater-Funktion (sicherer bei schnellen Klicks):
    // setCount(prev => prev + 1);
  }

  // Abgeleiteter Wert – kein eigener State nötig!
  const isEven = count % 2 === 0;

  return (
    <div>
      <p>Zähler: {count}</p>
      <p>{isEven ? 'Gerade' : 'Ungerade'}</p>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}`,
            ts: `import { useState } from 'react';

function Counter(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  function handleIncrement(): void {
    setCount(prev => prev + 1);
  }

  // Abgeleiteter Wert – kein eigener State nötig!
  const isEven: boolean = count % 2 === 0;

  return (
    <div>
      <p>Zähler: {count}</p>
      <p>{isEven ? 'Gerade' : 'Ungerade'}</p>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}`,
          },
          {
            title: 'State mit Objekten (Spread nicht vergessen!)',
            js: `import { useState } from 'react';

function UserForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  function handleChange(field, value) {
    setUser(prev => ({
      ...prev,        // alte Werte behalten
      [field]: value,  // nur ein Feld überschreiben
    }));
  }

  return (
    <form>
      <input
        value={user.name}
        onChange={e => handleChange('name', e.target.value)}
        placeholder="Name"
      />
      <input
        value={user.email}
        onChange={e => handleChange('email', e.target.value)}
        placeholder="E-Mail"
      />
      <p>Hallo {user.name || '...'} ({user.email || '...'})</p>
    </form>
  );
}`,
            ts: `import { useState } from 'react';

type UserData = { name: string; email: string };

function UserForm(): JSX.Element {
  const [user, setUser] = useState<UserData>({
    name: '',
    email: '',
  });

  function handleChange(field: keyof UserData, value: string): void {
    setUser(prev => ({
      ...prev,
      [field]: value,
    }));
  }

  return (
    <form>
      <input
        value={user.name}
        onChange={e => handleChange('name', e.target.value)}
        placeholder="Name"
      />
      <input
        value={user.email}
        onChange={e => handleChange('email', e.target.value)}
        placeholder="E-Mail"
      />
      <p>Hallo {user.name || '...'} ({user.email || '...'})</p>
    </form>
  );
}`,
          },
        ],
      },
      {
        id: 're-conditional-rendering',
        title: 'Bedingtes Rendern',
        duration: '8 Min.',
        explanation: `In React gibt es mehrere Wege, Inhalte bedingt anzuzeigen:

- **Ternärer Operator**: \`{bedingung ? <A /> : <B />}\` – wenn du zwischen zwei Varianten wechseln willst.
- **Logisches UND (\`&&\`)**: \`{bedingung && <A />}\` – wenn du etwas anzeigen **oder gar nichts** rendern willst.
- **Frühes Return**: \`if (!data) return <Loading />\` – nützlich für Ladezustände oder Fehlerfälle.
- **Variable**: JSX in einer Variable speichern und dann im Return einsetzen.

Vermeide: \`{count && <p>...</p>}\` wenn \`count\` eine Zahl ist – bei \`0\` wird \`"0"\` gerendert statt nichts. Nutze stattdessen \`{count > 0 && ...}\`.`,
        codeExamples: [
          {
            title: 'Alle Patterns im Überblick',
            js: `import { useState } from 'react';

function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [error, setError] = useState(null);

  // Pattern 1: Frühes Return
  if (error) {
    return <p className="error">Fehler: {error}</p>;
  }

  return (
    <div>
      {/* Pattern 2: Ternärer Operator */}
      {isLoggedIn ? (
        <h1>Willkommen zurück!</h1>
      ) : (
        <h1>Bitte einloggen</h1>
      )}

      {/* Pattern 3: Logisches UND */}
      {notifications.length > 0 && (
        <p>{notifications.length} neue Benachrichtigungen</p>
      )}

      <button onClick={() => setIsLoggedIn(prev => !prev)}>
        {isLoggedIn ? 'Ausloggen' : 'Einloggen'}
      </button>
    </div>
  );
}`,
            ts: `import { useState } from 'react';

function Dashboard(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [notifications, setNotifications] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  if (error) {
    return <p className="error">Fehler: {error}</p>;
  }

  return (
    <div>
      {isLoggedIn ? (
        <h1>Willkommen zurück!</h1>
      ) : (
        <h1>Bitte einloggen</h1>
      )}

      {notifications.length > 0 && (
        <p>{notifications.length} neue Benachrichtigungen</p>
      )}

      <button onClick={() => setIsLoggedIn(prev => !prev)}>
        {isLoggedIn ? 'Ausloggen' : 'Einloggen'}
      </button>
    </div>
  );
}`,
          },
        ],
      },
      {
        id: 're-dynamic-styling',
        title: 'CSS & dynamisches Styling',
        duration: '8 Min.',
        explanation: `Es gibt verschiedene Wege, Komponenten in React zu stylen:

- **CSS-Datei importieren**: \`import './Button.css'\` – einfach, aber global.
- **Inline Styles**: \`style={{ color: 'red' }}\` – ein JavaScript-Objekt, Properties in camelCase.
- **Dynamische Klassen**: Klassen basierend auf State oder Props setzen.
- **CSS-Module**: \`import styles from './Button.module.css'\` – lokal gescoped (keine Konflikte).

**Best Practice**: CSS-Dateien neben die Komponente legen (\`Button.tsx\` + \`Button.css\`). Für dynamische Styles sind bedingte Klassen am performantesten.`,
        codeExamples: [
          {
            title: 'Dynamische Klassen & Inline Styles',
            js: `import { useState } from 'react';
import './Tab.css';

function Tab({ label, isActive, onClick }) {
  return (
    <button
      className={'tab' + (isActive ? ' tab--active' : '')}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

// Inline Styles (z. B. für dynamische Werte)
function ProgressBar({ percent }) {
  return (
    <div className="progress">
      <div
        className="progress__fill"
        style={{
          width: percent + '%',
          backgroundColor: percent === 100 ? '#4caf50' : '#ff9800',
        }}
      />
    </div>
  );
}`,
            ts: `import { useState } from 'react';
import './Tab.css';

type TabProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

function Tab({ label, isActive, onClick }: TabProps) {
  return (
    <button
      className={'tab' + (isActive ? ' tab--active' : '')}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

type ProgressBarProps = { percent: number };

function ProgressBar({ percent }: ProgressBarProps) {
  return (
    <div className="progress">
      <div
        className="progress__fill"
        style={{
          width: percent + '%',
          backgroundColor: percent === 100 ? '#4caf50' : '#ff9800',
        }}
      />
    </div>
  );
}`,
          },
        ],
      },
      {
        id: 're-lists',
        title: 'Listen dynamisch rendern',
        duration: '8 Min.',
        explanation: `Um Listen in React zu rendern, nutzt du **\`map()\`** direkt im JSX. Jedes Element in der Liste braucht ein **eindeutiges \`key\`-Prop** – das hilft React, Elemente effizient zu aktualisieren.

Regeln für Keys:
- Nutze eine **stabile, eindeutige ID** aus deinen Daten (z. B. Datenbank-ID).
- **Nicht den Array-Index als Key verwenden**, wenn sich die Reihenfolge ändern kann – das führt zu Bugs.
- Keys müssen nur **unter Geschwistern** eindeutig sein, nicht global.`,
        codeExamples: [
          {
            title: 'Liste mit map() & key',
            js: `const COURSES = [
  { id: 'c1', title: 'React', level: 'Anfänger' },
  { id: 'c2', title: 'Next.js', level: 'Fortgeschritten' },
  { id: 'c3', title: 'TypeScript', level: 'Anfänger' },
];

function CourseList() {
  return (
    <ul>
      {COURSES.map(course => (
        <li key={course.id}>
          <strong>{course.title}</strong> – {course.level}
        </li>
      ))}
    </ul>
  );
}

// Interaktiv: Elemente entfernen
function EditableCourseList() {
  const [courses, setCourses] = useState(COURSES);

  function handleRemove(id) {
    setCourses(prev => prev.filter(c => c.id !== id));
  }

  return (
    <ul>
      {courses.map(course => (
        <li key={course.id}>
          {course.title}
          <button onClick={() => handleRemove(course.id)}>×</button>
        </li>
      ))}
    </ul>
  );
}`,
            ts: `type Course = { id: string; title: string; level: string };

const COURSES: Course[] = [
  { id: 'c1', title: 'React', level: 'Anfänger' },
  { id: 'c2', title: 'Next.js', level: 'Fortgeschritten' },
  { id: 'c3', title: 'TypeScript', level: 'Anfänger' },
];

function CourseList(): JSX.Element {
  return (
    <ul>
      {COURSES.map(course => (
        <li key={course.id}>
          <strong>{course.title}</strong> – {course.level}
        </li>
      ))}
    </ul>
  );
}

function EditableCourseList(): JSX.Element {
  const [courses, setCourses] = useState<Course[]>(COURSES);

  function handleRemove(id: string): void {
    setCourses(prev => prev.filter(c => c.id !== id));
  }

  return (
    <ul>
      {courses.map(course => (
        <li key={course.id}>
          {course.title}
          <button onClick={() => handleRemove(course.id)}>×</button>
        </li>
      ))}
    </ul>
  );
}`,
          },
        ],
      },
      {
        id: 're-project-structure',
        title: 'Projektstruktur & Best Practices',
        duration: '7 Min.',
        explanation: `Eine gute Projektstruktur macht deinen Code wartbar und navigierbar. Empfohlener Aufbau:

src/
├── components/ (Wiederverwendbare UI-Komponenten)
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.css
│   └── Card/
│       ├── Card.tsx
│       └── Card.css
├── pages/ (Seitenkomponenten, Route-basiert)
├── data/ (Statische Daten, Konstanten)
├── types/ (TypeScript-Typen)
├── assets/ (Bilder, Fonts etc.)
├── App.tsx
└── main.tsx

Best Practices:
- **Eine Komponente pro Datei** – nicht mehrere Komponenten in eine Datei packen.
- **CSS neben die Komponente legen**: \`Button.tsx\` + \`Button.css\` im selben Ordner.
- **Exportstil konsistent halten**: Entweder Named Exports oder Default Exports, nicht mischen.
- **Komponenten klein halten**: Wenn eine Komponente zu groß wird, splitte sie auf.`,
        codeExamples: [
          {
            title: 'Komponenten-Ordner mit Co-Located CSS',
            js: `// components/Button/Button.jsx
import './Button.css';

export function Button({ children, variant = 'primary', ...props }) {
  return (
    <button className={'btn btn--' + variant} {...props}>
      {children}
    </button>
  );
}

// components/Button/Button.css
// .btn { padding: 8px 16px; border: none; border-radius: 6px; }
// .btn--primary { background: #7c3aed; color: white; }
// .btn--secondary { background: #e5e7eb; color: #1f2937; }

// Verwendung in einer Seite:
// pages/Home.jsx
import { Button } from '../components/Button/Button';

export function Home() {
  return (
    <main>
      <h1>Startseite</h1>
      <Button>Los geht's</Button>
      <Button variant="secondary">Abbrechen</Button>
    </main>
  );
}`,
            ts: `// components/Button/Button.tsx
import './Button.css';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button className={'btn btn--' + variant} {...props}>
      {children}
    </button>
  );
}

// Verwendung:
import { Button } from '../components/Button/Button';

export function Home(): JSX.Element {
  return (
    <main>
      <h1>Startseite</h1>
      <Button>Los geht's</Button>
      <Button variant="secondary">Abbrechen</Button>
    </main>
  );
}`,
          },
        ],
      },
      {
        id: 'rdd-jsx-alternatives',
        title: 'JSX unter der Haube & Fragments',
        duration: '10 Min.',
        explanation: `JSX ist **syntaktischer Zucker** für \`React.createElement()\`. Du musst JSX nicht verwenden – aber es ist wesentlich lesbarer. Wenn du verstehst, was im Hintergrund passiert, wirst du JSX-Fehler besser verstehen.

**Fragments** (\`<>...</>\` oder \`<Fragment>...</Fragment>\`) lösen das Problem, dass eine Komponente nur **ein** Wurzelelement zurückgeben darf, ohne ein unnötiges \`<div>\` ins DOM zu setzen.

Wann \`<Fragment key={...}>\` statt \`<>\`: Wenn du in einer \`map()\`-Schleife Fragments mit einem \`key\` brauchst.`,
        codeExamples: [
          {
            title: 'createElement vs. JSX',
            js: `import { createElement, Fragment } from 'react';

// JSX – so schreibst du es normalerweise:
function GreetingJSX() {
  return (
    <div>
      <h1>Hallo!</h1>
      <p>Willkommen bei React</p>
    </div>
  );
}

// Dasselbe ohne JSX – so sieht es nach dem Kompilieren aus:
function GreetingRaw() {
  return createElement('div', null,
    createElement('h1', null, 'Hallo!'),
    createElement('p', null, 'Willkommen bei React')
  );
}

// Fragment mit Key in einer Liste
function ItemList({ items }) {
  return items.map(item => (
    <Fragment key={item.id}>
      <dt>{item.term}</dt>
      <dd>{item.definition}</dd>
    </Fragment>
  ));
}`,
            ts: `import { createElement, Fragment } from 'react';

// JSX – die normale Schreibweise
function GreetingJSX(): JSX.Element {
  return (
    <div>
      <h1>Hallo!</h1>
      <p>Willkommen bei React</p>
    </div>
  );
}

// Ohne JSX – nach dem Kompilieren
function GreetingRaw(): JSX.Element {
  return createElement('div', null,
    createElement('h1', null, 'Hallo!'),
    createElement('p', null, 'Willkommen bei React')
  );
}

type Item = { id: string; term: string; definition: string };

function ItemList({ items }: { items: Item[] }): JSX.Element {
  return (
    <>
      {items.map(item => (
        <Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.definition}</dd>
        </Fragment>
      ))}
    </>
  );
}`,
          },
        ],
      },
      {
        id: 'rdd-splitting-components',
        title: 'Komponenten aufteilen & Wann splitten?',
        duration: '12 Min.',
        explanation: `Eine der wichtigsten Fähigkeiten in React ist zu wissen, **wann** eine Komponente aufgeteilt werden sollte. Anzeichen dafür:

- Die Komponente ist **lang** (> ~100 Zeilen) und nicht mehr auf einen Blick erfassbar.
- Teile der Komponente verwalten **eigenen State**, der den Rest nicht betrifft.
- Teile sind **wiederverwendbar** oder könnten es sein.
- Die Komponente mischt **verschiedene Verantwortlichkeiten** (z. B. Datenlogik + UI).

**Aufteilen nach Feature & State**: Wenn nur ein Teil der UI State braucht, extrahiere ihn – so rendert nicht die ganze große Komponente neu, wenn sich nur ein kleiner Teil ändert.

**Komponenteninstanzen sind isoliert**: Jede Instanz einer Komponente hat ihren **eigenen State**. Zwei \`<Counter />\`-Elemente beeinflussen sich nicht gegenseitig.`,
        codeExamples: [
          {
            title: 'Vorher: Alles in einer Komponente',
            js: `// ❌ Zu viel in einer Komponente
function ProductPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [cart, setCart] = useState([]);

  // Filtering, sorting, cart logic, rendering...
  // 200+ Zeilen...
}

// ✅ Aufgeteilt nach Feature & State
function ProductPage() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <ProductSearch onAddToCart={(p) => setCart(c => [...c, p])} />
      <CartSummary items={cart} />
    </div>
  );
}

function ProductSearch({ onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  // Nur Search-relevanter State hier

  return (
    <div>
      <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      {/* Produktliste mit Filter/Sort */}
    </div>
  );
}`,
            ts: `// ✅ Aufgeteilt nach Feature & State
type Product = { id: string; name: string; price: number };

function ProductPage(): JSX.Element {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <div>
      <ProductSearch onAddToCart={(p) => setCart(c => [...c, p])} />
      <CartSummary items={cart} />
    </div>
  );
}

type ProductSearchProps = { onAddToCart: (product: Product) => void };

function ProductSearch({ onAddToCart }: ProductSearchProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sortBy, setSortBy] = useState<'name' | 'price'>('name');

  return (
    <div>
      <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
      {/* Produktliste mit Filter/Sort */}
    </div>
  );
}`,
          },
          {
            title: 'Instanzen sind isoliert',
            js: `function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>Zähler: {count}</button>;
}

// Jede Instanz hat eigenen State!
function App() {
  return (
    <div>
      <Counter /> {/* eigener count */}
      <Counter /> {/* eigener count */}
      <Counter /> {/* eigener count */}
    </div>
  );
}`,
            ts: `function Counter(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  return <button onClick={() => setCount(c => c + 1)}>Zähler: {count}</button>;
}

function App(): JSX.Element {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}`,
          },
        ],
      },
      {
        id: 'rdd-forwarding-props',
        title: 'Props forwarden & Flexible Komponenten',
        duration: '12 Min.',
        explanation: `Wenn du Wrapper-Komponenten baust (z. B. einen eigenen \`<Button>\`), willst du oft **alle Standard-HTML-Attribute** an das innere Element weiterleiten. Das Muster: **Rest-Props sammeln und spreaden**.

Zusätzlich kannst du Komponenten dynamischer machen:
- **Default Prop Values**: Mit Destructuring-Defaults.
- **Dynamischer Elementtyp**: Über ein Prop bestimmen, welches HTML-Element gerendert wird (\`as\`-Pattern).
- **Multiple JSX Slots**: Statt nur \`children\` kannst du mehrere benannte Props für verschiedene Bereiche nutzen.`,
        codeExamples: [
          {
            title: 'Props forwarden mit Rest/Spread',
            js: `// ❌ Problem: onClick, disabled etc. gehen verloren
function Button({ label }) {
  return <button className="btn">{label}</button>;
}
<Button label="Senden" onClick={handleClick} /> // onClick wird ignoriert!

// ✅ Lösung: Rest-Props sammeln und spreaden
function Button({ children, variant = 'primary', ...rest }) {
  return (
    <button className={'btn btn--' + variant} {...rest}>
      {children}
    </button>
  );
}

// Jetzt funktioniert alles:
<Button onClick={handleClick} disabled={isLoading}>
  Senden
</Button>`,
            ts: `type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, variant = 'primary', ...rest }: ButtonProps) {
  return (
    <button className={'btn btn--' + variant} {...rest}>
      {children}
    </button>
  );
}

// Alle nativen Button-Attribute werden durchgereicht:
<Button onClick={handleClick} disabled={isLoading} type="submit">
  Senden
</Button>`,
          },
          {
            title: 'Dynamischer Element-Typ (as-Pattern)',
            js: `function Container({ as: Tag = 'div', children, ...rest }) {
  return <Tag {...rest}>{children}</Tag>;
}

// Verwendung:
<Container>Normales div</Container>
<Container as="section" className="hero">Section-Element</Container>
<Container as="article" id="post-1">Artikel</Container>`,
            ts: `type ContainerProps<T extends React.ElementType = 'div'> = {
  as?: T;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<T>;

function Container<T extends React.ElementType = 'div'>({
  as,
  children,
  ...rest
}: ContainerProps<T>) {
  const Tag = as || 'div';
  return <Tag {...rest}>{children}</Tag>;
}

<Container>Normales div</Container>
<Container as="section" className="hero">Section</Container>`,
          },
          {
            title: 'Multiple JSX Slots',
            js: `// Statt nur children – mehrere benannte Bereiche
function Dialog({ title, actions, children }) {
  return (
    <div className="dialog">
      <header className="dialog__header">
        <h2>{title}</h2>
      </header>
      <div className="dialog__body">{children}</div>
      <footer className="dialog__actions">{actions}</footer>
    </div>
  );
}

// Verwendung:
<Dialog
  title="Löschen bestätigen"
  actions={
    <>
      <button onClick={onCancel}>Abbrechen</button>
      <button onClick={onDelete}>Löschen</button>
    </>
  }
>
  <p>Bist du sicher, dass du das löschen willst?</p>
</Dialog>`,
            ts: `import { type ReactNode } from 'react';

type DialogProps = {
  title: string;
  actions: ReactNode;
  children: ReactNode;
};

function Dialog({ title, actions, children }: DialogProps) {
  return (
    <div className="dialog">
      <header className="dialog__header">
        <h2>{title}</h2>
      </header>
      <div className="dialog__body">{children}</div>
      <footer className="dialog__actions">{actions}</footer>
    </div>
  );
}`,
          },
        ],
      },
      {
        id: 'rdd-state-updates',
        title: 'State korrekt updaten',
        duration: '15 Min.',
        explanation: `State-Updates in React haben Regeln, die viele Anfänger stolpern lassen:

**Updater-Funktionen verwenden**: Wenn der neue State vom vorherigen abhängt, nutze immer \`setState(prev => ...)\` statt \`setState(state + 1)\`. Bei schnellen Klicks oder mehrfachen Updates im selben Render-Zyklus geht sonst Information verloren.

**Objekte und Arrays immutabel updaten**: React erkennt Änderungen nur, wenn du ein **neues Objekt/Array** erzeugst (per Spread). Mutation des bestehenden Objekts triggert kein Re-Render.

**Verschachtelte State-Updates**: Bei tief verschachtelten Objekten wird Spread umständlich. Halte deinen State daher möglichst **flach**.`,
        codeExamples: [
          {
            title: 'Updater-Funktion – warum nötig?',
            js: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleTripleIncrement() {
    // ❌ Ergebnis: count + 1 (nicht + 3!)
    // Alle drei lesen denselben Snapshot von count
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

    // ✅ Ergebnis: count + 3
    // Updater-Funktion liest immer den neuesten Stand
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }

  return <button onClick={handleTripleIncrement}>{count}</button>;
}`,
            ts: `import { useState } from 'react';

function Counter(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  function handleTripleIncrement(): void {
    // ❌ Ergebnis: count + 1 (nicht + 3!)
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);

    // ✅ Updater-Funktion
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }

  return <button onClick={handleTripleIncrement}>{count}</button>;
}`,
          },
          {
            title: 'Immutable Object- & Array-Updates',
            js: `import { useState } from 'react';

function App() {
  const [user, setUser] = useState({ name: 'Max', scores: [10, 20] });

  // ❌ MUTATION – React erkennt keine Änderung!
  function badUpdate() {
    user.name = 'Anna';         // mutiert das bestehende Objekt
    user.scores.push(30);       // mutiert das bestehende Array
    setUser(user);              // gleiche Referenz → kein Re-Render!
  }

  // ✅ Immutabel – neues Objekt erzeugen
  function goodUpdate() {
    setUser(prev => ({
      ...prev,
      name: 'Anna',
      scores: [...prev.scores, 30],
    }));
  }

  // ✅ Element aus Array entfernen
  function removeScore(index) {
    setUser(prev => ({
      ...prev,
      scores: prev.scores.filter((_, i) => i !== index),
    }));
  }

  // ✅ Element in Array aktualisieren
  function doubleScore(index) {
    setUser(prev => ({
      ...prev,
      scores: prev.scores.map((s, i) => i === index ? s * 2 : s),
    }));
  }

  return <p>{user.name}: {user.scores.join(', ')}</p>;
}`,
            ts: `import { useState } from 'react';

type User = { name: string; scores: number[] };

function App(): JSX.Element {
  const [user, setUser] = useState<User>({ name: 'Max', scores: [10, 20] });

  function goodUpdate(): void {
    setUser(prev => ({
      ...prev,
      name: 'Anna',
      scores: [...prev.scores, 30],
    }));
  }

  function removeScore(index: number): void {
    setUser(prev => ({
      ...prev,
      scores: prev.scores.filter((_, i) => i !== index),
    }));
  }

  function doubleScore(index: number): void {
    setUser(prev => ({
      ...prev,
      scores: prev.scores.map((s, i) => i === index ? s * 2 : s),
    }));
  }

  return <p>{user.name}: {user.scores.join(', ')}</p>;
}`,
          },
        ],
      },
      {
        id: 'rdd-two-way-binding',
        title: 'Formulare & Two-Way-Binding',
        duration: '10 Min.',
        explanation: `In React sind Formular-Elemente standardmäßig **unkontrolliert** – der Browser verwaltet den Wert. Für die meisten Fälle willst du **kontrollierte Komponenten**: Der State ist die Single Source of Truth, und das Input verändert sich nur über den Setter.

**Two-Way-Binding** in React = \`value\` + \`onChange\` zusammen:
1. \`value={state}\` – React kontrolliert, was angezeigt wird.
2. \`onChange={e => setState(e.target.value)}\` – Benutzereingaben aktualisieren den State.

Für mehrdimensionale Listen (z. B. ein Spielfeld) brauchst du verschachtelte \`map()\`-Aufrufe und sorgfältige immutable Updates.`,
        codeExamples: [
          {
            title: 'Kontrolliertes Formular',
            js: `import { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Login:', { email, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        E-Mail
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Passwort
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <button type="submit" disabled={!email || !password}>
        Einloggen
      </button>
    </form>
  );
}`,
            ts: `import { useState, type FormEvent } from 'react';

function LoginForm(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log('Login:', { email, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        E-Mail
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label>
        Passwort
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <button type="submit" disabled={!email || !password}>
        Einloggen
      </button>
    </form>
  );
}`,
          },
          {
            title: 'Mehrdimensionale Liste (z. B. Spielfeld)',
            js: `import { useState } from 'react';

const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function TicTacToe() {
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [isX, setIsX] = useState(true);

  function handleClick(row, col) {
    if (board[row][col]) return; // Feld schon belegt

    setBoard(prev =>
      prev.map((r, ri) =>
        ri !== row ? r : r.map((cell, ci) =>
          ci !== col ? cell : (isX ? 'X' : 'O')
        )
      )
    );
    setIsX(prev => !prev);
  }

  return (
    <div className="board">
      {board.map((row, ri) => (
        <div key={ri} className="row">
          {row.map((cell, ci) => (
            <button key={ci} onClick={() => handleClick(ri, ci)}>
              {cell ?? '·'}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}`,
            ts: `import { useState } from 'react';

type Cell = 'X' | 'O' | null;
type Board = Cell[][];

const INITIAL_BOARD: Board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function TicTacToe(): JSX.Element {
  const [board, setBoard] = useState<Board>(INITIAL_BOARD);
  const [isX, setIsX] = useState<boolean>(true);

  function handleClick(row: number, col: number): void {
    if (board[row][col]) return;

    setBoard(prev =>
      prev.map((r, ri) =>
        ri !== row ? r : r.map((cell, ci) =>
          ci !== col ? cell : (isX ? 'X' : 'O')
        )
      )
    );
    setIsX(prev => !prev);
  }

  return (
    <div className="board">
      {board.map((row, ri) => (
        <div key={ri} className="row">
          {row.map((cell, ci) => (
            <button key={ci} onClick={() => handleClick(ri, ci)}>
              {cell ?? '·'}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}`,
          },
        ],
      },
      {
        id: 'rdd-lifting-state',
        title: 'Lifting State Up & Sharing State',
        duration: '15 Min.',
        explanation: `Wenn mehrere Komponenten **denselben State** brauchen, muss er in ihren **gemeinsamen Elternteil** gehoben werden – das nennt man **Lifting State Up**.

Das Pattern:
1. State in der **übergeordneten Komponente** definieren.
2. Den **Wert als Prop** nach unten geben.
3. Die **Setter-Funktion als Callback-Prop** nach unten geben.

**Wann NICHT liften**: Wenn nur eine Komponente den State braucht, lass ihn dort. Unnötiges Hochziehen macht den Code komplexer und führt zu unnötigen Re-Renders.

**Alternative zu Lifting State Up**: Für tief verschachtelte Komponenten, wo Props durch viele Ebenen gereicht werden müssten (Prop Drilling), gibt es Context API oder State-Management-Bibliotheken – das kommt in späteren Kapiteln.`,
        codeExamples: [
          {
            title: 'State hochziehen',
            js: `import { useState } from 'react';

// State liegt im gemeinsamen Elternteil
function App() {
  const [selectedPlayer, setSelectedPlayer] = useState('Spieler 1');

  return (
    <div>
      <PlayerSelector
        current={selectedPlayer}
        onChange={setSelectedPlayer}
      />
      <GameBoard player={selectedPlayer} />
    </div>
  );
}

// Kind 1: Zeigt & ändert den State
function PlayerSelector({ current, onChange }) {
  return (
    <div>
      <p>Aktuell: {current}</p>
      <button onClick={() => onChange('Spieler 1')}>Spieler 1</button>
      <button onClick={() => onChange('Spieler 2')}>Spieler 2</button>
    </div>
  );
}

// Kind 2: Liest den State
function GameBoard({ player }) {
  return <p>{player} ist am Zug.</p>;
}`,
            ts: `import { useState } from 'react';

function App(): JSX.Element {
  const [selectedPlayer, setSelectedPlayer] = useState<string>('Spieler 1');

  return (
    <div>
      <PlayerSelector
        current={selectedPlayer}
        onChange={setSelectedPlayer}
      />
      <GameBoard player={selectedPlayer} />
    </div>
  );
}

type PlayerSelectorProps = {
  current: string;
  onChange: (player: string) => void;
};

function PlayerSelector({ current, onChange }: PlayerSelectorProps): JSX.Element {
  return (
    <div>
      <p>Aktuell: {current}</p>
      <button onClick={() => onChange('Spieler 1')}>Spieler 1</button>
      <button onClick={() => onChange('Spieler 2')}>Spieler 2</button>
    </div>
  );
}

function GameBoard({ player }: { player: string }): JSX.Element {
  return <p>{player} ist am Zug.</p>;
}`,
          },
        ],
      },
      {
        id: 'rdd-computed-values',
        title: 'Berechnete Werte & unnötigen State vermeiden',
        duration: '12 Min.',
        explanation: `Ein häufiger Fehler: State für Werte anlegen, die sich **direkt aus vorhandenem State berechnen** lassen. Das führt zu Synchronisations-Bugs und unnötiger Komplexität.

**Faustregel**: Wenn ein Wert aus State oder Props ableitbar ist, berechne ihn direkt – kein extra \`useState\` dafür.

**Intersecting States vermeiden**: Wenn zwei State-Werte sich widersprechen können (z. B. \`items[]\` und \`selectedItem\`), speichere nur die ID und leite das Objekt ab.

**Computed Values liften**: Berechnungen können auch in der Elternkomponente stattfinden und als Prop nach unten gegeben werden. Das hält Kindkomponenten schlank.`,
        codeExamples: [
          {
            title: 'Derived State statt extra useState',
            js: `import { useState } from 'react';

function ShoppingCart() {
  const [items, setItems] = useState([
    { id: 1, name: 'React-Buch', price: 35, qty: 1 },
    { id: 2, name: 'TypeScript-Kurs', price: 49, qty: 2 },
  ]);

  // ❌ NICHT so – getrennter State für abgeleiteten Wert:
  // const [total, setTotal] = useState(133);
  // Du müsstest total immer manuell synchronisieren!

  // ✅ Direkt berechnen – immer korrekt
  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemCount = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div>
      <p>{itemCount} Artikel – Gesamt: {total} €</p>
      {items.map(item => (
        <p key={item.id}>{item.name}: {item.price} € × {item.qty}</p>
      ))}
    </div>
  );
}`,
            ts: `import { useState } from 'react';

type CartItem = { id: number; name: string; price: number; qty: number };

function ShoppingCart(): JSX.Element {
  const [items, setItems] = useState<CartItem[]>([
    { id: 1, name: 'React-Buch', price: 35, qty: 1 },
    { id: 2, name: 'TypeScript-Kurs', price: 49, qty: 2 },
  ]);

  // ✅ Direkt berechnen
  const total: number = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const itemCount: number = items.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div>
      <p>{itemCount} Artikel – Gesamt: {total} €</p>
      {items.map(item => (
        <p key={item.id}>{item.name}: {item.price} € × {item.qty}</p>
      ))}
    </div>
  );
}`,
          },
          {
            title: 'Intersecting State vermeiden',
            js: `import { useState } from 'react';

const COURSES = [
  { id: 'c1', title: 'React Basics', level: 'Anfänger' },
  { id: 'c2', title: 'Advanced React', level: 'Profi' },
];

function CourseSelector() {
  // ❌ Doppelter State – kann out-of-sync geraten:
  // const [courses] = useState(COURSES);
  // const [selectedCourse, setSelectedCourse] = useState(COURSES[0]);

  // ✅ Nur die ID speichern, Objekt ableiten:
  const [selectedId, setSelectedId] = useState('c1');
  const selectedCourse = COURSES.find(c => c.id === selectedId);

  return (
    <div>
      {COURSES.map(c => (
        <button key={c.id} onClick={() => setSelectedId(c.id)}>
          {c.title}
        </button>
      ))}
      {selectedCourse && <p>Gewählt: {selectedCourse.title}</p>}
    </div>
  );
}`,
            ts: `import { useState } from 'react';

type Course = { id: string; title: string; level: string };

const COURSES: Course[] = [
  { id: 'c1', title: 'React Basics', level: 'Anfänger' },
  { id: 'c2', title: 'Advanced React', level: 'Profi' },
];

function CourseSelector(): JSX.Element {
  // ✅ Nur ID speichern, Objekt ableiten
  const [selectedId, setSelectedId] = useState<string>('c1');
  const selectedCourse = COURSES.find(c => c.id === selectedId);

  return (
    <div>
      {COURSES.map(c => (
        <button key={c.id} onClick={() => setSelectedId(c.id)}>
          {c.title}
        </button>
      ))}
      {selectedCourse && <p>Gewählt: {selectedCourse.title}</p>}
    </div>
  );
}`,
          },
        ],
      },
      {
        id: 'rdd-data-architecture',
        title: 'Daten auslagern & Projektarchitektur',
        duration: '8 Min.',
        explanation: `Wenn dein Projekt wächst, gehören **statische Daten und Konstanten** nicht inline in Komponenten. Lagere sie in eigene Dateien aus:

- **\`data/\`-Ordner**: Für statische Datensätze, Konfiguration, Dummy-Daten.
- **\`public/\` vs. \`assets/\`**: Dateien in \`public/\` werden 1:1 kopiert (für Favicons, Robots.txt). Dateien in \`src/assets/\` werden vom Bundler verarbeitet und optimiert (Bilder, SVGs).
- **Konstanten raus aus Komponenten**: Werte, die sich nicht ändern, gehören außerhalb der Komponentenfunktion, um sie nicht bei jedem Render neu zu erzeugen.

**Nicht alles muss eine Komponente sein**: statische Hilfslogik, Daten-Transformationen oder Konstanten gehören in eigene Dateien – nicht in Komponenten verpackt.`,
        codeExamples: [
          {
            title: 'Daten auslagern',
            js: `// data/courses.js
export const CORE_CONCEPTS = [
  { id: 'c1', title: 'Components', icon: '🧩', description: 'Bausteine der UI' },
  { id: 'c2', title: 'JSX', icon: '📝', description: 'HTML-ähnliche Syntax' },
  { id: 'c3', title: 'Props', icon: '📦', description: 'Daten an Kinder übergeben' },
  { id: 'c4', title: 'State', icon: '⚡', description: 'Reaktive Daten' },
];

// components/ConceptList.jsx
import { CORE_CONCEPTS } from '../data/courses';

// Konstante AUSSERHALB der Komponente – wird nur einmal erzeugt
const BADGE_COLORS = {
  Components: '#e0f2fe',
  JSX: '#fef3c7',
  Props: '#ede9fe',
  State: '#fce7f3',
};

function ConceptList() {
  return (
    <ul>
      {CORE_CONCEPTS.map(concept => (
        <li key={concept.id}>
          <span>{concept.icon}</span>
          <strong>{concept.title}</strong>
          <p>{concept.description}</p>
        </li>
      ))}
    </ul>
  );
}`,
            ts: `// data/courses.ts
export type CoreConcept = {
  id: string;
  title: string;
  icon: string;
  description: string;
};

export const CORE_CONCEPTS: CoreConcept[] = [
  { id: 'c1', title: 'Components', icon: '🧩', description: 'Bausteine der UI' },
  { id: 'c2', title: 'JSX', icon: '📝', description: 'HTML-ähnliche Syntax' },
  { id: 'c3', title: 'Props', icon: '📦', description: 'Daten an Kinder übergeben' },
  { id: 'c4', title: 'State', icon: '⚡', description: 'Reaktive Daten' },
];

// components/ConceptList.tsx
import { CORE_CONCEPTS } from '../data/courses';

function ConceptList(): JSX.Element {
  return (
    <ul>
      {CORE_CONCEPTS.map(concept => (
        <li key={concept.id}>
          <span>{concept.icon}</span>
          <strong>{concept.title}</strong>
          <p>{concept.description}</p>
        </li>
      ))}
    </ul>
  );
}`,
          },
        ],
      },
    ],
  },
  {
    id: 'styling-react',
    title: 'Abschnitt 6: Styling React Components',
    slug: 'styling-react',
    shortDescription: 'Alle Wege, React-Komponenten zu stylen: Vanilla CSS, CSS Modules, Styled Components und Tailwind CSS.',
    lessons: [
      {
        id: 'sty-vanilla-css',
        title: 'Vanilla CSS & Inline Styles',
        duration: '12 Min.',
        explanation: `Der einfachste Weg, React-Komponenten zu stylen, ist **normales CSS** – du importierst eine CSS-Datei direkt in deine Komponente.

**Vorteile**: Einfach, kein Extra-Setup, jeder kennt CSS.
**Nachteile**: Styles sind **global** – ein \`.btn\`-Selektor gilt für die gesamte App. Das kann schnell zu Konflikten führen.

**Best Practice**: CSS-Dateien neben die Komponente legen und nach ihr benennen (\`Header.tsx\` + \`Header.css\`). CSS über mehrere Dateien aufteilen, statt alles in eine große Datei zu packen.

**Inline Styles** (\`style={{ ... }}\`) sind ein JavaScript-Objekt mit camelCase-Properties. Nützlich für **dynamische Werte** (z. B. Breite aus State), aber schlecht für Pseudo-Selektoren, Media Queries und Wartbarkeit.`,
        codeExamples: [
          {
            title: 'CSS-Datei importieren',
            js: `// Button.css
// .btn { padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; }
// .btn--primary { background: #7c3aed; color: white; }
// .btn--outline { background: transparent; border: 2px solid #7c3aed; color: #7c3aed; }

// Button.jsx
import './Button.css';

function Button({ children, variant = 'primary', ...rest }) {
  return (
    <button className={'btn btn--' + variant} {...rest}>
      {children}
    </button>
  );
}`,
            ts: `// Button.tsx
import './Button.css';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, variant = 'primary', ...rest }: ButtonProps) {
  return (
    <button className={'btn btn--' + variant} {...rest}>
      {children}
    </button>
  );
}`,
          },
          {
            title: 'Inline Styles & dynamisches Styling',
            js: `import { useState } from 'react';

function ProgressBar({ percent }) {
  // Inline-Style für dynamische Breite
  return (
    <div className="progress">
      <div
        style={{
          width: percent + '%',
          height: '8px',
          borderRadius: '4px',
          backgroundColor: percent >= 100 ? '#22c55e' : '#8b5cf6',
          transition: 'width 300ms ease',
        }}
      />
    </div>
  );
}

// Dynamische Klasse basierend auf State
function Input({ label, isValid }) {
  return (
    <label>
      {label}
      <input
        className={'input' + (!isValid ? ' input--error' : '')}
        style={{ borderColor: isValid ? undefined : '#ef4444' }}
      />
    </label>
  );
}`,
            ts: `import { useState } from 'react';

type ProgressBarProps = { percent: number };

function ProgressBar({ percent }: ProgressBarProps) {
  return (
    <div className="progress">
      <div
        style={{
          width: percent + '%',
          height: '8px',
          borderRadius: '4px',
          backgroundColor: percent >= 100 ? '#22c55e' : '#8b5cf6',
          transition: 'width 300ms ease',
        }}
      />
    </div>
  );
}

type InputProps = { label: string; isValid: boolean };

function Input({ label, isValid }: InputProps) {
  return (
    <label>
      {label}
      <input
        className={'input' + (!isValid ? ' input--error' : '')}
        style={{ borderColor: isValid ? undefined : '#ef4444' }}
      />
    </label>
  );
}`,
          },
        ],
      },
      {
        id: 'sty-css-modules',
        title: 'CSS Modules',
        duration: '10 Min.',
        explanation: `**CSS Modules** lösen das Scoping-Problem von Vanilla CSS: Jede Klasse wird automatisch **lokal** zur Komponente – keine Konflikte mehr.

So funktioniert es:
- Datei benennen: \`Button.module.css\` (das \`.module.\` ist wichtig!)
- Importieren als Objekt: \`import styles from './Button.module.css'\`
- Klassen verwenden: \`className={styles.btn}\`

Der Bundler generiert automatisch eindeutige Klassennamen wie \`Button_btn_x7a2f\`. Im CSS schreibst du ganz normales CSS – keine neue Syntax nötig.

**Vorteile**: Kein Namenskollisions-Risiko, normales CSS, funktioniert out-of-the-box mit Vite.
**Nachteile**: Dynamische Styles etwas umständlicher als bei CSS-in-JS.`,
        codeExamples: [
          {
            title: 'CSS Module einsetzen',
            js: `// Button.module.css
// .btn { padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; }
// .primary { background: #7c3aed; color: white; }
// .outline { background: transparent; border: 2px solid #7c3aed; }

// Button.jsx
import styles from './Button.module.css';

function Button({ children, variant = 'primary' }) {
  // styles.btn → 'Button_btn_x7a2f' (eindeutig!)
  const classes = styles.btn + ' ' + styles[variant];

  return <button className={classes}>{children}</button>;
}

// Im DOM:
// <button class="Button_btn_x7a2f Button_primary_k3m1">Klick</button>`,
            ts: `// Button.module.css
// .btn { padding: 8px 16px; border: none; border-radius: 6px; }
// .primary { background: #7c3aed; color: white; }
// .outline { background: transparent; border: 2px solid #7c3aed; }

// Button.tsx
import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
};

function Button({ children, variant = 'primary' }: ButtonProps) {
  const classes = styles.btn + ' ' + styles[variant];
  return <button className={classes}>{children}</button>;
}`,
          },
          {
            title: 'Dynamische Klassen mit CSS Modules',
            js: `import styles from './Alert.module.css';

function Alert({ type = 'info', children }) {
  // Mehrere Klassen kombinieren
  const className = [
    styles.alert,
    type === 'error' ? styles.error : '',
    type === 'success' ? styles.success : '',
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={className}>{children}</div>;
}

// Oder Template Literal:
function Alert2({ type = 'info', children }) {
  return (
    <div className={\`\${styles.alert} \${styles[type] ?? ''}\`}>
      {children}
    </div>
  );
}`,
            ts: `import styles from './Alert.module.css';

type AlertProps = {
  type?: 'info' | 'error' | 'success';
  children: React.ReactNode;
};

function Alert({ type = 'info', children }: AlertProps) {
  const className = [
    styles.alert,
    styles[type] ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={className}>{children}</div>;
}`,
          },
        ],
      },
      {
        id: 'sty-styled-components',
        title: 'Styled Components (CSS-in-JS)',
        duration: '15 Min.',
        explanation: `**Styled Components** ist eine populäre CSS-in-JS-Library. Du schreibst CSS direkt in JavaScript mit Tagged Template Literals. Jede Styled Component erzeugt automatisch eine React-Komponente mit einzigartigem Klassennamen.

**Vorteile**:
- Styles leben direkt bei der Komponente – keine separate CSS-Datei.
- Automatisches Scoping (wie CSS Modules).
- **Dynamische Styles über Props** – extrem mächtig.
- Pseudo-Selektoren, Nesting und Media Queries direkt unterstützt.

**Nachteile**:
- Zusätzliche Dependency (\`styled-components\`).
- Kann bei sehr vielen Komponenten die Bundle-Größe erhöhen.
- Lernkurve für die spezielle Syntax.

Mit \`styled(BaseComponent)\` kannst du bestehende Styled Components erweitern – ideal für Varianten.`,
        codeExamples: [
          {
            title: 'Grundlagen & dynamische Props',
            js: `import styled from 'styled-components';

// Basis-Button
const Button = styled.button\`
  padding: 8px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 200ms ease;

  /* Dynamisch basierend auf Props */
  background: \${(props) => props.variant === 'outline'
    ? 'transparent'
    : '#7c3aed'};
  color: \${(props) => props.variant === 'outline'
    ? '#7c3aed'
    : 'white'};
  border: 2px solid #7c3aed;

  /* Pseudo-Selektoren funktionieren direkt */
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Media Queries */
  @media (max-width: 768px) {
    width: 100%;
  }
\`;

function App() {
  return (
    <div>
      <Button>Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button disabled>Deaktiviert</Button>
    </div>
  );
}`,
            ts: `import styled from 'styled-components';

type ButtonVariant = 'primary' | 'outline';

const Button = styled.button<{ variant?: ButtonVariant }>\`
  padding: 8px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 200ms ease;

  background: \${(props) => props.variant === 'outline'
    ? 'transparent'
    : '#7c3aed'};
  color: \${(props) => props.variant === 'outline'
    ? '#7c3aed'
    : 'white'};
  border: 2px solid #7c3aed;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
\`;

function App(): JSX.Element {
  return (
    <div>
      <Button>Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button disabled>Deaktiviert</Button>
    </div>
  );
}`,
          },
          {
            title: 'Komponenten erweitern & Nesting',
            js: `import styled from 'styled-components';

// Basis-Komponente
const Card = styled.div\`
  padding: 20px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
\`;

// Erweiterte Variante
const HighlightCard = styled(Card)\`
  border-left: 4px solid #7c3aed;
  background: #faf5ff;
\`;

// Nesting – innere Elemente stylen
const Navbar = styled.nav\`
  display: flex;
  gap: 16px;
  padding: 16px;

  a {
    text-decoration: none;
    color: #4b5563;

    &:hover {
      color: #7c3aed;
    }

    &.active {
      font-weight: 700;
      color: #7c3aed;
    }
  }
\`;`,
            ts: `import styled from 'styled-components';

const Card = styled.div\`
  padding: 20px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
\`;

const HighlightCard = styled(Card)\`
  border-left: 4px solid #7c3aed;
  background: #faf5ff;
\`;

const Navbar = styled.nav\`
  display: flex;
  gap: 16px;
  padding: 16px;

  a {
    text-decoration: none;
    color: #4b5563;

    &:hover { color: #7c3aed; }
    &.active { font-weight: 700; color: #7c3aed; }
  }
\`;`,
          },
        ],
      },
      {
        id: 'sty-tailwind',
        title: 'Tailwind CSS',
        duration: '15 Min.',
        explanation: `**Tailwind CSS** ist ein Utility-First CSS-Framework. Statt eigene Klassen zu schreiben, nutzt du vordefinierte Utility-Klassen direkt im \`className\`.

**Setup mit Vite**: \`pnpm add -D tailwindcss @tailwindcss/vite\`, dann Plugin in \`vite.config.ts\` einbinden und \`@import "tailwindcss"\` in die CSS-Datei schreiben.

**Vorteile**:
- Extrem schnelle Entwicklung – kein Wechsel zwischen CSS- und JS-Dateien.
- Konsistentes Design-System (Spacing, Farben, Breakpoints).
- Nur genutzte Klassen landen im Bundle (Tree-Shaking).
- Responsive, Hover, Dark Mode direkt über Prefixe: \`md:\`, \`hover:\`, \`dark:\`.

**Nachteile**:
- Lange Klassenlisten können unübersichtlich werden.
- Lernkurve für die Utility-Klassen.
- Puristisches CSS-Wissen wird weniger trainiert.

**Dynamisches Styling**: Klassen per Template Literal oder mit Bibliotheken wie \`clsx\` zusammenbauen.`,
        codeExamples: [
          {
            title: 'Grundlegendes Tailwind-Styling',
            js: `// Statt CSS:
// .card { padding: 20px; border-radius: 12px; background: white; box-shadow: ... }

// Mit Tailwind – direkt im className:
function Card({ children, title }) {
  return (
    <div className="p-5 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-lg font-bold text-gray-900 mb-2">{title}</h2>
      <div className="text-gray-600 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

// Responsive: sm:, md:, lg: Prefixe
function Hero() {
  return (
    <section className="px-4 py-12 md:px-8 md:py-20 lg:px-16">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
        Willkommen
      </h1>
    </section>
  );
}`,
            ts: `type CardProps = {
  children: React.ReactNode;
  title: string;
};

function Card({ children, title }: CardProps) {
  return (
    <div className="p-5 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
      <h2 className="text-lg font-bold text-gray-900 mb-2">{title}</h2>
      <div className="text-gray-600 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function Hero(): JSX.Element {
  return (
    <section className="px-4 py-12 md:px-8 md:py-20 lg:px-16">
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
        Willkommen
      </h1>
    </section>
  );
}`,
          },
          {
            title: 'Dynamische Klassen & Pseudo-Selektoren',
            js: `// Dynamische Klassen basierend auf Props/State
function Button({ children, variant = 'primary', disabled }) {
  const baseClasses = 'px-4 py-2 rounded-lg font-semibold transition-all';

  const variantClasses = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700',
    outline: 'bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-50',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      className={baseClasses + ' ' + variantClasses[variant] + ' ' + disabledClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

// Pseudo-Selektoren via Prefixe
function Input({ label, error }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <input
        className={
          'mt-1 block w-full rounded-md border px-3 py-2 ' +
          'focus:outline-none focus:ring-2 ' +
          (error
            ? 'border-red-500 focus:ring-red-300'
            : 'border-gray-300 focus:ring-purple-300')
        }
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </label>
  );
}`,
            ts: `type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'danger';
  disabled?: boolean;
};

function Button({ children, variant = 'primary', disabled }: ButtonProps) {
  const baseClasses = 'px-4 py-2 rounded-lg font-semibold transition-all';

  const variantClasses: Record<string, string> = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700',
    outline: 'bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-50',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      className={baseClasses + ' ' + variantClasses[variant] + ' ' + disabledClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

type InputProps = { label: string; error?: string };

function Input({ label, error }: InputProps) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <input
        className={
          'mt-1 block w-full rounded-md border px-3 py-2 ' +
          'focus:outline-none focus:ring-2 ' +
          (error
            ? 'border-red-500 focus:ring-red-300'
            : 'border-gray-300 focus:ring-purple-300')
        }
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </label>
  );
}`,
          },
        ],
      },
      {
        id: 'sty-comparison',
        title: 'Vergleich & Wann was nutzen?',
        duration: '5 Min.',
        explanation: `Jeder Styling-Ansatz hat seine Berechtigung. Hier ein Überblick:

**Vanilla CSS**
- Für: Kleine Projekte, schneller Start.
- Gegen: Große Teams (Namenskonflikte).

**CSS Modules**
- Für: Mittlere bis große Projekte. Kein Extra-Setup nötig (Vite unterstützt es nativ).
- Gegen: Wenn du viel dynamisches Styling brauchst.

**Styled Components**
- Für: Stark komponentenbasierte Apps, viel dynamisches Styling.
- Gegen: Performance-kritische Apps, Team bevorzugt klassisches CSS.

**Tailwind CSS**
- Für: Schnelle Prototypen, konsistentes Design-System, große Teams.
- Gegen: Wenn du viel custom CSS brauchst oder lange Klassenlisten hasst.

**Empfehlung für React-Projekte**: CSS Modules oder Tailwind CSS. Beide funktionieren hervorragend mit TypeScript und haben keine Runtime-Kosten. Styled Components ist eine gute Alternative, wenn du CSS-in-JS bevorzugst.`,
        codeExamples: [
          {
            title: 'Derselbe Button – 4 Ansätze',
            js: `// 1. Vanilla CSS
import './Button.css';
function Button1({ children }) {
  return <button className="btn btn--primary">{children}</button>;
}

// 2. CSS Modules
import styles from './Button.module.css';
function Button2({ children }) {
  return <button className={styles.primary}>{children}</button>;
}

// 3. Styled Components
import styled from 'styled-components';
const Button3 = styled.button\`
  padding: 8px 16px;
  background: #7c3aed;
  color: white;
  border: none;
  border-radius: 6px;
\`;

// 4. Tailwind CSS
function Button4({ children }) {
  return (
    <button className="px-4 py-2 bg-purple-600 text-white rounded-md">
      {children}
    </button>
  );
}`,
            ts: `// 1. Vanilla CSS
import './Button.css';
function Button1({ children }: { children: React.ReactNode }) {
  return <button className="btn btn--primary">{children}</button>;
}

// 2. CSS Modules
import styles from './Button.module.css';
function Button2({ children }: { children: React.ReactNode }) {
  return <button className={styles.primary}>{children}</button>;
}

// 3. Styled Components
import styled from 'styled-components';
const Button3 = styled.button\`
  padding: 8px 16px;
  background: #7c3aed;
  color: white;
  border: none;
  border-radius: 6px;
\`;

// 4. Tailwind CSS
function Button4({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 bg-purple-600 text-white rounded-md">
      {children}
    </button>
  );
}`,
          },
        ],
      },
    ],
  },
  {
    id: 'debugging-react',
    title: 'Abschnitt 7: Debugging React Apps',
    slug: 'debugging-react',
    shortDescription: 'Fehlermeldungen verstehen, Browser-Debugger nutzen, React Strict Mode und React DevTools.',
    lessons: [
      {
        id: 'dbg-error-messages',
        title: 'React Fehlermeldungen verstehen',
        duration: '9 Min.',
        explanation: `Wenn etwas in deiner React-App schiefläuft, bekommst du Fehlermeldungen an verschiedenen Stellen:

**1. Terminal / Konsole (Build-Fehler)**:
Fehler in der Syntax oder fehlende Importe zeigt dir Vite direkt beim Kompilieren. Die Meldung enthält **Dateiname und Zeilennummer** – folge dem Pfad.

**2. Browser-Konsole (Laufzeitfehler)**:
Fehler, die erst zur Laufzeit auftreten (z. B. \`Cannot read properties of undefined\`). React zeigt oft einen **Error Overlay** direkt im Browser mit Stack-Trace.

**3. React-spezifische Warnungen**:
React gibt gelbe Warnungen in der Konsole aus, z. B. wenn ein \`key\`-Prop fehlt oder State falsch aktualisiert wird.

**Tipps zum Lesen von Fehlermeldungen**:
- Lies die **erste Zeile** – sie enthält den Fehlertyp und eine Beschreibung.
- Schau auf den **Component Stack** – er zeigt, welche Komponente den Fehler verursacht hat.
- Wenn der Fehler kryptisch ist: Die Fehlermeldung googlen (oder in ChatGPT eingeben) ist völlig legitim.`,
        codeExamples: [
          {
            title: 'Typische Fehler & Fixes',
            js: `// ❌ Fehler: "X is not defined"
// → Du hast vergessen, etwas zu importieren
// Fix:
import Header from './Header';

// ❌ Fehler: "Cannot read properties of undefined (reading 'name')"
// → Du greifst auf eine Property zu, die nicht existiert
function UserCard({ user }) {
  // Wenn user undefined ist → Crash!
  return <h2>{user.name}</h2>;
}

// ✅ Fix 1: Optional Chaining
function UserCard({ user }) {
  return <h2>{user?.name ?? 'Unbekannt'}</h2>;
}

// ❌ Fehler: "Each child in a list should have a unique 'key' prop"
// → Du renderst eine Liste ohne key
const items = ['A', 'B', 'C'];
// ❌ items.map(item => <li>{item}</li>)
// ✅ items.map((item, i) => <li key={item}>{item}</li>)

// ❌ Fehler: "Too many re-renders"
// → Du rufst setState direkt beim Rendern auf
function Bad() {
  const [count, setCount] = useState(0);
  // ❌ setCount(count + 1);  // Löst sofort Re-Render aus → Endlosschleife!
  // ✅ Nur in Event-Handlern oder useEffect aufrufen
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}`,
            ts: `// ❌ Fehler: "X is not defined"
// Fix: Import hinzufügen
import Header from './Header';

// ❌ "Cannot read properties of undefined (reading 'name')"
type User = { name: string };

// ✅ Fix: Optional Chaining + Fallback
function UserCard({ user }: { user?: User }) {
  return <h2>{user?.name ?? 'Unbekannt'}</h2>;
}

// ❌ "Each child in a list should have a unique 'key' prop"
const items: string[] = ['A', 'B', 'C'];
// ✅ items.map(item => <li key={item}>{item}</li>)

// ❌ "Too many re-renders"
// ✅ setState nur in Event-Handlern oder useEffect aufrufen
function Good(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}`,
          },
        ],
      },
      {
        id: 'dbg-debugger-devtools',
        title: 'Browser Debugger & React DevTools',
        duration: '11 Min.',
        explanation: `Neben \`console.log\` gibt es mächtigere Werkzeuge zum Debuggen:

**Browser Debugger (Chrome/Firefox DevTools)**:
- **Sources-Tab**: Hier findest du deinen Quellcode. Setze **Breakpoints**, indem du auf die Zeilennummer klickst.
- **Step Over / Step Into / Step Out**: Gehe Zeile für Zeile durch den Code.
- **Watch Expressions**: Beobachte Variablenwerte in Echtzeit.
- \`debugger;\`-Statement: Füge es direkt in den Code ein – der Browser pausiert dort automatisch.
- **Conditional Breakpoints**: Rechtsklick auf Zeilennummer → "Add conditional breakpoint" – pausiert nur, wenn die Bedingung wahr ist.

**React Developer Tools (Browser Extension)**:
- Installiere die Extension für Chrome oder Firefox.
- **Components-Tab**: Zeigt den Komponentenbaum an. Du kannst für jede Komponente **Props, State und Hooks** inspizieren und live bearbeiten.
- **Profiler-Tab**: Misst, welche Komponenten wie oft und wie lange rendern – nützlich für Performance-Optimierung.
- Du kannst im Components-Tab Komponenten suchen, State-Werte direkt ändern und so Szenarien testen, ohne den Code zu ändern.`,
        codeExamples: [
          {
            title: 'Debugging-Techniken',
            js: `import { useState } from 'react';

function BuggyCounter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    // Technik 1: console.log für schnelles Debugging
    console.log('Aktueller count:', count);

    // Technik 2: debugger-Statement → Browser pausiert hier
    debugger;

    // Technik 3: console.trace → zeigt den Call Stack
    console.trace('handleClick aufgerufen');

    setCount(prev => prev + 1);
  }

  // Technik 4: Werte direkt im JSX anzeigen (temporär)
  return (
    <div>
      <button onClick={handleClick}>Zähler: {count}</button>
      {/* Temporäres Debug-Output: */}
      <pre style={{ fontSize: 10, color: 'grey' }}>
        Debug: {JSON.stringify({ count, isEven: count % 2 === 0 })}
      </pre>
    </div>
  );
}

// Technik 5: Error Boundary (für Produktions-Fehler)
// Fängt Fehler in Kindkomponenten ab, statt die ganze App crashen zu lassen
// → Wird in einem späteren Kapitel erklärt`,
            ts: `import { useState } from 'react';

function BuggyCounter(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  function handleClick(): void {
    // console.log für schnelles Debugging
    console.log('Aktueller count:', count);

    // debugger-Statement → Browser pausiert hier
    debugger;

    // console.trace → zeigt den Call Stack
    console.trace('handleClick aufgerufen');

    setCount(prev => prev + 1);
  }

  return (
    <div>
      <button onClick={handleClick}>Zähler: {count}</button>
      {/* Temporäres Debug-Output: */}
      <pre style={{ fontSize: 10, color: 'grey' }}>
        Debug: {JSON.stringify({ count, isEven: count % 2 === 0 })}
      </pre>
    </div>
  );
}`,
          },
        ],
      },
      {
        id: 'dbg-strict-mode',
        title: 'React Strict Mode',
        duration: '6 Min.',
        explanation: `**\`<StrictMode>\`** ist ein Entwickler-Tool von React, das nur in der **Development-Umgebung** aktiv ist. In der Produktion hat es keinen Effekt.

Was Strict Mode macht:
- **Doppeltes Rendern**: Jede Komponente wird initial **zweimal** gerendert, um unsichere Seiteneffekte zu finden. Wenn du z. B. in einer Komponente direkt eine API aufrufst (ohne \`useEffect\`), fällt das hier auf.
- **Doppeltes Ausführen von Effects**: \`useEffect\`-Callbacks werden beim Mounten zweimal aufgerufen (mount → cleanup → mount), um zu prüfen, ob dein Cleanup korrekt funktioniert.
- **Veraltete APIs erkennen**: Warnt bei Nutzung von veralteten Lifecycle-Methoden oder Legacy-APIs.

**Warum verhält sich meine App in Dev anders?**
Wenn du \`console.log\` in einer Komponente hast und er **doppelt** erscheint, liegt das am Strict Mode – nicht an einem Bug. In Produktion passiert das nicht.

**Best Practice**: Lass \`<StrictMode>\` immer aktiviert – es hilft, Probleme früh zu finden.`,
        codeExamples: [
          {
            title: 'StrictMode aktivieren',
            js: `// main.jsx – der Standardaufbau
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Was passiert dadurch?
function MyComponent() {
  console.log('Render!');
  // In Dev: "Render!" erscheint ZWEIMAL
  // In Produktion: nur einmal

  return <p>Hallo Welt</p>;
}`,
            ts: `// main.tsx – der Standardaufbau
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Beispiel: Strict Mode findet unsichere Seiteneffekte
function BadComponent(): JSX.Element {
  // ❌ Seiteneffekt direkt beim Rendern (kein useEffect)
  // Strict Mode rendert 2x → API wird 2x aufgerufen → Bug erkannt!
  // fetch('/api/data').then(r => r.json());

  // ✅ Richtig: in useEffect packen (kommt in einem späteren Kapitel)
  // useEffect(() => {
  //   fetch('/api/data').then(r => r.json());
  // }, []);

  return <p>Daten laden...</p>;
}`,
          },
          {
            title: 'Typisches Strict-Mode-Verhalten',
            js: `import { useState } from 'react';

function Counter() {
  // In Dev mit StrictMode:
  // 1. React rendert die Komponente
  // 2. React verwirft das Ergebnis
  // 3. React rendert nochmal → dieses Ergebnis wird verwendet
  // → Stellt sicher, dass die Komponente "pure" ist

  const [count, setCount] = useState(0);

  // ❌ Das fällt auf, weil es beim 2. Render schiefgeht:
  // let items = [];
  // items.push('neuer Eintrag'); // Bei jedem Render wird gepusht!

  // ✅ State verwenden:
  const [items, setItems] = useState([]);

  return (
    <div>
      <p>Zähler: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
    </div>
  );
}`,
            ts: `import { useState } from 'react';

function Counter(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  // Strict Mode ruft Render 2x auf → findet unreine Logik
  // ✅ Kein Problem, wenn die Komponente pure ist:
  const doubled = count * 2; // Abgeleiteter Wert – immer gleich bei gleichem count

  return (
    <div>
      <p>Zähler: {count} (doppelt: {doubled})</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
    </div>
  );
}`,
          },
        ],
      },
    ],
  },
  {
    id: 'refs-portals',
    title: 'Abschnitt 8: Working with Refs & Portals',
    slug: 'refs-portals',
    shortDescription: 'useRef für DOM-Zugriff und Werte, Refs forwarden, useImperativeHandle, Modale und Portals.',
    lessons: [
      {
        id: 'rp-useref-dom',
        title: 'useRef – DOM-Elemente ansprechen',
        duration: '8 Min.',
        explanation: `Mit dem **\`useRef\`**-Hook kannst du eine **direkte Verbindung zu einem DOM-Element** herstellen. Das ist nützlich, wenn du:

- Einem Input den Fokus geben willst
- Die Scroll-Position lesen oder setzen musst
- Maße eines Elements brauchst (\`getBoundingClientRect()\`)
- Ein \`<dialog>\`-Element öffnen/schließen willst

So funktioniert es:
1. \`const inputRef = useRef(null)\` erstellt eine Ref.
2. \`ref={inputRef}\` am JSX-Element verbindet die Ref mit dem DOM-Knoten.
3. Über \`inputRef.current\` greifst du auf das echte DOM-Element zu.

**Wichtig**: Greife auf \`ref.current\` erst **nach** dem Rendern zu (z. B. in Event-Handlern oder \`useEffect\`), nicht direkt im Render-Body.`,
        codeExamples: [
          {
            title: 'Input fokussieren',
            js: `import { useRef } from 'react';

function SearchBar() {
  const inputRef = useRef(null);

  function handleClick() {
    // .current ist das echte DOM-Element
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Suchen..." />
      <button onClick={handleClick}>Fokus setzen</button>
    </div>
  );
}`,
            ts: `import { useRef } from 'react';

function SearchBar(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick(): void {
    inputRef.current?.focus();
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Suchen..." />
      <button onClick={handleClick}>Fokus setzen</button>
    </div>
  );
}`,
          },
          {
            title: 'Wert aus unkontrolliertem Input lesen',
            js: `import { useRef } from 'react';

function QuickForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    // Werte direkt aus dem DOM lesen statt über State
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    console.log({ name, email });

    // Formular zurücksetzen (DOM-Manipulation via Ref)
    nameRef.current.value = '';
    emailRef.current.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} placeholder="Name" />
      <input ref={emailRef} type="email" placeholder="E-Mail" />
      <button type="submit">Absenden</button>
    </form>
  );
}`,
            ts: `import { useRef, type FormEvent } from 'react';

function QuickForm(): JSX.Element {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const name = nameRef.current!.value;
    const email = emailRef.current!.value;
    console.log({ name, email });

    nameRef.current!.value = '';
    emailRef.current!.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} placeholder="Name" />
      <input ref={emailRef} type="email" placeholder="E-Mail" />
      <button type="submit">Absenden</button>
    </form>
  );
}`,
          },
        ],
      },
      {
        id: 'rp-refs-vs-state',
        title: 'Refs vs State & Refs für Werte',
        duration: '14 Min.',
        explanation: `**Refs und State haben unterschiedliche Aufgaben**. Die Entscheidung, was du wann nutzt:

| | \`useState\` | \`useRef\` |
|---|---|---|
| Löst Re-Render aus? | ✅ Ja | ❌ Nein |
| Wert sofort aktuell? | ❌ Nein (nächster Render) | ✅ Ja (\`.current\` direkt) |
| Überlebt Re-Renders? | ✅ Ja | ✅ Ja |
| Im JSX anzeigen? | ✅ Ja | ❌ Nicht sinnvoll |

**Refs für Nicht-DOM-Werte**: \`useRef\` ist nicht nur für DOM-Elemente! Du kannst damit **beliebige Werte** speichern, die Re-Renders überleben sollen, aber selbst **keinen** Re-Render auslösen:
- Timer-IDs (\`setTimeout\`, \`setInterval\`)
- Vorherige Werte speichern
- Zähler, die die UI nicht beeinflussen
- Externe Library-Instanzen

**Faustregel**: Wird der Wert in der UI angezeigt? → \`useState\`. Wird er nur intern gebraucht? → \`useRef\`.`,
        codeExamples: [
          {
            title: 'Timer mit Ref verwalten',
            js: `import { useState, useRef } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Timer-ID in Ref speichern – kein Re-Render nötig
  const timerRef = useRef(null);

  function handleStart() {
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTime(prev => prev + 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timerRef.current);
    setIsRunning(false);
  }

  function handleReset() {
    clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
  }

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const ms = Math.floor((time % 1000) / 10);

  return (
    <div>
      <p>
        {String(minutes).padStart(2, '0')}:
        {String(seconds).padStart(2, '0')}.
        {String(ms).padStart(2, '0')}
      </p>
      {isRunning ? (
        <button onClick={handleStop}>Stopp</button>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}`,
            ts: `import { useState, useRef } from 'react';

function Stopwatch(): JSX.Element {
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function handleStart(): void {
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTime(prev => prev + 10);
    }, 10);
  }

  function handleStop(): void {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsRunning(false);
  }

  function handleReset(): void {
    if (timerRef.current) clearInterval(timerRef.current);
    setTime(0);
    setIsRunning(false);
  }

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const ms = Math.floor((time % 1000) / 10);

  return (
    <div>
      <p>
        {String(minutes).padStart(2, '0')}:
        {String(seconds).padStart(2, '0')}.
        {String(ms).padStart(2, '0')}
      </p>
      {isRunning ? (
        <button onClick={handleStop}>Stopp</button>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}`,
          },
          {
            title: 'Vorherigen Wert merken',
            js: `import { useState, useRef, useEffect } from 'react';

function CounterWithPrevious() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    // Nach jedem Render den alten Wert speichern
    prevCountRef.current = count;
  });

  return (
    <div>
      <p>Aktuell: {count} | Vorher: {prevCountRef.current}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
    </div>
  );
}`,
            ts: `import { useState, useRef, useEffect } from 'react';

function CounterWithPrevious(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const prevCountRef = useRef<number>(0);

  useEffect(() => {
    prevCountRef.current = count;
  });

  return (
    <div>
      <p>Aktuell: {count} | Vorher: {prevCountRef.current}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
    </div>
  );
}`,
          },
        ],
      },
      {
        id: 'rp-forward-ref',
        title: 'Refs forwarden & useImperativeHandle',
        duration: '14 Min.',
        explanation: `Wenn du eine **eigene Komponente** baust und von außen ein \`ref\` daran hängen willst, musst du die Ref **weiterleiten**. Seit React 19 geht das direkt über die Props – \`ref\` wird wie ein normales Prop behandelt.

**Warum Forwarding?** Stell dir vor, du hast eine \`<Input />\`-Komponente und willst von außen \`inputRef.current.focus()\` aufrufen. Ohne Forwarding kommt die Ref nicht beim inneren \`<input>\` an.

**\`useImperativeHandle\`** geht einen Schritt weiter: Statt das gesamte DOM-Element freizugeben, definierst du eine **eigene API** – du bestimmst, welche Methoden von außen aufrufbar sind. Das ist ein saubereres Pattern, weil die Elternkomponente nicht direkt am DOM herummanipuliert.

Typischer Einsatz: Eine Modal-Komponente, die \`open()\` und \`close()\` nach außen anbietet.`,
        codeExamples: [
          {
            title: 'Ref forwarden (React 19)',
            js: `import { useRef } from 'react';

// React 19: ref ist ein normales Prop
function FancyInput({ ref, label, ...rest }) {
  return (
    <label>
      {label}
      <input ref={ref} className="fancy-input" {...rest} />
    </label>
  );
}

// Verwendung
function Form() {
  const inputRef = useRef(null);

  return (
    <div>
      <FancyInput ref={inputRef} label="Name" />
      <button onClick={() => inputRef.current.focus()}>
        Fokus setzen
      </button>
    </div>
  );
}`,
            ts: `import { useRef } from 'react';

type FancyInputProps = {
  ref?: React.Ref<HTMLInputElement>;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function FancyInput({ ref, label, ...rest }: FancyInputProps) {
  return (
    <label>
      {label}
      <input ref={ref} className="fancy-input" {...rest} />
    </label>
  );
}

function Form(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <FancyInput ref={inputRef} label="Name" />
      <button onClick={() => inputRef.current?.focus()}>
        Fokus setzen
      </button>
    </div>
  );
}`,
          },
          {
            title: 'useImperativeHandle – eigene API definieren',
            js: `import { useRef, useImperativeHandle } from 'react';

function ResultModal({ ref, title, children }) {
  const dialogRef = useRef(null);

  // Nur open() und close() nach außen freigeben
  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current.showModal();
    },
    close() {
      dialogRef.current.close();
    },
  }));

  return (
    <dialog ref={dialogRef}>
      <h2>{title}</h2>
      {children}
      <form method="dialog">
        <button>Schließen</button>
      </form>
    </dialog>
  );
}

// Verwendung
function App() {
  const modalRef = useRef(null);

  return (
    <div>
      <button onClick={() => modalRef.current.open()}>
        Modal öffnen
      </button>
      <ResultModal ref={modalRef} title="Ergebnis">
        <p>Du hast gewonnen!</p>
      </ResultModal>
    </div>
  );
}`,
            ts: `import { useRef, useImperativeHandle, type ReactNode, type Ref } from 'react';

// Die API, die nach außen sichtbar ist
type ModalHandle = {
  open: () => void;
  close: () => void;
};

type ResultModalProps = {
  ref?: Ref<ModalHandle>;
  title: string;
  children: ReactNode;
};

function ResultModal({ ref, title, children }: ResultModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      dialogRef.current?.showModal();
    },
    close() {
      dialogRef.current?.close();
    },
  }));

  return (
    <dialog ref={dialogRef}>
      <h2>{title}</h2>
      {children}
      <form method="dialog">
        <button>Schließen</button>
      </form>
    </dialog>
  );
}

function App(): JSX.Element {
  const modalRef = useRef<ModalHandle>(null);

  return (
    <div>
      <button onClick={() => modalRef.current?.open()}>
        Modal öffnen
      </button>
      <ResultModal ref={modalRef} title="Ergebnis">
        <p>Du hast gewonnen!</p>
      </ResultModal>
    </div>
  );
}`,
          },
        ],
      },
      {
        id: 'rp-modals-portals',
        title: 'Modale Dialoge & Portals',
        duration: '10 Min.',
        explanation: `**Modale Dialoge** sind ein häufiges UI-Pattern. Das native \`<dialog>\`-Element bietet eingebaute Funktionalität:
- \`showModal()\` öffnet es als modalen Dialog mit Backdrop.
- \`close()\` schließt es.
- Die \`Escape\`-Taste schließt es automatisch.
- \`<form method="dialog">\` schließt den Dialog beim Submit.

**Problem**: Auch wenn ein Modal logisch zu einer bestimmten Komponente gehört, sollte es im DOM **ganz oben** liegen (z. B. direkt unter \`<body>\`). Sonst kann es von \`overflow: hidden\`, \`z-index\` oder \`transform\` eines Elternelements betroffen sein.

**Portals** lösen dieses Problem: Mit \`createPortal(jsx, domNode)\` renderst du JSX an einer **anderen Stelle im DOM** – während die Komponente im React-Baum an ihrem logischen Platz bleibt. Events bubblen weiterhin durch den React-Baum, nicht den DOM-Baum.

Typischer Einsatz: Modals, Tooltips, Notifications, Dropdown-Menüs.`,
        codeExamples: [
          {
            title: 'Dialog mit ESC & Backdrop',
            js: `import { useRef, useImperativeHandle, useEffect } from 'react';

function Modal({ ref, title, children, onClose }) {
  const dialogRef = useRef(null);

  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current.showModal(),
    close: () => dialogRef.current.close(),
  }));

  // ESC-Taste wird von <dialog> nativ unterstützt
  // Das 'close'-Event feuert bei ESC und bei .close()
  useEffect(() => {
    const dialog = dialogRef.current;
    function handleClose() {
      onClose?.();
    }
    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, [onClose]);

  return (
    <dialog ref={dialogRef} className="modal">
      <h2>{title}</h2>
      <div>{children}</div>
      <form method="dialog">
        <button>Schließen</button>
      </form>
    </dialog>
  );
}

// CSS für den Backdrop:
// dialog::backdrop {
//   background: rgba(0, 0, 0, 0.5);
//   backdrop-filter: blur(4px);
// }`,
            ts: `import { useRef, useImperativeHandle, useEffect, type Ref, type ReactNode } from 'react';

type ModalHandle = { open: () => void; close: () => void };

type ModalProps = {
  ref?: Ref<ModalHandle>;
  title: string;
  children: ReactNode;
  onClose?: () => void;
};

function Modal({ ref, title, children, onClose }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current?.showModal(),
    close: () => dialogRef.current?.close(),
  }));

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    function handleClose() { onClose?.(); }
    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, [onClose]);

  return (
    <dialog ref={dialogRef} className="modal">
      <h2>{title}</h2>
      <div>{children}</div>
      <form method="dialog">
        <button>Schließen</button>
      </form>
    </dialog>
  );
}`,
          },
          {
            title: 'Portal – an anderer Stelle rendern',
            js: `import { createPortal } from 'react-dom';
import { useRef, useImperativeHandle } from 'react';

function Modal({ ref, title, children }) {
  const dialogRef = useRef(null);

  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current.showModal(),
    close: () => dialogRef.current.close(),
  }));

  // Portal: Das <dialog> wird unter #modal-root gerendert,
  // NICHT dort, wo <Modal /> im JSX steht
  return createPortal(
    <dialog ref={dialogRef} className="modal">
      <h2>{title}</h2>
      {children}
      <form method="dialog">
        <button>Schließen</button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
}

// In index.html brauchst du:
// <body>
//   <div id="root"></div>
//   <div id="modal-root"></div>
// </body>

// Verwendung – logisch an Ort und Stelle, DOM-technisch oben
function App() {
  const modalRef = useRef(null);

  return (
    <div>
      <h1>Meine App</h1>
      <button onClick={() => modalRef.current.open()}>
        Ergebnis anzeigen
      </button>
      {/* Liegt im React-Baum hier, im DOM aber unter #modal-root */}
      <Modal ref={modalRef} title="Ergebnis">
        <p>Gewonnen! 🎉</p>
      </Modal>
    </div>
  );
}`,
            ts: `import { createPortal } from 'react-dom';
import { useRef, useImperativeHandle, type Ref, type ReactNode } from 'react';

type ModalHandle = { open: () => void; close: () => void };

type ModalProps = {
  ref?: Ref<ModalHandle>;
  title: string;
  children: ReactNode;
};

function Modal({ ref, title, children }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => dialogRef.current?.showModal(),
    close: () => dialogRef.current?.close(),
  }));

  return createPortal(
    <dialog ref={dialogRef} className="modal">
      <h2>{title}</h2>
      {children}
      <form method="dialog">
        <button>Schließen</button>
      </form>
    </dialog>,
    document.getElementById('modal-root')!
  );
}

function App(): JSX.Element {
  const modalRef = useRef<ModalHandle>(null);

  return (
    <div>
      <h1>Meine App</h1>
      <button onClick={() => modalRef.current?.open()}>
        Ergebnis anzeigen
      </button>
      <Modal ref={modalRef} title="Ergebnis">
        <p>Gewonnen! 🎉</p>
      </Modal>
    </div>
  );
}`,
          },
        ],
      },
    ],
  },
  {
    id: 'context-reducer',
    title: 'Abschnitt 10: React\'s Context API & useReducer',
    slug: 'context-reducer',
    shortDescription: 'Prop Drilling lösen mit Context API und State-Logik strukturieren mit useReducer.',
    lessons: [
      {
        id: 'cr-prop-drilling',
        title: 'Prop Drilling – Problem & Lösungen',
        duration: '11 Min.',
        explanation: `**Prop Drilling** entsteht, wenn du Daten durch mehrere Komponenten-Ebenen hindurch reichen musst, obwohl nur eine tief verschachtelte Komponente sie tatsächlich braucht. Die Zwischenschichten werden unnötig mit Props belastet.

**Beispiel**: \`App\` hat einen User → gibt ihn an \`Layout\` → gibt ihn an \`Sidebar\` → gibt ihn an \`UserAvatar\`. Nur \`UserAvatar\` braucht den User, aber alle Ebenen dazwischen müssen ihn weiterreichen.

**Lösung 1 – Komposition**: Oft lässt sich Prop Drilling durch bessere Komposition vermeiden. Statt Daten nach unten zu reichen, kannst du fertig gerenderte Komponenten via \`children\` oder Slot-Props nach unten geben. Das ist die einfachste Lösung und sollte als Erstes versucht werden.

**Lösung 2 – Context API**: Wenn Komposition nicht ausreicht (z. B. weil viele Komponenten auf denselben Wert zugreifen müssen), ist die Context API die richtige Wahl.`,
        codeExamples: [
          {
            title: 'Prop Drilling – das Problem',
            js: `// ❌ Prop Drilling: user wird durch jede Ebene durchgereicht
function App() {
  const [user, setUser] = useState({ name: 'Max', role: 'Admin' });
  return <Layout user={user} />;
}

function Layout({ user }) {
  return (
    <div>
      <Sidebar user={user} />
      <main>Inhalt...</main>
    </div>
  );
}

function Sidebar({ user }) {
  return (
    <aside>
      <UserAvatar user={user} />
    </aside>
  );
}

// Nur diese Komponente braucht user tatsächlich:
function UserAvatar({ user }) {
  return <img alt={user.name} />;
}`,
            ts: `type User = { name: string; role: string };

// ❌ Prop Drilling: Jede Ebene muss user kennen und weiterreichen
function App(): JSX.Element {
  const [user] = useState<User>({ name: 'Max', role: 'Admin' });
  return <Layout user={user} />;
}

function Layout({ user }: { user: User }) {
  return (
    <div>
      <Sidebar user={user} />
      <main>Inhalt...</main>
    </div>
  );
}

function Sidebar({ user }: { user: User }) {
  return <aside><UserAvatar user={user} /></aside>;
}

function UserAvatar({ user }: { user: User }) {
  return <img alt={user.name} />;
}`,
          },
          {
            title: 'Komposition als Lösung',
            js: `// ✅ Komposition: Layout weiß nichts über UserAvatar
function App() {
  const [user, setUser] = useState({ name: 'Max', role: 'Admin' });

  return (
    <Layout
      sidebar={<UserAvatar user={user} />}
    >
      <main>Inhalt...</main>
    </Layout>
  );
}

function Layout({ sidebar, children }) {
  return (
    <div>
      <aside>{sidebar}</aside>
      {children}
    </div>
  );
}

// UserAvatar bekommt seinen Prop direkt von App – kein Drilling
function UserAvatar({ user }) {
  return <img alt={user.name} />;
}`,
            ts: `import { type ReactNode } from 'react';

type User = { name: string; role: string };

type LayoutProps = {
  sidebar: ReactNode;
  children: ReactNode;
};

// ✅ Layout braucht user gar nicht zu kennen
function App(): JSX.Element {
  const [user] = useState<User>({ name: 'Max', role: 'Admin' });

  return (
    <Layout sidebar={<UserAvatar user={user} />}>
      <main>Inhalt...</main>
    </Layout>
  );
}

function Layout({ sidebar, children }: LayoutProps) {
  return (
    <div>
      <aside>{sidebar}</aside>
      {children}
    </div>
  );
}

function UserAvatar({ user }: { user: User }) {
  return <img alt={user.name} />;
}`,
          },
        ],
      },
      {
        id: 'cr-context-api',
        title: 'Context API – createContext, Provider & useContext',
        duration: '26 Min.',
        explanation: `Die **Context API** ermöglicht es, Werte im gesamten Komponentenbaum verfügbar zu machen – ohne Props manuell durch jede Ebene zu reichen.

**Die drei Schritte**:
1. **Context erstellen**: \`const MeinContext = createContext(defaultValue)\`
2. **Provider bereitstellen**: Umhülle die Komponenten, die Zugriff brauchen, mit \`<MeinContext.Provider value={...}>\`
3. **Context konsumieren**: In jeder beliebig tief verschachtelten Komponente mit \`useContext(MeinContext)\`

**Wann updaten Context Werte?** Wenn der \`value\` des Providers sich ändert (z. B. weil State aktualisiert wird), rendern alle Komponenten neu, die diesen Context konsumieren.

**Best Practice – Eigene Provider-Komponente**: Lagere Context-Definition und State-Logik in eine eigene Datei/Komponente aus (\`CartContext.tsx\`). Das hält \`App.tsx\` sauber und macht den Context wiederverwendbar.

**useContext vs. Consumer**: \`useContext\` ist der moderne Weg. Das ältere \`<Context.Consumer>\` Render-Prop-Pattern ist veraltet.`,
        codeExamples: [
          {
            title: 'Context erstellen & bereitstellen',
            js: `import { createContext, useContext, useState } from 'react';

// 1. Context erstellen
const ThemeContext = createContext('light');

// 2. Provider bereitstellen
function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Header />
        <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
          Theme wechseln
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

// 3. Irgendwo tief im Baum – kein Prop Drilling nötig!
function Header() {
  return <nav><Logo /></nav>;
}

function Logo() {
  // Direkt zugreifen, egal wie tief verschachtelt
  const theme = useContext(ThemeContext);
  return <span className={'logo logo--' + theme}>My App</span>;
}`,
            ts: `import { createContext, useContext, useState } from 'react';

type Theme = 'light' | 'dark';

// Default-Wert wird nur genutzt, wenn kein Provider vorhanden ist
const ThemeContext = createContext<Theme>('light');

function App(): JSX.Element {
  const [theme, setTheme] = useState<Theme>('light');

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Header />
        <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
          Theme wechseln
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

function Header(): JSX.Element {
  return <nav><Logo /></nav>;
}

function Logo(): JSX.Element {
  const theme = useContext(ThemeContext);
  return <span className={'logo logo--' + theme}>My App</span>;
}`,
          },
          {
            title: 'Context mit State verknüpfen – Provider-Komponente',
            js: `import { createContext, useContext, useState } from 'react';

// Alles in einer Datei: CartContext.jsx
const CartContext = createContext(null);

// Eigene Provider-Komponente – kapselt State + Context
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(product) {
    setItems(prev => [...prev, product]);
  }

  function removeItem(id) {
    setItems(prev => prev.filter(item => item.id !== id));
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

// Eigener Hook – kein useContext(CartContext) überall
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart muss innerhalb von CartProvider verwendet werden');
  return ctx;
}

// App.jsx – sauber, keine Context-Logik hier
// import { CartProvider } from './context/CartContext';
//
// function App() {
//   return (
//     <CartProvider>
//       <Shop />
//     </CartProvider>
//   );
// }

// In einer beliebigen Kind-Komponente:
function CartIcon() {
  const { items } = useCart();
  return <span>Warenkorb ({items.length})</span>;
}`,
            ts: `import { createContext, useContext, useState, type ReactNode } from 'react';

type Product = { id: string; name: string; price: number };
type CartContextType = {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);

  function addItem(product: Product): void {
    setItems(prev => [...prev, product]);
  }

  function removeItem(id: string): void {
    setItems(prev => prev.filter(item => item.id !== id));
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

// Eigener Hook mit Null-Guard
export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart muss innerhalb von CartProvider verwendet werden');
  return ctx;
}

// Verwendung in einer Kind-Komponente:
function CartIcon(): JSX.Element {
  const { items } = useCart();
  return <span>Warenkorb ({items.length})</span>;
}`,
          },
        ],
      },
      {
        id: 'cr-use-reducer',
        title: 'useReducer – State-Logik strukturieren',
        duration: '20 Min.',
        explanation: `**\`useReducer\`** ist eine Alternative zu \`useState\` für **komplexe State-Logik**. Statt den State direkt zu setzen, **dispatcht** du eine Aktion – eine bloße Beschreibung was passieren soll. Eine reine Funktion (**Reducer**) berechnet daraus den neuen State.

Das Muster kommt aus dem Flux/Redux-Pattern:
- **State**: Der aktuelle Zustand.
- **Action**: Ein Objekt, das beschreibt, was passiert (\`{ type: 'INCREMENT' }\`).
- **Reducer**: \`(state, action) => newState\` – eine **pure Funktion**, die den neuen State berechnet.
- **dispatch**: Sendet eine Aktion an den Reducer.

**Wann \`useReducer\` statt \`useState\`?**
- Mehrere zusammenhängende State-Werte, die gemeinsam aktualisiert werden
- Komplexe Update-Logik mit vielen Fällen
- Wenn der nächste State von mehreren Teilen des alten States abhängt
- Du willst die State-Logik vom JSX trennen und testen

**useReducer + Context** ist eine leistungsstarke Kombination: Context verteilt den State, useReducer verwaltet die Logik.`,
        codeExamples: [
          {
            title: 'useReducer – Grundprinzip',
            js: `import { useReducer } from 'react';

// Reducer: pure Funktion, kein this, kein Seiteneffekt
function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    case 'SET':
      return { count: action.payload };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Zähler: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'SET', payload: 10 })}>Auf 10</button>
    </div>
  );
}`,
            ts: `import { useReducer } from 'react';

type CounterState = { count: number };
type CounterAction =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }
  | { type: 'SET'; payload: number };

function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    case 'SET':
      return { count: action.payload };
    default:
      return state;
  }
}

function Counter(): JSX.Element {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Zähler: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'SET', payload: 10 })}>Auf 10</button>
    </div>
  );
}`,
          },
          {
            title: 'useReducer + Context kombinieren',
            js: `import { createContext, useContext, useReducer } from 'react';

// Warenkorb-Logik mit useReducer
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.item] };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(i => i.id !== action.id),
      };
    case 'CLEAR':
      return { ...state, items: [] };
    default:
      return state;
  }
}

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatch({ type: 'ADD_ITEM', item });
  }

  function removeItem(id) {
    dispatch({ type: 'REMOVE_ITEM', id });
  }

  function clearCart() {
    dispatch({ type: 'CLEAR' });
  }

  return (
    <CartContext.Provider value={{ ...cartState, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);`,
            ts: `import { createContext, useContext, useReducer, type ReactNode } from 'react';

type CartItem = { id: string; name: string; price: number };
type CartState = { items: CartItem[] };
type CartAction =
  | { type: 'ADD_ITEM'; item: CartItem }
  | { type: 'REMOVE_ITEM'; id: string }
  | { type: 'CLEAR' };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.item] };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(i => i.id !== action.id) };
    case 'CLEAR':
      return { ...state, items: [] };
    default:
      return state;
  }
}

type CartContextType = CartState & {
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartState, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = (item: CartItem) => dispatch({ type: 'ADD_ITEM', item });
  const removeItem = (id: string) => dispatch({ type: 'REMOVE_ITEM', id });
  const clearCart = () => dispatch({ type: 'CLEAR' });

  return (
    <CartContext.Provider value={{ ...cartState, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart muss innerhalb von CartProvider verwendet werden');
  return ctx;
}`,
          },
        ],
      },
    ],
  },
  {
    id: 'use-effect',
    title: 'Abschnitt 11: Handling Side Effects & useEffect',
    slug: 'use-effect',
    shortDescription: 'Side Effects verstehen, useEffect richtig einsetzen, Cleanup-Funktionen und useCallback.',
    lessons: [
      {
        id: 'ue-what-are-side-effects',
        title: 'Was sind Side Effects – & wann brauchst du useEffect?',
        duration: '15 Min.',
        explanation: `**Side Effects** sind alles, was eine Komponente tut, das über das reine Berechnen und Zurückgeben von JSX hinausgeht:

- HTTP-Requests (Daten laden)
- Timer setzen (\`setTimeout\`, \`setInterval\`)
- Browser-APIs nutzen (\`localStorage\`, \`document.title\`)
- Event Listener registrieren
- Externe Subscriptions (WebSocket, etc.)

**Das Problem**: React ruft Komponentenfunktionen **mehrmals** auf (beim Rendern, Re-Rendern, Strict Mode). Ein Seiteneffekt direkt im Render-Body würde bei jedem Render ausgeführt – und wenn er State verändert, löst das den nächsten Render aus → **Endlosschleife**.

**Die Lösung: \`useEffect\`**. Damit sagst du React: „Führe diesen Code **nach** dem Rendern aus." Der optionale Dependency-Array steuert, **wann** der Effekt erneut läuft.

**Aber**: Nicht jeder Seiteneffekt braucht \`useEffect\`! Viele lassen sich direkt in Event-Handlern ausführen – das ist sogar **bevorzugt**, weil es klarer ist.`,
        codeExamples: [
          {
            title: 'Das Infinite-Loop-Problem',
            js: `import { useState, useEffect } from 'react';

// ❌ Seiteneffekt direkt im Render-Body → Endlosschleife!
function BadComponent() {
  const [data, setData] = useState(null);

  // Wird bei jedem Render aufgerufen, setzt State, triggert Re-Render...
  fetch('/api/data')
    .then(r => r.json())
    .then(d => setData(d)); // → Endlosschleife!

  return <p>{data}</p>;
}

// ✅ Lösung: useEffect – läuft nur einmal (leeres Dependency-Array)
function GoodComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(r => r.json())
      .then(d => setData(d));
  }, []); // [] → nur beim ersten Mounten

  return <p>{data?.message ?? 'Laden...'}</p>;
}`,
            ts: `import { useState, useEffect } from 'react';

type ApiData = { message: string };

// ✅ useEffect verhindert die Endlosschleife
function DataLoader(): JSX.Element {
  const [data, setData] = useState<ApiData | null>(null);

  useEffect(() => {
    fetch('/api/data')
      .then(r => r.json())
      .then((d: ApiData) => setData(d));
  }, []); // Leeres Array: läuft nur beim Mounten

  return <p>{data?.message ?? 'Laden...'}</p>;
}`,
          },
          {
            title: 'Nicht immer useEffect nötig',
            js: `import { useState, useEffect } from 'react';

// ❌ Unnötiger useEffect – State aus State ableiten
function SearchResults({ query }) {
  const [results, setResults] = useState([]);

  // ❌ Seiteneffekt nur um State zu synchronisieren
  useEffect(() => {
    setResults(PRODUCTS.filter(p => p.name.includes(query)));
  }, [query]);

  return <ul>{results.map(r => <li key={r.id}>{r.name}</li>)}</ul>;
}

// ✅ Besser: direkt berechnen – kein useEffect nötig
function SearchResultsBetter({ query }) {
  // Abgeleiteter Wert → kein separater State, kein useEffect
  const results = PRODUCTS.filter(p => p.name.includes(query));

  return <ul>{results.map(r => <li key={r.id}>{r.name}</li>)}</ul>;
}

// ✅ Seiteneffekt im Event-Handler ist oft besser als useEffect
function SaveButton() {
  function handleSave() {
    // Direkt hier – klar und vorhersehbar
    localStorage.setItem('draft', JSON.stringify(formData));
  }

  return <button onClick={handleSave}>Speichern</button>;
}`,
            ts: `import { useState, useEffect } from 'react';

type Product = { id: string; name: string };
const PRODUCTS: Product[] = [];

// ✅ Abgeleiteter Wert – kein useEffect nötig
function SearchResults({ query }: { query: string }): JSX.Element {
  const results = PRODUCTS.filter(p => p.name.includes(query));

  return (
    <ul>
      {results.map(r => <li key={r.id}>{r.name}</li>)}
    </ul>
  );
}

// ✅ Seiteneffekt direkt im Handler
function SaveButton({ data }: { data: object }): JSX.Element {
  function handleSave(): void {
    localStorage.setItem('draft', JSON.stringify(data));
  }

  return <button onClick={handleSave}>Speichern</button>;
}`,
          },
        ],
      },
      {
        id: 'ue-dependencies',
        title: 'Effect Dependencies & Browser APIs synchronisieren',
        duration: '10 Min.',
        explanation: `Der **Dependency-Array** von \`useEffect\` bestimmt, wann der Effekt erneut ausgeführt wird:

| Dependency-Array | Wann läuft der Effekt? |
|---|---|
| Kein Array | Nach **jedem** Render |
| \`[]\` (leer) | Nur einmal – nach dem ersten Render (Mount) |
| \`[a, b]\` | Beim Mount + immer wenn sich \`a\` oder \`b\` ändert |

**Regel**: Jeder Wert aus dem Komponenten-Scope, den du im Effekt verwendest (State, Props, abgeleitete Werte), muss in den Dependency-Array. Der **ESLint-Plugin \`exhaustive-deps\`** hilft dabei und warnt bei fehlenden Dependencies.

**Typischer Einsatz für Browser APIs**: \`document.title\` setzen, \`localStorage\` lesen beim Mounten, oder auf Resize-Events reagieren.`,
        codeExamples: [
          {
            title: 'Dependency-Array korrekt verwenden',
            js: `import { useState, useEffect } from 'react';

function ProductPage({ productId }) {
  const [product, setProduct] = useState(null);

  // Läuft beim Mounten UND wenn sich productId ändert
  useEffect(() => {
    fetch('/api/products/' + productId)
      .then(r => r.json())
      .then(setProduct);
  }, [productId]); // productId als Dependency!

  return <p>{product?.name ?? 'Laden...'}</p>;
}

// Häufiger Fehler: fehlende Dependency
function BadEffect({ userId }) {
  useEffect(() => {
    // userId wird verwendet, aber fehlt im Array → Bug!
    // → Effekt läuft nie erneut, auch wenn userId sich ändert
    console.log('User:', userId);
  }, []); // ❌ userId fehlt
}`,
            ts: `import { useState, useEffect } from 'react';

type Product = { id: string; name: string };

function ProductPage({ productId }: { productId: string }): JSX.Element {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch('/api/products/' + productId)
      .then(r => r.json())
      .then((p: Product) => setProduct(p));
  }, [productId]); // ✅ productId als Dependency

  return <p>{product?.name ?? 'Laden...'}</p>;
}`,
          },
          {
            title: 'Browser APIs synchronisieren',
            js: `import { useState, useEffect } from 'react';

// document.title synchronisieren
function PageWithTitle({ title, children }) {
  useEffect(() => {
    document.title = title + ' | Meine App';

    // Cleanup: Titel zurücksetzen wenn Komponente entfernt wird
    return () => {
      document.title = 'Meine App';
    };
  }, [title]);

  return <main>{children}</main>;
}

// localStorage beim Mounten lesen
function Settings() {
  const [darkMode, setDarkMode] = useState(false);

  // Gespeicherten Wert beim Mounten laden
  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      setDarkMode(JSON.parse(saved));
    }
  }, []); // Nur einmal

  // Bei Änderung speichern – direkt im Handler, kein useEffect nötig
  function handleToggle() {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem('darkMode', JSON.stringify(next));
  }

  return (
    <label>
      <input type="checkbox" checked={darkMode} onChange={handleToggle} />
      Dark Mode
    </label>
  );
}`,
            ts: `import { useState, useEffect } from 'react';
import { type ReactNode } from 'react';

function PageWithTitle({ title, children }: { title: string; children: ReactNode }): JSX.Element {
  useEffect(() => {
    document.title = title + ' | Meine App';
    return () => { document.title = 'Meine App'; };
  }, [title]);

  return <main>{children}</main>;
}

function Settings(): JSX.Element {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) setDarkMode(JSON.parse(saved) as boolean);
  }, []);

  function handleToggle(): void {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem('darkMode', JSON.stringify(next));
  }

  return (
    <label>
      <input type="checkbox" checked={darkMode} onChange={handleToggle} />
      Dark Mode
    </label>
  );
}`,
          },
        ],
      },
      {
        id: 'ue-cleanup',
        title: 'Cleanup-Funktion & das Problem mit Objekt/Funktions-Dependencies',
        duration: '17 Min.',
        explanation: `**Die Cleanup-Funktion**: Wenn dein Effekt Ressourcen belegt (Timer, Event Listener, Subscriptions), musst du diese in der **Cleanup-Funktion** freigeben. React ruft sie auf, bevor der Effekt erneut läuft und wenn die Komponente entfernt wird.

**Ohne Cleanup**:
- Timer laufen weiter, obwohl die Komponente weg ist
- Event Listener stapeln sich bei jedem Re-Render
- Memory Leaks

**Das Problem mit Objekt & Funktions-Dependencies**: Referenztypen (Objekte, Arrays, Funktionen) werden bei jedem Render **neu erstellt** – sie sind damit immer „anders" für React, auch wenn ihr Inhalt gleich ist. Das führt dazu, dass der Effekt zu oft läuft.

**Die Lösung: \`useCallback\`**: Memorisiert eine Funktion – sie wird nur dann neu erstellt, wenn sich ihre eigenen Dependencies ändern. Damit ist die Funktion referenzstabil und löst keinen unnötigen Effekt-Neustart aus.`,
        codeExamples: [
          {
            title: 'Cleanup für Timer & Event Listener',
            js: `import { useState, useEffect } from 'react';

// Timer-Cleanup
function Countdown({ seconds }) {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    if (remaining <= 0) return;

    const timerId = setInterval(() => {
      setRemaining(prev => prev - 1);
    }, 1000);

    // Cleanup: Timer stoppen wenn Komponente entfernt wird
    // oder wenn 'remaining' sich ändert (neuer Interval startet)
    return () => clearInterval(timerId);
  }, [remaining]);

  return <p>{remaining > 0 ? remaining + ' Sekunden' : 'Zeit abgelaufen!'}</p>;
}

// Event-Listener-Cleanup
function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener('resize', handleResize);

    // Cleanup: Listener entfernen
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Einmal registrieren, einmal entfernen

  return <p>{size.width} × {size.height}</p>;
}`,
            ts: `import { useState, useEffect } from 'react';

function Countdown({ seconds }: { seconds: number }): JSX.Element {
  const [remaining, setRemaining] = useState<number>(seconds);

  useEffect(() => {
    if (remaining <= 0) return;
    const timerId = setInterval(() => {
      setRemaining(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [remaining]);

  return <p>{remaining > 0 ? remaining + ' Sekunden' : 'Zeit abgelaufen!'}</p>;
}

type Size = { width: number; height: number };

function WindowSize(): JSX.Element {
  const [size, setSize] = useState<Size>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize(): void {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <p>{size.width} × {size.height}</p>;
}`,
          },
          {
            title: 'useCallback – stabile Funktions-Referenzen',
            js: `import { useState, useEffect, useCallback } from 'react';

// ❌ Problem: fetchData wird bei jedem Render neu erstellt
//    → useEffect läuft endlos!
function DataLoader({ userId }) {
  const [data, setData] = useState(null);

  // Diese Funktion ist bei jedem Render eine NEUE Referenz
  const fetchData = async () => {
    const r = await fetch('/api/user/' + userId);
    setData(await r.json());
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]); // ❌ fetchData ändert sich immer → Endlosschleife!
}

// ✅ Lösung 1: Funktion direkt in useEffect definieren
function DataLoaderV2({ userId }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      const r = await fetch('/api/user/' + userId);
      setData(await r.json());
    }
    load();
  }, [userId]); // Nur userId als Dependency

  return <p>{data?.name ?? 'Laden...'}</p>;
}

// ✅ Lösung 2: useCallback – Funktion memorisieren
function DataLoaderV3({ userId }) {
  const [data, setData] = useState(null);

  // Wird nur neu erstellt wenn userId sich ändert
  const fetchData = useCallback(async () => {
    const r = await fetch('/api/user/' + userId);
    setData(await r.json());
  }, [userId]); // ← Dependencies von fetchData

  useEffect(() => {
    fetchData();
  }, [fetchData]); // ✅ fetchData ist jetzt stabil

  return <p>{data?.name ?? 'Laden...'}</p>;
}`,
            ts: `import { useState, useEffect, useCallback } from 'react';

type User = { name: string };

// ✅ Lösung 1: Funktion direkt im Effekt definieren (meist bevorzugt)
function DataLoader({ userId }: { userId: string }): JSX.Element {
  const [data, setData] = useState<User | null>(null);

  useEffect(() => {
    async function load(): Promise<void> {
      const r = await fetch('/api/user/' + userId);
      setData(await r.json() as User);
    }
    load();
  }, [userId]);

  return <p>{data?.name ?? 'Laden...'}</p>;
}

// ✅ Lösung 2: useCallback für wiederverwendbare Fetch-Funktionen
function DataLoaderWithCallback({ userId }: { userId: string }): JSX.Element {
  const [data, setData] = useState<User | null>(null);

  const fetchData = useCallback(async (): Promise<void> => {
    const r = await fetch('/api/user/' + userId);
    setData(await r.json() as User);
  }, [userId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return <p>{data?.name ?? 'Laden...'}</p>;
}`,
          },
        ],
      },
      {
        id: 'ue-state-updates',
        title: 'State-Updates optimieren & Batching',
        duration: '4 Min.',
        explanation: `React **batcht** mehrere \`setState\`-Aufrufe, die in einem Event-Handler oder \`useEffect\` passieren, zu einem einzigen Re-Render zusammen. Das ist eine Optimierung, die du als Entwickler meistens gar nicht bemerken musst.

**Aber**: Wenn du State innerhalb eines \`useEffect\` aktualisierst und dieser State selbst im Dependency-Array steht, kann es zu ungewollten Render-Schleifen kommen.

**Best Practice für State-Updates im Effekt**:
- Nutze die **Updater-Funktion** (\`setState(prev => ...)\`), wenn der neue State vom alten abhängt
- Vermeide es, denselben State zu lesen **und** zu setzen im gleichen Effekt – das lädt zu Zyklen ein
- Ziehe State-Berechnungen aus dem Effekt heraus, wenn sie sich ableiten lassen`,
        codeExamples: [
          {
            title: 'React Batching & Updater-Funktion im Effekt',
            js: `import { useState, useEffect } from 'react';

// React batcht diese Updates – nur EIN Re-Render
function BatchExample() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  function handleClick() {
    // Beide setStates werden gebatcht → 1 Re-Render
    setCount(c => c + 1);
    setText('Geklickt: ' + (count + 1));
  }

  return <button onClick={handleClick}>{text || count}</button>;
}

// Effekt-State-Update: Updater-Funktion nutzen
function TickingClock() {
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      // ✅ Updater-Funktion: liest nicht den State aus dem Closure
      // → ticks muss nicht in den Dependency-Array!
      setTicks(prev => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []); // ✅ Kein ticks im Array nötig

  return <p>Ticks: {ticks}</p>;
}

// ❌ Häufiger Fehler: State lesen UND setzen im Effekt
function BadTicker() {
  const [ticks, setTicks] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTicks(ticks + 1); // ❌ Liest ticks aus Closure → veraltet!
    }, 1000);
    return () => clearInterval(id);
  }, [ticks]); // ❌ ticks als Dep → Effect startet bei jedem Tick neu

  return <p>Ticks: {ticks}</p>;
}`,
            ts: `import { useState, useEffect } from 'react';

// ✅ Updater-Funktion im Effekt – kein State in Dependency-Array
function TickingClock(): JSX.Element {
  const [ticks, setTicks] = useState<number>(0);

  useEffect(() => {
    const id = setInterval(() => {
      // prev → immer der aktuelle Wert, egal wann der Effekt gestartet ist
      setTicks(prev => prev + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []); // Einmalig – kein ticks als Dep nötig

  return <p>Ticks: {ticks}</p>;
}

// Batching: Mehrere setState-Aufrufe → ein Re-Render
function BatchExample(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const [label, setLabel] = useState<string>('');

  function handleClick(): void {
    setCount(c => c + 1);
    setLabel(prev => 'War: ' + prev);
    // React rendert nur einmal, beide Updates werden gebatcht
  }

  return <button onClick={handleClick}>{label || count}</button>;
}`,
          },
        ],
      },
    ],
  },
  {
    id: 'working-with-forms',
    title: 'Abschnitt 17: Working with Forms & User Input',
    slug: 'working-with-forms',
    shortDescription: 'Formulare in React: Eingaben erfassen, validieren und wiederverwendbare Form-Komponenten & Hooks bauen.',
    lessons: [
      {
        id: 'forms-submission',
        title: 'Formularübermittlung & Reset',
        duration: '17 Min.',
        explanation: `In modernem React unterdrückt man das native Browser-Verhalten beim Form-Submit mit \`event.preventDefault()\` und verarbeitet die Daten selbst – sonst würde die Seite neu laden.

**Was macht Formulare tricky?**
- Eingaben sind flüchtig – ohne React-Kontrolle gehen sie beim Re-Render verloren.
- Validierung, Submit-Handling und Reset müssen manuell koordiniert werden.

**Formular zurücksetzen:**
- \`event.target.reset()\` setzt alle nativen Inputs des Formulars auf den Ausgangszustand zurück.
- Bei controlled Inputs (mit \`useState\`) setzt man den State manuell zurück.`,
        codeExamples: [
          {
            title: 'Submit abfangen & Formular zurücksetzen',
            js: `function LoginForm() {
  function handleSubmit(event) {
    event.preventDefault(); // ← Seitenneuladen verhindern

    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    console.log('Login:', email, password);

    event.target.reset(); // ← Alle Felder leeren
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="E-Mail" />
      <input type="password" name="password" placeholder="Passwort" />
      <button type="submit">Einloggen</button>
    </form>
  );
}`,
            ts: `function LoginForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    console.log('Login:', email, password);

    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="E-Mail" />
      <input type="password" name="password" placeholder="Passwort" />
      <button type="submit">Einloggen</button>
    </form>
  );
}`,
          },
        ],
      },
      {
        id: 'forms-controlled-vs-refs',
        title: 'Eingaben per State oder Refs lesen',
        duration: '16 Min.',
        explanation: `Es gibt zwei gängige Wege, Eingabewerte in React zu lesen:

**1. Controlled Input (via State)**
Der Input-Wert wird vollständig über React-State gesteuert. \`value\` und \`onChange\` müssen beide gesetzt sein. Das ist die flexibelste Methode – jede Änderung löst einen Re-Render aus und man hat jederzeit Zugriff auf den aktuellen Wert.

**2. Uncontrolled Input (via Ref)**
Der Wert liegt im DOM und wird nur bei Bedarf abgelesen (z. B. beim Submit). Kein ständiger Re-Render. Gut für einfache Formulare, bei denen keine Live-Validierung nötig ist.

**Wann was?**
- **State**: Live-Validierung, abhängige Felder, komplexe Formularlogik
- **Ref**: Einfache Formulare, bei denen nur beim Submit etwas passiert`,
        codeExamples: [
          {
            title: 'Controlled Input – State',
            js: `import { useState } from 'react';

function NameForm() {
  const [name, setName] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Name:', name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Dein Name"
      />
      <p>Vorschau: {name}</p>
      <button type="submit">Absenden</button>
    </form>
  );
}`,
            ts: `import { useState } from 'react';

function NameForm() {
  const [name, setName] = useState<string>('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Name:', name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        placeholder="Dein Name"
      />
      <p>Vorschau: {name}</p>
      <button type="submit">Absenden</button>
    </form>
  );
}`,
          },
          {
            title: 'Uncontrolled Input – Ref',
            js: `import { useRef } from 'react';

function NameForm() {
  const nameRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Name:', nameRef.current.value);
    nameRef.current.value = ''; // manuelles Reset
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} type="text" placeholder="Dein Name" />
      <button type="submit">Absenden</button>
    </form>
  );
}`,
            ts: `import { useRef } from 'react';

function NameForm() {
  const nameRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Name:', nameRef.current?.value);
    if (nameRef.current) nameRef.current.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} type="text" placeholder="Dein Name" />
      <button type="submit">Absenden</button>
    </form>
  );
}`,
          },
        ],
      },
      {
        id: 'forms-formdata',
        title: 'FormData & Native Browser APIs',
        duration: '9 Min.',
        explanation: `Die native \`FormData\`-API liest alle Felder auf einmal aus dem DOM – ohne jeden Input einzeln tracken zu müssen.

**So funktioniert es:**
- Im \`onSubmit\`-Handler übergibt man \`event.target\` (das \`<form>\`-Element) an \`new FormData()\`.
- Jedes Input-Feld braucht ein \`name\`-Attribut – darüber wird der Wert abgerufen.
- Mit \`Object.fromEntries(formData)\` lässt sich das Ergebnis bequem in ein einfaches Objekt umwandeln.

**Grenzen:** Checkboxen und Multi-Selects brauchen Sonderbehandlung (\`formData.getAll()\`).`,
        codeExamples: [
          {
            title: 'FormData – alle Felder auf einmal auslesen',
            js: `function RegisterForm() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Einzelne Werte abrufen
    const username = formData.get('username');

    // Alle Werte als Objekt
    const data = Object.fromEntries(formData);
    console.log(data);
    // { username: 'Max', email: 'max@example.com', role: 'admin' }

    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" type="text" placeholder="Benutzername" />
      <input name="email" type="email" placeholder="E-Mail" />
      <select name="role">
        <option value="user">Benutzer</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Registrieren</button>
    </form>
  );
}`,
            ts: `function RegisterForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const username = formData.get('username') as string;

    const data = Object.fromEntries(formData) as {
      username: string;
      email: string;
      role: string;
    };
    console.log(data);

    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" type="text" placeholder="Benutzername" />
      <input name="email" type="email" placeholder="E-Mail" />
      <select name="role">
        <option value="user">Benutzer</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Registrieren</button>
    </form>
  );
}`,
          },
        ],
      },
      {
        id: 'forms-validation',
        title: 'Eingabevalidierung – Strategien im Vergleich',
        duration: '32 Min.',
        explanation: `React bietet mehrere Strategien zur Formularvalidierung. Die richtige Wahl hängt davon ab, **wann** Fehler angezeigt werden sollen.

**1. Validierung bei jedem Tastendruck (onChange)**
Maximale Reaktivität – der Nutzer sieht sofort Fehler. Kann aber irritieren, wenn schon beim ersten Buchstaben ein Fehler erscheint.

**2. Validierung beim Fokusverlust (onBlur)**
Fehler erscheinen erst, wenn das Feld verlassen wird. Nutzerfreundlicher Kompromiss.

**3. Validierung beim Submit**
Fehler werden erst beim Absenden gezeigt. Einfachste Variante, aber kein frühes Feedback.

**4. HTML-Built-in-Validierung (required, minLength, type, pattern)**
Der Browser übernimmt die Validierung nativ – ohne JavaScript. Schnell eingebaut, aber schwer in der Darstellung anpassbar.

**5. Kombinierter Ansatz**
Oft sinnvoll: \`required\`/\`type\` für die HTML-Basisvalidierung + eigene Logik für komplexe Regeln. Das \`touched\`-Flag verhindert, dass Fehler vor der ersten Interaktion erscheinen.`,
        codeExamples: [
          {
            title: 'Validierung per State – onChange + onBlur kombiniert',
            js: `import { useState } from 'react';

function EmailField() {
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);

  const isInvalid = touched && !email.includes('@');

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => setTouched(true)}
        placeholder="E-Mail"
      />
      {isInvalid && <p style={{ color: 'red' }}>Ungültige E-Mail-Adresse.</p>}
    </div>
  );
}`,
            ts: `import { useState } from 'react';

function EmailField() {
  const [email, setEmail] = useState<string>('');
  const [touched, setTouched] = useState<boolean>(false);

  const isInvalid = touched && !email.includes('@');

  return (
    <div>
      <input
        type="email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        onBlur={() => setTouched(true)}
        placeholder="E-Mail"
      />
      {isInvalid && <p style={{ color: 'red' }}>Ungültige E-Mail-Adresse.</p>}
    </div>
  );
}`,
          },
          {
            title: 'Validierung beim Submit + HTML built-in Props',
            js: `import { useState } from 'react';

function SignupForm() {
  const [errors, setErrors] = useState({});

  function validate(data) {
    const newErrors = {};
    if (!data.username || data.username.trim().length < 3) {
      newErrors.username = 'Mindestens 3 Zeichen erforderlich.';
    }
    if (!data.email.includes('@')) {
      newErrors.email = 'Ungültige E-Mail-Adresse.';
    }
    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const newErrors = validate(data);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log('Abgeschickt:', data);
    event.target.reset();
  }

  return (
    // noValidate deaktiviert Browser-Fehlermeldungen; eigene UI übernimmt
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <input name="username" type="text" required minLength={3} placeholder="Benutzername" />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <input name="email" type="email" required placeholder="E-Mail" />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <button type="submit">Registrieren</button>
    </form>
  );
}`,
            ts: `import { useState } from 'react';

type FormErrors = {
  username?: string;
  email?: string;
};

type SignupData = {
  username: string;
  email: string;
};

function SignupForm() {
  const [errors, setErrors] = useState<FormErrors>({});

  function validate(data: SignupData): FormErrors {
    const newErrors: FormErrors = {};
    if (!data.username || data.username.trim().length < 3) {
      newErrors.username = 'Mindestens 3 Zeichen erforderlich.';
    }
    if (!data.email.includes('@')) {
      newErrors.email = 'Ungültige E-Mail-Adresse.';
    }
    return newErrors;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget)) as SignupData;
    const newErrors = validate(data);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log('Abgeschickt:', data);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <input name="username" type="text" required minLength={3} placeholder="Benutzername" />
        {errors.username && <p>{errors.username}</p>}
      </div>
      <div>
        <input name="email" type="email" required placeholder="E-Mail" />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <button type="submit">Registrieren</button>
    </form>
  );
}`,
          },
        ],
      },
      {
        id: 'forms-reusable-hooks',
        title: 'Wiederverwendbare Input-Komponente & useInput-Hook',
        duration: '28 Min.',
        explanation: `Sobald mehrere Formulare dieselbe Logik (Wert, touched-Flag, Validierung) wiederholen, lohnt es sich, sie auszulagern.

**Wiederverwendbare \`<Input>\`-Komponente**
Kapselt das \`<input>\`-Element zusammen mit Label und Fehlertext. Übernimmt \`value\`, \`onChange\`, \`onBlur\` und einen optionalen \`error\`-String als Props – per Spread-Operator (\`...props\`) lassen sich beliebige native Input-Attribute durchreichen.

**Custom \`useInput\`-Hook**
Lagert die gesamte State-Logik (Wert, touched-Flag, Change- und Blur-Handler, Reset) in einen wiederverwendbaren Hook aus. Das Ergebnis ist eine saubere Schnittstelle für jedes Formularfeld.

**Drittanbieter-Bibliotheken**
Für komplexe Formulare lohnt ein Blick auf etablierte Libs:
- **React Hook Form** – minimale Re-Renders, native HTML-Validation, sehr performant.
- **Formik** – imperativer Stil, gut für große Formulare mit verschachtelten Strukturen.
- **Zod / Yup** – Schema-basierte Validierung, ideal kombiniert mit React Hook Form.`,
        codeExamples: [
          {
            title: 'Wiederverwendbare <Input>-Komponente',
            js: `// components/Input.jsx
export function Input({ label, id, error, ...props }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

// Verwendung
import { useState } from 'react';
import { Input } from './components/Input';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);

  const emailError = touched && !email.includes('@')
    ? 'Ungültige E-Mail'
    : undefined;

  return (
    <form>
      <Input
        label="E-Mail"
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => setTouched(true)}
        error={emailError}
      />
    </form>
  );
}`,
            ts: `// components/Input.tsx
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
  error?: string;
};

export function Input({ label, id, error, ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

// Verwendung
import { useState } from 'react';
import { Input } from './components/Input';

function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [touched, setTouched] = useState<boolean>(false);

  const emailError = touched && !email.includes('@')
    ? 'Ungültige E-Mail'
    : undefined;

  return (
    <form>
      <Input
        label="E-Mail"
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => setTouched(true)}
        error={emailError}
      />
    </form>
  );
}`,
          },
          {
            title: 'Custom useInput-Hook',
            js: `// hooks/useInput.js
import { useState } from 'react';

export function useInput(initialValue, validate) {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);

  const error = touched ? validate(value) : undefined;

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleBlur() {
    setTouched(true);
  }

  function reset() {
    setValue(initialValue);
    setTouched(false);
  }

  return { value, error, handleChange, handleBlur, reset };
}

// Verwendung
function SignupForm() {
  const email = useInput('', (v) =>
    v.includes('@') ? undefined : 'Ungültige E-Mail'
  );
  const username = useInput('', (v) =>
    v.trim().length >= 3 ? undefined : 'Mindestens 3 Zeichen'
  );

  function handleSubmit(event) {
    event.preventDefault();
    if (email.error || username.error) return;
    console.log(email.value, username.value);
    email.reset();
    username.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email.value} onChange={email.handleChange} onBlur={email.handleBlur} />
      {email.error && <p>{email.error}</p>}
      <input value={username.value} onChange={username.handleChange} onBlur={username.handleBlur} />
      {username.error && <p>{username.error}</p>}
      <button type="submit">Absenden</button>
    </form>
  );
}`,
            ts: `// hooks/useInput.ts
import { useState } from 'react';

export function useInput(
  initialValue: string,
  validate: (value: string) => string | undefined
) {
  const [value, setValue] = useState<string>(initialValue);
  const [touched, setTouched] = useState<boolean>(false);

  const error = touched ? validate(value) : undefined;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleBlur() {
    setTouched(true);
  }

  function reset() {
    setValue(initialValue);
    setTouched(false);
  }

  return { value, error, handleChange, handleBlur, reset };
}

// Verwendung
function SignupForm() {
  const email = useInput('', (v) =>
    v.includes('@') ? undefined : 'Ungültige E-Mail'
  );
  const username = useInput('', (v) =>
    v.trim().length >= 3 ? undefined : 'Mindestens 3 Zeichen'
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.error || username.error) return;
    console.log(email.value, username.value);
    email.reset();
    username.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email.value} onChange={email.handleChange} onBlur={email.handleBlur} />
      {email.error && <p>{email.error}</p>}
      <input value={username.value} onChange={username.handleChange} onBlur={username.handleBlur} />
      {username.error && <p>{username.error}</p>}
      <button type="submit">Absenden</button>
    </form>
  );
}`,
          },
        ],
      },
    ],
  },

  {
    id: 'forms-via-actions',
    title: 'Abschnitt 18: Handling Forms via Form Actions',
    slug: 'forms-via-actions',
    shortDescription: 'React 19 Form Actions: Formulare deklarativ mit action-Prop, useActionState, useFormStatus und Optimistic Updating verwalten.',
    lessons: [
      {
        id: 'fva-form-actions-basics',
        title: 'Form Actions – Grundkonzept & Submission',
        duration: '23 Min.',
        explanation: `React 19 führt ein neues, deklaratives Konzept für Formulare ein: **Form Actions**. Statt \`onSubmit\` + \`event.preventDefault()\` übergibt man dem \`<form>\`-Element eine **\`action\`-Prop**, die eine Funktion entgegennimmt.

**Wie funktioniert es?**
- Die Action-Funktion erhält automatisch ein \`FormData\`-Objekt – kein manuelles \`new FormData(event.target)\` nötig.
- React verhindert das Browser-Neuladen intern. Kein \`event.preventDefault()\` erforderlich.
- Die Funktion kann **außerhalb der Komponente** definiert werden, was die Komponente übersichtlicher hält.

**Vorteile gegenüber onSubmit:**
- Weniger Boilerplate
- Action-Funktion ist leicht testbar und wiederverwendbar
- Nahtlose Integration mit Server Actions (Next.js, React Server Components)`,
        codeExamples: [
          {
            title: 'Form Action statt onSubmit',
            js: `// Action-Funktion außerhalb der Komponente – kein Zugriff auf event nötig
function signupAction(formData) {
  const username = formData.get('username');
  const email = formData.get('email');

  console.log('Registrierung:', { username, email });
  // hier: API-Aufruf, Validierung, Weiterleitung etc.
}

function SignupForm() {
  return (
    // action statt onSubmit – React kümmert sich um alles andere
    <form action={signupAction}>
      <input name="username" type="text" placeholder="Benutzername" required />
      <input name="email" type="email" placeholder="E-Mail" required />
      <button type="submit">Registrieren</button>
    </form>
  );
}`,
            ts: `// Action-Funktion außerhalb der Komponente
function signupAction(formData: FormData): void {
  const username = formData.get('username') as string;
  const email = formData.get('email') as string;

  console.log('Registrierung:', { username, email });
}

function SignupForm() {
  return (
    <form action={signupAction}>
      <input name="username" type="text" placeholder="Benutzername" required />
      <input name="email" type="email" placeholder="E-Mail" required />
      <button type="submit">Registrieren</button>
    </form>
  );
}`,
          },
        ],
      },
      {
        id: 'fva-use-action-state',
        title: 'useActionState – Validierung & Formular-State',
        duration: '30 Min.',
        explanation: `**\`useActionState\`** (React 19) verbindet eine Form-Action mit einem State-Wert. Damit kann die Action Fehlermeldungen oder ein Ergebnis zurückgeben, das die Komponente direkt rendern kann.

**Signatur:**
\`\`\`
const [state, dispatch, isPending] = useActionState(actionFn, initialState);
\`\`\`
- \`state\`: Aktueller Rückgabewert der letzten Action-Ausführung (z. B. Fehlerobjekt oder Erfolgsstatus).
- \`dispatch\`: Die gewrappte Action, die als \`action\`-Prop ans Formular übergeben wird.
- \`isPending\`: \`true\` während die Action läuft (besonders nützlich bei async Actions).

**Validierungsflow:**
1. Action prüft die Eingaben.
2. Bei Fehler gibt sie ein Fehlerobjekt zurück – \`state\` enthält es.
3. Bei Erfolg gibt sie \`null\` zurück (oder ein Erfolgsobjekt).
4. Das Formular rendert Fehler basierend auf \`state\`.

**Pending-State:** Das dritte Rückgabewert \`isPending\` zeigt an, ob die Action noch läuft – ideal, um Buttons zu deaktivieren oder Ladeindikatoren anzuzeigen.`,
        codeExamples: [
          {
            title: 'useActionState mit Validierung',
            js: `import { useActionState } from 'react';

function validateSignup(formData) {
  const errors = {};
  const username = formData.get('username');
  const email = formData.get('email');

  if (!username || username.trim().length < 3) {
    errors.username = 'Mindestens 3 Zeichen erforderlich.';
  }
  if (!email || !email.includes('@')) {
    errors.email = 'Ungültige E-Mail-Adresse.';
  }

  // Bei Fehler: Fehlerobjekt zurückgeben → wird zu "state"
  if (Object.keys(errors).length > 0) return { errors };

  // Bei Erfolg: Aktion ausführen, null zurückgeben
  console.log('Registriert:', { username, email });
  return null;
}

function SignupForm() {
  const [formState, formAction, isPending] = useActionState(validateSignup, null);

  return (
    <form action={formAction}>
      <div>
        <input name="username" type="text" placeholder="Benutzername" />
        {formState?.errors?.username && (
          <p style={{ color: 'red' }}>{formState.errors.username}</p>
        )}
      </div>
      <div>
        <input name="email" type="email" placeholder="E-Mail" />
        {formState?.errors?.email && (
          <p style={{ color: 'red' }}>{formState.errors.email}</p>
        )}
      </div>
      <button type="submit" disabled={isPending}>
        {isPending ? 'Wird gespeichert…' : 'Registrieren'}
      </button>
    </form>
  );
}`,
            ts: `import { useActionState } from 'react';

type FormErrors = { username?: string; email?: string };
type FormState = { errors: FormErrors } | null;

function validateSignup(
  _prevState: FormState,
  formData: FormData
): FormState {
  const errors: FormErrors = {};
  const username = formData.get('username') as string;
  const email = formData.get('email') as string;

  if (!username || username.trim().length < 3) {
    errors.username = 'Mindestens 3 Zeichen erforderlich.';
  }
  if (!email || !email.includes('@')) {
    errors.email = 'Ungültige E-Mail-Adresse.';
  }

  if (Object.keys(errors).length > 0) return { errors };

  console.log('Registriert:', { username, email });
  return null;
}

function SignupForm() {
  const [formState, formAction, isPending] = useActionState<FormState, FormData>(
    validateSignup,
    null
  );

  return (
    <form action={formAction}>
      <div>
        <input name="username" type="text" placeholder="Benutzername" />
        {formState?.errors?.username && (
          <p style={{ color: 'red' }}>{formState.errors.username}</p>
        )}
      </div>
      <div>
        <input name="email" type="email" placeholder="E-Mail" />
        {formState?.errors?.email && (
          <p style={{ color: 'red' }}>{formState.errors.email}</p>
        )}
      </div>
      <button type="submit" disabled={isPending}>
        {isPending ? 'Wird gespeichert…' : 'Registrieren'}
      </button>
    </form>
  );
}`,
          },
        ],
      },
      {
        id: 'fva-async-actions-form-status',
        title: 'Asynchrone Actions, HTTP-Requests & useFormStatus',
        duration: '21 Min.',
        explanation: `Form Actions können \`async\` sein – React wartet automatisch auf das Promise und setzt \`isPending\` während dieser Zeit auf \`true\`.

**Asynchrone Actions:**
Die Action gibt ein Promise zurück. Typisches Muster: \`fetch\`-Request innerhalb der Action. Fehler aus dem Request können als State zurückgegeben werden.

**\`useFormStatus\`:**
Ein Hook, der innerhalb eines Kind-Elements des Formulars verwendet werden kann, um den Übermittlungsstatus zu lesen – **ohne** dass Props durchgereicht werden müssen.

\`\`\`js
const { pending } = useFormStatus();
\`\`\`

Wichtig: \`useFormStatus\` muss in einer **Kind-Komponente** des \`<form>\`-Elements verwendet werden, nicht in der Komponente, die das \`<form>\` rendert.

**Mehrere Actions in einem Formular:**
Einzelne \`<button>\`-Elemente können ihr eigenes \`formAction\`-Attribut haben. Damit lassen sich unterschiedliche Aktionen (z. B. „Speichern" vs. „Löschen") ohne separate Formulare umsetzen.`,
        codeExamples: [
          {
            title: 'Async Action mit fetch + useFormStatus',
            js: `import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';

// Ausgelagerte async Action
async function submitOrder(prevState, formData) {
  const item = formData.get('item');

  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item }),
    });

    if (!res.ok) return { error: 'Bestellung fehlgeschlagen.' };
    return { success: true };
  } catch {
    return { error: 'Netzwerkfehler.' };
  }
}

// Separater Submit-Button mit useFormStatus
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Wird gesendet…' : 'Bestellen'}
    </button>
  );
}

function OrderForm() {
  const [state, formAction] = useActionState(submitOrder, null);

  return (
    <form action={formAction}>
      <input name="item" type="text" placeholder="Artikel" required />
      {state?.error && <p style={{ color: 'red' }}>{state.error}</p>}
      {state?.success && <p style={{ color: 'green' }}>Bestellt!</p>}
      <SubmitButton />
    </form>
  );
}`,
            ts: `import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';

type OrderState = { error?: string; success?: boolean } | null;

async function submitOrder(
  _prevState: OrderState,
  formData: FormData
): Promise<OrderState> {
  const item = formData.get('item') as string;

  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item }),
    });

    if (!res.ok) return { error: 'Bestellung fehlgeschlagen.' };
    return { success: true };
  } catch {
    return { error: 'Netzwerkfehler.' };
  }
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Wird gesendet…' : 'Bestellen'}
    </button>
  );
}

function OrderForm() {
  const [state, formAction] = useActionState<OrderState, FormData>(
    submitOrder,
    null
  );

  return (
    <form action={formAction}>
      <input name="item" type="text" placeholder="Artikel" required />
      {state?.error && <p style={{ color: 'red' }}>{state.error}</p>}
      {state?.success && <p style={{ color: 'green' }}>Bestellt!</p>}
      <SubmitButton />
    </form>
  );
}`,
          },
          {
            title: 'Mehrere Actions in einem Formular (formAction an Button)',
            js: `async function saveItem(formData) {
  const title = formData.get('title');
  await fetch('/api/items', { method: 'POST', body: JSON.stringify({ title }) });
  console.log('Gespeichert');
}

async function deleteItem(formData) {
  const id = formData.get('id');
  await fetch('/api/items/' + id, { method: 'DELETE' });
  console.log('Gelöscht');
}

function ItemForm({ itemId }) {
  return (
    <form>
      <input name="id" type="hidden" value={itemId} />
      <input name="title" type="text" placeholder="Titel" />

      {/* Jeder Button hat seine eigene Action */}
      <button type="submit" formAction={saveItem}>Speichern</button>
      <button type="submit" formAction={deleteItem}>Löschen</button>
    </form>
  );
}`,
            ts: `async function saveItem(formData: FormData): Promise<void> {
  const title = formData.get('title') as string;
  await fetch('/api/items', { method: 'POST', body: JSON.stringify({ title }) });
}

async function deleteItem(formData: FormData): Promise<void> {
  const id = formData.get('id') as string;
  await fetch(\`/api/items/\${id}\`, { method: 'DELETE' });
}

function ItemForm({ itemId }: { itemId: string }) {
  return (
    <form>
      <input name="id" type="hidden" value={itemId} />
      <input name="title" type="text" placeholder="Titel" />

      <button type="submit" formAction={saveItem}>Speichern</button>
      <button type="submit" formAction={deleteItem}>Löschen</button>
    </form>
  );
}`,
          },
        ],
      },
      {
        id: 'fva-optimistic-updates',
        title: 'Optimistic Updating mit useOptimistic',
        duration: '10 Min.',
        explanation: `**Optimistic Updating** bedeutet, dass die UI sofort aktualisiert wird, als ob der Server-Request bereits erfolgreich war – noch bevor das Ergebnis tatsächlich vorliegt. Schlägt der Request fehl, wird der Zustand automatisch zurückgesetzt.

**\`useOptimistic\` (React 19):**
\`\`\`js
const [optimisticState, addOptimistic] = useOptimistic(
  serverState,         // echter State (z. B. aus Server-Fetch)
  (currentState, optimisticValue) => newState  // Update-Funktion
);
\`\`\`

- \`optimisticState\`: Zeigt während einer laufenden Action den optimistisch gesetzten Wert an.
- \`addOptimistic(value)\`: Setzt den optimistischen Wert – wird typischerweise am Anfang der Action aufgerufen.
- Sobald die Action abgeschlossen ist (egal ob Erfolg oder Fehler), fällt \`optimisticState\` automatisch auf \`serverState\` zurück.

**Typischer Usecase:** Like-Buttons, Todo-Listen, Kommentare – alles, wo sofortiges Feedback die UX verbessert.`,
        codeExamples: [
          {
            title: 'useOptimistic – sofortiges UI-Feedback',
            js: `import { useOptimistic, useActionState } from 'react';

function LikeButton({ postId, initialLikes }) {
  const [likes, setLikes] = useActionState(
    async (currentLikes) => {
      // Optimistisch bereits erhöht, jetzt Server-Request
      await fetch('/api/posts/' + postId + '/like', { method: 'POST' });
      return currentLikes; // Server-Wert bestätigt
    },
    initialLikes
  );

  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    likes,
    (currentLikes) => currentLikes + 1  // sofort hochzählen
  );

  async function handleLike(formData) {
    addOptimisticLike(); // UI sofort aktualisieren
    await fetch('/api/posts/' + postId + '/like', { method: 'POST' });
  }

  return (
    <form action={handleLike}>
      <button type="submit">👍 {optimisticLikes}</button>
    </form>
  );
}`,
            ts: `import { useOptimistic } from 'react';

async function likePost(postId: string): Promise<void> {
  await fetch(\`/api/posts/\${postId}/like\`, { method: 'POST' });
}

function LikeButton({ postId, initialLikes }: { postId: string; initialLikes: number }) {
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    initialLikes,
    (currentLikes: number) => currentLikes + 1
  );

  async function handleLike(_formData: FormData): Promise<void> {
    addOptimisticLike(undefined); // UI sofort aktualisieren
    await likePost(postId);       // Server-Request im Hintergrund
  }

  return (
    <form action={handleLike}>
      <button type="submit">👍 {optimisticLikes}</button>
    </form>
  );
}`,
          },
        ],
      },
    ],
  },
  {
    id: 'redux',
    title: 'Abschnitte 20–21: Redux & Advanced Redux',
    slug: 'redux',
    shortDescription: 'Redux von Grund auf: Kernkonzepte, React-Integration, Redux Toolkit, Async-Code mit Thunks und Redux DevTools.',
    lessons: [
      {
        id: 'rx-concepts',
        title: 'Redux – Konzepte & Vergleich mit React Context',
        duration: '22 Min.',
        explanation: `Redux ist eine externe Bibliothek für **zentrales State-Management**. Der gesamte App-State liegt in einem einzigen **Store** – unabhängig von der Komponentenstruktur.

**Wie Redux funktioniert:**
1. Komponenten **subscriben** den Store (lesen Daten).
2. Komponenten dispatchen **Actions** (beschreiben, was passieren soll).
3. Der **Reducer** – eine reine Funktion – berechnet anhand der aktuellen State und der Action den neuen State.
4. Der Store benachrichtigt alle Subscriber → Komponenten rendern neu.

\`\`\`
Komponente → dispatch(action) → Reducer(state, action) → neuer State → Komponente
\`\`\`

**Redux vs. React Context:**
| | React Context | Redux |
|---|---|---|
| Komplexität | Gering | Höher (Boilerplate) |
| Performance | Re-rendert alle Consumer | Granular via Selector |
| DevTools | Nein | Ja (Time-Travel) |
| Middleware | Nein | Ja (z. B. Thunk für Async) |
| Empfehlung | Kleiner/mittlerer State | Großer, komplexer State |

React Context ist für viele Apps ausreichend. Redux lohnt sich bei großen Anwendungen mit komplexem, häufig wechselndem State, wenn Performance und DevTools wichtig sind.

**Hinweis zu \`createStore\`:** Die Funktion wird im Redux-Code als "deprecated" markiert – das bedeutet aber nur, dass Redux Toolkit bevorzugt wird. \`createStore\` ist nicht wirklich deprecated und bleibt funktional.`,
        codeExamples: [
          {
            title: 'Minimaler Redux Store (Vanilla)',
            js: `import { createStore } from 'redux';

// Reducer: reine Funktion – (currentState, action) → newState
function counterReducer(state = { value: 0 }, action) {
  if (action.type === 'counter/increment') {
    return { value: state.value + 1 };
  }
  if (action.type === 'counter/decrement') {
    return { value: state.value - 1 };
  }
  return state; // Unbekannte Action → State unverändert zurückgeben
}

const store = createStore(counterReducer);

// Store abonnieren
store.subscribe(() => {
  console.log('Neuer State:', store.getState());
});

// Action dispatchen
store.dispatch({ type: 'counter/increment' });
// → Neuer State: { value: 1 }

store.dispatch({ type: 'counter/increment' });
// → Neuer State: { value: 2 }

store.dispatch({ type: 'counter/decrement' });
// → Neuer State: { value: 1 }`,
            ts: `import { createStore } from 'redux';

interface CounterState {
  value: number;
}

interface CounterAction {
  type: 'counter/increment' | 'counter/decrement';
}

function counterReducer(
  state: CounterState = { value: 0 },
  action: CounterAction
): CounterState {
  if (action.type === 'counter/increment') {
    return { value: state.value + 1 };
  }
  if (action.type === 'counter/decrement') {
    return { value: state.value - 1 };
  }
  return state;
}

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log('Neuer State:', store.getState());
});

store.dispatch({ type: 'counter/increment' });
store.dispatch({ type: 'counter/decrement' });`,
          },
        ],
      },
      {
        id: 'rx-react-integration',
        title: 'Redux in React einrichten',
        duration: '24 Min.',
        explanation: `Um Redux in React zu nutzen, braucht man zwei Pakete:
- **\`redux\`**: Kernbibliothek (Store, Reducer, Actions)
- **\`react-redux\`**: React-Bindings (Provider, Hooks)

**Setup in 4 Schritten:**

**1. Store erstellen** – Reducer definieren, \`createStore\` aufrufen.

**2. Store bereitstellen** – Die gesamte App in \`<Provider store={store}>\` wrappen (typischerweise in \`main.tsx\`/\`index.js\`).

**3. State lesen** – \`useSelector(selector)\` abonniert den Store. Ändert sich der selektierte Wert, rendert die Komponente neu.

**4. Actions dispatchen** – \`useDispatch()\` gibt die \`dispatch\`-Funktion. Mit Payloads lassen sich Daten mitgeben: \`dispatch({ type: 'counter/add', amount: 5 })\`.`,
        codeExamples: [
          {
            title: 'Store, Provider, useSelector & useDispatch',
            js: `// store.js
import { createStore } from 'redux';

function counterReducer(state = { count: 0, lastAction: '' }, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1, lastAction: 'increment' };
    case 'decrement':
      return { ...state, count: state.count - 1, lastAction: 'decrement' };
    case 'add':
      return { ...state, count: state.count + action.amount };
    default:
      return state;
  }
}

export const store = createStore(counterReducer);

// main.jsx
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Counter.jsx
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Zähler: {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      {/* Payload übergeben: */}
      <button onClick={() => dispatch({ type: 'add', amount: 10 })}>+10</button>
    </div>
  );
}`,
            ts: `// store.ts
import { createStore } from 'redux';

interface CounterState {
  count: number;
  lastAction: string;
}

type CounterAction =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'add'; amount: number };

function counterReducer(
  state: CounterState = { count: 0, lastAction: '' },
  action: CounterAction
): CounterState {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1, lastAction: 'increment' };
    case 'decrement':
      return { ...state, count: state.count - 1, lastAction: 'decrement' };
    case 'add':
      return { ...state, count: state.count + action.amount };
    default:
      return state;
  }
}

export const store = createStore(counterReducer);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Counter.tsx
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from './store';

function Counter() {
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <p>Zähler: {count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={() => dispatch({ type: 'add', amount: 10 })}>+10</button>
    </div>
  );
}`,
          },
        ],
      },
      {
        id: 'rx-state-correctly',
        title: 'Redux State korrekt verwalten',
        duration: '11 Min.',
        explanation: `**Immutabilität** ist die wichtigste Regel im Reducer: Man darf den bestehenden State **niemals direkt verändern**. Stattdessen gibt man immer ein neues Objekt zurück.

**Warum?**
Redux erkennt Änderungen per Referenzvergleich (\`===\`). Wenn du das vorhandene Objekt mutiertst, bleibt die Referenz dieselbe – Redux denkt, nichts hat sich geändert → keine Re-Renders.

**Multiple State Properties:**
Bei mehreren Werten packt man alles in ein State-Objekt. Der Spread-Operator \`{ ...state, changedField: newValue }\` stellt sicher, dass alle anderen Felder unverändert erhalten bleiben.`,
        codeExamples: [
          {
            title: 'Immutable Updates & mehrere State-Felder',
            js: `function authReducer(
  state = { isLoggedIn: false, username: '' },
  action
) {
  switch (action.type) {
    case 'login':
      // ✅ Neues Objekt – nie state.isLoggedIn = true !
      return { ...state, isLoggedIn: true, username: action.username };

    case 'logout':
      return { ...state, isLoggedIn: false, username: '' };

    case 'updateUsername':
      // Nur eine Eigenschaft ändern, den Rest beibehalten
      return { ...state, username: action.username };

    default:
      return state;
  }
}

// ❌ Falsch – State direkt mutieren:
function badReducer(state = { count: 0 }, action) {
  if (action.type === 'increment') {
    state.count++;   // ← Mutation! Redux erkennt die Änderung nicht.
    return state;
  }
  return state;
}

// ✅ Richtig:
function goodReducer(state = { count: 0 }, action) {
  if (action.type === 'increment') {
    return { ...state, count: state.count + 1 }; // ← Neues Objekt
  }
  return state;
}`,
            ts: `interface AuthState {
  isLoggedIn: boolean;
  username: string;
}

type AuthAction =
  | { type: 'login'; username: string }
  | { type: 'logout' }
  | { type: 'updateUsername'; username: string };

function authReducer(
  state: AuthState = { isLoggedIn: false, username: '' },
  action: AuthAction
): AuthState {
  switch (action.type) {
    case 'login':
      return { ...state, isLoggedIn: true, username: action.username };
    case 'logout':
      return { ...state, isLoggedIn: false, username: '' };
    case 'updateUsername':
      return { ...state, username: action.username };
    default:
      return state;
  }
}`,
          },
        ],
      },
      {
        id: 'rx-class-components',
        title: 'Redux mit Class-Komponenten (historisch)',
        duration: '10 Min.',
        explanation: `Vor React Hooks (vor React 16.8) war der einzige Weg, Redux in Komponenten zu nutzen, der \`connect()\` **Higher Order Component** aus \`react-redux\`.

**Heute ist das kaum noch relevant** – \`useSelector\` und \`useDispatch\` sind einfacher und kürzer. Dennoch begegnet man \`connect()\` in älterem Code.

**Wie \`connect()\` funktioniert:**
- \`mapStateToProps\`: Definiert, welche Store-Werte als Props übergeben werden.
- \`mapDispatchToProps\`: Definiert, welche Dispatch-Funktionen als Props übergeben werden.
- \`connect(mstp, mdtp)(Component)\` gibt eine neue Komponente zurück, die die Props automatisch erhält.`,
        codeExamples: [
          {
            title: 'connect() HOC (klassischer Ansatz)',
            js: `import { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <div>
        <p>Zähler: {this.props.count}</p>
        <button onClick={this.props.onIncrement}>+1</button>
        <button onClick={this.props.onDecrement}>-1</button>
      </div>
    );
  }
}

// Welche State-Werte sollen als Props reinkommen?
function mapStateToProps(state) {
  return { count: state.count };
}

// Welche Dispatch-Calls sollen als Props reinkommen?
function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch({ type: 'increment' }),
    onDecrement: () => dispatch({ type: 'decrement' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

// Moderner Äquivalent mit Hooks (empfohlen):
// function Counter() {
//   const count = useSelector(state => state.count);
//   const dispatch = useDispatch();
//   ...
// }`,
            ts: `import { Component } from 'react';
import { connect } from 'react-redux';
import type { RootState, AppDispatch } from './store';

interface OwnProps {}
interface StateProps { count: number }
interface DispatchProps {
  onIncrement: () => void;
  onDecrement: () => void;
}

type Props = OwnProps & StateProps & DispatchProps;

class Counter extends Component<Props> {
  render() {
    return (
      <div>
        <p>Zähler: {this.props.count}</p>
        <button onClick={this.props.onIncrement}>+1</button>
        <button onClick={this.props.onDecrement}>-1</button>
      </div>
    );
  }
}

function mapStateToProps(state: RootState): StateProps {
  return { count: state.count };
}

function mapDispatchToProps(dispatch: AppDispatch): DispatchProps {
  return {
    onIncrement: () => dispatch({ type: 'increment' }),
    onDecrement: () => dispatch({ type: 'decrement' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);`,
          },
        ],
      },
      {
        id: 'rx-toolkit',
        title: 'Redux Toolkit (RTK)',
        duration: '41 Min.',
        explanation: `**Redux Toolkit (RTK)** ist die offizielle, empfohlene Methode, Redux zu schreiben. Es reduziert den Boilerplate drastisch und löst die häufigsten Redux-Probleme:

- Kein manuelles Schreiben von Action-Type-Strings und Action Creators
- **Immutable Updates** via [Immer.js](https://immerjs.github.io/immer/) – man *kann* State direkt mutieren, RTK wandelt es intern in immutable Updates um
- \`configureStore\` richtet Redux DevTools und Middleware automatisch ein

---

**\`createSlice\`** fasst Reducer + Actions in einem zusammen:
\`\`\`js
const counterSlice = createSlice({
  name: 'counter',           // Präfix für Action-Types
  initialState: { value: 0 },
  reducers: {
    increment(state) { state.value++ },      // ✅ Mutation erlaubt (Immer!)
    add(state, action) { state.value += action.payload },
  }
});

export const { increment, add } = counterSlice.actions;
export default counterSlice.reducer;
\`\`\`

**\`configureStore\`** kombiniert mehrere Slices:
\`\`\`js
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  }
});
\`\`\`

**Code aufteilen:** Jeder Slice kommt in eine eigene Datei (z. B. \`store/counterSlice.ts\`). Der Store importiert nur noch die Reducer.`,
        codeExamples: [
          {
            title: 'Vollständiges RTK-Setup mit mehreren Slices',
            js: `// store/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0, showCounter: true },
  reducers: {
    increment(state) {
      state.value++;           // ✅ Direkte Mutation – Immer macht's immutable
    },
    decrement(state) {
      state.value--;
    },
    increase(state, action) {
      state.value += action.payload; // payload = übergebener Wert
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { increment, decrement, increase, toggleCounter } = counterSlice.actions;
export default counterSlice.reducer;

// store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) { state.isAuthenticated = true; },
    logout(state) { state.isAuthenticated = false; },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

// store/index.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;

// Counter.jsx – liest aus counter-Slice
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, increase, toggleCounter } from '../store/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  return show ? (
    <div>
      <p>Zähler: {count}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(increase(5))}>+5</button>
      <button onClick={() => dispatch(toggleCounter())}>Verstecken</button>
    </div>
  ) : <button onClick={() => dispatch(toggleCounter())}>Anzeigen</button>;
}

// Auth.jsx – liest aus auth-Slice
import { login, logout } from '../store/authSlice';

function Auth() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return isAuth
    ? <button onClick={() => dispatch(logout())}>Abmelden</button>
    : <button onClick={() => dispatch(login())}>Anmelden</button>;
}`,
            ts: `// store/counterSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
  showCounter: boolean;
}

const initialState: CounterState = { value: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) { state.value++; },
    decrement(state) { state.value--; },
    increase(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const { increment, decrement, increase, toggleCounter } = counterSlice.actions;
export default counterSlice.reducer;

// store/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) { state.isAuthenticated = true; },
    logout(state) { state.isAuthenticated = false; },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Counter.tsx
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { increment, decrement, increase, toggleCounter } from '../store/counterSlice';

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const show = useSelector((state: RootState) => state.counter.showCounter);
  const dispatch = useDispatch<AppDispatch>();

  if (!show) {
    return <button onClick={() => dispatch(toggleCounter())}>Anzeigen</button>;
  }

  return (
    <div>
      <p>Zähler: {count}</p>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(increase(5))}>+5</button>
      <button onClick={() => dispatch(toggleCounter())}>Verstecken</button>
    </div>
  );
}`,
          },
        ],
      },
      {
        id: 'arx-side-effects',
        title: 'Redux & Async Code – das Kernproblem',
        duration: '13 Min.',
        explanation: `**Reducer müssen reine Funktionen sein** – das ist eine Grundregel von Redux. Das bedeutet:
- Kein asynchroner Code (kein \`fetch\`, kein \`setTimeout\`)
- Keine Side Effects (keine Konsolen-Ausgaben, keine HTTP-Requests)
- Bei gleicher Eingabe immer die gleiche Ausgabe

**Warum?** Redux muss State-Änderungen reproduzierbar und testbar machen. Async-Code verletzt das.

**Wo gehört Async-Logik dann hin?**

Es gibt zwei Möglichkeiten:
1. **In der Komponente** mit \`useEffect\` – einfach, aber can zu "fettem" Komponentencode führen
2. **In einem Thunk** – eine Funktion, die \`dispatch\` bekommt und async arbeiten kann, bevor sie Actions dispatcht

**Frontend vs. Backend:**
Was in den Reducer darf – und was nicht:
| Darf in den Reducer | Darf NICHT in den Reducer |
|---|---|
| State-Transformationen | HTTP-Requests |
| Berechnungen aus bestehenden Daten | localStorage schreiben |
| Array-/Objekt-Operationen | Logging, Analytics |
| Hilfsfunktionen aufrufen | Timer, Subscriptions |`,
        codeExamples: [
          {
            title: 'Side Effect in der Komponente (useEffect-Muster)',
            js: `// ✅ Ansatz 1: Side Effect in der Komponente
// Der Reducer bleibt rein – die Komponente kümmert sich um HTTP.

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const isChanged = useSelector((state) => state.cart.changed);

  // Daten beim Start laden
  useEffect(() => {
    fetch('https://meine-api.com/cart.json')
      .then((res) => res.json())
      .then((data) => {
        dispatch(cartActions.replaceCart(data));
      });
  }, []); // Einmalig beim Mounten

  // Cart bei jeder Änderung speichern
  // Problem: löst auch beim ersten Render aus → isChanged-Flag nötig
  useEffect(() => {
    if (!isChanged) return; // Initialer Render überspringen

    fetch('https://meine-api.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart),
    });
  }, [cart, isChanged]);

  return <div>...</div>;
}`,
            ts: `import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { cartActions } from '../store/cartSlice';

function App() {
  const cart = useSelector((state: RootState) => state.cart);
  const isChanged = useSelector((state: RootState) => state.cart.changed);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    fetch('https://meine-api.com/cart.json')
      .then((res) => res.json())
      .then((data) => dispatch(cartActions.replaceCart(data)));
  }, [dispatch]);

  useEffect(() => {
    if (!isChanged) return;

    fetch('https://meine-api.com/cart.json', {
      method: 'PUT',
      body: JSON.stringify(cart),
    });
  }, [cart, isChanged]);

  return <div>...</div>;
}`,
          },
        ],
      },
      {
        id: 'arx-thunks',
        title: 'Action Creator Thunks',
        duration: '26 Min.',
        explanation: `Ein **Thunk** ist eine Funktion, die anstelle eines normalen Action-Objekts dispatcht wird. Sie erhält \`dispatch\` (und \`getState\`) und kann damit async arbeiten, bevor sie echte Actions dispatcht.

**Warum Thunks?**
Der useEffect-Ansatz funktioniert, aber er "fettet" die Komponente auf. Mit Thunks wandert die Logik in den Store – die Komponente dispatcht nur \`dispatch(fetchCart())\` und ist fertig.

**Thunk mit RTK (\`createAsyncThunk\`):**
RTK bietet \`createAsyncThunk\` für typische Async-Flows mit automatischen \`pending\`/\`fulfilled\`/\`rejected\`-Actions.

**Manueller Thunk:**
Ein manueller Thunk ist eine Funktion, die eine Funktion zurückgibt – kein spezieller API-Call nötig.`,
        codeExamples: [
          {
            title: 'Manueller Thunk & createAsyncThunk',
            js: `// ── Manueller Thunk ──────────────────────────────────────────
// store/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [], changed: false, status: 'idle' },
  reducers: {
    replaceCart(state, action) { state.items = action.payload; },
    setStatus(state, action) { state.status = action.payload; },
  },
});

export const cartActions = cartSlice.actions;

// Thunk: gibt eine Funktion zurück, die dispatch bekommt
export function sendCartData(cart) {
  return async (dispatch) => {
    dispatch(cartActions.setStatus('sending'));

    try {
      await fetch('https://meine-api.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });
      dispatch(cartActions.setStatus('success'));
    } catch (error) {
      dispatch(cartActions.setStatus('error'));
    }
  };
}

export function fetchCartData() {
  return async (dispatch) => {
    try {
      const res = await fetch('https://meine-api.com/cart.json');
      const data = await res.json();
      dispatch(cartActions.replaceCart(data ?? []));
    } catch {
      dispatch(cartActions.setStatus('error'));
    }
  };
}

export default cartSlice.reducer;

// App.jsx – schlanke Komponente
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendCartData, fetchCartData } from '../store/cartSlice';

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isChanged = useSelector((state) => state.cart.changed);

  useEffect(() => {
    dispatch(fetchCartData()); // Thunk dispatchen
  }, [dispatch]);

  useEffect(() => {
    if (!isChanged) return;
    dispatch(sendCartData(cart)); // Thunk mit Daten
  }, [cart, isChanged, dispatch]);

  return <div>...</div>;
}

// ── createAsyncThunk (RTK-Variante) ──────────────────────────
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCart = createAsyncThunk('cart/fetch', async () => {
  const res = await fetch('https://meine-api.com/cart.json');
  return await res.json(); // wird als action.payload weitergegeben
});

const cartSlice2 = createSlice({
  name: 'cart',
  initialState: { items: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => { state.status = 'loading'; })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchCart.rejected, (state) => { state.status = 'error'; });
  },
});`,
            ts: `// store/cartSlice.ts
import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import type { AppDispatch, RootState } from './index';

interface CartItem { id: string; name: string; quantity: number }
interface CartState { items: CartItem[]; changed: boolean; status: 'idle' | 'loading' | 'sending' | 'error' }

const initialState: CartState = { items: [], changed: false, status: 'idle' };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload;
    },
    setStatus(state, action: PayloadAction<CartState['status']>) {
      state.status = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

// Manueller Thunk
export function sendCartData(cart: CartState) {
  return async (dispatch: AppDispatch) => {
    dispatch(cartActions.setStatus('sending'));
    try {
      await fetch('https://meine-api.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });
      dispatch(cartActions.setStatus('idle'));
    } catch {
      dispatch(cartActions.setStatus('error'));
    }
  };
}

export function fetchCartData() {
  return async (dispatch: AppDispatch) => {
    try {
      const res = await fetch('https://meine-api.com/cart.json');
      const data: CartItem[] = await res.json();
      dispatch(cartActions.replaceCart(data ?? []));
    } catch {
      dispatch(cartActions.setStatus('error'));
    }
  };
}

// createAsyncThunk-Variante
export const fetchCart = createAsyncThunk<CartItem[]>('cart/fetch', async () => {
  const res = await fetch('https://meine-api.com/cart.json');
  return await res.json();
});

export default cartSlice.reducer;`,
          },
        ],
      },
      {
        id: 'arx-http-feedback',
        title: 'HTTP-Zustände & Feedback in Redux',
        duration: '13 Min.',
        explanation: `Bei HTTP-Requests braucht man typischerweise drei Zustände im Store:
- **loading** – Anfrage läuft, Spinner anzeigen
- **success/idle** – Anfrage fertig
- **error** – Fehler, Meldung anzeigen

Diese Zustände gehören in den Slice neben den eigentlichen Daten. Komponenten lesen sie per \`useSelector\` aus und rendern entsprechendes Feedback.

**Muster:**
\`\`\`
status: 'idle' | 'loading' | 'success' | 'error'
error: string | null
\`\`\`

Mit \`createAsyncThunk\` kommen \`pending\`/\`fulfilled\`/\`rejected\`-Cases automatisch – man muss nur die \`extraReducers\` befüllen.`,
        codeExamples: [
          {
            title: 'Loading & Error State mit Feedback-UI',
            js: `// store/postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  if (!res.ok) throw new Error('Laden fehlgeschlagen');
  return await res.json();
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;

// PostsList.jsx
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../store/postsSlice';

function PostsList() {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (status === 'loading') return <p>Lädt...</p>;
  if (status === 'error') return <p style={{ color: 'red' }}>Fehler: {error}</p>;

  return (
    <ul>
      {items.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`,
            ts: `// store/postsSlice.ts
import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';

interface Post { id: number; title: string; body: string }
interface PostsState { items: Post[]; status: 'idle' | 'loading' | 'error'; error: string | null }

export const fetchPosts = createAsyncThunk<Post[]>('posts/fetch', async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  if (!res.ok) throw new Error('Laden fehlgeschlagen');
  return await res.json();
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: { items: [], status: 'idle', error: null } as PostsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.error.message ?? 'Unbekannter Fehler';
      });
  },
});

export default postsSlice.reducer;

// PostsList.tsx
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import { fetchPosts } from '../store/postsSlice';

function PostsList() {
  const dispatch = useDispatch<AppDispatch>();
  const { items, status, error } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (status === 'loading') return <p>Lädt...</p>;
  if (status === 'error') return <p style={{ color: 'red' }}>Fehler: {error}</p>;

  return (
    <ul>
      {items.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`,
          },
        ],
      },
      {
        id: 'arx-devtools',
        title: 'Redux DevTools',
        duration: '6 Min.',
        explanation: `Die **Redux DevTools** sind eine Browser-Erweiterung (Chrome/Firefox), die einen tiefen Einblick in den Store geben:

- **Action-Log**: Jede dispatche Action mit Typ und Payload
- **State-Diff**: Was hat sich durch die Action verändert?
- **Time-Travel**: Springe zu einem früheren State zurück
- **State-Export/Import**: State für Bugreports exportieren und reproduzieren

Mit **Redux Toolkit + \`configureStore\`** sind die DevTools automatisch aktiviert (im Development-Modus). Man muss nichts konfigurieren.

**Installation:**
- [Redux DevTools für Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- [Redux DevTools für Firefox](https://addons.mozilla.org/de/firefox/addon/reduxdevtools/)

**Nützliche Features im Alltag:**
\`\`\`
Aktionen pausieren → "Pause Recording"
Bestimmte Aktion rückgängig → "Skip" neben der Action
State zu bestimmtem Zeitpunkt → Slider in "Slider" Tab
\`\`\``,
        codeExamples: [
          {
            title: 'DevTools sind mit configureStore automatisch aktiv',
            js: `// RTK: configureStore aktiviert DevTools automatisch
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: { counter: counterReducer },
  // devTools: true ist der Default in Development
  // In Production werden sie automatisch deaktiviert
});

export default store;

// Ohne RTK (manuell):
import { createStore, compose } from 'redux';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store2 = createStore(
  myReducer,
  composeEnhancers()
);`,
            ts: `import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import postsReducer from './postsSlice';

// ✅ DevTools automatisch aktiv – nichts weiter nötig
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
  // Optionale manuelle Konfiguration:
  // devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;`,
          },
        ],
      },
    ],
  },
  {
    id: 'react-router',
    title: 'Abschnitt 22: React Router – Multi-Page SPA',
    slug: 'react-router',
    shortDescription: 'Client-seitiges Routing mit React Router v6/v7: Routen definieren, navigieren, Layouts, Daten laden und senden.',
    lessons: [
      {
        id: 'rr-basics',
        title: 'Routing-Grundlagen & Setup',
        duration: '19 Min.',
        explanation: `**Was ist Client-seitiges Routing?**
In einer klassischen Multi-Page-App lädt der Browser bei jedem Klick eine neue HTML-Seite vom Server. In einer **Single-Page Application (SPA)** passiert der Seitenwechsel im Browser – kein Neuladen, keine weiße Seite, kein Verbindungsaufbau. React Router übernimmt die URL-Verwaltung und rendert die passenden Komponenten.

**Installation:**
\`\`\`bash
pnpm add react-router-dom
\`\`\`

**Routen definieren** – es gibt zwei gleichwertige Muster:

**1. JSX-Syntax** (übersichtlich, weit verbreitet):
\`\`\`jsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);
\`\`\`

**2. Objekt-Syntax** (empfohlen, API-nah):
\`\`\`js
const router = createBrowserRouter([
  { path: '/', element: <Root />, children: [
    { index: true, element: <Home /> },
    { path: 'about', element: <About /> },
  ]},
]);
\`\`\`

Beide Syntaxen sind funktional identisch – wähle eine und bleib dabei.`,
        codeExamples: [
          {
            title: 'Router einrichten & Provider mounten',
            js: `// main.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,  // Fehler-Seite für diesen Ast
    children: [
      { index: true, element: <Home /> },   // / ohne Unterseite
      { path: 'about', element: <About /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);`,
            ts: `// main.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);`,
          },
        ],
      },
      {
        id: 'rr-navigation',
        title: 'Navigation: Link, NavLink & useNavigate',
        duration: '30 Min.',
        explanation: `**Kein \`<a href>\`!** Normale Anker-Tags lösen einen echten Seitenaufruf aus. React Router stellt stattdessen drei Werkzeuge bereit:

**1. \`<Link to="...">\`** – deklarative Navigation ohne Neuladen.

**2. \`<NavLink to="...">\`** – wie \`Link\`, aber bekommt automatisch eine \`active\`-Klasse, wenn die Route aktiv ist. Ideal für Navigationsleisten. Die \`className\`-Prop kann auch eine Funktion sein, die \`{ isActive }\` erhält.

**3. \`useNavigate()\`** – programmatische Navigation aus Event-Handlern oder Effekten heraus (z. B. nach erfolgreichem Login).

---

**Relative vs. Absolute Pfade:**
- **Absolut** (beginnt mit \`/\`): geht immer von der Root-URL aus. \`to="/about"\` → \`/about\`
- **Relativ** (ohne \`/\`): wird relativ zur aktuellen Route aufgelöst. Innerhalb \`/products/123\` führt \`to="edit"\` zu \`/products/123/edit\`
- \`to=".."\` geht eine Ebene hoch (in der Routen-Hierarchie, nicht in der URL-Hierarchie – Unterschied beachten!)

**Index Routes** (\`index: true\`) sind die Default-Child-Route – sie rendert, wenn der Eltern-Pfad exakt übereinstimmt, aber keine Child-Route aktiv ist.`,
        codeExamples: [
          {
            title: 'Link, NavLink, useNavigate & dynamische Routen',
            js: `// router (in main.jsx)
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:productId', element: <ProductDetail /> },
    ],
  },
]);

// Root.jsx – Layout mit Navigation
import { Link, NavLink, Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <nav>
        {/* NavLink: active-Klasse automatisch */}
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'active' : ''}
          end  // ← nur exakt "/" – sonst wäre "/" immer aktiv
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => isActive ? 'active' : ''}
        >
          Produkte
        </NavLink>
      </nav>

      <main>
        <Outlet /> {/* ← hier rendert die Child-Route */}
      </main>
    </>
  );
}

// Products.jsx – Links auf dynamische Routen
import { Link } from 'react-router-dom';

function Products() {
  const products = [
    { id: 'p1', name: 'Produkt A' },
    { id: 'p2', name: 'Produkt B' },
  ];
  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          <Link to={p.id}>{p.name}</Link>
          {/* Relativ → /products/p1, /products/p2 */}
        </li>
      ))}
    </ul>
  );
}

// ProductDetail.jsx – URL-Parameter lesen
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();
  return <p>Produkt-ID: {productId}</p>;
}

// Programmatisch navigieren
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  function handleLogin() {
    // ... Login-Logik
    navigate('/dashboard');         // vorwärts
    // navigate(-1);                // zurück (wie Browser-Zurück)
    // navigate('/login', { replace: true }); // History ersetzen
  }

  return <button onClick={handleLogin}>Anmelden</button>;
}`,
            ts: `import { Link, NavLink, Outlet, useParams, useNavigate } from 'react-router-dom';

// Root.tsx – Layout
function Root() {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? 'active' : ''
          }
          end
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }: { isActive: boolean }) =>
            isActive ? 'active' : ''
          }
        >
          Produkte
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

// ProductDetail.tsx
function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  return <p>Produkt-ID: {productId}</p>;
}

// Programmatische Navigation
function LoginForm() {
  const navigate = useNavigate();

  function handleLogin(): void {
    navigate('/dashboard');
    // navigate(-1);
    // navigate('/login', { replace: true });
  }

  return <button onClick={handleLogin}>Anmelden</button>;
}`,
          },
        ],
      },
      {
        id: 'rr-layouts-errors',
        title: 'Layouts, Nested Routes & Fehlerseiten',
        duration: '12 Min.',
        explanation: `**Layouts** in React Router werden über Nested Routes gebaut. Eine Route ohne eigene Seite dient als "Hülle" – sie rendert Navigationsleiste, Header etc. und zeigt über \`<Outlet />\` an, wo die Child-Route erscheinen soll.

**Nested Routes** erlauben beliebig tiefe Hierarchien. Jedes Layout rendert einen \`<Outlet />\`, der von der aktiven Child-Route befüllt wird.

**\`errorElement\`** – React Router fängt unbehandelte Fehler (Exceptions im Loader/Action, 404 usw.) ab und rendert stattdessen das \`errorElement\` der nächstnäheren Route. Mit \`useRouteError()\` lässt sich der Fehler auslesen.

**Error-Hierarchie:** Fehler steigen die Routen-Hierarchie hoch, bis sie ein \`errorElement\` finden. Setze es auf Root-Ebene als Fallback, und ggf. granularer auf Unter-Routen.`,
        codeExamples: [
          {
            title: 'Nested Layout & errorElement',
            js: `// router
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,   // Layout-Wrapper
    errorElement: <ErrorPage />, // Fängt alle Fehler in diesem Ast
    children: [
      { index: true, element: <Home /> },
      {
        path: 'products',
        element: <ProductsLayout />,  // weiteres Layout
        children: [
          { index: true, element: <ProductList /> },
          { path: ':id', element: <ProductDetail /> },
        ],
      },
    ],
  },
]);

// RootLayout.jsx
import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <MainNav />        {/* immer sichtbar */}
      <main>
        <Outlet />       {/* ← aktive Child-Route */}
      </main>
      <Footer />
    </>
  );
}

// ErrorPage.jsx
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  // error kann ein Response-Objekt oder ein Error sein
  const status = error?.status;
  const message = error?.data?.message || error?.message || 'Unbekannter Fehler';

  return (
    <div>
      <h1>{status === 404 ? 'Seite nicht gefunden' : 'Fehler'}</h1>
      <p>{message}</p>
    </div>
  );
}`,
            ts: `import { Outlet, useRouteError } from 'react-router-dom';

// RootLayout.tsx
function RootLayout() {
  return (
    <>
      <MainNav />
      <main>
        <Outlet />
      </main>
    </>
  );
}

// ErrorPage.tsx
function ErrorPage() {
  const error = useRouteError() as {
    status?: number;
    data?: { message?: string };
    message?: string;
  };

  const status = error?.status;
  const message = error?.data?.message ?? error?.message ?? 'Unbekannter Fehler';

  return (
    <div>
      <h1>{status === 404 ? 'Seite nicht gefunden' : 'Fehler'}</h1>
      <p>{message}</p>
    </div>
  );
}`,
          },
        ],
      },
      {
        id: 'rr-loader',
        title: 'Daten laden mit loader()',
        duration: '47 Min.',
        explanation: `React Router bietet mit **\`loader\`** einen eingebauten Mechanismus, Daten **vor** dem Rendern einer Route zu laden – ähnlich wie \`useEffect\` + Fetch, aber direkter in die Router-Konfiguration integriert.

**Wie es funktioniert:**
1. Man definiert eine \`loader\`-Funktion direkt bei der Route.
2. React Router führt sie aus, **bevor** die Route-Komponente gerendert wird.
3. Die Komponente liest die Daten mit \`useLoaderData()\`.

**Vorteile gegenüber useEffect:**
- Kein Loading-State nötig – die Komponente rendert erst, wenn Daten da sind
- Zentrale Fehlerbehandlung per \`errorElement\`
- Navigation-Loading-Zustand per \`useNavigation()\`

**Wo den Loader-Code platzieren?**  
Konvention: Der Loader wird in der **gleichen Datei** wie die Seiten-Komponente definiert und von dort exportiert – die Router-Konfiguration importiert ihn dann.

**Was darf in einen Loader?**
Alles, was Daten liest: fetch, localStorage, DB-Anfragen (in einem Node-Backend). Was **nicht** rein darf: State-Updates, Side Effects mit Auswirkungen außerhalb der Anfrage.`,
        codeExamples: [
          {
            title: 'loader(), useLoaderData & useNavigation',
            js: `// pages/Products.jsx
import { useLoaderData, useNavigation } from 'react-router-dom';

// ① Loader-Funktion – wird vor dem Rendern ausgeführt
export async function loader() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    // Fehler als Response werfen → errorElement fängt ihn ab
    throw new Response('Produkte konnten nicht geladen werden', { status: 500 });
  }
  return res.json(); // direkt returnen – kein state nötig
  // Alternativ: return json(data) aus react-router-dom (veraltet ab v7)
}

// ② Komponente liest die Daten
function Products() {
  const products = useLoaderData();

  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}

export default Products;

// pages/ProductDetail.jsx – dynamischer Loader
export async function loader({ params }) {
  const res = await fetch(\`https://fakestoreapi.com/products/\${params.productId}\`);
  if (!res.ok) throw new Response('Nicht gefunden', { status: 404 });
  return res.json();
}

function ProductDetail() {
  const product = useLoaderData();
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}

// router (main.jsx)
import Products, { loader as productsLoader } from './pages/Products';
import ProductDetail, { loader as productDetailLoader } from './pages/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'products',
        element: <Products />,
        loader: productsLoader,       // ← hier eintragen
        children: [
          {
            path: ':productId',
            element: <ProductDetail />,
            loader: productDetailLoader,
          },
        ],
      },
    ],
  },
]);

// Navigation-Zustand – Lade-Feedback im Layout
function Root() {
  const navigation = useNavigation();
  // navigation.state: 'idle' | 'loading' | 'submitting'

  return (
    <>
      {navigation.state === 'loading' && <div className="progress-bar" />}
      <Outlet />
    </>
  );
}

// Daten aus einem übergeordneten Loader lesen
// Wenn ProductDetail auch Daten von Products braucht:
import { useRouteLoaderData } from 'react-router-dom';

function ProductDetail() {
  // ID muss mit der route id übereinstimmen
  const allProducts = useRouteLoaderData('products-route');
  const thisProduct = useLoaderData();
  // ...
}`,
            ts: `// pages/Products.tsx
import { useLoaderData, useNavigation, type LoaderFunctionArgs } from 'react-router-dom';

interface Product { id: number; title: string; description: string }

export async function loader(): Promise<Product[]> {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Response('Laden fehlgeschlagen', { status: 500 });
  return res.json();
}

function Products() {
  const products = useLoaderData() as Product[];

  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}

export default Products;

// pages/ProductDetail.tsx – dynamischer Loader
export async function loader({ params }: LoaderFunctionArgs): Promise<Product> {
  const res = await fetch(\`https://fakestoreapi.com/products/\${params.productId}\`);
  if (!res.ok) throw new Response('Nicht gefunden', { status: 404 });
  return res.json();
}

function ProductDetail() {
  const product = useLoaderData() as Product;
  return <h1>{product.title}</h1>;
}

// Root.tsx – Navigation-Zustand
import { Outlet, useNavigation } from 'react-router-dom';

function Root() {
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === 'loading' && <div className="progress-bar" />}
      <Outlet />
    </>
  );
}`,
          },
        ],
      },
      {
        id: 'rr-actions',
        title: 'Daten senden mit action()',
        duration: '42 Min.',
        explanation: `Für **Daten-Mutationen** (Formulare absenden, POST/PUT/DELETE-Requests) bietet React Router die **\`action\`**-Funktion – das Gegenstück zum Loader.

**Wie es funktioniert:**
1. \`<Form method="post">\` (aus \`react-router-dom\`) schickt das Formular an die \`action\`-Funktion der aktuellen Route.
2. Die \`action\`-Funktion erhält \`{ request, params }\` und kann die Daten verarbeiten.
3. Nach dem Action-Aufruf revalidiert React Router automatisch alle Loader der aktuellen Seite.

**useNavigation()** zeigt den Submission-Zustand: \`navigation.state === 'submitting'\` → Button deaktivieren, Spinner zeigen.

**useActionData()** liest Rückgabewerte der Action (z. B. Validierungsfehler) in der Komponente.

**Programmatisch senden mit \`useSubmit()\`:**
Wenn man kein \`<Form>\` nutzen will (z. B. bei automatischem Submit nach einer Aktion).

**Routen wiederverwenden mit verschiedenen HTTP-Methoden:**
Eine Route kann GET (Loader), POST, PUT und DELETE in einer Action abhandeln – \`request.method\` unterscheidet sie.

**\`useFetcher()\`** – Loader/Actions aufrufen, **ohne** die aktuelle Route zu verlassen. Ideal für "Like"-Buttons, Newsletter-Anmeldungen oder Prefetching, die nicht navigieren sollen.`,
        codeExamples: [
          {
            title: 'action(), Form, useActionData & useFetcher',
            js: `// pages/NewProduct.jsx
import { Form, useActionData, useNavigation, redirect } from 'react-router-dom';

// Action-Funktion – verarbeitet das Formular
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  // Validierung
  const errors = {};
  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Name muss mindestens 2 Zeichen haben.';
  }
  if (Object.keys(errors).length > 0) {
    return errors; // Fehler zurückgeben → useActionData()
  }

  // HTTP-Request
  const res = await fetch('https://api.example.com/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Response('Fehler beim Speichern', { status: 500 });

  return redirect('/products'); // ← nach Erfolg weiterleiten
}

function NewProduct() {
  const errors = useActionData();        // Validierungsfehler aus Action
  const navigation = useNavigation();   // Submission-Zustand
  const isSubmitting = navigation.state === 'submitting';

  return (
    // Form aus react-router-dom – schickt an die action dieser Route
    <Form method="post">
      <label>
        Name
        <input type="text" name="name" />
        {errors?.name && <span className="error">{errors.name}</span>}
      </label>
      <label>
        Preis
        <input type="number" name="price" step="0.01" />
      </label>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Speichert...' : 'Speichern'}
      </button>
    </Form>
  );
}

export default NewProduct;

// Eine Action für mehrere Methoden (DELETE + POST)
export async function action({ request, params }) {
  if (request.method === 'DELETE') {
    await fetch(\`/api/products/\${params.id}\`, { method: 'DELETE' });
    return redirect('/products');
  }
  // POST ...
}

// useFetcher – Action aufrufen ohne zu navigieren
import { useFetcher } from 'react-router-dom';

function NewsletterSignup() {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === 'submitting';
  const data = fetcher.data; // Antwort der Action

  return (
    <fetcher.Form method="post" action="/newsletter">
      <input type="email" name="email" placeholder="E-Mail" />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? '...' : 'Anmelden'}
      </button>
      {data?.message && <p>{data.message}</p>}
    </fetcher.Form>
  );
}`,
            ts: `// pages/NewProduct.tsx
import { Form, useActionData, useNavigation, redirect } from 'react-router-dom';
import type { ActionFunctionArgs } from 'react-router-dom';

interface ActionErrors { name?: string; price?: string }

export async function action({ request }: ActionFunctionArgs): Promise<ActionErrors | Response> {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const price = formData.get('price') as string;

  const errors: ActionErrors = {};
  if (!name || name.trim().length < 2) {
    errors.name = 'Name muss mindestens 2 Zeichen haben.';
  }
  if (Object.keys(errors).length > 0) return errors;

  const res = await fetch('https://api.example.com/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, price }),
  });
  if (!res.ok) throw new Response('Fehler beim Speichern', { status: 500 });

  return redirect('/products');
}

function NewProduct() {
  const errors = useActionData() as ActionErrors | undefined;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Form method="post">
      <label>
        Name
        <input type="text" name="name" />
        {errors?.name && <span className="error">{errors.name}</span>}
      </label>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Speichert...' : 'Speichern'}
      </button>
    </Form>
  );
}

export default NewProduct;

// useFetcher
import { useFetcher } from 'react-router-dom';

interface FetcherData { message?: string }

function NewsletterSignup() {
  const fetcher = useFetcher<FetcherData>();
  const isSubmitting = fetcher.state === 'submitting';

  return (
    <fetcher.Form method="post" action="/newsletter">
      <input type="email" name="email" placeholder="E-Mail" />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? '...' : 'Anmelden'}
      </button>
      {fetcher.data?.message && <p>{fetcher.data.message}</p>}
    </fetcher.Form>
  );
}`,
          },
        ],
      },
      {
        id: 'rr-defer',
        title: 'Deferred Loading mit defer() & Await',
        duration: '16 Min.',
        explanation: `Standardmäßig wartet React Router, bis **alle** Loader-Promises aufgelöst sind, bevor die Route gerendert wird. Bei langsamen Requests blockiert das die Navigation.

**\`defer()\`** löst dieses Problem: Man gibt Promises zurück, ohne \`await\`. React Router navigiert sofort und rendert den fertigen Teil – der Rest wird nachgeladen und per \`<Await>\` eingeblendet, sobald er bereit ist.

**Bausteine:**
- **\`defer({ key: promise })\`** – gibt ein oder mehrere Promises zurück
- **\`<Suspense fallback={...}>\`** – Platzhalter während des Ladens
- **\`<Await resolve={promise}>\`** – rendert wenn Promise aufgelöst

**Hinweis zu React Router v7:** \`defer()\` und \`json()\` werden in v7 offiziell als deprecated markiert und sollen ersetzt werden durch direkte Promise-Rückgaben + \`React.use()\`. Für v6-Projekte ist \`defer()\` aber der Standardweg.`,
        codeExamples: [
          {
            title: 'defer(), Suspense & Await',
            js: `// pages/Blog.jsx
import { Suspense } from 'react';
import { defer, useLoaderData, Await } from 'react-router-dom';

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  return res.json();
}

async function fetchFeatured() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  return res.json();
}

// ① defer: featured wird awaited (schnell), posts nicht (langsam)
export function loader() {
  return defer({
    posts: fetchPosts(),           // Promise – nicht awaited → sofort zurück
    featured: fetchFeatured(),     // ebenfalls defered
  });
}

function Blog() {
  const { posts, featured } = useLoaderData();

  return (
    <div>
      <h1>Blog</h1>

      {/* ② Suspense + Await für jeden deferreds Wert */}
      <Suspense fallback={<p>Featured lädt...</p>}>
        <Await resolve={featured}>
          {(post) => <h2>Heute: {post.title}</h2>}
        </Await>
      </Suspense>

      <Suspense fallback={<p>Artikel werden geladen...</p>}>
        <Await resolve={posts}>
          {(posts) => (
            <ul>
              {posts.map((p) => (
                <li key={p.id}>{p.title}</li>
              ))}
            </ul>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

export default Blog;`,
            ts: `// pages/Blog.tsx
import { Suspense } from 'react';
import { defer, useLoaderData, Await } from 'react-router-dom';

interface Post { id: number; title: string }

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  return res.json();
}

async function fetchFeatured(): Promise<Post> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  return res.json();
}

// loader gibt defer zurück – keine await-Verzögerung
export function loader() {
  return defer({
    posts: fetchPosts(),
    featured: fetchFeatured(),
  });
}

function Blog() {
  const { posts, featured } = useLoaderData() as {
    posts: Promise<Post[]>;
    featured: Promise<Post>;
  };

  return (
    <div>
      <Suspense fallback={<p>Featured lädt...</p>}>
        <Await resolve={featured}>
          {(post: Post) => <h2>Heute: {post.title}</h2>}
        </Await>
      </Suspense>

      <Suspense fallback={<p>Artikel werden geladen...</p>}>
        <Await resolve={posts}>
          {(posts: Post[]) => (
            <ul>
              {posts.map((p) => (
                <li key={p.id}>{p.title}</li>
              ))}
            </ul>
          )}
        </Await>
      </Suspense>
    </div>
  );
}

export default Blog;`,
          },
        ],
      },
    ],
  },
  {
    id: 'authentication',
    title: 'Abschnitt 23: Authentication in React Apps',
    slug: 'authentication',
    shortDescription: 'Token-basierte Authentifizierung mit React Router: Login/Logout, geschützte Routen, Token-Verwaltung und automatisches Ablaufen.',
    lessons: [
      {
        id: 'auth-concepts',
        title: 'Wie Authentifizierung funktioniert',
        duration: '9 Min.',
        explanation: `In Single-Page-Apps gibt es zwei verbreitete Auth-Konzepte:

**1. Server-Side Sessions**
Der Server erstellt nach dem Login eine Session und speichert sie. Der Client erhält eine Session-ID (meist als Cookie). Bei jeder Anfrage schickt der Browser den Cookie mit – der Server prüft die ID gegen seine Session-Datenbank.

**2. JSON Web Tokens (JWT)** ← in React-Apps Standard
Der Server erstellt nach erfolgreichem Login ein **signiertes Token** (JWT) und schickt es zurück. Der Client speichert es (z. B. in \`localStorage\`) und schickt es bei jeder Anfrage im \`Authorization\`-Header mit.

\`\`\`
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5...
\`\`\`

Der Server muss **keine Session-Datenbank** führen – er verifiziert das Token mit seinem geheimen Schlüssel. Das macht JWTs gut skalierbar.

**JWT-Aufbau:**
\`\`\`
Header.Payload.Signature
\`\`\`
- **Header**: Algorithmus (z. B. HS256)
- **Payload**: Daten (userId, email, Ablaufzeit) – Base64-kodiert, **nicht verschlüsselt**
- **Signature**: HMAC des Headers + Payload, signiert mit dem Server-Secret

→ Das Token kann jeder lesen, aber nicht fälschen (ohne das Secret).`,
        codeExamples: [
          {
            title: 'JWT dekodieren (nur zur Veranschaulichung)',
            js: `// JWT besteht aus 3 Base64url-kodierten Teilen
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxMjMiLCJleHAiOjE3MDAwMDAwMDB9.abc';

const [header, payload, signature] = token.split('.');

// Payload dekodieren (öffentlich lesbar – kein Geheimnis!)
const decoded = JSON.parse(atob(payload));
console.log(decoded);
// { userId: "123", exp: 1700000000 }

// Prüfen ob das Token abgelaufen ist
const isExpired = decoded.exp * 1000 < Date.now();
console.log('Abgelaufen:', isExpired);

// WICHTIG: Diese Prüfung ist nur client-seitig (UI-Feedback).
// Die echte Validierung macht immer der Server.`,
            ts: `interface JwtPayload {
  userId: string;
  email?: string;
  exp: number;  // Unix-Timestamp (Sekunden)
}

function decodeToken(token: string): JwtPayload | null {
  try {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload)) as JwtPayload;
  } catch {
    return null;
  }
}

function isTokenExpired(token: string): boolean {
  const decoded = decodeToken(token);
  if (!decoded) return true;
  return decoded.exp * 1000 < Date.now();
}

const token = localStorage.getItem('authToken') ?? '';
console.log('Abgelaufen:', isTokenExpired(token));`,
          },
        ],
      },
      {
        id: 'auth-login-logout',
        title: 'Login, Logout & Token-Verwaltung',
        duration: '35 Min.',
        explanation: `**Login-Flow mit React Router:**
1. Formular sendet Credentials an eine Route-\`action()\`
2. Die Action schickt einen POST-Request an die Backend-API
3. Backend antwortet mit einem JWT → Token in \`localStorage\` speichern
4. \`redirect()\` zur geschützten Seite

**Logout:**
Token aus \`localStorage\` löschen und zur Login-Seite weiterleiten.

**Query-Parameter für Modustrennung:**
Login und Registrierung lassen sich in einer einzigen Route/Komponente abhandeln – ein Query-Parameter (\`?mode=login\` vs. \`?mode=signup\`) bestimmt, was gesendet wird.

\`useSearchParams()\` liest und setzt Query-Parameter.

**UI-Zustand basierend auf Auth-Status:**
Ein Loader auf Root-Ebene liest das Token aus \`localStorage\` und gibt es zurück – alle Komponenten können per \`useRouteLoaderData('root')\` darauf zugreifen, um Nav-Links bedingt zu rendern.`,
        codeExamples: [
          {
            title: 'Auth-Action, Token speichern & Query-Parameter',
            js: `// pages/Auth.jsx
import { Form, Link, useSearchParams, useActionData } from 'react-router-dom';

// ① Query-Parameter lesen: ?mode=login oder ?mode=signup
function AuthPage() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') ?? 'login';
  const isLogin = mode === 'login';
  const errors = useActionData();

  return (
    <Form method="post">
      <h1>{isLogin ? 'Anmelden' : 'Registrieren'}</h1>
      <label>
        E-Mail
        <input type="email" name="email" required />
      </label>
      <label>
        Passwort
        <input type="password" name="password" required />
      </label>
      {errors && <ul>{Object.values(errors).map((e) => <li key={e}>{e}</li>)}</ul>}
      <button type="submit">{isLogin ? 'Anmelden' : 'Registrieren'}</button>
      <Link to={\`?mode=\${isLogin ? 'signup' : 'login'}\`}>
        {isLogin ? 'Noch kein Konto? Registrieren' : 'Bereits registriert? Anmelden'}
      </Link>
    </Form>
  );
}

export default AuthPage;

// ② Action: Login oder Signup je nach mode
import { redirect } from 'react-router-dom';

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') ?? 'login';

  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  const res = await fetch(\`https://my-api.com/auth/\${mode}\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });

  if (res.status === 422) {
    return await res.json(); // Validierungsfehler zurückgeben
  }
  if (!res.ok) throw new Response('Authentifizierung fehlgeschlagen', { status: 500 });

  const { token } = await res.json();
  localStorage.setItem('authToken', token);        // Token speichern
  localStorage.setItem('tokenExpiry', Date.now() + 60 * 60 * 1000); // 1h

  return redirect('/dashboard');
}

// ③ Logout-Action
export async function logoutAction() {
  localStorage.removeItem('authToken');
  localStorage.removeItem('tokenExpiry');
  return redirect('/auth?mode=login');
}

// ④ Token-Helper
export function getToken() {
  const token = localStorage.getItem('authToken');
  const expiry = localStorage.getItem('tokenExpiry');
  if (!token || !expiry) return null;
  if (Date.now() > parseInt(expiry)) {
    localStorage.removeItem('authToken');
    localStorage.removeItem('tokenExpiry');
    return null;
  }
  return token;
}

// ⑤ Root-Loader: Token für alle Routen bereitstellen
export function rootLoader() {
  return { token: getToken() };
}

// ⑥ Navigation basierend auf Auth-Status
import { useRouteLoaderData, Form } from 'react-router-dom';

function MainNav() {
  const { token } = useRouteLoaderData('root');

  return (
    <nav>
      {!token && <Link to="/auth?mode=login">Anmelden</Link>}
      {token && (
        <Form method="post" action="/logout">
          <button type="submit">Abmelden</button>
        </Form>
      )}
    </nav>
  );
}`,
            ts: `// pages/Auth.tsx
import { Form, Link, useSearchParams, useActionData, redirect } from 'react-router-dom';
import type { ActionFunctionArgs } from 'react-router-dom';

interface AuthErrors { email?: string; password?: string; message?: string }

function AuthPage() {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode') ?? 'login';
  const isLogin = mode === 'login';
  const errors = useActionData() as AuthErrors | undefined;

  return (
    <Form method="post">
      <h1>{isLogin ? 'Anmelden' : 'Registrieren'}</h1>
      <label>
        E-Mail
        <input type="email" name="email" required />
      </label>
      <label>
        Passwort
        <input type="password" name="password" required />
      </label>
      {errors?.message && <p className="error">{errors.message}</p>}
      <button type="submit">{isLogin ? 'Anmelden' : 'Registrieren'}</button>
      <Link to={\`?mode=\${isLogin ? 'signup' : 'login'}\`}>
        {isLogin ? 'Noch kein Konto? Registrieren' : 'Bereits registriert? Anmelden'}
      </Link>
    </Form>
  );
}

export default AuthPage;

export async function action({ request }: ActionFunctionArgs): Promise<AuthErrors | Response> {
  const mode = new URL(request.url).searchParams.get('mode') ?? 'login';
  const formData = await request.formData();

  const res = await fetch(\`https://my-api.com/auth/\${mode}\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: formData.get('email'),
      password: formData.get('password'),
    }),
  });

  if (res.status === 422) return await res.json();
  if (!res.ok) throw new Response('Authentifizierung fehlgeschlagen', { status: 500 });

  const { token } = await res.json() as { token: string };
  localStorage.setItem('authToken', token);
  localStorage.setItem('tokenExpiry', String(Date.now() + 60 * 60 * 1000));

  return redirect('/dashboard');
}

// util/auth.ts
export function getToken(): string | null {
  const token = localStorage.getItem('authToken');
  const expiry = localStorage.getItem('tokenExpiry');
  if (!token || !expiry) return null;
  if (Date.now() > parseInt(expiry)) {
    localStorage.removeItem('authToken');
    localStorage.removeItem('tokenExpiry');
    return null;
  }
  return token;
}

export function rootLoader() {
  return { token: getToken() };
}`,
          },
        ],
      },
      {
        id: 'auth-protected-routes',
        title: 'Route Protection & Token in Requests',
        duration: '22 Min.',
        explanation: `**Route Protection** verhindert, dass nicht eingeloggte Nutzer auf geschützte Seiten zugreifen.

Das eleganteste Muster mit React Router: Ein **Loader auf der geschützten Route** prüft den Token. Wenn keiner vorhanden, \`redirect()\` zur Login-Seite. Keine extra Komponente nötig.

**Token an Requests anhängen:**
Jeder Request an gesicherte API-Endpunkte braucht den \`Authorization\`-Header. Man holt das Token aus \`localStorage\` und fügt es ein.

**Automatischer Logout bei Ablauf:**
Mit \`setTimeout\` und der verbleibenden Token-Laufzeit kann man einen automatischen Logout planen. Der Timer wird beim Laden der App gestartet und beim manuellen Logout gelöscht.`,
        codeExamples: [
          {
            title: 'Loader-Guard, Authorization-Header & Auto-Logout',
            js: `// ① Route Protection via Loader (kein HOC, kein Context nötig)
import { redirect } from 'react-router-dom';
import { getToken } from '../util/auth';

export function requireAuthLoader() {
  const token = getToken();
  if (!token) {
    return redirect('/auth?mode=login');
  }
  return null; // ← Loader MUSS einen Wert zurückgeben (auch null)
}

// In der Router-Konfiguration:
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    id: 'root',
    loader: rootLoader,
    children: [
      { path: 'auth', element: <AuthPage />, action: authAction },
      { path: 'logout', action: logoutAction },
      {
        // Alle geschützten Routen in einem Wrapper-Objekt
        loader: requireAuthLoader,  // ← wird vor jeder Child-Route geprüft
        children: [
          { path: 'dashboard', element: <Dashboard /> },
          { path: 'profile', element: <Profile /> },
        ],
      },
    ],
  },
]);

// ② Token an API-Requests anhängen
async function fetchWithAuth(url, options = {}) {
  const token = getToken();
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Content-Type': 'application/json',
      ...(token ? { Authorization: \`Bearer \${token}\` } : {}),
    },
  });
}

// Verwendung in einem Loader:
export async function dashboardLoader() {
  const res = await fetchWithAuth('https://my-api.com/user/data');
  if (res.status === 401) return redirect('/auth?mode=login');
  if (!res.ok) throw new Response('Fehler', { status: 500 });
  return res.json();
}

// ③ Automatischer Logout bei Token-Ablauf
export function getTokenDuration() {
  const expiry = localStorage.getItem('tokenExpiry');
  if (!expiry) return -1;
  return parseInt(expiry) - Date.now(); // verbleibende Zeit in ms
}

// In der Root-Komponente oder einem useEffect:
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AutoLogout() {
  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    if (!token) return;

    const duration = getTokenDuration();
    if (duration <= 0) {
      // Sofort ausloggen
      localStorage.removeItem('authToken');
      navigate('/auth?mode=login');
      return;
    }

    // Timer setzen
    const timer = setTimeout(() => {
      localStorage.removeItem('authToken');
      navigate('/auth?mode=login');
    }, duration);

    return () => clearTimeout(timer); // Cleanup bei Unmount
  }, [token, navigate]);

  return null;
}`,
            ts: `// util/auth.ts
import { redirect } from 'react-router-dom';

export function getToken(): string | null {
  const token = localStorage.getItem('authToken');
  const expiry = localStorage.getItem('tokenExpiry');
  if (!token || !expiry) return null;
  if (Date.now() > parseInt(expiry)) {
    localStorage.removeItem('authToken');
    localStorage.removeItem('tokenExpiry');
    return null;
  }
  return token;
}

export function getTokenDuration(): number {
  const expiry = localStorage.getItem('tokenExpiry');
  if (!expiry) return -1;
  return parseInt(expiry) - Date.now();
}

export function requireAuthLoader(): Response | null {
  const token = getToken();
  if (!token) return redirect('/auth?mode=login');
  return null; // ← Loader muss immer etwas zurückgeben
}

// ② Authorization-Header Helper
export async function fetchWithAuth(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  const token = getToken();
  return fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers ?? {}),
      ...(token ? { Authorization: \`Bearer \${token}\` } : {}),
    },
  });
}

// ③ Auto-Logout Hook
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAutoLogout(): void {
  const navigate = useNavigate();
  const token = getToken();

  useEffect(() => {
    if (!token) return;

    const duration = getTokenDuration();
    if (duration <= 0) {
      localStorage.removeItem('authToken');
      navigate('/auth?mode=login');
      return;
    }

    const timer = setTimeout(() => {
      localStorage.removeItem('authToken');
      navigate('/auth?mode=login');
    }, duration);

    return () => clearTimeout(timer);
  }, [token, navigate]);
}`,
          },
        ],
      },
    ],
  },
  {
    id: 'deployment',
    title: 'Abschnitt 24: Deploying React Apps',
    slug: 'deployment',
    shortDescription: 'React-Apps für die Produktion bauen, Lazy Loading einsetzen und auf einem Hosting-Dienst deployen.',
    lessons: [
      {
        id: 'dep-build-lazy',
        title: 'Production Build & Lazy Loading',
        duration: '18 Min.',
        explanation: `**Deployment-Schritte im Überblick:**
1. Code optimieren (Lazy Loading, keine Dev-Only-Imports)
2. \`pnpm build\` → statische Dateien in \`dist/\`
3. Den \`dist/\`-Ordner auf einen Hosting-Dienst hochladen

---

**Lazy Loading** (Code Splitting) verhindert, dass der Browser beim ersten Aufruf die gesamte App lädt. Stattdessen werden Routen-Komponenten erst geladen, wenn sie tatsächlich benötigt werden.

React Router + \`React.lazy()\` + \`import()\` arbeiten dafür zusammen:
- \`React.lazy(() => import('./pages/About'))\` – Komponente dynamisch importieren
- React Router löst den Import aus, sobald zur Route navigiert wird
- Ein \`<Suspense fallback={...}>\` zeigt während des Ladens einen Fallback

**Wann lohnt sich Lazy Loading?**
Bei kleineren Apps kaum spürbar. Bei größeren Apps mit vielen Routen/Seiten kann es den initialen Bundle deutlich verkleinern.`,
        codeExamples: [
          {
            title: 'Lazy Loading mit React.lazy() & React Router',
            js: `// main.jsx – Router mit Lazy Loading
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// ① Sofort laden (kleine, kritische Seiten)
import RootLayout from './pages/Root';
import HomePage from './pages/Home';

// ② Lazy laden (größere Seiten, die nicht sofort gebraucht werden)
const BlogPage = lazy(() => import('./pages/Blog'));
const DashboardPage = lazy(() => import('./pages/Dashboard'));
const ProfilePage = lazy(() => import('./pages/Profile'));

// ③ Loader können ebenfalls lazy geladen werden
async function blogLoader() {
  const { loader } = await import('./pages/Blog');
  return loader();
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'blog',
        element: (
          // Suspense um jede lazy Komponente – oder einmal um den Outlet
          <Suspense fallback={<p>Lädt...</p>}>
            <BlogPage />
          </Suspense>
        ),
        loader: blogLoader,
      },
      {
        path: 'dashboard',
        element: (
          <Suspense fallback={<p>Lädt...</p>}>
            <DashboardPage />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);`,
            ts: `// main.tsx
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';

const BlogPage = lazy(() => import('./pages/Blog'));
const DashboardPage = lazy(() => import('./pages/Dashboard'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'blog',
        element: (
          <Suspense fallback={<p>Lädt...</p>}>
            <BlogPage />
          </Suspense>
        ),
        // Loader ebenfalls lazy:
        loader: async () => {
          const { loader } = await import('./pages/Blog');
          return loader();
        },
      },
      {
        path: 'dashboard',
        element: (
          <Suspense fallback={<p>Lädt...</p>}>
            <DashboardPage />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
);`,
          },
        ],
      },
      {
        id: 'dep-hosting',
        title: 'Hosting & Server-Konfiguration',
        duration: '13 Min.',
        explanation: `**Build-Output:**
\`pnpm build\` (bzw. \`vite build\`) erzeugt optimierte, minifizierte Dateien im \`dist/\`-Ordner. Diese sind rein statisch – kein Node-Server nötig.

**Hosting-Optionen für React SPAs:**
| Dienst | Kosten | Besonderheit |
|---|---|---|
| **Netlify** | Kostenlos (kleines Kontingent) | Git-Integration, automatische Deploys |
| **Vercel** | Kostenlos | Optimiert für Frontend-Frameworks |
| **Firebase Hosting** | Kostenlos | Teil des Firebase-Ökosystems |
| **GitHub Pages** | Kostenlos | Nur öffentliche Repos |
| **AWS S3 + CloudFront** | Pay-per-use | Professionell, skalierbar |

**Das SPA-Routing-Problem:**
Wenn ein Nutzer direkt \`/products/123\` aufruft, sucht der Server nach einer Datei \`products/123/index.html\` – die existiert nicht. Der Server gibt 404 zurück.

**Lösung:** Den Server so konfigurieren, dass er bei 404-Fehlern immer \`index.html\` ausliefert. React Router übernimmt dann das Routing im Browser.

- **Netlify**: Datei \`public/_redirects\` mit Inhalt \`/* /index.html 200\`
- **Vercel**: \`vercel.json\` mit \`rewrites\`
- **Apache**: \`.htaccess\`
- **Nginx**: \`try_files $uri /index.html\``,
        codeExamples: [
          {
            title: 'Server-Konfiguration für SPA-Routing',
            js: `// ① Netlify – public/_redirects
// Inhalt der Datei (keine JS-Syntax, nur Text):
// /* /index.html 200

// ② Vercel – vercel.json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}

// ③ vite.config.js – Basis-URL für Unterordner-Deployments
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Wenn die App unter /my-app/ läuft (z. B. GitHub Pages):
  // base: '/my-app/',
});

// ④ Nginx-Konfiguration (server block):
// location / {
//   root /var/www/html;
//   try_files $uri $uri/ /index.html;
// }

// ⑤ Apache .htaccess:
// Options -MultiViews
// RewriteEngine On
// RewriteCond %{REQUEST_FILENAME} !-f
// RewriteRule ^ index.html [QSA,L]`,
            ts: `// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Chunk-Größen-Warnung anpassen (optional)
    chunkSizeWarningLimit: 1000,
  },
  // Für Unterordner-Deployments (z. B. GitHub Pages):
  // base: '/mein-projekt/',
});

// Nach dem Build:
// dist/
// ├── index.html          ← Einstiegspunkt
// ├── assets/
// │   ├── index-[hash].js  ← gebündeltes JS (minifiziert)
// │   └── index-[hash].css ← gebündeltes CSS
// └── ...

// Mit Lazy Loading entstehen mehrere JS-Chunks:
// assets/
// ├── index-[hash].js      ← Haupt-Bundle (klein!)
// ├── Blog-[hash].js       ← Blog-Chunk (lazy)
// └── Dashboard-[hash].js  ← Dashboard-Chunk (lazy)`,
          },
        ],
      },
    ],
  },
  {
    id: 'tanstack-query',
    title: 'Abschnitt 25: React Query / Tanstack Query',
    slug: 'tanstack-query',
    shortDescription: 'HTTP-Requests elegant verwalten: Caching, Mutations, Invalidierung und Optimistic Updating mit @tanstack/react-query.',
    lessons: [
      {
        id: 'tq-intro',
        title: 'Was ist React Query & wann nutzen?',
        duration: '8 Min.',
        explanation: `**React Query** (offiziell: **TanStack Query**) ist eine Bibliothek für **Server State Management** in React-Apps.

**Was ist Server State?**
- Daten, die vom Server kommen (z. B. via Fetch / Axios)
- Müssen geladen, gecacht, aktuell gehalten und bei Bedarf neu abgerufen werden
- Unterschied zu **Client State** (z. B. UI-Toggle, Formularwerte) → dafür ist Context/Zustand/Redux besser geeignet

**Ohne React Query** musst du selbst verwalten:
- \`useEffect\` + \`useState\` für Loading/Error/Data
- Kein automatisches Caching → bei jedem Rendern neuer Request
- Kein automatisches Refetching
- Kein Deduplication (mehrere Komponenten → mehrere identische Requests)

**Mit React Query** bekommst du das kostenlos:
- Automatisches **Caching** der Antworten
- **Stale-while-revalidate**: Cached-Daten sofort anzeigen, im Hintergrund neu laden
- **Background Refetching** beim Fokussieren des Tabs
- **Deduplication**: Gleiche Query → nur ein Request
- **Optimistic Updates**, **Paginierung**, **Infinite Scrolling**

**Kernkonzept:** React Query unterscheidet zwischen **Queries** (Daten lesen) und **Mutations** (Daten schreiben/ändern/löschen).`,
        codeExamples: [
          {
            title: 'Installation & QueryClientProvider einrichten',
            js: `// Terminal:
// pnpm add @tanstack/react-query

// main.jsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);`,
            ts: `// Terminal:
// pnpm add @tanstack/react-query

// main.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);`,
          },
        ],
      },
      {
        id: 'tq-usequery',
        title: 'useQuery: Daten laden & anzeigen',
        duration: '21 Min.',
        explanation: `**\`useQuery\`** ist der zentrale Hook zum Laden von Daten. Er erwartet ein Konfigurationsobjekt mit mindestens zwei Pflichtfeldern:

- **\`queryKey\`**: Ein Array, das die Query eindeutig identifiziert. Gleicher Key → gleicher Cache-Eintrag. Kann auch Parameter enthalten, um dynamische Queries zu unterscheiden.
- **\`queryFn\`**: Eine async Funktion, die die Daten zurückliefert (Promise).

**Rückgabewerte:**
| Feld | Bedeutung |
|---|---|
| \`data\` | Die geladenen Daten (oder \`undefined\` beim ersten Laden) |
| \`isPending\` | \`true\` wenn noch keine Daten vorhanden |
| \`isLoading\` | \`true\` beim ersten Laden (kein Cache) |
| \`isError\` | \`true\` wenn die queryFn geworfen hat |
| \`error\` | Das Error-Objekt |
| \`isFetching\` | \`true\` auch beim Hintergrund-Refetching |
| \`refetch\` | Funktion zum manuellen Neu-Laden |

**Query Key als dynamischer Parameter:**
Wenn sich Teile des Query Keys ändern (z. B. eine gesuchte ID), wird die Query automatisch neu ausgeführt. Innerhalb der \`queryFn\` kann man via \`{ queryKey }\` auf den Key zugreifen – praktisch, um die URL daraus abzuleiten.`,
        codeExamples: [
          {
            title: 'Einfache Query mit useQuery',
            js: `import { useQuery } from '@tanstack/react-query';

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Fehler beim Laden');
  return res.json();
}

function Posts() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isPending) return <p>Lädt…</p>;
  if (isError) return <p>Fehler: {error.message}</p>;

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`,
            ts: `import { useQuery } from '@tanstack/react-query';

type Post = { id: number; title: string; body: string };

async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) throw new Error('Fehler beim Laden');
  return res.json();
}

function Posts() {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isPending) return <p>Lädt…</p>;
  if (isError) return <p>Fehler: {(error as Error).message}</p>;

  return (
    <ul>
      {data!.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}`,
          },
          {
            title: 'Dynamische Query Keys & queryKey als Funktions-Input',
            js: `import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

// Query-Funktion erhält { queryKey } – daraus lässt sich der Parameter ableiten
async function fetchPost({ queryKey }) {
  const [, postId] = queryKey;  // ['post', 42]
  const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${postId}\`);
  if (!res.ok) throw new Error('Post nicht gefunden');
  return res.json();
}

function PostDetail() {
  const { id } = useParams();

  const { data, isPending } = useQuery({
    queryKey: ['post', +id],      // ← bei neuer id → neue Query
    queryFn: fetchPost,           // bekommt { queryKey: ['post', id] }
  });

  if (isPending) return <p>Lädt…</p>;
  return <h1>{data.title}</h1>;
}`,
            ts: `import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

type Post = { id: number; title: string; body: string };

async function fetchPost({ queryKey }: { queryKey: readonly unknown[] }): Promise<Post> {
  const [, postId] = queryKey;
  const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${postId}\`);
  if (!res.ok) throw new Error('Post nicht gefunden');
  return res.json();
}

function PostDetail() {
  const { id } = useParams<{ id: string }>();

  const { data, isPending } = useQuery({
    queryKey: ['post', Number(id)],
    queryFn: fetchPost,
  });

  if (isPending) return <p>Lädt…</p>;
  return <h1>{data!.title}</h1>;
}`,
          },
        ],
      },
      {
        id: 'tq-config',
        title: 'Cache, Stale Time & Query-Konfiguration',
        duration: '13 Min.',
        explanation: `**Wie funktioniert der Cache?**

1. Query wird ausgeführt → Ergebnis landet im Cache unter dem \`queryKey\`
2. Nächster Aufruf mit gleichem Key → sofort aus Cache (kein Flackern)
3. Im Hintergrund prüft React Query, ob die Daten **"stale"** (veraltet) sind
4. Wenn stale → neuer Request im Hintergrund → Cache aktualisiert → UI re-rendert

**Wichtige Konfigurationsoptionen:**

| Option | Default | Bedeutung |
|---|---|---|
| \`staleTime\` | \`0\` | Wie lange Daten als "frisch" gelten (ms). \`0\` = sofort stale |
| \`gcTime\` | \`5 Min.\` | Wie lange ungenutzte Cache-Einträge behalten werden |
| \`refetchOnWindowFocus\` | \`true\` | Refetch beim Tab-Wechsel zurück |
| \`retry\` | \`3\` | Wie oft bei Fehler wiederholen |
| \`enabled\` | \`true\` | Query nur ausführen wenn \`true\` |

**\`staleTime: Infinity\`** → Daten werden nie als stale markiert, kein automatisches Refetching (gut für statische Daten wie Kategorien).

**Konfiguration global** (für alle Queries):
\`\`\`js
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } }
});
\`\`\`

**Anfragen abbrechen** mit \`AbortSignal\`: React Query übergibt der \`queryFn\` automatisch ein \`signal\`. Bei Komponenten-Unmount oder neuem Query Key wird der Request abgebrochen.`,
        codeExamples: [
          {
            title: 'staleTime, gcTime & AbortSignal',
            js: `import { useQuery, QueryClient } from '@tanstack/react-query';

// Global-Konfiguration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,  // 5 Minuten frisch
      gcTime: 1000 * 60 * 10,    // 10 Min. im Cache behalten
      retry: 1,
    },
  },
});

// Pro-Query-Konfiguration + AbortSignal
async function fetchPosts({ signal }) {
  const res = await fetch('https://api.example.com/posts', { signal });
  if (!res.ok) throw new Error('Fehler');
  return res.json();
}

function Posts() {
  const { data, isPending } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,          // signal wird automatisch übergeben
    staleTime: 1000 * 30,         // überschreibt den Default für diese Query
    refetchOnWindowFocus: false,
  });

  if (isPending) return <p>Lädt…</p>;
  return <ul>{data.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}`,
            ts: `import { useQuery, QueryClient, QueryFunctionContext } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: 1,
    },
  },
});

type Post = { id: number; title: string };

async function fetchPosts({ signal }: QueryFunctionContext): Promise<Post[]> {
  const res = await fetch('https://api.example.com/posts', { signal });
  if (!res.ok) throw new Error('Fehler');
  return res.json();
}

function Posts() {
  const { data, isPending } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 1000 * 30,
    refetchOnWindowFocus: false,
  });

  if (isPending) return <p>Lädt…</p>;
  return <ul>{data!.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}`,
          },
          {
            title: 'Enabled/Disabled Queries',
            js: `import { useQuery } from '@tanstack/react-query';

// Häufiger Use-Case: Query nur ausführen wenn ein Wert vorhanden ist
function UserPosts({ userId }) {
  const { data, isPending, isError } = useQuery({
    queryKey: ['posts', 'user', userId],
    queryFn: async () => {
      const res = await fetch(\`/api/users/\${userId}/posts\`);
      return res.json();
    },
    enabled: !!userId,   // ← kein Request solange userId undefined/null
  });

  if (!userId) return <p>Kein User ausgewählt.</p>;
  if (isPending) return <p>Lädt Posts…</p>;
  if (isError) return <p>Fehler beim Laden.</p>;

  return <ul>{data.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}`,
            ts: `import { useQuery } from '@tanstack/react-query';

type Post = { id: number; title: string };

function UserPosts({ userId }: { userId: string | undefined }) {
  const { data, isPending, isError } = useQuery<Post[]>({
    queryKey: ['posts', 'user', userId],
    queryFn: async () => {
      const res = await fetch(\`/api/users/\${userId}/posts\`);
      return res.json();
    },
    enabled: !!userId,
  });

  if (!userId) return <p>Kein User ausgewählt.</p>;
  if (isPending) return <p>Lädt Posts…</p>;
  if (isError) return <p>Fehler beim Laden.</p>;

  return <ul>{data!.map(p => <li key={p.id}>{p.title}</li>)}</ul>;
}`,
          },
        ],
      },
      {
        id: 'tq-mutations',
        title: 'Mutations: Daten schreiben, ändern & löschen',
        duration: '32 Min.',
        explanation: `**\`useMutation\`** ist der Hook für schreibende Operationen (POST, PUT, PATCH, DELETE).

Im Gegensatz zu \`useQuery\`:
- Kein automatischer Start – du rufst \`mutate(variables)\` oder \`mutateAsync(variables)\` manuell auf
- Kein \`queryKey\` nötig (kein Caching der Mutation selbst)
- Hat Lifecycle-Callbacks: \`onSuccess\`, \`onError\`, \`onSettled\`, \`onMutate\`

**Nach einer erfolgreichen Mutation** müssen meistens zugehörige Queries **invalidiert** werden, damit React Query sie neu lädt und die UI aktuell bleibt.

\`\`\`js
queryClient.invalidateQueries({ queryKey: ['posts'] });
\`\`\`

Das invalidiert alle Queries, deren Key mit \`['posts']\` beginnt (Prefix-Match).

**Update statt neu laden** – mit \`setQueryData\` kann man den Cache direkt überschreiben, ohne einen neuen Request:
\`\`\`js
queryClient.setQueryData(['post', id], updatedPost);
\`\`\`

**\`mutate\` vs. \`mutateAsync\`:**
- \`mutate(data)\` – fire-and-forget, Fehler werden im \`onError\`-Callback behandelt
- \`mutateAsync(data)\` – gibt ein Promise zurück, kann mit \`await\` und \`try/catch\` verwendet werden`,
        codeExamples: [
          {
            title: 'useMutation: neuen Post erstellen & Queries invalidieren',
            js: `import { useMutation, useQueryClient } from '@tanstack/react-query';

async function createPost(postData) {
  const res = await fetch('/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  });
  if (!res.ok) throw new Error('Erstellen fehlgeschlagen');
  return res.json();
}

function NewPostForm() {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      // Posts-Liste invalidieren → wird automatisch neu geladen
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError: (error) => {
      console.error('Fehler:', error.message);
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    mutate({ title: formData.get('title'), body: formData.get('body') });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Titel" />
      <textarea name="body" placeholder="Inhalt" />
      <button disabled={isPending}>
        {isPending ? 'Speichert…' : 'Erstellen'}
      </button>
      {isError && <p>Fehler beim Erstellen!</p>}
    </form>
  );
}`,
            ts: `import { useMutation, useQueryClient } from '@tanstack/react-query';

type NewPost = { title: string; body: string };
type Post = NewPost & { id: number };

async function createPost(postData: NewPost): Promise<Post> {
  const res = await fetch('/api/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  });
  if (!res.ok) throw new Error('Erstellen fehlgeschlagen');
  return res.json();
}

function NewPostForm() {
  const queryClient = useQueryClient();

  const { mutate, isPending, isError } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
    onError: (error: Error) => {
      console.error('Fehler:', error.message);
    },
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    mutate({
      title: formData.get('title') as string,
      body: formData.get('body') as string,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Titel" />
      <textarea name="body" placeholder="Inhalt" />
      <button disabled={isPending}>
        {isPending ? 'Speichert…' : 'Erstellen'}
      </button>
      {isError && <p>Fehler beim Erstellen!</p>}
    </form>
  );
}`,
          },
          {
            title: 'Daten aktualisieren (PUT) & Refetching deaktivieren',
            js: `import { useMutation, useQueryClient } from '@tanstack/react-query';

async function updatePost({ id, ...data }) {
  const res = await fetch(\`/api/posts/\${id}\`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Update fehlgeschlagen');
  return res.json();
}

function EditPost({ post }) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updatePost,
    onSuccess: (updatedPost) => {
      // Option 1: Cache direkt überschreiben (kein neuer Request)
      queryClient.setQueryData(['post', updatedPost.id], updatedPost);

      // Option 2: Nur invalidieren, aber kein sofortiges Refetch auslösen
      queryClient.invalidateQueries({
        queryKey: ['posts'],
        refetchType: 'none',  // ← kein automatisches Refetching nach Invalidierung
      });
    },
  });

  return (
    <button onClick={() => mutate({ id: post.id, title: 'Neuer Titel' })}>
      Speichern
    </button>
  );
}`,
            ts: `import { useMutation, useQueryClient } from '@tanstack/react-query';

type Post = { id: number; title: string; body: string };
type UpdatePayload = { id: number; title?: string; body?: string };

async function updatePost({ id, ...data }: UpdatePayload): Promise<Post> {
  const res = await fetch(\`/api/posts/\${id}\`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Update fehlgeschlagen');
  return res.json();
}

function EditPost({ post }: { post: Post }) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: updatePost,
    onSuccess: (updatedPost) => {
      queryClient.setQueryData(['post', updatedPost.id], updatedPost);
      queryClient.invalidateQueries({
        queryKey: ['posts'],
        refetchType: 'none',
      });
    },
  });

  return (
    <button onClick={() => mutate({ id: post.id, title: 'Neuer Titel' })}>
      Speichern
    </button>
  );
}`,
          },
        ],
      },
      {
        id: 'tq-optimistic',
        title: 'Optimistic Updating',
        duration: '13 Min.',
        explanation: `**Optimistic Updating** bedeutet: Die UI wird sofort aktualisiert, bevor der Server antwortet. Falls der Server-Request fehlschlägt, wird der alte Zustand wiederhergestellt (**Rollback**).

**Warum?** Für Aktionen, die fast immer erfolgreich sind (z. B. Like-Button, Checkbox), fühlt sich die App so reaktiver an – keine wahrnehmbare Verzögerung.

**Implementierung mit \`onMutate\`:**
1. **\`onMutate\`**: Wird direkt beim Aufruf von \`mutate()\` ausgeführt – noch vor dem Server-Request
   - Laufende Refetches canceln (\`cancelQueries\`)
   - Aktuellen Cache-Wert sichern (\`getQueryData\`)
   - Cache optimistisch setzen (\`setQueryData\`)
   - Snapshot zurückgeben (fürs Rollback)
2. **\`onError\`**: Bekommt den Snapshot aus \`onMutate\` → Rollback mit \`setQueryData\`
3. **\`onSettled\`**: Immer ausgeführt (Erfolg + Fehler) → Queries invalidieren für finale Synchronisation`,
        codeExamples: [
          {
            title: 'Optimistisches Liken eines Posts',
            js: `import { useMutation, useQueryClient } from '@tanstack/react-query';

async function likePost(postId) {
  const res = await fetch(\`/api/posts/\${postId}/like\`, { method: 'POST' });
  if (!res.ok) throw new Error('Like fehlgeschlagen');
  return res.json();
}

function LikeButton({ post }) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: likePost,

    // 1. Sofort ausführen – vor dem Request
    onMutate: async (postId) => {
      // Laufende Refetches abbrechen, damit sie den opt. Update nicht überschreiben
      await queryClient.cancelQueries({ queryKey: ['post', postId] });

      // Aktuellen Wert sichern
      const previousPost = queryClient.getQueryData(['post', postId]);

      // Optimistisch updaten
      queryClient.setQueryData(['post', postId], (old) => ({
        ...old,
        likes: old.likes + 1,
      }));

      return { previousPost };  // ← Snapshot für Rollback
    },

    // 2. Rollback bei Fehler
    onError: (_err, postId, context) => {
      queryClient.setQueryData(['post', postId], context.previousPost);
    },

    // 3. Finale Synchronisation
    onSettled: (_data, _err, postId) => {
      queryClient.invalidateQueries({ queryKey: ['post', postId] });
    },
  });

  return (
    <button onClick={() => mutate(post.id)}>
      👍 {post.likes}
    </button>
  );
}`,
            ts: `import { useMutation, useQueryClient } from '@tanstack/react-query';

type Post = { id: number; title: string; likes: number };

async function likePost(postId: number): Promise<Post> {
  const res = await fetch(\`/api/posts/\${postId}/like\`, { method: 'POST' });
  if (!res.ok) throw new Error('Like fehlgeschlagen');
  return res.json();
}

function LikeButton({ post }: { post: Post }) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: likePost,

    onMutate: async (postId: number) => {
      await queryClient.cancelQueries({ queryKey: ['post', postId] });

      const previousPost = queryClient.getQueryData<Post>(['post', postId]);

      queryClient.setQueryData<Post>(['post', postId], (old) =>
        old ? { ...old, likes: old.likes + 1 } : old
      );

      return { previousPost };
    },

    onError: (_err, postId, context) => {
      if (context?.previousPost) {
        queryClient.setQueryData(['post', postId], context.previousPost);
      }
    },

    onSettled: (_data, _err, postId) => {
      queryClient.invalidateQueries({ queryKey: ['post', postId] });
    },
  });

  return (
    <button onClick={() => mutate(post.id)}>
      👍 {post.likes}
    </button>
  );
}`,
          },
        ],
      },
      {
        id: 'tq-router',
        title: 'React Query & React Router',
        duration: '20 Min.',
        explanation: `**React Query und React Router** lassen sich gut kombinieren. Es gibt zwei gängige Muster:

---

**Muster 1: useQuery in Komponenten (klassisch)**
Queries laufen in den Komponenten selbst. Kein Unterschied zur normalen Verwendung. Der \`isPending\`-State wird für Ladeanzeigen genutzt.

---

**Muster 2: QueryClient in Router-Loader (empfohlen bei React Router v6.4+)**
React Router's \`loader\`-Funktion kann den \`QueryClient\` nutzen, um Daten **vor** dem Rendern der Komponente zu laden. Vorteil: Keine Lade-Spinner in der Komponente – die Route rendert erst, wenn die Daten da sind.

Dabei wird \`queryClient.ensureQueryData()\` verwendet:
- Wenn Daten bereits im Cache: sofort zurückgeben (kein neuer Request)
- Wenn nicht: Daten laden und cachen

In der Komponente greift man dann trotzdem auf \`useQuery\` zu – die Daten sind aber sofort verfügbar (kein Pending-State beim initialen Render).

Das Beste beider Welten: Daten sind beim ersten Render sofort da **und** React Query kümmert sich danach um automatisches Refetching und Cache-Management.`,
        codeExamples: [
          {
            title: 'QueryClient im Router-Loader',
            js: `// router.jsx
import { createBrowserRouter } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';
import PostsPage from './pages/PostsPage';

export const queryClient = new QueryClient();

const postsQuery = {
  queryKey: ['posts'],
  queryFn: async () => {
    const res = await fetch('/api/posts');
    return res.json();
  },
  staleTime: 1000 * 60,
};

export const router = createBrowserRouter([
  {
    path: '/posts',
    element: <PostsPage />,
    loader: async () => {
      // Wenn Cache frisch → direkt aus Cache; sonst: Fetch
      return queryClient.ensureQueryData(postsQuery);
    },
  },
]);

// main.jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

// pages/PostsPage.jsx
import { useQuery } from '@tanstack/react-query';
import { postsQuery } from '../router';  // Query-Definition wiederverwenden

function PostsPage() {
  // data ist sofort verfügbar – Loader hat bereits geladen
  const { data } = useQuery(postsQuery);

  return (
    <ul>
      {data.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}`,
            ts: `// router.tsx
import { createBrowserRouter } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';
import PostsPage from './pages/PostsPage';

export const queryClient = new QueryClient();

type Post = { id: number; title: string };

export const postsQuery = {
  queryKey: ['posts'] as const,
  queryFn: async (): Promise<Post[]> => {
    const res = await fetch('/api/posts');
    return res.json();
  },
  staleTime: 1000 * 60,
};

export const router = createBrowserRouter([
  {
    path: '/posts',
    element: <PostsPage />,
    loader: async () => {
      return queryClient.ensureQueryData(postsQuery);
    },
  },
]);

// main.tsx
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
);

// pages/PostsPage.tsx
import { useQuery } from '@tanstack/react-query';
import { postsQuery } from '../router';

function PostsPage() {
  const { data } = useQuery(postsQuery);

  return (
    <ul>
      {data!.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}`,
          },
        ],
      },
    ],
  },
  {
    id: 'nextjs-intro',
    title: 'Abschnitt 26: Next.js – A Pretty Deep Dive',
    slug: 'nextjs-intro',
    shortDescription: 'Next.js von Grund auf: App Router, Server Components, Server Actions, Pages Router, SSG/SSR und Datenbankanbindung.',
    lessons: [
      {
        id: 'njs-setup',
        title: 'Projektstruktur, Routing & reservierte Dateinamen',
        duration: '18 Min.',
        explanation: `**Next.js** ist ein React-Framework, das serverseitiges Rendering, statische Generierung und Full-Stack-Fähigkeiten direkt mitbringt.

**Projekt erstellen:**
\`\`\`bash
npx create-next-app@latest mein-projekt
\`\`\`

---

**App Router (seit Next.js 13+ empfohlen)**

Routing basiert vollständig auf dem **Dateisystem** innerhalb des \`app/\`-Ordners:
- Jeder Ordner = ein Route-Segment
- \`page.tsx\` in einem Ordner → die gerenderte Seite für diese Route
- \`layout.tsx\` → umschließt alle Seiten darunter (persistent, kein Re-Mount beim Navigieren)
- \`loading.tsx\` → automatische Ladeseite (Suspense-Boundary)
- \`error.tsx\` → Error-Boundary für diese Route
- \`not-found.tsx\` → 404-Page für diese Route

**Reservierte Dateinamen** (im \`app/\`-Ordner):
| Dateiname | Zweck |
|---|---|
| \`page.tsx\` | Seiteninhalt (öffentlich zugänglich) |
| \`layout.tsx\` | Gemeinsames Layout (umschließt children) |
| \`loading.tsx\` | Lade-UI (automatische Suspense-Boundary) |
| \`error.tsx\` | Error-Boundary (\`'use client'\` erforderlich) |
| \`not-found.tsx\` | 404-Seite, auslösbar mit \`notFound()\` |
| \`route.ts\` | API-Endpunkt (kein UI) |

**Dynamische Routen**: Ordner in eckigen Klammern → \`[id]/page.tsx\`
- \`params.id\` gibt den Wert aus der URL zurück
- Ordner mit \`(gruppe)\` → Route Grouping (keine URL-Auswirkung, nur Organisationszweck)

**Eigene Komponenten** kommen nach Konvention in einen \`components/\`-Ordner – aber **nicht** direkt als Unterordner einer Route, sondern entweder im Root oder in einem eigenen Ordner außerhalb öffentlicher Routen.`,
        codeExamples: [
          {
            title: 'Dateistruktur & page.tsx / layout.tsx',
            js: `// app/page.jsx  →  Route: /
export default function HomePage() {
  return <h1>Willkommen!</h1>;
}

// app/blog/page.jsx  →  Route: /blog
export default function BlogPage() {
  return <h1>Blog</h1>;
}

// app/blog/[id]/page.jsx  →  Route: /blog/42
export default function BlogPostPage({ params }) {
  return <h1>Post-ID: {params.id}</h1>;
}

// app/layout.jsx  →  Root-Layout (umschließt ALLE Seiten)
export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <nav>Navigation hier</nav>
        {children}
      </body>
    </html>
  );
}`,
            ts: `// app/page.tsx  →  Route: /
export default function HomePage() {
  return <h1>Willkommen!</h1>;
}

// app/blog/page.tsx  →  Route: /blog
export default function BlogPage() {
  return <h1>Blog</h1>;
}

// app/blog/[id]/page.tsx  →  Route: /blog/42
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <h1>Post-ID: {id}</h1>;
}

// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <nav>Navigation hier</nav>
        {children}
      </body>
    </html>
  );
}`,
          },
        ],
      },
      {
        id: 'njs-navigation',
        title: 'Navigation & Layouts',
        duration: '10 Min.',
        explanation: `**Zwischen Seiten navigieren** in Next.js erfolgt mit der \`<Link>\`-Komponente aus \`next/link\` – kein vollständiger Seitenneulade, sondern clientseitige Navigation (SPA-Verhalten).

\`\`\`jsx
import Link from 'next/link';
<Link href="/blog">Zum Blog</Link>
\`\`\`

**Aktiven Link erkennen**: mit dem Hook \`usePathname()\` aus \`next/navigation\` (\`'use client'\` nötig, da Hook).

---

**Layouts & verschachtelte Layouts**

Ein \`layout.tsx\` umschließt alle Seiten und Unter-Layouts in seinem Ordner. Das Root-Layout (\`app/layout.tsx\`) ist **Pflicht** und enthält \`<html>\` und \`<body>\`.

- Layouts werden beim Navigieren **nicht neu gemountet** → State bleibt erhalten
- Für verschachtelte Layouts einfach \`layout.tsx\` in einem Unterordner anlegen
- Eigene Komponenten (z. B. Navbar) können direkt im Layout genutzt werden`,
        codeExamples: [
          {
            title: 'Link-Komponente & aktiver Link',
            js: `// components/MainNav.jsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './MainNav.module.css';

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav>
      <Link
        href="/"
        className={pathname === '/' ? styles.active : ''}
      >
        Home
      </Link>
      <Link
        href="/blog"
        className={pathname.startsWith('/blog') ? styles.active : ''}
      >
        Blog
      </Link>
    </nav>
  );
}

// app/layout.jsx
import MainNav from '@/components/MainNav';

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <header>
          <MainNav />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}`,
            ts: `// components/MainNav.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './MainNav.module.css';

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav>
      <Link
        href="/"
        className={pathname === '/' ? styles.active : ''}
      >
        Home
      </Link>
      <Link
        href="/blog"
        className={pathname.startsWith('/blog') ? styles.active : ''}
      >
        Blog
      </Link>
    </nav>
  );
}

// app/layout.tsx
import MainNav from '@/components/MainNav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <header>
          <MainNav />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}`,
          },
        ],
      },
      {
        id: 'njs-rsc',
        title: 'React Server Components vs. Client Components',
        duration: '19 Min.',
        explanation: `Das ist eines der zentralen Konzepte in Next.js (App Router):

**React Server Components (RSC)** – Default in \`app/\`
- Werden **nur auf dem Server** gerendert, nie im Browser
- Können \`async\` sein → direktes \`await\` ohne \`useEffect\`
- Kein direkter Zugriff auf Browser-APIs (kein \`window\`, kein \`document\`)
- Können keine React-Hooks verwenden (\`useState\`, \`useEffect\`, …)
- Kleiner JS-Bundle im Browser (Komponenten-Code wird nicht mitgesendet)
- Können andere Server Components **und** Client Components rendern

**Client Components** – mit \`'use client'\` am Dateianfang
- Werden auf dem Server **vorgerendert** (HTML) und dann im Browser **hydriert**
- Können Hooks, Event-Handler, Browser-APIs verwenden
- Erhalten Props vom Server

**Faustregel:** So wenige Client Components wie möglich. Interaktivität (Klicks, State, Effekte) → \`'use client'\`. Alles andere → Server Component.

**Wichtig:** \`'use client'\` markiert die **Grenze** – alle Komponenten, die von einem Client Component importiert werden, werden automatisch ebenfalls clientseitig ausgeführt.

**Effizient verwenden:** Interaktive Teile so weit wie möglich in kleine, separate Client Components auslagern – damit möglichst viel als Server Component bleibt.`,
        codeExamples: [
          {
            title: 'Server Component vs. Client Component',
            js: `// app/meals/page.jsx  ← Server Component (kein 'use client')
// Kann direkt auf die Datenbank zugreifen:
import { getMeals } from '@/lib/meals';
import MealsList from '@/components/MealsList';

export default async function MealsPage() {
  const meals = await getMeals();  // ← await direkt möglich!
  return <MealsList meals={meals} />;
}

// components/MealsList.jsx  ← Server Component (listet Daten)
import MealItem from './MealItem';

export default function MealsList({ meals }) {
  return (
    <ul>
      {meals.map(meal => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  );
}

// components/ImageSlideshow.jsx  ← Client Component (Interaktion nötig)
'use client';

import { useState, useEffect } from 'react';

export default function ImageSlideshow({ images }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return <img src={images[current]} alt="Slideshow" />;
}`,
            ts: `// app/meals/page.tsx  ← Server Component
import { getMeals } from '@/lib/meals';
import MealsList from '@/components/MealsList';

type Meal = { id: number; title: string; summary: string };

export default async function MealsPage() {
  const meals: Meal[] = await getMeals();
  return <MealsList meals={meals} />;
}

// components/MealsList.tsx  ← Server Component
import MealItem from './MealItem';

type Meal = { id: number; title: string; summary: string };

export default function MealsList({ meals }: { meals: Meal[] }) {
  return (
    <ul>
      {meals.map(meal => <MealItem key={meal.id} meal={meal} />)}
    </ul>
  );
}

// components/ImageSlideshow.tsx  ← Client Component
'use client';

import { useState, useEffect } from 'react';

export default function ImageSlideshow({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return <img src={images[current]} alt="Slideshow" />;
}`,
          },
        ],
      },
      {
        id: 'njs-styling-images',
        title: 'Styling mit CSS Modules & das Image-Komponente',
        duration: '11 Min.',
        explanation: `**CSS Modules** sind die empfohlene Styling-Methode in Next.js – kein globales CSS, keine Klassen-Konflikte.

- Dateiname: \`KomponentenName.module.css\`
- Klassen werden als JS-Objekt importiert: \`import styles from './Card.module.css'\`
- Klasse verwenden: \`className={styles.card}\`
- Klassen sind automatisch scoped (einzigartige Hash-Suffixe im Build)

Globales CSS bleibt für Reset/Base-Styles in \`app/globals.css\` und wird im Root-Layout importiert.

---

**\`<Image>\`-Komponente** (\`next/image\`)

Ersetzt \`<img>\` und liefert automatisch:
- **Lazy Loading** (standardmäßig aktiv)
- **Automatische Größenoptimierung** (WebP, AVIF)
- **Kein Layout-Shift** (Platz wird reserviert)

Für Bilder mit **unbekannten Dimensionen** (z. B. vom Nutzer hochgeladen): \`fill\`-Prop nutzen → füllt den Parent-Container. Der Parent braucht \`position: relative\` und definierte Maße.`,
        codeExamples: [
          {
            title: 'CSS Modules & Image-Komponente',
            js: `// components/MealItem.module.css
/*
.card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,.15);
}
.image {
  position: relative;
  height: 200px;
}
*/

// components/MealItem.jsx
import Image from 'next/image';
import Link from 'next/link';
import styles from './MealItem.module.css';

export default function MealItem({ meal }) {
  return (
    <article className={styles.card}>
      {/* fill: Bild füllt den relativ positionierten Container */}
      <div className={styles.image}>
        <Image
          src={meal.image}
          alt={meal.title}
          fill              // ← Parent muss position:relative haben
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div>
        <h2>{meal.title}</h2>
        <p>{meal.summary}</p>
        <Link href={\`/meals/\${meal.slug}\`}>Details</Link>
      </div>
    </article>
  );
}`,
            ts: `// components/MealItem.tsx
import Image from 'next/image';
import Link from 'next/link';
import styles from './MealItem.module.css';

type Meal = { id: number; title: string; summary: string; image: string; slug: string };

export default function MealItem({ meal }: { meal: Meal }) {
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image
          src={meal.image}
          alt={meal.title}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div>
        <h2>{meal.title}</h2>
        <p>{meal.summary}</p>
        <Link href={\`/meals/\${meal.slug}\`}>Details</Link>
      </div>
    </article>
  );
}`,
          },
        ],
      },
      {
        id: 'njs-data-fetching',
        title: 'Daten laden: Datenbank, Loading & Suspense',
        duration: '24 Min.',
        explanation: `**Server Components können direkt auf Datenbanken zugreifen** – kein API-Zwischenschritt nötig. Der Code läuft nur auf dem Server und wird nie an den Client gesendet.

Typisch mit SQLite via \`better-sqlite3\`:
\`\`\`js
// lib/meals.js
import sql from 'better-sqlite3';
const db = sql('meals.db');

export function getMeals() {
  return db.prepare('SELECT * FROM meals').all();
}
\`\`\`

---

**Lade-UI mit \`loading.tsx\`**

Eine \`loading.tsx\`-Datei in einem Route-Ordner wird automatisch als Suspense-Fallback eingesetzt, solange eine \`async\` Server Component lädt. Das ersetzt aufwendige manuelle Suspense-Wrapper für ganze Seiten.

**Granulareres Laden mit \`<Suspense>\`**: Wenn nur ein Teil der Seite Daten lädt, kann man direkt \`<Suspense fallback={…}>\` um die Komponente wickeln – dann bleibt der Rest der Seite sofort sichtbar.

---

**Fehler- & Not-Found-Handling**

- \`error.tsx\`: Error-Boundary für die Route. **Muss** \`'use client'\` haben (React-Error-Boundaries sind immer clientseitig). Bekommt \`error\` und \`reset\` als Props.
- \`not-found.tsx\`: Wird angezeigt, wenn \`notFound()\` aus \`next/navigation\` geworfen wird (z. B. item aus DB nicht gefunden).`,
        codeExamples: [
          {
            title: 'Direkte DB-Abfrage & loading.tsx',
            js: `// lib/meals.js
import sql from 'better-sqlite3';
const db = sql('meals.db');

export async function getMeals() {
  await new Promise(r => setTimeout(r, 1000));
  return db.prepare('SELECT * FROM meals').all();
}

export function getMealBySlug(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}

// app/meals/page.jsx  ← async Server Component
import { getMeals } from '@/lib/meals';
import MealsList from '@/components/MealsList';

export default async function MealsPage() {
  const meals = await getMeals();
  return <MealsList meals={meals} />;
}

// app/meals/loading.jsx  ← automatische Lade-UI
export default function MealsLoading() {
  return <p>Gerichte werden geladen…</p>;
}

// app/meals/error.jsx  ← Error-Boundary
'use client';

export default function MealsError({ error, reset }) {
  return (
    <div>
      <h2>Fehler beim Laden der Gerichte.</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Erneut versuchen</button>
    </div>
  );
}`,
            ts: `// lib/meals.ts
import sql from 'better-sqlite3';
const db = sql('meals.db');

export type Meal = {
  id: number;
  slug: string;
  title: string;
  summary: string;
  instructions: string;
  image: string;
  creator: string;
};

export async function getMeals(): Promise<Meal[]> {
  await new Promise(r => setTimeout(r, 1000));
  return db.prepare('SELECT * FROM meals').all() as Meal[];
}

export function getMealBySlug(slug: string): Meal | undefined {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as Meal | undefined;
}

// app/meals/page.tsx
import { getMeals } from '@/lib/meals';
import MealsList from '@/components/MealsList';

export default async function MealsPage() {
  const meals = await getMeals();
  return <MealsList meals={meals} />;
}

// app/meals/error.tsx
'use client';

export default function MealsError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Fehler beim Laden der Gerichte.</h2>
      <p>{error.message}</p>
      <button onClick={reset}>Erneut versuchen</button>
    </div>
  );
}`,
          },
          {
            title: 'Granulares Laden mit Suspense & notFound()',
            js: `// app/meals/page.jsx
import { Suspense } from 'react';
import MealsGrid from '@/components/MealsGrid';

export default function MealsPage() {
  return (
    <>
      <header>
        <h1>Unsere Gerichte</h1>
      </header>
      <Suspense fallback={<p>Gerichte laden…</p>}>
        <MealsGrid />
      </Suspense>
    </>
  );
}

// app/meals/[slug]/page.jsx
import { getMealBySlug } from '@/lib/meals';
import { notFound } from 'next/navigation';

export default async function MealDetailPage({ params }) {
  const meal = getMealBySlug(params.slug);

  if (!meal) {
    notFound();  // ← rendert not-found.tsx
  }

  return <h1>{meal.title}</h1>;
}

// app/meals/[slug]/not-found.jsx
export default function MealNotFound() {
  return <p>Dieses Gericht gibt es nicht.</p>;
}`,
            ts: `// app/meals/page.tsx
import { Suspense } from 'react';
import MealsGrid from '@/components/MealsGrid';

export default function MealsPage() {
  return (
    <>
      <header>
        <h1>Unsere Gerichte</h1>
      </header>
      <Suspense fallback={<p>Gerichte laden…</p>}>
        <MealsGrid />
      </Suspense>
    </>
  );
}

// app/meals/[slug]/page.tsx
import { getMealBySlug } from '@/lib/meals';
import { notFound } from 'next/navigation';

export default async function MealDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meal = getMealBySlug(slug);

  if (!meal) {
    notFound();
  }

  return <h1>{meal.title}</h1>;
}`,
          },
        ],
      },
      {
        id: 'njs-server-actions',
        title: 'Server Actions, Formulare & useFormStatus / useActionState',
        duration: '34 Min.',
        explanation: `**Server Actions** sind Funktionen, die nur auf dem Server laufen, aber direkt aus Client Components aufgerufen werden können – ideal für Formular-Submissions ohne eigene API-Route.

**Erstellen:** Mit der Direktive \`'use server'\` am Anfang der Funktion (oder der Datei, um alle Exports als Server Actions zu markieren).

**Verwenden in einem Formular:** \`<form action={meineServerAction}>\` – Next.js serialisiert die Formulardaten automatisch als \`FormData\`.

---

**Dateien für Server Actions auslagern** (Best Practice):
\`\`\`
lib/actions.js   ← 'use server' am Dateianfang
\`\`\`
So bleiben Server-seitiger Code und Komponenten sauber getrennt.

---

**\`useFormStatus\`** (aus \`react-dom\`):
- Gibt \`{ pending }\` zurück – \`true\` während die Action läuft
- Muss in einer **Child-Komponente** des \`<form>\`-Elements sein, nicht direkt im Form-Component

**\`useActionState\`** (aus \`react\`):
- Kombiniert State mit einer Server Action
- Signatur: \`const [state, formAction] = useActionState(action, initialState)\`
- Die Action bekommt als erstes Argument den vorherigen \`state\`, als zweites \`formData\`
- Rückgabewert der Action → neuer State → UI kann Fehler/Erfolg anzeigen

---

**Sicherheit beim Speichern von Formulardaten:**
- Slugs generieren (z. B. \`title.toLowerCase().replace(/\\s+/g, '-')\`)
- User-HTML **sanitisieren** vor dem Speichern in der DB (XSS-Schutz): Bibliothek \`xss\` oder \`dompurify\` verwenden
- Dateien (Bilder) **nicht lokal** auf dem Dateisystem persistieren (funktioniert bei serverless Deployments nicht) → Cloud-Speicher (z. B. AWS S3) verwenden`,
        codeExamples: [
          {
            title: 'Server Action & Formular',
            js: `// lib/actions.js
'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

export async function shareMeal(prevState, formData) {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),   // File-Objekt
    creator: formData.get('name'),
  };

  // Validierung
  if (!meal.title || meal.title.trim() === '') {
    return { message: 'Titel ist Pflichtfeld.' };
  }

  await saveMeal(meal);
  redirect('/meals');  // ← nach Erfolg weiterleiten
}

// app/meals/share/page.jsx
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { shareMeal } from '@/lib/actions';

// Separater Submit-Button → useFormStatus greift auf Parent-Form zu
function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? 'Wird gespeichert…' : 'Rezept teilen'}
    </button>
  );
}

export default function ShareMealPage() {
  const [state, formAction] = useActionState(shareMeal, { message: null });

  return (
    <form action={formAction}>
      <input name="name" placeholder="Dein Name" required />
      <input name="title" placeholder="Titel" required />
      <textarea name="summary" placeholder="Kurzbeschreibung" />
      <textarea name="instructions" placeholder="Zubereitung" />
      <input type="file" name="image" accept="image/*" required />
      {state.message && <p style={{ color: 'red' }}>{state.message}</p>}
      <SubmitButton />
    </form>
  );
}`,
            ts: `// lib/actions.ts
'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

type ActionState = { message: string | null };

export async function shareMeal(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const meal = {
    title: formData.get('title') as string,
    summary: formData.get('summary') as string,
    instructions: formData.get('instructions') as string,
    image: formData.get('image') as File,
    creator: formData.get('name') as string,
  };

  if (!meal.title?.trim()) {
    return { message: 'Titel ist Pflichtfeld.' };
  }

  await saveMeal(meal);
  redirect('/meals');
}

// app/meals/share/page.tsx
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { shareMeal } from '@/lib/actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>
      {pending ? 'Wird gespeichert…' : 'Rezept teilen'}
    </button>
  );
}

export default function ShareMealPage() {
  const [state, formAction] = useActionState(shareMeal, { message: null });

  return (
    <form action={formAction}>
      <input name="name" placeholder="Dein Name" required />
      <input name="title" placeholder="Titel" required />
      <textarea name="summary" placeholder="Kurzbeschreibung" />
      <textarea name="instructions" placeholder="Zubereitung" />
      <input type="file" name="image" accept="image/*" required />
      {state.message && <p style={{ color: 'red' }}>{state.message}</p>}
      <SubmitButton />
    </form>
  );
}`,
          },
        ],
      },
      {
        id: 'njs-caching-metadata',
        title: 'Caching, Revalidierung & Metadata',
        duration: '16 Min.',
        explanation: `**Next.js Caching**

Next.js cached Fetch-Anfragen und gerenderte Seiten aggressiv im Production-Build. Das bedeutet: Daten, die sich ändern, werden ohne Weiteres **nicht** automatisch aktualisiert.

**\`revalidatePath(path)\`** aus \`next/cache\`: Leert den Cache für eine bestimmte Route. Typischer Einsatzort: in einer Server Action nach erfolgreicher Datenmutation.

\`\`\`js
import { revalidatePath } from 'next/cache';

// Nach dem Speichern eines neuen Gerichts:
revalidatePath('/meals');           // nur /meals neu cachen
revalidatePath('/meals', 'layout'); // /meals und alle Unterrouten
\`\`\`

**Wichtig:** Dateien dürfen beim Deployment **nicht** lokal gespeichert werden – das Filesystem ist read-only / nicht persistent in serverless Umgebungen. Bilder und Uploads kommen in Cloud-Speicher (z. B. **AWS S3**).

---

**Metadata**

Next.js bietet eine eingebaute Metadata-API – keine \`<head>\`-Tags manuell schreiben.

**Statische Metadata:** \`export const metadata = { title: '…', description: '…' }\` in \`layout.tsx\` oder \`page.tsx\`.

**Dynamische Metadata:** \`export async function generateMetadata({ params })\` – kann async sein und z. B. Daten aus der DB laden.

Metadata aus \`layout.tsx\` und \`page.tsx\` werden zusammengeführt; die spezifischere \`page.tsx\`-Metadata gewinnt bei Konflikten.`,
        codeExamples: [
          {
            title: 'revalidatePath & statische / dynamische Metadata',
            js: `// lib/actions.js (Auszug)
'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function shareMeal(prevState, formData) {
  // ... Validierung & Speichern ...
  revalidatePath('/meals');  // Cache invalidieren → nächster Aufruf lädt frische Daten
  redirect('/meals');
}

// app/layout.jsx  ← statische Metadata für die gesamte App
export const metadata = {
  title: { template: '%s | FoodieShare', default: 'FoodieShare' },
  description: 'Entdecke und teile leckere Rezepte.',
};

// app/meals/page.jsx  ← statische Metadata für diese Route
export const metadata = {
  title: 'Alle Gerichte',    // Ergebnis: "Alle Gerichte | FoodieShare"
};

// app/meals/[slug]/page.jsx  ← dynamische Metadata
import { getMealBySlug } from '@/lib/meals';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const meal = getMealBySlug(params.slug);
  if (!meal) notFound();
  return {
    title: meal.title,
    description: meal.summary,
  };
}`,
            ts: `// lib/actions.ts (Auszug)
'use server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function shareMeal(prevState: ActionState, formData: FormData) {
  // ...
  revalidatePath('/meals');
  redirect('/meals');
}

// app/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { template: '%s | FoodieShare', default: 'FoodieShare' },
  description: 'Entdecke und teile leckere Rezepte.',
};

// app/meals/[slug]/page.tsx
import type { Metadata } from 'next';
import { getMealBySlug } from '@/lib/meals';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const meal = getMealBySlug(slug);
  if (!meal) notFound();
  return {
    title: meal.title,
    description: meal.summary,
  };
}`,
          },
        ],
      },
      {
        id: 'njs-pages-router',
        title: 'Pages Router: Routing, Navigation & Layouts',
        duration: '30 Min.',
        explanation: `Der **Pages Router** ist das klassische Next.js-Routing-System (vor Next.js 13). Er ist weiterhin vollständig unterstützt und viele bestehende Projekte verwenden ihn.

**Kernunterschiede zum App Router:**
| | App Router | Pages Router |
|---|---|---|
| Ordner | \`app/\` | \`pages/\` |
| Seite | \`page.tsx\` | beliebige Datei direkt im Ordner |
| Layout | \`layout.tsx\` | \`_app.js\` (global) / manuell |
| Server Components | Default | ❌ (alle Komponenten sind Client Components) |
| Data Fetching | \`async\` in Component | \`getStaticProps\` / \`getServerSideProps\` |

**Routing im Pages Router:**
- \`pages/index.tsx\` → Route \`/\`
- \`pages/blog.tsx\` → Route \`/blog\`
- \`pages/blog/[id].tsx\` → dynamische Route \`/blog/42\`
- \`pages/blog/index.tsx\` → Route \`/blog\` (Alternative zu \`blog.tsx\`)

**\`_app.js\`**: Das globale Wrapper-Layout im Pages Router. Hier kommen globale Styles und persistente Komponenten (Navbar, Footer) rein.

**Navigation**: ebenfalls mit \`<Link>\` aus \`next/link\`. Programmatische Navigation mit dem Hook \`useRouter\` aus \`next/router\` (nicht \`next/navigation\`!).`,
        codeExamples: [
          {
            title: 'Pages Router: Struktur, _app.js & Navigation',
            js: `// pages/index.jsx  →  Route: /
export default function HomePage() {
  return <h1>Startseite</h1>;
}

// pages/meetups/index.jsx  →  Route: /meetups
export default function MeetupsPage() {
  return <h1>Alle Meetups</h1>;
}

// pages/meetups/[meetupId].jsx  →  Route: /meetups/m1
import { useRouter } from 'next/router';

export default function MeetupDetailPage() {
  const router = useRouter();
  const { meetupId } = router.query;  // ← URL-Parameter
  return <h1>Meetup: {meetupId}</h1>;
}

// pages/_app.jsx  →  globales Layout
import '../styles/globals.css';
import Layout from '../components/layout/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// Programmatische Navigation
import { useRouter } from 'next/router';

function NewMeetupForm() {
  const router = useRouter();

  async function handleSubmit(data) {
    await fetch('/api/new-meetup', { method: 'POST', body: JSON.stringify(data) });
    router.push('/meetups');  // ← nach Erfolg navigieren
  }
  // ...
}`,
            ts: `// pages/meetups/[meetupId].tsx
import { useRouter } from 'next/router';

export default function MeetupDetailPage() {
  const router = useRouter();
  const { meetupId } = router.query;

  return <h1>Meetup: {meetupId}</h1>;
}

// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// Programmatische Navigation
import { useRouter } from 'next/router';

function NewMeetupForm() {
  const router = useRouter();

  async function handleSubmit(data: Record<string, string>) {
    await fetch('/api/new-meetup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    router.push('/meetups');
  }
  // ...
}`,
          },
        ],
      },
      {
        id: 'njs-prerendering',
        title: 'Pre-Rendering: SSG & SSR im Pages Router',
        duration: '28 Min.',
        explanation: `Im Pages Router gibt es zwei Wege, wie Next.js Seiten vorrendert:

---

**Static Site Generation (SSG)** – \`getStaticProps\`
- Seite wird zur **Build-Zeit** gerendert → super schnell, CDN-cached
- Funktion \`getStaticProps\` wird nur auf dem Server ausgeführt (nie im Browser)
- Rückgabe: \`{ props: { … } }\` – Props werden an die Page-Komponente übergeben
- Optional: \`revalidate\` für **Incremental Static Regeneration (ISR)** – Seite wird alle N Sekunden im Hintergrund neu gebaut

Für **dynamische Routen** zusätzlich \`getStaticPaths\` benötigt: definiert, welche Parameter-Werte beim Build erzeugt werden.

**\`fallback\` in \`getStaticPaths\`:**
- \`false\`: Nur vorab definierte Pfade → andere → 404
- \`true\` / \`'blocking'\`: Neue Pfade werden on-demand generiert und dann gecacht

---

**Server-Side Rendering (SSR)** – \`getServerSideProps\`
- Seite wird bei **jedem Request** auf dem Server gerendert
- Hat Zugriff auf den Request-Kontext (\`req\`, \`res\`, \`params\`, \`query\`)
- Langsamer als SSG, aber immer aktuell
- Kein \`getStaticPaths\` nötig

**Wann welches?**
- Daten ändern sich selten / können gecached werden → **SSG (+ ISR)**
- Daten müssen immer aktuell sein (User-spezifisch, Echtzeit) → **SSR**`,
        codeExamples: [
          {
            title: 'getStaticProps, getStaticPaths & getServerSideProps',
            js: `// pages/meetups/index.jsx  ←  SSG
export default function MeetupsPage({ meetups }) {
  return (
    <ul>
      {meetups.map(m => <li key={m.id}>{m.title}</li>)}
    </ul>
  );
}

// Läuft nur zur Build-Zeit auf dem Server:
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/meetups');
  const data = await res.json();

  return {
    props: { meetups: data },
    revalidate: 60,  // ← ISR: alle 60s neu generieren (optional)
  };
}

// pages/meetups/[meetupId].jsx  ←  SSG + dynamische Routen
export default function MeetupDetail({ meetup }) {
  return <h1>{meetup.title}</h1>;
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { meetupId: 'm1' } },
      { params: { meetupId: 'm2' } },
    ],
    fallback: 'blocking',  // Neue Pfade on-demand erzeugen & cachen
  };
}

export async function getStaticProps({ params }) {
  const { meetupId } = params;
  const res = await fetch(\`https://api.example.com/meetups/\${meetupId}\`);
  const data = await res.json();
  return { props: { meetup: data }, revalidate: 30 };
}

// pages/profile.jsx  ←  SSR (Request-spezifisch)
export default function ProfilePage({ user }) {
  return <h1>Hallo {user.name}</h1>;
}

export async function getServerSideProps(context) {
  const { req, res, params, query } = context;
  // z. B. Session aus Cookie lesen, Daten aus DB holen
  const user = { name: 'Max' };  // vereinfacht
  return { props: { user } };
}`,
            ts: `// pages/meetups/index.tsx
import type { GetStaticProps, InferGetStaticPropsType } from 'next';

type Meetup = { id: string; title: string };

export default function MeetupsPage({
  meetups,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ul>
      {meetups.map(m => <li key={m.id}>{m.title}</li>)}
    </ul>
  );
}

export const getStaticProps: GetStaticProps<{ meetups: Meetup[] }> = async () => {
  const res = await fetch('https://api.example.com/meetups');
  const data: Meetup[] = await res.json();
  return { props: { meetups: data }, revalidate: 60 };
};

// pages/meetups/[meetupId].tsx
import type { GetStaticPaths, GetStaticProps } from 'next';

type Meetup = { id: string; title: string };

export default function MeetupDetail({ meetup }: { meetup: Meetup }) {
  return <h1>{meetup.title}</h1>;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    { params: { meetupId: 'm1' } },
    { params: { meetupId: 'm2' } },
  ],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(\`https://api.example.com/meetups/\${params!.meetupId}\`);
  const data = await res.json();
  return { props: { meetup: data }, revalidate: 30 };
};

// pages/profile.tsx  ← SSR
import type { GetServerSideProps } from 'next';

type User = { name: string };

export default function ProfilePage({ user }: { user: User }) {
  return <h1>Hallo {user.name}</h1>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: { user: { name: 'Max' } } };
};`,
          },
        ],
      },
      {
        id: 'njs-api-routes',
        title: 'API Routes & Datenbankanbindung im Pages Router',
        duration: '26 Min.',
        explanation: `**API Routes** im Pages Router: Dateien unter \`pages/api/\` werden zu Server-seitigen API-Endpunkten – kein separates Backend nötig.

- \`pages/api/meetups.js\` → \`GET /api/meetups\`, \`POST /api/meetups\`
- Exportiert eine Handler-Funktion mit \`(req, res)\`-Parametern
- Unterstützt alle HTTP-Methoden: \`req.method\` prüfen
- \`req.body\` enthält den geparsten Request-Body (bei JSON automatisch)

**MongoDB-Anbindung** mit \`mongodb\`:
\`\`\`bash
pnpm add mongodb
\`\`\`

Verbindungsstring kommt aus einer Umgebungsvariable in \`.env.local\`:
\`\`\`
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname
\`\`\`

**Wichtig:** API-Route-Code läuft nur auf dem Server – Credentials werden nie an den Client gesendet.

**Daten direkt in \`getStaticProps\`/\`getServerSideProps\` laden**: Man kann die DB-Logik **direkt importieren** (kein \`fetch\` auf die eigene API nötig), da diese Funktionen ebenfalls nur server-seitig laufen.

**Metadata im Pages Router**: Mit der \`<Head>\`-Komponente aus \`next/head\` kann pro Seite der \`<head>\` befüllt werden (\`<title>\`, \`<meta>\`-Tags, etc.).`,
        codeExamples: [
          {
            title: 'API Route mit MongoDB & Head-Metadata',
            js: `// pages/api/meetups.js
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db('meetups-db');

  if (req.method === 'POST') {
    const data = req.body;
    const result = await db.collection('meetups').insertOne(data);
    client.close();
    return res.status(201).json({ message: 'Gespeichert', id: result.insertedId });
  }

  if (req.method === 'GET') {
    const meetups = await db.collection('meetups').find().toArray();
    client.close();
    return res.status(200).json(meetups);
  }

  res.status(405).json({ message: 'Methode nicht erlaubt' });
}

// pages/meetups/index.jsx  ←  DB direkt in getStaticProps
import Head from 'next/head';
import { MongoClient } from 'mongodb';

export default function MeetupsPage({ meetups }) {
  return (
    <>
      <Head>
        <title>Alle Meetups</title>
        <meta name="description" content="Alle React Meetups auf einen Blick." />
      </Head>
      <ul>
        {meetups.map(m => <li key={m.id}>{m.title}</li>)}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db('meetups-db');
  const raw = await db.collection('meetups').find().toArray();
  client.close();

  return {
    props: {
      meetups: raw.map(m => ({
        id: m._id.toString(),
        title: m.title,
        address: m.address,
        image: m.image,
      })),
    },
    revalidate: 10,
  };
}`,
            ts: `// pages/api/meetups.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

type Meetup = { title: string; address: string; image: string; description: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await MongoClient.connect(process.env.MONGODB_URI!);
  const db = client.db('meetups-db');

  if (req.method === 'POST') {
    const data = req.body as Meetup;
    const result = await db.collection('meetups').insertOne(data);
    client.close();
    return res.status(201).json({ message: 'Gespeichert', id: result.insertedId });
  }

  if (req.method === 'GET') {
    const meetups = await db.collection('meetups').find().toArray();
    client.close();
    return res.status(200).json(meetups);
  }

  res.status(405).json({ message: 'Methode nicht erlaubt' });
}

// pages/meetups/index.tsx
import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

type MeetupItem = { id: string; title: string; address: string; image: string };

export default function MeetupsPage({ meetups }: { meetups: MeetupItem[] }) {
  return (
    <>
      <Head>
        <title>Alle Meetups</title>
        <meta name="description" content="Alle React Meetups auf einen Blick." />
      </Head>
      <ul>
        {meetups.map(m => <li key={m.id}>{m.title}</li>)}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps<{ meetups: MeetupItem[] }> = async () => {
  const client = await MongoClient.connect(process.env.MONGODB_URI!);
  const db = client.db('meetups-db');
  const raw = await db.collection('meetups').find().toArray();
  client.close();

  return {
    props: {
      meetups: raw.map(m => ({
        id: m._id.toString(),
        title: m.title as string,
        address: m.address as string,
        image: m.image as string,
      })),
    },
    revalidate: 10,
  };
};`,
          },
        ],
      },
    ],
  },
]
