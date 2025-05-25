import React from "react";
import AboutMe from "./AboutMe.tsx";
import Footer from "./ui/Footer.tsx"; // If Footer exists
import Spotlight from "./ui/Spotlight.tsx";
import NavBar from "./ui/Navbar.jsx";
import AnimatedLogo from "./ui/AnimatedLogo.jsx";
import Portfolio from "./Portfolio"; //

import {

IconClipboardCopy,
} from "@tabler/icons-react";

const items = [
  {
    title: "CalorieMate",
    description: "A React-based SPA to track daily calorie intake.",
    header: <h3>Project</h3>,
    icon: <IconClipboardCopy />,
  },
];

const Page = () => (
  <>
    <main>
      <Spotlight />
      <NavBar />
      <div className="absolute top-32 right-32 z-50">
      <AnimatedLogo />
      </div>
      <AboutMe />
<div className="w-64 h-64 bg-pink-400 opacity-10 blur-3xl rounded-full animate-pulse-slow absolute top-20 left-10" />

      <Portfolio items={items} /> 
    </main>
    <Footer /> {/* Add Footer if it exists */}
  </>
);

export default Page;
