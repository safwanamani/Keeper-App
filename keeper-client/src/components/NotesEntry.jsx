import React from 'react';
import './css/note.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

function notesEntry(props) {
    
    function deleteNote() {

        const conf= window.confirm("Are sure want to delete?");
        if (conf) {
            axios.delete("/keeper/delete/"+props.id)
            .then(() => console.log("Note Deleted Successfully"));
        }
    }

    return(
        <div class="note">
            <h1>{props.Title}</h1>
            <p>{props.Content}</p>
            <button onClick={deleteNote} >
                <DeleteIcon />
            </button>
            <Link to={"/edit/"+props.id} >
                <button >
                    <EditIcon />
                </button>
            </Link>           
        </div>
    )
}

export default notesEntry;