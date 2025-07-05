// 'use client';

// import React, { useState } from 'react';
// import SocialMedia from './SocialMedia';
// import Review from './Review';
// import SidebarNavigation from './SidebarNavigation';
// import styles from './asbestosResources.module.css';
// import { FaFilePdf } from 'react-icons/fa6';

// export default function AsbestosResources() {
//   const [highlightedSection, setHighlightedSection] = useState('');

//   const handleSmoothScroll = (id) => {
//     const targetElement = document.querySelector(id);
//     if (targetElement) {
//       const headerOffset = 80;
//       const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
//       const offsetPosition = elementPosition - headerOffset;

//       window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

//       // Highlight the section temporarily
//       setHighlightedSection(id);

//       // Remove the highlight after 1.5 seconds
//       setTimeout(() => {
//         setHighlightedSection('');
//       }, 3500);
//     }
//   };

//   return (
//     <div className="flex">
//       {/* Left Sidebar */}
//       <SidebarNavigation activeCategory="asbestos" onSmoothScroll={handleSmoothScroll} />

//       {/* Main Content */}
//       <div className="ml-[15%] w-[70%] bg-gray-100 py-16 px-6 lg:px-12">
//         <div className="container mx-auto">
//           {/* Header Section */}
//           <div className="text-center bg-blue-600 text-white py-8 rounded-lg shadow-lg">
//             <h1 className="text-4xl lg:text-6xl font-bold">Asbestos Resources & Regulations</h1>
//             <p className="text-lg mt-4">
//               Stay informed with the latest regulations, applications, and guidance on asbestos safety from Cal/OSHA.
//             </p>
//           </div>

//           {/* Content Sections */}
//           <div
//             id="registrants-database"
//             className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
//               highlightedSection === '#registrants-database' ? styles.highlight : ''
//             }`}
//           >
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">Asbestos Registrants Database</h2>
//             <p className="text-gray-700">
//               Use the official Cal/OSHA Asbestos Registrants Database to find registered asbestos contractors and employers.
//             </p>
//             <a
//               href="https://www.dir.ca.gov/databases/doshacru/acrusearch.html"
//               target="_blank"
//               className="block mt-4 text-blue-500 underline"
//             >
//               Access the Asbestos Registrants Database
//             </a>
//           </div>

//           <div
//             id="standards"
//             className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
//               highlightedSection === '#standards' ? styles.highlight : ''
//             }`}
//           >
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">Cal/OSHA Asbestos Standards</h2>
//             <p className="text-gray-700">
//               Cal/OSHA enforces asbestos standards in construction, shipyards, and general industry. Compliance with these
//               standards is critical to worker safety and environmental health.
//             </p>
//             <ul className="mt-4 list-disc list-inside text-gray-600">
//               <li>
//                 <a
//                   href="https://www.dir.ca.gov/title8/1529.html"
//                   target="_blank"
//                   className="text-blue-500 underline"
//                 >
//                   Asbestos Standards in Construction
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://www.dir.ca.gov/title8/8358.html"
//                   target="_blank"
//                   className="text-blue-500 underline"
//                 >
//                   Asbestos Standards in Shipyards
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://www.dir.ca.gov/title8/5208.html"
//                   target="_blank"
//                   className="text-blue-500 underline"
//                 >
//                   Asbestos Standards in General Industry
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div
//             id="contractor-registration"
//             className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
//               highlightedSection === '#contractor-registration' ? styles.highlight : ''
//             }`}
//           >
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">Contractor Registration</h2>
//             <p className="text-gray-700">
//               Contractors performing asbestos-related work must register with Cal/OSHA if the asbestos fiber content exceeds 0.1%
//               or covers an area of 100 square feet or more.
//             </p>
//             <a
//               href="https://www.dir.ca.gov/dosh/ACRU/ACRUhome.htm"
//               target="_blank"
//               className="block mt-4 text-blue-500 underline"
//             >
//               Learn about Contractor Registration
//             </a>
//           </div>

