import React from "react";
import { Form } from "./Form.js";
import  FormDialog from "./FormDialog.js";
import Paper from "./paper.js";

function App() {

  const [title, setTitle] = React.useState(undefined);
  const [description, setDescription] = React.useState(undefined);
  const [notes, setNotes] = React.useState([])

  function sendData(title, description) {
    if (title != undefined && description != undefined) {
      setTitle(title);
      setDescription(description)
      setNotes([...notes, {title, description}])
      console.log(notes)
    }
  }
  return (
    <>
    <div className="header">
      <Form className="filter-by-form" />
      <FormDialog sendData={sendData}/>
    </div>
      <div className="note-container">
        {notes.map((obj, i) => (<Paper title={obj.title} description={obj.description} key={obj.title + obj.description + i}/>))}
      </div>
    </>
  );
}

export default App;
