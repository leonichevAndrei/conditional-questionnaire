import { useState } from "react";
import { AnswerSelectList, AnswerSelectItem, RadioItem, RadioButton, RadioButtonLabel, AnswerSelectLabel, AnswerSelectInput, AnswerSelectText, AnswerTextInputPlus } from "../../../styled-components/questionaires/common";
import { AnswerComponentSelectProps } from "../../../types/props";

export default function InputSelectComponent(props: AnswerComponentSelectProps) {

    const { other, question, updateHandler } = props.propsCombine;

    const [select, setSelect] = useState("");

    function handleSelectChange(e: React.FormEvent<HTMLInputElement>) {
        setSelect(e.currentTarget.value);
        updateHandler(e);
    };

    function getSelectItem(answer: string, ind: number, other: boolean) {
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
                <AnswerSelectLabel>
                    <AnswerSelectText>{answer}</AnswerSelectText>
                    {other &&
                        <AnswerSelectInput>
                            <AnswerTextInputPlus activated={false} />
                        </AnswerSelectInput>
                    }
                </AnswerSelectLabel>
            </AnswerSelectItem>
        )
    };

    return (
        <AnswerSelectList>
            {typeof question.answer === 'object' &&
                question.answer.map((answer, ind) => {
                    return getSelectItem(answer, ind, false);
                })}
            {other &&
                getSelectItem("Other", question.answer.length, other)}
        </AnswerSelectList>
    );
}


