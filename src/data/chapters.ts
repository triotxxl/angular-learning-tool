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
    ],
  },
  {
    id: 'react-deep-dive',
    title: 'Abschnitt 4: React Essentials – Deep Dive',
    slug: 'react-deep-dive',
    shortDescription: 'Fortgeschrittene Patterns: Komponenten-Architektur, State-Management, Immutability und flexible JSX-Patterns.',
    lessons: [
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
]