//           <div
//             id="exam-packet"
//             className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
//               highlightedSection === '#exam-packet' ? styles.highlight : ''
//             }`}
//           >
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">Exam Application Packet</h2>
//             <p className="text-gray-700">
//               Download the complete application for asbestos consultant and site surveillance technician certifications,
//               including eligibility and exam information.
//             </p>
//             <a
//               href="https://www.dir.ca.gov/DOSH/ACRU/Examination-Application-Packet.pdf"
//               target="_blank"
//               className="block mt-4 text-blue-500 underline"
//             >
//               Download the Application Packet
//             </a>
//           </div>

//           <div
//             id="consultant-certification"
//             className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
//               highlightedSection === '#consultant-certification' ? styles.highlight : ''
//             }`}
//           >
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">Consultant Certification</h2>
//             <p className="text-gray-700">
//               Consultants and technicians must be certified to conduct asbestos sampling or oversee removal projects covering 100
//               square feet or more of surface area.
//             </p>
//             <a
//               href="https://www.dir.ca.gov/databases/doshcaccsst/caccsst_query_1.html"
//               target="_blank"
//               className="block mt-4 text-blue-500 underline"
//             >
//               Certification Requirements
//             </a>
//           </div>

//           <div
//             id="contact-info"
//             className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
//               highlightedSection === '#contact-info' ? styles.highlight : ''
//             }`}
//           >
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">Important Contact Information</h2>
//             <ul className="list-disc list-inside text-gray-700">
//               <li>
//                 <strong>Address:</strong> 1750 Howe Avenue, Suite 460, Sacramento, CA 95825
//               </li>
//               <li>
//                 <strong>Phone:</strong> (916) 574-2993
//               </li>
//               <li>
//                 <strong>Email:</strong>{' '}
//                 <a href="mailto:ACRU@dir.ca.gov" className="text-blue-500 underline">
//                   ACRU@dir.ca.gov
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="w-full py-6 mt-12">
//             <div className="container mx-auto">
//               <SocialMedia />
//               <div className="pb-0">
//                 <Review />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     {/* </div> */}



//       {/* Right Sidebar */}
//       <div className="w-[15%] bg-white h-screen shadow-md border-l border-gray-300 sticky top-0 right-0">
//         <div className="p-4">
//           <h2 className="text-lg font-bold text-blue-600 mb-4">Downloads</h2>
//           <div className="space-y-4">
//             <a
//               href="https://www.dir.ca.gov/DOSH/ACRU/Examination-Application-Packet.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center text-blue-500 hover:underline"
//             >
//               <FaFilePdf className="mr-2" /> Exam Application Packet
//             </a>
//             <a
//               href="https://www.dir.ca.gov/databases/doshcaccsst/caccsst_query_1.html"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center text-blue-500 hover:underline"
//             >
//               <FaFilePdf className="mr-2" /> Certification Requirements
//             </a>
//           </div>
//           <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Contact Us</button>
//         </div>
//       </div>
//     </div>
    
//   );
// }











// 'use client';

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import SocialMedia from './SocialMedia';
// import Review from './Review';
// import SidebarNavigation from './SidebarNavigation';
// import styles from './asbestosResources.module.css';
// import { FaFilePdf } from 'react-icons/fa6';

// export default function AsbestosResources() {
//   const [highlightedSection, setHighlightedSection] = useState('');
//   const router = useRouter(); // Initialize the Next.js router

//   const handleSmoothScroll = (id, page = null) => {
//     if (page && page !== '/dashboard/pages/resources/professionalresources/asbestosresources') {
//       // Navigate to the other page if the current page doesn't match
//       router.push(`${page}${id}`);
//       return;
//     }

//     // Handle smooth scrolling for sections on the same page
//     const targetElement = document.querySelector(id);
//     if (targetElement) {
//       const headerOffset = 80; // Adjust header offset
//       const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
//       const offsetPosition = elementPosition - headerOffset;

//       window.scrollTo({ top: offsetPosition, behavior: 'smooth' });

//       // Highlight the section temporarily
//       setHighlightedSection(id);

//       // Remove the highlight after 1.5 seconds
//       setTimeout(() => {
//         setHighlightedSection('');
//       }, 3500);
//     }
//   };

//   return (
//     <div className="flex">
//       {/* Left Sidebar */}
//       <SidebarNavigation activeCategory="asbestos" onSmoothScroll={handleSmoothScroll} />

