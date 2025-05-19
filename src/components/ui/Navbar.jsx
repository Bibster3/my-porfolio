import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import NavLinks from './NavLinks';

export default function Navbar() {
  const [isNameVisible, setIsNameVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        x: [0, 80, 160, 240, 280, 300],
        transition: {
          duration: 2,
          ease: "easeOut",
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        },
      });
      setTimeout(() => setIsNameVisible(true), 500);
    };
    sequence();
  }, [controls]);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white relative overflow-hidden">
      {/* Removed the motion.div for the white circle */}
      {isNameVisible && (
        <motion.div
          className="ml-[300px] flex items-center space-x-4 relative z-10"
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 300 }}
        >
        </motion.div>
      )}
      <NavLinks isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
}