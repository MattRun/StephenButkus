"use client";

import Image from "next/image";
import React from "react";
import Sidebar from "../Sidebar";

const fiberglassServices = [
  {
    title: "PCM Air Samples (NIOSH 7400, Rule B)",
    description: `Our laboratory offers air sample analysis utilizing NIOSH Method 7400 to determine the presence of airborne fiber concentrations.`,
  },
  {
    title: "PLM Qualitative Dust Wipe",
    description: `Our analysts can analyze dust wipe samples you submit to determine the presence of fiberglass fibers with our PLM Qualitative Dust service. We place dust wipes in a muffle furnace for approximately 10-12 hours (depending on the dust loading on the wipes) to burn off the wipe and any other non-combustible materials. Our analysts then sift through all the remaining ash to identify the presence of fiberglass fibers, and results are reported as either “No Fiberglass Detected” or “Fiberglass Detected” (qualitative results).`,
  },
  {
    title: "PLM Qualitative Bulk Testing – Fiberglass Fiber Detection",
    description: `Our PLM (Polarized Light Microscopy) Qualitative Bulk Testing service is designed to determine the presence or absence of fiberglass fibers in bulk material samples. This method provides fast and reliable screening of materials where fiberglass contamination is a concern.

How it works: You submit your bulk samples, and our experienced analysts examine them using PLM techniques to identify fiberglass fibers. Results are reported as either "Fiberglass Detected" or "No Fiberglass Detected" (qualitative results).

This service is ideal for environmental investigations, industrial hygiene assessments, or general material screening where detailed quantification is not required.`,
  },
];

const FiberglassPage = () => {
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
          src="/pinnaclelab/Sample Photos/fiberglass.png"
          alt="Fiberglass Testing Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-50"
        />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-4xl font-bold">
            Your Go-To Fiberglass Testing Lab!
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <Sidebar activeService="FIBERGLASS" />

          {/* Main Content */}
          <main className="w-full md:w-3/4">
            {/* Fiberglass Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6 text-gray-100">
                FIBERGLASS
              </h2>
              <Image
                src="/pinnaclelab/Sample Photos/fiberglass.png"
                alt="Fiberglass Testing"
                width={700}
                height={400}
                className="rounded-lg shadow-lg mb-6"
              />
              <p className="text-lg space-y-2">
                <span className="font-semibold">Fiberglass</span> consists of
                small strands of glass and is most commonly used in insulation
                applications, including:
              </p>

              <ul className="list-disc list-inside text-lg mt-2 space-y-1">
                <li>
                  <span className="font-semibold">Walls</span>
                </li>
                <li>
                  <span className="font-semibold">Ceilings</span>
                </li>
                <li>
                  <span className="font-semibold">Heating systems</span>
                </li>
              </ul>

              <p className="text-lg mt-4">
                While fiberglass is{" "}
                <span className="font-semibold">
                  not classified as a carcinogen
                </span>
                , it can still pose <strong>health risks</strong>. Exposure may
                lead to:
              </p>

              <ul className="list-disc list-inside text-lg mt-2 space-y-1">
                <li>
                  <span className="font-semibold">Respiratory irritation</span>
                </li>
                <li>
                  <span className="font-semibold">Skin irritation</span>
                </li>
                <li>
                  <span className="font-semibold">Other dermal reactions</span>{" "}
                  due to direct contact
                </li>
              </ul>

              <p className="text-lg mt-4">
                For those handling or working near fiberglass, proper protection
                and awareness of potential exposure effects are essential. If
                you're concerned about indoor environmental safety,{" "}
                <span className="font-semibold text-[#10b1b4]">
                  Pinnacle Laboratory
                </span>{" "}
                offers reliable testing to help detect and document
                fiberglass-related contamination.
              </p>
            </section>

            {/* Services Section */}
            <section className="mt-12">
              <h3 className="text-3xl font-bold text-gray-100 mb-8 border-b-2 border-[#10b1b4] pb-2">
                Our Fiberglass Services
              </h3>
              {fiberglassServices.map((service, index) => (
                <div
                  key={index}
                  id={createSlug(service.title)}
                  className="mb-10 p-6 rounded-lg shadow-md bg-[#1E5A81] border-l-4 border-[#10b1b4]"
                  // ID for "PCM Air Samples (NIOSH 7400, Rule B)" is "pcm-air-samples-niosh-7400-rule-b"
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
                    25,000+ PCM Air Samples Analyzed
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-white">✔</span>
                  <p className="text-sm text-gray-100">
                    Rigorous QC procedures to ensure the highest accuracy and
                    precision
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-white">✔</span>
                  <p className="text-sm text-gray-100">
                    Quick turnaround times (Same Day, Next Business Day, Two
                    Business Days)
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-white">✔</span>
                  <p className="text-sm text-gray-100">
                    Over 25 years of combined analytical experience
                  </p>
                </li>
              </ul>
            </div>

            {/* Accreditation */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-4">Accreditation</h3>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Image
                  src="/pinnaclelab/Partners/processed_sharp_white_logo.png"
                  alt="NVLAP Accreditation"
                  width={150}
                  height={150}
                  className="object-contain"
                />
                <p className="text-sm text-gray-100">
                  Accredited for Fiberglass Fiber Analysis using NIOSH Method 7400
                  and Polarized Light Microscopy (PLM) for qualitative dust and
                  bulk testing.
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

export default FiberglassPage;