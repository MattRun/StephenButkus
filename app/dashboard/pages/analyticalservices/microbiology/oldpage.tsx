// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// const MicrobiologyPage = () => {
//   return (
//     <main className="bg-white text-black">
//       {/* Hero Section */}
//       <section className="relative h-screen w-full overflow-hidden">
//         <Image
//           src="/HIV.jpg"
//           alt="Microbiology Hero"
//           layout="fill"
//           objectFit="cover"
//           className="brightness-75"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1 className="text-white text-5xl font-bold md:text-7xl text-center drop-shadow-lg">
//             Microbiology Services
//           </h1>
//         </div>
//       </section>

//       {/* Section 1: Overview */}
//       <section className="flex flex-col md:flex-row gap-10 p-10 items-center">
//         <div className="md:w-1/2">
//           <Image
//             src="/HIV.jpg"
//             alt="Bacteria Culture"
//             width={800}
//             height={600}
//             className="rounded-xl shadow-md"
//           />
//         </div>
//         <div className="md:w-1/2 space-y-6">
//           <h2 className="text-3xl font-bold">What We Analyze</h2>
//           <p>
//             Our microbiology team specializes in culture-based and cassette-based testing for a wide range of environmental
//             contaminants. Whether it’s bacterial presence/absence, fungal viability, or identifying non-fungal allergens, we
//             offer detailed, scientifically rigorous reporting.
//           </p>
//           <ul className="list-disc pl-5 space-y-1">
//             <li>Surface & Air Cultures</li>
//             <li>Bacteria Testing</li>
//             <li>Non-Fungal Allergen Analysis</li>
//             <li>Micro5, Allergenco-D, Air-O-Cell Cassette Compatibility</li>
//           </ul>
//         </div>
//       </section>

//       {/* Section 2: Culture Sampling */}
//       <section className="p-10 bg-gray-100">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">Culture Sampling</h2>
//           <div className="grid md:grid-cols-2 gap-10">
//             <div>
//               <p>
//                 Surface and air culture samples are cultivated to identify viable fungal organisms such as Stachybotrys,
//                 Chaetomium, and Aspergillus species. Culture testing allows for deeper insight into what’s actively growing
//                 in your environment.
//               </p>
//               <p className="mt-4">
//                 Recommended for post-remediation clearance, indoor air quality complaints, and situations requiring detailed
//                 species-level analysis.
//               </p>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <Image src="/HIV.jpg" alt="Aspergillus" width={400} height={300} className="rounded-md" />
//               <Image src="/HIV.jpg" alt="Chaetomium" width={400} height={300} className="rounded-md" />
//               <Image src="/HIV.jpg" alt="Fusarium" width={400} height={300} className="rounded-md" />
//               <Image src="/HIV.jpg" alt="Stachybotrys" width={400} height={300} className="rounded-md" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Section 3: Water Bacteria Sampling */}
//       <section className="p-10">
//         <div className="max-w-4xl mx-auto space-y-6">
//           <h2 className="text-3xl font-bold">Water Bacteria Testing</h2>
//           <p>
//             We test for the presence or absence of bacterial contamination in water using proven culture methods. These tests
//             are ideal for post-flood inspections, potable water quality checks, and system sanitation verification.
//           </p>
//           <Image src="/HIV.jpg" alt="Water Bacteria" width={1000} height={600} className="rounded-xl" />
//         </div>
//       </section>

//       {/* Section 4: Non-Fungal Allergen Testing */}
//       <section className="bg-gray-100 p-10">
//         <div className="max-w-5xl mx-auto">
//           <h2 className="text-3xl font-bold mb-6">Non-Fungal Allergen Analysis</h2>
//           <p className="mb-6">
//             Our allergen analysis goes beyond mold, providing a full profile of indoor air particulates such as skin cells,
//             cellulose, fiberglass, synthetic fibers, insect fragments, pollen, and more. Perfect for clients seeking to
//             understand airborne triggers beyond fungal spores.
//           </p>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//             <Image src="/HIV.jpg" alt="Skin Cells" width={300} height={200} className="rounded-md" />
//             <Image src="/HIV.jpg" alt="Algae" width={300} height={200} className="rounded-md" />
//             <Image src="/HIV.jpg" alt="Fiberglass" width={300} height={200} className="rounded-md" />
//             <Image src="/HIV.jpg" alt="Synthetic Fibers" width={300} height={200} className="rounded-md" />
//           </div>
//         </div>
//       </section>

//       {/* Text Over Image Callout */}
//       <section className="relative h-[60vh] w-full mt-16">
//         <Image src="/HIV.jpg" alt="Callout" layout="fill" objectFit="cover" className="brightness-75" />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h3 className="text-white text-4xl font-semibold text-center drop-shadow-xl">
//             Let’s Identify What’s in Your Environment
//           </h3>
//         </div>
//       </section>

//       {/* Related Services */}
//       <section className="p-10">
//         <h2 className="text-3xl font-bold text-center mb-8">Explore Related Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           <Link href="/services/mold">
//             <div className="bg-white rounded-lg shadow-md hover:shadow-xl p-6 text-center cursor-pointer">
//               <h3 className="font-semibold text-xl">Mold Testing</h3>
//               <p className="text-gray-600 mt-2">Surface & air mold analysis</p>
//             </div>
//           </Link>
//           <Link href="/services/iaq">
//             <div className="bg-white rounded-lg shadow-md hover:shadow-xl p-6 text-center cursor-pointer">
//               <h3 className="font-semibold text-xl">Indoor Air Quality</h3>
//               <p className="text-gray-600 mt-2">Environmental monitoring</p>
//             </div>
//           </Link>
//           <Link href="/resources/blog">
//             <div className="bg-white rounded-lg shadow-md hover:shadow-xl p-6 text-center cursor-pointer">
//               <h3 className="font-semibold text-xl">Articles & Blogs</h3>
//               <p className="text-gray-600 mt-2">Educational content for clients</p>
//             </div>
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default MicrobiologyPage;



//Blog page layout















































// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// const fadeUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

