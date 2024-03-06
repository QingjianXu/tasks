import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, settype] = useState<QuestionType>("short_answer_question");

    const TypeChange = () => {
        settype((prevType) =>
            prevType === "multiple_choice_question"
                ? "short_answer_question"
                : "multiple_choice_question"
        );
    };
    return (
        <span>
            <Button onClick={TypeChange}>Change Type</Button>
            {type === "short_answer_question" ? (
                <div>short answer question</div>
            ) : (
                <div>multiple choice question</div>
            )}
        </span>
    );
}
