import { useEffect, useState } from "react";
import { QuestionWrap, QuestionText, QuestionAnswer, AnswerTextInput } from "../../styled-components/questionaires/common";
import { QuestionProps } from "../../types/props"

export default function Question(props: QuestionProps) {

    const { question, answers, setAnswers } = props;
    const answersArr = answers!.answers;
    const [answerGetById, setAnswerGetById] = useState(new Array());

    useEffect(() => {
        const arr = new Array();
        let ind = 0;
        for (let answer of answersArr) {
            arr[answer.questionId] = ind;
            ind++;
        }
        setAnswerGetById(arr);
    }, []);

    function buildAnswer(select: boolean, text: boolean) {
        if (select === false && text === true) {
            return getTextAnswer();
        } else if (select === true && text === false) {
            return getSelectAnswer();
        } else if (select === true && text === true) {
            return getSelectAndTextAnswer();
        } else {
            return "Unsupported type detected";
        }
    }
    function getTextAnswer() {
        return (answerGetById.length > 0 &&
            <AnswerTextInput
                value={answersArr[answerGetById[question.id]].answer}
                onInput={(e) => {
                    answersArr[answerGetById[question.id]].answer = e.currentTarget.value;
                    setAnswers({ ...answers!, answers: [...answersArr]});
                }}
                placeholder="Your answer"
            />
        );
    }
    function getSelectAnswer() {
        return (
            "2"
        );
    }
    function getSelectAndTextAnswer() {
        return (
            "3"
        );
    }

    return (
        <QuestionWrap>
            <QuestionText>{question.question}</QuestionText>
            <QuestionAnswer>
                {buildAnswer(question.type.select, question.type.text)}
            </QuestionAnswer>
        </QuestionWrap>
    )
}