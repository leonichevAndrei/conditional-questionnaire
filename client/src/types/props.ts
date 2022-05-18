import { QuestionType, AnswersType, AnswersAnswerType } from "./common"

export type QuestionProps = {
    question: QuestionType,
    answers: AnswersType | undefined,
    setAnswers: React.Dispatch<React.SetStateAction<AnswersType | undefined>>
}
export type AnswerComponentProps = {
    propsCombine: {
        answersArr: AnswersAnswerType[],
        answerGetById: number[],
        question: QuestionType,
        answers: AnswersType | undefined,
        setAnswers: React.Dispatch<React.SetStateAction<AnswersType | undefined>>
    }
}