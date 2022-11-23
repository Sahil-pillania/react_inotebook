import React, { useState } from "react";
import noteContext from "./NoteContext";
const NoteState = (props) => {
  const host = "http://localhost:5000";

  const notesInitial = [
    { _id: "1233434545", title: "sahil", description: "desc", tag: "tag" },
  ];
  const [notes, setNotes] = useState(notesInitial);
  // get all notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4YTVkMWVkYTA1ZmE2M2FmYjc3Y2I5In0sImlhdCI6MTY1MzQwNzY0Mn0.rEDB-phwzxanGZJxfU6BV2paezYAyuAFKXIFqJbi-H0",
      },
    });
    const json = await response.json();

    console.log(json);
    setNotes(json);
  };
  //Add note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4YTVkMWVkYTA1ZmE2M2FmYjc3Y2I5In0sImlhdCI6MTY1MzQwNzY0Mn0.rEDB-phwzxanGZJxfU6BV2paezYAyuAFKXIFqJbi-H0",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // const json = response.json();

    console.log("Adding a new note");
    let note = {
      _id: "6291a266173454350d3cbcc8a9578f1",
      user: "628a5d1eda05fa63afb77cb9",
      title: title,
      description: description,
      tag: tag,
      date: "2022-05-28T04:34:41.419Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete a note
  const deleteNote = (id) => {
    // todo api call
    console.log("deleting the note " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI4YTVkMWVkYTA1ZmE2M2FmYjc3Y2I5In0sImlhdCI6MTY1MzQwNzY0Mn0.rEDB-phwzxanGZJxfU6BV2paezYAyuAFKXIFqJbi-H0",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    // edit logic
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
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