//       {/* Main Content */}
//       <div className="ml-[15%] w-[70%] bg-gray-100 py-16 px-6 lg:px-12">
//         <div className="container mx-auto">
//           {/* Header Section */}
//           <div className="text-center bg-blue-600 text-white py-8 rounded-lg shadow-lg">
//             <h1 className="text-4xl lg:text-6xl font-bold">Asbestos Resources & Regulations</h1>
//             <p className="text-lg mt-4">
//               Stay informed with the latest regulations, applications, and guidance on asbestos safety from Cal/OSHA.
//             </p>
//           </div>

//           {/* Content Sections */}
//           <div
//             id="registrants-database"
//             className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
//               highlightedSection === '#registrants-database' ? styles.highlight : ''
//             }`}
//           >
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">Asbestos Registrants Database</h2>
//             <p className="text-gray-700">
//               Use the official Cal/OSHA Asbestos Registrants Database to find registered asbestos contractors and employers.
//             </p>
//             <a
//               href="https://www.dir.ca.gov/databases/doshacru/acrusearch.html"
//               target="_blank"
//               className="block mt-4 text-blue-500 underline"
//             >
//               Access the Asbestos Registrants Database
//             </a>
//           </div>

//           <div
//             id="standards"
//             className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
//               highlightedSection === '#standards' ? styles.highlight : ''
//             }`}
//           >
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">Cal/OSHA Asbestos Standards</h2>
//             <p className="text-gray-700">
//               Cal/OSHA enforces asbestos standards in construction, shipyards, and general industry. Compliance with these
//               standards is critical to worker safety and environmental health.
//             </p>
//             <ul className="mt-4 list-disc list-inside text-gray-600">
//               <li>
//                 <a
//                   href="https://www.dir.ca.gov/title8/1529.html"
//                   target="_blank"
//                   className="text-blue-500 underline"
//                 >
//                   Asbestos Standards in Construction
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://www.dir.ca.gov/title8/8358.html"
//                   target="_blank"
//                   className="text-blue-500 underline"
//                 >
//                   Asbestos Standards in Shipyards
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="https://www.dir.ca.gov/title8/5208.html"
//                   target="_blank"
//                   className="text-blue-500 underline"
//                 >
//                   Asbestos Standards in General Industry
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div
//             id="contractor-registration"
//             className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
//               highlightedSection === '#contractor-registration' ? styles.highlight : ''
//             }`}
//           >
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">Contractor Registration</h2>
//             <p className="text-gray-700">
//               Contractors performing asbestos-related work must register with Cal/OSHA if the asbestos fiber content exceeds 0.1%
//               or covers an area of 100 square feet or more.
//             </p>
//             <a
//               href="https://www.dir.ca.gov/dosh/ACRU/ACRUhome.htm"
//               target="_blank"
//               className="block mt-4 text-blue-500 underline"
//             >
//               Learn about Contractor Registration
//             </a>
//           </div>

//           <div
//             id="exam-packet"
//             className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
//               highlightedSection === '#exam-packet' ? styles.highlight : ''
//             }`}
//           >
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">Exam Application Packet</h2>
//             <p className="text-gray-700">
//               Download the complete application for asbestos consultant and site surveillance technician certifications,
//               including eligibility and exam information.
//             </p>
//             <a
//               href="https://www.dir.ca.gov/DOSH/ACRU/Examination-Application-Packet.pdf"
//               target="_blank"
//               className="block mt-4 text-blue-500 underline"
//             >
//               Download the Application Packet
//             </a>
//           </div>

//           <div
//             id="consultant-certification"
//             className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
//               highlightedSection === '#consultant-certification' ? styles.highlight : ''
//             }`}
//           >
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">Consultant Certification</h2>
//             <p className="text-gray-700">
//               Consultants and technicians must be certified to conduct asbestos sampling or oversee removal projects covering 100
//               square feet or more of surface area.
//             </p>
//             <a
//               href="https://www.dir.ca.gov/databases/doshcaccsst/caccsst_query_1.html"
//               target="_blank"
//               className="block mt-4 text-blue-500 underline"
//             >
//               Certification Requirements
//             </a>
//           </div>

