import React, { useState } from 'react';
import CreateNote from "./CreateNote";
import NotesEntry from "./NotesEntry";

function Home() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote]
        })
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return(
        <>
        <CreateNote 
            onAdd={addNote}
        />
        {notes.map((noteItem, index) => {
            return <NotesEntry 
                key={index}
                id={index}
                Title={noteItem.title}
                Content={noteItem.content}
                onDelete={deleteNote}
            />
        })}
        </>
    )
}

export default Home;