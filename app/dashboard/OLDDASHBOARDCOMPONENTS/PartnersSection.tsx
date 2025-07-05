'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link'; // Link for clickable logos

// Partner logos and their respective links
const partnerLogos = [
  // { src: "/Cal-OSHA-logo-300x128.png", link: "https://www.dir.ca.gov/dosh/" },
  // { src: "/cdph_logo-removebg.png", link: "https://www.cdph.ca.gov/" },
  { src: "/pinnaclelab/Partners/Combined NVLAP_ILAC Mark.jpg", link: "https://www.cdph.ca.gov/" },
  { src: "/pinnaclelab/Partners/225542_EMLAP Symbol_2023_04_26.jpg", link: "https://www.cdph.ca.gov/" },
  // { src: "/US-OSHA-Logo.svg.png", link: "https://www.osha.gov/" },
  // { src: "/EPA.svg.png", link: "https://www.epa.gov/" },
  // { src: "/graphics_ss_logo_2024_animated.gif", link: "https://www.osha.gov/safeandsoundweek/" }, // Placeholder link for GIF logo
];

export default function PartnersSection() {
  const [gifKey, setGifKey] = useState(0);

  // Replay the GIF every 14 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setGifKey(Date.now()); // Update key to force re-render
    }, 14000); // 14 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-[#ececec] to-[#f0f0f0]">
      <div className="container mx-auto px-8">
        {/* <h2 className="text-4xl font-bold text-center mb-12 text-black">
          AEHS Courses Are Approved By
        </h2> */}
        <div className="flex justify-center items-center flex-wrap space-x-36 space-y-0 py-0">
          {partnerLogos.map((logo, index) => (
            <motion.div
              key={index === 4 ? gifKey : index} // Use gifKey for the GIF to force replay
              className="flex-shrink-0 mx-4"
              initial={{ opacity: 0, x: -100 }} // Start further left
              whileInView={{ opacity: 1, x: 0 }} // Fade in and slide in from left
              transition={{
                duration: 0.5, // Slower fade-in
                delay: index * 0.001, // Faster trigger for each logo
              }}
              viewport={{ once: true }} // Trigger animation only once when in view
              whileHover={{
                scale: 1.3, // Slightly larger hover effect
                boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.02)', // More pronounced shadow
              }} // Hover animation
            >
              <Link href={logo.link} target="_blank">
                <div>
                  <Image
                    src={logo.src}
                    alt={`Partner ${index + 1}`}
                    width={180} // Slightly larger logos
                    height={120}
                    className="mx-auto"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
