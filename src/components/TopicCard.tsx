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

      <ul className="topic-tags" aria-label={`Tags fuer ${topic.title}`}>
        {topic.tags.map((tag) => (
          <li key={`${topic.id}-${tag}`}>{tag}</li>
        ))}
      </ul>
    </article>
  );
}
