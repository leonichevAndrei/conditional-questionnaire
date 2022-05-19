import { appAddInfo, appTitle } from "../../settings/app-settings";
import { QuestHeaderWrap, QuestHeaderBlueLine, QuestHeaderTitle, QuestHeaderInfo, QuestHeaderAdditional } from "../../styled-components/questionaires/common";

export default function QuestHeader() {
    return (
        <QuestHeaderWrap>
            <QuestHeaderBlueLine />
            <QuestHeaderTitle>{appTitle}</QuestHeaderTitle>
            <QuestHeaderInfo>{appAddInfo}</QuestHeaderInfo>
            <QuestHeaderAdditional>* Required</QuestHeaderAdditional>
        </QuestHeaderWrap>
    )
}