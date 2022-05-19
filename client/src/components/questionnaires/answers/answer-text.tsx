import { AnswerTextInput } from "../../../styled-components/common";
import { EventType } from "../../../types/common";
import { AnswerComponentProps } from "../../../types/props";
import updateAnswersState from "../../../utills/update-answers-state";

export default function AnswerText(props: AnswerComponentProps) {

    const { answerGetById, question, answersList, setAnswersList } = props.propsCombine;
    
    function handleUpdate(e: EventType) {
        updateAnswersState(e, answerGetById, question, answersList, setAnswersList)
    }

    return (
        <AnswerTextInput
            value={answersList![answerGetById[question.id]].answer}
            onInput={(e) => handleUpdate(e)}
            placeholder="Your answer"
        />
    );
}