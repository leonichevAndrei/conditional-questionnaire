export type QuestionnaireType = {
    id: number,
    questions: QuestionType[],
}
export type QuestionType = {
    id: number;
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
export type AnswersType = {
    id: number,
    name: string,
    questionnaire: number,
    answers: AnswersAnswerType[];
}
export type AnswersAnswerType = {
    questionId: number,
    answer: string
}