'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// List of images
const images = [
  '/student_certification.jpg',
  '/Student_Cert_1.jpg',
  '/Student_Cert_2.jpg',
  '/Student_Cert_3.jpg',
//   '/AdobeStock_4.png',
//   '/AdobeStock_5.png',
//   '/AdobeStock_6.png',
//   '/AdobeStock_7.png',
//   '/AdobeStock_8.png',
//   '/AdobeStock_9.png',
//   '/AdobeStock_10.png',
];

const Students = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollSpeed = 1; // Fixed speed
    let position = 0;

    const scroll = () => {
      position -= scrollSpeed;
      if (position <= -container.scrollWidth / 2) {
        position = 0; // Reset position when halfway scrolled
      }
      container.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  return (
    <section className="relative w-full h-[350px] bg-gradient-to-r from-[#ececec] to-[#f0f0f0] overflow-hidden">
      {/* Scrolling container */}
      <div
        ref={scrollContainerRef}
        className="flex items-center h-full space-x-6"
        style={{ whiteSpace: 'nowrap' }}
      >
        {/* Duplicate the images array for infinite looping */}
        {images.concat(images).map((src, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-1/3 max-w-sm h-64 mx-4 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 relative ${
              hoveredIndex === index ? 'z-40 scale-110' : ''
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                hoveredIndex === index ? 'bg-opacity-0' : 'bg-opacity-50'
              }`}
            ></div>
            <Image
              src={src}
              alt={`Student ${index}`}
              width={256}
              height={256}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Students;
