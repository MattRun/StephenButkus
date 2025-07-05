'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SidebarNavigation from './SidebarNavigation';
import styles from './hazwoperResources.module.css';
import { FaFilePdf } from 'react-icons/fa';

export default function HazwoperResources() {
  const [highlightedSection, setHighlightedSection] = useState('');
  const router = useRouter(); // Initialize the Next.js router

  const handleSmoothScroll = (id: string, page: string | null = null) => {
    if (page && page !== '/dashboard/pages/resources/professionalresources/hazwoperresources') {
      // Navigate to another page if the current page doesn't match
      router.push(`${page}${id}`);
      return;
    }

    // Handle smooth scrolling for sections on the same page
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const headerOffset = 80; // Adjust header offset
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
      <SidebarNavigation activeCategory="hazwoper" onSmoothScroll={handleSmoothScroll} />

      {/* Main Content */}
      <div className="ml-[15%] w-[70%] bg-gray-100 py-16 px-6 lg:px-12">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="text-center bg-blue-600 text-white py-8 rounded-lg shadow-lg">
            <h1 className="text-4xl lg:text-6xl font-bold">HAZWOPER Resources & Guidelines</h1>
            <p className="text-lg mt-4">
              Find essential resources and guidelines to ensure compliance with hazardous waste operations and emergency
              response regulations.
            </p>
          </div>

          {/* Content Sections */}
          <div
            id="regulations"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#regulations' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Cal/OSHA HAZWOPER Regulations</h2>
            <p className="text-gray-700">
              California Title 8, Section 5192 outlines the HAZWOPER standards applicable to hazardous waste operations and
              emergency response. These regulations define the responsibilities, procedures, and safety measures that must be
              followed in accordance with federal OSHA standards.
            </p>
            <a
              href="https://www.dir.ca.gov/title8/5192.html"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              View Title 8 HAZWOPER Standards
            </a>
          </div>

          <div
            id="training-requirements"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#training-requirements' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Training Requirements</h2>
            <p className="text-gray-700">
              All employees involved in hazardous waste operations must receive proper training to ensure safety and compliance.
              Cal/OSHA requires employees to complete HAZWOPER training courses based on their role and exposure to hazardous
              materials.
            </p>
            <a
              href="https://www.dir.ca.gov/DOSH/dosh_publications/trainingreq.htm"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Learn More About Training Requirements
            </a>
          </div>

          <div
            id="emergency-response"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#emergency-response' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Emergency Response Guidelines</h2>
            <p className="text-gray-700">
              Emergency response operations must comply with the safety protocols outlined in the HAZWOPER standards. These
              guidelines ensure the protection of workers and the environment during hazardous material incidents.
            </p>
            <a
              href="https://www.dir.ca.gov/title8/5192.html"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Explore Emergency Response Standards
            </a>
          </div>

          <div
            id="contact-info"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#contact-info' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Important Contact Information</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <strong>Cal/OSHA Consultation Services:</strong> 1-800-963-9424
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@dir.ca.gov" className="text-blue-500 underline">
                  info@dir.ca.gov
                </a>
              </li>
              <li>
                <strong>Federal OSHA Contact:</strong> 1-800-321-OSHA
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
              href="https://www.dir.ca.gov/title8/5192.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FaFilePdf className="mr-2" /> Title 8 HAZWOPER Standards
            </a>
            <a
              href="https://www.dir.ca.gov/DOSH/dosh_publications/trainingreq.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FaFilePdf className="mr-2" /> Training Requirements Guide
            </a>
          </div>
          <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Contact Us</button>
        </div>
      </div>
    </div>
  );
}
