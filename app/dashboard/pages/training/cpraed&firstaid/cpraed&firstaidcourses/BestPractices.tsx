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
  "/CPR.jpeg",
  "/CPR.jpeg",
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
        CPR, AED, and First Aid Best Practices
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
        CPR, AED, and First Aid Training is essential for equipping individuals with the knowledge and skills needed to respond effectively to medical emergencies. Following these best practices ensures life-saving assistance is provided while maintaining personal safety.
      </motion.p>

      {/* Best Practices and Slideshow */}
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
              Assess the situation and ensure the area is safe before intervening.
            </motion.li>
            <motion.li className="mb-4" variants={fadeInVariants} custom={2}>
              Follow the CAB sequence: Circulation, Airway, and Breathing.
            </motion.li>
            <motion.li className="mb-4" variants={fadeInVariants} custom={3}>
              Use an AED as soon as it's available and follow device instructions.
            </motion.li>
            <motion.li className="mb-4" variants={fadeInVariants} custom={4}>
              Administer high-quality chest compressions (100-120 per minute).
            </motion.li>
            <motion.li className="mb-4" variants={fadeInVariants} custom={5}>
              Continuously monitor the victim's response and adjust as needed.
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
              alt="CPR Training"
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
