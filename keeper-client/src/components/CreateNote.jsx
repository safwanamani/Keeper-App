import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function CreateNote(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return{
            ...prevNote,
            [name]: value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(note)
        event.preventDefault();
    }

    return (
        <Form className="create-note">
            <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />
            <textarea
                name="content"
                value={note.content}
                onChange={handleChange}
                placeholder="Take a note..."
                rows="3"
            />
            <Button onClick={submitNote}>Add</Button>
        </Form>
    )
}

export default CreateNote;