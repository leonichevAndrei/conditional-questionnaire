import { EventType } from "../../types/common";
import { AnswerComponentProps } from "../../types/props";
import updateAnswersState from "../../utills/update-answers-state";
import InputSelectComponent from "./inputs/input-select";

export default function AnswerSelect(props: AnswerComponentProps) {

    const { answerGetById, question, answers, setAnswers, other } = props.propsCombine;

    const propsCombine = {
        other: other,
        question: question,
        updateHandler: (e: EventType) => {
            updateAnswersState(e, answerGetById, question, answers, setAnswers);
        }
    };

    return <InputSelectComponent propsCombine={propsCombine} />;
}