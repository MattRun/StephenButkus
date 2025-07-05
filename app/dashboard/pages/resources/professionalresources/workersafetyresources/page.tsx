'use client';

  import { useRouter } from 'next/navigation';
  import React, { useState } from 'react';
  // import SocialMedia from './SocialMedia';
  // import Review from './Review';
  import SidebarNavigation from './SidebarNavigation';
  import styles from './workerSafetyResources.module.css';
  import { FaFilePdf } from 'react-icons/fa';
  
  export default function WorkerSafetyResources() {
    const [highlightedSection, setHighlightedSection] = useState('');
    const router = useRouter();
  
    const handleSmoothScroll = (id: string, page: string | null = null) => {
      if (page && page !== '/dashboard/pages/resources/professionalresources/workersafetyresources') {
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
      <SidebarNavigation activeCategory="work-safety" onSmoothScroll={handleSmoothScroll} />

      {/* Main Content */}
      <div className="ml-[15%] w-[70%] bg-gray-100 py-16 px-6 lg:px-12">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="text-center bg-blue-600 text-white py-8 rounded-lg shadow-lg">
            <h1 className="text-4xl lg:text-6xl font-bold">Worker Safety Resources</h1>
            <p className="text-lg mt-4">
              Explore essential resources and guidelines to promote workplace safety and prevent injuries.
            </p>
          </div>

          {/* Content Sections */}
          <div
            id="injury-prevention"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#injury-prevention' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Injury and Illness Prevention Programs</h2>
            <p className="text-gray-700">
              California requires employers to establish, implement, and maintain an effective Injury and Illness Prevention
              Program (IIPP). Key components include:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Management commitment and employee involvement.</li>
              <li>Hazard identification and assessment.</li>
              <li>Accident investigation procedures.</li>
              <li>Training and documentation.</li>
            </ul>
            <a
              href="https://www.dir.ca.gov/dosh/etools/09-031/accident_injury_prevention.htm"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Learn More About IIPP
            </a>
          </div>

          <div
            id="hazard-communication"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#hazard-communication' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Hazard Communication</h2>
            <p className="text-gray-700">
              OSHA's Hazard Communication Standard (HCS) ensures that employees are aware of chemical hazards in their
              workplace through:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Labels and warnings on chemical containers.</li>
              <li>Safety Data Sheets (SDS) for hazardous chemicals.</li>
              <li>Employee training programs.</li>
            </ul>
            <a
              href="https://www.osha.gov/hazcom"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Explore Hazard Communication Standards
            </a>
          </div>

          <div
            id="ppe-requirements"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#ppe-requirements' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Personal Protective Equipment (PPE)</h2>
            <p className="text-gray-700">
              Employers must provide appropriate Personal Protective Equipment (PPE) to employees based on job hazards. PPE
              includes:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Head and face protection (hard hats, face shields).</li>
              <li>Eye protection (goggles, safety glasses).</li>
              <li>Respiratory protection (masks, respirators).</li>
              <li>Hand and foot protection (gloves, boots).</li>
            </ul>
            <a
              href="https://www.osha.gov/personal-protective-equipment"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              View OSHA PPE Standards
            </a>
          </div>

          <div
            id="incident-reporting"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#incident-reporting' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Incident Reporting</h2>
            <p className="text-gray-700">
              Prompt incident reporting is essential for workplace safety and compliance. Reporting includes:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Recording workplace injuries and illnesses.</li>
              <li>Maintaining OSHA 300 Logs for recordable incidents.</li>
              <li>Reporting severe injuries or fatalities to OSHA within 8 hours.</li>
            </ul>
            <a
              href="https://www.osha.gov/recordkeeping"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Learn About Incident Reporting Requirements
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
              href="https://www.dir.ca.gov/dosh/etools/09-031/accident_injury_prevention.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FaFilePdf className="mr-2" /> IIPP Guide
            </a>
            <a
              href="https://www.osha.gov/hazcom"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FaFilePdf className="mr-2" /> Hazard Communication Standard
            </a>
            <a
              href="https://www.osha.gov/personal-protective-equipment"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FaFilePdf className="mr-2" /> PPE Standards
            </a>
            <a
              href="https://www.osha.gov/recordkeeping"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FaFilePdf className="mr-2" /> OSHA Recordkeeping Requirements
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
