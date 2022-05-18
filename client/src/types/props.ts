import { QuestionType, AnswersType, AnswersAnswerType } from "./common"

export type QuestionProps = {
    question: QuestionType,
    answers: AnswersType | undefined,
    setAnswers: React.Dispatch<React.SetStateAction<AnswersType | undefined>>
}
export type AnswerComponentProps = {
    propsCombine: {
        answerGetById: number[],
        question: QuestionType,
        answers: AnswersType | undefined,
        setAnswers: React.Dispatch<React.SetStateAction<AnswersType | undefined>>
    }
}
export type AnswerComponentTextProps = {
    propsCombine: {
        value: string,
        updateHandler: (e: React.FormEvent<HTMLInputElement>) => void
    }
}
export type AnswerComponentSelectProps = {
    propsCombine: {
        question: QuestionType,
        updateHandler: (e: React.FormEvent<HTMLInputElement>) => void
    }
}