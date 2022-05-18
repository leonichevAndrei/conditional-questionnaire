import { QuestBody } from "../../styled-components/questionaires/common";
import QuestHeader from "../questionnaires/quest-header";
import Questions from "../questionnaires/questions";

export default function Questionnaries() {
    return (
        <QuestBody>
            <QuestHeader />
            <Questions />
        </QuestBody>
    );
}