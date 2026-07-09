import React from "react";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Projects from "./Components/Project";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-theme-home">
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
