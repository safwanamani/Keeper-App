import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Note from "./Note";
import CreateNote from "./CreateNote";
import EditNote from "./EditNote";

function App() {
  return (
    <Router>
      <Route path="/" exact component={CreateNote} />
      <Route path="/notes" component={Note} />
      <Route path="/edit/:id" component={EditNote} />
    </Router>
  );
}

export default App;
