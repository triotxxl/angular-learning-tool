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
  {
    id: 'react-essentials',
    title: 'Abschnitt 3: React Essentials',
    slug: 'react-essentials',
    shortDescription: 'Components, JSX, Props, State und Events – die Kernkonzepte von React.',
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

\`\`\`
src/
├── components/         # Wiederverwendbare UI-Komponenten
│   ├── Button/
│   │   ├── Button.tsx
│   │   └── Button.css
│   └── Card/
│       ├── Card.tsx
│       └── Card.css
├── pages/              # Seitenkomponenten (Route-basiert)
├── data/               # Statische Daten, Konstanten
├── types/              # TypeScript-Typen
├── assets/             # Bilder, Fonts etc.
├── App.tsx
└── main.tsx
\`\`\`

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
    ],
  },
]
