"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClockIcon } from "@heroicons/react/24/solid";

const TurnaroundTimes = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delay between children animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="relative bg-[#16436F] text-white py-20 px-6">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-[#10b1b4] to-[#16436F]"></div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Title */}
        <motion.h2
          className="text-4xl font-extrabold mb-8 text-[#10b1b4]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Turnaround Times
        </motion.h2>

        {/* List of Turnaround Times */}
        <motion.ul
          className="list-none space-y-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {[
            { time: "3 Hours *", description: "Superfast results when you need them most." },
            { time: "6 Hours *", description: "Reliable same-day reporting." },
            { time: "Same Business Day *", description: "Timely testing you can count on." },
            { time: "Next Business Day", description: "Balanced speed and thoroughness." },
            { time: "Two Business Day", description: "Affordable and efficient service." },
            { time: "Three Business Day", description: "Perfect for less urgent needs." },
          ].map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center justify-between bg-[#1E5A81] p-4 rounded-lg shadow-lg hover:bg-[#10b1b4] transition-all duration-300"
              variants={itemVariants}
            >
              {/* Left Section: Icon and Time */}
              <div className="flex items-center space-x-4">
                {/* Icon */}
                <ClockIcon className="w-10 h-10 text-[#FFD700]" />
                {/* Time */}
                <span className="text-xl font-semibold">{item.time}</span>
              </div>

              {/* Right Section: Description */}
              <p className="text-gray-300 text-sm md:text-base">
                {item.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        {/* Note */}
        <p className="mt-10 text-sm text-gray-400">
          * Times may vary based on sample type and volume.
        </p>
      </div>
    </div>
  );
};

export default TurnaroundTimes;
