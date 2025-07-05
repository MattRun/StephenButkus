"use client";

import Image from "next/image";
import React from "react";
import Sidebar from "../Sidebar";

const leadServices = [
  {
    title: "PAINT CHIP (EPA 3050B & 6010D)",
    description: `Analysis of paint chips to determine lead content, ensuring compliance with EPA regulations. This method is essential for identifying hazardous materials in residential and industrial settings.`,
  },
  {
    title: "DUST WIPE (EPA 3050B & 6010D)",
    description: `Our lab analyzes dust wipe samples for lead content using EPA Method 3050B & 6010D. This service is crucial for evaluating lead contamination in indoor environments.`,
  },
  {
    title: "SOIL (EPA 3050B & 6010D)",
    description: `Soil samples are analyzed to determine lead content using EPA guidelines. This service is vital for assessing environmental and agricultural safety.`,
  },
  {
    title: "AIR (NIOSH 7303M)",
    description: `Air samples are evaluated for lead concentrations using the NIOSH 7303M method. This service ensures compliance with occupational and environmental air quality standards.`,
  },
  {
    title: "DRINKING WATER (EPA 200.5)",
    description: `Subcontracted: Lead analysis in drinking water, following EPA 200.5 standards to ensure safe water consumption.`,
  },
  {
    title: "WASTEWATER (EPA 200.7)",
    description: `Subcontracted: Comprehensive lead analysis in wastewater, following EPA 200.7 standards for industrial and environmental safety.`,
  },
  {
    title: "WASTE CHARACTERIZATION (TCLP/TTLC/STLC)",
    description: `Subcontracted: Waste characterization services for lead content, following TCLP, TTLC, and STLC guidelines to ensure proper handling and disposal of hazardous materials.`,
  },
];