// const MicrobiologyPage = () => {
//   return (
//     <main className="bg-white text-black">
//       {/* Hero Section */}
//       <section className="relative h-screen w-full overflow-hidden">
//         <Image
//           src="/pinnaclelab/microbiology/3x3_cultures.jpg"
//           alt="Microbiology Hero"
//           layout="fill"
//           objectFit="cover"
//           className="brightness-75"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <motion.h1
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             className="text-white text-5xl font-bold md:text-7xl text-center drop-shadow-lg"
//           >
//             Microbiology Services
//           </motion.h1>
//         </div>
//       </section>

//       {/* Section 1: Overview */}
//       <section className="flex flex-col md:flex-row gap-10 p-10 items-center">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="md:w-1/2"
//         >
//           <Image
//             src="/pinnaclelab/microbiology/coliert_test_reactions.jpg"
//             alt="Bacteria Culture"
//             width={800}
//             height={600}
//             className="rounded-xl shadow-md"
//           />
//         </motion.div>
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="md:w-1/2 space-y-6"
//         >
//           <h2 className="text-3xl font-bold">What We Analyze</h2>
//           <p>
//             Welcome to our microbiology lab. This page is designed to walk you through the fascinating world of microbial
//             testing — from airborne allergens to waterborne bacteria. Scroll through for a visual science lesson.
//           </p>
//           <ul className="list-disc pl-5 space-y-1">
//             <li>How culture samples work</li>
//             <li>How we detect bacteria in water</li>
//             <li>What non-fungal allergens reveal</li>
//             <li>What tools and media types we use</li>
//           </ul>
//         </motion.div>
//       </section>

//       {/* Section 2: Culture Sampling */}
//       <section className="p-10 bg-gray-100">
//         <div className="max-w-5xl mx-auto">
//           <motion.h2
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             className="text-3xl font-bold mb-6"
//           >
//             What Are Culture Samples?
//           </motion.h2>
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={fadeUp}
//             className="grid md:grid-cols-2 gap-10"
//           >
//             <div>
//               <p>
//                 Culture sampling allows us to grow any viable fungi or bacteria on specific media, revealing colonies of
//                 concern. This is the most accurate method for identifying *what’s alive* in your environment.
//               </p>
//               <p className="mt-4">
//                 We can test both air and surfaces for growth of spores like *Aspergillus*, *Chaetomium*, or *Stachybotrys*.
//                 Results help determine health risks or post-remediation success.
//               </p>
//             </div>
//             <div className="grid grid-cols-2 gap-4">
//               <Image src="/pinnaclelab/microbiology/Chaetomium1.jpg" alt="Chaetomium" width={400} height={300} className="rounded-md" />
//               <Image src="/pinnaclelab/microbiology/Culture_2.jpg" alt="Culture" width={400} height={300} className="rounded-md" />
//               <Image src="/pinnaclelab/microbiology/Culture_3.jpg" alt="Culture" width={400} height={300} className="rounded-md" />
//               <Image src="/pinnaclelab/microbiology/Culture_4.jpg" alt="Culture" width={400} height={300} className="rounded-md" />
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Section 3: Water Bacteria Testing */}
//       <section className="p-10">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="max-w-4xl mx-auto space-y-6"
//         >
//           <h2 className="text-3xl font-bold">How Do We Test for Bacteria in Water?</h2>
//           <p>
//             We use coliert presence/absence testing methods. These color-reactive tubes let us know if harmful bacteria like
//             coliforms or E. coli are present. It's a simple, visual process — and extremely effective for field sampling.
//           </p>
//           <Image
//             src="/pinnaclelab/microbiology/coliert_test_reactions2.jpg"
//             alt="Coliert Reactions"
//             width={1000}
//             height={600}
//             className="rounded-xl"
//           />
//         </motion.div>
//       </section>

//       {/* Section 4: Non-Fungal Allergen Testing */}
//       <section className="bg-gray-100 p-10">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="max-w-5xl mx-auto"
//         >
//           <h2 className="text-3xl font-bold mb-6">What's Floating in Your Air?</h2>
//           <p className="mb-6">
//             Not all indoor particles are mold. Our non-fungal allergen test reveals background matter like skin cells,
//             fiberglass, synthetic fibers, algae, and more — all of which can affect indoor air quality and allergies.
//           </p>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//             <Image src="/pinnaclelab/microbiology/Skin Cells1.jpg" alt="Skin Cells" width={300} height={200} className="rounded-md" />
//             <Image src="/pinnaclelab/microbiology/Non_fungal_2.jpg" alt="Non Fungal" width={300} height={200} className="rounded-md" />
//             <Image src="/pinnaclelab/microbiology/Fiberglass1.jpg" alt="Fiberglass" width={300} height={200} className="rounded-md" />
//             <Image src="/pinnaclelab/microbiology/Synthetic Fibers3.jpg" alt="Synthetic Fibers" width={300} height={200} className="rounded-md" />
//           </div>
//         </motion.div>
//       </section>

//       {/* Text Over Image Callout */}
//       <section className="relative h-[60vh] w-full mt-16">
//         <Image
//           src="/pinnaclelab/microbiology/Non_fungal_3.jpg"
//           alt="Callout"
//           layout="fill"
//           objectFit="cover"
//           className="brightness-75"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h3 className="text-white text-4xl font-semibold text-center drop-shadow-xl">
//             Microscopic clues reveal macroscopic health risks.
//           </h3>
//         </div>
//       </section>

//       {/* Related Services */}
//       <section className="p-10">
//         <h2 className="text-3xl font-bold text-center mb-8">Explore Related Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           <Link href="/services/mold">
//             <div className="bg-white rounded-lg shadow-md hover:shadow-xl p-6 text-center cursor-pointer">
//               <h3 className="font-semibold text-xl">Mold Testing</h3>
//               <p className="text-gray-600 mt-2">Surface & air mold analysis</p>
//             </div>
//           </Link>
//           <Link href="/services/iaq">
//             <div className="bg-white rounded-lg shadow-md hover:shadow-xl p-6 text-center cursor-pointer">
//               <h3 className="font-semibold text-xl">Indoor Air Quality</h3>
//               <p className="text-gray-600 mt-2">Environmental monitoring</p>
//             </div>
//           </Link>
//           <Link href="/resources/blog">
//             <div className="bg-white rounded-lg shadow-md hover:shadow-xl p-6 text-center cursor-pointer">
//               <h3 className="font-semibold text-xl">Articles & Blogs</h3>
//               <p className="text-gray-600 mt-2">Educational content for clients</p>
//             </div>
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default MicrobiologyPage;



