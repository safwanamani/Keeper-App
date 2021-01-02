import React from 'react';

function notesEntry(props) {
    return(
        <div class="note">
            <h1>{props.Title}</h1>
            <p>{props.Content}</p>
        </div>
    )
}

export default notesEntry;