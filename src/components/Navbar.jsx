import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import AnimatedLogo from './AnimatedLogo';
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
        y: [0, -50, 30, -30, 15, 0],
        transition: {
          duration: 2,
          ease: 'easeOut',
          times: [0, 0.2, 0.4, 0.6, 0.8, 1],
          type: 'spring',
          stiffness: 500,
          damping: 15
        }
      });
      setTimeout(() => setIsNameVisible(true), 500);
    };
    sequence();
  }, [controls]);

  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white relative overflow-hidden">
      <motion.div
        className="w-8 h-8 bg-white rounded-full absolute z-0 left-0 top-4 shadow-lg"
        animate={controls}
        initial={{ x: 0, y: 0 }}
        style={{ left: '0px' }}
      />
      {isNameVisible && (
        <motion.div
          className="ml-[300px] flex items-center space-x-4 relative z-10"
          initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 300 }}
        >
          <h1 className="text-3xl font-bold tracking-wide">Bilyana</h1>
          <AnimatedLogo />
        </motion.div>
      )}
      <NavLinks isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
}

