import { AnswersListType, EventType, QuestionType } from "../types/common";

export default function updateAnswersState(
    e: EventType,
    answerGetById: number[],
    question: QuestionType,
    answersList: AnswersListType | undefined,
    setAnswersList: React.Dispatch<React.SetStateAction<AnswersListType | undefined>>
) {
    const newAnswersList = Array.from(answersList!);
    newAnswersList[answerGetById[question.id]].answer = e.currentTarget.value;
    setAnswersList(newAnswersList);
}