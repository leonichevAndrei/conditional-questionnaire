import { useEffect, useState } from "react";
import { QuestionWrap, QuestionText, QuestionAnswer } from "../../styled-components/questionaires/common";
import { QuestionProps } from "../../types/props"
import AnswerSelect from "../answers/answer-select";
import AnswerSelectText from "../answers/answer-select-text";
import AnswerText from "../answers/answer-text";

export default function Question(props: QuestionProps) {

    const { question, answers, setAnswers } = props;
    const answersArr = answers!.answers;
    const [answerGetById, setAnswerGetById] = useState<number[]>(new Array());

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
        const propsCombine = {
            answersArr: answersArr,
            answerGetById: answerGetById,
            question: question,
            answers: answers,
            setAnswers: setAnswers
        }
        if (answerGetById.length > 0) {
            if (select === false && text === true) {
                return <AnswerText propsCombine={propsCombine} />;
            } else if (select === true && text === false) {
                return <AnswerSelect propsCombine={propsCombine} />;
            } else if (select === true && text === true) {
                return <AnswerSelectText propsCombine={propsCombine} />;
            } else {
                return "Unsupported type detected";
            }
        } else {
            return "";
        }
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