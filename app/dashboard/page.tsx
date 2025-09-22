// 'use client';

// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import PinnedVisualProcess from './PinnedVisualProcess';
// import HeroVoid from './HeroVoid';

// export default function HomePage() {
//   return (
//     <main className="min-h-screen bg-white text-black font-serif relative overflow-hidden">
//       {/* Navigation (Optional – can be hidden initially) */}
//       <div className="absolute top-0 left-0 w-full p-6 z-20 flex justify-between text-xs tracking-widest uppercase">
//         <div>HOME / PROJECTS / CONTACT</div>
//         <div className="text-right">Booking Open for Fall</div>
//       </div>

//       {/* Hero Section */}
//       <section className="flex flex-col justify-center items-center h-screen text-center px-4">
//         <motion.h1
//           className="text-5xl md:text-7xl font-bold tracking-tight"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           Welcome to Stephen Butkus Studios
//         </motion.h1>

//         <motion.p
//           className="mt-4 text-base md:text-lg text-gray-600 max-w-xl"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 1 }}
//         >
//           Capturing high fashion, raw emotion, and timeless stories through the lens.
//         </motion.p>

//         <motion.div
//           className="mt-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1, duration: 1 }}
//         >
//           <Link href="/dashboard/pages/projects">
//             <button className="px-6 py-3 bg-black text-white text-sm uppercase tracking-wide hover:bg-gray-800 transition">
//               View Projects
//             </button>
//           </Link>
//         </motion.div>

//       </section>
//       <HeroVoid />
//       <PinnedVisualProcess />
//     </main>
//   );
// }







"use client";

import React from "react";
// import PinnedVisualProcess from './PinnedVisualProcess';
import HeroVoid from './HeroVoid';
import TickerStrip from "./TickerStrip";
import OurStory from "./OurStory";
import RecentFeature from "./RecentFeature";
import RotatingBand from "./RotatingBand";
import FeatureCollectionsVoid from "./FeatureCollectionsVoid";
import TestimonialsVoid from "./TestimonialsVoid";
import CultureStampVoid from "./CultureStampVoid";
// import PongVoid from "./PongVoid";


// import DynamicFooter from "./DynamicFooter"; // Already updated

const HomePage = () => {
  return (
    <div className="bg-[black] text-white overflow-x-hidden"> 
      <HeroVoid />
      <TickerStrip />
      <OurStory />
      <RecentFeature />
      <RotatingBand />
      <FeatureCollectionsVoid />
      <TestimonialsVoid />
      {/* <PongVoid /> */}
      <CultureStampVoid />
       {/* <PinnedVisualProcess /> */}
    </div>
  );
};

export default HomePage;