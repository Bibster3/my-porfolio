import React from "react";
import AboutMe from "./AboutMe.tsx";
import Footer from "./ui/Footer.tsx"; // If Footer exists
import Spotlight from "./ui/Spotlight.tsx";
import NavLinks from "./ui/NavLinks.jsx";
import AnimatedLogo from "./ui/AnimatedLogo.jsx";
import Portfolio from "./Portfolio"; 
import Contact from "./Contact";
import Divider from "./ui/Divider.tsx";


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
      <div className="relative z-50">
      <NavLinks />
      </div>
      <div className="hidden sm:flex relative justify-center items-center mt-10 sm:mt-16">
    <AnimatedLogo />
  </div>
      <AboutMe />
      <Divider/>
      <Portfolio items={items} /> 
      <Divider/>

      <Contact/>
    </main>
    <Footer /> {/* Add Footer if it exists */}
  </>
);

export default Page;
