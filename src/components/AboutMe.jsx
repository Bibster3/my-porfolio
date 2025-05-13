import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import IntroBox from './IntroBox';
import SkillsBox from './SkillsBox';
import JourneyBox from './JourneyBox';
import ExploreBox from './ExploreBox';

export default function AboutMe() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el.querySelectorAll('.fade-in'), 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-16 px-4 bg-black text-white">
      <div className="container mx-auto grid gap-6 lg:grid-rows-2">
        <IntroBox />
        <SkillsBox />
        <JourneyBox />
        <ExploreBox />
      </div>
    </section>
  );
}