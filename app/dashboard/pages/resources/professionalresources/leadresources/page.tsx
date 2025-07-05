'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SidebarNavigation from './SidebarNavigation';
import styles from './leadResources.module.css';
import { FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function LeadResources() {
  const [highlightedSection, setHighlightedSection] = useState('');
  const router = useRouter(); // Initialize the Next.js router

  const handleSmoothScroll = (id: string, page: string | null = null) => {
    if (page && page !== '/dashboard/pages/resources/professionalresources/leadresources') {
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
      <SidebarNavigation activeCategory="lead" onSmoothScroll={handleSmoothScroll} />

      {/* Main Content */}
      <div className="ml-[15%] w-[70%] bg-gray-100 py-16 px-6 lg:px-12">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="text-center bg-blue-600 text-white py-8 rounded-lg shadow-lg">
            <h1 className="text-4xl lg:text-6xl font-bold">Lead Resources & Regulations</h1>
            <p className="text-lg mt-4">
              Stay informed with the latest regulations, applications, and guidance on lead safety and compliance.
            </p>
          </div>
                            <motion.h2
                    className="text-3xl font-bold mt-8 mb-4 text-black"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    Lead Certification
                  </motion.h2>
                  <div className="border-b-2 border-gray-300 mb-4 text-gray-700"></div>
                  <p className="text-lg mb-4 leading-relaxed text-gray-700">
                    Professionals working with lead-based paint must be certified under the EPA’s Lead Renovation, Repair, and Painting (RRP) Rule and/or CDPH Title 17 Regulations.                  </p>
                  <ul className="list-disc list-inside mb-4 text-gray-700">
                    <li>
                      <strong>Lead Inspector and Assessor</strong>: Requires completion of RRP Rule training.
                    </li>
                    <li>
                      <strong>Lead Contractor</strong>: Covers lead-safe work practices, risk assessment, and abatement techniques.
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    More information at: 
                    <a
                      href="https://www.epa.gov/lead"
                      target="_blank"
                      className="text-blue-600 underline ml-1"
                    >
                      EPA Lead Certification
                    </a>
                  </p>

          {/* Content Sections */}
          <div
            id="title17"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#title17' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Title 17 Regulations</h2>
            <p className="text-gray-700">
              California Title 17 Regulations govern the certification of lead professionals, lead hazard evaluation, and abatement activities.
            </p>
            <a
              href="https://www.cdph.ca.gov/Programs/CCDPHP/DEODC/CLPPB/CDPH%20Document%20Library/Title%2017.pdf"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              View Title 17 Regulations (PDF)
            </a>
          </div>

          <div
            id="rrp-program"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#rrp-program' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">
              EPA Lead Renovation, Repair, and Painting Program (RRP)
            </h2>
            <p className="text-gray-700">
              The RRP program establishes requirements for training, certification, and safe work practices for professionals working on properties with lead-based paint.
            </p>
            <a
              href="https://www.epa.gov/lead/lead-renovation-repair-and-painting-program"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Learn More About the RRP Program
            </a>
          </div>

          <div
            id="training-certification"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#training-certification' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Lead Training & Certification</h2>
            <p className="text-gray-700">
              Training and certification are mandatory for lead professionals involved in inspection, risk assessment, and abatement activities. Ensure compliance with state and federal requirements.
            </p>
            <a
              href="https://www.epa.gov/lead/lead-abatement-inspection-and-risk-assessment"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Training and Certification Details
            </a>
          </div>

          <div
            id="compliance-requirements"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#compliance-requirements' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Compliance Requirements</h2>
            <p className="text-gray-700">
              Learn about compliance requirements for lead professionals, including maintaining certifications and implementing safe work practices on the job site.
            </p>
            <a
              href="https://www.epa.gov/lead"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Explore Compliance Guidelines
            </a>
          </div>

          <div
            id="contact-info"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#contact-info' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Contact Information</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <strong>EPA Lead Program Contact:</strong> 1-800-424-LEAD
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:lead-hotline@epa.gov" className="text-blue-500 underline">
                  lead-hotline@epa.gov
                </a>
              </li>
              <li>
                <strong>California Department of Public Health (CDPH):</strong> 1-800-597-5323
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
              href="https://www.cdph.ca.gov/Programs/CCDPHP/DEODC/CLPPB/CDPH%20Document%20Library/Title%2017.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FaFilePdf className="mr-2" /> Title 17 Regulations
            </a>
            <a
              href="https://www.epa.gov/lead/lead-renovation-repair-and-painting-program"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FaFilePdf className="mr-2" /> RRP Program Guidelines
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
