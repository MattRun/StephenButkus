// // 'use client';
// // import React from 'react';
// // import Link from 'next/link';
// // import { Disclosure } from '@headlessui/react';
// // import { ChevronUpIcon } from '@heroicons/react/24/solid';
// // import { motion } from 'framer-motion';

// // const faqData = [
// //   {
// //     question: "What is the difference between a Certified Asbestos Consultant (CAC) and a Certified Site Surveillance Technician (CSST)?",
// //     answer: (
// //       <>
// //         <p>
// //           A <strong>Certified Asbestos Consultant (CAC)</strong> is defined in 8 CCR 1529 as any person who contracts to provide professional health and safety services relating to asbestos containing construction material, which comprises 100 square feet or more of surface area. The activities of a CAC include:
// //         </p>
// //         <ul className="list-disc pl-6 mb-4">
// //           <li>Building inspection</li>
// //           <li>Abatement project design</li>
// //           <li>Contract administration</li>
// //           <li>Sample collection</li>
// //           <li>Preparation of asbestos management plans</li>
// //           <li>Clearance monitoring</li>
// //           <li>Supervision of a CSST</li>
// //         </ul>
// //         <p>
// //           A <strong>Certified Site Surveillance Technician (CSST)</strong> acts as an independent on-site representative of a CAC. They monitor asbestos abatement activities, provide air monitoring services, and perform building surveys and contract administration under the direction of a CAC.
// //         </p>
// //       </>
// //     ),
// //   },
// //   {
// //     question: "What do I need to become a Certified Asbestos Consultant (CAC) or Certified Site Surveillance Technician (CSST)?",
// //     answer: (
// //       <>
// //         <p><strong>Certified Asbestos Consultant (CAC)</strong>:</p>
// //         <ul className="list-disc pl-6 mb-4">
// //           <li>Possess AHERA Training Certificates from a Cal/OSHA approved provider</li>
// //           <li>Courses: Management Planner, Project Designer, Contractor/Supervisor, Building Inspector</li>
// //         </ul>
// //         <p><strong>Certified Site Surveillance Technician (CSST)</strong>:</p>
// //         <ul className="list-disc pl-6 mb-4">
// //           <li>Possess AHERA Training Certificates for Contractor/Supervisor and Building Inspector</li>
// //           <li>Meet minimum professional work experience and education requirements</li>
// //         </ul>
// //       </>
// //     ),
// //   },
// //   {
// //     question: "How do I apply to become a Certified Asbestos Consultant (CAC) or Certified Site Surveillance Technician (CSST)?",
// //     answer: (
// //       <>
// //         Applications can be found at:
// //         <br />
// //         <motion.a
// //           href="https://www.dir.ca.gov/DOSH/ACRU/Examination-Application-Packet.pdf"
// //           className="text-blue-500 hover:underline"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Certification Exam Application
// //         </motion.a>
// //       </>
// //     ),
// //   },
// //   {
// //     question: "When is the next Cal/OSHA CAC/CSST exam?",
// //     answer: (
// //       <>
// //         The exam dates for 2024 are as follows:
// //         <ul className="list-disc pl-6 mb-4">
// //           <li>October 18-20</li>
// //           <li>November 15-17</li>
// //           <li>December 13-16</li>
// //         </ul>
// //         More information at:
// //         <motion.a
// //           href="https://www.dir.ca.gov/DOSH/ACRU/Exam-Schedule.pdf"
// //           className="text-blue-500 hover:underline"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Cal/OSHA Exam Schedule
// //         </motion.a>
// //       </>
// //     ),
// //   },
// //   {
// //     question: "What is the process for registering for a course?",
// //     answer: "You can register through our website by navigating to the course page and clicking 'Sign Up.'",
// //   },
// //   {
// //     question: "Do I need to renew my certification?",
// //     answer: "Yes, certain certifications require annual renewal. Please check individual course details for renewal requirements.",
// //   },
// //   {
// //     question: "What payment methods do you accept?",
// //     answer: "We accept all major credit cards, including Visa, MasterCard, and American Express. Corporate invoicing is also available.",
// //   },
// //   {
// //     question: "Are there any prerequisites for the courses?",
// //     answer: "Some courses have prerequisites. Please review the course details for more information.",
// //   },
// //   {
// //     question: "Where are the courses held?",
// //     answer: "Courses are held at our main training center in Lawndale, CA. We also offer remote and on-site training.",
// //   },
// //   {
// //     question: "Can I get a refund if I cancel my registration?",
// //     answer: "Refunds are available up to 7 days before the course. Cancellations within 7 days are non-refundable but may be rescheduled.",
// //   },
// // ];

