import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { SPECIAL_VAL } from "../../settings/app-settings";
import { QuestSubmit, QuestSubmitButton, QuestionsWrap } from "../../styled-components/questionaires/common";
import { AnswersType, QuestionnaireType } from "../../types/common";
import generateAnswers from "../../utills/generate-answers";
import Question from "./question";

export default function Questions() {

    const { questionnaireId } = useParams();
    const [questionnaire, setQuestionnaire] = useState<QuestionnaireType | undefined>(undefined);
    const [answers, setAnswers] = useState<AnswersType | undefined>(undefined);
    const [errors, setErrors] = useState(new Array());

    useEffect(() => {
        fetch(`http://localhost:3001/questionnaires/${questionnaireId}`)
            .then(response => response.json())
            .then(result => {
                setAnswers(generateAnswers(result))
                setQuestionnaire(result)
            });
    }, [questionnaireId]);

    function handleSubmit() {
        const errorsArray = new Array();
        for (let i = 0; i < answers!.list.length; i++) {
            errorsArray[i] = (answers!.list[i].answer === "") || (answers!.list[i].answer === SPECIAL_VAL);
        }
        setErrors(errorsArray);
    }

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
                            error={errors[ind]}
                        />);
                })}
            <QuestSubmit>
                <QuestSubmitButton onClick={() => handleSubmit()}>Submit</QuestSubmitButton>
            </QuestSubmit>
        </QuestionsWrap>
    )
}