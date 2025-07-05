// import React, { useEffect, useState } from "react";

// const stats = [
//   { number: "10,000+", text: "Customers" },
//   { number: "59,000+", text: "Homes Saved" },
//   { number: "5+", text: "Accredited Categories" },
// ];

// const continuousStat = { start: 1500000, end: 5000000, label: "Samples Analyzed" };

// const StatsSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [currentCount, setCurrentCount] = useState(continuousStat.start);
//   const slotDuration = 8000; // Slot spin duration in milliseconds

//   // Rotate slot machine stats every 8 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length);
//     }, slotDuration);
//     return () => clearInterval(interval);
//   }, []);

//   // Continuous counting animation in the center
//   useEffect(() => {
//     const countInterval = setInterval(() => {
//       setCurrentCount((prevCount) =>
//         prevCount < continuousStat.end ? prevCount + 1 : continuousStat.start
//       );
//     }, 50); // Adjust speed as needed
//     return () => clearInterval(countInterval);
//   }, []);

//   return (
//     <div className="bg-gradient-to-r from-[#16436F] to-[#10b1b4] py-16 text-white">
//       <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
//         {/* Left Slot Machine */}
//         <div className="text-center w-1/3 relative overflow-hidden h-20">
//           <div
//             className="absolute inset-0"
//             style={{
//               transition: "transform 1s ease-in-out",
//               transform: `translateY(-${currentIndex * 100}%)`,
//             }}
//           >
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center justify-center h-20"
//               >
//                 <h2 className="text-4xl font-bold">{stat.number}</h2>
//                 <p className="text-lg mt-1">{stat.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Center Continuous Counter */}
//         <div className="text-center w-1/3">
//           <h2 className="text-6xl font-extrabold">{currentCount.toLocaleString()}</h2>
//           <p className="text-lg mt-1">{continuousStat.label}</p>
//         </div>

//         {/* Right Slot Machine */}
//         <div className="text-center w-1/3 relative overflow-hidden h-20">
//           <div
//             className="absolute inset-0"
//             style={{
//               transition: "transform 1s ease-in-out",
//               transform: `translateY(-${currentIndex * 100}%)`,
//             }}
//           >
//             {stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="flex flex-col items-center justify-center h-20"
//               >
//                 <h2 className="text-4xl font-bold">{stat.number}</h2>
//                 <p className="text-lg mt-1">{stat.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StatsSection;






"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";

const leftStats = [
  { number: "40+ years", text: "Trusted Local Expertise" },
  { number: "50+ years", text: "Combined Experience" },
  { number: "100+", text: "Contractor Partnerships" },
];

const rightStats = [
  { number: "98%", text: "Client Retention Rate" },
  { number: "59,000+", text: "Projects Completed" },
  { number: "24/7", text: "Emergency Response" },
];

// Real-time counter setup
const START_COUNT = 1247031;
const INCREMENT_PER_SECOND = 1.5;
const START_TIME = new Date("2024-01-01T00:00:00Z").getTime(); // Customize your actual start date

const StatsSection = () => {
  const [leftIndex, setLeftIndex] = useState(0);
  const [rightIndex, setRightIndex] = useState(0);

  // Live motion value and animated spring
  const motionValue = useMotionValue(START_COUNT);
  const animatedCount = useSpring(motionValue, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const update = () => {
      const now = Date.now();
      const elapsed = (now - START_TIME) / 1000;
      const newCount = Math.floor(START_COUNT + elapsed * INCREMENT_PER_SECOND);

      // Animate to new value smoothly
      animate(motionValue, newCount, { duration: 1.2 });
    };

    update(); // run initially
    const interval = setInterval(update, 1500); // re-run every 1.5 seconds
    return () => clearInterval(interval);
  }, []);

  // Slot-style rotation
  useEffect(() => {
    const leftInterval = setInterval(() => {
      setLeftIndex((prev) => (prev + 1) % leftStats.length);
    }, 8000);
    const rightInterval = setInterval(() => {
      setRightIndex((prev) => (prev + 1) % rightStats.length);
    }, 8000);

    return () => {
      clearInterval(leftInterval);
      clearInterval(rightInterval);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-[#16436F] to-[#10b1b4] py-16 text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 text-center">

        {/* Left Slot Machine */}
        <div className="text-center w-full md:w-1/3 relative overflow-hidden h-24">
          <div
            className="absolute inset-0 transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateY(-${leftIndex * 100}%)` }}
          >
            {leftStats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center h-24">
                <h2 className="text-3xl md:text-4xl font-bold">{stat.number}</h2>
                <p className="text-lg mt-1">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Center Real-Time Counter */}
        <div className="text-center w-full md:w-1/3">
          <motion.h2 className="text-4xl md:text-6xl font-extrabold">
            {Math.floor(animatedCount.get()).toLocaleString()}
          </motion.h2>
          <p className="text-lg mt-1">Samples Analyzed</p>
        </div>

        {/* Right Slot Machine */}
        <div className="text-center w-full md:w-1/3 relative overflow-hidden h-24">
          <div
            className="absolute inset-0 transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateY(-${rightIndex * 100}%)` }}
          >
            {rightStats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center justify-center h-24">
                <h2 className="text-3xl md:text-4xl font-bold">{stat.number}</h2>
                <p className="text-lg mt-1">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
