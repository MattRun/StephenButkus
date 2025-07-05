// 'use client';

// import { useRouter } from 'next/navigation';
// import React, { useState } from 'react';
// import SocialMedia from './SocialMedia';
// import Review from './Review';
// import SidebarNavigation from './SidebarNavigation';
// import styles from './analyticalResources.module.css';
// import { FaFilePdf } from 'react-icons/fa';

// export default function AnalyticalResources() {
//     const [highlightedSection, setHighlightedSection] = useState('');
//     const router = useRouter(); // Initialize the Next.js router
  
//     const handleSmoothScroll = (id, page = null) => {
//       if (page && page !== '/dashboard/pages/resources/analyticalresources') {
//         // Navigate to the other page if the current page doesn't match
//         router.push(`${page}${id}`);
//         return;
//       }
  
//       // Handle smooth scrolling for sections on the same page
//       const targetElement = document.querySelector(id);
//       if (targetElement) {
//         const headerOffset = 80; // Adjust header offset
//         const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
//         const offsetPosition = elementPosition - headerOffset;
  
//         window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  
//         // Highlight the section temporarily
//         setHighlightedSection(id);
  
//         // Remove the highlight after 1.5 seconds
//         setTimeout(() => {
//           setHighlightedSection('');
//         }, 3500);
//       }
//     }

//   return (
//     <div className="flex">
//       {/* Left Sidebar */}
//       <SidebarNavigation activeCategory="analytical" onSmoothScroll={handleSmoothScroll} />
//       {/* Main Content */}
//       <div className="ml-[15%] w-[70%] bg-gray-100 py-16 px-6 lg:px-12">
//         <div className="container mx-auto">
//           {/* Header Section */}
//           <div className="text-center bg-blue-600 text-white py-8 rounded-lg shadow-lg">
//             <h1 className="text-4xl lg:text-6xl font-bold">Analytical Resources & Guidance</h1>
//             <p className="text-lg mt-4">
//               Explore resources and regulations for workplace safety, health standards, and analytical support from Cal/OSHA and DIR.
//             </p>
//           </div>

//           {/* Content Sections */}
//           <div
//             id="calico-laboratory"
//             className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
//               highlightedSection === '#calico-laboratory' ? styles.highlight : ''
//             }`}
//           >
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">CALICO Laboratory</h2>
//             <p className="text-gray-700">
//               The Calibration and Inventory Control (CALICO) Laboratory provides essential services to Cal/OSHA field staff:
//             </p>
//             <ul className="list-disc list-inside mt-4 text-gray-600">
//               <li>Equipment for sampling and monitoring hazardous workplace conditions.</li>
//               <li>Calibration services for accurate sampling and monitoring.</li>
//               <li>Personal protective equipment for field personnel.</li>
//               <li>Technical support, training, and analytical services via external labs.</li>
//             </ul>
//             <a
//               href="https://www.dir.ca.gov/dosh/other-calosha-units.html"
//               target="_blank"
//               className="block mt-4 text-blue-500 underline"
//             >
//               Learn More About CALICO Laboratory
//             </a>
//           </div>

//           <div
//             id="cal-osha-units"
//             className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
//               highlightedSection === '#cal-osha-units' ? styles.highlight : ''
//             }`}
//           >
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">Other Cal/OSHA Units</h2>
//             <p className="text-gray-700">
//               Cal/OSHA comprises specialized units offering diverse services to promote workplace safety:
//             </p>
//             <ul className="list-disc list-inside mt-4 text-gray-600">
//               <li>
//                 <strong>Medical Unit (MU):</strong> Provides expert medical consultation to Cal/OSHA teams.
//               </li>
//               <li>
//                 <strong>Engineering Services:</strong> Includes the Elevator Unit, Amusement Ride and Tramway Unit, and the
//                 Pressure Vessel Unit.
//               </li>
//             </ul>
//             <a
//               href="https://www.dir.ca.gov/dosh/other-calosha-units.html"
//               target="_blank"
//               className="block mt-4 text-blue-500 underline"
//             >
//               Explore Other Cal/OSHA Units
//             </a>
//           </div>

//           <div
//             id="section-5208-asbestos"
//             className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
//               highlightedSection === '#section-5208-asbestos' ? styles.highlight : ''
//             }`}
//           >
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">Title 8, Section 5208: Asbestos</h2>
//             <p className="text-gray-700">
//               This regulation addresses occupational exposure to asbestos, detailing standards for:
//             </p>
//             <ul className="list-disc list-inside mt-4 text-gray-600">
//               <li>Exposure monitoring and regulated areas.</li>
//               <li>Control methods and work practices.</li>
//               <li>Medical surveillance for exposed workers.</li>
//             </ul>
//             <a
//               href="https://www.dir.ca.gov/title8/5208.html"
//               target="_blank"
//               className="block mt-4 text-blue-500 underline"
//             >
//               Review Section 5208
//             </a>
//           </div>

