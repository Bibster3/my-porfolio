import React from "react";
import Navbar from "./ui/Navbar.jsx";
import AboutMe from "./AboutMe.js";
import BentoGrid from "./ui/BentoGrid.js";
import Footer from "./ui/Footer.js"; // If Footer exists
import Spotlight from "./ui/Spotlight.js";
import NavBar from "./ui/Navbar.jsx";
import AnimatedLogo from "./ui/AnimatedLogo.jsx";
import Portfolio from "./Portfolio"; //

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const items = [
  {
    title: "CalorieMate",
    description: "A React-based SPA to track daily calorie intake.",
    header: <h3>Project</h3>,
    icon: <IconClipboardCopy />,
  },
  // Add more items here
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
      <BentoGrid items={items} />
    </main>
    <Footer /> {/* Add Footer if it exists */}
  </>
);

export default Page;