//           <div
//             id="contact-info"
//             className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
//               highlightedSection === '#contact-info' ? styles.highlight : ''
//             }`}
//           >
//             <h2 className="text-2xl font-bold text-blue-600 mb-4">Important Contact Information</h2>
//             <ul className="list-disc list-inside text-gray-700">
//               <li>
//                 <strong>Address:</strong> 1750 Howe Avenue, Suite 460, Sacramento, CA 95825
//               </li>
//               <li>
//                 <strong>Phone:</strong> (916) 574-2993
//               </li>
//               <li>
//                 <strong>Email:</strong>{' '}
//                 <a href="mailto:ACRU@dir.ca.gov" className="text-blue-500 underline">
//                   ACRU@dir.ca.gov
//                 </a>
//               </li>
//             </ul>
//           </div>

//           <div className="w-full py-6 mt-12">
//             <div className="container mx-auto">
//               <SocialMedia />
//               <div className="pb-0">
//                 <Review />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Sidebar */}
//       <div className="w-[15%] bg-white h-screen shadow-md border-l border-gray-300 sticky top-0 right-0">
//         <div className="p-4">
//           <h2 className="text-lg font-bold text-blue-600 mb-4">Downloads</h2>
//           <div className="space-y-4">
//             <a
//               href="https://www.dir.ca.gov/DOSH/ACRU/Examination-Application-Packet.pdf"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center text-blue-500 hover:underline"
//             >
//               <FaFilePdf className="mr-2" /> Exam Application Packet
//             </a>
//             <a
//               href="https://www.dir.ca.gov/databases/doshcaccsst/caccsst_query_1.html"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center text-blue-500 hover:underline"
//             >
//               <FaFilePdf className="mr-2" /> Certification Requirements
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

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SocialMedia from './SocialMedia';
import Review from './Review';
import SidebarNavigation from './SidebarNavigation';
import styles from './asbestosResources.module.css';
import { FaFilePdf } from 'react-icons/fa6';
import { motion } from 'framer-motion';

