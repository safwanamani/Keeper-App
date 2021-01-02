import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateNote(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isExpanded, setExpanded] = useState(false)

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    function submitNote(event) {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    function expand() {
        setExpanded(true)
    }

    return (
        <Form className="create-note">
            {isExpanded && (<input
                name="title"
                value={note.title}
                onChange={handleChange}
                placeholder="Title"
                />
            )}
            <textarea
                name="content"
                value={note.content}
                onChange={handleChange}
                onClick={expand}
                placeholder="Take a note..."
                rows={isExpanded ? 3 : 1}
            />
            <Zoom in={isExpanded}>
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </Form>
    )
}

export default CreateNote;