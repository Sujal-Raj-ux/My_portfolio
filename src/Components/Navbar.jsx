import React from 'react';
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 w-full shadow z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold">Sujal Raj</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-gray-700">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg flex flex-col items-center space-y-4 py-4">
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