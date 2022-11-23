import React from "react";

const About = () => {
  const style = {
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    "flex-direction": "column",
    height: "80vh",
  };
  return (
    <>
      <div style={style}>
        <div style={{ margin: "2rem" }}>This is about page</div>
        <h2>Sahil pillania</h2>
      </div>
    </>
  );
};

export default About;
