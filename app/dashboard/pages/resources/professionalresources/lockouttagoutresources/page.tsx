'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
// import SocialMedia from './SocialMedia';
// import Review from './Review';
import SidebarNavigation from './SidebarNavigation';
import styles from './lockoutTagoutResources.module.css';
import { FaFilePdf } from 'react-icons/fa';

export default function LockoutTagoutResources() {
  const [highlightedSection, setHighlightedSection] = useState('');
  const router = useRouter();

  const handleSmoothScroll = (id: string, page: string | null = null) => {
    if (page && page !== '/dashboard/pages/resources/professionalresources/lockouttagoutresources') {
      router.push(`${page}${id}`);
      return;
    }

    const targetElement = document.querySelector(id);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setHighlightedSection(id);

      setTimeout(() => {
        setHighlightedSection('');
      }, 3500);
    }
  };
  


  return (
    <div className="flex">
      {/* Left Sidebar */}
      <SidebarNavigation activeCategory="loto" onSmoothScroll={handleSmoothScroll} />

      {/* Main Content */}
      <div className="ml-[15%] w-[70%] bg-gray-100 py-16 px-6 lg:px-12">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="text-center bg-blue-600 text-white py-8 rounded-lg shadow-lg">
            <h1 className="text-4xl lg:text-6xl font-bold">Lockout/Tagout (LOTO) Resources</h1>
            <p className="text-lg mt-4">
              Learn about the safety procedures required to protect workers during the servicing and maintenance of machines
              and equipment.
            </p>
          </div>

          {/* Content Sections */}
          <div
            id="loto-overview"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#loto-overview' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Overview</h2>
            <p className="text-gray-700">
              Lockout/Tagout (LOTO) refers to the procedures required to ensure that dangerous machines are properly shut off
              and not able to be started again prior to the completion of maintenance or servicing.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Prevents unexpected start-up or release of stored energy.</li>
              <li>Required under OSHA Standard 29 CFR 1910.147.</li>
              <li>Applies to all machines and equipment in service or maintenance.</li>
            </ul>
            <a
              href="https://www.osha.gov/lockout-tagout"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Learn More About LOTO
            </a>
          </div>

          <div
            id="requirements"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#requirements' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Requirements</h2>
            <p className="text-gray-700">
              Employers must develop and implement a Lockout/Tagout program that includes:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Documented procedures for controlling hazardous energy.</li>
              <li>Employee training programs on energy control procedures.</li>
              <li>Regular inspections of energy control procedures.</li>
            </ul>
            <a
              href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Explore OSHA LOTO Requirements
            </a>
          </div>

          <div
            id="hazards"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#hazards' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Common Hazards</h2>
            <p className="text-gray-700">
              Without proper LOTO procedures, workers may be exposed to:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Electric shock from energized equipment.</li>
              <li>Mechanical hazards such as crushing or amputation.</li>
              <li>Release of stored hydraulic or pneumatic energy.</li>
            </ul>
            <a
              href="https://www.osha.gov/lockout-tagout"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Learn More About LOTO Hazards
            </a>
          </div>

          {/* <div
            id="procedures"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#procedures' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Procedures</h2>
            <p className="text-gray-700">
              The LOTO procedure includes the following steps:
            </p>
            <ol className="list-decimal list-inside mt-4 text-gray-600">
              <li>Notify affected employees.</li>
              <li>Shut down the equipment.</li>
              <li>Isolate the equipment from energy sources.</li>
              <li>Lock and tag the equipment.</li>
              <li>Release stored energy.</li>
              <li>Verify isolation of energy.</li>
            </ol>
            <a
              href="https://www.osha.gov/sites/default/files/publications/osha3120.pdf"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              View LOTO Procedure Guide
            </a>
          </div> */}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[15%] bg-white h-screen shadow-md border-l border-gray-300 sticky top-0 right-0">
        <div className="p-4">
          <h2 className="text-lg font-bold text-blue-600 mb-4">Downloads</h2>
          <div className="space-y-4">
            <a
              href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FaFilePdf className="mr-2" /> OSHA LOTO Standard
            </a>
            <a
              href="https://www.osha.gov/sites/default/files/publications/osha3120.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FaFilePdf className="mr-2" /> LOTO Fact Sheet
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
