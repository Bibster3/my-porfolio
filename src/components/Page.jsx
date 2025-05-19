import React from "react";
import Navbar from "./ui/Navbar";
import AboutMe from "./AboutMe";
import BentoGrid from "./ui/BentoGrid";
import Footer from "./ui/Footer"; // If Footer exists
import Spotlight from "./ui/Spotlight";
import NavBar from "./ui/Navbar.jsx";


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
      <AboutMe />
      <BentoGrid items={items} />
    </main>
    <Footer /> {/* Add Footer if it exists */}
  </>
);

export default Page;