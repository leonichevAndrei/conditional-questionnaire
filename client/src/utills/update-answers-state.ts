import { AnswersAnswerType, AnswersType, QuestionType } from "../types/common";

export default function updateAnswersState(
    e: React.FormEvent<HTMLInputElement>,
    answerGetById: number[],
    question: QuestionType,
    answers: AnswersType | undefined,
    setAnswers: React.Dispatch<React.SetStateAction<AnswersType | undefined>>
) {
    answers!.list[answerGetById[question.id]].answer = e.currentTarget.value;
    setAnswers({ ...answers!, list: [...answers!.list] });
}