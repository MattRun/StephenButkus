// "use client";

// import Image from "next/image";
// import React from "react";
// import Sidebar from "../Sidebar";

// const moldServices = [
//   {
//     title: "Direct Fungal (Air)",
//     description: `The analysis of air cassettes for non-viable fungal spores provides rapid qualitative (identification) and quantitative (spore enumeration) assessment of fungal taxa present in samples submitted for analysis. Following ASTM D7391-20, spore identification and quantitation are performed using a compound microscope equipped for light microscopy with a magnification capability of 20x to 1000x. The final lab report consists of a list of identified taxa and their associated concentrations (spores per cubic meter of air) calculated separately for each taxon. MEDIA ANALYZED: Allergenco-D, Allergenco-D Positrack, Air-O-Cell, Cyclex-D, and Micro 5 Microcell.`,
//   },
//   {
//     title: "Direct Fungal Analysis (Swab, Tape Lift, Bulk)",
//     description: `Furthermore, when analyzing the tape lifts and swabs for non-viable fungal spores provides rapid qualitative (identification) and semi-quantitative (fungal load categories by percentage) assessment of fungal taxa present in samples submitted for analysis. Following ASTM D7658-17, spore identification and quantitation are performed using a compound microscope equipped for light microscopy with a magnification capability of 20x to 1000x. The concluding lab report consists of a list of identified taxa and their associated fungal loading category determined separately for each taxon. MEDIA ANALYZED: Tape Lifts, Mold Swabs.`,
//   },
// ];

// const MoldPage = () => {
//   return (
//     <div className="relative bg-gradient-to-b from-[#16436F] to-[#10b1b4] text-gray-100">
//       {/* Banner Section */}
//       <div className="relative bg-[#10b1b4] text-white py-20">
//         <Image
//           src="/pinnaclelab/Sample Photos/chaetomium_spores.jpg"
//           alt="Mold Testing Banner"
//           layout="fill"
//           objectFit="cover"
//           className="absolute inset-0 opacity-50"
//         />
//         <div className="relative max-w-4xl mx-auto text-center z-10">
//           <h1 className="text-4xl font-bold">Your Go-To Mold Testing Lab!</h1>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="max-w-6xl mx-auto px-6 py-8">
//         <div className="flex flex-col md:flex-row gap-6">
//           {/* Sidebar */}
//           <Sidebar activeService="MOLD" />

//           {/* Main Content */}
//           <main className="w-full md:w-3/4">
//             {/* Mold Section */}
//             <section>
//               <h2 className="text-3xl font-bold mb-6 text-gray-100">MOLD</h2>
//               <Image
//                 src="/pinnaclelab/Sample Photos/chaetomium_spores.jpg"
//                 alt="Mold Testing"
//                 width={700}
//                 height={400}
//                 className="rounded-lg shadow-lg mb-6"
//               />
// <p className="text-lg space-y-2">
//   At <span className="font-semibold text-[#10b1b4]">Pinnacle Laboratory</span>, we understand this complex organism. Our expert team provides advanced <span className="font-semibold">mold analysis</span>, identifying various <span className="font-semibold">spore types</span> — including those capable of producing <span className="font-semibold">mycotoxins</span>.
// </p>

// <p className="text-lg mt-2">
//   Like plants spreading seeds, molds release spores that land on moist areas, causing potential harm to:
// </p>

// <ul className="list-disc list-inside text-lg mt-2 space-y-1">
//   <li><span className="font-semibold">Building structures</span></li>
//   <li><span className="font-semibold">Indoor air quality</span></li>
//   <li><span className="font-semibold">Human health</span></li>
// </ul>

// <p className="text-lg mt-4">
//   Choose <span className="font-semibold text-[#10b1b4]">Pinnacle Laboratory</span> for a healthier, safer future — built on accurate results and trusted expertise.
// </p>

//             </section>

//             {/* Services Section */}
//             <section className="mt-12">
//               <h3 className="text-3xl font-bold text-gray-100 mb-8 border-b-2 border-[#10b1b4] pb-2">
//                 Our Mold Services
//               </h3>
//               {moldServices.map((service, index) => (
//                 <div
//                   key={index}
//                   className="mb-10 p-6 rounded-lg shadow-md bg-[#1E5A81] border-l-4 border-[#10b1b4]"
//                 >
//                   <h4 className="text-xl font-semibold text-[#10b1b4] mb-3">
//                     {service.title}
//                   </h4>
//                   <p className="text-gray-100 text-sm leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div>
//               ))}
//             </section>

//             {/* Analytical Process */}
//             <div className="mt-12">
//               <h3 className="text-2xl font-bold mb-6">Our Analytical Process</h3>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//                 <div className="flex flex-col items-center">
//                   <div className="rounded-full bg-blue-100 p-6">
//                     <span className="text-2xl font-bold text-[#10b1b4]">01</span>
//                   </div>
//                   <h4 className="mt-4 text-lg font-medium">Initial Analysis</h4>
//                   <p className="text-sm text-gray-700">
//                     We begin with a thorough initial analysis of submitted samples.
//                   </p>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <div className="rounded-full bg-blue-100 p-6">
//                     <span className="text-2xl font-bold text-[#10b1b4]">02</span>
//                   </div>
//                   <h4 className="mt-4 text-lg font-medium">Random QC Sampling</h4>
//                   <p className="text-sm text-gray-700">
//                     We employ random QC sampling for accuracy and precision.
//                   </p>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <div className="rounded-full bg-blue-100 p-6">
//                     <span className="text-2xl font-bold text-[#10b1b4]">03</span>
//                   </div>
//                   <h4 className="mt-4 text-lg font-medium">Generating Final Results</h4>
//                   <p className="text-sm text-gray-700">
//                     Final results are generated with detailed and precise reports.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* The Pinnacle Difference */}
//             <div className="mt-12">
//               <h3 className="text-2xl font-bold mb-4">The Pinnacle Difference</h3>
//               <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <li className="flex items-start gap-4">
//                   <span className="text-white">✔</span>
//                   <p className="text-sm text-gray-700">
//                     500,000+ Mold Samples Analyzed in Southern California.
//                   </p>
//                 </li>
//                 <li className="flex items-start gap-4">
//                   <span className="text-white">✔</span>
//                   <p className="text-sm text-gray-700">
//                     Direct fungal examination of multiple media types: air cassette,
//                     tape lift, swab, bulk samples.
//                   </p>
//                 </li>
//                 <li className="flex items-start gap-4">
//                   <span className="text-white">✔</span>
//                   <p className="text-sm text-gray-700">
//                     Quick turnaround times (Same Day, Next Business Day, Two Business Days).
//                   </p>
//                 </li>
//               </ul>
//             </div>

//             {/* Accreditation */}
//             <div className="mt-12">
//               <h3 className="text-2xl font-bold mb-4">Accreditation</h3>
//               <div className="flex flex-col md:flex-row items-center gap-6">
//                 <Image
//                   src="/pinnaclelab/Partners/225542_EMLAP_Symbol_2023_04_26-MOD.png"
//                   alt="AIHA Environmental Microbiology"
//                   width={150}
//                   height={150}
//                   className="object-contain"
//                 />
//                 <p className="text-sm text-gray-100">
//                   Asbestos Fiber Analysis – EPA Method 600/R-93/116 &amp; 40 CFR Appendix E to
//                   Subpart E of Part 763.
//                 </p>
//               </div>
//             </div>

//             {/* Customer Reviews */}
// <div className="mt-12 text-center">
//   <h3 className="text-2xl font-bold mb-4">Look at What Our Customers Say!</h3>
//   <a
//     href="https://www.google.com/search?q=google+reviews+pinnacle+laboratory&oq=google+reviews+pinnacle+laboratory&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEIODExOGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x80c2b5da8ee1c1b7:0x5679441e98c3a24,1,,,,"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     <Image
//       src="/png-clipart-google-customer-review-business-company-google-search-engine-optimization-company-Photoroom.png"
//       alt="Google Reviews"
//       width={200}
//       height={50}
//       className="mx-auto hover:scale-110 transition-transform duration-200"
//     />
//   </a>
// </div>

//           </main>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MoldPage;





// Old Mold page to be replaced by Microbiology

































































































// "use client";

// import Image from "next/image";
// import React, { useState } from "react";
// import Sidebar from "../Sidebar";
// import { AnimatePresence, motion } from "framer-motion";

