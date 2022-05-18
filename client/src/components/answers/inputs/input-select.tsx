import { useState } from "react";
import { AnswerSelectList, AnswerSelectItem, RadioItem, RadioButton, RadioButtonLabel, AnswerSelectLabel } from "../../../styled-components/questionaires/common";
import { AnswerComponentSelectProps } from "../../../types/props";

export default function InputSelectComponent(props: AnswerComponentSelectProps) {

    const { question, updateHandler } = props.propsCombine;

    const [select, setSelect] = useState("");
    
    function handleSelectChange(e: React.FormEvent<HTMLInputElement>) {
        setSelect(e.currentTarget.value);
        updateHandler(e);
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


