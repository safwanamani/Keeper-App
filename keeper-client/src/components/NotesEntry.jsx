import React from 'react';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';

function notesEntry(props) {

    function deleteNote() {
        axios.delete("http://localhost:4747/keeper/delete/"+props.id)
            .then(() => console.log("Note Deleted Successfully"));
    }

    return(
        <div class="note">
            <h1>{props.Title}</h1>
            <p>{props.Content}</p>
            <button onClick={deleteNote} >
                <DeleteIcon />
            </button>
        </div>
    )
}

export default notesEntry;