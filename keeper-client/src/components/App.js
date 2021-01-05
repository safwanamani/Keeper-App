import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./Header";
import Note from "./Note";
import CreateNote from "./CreateNote";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Route path="/" exact component={CreateNote} />
      <Route path="/notes" component={Note} />
    </Router>
  );
}

export default App;
