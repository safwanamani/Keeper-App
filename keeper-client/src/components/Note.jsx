import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import Entry from './NotesEntry';

function Note() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const source = axios.CancelToken.source();

        axios.get("http://localhost:5000/keeper/", {
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
            <div className="notes-button">
                <Button>
                    <a href="/"><i class="far fa-edit"></i></a>
                </Button>
            </div>
            <div className="notes">
            {notes.map((noteItem, index) => {
            return <Entry 
                key={index}
                id={noteItem._id}
                Title={noteItem.title}
                Content={noteItem.content}
            />
            })}
            </div>
        </Container>
    )
}

export default Note;