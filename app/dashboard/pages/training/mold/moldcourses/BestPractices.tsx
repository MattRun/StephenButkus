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
  }),
};

const slideshowImages = [
  "/iStock-1468031957.jpg", // Replace with actual image paths
  "/moldsampling.png", // Replace with actual image paths
];

const Opportunities = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % slideshowImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-16 px-8 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        Why Mold Sampling Training Is Essential and Job Opportunities
      </motion.h2>
      <div className="max-w-4xl mx-auto">
        {/* Course Description */}
        <motion.p
          className="mb-8 text-lg leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          custom={0}
        >
          This course offers foundational training for professionals involved in indoor air quality assessment and mold remediation. You’ll gain hands-on experience in sampling, interpreting results, and implementing effective mold management strategies. The knowledge acquired will enable you to perform detailed assessments of mold contamination, improve indoor environmental conditions, and protect public health.
        </motion.p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
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
              Mold Remediation Specialist
            </motion.li>
            <motion.li className="mb-4" variants={fadeInVariants} custom={2}>
              Indoor Air Quality (IAQ) Specialist
            </motion.li>
            <motion.li className="mb-4" variants={fadeInVariants} custom={3}>
              Environmental Health Specialist
            </motion.li>
            <motion.li className="mb-4" variants={fadeInVariants} custom={4}>
              Building Inspector
            </motion.li>
            <motion.li className="mb-4" variants={fadeInVariants} custom={5}>
              Environmental Consultant
            </motion.li>
          </motion.ul>
        </div>

        {/* Right Section - Slideshow */}
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
    </div>
  );
};

export default Opportunities;