//           <div
//             id="section-5197"
//             className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
//               highlightedSection === '#section-5197' ? styles.highlight : ''
//             }`}
//           >
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">Title 8, Section 5197: Methylene Chloride</h2>
//             <p className="text-gray-700">
//               This regulation outlines standards for safe handling of methylene chloride, including:
//             </p>
//             <ul className="list-disc list-inside mt-4 text-gray-600">
//               <li>Permissible exposure limits and monitoring requirements.</li>
//               <li>Protective work practices and medical surveillance.</li>
//             </ul>
//             <a
//               href="https://www.dir.ca.gov/title8/5197.html"
//               target="_blank"
//               className="block mt-4 text-blue-500 underline"
//             >
//               Explore Section 5197
//             </a>
//           </div>

//           <div
//             id="careers-dir"
//             className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
//               highlightedSection === '#careers-dir' ? styles.highlight : ''
//             }`}
//           >
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">Careers at DIR</h2>
//             <p className="text-gray-700">
//               Explore exciting career opportunities at the Department of Industrial Relations in roles such as:
//             </p>
//             <ul className="list-disc list-inside mt-4 text-gray-600">
//               <li>Cal/OSHA Enforcement Officers.</li>
//               <li>Consultation and Training Specialists.</li>
//               <li>Research and Standards Analysts.</li>
//             </ul>
//             <a
//               href="https://www.dir.ca.gov/dosh/DOSH-Recruitment-Hiring.html"
//               target="_blank"
//               className="block mt-4 text-blue-500 underline"
//             >
//               View Career Opportunities
//             </a>
//           </div>

//           <div
//             id="title-8-1532"
//             className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
//               highlightedSection === '#title-8-1532' ? styles.highlight : ''
//             }`}
//           >
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">Title 8, Section 1532: Cadmium</h2>
//             <p className="text-gray-700">
//               Cadmium exposure regulations for construction work include:
//             </p>
//             <ul className="list-disc list-inside mt-4 text-gray-600">
//               <li>Exposure assessment and compliance methods.</li>
//               <li>Respiratory protection and medical monitoring.</li>
//             </ul>
//             <a
//               href="https://www.dir.ca.gov/title8/1532.html"
//               target="_blank"
//               className="block mt-4 text-blue-500 underline"
//             >
//               Review Section 1532
//             </a>
//           </div>

//           <div
//             id="guides-osha"
//             className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
//               highlightedSection === '#guides-osha' ? styles.highlight : ''
//             }`}
//           >
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">Guide to Occupational Safety and Health</h2>
//             <p className="text-gray-700">
//               Comprehensive guides and publications on workplace safety, hazard communication, and industry-specific compliance
//               topics are available from DIR.
//             </p>
//             <a
//               href="https://www.dir.ca.gov/"
//               target="_blank"
//               className="block mt-4 text-blue-500 underline"
//             >
//               Explore Guides and Publications
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Right Sidebar */}
//       <div className="w-[15%] bg-white h-screen shadow-md border-l border-gray-300 sticky top-0 right-0">
//         <div className="p-4">
//           <h2 className="text-lg font-bold text-blue-600 mb-4">Downloads</h2>
//           <div className="space-y-4">
//             <a
//               href="https://www.dir.ca.gov/title8/5208.html"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center text-blue-500 hover:underline"
//             >
//               <FaFilePdf className="mr-2" /> Section 5208
//             </a>
//             <a
//               href="https://www.dir.ca.gov/title8/5197.html"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center text-blue-500 hover:underline"
//             >
//               <FaFilePdf className="mr-2" /> Section 5197
//             </a>
//           </div>
//           <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }







'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
// import SocialMedia from './SocialMedia';
// import Review from './Review';
import SidebarNavigation from './SidebarNavigation';
import styles from './analyticalResources.module.css';
import { FaFilePdf } from 'react-icons/fa';

