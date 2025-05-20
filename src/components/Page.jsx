import React from "react";
import Navbar from "./ui/Navbar.jsx";
import AboutMe from "./AboutMe.js";
import BentoGrid from "./ui/BentoGrid.js";
import Footer from "./ui/Footer.js"; // If Footer exists
import Spotlight from "./ui/Spotlight.js";
import NavBar from "./ui/Navbar.jsx";
import AnimatedLogo from "./ui/AnimatedLogo.jsx";

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
      <AnimatedLogo />
      <AboutMe />
      <BentoGrid items={items} />
    </main>
    <Footer /> {/* Add Footer if it exists */}
  </>
);

export default Page;