// const microbiologyDetails = [
//   {
//     key: "nonFungal",
//     title: "Non-Fungal Particulates",
//     detailed: (
//       <div className="p-6 text-white">
//         <h2 className="text-4xl font-bold mb-4">What Are Non-Fungal Particulates?</h2>
//         <p className="mb-2">Think of non-fungal particulates as the invisible clutter in your air — skin cells, fibers, pollen, and more.</p>
//         <p className="mb-4">We use Air-O-Cell or Allergenco-D cassettes to pull in air and observe what’s floating around with a microscope.</p>
//         <Image
//           src="/pinnaclelab/microbiology/Skin Cells1.jpg"
//           alt="Skin Cells"
//           width={700}
//           height={400}
//           className="rounded-md shadow-md mb-4"
//         />
//         <p className="mb-2">These particles often come from everyday activities like cleaning, cooking, or even just walking around.</p>
//         <Image
//           src="/pinnaclelab/microbiology/algae1.jpg"
//           alt="Algae under microscope"
//           width={700}
//           height={400}
//           className="rounded-md shadow-md"
//         />
//       </div>
//     ),
//   },
//   {
//     key: "culture",
//     title: "Air & Surface Cultures",
//     detailed: (
//       <div className="p-6 text-white">
//         <h2 className="text-4xl font-bold mb-4">How We Grow Cultures</h2>
//         <p className="mb-2">Imagine catching mold spores and giving them a cozy bed (agar) to grow in! That’s what we do with air and surface samples.</p>
//         <ul className="list-disc list-inside space-y-2">
//           <li>Use Andersen/BioStage samplers with MEA or DG18 media.</li>
//           <li>Swabs or tape lifts for surfaces (10×10 cm area noted).</li>
//           <li>Results reported as CFU/m³ (air) or CFU/cm² (surface).</li>
//           <li>Common findings: Aspergillus, Penicillium, Chaetomium, Trichoderma, Stachybotrys.</li>
//         </ul>
//         <Image
//           src="/pinnaclelab/microbiology/Chaetomium1.jpg"
//           alt="Culture Sample"
//           width={700}
//           height={400}
//           className="rounded-md shadow-md mt-4"
//         />
//         <p className="mt-4">Plates must be handled carefully and incubated properly to grow viable colonies.</p>
//         <Image
//           src="/pinnaclelab/microbiology/Culture_3.jpg"
//           alt="Culture growth close-up"
//           width={700}
//           height={400}
//           className="rounded-md shadow-md"
//         />
//       </div>
//     ),
//   },
//   {
//     key: "colilert",
//     title: "Water Bacteria (Colilert)",
//     detailed: (
//       <div className="p-6 text-white">
//         <h2 className="text-4xl font-bold mb-4">How Colilert Works</h2>
//         <p className="mb-2">Pour your water sample into our reagent-filled bottle. Wait 24 hours.</p>
//         <p className="mb-2">If it turns yellow, you've got total coliforms. Shine UV light? If it glows — E. coli.</p>
//         <Image
//           src="/pinnaclelab/microbiology/coliert_test_reactions2.jpg"
//           alt="Colilert Reaction"
//           width={700}
//           height={400}
//           className="rounded-md shadow-md mt-4"
//         />
//         <p className="mt-4">Colilert is ideal for inspectors who need quick, visual confirmation of bacterial presence in the field.</p>
//         <Image
//           src="/pinnaclelab/microbiology/coliert_test_reactions.jpg"
//           alt="Colilert Instruction Steps"
//           width={700}
//           height={400}
//           className="rounded-md shadow-md"
//         />
//       </div>
//     ),
//   },
//   {
//     key: "baseline",
//     title: "Baseline Ranges",
//     detailed: (
//       <div className="p-6 text-white">
//         <h2 className="text-4xl font-bold mb-4">How We Compare Results</h2>
//         <p className="mb-2">We measure your sample levels and compare them to what's normal — both indoor baselines and outdoor control samples.</p>
//         <Image
//           src="/pinnaclelab/microbiology/Non_fungal_2.jpg"
//           alt="Baseline Chart"
//           width={700}
//           height={400}
//           className="rounded-md shadow-md mt-4"
//         />
//         <p className="mt-4">Elevated readings don’t always mean danger, but they help us detect filtration issues, construction debris, or abnormal contamination patterns.</p>
//         <Image
//           src="/pinnaclelab/microbiology/Fiberglass1.jpg"
//           alt="Fiberglass Microscopy"
//           width={700}
//           height={400}
//           className="rounded-md shadow-md"
//         />
//       </div>
//     ),
//   },
// ];

// const MicrobiologyPage = () => {
//   const [activeDetail, setActiveDetail] = useState<string | null>(null);
//   const [currentStep, setCurrentStep] = useState(0);

//   const handleNext = () => {
//     if (currentStep < microbiologyDetails.length - 1) {
//       setCurrentStep(currentStep + 1);
//       setActiveDetail(microbiologyDetails[currentStep + 1].key);
//     }
//   };

//   const handlePrev = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//       setActiveDetail(microbiologyDetails[currentStep - 1].key);
//     }
//   };

//   return (
//     <div className="relative bg-gradient-to-b from-[#16436F] to-[#10b1b4] text-gray-100">
//       {/* Banner Section */}
//       <div className="relative bg-[#10b1b4] text-white py-20">
//         <Image
//           src="/pinnaclelab/microbiology/Chaetomium1.jpg"
//           alt="Microbiology Banner"
//           layout="fill"
//           objectFit="cover"
//           className="absolute inset-0 opacity-50"
//         />
//         <div className="relative max-w-4xl mx-auto text-center z-10">
//           <h1 className="text-4xl font-bold">Explore Our Microbiology Services</h1>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="max-w-6xl mx-auto px-6 py-8">
//         <div className="flex flex-col md:flex-row gap-6">
//           {/* Sidebar */}
//           <Sidebar activeService="MICROBIOLOGY" />

//           {/* Main Content */}
//           <main className="w-full md:w-3/4">
//             {/* Intro */}
//             <section>
//               <h2 className="text-3xl font-bold mb-6">What We Analyze</h2>
//               <p className="text-lg">
//                 Pinnacle Laboratory offers a suite of microbiological services to identify airborne allergens, non-fungal particles, viable spores, and bacteria in environmental samples. We utilize advanced air and surface culture methods to uncover what you can’t see — and help you take action.
//               </p>
//             </section>

