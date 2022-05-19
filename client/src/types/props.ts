import { QuestionType, AnswersListType } from "./common"

export type QuestionProps = {
    question: QuestionType,
    answersList: AnswersListType | undefined,
    setAnswersList: React.Dispatch<React.SetStateAction<AnswersListType | undefined>>,
    error: boolean,
    name: string
}
export type AnswerComponentProps = {
    propsCombine: {
        answerGetById: number[],
        question: QuestionType,
        answersList: AnswersListType | undefined,
        setAnswersList: React.Dispatch<React.SetStateAction<AnswersListType | undefined>>,
        other?: boolean | undefined,
        name?: string
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