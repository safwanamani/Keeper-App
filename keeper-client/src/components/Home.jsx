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
    return(
        <>
        <CreateNote 
            onAdd={addNote}
        />
        {notes.map((noteItem) => {
            return <NotesEntry 
                Title={noteItem.title}
                Content={noteItem.content}
            />
        })}
        </>
    )
}

export default Home;