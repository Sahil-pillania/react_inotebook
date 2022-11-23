import React, { useState } from "react";
import noteContext from "./NoteContext";
const NoteState = (props) => {
  const host = "http://localhost:5000";

  const notesInitial = [
    // { _id: "1233434545", title: "sahil", description: "desc", tag: "tag" },
  ];
  const [notes, setNotes] = useState(notesInitial);
  // get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3YzZjZTU3MjNiNzlmOGQ3YTlkNTNiIn0sImlhdCI6MTY2OTEwMTE4Mn0.lmzUdKU5cGwmG2LBwgAPrXY2si_7jIKcX30mE8VgOtw",
      },
    });
    const json = await response.json();

    console.log("getnotes item data is here : " + json);
    setNotes(json);
  };
  //Add note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3YzZjZTU3MjNiNzlmOGQ3YTlkNTNiIn0sImlhdCI6MTY2OTEwMTE4Mn0.lmzUdKU5cGwmG2LBwgAPrXY2si_7jIKcX30mE8VgOtw",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    console.log("Your note has been added. " + response.json);
    // const json = response.json();

    //console.log("Adding a new note");
    let note = {
      title: title,
      description: description,
      tag: tag,
      date: "2022-05-28T04:34:41.419Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete a note
  const deleteNote = async (id) => {
    // todo api call
    console.log("deleting the note " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3YzZjZTU3MjNiNzlmOGQ3YTlkNTNiIn0sImlhdCI6MTY2OTEwMTE4Mn0.lmzUdKU5cGwmG2LBwgAPrXY2si_7jIKcX30mE8VgOtw",
      },
    });
    const json = response.json();
    console.log("deleting the note " + json);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3YzZjZTU3MjNiNzlmOGQ3YTlkNTNiIn0sImlhdCI6MTY2OTEwMTE4Mn0.lmzUdKU5cGwmG2LBwgAPrXY2si_7jIKcX30mE8VgOtw",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    // edit logic
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
