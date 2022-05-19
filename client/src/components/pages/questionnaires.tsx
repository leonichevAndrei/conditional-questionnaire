import { useState } from "react";
import { QuestBody, QuestWrap } from "../../styled-components/common";
import QuestHeader from "../questionnaires/quest-header";
import Questions from "../questionnaires/questions";

export default function Questionnaries() {

    const [userName, setUserName] = useState("Hey");

    return (
        <QuestWrap>
            <QuestBody>
                <QuestHeader userName={userName} />
                <Questions setUserName={setUserName} />
            </QuestBody>
        </QuestWrap>
    );
}