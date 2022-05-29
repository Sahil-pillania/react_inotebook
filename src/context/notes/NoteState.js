import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const s1 = {
    name: "Sahil",
    class: "class2",
  };
  const [state, setstate] = useState(s1);
  const update = () =>
    setTimeout(() => {
      setstate({
        name: "Sahil pillania",
        class: "&&",
      });
    }, 3000);
  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
