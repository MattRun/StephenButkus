'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
// import SocialMedia from './SocialMedia';
// import Review from './Review';
import SidebarNavigation from './SidebarNavigation';
import styles from './bloodbornePathogensResources.module.css';
import { FaFilePdf } from 'react-icons/fa';

export default function BloodbornePathogensResources() {
  const [highlightedSection, setHighlightedSection] = useState('');
  const router = useRouter();

  const handleSmoothScroll = (id: string, page: string | null = null) => {
    if (page && page !== '/dashboard/pages/resources/professionalresources/bloodbornepathogensresources') {
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
      <SidebarNavigation activeCategory="bloodborne" onSmoothScroll={handleSmoothScroll} />

      {/* Main Content */}
      <div className="ml-[15%] w-[70%] bg-gray-100 py-16 px-6 lg:px-12">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="text-center bg-blue-600 text-white py-8 rounded-lg shadow-lg">
            <h1 className="text-4xl lg:text-6xl font-bold">Bloodborne Pathogens Resources</h1>
            <p className="text-lg mt-4">
              Stay informed with the latest standards and practices for managing bloodborne pathogen risks in the workplace.
            </p>
          </div>

          {/* Content Sections */}
          <div
            id="bloodborne-overview"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#bloodborne-overview' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Overview</h2>
            <p className="text-gray-700">
              Bloodborne pathogens are infectious microorganisms in human blood that can cause diseases in humans. Examples
              include hepatitis B (HBV), hepatitis C (HCV), and human immunodeficiency virus (HIV).
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Employers are required to implement controls to protect workers from exposure.</li>
              <li>Compliance with OSHA’s Bloodborne Pathogens Standard (29 CFR 1910.1030) is mandatory.</li>
            </ul>
            <a
              href="https://www.osha.gov/bloodborne-pathogens"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Learn More About Bloodborne Pathogens
            </a>
          </div>

          <div
            id="exposure-control"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#exposure-control' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Exposure Control Plan</h2>
            <p className="text-gray-700">
              An Exposure Control Plan (ECP) is a written program required by OSHA to protect employees at risk of exposure to
              bloodborne pathogens. The plan must include:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>A list of tasks and procedures with potential exposure.</li>
              <li>Methods of control, including engineering and work practice controls.</li>
              <li>Details on personal protective equipment (PPE) and training requirements.</li>
            </ul>
            <a
              href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.1030"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Explore Exposure Control Plan Requirements
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
              Training is a key component of protecting workers from bloodborne pathogens. OSHA requires employers to:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Provide initial and annual training for employees at risk of exposure.</li>
              <li>Ensure training is conducted by a knowledgeable trainer who can answer employee questions.</li>
              <li>Document all training sessions.</li>
            </ul>
            <a
              href="https://www.osha.gov/sites/default/files/publications/bbfact01.pdf"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Access Training Resources
            </a>
          </div>

          <div
            id="ppe"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#ppe' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Personal Protective Equipment (PPE)</h2>
            <p className="text-gray-700">
              PPE is a critical component in preventing exposure to bloodborne pathogens. OSHA requires that employers:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Provide appropriate PPE at no cost to employees.</li>
              <li>Ensure PPE is properly used and maintained.</li>
              <li>Provide training on the correct use of PPE.</li>
            </ul>
            <a
              href="https://www.osha.gov/personal-protective-equipment"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Learn More About PPE Requirements
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
              href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.1030"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FaFilePdf className="mr-2" /> Bloodborne Pathogens Standard
            </a>
            <a
              href="https://www.osha.gov/sites/default/files/publications/bbfact01.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FaFilePdf className="mr-2" /> Bloodborne Pathogens Fact Sheet
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
