import { QuestHeaderWrap, QuestHeaderBlueLine, QuestHeaderTitle, QuestHeaderInfo, QuestHeaderAdditional } from "../../styled-components/questionaires/common";

export default function QuestHeader() {
    return (
        <QuestHeaderWrap>
            <QuestHeaderBlueLine />
            <QuestHeaderTitle>GoTech Questionnaire</QuestHeaderTitle>
            <QuestHeaderInfo>Show me what you got!</QuestHeaderInfo>
            <QuestHeaderAdditional>* Required</QuestHeaderAdditional>
        </QuestHeaderWrap>
    )
}