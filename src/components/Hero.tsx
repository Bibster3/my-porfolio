import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4">
      {/* Circle Skip Animation */}
      <motion.div
        className="w-6 h-6 bg-teal-400 rounded-full mb-8"
        initial={{ x: -200, y: -50, opacity: 0 }}
        animate={{
          x: [ -200, -100, -50, 0, 30, 50, 60 ],
          y: [ -50, -30, -15, -5, -2, 0, 0 ],
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
      />

      {/* Name Reveal Animation */}
      <motion.h1
        className="text-4xl sm:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Bilyana Stefanova
      </motion.h1>

      {/* Role Animation */}
      <motion.h2
        className="text-xl sm:text-2xl font-light text-gray-400 mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
      >
        Aspiring Front-End Developer | React & TypeScript Enthusiast
      </motion.h2>

      {/* Call to Action */}
      <motion.a
        href="#portfolio"
        className="inline-block bg-teal-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-teal-600 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        View My Work
      </motion.a>
    </section>
  );
}