//             {/* Non-Fungal Particulates */}
//             <section className="mt-12">
//               <h3 className="text-2xl font-bold text-cyan-200 mb-4">Non-Fungal Particulates</h3>
//               <p className="mb-4 text-white">
//                 Non-fungal testing identifies background debris found in indoor environments, including skin cells, cellulose fibers, fiberglass, pollen, insect fragments, and more. These particulates affect air quality even when mold isn’t detected.
//               </p>
//               <Image
//                 src="/pinnaclelab/microbiology/Skin Cells1.jpg"
//                 alt="Skin Cells"
//                 width={700}
//                 height={400}
//                 className="rounded-md shadow-md mb-6"
//               />
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => {
//                   setActiveDetail("nonFungal");
//                   setCurrentStep(0);
//                 }}
//                 className="mt-2 px-6 py-3 text-white bg-cyan-600 rounded-lg font-semibold shadow hover:bg-cyan-700 transition"
//               >
//                 Explore More
//               </motion.button>
//             </section>

//             {/* Culture Sampling */}
//             <section className="mt-12">
//               <h3 className="text-2xl font-bold text-cyan-200 mb-4">Air & Surface Cultures</h3>
//               <ul className="list-disc list-inside text-lg space-y-2">
//                 <li>Air samples collected with Andersen or BioStage samplers using MEA or DG18 media.</li>
//                 <li>Surface samples analyzed with swabs or tape lifts (10×10 cm or noted).</li>
//                 <li>Reported in CFU/m³ or CFU/cm² depending on sample type.</li>
//                 <li>Turnaround: Deliver to lab within 24 hrs. Keep room temperature.</li>
//                 <li>Spore types reported include: Aspergillus, Penicillium, Chaetomium, Trichoderma, Stachybotrys, and others.</li>
//               </ul>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => {
//                   setActiveDetail("culture");
//                   setCurrentStep(1);
//                 }}
//                 className="mt-4 px-6 py-3 text-white bg-cyan-600 rounded-lg font-semibold shadow hover:bg-cyan-700 transition"
//               >
//                 Explore More
//               </motion.button>
//             </section>

//             {/* Water Bacteria Testing */}
//             <section className="mt-12">
//               <h3 className="text-2xl font-bold text-cyan-200 mb-4">Water Bacteria (Colilert)</h3>
//               <p className="mb-4">
//                 Our Colilert presence/absence test identifies total coliforms and E. coli with simple, color-reactive results. Samples should be tested within 6 hours of collection for best accuracy.
//               </p>
//               <ul className="list-disc list-inside text-lg space-y-2">
//                 <li>Accepted method for field screening and regulatory testing</li>
//                 <li>Visual color change indicates bacterial presence</li>
//                 <li>Results available in 24 hours</li>
//               </ul>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => {
//                   setActiveDetail("colilert");
//                   setCurrentStep(2);
//                 }}
//                 className="mt-4 px-6 py-3 text-white bg-cyan-600 rounded-lg font-semibold shadow hover:bg-cyan-700 transition"
//               >
//                 Explore More
//               </motion.button>
//             </section>

//             {/* Particle Baselines */}
//             <section className="mt-12">
//               <h3 className="text-2xl font-bold text-cyan-200 mb-4">Baseline Ranges</h3>
//               <p>
//                 We interpret findings by comparing indoor samples with established baseline ranges for non-fungal particulates and allergens. Outdoor controls are used when possible for more accurate comparisons.
//               </p>
//               <Image
//                 src="/pinnaclelab/microbiology/Non_fungal_2.jpg"
//                 alt="Baseline Comparison"
//                 width={700}
//                 height={400}
//                 className="rounded-md shadow-md mt-4"
//               />
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => {
//                   setActiveDetail("baseline");
//                   setCurrentStep(3);
//                 }}
//                 className="mt-4 px-6 py-3 text-white bg-cyan-600 rounded-lg font-semibold shadow hover:bg-cyan-700 transition"
//               >
//                 Explore More
//               </motion.button>
//             </section>

//             {/* The Pinnacle Difference */}
//             <section className="mt-12">
//               <h3 className="text-2xl font-bold mb-4">Why Choose Pinnacle Microbiology?</h3>
//               <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <li className="flex items-start gap-4">
//                   <span className="text-white">✔</span>
//                   <p className="text-sm text-gray-100">Testing performed by trained microbiologists using AIHA-recommended methods.</p>
//                 </li>
//                 <li className="flex items-start gap-4">
//                   <span className="text-white">✔</span>
//                   <p className="text-sm text-gray-100">Over 500,000 environmental samples analyzed across California.</p>
//                 </li>
//                 <li className="flex items-start gap-4">
//                   <span className="text-white">✔</span>
//                   <p className="text-sm text-gray-100">Rapid turnarounds and custom reporting tailored to your needs.</p>
//                 </li>
//               </ul>
//             </section>

//             {/* Accreditation */}
//             <section className="mt-12">
//               <h3 className="text-2xl font-bold mb-4">Accreditation</h3>
//               <div className="flex flex-col md:flex-row items-center gap-6">
//                 <Image
//                   src="/pinnaclelab/Partners/225542_EMLAP_Symbol_2023_04_26-MOD.png"
//                   alt="AIHA Environmental Microbiology"
//                   width={150}
//                   height={150}
//                   className="object-contain"
//                 />
//                 <p className="text-sm text-gray-100">
//                   Accredited for Environmental Microbiology analysis including fungal, bacterial, and allergen detection via air and surface sampling methods.
//                 </p>
//               </div>
//             </section>
//           </main>
//         </div>
//       </div>

//       {/* Slide-in Drawer */}
//       <AnimatePresence mode="wait">
//         {activeDetail && (
//           <motion.div
//             key={activeDetail}
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="fixed top-0 right-0 z-50 h-full w-full md:w-1/2 bg-[#16436F] shadow-xl overflow-y-auto"
//           >
//             <div className="flex justify-between items-center p-4 border-b border-white/10">
//               <h3 className="text-xl text-white font-semibold">
//                 {microbiologyDetails.find((d) => d.key === activeDetail)?.title}
//               </h3>
//               <button
//                 onClick={() => setActiveDetail(null)}
//                 className="text-white hover:text-cyan-300"
//               >
//                 ✕
//               </button>
//             </div>
//             <div className="p-6">
//               {microbiologyDetails.find((d) => d.key === activeDetail)?.detailed || null}
//             </div>
//             {/* Pagination Controls */}
//             <div className="p-6 border-t border-white/10 flex justify-between items-center">
//               <button
//                 onClick={handlePrev}
//                 disabled={currentStep === 0}
//                 className={`px-4 py-2 rounded-lg font-semibold ${
//                   currentStep === 0
//                     ? "bg-gray-600 cursor-not-allowed"
//                     : "bg-cyan-600 hover:bg-cyan-700 text-white"
//                 }`}
//               >
//                 Previous
//               </button>
//               <div className="flex items-center gap-2">
//                 {microbiologyDetails.map((_, index) => (
//                   <span
//                     key={index}
//                     className={`h-3 w-3 rounded-full ${
//                       index === currentStep ? "bg-cyan-600" : "bg-gray-400"
//                     }`}
//                   />
//                 ))}
//               </div>
//               <button
//                 onClick={handleNext}
//                 disabled={currentStep === microbiologyDetails.length - 1}
//                 className={`px-4 py-2 rounded-lg font-semibold ${
//                   currentStep === microbiologyDetails.length - 1
//                     ? "bg-gray-600 cursor-not-allowed"
//                     : "bg-cyan-600 hover:bg-cyan-700 text-white"
//                 }`}
//               >
//                 Next
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MicrobiologyPage;


























// "use client";

// import Image from "next/image";
// import React, { useState, useEffect } from "react";
// import Sidebar from "../Sidebar";
// import { AnimatePresence, motion } from "framer-motion";

// const microbiologyDetails = [
//   {
//     key: "nonFungal",
//     title: "Non-Fungal Particulates",
//     images: [
//       "/pinnaclelab/microbiology/stock/Pollen_Adobe_stock.jpeg",
//       "/pinnaclelab/microbiology/stock/Bee_AdobeStock.jpeg",
//       "/pinnaclelab/microbiology/stock/Dust_AdobeStock.jpeg",
//     ],
//     detailed: (
//       <div className="p-6 text-white">
//         <h2 className="text-4xl font-bold mb-4">What Are Non-Fungal Particulates?</h2>
//         <p className="mb-2">Think of non-fungal particulates as the invisible clutter in your air — skin cells, fibers, pollen, and more.</p>
//         <p className="mb-4">We use Air-O-Cell or Allergenco-D cassettes to pull in air and observe what’s floating around with a microscope.</p>
//         <h3 className="text-2xl font-bold mt-6 mb-4">What is Non-Fungal Particulate Analysis?</h3>
//         <p className="mb-4">Non-fungal particulate analysis is the microscopic identification of particles such as skin cells, synthetic fibers, cellulose fibers, pollen, insect parts, and other debris. It evaluates indoor air quality, contamination sources, or post-cleaning effectiveness.</p>
//         <h3 className="text-2xl font-bold mt-6 mb-4">What Types of Particles Can We Identify?</h3>
//         <ul className="list-disc list-inside text-lg space-y-2">
//           <li>Human and animal skin cells</li>
//           <li>Cellulose fibers (e.g., paper, wood, fabric)</li>
//           <li>Synthetic fibers (e.g., nylon, polyester)</li>
//           <li>Fiberglass</li>
//           <li>Starch</li>
//           <li>Human and animal hair</li>
//           <li>Algae</li>
//           <li>Pollen grains</li>
//           <li>Insect parts or dust mites</li>
//         </ul>
//         <h3 className="text-2xl font-bold mt-6 mb-4">What Does This Analysis Tell Me?</h3>
//         <p className="mb-4">Results provide a qualitative or semi-quantitative breakdown of debris types, helping:</p>
//         <ul className="list-disc list-inside text-lg space-y-2">
//           <li>Determine sources of dust or allergens</li>
//           <li>Assess cleaning effectiveness</li>
//           <li>Support post-remediation verification</li>
//           <li>Investigate occupant complaints in buildings</li>
//         </ul>
//         <h3 className="text-2xl font-bold mt-6 mb-4">Is This the Same as Mold Testing?</h3>
//         <p className="mb-4">No. Mold testing focuses on fungal spores or colonies, while non-fungal analysis targets other particles contributing to air quality issues or contamination, not fungal in nature.</p>
//       </div>
//     ),
//   },
//   {
//     key: "culture",
//     title: "Air & Surface Cultures (COMING SOON)",
//     images: [
//       "/pinnaclelab/microbiology/stock/Culture1_AdobeStock.jpeg",
//       "/pinnaclelab/microbiology/stock/Culture2_AdobeStock.jpeg",
//       "/pinnaclelab/microbiology/stock/Culture3_AdobeStock.jpeg",
//       "/pinnaclelab/microbiology/stock/Culture4_AdobeStock.jpeg",
//     ],
//     detailed: (
//       <div className="p-6 text-white">
//         <h2 className="text-4xl font-bold mb-4">How We Grow Cultures</h2>
//         <p className="mb-2">Imagine catching mold spores and giving them a cozy bed (agar) to grow in! That’s what we do with air and surface samples.</p>
//         <ul className="list-disc list-inside text-lg space-y-2">
//           <li>Use Andersen/BioStage samplers with MEA media.</li>
//           <li>Surface samples analyzed with swabs or bulk materials (4x4 in | 10×10 cm or noted).</li>
//           <li>Results reported as CFU/m³ (air) or CFU/cm² (surface).</li>
//           <li>Turnaround: Deliver to lab within 24 hrs. Keep room temperature.</li>
//           <li>Spore types reported include: Aspergillus, Penicillium, Chaetomium, Trichoderma, Stachybotrys, and others.</li>
//         </ul>
//         <h3 className="text-2xl font-bold mt-6 mb-4">What is Mold Culture Analysis?</h3>
//         <p className="mb-4">Mold culture analysis involves collecting samples (air, surface, or bulk) and incubating them on specialized media to promote mold growth. The resulting colonies are identified to determine types and levels of mold present.</p>
//         <h3 className="text-2xl font-bold mt-6 mb-4">How is Mold Culture Different from Spore Trap Analysis?</h3>
//         <p className="mb-4">Spore trap analysis detects airborne spores (dead or alive) using a microscope, while mold culture identifies viable mold that can grow under laboratory conditions, often to the species level. Cultures are useful for assessing active growth or health risks.</p>
//         <h3 className="text-2xl font-bold mt-6 mb-4">What Types of Samples Can Be Cultured for Mold?</h3>
//         <ul className="list-disc list-inside text-lg space-y-2">
//           <li>Air samples (using Andersen samplers or similar)</li>
//           <li>Surface swabs</li>
//           <li>Bulk materials (e.g., drywall, insulation, wood)</li>
//         </ul>
//         <h3 className="text-2xl font-bold mt-6 mb-4">How Long Does Mold Culture Testing Take?</h3>
//         <p className="mb-4">Typical incubation time is 5 to 7 days, though some slow-growing species may take up to 10 days. Preliminary results may be available sooner upon request.</p>
//         <h3 className="text-2xl font-bold mt-6 mb-4">Can Mold Cultures Tell if a Mold is Toxic or Dangerous?</h3>
//         <p className="mb-4">Culturing identifies mold types, which can suggest potential health risks (e.g., Stachybotrys chartarum is associated with mycotoxin production). However, toxicity must be confirmed via mycotoxin testing, not culturing alone.</p>
//         <h3 className="text-2xl font-bold mt-6 mb-4">Is Mold Culturing Better for Surfaces or Air?</h3>
//         <p className="mb-4">It depends on your goal: use air culturing for indoor air quality or HVAC contamination, and surface culturing for identifying active mold growth on building materials or furniture.</p>
//         <h3 className="text-2xl font-bold mt-6 mb-4">What is the Incubation Temperature for Mold Cultures?</h3>
//         <p className="mb-4">Mold cultures are typically incubated at 25–30°C (77–86°F) for 5 to 7 days, depending on the media and mold species expected. Some slow-growing or thermotolerant molds may require extended incubation or dual-temperature monitoring.</p>
//       </div>
//     ),
//   },
//   {
//     key: "colilert",
//     title: "Water Bacteria (Colilert) (COMING SOON)",
//     images: [
//       "/pinnaclelab/microbiology/stock/Coliert_Test_Reactions_CHATGPT.png",
//       "/pinnaclelab/microbiology/stock/Water_AdobeStock.jpeg",
//       "/pinnaclelab/microbiology/stock/Water2_AdobeStock.jpeg",
//     ],
//     detailed: (
//       <div className="p-6 text-white">
//         <h2 className="text-4xl font-bold mb-4">How Colilert Works</h2>
//         <p className="mb-2">Pour your water sample into our reagent-filled bottle. Wait 24 hours.</p>
//         <p className="mb-2">If it turns yellow, you've got total coliforms. Shine UV light? If it glows — E. coli.</p>
//         <h3 className="text-2xl font-bold mt-6 mb-4">What is Colilert® Analysis?</h3>
//         <p className="mb-4">Colilert® is a rapid, EPA-approved method for detecting Total Coliforms and Escherichia coli (E. coli) in water samples. It uses defined substrate technology and provides results within 24 hours, with color and fluorescence indicating bacterial presence.</p>
//         <h3 className="text-2xl font-bold mt-6 mb-4">What is the Turnaround Time for Test Results?</h3>
//         <p className="mb-4">
//           <strong>Colilert® (Coliform/E. coli):</strong> Results in 24-28 hours<br />
//           <strong>Culture-based microbial testing:</strong> Typically 7 days, with current media and conditions<br />
//           <strong>Fungal and Non-fungal microbial analysis:</strong> 1–5 days, depending on method and complexity<br />
//           Rush services may be available—contact us for details.
//         </p>
//         <h3 className="text-2xl font-bold mt-6 mb-4">Can You Perform Testing for Drinking Water Compliance?</h3>
//         <p className="mb-4">Yes, we offer Total Coliform and E. coli testing compliant with EPA and state drinking water standards.</p>
//         <h3 className="text-2xl font-bold mt-6 mb-4">What Happens if My Sample Tests Positive for E. coli or Total Coliforms?</h3>
//         <p className="mb-4">A positive result may indicate fecal contamination or water quality issues. For drinking water systems, this often triggers resampling and reporting to local or state regulatory authorities. We can assist with follow-up testing.</p>
//         <h3 className="text-2xl font-bold mt-6 mb-4">What is the Incubation Temperature for Colilert® Testing?</h3>
//         <p className="mb-4">Colilert samples are incubated at 35.0 ± 0.5°C (95°F) for 24 hours, in accordance with EPA Method 9223 B and Standard Methods, promoting selective growth of Total Coliforms and E. coli while inhibiting non-target organisms.</p>
//       </div>
//     ),
//   },
//   {
//     key: "baseline",
//     title: "Baseline Ranges",
//     images: [
//       "/pinnaclelab/microbiology/Non_fungal_2.jpg",
//       "/pinnaclelab/microbiology/Fiberglass1.jpg",
//       "/pinnaclelab/microbiology/stock/Baseline_Comparison_Adobe_stock.jpg",
//     ],
//     detailed: (
//       <div className="p-6 text-white">
//         <h2 className="text-4xl font-bold mb-4">How We Compare Results</h2>
//         <p className="mb-2">We measure your sample levels and compare them to what's normal — both indoor baselines and outdoor control samples.</p>
//         <p className="mt-4">Elevated readings don’t always mean danger, but they help us detect filtration issues, construction debris, or abnormal contamination patterns.</p>
//       </div>
//     ),
//   },
// ];

// const faqs = [
//   {
//     question: "How Should I Collect and Submit Samples?",
//     answer: "We provide sampling kits and instructions upon request. For water samples, sterile containers with sodium thiosulfate are typically required. For surface or air testing, we recommend contacting us for approved swab types or air sampling devices.",
//   },
//   {
//     question: "Can Rush Services Be Arranged?",
//     answer: "Yes, rush services may be available—contact us for details and availability.",
//   },
// ];

// const MicrobiologyPage = () => {
//   const [activeDetail, setActiveDetail] = useState<string | null>(null);
//   const [currentStep, setCurrentStep] = useState(0);
//   const [touchStart, setTouchStart] = useState<number | null>(null);
//   const [activeSection, setActiveSection] = useState<string>("");
//   const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveSection(entry.target.id);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     const sections = ["nonFungal", "culture", "colilert",];
//     sections.forEach((id) => {
//       const element = document.getElementById(id);
//       if (element) observer.observe(element);
//     });

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === "Escape") {
//         setActiveDetail(null);
//       }
//     };

//     const handleTouchStart = (event: TouchEvent) => {
//       setTouchStart(event.touches[0].clientX);
//     };

//     const handleTouchMove = (event: TouchEvent) => {
//       if (touchStart === null) return;
//       const touchEnd = event.touches[0].clientX;
//       const diff = touchStart - touchEnd;
//       if (diff > 100) {
//         setActiveDetail(null);
//         setTouchStart(null);
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     window.addEventListener("touchstart", handleTouchStart);
//     window.addEventListener("touchmove", handleTouchMove);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//       window.removeEventListener("touchstart", handleTouchStart);
//       window.removeEventListener("touchmove", handleTouchMove);
//     };
//   }, [touchStart]);

//   useEffect(() => {
//     let interval: NodeJS.Timeout;
//     if (activeDetail) {
//       interval = setInterval(() => {
//         setCurrentImageIndex((prev) => (prev + 1) % microbiologyDetails.find((d) => d.key === activeDetail)?.images.length!);
//       }, 3000); // Switch every 3 seconds
//     }
//     return () => clearInterval(interval);
//   }, [activeDetail]);

//   const handleNext = () => {
//     if (currentStep < microbiologyDetails.length - 1) {
//       setCurrentStep(currentStep + 1);
//       setActiveDetail(microbiologyDetails[currentStep + 1].key);
//       setCurrentImageIndex(0); // Reset image index when changing sections
//     }
//   };

//   const handlePrev = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//       setActiveDetail(microbiologyDetails[currentStep - 1].key);
//       setCurrentImageIndex(0); // Reset image index when changing sections
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleOverlayClick = (e: React.MouseEvent) => {
//     if (e.target === e.currentTarget) {
//       setActiveDetail(null);
//     }
//   };

//   return (
//     <div className="relative bg-gradient-to-b from-[#16436F] to-[#10b1b4] text-gray-100">
//       {/* Banner Section */}
//       <div className="relative bg-[#10b1b4] text-white py-20">
//         <Image
//           src="/pinnaclelab/microbiology/stock/Water2_AdobeStock.jpeg"
//           alt="Microbiology Banner"
//           layout="fill"
//           objectFit="cover"
//           className="absolute inset-0 opacity-50"
//         />
//         <div className="relative max-w-4xl mx-auto text-center z-10">
//           <h1 className="text-4xl font-bold">Explore Our Microbiology Services</h1>
//         </div>
//       </div>

//       {/* Sticky Section Navigation */}
//       {/* <nav className="sticky top-16 z-10 bg-[#16436F]/90 py-3 px-6 flex flex-col sm:flex-row gap-4 sm:gap-6 overflow-x-auto hidden md:block">
//         {["nonFungal", "culture", "colilert", "baseline"].map((id) => (
//           <motion.a
//             key={id}
//             href={`#${id}`}
//             className={`text-sm sm:text-base font-semibold ${
//               activeSection === id ? "text-cyan-400" : "text-gray-100"
//             } hover:text-cyan-300 transition-colors`}
//             whileHover={{ scale: 1.1 }}
//             transition={{ duration: 0.2 }}
//           >
//             {microbiologyDetails.find((d) => d.key === id)?.title}
//           </motion.a>
//         ))}
//         <motion.button
//           onClick={scrollToTop}
//           className="ml-auto text-sm sm:text-base font-semibold text-gray-100 hover:text-cyan-300 transition-colors"
//           whileHover={{ scale: 1.1 }}
//           transition={{ duration: 0.2 }}
//         >
//           Back to Top
//         </motion.button>
//       </nav> */}

//       {/* Content Section */}
//       <div className="max-w-6xl mx-auto px-6 py-8">
//         <div className="flex flex-col md:flex-row gap-6">
//           {/* Sidebar */}
//           <Sidebar activeService="MICROBIOLOGY" />

//           {/* Main Content */}
//           <main className="w-full md:w-3/4">
//             {/* Intro */}
//             <section>
//               <h2 className="text-3xl font-bold mb-6">What We Analyze</h2>
//               <p className="text-lg">
//                 Pinnacle Laboratory offers a suite of microbiological services to identify airborne allergens, non-fungal particles, viable spores, and bacteria in environmental samples. We utilize advanced air and surface culture methods to uncover what you can’t see — and help you take action.
//               </p>
//             </section>

//             {/* Non-Fungal Particulates */}
//             <section id="nonFungal" className="mt-12">
//   <h2 className="text-3xl font-bold mb-6 text-gray-100">Non-Fungal Particulates</h2>

//   <p className="text-lg space-y-2">
//     At <span className="font-semibold text-[#10b1b4]">Pinnacle Laboratory</span>, we
//     identify advanced allergen air sampling that detects background debris found
//     in indoor environments, including{" "}
//     {/* <span className="font-semibold">algae</span>,{" "}
//     <span className="font-semibold">dust mites</span>,{" "}
//     <span className="font-semibold">cellulose fibers</span>,{" "}
//     <span className="font-semibold">fiberglass</span>,{" "}
//     <span className="font-semibold">skin cells</span>, and more.  */}

//   {/* <p className="text-lg mt-2">
//     Like mold spores, these particulates can settle on moist areas, causing
//     potential harm to:
//   </p> */}

//   <ul className="list-disc list-inside text-lg mt-2 space-y-1">
//     <li>
//       <span className="font-semibold">algae</span>
//     </li>
//     <li>
//       <span className="font-semibold">dust mites</span>
//     </li>
//     <li>
//       <span className="font-semibold">fiberglass</span>
//     </li>
//     <li>
//       <span className="font-semibold">cellulose fibers</span>
//     </li>
//     <li>
//       <span className="font-semibold">skin cells</span>, and more. 
//     </li>
//   </ul>
//   These
//     particulates affect air quality even when <span className="font-semibold">mold</span>
//     isn’t detected.
//   </p>
//   <Image
//     src="/pinnaclelab/microbiology/stock/Pollen_Adobe_stock.jpeg"
//     alt="Non-Fungal Particulates Testing"
//     width={700}
//     height={400}
//     className="rounded-lg shadow-lg mb-6"
//   />
//   <p className="text-lg mt-4">
//     Choose <span className="font-semibold text-[#10b1b4]">Pinnacle Laboratory</span>{" "}
//     for a healthier, safer future — built on accurate results and trusted
//     expertise.
//   </p>

//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 1.05 }}
//     transition={{ duration: 0.2 }}
//     className="cursor-pointer overflow-hidden rounded-md shadow-md mb-6"
//   >

//   </motion.div>
//   <motion.button
//     whileHover={{ scale: 1.05 }}
//     whileTap={{ scale: 0.95 }}
//     onClick={() => {
//       setActiveDetail("nonFungal");
//       setCurrentStep(0);
//     }}
//     className="mt-2 px-6 py-3 text-white bg-cyan-600 rounded-lg font-semibold shadow hover:bg-cyan-700 transition text-base md:text-lg"
//     aria-label="Explore Non-Fungal Particulates"
//   >
//     Explore More
//   </motion.button>
// </section>
//             {/* Air & Surface Cultures */}
//             <section id="culture" className="mt-12">
//               <h3 className="text-2xl font-bold text-cyan-200 mb-4">Air & Surface Cultures (COMING SOON)</h3>
//               <ul className="list-disc list-inside text-lg space-y-2">
//                 <li>Air samples collected with Andersen or BioStage samplers using MEA media.</li>
//                 <li>Surface samples analyzed with swabs or bulk materials (10×10 cm or noted).</li>
//                 <li>Results reported as CFU/m³ (air) or CFU/cm² (surface).</li>
//                 <li>Turnaround: Deliver to lab within 24 hrs. Keep room temperature.</li>
//                 <li>Spore types reported include: Aspergillus, Penicillium, Chaetomium, Trichoderma, Stachybotrys, and others.</li>
//               </ul>
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 1.05 }}
//                 transition={{ duration: 0.2 }}
//                 className="cursor-pointer overflow-hidden rounded-md shadow-md mt-4"
//               >
//                 <Image
//                   src="/pinnaclelab/microbiology/stock/Culture4_AdobeStock.jpeg"
//                   alt="Culture Sample"
//                   width={700}
//                   height={400}
//                   className="rounded-md"
//                 />
//               </motion.div>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => {
//                   setActiveDetail("culture");
//                   setCurrentStep(1);
//                 }}
//                 className="mt-4 px-6 py-3 text-white bg-cyan-600 rounded-lg font-semibold shadow hover:bg-cyan-700 transition text-base md:text-lg"
//                 aria-label="Explore Air & Surface Cultures"
//               >
//                 Explore More
//               </motion.button>
//             </section>

//             {/* Water Bacteria (Colilert) */}
//             <section id="colilert" className="mt-12">
//               <h3 className="text-2xl font-bold text-cyan-200 mb-4">Water Bacteria (Colilert) (COMING SOON)</h3>
//               <p className="mb-4">
//                 Our Colilert presence/absence test identifies total coliforms and E. coli with simple, color-reactive results. Samples should be tested within 6 hours of collection for best accuracy.
//               </p>
//               <ul className="list-disc list-inside text-lg space-y-2">
//                 <li>Accepted method for field screening and regulatory testing</li>
//                 <li>Visual color change indicates bacterial presence</li>
//                 <li>Results available in 24 hours</li>
//               </ul>
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 1.05 }}
//                 transition={{ duration: 0.2 }}
//                 className="cursor-pointer overflow-hidden rounded-md shadow-md mt-4"
//               >
//                 <Image
//                   src="/pinnaclelab/microbiology/stock/Water_AdobeStock.jpeg"
//                   alt="Colilert Reaction"
//                   width={700}
//                   height={400}
//                   className="rounded-md"
//                 />
//               </motion.div>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => {
//                   setActiveDetail("colilert");
//                   setCurrentStep(2);
//                 }}
//                 className="mt-4 px-6 py-3 text-white bg-cyan-600 rounded-lg font-semibold shadow hover:bg-cyan-700 transition text-base md:text-lg"
//                 aria-label="Explore Water Bacteria Testing"
//               >
//                 Explore More
//               </motion.button>
//             </section>

