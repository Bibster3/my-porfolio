import React from 'react';
import BentoBox from './BentoBox';

export default function ExploreBox() {
  return (
    <BentoBox title="Explore">
      <a 
        href="/resume.pdf" 
        className="inline-block mt-2 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-200"
      >
        Download Resume
      </a>
    </BentoBox>
  );
}