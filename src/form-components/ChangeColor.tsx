import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];
    const [color, setcolor] = useState<string>("red");

    return (
        <>
            <div>
                {colors.map((c: string, index: number) => (
                    <Form.Check
                        inline
                        key={index}
                        type="radio"
                        name="color"
                        onChange={(e) => setcolor(e.target.value)}
                        id={c}
                        label={<span style={{ backgroundColor: c }}>{c}</span>}
                        value={c}
                        checked={color === c}
                    />
                ))}
            </div>
            <div>
                <p>You have chosen {""}</p>
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
                .
            </div>
        </>
    );
}
