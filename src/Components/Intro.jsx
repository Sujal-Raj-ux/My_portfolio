import React, { useEffect, useState } from "react";
import ProfilePhoto from "../assets/Profile_img.jpg";

const taglines = [
  "Engineer. Builder. Problem-solver.",
  "I build things that scale, learn, and don't break at 2am.",
  "Full-stack developer & AI builder.",
];

function Intro() {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 bg-theme-home px-4 sm:px-8 py-28 lg:py-32"
    >
      <div className="flex-1 w-full max-w-2xl text-center lg:text-left lg:pl-8 xl:pl-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 font-bebas leading-tight">
          Hi, I&apos;m <span className="text-blue-600">Sujal Raj</span>
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-700 mb-4 min-h-[5.5rem] sm:min-h-[4.5rem] lg:min-h-[3.5rem] xl:min-h-[3rem] flex items-center justify-center lg:justify-start leading-snug">
          <span key={taglineIndex} className="animate-tagline">
            {taglines[taglineIndex]}
          </span>
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-500 mb-8 leading-relaxed">
          Building AI, software, and data-driven solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 text-lg bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition text-center"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 text-lg border border-blue-200 bg-white/50 text-blue-900 rounded-lg hover:bg-blue-100/60 transition text-center"
          >
            Get In Touch
          </a>
        </div>
      </div>

      <div className="flex-shrink-0 flex justify-center items-center w-full lg:w-auto lg:flex-1">
        <img
          src={ProfilePhoto}
          alt="Sujal Raj"
          className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80 max-w-[75vw] max-h-[45vh] object-cover rounded-full lg:rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}

export default Intro;
