"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const accreditations = [
  {
    title: "AIHA-LAP, LLC Accreditation",
    description:
      "Pinnacle Laboratory is proud to be accredited by AIHA-LAP, LLC. This recognition highlights our adherence to the highest standards in environmental testing and analysis.",
    link: "https://docs.google.com/document/d/1Fb_2FwsFqErADKcFd5jc6UBHePpkPEIqLfTxoCNF8Ac/edit?usp=sharing", // Replace with actual sharable doc link
  },
  {
    title: "NVLAP Accreditation for Asbestos Fiber Analysis",
    description:
      "Our NVLAP accreditation certifies our capabilities in asbestos fiber analysis under stringent EPA and NVLAP standards. This accreditation demonstrates our technical competence and commitment to precision.",
    link: "/pdfs/NVLAP Accreditation Certificate (Expires 3-31-2026).pdf", // <-- This will now download or open the PDF
  },
];


export default function AccreditationsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="text-white overflow-hidden">
      {/* Banner Section */}
      <div className="relative">
      <div className="relative w-full h-[400px]">
  {/* Background Image */}
  <Image
    src="/pinnaclelab/Lab Pictures/JLMEnvironmental-32.jpg"
    alt="Accreditation Banner"
    layout="fill"
    objectFit="cover"
    className="w-full opacity-90"
  />
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#16436F] opacity-50"></div>

  {/* Overlay Image */}
  {/* <div className="absolute top-0 left-0 h-3/4 w-1/3">
    <Image
      src="/AdobeStock_10.png"
      alt="Overlay Image"
      layout="fill"
      objectFit="contain"
      className="opacity-80"
    />
  </div> */}

<div className="relative max-w-6xl mx-auto py-20 flex justify-end container mx-auto px-4">
  {/* Text Section - Positioned on the Right */}
  <motion.div
  className="w-full md:w-1/2 px-6 text-center md:text-right"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
<h1 className="text-5xl md:text-7xl font-bold w-full text-center whitespace-nowrap">
  Accreditation
</h1>


  <p className="mt-6 text-lg leading-relaxed">
    At Pinnacle Laboratory, our commitment to precision and quality ensures results you can trust. As an accredited
    laboratory, we’ve meticulously analyzed over 1,000,000 samples, embodying the Pinnacle difference that sets us
    apart.
  </p>
</motion.div>

</div>



</div>
        {/* Blending Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#16436F] to-transparent pointer-events-none"></div>
      </div>

      {/* Gradient Section */}
      <section className="bg-gradient-to-b from-[#16436F] to-[#10b1b4]">
        {/* Introduction Section */}
        <div className="max-w-6xl mx-auto px-6 py-16 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Our Accreditations Matter</h2>
              <p className="text-lg leading-relaxed text-gray-200">
                Our certifications underscore our dedication to maintaining the highest standards in environmental
                testing. These accreditations reflect our transparency, reliability, and commitment to delivering
                exceptional results.
              </p>
            </div>
          </motion.div>

          {/* Additional Explanation */}
          <motion.div
            className="bg-[#1E5A81] p-8 rounded-lg shadow-lg text-gray-200 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">Our Commitment to Excellence</h3>
            <p className="leading-relaxed mb-4">
              Furthermore, our accreditations underscore our dedication to maintaining the highest standards in
              environmental testing. We believe in transparency and accountability, and our track record of
              successfully handling a vast number of samples attests to our proficiency and reliability.
            </p>
            <p className="leading-relaxed">
              At Pinnacle Laboratory, we don’t just meet industry standards; we exceed them, consistently delivering
              results that reflect our commitment to excellence. To better understand our commitment to quality, take a
              moment to review our accreditations listed below. These certifications serve as a testament to our
              expertise and adherence to stringent protocols.
            </p>
          </motion.div>

          <motion.div
  className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto px-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8, staggerChildren: 0.2 }}
>
  {accreditations.map((accreditation, index) => (
    <motion.a
      key={index}
      href={accreditation.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#1E5A81] rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#10b1b4] mb-4">{accreditation.title}</h3>
        <p className="text-gray-100">{accreditation.description}</p>
        <p className="text-sm mt-4 underline text-[#88ecf4]">View Document</p>
      </div>
    </motion.a>
  ))}
</motion.div>

        </div>
      </section>

      {/* Modal for Image Expansion */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative bg-white p-4 rounded-lg shadow-lg"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-black bg-white rounded-full p-2 shadow hover:bg-gray-200"
                onClick={() => setSelectedImage(null)}
              >
                X
              </button>
              <div className="w-full h-auto">
                <Image
                  src={selectedImage}
                  alt="Expanded Accreditation Image"
                  width={800}
                  height={800}
                  objectFit="contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
