'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServiceCarousel() {
  const carouselItems = [
    {
      image: "/pinnaclelab/Sample Photos/Amosite-in-1680.jpg",
      title: "Asbestos Testing",
      link: "/dashboard/pages/analyticalservices/asbestostesting",
      description: "Accurate and fast asbestos analysis for compliance and safety.",
    },
    {
      image: "/pinnaclelab/Sample Photos/chaetomium_spores.jpg",
      title: "Mold Testing",
      link: "/mold-testing",
      description: "Identify and manage mold hazards with confidence.",
    },
    {
      image: "/pinnaclelab/Sample Photos/fiberglass.png",
      title: "Fiberglass Testing",
      link: "/fiberglass-testing",
      description: "Reliable analysis for fiberglass particles and hazards.",
    },
    {
      image: "/pinnaclelab/Sample Photos/ICP_HeavyMetals.jpeg",
      title: "Lead Testing",
      link: "/lead-testing",
      description: "Comprehensive lead testing for homes and industries.",
    },
    {
      image: "/pinnaclelab/Sample Photos/ICP_HeavyMetals.jpeg",
      title: "Heavy Metals Testing",
      link: "/heavy-metals-testing",
      description: "Expert analysis of heavy metal contaminants.",
    },
    {
      image: "/pinnaclelab/Sample Photos/fireandsmoke.png",
      title: "Fire and Smoke Testing",
      link: "/fireandsmoketesting",
      description: "Expert analysis of ash and soot contaminants.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  return (
    <div className="bg-[#16436F] h-screen flex justify-center items-center text-white">
      {/* Carousel Container */}
      <div className="relative h-[500px] w-[800px] overflow-hidden bg-[#1E5A81] rounded-lg shadow-lg">
        {/* Carousel */}
        <motion.div
          key={carouselItems[currentSlide].title}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
          transition={{ duration: 0.8 }}
        >
          <Link href={carouselItems[currentSlide].link}>
            <div className="block w-full h-full">
              {/* Image */}
              <img
                src={carouselItems[currentSlide].image}
                alt={carouselItems[currentSlide].title}
                className="object-cover w-full h-full rounded-lg"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 p-6 text-white">
                <motion.h2
                  className="text-4xl font-bold text-center shadow-lg"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {carouselItems[currentSlide].title}
                </motion.h2>
                <motion.p
                  className="text-lg mt-4 text-center shadow-lg"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {carouselItems[currentSlide].description}
                </motion.p>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          &#8249;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          &#8250;
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