export default function AnalyticalResources() {
  const [highlightedSection, setHighlightedSection] = useState('');
  const router = useRouter();

  const handleSmoothScroll = (id: string, page: string | null = null) => {
    if (page && page !== '/dashboard/pages/resources/professionalresources/analyticalresources') {
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
      <SidebarNavigation activeCategory="analytical" onSmoothScroll={handleSmoothScroll} />

      {/* Main Content */}
      <div className="ml-[15%] w-[70%] bg-gray-100 py-16 px-6 lg:px-12">
        <div className="container mx-auto">
          <div className="text-center bg-blue-600 text-white py-8 rounded-lg shadow-lg">
            <h1 className="text-4xl lg:text-6xl font-bold">Analytical Resources & Guidance</h1>
            <p className="text-lg mt-4">
              Explore resources and regulations for workplace safety, health standards, and analytical support from Cal/OSHA and DIR.
            </p>
          </div>

          {/* Content Sections */}
          {/* <div
            id="calico-lab"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#calico-lab' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">CALICO Laboratory</h2>
            <p className="text-gray-700">
              The Calibration and Inventory Control (CALICO) Laboratory provides essential services to Cal/OSHA field staff:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Equipment for sampling and monitoring hazardous workplace conditions.</li>
              <li>Calibration services for accurate sampling and monitoring.</li>
              <li>Personal protective equipment for field personnel.</li>
              <li>Technical support, training, and analytical services via external labs.</li>
            </ul>
            <a
              href="https://www.dir.ca.gov/dosh/other-calosha-units.html"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Learn More About CALICO Laboratory
            </a>
          </div> */}

          <div
            id="industrial-relations"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#industrial-relations' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Other Cal/OSHA Units</h2>
            <p className="text-gray-700">
              Cal/OSHA comprises specialized units offering diverse services to promote workplace safety:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>
                <strong>Medical Unit (MU):</strong> Provides expert medical consultation to Cal/OSHA teams.
              </li>
              <li>
                <strong>Engineering Services:</strong> Includes the Elevator Unit, Amusement Ride and Tramway Unit, and the
                Pressure Vessel Unit.
              </li>
            </ul>
            <a
              href="https://www.dir.ca.gov/dosh/other-calosha-units.html"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Explore Other Cal/OSHA Units
            </a>
          </div>
{/* 
          <div
            id="section-5208-asbestos"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#section-5208-asbestos' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Title 8, Section 5208: Asbestos</h2>
            <p className="text-gray-700">
              This regulation addresses occupational exposure to asbestos, detailing standards for:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Exposure monitoring and regulated areas.</li>
              <li>Control methods and work practices.</li>
              <li>Medical surveillance for exposed workers.</li>
            </ul>
            <a
              href="https://www.dir.ca.gov/title8/5208.html"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Review Section 5208
            </a>
          </div> */}

          {/* <div
            id="careers-dir"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#careers-dir' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Careers at DIR</h2>
            <p className="text-gray-700">
              Explore exciting career opportunities at the Department of Industrial Relations in roles such as:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Cal/OSHA Enforcement Officers.</li>
              <li>Consultation and Training Specialists.</li>
              <li>Research and Standards Analysts.</li>
            </ul>
            <a
              href="https://www.dir.ca.gov/dosh/DOSH-Recruitment-Hiring.html"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              View Career Opportunities
            </a>
          </div> */}

          {/* <div
            id="section-5197"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#section-5197' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Title 8, Section 5197: Methylene Chloride</h2>
            <p className="text-gray-700">
              This regulation outlines standards for safe handling of methylene chloride, including:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Permissible exposure limits and monitoring requirements.</li>
              <li>Protective work practices and medical surveillance.</li>
            </ul>
            <a
              href="https://www.dir.ca.gov/title8/5197.html"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Explore Section 5197
            </a>
          </div> */}

          {/* <div
            id="title-8-1532"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#title-8-1532' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Title 8, Section 1532: Cadmium</h2>
            <p className="text-gray-700">
              Cadmium exposure regulations for construction work include:
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Exposure assessment and compliance methods.</li>
              <li>Respiratory protection and medical monitoring.</li>
            </ul>
            <a
              href="https://www.dir.ca.gov/title8/1532.html"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Review Section 1532
            </a>
          </div> */}

          {/* <div
            id="guides-osha"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#guides-osha' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Guide to Occupational Safety and Health</h2>
            <p className="text-gray-700">
              Comprehensive guides and publications on workplace safety, hazard communication, and industry-specific compliance
              topics are available from DIR.
            </p>
            <a
              href="https://www.dir.ca.gov/"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Explore Guides and Publications
            </a>
          </div> */}

          {/* Add other sections similarly, ensuring IDs match */}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[15%] bg-white h-screen shadow-md border-l border-gray-300 sticky top-0 right-0">
        <div className="p-4">
          <h2 className="text-lg font-bold text-blue-600 mb-4">Downloads</h2>
          <div className="space-y-4">
            <a
              href="https://www.dir.ca.gov/title8/5208.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FaFilePdf className="mr-2" /> Section 5208
            </a>
            <a
              href="https://www.dir.ca.gov/title8/5197.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FaFilePdf className="mr-2" /> Section 5197
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
