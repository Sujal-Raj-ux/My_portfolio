import React from "react";
import "./Intro.css";
import ProfilePhoto from "../assets/Profile_img.jpg";

function Intro() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 px-8 pt-24 md:pt-32"
    >
      {/* Left Side (Text) */}
      <div className="flex-1 text-left md:pl-16 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 font-bebas">
          Hi, I&apos;m <span className="text-blue-600">Sujal Raj</span>
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-2">
          Computer Science & AI Student at NJIT
        </h2>
        <p className="text-base sm:text-lg text-gray-500 mb-6">
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

      {/* Right Side (Profile Image) */}
      <div className="flex-1 flex justify-center items-center mt-8 md:mt-0">
        <img
          src={ProfilePhoto}
          alt="Sujal Raj"
          className="w-40 h-40 sm:w-56 sm:w-56 sm:h-56 lg:w-175 lg:h-170 object-cover rounded-full md:rounded-none -mt-6 md:-mt-24"
        />
      </div>
    </section>
  );
}

export default Intro;
