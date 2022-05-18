import { AnswerTextInput } from "../../../styled-components/questionaires/common";
import { AnswerComponentTextProps } from "../../../types/props";

export default function InputTextComponent(props: AnswerComponentTextProps) {

    const { value, updateHandler } = props.propsCombine;

    return (
        <AnswerTextInput
            value={value}
            onInput={(e) => updateHandler(e)}
            placeholder="Your answer"
        />
    );
}