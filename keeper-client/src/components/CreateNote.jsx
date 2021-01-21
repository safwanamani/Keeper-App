import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import Header from './Header';


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
        if (note.title === "" && note.content === "") {
            alert("Please type something!!!")
        } else {
            setNote({
                title: "",
                content: ""
            });

            const newNote = {
                title: note.title,
                content: note.content
            }

            axios.post("/keeper/create", newNote)
                .then(res => console.log(res.data));

            props.history.push("/notes");
        }
        event.preventDefault();
    }

    function expand() {
        setExpanded(true)
    }

    return (
        <>
            <Header />
            <Container>
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
                        required
                    />
                    <Zoom in={isExpanded}>
                        <Fab onClick={submitNote}>
                            <AddIcon />
                        </Fab>
                    </Zoom>
                </Form>
            </Container>
        </>
    )
}

export default CreateNote;