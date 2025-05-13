import React from 'react';
import BentoBox from './BentoBox';

export default function SkillsBox() {
  return (
    <BentoBox title="Skills">
      <ul className="list-disc list-inside">
        <li>HTML, CSS, JavaScript, React, TypeScript</li>
        <li>Unity (C#), GSAP, Tailwind CSS</li>
        <li>Graphic Design (Photoshop)</li>
      </ul>
    </BentoBox>
  );
}