import { AnswersAnswerType, AnswersType, QuestionType } from "../types/common";

export default function updateAnswersState(
    e: React.FormEvent<HTMLInputElement>,
    answersArr: AnswersAnswerType[],
    answerGetById: number[],
    question: QuestionType,
    answers: AnswersType | undefined,
    setAnswers: React.Dispatch<React.SetStateAction<AnswersType | undefined>>
) {
    answersArr[answerGetById[question.id]].answer = e.currentTarget.value;
    setAnswers({ ...answers!, answers: [...answersArr] });
}