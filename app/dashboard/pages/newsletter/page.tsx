'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NewsletterPopup() {
  const [showPopup, setShowPopup] = useState(true);
  const [timer, setTimer] = useState(43200); // 12 hours in seconds (12 * 60 * 60)

  // Countdown logic
  useEffect(() => {
    if (timer > 0) {
      const countdown = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(countdown);
    }
  }, [timer]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsRemaining = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secondsRemaining.toString().padStart(2, '0')}`;
  };

  const handleClose = () => setShowPopup(false);

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white rounded-lg shadow-lg p-8 max-w-lg w-full flex flex-col md:flex-row"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            {/* Left side: Image */}
            <div className="w-full md:w-1/2 flex-shrink-0">
              <img
                src="/AdobeStock_7.png" // Replace with the actual path to your image
                alt="Newsletter Promo"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Right side: Content */}
            <div className="flex flex-col justify-between w-full md:w-1/2 p-4 md:pl-6">
              <div>
                <h2 className="text-2xl font-extrabold text-blue-600 mb-2 font-sans">
                  Get 10% Off Today!
                </h2>
                <p className="text-gray-700 mb-4 font-sans">
                  Subscribe to our newsletter and stay updated on our courses
                  and certifications.
                </p>
                <p className="text-lg text-gray-600 font-sans">
                  Offer expires in:
                </p>
                <p className="text-2xl font-semibold text-blue-600 font-sans">
                  {formatTime(timer)}
                </p>
              </div>

              {/* Subscription form */}
              <form className="mt-4 space-y-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-200 focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              onClick={handleClose}
            >
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
