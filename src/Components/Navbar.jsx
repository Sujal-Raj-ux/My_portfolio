import React from 'react';
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-50/90 backdrop-blur-md fixed top-0 w-full shadow-sm border-b border-blue-100 z-50">
      <div className="container mx-auto flex justify-between items-center p-4 max-w-7xl">
        <h1 className="text-lg sm:text-xl font-bold shrink-0 text-blue-950">Sujal Raj</h1>

        <div className="hidden lg:flex flex-wrap justify-end gap-x-4 xl:gap-x-6 text-gray-700 text-sm xl:text-base">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        <button
          className="lg:hidden text-2xl p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-blue-50/95 backdrop-blur-md shadow-lg flex flex-col items-center space-y-4 py-4 border-t border-blue-100">
          <a href="#home" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#skills" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}


export default Navbar;