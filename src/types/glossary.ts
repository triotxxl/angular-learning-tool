export type GlossaryTopic = {
  id: string
  title: string
  slug: string
  level: 'beginner' | 'intermediate' | 'advanced'
  status: 'planned' | 'in-progress' | 'done'
  shortDescription: string
  tags: string[]
}
