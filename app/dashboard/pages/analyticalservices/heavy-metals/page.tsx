"use client";

import Image from "next/image";
import React from "react";
import Sidebar from "../Sidebar";

const heavyMetalsServices = [
  {
    title: "PAINT CHIP (EPA 3050B & 6010D)",
    description: `Analysis of paint chips to determine heavy metal content, ensuring compliance with EPA regulations. This method is essential for identifying hazardous materials in residential and industrial settings.`,
  },
  {
    title: "DUST WIPE (EPA 3050B & 6010D)",
    description: `Our lab analyzes dust wipe samples for heavy metal content using EPA Method 3050B & 6010D. This service is crucial for evaluating contamination in indoor environments.`,
  },
  {
    title: "SOIL (EPA 3050B & 6010D)",
    description: `Soil samples are analyzed to determine heavy metal content using EPA guidelines. This service is vital for assessing environmental and agricultural safety.`,
  },
  {
    title: "AIR (NIOSH 7303M)",
    description: `Air samples are evaluated for heavy metal concentrations using the NIOSH 7303M method. This service ensures compliance with occupational and environmental air quality standards.`,
  },
  {
    title: "DRINKING WATER (EPA 200.5)",
    description: `Subcontracted: Heavy metal analysis in drinking water, following EPA 200.5 standards to ensure safe water consumption.`,
  },
  {
    title: "WASTEWATER (EPA 200.7)",
    description: `Subcontracted: Comprehensive heavy metal analysis in wastewater, following EPA 200.7 standards for industrial and environmental safety.`,
  },
  {
    title: "WASTE CHARACTERIZATION (TCLP/TTLC/STLC)",
    description: `Subcontracted: Waste characterization services for heavy metals, following TCLP, TTLC, and STLC guidelines to ensure proper handling and disposal of hazardous materials.`,
  },
];

const HeavyMetalsPage = () => {
  // Function to create a slug from the service title with debugging
  const createSlug = (title: string) => {
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9./]+/g, "-") // Preserve . and /, replace other non-alphanumeric
      .replace(/\.+/g, "-") // Replace . with -
      .replace(/\/+/g, "-") // Replace / with -
      .replace(/(^-|-$)/g, "");
    console.log(`Generated id for "${title}": ${slug}`);
    return slug;
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
          src="/pinnaclelab/Sample Photos/ICP_HeavyMetals.jpeg"
          alt="Heavy Metals Testing Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-50"
        />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-4xl font-bold">
            Your Go-To Heavy Metals Testing Lab!
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <Sidebar activeService="HEAVY METALS" />

          {/* Main Content */}
          <main className="w-full md:w-3/4">
            {/* Heavy Metals Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-100">
                HEAVY METALS
              </h2>
              <Image
                src="/pinnaclelab/Sample Photos/ICP_HeavyMetals.jpeg"
                alt="Heavy Metals Testing"
                width={700}
                height={400}
                className="rounded-lg shadow-lg mb-6"
              />
              <p className="text-lg">
                <span className="font-semibold">California</span> recognizes
                seventeen heavy metals in the{" "}
                <span className="font-semibold">
                  California Administrative Manual/Title XXII
                </span>
                , referred to as <span className="font-semibold">CAM 17</span> or{" "}
                <span className="font-semibold">Title 22 Metals</span>. The
                elements on this list include:
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 text-lg mt-2">
                <li>
                  Antimony (<span className="font-semibold">Sb</span>)
                </li>
                <li>
                  Arsenic (<span className="font-semibold">As</span>)
                </li>
                <li>
                  Barium (<span className="font-semibold">Ba</span>)
                </li>
                <li>
                  Beryllium (<span className="font-semibold">Be</span>)
                </li>
                <li>
                  Cadmium (<span className="font-semibold">Cd</span>)
                </li>
                <li>
                  Chromium (<span className="font-semibold">Cr</span>)
                </li>
                <li>
                  Cobalt (<span className="font-semibold">Co</span>)
                </li>
                <li>
                  Copper (<span className="font-semibold">Cu</span>)
                </li>
                <li>
                  Lead (<span className="font-semibold">Pb</span>)
                </li>
                <li>
                  Mercury (<span className="font-semibold">Hg</span>)
                </li>
                <li>
                  Molybdenum (<span className="font-semibold">Mo</span>)
                </li>
                <li>
                  Nickel (<span className="font-semibold">Ni</span>)
                </li>
                <li>
                  Selenium (<span className="font-semibold">Se</span>)
                </li>
                <li>
                  Silver (<span className="font-semibold">Ag</span>)
                </li>
                <li>
                  Thallium (<span className="font-semibold">Tl</span>)
                </li>
                <li>
                  Vanadium (<span className="font-semibold">V</span>)
                </li>
                <li>
                  Zinc (<span className="font-semibold">Zn</span>)
                </li>
              </ul>
            </section>

            {/* Services Section */}
            <section className="mt-12">
              <h3 className="text-3xl font-bold text-gray-100 mb-8 border-b-2 border-[#10b1b4] pb-2">
                Our Heavy Metals Services
              </h3>
              {heavyMetalsServices.map((service, index) => (
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
                  <p className="text-sm text-gray-100">
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
                  <p className="text-sm text-gray-100">
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
                  <p className="text-sm text-gray-100">
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
                  <p className="text-sm text-gray-100">
                    Quick turnaround times to meet your project's needs
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-white">✔</span>
                  <p className="text-sm text-gray-100">
                    Rigorous QC procedures to ensure the highest accuracy and
                    precision
                  </p>
                </li>
              </ul>
            </div>

            {/* Accreditation */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4">Accreditation</h3>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Image
                  src="/pinnaclelab/Partners/225542_AIHA LAP Symbol IHLAP_2025_01_13_white text_MOD.png"
                  alt="AIHA Industrial Hygiene"
                  width={150}
                  height={150}
                  className="object-contain"
                />
                <Image
                  src="/pinnaclelab/Partners/225542_AIHA LAP Symbol ELLAP_2025_01_13_white text_MOD.png"
                  alt="AIHA Environmental Lead"
                  width={150}
                  height={150}
                  className="object-contain"
                />
                <p className="text-sm text-gray-100">
                  Accredited for Heavy Metals Analysis using EPA Methods 3050B,
                  6010D, 200.5, 200.7, and NIOSH 7303M, ensuring compliance with
                  environmental and occupational safety standards.
                </p>
              </div>
            </div>

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

export default HeavyMetalsPage;