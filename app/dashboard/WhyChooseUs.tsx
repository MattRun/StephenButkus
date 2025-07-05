// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// const services = [
//   {
//     category: "Asbestos Testing",
//     items: [
//       "Building Materials Analysis by PLM",
//       "1000 Point Count (Gravimetric & Non-Gravimetric)",
//       "PLM Qualitative Dust",
//       "PCM Air Samples (NIOSH 74)",
//       "PLM Qualitative Soil",
//       "CARB 435 Soil",
//     ],
//     link: "/asbestos-testing",
//   },
//   {
//     category: "Mold",
//     items: ["Direct Fungal (Air)", "Direct Fungal Analysis (Swab, Tape Lift, Bulk)"],
//     link: "/mold-testing",
//   },
//   {
//     category: "Fiberglass",
//     items: ["PCM Air Samples (NIOSH 7400, Rule B)", "PLM Qualitative Dust Wipe"],
//     link: "/fiberglass-testing",
//   },
//   {
//     category: "Lead",
//     items: [
//       "Paint Chip",
//       "Dust Wipe",
//       "Soil",
//       "Drinking Water*",
//       "Waste Water*",
//       "Waste Characterization (TCLP/TTLC/STLC)*",
//       "*Coming Early 2025",
//     ],
//     link: "/lead-testing",
//   },
//   {
//     category: "Heavy Metals",
//     items: [
//       "Paint Chip",
//       "Dust Wipe",
//       "Soil",
//       "Drinking Water*",
//       "Waste Water*",
//       "Waste Characterization (TCLP/TTLC/STLC)*",
//       "*Coming Early 2025",
//     ],
//     link: "/heavy-metals-testing",
//   },
// ];

// const WhyChooseSection = () => {
//   const [activeCategory, setActiveCategory] = useState<string | null>(null);

//   const handleToggle = (category: string) => {
//     setActiveCategory((prev) => (prev === category ? null : category));
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-36 flex flex-col md:flex-row items-center">
//       {/* Left Content */}
//       <motion.div
//         className="w-full md:w-1/2"
//         initial={{ opacity: 0, x: -50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl font-bold mb-4">Why Choose Pinnacle Laboratory?</h2>
//         <p className="mb-6 text-lg">
//           <strong>Pinnacle Laboratory</strong> is determined to provide top analytical services in Southern California.
//         </p>
//         <div className="space-y-4">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               className={`border rounded-lg shadow-sm ${
//                 activeCategory === service.category ? "bg-[#10b1b4]" : "bg-[#16436F]"
//               }`}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <button
//                 className="w-full text-left px-4 py-3 flex items-center justify-between font-medium text-lg text-white hover:bg-[#10b1b4]"
//                 onClick={() => handleToggle(service.category)}
//               >
//                 <span>{service.category}</span>
//                 {activeCategory === service.category ? (
//                   <ChevronDownIcon className="w-6 h-6 text-white" />
//                 ) : (
//                   <ChevronRightIcon className="w-6 h-6 text-white" />
//                 )}
//               </button>
//               {activeCategory === service.category && (
//                 <div className="px-6 py-4 text-gray-200">
//                   <ul className="list-disc space-y-2 pl-6">
//                     {service.items.map((item, idx) => (
//                       <li key={idx}>{item}</li>
//                     ))}
//                   </ul>
//                   <a
//                     href={service.link}
//                     className="mt-4 inline-block text-white font-medium hover:underline"
//                   >
//                     Learn More
//                   </a>
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>

//       {/* Right Content */}
//       <motion.div
//         className="w-full md:w-1/2 flex justify-center"
//         initial={{ opacity: 0, x: 50 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <Image
//           src="/pinnaclelab/art/microscope_art-removebg-preview.png"
//           alt="Microscope Art"
//           width={400}
//           height={400}
//           className="object-contain"
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default WhyChooseSection;























































