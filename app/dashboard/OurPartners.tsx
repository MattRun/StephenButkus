"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const OurPartners = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#16436F] to-[#10b1b4] py-20">
      {/* Accent Background */}
      <div className="absolute inset-0 opacity-10 bg-gradient"></div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Our Trusted Partners */}
        </motion.h2>

        {/* Top Row of Logos */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* <Image
            src="/pinnaclelab/Partners/225542_AIHA LAP Symbol ELLAP_2025_01_13_white text_MOD.png"
            alt="Partner Logo 1"
            width={200}
            height={100}
            className="object-contain mx-auto"
          />
          <Image
            src="/pinnaclelab/Partners/225542_AIHA LAP Symbol IHLAP_2025_01_13_white text_MOD.png"
            alt="Partner Logo 2"
            width={200}
            height={100}
            className="object-contain mx-auto"
          /> */}
          <Image
            src="/pinnaclelab/Partners/Screenshot_2025-01-22_at_3.37.06_PM-removebg-preview.png"
            alt="Partner Logo 4"
            width={200}
            height={100}
            className="object-contain mx-auto"
          />
          <Image
            src="/pinnaclelab/Partners/225542_EMLAP_Symbol_2023_04_26-MOD.png"
            alt="Partner Logo 3"
            width={200}
            height={100}
            className="object-contain mx-auto"
          />
          <Image
            src="/pinnaclelab/Partners/Screenshot_2025-01-22_at_3.37.26_PM-removebg-preview.png"
            alt="Partner Logo 5"
            width={200}
            height={100}
            className="object-contain mx-auto"
          />
        </motion.div>

        {/* Bottom Row of Logo */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/pinnaclelab/Partners/sharpened_black_logo.png"
            // src="/pinnaclelab/Partners/processed_black_transparent_logo.png"
            // src="/pinnaclelab/Partners/processed_sharp_white_logo.png"
            // src="/pinnaclelab/Partners/Combined NVLAP_ILAC Mark.jpg"
            alt="Bottom Logo"
            width={300}
            height={200}
            className="object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default OurPartners;
