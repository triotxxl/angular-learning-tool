import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { CodeExample } from "../types/glossary";

type CodeToggleProps = {
  example: CodeExample;
};

const syntaxStyle: Record<string, React.CSSProperties> = {
  ...oneDark,
  'pre[class*="language-"]': {
    ...(oneDark['pre[class*="language-"]'] as React.CSSProperties),
    margin: 0,
    padding: "18px 20px",
    background: "transparent",
    fontSize: "0.84rem",
    lineHeight: "1.6",
    borderRadius: 0,
  },
  'code[class*="language-"]': {
    ...(oneDark['code[class*="language-"]'] as React.CSSProperties),
    background: "transparent",
    fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
  },
};

export function CodeToggle({ example }: CodeToggleProps) {
  const [lang, setLang] = useState<"js" | "ts">("js");

  return (
    <div className="code-toggle">
      {example.title && <p className="code-toggle__title">{example.title}</p>}
      <div className="code-toggle__tabs">
        <button
          className={`code-toggle__tab ${lang === "js" ? "is-active" : ""}`}
          onClick={() => setLang("js")}
        >
          JavaScript
        </button>
        <button
          className={`code-toggle__tab ${lang === "ts" ? "is-active" : ""}`}
          onClick={() => setLang("ts")}
        >
          TypeScript
        </button>
      </div>
      <SyntaxHighlighter
        language={lang === "js" ? "javascript" : "typescript"}
        style={syntaxStyle}
        showLineNumbers
        lineNumberStyle={{
          color: "#555",
          fontSize: "0.78rem",
          minWidth: "2.5em",
        }}
      >
        {lang === "js" ? example.js : example.ts}
      </SyntaxHighlighter>
    </div>
  );
}
