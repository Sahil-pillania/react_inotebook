import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/NoteContext";

const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div>
        {" "}
        This is about {a.state.name} and class is {a.state.class}
      </div>
      <h2>Sahil pillania</h2>
    </>
  );
};

export default About;