//blog like again



// 'use client';

// import React, { useRef } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const fadeUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: 'easeOut' },
//   },
// };

// const cultureSlides = [
//   {
//     text: 'Culture sampling allows us to grow any viable fungi or bacteria on specific media, revealing colonies of concern.',
//     img: '/pinnaclelab/microbiology/Chaetomium1.jpg',
//   },
//   {
//     text: 'This is the most accurate method for identifying what’s alive in your environment — both on surfaces and in air.',
//     img: '/pinnaclelab/microbiology/Culture_2.jpg',
//   },
//   {
//     text: 'Spores like Aspergillus, Chaetomium, and Stachybotrys can be detected, helping assess health risk or clearance success.',
//     img: '/pinnaclelab/microbiology/Culture_3.jpg',
//   },
//   {
//     text: 'Each colony reveals insight into microbial conditions that aren’t visible to the naked eye — yet can impact indoor air.',
//     img: '/pinnaclelab/microbiology/Culture_4.jpg',
//   },
// ];

// const MicrobiologyPage = () => {
//   const pinnedRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: pinnedRef, offset: ['start end', 'end start'] });
//   const slideIndex = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3]);

//   return (
//     <main className="bg-white text-[#1f1f1f] font-sans scroll-smooth">
//       {/* Hero Section */}
//       <section className="relative h-screen w-full overflow-hidden snap-start snap-always">
//         <Image
//           src="/pinnaclelab/microbiology/3x3_cultures.jpg"
//           alt="Microbiology Hero"
//           fill
//           className="object-cover brightness-[.65]"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 80 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.4, ease: 'easeOut' }}
//             className="text-white text-5xl md:text-7xl font-bold drop-shadow-md"
//           >
//             Microbiology Services
//           </motion.h1>
//         </div>
//       </section>

//       {/* Overview Section */}
//       <section className="flex flex-col md:flex-row gap-10 p-10 items-center">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="md:w-1/2"
//         >
//           <Image
//             src="/pinnaclelab/microbiology/coliert_test_reactions.jpg"
//             alt="Bacteria Culture"
//             width={800}
//             height={600}
//             className="rounded-xl shadow-lg"
//           />
//         </motion.div>
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="md:w-1/2 space-y-6"
//         >
//           <h2 className="text-3xl font-bold text-[#123c69]">What We Analyze</h2>
//           <p>
//             Welcome to our microbiology lab. This page is designed to walk you through the fascinating world of microbial
//             testing — from airborne allergens to waterborne bacteria. Scroll through for a visual science lesson.
//           </p>
//           <ul className="list-disc pl-5 space-y-1">
//             <li>How culture samples work</li>
//             <li>How we detect bacteria in water</li>
//             <li>What non-fungal allergens reveal</li>
//             <li>What tools and media types we use</li>
//           </ul>
//         </motion.div>
//       </section>

//       {/* Scroll-Controlled Slide Animation Section */}
//       <section ref={pinnedRef} className="relative h-[300vh] bg-gray-100">
//         <div className="sticky top-0 h-screen flex items-center justify-center">
//           {cultureSlides.map((slide, index) => (
//             <motion.div
//               key={index}
//               style={{ opacity: useTransform(slideIndex, v => (Math.round(v) === index ? 1 : 0)) }}
//               className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row items-center justify-center px-6 gap-10"
//             >
//               <Image src={slide.img} alt={`Culture ${index + 1}`} width={500} height={400} className="rounded-lg shadow-xl" />
//               <div className="max-w-xl text-center md:text-left">
//                 <h2 className="text-3xl font-bold text-[#123c69] mb-4">Culture Samples</h2>
//                 <p className="text-lg leading-relaxed">{slide.text}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Water Bacteria Testing */}
//       <section className="p-10">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="max-w-4xl mx-auto space-y-6"
//         >
//           <h2 className="text-3xl font-bold text-[#123c69]">How Do We Test for Bacteria in Water?</h2>
//           <p>
//             We use coliert presence/absence testing methods. These color-reactive tubes let us know if harmful bacteria like
//             coliforms or E. coli are present. It's a simple, visual process — and extremely effective for field sampling.
//           </p>
//           <Image
//             src="/pinnaclelab/microbiology/coliert_test_reactions2.jpg"
//             alt="Coliert Reactions"
//             width={1000}
//             height={600}
//             className="rounded-xl shadow"
//           />
//         </motion.div>
//       </section>

//       {/* Non-Fungal Allergen Testing */}
//       <section className="bg-gray-100 p-10">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={fadeUp}
//           className="max-w-5xl mx-auto"
//         >
//           <h2 className="text-3xl font-bold mb-6 text-[#123c69]">What's Floating in Your Air?</h2>
//           <p className="mb-6">
//             Not all indoor particles are mold. Our non-fungal allergen test reveals background matter like skin cells,
//             fiberglass, synthetic fibers, algae, and more — all of which can affect indoor air quality and allergies.
//           </p>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//             <Image src="/pinnaclelab/microbiology/Skin Cells1.jpg" alt="Skin Cells" width={300} height={200} className="rounded-md" />
//             <Image src="/pinnaclelab/microbiology/Non_fungal_2.jpg" alt="Non Fungal" width={300} height={200} className="rounded-md" />
//             <Image src="/pinnaclelab/microbiology/Fiberglass1.jpg" alt="Fiberglass" width={300} height={200} className="rounded-md" />
//             <Image src="/pinnaclelab/microbiology/Synthetic Fibers3.jpg" alt="Synthetic Fibers" width={300} height={200} className="rounded-md" />
//           </div>
//         </motion.div>
//       </section>

