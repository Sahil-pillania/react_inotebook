import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";

import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <AddNote />
      <div className="row my-3">
        <hr />
        <h2>Your Notes 🔔</h2>
        {notes.map((note, index) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </>
  );
};

export default Notes;
