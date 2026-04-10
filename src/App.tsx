import { useState } from "react";
import { chapters } from "./data/chapters";
import { LessonView } from "./components/LessonView";
import "./App.css";

function App() {
  const [activeLessonId, setActiveLessonId] = useState(
    chapters[0]?.lessons[0]?.id ?? "",
  );
  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>(
    () => Object.fromEntries(chapters.map((c) => [c.id, true])),
  );

  const activeLesson = chapters
    .flatMap((c) => c.lessons)
    .find((l) => l.id === activeLessonId);

  const toggleChapter = (id: string) => {
    setOpenChapters((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="docs-layout">
      <header className="docs-topbar">
        <span className="docs-topbar__logo">React Glossar</span>
      </header>

      <aside className="docs-sidebar" aria-label="Navigation">
        <nav>
          {chapters.map((chapter) => (
            <div key={chapter.id} className="docs-sidebar__section">
              <button
                className={`docs-sidebar__chapter ${openChapters[chapter.id] ? "is-open" : ""}`}
                onClick={() => toggleChapter(chapter.id)}
              >
                <span>{chapter.title}</span>
                <svg
                  className="docs-sidebar__chevron"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M6 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {openChapters[chapter.id] && (
                <ul className="docs-sidebar__lessons">
                  {chapter.lessons.map((lesson) => (
                    <li key={lesson.id}>
                      <a
                        href={`#${lesson.id}`}
                        className={`docs-sidebar__link ${lesson.id === activeLessonId ? "is-active" : ""}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveLessonId(lesson.id);
                        }}
                      >
                        {lesson.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>

      <main className="docs-content">
        {activeLesson ? (
          <LessonView lesson={activeLesson} />
        ) : (
          <p className="docs-content__empty">
            Wähle eine Lektion aus der Sidebar.
          </p>
        )}
      </main>
    </div>
  );
}

export default App;
