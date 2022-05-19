import { stringify } from "querystring";
import { EventType } from "../../types/common";
import { AnswerComponentProps } from "../../types/props";
import updateAnswersState from "../../utills/update-answers-state";
import InputSelectComponent from "./inputs/input-select";

export default function AnswerSelect(props: AnswerComponentProps) {

    const { answerGetById, question, answers, setAnswers, other, name } = props.propsCombine;

    const propsCombine = {
        name: name,
        other: other,
        question: question,
        handleUpdate: (e: EventType) => {
            updateAnswersState(e, answerGetById, question, answers, setAnswers);
        }
    };

    return <InputSelectComponent propsCombine={propsCombine} />;
}