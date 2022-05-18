import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { QuestSubmit, QuestSubmitButton, QuestionsWrap } from "../../styled-components/questionaires/common";
import { AnswersType, QuestionnaireType } from "../../types/common";
import generateAnswers from "../../utills/generate-answers";
import Question from "./question";

export default function Questions() {

    const { questionnaireId } = useParams();
    const [questionnaire, setQuestionnaire] = useState<QuestionnaireType | undefined>(undefined);
    const [answers, setAnswers] = useState<AnswersType | undefined>(undefined);

    console.log(answers);

    useEffect(() => {
        fetch(`http://localhost:3001/questionnaires/${questionnaireId}`)
            .then(response => response.json())
            .then(result => {
                setAnswers(generateAnswers(result))
                setQuestionnaire(result)
            });
    }, [questionnaireId]);

    return (
        <QuestionsWrap>
            {questionnaire !== undefined && answers !== undefined &&
                questionnaire.questions.map((question, ind) => {
                    return (
                        <Question
                            key={ind}
                            question={question}
                            answers={answers}
                            setAnswers={setAnswers}
                        />);
                })}
            <QuestSubmit>
                <QuestSubmitButton>Submit</QuestSubmitButton>
            </QuestSubmit>
        </QuestionsWrap>
    )
}