export default function AsbestosResources() {
  const [highlightedSection, setHighlightedSection] = useState('');
  const router = useRouter(); // Initialize the Next.js router

  const handleSmoothScroll = (id: string, page: string | null = null) => {
    if (page && page !== '/dashboard/pages/resources/professionalresources/asbestosresources') {
      // Navigate to the other page if the current page doesn't match
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

      // Highlight the section temporarily
      setHighlightedSection(id);

      // Remove the highlight after 1.5 seconds
      setTimeout(() => {
        setHighlightedSection('');
      }, 3500);
    }
  };

  return (
    <div className="flex">
      {/* Left Sidebar */}
      <SidebarNavigation activeCategory="asbestos" onSmoothScroll={handleSmoothScroll} />

      {/* Main Content */}
      <div className="ml-[15%] w-[70%] bg-gray-100 py-16 px-6 lg:px-12">
        <div className="container mx-auto">
          {/* Header Section */}
          <div className="text-center bg-blue-600 text-white py-8 rounded-lg shadow-lg">
            <h1 className="text-4xl lg:text-6xl font-bold">Asbestos Resources & Regulations</h1>
            <p className="text-lg mt-4">
              Stay informed with the latest regulations, applications, and guidance on asbestos safety from Cal/OSHA.
            </p>
          </div>

          {/* Added Content: Asbestos Certification Section */}
          <motion.h2
            className="text-3xl font-bold mt-8 mb-4 text-black"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Asbestos Certification
          </motion.h2>
          <div className="border-b-2 border-gray-300 mb-4 text-gray-700"></div>
          <p className="text-lg mb-4 leading-relaxed text-gray-700">
            Professionals dealing with asbestos must undergo accredited training programs that meet both EPA and Cal/OSHA standards.
          </p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>
              <strong>Certified Asbestos Consultant (CAC)</strong>: Must complete AHERA training programs (e.g., Management Planner, 
              Project Designer, Contractor/Supervisor, Building Inspector).
            </li>
            <li>
              <strong>Certified Site Surveillance Technician (CSST)</strong>: Works under a CAC, requiring AHERA training for 
              the Contractor/Supervisor and Building Inspector courses.
            </li>
            <li>Renewal required annually. Refresher courses mandatory for both CAC and CSST professionals.</li>
          </ul>
          <p className='text-gray-700'>
            More information can be found at: 
            <a
              href="https://www.dir.ca.gov/title8/341_6.html"
              target="_blank"
              className="text-blue-600 underline ml-1"
            >
              Cal/OSHA Asbestos Standard
            </a> 
            |
            <a
              href="https://www.epa.gov/asbestos/asbestos-training"
              target="_blank"
              className="text-blue-600 underline ml-1"
            >
              EPA Asbestos Training
            </a>
          </p>

          {/* Original Content Sections */}
          <div
            id="registrants-database"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#registrants-database' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Asbestos Registrants Database</h2>
            <p className="text-gray-700">
              Use the official Cal/OSHA Asbestos Registrants Database to find registered asbestos contractors and employers.
            </p>
            <a
              href="https://www.dir.ca.gov/databases/doshacru/acrusearch.html"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Access the Asbestos Registrants Database
            </a>
          </div>

          <div
            id="consultant-certification"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#consultant-certification' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Consultant Verification</h2>
            <p className="text-gray-700">
              Consultants and technicians must be certified to conduct asbestos sampling or oversee removal projects covering 100
              square feet or more of surface area.
            </p>
            <a
              href="https://www.dir.ca.gov/databases/doshcaccsst/caccsst_query_1.html"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Certification Requirements
            </a>
          </div>

          <div
            id="standards"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#standards' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Cal/OSHA Asbestos Standards</h2>
            <p className="text-gray-700">
              Cal/OSHA enforces asbestos standards in construction, shipyards, and general industry. Compliance with these
              standards is critical to worker safety and environmental health.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>
                <a
                  href="https://www.dir.ca.gov/title8/1529.html"
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  Asbestos Standards in Construction
                </a>
              </li>
              <li>
                <a
                  href="https://www.dir.ca.gov/title8/8358.html"
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  Asbestos Standards in Shipyards
                </a>
              </li>
              <li>
                <a
                  href="https://www.dir.ca.gov/title8/5208.html"
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  Asbestos Standards in General Industry
                </a>
              </li>
            </ul>
          </div>

          <div
            id="contractor-registration"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#contractor-registration' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Contractor Registration</h2>
            <p className="text-gray-700">
              Contractors performing asbestos-related work must register with Cal/OSHA if the asbestos fiber content exceeds 0.1%
              or covers an area of 100 square feet or more.
            </p>
            <a
              href="https://www.dir.ca.gov/dosh/ACRU/ACRUhome.htm"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Learn about Contractor Registration
            </a>
          </div>

          <div
            id="exam-packet"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#exam-packet' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Exam Application Packet</h2>
            <p className="text-gray-700">
              Download the complete application for asbestos consultant and site surveillance technician certifications,
              including eligibility and exam information.
            </p>
            <a
              href="https://www.dir.ca.gov/DOSH/ACRU/Examination-Application-Packet.pdf"
              target="_blank"
              className="block mt-4 text-blue-500 underline"
            >
              Download the Application Packet
            </a>
          </div>


          <div
            id="contact-info"
            className={`${styles.section} bg-white rounded-lg shadow-lg p-6 mt-8 ${
              highlightedSection === '#contact-info' ? styles.highlight : ''
            }`}
          >
            <h2 className="text-2xl font-bold text-blue-600 mb-4">Cal/OSHA Asbestos Contractor Registration Unit (ACRU)</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <strong>Address:</strong> 1750 Howe Avenue, Suite 460, Sacramento, CA 95825
              </li>
              <li>
                <strong>Phone:</strong> (916) 574-2993
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:ACRU@dir.ca.gov" className="text-blue-500 underline">
                  ACRU@dir.ca.gov
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full py-6 mt-12">
            <div className="container mx-auto">
              <SocialMedia />
              <div className="pb-0">
                <Review />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-[15%] bg-white h-screen shadow-md border-l border-gray-300 sticky top-0 right-0">
        <div className="p-4">
          <h2 className="text-lg font-bold text-blue-600 mb-4">Downloads</h2>
          <div className="space-y-4">
            <a
              href="https://www.dir.ca.gov/DOSH/ACRU/Examination-Application-Packet.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FaFilePdf className="mr-2" /> Exam Application Packet
            </a>
            <a
              href="https://www.dir.ca.gov/databases/doshcaccsst/caccsst_query_1.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline"
            >
              <FaFilePdf className="mr-2" /> Certification Requirements
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
