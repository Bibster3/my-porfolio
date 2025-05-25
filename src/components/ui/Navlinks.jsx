import React from 'react';

export default function Navinks({ isOpen, toggleMenu }) {
  return (
    <>
      <div className="hidden sm:flex space-x-4 relative z-10 ml-auto">
        <a href="#home" className="nav-link" onClick={toggleMenu}>
          Home
        </a>
        <a href="#portfolio" className="nav-link" onClick={toggleMenu}>
          Portfolio
        </a>
        <a href="#about" className="nav-link" onClick={toggleMenu}>
          About
        </a>
        <a href="#contact" className="nav-link" onClick={toggleMenu}>
          Contact
        </a>
      </div>

      <button className="sm:hidden relative z-10" onClick={toggleMenu} aria-expanded={isOpen ? "true" : "false"} aria-controls="mobile-menu">
        <span className="sr-only">Toggle navigation</span>
        <div className={`${isOpen ? 'block' : 'hidden'} p-2 bg-gray-700 rounded`}>X</div>
        <div className={`${isOpen ? 'hidden' : 'block'} p-2 bg-gray-700 rounded`}>☰</div>
      </button>

      {isOpen && (
        <div id="mobile-menu" className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center space-y-4 p-4 sm:hidden z-20">
          <a href="#home" className="nav-link" onClick={toggleMenu}>Home</a>
          <a href="#portfolio" className="nav-link" onClick={toggleMenu}>Portfolio</a>
          <a href="#about" className="nav-link" onClick={toggleMenu}>About</a>
          <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </>
  );
}