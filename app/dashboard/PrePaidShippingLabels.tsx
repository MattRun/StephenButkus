// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const PrePaidShippingLabels = () => {
//   return (
//     <div className="bg-[#16436F] text-white py-16">
//       <div className="max-w-4xl mx-auto px-6 text-center">
//         <motion.span
//           className="text-[#10b1b4] font-medium tracking-widest uppercase"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           Shipping Made Simple
//         </motion.span>
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold mt-4"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           Pre-Paid Shipping Labels—Print, Stick, Ship!
//         </motion.h2>
//         <p className="text-lg text-gray-300 mt-6">
//           With Pinnacle Laboratory, generating pre-paid FedEx shipping labels is effortless. Print them from home, attach to your sample package, and drop it off at any FedEx location. We’ve got your samples covered from start to finish—fast, secure, and hassle-free.
//         </p>
//         <div className="mt-8 flex justify-center gap-4">
//           <motion.a
//             href="/dashboard/pages/shippinglabelform" // Adjust this path as needed
//             className="bg-[#10b1b4] hover:bg-[#16438F] text-white px-6 py-3 rounded-full text-lg font-medium transition"
//             initial={{ scale: 0.9 }}
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             Get Started
//           </motion.a>
//           <motion.a
//             href="/dashboard/pages/contactus/generalinquiry"
//             className="border border-blue-500 hover:border-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium transition"
//             initial={{ scale: 0.9 }}
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             Contact Us
//           </motion.a>
//         </div>
//         <motion.div
//           className="mt-12"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           viewport={{ once: true }}
//         >
//           <Image
//             src="/pinnaclelab/Screenshot 2025-02-05 at 9.12.40 AM.png" // Replace with an appropriate shipping label image
//             alt="Pre-Paid Shipping Label Example"
//             width={400}
//             height={400}
//             className="object-contain mx-auto rounded-lg shadow-md"
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default PrePaidShippingLabels;


























"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const PrePaidShippingLabels = () => {
  return (
    <div className="relative bg-[#16436F] text-white py-16 overflow-hidden">
      {/* Bold Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 0.85, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image
          src="/pinnaclelab/Screenshot 2025-02-05 at 9.12.40 AM.png" // Background shipping label
          alt="Pre-Paid Shipping Label Background"
          fill
          className="object-cover transform rotate-[-5deg] scale-110"
          style={{ filter: "contrast(110%) brightness(80%)" }}
        />
      </motion.div>

      {/* Overlay Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Left: Big, Bold Text */}
        <div className="text-left">
          <motion.span
            className="text-[#10b1b4] font-bold tracking-wider uppercase text-lg drop-shadow-lg"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Top Feature
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mt-2 leading-tight bg-gradient-to-r from-white to-[#10b1b4] bg-clip-text text-transparent drop-shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            PRE-PAID<br />SHIPPING<br />LABELS
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-white mt-4 font-semibold max-w-md drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Print. Stick. Ship.<br />FedEx, Done!
          </motion.p>
        </div>

        {/* Right: Buttons and Resized Image */}
        <div className="flex flex-col items-center gap-6">
          <motion.div
            className="relative w-48 md:w-64 h-32 md:h-40"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <Image
              src="/pinnaclelab/Screenshot 2025-02-05 at 9.12.40 AM.png" // Foreground shipping label
              alt="Pre-Paid Shipping Label Example"
              fill
              className="object-contain rounded-lg shadow-2xl border-2 border-[#10b1b4]"
            />
          </motion.div>
          <motion.a
            href="/dashboard/pages/shippinglabelform"
            className="bg-[#10b1b4] hover:bg-[#0d8d90] text-white px-8 py-4 rounded-full text-xl font-bold shadow-2xl transition-all transform"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(16, 177, 180, 0.9)", rotate: 2 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
           PRINT & SHIP NOW
          </motion.a>
          <motion.a
            href="/dashboard/pages/contactus/generalinquiry"
            className="bg-transparent border-3 border-[#10b1b4] hover:bg-[#10b1b4] text-[#10b1b4] hover:text-white px-8 py-4 rounded-full text-xl font-bold shadow-2xl transition-all transform"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(16, 177, 180, 0.9)", rotate: -2 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
          >
            QUESTIONS?
          </motion.a>
        </div>
      </div>

      {/* Floating Badge with Scroll Animation */}
      <motion.div
        className="absolute bottom-4 left-4 bg-[#10b1b4] text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
        initial={{ opacity: 0, scale: 0, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, type: "spring", stiffness: 120 }}
        viewport={{ once: true }}
      >
        FAST • SECURE • FREE
      </motion.div>

      {/* Scroll-Triggered Overlay Animation */}
      <motion.div
        className="absolute inset-0 z-5 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#16436F] opacity-60" />
      </motion.div>
    </div>
  );
};

export default PrePaidShippingLabels;