'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Fuse from 'fuse.js';

type SiteDataItem = {
  title: string;
  category: string;
  path: string;
};

const siteData: SiteDataItem[] = [
    // Courses
    { title: 'All Courses', category: 'Courses', path: '/dashboard/pages/alltraining' },
    { title: 'Asbestos Worker (Initial) - 32 Hour Course', category: 'Courses', path: '/dashboard/pages/training/asbestos/course-1' },
    { title: 'Asbestos Worker (Refresher) - 8 Hour Course', category: 'Courses', path: '/dashboard/pages/training/asbestos/course-2' },
    { title: 'Contractor/Supervisor (Initial) - 40 Hour Course', category: 'Courses', path: '/dashboard/pages/training/asbestos/course-3' },
    { title: 'Contractor/Supervisor (Refresher) - 8 Hour Course', category: 'Courses', path: '/dashboard/pages/training/asbestos/course-4' },
    { title: 'Building Inspector (Initial) - 24 Hour Course', category: 'Courses', path: '/dashboard/pages/training/asbestos/course-5' },
    { title: 'Building Inspector (Refresher) - 4 Hour Course', category: 'Courses', path: '/dashboard/pages/training/asbestos/course-6' },
    { title: 'NIOSH 582 Equivalency Course - 32 Contact Hours', category: 'Courses', path: '/dashboard/pages/training/analytical/course-1' },
    { title: 'Introduction to PLM Analysis - 40 Contact Hours', category: 'Courses', path: '/dashboard/pages/training/analytical/course-2' },
    { title: 'Advanced Asbestos PLM Analysis - 16 Contact Hours', category: 'Courses', path: '/dashboard/pages/training/analytical/course-3' },
    { title: 'Lead Sample Technician - 8 Hour Course', category: 'Courses', path: '/dashboard/pages/training/lead/course-1' },
    { title: 'Introduction to Mold Sampling - 16 Hour Course', category: 'Courses', path: '/dashboard/pages/training/mold/course-1' },
    { title: 'Bloodborne Pathogens - 1 Hour Course', category: 'Courses', path: '/dashboard/pages/training/workersafety/bloodbornepathogens' },
    { title: 'Confined Spaces - 1.5 Hour Course', category: 'Courses', path: '/dashboard/pages/training/workersafety/confinedspaces' },
    { title: 'Lock Out, Tag Out - 1.5 Hour Course', category: 'Courses', path: '/dashboard/pages/training/workersafety/lockouttagout' },
    { title: 'CPR, AED & First Aid', category: 'Courses', path: '/dashboard/pages/training/cpraedfirstaid' },
    { title: 'HAZWOPER Training', category: 'Courses', path: '/dashboard/pages/training/hazwoper' },
  
    // FAQ
    { title: 'FAQ', category: 'FAQ', path: '/dashboard/pages/resources/faq' },
    { title: 'What is the difference between a CAC and a CSST?', category: 'FAQ', path: '/dashboard/pages/resources/faq#general' },
    { title: 'How do I apply to become a CAC?', category: 'FAQ', path: '/dashboard/pages/resources/faq#general' },
    { title: 'What is the process for registering for a course?', category: 'FAQ', path: '/dashboard/pages/resources/faq#registration' },
    { title: 'Do I need to renew my certification?', category: 'FAQ', path: '/dashboard/pages/resources/faq#certification' },
    { title: 'What payment methods do you accept?', category: 'FAQ', path: '/dashboard/pages/resources/faq#payment' },
    { title: 'Are there any prerequisites for the courses?', category: 'FAQ', path: '/dashboard/pages/resources/faq#prerequisites' },
    { title: 'Where are the courses held?', category: 'FAQ', path: '/dashboard/pages/resources/faq#location' },
    { title: 'Can I get a refund if I cancel my registration?', category: 'FAQ', path: '/dashboard/pages/resources/faq#refunds' },
  
    // About
    { title: 'About Us', category: 'About', path: '/dashboard/pages/about/aehsinfo' },
    { title: 'Instructor Profiles', category: 'About', path: '/dashboard/pages/about/instructorprofiles' },
    { title: 'Accreditations', category: 'About', path: '/dashboard/pages/about/accreditation' },
  
    // Calendar
    { title: 'Calendar', category: 'Calendar', path: '/dashboard/pages/calendar' },
  
    // Contact
    { title: 'Contact Us', category: 'Contact', path: '/dashboard/pages/contactus/generalinquiry' },
    { title: 'General Inquiry Form', category: 'Contact', path: '/dashboard/pages/contactus/generalinquiry' },
  
    // Resources
    { title: 'Professional Resources', category: 'Resources', path: '/dashboard/pages/resources/professionalresources' },
    { title: 'Exam Dates', category: 'Resources', path: '/dashboard/pages/resources/examdates' },
  
    // Footer Links
    { title: 'Company Info', category: 'Footer', path: '/dashboard/pages/about/aehsinfo' },
    { title: 'Join Our Newsletter', category: 'Footer', path: '/dashboard/pages/newsletter' },
    { title: 'Upcoming Courses', category: 'Footer', path: '/dashboard/pages/training/upcomingcourses' },
    { title: 'Google Reviews', category: 'Footer', path: 'https://g.page/r/Ceh4qq4FerBXEBM/review' },
    { title: 'Yelp Reviews', category: 'Footer', path: 'https://www.yelp.com/biz/academy-of-environmental-health-and-safety-lawndale' },
  
    // Other FAQs (Expanded)
    { title: 'What is asbestos and why is it dangerous?', category: 'FAQ', path: '/dashboard/pages/resources/faq#asbestos' },
    { title: 'What jobs can I get with asbestos certification?', category: 'FAQ', path: '/dashboard/pages/resources/faq#asbestosjobs' },
    { title: 'How often do I need to renew my asbestos certification?', category: 'FAQ', path: '/dashboard/pages/resources/faq#asbestosrenewal' },
    { title: 'What are the training requirements for asbestos professionals?', category: 'FAQ', path: '/dashboard/pages/resources/faq#asbestosrequirements' },
  
    // Example Resource Pages
    { title: 'Introduction to Mold Safety Practices', category: 'Resources', path: '/dashboard/pages/resources/moldsafety' },
    { title: 'Importance of Lead Safety Training', category: 'Resources', path: '/dashboard/pages/resources/leadsafety' },
    { title: 'Worker Safety Best Practices', category: 'Resources', path: '/dashboard/pages/resources/workersafety' },
  
    // Blog (Example Entries)
    { title: 'Top Tips for Asbestos Abatement', category: 'Blog', path: '/dashboard/pages/blog/asbestos-abatement-tips' },
    { title: 'How to Prepare for the Lead Safety Certification Exam', category: 'Blog', path: '/dashboard/pages/blog/lead-certification-prep' },
    { title: 'The Importance of CPR Training in the Workplace', category: 'Blog', path: '/dashboard/pages/blog/cpr-training-benefits' },
  
    // Additional Course Entries
    { title: 'Advanced Asbestos Analysis Techniques', category: 'Courses', path: '/dashboard/pages/training/advanced-asbestos-analysis' },
    { title: 'Environmental Health and Safety Best Practices', category: 'Courses', path: '/dashboard/pages/training/environmental-health' },
  
    // Placeholder Links
    { title: 'Coming Soon: Advanced Training Modules', category: 'Coming Soon', path: '/dashboard/pages/comingsoon' },
    { title: 'Demo Course Available', category: 'Demo', path: '/dashboard/comingsoon' },
 
    // Additional Courses
    { title: 'Asbestos Management Planner - 24 Hour Course', category: 'Courses', path: '/dashboard/pages/training/asbestos/management-planner' },
    { title: 'Asbestos Project Designer - 24 Hour Course', category: 'Courses', path: '/dashboard/pages/training/asbestos/project-designer' },
    { title: 'Advanced Mold Remediation Techniques', category: 'Courses', path: '/dashboard/pages/training/mold/advanced-remediation' },
    { title: 'Bloodborne Pathogens Awareness', category: 'Courses', path: '/dashboard/pages/training/workersafety/bloodborne-awareness' },
    { title: 'Hazardous Waste Operations (HAZWOPER)', category: 'Courses', path: '/dashboard/pages/training/hazwoper/operations' },
  
    // Expanded FAQ
    { title: 'How do I register for a course?', category: 'FAQ', path: '/dashboard/pages/resources/faq#register' },
    { title: 'What are the exam requirements for certification?', category: 'FAQ', path: '/dashboard/pages/resources/faq#exam-requirements' },
    { title: 'Can I take courses online?', category: 'FAQ', path: '/dashboard/pages/resources/faq#online-courses' },
    { title: 'What should I bring to an in-person course?', category: 'FAQ', path: '/dashboard/pages/resources/faq#in-person-requirements' },
    { title: 'What certifications do I need for mold remediation?', category: 'FAQ', path: '/dashboard/pages/resources/faq#mold-certifications' },
    { title: 'Do you offer group training?', category: 'FAQ', path: '/dashboard/pages/resources/faq#group-training' },
    { title: 'What happens if I miss a class?', category: 'FAQ', path: '/dashboard/pages/resources/faq#missed-class' },
    { title: 'Are there discounts for multiple courses?', category: 'FAQ', path: '/dashboard/pages/resources/faq#discounts' },
    { title: 'How do I contact customer support?', category: 'FAQ', path: '/dashboard/pages/resources/faq#support' },
    { title: 'Where can I find study materials?', category: 'FAQ', path: '/dashboard/pages/resources/faq#study-materials' },
  
    // Calendar
    { title: 'Training Schedule for 2024', category: 'Calendar', path: '/dashboard/pages/calendar#2024' },
    { title: 'Upcoming Workshops', category: 'Calendar', path: '/dashboard/pages/calendar#workshops' },
  
    // Blog
    { title: 'What to Expect in an Asbestos Inspection Course', category: 'Blog', path: '/dashboard/pages/blog/asbestos-inspection' },
    { title: 'The Role of Building Inspectors in Safety Compliance', category: 'Blog', path: '/dashboard/pages/blog/building-inspectors-role' },
    { title: 'How Lead Certification Protects Your Workforce', category: 'Blog', path: '/dashboard/pages/blog/lead-certification' },
    { title: '10 Tips for Passing Your HAZWOPER Certification', category: 'Blog', path: '/dashboard/pages/blog/hazwoper-certification-tips' },
    { title: 'The Importance of Safety Protocols in the Workplace', category: 'Blog', path: '/dashboard/pages/blog/safety-protocols' },
  
    // Contact
    { title: 'Schedule a Call with an Instructor', category: 'Contact', path: '/dashboard/pages/contactus/schedule-call' },
    { title: 'Request More Information', category: 'Contact', path: '/dashboard/pages/contactus/request-info' },
  
    // Resources
    { title: 'Resource Guide for Asbestos Professionals', category: 'Resources', path: '/dashboard/pages/resources/asbestos-guide' },
    { title: 'Lead Safety Resources for Contractors', category: 'Resources', path: '/dashboard/pages/resources/lead-guide' },
    { title: 'Training Videos: Mold Safety Basics', category: 'Resources', path: '/dashboard/pages/resources/mold-videos' },
    { title: 'OSHA Guidelines for Confined Spaces', category: 'Resources', path: '/dashboard/pages/resources/confined-space-osha' },
    { title: 'Best Practices for Worker Safety', category: 'Resources', path: '/dashboard/pages/resources/worker-safety-best-practices' },
  
    // Footer Links (Additional)
    { title: 'Privacy Policy', category: 'Footer', path: '/dashboard/pages/privacy-policy' },
    { title: 'Terms of Service', category: 'Footer', path: '/dashboard/pages/terms-of-service' },
    { title: 'Accessibility Statement', category: 'Footer', path: '/dashboard/pages/accessibility' },
  
    // More FAQs
    { title: 'What is PLM Analysis?', category: 'FAQ', path: '/dashboard/pages/resources/faq#plm-analysis' },
    { title: 'How do I prepare for the NIOSH 582 Exam?', category: 'FAQ', path: '/dashboard/pages/resources/faq#niosh-582' },
    { title: 'What is the role of a Building Inspector?', category: 'FAQ', path: '/dashboard/pages/resources/faq#building-inspector' },
    { title: 'Why is asbestos training required by law?', category: 'FAQ', path: '/dashboard/pages/resources/faq#asbestos-training-requirements' },
  
    // Placeholder/Coming Soon
    { title: 'Advanced Mold Certification (Coming Soon)', category: 'Courses', path: '/dashboard/pages/comingsoon' },
    { title: 'Comprehensive Worker Safety Program', category: 'Courses', path: '/dashboard/pages/training/worker-safety-program' },
    { title: 'Online Courses for Lead Safety', category: 'Courses', path: '/dashboard/pages/training/lead/online' },
    { title: 'Mold Remediation (Advanced)', category: 'Courses', path: '/dashboard/pages/training/mold/advanced' },
    { title: 'CPR and First Aid Certification Online', category: 'Courses', path: '/dashboard/pages/training/cpr-first-aid-online' },

    
        // Asbestos Resources
        { title: 'Asbestos Registrants Database', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/asbestosresources#registrants-database' },
        { title: 'Asbestos Standards', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/asbestosresources#standards' },
        { title: 'Contractor Registration', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/asbestosresources#contractor-registration' },
        { title: 'Exam Application Packet', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/asbestosresources#exam-packet' },
        { title: 'Consultant Certification', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/asbestosresources#consultant-certification' },
        { title: 'Asbestos Contact Information', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/asbestosresources#contact-info' },
      
        // Lead Resources
        { title: 'Title 17 Regulations', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/leadresources#title17' },
        { title: 'EPA Lead Renovation Program', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/leadresources#rrp-program' },
        { title: 'Lead Training & Certification', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/leadresources#training-certification' },
        { title: 'Compliance Requirements', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/leadresources#compliance-requirements' },
        { title: 'Lead Contact Information', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/leadresources#contact-info' },
      
        // Analytical Resources
        { title: 'CALICO Laboratory', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/analyticalresources#calico-lab' },
        { title: 'CAL/OSHA Industrial Relations', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/analyticalresources#industrial-relations' },
        { title: 'Title 8 Section 5208 (Asbestos)', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/analyticalresources#section-5208-asbestos' },
        { title: 'DIR Careers', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/analyticalresources#careers-dir' },
        { title: 'Title 8 Section 5197', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/analyticalresources#section-5197' },
        { title: 'Title 8 Section 1532', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/analyticalresources#title-8-1532' },
      
        // Mold Resources
        { title: 'Introduction to Mold', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/moldresources#introduction' },
        { title: 'Health Effects of Mold', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/moldresources#health-effects' },
        { title: 'Mold Prevention and Control', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/moldresources#prevention-control' },
        { title: 'Mold Cleanup Guidelines', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/moldresources#cleanup-guidelines' },
        { title: 'Additional Mold Resources', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/moldresources#additional-resources' },
      
        // Bloodborne Pathogens
        { title: 'Bloodborne Pathogens Overview', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/bloodbornepathogensresources#bloodborne-overview' },
        { title: 'Exposure Control Plan', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/bloodbornepathogensresources#exposure-control' },
        { title: 'Bloodborne Pathogens Training', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/bloodbornepathogensresources#training' },
        { title: 'Personal Protective Equipment (PPE) for Bloodborne Pathogens', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/bloodbornepathogensresources#ppe' },
      
        // Lockout/Tagout (LOTO)
        { title: 'LOTO Overview', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/lockouttagoutresources#loto-overview' },
        { title: 'LOTO Requirements', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/lockouttagoutresources#requirements' },
        { title: 'Common LOTO Hazards', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/lockouttagoutresources#hazards' },
        { title: 'LOTO Procedures', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/lockouttagoutresources#procedures' },
      
        // Confined Spaces
        { title: 'Confined Spaces Overview', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/confinedspacesresources#confined-spaces-overview' },
        { title: 'Permit-Required Spaces', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/confinedspacesresources#permit-spaces' },
        { title: 'Confined Spaces Training', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/confinedspacesresources#training' },
        { title: 'Atmospheric Monitoring for Confined Spaces', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/confinedspacesresources#monitoring' },
      
        // General Work Safety
        { title: 'Injury and Illness Prevention Programs', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/workersafetyresources#injury-prevention' },
        { title: 'Hazard Communication', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/workersafetyresources#hazard-communication' },
        { title: 'PPE Requirements for Workers', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/workersafetyresources#ppe-requirements' },
        { title: 'Incident Reporting Procedures', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/workersafetyresources#incident-reporting' },
      
        // HAZWOPER Resources
        { title: 'HAZWOPER Regulations', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/hazwoperresources#regulations' },
        { title: 'HAZWOPER Training Requirements', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/hazwoperresources#training-requirements' },
        { title: 'Emergency Response Guidelines', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/hazwoperresources#emergency-response' },
        { title: 'HAZWOPER Contact Information', category: 'Resources', path: '/dashboard/pages/resources/professionalresources/hazwoperresources#contact-info' },
      
        // Extra (General Topics and Placeholder)
        { title: 'Upcoming Events', category: 'Events', path: '/dashboard/pages/resources/events/upcoming' },
        { title: 'Asbestos Safety Updates', category: 'Blog', path: '/dashboard/pages/blog/asbestos-safety' },
        { title: 'Contact Support', category: 'Contact', path: '/dashboard/pages/contactus/support' },
        { title: 'Exam Guidelines', category: 'Exams', path: '/dashboard/pages/resources/exam-guidelines' },
      
      
  
];
  


const fuse = new Fuse(siteData, { keys: ['title', 'category'], threshold: 0.3 });

const SearchComponent = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState<SiteDataItem[]>([]); // Explicitly define the type here

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);

    if (value.trim() === '') {
      setSearchResults([]);
    } else {
      const results = fuse.search(value).map((result) => result.item);
      setSearchResults(results);
    }
  };

  const groupedResults = searchResults.reduce<Record<string, SiteDataItem[]>>((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = [];
    }
    acc[result.category].push(result);
    return acc;
  }, {});
  
  return (
    <div className="bg-gradient-to-r from-[#24529c] to-[#1c3b6e] py-2">
      <div className="relative w-96 ml-auto mr-16">
        {/* Search Input */}
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchChange}
          placeholder="Search the site..."
          className="w-full px-4 py-1 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring focus:ring-blue-300"
        />
  
        {/* Search Results Dropdown */}
        {searchResults.length > 0 && (
          <div className="absolute z-50 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2">
            {Object.keys(groupedResults).map((category, index) => (
              <div key={index} className="border-b border-gray-200">
                <h3 className="text-gray-500 uppercase text-sm font-bold px-4 py-2">{category}</h3>
                <ul>
                  {groupedResults[category].map((result, idx) => (
                    <li
                      key={idx}
                      className="px-4 py-2 border-t border-gray-200 hover:bg-gray-100"
                    >
                      <Link href={result.path} legacyBehavior>
                        <span className="text-blue-500 hover:underline cursor-pointer">{result.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  
  );
};

export default SearchComponent;






// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Link from 'next/link';
// import { FiSearch, FiX } from 'react-icons/fi';

// const SearchWithDropdown = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [searchInput, setSearchInput] = useState('');

//   // Sample site data for demonstration
//   const siteData = [
//     { title: 'All Courses', category: 'Courses', path: '/dashboard/pages/alltraining' },
//     { title: 'FAQ', category: 'FAQ', path: '/dashboard/pages/resources/faq' },
//     { title: 'Contact Us', category: 'Contact', path: '/dashboard/pages/contactus/generalinquiry' },
//     { title: 'About Us', category: 'About', path: '/dashboard/pages/about/aehsinfo' },
//     { title: 'Calendar', category: 'Calendar', path: '/dashboard/pages/calendar' },
//     // Add more entries as needed...
//   ];

//   const filteredResults = siteData.filter((item) =>
//     item.title.toLowerCase().includes(searchInput.toLowerCase())
//   );

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div>
//       {/* Main Header */}
//       <header className="bg-gradient-to-r from-[#24529c] to-[#1c3b6e] text-white py-4 px-6 flex items-center justify-between">
//         <h1 className="text-xl font-bold">AEHS</h1>

//         {/* Search Icon */}
//         <button onClick={toggleDropdown} className="text-white hover:text-gray-300 text-2xl">
//           {isDropdownOpen ? <FiX /> : <FiSearch />}
//         </button>
//       </header>

//       {/* Main Search Bar */}
//       <div className="relative w-96 ml-auto mr-16 mt-2">
//         <input
//           type="text"
//           value={searchInput}
//           onChange={(e) => setSearchInput(e.target.value)}
//           placeholder="Search the site..."
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring focus:ring-blue-300"
//         />

//         {/* Search Results Dropdown */}
//         {searchInput && (
//           <div className="absolute z-50 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2">
//             {filteredResults.length > 0 ? (
//               filteredResults.map((result, index) => (
//                 <div
//                   key={index}
//                   className="px-4 py-2 border-b border-gray-200 hover:bg-gray-100"
//                 >
//                   <Link href={result.path} legacyBehavior>
//                     <a className="text-blue-600 font-medium">{result.title}</a>
//                   </Link>
//                   <span className="block text-gray-500 text-sm">{result.category}</span>
//                 </div>
//               ))
//             ) : (
//               <p className="p-4 text-gray-500">No results found</p>
//             )}
//           </div>
//         )}
//       </div>

//       {/* Search Dropdown */}
//       <AnimatePresence>
//         {isDropdownOpen && (
//           <motion.div
//             className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 p-6"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3, ease: 'easeInOut' }}
//           >
//             {/* Larger Search Bar in Dropdown */}
//             <div className="relative mx-auto max-w-4xl">
//               <input
//                 type="text"
//                 value={searchInput}
//                 onChange={(e) => setSearchInput(e.target.value)}
//                 placeholder="Search the site..."
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring focus:ring-blue-300 text-lg"
//               />
//             </div>

//             {/* Search Results */}
//             <div className="mt-6">
//               {filteredResults.length > 0 ? (
//                 <ul className="space-y-2">
//                   {filteredResults.map((result, index) => (
//                     <li key={index} className="text-gray-700 hover:bg-gray-100 p-2 rounded-lg">
//                       <Link href={result.path} legacyBehavior>
//                         <a className="text-blue-600 font-medium">{result.title}</a>
//                       </Link>
//                       <span className="block text-gray-500 text-sm">{result.category}</span>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-500">No results found</p>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default SearchWithDropdown;

















// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';

// const SearchComponent = ({ onClose }) => {
//   const [searchInput, setSearchInput] = useState('');

//   // Sample site data
//   const siteData = [
//     { title: 'All Courses', category: 'Courses', path: '/dashboard/pages/alltraining' },
//     { title: 'FAQ', category: 'FAQ', path: '/dashboard/pages/resources/faq' },
//     { title: 'Contact Us', category: 'Contact', path: '/dashboard/pages/contactus/generalinquiry' },
//     { title: 'About Us', category: 'About', path: '/dashboard/pages/about/aehsinfo' },
//     { title: 'Calendar', category: 'Calendar', path: '/dashboard/pages/calendar' },
//     // Add more entries...
//   ];

//   const filteredResults = siteData.filter((item) =>
//     item.title.toLowerCase().includes(searchInput.toLowerCase())
//   );

//   return (
//     <div className="bg-white p-6">
//       {/* Close Button */}
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-lg font-bold text-gray-700">Search</h2>
//         <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
//           Close ✖
//         </button>
//       </div>

//       {/* Search Input */}
//       <div className="relative">
//         <input
//           type="text"
//           value={searchInput}
//           onChange={(e) => setSearchInput(e.target.value)}
//           placeholder="Search the site..."
//           className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring focus:ring-blue-300"
//         />
//         {/* Search Results */}
//         {searchInput && (
//           <div className="absolute w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2 z-50 max-h-60 overflow-y-auto">
//             {filteredResults.length > 0 ? (
//               filteredResults.map((result, index) => (
//                 <div
//                   key={index}
//                   className="px-4 py-2 border-b border-gray-200 hover:bg-gray-100"
//                 >
//                   <Link href={result.path}>
//                     <a className="text-blue-600 font-medium">{result.title}</a>
//                   </Link>
//                   <span className="block text-gray-500 text-sm">{result.category}</span>
//                 </div>
//               ))
//             ) : (
//               <p className="p-4 text-gray-500">No results found</p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchComponent;
