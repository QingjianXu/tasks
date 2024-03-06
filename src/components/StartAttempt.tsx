import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inquiz, setinquiz] = useState<boolean>(false);
    const startQuiz = () => {
        setAttempts(attempts - 1);
        setinquiz(true);
    };

    const stopQuiz = () => {
        setinquiz(false);
    };

    const mulligan = () => {
        setAttempts((attempts) => attempts + 1);
    };

    return (
        <span>
            <Button onClick={startQuiz} disabled={inquiz || attempts <= 0}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!inquiz}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={inquiz}>
                Mulligan
            </Button>
            <p>Attempts left: {attempts}</p>
        </span>
    );
}
