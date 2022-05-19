import { Fragment, useEffect, useMemo, useState } from "react";
import { ERROR_MESS } from "../../settings/app-settings";
import { QuestionWrap, QuestionText, QuestionAnswer, QuestionError, RedElm, ExclamSign } from "../../styled-components/common";
import { QuestionProps } from "../../types/props"
import AnswerSelect from "../answers/answer-select";
import AnswerText from "../answers/answer-text";

export default function Question(props: QuestionProps) {

    const { question, answers, setAnswers, error } = props;
    const [answerGetById, setAnswerGetById] = useState<number[]>(new Array());

    useEffect(() => {
        const arr = new Array();
        let ind = 0;
        for (let answer of answers!.list) {
            arr[answer.questionId] = ind;
            ind++;
        }
        setAnswerGetById(arr);
    }, []);

    function buildAnswer(select: boolean, text: boolean) {
        const propsCombine = {
            answerGetById: answerGetById,
            question: question,
            answers: answers,
            setAnswers: setAnswers
        }
        if (answerGetById.length > 0) {
            if (select === false && text === true) {
                return <AnswerText propsCombine={propsCombine} />;
            } else if (select === true && text === false) {
                return <AnswerSelect propsCombine={{ ...propsCombine, other: false }} />;
            } else if (select === true && text === true) {
                return <AnswerSelect propsCombine={{ ...propsCombine, other: true }} />;
            } else {
                return "Unsupported type detected";
            }
        } else {
            return "";
        }
    }

    const checkConditional = useMemo(() => {
        const cond = question.conditional;
        if (typeof cond === "object" && answers !== undefined && answerGetById.length > 0) {
            const id = cond.questionId;
            const checkAnswer = cond.answer;
            if (answers!.list[answerGetById[id]].answer !== checkAnswer) {
                answers!.list[answerGetById[question.id]].answer = "";
                return false;
            }
        }
        return true;
    }, [question, answers, answerGetById]);

    const isConditional = useMemo(() => {
        const cond = question.conditional;
        if (typeof cond === "object") {
            return true;
        }
        return false;
    }, [question]);

    return (
        <Fragment>
            <QuestionWrap show={checkConditional} animate={isConditional}>
                <QuestionText>
                    {question.question}{question.required && <RedElm> *</RedElm>}
                </QuestionText>
                <QuestionAnswer>
                    {buildAnswer(question.type.select, question.type.text)}
                </QuestionAnswer>
                    {error && question.required &&
                        <QuestionError><ExclamSign />{ERROR_MESS}</QuestionError>}
            </QuestionWrap>
        </Fragment>
    )
}