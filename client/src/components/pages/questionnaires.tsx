import { QuestBody, QuestWrap } from "../../styled-components/common";
import QuestHeader from "../questionnaires/quest-header";
import Questions from "../questionnaires/questions";

export default function Questionnaries() {
    return (
        <QuestWrap>
            <QuestBody>
                <QuestHeader />
                <Questions />
            </QuestBody>
        </QuestWrap>
    );
}