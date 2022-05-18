import { AnswerTextInput } from "../../styled-components/questionaires/common";
import { AnswerComponentProps } from "../../types/props";
import updateAnswersState from "../../utills/update-answers-state";

export default function AnswerText(props: AnswerComponentProps) {

    const { answersArr, answerGetById, question, answers, setAnswers } = props.propsCombine;

    return (
        <AnswerTextInput
            value={answersArr[answerGetById[question.id]].answer}
            onInput={(e) => updateAnswersState(e, answersArr, answerGetById, question, answers, setAnswers)}
            placeholder="Your answer"
        />
    );
}