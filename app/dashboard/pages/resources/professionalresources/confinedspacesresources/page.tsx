'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
// import SocialMedia from './SocialMedia';
// import Review from './Review';
import SidebarNavigation from './SidebarNavigation';
import styles from './confinedSpacesResources.module.css';
import { FaFilePdf } from 'react-icons/fa';

export default function ConfinedSpacesResources() {
  const [highlightedSection, setHighlightedSection] = useState('');
  const router = useRouter();

  const handleSmoothScroll = (id: string, page: string | null = null) => {
    if (page && page !== '/dashboard/pages/resources/professionalresources/confinedspacesresources') {
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
      <SidebarNavigation activeCategory="confined-spaces" onSmoothScroll={handleSmoothScroll} />

      {/* Main Content */}
      <div className="ml-[15%] w-[70%] bg-gray-100 py-16 px-6 lg:px-12">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="text-center bg-blue-600 text-white py-8 rounded-lg shadow-lg">
            <h1 className="text-4xl lg:text-6xl font-bold">Confined Spaces Resources</h1>
            <p className="text-lg mt-4">
              Comprehensive guidance and resources for identifying, managing, and working safely in confined spaces.
            </p>
          </div>

          {/* Content Sections */}
          <div
            id="confined-spaces-overview"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#confined-spaces-overview' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Overview</h2>
            <p className="text-gray-700">
              Confined spaces are areas that are large enough for a worker to enter and perform tasks but are not designed for
              continuous occupancy and may have limited means of entry or exit. Examples include tanks, silos, and vaults.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>May contain hazardous atmospheres.</li>
              <li>Require specific safety measures and permits.</li>
              <li>Regulated under OSHA Standard 29 CFR 1910.146.</li>
            </ul>
            <a
              href="https://www.osha.gov/confined-spaces"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Learn More About Confined Spaces
            </a>
          </div>

          <div
            id="permit-spaces"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#permit-spaces' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Permit-Required Spaces</h2>
            <p className="text-gray-700">
              Permit-required confined spaces are those that:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Contain hazardous atmospheres.</li>
              <li>Have materials that could engulf an entrant.</li>
              <li>Feature internal configurations that could trap or asphyxiate a worker.</li>
              <li>Pose other recognized safety or health hazards.</li>
            </ul>
            <a
              href="https://www.osha.gov/sites/default/files/publications/osha3138.pdf"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              View OSHA Guide on Permit-Required Spaces
            </a>
          </div>

          <div
            id="training"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#training' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Training</h2>
            <p className="text-gray-700">
              Workers must be trained to recognize confined spaces and understand entry procedures. Training programs should
              include:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Identifying confined spaces and associated hazards.</li>
              <li>Understanding permit requirements.</li>
              <li>Emergency and rescue procedures.</li>
              <li>Proper use of personal protective equipment (PPE).</li>
            </ul>
            <a
              href="https://www.osha.gov/safety-management/confined-space-training"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Learn More About Confined Space Training
            </a>
          </div>

          <div
            id="monitoring"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#monitoring' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Atmospheric Monitoring</h2>
            <p className="text-gray-700">
              Atmospheric monitoring is critical to ensure safe entry into confined spaces. Testing should include:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Oxygen levels.</li>
              <li>Combustible gases or vapors.</li>
              <li>Toxic substances.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Continuous monitoring is recommended to detect changes in atmospheric conditions during work activities.
            </p>
            <a
              href="https://www.osha.gov/confined-spaces/atmospheric-testing"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              View Atmospheric Testing Requirements
            </a>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[15%] bg-white h-screen shadow-md border-l border-gray-300 sticky top-0 right-0">
        <div className="p-4">
          <h2 className="text-lg font-bold text-blue-600 mb-4">Downloads</h2>
          <div className="space-y-4">
            <a
              href="https://www.osha.gov/sites/default/files/publications/osha3138.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FaFilePdf className="mr-2" /> Permit-Required Spaces Guide
            </a>
            <a
              href="https://www.osha.gov/safety-management/confined-space-training"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FaFilePdf className="mr-2" /> Confined Spaces Training Manual
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
