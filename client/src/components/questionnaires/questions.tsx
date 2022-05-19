import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { SPECIAL_VAL } from "../../settings/app-settings";
import { QuestSubmit, QuestSubmitButton, QuestionsWrap, SubmitButton } from "../../styled-components/common";
import { AnswersType, QuestionnaireType } from "../../types/common";
import generateAnswers from "../../utills/generate-answers";
import PopupFinish from "../popup/popup-finish";
import PopupStart from "../popup/popup-start";
import Question from "./question";

export default function Questions() {

    const { questionnaireId } = useParams();
    const [questionnaire, setQuestionnaire] = useState<QuestionnaireType | undefined>(undefined);
    const [answers, setAnswers] = useState<AnswersType | undefined>(undefined);
    const [errors, setErrors] = useState(new Array());
    const [name, setName] = useState("");
    const [popupStartVisible, setPopupStartVisible] = useState(true);
    const [popupFinishVisible, setPopupFinishVisible] = useState(false);

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
            errorsArray[i] = (
                (answers!.list[i].answer === "") ||
                (answers!.list[i].answer === SPECIAL_VAL)
            ) && questionnaire!.questions[i].required === true;
        }
        JSON.stringify(errorsArray) !== JSON.stringify(errors)
            && setErrors(errorsArray);
        if (errorsArray.indexOf(true) === -1) {
            setPopupFinishVisible(true);
            setAnswers(generateAnswers(questionnaire!));
            setErrors(new Array());
            setName("");
        }
    }

    function handleStart() {
        popupFinishVisible && setPopupFinishVisible(false);
    }

    function handleFinish() {
        setPopupFinishVisible(false);
        setPopupStartVisible(true);
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
                            name={name}
                        />);
                })}
            <QuestSubmit>
                <QuestSubmitButton>
                    <SubmitButton onClick={() => handleSubmit()}>Submit</SubmitButton>
                </QuestSubmitButton>
            </QuestSubmit>
            <PopupStart
                name={name}
                setName={setName}
                popupStartVisible={popupStartVisible}
                setPopupStartVisible={setPopupStartVisible}
                handleStart={handleStart}
            />
            <PopupFinish
                popupFinishVisible={popupFinishVisible}
                handleFinish={handleFinish}
            />
        </QuestionsWrap>
    )
}