import styled from "styled-components";
import { BORDER_RADIUS, BOX_SHADOW_ELMS, COL_BG, COL_PRIMARY_DARK, MARGIN_MAX, MARGIN_MID, MARGIN_MIN, MEDIA_BREAK_POINT } from "../settings/theme";

type PopupWrapProps = { show: boolean };

export const PopupWrap = styled.div`
    display: ${(props: PopupWrapProps) => props.show ? "flex" : "none"};
`;

const PopupUnder = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
`;

export const PopupBack = styled(PopupUnder)`
    z-index: 20;
    backdrop-filter: blur(5px) brightness(100%) contrast(100%);
`;

export const PopupBackDark = styled(PopupUnder)`
    z-index: 15;
    background-color: ${COL_BG};
    opacity: 60%;
`;

export const PopupBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 25;
`;

export const PopupTop = styled.div`
    flex-grow: 100;
`;

export const PopupMid = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
`;

export const PopupMidLt = styled.div`
    flex-grow: 1;
`;

export const PopupMidRt = styled.div`
    flex-grow: 1;
`;

export const PopupBott = styled.div`
    flex-grow: 100;
`;

export const Popup = styled.div`
    width: calc(100vw - (2 * ${MARGIN_MID}));
    @media screen and (min-width: ${MEDIA_BREAK_POINT}) {
        width: 80vw;
        max-width: 600px;
    }
    flex-grow: 0;
    background: white;
    border-radius: ${BORDER_RADIUS};
    box-shadow: 0 15px 20px 0px black;
    border: 1px solid ${COL_PRIMARY_DARK};
    ${BOX_SHADOW_ELMS};
`;

export const PopupStartWrap = styled.div`
    padding: ${MARGIN_MAX};
`;

export const PopupStartTitle = styled.div`
    padding-bottom: ${MARGIN_MID};
`;

export const PopupStartInput = styled.div`
    padding-bottom: ${MARGIN_MIN};  
`;

export const PopupStartButton = styled.div`
    display: flex;
    justify-content: right;
    padding-top: ${MARGIN_MIN};  
`;