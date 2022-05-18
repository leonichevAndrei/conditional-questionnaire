import { QuestionType, AnswersType } from "./common"

export type QuestionProps = {
    question: QuestionType,
    answers: AnswersType | undefined,
    setAnswers: React.Dispatch<React.SetStateAction<AnswersType | undefined>>
}