import type { Lesson } from "../types/glossary";
import { CodeToggle } from "./CodeToggle";

type LessonViewProps = {
  lesson: Lesson;
};

export function LessonView({ lesson }: LessonViewProps) {
  return (
    <article className="lesson-view">
      <header className="lesson-view__header">
        <h2>{lesson.title}</h2>
        <span className="lesson-view__duration">{lesson.duration}</span>
      </header>

      <div className="lesson-view__explanation">
        {lesson.explanation.split("\n\n").map((paragraph, i) => (
          <p
            key={i}
            dangerouslySetInnerHTML={{ __html: formatMarkdown(paragraph) }}
          />
        ))}
      </div>

      {lesson.codeExamples && lesson.codeExamples.length > 0 && (
        <section className="lesson-view__examples">
          {lesson.codeExamples.map((example, i) => (
            <CodeToggle key={i} example={example} />
          ))}
        </section>
      )}
    </article>
  );
}

function formatMarkdown(text: string): string {
  return (
    text
      // Fenced code blocks: ```...```
      .replace(
        /```[\w]*\n([\s\S]*?)```/g,
        (_m, code) =>
          `<pre class="explanation-code"><code>${escapeHtml(code).trimEnd()}</code></pre>`,
      )
      .replace(
        /\*\*`([^`]+)`\*\*/g,
        (_m, c) => `<strong><code>${escapeHtml(c)}</code></strong>`,
      )
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/`([^`]+)`/g, (_m, c) => `<code>${escapeHtml(c)}</code>`)
      .replace(/^- (.+)/gm, "• $1")
      .replace(/\n/g, "<br/>")
  );
}

function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
