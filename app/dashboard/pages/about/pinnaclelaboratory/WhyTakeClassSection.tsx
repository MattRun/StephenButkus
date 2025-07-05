


'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

// Example data
const recentStories = [
  {
    date: "Industry-Leading Instructors",
    title: "Our team of instructors are experienced professionals with years of real-world expertise in their respective fields. We prioritize providing practical knowledge and hands-on training that goes beyond the classroom.",
    image: "/LabTeachingArt.png",
  },
  {
    date: "Comprehensive Curriculum",
    title: "We offer a range of courses that cover the most in-demand analytical methods. From polarized light microscopy (PLM) to phase contrast microscopy (PCM) and mold spore identification, AEHS students receive comprehensive training to prepare themselves for working in a real-world analytical laboratory.",
    image: "/PinnicleLab.jpg",
  },
  {
    date: "Flexible Learning Options",
    title: "Our training programs are tailored to fit your schedule with both in-person and remote learning options.",
    image: "/LabPhoto.png",
  }
];

export default function RecentStories() {
  const [hoveredStory, setHoveredStory] = useState(recentStories[0]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-12 bg-white space-y-8 md:space-y-0 bg-[url('/MountainBG.png')]">
      {/* Left: Text section */}
      <div className="w-full md:w-1/2 p-6 md:pl-12">
        <h1 className="text-4xl font-bold mb-4 text-black">Learn In a Working Lab</h1>
        <div className="border-b-2 border-gray-200 mb-8 w-24"></div> {/* Subtle horizontal line */}
        <div className="space-y-12">
          {recentStories.map((story, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredStory(story)}
              className={`cursor-pointer flex items-center space-x-2 ${
                hoveredStory.title === story.title ? "text-black" : "text-gray-400"
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <p className="text-sm">{story.date}</p>
                <h3 className="text-xl font-semibold">{story.title}</h3>
              </div>
              {hoveredStory.title === story.title && (
                //arrow move right
                <ChevronRightIcon className="w-20 h-20 text-gray-500 ml-10" /> 
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right: Image section */}
      <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
        <motion.div
          key={hoveredStory.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-[450px] h-[300px]" // Fixed width and height to avoid jumping
        >
          <Image
            src={hoveredStory.image}
            alt={hoveredStory.title}
            layout="fill"
            className="rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