// // const resourcesLinks = [
// //   { title: "Exam Dates", path: "/dashboard/pages/resources/examdates" },
// //   { title: "FAQ", path: "/dashboard/pages/resources/faq" },
// //   { title: "Certification Info", path: "/dashboard/pages/resources/certificationinfo" },
// // ];

// // export default function FAQPage() {
// //   return (
// //     <div className="min-h-screen bg-gray-900 text-white flex">
// //       {/* Left Sidebar Navigation */}
// //       <aside className="w-64 bg-gray-800 p-6 flex-shrink-0">
// //         <h2 className="text-2xl font-bold mb-6 text-center">Resources</h2>
// //         <ul className="space-y-4">
// //           {resourcesLinks.map((resource, index) => (
// //             <li key={index}>
// //               <Link href={resource.path}>
// //                 <motion.a
// //                   className="block px-4 py-2 text-center rounded hover:bg-blue-600 transition"
// //                   whileHover={{ scale: 1.05 }}
// //                 >
// //                   {resource.title}
// //                 </motion.a>
// //               </Link>
// //             </li>
// //           ))}
// //         </ul>
// //       </aside>

// //       {/* Main FAQ Content */}
// //       <main className="flex-grow p-8">
// //         <div className="bg-gray-100 text-gray-900 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
// //           <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>
// //           <div className="bg-gray-200 rounded-lg p-6 shadow-inner">
// //             {faqData.map((faq, index) => (
// //               <Disclosure key={index}>
// //                 {({ open }) => (
// //                   <>
// //                     <Disclosure.Button className="flex justify-between items-center w-full px-4 py-2 text-left text-lg font-medium text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 mb-2">
// //                       <span>{faq.question}</span>
// //                       <ChevronUpIcon className={`w-5 h-5 transform ${open ? 'rotate-180' : ''}`} />
// //                     </Disclosure.Button>
// //                     <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-600">{faq.answer}</Disclosure.Panel>
// //                   </>
// //                 )}
// //               </Disclosure>
// //             ))}
// //           </div>

// //           {/* Contact Us Button */}
// //           <div className="text-center mt-8">
// //             <motion.a
// //               href="/dashboard/pages/contactus"
// //               className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
// //               whileHover={{ scale: 1.1 }}
// //               whileTap={{ scale: 0.9 }}
// //             >
// //               Have any Questions? Contact Us
// //             </motion.a>
// //           </div>
// //         </div>

// //         {/* Verifying Information Section */}
// //         <div className="bg-gray-100 text-gray-900 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-12">
// //           <h2 className="text-3xl font-bold text-center mb-8">Resources</h2>
// //           <ul className="list-disc pl-6 mb-4">
// //             <li>
// //               <motion.a
// //                 href="https://www.osha.gov/"
// //                 className="text-blue-500 hover:underline"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //               >
// //                 OSHA Official Website
// //               </motion.a>
// //             </li>
// //             <li>
// //               <motion.a
// //                 href="https://www.dir.ca.gov/DOSH/"
// //                 className="text-blue-500 hover:underline"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //               >
// //                 Cal/OSHA Website
// //               </motion.a>
// //             </li>
// //           </ul>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // }add





// 'use client';
// import React, { useState } from 'react';
// import { Disclosure } from '@headlessui/react';
// import { ChevronUpIcon } from '@heroicons/react/24/solid';
// import { motion } from 'framer-motion';
// import Link from '@/node_modules/next/link';

