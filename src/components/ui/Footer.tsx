import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {

  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-5 flex flex-col items-center space-y-4"
      >
        <h4 className="text-lg font-semibold text-pink-400">Bilyana Stefanova</h4>
        <p className="text-center text-gray-400">
          Aspiring Front-End Developer | Passionate about building clean and responsive user experiences.
        </p>
        <div className="flex space-x-6 text-2xl mt-4">
          <a
            href="https://github.com/Bibster3"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/bstefanova"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:bilyana.f.st@gmail.com"
            className="hover:text-pink-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-4">© {new Date().getFullYear()} Built by Bilyana Stefanova. All rights reserved.</p>
      </motion.div>
    </footer>
  );
}