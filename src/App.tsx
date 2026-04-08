import { useState } from 'react'
import { glossaryTopics } from './data/glossaryTopics'
import { TopicCard } from './components/TopicCard'
import './App.css'

function App() {
  const [activeSlug, setActiveSlug] = useState(glossaryTopics[0]?.slug ?? '')

  return (
    <div className="app-shell">
      <header className="hero">
        <p className="eyebrow">React Glossar</p>
        <h1>Nachschlagewerk fuer React-Themen</h1>
        <p className="intro">
          Dieses Projekt ist als flexibel erweiterbares Boilerplate aufgebaut. Die
          Inhalte folgen schrittweise und werden in den vorbereiteten Strukturen
          abgelegt.
        </p>
      </header>

      <section className="content-layout">
        <aside className="side-nav" aria-label="Themennavigation">
          <p className="side-nav__title">Themen</p>
          <nav className="side-nav__links">
            {glossaryTopics.map((topic) => {
              const isActive = topic.slug === activeSlug

              return (
                <a
                  key={topic.id}
                  href={`#${topic.slug}`}
                  className={`side-nav__link ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveSlug(topic.slug)}
                >
                  <span>{topic.title}</span>
                </a>
              )
            })}
          </nav>
        </aside>

        <main className="topic-list" aria-label="Vorbereitete Themenbereiche">
          {glossaryTopics.map((topic) => (
            <section key={topic.id} id={topic.slug} className="topic-list__item">
              <TopicCard topic={topic} />
            </section>
          ))}
        </main>
      </section>
    </div>
  )
}

export default App
