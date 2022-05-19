import { APP_ADD_INFO, APP_TITLE } from "../../settings/app-settings";
import { QuestHeaderWrap, QuestHeaderBlueLine, QuestHeaderTitle, QuestHeaderInfo, QuestHeaderAdditional, BoldElm } from "../../styled-components/common";

export default function QuestHeader(props: { userName: string }) {

    return (
        <QuestHeaderWrap>
            <QuestHeaderBlueLine />
            <QuestHeaderTitle>{APP_TITLE}</QuestHeaderTitle>
            <QuestHeaderInfo><BoldElm>{props.userName}</BoldElm>, {APP_ADD_INFO}</QuestHeaderInfo>
            <QuestHeaderAdditional>* Required</QuestHeaderAdditional>
        </QuestHeaderWrap>
    )
}