import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Alphabet: Record<string, string> = {
    "🎄": "🪔",
    "🪔": "🎏",
    "🎏": "🎃",
    "🎃": "🧧",
    "🧧": "🎄"
};

const Year: Record<string, string> = {
    "🧧": "🎏",
    "🎏": "🪔",
    "🪔": "🎃",
    "🎃": "🎄",
    "🎄": "🧧"
};

/*
🎏 to represent the Dragon Boat Festival in the summer 
🎃 to represent Halloween at the end of October
🪔 to represent Diiwali earlier in October
🎄 to represent Christmas on December 25  
🧧 to represent New year on January 1
*/

export function CycleHoliday(): JSX.Element {
    const [holiday, setholiday] = useState<string>("🎄");
    return (
        <span>
            <Button onClick={() => setholiday(Alphabet[holiday])}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setholiday(Year[holiday])}>
                Advance by Year
            </Button>
            <div>Holiday: {holiday}</div>
        </span>
    );
}
