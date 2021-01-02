import React, { useState } from 'react';
import Entry from './NotesEntry';

function Note() {
    const [notes, setNotes] = useState([]);
    
    return (
        <>
            {notes.map(note => {
                return <Entry
                    key={note.id}
                    Title={note.title}
                    Content={note.content}
                />

            })}
        </>
    )
}

export default Note;