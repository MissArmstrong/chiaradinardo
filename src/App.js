import React from "react";
import Intro from "./components/Intro";
import Experience from "./components/Experience";
import Education from "./components/Education";
import About from "./components/About";
import Credits from "./components/Credits";
import NavBar from "./components/NavBar";
import "./App.css";
import "./styles/Global.css";
import "rsuite/dist/styles/rsuite-default.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div id="content">
        <Intro></Intro>
        <About></About>
        <Experience></Experience>
        <Education></Education>
        <Credits></Credits>
      </div>
    </div>
  );
}

export default App;