// const faqData = [
//   {
//     question: "What is the difference between a Certified Asbestos Consultant (CAC) and a Certified Site Surveillance Technician (CSST)?",
//     answer: (
//       <>
//         <p>
//           A <strong>Certified Asbestos Consultant (CAC)</strong> is defined as someone who provides health and safety services for asbestos-containing construction material over 100 square feet. These activities include:
//         </p>
//         <ul className="list-disc pl-6 mb-4">
//           <li>Building inspection</li>
//           <li>Abatement project design</li>
//           <li>Contract administration</li>
//           <li>Sample collection</li>
//           <li>Preparation of asbestos management plans</li>
//           <li>Clearance monitoring</li>
//           <li>Supervision of a CSST</li>
//         </ul>
//         <p>A <strong>CSST</strong> monitors asbestos abatement activities and provides air monitoring under a CAC.</p>
//       </>
//     ),
//   },
//   {
//     question: "What do I need to become a Certified Asbestos Consultant (CAC) or Certified Site Surveillance Technician (CSST)?",
//     answer: (
//       <>
//         <p><strong>Certified Asbestos Consultant (CAC):</strong></p>
//         <ul className="list-disc pl-6 mb-4">
//           <li>AHERA Training Certificates from a Cal/OSHA-approved provider</li>
//           <li>Courses: Management Planner, Project Designer, Contractor/Supervisor, Building Inspector</li>
//         </ul>
//         <p><strong>Certified Site Surveillance Technician (CSST):</strong></p>
//         <ul className="list-disc pl-6 mb-4">
//           <li>AHERA Training Certificates for Contractor/Supervisor and Building Inspector</li>
//           <li>Professional work experience and education</li>
//         </ul>
//       </>
//     ),
//   },
//   {
//     question: "How do I apply to become a Certified Asbestos Consultant (CAC) or Certified Site Surveillance Technician (CSST)?",
//     answer: (
//       <>
//         Applications can be found at:
//         <br />
//         <motion.a
//           href="https://www.dir.ca.gov/DOSH/ACRU/Examination-Application-Packet.pdf"
//           className="text-blue-500 hover:underline"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Certification Exam Application
//         </motion.a>
//       </>
//     ),
//   },
//   {
//     question: "When is the next Cal/OSHA CAC/CSST exam?",
//     answer: (
//       <>
//         The 2024 exam dates are:
//         <ul className="list-disc pl-6 mb-4">
//           <li>October 18-20</li>
//           <li>November 15-17</li>
//           <li>December 13-16</li>
//         </ul>
//         More info at:
//         <motion.a
//           href="https://www.dir.ca.gov/DOSH/ACRU/Exam-Schedule.pdf"
//           className="text-blue-500 hover:underline"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Cal/OSHA Exam Schedule
//         </motion.a>
//       </>
//     ),
//   },
//   {
//     question: "What is the process for registering for a course?",
//     answer: "You can register on our website by navigating to the course page and clicking 'Sign Up.'",
//   },
//   {
//     question: "Do I need to renew my certification?",
//     answer: "Yes, certain certifications require annual renewal. Please check individual course details for renewal requirements.",
//   },
//   {
//     question: "What payment methods do you accept?",
//     answer: "We accept all major credit cards including Visa, MasterCard, and American Express. Corporate invoicing is also available.",
//   },
//   {
//     question: "Are there any prerequisites for the courses?",
//     answer: "Some courses have prerequisites. Please review the course details for more information.",
//   },
//   {
//     question: "Where are the courses held?",
//     answer: "Courses are held at our main training center in Lawndale, CA. Remote and on-site training options are also available.",
//   },
//   {
//     question: "Can I get a refund if I cancel my registration?",
//     answer: "Refunds are available up to 7 days before the course. Cancellations within 7 days are non-refundable but may be rescheduled.",
//   },
// ];

// const resourcesLinks = [
//   { title: "Exam Dates", path: "/dashboard/pages/resources/examdates" },
//   { title: "FAQ", path: "/dashboard/pages/resources/faq" },
//   { title: "Certification Info", path: "/dashboard/pages/resources/certificationinfo" },
// ];

// export default function FAQPage() {
//   const [searchTerm, setSearchTerm] = useState("");

