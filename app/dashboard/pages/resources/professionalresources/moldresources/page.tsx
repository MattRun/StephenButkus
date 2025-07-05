"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SidebarNavigation from "./SidebarNavigation";
import styles from "./moldResources.module.css";
import { FaFilePdf } from "react-icons/fa";
import { motion } from "framer-motion";

export default function MoldResources() {
  const [highlightedSection, setHighlightedSection] = useState("");
  const router = useRouter();

  const handleSmoothScroll = (id: string, page: string | null = null) => {
    if (
      page &&
      page !== "/dashboard/pages/resources/professionalresources/moldresources"
    ) {
      router.push(`${page}${id}`);
      return;
    }

    const targetElement = document.querySelector(id);
    if (targetElement) {
      const headerOffset = 80; // Adjust header offset for sticky headers
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setHighlightedSection(id);

      setTimeout(() => {
        setHighlightedSection("");
      }, 3500);
    }
  };

  return (
    <div className="flex">
      {/* Left Sidebar */}
      <SidebarNavigation
        activeCategory="mold"
        onSmoothScroll={handleSmoothScroll}
      />

      {/* Main Content */}
      <div className="ml-[15%] w-[70%] bg-gray-100 py-16 px-6 lg:px-12">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="text-center bg-blue-600 text-white py-8 rounded-lg shadow-lg">
            <h1 className="text-4xl lg:text-6xl font-bold">
              Mold Resources & Guidelines
            </h1>
            <p className="text-lg mt-4">
              Comprehensive information and resources to identify, prevent, and
              remediate mold hazards in the workplace.
            </p>
          </div>
          <motion.h2
            className="text-3xl font-bold mt-8 mb-4 text-black"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Mold Certification
          </motion.h2>
          {/* <div className="border-b-2 border-gray-300 mb-4 text-gray-700"></div>
          <p className="text-lg mb-4 leading-relaxed text-gray-700">
            Mold professionals must be certified to identify, test, and
            remediate mold in compliance with state regulations. Certifications
            are typically valid for two years.
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>
              <strong>Certified Mold Assessor</strong>: Renewal required every
              two years. Training includes mold identification and remediation
              practices.
            </li>
          </ul>
          <p className="text-gray-700">
            Learn more at:
            <a
              href="https://www.epa.gov/mold"
              target="_blank"
              className="text-blue-600 underline ml-1"
            >
              EPA Mold Information
            </a>
          </p> */}

          {/* Content Sections */}
          <div
            id="introduction"
            className={`${
              styles.section
            } bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === "#introduction" ? styles.highlight : ""
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Introduction
            </h2>
            <p className="text-gray-700">
              Mold is a common fungus that thrives in damp, humid conditions. It
              can grow indoors and outdoors and poses potential health risks if
              left unaddressed. Employers and building managers are responsible
              for ensuring that workplaces remain mold-free.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>
                Mold can grow on almost any surface, including wood, carpet,
                paper, and insulation.
              </li>
              <li>
                Common sources of mold include leaks, condensation, and
                flooding.
              </li>
              <li>
                Effective prevention and cleanup are essential for maintaining
                healthy environments.
              </li>
            </ul>
            <a
              href="https://www.epa.gov/mold"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Learn More About Mold from the EPA
            </a>
          </div>

          <div
            id="health-effects"
            className={`${
              styles.section
            } bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === "#health-effects" ? styles.highlight : ""
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Health Effects of Mold
            </h2>
            <p className="text-gray-700">
              Mold exposure can lead to a range of health issues, particularly
              for individuals with allergies, asthma, or compromised immune
              systems. Symptoms may include:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>
                Respiratory problems, such as wheezing or difficulty breathing.
              </li>
              <li>Eye irritation, skin rashes, or throat irritation.</li>
              <li>Exacerbation of asthma and other pre-existing conditions.</li>
            </ul>
            <a
              href="https://www.cdc.gov/mold/dampness_facts.html"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Learn More About Mold Health Effects
            </a>
          </div>

          <div
            id="prevention-control"
            className={`${
              styles.section
            } bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === "#prevention-control"
                ? styles.highlight
                : ""
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Prevention and Control
            </h2>
            <p className="text-gray-700">
              Preventing mold growth is critical for maintaining safe and
              healthy work environments. Key prevention strategies include:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>
                Identifying and repairing leaks in roofs, windows, and pipes
                immediately.
              </li>
              <li>
                Ensuring proper ventilation in bathrooms, kitchens, and other
                moisture-prone areas.
              </li>
              <li>
                Controlling indoor humidity levels, ideally between 30% and 50%.
              </li>
              <li>
                Cleaning and drying areas affected by water damage within 24 to
                48 hours.
              </li>
            </ul>
            <a
              href="https://www.cdc.gov/mold/prevent-mold.html"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              CDC Mold Prevention Guidelines
            </a>
          </div>

          <div
            id="cleanup-guidelines"
            className={`${
              styles.section
            } bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === "#cleanup-guidelines"
                ? styles.highlight
                : ""
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Cleanup Guidelines
            </h2>
            <p className="text-gray-700">
              Proper cleanup is essential for safely removing mold from your
              workplace. Follow these steps:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>
                Wear personal protective equipment (PPE) such as gloves,
                goggles, and N95 respirators during mold removal.
              </li>
              <li>
                Use detergent and water to scrub mold off hard surfaces,
                ensuring the area is completely dried afterward.
              </li>
              <li>
                Discard porous materials like carpet, insulation, and drywall if
                heavily contaminated.
              </li>
              <li>
                Consult a professional for large-scale mold infestations or
                those caused by contaminated water.
              </li>
            </ul>
            <a
              href="https://www.epa.gov/mold/mold-cleanup-your-home"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              EPA Mold Cleanup Guidelines
            </a>
          </div>

          <div
            id="additional-resources"
            className={`${
              styles.section
            } bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === "#additional-resources"
                ? styles.highlight
                : ""
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              Additional Resources
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                <a
                  href="https://www.epa.gov/mold"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Environmental Protection Agency: Mold
                </a>
              </li>
              <li>
                <a
                  href="https://www.cdc.gov/mold"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Centers for Disease Control and Prevention: Mold
                </a>
              </li>
              <li>
                <a
                  href="https://www.osha.gov/mold"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Occupational Safety and Health Administration: Mold
                </a>
              </li>
              <li>
                <a
                  href="https://www.aiha.org/healthier-workplaces"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  American Industrial Hygiene Association: Mold Safety
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[15%] bg-white h-screen shadow-md border-l border-gray-300 sticky top-0 right-0">
        <div className="p-4">
          <h2 className="text-lg font-bold text-blue-600 mb-4">Downloads</h2>
          <div className="space-y-4">
            <a
              href="https://www.cdc.gov/mold/dampness_facts.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FaFilePdf className="mr-2" /> Mold and Dampness Facts
            </a>
            <a
              href="https://www.epa.gov/mold"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FaFilePdf className="mr-2" /> EPA Mold Guidelines
            </a>
          </div>
          <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
