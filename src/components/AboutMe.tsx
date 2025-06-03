import React from "react";
import { motion } from "framer-motion";


export default function AboutMe() {
  return (
    <section id="about" className="min-h-screen bg-gray-900 text-white flex items-start justify-center  pt-12 px-10 sm:px-10">
       

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold mb-6 text-pink-400">Hi! I'm Bilyana</h2>
               <p className="text-lg leading-relaxed text-gray-300">
          I’m an aspiring{" "}
          <span className="text-pink-400 font-semibold">Front-End Developer</span> passionate about building
          responsive and user-friendly web applications. With hands-on experience in{" "}
          <span className="text-pink-400 font-semibold">HTML, CSS, JavaScript, React, and TypeScript</span>, I recently completed the intensive Front-End Engineer career path at Codecademy, strengthening my skills in modern development practices.
        </p>
        <p className="text-lg leading-relaxed text-gray-300 mt-4">
          My background also includes extensive experience in{" "}
          <span className="text-pink-400 font-semibold">Unity game development</span>, where I successfully delivered multiple projects from concept to deployment. This honed my problem-solving skills and reinforced my commitment to writing clean, maintainable code.
        </p>
        <p className="text-lg leading-relaxed text-gray-300 mt-4">
          In addition to my technical expertise, I bring strong communication and collaboration skills developed through roles in project coordination, social media management, and customer service. I’m continuously exploring new technologies and excited to contribute to{" "}
          <span className="text-pink-400 font-semibold">innovative projects</span> that create meaningful user experiences.
        </p>
        <p className="text-lg leading-relaxed text-gray-300 mt-4">
          Currently, I am focusing intensively on front-end development, striving to create impactful and visually appealing interfaces that enhance user interaction and satisfaction.
        </p>
        <p className="font-semibold">Let's collaborate on your next venture!</p>
      </motion.div>
    </section>
  );
}