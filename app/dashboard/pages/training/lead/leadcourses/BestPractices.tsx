'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
    },
  }), // <-- Corrected: This closing bracket was previously missing a comma
};


const slideshowImages = [
  "/leaddust.png", // Replace with actual image paths
  "/lead_header.jpeg", // Replace with actual image paths
];

const Opportunities = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-scroll through the slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % slideshowImages.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="relative py-16 px-8 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white w-full">
      {/* Animated Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        Why Lead Sample Technician Is Right For You and Potential Career Opportunities
      </motion.h2>

      {/* Main Text Section */}
      <motion.p
        className="max-w-4xl mx-auto mb-8 text-lg leading-relaxed"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        custom={0}
      >
        This course is critical for professionals who need to manage lead hazards in construction and renovation projects. It provides comprehensive training on lead sampling techniques, health effects, and regulatory compliance. Understanding the risks associated with lead exposure and how to control them is essential for maintaining safety and compliance in various industries.
      </motion.p>

      {/* Job Opportunities and Slideshow - Side by Side */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section with Bullet Points, Shifted to the Right */}
        <div className="pl-6">
          <motion.h3 className="text-2xl font-bold mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            Job Opportunities
          </motion.h3>

          <motion.ul
            className="list-disc pl-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.li className="mb-4" variants={fadeInVariants} custom={1}>
              Certified Lead Inspector
            </motion.li>
            <motion.li className="mb-4" variants={fadeInVariants} custom={2}>
              Lead Risk Assessor
            </motion.li>
            <motion.li className="mb-4" variants={fadeInVariants} custom={3}>
              Lead Abatement Supervisor
            </motion.li>
            <motion.li className="mb-4" variants={fadeInVariants} custom={4}>
              Construction Supervisor
            </motion.li>
            <motion.li className="mb-4" variants={fadeInVariants} custom={5}>
              Public Health Specialist
            </motion.li>
          </motion.ul>
        </div>

        {/* Right Section with Slideshow */}
        <div className="relative w-full h-64 flex items-center justify-center">
          <motion.div
            className="absolute inset-0"
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={slideshowImages[currentImage]}
              alt={`Slide ${currentImage + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;
