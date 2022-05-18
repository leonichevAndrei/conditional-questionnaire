import { AnswerComponentProps } from "../../types/props";
import updateAnswersState from "../../utills/update-answers-state";
import InputSelectComponent from "./inputs/input-select";

export default function AnswerSelect(props: AnswerComponentProps) {

    const { answerGetById, question, answers, setAnswers } = props.propsCombine;

    const propsCombine = {
        other: false,
        question: question,
        updateHandler: (e: React.FormEvent<HTMLInputElement>) => {
            updateAnswersState(e, answerGetById, question, answers, setAnswers);
        }
    };

    return <InputSelectComponent propsCombine={propsCombine} />;
}