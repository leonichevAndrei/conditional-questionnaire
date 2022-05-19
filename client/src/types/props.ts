import { QuestionType, AnswersType } from "./common"

export type QuestionProps = {
    question: QuestionType,
    answers: AnswersType | undefined,
    setAnswers: React.Dispatch<React.SetStateAction<AnswersType | undefined>>,
    error: boolean,
    name: string
}
export type AnswerComponentProps = {
    propsCombine: {
        answerGetById: number[],
        question: QuestionType,
        answers: AnswersType | undefined,
        setAnswers: React.Dispatch<React.SetStateAction<AnswersType | undefined>>,
        other?: boolean | undefined,
        name?: string
    }
}
export type AnswerComponentTextProps = {
    propsCombine: {
        value: string,
        handleUpdate: (e: React.FormEvent<HTMLInputElement>) => void
    }
}
export type AnswerComponentSelectProps = {
    propsCombine: {
        name: string | undefined,
        other: boolean | undefined,
        question: QuestionType,
        handleUpdate: (e: React.FormEvent<HTMLInputElement>) => void
    }
}
export type PopupStartProps = {
    name: string,
    setName: React.Dispatch<React.SetStateAction<string>>,
    popupStartVisible: boolean,
    setPopupStartVisible: React.Dispatch<React.SetStateAction<boolean>>,
    handleStart: () => void
}
export type PopupFinishProps = {
    popupFinishVisible: boolean,
    handleFinish: () => void
}
export type PopupDialogProps = {
    show: boolean,
    children: React.ReactNode
}