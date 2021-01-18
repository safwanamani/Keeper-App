import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function EditNote(props) {
    const [note, setNote] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios(
                "http://localhost:5000/keeper/"+props.match.params.id,
            );

            setNote(response.data);
        };

        fetchData();
    },[props.match.params.id]);

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

     function submitNote(event) {
         event.preventDefault();

         const obj = {
             title: note.title,
             content: note.content
         };

         axios.post("http://localhost:5000/keeper/update/"+props.match.params.id, obj)
            .then(res => console.log(res.data));

            props.history.push("/notes");
     }

    return (
        <Form className="create-note">
            <input
                name="title"
                value={note.title}
                onChange={handleChange}
                placeholder="Title"
            />
            <textarea
                name="content"
                value={note.content}
                onChange={handleChange}
                placeholder="Take a note..."
                rows="4"
            />
            <Zoom in={true}>
                <Fab onClick={submitNote}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </Form>
    )
}

export default EditNote;