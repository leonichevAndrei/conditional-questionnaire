import { EventType } from "../../types/common";
import { AnswerComponentProps } from "../../types/props";
import updateAnswersState from "../../utills/update-answers-state";
import InputTextComponent from "./inputs/input-text";

export default function AnswerText(props: AnswerComponentProps) {

    const { answerGetById, question, answersList, setAnswersList } = props.propsCombine;
    
    const propsCombine = {
        value: answersList![answerGetById[question.id]].answer,
        handleUpdate: (e: EventType) => {
            updateAnswersState(e, answerGetById, question, answersList, setAnswersList)
        }
    }

    return <InputTextComponent propsCombine={propsCombine} />;
}