//       {/* Scroll Snap Callout Image */}
//       <section className="relative h-[60vh] w-full mt-16 snap-start snap-always">
//         <Image
//           src="/pinnaclelab/microbiology/Non_fungal_3.jpg"
//           alt="Callout"
//           fill
//           className="object-cover brightness-75"
//         />
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h3 className="text-white text-4xl font-semibold text-center drop-shadow-xl">
//             Microscopic clues reveal macroscopic health risks.
//           </h3>
//         </div>
//       </section>

//       {/* Related Services */}
//       <section className="p-10">
//         <h2 className="text-3xl font-bold text-center mb-8 text-[#123c69]">Explore Related Services</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           <Link href="/services/mold">
//             <div className="bg-white rounded-lg shadow-md hover:shadow-xl p-6 text-center cursor-pointer">
//               <h3 className="font-semibold text-xl">Mold Testing</h3>
//               <p className="text-gray-600 mt-2">Surface & air mold analysis</p>
//             </div>
//           </Link>
//           <Link href="/services/iaq">
//             <div className="bg-white rounded-lg shadow-md hover:shadow-xl p-6 text-center cursor-pointer">
//               <h3 className="font-semibold text-xl">Indoor Air Quality</h3>
//               <p className="text-gray-600 mt-2">Environmental monitoring</p>
//             </div>
//           </Link>
//           <Link href="/resources/blog">
//             <div className="bg-white rounded-lg shadow-md hover:shadow-xl p-6 text-center cursor-pointer">
//               <h3 className="font-semibold text-xl">Articles & Blogs</h3>
//               <p className="text-gray-600 mt-2">Educational content for clients</p>
//             </div>
//           </Link>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default MicrobiologyPage;









'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const cultureSlides = [
  {
    text: 'Culture sampling allows us to grow any viable fungi or bacteria on specific media, revealing colonies of concern.',
    img: '/pinnaclelab/microbiology/Chaetomium1.jpg',
  },
  {
    text: 'This is the most accurate method for identifying what’s alive in your environment — both on surfaces and in air.',
    img: '/pinnaclelab/microbiology/Culture_2.jpg',
  },
  {
    text: 'Spores like Aspergillus, Chaetomium, and Stachybotrys can be detected, helping assess health risk or clearance success.',
    img: '/pinnaclelab/microbiology/Culture_3.jpg',
  },
  {
    text: 'Each colony reveals insight into microbial conditions that aren’t visible to the naked eye — yet can impact indoor air.',
    img: '/pinnaclelab/microbiology/Culture_4.jpg',
  },
];

