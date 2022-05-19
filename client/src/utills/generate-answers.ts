import { AnswersEmptyTemplate } from "../settings/templates";
import { AnswersListType, QuestionnaireType } from "../types/common";

export default function generateAnswers(questionnaire: QuestionnaireType): AnswersListType {
    return questionnaire.questions.map((question) => {
        return {
            questionId: question.id,
            answer: ""
        }
    });
}