import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [ans, setans] = useState<string>("");

    function updateans(event: React.ChangeEvent<HTMLSelectElement>): void {
        setans(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>

            <Form.Group controlId="formSelectOption">
                <Form.Label>Select your answer:</Form.Label>
                <Form.Select value={ans} onChange={updateans}>
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>

            <p>{ans === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
