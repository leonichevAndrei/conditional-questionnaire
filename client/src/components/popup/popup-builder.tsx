import { PopupWrap, PopupBack, PopupBackDark, PopupBlock, PopupTop, PopupMid, PopupMidLt, Popup, PopupMidRt, PopupBott } from "../../styled-components/popup";
import { PopupDialogProps } from "../../types/props";

export default function PopupBuilder(props: PopupDialogProps) {

    const { show, children } = props;

    return (
        <PopupWrap show={show}>
            <PopupBack />
            <PopupBackDark />
            <PopupBlock>
                <PopupTop />
                <PopupMid>
                    <PopupMidLt />
                    <Popup>
                        {children}
                    </Popup>
                    <PopupMidRt />
                </PopupMid>
                <PopupBott />
            </PopupBlock>
        </PopupWrap>
    );
}