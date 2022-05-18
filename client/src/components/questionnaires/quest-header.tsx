import { AppAddInfo, AppTitle } from "../../settings/app-settings";
import { QuestHeaderWrap, QuestHeaderBlueLine, QuestHeaderTitle, QuestHeaderInfo, QuestHeaderAdditional } from "../../styled-components/questionaires/common";

export default function QuestHeader() {
    return (
        <QuestHeaderWrap>
            <QuestHeaderBlueLine />
            <QuestHeaderTitle>{AppTitle}</QuestHeaderTitle>
            <QuestHeaderInfo>{AppAddInfo}</QuestHeaderInfo>
            <QuestHeaderAdditional>* Required</QuestHeaderAdditional>
        </QuestHeaderWrap>
    )
}