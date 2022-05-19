import { Fragment, useState } from "react";
import { ERROR_MESS } from "../../settings/app-settings";
import { TextInput, SubmitButton, RedElm, ExclamSign, CommonError } from "../../styled-components/common";
import { PopupStartWrap, PopupStartTitle, PopupStartInput, PopupStartButton } from "../../styled-components/popup";
import { PopupStartProps } from "../../types/props";
import PopupCommon from "./popup-builder";

export default function PopupStart(props: PopupStartProps) {

    const { name, setName, popupVisible, setPopupVisible, handleStart } = props;

    const [error, setError] = useState(false);

    function handleSubmit() {
        if (name === "" || name.length < 2) {
            setError(true);
        } else {
            handleStart();
            error === true && setError(false);
            setPopupVisible(false);
        }
    }

    return (
        <Fragment>
            {popupVisible &&
                <PopupCommon show={true}>
                    <PopupStartWrap>
                        <PopupStartTitle>Please, enter your name:<RedElm> *</RedElm></PopupStartTitle>
                        <PopupStartInput>
                            <TextInput value={name} onInput={(e) => setName(e.currentTarget.value)} placeholder="Type here..." />
                        </PopupStartInput>
                        {error &&
                            <CommonError><ExclamSign />{ERROR_MESS}</CommonError>}
                        <PopupStartButton>
                            <SubmitButton onClick={() => handleSubmit()}>Start</SubmitButton>
                        </PopupStartButton>
                    </PopupStartWrap>
                </PopupCommon>}
        </Fragment>
    );
}