"use client";

import Image from "next/image";
import React from "react";
import Sidebar from "../Sidebar";

const asbestosServices = [
  {
    title: "Building Materials Analysis by PLM*",
    description: `To begin, Polarized Light Microscopy (PLM) serves as a technique for analyzing bulk building materials by employing polarized light to examine distinct optical properties. Initially, our asbestos analysts differentiate between asbestos and non-asbestos fibers, and subsequently, they classify and quantify the different fiber types constituting the asbestos mineral family. Following the analytical process, if asbestos is identified, specific regulatory requirements or laws come into play, necessitating their implementation in the handling, work practices, and disposal of the material. It is crucial to note that the limit of detection stands at 1%.`,
  },
  {
    title: "1000 Point Count (Gravimetric & Non-Gravimetric)*",
    description: `Moreover, If a specific building material necessitates additional testing to establish whether the asbestos content complies with Cal/OSHA's regulated level of 0.1% or the SCAQMD/EPA's regulated level of 1%, Pinnacle Laboratory can conduct the analysis using the 1000-point count quantification method. In alignment with conventional PLM methods, our asbestos analysts employ a more refined preparation and quantification process. This involves meticulously counting 1000 points under the microscope to ascertain the asbestos content. As a result, the name of the method. Notably, the limit of detection stands at 0.1%.`,
  },
  {
    title: "PLM Qualitative Dust* & PCM Cassette",
    description: `Furthermore, Pinnacle Laboratory's asbestos analysts have the capability to analyze dust wipe and pcm cassette samples submitted for assessing the presence of asbestos fibers through our PLM Qualitative Dust service. Initially, the dust wipes undergo placement in a muffle furnace for approximately 10-12 hours (duration dependent on the dust loading on the wipes) to incinerate the wipe and eliminate any non-asbestos materials. Subsequently, our analysts meticulously examine all the remaining ash to identify the presence of asbestos fibers, and the results are reported qualitatively as either "No Asbestos Detected" or "[Asbestos Type] Detected.`,
  },
  {
    title: "PLM Qualitative Tape Lift*",
    description: `Additionally, Pinnacle Laboratory’s Asbestos Department has the ability to analyze tape lift samples to assess the presence of asbestos fibers through our PLM Qualitative analytical service. Initially, samples are submitted to the lab as pre-collected debris on the sticky side of clear Scotch tape and then subsequently analyzed directly from the slide. The analysts scan and confirm for the presence or absence of asbestos fibers, and the results are reported qualitatively as either “No Asbestos Detected” or “[Asbestos type] Present”.`,
  },
  {
    title: "PLM Qualitative Soil*",
    description: `Pinnacle Laboratory’s asbestos analysts also have the capability to analyze soil and aggregate debris samples submitted to assess the presence of asbestos fibers through our PLM Qualitative Soil service. Initially, sample material is dried in the oven and afterwards, our analysts take a broad observation of the soil/ debris mass, generally sifting through and crushing the sample while looking for any suspect material. The analysts then analyze and confirm for the presence or absence of asbestos fibers, and the results are reported qualitatively as either “No Asbestos Detected” or “[Asbestos type] Present”.`,
  },
  {
    title: "CARB Method 435 (Milling)*",
    description: `Soil and aggregate debris can often contain asbestos fibers as naturally occurring asbestos or by contamination from asbestos containing building material. Verifying for the presence of asbestos fibers in soil or debris may often be necessary prior to any alteration, remediation or removal of asbestos containing material. Pinnacle Laboratory’s asbestos department offers the de facto standard for quantitative soil analysis in California, CARB Method 435. The CARB 435 process begins with assessing the whole sample for any suspect aspects. Afterwards, we dry and then mix the material using a system of vibrating stacked sieves. Samples are then crushed using a mill to produce a powdery material of which the majority is less than 200 Tyler mesh (0.75 microns). Once preparation is complete we then analyze the sample using the standard point counting technique and results are reported in percent asbestos as derived from either a Level A 400 point counting technique (detection limit 0.25%) or by Level B 1000 point counting (detection limit 0.1%).`,
  },
  {
    title: "Air Sample Analysis by PCM (NIOSH 7400)^",
    description: `Moreover, Pinnacle Laboratory proudly provides air sample analysis using NIOSH Method 7400, offering precise insights into airborne fiber concentrations. This service is essential for assessing air quality, ensuring occupational safety, and meeting regulatory standards.`,
  },
];

