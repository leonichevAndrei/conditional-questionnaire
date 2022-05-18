import { AnswerComponentProps } from "../../types/props";
import updateAnswersState from "../../utills/update-answers-state";
import InputTextComponent from "./inputs/input-text";

export default function AnswerText(props: AnswerComponentProps) {

    const { answerGetById, question, answers, setAnswers } = props.propsCombine;
    
    const propsCombine = {
        value: answers!.list[answerGetById[question.id]].answer,
        updateHandler: (e: React.FormEvent<HTMLInputElement>) => {
            updateAnswersState(e, answerGetById, question, answers, setAnswers)
        }
    }

    return <InputTextComponent propsCombine={propsCombine} />;
}