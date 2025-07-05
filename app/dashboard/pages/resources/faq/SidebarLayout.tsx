// 'use client';

// import React, { useState } from 'react';
// import { ChevronDownIcon } from '@heroicons/react/24/solid';
// import Link from 'next/link';

// // Updated Sidebar with Categories and Subcategories
// const SidebarLayout = () => {
//   return (
//     <aside className="w-64 bg-gray-800 p-6 flex-shrink-0">
//       <h2 className="text-white text-2xl font-bold mb-6">FAQ Categories</h2>
//       <div className="space-y-4">
//         <NavigationGroup title="Asbestos Training" items={asbestosItems} />
//         <NavigationGroup title="Course Registration" items={registrationItems} />
//         <NavigationGroup title="Account Management" items={accountItems} />
//         <NavigationGroup title="Safety Courses" items={safetyItems} />
//         <NavigationGroup title="Certification" items={certificationItems} />
//         <NavigationGroup title="Payment and Refunds" items={paymentItems} />
//         {/* Add more sections as needed */}
//       </div>
//     </aside>
//   );
// };

// const NavigationGroup = ({ title, items }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="mb-4">
//       <div
//         className="flex justify-between items-center cursor-pointer text-white"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="font-bold">{title}</span>
//         <ChevronDownIcon className={`w-5 h-5 transform ${isOpen ? 'rotate-180' : ''}`} />
//       </div>
//       {isOpen && (
//         <ul className="mt-2 space-y-2">
//           {items.map((item, index) => (
//             <li key={index}>
//               <Link href={item.path} className="block px-4 py-2 text-gray-300 hover:text-white">
//                 {item.title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// // Sample data for each category
// const asbestosItems = [
//   { title: 'What is the difference between a CAC and a CSST?', path: '#cac-csst' },
//   { title: 'How do I become certified?', path: '#certification' },
//   { title: 'Do I need a CAC or CSST?', path: '#need-cac' },
// ];

// const registrationItems = [
//   { title: 'How do I register for a course?', path: '#register-course' },
//   { title: 'What are the prerequisites for registration?', path: '#prerequisites' },
// ];

// const accountItems = [
//   { title: 'How do I reset my password?', path: '#reset-password' },
//   { title: 'How do I update my account details?', path: '#update-account' },
// ];

// const safetyItems = [
//   { title: 'What is covered in the Worker Safety courses?', path: '#worker-safety' },
//   { title: 'Do safety courses include certification?', path: '#safety-certification' },
// ];

// const certificationItems = [
//   { title: 'How do I apply for certification exams?', path: '#apply-certification' },
//   { title: 'When are the next certification exam dates?', path: '#exam-dates' },
// ];

// const paymentItems = [
//   { title: 'What payment methods do you accept?', path: '#payment-methods' },
//   { title: 'What is your refund policy?', path: '#refund-policy' },
// ];

// export default SidebarLayout;


// 'use client';

// import React, { useState } from 'react';
// import { ChevronDownIcon } from '@heroicons/react/24/solid';
// import Link from 'next/link';

// const SidebarLayout = () => {
//   return (
//     <aside className="w-64 bg-gray-800 p-6 flex-shrink-0">
//       <h2 className="text-white text-2xl font-bold mb-6">Resources</h2>
//       <div className="space-y-4">
//         <NavigationGroup title="Certification" items={certificationItems} />
//         <NavigationGroup title="Courses" items={courseItems} />
//         <NavigationGroup title="Registration" items={registrationItems} />
//         <NavigationGroup title="Payment" items={paymentItems} />
//         <NavigationGroup title="General FAQ" items={generalItems} />
//       </div>
//     </aside>
//   );
// };

// const NavigationGroup = ({ title, items }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="mb-4">
//       <div
//         className="flex justify-between items-center cursor-pointer text-white"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="font-bold">{title}</span>
//         <ChevronDownIcon className={`w-5 h-5 transform ${isOpen ? 'rotate-180' : ''}`} />
//       </div>
//       {isOpen && (
//         <ul className="mt-2 space-y-2">
//           {items.map((item, index) => (
//             <li key={index}>
//               <Link href={`#${item.path}`} className="block px-4 py-2 text-gray-300 hover:text-white">
//                 {item.title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// // Define navigation items with paths corresponding to FAQ categories
// const certificationItems = [
//   { title: 'What is a CAC?', path: 'Certification' },
//   { title: 'How do I apply?', path: 'Certification' },
// ];

// const courseItems = [
//   { title: 'Where are courses held?', path: 'Courses' },
//   { title: 'What are the prerequisites?', path: 'Courses' },
// ];

// const registrationItems = [
//   { title: 'Can I reschedule?', path: 'Registration' },
//   { title: 'Do I need to renew my certification?', path: 'Registration' },
// ];

// const paymentItems = [
//   { title: 'What payment methods are accepted?', path: 'Payment' },
//   { title: 'Refund policy?', path: 'Payment' },
// ];

// const generalItems = [
//   { title: 'Do you offer online courses?', path: 'GeneralFAQ' },
//   { title: 'Where is the exam schedule?', path: 'GeneralFAQ' },
// ];

// export default SidebarLayout;







'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import styles from './faq.module.css';

// Define the type for the onCategorySelect prop
type SidebarLayoutProps = {
  onCategorySelect: (category: string) => void;
};

type NavigationGroupProps = {
  title: string;
  items: { title: string; category: string }[];
  onCategorySelect: (category: string) => void;
};

const SidebarLayout: React.FC<SidebarLayoutProps> = ({ onCategorySelect }) => {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.sidebarHeading}>Resources</h2>
      <div className={styles.navigationGroup}>
        <NavigationGroup title="General Questions" items={generalItems} onCategorySelect={onCategorySelect} />
        <NavigationGroup title="Asbestos Training" items={asbestosItems} onCategorySelect={onCategorySelect} />
        <NavigationGroup title="Certifications" items={certificationItems} onCategorySelect={onCategorySelect} />
      </div>
    </aside>
  );
};

const NavigationGroup: React.FC<NavigationGroupProps> = ({ title, items, onCategorySelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.navigationGroup}>
      <div
        className={styles.navigationGroupTitle}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDownIcon className={`w-5 h-5 transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      {isOpen && (
        <ul className={styles.navigationGroupItems}>
          {items.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => onCategorySelect(item.category)}
                className={styles.navigationItem}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Sample data for navigation items
const generalItems = [
  { title: 'General FAQ', category: 'General' },
];

const asbestosItems = [
  { title: 'Asbestos FAQ', category: 'AsbestosTraining' },
];

const certificationItems = [
  { title: 'Certification FAQ', category: 'Certifications' },
];

export default SidebarLayout;
