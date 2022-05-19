export type QuestionnaireType = {
    id: number,
    questions: QuestionType[]
}
export type QuestionType = {
    id: number,
    type: QuestionTypeType,
    conditional: QuestionConditionalType,
    required: boolean,
    question: string,
    answer: string | string[]
}
export type QuestionTypeType = {
    select: boolean,
    text: boolean
}
export type QuestionConditionalType = boolean | {
    questionId: number,
    answer: string
}
export type AnswersListType = AnswersAnswerType[];
export type AnswersType = {
    name: string,
    questionnaire: number,
    list: AnswersListType
}
export type AnswersAnswerType = {
    questionId: number,
    answer: string
}
export type EventType = React.FormEvent<HTMLInputElement>;