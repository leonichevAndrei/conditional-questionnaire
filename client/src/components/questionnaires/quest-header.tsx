import { APP_ADD_INFO, APP_TITLE } from "../../settings/app-settings";
import { QuestHeaderWrap, QuestHeaderBlueLine, QuestHeaderTitle, QuestHeaderInfo, QuestHeaderAdditional } from "../../styled-components/common";

export default function QuestHeader() {
    return (
        <QuestHeaderWrap>
            <QuestHeaderBlueLine />
            <QuestHeaderTitle>{APP_TITLE}</QuestHeaderTitle>
            <QuestHeaderInfo>{APP_ADD_INFO}</QuestHeaderInfo>
            <QuestHeaderAdditional>* Required</QuestHeaderAdditional>
        </QuestHeaderWrap>
    )
}