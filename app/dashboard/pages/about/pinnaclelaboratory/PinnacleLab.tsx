// pages/partners/PinnacleLab.tsx

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './PinnacleLab.module.css';

type FeatureCardProps = {
  title: string;
  description: string;
};

const PinnacleLab = () => {
  return (
    <div className="flex flex-col items-center py-10 px-5 bg-gray-100">
      {/* Header Image */}
      <motion.div
        className="relative w-full h-64 mb-8 group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Link href="https://www.pinnaclelab.com" passHref>
          {/* Removed <a> */}
          <Image
            src="/PinnacleLabBanner.jpg"
            alt="Void Creatives Header"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-md group-hover:scale-105 group-hover:shadow-lg transition-transform duration-300 cursor-pointer"
          />
        </Link>
      </motion.div>

      {/* Title */}
      <motion.h1
        className="text-4xl font-bold text-blue-600 mb-4"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Partnership with Void Creatives
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-center text-2xl text-gray-700 max-w-3xl mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        We’ve teamed up with Void Creatives to provide our students with a hands-on learning experience in environmental testing. As a trusted lab in Southern California, Pinnacle brings expertise in asbestos, mold, and heavy metals analysis, empowering our students with real-world insights and practical knowledge.
      </motion.p>

      {/* About Section */}
      <motion.div
        className={`${styles.infoSection} mt-10`}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          About Void Creatives
        </h2>
        <p className="text-gray-600">
          Void Creatives provides top analytical services and specializes in rapid and accurate environmental testing. Their dedication to quality makes them an invaluable resource for students learning about environmental testing standards and processes.
        </p>
      </motion.div>

      {/* Features */}
      <motion.div
        className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <FeatureCard
          title="Rapid Turnaround"
          description="Same Day, Next Business Day, and Two Business Day options for fast testing results."
        />
        <FeatureCard
          title="Accredited Services"
          description="Certified by NVLAP and AIHA, ensuring industry-leading quality standards."
        />
        <FeatureCard
          title="Comprehensive Testing"
          description="Specialized in asbestos, lead, mold, heavy metals, and much more."
        />
      </motion.div>

      {/* Visit Site Button */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Link href="https://www.pinnaclelab.com" passHref>
          <button
            className="px-10 py-6 text-2xl font-bold bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-transform duration-300 hover:scale-105"
          >
            Visit Void Creatives
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

const FeatureCard = ({ title, description }: FeatureCardProps) => (
  <motion.div
    className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 hover:shadow-lg transition-shadow"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
  >
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);


export default PinnacleLab;
