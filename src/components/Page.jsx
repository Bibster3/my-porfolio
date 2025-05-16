import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "../utils/cn";

import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function AboutMe() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el.querySelectorAll(".fade-in"),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 px-4 bg-black text-white"
    >
      <div className="container mx-auto grid gap-6 lg:grid-rows-2">
        <Spotlight />
      </div>
    </section>
  );
}