const MicrobiologyPage = () => {
  const pinnedRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: pinnedRef, offset: ['start end', 'end start'] });
  const slideIndex = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3]);

  return (
    <main className="relative bg-gradient-to-b from-[#16436F] to-[#10b1b4] text-gray-100 scroll-smooth font-sans">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden snap-start snap-always">
        <Image
          src="/pinnaclelab/microbiology/3x3_cultures.jpg"
          alt="Microbiology Hero"
          fill
          className="object-cover brightness-[.65]"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="text-white text-5xl md:text-7xl font-bold drop-shadow-md"
          >
            Microbiology Services
          </motion.h1>
        </div>
      </section>

      {/* Overview Section */}
      <section className="flex flex-col md:flex-row gap-10 p-10 items-center max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="md:w-1/2"
        >
          <Image
            src="/pinnaclelab/microbiology/coliert_test_reactions.jpg"
            alt="Bacteria Culture"
            width={800}
            height={600}
            className="rounded-xl shadow-xl border border-white/20"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="md:w-1/2 bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-md border border-white/20 text-white"
        >
          <h2 className="text-3xl font-bold text-cyan-200 mb-4">What We Analyze</h2>
          <p className="mb-4">
            Welcome to our microbiology lab. This page is designed to walk you through the fascinating world of microbial
            testing — from airborne allergens to waterborne bacteria. Scroll through for a visual science lesson.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>How culture samples work</li>
            <li>How we detect bacteria in water</li>
            <li>What non-fungal allergens reveal</li>
            <li>What tools and media types we use</li>
          </ul>
        </motion.div>
      </section>

      {/* Scroll-Controlled Slide Animation Section */}
      <section ref={pinnedRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          {cultureSlides.map((slide, index) => (
            <motion.div
              key={index}
              style={{ opacity: useTransform(slideIndex, v => (Math.round(v) === index ? 1 : 0)) }}
              className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row items-center justify-center px-6 gap-10"
            >
              <Image src={slide.img} alt={`Culture ${index + 1}`} width={500} height={400} className="rounded-xl shadow-xl" />
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-md max-w-xl text-white">
                <h2 className="text-3xl font-bold text-cyan-200 mb-4">Culture Samples</h2>
                <p className="text-lg leading-relaxed">{slide.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Water Bacteria Testing */}
      <section className="p-10 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-md border border-white/20 space-y-6 text-white"
        >
          <h2 className="text-3xl font-bold text-cyan-200">How Do We Test for Bacteria in Water?</h2>
          <p>
            We use coliert presence/absence testing methods. These color-reactive tubes let us know if harmful bacteria like
            coliforms or E. coli are present. It's a simple, visual process — and extremely effective for field sampling.
          </p>
          <Image
            src="/pinnaclelab/microbiology/coliert_test_reactions2.jpg"
            alt="Coliert Reactions"
            width={1000}
            height={600}
            className="rounded-xl shadow"
          />
        </motion.div>
      </section>

      {/* Non-Fungal Allergen Testing */}
      <section className="p-10 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-md border border-white/20 space-y-6 text-white"
        >
          <h2 className="text-3xl font-bold text-cyan-200">What's Floating in Your Air?</h2>
          <p>
            Not all indoor particles are mold. Our non-fungal allergen test reveals background matter like skin cells,
            fiberglass, synthetic fibers, algae, and more — all of which can affect indoor air quality and allergies.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <Image src="/pinnaclelab/microbiology/Skin Cells1.jpg" alt="Skin Cells" width={300} height={200} className="rounded-md" />
            <Image src="/pinnaclelab/microbiology/Non_fungal_2.jpg" alt="Non Fungal" width={300} height={200} className="rounded-md" />
            <Image src="/pinnaclelab/microbiology/Fiberglass1.jpg" alt="Fiberglass" width={300} height={200} className="rounded-md" />
            <Image src="/pinnaclelab/microbiology/Synthetic Fibers3.jpg" alt="Synthetic Fibers" width={300} height={200} className="rounded-md" />
          </div>
        </motion.div>
      </section>

      {/* Scroll Snap Callout Image */}
      <section className="relative h-[60vh] w-full mt-16 snap-start snap-always">
        <Image
          src="/pinnaclelab/microbiology/Non_fungal_3.jpg"
          alt="Callout"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-white text-4xl font-semibold text-center drop-shadow-xl max-w-3xl">
            Microscopic clues reveal macroscopic health risks.
          </h3>
        </div>
      </section>

      {/* Related Services */}
      <section className="p-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-cyan-200">Explore Related Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/services/mold">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-md hover:shadow-xl p-6 text-center border border-white/20 hover:bg-white/20 cursor-pointer">
              <h3 className="font-semibold text-xl text-white">Mold Testing</h3>
              <p className="text-gray-200 mt-2">Surface & air mold analysis</p>
            </div>
          </Link>
          <Link href="/services/iaq">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-md hover:shadow-xl p-6 text-center border border-white/20 hover:bg-white/20 cursor-pointer">
              <h3 className="font-semibold text-xl text-white">Indoor Air Quality</h3>
              <p className="text-gray-200 mt-2">Environmental monitoring</p>
            </div>
          </Link>
          <Link href="/resources/blog">
            <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-md hover:shadow-xl p-6 text-center border border-white/20 hover:bg-white/20 cursor-pointer">
              <h3 className="font-semibold text-xl text-white">Articles & Blogs</h3>
              <p className="text-gray-200 mt-2">Educational content for clients</p>
            </div>
          </Link>
        </div>
      </section>

{/* FAQ Section */}
<section className="p-10 max-w-6xl mx-auto">
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeUp}
    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-md border border-white/20 text-white"
  >
    <h2 className="text-3xl font-bold text-cyan-200 mb-6 text-center">Frequently Asked Questions</h2>
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-xl">What are normal particle levels in indoor air?</h3>
        <p>
  Clean indoor environments typically have low levels of skin cells (&lt;300/m³), cellulose fibers (&lt;200/m³), synthetic fibers (&lt;100/m³), and fiberglass (25–50/m³). Elevated levels can indicate poor filtration, post-construction dust, or HVAC issues.
</p>
   </div>

      <div>
        <h3 className="font-semibold text-xl">What does it mean if we detect fiberglass or synthetic fibers?</h3>
        <p>These are often from insulation or clothing. High levels indoors may indicate an HVAC breach or poor filtration efficiency.</p>
      </div>

      <div>
        <h3 className="font-semibold text-xl">How do you calculate CFU/m³ from culture plates?</h3>
        <p>Divide the number of colonies by the air volume in cubic meters. Example: 15 CFU ÷ 0.15 m³ (150L) = 100 CFU/m³.</p>
      </div>

      <div>
        <h3 className="font-semibold text-xl">How do I prepare for a surface culture sample?</h3>
        <p>Use sterile gloves and swab a 10×10 cm area. If you want both a microscopic and culture exam, collect two swabs from the same spot.</p>
      </div>

      <div>
        <h3 className="font-semibold text-xl">What is Colilert and how is it used?</h3>
        <p>Colilert is a simple presence/absence test for coliforms and E. coli in water. Results are visible by color change and must be read within 24 hours.</p>
      </div>

      <div>
        <h3 className="font-semibold text-xl">What spores do you commonly detect in culture testing?</h3>
        <p>We frequently detect Aspergillus (various species), Penicillium, Cladosporium, Chaetomium, Alternaria, and others. Viability is confirmed via colony growth.</p>
      </div>
    </div>
  </motion.div>
</section>
    </main>
  );
};

export default MicrobiologyPage;































// 'use client';

// import React, { useRef, useState } from 'react';
// import Image from 'next/image';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import Link from 'next/link';



// const MicrobiologyPage = () => {
//   const heroRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });

//   const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
//   const subtitleOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
//   const fadeOut = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

//   const [expandedCard, setExpandedCard] = useState(null);
//   const [chartMode, setChartMode] = useState('indoor');

//   const indoorParticulateData = {
//     labels: ['Skin Cells', 'Cellulose Fibers', 'Synthetic Fibers', 'Fiberglass', 'Pollen'],
//     datasets: [
//       {
//         label: 'Clean Indoor (particles/m³)',
//         data: [300, 200, 100, 50, 500],
//         backgroundColor: '#2DD4BF',
//       },
//       {
//         label: 'Elevated Range (particles/m³)',
//         data: [1000, 500, 300, 100, 1000],
//         backgroundColor: '#F87171',
//       },
//     ],
//   };

//   const outdoorParticulateData = {
//     labels: ['Skin Cells', 'Cellulose Fibers', 'Synthetic Fibers', 'Fiberglass', 'Pollen'],
//     datasets: [
//       {
//         label: 'Typical Outdoor (particles/m³)',
//         data: [50, 100, 10, 0, 5000],
//         backgroundColor: '#2DD4BF',
//       },
//     ],
//   };

//   const toggleCard = (index) => {
//     setExpandedCard(expandedCard === index ? null : index);
//   };

//   return (
//     <main className="bg-gray-50 text-gray-900 font-sans overflow-x-hidden snap-y snap-mandatory h-screen overflow-scroll relative font-inter">
//       <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-50">
//         {[...Array(8)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="w-2 h-2 rounded-full bg-teal-600"
//             style={{ opacity: useTransform(scrollYProgress, [i / 8, (i + 1) / 8], [0.4, 1]) }}
//           />
//         ))}
//       </div>

//       <section ref={heroRef} className="relative h-[180vh] snap-start">
//         <div className="sticky top-0 h-screen w-full overflow-hidden">
//           <motion.div
//             style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.08]) }}
//             className="absolute inset-0"
//           >
//             <Image
//               src="/pinnaclelab/microbiology/3x3_cultures.jpg"
//               alt="Microbiology Hero"
//               layout="fill"
//               objectFit="cover"
//               className="brightness-50"
//               priority
//             />
//           </motion.div>
//           <motion.div
//             style={{ opacity: fadeOut }}
//             className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10"
//           >
//             <motion.h1
//               style={{ opacity: titleOpacity }}
//               className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl"
//             >
//               Unveil the Microscopic World
//             </motion.h1>
//             <motion.p
//               style={{ opacity: subtitleOpacity }}
//               className="mt-4 text-lg md:text-xl text-white max-w-3xl"
//             >
//               Scroll to uncover how we analyze bacteria, fungi, and allergens to protect your indoor health.
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       <section className="h-screen flex items-center justify-center px-6 bg-white snap-start">
//         <motion.div
//           initial={{ y: 60, opacity: 0 }}
//           whileInView={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-6xl text-center"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Microbiology Expertise</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { title: 'Bacteria', desc: 'Detecting E. coli, coliform, and airborne pathogens in water and air.', icon: '🦠' },
//               { title: 'Fungi', desc: 'Identifying mold spores like Chaetomium, Aspergillus, and Penicillium.', icon: '🍄' },
//               { title: 'Allergens', desc: 'Analyzing skin cells, pollen, fibers, and other non-fungal particulates.', icon: '🌿' },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 className="p-8 bg-teal-50 rounded-xl hover:scale-105 transition-transform"
//                 whileHover={{ boxShadow: '0 6px 24px rgba(0,0,0,0.15)' }}
//               >
//                 <span className="text-5xl">{item.icon}</span>
//                 <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
//                 <p className="text-gray-600 mt-3">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       <section className="h-screen flex items-center justify-center px-6 bg-navy-800 text-white snap-start">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="max-w-6xl w-full"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Non-Fungal Particulates</h2>
//           <div className="flex justify-center mb-6">
//             <button
//               className={`px-4 py-2 rounded-l-lg ${chartMode === 'indoor' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-800'}`}
//               onClick={() => setChartMode('indoor')}
//             >
//               Indoor
//             </button>
//             <button
//               className={`px-4 py-2 rounded-r-lg ${chartMode === 'outdoor' ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-800'}`}
//               onClick={() => setChartMode('outdoor')}
//             >
//               Outdoor
//             </button>
//           </div>
//           <div className="bg-white p-8 rounded-xl">
           
        
//           </div>
//           <p className="text-center mt-4 text-gray-300 text-sm">
//             Toggle to compare indoor vs. outdoor levels. Elevated indoor levels may signal contamination.
//           </p>
//         </motion.div>
//       </section>

//       <section className="relative h-screen snap-start bg-gray-50">
//         <Image
//           src="/pinnaclelab/microbiology/Culture_2.jpg"
//           alt="Culture Petri Dish"
//           layout="fill"
//           objectFit="cover"
//           className="brightness-50"
//         />
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <div className="bg-white/95 p-8 rounded-xl max-w-2xl text-center">
//             <h2 className="text-3xl font-bold mb-4">Air & Surface Cultures</h2>
//             <p className="text-gray-600 mb-6">
//               Culture plates reveal viable bacteria and fungi, identifying hidden contamination sources.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="bg-teal-600 text-white px-6 py-2 rounded-full"
//               onClick={() => toggleCard(1)}
//               aria-expanded={expandedCard === 1}
//             >
//               {expandedCard === 1 ? 'Hide Steps' : 'View Sampling Steps'}
//             </motion.button>
//             {expandedCard === 1 && (
//               <motion.div
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: 'auto', opacity: 1 }}
//                 className="mt-6 text-left text-gray-700"
//               >
//                 <ul className="list-disc pl-6 space-y-3">
//                   <li>Use a calibrated air sampler (e.g., Andersen, 28.3 L/min) at 3–5 ft height.</li>
//                   <li>Load sterile agar plate (MEA, DG18), sample for 5–10 min, then seal.</li>
//                   <li>For surfaces, swab 10x10 cm area with sterile tools; note area if different.</li>
//                   <li>Calculate CFU/m³ (air) or CFU/cm² (surface) using colony counts.</li>
//                 </ul>
//               </motion.div>
//             )}
//           </div>
//         </motion.div>
//       </section>

