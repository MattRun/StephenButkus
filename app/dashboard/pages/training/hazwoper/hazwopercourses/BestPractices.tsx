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
  "/thisisengineering-EhPSMCvT9rY-unsplash.jpg",
  "/HAZWOPER.jpeg",
];

const BestPractices = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Auto-scroll through the slideshow every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % slideshowImages.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="relative py-16 px-8 bg-gray-700 to-black text-white w-full">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        HAZWOPER Best Practices
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
        HAZWOPER (Hazardous Waste Operations and Emergency Response) training is crucial for protecting workers in environments where hazardous substances are present. Following these best practices ensures safety, regulatory compliance, and preparedness for emergency response.
      </motion.p>

     {/* Job Opportunities and Slideshow - Side by Side */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section with Bullet Points */}
        <div className="pl-6">
          <motion.h3 className="text-2xl font-bold mb-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
            Best Practices
          </motion.h3>

          <motion.ul
            className="list-disc pl-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.li className="mb-4" variants={fadeInVariants} custom={1}>
              Conduct comprehensive site assessments.
            </motion.li>
            <motion.li className="mb-4" variants={fadeInVariants} custom={2}>
              Implement proper use of Personal Protective Equipment (PPE).
            </motion.li>
            <motion.li className="mb-4" variants={fadeInVariants} custom={3}>
              Follow decontamination procedures strictly.
            </motion.li>
            <motion.li className="mb-4" variants={fadeInVariants} custom={4}>
              Develop and regularly update a site-specific health and safety plan.
            </motion.li>
            <motion.li className="mb-4" variants={fadeInVariants} custom={5}>
              Ensure comprehensive training for workers handling hazardous materials.
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
              alt="HAZWOPER Training"
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

export default BestPractices;
