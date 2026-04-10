export type CodeExample = {
  title?: string
  js: string
  ts: string
}

export type Lesson = {
  id: string
  title: string
  duration: string
  explanation: string
  codeExamples?: CodeExample[]
}

export type Chapter = {
  id: string
  title: string
  slug: string
  shortDescription: string
  lessons: Lesson[]
}