//             {/* Baseline Ranges */}
//             {/* <section id="baseline" className="mt-12">
//               <h3 className="text-2xl font-bold text-cyan-200 mb-4">Baseline Ranges</h3>
//               <p>
//                 We interpret findings by comparing indoor samples with established baseline ranges for non-fungal particulates and allergens. Outdoor controls are used when possible for more accurate comparisons.
//               </p>
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 1.05 }}
//                 transition={{ duration: 0.2 }}
//                 className="cursor-pointer overflow-hidden rounded-md shadow-md mt-4"
//               >
//                 <Image
//                   src="/pinnaclelab/microbiology/Non_fungal_2.jpg"
//                   alt="Baseline Comparison"
//                   width={700}
//                   height={400}
//                   className="rounded-md"
//                 />
//               </motion.div>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => {
//                   setActiveDetail("baseline");
//                   setCurrentStep(3);
//                 }}
//                 className="mt-4 px-6 py-3 text-white bg-cyan-600 rounded-lg font-semibold shadow hover:bg-cyan-700 transition text-base md:text-lg"
//                 aria-label="Explore Baseline Ranges"
//               >
//                 Explore More
//               </motion.button>
//             </section> */}

//             {/* The Pinnacle Difference */}
//             <section className="mt-12">
//               <h3 className="text-2xl font-bold mb-4">Why Choose Pinnacle Microbiology?</h3>
//               <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <li className="flex items-start gap-4">
//                   <span className="text-white">✔</span>
//                   <p className="text-sm text-gray-100">Testing performed by trained microbiologists using AIHA-recommended methods.</p>
//                 </li>
//                 <li className="flex items-start gap-4">
//                   <span className="text-white">✔</span>
//                   <p className="text-sm text-gray-100">Over 500,000 environmental samples analyzed across California.</p>
//                 </li>
//                 <li className="flex items-start gap-4">
//                   <span className="text-white">✔</span>
//                   <p className="text-sm text-gray-100">Rapid turnarounds and custom reporting tailored to your needs.</p>
//                 </li>
//               </ul>
//             </section>

