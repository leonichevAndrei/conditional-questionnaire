import { ERROR_MESS } from "../../settings/app-settings";
import { TextInput, SubmitButton, RedElm, ExclamSign, CommonError } from "../../styled-components/common";
import { PopupStartWrap, PopupStartTitle, PopupStartInput, PopupStartButton } from "../../styled-components/popup";
import PopupCommon from "./popup-builder";

type PopupStartProps = {
}

export default function PopupStart(props: PopupStartProps) {
    
    return (
        <PopupCommon size={50} show={true} closeHandler={() => {}}>

            <PopupStartWrap>
                <PopupStartTitle>Please, enter your name:<RedElm> *</RedElm></PopupStartTitle>
                <PopupStartInput>
                    <TextInput onInput={() => {}} placeholder="" />
                </PopupStartInput>
                {true &&
                        <CommonError><ExclamSign />{ERROR_MESS}</CommonError>}
                <PopupStartButton>
                    <SubmitButton onClick={() => {}}>Start</SubmitButton>
                </PopupStartButton>
            </PopupStartWrap>

        </PopupCommon>
    );
}