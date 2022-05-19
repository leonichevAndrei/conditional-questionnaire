import { useState } from "react";
import { specialVal } from "../../../settings/app-settings";
import { AnswerSelectList, AnswerSelectItem, RadioItem, RadioButton, RadioButtonLabel, AnswerSelectLabel, AnswerSelectInput, AnswerSelectText, AnswerTextInputPlus } from "../../../styled-components/questionaires/common";
import { EventType } from "../../../types/common";
import { AnswerComponentSelectProps } from "../../../types/props";

export default function InputSelectComponent(props: AnswerComponentSelectProps) {

    const { other, question, updateHandler } = props.propsCombine;

    const [select, setSelect] = useState("");
    const [inputValue, setInputValue] = useState(specialVal);

    function handleSelectChange(e: EventType) {
        setSelect(e.currentTarget.value);
        updateHandler(e);
    };
    function inputValueHandler(e: EventType) {
        setInputValue(e.currentTarget.value);
        handleSelectChange(e);
    }
    function blurHandler() {
        if (inputValue === "") {
            setInputValue("");
        }
    }

    function getSelectItem(answer: string, ind: number, other: boolean) {
        const value = other ? inputValue : answer;
        return (
            <AnswerSelectItem key={ind}>
                <RadioItem>
                    <RadioButton
                        type="radio"
                        name={`radioGroup${question.id}`}
                        value={value}
                        checked={select === value}
                        onChange={(e) => handleSelectChange(e)}
                    />
                    <RadioButtonLabel />
                </RadioItem>
                <AnswerSelectLabel>
                    <AnswerSelectText>{answer}</AnswerSelectText>
                    {other &&
                        <AnswerSelectInput>
                            <AnswerTextInputPlus
                                value={inputValue !== specialVal ? inputValue : ""}
                                activated={false}
                                onFocus={(e) => inputValueHandler(e)}
                                onBlur={() => blurHandler()}
                                onInput={(e) => inputValueHandler(e)}
                            />
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
            {other && getSelectItem("Other", question.answer.length, other)}
        </AnswerSelectList>
    );
}