//             {/* Accreditation */}
//             <section className="mt-12">
//               <h3 className="text-2xl font-bold mb-4">Accreditation</h3>
//               <div className="flex flex-col md:flex-row items-center gap-6">
//                 <Image
//                   src="/pinnaclelab/Partners/225542_EMLAP_Symbol_2023_04_26-MOD.png"
//                   alt="AIHA Environmental Microbiology"
//                   width={150}
//                   height={150}
//                   className="object-contain"
//                 />
//                 <p className="text-sm text-gray-100">
//                   Accredited for Environmental Microbiology analysis including fungal, bacterial, and allergen detection via air and surface sampling methods.
//                 </p>
//               </div>
//             </section>

//             {/* FAQ Accordion */}
//             <section className="mt-12">
//               <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
//               {faqs.map((faq, index) => {
//                 const [isOpen, setIsOpen] = useState(false);
//                 return (
//                   <div key={index} className="mb-4">
//                     <button
//                       onClick={() => setIsOpen(!isOpen)}
//                       className="w-full text-left text-lg font-semibold text-cyan-200 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 p-2 rounded"
//                       aria-expanded={isOpen}
//                     >
//                       {faq.question}
//                     </button>
//                     <AnimatePresence>
//                       {isOpen && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3 }}
//                           className="overflow-hidden"
//                         >
//                           <p className="p-2 text-gray-100">{faq.answer}</p>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 );
//               })}
//             </section>
//           </main>
//         </div>
//       </div>

//       {/* Overlay and Slide-in Drawer */}
//       <AnimatePresence>
//         {activeDetail && (
//           <>
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.5 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.4 }}
//               className="fixed inset-0 bg-black/50 z-40"
//               onClick={handleOverlayClick}
//             />
//             <motion.div
//               key={activeDetail}
//               initial={{ x: "100%" }}
//               animate={{ x: 0 }}
//               exit={{ x: "100%" }}
//               transition={{ duration: 0.4, ease: "easeInOut" }}
//               className="fixed top-0 right-0 z-50 h-full w-full sm:w-3/4 md:w-1/2 bg-[#16436F] shadow-xl overflow-y-auto"
//               role="dialog"
//               aria-label="Microbiology Details Drawer"
//             >
//               <div className="flex justify-between items-center p-4 border-b border-white/10">
//                 <h3 className="text-xl sm:text-2xl text-white font-semibold">
//                   {microbiologyDetails.find((d) => d.key === activeDetail)?.title}
//                 </h3>
//                 <button
//                   onClick={() => setActiveDetail(null)}
//                   className="text-white hover:text-cyan-300 text-2xl p-2"
//                   aria-label="Close Drawer"
//                 >
//                   ✕
//                 </button>
//               </div>
//               <div className="p-6">
//                 <motion.div
//                   className="relative w-full h-[400px] overflow-hidden rounded-md"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.4 }}
//                 >
//                   {microbiologyDetails
//                     .find((d) => d.key === activeDetail)
//                     ?.images.map((img, index) => (
//                       <motion.div
//                         key={img}
//                         className="absolute inset-0"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
//                         transition={{ duration: 0.5, ease: "easeInOut" }}
//                       >
//                         <Image
//                           src={img}
//                           alt={`${microbiologyDetails.find((d) => d.key === activeDetail)?.title} Image ${index + 1}`}
//                           layout="fill"
//                           objectFit="cover"
//                           className="rounded-md"
//                         />
//                       </motion.div>
//                     ))}
//                 </motion.div>
//                 {microbiologyDetails.find((d) => d.key === activeDetail)?.detailed || null}
//               </div>
//               {/* Pagination Controls with Progress Bar */}
//               <div className="p-6 border-t border-white/10 flex justify-between items-center">
//                 <button
//                   onClick={handlePrev}
//                   disabled={currentStep === 0}
//                   className={`px-4 py-2 rounded-lg font-semibold text-base sm:text-lg ${
//                     currentStep === 0
//                       ? "bg-gray-600 cursor-not-allowed"
//                       : "bg-cyan-600 hover:bg-cyan-700 text-white"
//                   }`}
//                   aria-label="Previous Section"
//                 >
//                   Previous
//                 </button>
//                 <div className="relative w-32 h-2 bg-gray-400 rounded-full overflow-hidden">
//                   <motion.div
//                     className="absolute top-0 left-0 h-full bg-cyan-600"
//                     animate={{ width: `${((currentStep + 1) / microbiologyDetails.length) * 100}%` }}
//                     transition={{ duration: 0.3, ease: "easeInOut" }}
//                   />
//                 </div>
//                 <button
//                   onClick={handleNext}
//                   disabled={currentStep === microbiologyDetails.length - 1}
//                   className={`px-4 py-2 rounded-lg font-semibold text-base sm:text-lg ${
//                     currentStep === microbiologyDetails.length - 1
//                       ? "bg-gray-600 cursor-not-allowed"
//                       : "bg-cyan-600 hover:bg-cyan-700 text-white"
//                   }`}
//                   aria-label="Next Section"
//                 >
//                   Next
//                 </button>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MicrobiologyPage;

















