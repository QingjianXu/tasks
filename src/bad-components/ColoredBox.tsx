import React, { useState } from "react";
import { Button } from "react-bootstrap";

const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface ColorProps {
    setcolor: () => void;
    index: number;
}

function ChangeColor({ setcolor }: ColorProps): JSX.Element {
    return <Button onClick={setcolor}>Next Color</Button>;
}

function ColorPreview({ index }: ColorProps): JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[index],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px"
            }}
        ></div>
    );
}

export function ColoredBox(): JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    function updateColor(): void {
        setColorIndex((prevIndex) => (prevIndex + 1) % COLORS.length);
    }

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    setcolor={updateColor}
                    index={colorIndex}
                ></ChangeColor>
                <ColorPreview
                    setcolor={updateColor}
                    index={colorIndex}
                ></ColorPreview>
            </div>
        </div>
    );
}
