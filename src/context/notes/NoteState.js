import React, { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6291a66170d3cbcc8a9578f1",
      user: "628a5d1eda05fa63afb77cb9",
      title: "my title 2",
      description: "please wake up early 2",
      tag: "personal 2",
      date: "2022-05-28T04:34:41.419Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <noteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