//   // Filter FAQ data based on search term
//   const filteredFaqData = faqData.filter(faq =>
//     faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     faq.answer.props.children.toString().toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex">
//       {/* Sidebar Navigation */}
//       <aside className="w-64 bg-gray-800 p-6 flex-shrink-0">
//         <h2 className="text-2xl font-bold mb-6 text-center">Resources</h2>
//         <ul className="space-y-4">
//           {resourcesLinks.map((resource, index) => (
//             <li key={index}>
//               <Link href={resource.path}>
//                 <motion.a
//                   className="block px-4 py-2 text-center rounded hover:bg-blue-600 transition"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   {resource.title}
//                 </motion.a>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main FAQ Content */}
//       <main className="flex-grow p-8">
//         {/* Search Bar */}
//         <div className="relative mb-8">
//           <input
//             type="text"
//             className="w-full p-4 border border-gray-300 rounded-lg text-gray-900"
//             placeholder="What can I help you with?"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         <div className="bg-gray-100 text-gray-900 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
//           <h1 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h1>

//           <div className="bg-gray-200 rounded-lg p-6 shadow-inner">
//             {filteredFaqData.map((faq, index) => (
//               <Disclosure key={index}>
//                 {({ open }) => (
//                   <>
//                     <Disclosure.Button className="flex justify-between items-center w-full px-4 py-2 text-left text-lg font-medium text-gray-800 bg-gray-300 hover:bg-gray-400 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 mb-2">
//                       <span className="font-bold">{faq.question}</span>
//                       <ChevronUpIcon className={`w-5 h-5 transform ${open ? 'rotate-180' : ''}`} />
//                     </Disclosure.Button>
//                     <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-600">{faq.answer}</Disclosure.Panel>
//                   </>
//                 )}
//               </Disclosure>
//             ))}

//             {/* Show message if no results match the search */}
//             {filteredFaqData.length === 0 && (
//               <p className="text-center text-gray-500">No FAQs match your search.</p>
//             )}
//           </div>

//           {/* Contact Us Button */}
//           <div className="text-center mt-8">
//             <motion.a
//               href="/dashboard/pages/contactus"
//               className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               Have any Questions? Contact Us
//             </motion.a>
//           </div>
//         </div>

//         {/* Resources Section */}
//         <div className="bg-gray-100 text-gray-900 p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-12">
//           <h2 className="text-3xl font-bold text-center mb-8">Resources</h2>
//           <ul className="list-disc pl-6 mb-4">
//             <li>
//               <motion.a
//                 href="https://www.osha.gov/"
//                 className="text-blue-500 hover:underline"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 OSHA Official Website
//               </motion.a>
//             </li>
//             <li>
//               <motion.a
//                 href="https://www.dir.ca.gov/DOSH/"
//                 className="text-blue-500 hover:underline"
//                 target="_blank"
//                 rel=


//                 "noopener noreferrer"
//                 >
//                   Cal/OSHA Website
//                 </motion.a>
//               </li>
//             </ul>
//           </div>
//         </main>
//       </div>
//     );
//   }













'use client';
import React from 'react';
import SidebarLayout from './SidebarLayout';
import FAQContent from './FAQContent';
import styles from './faq.module.css';
import "@fontsource/source-sans-pro";


// import MobileDrawer from './MobileDrawer';

