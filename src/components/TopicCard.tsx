import type { GlossaryTopic } from "../types/glossary";

type TopicCardProps = {
  topic: GlossaryTopic;
};

const levelLabel: Record<GlossaryTopic["level"], string> = {
  beginner: "Einsteiger",
  intermediate: "Fortgeschritten",
  advanced: "Profi",
};

const statusLabel: Record<GlossaryTopic["status"], string> = {
  planned: "Geplant",
  "in-progress": "In Arbeit",
  done: "Fertig",
};

const lessonStatusIcon = {
  planned: "☐",
  "in-progress": "◧",
  done: "☑",
} as const;

export function TopicCard({ topic }: TopicCardProps) {
  return (
    <article className="topic-card">
      <div className="topic-card__meta">
        <span className="topic-badge topic-badge--level">
          {levelLabel[topic.level]}
        </span>
        <span className="topic-badge topic-badge--status">
          {statusLabel[topic.status]}
        </span>
      </div>

      <h2>{topic.title}</h2>
      <p>{topic.shortDescription}</p>

      {topic.progress && (
        <p className="topic-card__progress">{topic.progress}</p>
      )}

      {topic.lessons?.length ? (
        <ul
          className="topic-lessons"
          aria-label={`Lektionen für ${topic.title}`}
        >
          {topic.lessons.map((lesson) => (
            <li key={lesson.id} className="topic-lessons__item">
              <span
                className={`topic-lessons__check topic-lessons__check--${lesson.status}`}
                aria-hidden="true"
              >
                {lessonStatusIcon[lesson.status]}
              </span>
              <span className="topic-lessons__content">
                <span className="topic-lessons__title">{lesson.title}</span>
                <span className="topic-lessons__meta">
                  {lesson.duration}
                  {lesson.hasMaterials ? " · Infomaterialien" : ""}
                </span>
              </span>
            </li>
          ))}
        </ul>
      ) : null}

      <ul className="topic-tags" aria-label={`Tags für ${topic.title}`}>
        {topic.tags.map((tag) => (
          <li key={`${topic.id}-${tag}`}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}