//       <section className="relative h-screen snap-start bg-navy-800">
//         <Image
//           src="/pinnaclelab/microbiology/coliert_test_reactions2.jpg"
//           alt="Water Bacteria Test"
//           layout="fill"
//           objectFit="cover"
//           className="brightness-50"
//         />
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <div className="bg-white/95 p-8 rounded-xl max-w-2xl text-center">
//             <h2 className="text-3xl font-bold mb-4">Water Bacteria Testing</h2>
//             <p className="text-gray-600 mb-6">
//               Colilert tests detect coliform and E. coli in water within 24 hours, ensuring safety.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="bg-teal-600 text-white px-6 py-2 rounded-full"
//               onClick={() => toggleCard(2)}
//               aria-expanded={expandedCard === 2}
//             >
//               {expandedCard === 2 ? 'Hide Details' : 'View Test Details'}
//             </motion.button>
//             {expandedCard === 2 && (
//               <motion.div
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: 'auto', opacity: 1 }}
//                 className="mt-6 text-left text-gray-700"
//               >
//                 <ul className="list-disc pl-6 space-y-3">
//                   <li>Collect 100 mL in a sterile bottle with dechlorinator; don’t rinse.</li>
//                   <li>Add Colilert reagent, incubate for 24 hours at 35°C.</li>
//                   <li>Yellow color indicates coliform; UV fluorescence confirms E. coli.</li>
//                   <li>Test within 6 hours or refrigerate to maintain accuracy.</li>
//                 </ul>
//               </motion.div>
//             )}
//           </div>
//         </motion.div>
//       </section>

