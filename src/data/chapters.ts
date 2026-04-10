import type { Chapter } from '../types/glossary'

export const chapters: Chapter[] = [
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
]
