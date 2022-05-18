import { useState } from "react";
import { AnswerSelectItem, AnswerSelectLabel, AnswerSelectList, RadioItem, RadioButton, RadioButtonLabel } from "../../styled-components/questionaires/common";
import { AnswerComponentProps } from "../../types/props";
import updateAnswersState from "../../utills/update-answers-state";

export default function AnswerSelect(props: AnswerComponentProps) {

    const { answersArr, answerGetById, question, answers, setAnswers } = props.propsCombine;

    const [select, setSelect] = useState("");

    const handleSelectChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        updateAnswersState(e, answersArr, answerGetById, question, answers, setAnswers)
        setSelect(value);
    };

    return (
        <AnswerSelectList>
            {typeof question.answer === 'object' &&
                question.answer.map((answer, ind) => {
                    return (
                        <AnswerSelectItem key={ind}>
                            <RadioItem>
                                <RadioButton
                                    type="radio"
                                    name={`radioGroup${question.id}`}
                                    value={answer}
                                    checked={select === answer}
                                    onChange={(event) => handleSelectChange(event)}
                                />
                                <RadioButtonLabel />
                            </RadioItem>
                            <AnswerSelectLabel>{answer}</AnswerSelectLabel>
                        </AnswerSelectItem>
                    )
                })}
        </AnswerSelectList>
    );
}