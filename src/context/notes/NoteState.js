import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6291a66170dr3cbcc8a9578f1",
      user: "628a5d1eda05fa63afb77cb9",
      title: "my title 2",
      description: "please wake up early 2",
      tag: "personal 2",
      date: "2022-05-28T04:34:41.419Z",
      __v: 0,
    },
    {
      _id: "6291a266170d3cbcc8a9578f1",
      user: "628a5d1eda05fa63afb77cb9",
      title: "my title 2",
      description: "please wake up early 2",
      tag: "personal 2",
      date: "2022-05-28T04:34:41.419Z",
      __v: 0,
    },
    {
      _id: "6291a6e6170d3cbcc8a9578f1",
      user: "628a5d1eda05fa63afb77cb9",
      title: "my title 2",
      description: "please wake up early 2",
      tag: "personal 2",
      date: "2022-05-28T04:34:41.419Z",
      __v: 0,
    },
    {
      _id: "6291a66170ed3cbcc8a9578f1",
      user: "628a5d1eda05fa63afb77cb9",
      title: "my title 2",
      description: "please wake up early 2",
      tag: "personal 2",
      date: "2022-05-28T04:34:41.419Z",
      __v: 0,
    },
    {
      _id: "6291a66170d3cbecc8a9578f1",
      user: "628a5d1eda05fa63afb77cb9",
      title: "my title 2",
      description: "please wake up early 2",
      tag: "personal 2",
      date: "2022-05-28T04:34:41.419Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  //Add note
  const addNote = (title, description, tag) => {
    // todo api call
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
  const deleteNote = (id) => {};
  // Edit a note
  const editNote = () => {};
  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
