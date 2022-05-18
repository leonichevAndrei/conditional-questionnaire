import { AnswerComponentProps } from "../../types/props";
import updateAnswersState from "../../utills/update-answers-state";
import InputSelectComponent from "./inputs/input-select";

export default function AnswerTextSelect(props: AnswerComponentProps) {

    const { answerGetById, question, answers, setAnswers } = props.propsCombine;

    const propsCombine = {
        other: true,
        question: question,
        updateHandler: (e: React.FormEvent<HTMLInputElement>) => {
            updateAnswersState(e, answerGetById, question, answers, setAnswers);
        }
    };

    return <InputSelectComponent propsCombine={propsCombine} />;
}