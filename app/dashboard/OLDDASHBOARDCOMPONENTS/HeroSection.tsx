// 'use client';
// import React from 'react';
// import { motion } from 'framer-motion';

// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       <video
//         className="absolute inset-0 w-full h-full object-cover"
//         src="/AdobeStock_SampleVideo.mp4"
//         autoPlay
//         muted
//         loop
//       />
//       <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
//         <motion.h1
//           className="text-6xl font-bold text-white mb-6"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Academy of Environmental Health & Safety (AEHS)
//         </motion.h1>
//         <motion.p
//           className="text-xl text-gray-300 mb-8"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.5 }}
//         >
//           Empowering your future with professional training and certifications.
//         </motion.p>
//         <motion.a
//           href="/dashboard/pages/alltraining"
//           className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//         >
//           Explore Our Courses
//         </motion.a>
//       </div>
//     </section>
//   );
// }

// app/components/HeroSection.tsx
'use client';
import React from 'react';
import '@fontsource/source-sans-pro';
import styles from './main.module.css';

export default function HeroSection() {
  return (
    <section
      className={`${styles.heroContainer} relative w-full h-screen overflow-hidden flex items-center justify-center text-white`}
    >
      <video
        className={`${styles.heroVideo} absolute inset-0 w-full h-full object-cover`}
        src="/AEHSFinalVideo.mp4"
        autoPlay
        muted
        loop
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 flex flex-col items-center text-center px-4">
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">
          Academy of Environmental Health & Safety
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mt-4 drop-shadow-md">
          Empowering your future with professional training and certifications
        </p>

        {/* Call-to-action hint */}
        <div className="mt-16">
          {/* <span className="text-gray-300 text-lg md:text-xl">
            Scroll Down
          </span> */}
          <div className="mt-2 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 md:w-8 md:h-8 text-gray-300"
              fill="none"
              viewBox="0 0 22 22"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
