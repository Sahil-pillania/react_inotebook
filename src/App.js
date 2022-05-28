import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" component={<Home />} />
          <Route exact path="/About" component={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
