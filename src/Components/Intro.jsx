import React from "react";
import "./Intro.css";
import ProfilePhoto from "../assets/Profile_img.jpg";

function Intro() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 px-8"
    >
      {/* Left Side (Text) */}
      <div className="flex-1 text-left ml-25">
        <h1 className="text-5xl font-extrabold mb-4 font-bebas">
          Hi, I&apos;m <span className="text-blue-600">Sujal Raj</span>
        </h1>
        <h2 className="text-2xl text-gray-700 mb-2">
          Computer Science & AI Student at NJIT
        </h2>
        <p className="text-lg text-gray-500 mb-6">
          Building AI, software, and data-driven solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition text-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition text-center"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Right Side (Avatar Circle) */}
      <div className="flex-1 h-full w-full">
      <img
          src={ProfilePhoto}
          alt="Sujal Raj"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}

export default Intro;

  