"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import StatsSection from "./StatsSection";
import Link from "next/link";

// Example downloads data
const downloads = [
  {
    category: "ASBESTOS",
    icon: "/pinnaclelab/Sample Photos/Amosite-in-1680.jpg",
    links: [
      {
        name: "Asbestos Bulk Chain-of-Custody",
        url: "/pdfs/Pinnacle Laboratory - Asbestos Bulk COC Rev004_10072024.pdf",
      },
      {
        name: "Asbestos Air Chain-of-Custody",
        url: "/pdfs/Asbestos Air COC.pdf",
      },
    ],
  },
  {
    category: "FIBERGLASS",
    icon: "/pinnaclelab/Sample Photos/fiberglass.png",
    links: [
      {
        name: "Fiberglass Bulk Chain-of-Custody",
        url: "/pdfs/Fiberglass Bulk COC.pdf",
      },
      {
        name: "Fiberglass Air Chain-of-Custody",
        url: "/pdfs/Fiberglass Air COC.pdf",
      },
    ],
  },
  {
    category: "MICROBIOLOGY",
    icon: "/WSafe002.jpg",
    links: [
      {
        name: "Microbiology Chain-of-Custody",
        url: "/pdfs/Pinnacle_Laboratory_Microbiology_COC.pdf",
      },
      // {
      //   name: "Microbiology Chain-of-Custody_V02",
      //   url: "/pdfs/Microbiology COC_v02.pdf",
      // },
    ],
  },
  {
    category: "LEAD & HEAVY METALS",
    icon: "/pinnaclelab/Sample Photos/ICP_HeavyMetals.jpeg",
    links: [
      // {
      //   name: "Lead XRF Chain-of-Custody",
      //   url: "public/pdfs/Lead XRF COC.pdf",
      // },
      {
        name: "Lead & Heavy Metals (Paint Chip, Dust Wipe, Soil) Chain-of-Custody",
        url: "/pdfs/Heavy Metals COC Rev008.pdf",
      },
      {
        name: "Lead & Heavy Metals ONLY ICP (Paint Chip, Dust Wipe, Soil) Chain-of-Custody",
        url: "/pdfs/Heavy Metals COC_ICP Only_Rev007.pdf",
      },
    ],
  },
  {
    category: "MATERIALS SCIENCE",
    icon: "/pinnaclelab/Sample Photos/Microscope.jpg",
    links: [
      {
        name: "Materials Science Chain-of-Custody",
        url: "/pdfs/Pinnacle Laboratory - Materials Science COC.pdf",
      },
    ],
  },
];


const DownloadsPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [fadeInRight, setFadeInRight] = useState<boolean>(false);

  // Simple effect to trigger a fade/slide in animation on the right side
  useEffect(() => {
    setFadeInRight(true);
  }, []);

  const handleToggle = (category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="bg-[#16436F] text-gray-800">
      {/* Banner Section */}
      <div className="relative">
        <Image
          src="/pinnaclelab/Lab Pictures/AdobeStock_138297161.jpeg"
          alt="Downloads Banner"
          fill
          className="object-cover opacity-90"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#16436F] opacity-80"></div>
        <div className="relative max-w-6xl mx-auto py-40 px-6 flex items-center justify-end">
          <div className="w-full md:w-1/2 text-right text-white">
            <h1 className="text-6xl font-extrabold mb-6">Chain of Custody Forms</h1>
            <p className="text-lg leading-relaxed">
              Access chain-of-custody forms for asbestos, fiberglass, microbiology, lead, and heavy metals. 
              Click on a category to expand and download the forms.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection />

      {/* Main Content Section (Accordion + Right-Side Info/Animation) */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:grid md:grid-cols-2 md:gap-8">
        {/* Left Column: Accordion */}
        <div>
          {downloads.map((item, index) => (
            <div
              key={index}
              className="mb-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300 border border-gray-200"
            >
              {/* Accordion Header */}
              <button
                onClick={() => handleToggle(item.category)}
                className="w-full text-left px-4 py-3 flex items-center justify-between text-lg font-medium bg-white hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Image
                    src={item.icon}
                    alt={`${item.category} Icon`}
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                  <span>{item.category}</span>
                </div>
                {activeCategory === item.category ? (
                  <ChevronDownIcon className="w-6 h-6 text-gray-500" />
                ) : (
                  <ChevronRightIcon className="w-6 h-6 text-gray-500" />
                )}
              </button>
              {/* Accordion Content */}
              {activeCategory === item.category && (
                <div className="px-6 py-4 bg-gray-50">
                  <ul className="space-y-2">
                    {item.links.map((link, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="text-green-500">&#x2713;</span>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column: Animated Image/Content */}
        <div
          className={`mt-8 md:mt-0 transform transition-all duration-700 ease-out ${
            fadeInRight ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          }`}
        >
          <div className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden h-full flex flex-col justify-center items-center">
            <h2 className="text-2xl font-semibold text-center mb-4">Need Help?</h2>
            <p className="text-gray-600 text-center mb-6">
              Our dedicated staff is ready to guide you through 
              the entire submission process. 
            </p>
            {/* Example image with a subtle hover scale effect */}
            <div className="w-full h-56 relative overflow-hidden rounded-lg group mb-4">
              <Image
                src="/AdobeStock_4.png"
                alt="Placeholder"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <Link href="/dashboard/pages/contactus/generalinquiry">
  <button className="bg-[#16436F] text-white py-2 px-4 rounded-lg hover:bg-[#0f2b48] transition-colors">
    Contact Us
  </button>
</Link>
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="relative bg-gradient-to-b from-[#16436F] to-[#10b1b4] text-white overflow-hidden">
  {/* Smaller Top Wave */}
  <div className="absolute top-0 left-0 w-full">
    <svg
      className="w-full h-auto"
      viewBox="0 0 1440 70"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        fill="#ffffff"
        d="M0,20 C200,60 400,10 700,10 C1000,10 1200,60 1440,20 L1440,0 L0,0 Z"
      />
    </svg>
  </div>

  {/* Main Content with extra top/bottom padding */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-24">
    <h2 className="text-3xl font-bold mb-4">Additional Information</h2>
    <p className="text-lg leading-relaxed">
      Our office is available for walk-in sample submissions Monday through Friday
      from 9:00 AM until 5:00 PM. For after-hours sample drop-offs, utilize our
      convenient 24-hour dropbox, checked multiple times daily at:
    </p>
    <ul className="list-disc pl-6 mt-4 space-y-1 text-lg">
      <li>9:00 AM</li>
      <li>11:30 AM</li>
      <li>2:00 PM</li>
      <li>4:00 PM</li>
      <li>5:00 PM</li>
    </ul>
    <p className="mt-4 text-lg">
      For expedited service, we suggest opting for a walk-in submission to ensure
      timely receipt of your samples.
    </p>
  </div>

  {/* Smaller Bottom Wave (rotated) */}
  <div className="absolute bottom-0 left-0 w-full rotate-180">
    <svg
      className="w-full h-auto"
      viewBox="0 0 1440 70"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        fill="#ffffff"
        d="M0,20 C200,60 400,10 700,10 C1000,10 1200,60 1440,20 L1440,70 L0,70 Z"
      />
    </svg>
  </div>
</div>

    </div>
  );
};

export default DownloadsPage;