export default function FAQPage() {
  // Custom handler for smooth scrolling
  const handleSmoothScroll = (sectionId: string) => {
    const headerOffset = 100; // Adjust this value to match your header's height
    const section = document.getElementById(sectionId);
    
    if (section) {
      const elementPosition = section.getBoundingClientRect().top; // Get the position relative to viewport
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset; // Adjust for header
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <div className="min-h-screen flex bg-white text-black">
        {/* Mobile Drawer for small screens */}
        {/* <div className="lg:hidden">
        <MobileDrawer />
      </div> */}

      {/* Sidebar for larger screens */}
      {/* <div className="hidden lg:block"> */}
        {/* <SidebarLayout /> */}
      {/* </div> */}

      {/* Main Content */}
      <div className="relative flex-1 p-8">
     
      <div className={styles.mainContent}>
        {/* Categories Section */}
        <div className="mb-12 relative">
        <div className="mb-12 relative">
      {/* Solid Sky Blue Background */}
      {/* <div 
        className="absolute w-full h-full bg-sky-400 opacity-70"
      ></div> */}

           {/* Header Text with Overlay and Centering */}
           <div 
  className="relative z-10 bg-black bg-opacity-20 p-8 rounded-lg inline-block mx-auto"
  style={{ backgroundColor: '#24529c' }}
>
                <h1 
                  className="text-4xl font-bold text-gray-100 text-shadow-lg"
                  style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.9)' }}
                >
                  Find answers to commonly asked questions about our services.
                </h1>
              </div>
              </div>

        
        {/* Grid Layout for Blue Links */}
        <div className="grid grid-cols-3 gap-4"> {/* Update this to 3 or 4 columns if needed */}
            {/* General FAQ Links */}
          <div>
          <h2 className="text-xl font-semibold mb-4">General FAQ:</h2>
              <ul className="grid gap-2 list-none">
              <li>
                <button 
                  onClick={() => handleSmoothScroll('basic')}
                  className="text-blue-600 hover:underline"
                >
                  Basic
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSmoothScroll('Asbestos')}
                  className="text-blue-600 hover:underline"
                >
                  Asbestos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSmoothScroll('Analytical')}
                  className="text-blue-600 hover:underline"
                >
                  Analytical 
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSmoothScroll('Lead')}
                  className="text-blue-600 hover:underline"
                >
                  Lead
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSmoothScroll('Mold')}
                  className="text-blue-600 hover:underline"
                >
                  Mold
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSmoothScroll('HAZWOPER')}
                  className="text-blue-600 hover:underline"
                >
                  HAZWOPER
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSmoothScroll('WorkerSafety')}
                  className="text-blue-600 hover:underline"
                >
                  Worker Safety
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSmoothScroll('CPRAEDFirst Aid')}
                  className="text-blue-600 hover:underline"
                >
                  CPR, AED & First Aid
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSmoothScroll('ConfinedSpaces')}
                  className="text-blue-600 hover:underline"
                >
                  Confined Spaces
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSmoothScroll('BloodbornePathogens')}
                  className="text-blue-600 hover:underline"
                >
                  Bloodborne Pathogens
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSmoothScroll('LockOutTagOut')}
                  className="text-blue-600 hover:underline"
                >
                  Lock Out, Tag Out
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSmoothScroll('purchasing')}
                  className="text-blue-600 hover:underline"
                >
                  Purchasing and Availability
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSmoothScroll('desktop')}
                  className="text-blue-600 hover:underline"
                >
                  Desktop Applications
                </button>
              </li>
              {/* Add more blue links */}
            </ul>
          </div>

          {/* Account FAQ */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Account FAQ:</h2>
              <ul className="grid gap-2 list-none">
              <li>
                <button 
                  onClick={() => handleSmoothScroll('account-security')}
                  className="text-blue-600 hover:underline"
                >
                  Account Security
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSmoothScroll('password-reset')}
                  className="text-blue-600 hover:underline"
                >
                  Password Reset
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSmoothScroll('billing')}
                  className="text-blue-600 hover:underline"
                >
                  Billing and Payment
                </button>
              </li>
              {/* Add more blue links */}
            </ul>
          </div>

          {/* Other FAQ */}
          <div>
          <h2 className="text-xl font-semibold mb-4">Other:</h2>
            <ul className="grid gap-2 list-none">
              <li>
                <button 
                  onClick={() => handleSmoothScroll('general-support')}
                  className="text-blue-600 hover:underline"
                >
                  General Support
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSmoothScroll('troubleshooting')}
                  className="text-blue-600 hover:underline"
                >
                  Troubleshooting
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSmoothScroll('refunds-and-cancellations')}
                  className="text-blue-600 hover:underline"
                >
                  Refunds and Cancellations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleSmoothScroll('account-management')}
                  className="text-blue-600 hover:underline"
                >
                  Account Management
                </button>
              </li>
              {/* Add more blue links */}
            </ul>
          </div>
        </div>
       </div>

        {/* FAQ Accordion Section */}
        <FAQContent />
      </div>
    </div>
  </div>
  );
}
