import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");
    function updateAttempts(event: React.ChangeEvent<HTMLInputElement>): void {
        setRequestedAttempts(event.target.value);
    }
    function useAttempt(): void {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    }

    function gainAttempts(): void {
        const requestedAttemptsInt = parseInt(requestedAttempts);

        if (!isNaN(requestedAttemptsInt)) {
            setAttemptsLeft(attemptsLeft + requestedAttemptsInt);
            setRequestedAttempts("");
        }
    }
    return (
        <div>
            <Form.Group controlId="formRequestedAttempts">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={updateAttempts}
                />
            </Form.Group>

            <Form.Group>
                <Button
                    variant="primary"
                    onClick={useAttempt}
                    disabled={attemptsLeft === 0}
                >
                    Use
                </Button>

                <Button variant="primary" onClick={gainAttempts}>
                    Gain
                </Button>
            </Form.Group>

            <Form.Group controlId="formAttemptsLeft">
                <Form.Label>Attempts Left: {attemptsLeft}</Form.Label>
            </Form.Group>
        </div>
    );
}
