import React from 'react'

export default function Navinks() {
  return (
    <>
      <div className="static sm:fixed sm:top-0 sm:left-0 sm:w-full sm:z-50 px-4 py-2">
        <div className="flex justify-start space-x-6 text-white">
          <a href="#about" className="nav-link">
            About
          </a>
          <a href="#portfolio" className="nav-link">
            Portfolio
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
      </div>
    </>
  )
}
