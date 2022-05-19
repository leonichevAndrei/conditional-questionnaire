import { Fragment, useState } from "react";
import { ERROR_MESS } from "../../settings/app-settings";
import { TextInput, SubmitButton, RedElm, ExclamSign, CommonError } from "../../styled-components/common";
import { PopupStartWrap, PopupStartTitle, PopupStartInput, PopupStartButton } from "../../styled-components/popup";
import { PopupFinishProps } from "../../types/props";
import PopupCommon from "./popup-builder";

export default function PopupFinish(props: PopupFinishProps) {

    const { popupFinishVisible, handleFinish } = props;

    return (
        <PopupCommon show={popupFinishVisible}>
            <PopupStartWrap>
                <PopupStartTitle>Thank you!</PopupStartTitle>
                <PopupStartButton>
                    <SubmitButton onClick={() => handleFinish()}>Try again</SubmitButton>
                </PopupStartButton>
            </PopupStartWrap>
        </PopupCommon>
    );
}