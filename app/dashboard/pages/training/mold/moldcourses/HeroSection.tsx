'use client';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <div className="relative h-screen flex items-center justify-center bg-fixed bg-[url('/iStock-1468031957.jpg')] bg-cover bg-center">
    <motion.h1
      className="text-white text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-black bg-opacity-50 px-4 py-2 rounded-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      Mold Training Courses
    </motion.h1>
    <motion.div
      className="absolute bottom-8 md:bottom-12"
      animate={{ y: [0, 15, 0] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
    >
      <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </motion.div>
  </div>
);

export default HeroSection;