"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const services = [
  {
    category: "Asbestos Testing",
    items: [
      "Building Materials Analysis by PLM",
      "1000 Point Count (Gravimetric & Non-Gravimetric)",
      "PLM Qualitative Dust",
      "PLM Qualitative Microvac",
      "CARB 435 Soil (Levels A & B)",
      "PCM Air Samples (NIOSH 7400)",
      "PLM Qualitative Soil",
      "CARB 435 Soil",
    ],
    link: "/dashboard/pages/analyticalservices/asbestos",
    image: "/pinnaclelab/Sample Photos/Amosite-in-1680.jpg",
  },
  {
    category: "Mold",
    items: ["Direct Fungal (Air)", "Direct Fungal Analysis (Swab, Tape Lift, Bulk)"],
    link: "/dashboard/pages/analyticalservices/mold",
    image: "/pinnaclelab/Sample Photos/chaetomium_spores.jpg",
  },
  {
    category: "Microbiology",
    items: ["Allergen/Pollen", "Water Bacteria (Colilert)", "Air & Surface Cultures"],
    link: "/dashboard/pages/analyticalservices/microbiology",
    image: "/pinnaclelab/microbiology/stock/Pollen_Adobe_stock.jpeg",
  },
  {
    category: "Fiberglass",
    items: ["PCM Air Samples (NIOSH 7400, Rule B)", "PLM Qualitative Dust Wipe"],
    link: "/dashboard/pages/analyticalservices/fiberglass",
    image: "/pinnaclelab/Sample Photos/fiberglass.png",
  },
  {
    category: "Lead",
    items: [
      "Paint Chip",
      "Dust Wipe",
      "Soil",
      "Drinking Water*",
      "Waste Water*",
      "Waste Characterization (TCLP/TTLC/STLC)*",
      "*Subcontracted Services*",
    ],
    link: "/dashboard/pages/analyticalservices/lead",
    image: "/leaddust.png",
  },
  {
    category: "Heavy Metals",
    items: [
      "Paint Chip",
      "Dust Wipe",
      "Soil",
      "Drinking Water*",
      "Waste Water*",
      "Waste Characterization (TCLP/TTLC/STLC)*",
      "*Subcontracted Services*",
    ],
    link: "/dashboard/pages/analyticalservices/heavy-metals",
    image: "/pinnaclelab/Sample Photos/ICP_HeavyMetals.jpeg",
  },
  // New "Fire & Smoke" Service
  {
    category: "Fire & Smoke",
    items: [
      "PLM Qualitative Dust Wipe",
      "PLM Qualitative Tape Lift",
      "NIOSH 500 Air Samples",

    ],
    link: "/dashboard/pages/analyticalservices/fire-&-smoke",
    image: "/pinnaclelab/Lab Pictures/LabPhoto (1).png",
  },
];

const WhyChooseSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [imageStack, setImageStack] = useState<string[]>([]);

  const handleToggle = (category: string, image: string) => {
    if (activeCategory === category) {
      setActiveCategory(null);
      setImageStack([]); // Clear the stack when closing
    } else {
      setActiveCategory(category);
      setImageStack([image]); // Replace stack with the active image
    }
  };

  return (
    <div className="relative bg-[#F5F5F5] overflow-hidden">
      {/* Top Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 py-12 gap-8">
        {/* Left Content */}
        <motion.div
          className="text-black z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-[#16436F] leading-snug">
            Why Choose Pinnacle Laboratory?
          </h2>
          <p className="text-lg leading-relaxed mb-6">
          With our decades of experience and cutting-edge technology, we are committed to providing exceptional analytical services, ensuring regulatory compliance and delivering timely, reliable results.
          </p>
          <Link
            href="/dashboard/pages/about/meetourteam"
            className="px-6 py-2 bg-[#10b1b4] text-white font-semibold rounded-lg hover:bg-[#0d91a0] transition"
          >
            Learn More About Us
          </Link>
        </motion.div>

        {/* Top-Right Static Image */}
        <motion.div
          className="relative w-full h-[250px] md:h-[300px] overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="overflow-hidden w-full h-full">
            <Image
              src="/pinnaclelab/Lab Pictures/IMG_3206.jpg"
              alt="Microscope Art"
              fill
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Divider with Color Transition */}
      <div className="relative">
        <div className="absolute inset-0 transform skew-y-2 bg-[#16436F] h-[40px]"></div>
      </div>

      {/* Bottom Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 py-12 gap-8">
        {/* Accordion Section */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`border rounded-lg shadow-sm ${
                  activeCategory === service.category ? "bg-[#10b1b4]" : "bg-[#16436F]"
                }`}
              >
                <button
                  className="w-full text-left px-4 py-3 flex items-center justify-between font-medium text-lg text-white hover:bg-[#10b1b4]"
                  onClick={() => handleToggle(service.category, service.image)}
                >
                  <span>{service.category}</span>
                  {activeCategory === service.category ? (
                    <ChevronDownIcon className="w-6 h-6 text-white" />
                  ) : (
                    <ChevronRightIcon className="w-6 h-6 text-white" />
                  )}
                </button>
                <AnimatePresence>
                  {activeCategory === service.category && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 text-gray-200">
                        <ul className="list-disc space-y-2 pl-6">
                          {service.items.map((item, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.1 * idx }}
                            >
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                        <Link
                          href={service.link}
                          className="mt-4 inline-block text-white font-medium hover:underline"
                        >
                          Learn More
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom-Right Default or Stacked Images */}
        <motion.div
          className="relative h-[300px] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {imageStack.length === 0 ? (
            <div className="absolute inset-0">
              <Image
                src="/pinnaclelab/Lab Pictures/20250328_102820.jpg"
                alt="Default Placeholder"
                fill
                className="rounded-lg shadow-md object-cover"
              />
            </div>
          ) : (
            imageStack.map((image, idx) => (
              <motion.div
                key={idx}
                className="absolute inset-0"
                style={{
                  top: idx * 10,
                  left: idx * 10,
                  zIndex: imageStack.length - idx,
                }}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={image}
                  alt={`Stacked image ${idx}`}
                  fill
                  className="rounded-lg shadow-md object-cover"
                />
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
















// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const services = [
//   {
//     category: "Asbestos Testing",
//     items: [
//       "Building Materials Analysis by PLM",
//       "1000 Point Count (Gravimetric & Non-Gravimetric)",
//       "PLM Qualitative Dust",
//       "PCM Air Samples (NIOSH 74)",
//       "PLM Qualitative Soil",
//       "CARB 435 Soil",
//     ],
//     link: "/asbestos-testing",
//   },
//   {
//     category: "Mold",
//     items: ["Direct Fungal (Air)", "Direct Fungal Analysis (Swab, Tape Lift, Bulk)"],
//     link: "/mold-testing",
//   },
//   {
//     category: "Fiberglass",
//     items: ["PCM Air Samples (NIOSH 7400, Rule B)", "PLM Qualitative Dust Wipe"],
//     link: "/fiberglass-testing",
//   },
//   {
//     category: "Lead",
//     items: [
//       "Paint Chip",
//       "Dust Wipe",
//       "Soil",
//       "Drinking Water*",
//       "Waste Water*",
//       "Waste Characterization (TCLP/TTLC/STLC)*",
//       "*Coming Early 2025",
//     ],
//     link: "/lead-testing",
//   },
//   {
//     category: "Heavy Metals",
//     items: [
//       "Paint Chip",
//       "Dust Wipe",
//       "Soil",
//       "Drinking Water*",
//       "Waste Water*",
//       "Waste Characterization (TCLP/TTLC/STLC)*",
//       "*Coming Early 2025",
//     ],
//     link: "/heavy-metals-testing",
//   },
// ];

// const WhyChooseSection = () => {
//   return (
//     <div className="relative bg-[#F5F5F5] py-24">
//       {/* Header */}
//       <div className="relative grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 gap-8">
//         {/* Left Content */}
//         <motion.div
//           className="text-black z-10"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl font-bold mb-6 text-[#16436F] leading-snug">
//             Why Choose Pinnacle Laboratory?
//           </h2>
//           <p className="text-lg leading-relaxed mb-6">
//             With decades of experience, we are committed to providing exceptional
//             testing services that ensure compliance with regulatory standards while
//             delivering precise, reliable results.
//           </p>
//           <Link
//             href="/dashboard/pages/about/meetourteam"
//             className="px-6 py-2 bg-[#10b1b4] text-white font-semibold rounded-lg hover:bg-[#0d91a0] transition"
//           >
//             Learn More About Us
//           </Link>
//         </motion.div>

//         {/* Right Image */}
//         <motion.div
//           className="relative"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <Image
//             src="/pinnaclelab/art/microscope_art-removebg-preview.png"
//             alt="Microscope Art"
//             width={400}
//             height={400}
//             className="rounded-lg shadow-md object-contain"
//           />
//         </motion.div>
//       </div>

//       {/* Divider */}
//       <div className="relative">
//         <div className="absolute inset-0 transform skew-y-2 bg-[#16436F] h-[40px]"></div>
//       </div>

//       {/* Services Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 mt-12">
//         {services.map((service, index) => (
//           <motion.div
//             key={index}
//             className="bg-[#16436F] text-white p-6 rounded-lg shadow-lg"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: index * 0.1 }}
//             viewport={{ once: true }}
//           >
//             <h3 className="text-2xl font-bold mb-4">{service.category}</h3>
//             <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
//               {service.items.map((item, idx) => (
//                 <li key={idx}>{item}</li>
//               ))}
//             </ul>
//             <Link
//               href={service.link}
//               className="text-[#10b1b4] font-medium hover:underline"
//             >
//               Learn More
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyChooseSection;
