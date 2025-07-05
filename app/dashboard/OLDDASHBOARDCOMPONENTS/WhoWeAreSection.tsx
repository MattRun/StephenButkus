'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function WhoWeAreSection() {
  return (
    <section className="relative h-screen bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('/images/who-we-are.jpg')` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 h-full flex items-center justify-center text-center px-8">
        <div className="max-w-3xl text-white">
          <motion.h2
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Who We Are
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            At AEHS, we strive to empower professionals with the knowledge and skills to maintain safe and healthy environments.
            We are committed to providing high-quality training programs and resources that meet industry standards and regulations.
          </motion.p>
          <motion.a
            href="/about"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Learn More About Us
          </motion.a>
        </div>
      </div>
    </section>
  );
}
