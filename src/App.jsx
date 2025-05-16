import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Page from "./components/Page.jsx";
import NavBar from "./components/Navbar.jsx";


function App() {
  return (
    <div className="min-h-screen bg-black text-white justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <NavBar />
      <Page />
    </div>
  );
}

export default App;
