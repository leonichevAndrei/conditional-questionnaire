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

    useEffect(() => {
        setInputValue(SPECIAL_VAL);
        setSelect("");
    }, [name]);

    function handleUpdate(e: EventType) {
        updateAnswersState(e, answerGetById, question, answersList, setAnswersList);
    }
    function handleSelectChange(e: EventType) {
        setSelect(e.currentTarget.value);
        handleUpdate(e);
    };
    function handleOnInput(e: EventType) {
        setInputValue(e.currentTarget.value);
        handleSelectChange(e);
    }
    function handleOnBlur() {
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