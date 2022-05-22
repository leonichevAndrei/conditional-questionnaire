import { useState, useEffect } from "react";
import { SPECIAL_VAL } from "../../../settings/app-settings";
import { AnswerSelectItem, RadioItem, RadioButton, RadioButtonLabel, AnswerSelectLabel, AnswerSelectText, AnswerSelectInput, AnswerTextInputPlus, AnswerSelectList } from "../../../styled-components/common";
import { EventType } from "../../../types/common";
import { AnswerComponentProps } from "../../../types/props";
import updateAnswersState from "../../../utills/update-answers-state";

export default function AnswerSelect(props: AnswerComponentProps) {

    const { answerGetById, question, answersList, setAnswersList, other, name } = props.propsCombine;

    const [select, setSelect] = useState("");
    const [inputValue, setInputValue] = useState(SPECIAL_VAL);

    // We need this SPECIAL_VAL to avoid autoselect of "other" item, 
    // because it's initial value is "" (empty string) as well as the 
    // answers's initial value
    useEffect(() => {
        setInputValue(SPECIAL_VAL);
        setSelect("");
    }, [name]);

    // Updating answers state
    function handleUpdate(e: EventType) {
        updateAnswersState(e, answerGetById, question, answersList, setAnswersList);
    }
    // Handling of select item changing
    function handleSelectChange(e: EventType) {
        setSelect(e.currentTarget.value);
        handleUpdate(e);
    };
    // Handling when typing something in "other" section
    function handleOnInput(e: EventType) {
        setInputValue(e.currentTarget.value);
        handleSelectChange(e);
    }
    // Handling onBlur event in "other" section to stay it selected
    function handleOnBlur() {
        if (inputValue === "") {
            setInputValue("");
        }
    }

    // A function that returns the JSX element of the radio item
    // with the condition that it can be "other" item
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
                                value={inputValue !== SPECIAL_VAL ? inputValue : ""}
                                activated={inputValue === select}
                                onFocus={(e) => handleOnInput(e)}
                                onBlur={() => handleOnBlur()}
                                onInput={(e) => handleOnInput(e)}
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