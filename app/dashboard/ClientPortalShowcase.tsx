"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const ClientPortalShowcase = () => {
  return (
    <div className="relative bg-[#F5F5F5] py-12 md:py-24">
      {/* Top Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 gap-8">
        {/* Left Image with Diagonal Crop */}
        <div className="relative">
          <div className="overflow-hidden w-full h-[250px] md:h-[300px]">
            <div className="absolute -rotate-3 -top-2 -left-2 bg-[#16436F] w-full h-full z-0"></div>
            <Image
              src="/pinnaclelab/Screenshot 2025-02-26 at 9.47.08 AM.png" // Replace with an appropriate image of the client portal or dashboard
              alt="Client Portal"
              fill
              className="rounded-lg shadow-md object-cover transform -rotate-2"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="text-black z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 leading-snug text-[#16436F]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Your All-in-One Client Portal
          </motion.h2>
          <p className="text-base leading-relaxed mb-4">
            Pinnacle Laboratory stands out with our advanced client portal, providing you with easy access to Chain-of-Custodies, invoices, and lab results, allowing you to stay in control, save time, and make informed decisions.
          </p>
          <p className="text-base leading-relaxed">
            Experience the power of real-time insights, secure document management, and unparalleled convenience that sets us apart as the best in environmental testing.
          </p>
          <Link
            href="https://limsexpressplus.com/software/html5.html?user=*PinnacleReports&pwd=NscK45v2!Cr" // Adjust this path as needed
            className="mt-6 inline-block px-6 py-2 bg-[#10b1b4] text-white font-semibold rounded-lg hover:bg-[#0d91a0] transition"
          >
            Explore the Portal
          </Link>
        </div>
      </div>

      {/* Divider with Color Transition */}
      <div className="relative">
        <div className="absolute inset-0 transform skew-y-2 bg-[#16436F] h-[40px]"></div>
      </div>
    </div>
  );
};

export default ClientPortalShowcase;