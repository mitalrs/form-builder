export type QuestionType = 'short' | 'long' | 'single' | 'number' | 'url'

export interface Question {
  id: string
  type: QuestionType
  title: string
  required: boolean
  options?: string[] // For single select questions
}

export interface Form {
  id: string
  title: string
  questions: Question[]
  createdAt: Date
  published: boolean
}

export interface FormResponse {
  id: string
  formId: string
  answers: {
    questionId: string
    value: string
  }[]
  submittedAt: Date
}