//       <section className="relative h-screen snap-start bg-gray-50">
//         <Image
//           src="/pinnaclelab/microbiology/Chaetomium1.jpg"
//           alt="Chaetomium Spores"
//           layout="fill"
//           objectFit="cover"
//           className="brightness-50"
//         />
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <div className="bg-white/95 p-8 rounded-xl max-w-2xl text-center">
//             <h2 className="text-3xl font-bold mb-4">Spotting Chaetomium</h2>
//             <p className="text-gray-600 mb-6">
//               Dark colonies of Chaetomium often signal water damage, detected via culture or microscopy.
//             </p>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="bg-teal-600 text-white px-6 py-2 rounded-full"
//               onClick={() => toggleCard(3)}
//               aria-expanded={expandedCard === 3}
//             >
//               {expandedCard === 3 ? 'Hide Details' : 'View Mold Details'}
//             </motion.button>
//             {expandedCard === 3 && (
//               <motion.div
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: 'auto', opacity: 1 }}
//                 className="mt-6 text-left text-gray-700"
//               >
//                 <ul className="list-disc pl-6 space-y-3">
//                   <li>Common after flooding or leaks, thrives in damp environments.</li>
//                   <li>Identified by dark, perithecial colonies in culture samples.</li>
//                   <li>Also detected via direct microscopy for non-viable spores.</li>
//                   <li>Indicates need for moisture remediation to prevent growth.</li>
//                 </ul>
//               </motion.div>
//             )}
//           </div>
//         </motion.div>
//       </section>

//       <section className="py-24 px-6 bg-white snap-start">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="max-w-6xl mx-auto"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Airborne Allergens Gallery</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               { src: '/pinnaclelab/microbiology/Skin Cells1.jpg', alt: 'Skin Cells', label: 'Skin Cells' },
//               { src: '/pinnaclelab/microbiology/Fiberglass1.jpg', alt: 'Fiberglass', label: 'Fiberglass' },
//               { src: '/pinnaclelab/microbiology/Non_fungal_2.jpg', alt: 'Debris', label: 'Debris' },
//               { src: '/pinnaclelab/microbiology/Synthetic Fibers3.jpg', alt: 'Fibers', label: 'Synthetic Fibers' },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 className="relative rounded-lg overflow-hidden"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <Image
//                   src={item.src}
//                   alt={item.alt}
//                   width={300}
//                   height={200}
//                   className="rounded-md"
//                   sizes="(max-width: 768px) 50vw, 25vw"
//                 />
//                 <div className="absolute bottom-0 w-full bg-black/70 text-white text-center py-2">
//                   {item.label}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </section>

//       <section className="relative h-[80vh] snap-start">
//         <Image
//           src="/pinnaclelab/microbiology/Non_fungal_3.jpg"
//           alt="Microscopic View"
//           layout="fill"
//           objectFit="cover"
//           className="brightness-50"
//         />
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
//         >
//           <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-2xl max-w-3xl">
//             Decode your indoor environment with precision microbiology.
//           </h3>
//           <Link href="/contact">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="mt-8 bg-teal-600 text-white px-8 py-3 rounded-full text-lg"
//               aria-label="Contact us for microbiology services"
//             >
//               Get in Touch
//             </motion.button>
//           </Link>
//         </motion.div>
//       </section>
//     </main>
//   );
// };

// export default MicrobiologyPage;









// 'use client';

// import React, { useRef, useState, useEffect } from 'react';
// import Image from 'next/image';
// import { motion, useScroll, useTransform } from 'framer-motion';
// import Link from 'next/link';

// const MicrobiologyPage = () => {
//   const heroRef = useRef(null);
//   const cycleRef = useRef(null);
//   const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
//   const cycleScroll = useScroll({ target: cycleRef, offset: ['start end', 'end start'] });

//   const titleX = useTransform(scrollYProgress, [0, 0.2], [-100, 0]);
//   const subtitleX = useTransform(scrollYProgress, [0.2, 0.4], [100, 0]);
//   const heroOpacity = useTransform(scrollYProgress, [0.6, 0.8], [1, 0]);

//   const [activeCard, setActiveCard] = useState(0);
//   const cards = [
//     { title: 'Aspergillus', desc: 'Common mold in damp areas, detected via culture.', color: 'bg-teal-600' },
//     { title: 'Chaetomium', desc: 'Signals water damage, forms dark colonies.', color: 'bg-blue-600' },
//     { title: 'Penicillium', desc: 'Airborne mold, often in HVAC systems.', color: 'bg-purple-600' },
//   ];

//   useEffect(() => {
//     const unsubscribe = cycleScroll.scrollYProgress.onChange((v) => {
//       const index = Math.floor(v * cards.length) % cards.length;
//       setActiveCard(index);
//     });
//     return () => unsubscribe();
//   }, []);

//   const indoorParticulateData = {
//     labels: ['Skin Cells', 'Cellulose Fibers', 'Synthetic Fibers', 'Fiberglass', 'Pollen'],
//     datasets: [
//       { label: 'Clean Indoor (particles/m³)', data: [300, 200, 100, 50, 500], backgroundColor: '#2DD4BF' },
//       { label: 'Elevated Range (particles/m³)', data: [1000, 500, 300, 100, 1000], backgroundColor: '#F87171' },
//     ],
//   };

//   return (
//     <main className="bg-gray-50 text-gray-900 font-sans overflow-x-hidden relative font-inter">
//       <section ref={heroRef} className="relative h-[120vh]">
//         <motion.div
//           style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]) }}
//           className="absolute inset-0"
//         >
//           <Image
//             src="/pinnaclelab/microbiology/3x3_cultures.jpg"
//             alt="Microbiology Hero"
//             layout="fill"
//             objectFit="cover"
//             className="brightness-50"
//             priority
//           />
//         </motion.div>
//         <motion.div
//           style={{ opacity: heroOpacity }}
//           className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
//         >
//           <motion.h1
//             style={{ x: titleX }}
//             className="text-4xl md:text-6xl font-bold text-white drop-shadow-2xl"
//           >
//             Explore the Unseen
//           </motion.h1>
//           <motion.p
//             style={{ x: subtitleX }}
//             className="mt-4 text-lg md:text-xl text-white max-w-3xl"
//           >
//             Dive into our microbiology services to uncover bacteria, fungi, and allergens affecting your environment.
//           </motion.p>
//         </motion.div>
//       </section>

