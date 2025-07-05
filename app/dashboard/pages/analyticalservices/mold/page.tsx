
"use client";

import Image from "next/image";
import React from "react";
import Sidebar from "../Sidebar";

const moldServices = [
  {
    title: "Direct Fungal (Air)",
    description: `The analysis of air cassettes for non-viable fungal spores provides rapid qualitative (identification) and quantitative (spore enumeration) assessment of fungal taxa present in samples submitted for analysis. Following ASTM D7391-20, spore identification and quantitation are performed using a compound microscope equipped for light microscopy with a magnification capability of 20x to 1000x. The final lab report consists of a list of identified taxa and their associated concentrations (spores per cubic meter of air) calculated separately for each taxon. MEDIA ANALYZED: Allergenco-D, Allergenco-D Positrack, Air-O-Cell, Cyclex-D, and Micro 5 Microcell.`,
  },
  {
    title: "Direct Fungal Analysis (Swab, Tape Lift, Bulk)",
    description: `Furthermore, when analyzing the tape lifts and swabs for non-viable fungal spores provides rapid qualitative (identification) and semi-quantitative (fungal load categories by percentage) assessment of fungal taxa present in samples submitted for analysis. Following ASTM D7658-17, spore identification and quantitation are performed using a compound microscope equipped for light microscopy with a magnification capability of 20x to 1000x. The concluding lab report consists of a list of identified taxa and their associated fungal loading category determined separately for each taxon. MEDIA ANALYZED: Tape Lifts, Mold Swabs.`,
  },
];

const MoldPage = () => {
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
          src="/pinnaclelab/Sample Photos/chaetomium_spores.jpg"
          alt="Mold Testing Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-50"
        />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-4xl font-bold">Your Go-To Mold Testing Lab!</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <Sidebar activeService="MOLD" />

          {/* Main Content */}
          <main className="w-full md:w-3/4">
            {/* Mold Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-100">MOLD</h2>
              <Image
                src="/pinnaclelab/Sample Photos/chaetomium_spores.jpg"
                alt="Mold Testing"
                width={700}
                height={400}
                className="rounded-lg shadow-lg mb-6"
              />
              <p className="text-lg space-y-2">
                At <span className="font-semibold text-[#10b1b4]">
                  Pinnacle Laboratory
                </span>, we understand this complex organism. Our expert team
                provides advanced <span className="font-semibold">
                  mold analysis
                </span>, identifying various{" "}
                <span className="font-semibold">spore types</span> — including
                those capable of producing{" "}
                <span className="font-semibold">mycotoxins</span>.
              </p>

              <p className="text-lg mt-2">
                Like plants spreading seeds, molds release spores that land on
                moist areas, causing potential harm to:
              </p>

              <ul className="list-disc list-inside text-lg mt-2 space-y-1">
                <li>
                  <span className="font-semibold">Building structures</span>
                </li>
                <li>
                  <span className="font-semibold">Indoor air quality</span>
                </li>
                <li>
                  <span className="font-semibold">Human health</span>
                </li>
              </ul>

              <p className="text-lg mt-4">
                Choose{" "}
                <span className="font-semibold text-[#10b1b4]">
                  Pinnacle Laboratory
                </span>{" "}
                for a healthier, safer future — built on accurate results and
                trusted expertise.
              </p>
            </section>

            {/* Services Section */}
            <section className="mt-12">
              <h3 className="text-3xl font-bold text-gray-100 mb-8 border-b-2 border-[#10b1b4] pb-2">
                Our Mold Services
              </h3>
              {moldServices.map((service, index) => (
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
                    Final results are generated with detailed and precise
                    reports.
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
                    500,000+ Mold Samples Analyzed in Southern California.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-white">✔</span>
                  <p className="text-sm text-gray-100">
                    Direct fungal examination of multiple media types: air
                    cassette, tape lift, swab, bulk samples.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-white">✔</span>
                  <p className="text-sm text-gray-100">
                    Quick turnaround times (Same Day, Next Business Day, Two
                    Business Days).
                  </p>
                </li>
              </ul>
            </div>

            {/* Accreditation */}
            <div className="mt-12">
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
                  Accredited for Environmental Microbiology analysis including
                  fungal, bacterial, and allergen detection via air and surface
                  sampling methods.
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

export default MoldPage;