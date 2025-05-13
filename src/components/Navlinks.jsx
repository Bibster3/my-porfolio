import React from 'react';

export default function NavLinks({ isOpen, toggleMenu }) {
  return (
    <>
      <div className="hidden sm:flex space-x-4 relative z-10 ml-auto">
        <a href="#home" className="hover:text-gray-400">Home</a>
        <a href="#portfolio" className="hover:text-gray-400">Portfolio</a>
        <a href="#about" className="hover:text-gray-400">About</a>
        <a href="#contact" className="hover:text-gray-400">Contact</a>
      </div>

      <button className="sm:hidden relative z-10" onClick={toggleMenu}>
        <span className="sr-only">Toggle navigation</span>
        <div className={`${isOpen ? 'block' : 'hidden'} p-2 bg-gray-700 rounded`}>X</div>
        <div className={`${isOpen ? 'hidden' : 'block'} p-2 bg-gray-700 rounded`}>☰</div>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 p-4 sm:hidden z-20">
          <a href="#home" onClick={toggleMenu} className="hover:text-gray-400">Home</a>
          <a href="#portfolio" onClick={toggleMenu} className="hover:text-gray-400">Portfolio</a>
          <a href="#about" onClick={toggleMenu} className="hover:text-gray-400">About</a>
          <a href="#contact" onClick={toggleMenu} className="hover:text-gray-400">Contact</a>
        </div>
      )}
    </>
  );
}