const AsbestosPage = () => {
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
          src="/plm.jpg"
          alt="Asbestos Testing Banner"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-50"
        />
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-4xl font-bold">Your Go-To Asbestos Testing Lab!</h1>
          <p className="mt-4 text-lg"></p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <Sidebar activeService="ASBESTOS" />

          {/* Main Content */}
          <main className="w-full md:w-3/4">
            {/* Asbestos Section */}
            <section>
              <h2 className="text-3xl font-bold mb-6">ASBESTOS</h2>
              <Image
                src="/plm.jpg"
                alt="Asbestos Testing"
                width={700}
                height={400}
                className="rounded-lg shadow-lg mb-6"
              />
              <p className="text-lg space-y-2">
                <span className="font-semibold">Asbestos</span>, a mineral fiber,
                has found common usage in various building construction materials.
                Its prevalence spans from the early 1900s through the 1970s, with
                continued use in certain materials persisting into the 1980s and
                even up to the present day.
              </p>

              <p className="text-lg mt-2">
                Over <span className="font-semibold">3,000 products</span> are
                estimated to have incorporated asbestos, earning them the
                designation of{" "}
                <span className="font-semibold">asbestos-containing materials (ACM)</span>.
              </p>

              <p className="text-lg mt-2">
                Notably, some materials have not faced bans under current U.S.
                regulations, including:
              </p>

              <ul className="list-disc list-inside text-lg mt-2 space-y-1">
                <li>
                  <span className="font-semibold">Pipeline wrap</span>
                </li>
                <li>
                  <span className="font-semibold">Vinyl floor tiles</span>
                </li>
                <li>
                  <span className="font-semibold">Cement pipes</span>
                </li>
                <li>
                  <span className="font-semibold">Roof coatings</span>
                </li>
                <li>
                  <span className="font-semibold">Non-roof coatings</span>
                </li>
                <li>
                  <span className="font-semibold">Roofing felts</span>
                </li>
              </ul>

              <p className="text-lg mt-4">
                Despite this, it is important to note that{" "}
                <span className="font-semibold text-[#10b1b4]">
                  Pinnacle Laboratory
                </span>{" "}
                can serve as your next{" "}
                <span className="font-semibold">Asbestos Testing Lab</span>—
                <span className="font-semibold text-[#10b1b4]">
                  reach out to us today for more information
                </span>.
              </p>
            </section>

            {/* Services Section */}
            <section className="mt-12">
              <h3 className="text-3xl font-bold text-gray-100 mb-8 border-b-2 border-[#10b1b4] pb-2">
                Our Asbestos Lab Services
              </h3>
              {asbestosServices.map((service, index) => (
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

              {/* Analytical Process */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">
                  Our Analytical Process
                </h3>
                <div>
                  As a result, Pinnacle Laboratory is a beacon of excellence in
                  the environmental industry, upholds its reputation through a
                  robust quality control program. Meticulously designed for utmost
                  accuracy, this program ensures precision in every report we
                  produce. Navigating our process reveals the meticulous attention
                  to detail that sets us apart. Furthermore, our commitment to
                  transparency invites you to delve into each step, showcasing the
                  inner workings of our quality control measures. From inception
                  to completion, our dedicated team guarantees a reliable
                  experience adhering to the highest industry standards. In short,
                  our confidence in our commitment to excellence is not just a
                  goal but the essence defining Pinnacle Laboratory.
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full bg-[#10b1b4] p-6">
                      <span className="text-2xl font-bold text-blue-600">01</span>
                    </div>
                    <h4 className="mt-4 text-lg font-medium">Initial Analysis</h4>
                    <p className="text-sm text-gray-100">
                      We begin with a thorough initial analysis of submitted
                      samples.
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="rounded-full bg-[#10b1b4] p-6">
                      <span className="text-2xl font-bold text-blue-600">02</span>
                    </div>
                    <h4 className="mt-4 text-lg font-medium">
                      Random QC Sampling
                    </h4>
                    <p className="text-sm text-gray-100">
                      We employ random QC sampling for accuracy and precision.
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="rounded-full bg-[#10b1b4] p-6">
                      <span className="text-2xl font-bold text-blue-600">03</span>
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
                <h3 className="text-2xl font-bold mb-4">
                  The Pinnacle Difference
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <li className="flex items-start gap-4">
                    <span className="text-blue-600">✔</span>
                    <p className="text-sm text-gray-100">
                      Accredited for Asbestos Fiber Analysis (NVLAP Lab Code
                      #600117-0)
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-blue-600">✔</span>
                    <p className="text-sm text-gray-100">
                      500,000+ Bulk Asbestos Samples Analyzed
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-blue-600">✔</span>
                    <p className="text-sm text-gray-100">
                      250,000+ PCM Air Samples Analyzed
                    </p>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-blue-600">✔</span>
                    <p className="text-sm text-gray-100">
                      Quick turnaround times (Same Day, Next Business Day, Two
                      Business Days)
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
                    Asbestos Fiber Analysis – EPA Method 600/R-93/116 & 40 CFR
                    Appendix E to Subpart E of Part 763.
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
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AsbestosPage;