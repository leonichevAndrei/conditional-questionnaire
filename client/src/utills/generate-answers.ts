import { AnswersEmptyTemplate } from "../settings/templates";
import { AnswersType, QuestionnaireType } from "../types/common";

export default function generateAnswers(questionnaire: QuestionnaireType): AnswersType {
    return {
        ...AnswersEmptyTemplate,
        list: questionnaire.questions.map((question) => {
            return {
                questionId: question.id,
                answer: ""
            }
        })
    };
}