'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const resourcesLinks = [
  { title: 'Exam Dates', path: '/dashboard/pages/resources/examdates' },
  { title: 'FAQ', path: '/dashboard/pages/resources/faq' },
  { title: 'Certification Info', path: '/dashboard/pages/resources/certificationinfo' }
];

export default function CertificationInfoPage() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-gray-700 to-gray-900 text-white">
      {/* Left Sidebar Navigation */}
      <aside className="w-64 bg-gray-800 p-6 flex-shrink-0">
        <h2 className="text-2xl font-bold mb-6 text-center">Resources</h2>
        <ul className="space-y-4">
          {resourcesLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>
                <motion.a
                  className={`block px-4 py-2 rounded hover:bg-blue-600 transition ${
                    pathname === link.path ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.title}
                </motion.a>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg max-w-6xl mx-auto">
          <motion.h1
            className="text-4xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Certification Information
          </motion.h1>
          <div className="border-b-2 border-gray-300 mb-8"></div>

          <p className="text-lg mb-4 leading-relaxed">
            Below is essential information regarding certification requirements, renewal timelines, and professional qualifications.
          </p>

          <motion.h2
            className="text-3xl font-bold mt-8 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Asbestos Certification
          </motion.h2>
          <div className="border-b-2 border-gray-300 mb-4"></div>
          <p className="text-lg mb-4 leading-relaxed">
            Professionals dealing with asbestos must undergo accredited training programs that meet both EPA and OSHA standards.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Certified Asbestos Consultant (CAC)</strong>: Must complete AHERA training programs (e.g., Management Planner, Project Designer, Contractor/Supervisor, Building Inspector).</li>
            <li><strong>Certified Site Surveillance Technician (CSST)</strong>: Works under a CAC, requiring AHERA training for the Contractor/Supervisor and Building Inspector courses.</li>
            <li>Renewal required annually. Refresher courses mandatory for both CAC and CSST professionals.</li>
          </ul>
          <p>
            More information can be found at: <a href="https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.1001" target="_blank" className="text-blue-600 underline">OSHA Asbestos Standard</a> | <a href="https://www.epa.gov/asbestos/asbestos-training" target="_blank" className="text-blue-600 underline">EPA Asbestos Training</a>
          </p>

          <motion.h2
            className="text-3xl font-bold mt-8 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Lead Certification
          </motion.h2>
          <div className="border-b-2 border-gray-300 mb-4"></div>
          <p className="text-lg mb-4 leading-relaxed">
            Professionals working with lead-based paint must be certified under the EPA’s Lead Renovation, Repair, and Painting (RRP) Rule. Certification must be renewed every three years.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Lead Inspector and Assessor</strong>: Requires completion of RRP Rule training.</li>
            <li><strong>Lead Contractor</strong>: Covers lead-safe work practices, risk assessment, and abatement techniques.</li>
          </ul>
          <p>
            More information at: <a href="https://www.epa.gov/lead" target="_blank" className="text-blue-600 underline">EPA Lead Certification</a>
          </p>

          <motion.h2
            className="text-3xl font-bold mt-8 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Mold Certification
          </motion.h2>
          <div className="border-b-2 border-gray-300 mb-4"></div>
          <p className="text-lg mb-4 leading-relaxed">
            Mold professionals must be certified to identify, test, and remediate mold in compliance with state regulations. Certifications are typically valid for two years.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li><strong>Certified Mold Assessor</strong>: Renewal required every two years. Training includes mold identification and remediation practices.</li>
          </ul>

          <motion.h2
            className="text-3xl font-bold mt-8 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Important Resources
          </motion.h2>
          <div className="border-b-2 border-gray-300 mb-4"></div>
          <p className="text-lg mb-4 leading-relaxed">Ensure you stay updated on the renewal dates for your certifications:</p>
          <ul className="list-disc list-inside mb-4">
            <li><a href="https://www.dir.ca.gov" target="_blank" className="text-blue-600 underline">Cal/OSHA Certification Renewal</a></li>
          </ul>

          <motion.h2
            className="text-3xl font-bold mt-8 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Upcoming Certification Exams
          </motion.h2>
          <div className="border-b-2 border-gray-300 mb-4"></div>
          <p className="text-lg mb-4 leading-relaxed">
            View upcoming exam dates for asbestos, lead, and mold certifications: <a href="/dashboard/pages/resources/examdates" className="text-blue-600 underline">Exam Dates</a>
          </p>
        </div>
      </main>
    </div>
  );
}
