import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [edit, setedit] = useState<boolean>(false);
    const [name, setname] = useState<string>("Your Name");
    const [student, setstudent] = useState<boolean>(true);
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setname(event.target.value);
    }
    function switchStudent(): void {
        setstudent(!student);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="editModeSwitch"
                label="Edit Mode"
                checked={edit}
                onChange={() => setedit(!edit)}
            />
            {edit ? (
                <form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={updateName}
                        />
                    </Form.Group>

                    <Form.Group controlId="formStudent">
                        <Form.Check
                            type="checkbox"
                            label="Student"
                            checked={student}
                            onChange={switchStudent}
                        />
                    </Form.Group>
                </form>
            ) : (
                <p>
                    {name} is {student ? "a student" : "not a student"}
                </p>
            )}
        </div>
    );
}
