import { AnswerTextInput } from "../../../styled-components/common";
import { AnswerComponentTextProps } from "../../../types/props";

export default function InputTextComponent(props: AnswerComponentTextProps) {

    const { value, handleUpdate } = props.propsCombine;

    return (
        <AnswerTextInput
            value={value}
            onInput={(e) => handleUpdate(e)}
            placeholder="Your answer"
        />
    );
}