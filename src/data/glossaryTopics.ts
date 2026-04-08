import type { GlossaryTopic } from '../types/glossary'

export const glossaryTopics: GlossaryTopic[] = [
  {
    id: 'react-basics',
    title: 'React Basics',
    slug: 'react-basics',
    level: 'beginner',
    status: 'planned',
    shortDescription: 'Komponenten, JSX, Props und State als Einstieg.',
    tags: ['components', 'jsx', 'props', 'state'],
  },
  {
    id: 'state-management',
    title: 'State Management',
    slug: 'state-management',
    level: 'intermediate',
    status: 'planned',
    shortDescription: 'Lokaler State, Context API und weiterfuehrende Muster.',
    tags: ['useState', 'useReducer', 'context'],
  },
  {
    id: 'routing-navigation',
    title: 'Routing & Navigation',
    slug: 'routing-navigation',
    level: 'intermediate',
    status: 'planned',
    shortDescription: 'Struktur fuer spaetere Seiten und Navigationsthemen.',
    tags: ['react-router', 'navigation'],
  },
  {
    id: 'forms-validation',
    title: 'Forms & Validation',
    slug: 'forms-validation',
    level: 'advanced',
    status: 'planned',
    shortDescription: 'Form-Patterns, Validierung und UX-freundliche Fehlerbehandlung.',
    tags: ['forms', 'validation', 'ux'],
  },
]