//       <section className="py-24 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             initial={{ x: -200, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-3xl md:text-4xl font-bold text-center mb-12"
//           >
//             What We Analyze
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { title: 'Bacteria', desc: 'E. coli, coliform, and airborne pathogens in water and air.', icon: '🦠' },
//               { title: 'Fungi', desc: 'Mold spores like Aspergillus, Chaetomium, and Penicillium.', icon: '🍄' },
//               { title: 'Allergens', desc: 'Skin cells, pollen, fibers, and other particulates.', icon: '🌿' },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ y: 60, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, delay: i * 0.2 }}
//                 className="p-8 bg-teal-50 rounded-xl hover:scale-105 transition-transform"
//                 whileHover={{ boxShadow: '0 6px 24px rgba(0,0,0,0.15)' }}
//               >
//                 <span className="text-5xl">{item.icon}</span>
//                 <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
//                 <p className="text-gray-600 mt-3">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-24 px-6 bg-navy-800 text-white">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             initial={{ x: 200, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-3xl md:text-4xl font-bold text-center mb-12"
//           >
//             Non-Fungal Particulates
//           </motion.h2>
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             className="bg-white p-8 rounded-xl"
//           >
          

        
//           </motion.div>
//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mt-6 text-gray-300 text-sm"
//           >
//             High levels may indicate poor filtration or contamination sources like HVAC breaches.
//           </motion.p>
//         </div>
//       </section>

//       <section ref={cycleRef} className="relative h-[100vh] bg-gray-50">
//         <div className="sticky top-0 h-screen flex items-center justify-center">
//           <div className="relative w-full max-w-4xl h-96">
//             {cards.map((card, i) => (
//               <motion.div
//                 key={i}
//                 className={`absolute inset-0 p-8 rounded-xl ${card.color} text-white flex flex-col justify-center items-center transition-opacity duration-500`}
//                 style={{
//                   opacity: activeCard === i ? 1 : 0.3,
//                   zIndex: activeCard === i ? 10 : 1,
//                   transform: activeCard === i ? 'scale(1) translateY(0)' : 'scale(0.9) translateY(20px)',
//                 }}
//               >
//                 <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
//                 <p className="text-center">{card.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-24 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             initial={{ x: -200, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-3xl md:text-4xl font-bold text-center mb-12"
//           >
//             Culture Sampling
//           </motion.h2>
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             className="relative"
//           >
//             <Image
//               src="/pinnaclelab/microbiology/Culture_2.jpg"
//               alt="Culture Petri Dish"
//               width={1200}
//               height={600}
//               className="rounded-xl brightness-75"
//             />
//             <motion.div
//               initial={{ x: 200, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white/95 p-6 rounded-xl max-w-md text-left"
//             >
//               <h3 className="text-xl font-semibold mb-4">Air & Surface Cultures</h3>
//               <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                 <li>Calibrated air sampler at 28.3 L/min for 5–10 min.</li>
//                 <li>Sterile agar plates (MEA, DG18) for viable colonies.</li>
//                 <li>Surface swabs over 10x10 cm for precise CFU/cm².</li>
//                 <li>Detects Aspergillus, Chaetomium, and more.</li>
//               </ul>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-24 px-6 bg-navy-800 text-white">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             initial={{ x: 200, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-3xl md:text-4xl font-bold text-center mb-12"
//           >
//             Water Bacteria Testing
//           </motion.h2>
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 1 }}
//             className="relative"
//           >
//             <Image
//               src="/pinnaclelab/microbiology/coliert_test_reactions2.jpg"
//               alt="Water Bacteria Test"
//               width={1200}
//               height={600}
//               className="rounded-xl brightness-75"
//             />
//             <motion.div
//               initial={{ x: -200, opacity: 0 }}
//               whileInView={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white/95 p-6 rounded-xl max-w-md text-left"
//             >
//               <h3 className="text-xl font-semibold mb-4">Colilert Testing</h3>
//               <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                 <li>100 mL sterile sample with dechlorinator.</li>
//                 <li>24-hour incubation for coliform/E. coli detection.</li>
//                 <li>Yellow for coliform; UV fluorescence for E. coli.</li>
//                 <li>Test within 6 hours for reliable results.</li>
//               </ul>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-24 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <motion.h2
//             initial={{ x: -200, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-3xl md:text-4xl font-bold text-center mb-12"
//           >
//             Airborne Allergens Gallery
//           </motion.h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               { src: '/pinnaclelab/microbiology/Skin Cells1.jpg', alt: 'Skin Cells', label: 'Skin Cells' },
//               { src: '/pinnaclelab/microbiology/Fiberglass1.jpg', alt: 'Fiberglass', label: 'Fiberglass' },
//               { src: '/pinnaclelab/microbiology/Non_fungal_2.jpg', alt: 'Debris', label: 'Debris' },
//               { src: '/pinnaclelab/microbiology/Synthetic Fibers3.jpg', alt: 'Fibers', label: 'Synthetic Fibers' },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ y: 60, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, delay: i * 0.2 }}
//                 className="relative rounded-lg overflow-hidden"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <Image
//                   src={item.src}
//                   alt={item.alt}
//                   width={300}
//                   height={200}
//                   className="rounded-md"
//                   sizes="(max-width: 768px) 50vw, 25vw"
//                 />
//                 <div className="absolute bottom-0 w-full bg-black/70 text-white text-center py-2">
//                   {item.label}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="relative h-[80vh]">
//         <Image
//           src="/pinnaclelab/microbiology/Non_fungal_3.jpg"
//           alt="Microscopic View"
//           layout="fill"
//           objectFit="cover"
//           className="brightness-50"
//         />
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
//         >
//           <motion.h3
//             initial={{ x: 200, opacity: 0 }}
//             whileInView={{ x: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-3xl md:text-4xl font-bold text-white drop-shadow-2xl max-w-3xl"
//           >
//             Protect your space with cutting-edge microbiology testing.
//           </motion.h3>
//           <Link href="/contact">
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               className="mt-8 bg-teal-600 text-white px-8 py-3 rounded-full text-lg"
//               aria-label="Contact us for microbiology services"
//             >
//               Contact Us
//             </motion.button>
//           </Link>
//         </motion.div>
//       </section>
//     </main>
//   );
// };

// export default MicrobiologyPage;