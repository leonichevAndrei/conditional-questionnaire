import { Fragment, useEffect, useMemo, useState } from "react";
import { ERROR_MESS } from "../../settings/app-settings";
import { QuestionWrap, QuestionText, QuestionAnswer, QuestionError, RedElm, ExclamSign } from "../../styled-components/common";
import { QuestionProps } from "../../types/props"
import AnswerSelect from "./answers/answer-select";
import AnswerText from "./answers/answer-text";

export default function Question(props: QuestionProps) {

    const { question, answersList, setAnswersList, error, name } = props;
    const [answerGetById, setAnswerGetById] = useState<number[]>(new Array());

    // We create an array with key = question/answer id & value = answer
    // index in answers list, to add get-answer-by-id possibility
    useEffect(() => {
        const arr = new Array();
        let ind = 0;
        for (let answer of answersList!) {
            arr[answer.questionId] = ind;
            ind++;
        }
        setAnswerGetById(arr);
    }, []);

    // A function that returns the JSX element of the answer 
    // based on its type (select (boolean) & text (boolean) properties)
    function buildAnswer(select: boolean, text: boolean) {
        const propsCombine = {
            answerGetById: answerGetById,
            question: question,
            answersList: answersList,
            setAnswersList: setAnswersList
        }
        if (answerGetById.length > 0) {
            if (select === false && text === true) {
                return <AnswerText propsCombine={propsCombine} />;
            } else if (select === true && text === false) {
                return <AnswerSelect propsCombine={{ ...propsCombine, other: false, name: name }} />;
            } else if (select === true && text === true) {
                return <AnswerSelect propsCombine={{ ...propsCombine, other: true, name: name }} />;
            } else {
                return "Unsupported type detected";
            }
        } else {
            return "";
        }
    }

    // If type of current question is "conditional" and no specific
    // condition happened,  we returning false. It means that we hide
    // this question, untill some condition will happen. Or we returning
    // true if it already happened and showing this item
    const checkConditional = useMemo(() => {
        const cond = question.conditional;
        if (typeof cond === "object" && answersList !== undefined && answerGetById.length > 0) {
            const id = cond.questionId;
            const checkAnswer = cond.answer;
            if (answersList[answerGetById[id]].answer !== checkAnswer) {
                answersList[answerGetById[question.id]].answer = "";
                return false;
            }
        }
        return true;
    }, [question, answersList, answerGetById]);

    // Checking the current item for a "conditional" type.
    // This only affects the presence of animation.
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