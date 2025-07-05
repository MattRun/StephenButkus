'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function SocialMediaSection() {
  return (
  <section className="py-16 bg-cover bg-center bg-no-repeat bg-[url('/AdobeStock_387187358.jpeg')]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-white">Connect With Us on Social Media</h2>
        <div className="flex justify-center space-x-12 text-4xl">
          <motion.a
            href="https://www.facebook.com/profile.php?id=61567087595623"
            className="text-blue-500 hover:text-blue-600"
            whileHover={{ scale: 1.2 }}
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security enhancement for external links
          >
            <FaFacebook />
          </motion.a>
          <motion.a
            href="https://x.com/AEHS_Training"
            className="text-white hover:text-gray-300"
            whileHover={{ scale: 1.2 }}
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security enhancement for external links
          >
            <span className="font-bold text-4xl">X</span>
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            className="text-blue-600 hover:text-blue-700"
            whileHover={{ scale: 1.2 }}
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security enhancement for external links
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/aehstraining/"
            className="text-pink-600 hover:text-pink-700"
            whileHover={{ scale: 1.2 }}
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security enhancement for external links
          >
            <FaInstagram />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
