import React from "react";
import BentoBox from "./BentoBox";

export default function IntroBox() {
  return (
    <BentoBox title="Bilyana Stefanova">
      <div className="flex flex-col lg:flex-row items-center gap-6 p-4 bg-gray-800 rounded-lg shadow-lg">
        <div className="w-35 h-35 lg:w-42 lg:h-42 overflow-visible shadow-lg">
          <img
            src="/profile2.png"
            alt="Billy"
            className="w-full h-full object-cover  origin-center left-0"
          />
        </div>
        <div className="prose prose-lg text-white">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">
            Hi, I'm Bilyana
          </h2>
          <p>
            I’m a passionate Front-End Developer from Varna, Bulgaria. I blend
            my background in graphic design and game development to create
            engaging, responsive web experiences.
          </p>
          <p>
            My journey began with Graphic Design at SoftUni and a BSBA in
            Marketing from City University of Seattle. Since then, I’ve
            specialized in React, TypeScript, and AR-driven interactive
            projects.
          </p>
        </div>
      </div>
    </BentoBox>
  );
}
