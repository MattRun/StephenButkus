'use client';

import Image from 'next/image';
import styles from './sectionOne.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const SectionOne = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [inView, controls]);

  return (
    <div
      className={`${styles.container} flex flex-col lg:flex-row items-stretch`}
      ref={ref}
    >
      {/* Text Section */}
      <motion.div
        className={`${styles.textContainer} flex-1 p-8 lg:p-48`}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <h2 className={`${styles.title} text-5xl font-bold mb-4`}>
          Enhance Your Safety and Health Knowledge
        </h2>
        <p className="text-3xl text-gray-700 mb-4">
          Looking for helpful tools and expert tips? Explore our professional resources and find exactly what you need to succeed.
        </p>
        <a
          href="/dashboard/pages/resources/professionalresources/workersafetyresources"
          className={`${styles.link} inline-block font-semibold`}
        >
          PROFESSIONAL RESOURCES →
        </a>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="relative flex-1 w-full h-64 lg:h-auto"
        initial={{ opacity: 0, y: -50 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src="/JoeyTeaching.png"
          alt="Safety and Health Image"
          layout="fill"
          objectFit="contain" // Adjust this to 'contain' for less zoomed-in view
          className={styles.image}
        />
      </motion.div>
    </div>
  );
};

export default SectionOne;
