import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function notesEntry(props) {

    function handleClick() {
        props.onDelete(props.id);
    }

    return(
        <div class="note">
            <h1>{props.Title}</h1>
            <p>{props.Content}</p>
            <button onClick={handleClick} >
                <DeleteIcon />
            </button>
        </div>
    )
}

export default notesEntry;