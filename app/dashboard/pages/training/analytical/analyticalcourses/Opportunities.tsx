// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { useState, useEffect } from 'react';

// const fadeInVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.3,
//       duration: 0.8,
//     },
//   }),
// };

// const slideshowImages = [
//   "/Mold.jpeg",
//   "/PLM.jpg",
// ];

// const Opportunities = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   // Auto-scroll through the slideshow every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % slideshowImages.length);
//     }, 5000);

//     return () => clearInterval(interval); // Cleanup the interval on component unmount
//   }, []);

//   return (
//     <div className="relative py-16 px-20 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
//       {/* Animated Title */}
//       <motion.h2
//         className="text-4xl font-bold text-center mb-12"
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2 }}
//         viewport={{ once: true }}
//       >
//         Why You Should Take This Course and Job Opportunities
//       </motion.h2>

//       {/* Slideshow */}
//       <div className="relative w-full h-64 mb-12">
//         <motion.div
//           key={currentImage}
//           className="absolute inset-0 w-full h-full"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//         >
//           <Image
//             src={slideshowImages[currentImage]}
//             alt={`Slide ${currentImage + 1}`}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg"
//           />
//         </motion.div>
//       </div>

//       {/* Content Section */}
//       <div className="max-w-4xl mx-auto">
//         {/* Why You Should Take This Course */}
//         <motion.p
//           className="mb-8 text-lg leading-relaxed"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeInVariants}
//           custom={0}
//         >
//           These courses provide essential training for professionals looking to specialize in analytical methodologies and air sampling techniques. The comprehensive content prepares attendees to perform effective quantitative and qualitative analysis of environmental samples, ensuring they can assess and manage occupational exposure to hazardous substances. The specialized knowledge gained from these courses will position you as an expert in analyzing complex samples using Polarized Light Microscopy (PLM) and air sampling methodologies, increasing your ability to comply with industry standards and regulatory requirements.
//         </motion.p>

//         {/* Line-by-line Fade In for Job Opportunities */}
//         <motion.ul
//           className="list-disc pl-6"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//         >
//           <motion.li className="mb-4" variants={fadeInVariants} custom={1}>
//             Industrial Hygienist
//           </motion.li>
//           <motion.li className="mb-4" variants={fadeInVariants} custom={2}>
//             Environmental Health & Safety (EHS) Specialist
//           </motion.li>
//           <motion.li className="mb-4" variants={fadeInVariants} custom={3}>
//             Laboratory Technician
//           </motion.li>
//           <motion.li className="mb-4" variants={fadeInVariants} custom={4}>
//             Environmental Consultant
//           </motion.li>
//           <motion.li className="mb-4" variants={fadeInVariants} custom={5}>
//             Regulatory Compliance Specialist
//           </motion.li>
//         </motion.ul>
//       </div>
//     </div>
//   );
// };

// export default Opportunities;






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
  "/Mold.jpeg",
  "/PLM.jpg",
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
    <div className="relative py-16 px-8 bg-gray-700 to-black text-white w-full">
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        Why You Should Take This Course and Job Opportunities
      </motion.h2>

      
        {/* Left Section with Description */}
        <div className="pl-6">
        <motion.p
        className="max-w-4xl mx-auto mb-8 text-lg leading-relaxed"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
        custom={0}
      >
            These courses provide essential training for professionals looking to specialize in analytical methodologies and air sampling techniques. The comprehensive content prepares attendees to perform effective quantitative and qualitative analysis of environmental samples, ensuring they can assess and manage occupational exposure to hazardous substances. The specialized knowledge gained from these courses will position you as an expert in analyzing complex samples using Polarized Light Microscopy (PLM) and air sampling methodologies, increasing your ability to comply with industry standards and regulatory requirements.
          </motion.p>
     {/* Job Opportunities and Slideshow - Side by Side */}
     <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section with Bullet Points, Shifted to the Right */}
        <div className="pl-6"> {/* Added padding to shift it right */}
          <motion.h3
            className="text-2xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Job Opportunities
          </motion.h3>

          <motion.ul
            className="list-disc pl-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.li className="mb-4" variants={fadeInVariants} custom={1}>
              Industrial Hygienist
            </motion.li>
            <motion.li className="mb-4" variants={fadeInVariants} custom={2}>
              Environmental Health & Safety (EHS) Specialist
            </motion.li>
            <motion.li className="mb-4" variants={fadeInVariants} custom={3}>
              Laboratory Technician
            </motion.li>
            <motion.li className="mb-4" variants={fadeInVariants} custom={4}>
              Environmental Consultant
            </motion.li>
            <motion.li className="mb-4" variants={fadeInVariants} custom={5}>
              Regulatory Compliance Specialist
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
    </div>
  );
};

export default Opportunities;
