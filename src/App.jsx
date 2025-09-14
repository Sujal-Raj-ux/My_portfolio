import React from "react";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Projects from "./Components/Project";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Home Section */}
      <section
        id="home"
      >
        <Intro/>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-blue-100"
      >
        <About/>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
      >
        <Projects/>
      </section>

      {/* Skills Section */}
      <section
        id="skills" className="min-h-screen flex items-center justify-center bg-gray-50"
      >
        <Skills/>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
      >
        <Contact/>
      </section>
    </div>
  );
}




export default App;