const LeadPage = () => {
  // Function to create a slug from the service title
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  return (
    <div className="relative bg-gradient-to-b from-[#16436F] to-[#10b1b4] text-gray-100">
      <style jsx>{`
        .pulse-glow {
          animation: pulse-glow 1.5s ease-in-out 1;
        }
        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 0 0 rgba(74, 205, 213, 0.8);
          }
          50% {
            box-shadow: 0 0 30px 15px rgba(74, 205, 213, 0.8);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(74, 205, 213, 0);
          }
        }
      `}</style>
      {/* Banner Section */}
      <div className="relative bg-[#10b1b4] text-white py-20">
        <Image
          src="/leaddust.png"
          alt="Lead Testing Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-50"
        />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-4xl font-bold">Your Go-To Lead Testing Lab!</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <Sidebar activeService="LEAD" />

          {/* Main Content */}
          <main className="w-full md:w-3/4">
            {/* Lead Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-100">LEAD</h2>
              <Image
                src="/leaddust.png"
                alt="Lead Testing"
                width={700}
                height={400}
                className="rounded-lg shadow-lg mb-6"
              />
              <p className="text-lg space-y-2">
                Manufacturers commonly added{" "}
                <span className="font-semibold">lead</span> to products such as{" "}
                <span className="font-semibold">paint</span> and{" "}
                <span className="font-semibold">ceramics</span> to:
              </p>

              <ul className="list-disc list-inside text-lg mt-2 space-y-1">
                <li>
                  <span className="font-semibold">Speed up drying</span>
                </li>
                <li>
                  <span className="font-semibold">Enhance durability</span>
                </li>
                <li>
                  <span className="font-semibold">Maintain a fresh appearance</span>
                </li>
                <li>
                  <span className="font-semibold">
                    Prevent moisture-induced corrosion
                  </span>
                </li>
              </ul>

              <p className="text-lg mt-4">
                Despite its practical use, researchers have confirmed that{" "}
                <span className="font-semibold">lead is toxic</span> to both
                humans and animals, making it a major{" "}
                <span className="font-semibold text-[#10b1b4]">
                  health and environmental concern
                </span>{" "}
                — especially in connection with{" "}
                <span className="font-semibold">paint and ceramic tile</span>.
              </p>

              <p className="text-lg mt-2">
                Lead is still found throughout the environment, including in:
              </p>

              <ul className="list-disc list-inside text-lg mt-2 space-y-1">
                <li>
                  <span className="font-semibold">Air</span>
                </li>
                <li>
                  <span className="font-semibold">Soil</span>
                </li>
                <li>
                  <span className="font-semibold">Water</span>
                </li>
                <li>
                  <span className="font-semibold">Homes</span>
                </li>
              </ul>
            </section>

            {/* Services Section */}
            <section className="mt-12">
              <h3 className="text-3xl font-bold text-gray-100 mb-8 border-b-2 border-[#10b1b4] pb-2">
                Our Upcoming Lead Services
              </h3>
              {leadServices.map((service, index) => (
                <div
                  key={index}
                  id={createSlug(service.title)}
                  className="mb-10 p-6 rounded-lg shadow-md bg-[#1E5A81] border-l-4 border-[#10b1b4]"
                >
                  <h4 className="text-xl font-semibold text-[#10b1b4] mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-100 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </section>

            {/* Analytical Process */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Our Analytical Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-blue-100 p-6">
                    <span className="text-2xl font-bold text-[#10b1b4]">
                      01
                    </span>
                  </div>
                  <h4 className="mt-4 text-lg font-medium">Initial Analysis</h4>
                  <p className="text-sm text-gray-700">
                    We begin with a thorough initial analysis of submitted
                    samples.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-blue-100 p-6">
                    <span className="text-2xl font-bold text-[#10b1b4]">
                      02
                    </span>
                  </div>
                  <h4 className="mt-4 text-lg font-medium">Random QC Sampling</h4>
                  <p className="text-sm text-gray-700">
                    We employ random QC sampling for accuracy and precision.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-blue-100 p-6">
                    <span className="text-2xl font-bold text-[#10b1b4]">
                      03
                    </span>
                  </div>
                  <h4 className="mt-4 text-lg font-medium">
                    Generating Final Results
                  </h4>
                  <p className="text-sm text-gray-700">
                    Final results are generated with detailed and precise reports.
                  </p>
                </div>
              </div>
            </div>

            {/* The Pinnacle Difference */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4">The Pinnacle Difference</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <li className="flex items-start gap-4">
                  <span className="text-white">✔</span>
                  <p className="text-sm text-gray-700">
                    Quick turnaround times to meet your project's needs
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-white">✔</span>
                  <p className="text-sm text-gray-700">
                    Rigorous QC procedures to ensure the highest accuracy and
                    precision
                  </p>
                </li>
              </ul>
            </div>

            {/* Accreditation */}
            {/* <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4">Accreditation</h3>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Image
                  src="/pinnaclelab/Partners/225542_AIHA LAP Symbol ELLAP_2025_01_13_white text_MOD.png"
                  alt="AIHA Environmental Lead"
                  width={150}
                  height={150}
                  className="object-contain"
                />
                <p className="text-sm text-gray-100">
                  Asbestos Fiber Analysis – EPA Method 600/R-93/116 & 40 CFR
                  Appendix E to Subpart E of Part 763.
                </p>
              </div>
            </div> */}

            {/* Customer Reviews */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Look at What Our Customers Say!
              </h3>
              <a
                href="https://www.google.com/search?q=google+reviews+pinnacle+laboratory&oq=google+reviews+pinnacle+laboratory&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRhA0gEIODExOGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x80c2b5da8ee1c1b7:0x5679441e98c3a24,1,,,,"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/png-clipart-google-customer-review-business-company-google-search-engine-optimization-company-Photoroom.png"
                  alt="Google Reviews"
                  width={200}
                  height={50}
                  className="mx-auto hover:scale-110 transition-transform duration-200"
                />
              </a>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default LeadPage;