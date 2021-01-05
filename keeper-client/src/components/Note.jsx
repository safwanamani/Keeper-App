import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Entry from './NotesEntry';

function Note(props) {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const source = axios.CancelToken.source();

        axios.get("http://localhost:4747/keeper/", {
            cancelToken: source.token,
        })
            .then(response => {
                setNotes(response.data)
            })
            .catch(error => {
                if (axios.isCancel(error)) {
                } else {
                    throw error
                }
            });

            return () =>  {
                source.cancel();
            }
    })
    
    return (
        <Container>
            {notes.map((noteItem, index) => {
            return <Entry 
                key={index}
                id={noteItem._id}
                Title={noteItem.title}
                Content={noteItem.content}
            />
        })}
        </Container>
    )
}

export default Note;