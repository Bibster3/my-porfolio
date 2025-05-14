import logo from "./logo.svg";
import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe.jsx";
import NavBar from './components/Navbar.jsx';

import { gsap } from "gsap";

function App() {
  return (
    <div className="min-h-screen bg-black text-white justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <NavBar />
             <Hero/>
      <AboutMe />
    </div>
  );
}

export default App;
