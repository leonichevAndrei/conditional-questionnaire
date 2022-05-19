import { ExclamationCircleFill } from "react-bootstrap-icons";
import styled, { createGlobalStyle } from "styled-components";
import { FONT_SIZE, FONT_FAMILY, COL_BG, MARGIN_MID, MEDIA_BREAK_POINT, WIDTH_ON_BIG_SCREENS, MAX_WIDTH_ON_BIG_SCREENS, COL_PRIMARY, BOX_SHADOW_ELMS, COL_PRIMARY_DARK, MARGIN_MAX, MARGIN_MIN, SECONDARY_COLOR, MAX_INPUT_WIDTH, WARNING_COL } from "../../settings/theme";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: ${FONT_SIZE};
        font-family: ${FONT_FAMILY};
      }
      body {
        min-width: 100vw;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        background-color: ${COL_BG};
      }
`;

export const QuestBody = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: ${MARGIN_MID};
    width: calc(100vw - (2 * ${MARGIN_MID}));
    @media screen and (min-width: ${MEDIA_BREAK_POINT}) {
        width: ${WIDTH_ON_BIG_SCREENS};
        max-width: ${MAX_WIDTH_ON_BIG_SCREENS};
    }
`;

const SomeWrap = styled.div`
    background-color: white;
    border-radius: 10px;
    border: 1px solid ${COL_PRIMARY};
    overflow: hidden;
`;

export const QuestHeaderWrap = styled(SomeWrap)`
    margin-top: ${MARGIN_MID};
    ${BOX_SHADOW_ELMS};
`;

export const QuestHeaderBlueLine = styled.div`
    width: 100%;
    height: 12px;
    background: linear-gradient(90deg, ${COL_PRIMARY_DARK}, ${COL_PRIMARY});
`;

export const QuestHeaderTitle = styled.div`
    font-size: 2em;
    padding: ${MARGIN_MID} ${MARGIN_MAX};
`;

export const QuestHeaderInfo = styled.div`
    padding: 0 ${MARGIN_MAX} ${MARGIN_MIN};
`;

export const QuestHeaderAdditional = styled.div`
    font-size: 0.9em;
    padding: 0 ${MARGIN_MAX} ${MARGIN_MID};
    color: ${WARNING_COL};
`;

export const QuestionsWrap = styled.div`
`;

export const QuestSubmit = styled.div`
    display: flex;
    justify-content: right;
    padding-top: ${MARGIN_MID};
`;

export const QuestSubmitButton = styled.button`
    color: white;
    background-color: ${COL_PRIMARY};
    border: none;
    padding: 12px 40px;
    border-radius: 10px;
    font-size: 0.9em;
    cursor: pointer;
    ${BOX_SHADOW_ELMS};
    border: 1px solid ${COL_PRIMARY_DARK};
    box-shadow: none;
    &:hover {
        box-shadow: ${COL_PRIMARY_DARK} 0px 30px 20px -10px inset;
    }
    transition: box-shadow 1s;
`;

type QuestionWrapProps = {
    show: boolean,
    animate: boolean
}

export const QuestionWrap = styled(SomeWrap)`
    margin-top: ${MARGIN_MID};
    padding: ${MARGIN_MAX} ${MARGIN_MAX};
    ${BOX_SHADOW_ELMS};
    ${(props: QuestionWrapProps) => props.show 
    ? "display: block;" 
    : "display: none;"};
    animation: ${(props: QuestionWrapProps) => props.animate ? "showQuestion 1s ease forwards" : ""};
    @keyframes showQuestion {
        0% {transform: translateX(-100%);}
        100% {transform: translateY(0);}
    }
`;

export const QuestionText = styled.div`
`;

export const QuestionBetween = styled.div`
    height: ${MARGIN_MID};
`;

export const QuestionAnswer = styled.div`
`;

export const AnswerTextInput = styled.input`
    width: 100%;
    height: 32px;
    border: none;
    border-bottom: 2px solid #e1e1e1;
    font-size: 0.9em;
    &:focus {
        outline: none;
        border-bottom: 2px solid ${COL_PRIMARY};
    }
    ::placeholder {
        color: ${SECONDARY_COLOR};
    }
    transition: border 1s, width 2s;
    margin-top: ${MARGIN_MID};
    @media screen and (min-width: ${MEDIA_BREAK_POINT}) {
        max-width: ${MAX_INPUT_WIDTH};
    }
`;

type AnswerTextInputPlusProps = {
    activated: boolean
}

export const AnswerTextInputPlus = styled(AnswerTextInput)`
    color: ${(props: AnswerTextInputPlusProps) => {
        return props.activated ? "black" : SECONDARY_COLOR;
    }};
    @media screen and (min-width: ${MEDIA_BREAK_POINT}) {
        max-width: calc(${MAX_INPUT_WIDTH} - 103px);
    }
    margin-top: 0;
`;

export const AnswerSelectList = styled.div`
`;

export const AnswerSelectItem = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: ${MARGIN_MID};
`;

export const AnswerSelectLabel = styled.div`
    font-size: 0.9em;
    padding-left: ${MARGIN_MIN};
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const AnswerSelectText = styled.div`
    padding-right: ${MARGIN_MID};
`;

export const AnswerSelectInput = styled.div`
    flex-grow: 1;
    position: relative;
    top: -4px;
`;

export const RadioItem = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    top: -5px;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: 2px solid black;
`;

export const RadioButton = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: white;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 8px;
      height: 8px;
      margin: 4px;
      background: ${SECONDARY_COLOR};
    }
  }
  
  ${(props) =>
        props.checked && ` 
    &:checked + ${RadioButtonLabel} {
      background: white;
      border: 2px solid black;
      &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 8px;
        height: 8px;
        margin: 4px;
        background: ${COL_PRIMARY_DARK};
      }
    }
  `}
`;

export const RedElm = styled.span`
    color: ${WARNING_COL};
`;

export const QuestionError = styled.div`
    font-size: 0.8em;
    color: ${WARNING_COL};
    padding-top: ${MARGIN_MID};
    position: relative;
    animation: showError 1s ease forwards;
    @keyframes showError {
        0% {left: 20vw; opacity: 0%;}
        100% {left: 0vw; opacity: 100%;}
    }
`;

export const ExclamSign = styled(ExclamationCircleFill)`
    color: ${WARNING_COL};
    position: relative;
    top: 2px;
    left: 5px;
    margin-right: calc(${MARGIN_MIN} + 5px);
`;