"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import { AnimatePresence, motion } from "framer-motion";

const MicrobiologyPage = () => {
  const [expandedItems, setExpandedItems] = useState({
    pollen: false,
    algae: false,
    insect: false,
    dustMites: false,
    skinCells: false,
    cellulose: false,
    synthetic: false,
    fiberglass: false,
    starch: false,
    hair: false,
  });

  const [activeDetail, setActiveDetail] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const microbiologyDetails = [
    {
      key: "allergens",
      title: "Allergens",
      images: [
        "/pinnaclelab/microbiology/stock/Pollen_Adobe_stock.jpeg",
        "/pinnaclelab/microbiology/stock/Bee_AdobeStock.jpeg",
        "/pinnaclelab/microbiology/stock/Dust_AdobeStock.jpeg",
      ],
      detailed: (
        <div className="p-6 text-white">
          <h2 className="text-3xl font-bold mb-4">What Are Allergens?</h2>
          <p className="mb-4">Allergens are tiny particles like skin cells, fibers, pollen, and more that can affect indoor air quality.</p>
          <p className="mb-4">Using Air-O-Cell or Allergenco-D cassettes, we capture air samples and analyze them under a microscope to identify these particles.</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">What is Allergen Analysis?</h3>
          <p className="mb-4">Allergen analysis involves microscopic identification of particles such as skin cells, synthetic fibers, cellulose fibers, pollen, insect parts, and other debris to assess air quality or contamination sources.</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Identifiable Particles</h3>
          <ul className="list-disc list-inside text-lg space-y-1">
            <li className="group">
              <motion.button
                className="inline-flex items-center text-white hover:text-[#10b1b4] focus:outline-none cursor-pointer"
                onClick={() => setExpandedItems((prev) => ({ ...prev, pollen: !prev.pollen }))}
                aria-expanded={expandedItems.pollen}
                aria-controls="pollen-desc"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Increase size on hover
              >
                <span className={`font-bold ${expandedItems.pollen ? "text-[#10b1b4]" : "text-white"} flex-1`}>Pollen grains</span>
                <motion.span
                  className="ml-2 text-white inline-block align-middle"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 0.5,
                    yoyo: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 300 } }}
                  aria-hidden="true"
                >
                  {expandedItems.pollen ? "—" : "✚"}
                </motion.span>
              </motion.button>
              <motion.span
                id="pollen-desc"
                className={`ml-16 ${expandedItems.pollen ? "text-[#10b1b4]" : "text-gray-100"} block`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: expandedItems.pollen ? 1 : 0, height: expandedItems.pollen ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
              >
                - Identify Seasonal allergens and potential triggers for respriatory issues.
              </motion.span>
            </li>
            <li className="group">
              <motion.button
                className="inline-flex items-center text-white hover:text-[#10b1b4] focus:outline-none cursor-pointer"
                onClick={() => setExpandedItems((prev) => ({ ...prev, algae: !prev.algae }))}
                aria-expanded={expandedItems.algae}
                aria-controls="algae-desc"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Increase size on hover
              >
                <span className={`font-bold ${expandedItems.algae ? "text-[#10b1b4]" : "text-white"} flex-1`}>Algae</span>
                <motion.span
                  className="ml-2 text-white inline-block align-middle"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 0.5,
                    yoyo: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 300 } }}
                  aria-hidden="true"
                >
                  {expandedItems.algae ? "—" : "✚"}
                </motion.span>
              </motion.button>
              <motion.span
                id="algae-desc"
                className={`ml-16 ${expandedItems.algae ? "text-[#10b1b4]" : "text-gray-100"} block`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: expandedItems.algae ? 1 : 0, height: expandedItems.algae ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
              >
                - Detect the presence of harmful algal spores, which can contribute to poor indoor air quality.
              </motion.span>
            </li>
            <li className="group">
              <motion.button
                className="inline-flex items-center text-white hover:text-[#10b1b4] focus:outline-none cursor-pointer"
                onClick={() => setExpandedItems((prev) => ({ ...prev, insect: !prev.insect }))}
                aria-expanded={expandedItems.insect}
                aria-controls="insect-desc"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Increase size on hover
              >
                <span className={`font-bold ${expandedItems.insect ? "text-[#10b1b4]" : "text-white"} flex-1`}>Insect parts</span>
                <motion.span
                  className="ml-2 text-white inline-block align-middle"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 0.5,
                    yoyo: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 300 } }}
                  aria-hidden="true"
                >
                  {expandedItems.insect ? "—" : "✚"}
                </motion.span>
              </motion.button>
              <motion.span
                id="insect-desc"
                className={`ml-16 ${expandedItems.insect ? "text-[#10b1b4]" : "text-gray-100"} block`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: expandedItems.insect ? 1 : 0, height: expandedItems.insect ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
              >
                - analyze the pressence of insect fragments that can exacerbate respriatory problems.
              </motion.span>
            </li>
            <li className="group">
              <motion.button
                className="inline-flex items-center text-white hover:text-[#10b1b4] focus:outline-none cursor-pointer"
                onClick={() => setExpandedItems((prev) => ({ ...prev, dustMites: !prev.dustMites }))}
                aria-expanded={expandedItems.dustMites}
                aria-controls="dust-mites-desc"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Increase size on hover
              >
                <span className={`font-bold ${expandedItems.dustMites ? "text-[#10b1b4]" : "text-white"} flex-1`}>Dust mites</span>
                <motion.span
                  className="ml-2 text-white inline-block align-middle"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 0.5,
                    yoyo: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 300 } }}
                  aria-hidden="true"
                >
                  {expandedItems.dustMites ? "—" : "✚"}
                </motion.span>
              </motion.button>
              <motion.span
                id="dust-mites-desc"
                className={`ml-16 ${expandedItems.dustMites ? "text-[#10b1b4]" : "text-gray-100"} block`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: expandedItems.dustMites ? 1 : 0, height: expandedItems.dustMites ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
              >
                - measure the concentration of dust mite debri's, a leading cause of allergic reactions.
              </motion.span>
            </li>
            <li className="group">
              <motion.button
                className="inline-flex items-center text-white hover:text-[#10b1b4] focus:outline-none cursor-pointer"
                onClick={() => setExpandedItems((prev) => ({ ...prev, skinCells: !prev.skinCells }))}
                aria-expanded={expandedItems.skinCells}
                aria-controls="skin-cells-desc"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Increase size on hover
              >
                <span className={`font-bold ${expandedItems.skinCells ? "text-[#10b1b4]" : "text-white"} flex-1`}>Human and animal skin cells</span>
                <motion.span
                  className="ml-2 text-white inline-block align-middle"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 0.5,
                    yoyo: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 300 } }}
                  aria-hidden="true"
                >
                  {expandedItems.skinCells ? "—" : "✚"}
                </motion.span>
              </motion.button>
              <motion.span
                id="skin-cells-desc"
                className={`ml-16 ${expandedItems.skinCells ? "text-[#10b1b4]" : "text-gray-100"} block`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: expandedItems.skinCells ? 1 : 0, height: expandedItems.skinCells ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
              >
                - Assess the level of dander and skin flakes that can impact people with sensitivities.
              </motion.span>
            </li>
            <li className="group">
              <motion.button
                className="inline-flex items-center text-white hover:text-[#10b1b4] focus:outline-none cursor-pointer"
                onClick={() => setExpandedItems((prev) => ({ ...prev, cellulose: !prev.cellulose }))}
                aria-expanded={expandedItems.cellulose}
                aria-controls="cellulose-desc"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Increase size on hover
              >
                <span className={`font-bold ${expandedItems.cellulose ? "text-[#10b1b4]" : "text-white"} flex-1`}>Cellulose fibers (e.g., paper, wood, fabric)</span>
                <motion.span
                  className="ml-2 text-white inline-block align-middle"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 0.5,
                    yoyo: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 300 } }}
                  aria-hidden="true"
                >
                  {expandedItems.cellulose ? "—" : "✚"}
                </motion.span>
              </motion.button>
              <motion.span
                id="cellulose-desc"
                className={`ml-16 ${expandedItems.cellulose ? "text-[#10b1b4]" : "text-gray-100"} block`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: expandedItems.cellulose ? 1 : 0, height: expandedItems.cellulose ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
              >
                - Examine organic material that could indicate mold or other biological containmentants.
              </motion.span>
            </li>
            <li className="group">
              <motion.button
                className="inline-flex items-center text-white hover:text-[#10b1b4] focus:outline-none cursor-pointer"
                onClick={() => setExpandedItems((prev) => ({ ...prev, synthetic: !prev.synthetic }))}
                aria-expanded={expandedItems.synthetic}
                aria-controls="synthetic-desc"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Increase size on hover
              >
                <span className={`font-bold ${expandedItems.synthetic ? "text-[#10b1b4]" : "text-white"} flex-1`}>Synthetic fibers (e.g., nylon, polyester)</span>
                <motion.span
                  className="ml-2 text-white inline-block align-middle"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 0.5,
                    yoyo: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 300 } }}
                  aria-hidden="true"
                >
                  {expandedItems.synthetic ? "—" : "✚"}
                </motion.span>
              </motion.button>
              <motion.span
                id="synthetic-desc"
                className={`ml-16 ${expandedItems.synthetic ? "text-[#10b1b4]" : "text-gray-100"} block`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: expandedItems.synthetic ? 1 : 0, height: expandedItems.synthetic ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
              >
                - Understand the levels of man-made fibers like polyester and nylon that might contribute to indoor air pollution.
              </motion.span>
            </li>
            <li className="group">
              <motion.button
                className="inline-flex items-center text-white hover:text-[#10b1b4] focus:outline-none cursor-pointer"
                onClick={() => setExpandedItems((prev) => ({ ...prev, fiberglass: !prev.fiberglass }))}
                aria-expanded={expandedItems.fiberglass}
                aria-controls="fiberglass-desc"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Increase size on hover
              >
                <span className={`font-bold ${expandedItems.fiberglass ? "text-[#10b1b4]" : "text-white"} flex-1`}>Fiberglass</span>
                <motion.span
                  className="ml-2 text-white inline-block align-middle"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 0.5,
                    yoyo: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 300 } }}
                  aria-hidden="true"
                >
                  {expandedItems.fiberglass ? "—" : "✚"}
                </motion.span>
              </motion.button>
              <motion.span
                id="fiberglass-desc"
                className={`ml-16 ${expandedItems.fiberglass ? "text-[#10b1b4]" : "text-gray-100"} block`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: expandedItems.fiberglass ? 1 : 0, height: expandedItems.fiberglass ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
              >
                - check for any harmful fiberglass particles that could cause respritory issues.
              </motion.span>
            </li>
            <li className="group">
              <motion.button
                className="inline-flex items-center text-white hover:text-[#10b1b4] focus:outline-none cursor-pointer"
                onClick={() => setExpandedItems((prev) => ({ ...prev, starch: !prev.starch }))}
                aria-expanded={expandedItems.starch}
                aria-controls="starch-desc"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Increase size on hover
              >
                <span className={`font-bold ${expandedItems.starch ? "text-[#10b1b4]" : "text-white"} flex-1`}>Starch</span>
                <motion.span
                  className="ml-2 text-white inline-block align-middle"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 0.5,
                    yoyo: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 300 } }}
                  aria-hidden="true"
                >
                  {expandedItems.starch ? "—" : "✚"}
                </motion.span>
              </motion.button>
              <motion.span
                id="starch-desc"
                className={`ml-16 ${expandedItems.starch ? "text-[#10b1b4]" : "text-gray-100"} block`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: expandedItems.starch ? 1 : 0, height: expandedItems.starch ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
              >
                - identify starch-based particles that may result from food products or other organic materials.
              </motion.span>
            </li>
            <li className="group">
              <motion.button
                className="inline-flex items-center text-white hover:text-[#10b1b4] focus:outline-none cursor-pointer"
                onClick={() => setExpandedItems((prev) => ({ ...prev, hair: !prev.hair }))}
                aria-expanded={expandedItems.hair}
                aria-controls="hair-desc"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Increase size on hover
              >
                <span className={`font-bold ${expandedItems.hair ? "text-[#10b1b4]" : "text-white"} flex-1`}>Human and animal hair</span>
                <motion.span
                  className="ml-2 text-white inline-block align-middle"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 0.5,
                    yoyo: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.1, transition: { type: "spring", stiffness: 300 } }}
                  aria-hidden="true"
                >
                  {expandedItems.hair ? "—" : "✚"}
                </motion.span>
              </motion.button>
              <motion.span
                id="hair-desc"
                className={`ml-16 ${expandedItems.hair ? "text-[#10b1b4]" : "text-gray-100"} block`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: expandedItems.hair ? 1 : 0, height: expandedItems.hair ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
              >
                - gauge the conectration of hair particles, often a source of allergens and irratants.
              </motion.span>
            </li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-3">Benefits of Analysis</h3>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li><span className="font-bold">Identify dust or allergen sources</span></li>
            <li><span className="font-bold">Evaluate cleaning effectiveness</span></li>
            <li><span className="font-bold">Support post-remediation verification</span></li>
            <li><span className="font-bold">Investigate building occupant complaints</span></li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-3">Is This Mold Testing?</h3>
          <p className="mb-4">No. Mold testing targets fungal spores, while allergen analysis focuses on non-fungal particles impacting air quality.</p>
        </div>
      ),
    },

    
    {
      key: "culture",
      title: "Air & Surface Cultures (COMING SOON)",
      images: [
        "/pinnaclelab/microbiology/stock/Culture1_AdobeStock.jpeg",
        "/pinnaclelab/microbiology/stock/Culture2_AdobeStock.jpeg",
        "/pinnaclelab/microbiology/stock/Culture3_AdobeStock.jpeg",
        "/pinnaclelab/microbiology/stock/Culture4_AdobeStock.jpeg",
      ],
      detailed: (
        <div className="p-6 text-white">
          <h2 className="text-3xl font-bold mb-4">How We Grow Cultures</h2>
          <p className="mb-4">We collect mold spores from air or surfaces and cultivate them on agar to identify mold types.</p>
          <ul className="list-disc list-inside text-lg space-y-4">
            <li className="py-2">Use Andersen/BioStage samplers with MEA media.</li>
            <li className="py-2">Surface samples analyzed with swabs or bulk materials (4x4 in | 10×10 cm).</li>
            <li className="py-2">Results reported as CFU/m³ (air) or CFU/cm² (surface).</li>
            <li className="py-2">Deliver to lab within 24 hrs, keep at room temperature.</li>
            <li className="py-2">Spore types include a variety of molds, detailed below.</li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-3">Identified Mold Species</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-[#10b1b4] mb-2">Aspergillus Species</h4>
              <ul className="list-disc list-inside text-base space-y-1">
                <li>Aspergillus niger</li>
                <li>Aspergillus flavus</li>
                <li>Aspergillus fumigatus</li>
                <li>Aspergillus terreus</li>
                <li>Aspergillus versicolor</li>
                <li>Aspergillus other</li>
              </ul>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-[#10b1b4] mb-2">Common Molds</h4>
              <ul className="list-disc list-inside text-base space-y-1">
                <li>Penicillium</li>
                <li>Cladosporium</li>
                <li>Epicoccum</li>
                <li>Alternaria (Ulocladium)</li>
                <li>Pithomyces</li>
                <li>Fusarium</li>
              </ul>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-[#10b1b4] mb-2">Rare or Specialized Molds</h4>
              <ul className="list-disc list-inside text-base space-y-1">
                <li>Chaetomium</li>
                <li>Trichoderma</li>
                <li>Mucor/Rhizopus (Zygomycetes)</li>
                <li>Aeurobasidium</li>
                <li>Scopulariopsis</li>
                <li>Acremonium</li>
                <li>Stachybotrys/Memnoniella</li>
                <li>Other/Unidentifiable</li>
                <li>Yeast</li>
              </ul>
            </div>
          </div>
          <h3 className="text-xl font-semibold mt-6 mb-3">What is Mold Culture Analysis?</h3>
          <p className="mb-4">Mold culture analysis grows samples on media to identify viable mold types and levels.</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Spore Trap vs. Culture Analysis</h3>
          <p className="mb-4">Spore traps detect airborne spores (dead or alive), while cultures identify viable mold, often to species level, for health risk assessment.</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Sample Types</h3>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Air samples (Andersen samplers)</li>
            <li>Surface swabs</li>
            <li>Bulk materials (e.g., drywall, wood)</li>
          </ul>
          <h3 className="text-xl font-semibold mt-6 mb-3">Testing Duration</h3>
          <p className="mb-4">Incubation takes 5–7 days, with some species up to 10 days. Preliminary results may be available sooner.</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Toxicity Detection</h3>
          <p className="mb-4">Cultures identify mold types, but toxicity requires separate mycotoxin testing.</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Air vs. Surface Culturing</h3>
          <p className="mb-4">Air culturing assesses indoor air quality; surface culturing identifies active mold growth on materials.</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Incubation Temperature</h3>
          <p className="mb-4">Cultures are incubated at 25–30°C (77–86°F) for 5–7 days, with some requiring extended periods.</p>
        </div>
      ),
    },
    {
      key: "colilert",
      title: "Water Bacteria (Colilert®/Quanti-Tray™) (COMING SOON)",
      images: [
        "/pinnaclelab/microbiology/stock/Coliert_Test_Reactions_CHATGPT.png",
        "/pinnaclelab/microbiology/image (5).png",
        "/pinnaclelab/microbiology/image (6).png",
      ],
      detailed: (
        <div className="p-6 text-white">
          <h2 className="text-3xl font-bold mb-4">Simple, Accurate Water Testing with Colilert® & Quanti-Tray®</h2>
          <p className="mb-4">Concerned about water quality? We make it easy to detect harmful bacteria like E. coli and Total Coliforms in your water—quickly, clearly, and with certified accuracy.          </p>
          <h3 className="text-xl font-semibold mt-6 mb-3">What is Colilert® Analysis?</h3>
          <p className="mb-4">Colilert® is an EPA-approved method for detecting Total Coliforms and E. coli in water using color and fluorescence within 24 hours.</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Turnaround Time</h3>
          <p className="mb-4">
            <strong>Colilert® / Quanti-Tray™:</strong> 24–28 hours<br />
            <strong>Culture-based testing:</strong> ~7 days<br />
            <strong>Fungal/Non-fungal analysis:</strong> 1–5 days<br />
            Rush services available—contact us.
          </p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Drinking Water Compliance</h3>
          <p className="mb-4">We offer EPA-compliant Total Coliform and E. coli testing for drinking water.</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Positive Results</h3>
          <p className="mb-4">Positive results may indicate contamination, requiring resampling and regulatory reporting. We assist with follow-up testing.</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">Incubation Temperature</h3>
          <p className="mb-4">Colilert samples are incubated at 35.0 ± 0.5°C (95°F) for 24 hours per EPA standards.</p>
          <h3 className="text-xl font-semibold mt-6 mb-3">What is Quanti-Tray™ Analysis?</h3>
          <p className="mb-4">
            Quanti-Tray™ analysis is a quantitative microbiological testing method used to estimate the Most Probable Number (MPN) of bacteria in a water sample, typically for drinking water, recreational water, or wastewater testing. It is commonly used in conjunction with IDEXX test kits like Colilert® for detecting specific microbial contaminants:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-white/10 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-[#10b1b4] mb-2">Key Indicators</h4>
              <ul className="list-disc list-inside text-base space-y-1">
                <li>Total Coliforms</li>
                <li>E. coli</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },


  ];

  const faqs = [
    {
      question: "How Should I Collect and Submit Samples?",
      answer: "We provide sampling kits with instructions. Water samples require sterile containers with sodium thiosulfate. For air or surface testing, contact us for approved devices or swabs.",
    },
    {
      question: "Can Rush Services Be Arranged?",
      answer: "Yes, rush services may be available—contact us for details.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = ["allergens", "culture", "colilert"];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDetail(null);
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      setTouchStart(event.touches[0].clientX);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (touchStart === null) return;
      const touchEnd = event.touches[0].clientX;
      const diff = touchStart - touchEnd;
      if (diff > 100) {
        setActiveDetail(null);
        setTouchStart(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [touchStart]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (activeDetail) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % microbiologyDetails.find((d) => d.key === activeDetail)?.images.length!);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [activeDetail]);

  const handleNext = () => {
    if (currentStep < microbiologyDetails.length - 1) {
      setCurrentStep(currentStep + 1);
      setActiveDetail(microbiologyDetails[currentStep + 1].key);
      setCurrentImageIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setActiveDetail(microbiologyDetails[currentStep - 1].key);
      setCurrentImageIndex(0);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setActiveDetail(null);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#16436F] to-[#10b1b4] text-gray-100 min-h-screen">
      {/* Banner Section */}
      <div className="relative bg-[#10b1b4] text-white py-16">
        <Image
          src="/pinnaclelab/microbiology/stock/Water2_AdobeStock.jpeg"
          alt="Microbiology Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-40"
        />
        <div className="relative max-w-5xl mx-auto text-center z-10 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Microbiology Services</h1>
          <p className="text-lg md:text-xl">Advanced analysis for allergens, mold, and bacteria to ensure safe environments.</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <Sidebar activeService="MICROBIOLOGY" />

          {/* Main Content */}
          <main className="w-full lg:w-3/4 space-y-12">
            {/* Intro */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Our Microbiology Analysis</h2>
              <p className="text-base md:text-lg text-gray-200">
                At Pinnacle Laboratory, we specialize in identifying airborne allergens, viable mold spores, and bacteria in environmental samples using advanced air and surface culture methods. Our services help you maintain healthy indoor environments.
              </p>
            </section>

            {/* Allergens */}
            <section id="allergens" className="bg-white/5 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Allergens</h2>
              <p className="text-base md:text-lg text-gray-200 mb-4">
                We detect microscopic particles like <span className="font-semibold">algae</span>, <span className="font-semibold">dust mites</span>, <span className="font-semibold">fiberglass</span>, <span className="font-semibold">cellulose fibers</span>, and <span className="font-semibold">skin cells</span> that impact air quality, even without mold presence.
              </p>
              <ul className="list-disc list-inside text-base md:text-lg text-gray-200 mb-6 space-y-2">
                <li>Advanced allergen air sampling</li>
                <li>Identifies background debris in indoor environments</li>
                <li>Helps address air quality concerns</li>
              </ul>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden rounded-lg shadow-md mb-6"
              >
                <Image
                  src="/pinnaclelab/microbiology/stock/Pollen_Adobe_stock.jpeg"
                  alt="Allergens Testing"
                  width={700}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
              <p className="text-base md:text-lg text-gray-200 mb-4">
                Trust <span className="font-semibold text-[#10b1b4]">Pinnacle Laboratory</span> for precise allergen detection and healthier indoor spaces.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveDetail("allergens");
                  setCurrentStep(0);
                }}
                className="inline-block px-6 py-2 bg-[#10b1b4] text-white rounded-lg font-semibold hover:bg-cyan-700 transition"
                aria-label="Explore Allergens"
              >
                Learn More
              </motion.button>
            </section>

            {/* Air & Surface Cultures */}
            <section id="culture" className="bg-white/5 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Air & Surface Cultures <span className="text-sm text-gray-400">(COMING SOON)</span></h2>
              <p className="text-base md:text-lg text-gray-200 mb-4">
                We analyze air and surface samples to identify viable mold species, helping assess indoor air quality and contamination.
              </p>
              <ul className="list-disc list-inside text-base md:text-lg text-gray-200 mb-6 space-y-2">
                <li>Air samples via Andersen/BioStage samplers with MEA media</li>
                <li>Surface samples from swabs or bulk materials</li>
                <li>Results in CFU/m³ (air) or CFU/cm² (surface)</li>
                <li>Spore types: Aspergillus, Penicillium, Chaetomium, and more</li>
              </ul>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden rounded-lg shadow-md mb-6"
              >
                <Image
                  src="/pinnaclelab/microbiology/stock/Culture4_AdobeStock.jpeg"
                  alt="Culture Sample"
                  width={700}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveDetail("culture");
                  setCurrentStep(1);
                }}
                className="inline-block px-6 py-2 bg-[#10b1b4] text-white rounded-lg font-semibold hover:bg-cyan-700 transition"
                aria-label="Explore Air & Surface Cultures"
              >
                Learn More
              </motion.button>
            </section>

            {/* Water Bacteria (Colilert) */}
            <section id="colilert" className="bg-white/5 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Water Bacteria (Colilert) <span className="text-sm text-gray-400">(COMING SOON)</span></h2>
              <p className="text-base md:text-lg text-gray-200 mb-4">
                Our Colilert test detects Total Coliforms and E. coli in water with rapid, color-based results within 24 hours.
              </p>
              <ul className="list-disc list-inside text-base md:text-lg text-gray-200 mb-6 space-y-2">
                <li>EPA-approved for field and regulatory testing</li>
                <li>Color change indicates bacterial presence</li>
                <li>Ideal for drinking water compliance</li>
              </ul>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden rounded-lg shadow-md mb-6"
              >
                <Image
                  src="/pinnaclelab/microbiology/stock/Water_AdobeStock.jpeg"
                  alt="Colilert Reaction"
                  width={700}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setActiveDetail("colilert");
                  setCurrentStep(2);
                }}
                className="inline-block px-6 py-2 bg-[#10b1b4] text-white rounded-lg font-semibold hover:bg-cyan-700 transition"
                aria-label="Explore Water Bacteria Testing"
              >
                Learn More
              </motion.button>
            </section>

            {/* Why Choose Pinnacle */}
            <section className="mt-12">
              <h3 className="text-2xl font-bold mb-4">Why Choose Pinnacle Microbiology?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <li className="flex items-start gap-4">
                  <span className="text-white">✔</span>
                  <p className="text-sm text-gray-100">Testing performed by trained microbiologists using AIHA-recommended methods.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-white">✔</span>
                  <p className="text-sm text-gray-100">Over 500,000 environmental samples analyzed across California.</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-white">✔</span>
                  <p className="text-sm text-gray-100">Rapid turnarounds and custom reporting tailored to your needs.</p>
                </li>
              </ul>
            </section>

            {/* Accreditation */}
            <section className="mt-12">
              <h3 className="text-2xl font-bold mb-4">Accreditation</h3>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Image
                  src="/pinnaclelab/Partners/225542_EMLAP_Symbol_2023_04_26-MOD.png"
                  alt="AIHA Environmental Microbiology"
                  width={150}
                  height={150}
                  className="object-contain"
                />
                <p className="text-sm text-gray-100">
                  Accredited for Environmental Microbiology analysis including fungal, bacterial, and allergen detection via air and surface sampling methods.
                </p>
              </div>
            </section>

            {/* FAQ Accordion */}
            <section className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
              {faqs.map((faq, index) => {
                const [isOpen, setIsOpen] = useState(false);
                return (
                  <div key={index} className="mb-4">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="w-full text-left text-lg font-semibold text-cyan-200 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-600 p-2 rounded"
                      aria-expanded={isOpen}
                    >
                      {faq.question}
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="p-2 text-gray-100">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </section>
          </main>
        </div>
      </div>

      {/* Overlay and Slide-in Drawer */}
      <AnimatePresence>
        {activeDetail && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={handleOverlayClick}
            />
            <motion.div
              key={activeDetail}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 z-50 h-full w-full sm:w-2/3 lg:w-1/2 bg-[#16436F] shadow-xl overflow-y-auto"
              role="dialog"
              aria-label="Microbiology Details Drawer"
            >
              <div className="flex justify-between items-center p-4 border-b border-white/10">
                <h3 className="text-xl md:text-2xl text-white font-semibold">
                  {microbiologyDetails.find((d) => d.key === activeDetail)?.title}
                </h3>
                <button
                  onClick={() => setActiveDetail(null)}
                  className="text-white hover:text-[#10b1b4] text-2xl p-2"
                  aria-label="Close Drawer"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <motion.div
                  className="relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {microbiologyDetails
                    .find((d) => d.key === activeDetail)
                    ?.images.map((img, index) => (
                      <motion.div
                        key={img}
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Image
                          src={img}
                          alt={`${microbiologyDetails.find((d) => d.key === activeDetail)?.title} Image ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </motion.div>
                    ))}
                </motion.div>
                {microbiologyDetails.find((d) => d.key === activeDetail)?.detailed || null}
              </div>
              <div className="p-6 border-t border-white/10 flex justify-between items-center">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm md:text-base ${
                    currentStep === 0
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-[#10b1b4] hover:bg-cyan-700 text-white"
                  }`}
                  aria-label="Previous Section"
                >
                  Previous
                </button>
                <div className="w-24 h-2 bg-gray-400 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#10b1b4]"
                    animate={{ width: `${((currentStep + 1) / microbiologyDetails.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <button
                  onClick={handleNext}
                  disabled={currentStep === microbiologyDetails.length - 1}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm md:text-base ${
                    currentStep === microbiologyDetails.length - 1
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-[#10b1b4] hover:bg-cyan-700 text-white"
                  }`}
                  aria-label="Next Section"
                >
                  Next
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MicrobiologyPage;