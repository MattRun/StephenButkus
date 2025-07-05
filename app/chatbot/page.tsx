// // 'use client';

// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import Link from 'next/link';

// // const faqPage = '/faq';

// // const predefinedQuestions = [
// //   { question: "What is this website about?", answer: "This website is about showcasing our students and their achievements." },
// //   { question: "How do I contact support?", answer: "You can contact support via the Contact Us page." },
// // ];

// // const Chatbot = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isMinimized, setIsMinimized] = useState(false);
// //   const [messages, setMessages] = useState([
// //     { from: 'bot', text: "Hi! I'm HelperBot. How can I assist you?" },
// //   ]);
// //   const [input, setInput] = useState('');

// //   const handleSend = () => {
// //     if (!input.trim()) return;

// //     const userMessage = { from: 'user', text: input };
// //     setMessages((prev) => [...prev, userMessage]);

// //     const predefined = predefinedQuestions.find((q) =>
// //       input.toLowerCase().includes(q.question.toLowerCase())
// //     );

// //     if (predefined) {
// //       setMessages((prev) => [...prev, { from: 'bot', text: predefined.answer }]);
// //     } else {
// //       setMessages((prev) => [
// //         ...prev,
// //         { from: 'bot', text: `I couldn't find an answer to that. Please visit our FAQ page.` },
// //         { from: 'bot', text: <Link href={faqPage} className="text-blue-500 underline">Go to FAQ</Link> },
// //       ]);
// //     }

// //     setInput('');
// //   };

// //   return (
// //     <div>
// //       {/* Chatbot Trigger */}
// //       {!isOpen && !isMinimized && (
// //         <motion.div
// //           className="fixed bottom-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer text-lg"
// //           animate={{ scale: [0, 1.2, 1] }}
// //           onClick={() => setIsOpen(true)}
// //         >
// //           Hey, need help?
// //         </motion.div>
// //       )}

// //       {/* Bell Icon */}
// //       {!isOpen && isMinimized && (
// //         <motion.div
// //           className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer"
// //           onClick={() => setIsOpen(true)}
// //         >
// //           🛎️
// //         </motion.div>
// //       )}

// //       {/* Chat Window */}
// //       {isOpen && (
// //         <motion.div
// //           className="fixed bottom-6 right-6 bg-white border rounded-lg shadow-lg w-80 h-96 flex flex-col"
// //           initial={{ opacity: 0, scale: 0.8 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           exit={{ opacity: 0, scale: 0.8 }}
// //         >
// //           {/* Header */}
// //           <div className="bg-blue-500 text-white px-4 py-2 flex justify-between items-center">
// //             <span className="font-bold">HelperBot</span>
// //             <button
// //               className="text-lg font-bold"
// //               onClick={() => {
// //                 setIsOpen(false);
// //                 setIsMinimized(true);
// //               }}
// //             >
// //               ✖️
// //             </button>
// //           </div>

// //           {/* Messages */}
// //           <div className="flex-1 p-4 overflow-y-auto space-y-2">
// //             {messages.map((message, index) => (
// //               <div
// //                 key={index}
// //                 className={`${
// //                   message.from === 'bot' ? 'text-left' : 'text-right'
// //                 } mb-2`}
// //               >
// //                 <span
// //                   className={`inline-block px-3 py-2 rounded-lg ${
// //                     message.from === 'bot'
// //                       ? 'bg-gray-200 text-black'
// //                       : 'bg-blue-500 text-white'
// //                   }`}
// //                 >
// //                   {message.text}
// //                 </span>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Input */}
// //           <div className="border-t p-2 flex text-black">
// //             <input
// //               type="text"
// //               className="flex-1 px-3 py-2 border rounded-lg focus:outline-none"
// //               placeholder="Type your message..."
// //               value={input}
// //               onChange={(e) => setInput(e.target.value)}
// //             />
// //             <button
// //               className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-lg"
// //               onClick={handleSend}
// //             >
// //               Send
// //             </button>
// //           </div>
// //         </motion.div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Chatbot;

// // 'use client';

// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';
// // import Link from 'next/link';

// // // Define keywords and responses
// // const botKnowledge = [
// //   {
// //     keywords: ['contact', 'support', 'help'],
// //     response: "You can reach out to our support team via the Contact Us page.",
// //     link: '/dashboard/pages/contactus/generalinquiry',
// //   },
// //   {
// //     keywords: ['faq', 'questions'],
// //     response: "Visit our FAQ page to find answers to commonly asked questions.",
// //     link: '/dashboard/pages/resources/faq',
// //   },
// //   {
// //     keywords: ['course', 'training', 'asbestos', 'lead', 'mold', 'worker safety'],
// //     response: "Explore all our courses on the training page.",
// //     link: '/dashboard/pages/alltraining',
// //   },
// //   {
// //     keywords: ['schedule', 'calendar'],
// //     response: "You can view our course schedule on the Calendar page.",
// //     link: '/dashboard/pages/calendar',
// //   },
// //   {
// //     keywords: ['location', 'address'],
// //     response: "We are located at 15200 Grevillea Ave, Ste A-2, Lawndale, CA, 90260.",
// //     link: null,
// //   },

// //     {
// //       keywords: ['contact', 'support', 'help'],
// //       response: "You can reach out to our support team via the Contact Us page.",
// //       link: '/dashboard/pages/contactus/generalinquiry',
// //     },
// //     {
// //       keywords: ['faq', 'questions'],
// //       response: "Visit our FAQ page to find answers to commonly asked questions.",
// //       link: '/dashboard/pages/resources/faq',
// //     },
// //     {
// //       keywords: ['course', 'training', 'asbestos', 'lead', 'mold', 'worker safety'],
// //       response: "Explore all our courses on the training page.",
// //       link: '/dashboard/pages/alltraining',
// //     },
// //     {
// //       keywords: ['schedule', 'calendar'],
// //       response: "You can view our course schedule on the Calendar page.",
// //       link: '/dashboard/pages/calendar',
// //     },
// //     {
// //       keywords: ['location', 'address'],
// //       response: "We are located at 15200 Grevillea Ave, Ste A-2, Lawndale, CA, 90260.",
// //       link: null,
// //     },
// //     {
// //       keywords: ['asbestos worker initial', '32 hour asbestos', 'asbestos training'],
// //       response: "Learn more about the 32-hour Asbestos Worker (Initial) course.",
// //       link: '/dashboard/pages/training/asbestos/course-1',
// //     },
// //     {
// //       keywords: ['asbestos refresher', '8 hour asbestos', 'renew asbestos certification'],
// //       response: "Renew your certification with the Asbestos Worker Refresher course.",
// //       link: '/dashboard/pages/training/asbestos/course-2',
// //     },
// //     {
// //       keywords: ['contractor supervisor initial', '40 hour supervisor', 'contractor asbestos training'],
// //       response: "Check out the AHERA Contractor/Supervisor (Initial) - 40 Hour Course.",
// //       link: '/dashboard/pages/training/asbestos/course-3',
// //     },
// //     {
// //       keywords: ['contractor supervisor refresher', 'renew supervisor certification'],
// //       response: "Renew your certification with the AHERA Contractor/Supervisor Refresher course.",
// //       link: '/dashboard/pages/training/asbestos/course-4',
// //     },
// //     {
// //       keywords: ['building inspector initial', '24 hour inspector', 'asbestos inspector training'],
// //       response: "Learn about the AHERA Building Inspector (Initial) - 24 Hour Course.",
// //       link: '/dashboard/pages/training/asbestos/course-5',
// //     },
// //     {
// //       keywords: ['building inspector refresher', 'renew inspector certification'],
// //       response: "Refresh your certification with the AHERA Building Inspector Refresher course.",
// //       link: '/dashboard/pages/training/asbestos/course-6',
// //     },
// //     {
// //       keywords: ['lead sample technician', '8 hour lead', 'lead certification'],
// //       response: "Become certified with the CDPH Lead Sample Technician (Initial) course.",
// //       link: '/dashboard/pages/training/lead/course-1',
// //     },
// //     {
// //       keywords: ['mold sampling', '16 hour mold', 'mold certification'],
// //       response: "Explore the Introduction to Mold Sampling - 16 Hour Course.",
// //       link: '/dashboard/pages/training/mold/course-1',
// //     },
// //     {
// //       keywords: ['niosh 582', 'air sampling', 'analytical course'],
// //       response: "Learn about the NIOSH 582 Equivalency Course - 32 Hours.",
// //       link: '/dashboard/pages/training/analytical/course-1',
// //     },
// //     {
// //       keywords: ['introduction plm analysis', 'polarized light microscopy', 'analytical training'],
// //       response: "Discover the Introduction to PLM Analysis - 40 Contact Hours.",
// //       link: '/dashboard/pages/training/analytical/course-2',
// //     },
// //     {
// //       keywords: ['advanced plm analysis', '16 hour plm', 'advanced analytical course'],
// //       response: "Advance your skills with the Advanced Asbestos PLM Analysis - 16 Hours.",
// //       link: '/dashboard/pages/training/analytical/course-3',
// //     },
// //     {
// //       keywords: ['bloodborne pathogens', 'infectious materials training'],
// //       response: "Learn workplace safety with the Bloodborne Pathogens course.",
// //       link: '/dashboard/pages/training/workersafety/bloodbornepathogens',
// //     },
// //     {
// //       keywords: ['confined spaces', 'osha confined spaces', 'confined space safety'],
// //       response: "Understand OSHA standards with the Confined Spaces course.",
// //       link: '/dashboard/pages/training/workersafety/confinedspaces',
// //     },
// //     {
// //       keywords: ['lock out tag out', 'hazardous energy', 'osha loto training'],
// //       response: "Master OSHA’s standards with the Lock Out, Tag Out course.",
// //       link: '/dashboard/pages/training/workersafety/lockouttagout',
// //     },
// //     {
// //       keywords: ['calendar courses', 'upcoming classes', 'schedule courses'],
// //       response: "View upcoming courses and their schedules on the Calendar page.",
// //       link: '/dashboard/pages/calendar',
// //     },
// //     {
// //       keywords: ['resources', 'professional resources', 'exam dates'],
// //       response: "Access professional resources and exam dates.",
// //       link: '/dashboard/pages/resources/professionalresources',
// //     },
// //     {
// //       keywords: ['certification renewal', 'refresher courses', 'renew certifications'],
// //       response: "Renew your certifications with our refresher courses.",
// //       link: '/dashboard/pages/alltraining',
// //     },
// //     {
// //       keywords: ['first aid', 'cpr aed', 'emergency response training'],
// //       response: "Get trained in CPR, AED, & First Aid.",
// //       link: '/dashboard/pages/training/cpraedfirstaid',
// //     },
// //     {
// //       keywords: ['hazwoper', 'hazardous waste training'],
// //       response: "Learn about Hazardous Waste Operations with the HAZWOPER course.",
// //       link: '/dashboard/pages/training/hazwoper',
// //     },
// //     {
// //       keywords: ['about aehs', 'instructors', 'accreditation'],
// //       response: "Learn about AEHS, our instructors, and accreditations.",
// //       link: '/dashboard/pages/about/aehsinfo',
// //     },
// //     {
// //       keywords: ['lawndale location', 'address aehs', 'training center address'],
// //       response: "Our training center is in Lawndale, CA.",
// //       link: null,
// //     },
// //     {
// //       keywords: ['support email', 'aehs email'],
// //       response: "Email us at info@pinnaclelab.com for assistance.",
// //       link: null,
// //     },
// //     {
// //       keywords: ['phone number', 'contact phone', 'aehs phone'],
// //       response: "Call us at (310) 400-6153 for more information.",
// //       link: null,
// //     },
// //     {
// //       keywords: ['review aehs', 'google review', 'leave feedback'],
// //       response: "We value your feedback! Leave a review on Google.",
// //       link: 'https://g.page/r/Ceh4qq4FerBXEBM/review',
// //     },

// //         {
// //           keywords: ['ahera worker', 'ahera training', 'asbestos worker training'],
// //           response: "Learn about the AHERA Worker (Initial) - 32 Hour Course.",
// //           link: '/dashboard/pages/training/asbestos/course-1',
// //         },
// //         {
// //           keywords: ['asbestos contractor supervisor', '40 hour contractor', 'ahera contractor training'],
// //           response: "Learn about the AHERA Contractor/Supervisor (Initial) - 40 Hour Course.",
// //           link: '/dashboard/pages/training/asbestos/course-3',
// //         },
// //         {
// //           keywords: ['cal/osha asbestos exam', 'certified asbestos consultant exam'],
// //           response: "Prepare for the Cal/OSHA Certified Asbestos Consultant Exam.",
// //           link: '/dashboard/pages/resources/professionalresources',
// //         },
// //         {
// //           keywords: ['asbestos refresher certification', 'renew asbestos worker'],
// //           response: "Renew your certification with our Asbestos Worker Refresher course.",
// //           link: '/dashboard/pages/training/asbestos/course-2',
// //         },
// //         {
// //           keywords: ['mold sampling training', '16 hour mold training'],
// //           response: "Learn about our 16-hour Introduction to Mold Sampling course.",
// //           link: '/dashboard/pages/training/mold/course-1',
// //         },
// //         {
// //           keywords: ['bloodborne pathogens training', 'osha bloodborne', 'infectious disease training'],
// //           response: "Explore our Bloodborne Pathogens training for workplace safety.",
// //           link: '/dashboard/pages/training/workersafety/bloodbornepathogens',
// //         },
// //         {
// //           keywords: ['lockout tagout', 'osha loto', 'hazardous energy control training'],
// //           response: "Learn about our OSHA-compliant Lockout/Tagout training.",
// //           link: '/dashboard/pages/training/workersafety/lockouttagout',
// //         },
// //         {
// //           keywords: ['confined space training', 'confined space osha course'],
// //           response: "Take our Confined Spaces course to comply with OSHA standards.",
// //           link: '/dashboard/pages/training/workersafety/confinedspaces',
// //         },
// //         {
// //           keywords: ['lead sample technician course', 'cdph lead training'],
// //           response: "Enroll in our CDPH Lead Sample Technician (Initial) course.",
// //           link: '/dashboard/pages/training/lead/course-1',
// //         },
// //         {
// //           keywords: ['plm analysis course', 'polarized light microscopy training'],
// //           response: "Check out our Introduction to PLM Analysis course.",
// //           link: '/dashboard/pages/training/analytical/course-2',
// //         },
// //         {
// //           keywords: ['ahera project designer', 'asbestos project designer course'],
// //           response: "Explore our AHERA Project Designer training program.",
// //           link: '/dashboard/pages/training/asbestos/course-7',
// //         },
// //         {
// //           keywords: ['ahera inspector refresher', 'renew building inspector'],
// //           response: "Renew your certification with our AHERA Building Inspector Refresher course.",
// //           link: '/dashboard/pages/training/asbestos/course-6',
// //         },
// //         {
// //           keywords: ['cpr aed certification', 'first aid training'],
// //           response: "Get certified in CPR, AED, and First Aid.",
// //           link: '/dashboard/pages/training/cpraedfirstaid',
// //         },
// //         {
// //           keywords: ['hazwoper certification', 'hazardous waste operations'],
// //           response: "Learn about Hazardous Waste Operations with our HAZWOPER course.",
// //           link: '/dashboard/pages/training/hazwoper',
// //         },
// //         {
// //           keywords: ['exam dates', 'professional certification exams'],
// //           response: "View upcoming exam dates on our resources page.",
// //           link: '/dashboard/pages/resources/professionalresources',
// //         },
// //         {
// //           keywords: ['contact instructors', 'reach out instructors'],
// //           response: "Learn more about our instructors on the About Us page.",
// //           link: '/dashboard/pages/about/instructorprofiles',
// //         },
// //         {
// //           keywords: ['asbestos certification requirements', 'cac requirements', 'csst requirements'],
// //           response: "Review the requirements to become a Certified Asbestos Consultant (CAC) or CSST.",
// //           link: '/dashboard/pages/resources/faq',
// //         },
// //         {
// //           keywords: ['accreditation', 'certifications aehs', 'approved training'],
// //           response: "Learn about our accreditations and approvals.",
// //           link: '/dashboard/pages/about/accreditation',
// //         },
// //         {
// //           keywords: ['course calendar', 'training schedule', 'class dates'],
// //           response: "Check out our course calendar for upcoming training dates.",
// //           link: '/dashboard/pages/calendar',
// //         },
// //         {
// //           keywords: ['professional resources', 'helpful resources', 'exam preparation'],
// //           response: "Visit our Professional Resources page for more information.",
// //           link: '/dashboard/pages/resources/professionalresources',
// //         },
// //         {
// //           keywords: ['asbestos safety', 'asbestos dangers', 'asbestos information'],
// //           response: "Learn about asbestos safety and its health impacts.",
// //           link: '/dashboard/pages/resources/professionalresources',
// //         },
// //         {
// //           keywords: ['renew certification', 'certification renewal courses'],
// //           response: "Renew your certifications by enrolling in our refresher courses.",
// //           link: '/dashboard/pages/alltraining',
// //         },
// //         {
// //           keywords: ['lawndale california training', '15200 grevillea ave'],
// //           response: "Our training center is located in Lawndale, CA.",
// //           link: null,
// //         },
// //         {
// //           keywords: ['support', 'customer service', 'contact email'],
// //           response: "You can email us at info@pinnaclelab.com for support.",
// //           link: null,
// //         },
// //         {
// //           keywords: ['phone number', 'call aehs', 'training center phone'],
// //           response: "Call us at (310) 400-6153 for inquiries.",
// //           link: null,
// //         },
// //         {
// //           keywords: ['training cost', 'course fees', 'pricing information'],
// //           response: "Check out the course details for pricing information.",
// //           link: '/dashboard/pages/alltraining',
// //         },
// //         {
// //           keywords: ['google review', 'review aehs', 'feedback'],
// //           response: "We value your feedback! Leave us a review on Google.",
// //           link: 'https://g.page/r/Ceh4qq4FerBXEBM/review',
// //         },
// //         {
// //           keywords: ['facebook page', 'social media', 'aehs facebook'],
// //           response: "Visit our Facebook page to stay updated.",
// //           link: 'https://www.facebook.com/profile.php?id=61567087595623',
// //         },
// //         {
// //           keywords: ['linkedin', 'linkedin profile', 'professional network'],
// //           response: "Connect with us on LinkedIn for updates and news.",
// //           link: 'https://www.linkedin.com',
// //         },
// //         {
// //           keywords: ['twitter', 'x profile', 'aehs updates'],
// //           response: "Follow us on Twitter for updates.",
// //           link: 'https://x.com/AEHS_Training',
// //         },
// //         {
// //           keywords: ['instagram', 'social media', 'training updates'],
// //           response: "Check out our Instagram for training updates and more.",
// //           link: 'https://www.instagram.com/aehstraining/',
// //         },

// //             {
// //               keywords: ['upcoming courses', 'training dates', 'class schedule'],
// //               response: "Check the latest schedule for our upcoming courses.",
// //               link: '/dashboard/pages/calendar',
// //             },
// //             {
// //               keywords: ['ahera management planner', 'asbestos planner training'],
// //               response: "Learn about the AHERA Management Planner course.",
// //               link: '/dashboard/pages/training/asbestos/course-7',
// //             },
// //             {
// //               keywords: ['project designer asbestos', 'asbestos design training'],
// //               response: "Explore the AHERA Project Designer course.",
// //               link: '/dashboard/pages/training/asbestos/course-8',
// //             },
// //             {
// //               keywords: ['certified asbestos consultant', 'cal/osha exam preparation'],
// //               response: "Prepare for the Cal/OSHA Certified Asbestos Consultant Exam.",
// //               link: '/dashboard/pages/resources/professionalresources',
// //             },
// //             {
// //               keywords: ['california asbestos training', 'asbestos certifications'],
// //               response: "Discover our California-approved asbestos certification programs.",
// //               link: '/dashboard/pages/training/asbestos',
// //             },
// //             {
// //               keywords: ['lead worker training', 'lead safety training', 'cdph lead technician'],
// //               response: "Learn more about our CDPH Lead Sample Technician course.",
// //               link: '/dashboard/pages/training/lead/course-1',
// //             },
// //             {
// //               keywords: ['mold certification', 'mold sampling training', '16-hour mold'],
// //               response: "Check out the Introduction to Mold Sampling course.",
// //               link: '/dashboard/pages/training/mold/course-1',
// //             },
// //             {
// //               keywords: ['bloodborne pathogens online', 'osha safety training'],
// //               response: "Enroll in our OSHA-compliant Bloodborne Pathogens course.",
// //               link: '/dashboard/pages/training/workersafety/bloodbornepathogens',
// //             },
// //             {
// //               keywords: ['osha confined space', 'confined space certification'],
// //               response: "Learn more about our OSHA Confined Spaces course.",
// //               link: '/dashboard/pages/training/workersafety/confinedspaces',
// //             },
// //             {
// //               keywords: ['loto training', 'lock out tag out certification'],
// //               response: "Understand OSHA standards with our Lock Out, Tag Out course.",
// //               link: '/dashboard/pages/training/workersafety/lockouttagout',
// //             },
// //             {
// //               keywords: ['first aid training', 'cpr and aed courses'],
// //               response: "Get certified in CPR, AED, and First Aid.",
// //               link: '/dashboard/pages/training/cpraedfirstaid',
// //             },
// //             {
// //               keywords: ['hazwoper certification', 'hazardous waste training'],
// //               response: "Explore Hazardous Waste Operations with our HAZWOPER course.",
// //               link: '/dashboard/pages/training/hazwoper',
// //             },
// //             {
// //               keywords: ['niosh 582 equivalency', 'analytical air sampling'],
// //               response: "Check out our NIOSH 582 Equivalency Course.",
// //               link: '/dashboard/pages/training/analytical/course-1',
// //             },
// //             {
// //               keywords: ['plm analysis', 'advanced asbestos training'],
// //               response: "Explore our PLM Analysis courses for advanced training.",
// //               link: '/dashboard/pages/training/analytical',
// //             },
// //             {
// //               keywords: ['certification renewal', 'refresher courses'],
// //               response: "Keep your certifications current with our refresher courses.",
// //               link: '/dashboard/pages/alltraining',
// //             },
// //             {
// //               keywords: ['asbestos safety course', 'ahera safety training'],
// //               response: "Learn about asbestos safety with our AHERA courses.",
// //               link: '/dashboard/pages/training/asbestos',
// //             },
// //             {
// //               keywords: ['worker safety courses', 'online safety training'],
// //               response: "Explore our Worker Safety courses available online.",
// //               link: '/dashboard/pages/training/workersafety',
// //             },
// //             {
// //               keywords: ['training resources', 'helpful links'],
// //               response: "Access our resources for professional development.",
// //               link: '/dashboard/pages/resources/professionalresources',
// //             },
// //             {
// //               keywords: ['location aehs', 'training address'],
// //               response: "Visit us at 15200 Grevillea Ave, Ste A-2, Lawndale, CA.",
// //               link: null,
// //             },
// //             {
// //               keywords: ['email support', 'contact email'],
// //               response: "Email us at info@pinnaclelab.com for assistance.",
// //               link: null,
// //             },
// //             {
// //               keywords: ['phone contact', 'call aehs'],
// //               response: "Call us at (310) 400-6153 for more information.",
// //               link: null,
// //             },
// //             {
// //               keywords: ['leave review', 'feedback', 'google reviews'],
// //               response: "We value your feedback! Leave us a review on Google.",
// //               link: 'https://g.page/r/Ceh4qq4FerBXEBM/review',
// //             },
// //             {
// //               keywords: ['facebook updates', 'aehs facebook page'],
// //               response: "Follow us on Facebook for updates and news.",
// //               link: 'https://www.facebook.com/profile.php?id=61567087595623',
// //             },
// //             {
// //               keywords: ['linkedin profile', 'aehs linkedin'],
// //               response: "Connect with us on LinkedIn for professional updates.",
// //               link: 'https://www.linkedin.com',
// //             },
// //             {
// //               keywords: ['aehs twitter', 'training updates'],
// //               response: "Follow us on Twitter for the latest updates.",
// //               link: 'https://x.com/AEHS_Training',
// //             },
// //             {
// //               keywords: ['instagram training updates', 'social media'],
// //               response: "Check out our Instagram for training highlights.",
// //               link: 'https://www.instagram.com/aehstraining/',
// //             },
// //             {
// //               keywords: ['certified instructor profiles', 'meet trainers'],
// //               response: "Learn about our certified trainers on the Instructor Profiles page.",
// //               link: '/dashboard/pages/about/instructorprofiles',
// //             },
// //             {
// //               keywords: ['training center details', 'certified training'],
// //               response: "Visit our About Us page to learn about our training center.",
// //               link: '/dashboard/pages/about/aehsinfo',
// //             },
// //             {
// //               keywords: ['asbestos consultant certification', 'california asbestos exam'],
// //               response: "Prepare for the California Certified Asbestos Consultant Exam.",
// //               link: '/dashboard/pages/resources/faq',
// //             },
// //             {
// //               keywords: ['accreditation', 'certified courses'],
// //               response: "Review our accreditations and certifications.",
// //               link: '/dashboard/pages/about/accreditation',
// //             },
// //             {
// //               keywords: ['course duration', 'course timing'],
// //               response: "Find the duration and timing for each course on our All Courses page.",
// //               link: '/dashboard/pages/alltraining',
// //             },
// //             {
// //               keywords: ['asbestos supervisor', 'supervisor certification'],
// //               response: "Check out the AHERA Contractor/Supervisor courses.",
// //               link: '/dashboard/pages/training/asbestos/course-3',
// //             },
// //             {
// //               keywords: ['training packages', 'course bundles'],
// //               response: "Learn more about our bundled course options.",
// //               link: '/dashboard/pages/alltraining',
// //             },
// //             {
// //               keywords: ['niosh analytical training', 'advanced niosh course'],
// //               response: "Explore our advanced analytical courses, including NIOSH 582.",
// //               link: '/dashboard/pages/training/analytical/course-1',
// //             },
// //             {
// //               keywords: ['calendar view', 'class schedules'],
// //               response: "Check out our Calendar page for upcoming schedules.",
// //               link: '/dashboard/pages/calendar',
// //             },
// //             {
// //               keywords: ['resources for certification', 'helpful certification links'],
// //               response: "Access resources to prepare for certification exams.",
// //               link: '/dashboard/pages/resources/professionalresources',
// //             },
// //             {
// //               keywords: ['asbestos certification courses', 'asbestos training details'],
// //               response: "View detailed information about our asbestos courses.",
// //               link: '/dashboard/pages/training/asbestos',
// //             },

// //                 {
// //                   keywords: ['asbestos worker initial', '32-hour asbestos', 'ahera asbestos training'],
// //                   response: "Learn about our AHERA Asbestos Worker (Initial) - 32 Hour Course.",
// //                   link: '/dashboard/pages/training/asbestos/course-1',
// //                 },
// //                 {
// //                   keywords: ['ahera asbestos refresher', 'renew asbestos certification'],
// //                   response: "Renew your certification with the Asbestos Worker Refresher - 8 Hour Course.",
// //                   link: '/dashboard/pages/training/asbestos/course-2',
// //                 },
// //                 {
// //                   keywords: ['contractor supervisor asbestos', 'ahera supervisor initial'],
// //                   response: "Check out our AHERA Contractor/Supervisor (Initial) - 40 Hour Course.",
// //                   link: '/dashboard/pages/training/asbestos/course-3',
// //                 },
// //                 {
// //                   keywords: ['contractor supervisor refresher', 'supervisor renewal course'],
// //                   response: "Renew your certification with the AHERA Contractor/Supervisor Refresher - 8 Hour Course.",
// //                   link: '/dashboard/pages/training/asbestos/course-4',
// //                 },
// //                 {
// //                   keywords: ['asbestos inspector training', '24-hour building inspector'],
// //                   response: "Learn more about the AHERA Building Inspector (Initial) - 24 Hour Course.",
// //                   link: '/dashboard/pages/training/asbestos/course-5',
// //                 },
// //                 {
// //                   keywords: ['building inspector refresher', 'renew inspector certification'],
// //                   response: "Renew your certification with the AHERA Building Inspector Refresher - 4 Hour Course.",
// //                   link: '/dashboard/pages/training/asbestos/course-6',
// //                 },
// //                 {
// //                   keywords: ['plm analysis course', 'polarized light microscopy training'],
// //                   response: "Discover the Introduction to PLM Analysis - 40 Contact Hours.",
// //                   link: '/dashboard/pages/training/analytical/course-2',
// //                 },
// //                 {
// //                   keywords: ['advanced plm analysis', 'asbestos plm techniques'],
// //                   response: "Advance your skills with the Advanced Asbestos PLM Analysis - 16 Contact Hours.",
// //                   link: '/dashboard/pages/training/analytical/course-3',
// //                 },
// //                 {
// //                   keywords: ['niosh 582 equivalency', 'air sampling course'],
// //                   response: "Learn about our NIOSH 582 Equivalency Course - 32 Hours.",
// //                   link: '/dashboard/pages/training/analytical/course-1',
// //                 },
// //                 {
// //                   keywords: ['mold sampling training', 'mold certification course'],
// //                   response: "Explore our Introduction to Mold Sampling - 16 Hour Course.",
// //                   link: '/dashboard/pages/training/mold/course-1',
// //                 },
// //                 {
// //                   keywords: ['lead sample technician', 'cdph lead training'],
// //                   response: "Become certified with the CDPH Lead Sample Technician (Initial) - 8 Hour Course.",
// //                   link: '/dashboard/pages/training/lead/course-1',
// //                 },
// //                 {
// //                   keywords: ['cpr training', 'aed certification', 'first aid course'],
// //                   response: "Get certified in CPR, AED, and First Aid with our courses.",
// //                   link: '/dashboard/pages/training/cpraedfirstaid',
// //                 },
// //                 {
// //                   keywords: ['bloodborne pathogens', 'osha safety training'],
// //                   response: "Enroll in our OSHA-compliant Bloodborne Pathogens course.",
// //                   link: '/dashboard/pages/training/workersafety/bloodbornepathogens',
// //                 },
// //                 {
// //                   keywords: ['confined space training', 'osha confined spaces'],
// //                   response: "Understand OSHA standards with our Confined Spaces training.",
// //                   link: '/dashboard/pages/training/workersafety/confinedspaces',
// //                 },
// //                 {
// //                   keywords: ['lockout tagout training', 'osha loto standards'],
// //                   response: "Master OSHA's standards with our Lockout/Tagout course.",
// //                   link: '/dashboard/pages/training/workersafety/lockouttagout',
// //                 },
// //                 {
// //                   keywords: ['calendar of courses', 'schedule training'],
// //                   response: "View upcoming training schedules on our Calendar page.",
// //                   link: '/dashboard/pages/calendar',
// //                 },
// //                 {
// //                   keywords: ['hazwoper certification', 'hazardous waste operations'],
// //                   response: "Learn about our Hazardous Waste Operations (HAZWOPER) training.",
// //                   link: '/dashboard/pages/training/hazwoper',
// //                 },
// //                 {
// //                   keywords: ['training resources', 'certification preparation'],
// //                   response: "Access our resources for professional development and certification preparation.",
// //                   link: '/dashboard/pages/resources/professionalresources',
// //                 },
// //                 {
// //                   keywords: ['exam dates', 'certification exams'],
// //                   response: "Find information about upcoming certification exams.",
// //                   link: '/dashboard/pages/resources/professionalresources',
// //                 },
// //                 {
// //                   keywords: ['aehs instructors', 'trainer profiles'],
// //                   response: "Learn about our certified trainers on the Instructor Profiles page.",
// //                   link: '/dashboard/pages/about/instructorprofiles',
// //                 },
// //                 {
// //                   keywords: ['aehs location', 'lawndale training center'],
// //                   response: "Our training center is located in Lawndale, CA.",
// //                   link: null,
// //                 },
// //                 {
// //                   keywords: ['email aehs', 'contact support'],
// //                   response: "Email us at info@pinnaclelab.com for assistance.",
// //                   link: null,
// //                 },
// //                 {
// //                   keywords: ['phone contact', 'call training center'],
// //                   response: "Call us at (310) 400-6153 for inquiries.",
// //                   link: null,
// //                 },
// //                 {
// //                   keywords: ['feedback', 'google review', 'leave a review'],
// //                   response: "We value your feedback! Leave us a review on Google.",
// //                   link: 'https://g.page/r/Ceh4qq4FerBXEBM/review',
// //                 },
// //                 {
// //                   keywords: ['social media', 'facebook page', 'aehs updates'],
// //                   response: "Follow us on Facebook for updates and news.",
// //                   link: 'https://www.facebook.com/profile.php?id=61567087595623',
// //                 },
// //                 {
// //                   keywords: ['linkedin profile', 'connect on linkedin'],
// //                   response: "Connect with us on LinkedIn for professional updates.",
// //                   link: 'https://www.linkedin.com',
// //                 },
// //                 {
// //                   keywords: ['twitter updates', 'aehs twitter'],
// //                   response: "Follow us on Twitter for the latest updates.",
// //                   link: 'https://x.com/AEHS_Training',
// //                 },
// //                 {
// //                   keywords: ['instagram updates', 'training photos'],
// //                   response: "Check out our Instagram for training highlights and updates.",
// //                   link: 'https://www.instagram.com/aehstraining/',
// //                 },
// //                 {
// //                   keywords: ['certification requirements', 'asbestos certification'],
// //                   response: "Learn about the requirements for asbestos certification.",
// //                   link: '/dashboard/pages/resources/faq',
// //                 },
// //                 {
// //                   keywords: ['accreditation', 'certified courses', 'aehs approval'],
// //                   response: "Review our accreditations and certifications.",
// //                   link: '/dashboard/pages/about/accreditation',
// //                 },
// //                 {
// //                   keywords: ['resources page', 'exam prep'],
// //                   response: "Visit our Professional Resources page for helpful links and study guides.",
// //                   link: '/dashboard/pages/resources/professionalresources',
// //                 },
// //                 {
// //                   keywords: ['course fees', 'training costs'],
// //                   response: "Find pricing and fees for our courses on the All Training page.",
// //                   link: '/dashboard/pages/alltraining',
// //                 },
// //                 {
// //                   keywords: ['renew certifications', 'refresher courses'],
// //                   response: "Keep your certifications current with our refresher courses.",
// //                   link: '/dashboard/pages/alltraining',
// //                 },
// //                 {
// //                   keywords: ['upcoming courses', 'training schedule'],
// //                   response: "Check out our training calendar for upcoming courses.",
// //                   link: '/dashboard/pages/calendar',
// //                 },

// //                     {
// //                       keywords: ['ahera worker training', 'asbestos worker initial course'],
// //                       response: "Explore the AHERA Worker (Initial) - 32 Hour Course for asbestos training.",
// //                       link: '/dashboard/pages/training/asbestos/course-1',
// //                     },
// //                     {
// //                       keywords: ['asbestos refresher training', 'renew asbestos worker certification'],
// //                       response: "Renew your asbestos certification with the Asbestos Worker Refresher - 8 Hour Course.",
// //                       link: '/dashboard/pages/training/asbestos/course-2',
// //                     },
// //                     {
// //                       keywords: ['supervisor asbestos training', 'ahera contractor course'],
// //                       response: "Learn about the AHERA Contractor/Supervisor (Initial) - 40 Hour Course.",
// //                       link: '/dashboard/pages/training/asbestos/course-3',
// //                     },
// //                     {
// //                       keywords: ['supervisor refresher asbestos', 'contractor refresher course'],
// //                       response: "Refresh your certification with the AHERA Contractor/Supervisor Refresher - 8 Hour Course.",
// //                       link: '/dashboard/pages/training/asbestos/course-4',
// //                     },
// //                     {
// //                       keywords: ['building inspector course', 'ahera inspector training'],
// //                       response: "Learn about the AHERA Building Inspector (Initial) - 24 Hour Course.",
// //                       link: '/dashboard/pages/training/asbestos/course-5',
// //                     },
// //                     {
// //                       keywords: ['building inspector refresher', 'renew inspector training'],
// //                       response: "Refresh your certification with the AHERA Building Inspector Refresher - 4 Hour Course.",
// //                       link: '/dashboard/pages/training/asbestos/course-6',
// //                     },
// //                     {
// //                       keywords: ['lead technician training', 'cdph lead certification'],
// //                       response: "Learn about the CDPH Lead Sample Technician (Initial) - 8 Hour Course.",
// //                       link: '/dashboard/pages/training/lead/course-1',
// //                     },
// //                     {
// //                       keywords: ['mold training course', '16-hour mold sampling course'],
// //                       response: "Explore the Introduction to Mold Sampling - 16 Hour Course.",
// //                       link: '/dashboard/pages/training/mold/course-1',
// //                     },
// //                     {
// //                       keywords: ['niosh 582 course', 'air sampling training'],
// //                       response: "Check out the NIOSH 582 Equivalency Course - 32 Hours.",
// //                       link: '/dashboard/pages/training/analytical/course-1',
// //                     },
// //                     {
// //                       keywords: ['plm analysis training', 'advanced asbestos plm analysis'],
// //                       response: "Discover the Advanced Asbestos PLM Analysis - 16 Contact Hours.",
// //                       link: '/dashboard/pages/training/analytical/course-3',
// //                     },
// //                     {
// //                       keywords: ['cpr first aid certification', 'aed training course'],
// //                       response: "Get certified with our CPR, AED, and First Aid courses.",
// //                       link: '/dashboard/pages/training/cpraedfirstaid',
// //                     },
// //                     {
// //                       keywords: ['osha bloodborne pathogens', 'pathogen safety training'],
// //                       response: "Learn workplace safety with our Bloodborne Pathogens course.",
// //                       link: '/dashboard/pages/training/workersafety/bloodbornepathogens',
// //                     },
// //                     {
// //                       keywords: ['confined spaces training', 'osha confined space certification'],
// //                       response: "Understand OSHA standards with the Confined Spaces course.",
// //                       link: '/dashboard/pages/training/workersafety/confinedspaces',
// //                     },
// //                     {
// //                       keywords: ['lockout tagout training', 'osha loto training'],
// //                       response: "Master OSHA's Lockout/Tagout standards with our training.",
// //                       link: '/dashboard/pages/training/workersafety/lockouttagout',
// //                     },
// //                     {
// //                       keywords: ['hazwoper training', 'hazardous waste certification'],
// //                       response: "Learn about hazardous waste operations with our HAZWOPER course.",
// //                       link: '/dashboard/pages/training/hazwoper',
// //                     },
// //                     {
// //                       keywords: ['professional resources', 'certification study resources'],
// //                       response: "Access resources for professional certification preparation.",
// //                       link: '/dashboard/pages/resources/professionalresources',
// //                     },
// //                     {
// //                       keywords: ['exam dates', 'certification exam schedules'],
// //                       response: "View upcoming exam dates on the Professional Resources page.",
// //                       link: '/dashboard/pages/resources/professionalresources',
// //                     },
// //                     {
// //                       keywords: ['asbestos consultant certification', 'ahera consultant training'],
// //                       response: "Prepare for the Certified Asbestos Consultant exam.",
// //                       link: '/dashboard/pages/resources/faq',
// //                     },
// //                     {
// //                       keywords: ['calendar courses', 'training schedule'],
// //                       response: "Check the Calendar page for upcoming course schedules.",
// //                       link: '/dashboard/pages/calendar',
// //                     },
// //                     {
// //                       keywords: ['aehs instructors', 'meet trainers'],
// //                       response: "Learn about our certified trainers on the Instructor Profiles page.",
// //                       link: '/dashboard/pages/about/instructorprofiles',
// //                     },
// //                     {
// //                       keywords: ['aehs location', 'lawndale address'],
// //                       response: "Visit us at 15200 Grevillea Ave, Ste A-2, Lawndale, CA.",
// //                       link: null,
// //                     },
// //                     {
// //                       keywords: ['email contact', 'customer support email'],
// //                       response: "Email us at info@pinnaclelab.com for support.",
// //                       link: null,
// //                     },
// //                     {
// //                       keywords: ['phone contact', 'call support'],
// //                       response: "Reach us at (310) 400-6153 for inquiries.",
// //                       link: null,
// //                     },
// //                     {
// //                       keywords: ['google reviews', 'leave feedback'],
// //                       response: "We value your feedback! Leave a review on Google.",
// //                       link: 'https://g.page/r/Ceh4qq4FerBXEBM/review',
// //                     },
// //                     {
// //                       keywords: ['facebook updates', 'aehs facebook'],
// //                       response: "Follow us on Facebook for updates and news.",
// //                       link: 'https://www.facebook.com/profile.php?id=61567087595623',
// //                     },
// //                     {
// //                       keywords: ['linkedin page', 'aehs linkedin profile'],
// //                       response: "Connect with us on LinkedIn for updates.",
// //                       link: 'https://www.linkedin.com',
// //                     },
// //                     {
// //                       keywords: ['twitter updates', 'aehs twitter'],
// //                       response: "Follow us on Twitter for the latest updates.",
// //                       link: 'https://x.com/AEHS_Training',
// //                     },
// //                     {
// //                       keywords: ['instagram training', 'social media updates'],
// //                       response: "Check out our Instagram for training photos and updates.",
// //                       link: 'https://www.instagram.com/aehstraining/',
// //                     },
// //                     {
// //                       keywords: ['accreditation details', 'approved training programs'],
// //                       response: "Learn about our accreditations and approved training programs.",
// //                       link: '/dashboard/pages/about/accreditation',
// //                     },
// //                     {
// //                       keywords: ['course fees', 'training cost'],
// //                       response: "Find detailed pricing for our courses on the All Courses page.",
// //                       link: '/dashboard/pages/alltraining',
// //                     },
// //                     {
// //                       keywords: ['renew certification', 'refresher courses available'],
// //                       response: "Stay certified with our refresher courses.",
// //                       link: '/dashboard/pages/alltraining',
// //                     },
// //                     {
// //                       keywords: ['calendar courses', 'view training schedule'],
// //                       response: "View upcoming courses on our Calendar page.",
// //                       link: '/dashboard/pages/calendar',
// //                     },
// //                     {
// //                       keywords: ['resources', 'helpful links for certifications'],
// //                       response: "Access helpful links on our Professional Resources page.",
// //                       link: '/dashboard/pages/resources/professionalresources',
// //                     },
// //                     {
// //                       keywords: ['asbestos safety', 'asbestos health risks'],
// //                       response: "Learn about asbestos safety on our Professional Resources page.",
// //                       link: '/dashboard/pages/resources/professionalresources',
// //                     },
// //                     {
// //                       keywords: ['worker safety training', 'online worker courses'],
// //                       response: "Explore online worker safety courses available at AEHS.",
// //                       link: '/dashboard/pages/training/workersafety',
// //                     },
// //                     {
// //                       keywords: ['about aehs', 'training overview'],
// //                       response: "Learn about AEHS and what we offer on the About Us page.",
// //                       link: '/dashboard/pages/about/aehsinfo',
// //                     },

// // ];

// // const Chatbot = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [isMinimized, setIsMinimized] = useState(false);
// //   const [messages, setMessages] = useState([
// //     { from: 'bot', text: "Hi! I'm HelperBot. How can I assist you today?" },
// //   ]);
// //   const [input, setInput] = useState('');

// //   const handleSend = () => {
// //     if (!input.trim()) return;

// //     const userMessage = { from: 'user', text: input };
// //     setMessages((prev) => [...prev, userMessage]);

// //     // Check for matching keywords
// //     const lowerInput = input.toLowerCase();
// //     const matchedResponse = botKnowledge.find((entry) =>
// //       entry.keywords.some((keyword) => lowerInput.includes(keyword))
// //     );

// //     if (matchedResponse) {
// //       setMessages((prev) => [
// //         ...prev,
// //         { from: 'bot', text: matchedResponse.response },
// //         matchedResponse.link && {
// //           from: 'bot',
// //           text: (
// //             <span>
// //               <Link href={matchedResponse.link} className="text-blue-500 underline">
// //                 Go to Page
// //               </Link>
// //             </span>
// //           ),
// //         },
// //       ].filter(Boolean)); // Filter out null/undefined values
// //     } else {
// //       setMessages((prev) => [
// //         ...prev,
// //         { from: 'bot', text: "I'm not sure about that. You might find what you're looking for on our FAQ page." },
// //         {
// //           from: 'bot',
// //           text: (
// //             <span>
// //               <Link href="/dashboard/pages/resources/faq" className="text-blue-500 underline">
// //                 Go to FAQ
// //               </Link>
// //             </span>
// //           ),
// //         },
// //       ]);
// //     }

// //     setInput('');
// //   };

// //   return (
// //     <div>
// //       {/* Chatbot Trigger */}
// //       {!isOpen && !isMinimized && (
// //         <motion.div
// //           className="fixed bottom-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer text-lg"
// //           animate={{ scale: [0, 1.2, 1] }}
// //           onClick={() => setIsOpen(true)}
// //         >
// //           Hey, need help?
// //         </motion.div>
// //       )}

// //       {/* Bell Icon */}
// //       {!isOpen && isMinimized && (
// //         <motion.div
// //           className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer"
// //           onClick={() => setIsOpen(true)}
// //         >
// //           🛎️
// //         </motion.div>
// //       )}

// //       {/* Chat Window */}
// //       {isOpen && (
// //         <motion.div
// //           className="fixed bottom-6 right-6 bg-white border rounded-lg shadow-lg w-80 h-96 flex flex-col"
// //           initial={{ opacity: 0, scale: 0.8 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           exit={{ opacity: 0, scale: 0.8 }}
// //         >
// //           {/* Header */}
// //           <div className="bg-blue-500 text-white px-4 py-2 flex justify-between items-center">
// //             <span className="font-bold">HelperBot</span>
// //             <button
// //               className="text-lg font-bold"
// //               onClick={() => {
// //                 setIsOpen(false);
// //                 setIsMinimized(true);
// //               }}
// //             >
// //               ✖️
// //             </button>
// //           </div>

// //           {/* Messages */}
// //           <div className="flex-1 p-4 overflow-y-auto space-y-2">
// //             {messages.map((message, index) => (
// //               <div
// //                 key={index}
// //                 className={`${
// //                   message.from === 'bot' ? 'text-left' : 'text-right'
// //                 } mb-2`}
// //               >
// //                 <span
// //                   className={`inline-block px-3 py-2 rounded-lg ${
// //                     message.from === 'bot'
// //                       ? 'bg-gray-200 text-black'
// //                       : 'bg-blue-500 text-white'
// //                   }`}
// //                 >
// //                   {message.text}
// //                 </span>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Input */}
// //           <div className="border-t p-2 flex text-black">
// //             <input
// //               type="text"
// //               className="flex-1 px-3 py-2 border rounded-lg focus:outline-none"
// //               placeholder="Type your message..."
// //               value={input}
// //               onChange={(e) => setInput(e.target.value)}
// //             />
// //             <button
// //               className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-lg"
// //               onClick={handleSend}
// //             >
// //               Send
// //             </button>
// //           </div>
// //         </motion.div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Chatbot;

// //NEW BOT WITH HELP FOR PLURALS AND MISPELLS

// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import Fuse from 'fuse.js';
// import Link from 'next/link';

// const faqPage = '/faq';

// const botKnowledge = [
//     {
//       keywords: ['contact', 'support', 'help'],
//       response: "You can reach out to our support team via the Contact Us page.",
//       link: '/dashboard/pages/contactus/generalinquiry',
//     },
//     {
//       keywords: ['faq', 'questions'],
//       response: "Visit our FAQ page to find answers to commonly asked questions.",
//       link: '/dashboard/pages/resources/faq',
//     },
//     {
//       keywords: ['course', 'training', 'asbestos', 'lead', 'mold', 'worker safety'],
//       response: "Explore all our courses on the training page.",
//       link: '/dashboard/pages/alltraining',
//     },
//     {
//       keywords: ['schedule', 'calendar'],
//       response: "You can view our course schedule on the Calendar page.",
//       link: '/dashboard/pages/calendar',
//     },
//     {
//       keywords: ['location', 'address'],
//       response: "We are located at 15200 Grevillea Ave, Ste A-2, Lawndale, CA, 90260.",
//       link: null,
//     },

//       {
//         keywords: ['contact', 'support', 'help'],
//         response: "You can reach out to our support team via the Contact Us page.",
//         link: '/dashboard/pages/contactus/generalinquiry',
//       },
//       {
//         keywords: ['faq', 'questions'],
//         response: "Visit our FAQ page to find answers to commonly asked questions.",
//         link: '/dashboard/pages/resources/faq',
//       },
//       {
//         keywords: ['course', 'training', 'asbestos', 'lead', 'mold', 'worker safety'],
//         response: "Explore all our courses on the training page.",
//         link: '/dashboard/pages/alltraining',
//       },
//       {
//         keywords: ['schedule', 'calendar'],
//         response: "You can view our course schedule on the Calendar page.",
//         link: '/dashboard/pages/calendar',
//       },
//       {
//         keywords: ['location', 'address'],
//         response: "We are located at 15200 Grevillea Ave, Ste A-2, Lawndale, CA, 90260.",
//         link: null,
//       },
//       {
//         keywords: ['asbestos worker initial', '32 hour asbestos', 'asbestos training'],
//         response: "Learn more about the 32-hour Asbestos Worker (Initial) course.",
//         link: '/dashboard/pages/training/asbestos/course-1',
//       },
//       {
//         keywords: ['asbestos refresher', '8 hour asbestos', 'renew asbestos certification'],
//         response: "Renew your certification with the Asbestos Worker Refresher course.",
//         link: '/dashboard/pages/training/asbestos/course-2',
//       },
//       {
//         keywords: ['contractor supervisor initial', '40 hour supervisor', 'contractor asbestos training'],
//         response: "Check out the AHERA Contractor/Supervisor (Initial) - 40 Hour Course.",
//         link: '/dashboard/pages/training/asbestos/course-3',
//       },
//       {
//         keywords: ['contractor supervisor refresher', 'renew supervisor certification'],
//         response: "Renew your certification with the AHERA Contractor/Supervisor Refresher course.",
//         link: '/dashboard/pages/training/asbestos/course-4',
//       },
//       {
//         keywords: ['building inspector initial', '24 hour inspector', 'asbestos inspector training'],
//         response: "Learn about the AHERA Building Inspector (Initial) - 24 Hour Course.",
//         link: '/dashboard/pages/training/asbestos/course-5',
//       },
//       {
//         keywords: ['building inspector refresher', 'renew inspector certification'],
//         response: "Refresh your certification with the AHERA Building Inspector Refresher course.",
//         link: '/dashboard/pages/training/asbestos/course-6',
//       },
//       {
//         keywords: ['lead sample technician', '8 hour lead', 'lead certification'],
//         response: "Become certified with the CDPH Lead Sample Technician (Initial) course.",
//         link: '/dashboard/pages/training/lead/course-1',
//       },
//       {
//         keywords: ['mold sampling', '16 hour mold', 'mold certification'],
//         response: "Explore the Introduction to Mold Sampling - 16 Hour Course.",
//         link: '/dashboard/pages/training/mold/course-1',
//       },
//       {
//         keywords: ['niosh 582', 'air sampling', 'analytical course'],
//         response: "Learn about the NIOSH 582 Equivalency Course - 32 Hours.",
//         link: '/dashboard/pages/training/analytical/course-1',
//       },
//       {
//         keywords: ['introduction plm analysis', 'polarized light microscopy', 'analytical training'],
//         response: "Discover the Introduction to PLM Analysis - 40 Contact Hours.",
//         link: '/dashboard/pages/training/analytical/course-2',
//       },
//       {
//         keywords: ['advanced plm analysis', '16 hour plm', 'advanced analytical course'],
//         response: "Advance your skills with the Advanced Asbestos PLM Analysis - 16 Hours.",
//         link: '/dashboard/pages/training/analytical/course-3',
//       },
//       {
//         keywords: ['bloodborne pathogens', 'infectious materials training'],
//         response: "Learn workplace safety with the Bloodborne Pathogens course.",
//         link: '/dashboard/pages/training/workersafety/bloodbornepathogens',
//       },
//       {
//         keywords: ['confined spaces', 'osha confined spaces', 'confined space safety'],
//         response: "Understand OSHA standards with the Confined Spaces course.",
//         link: '/dashboard/pages/training/workersafety/confinedspaces',
//       },
//       {
//         keywords: ['lock out tag out', 'hazardous energy', 'osha loto training'],
//         response: "Master OSHA’s standards with the Lock Out, Tag Out course.",
//         link: '/dashboard/pages/training/workersafety/lockouttagout',
//       },
//       {
//         keywords: ['calendar courses', 'upcoming classes', 'schedule courses'],
//         response: "View upcoming courses and their schedules on the Calendar page.",
//         link: '/dashboard/pages/calendar',
//       },
//       {
//         keywords: ['resources', 'professional resources', 'exam dates'],
//         response: "Access professional resources and exam dates.",
//         link: '/dashboard/pages/resources/professionalresources',
//       },
//       {
//         keywords: ['certification renewal', 'refresher courses', 'renew certifications'],
//         response: "Renew your certifications with our refresher courses.",
//         link: '/dashboard/pages/alltraining',
//       },
//       {
//         keywords: ['first aid', 'cpr aed', 'emergency response training'],
//         response: "Get trained in CPR, AED, & First Aid.",
//         link: '/dashboard/pages/training/cpraedfirstaid',
//       },
//       {
//         keywords: ['hazwoper', 'hazardous waste training'],
//         response: "Learn about Hazardous Waste Operations with the HAZWOPER course.",
//         link: '/dashboard/pages/training/hazwoper',
//       },
//       {
//         keywords: ['about aehs', 'instructors', 'accreditation'],
//         response: "Learn about AEHS, our instructors, and accreditations.",
//         link: '/dashboard/pages/about/aehsinfo',
//       },
//       {
//         keywords: ['lawndale location', 'address aehs', 'training center address'],
//         response: "Our training center is in Lawndale, CA.",
//         link: null,
//       },
//       {
//         keywords: ['support email', 'aehs email'],
//         response: "Email us at info@pinnaclelab.com for assistance.",
//         link: null,
//       },
//       {
//         keywords: ['phone number', 'contact phone', 'aehs phone'],
//         response: "Call us at (310) 400-6153 for more information.",
//         link: null,
//       },
//       {
//         keywords: ['review aehs', 'google review', 'leave feedback'],
//         response: "We value your feedback! Leave a review on Google.",
//         link: 'https://g.page/r/Ceh4qq4FerBXEBM/review',
//       },

//           {
//             keywords: ['ahera worker', 'ahera training', 'asbestos worker training'],
//             response: "Learn about the AHERA Worker (Initial) - 32 Hour Course.",
//             link: '/dashboard/pages/training/asbestos/course-1',
//           },
//           {
//             keywords: ['asbestos contractor supervisor', '40 hour contractor', 'ahera contractor training'],
//             response: "Learn about the AHERA Contractor/Supervisor (Initial) - 40 Hour Course.",
//             link: '/dashboard/pages/training/asbestos/course-3',
//           },
//           {
//             keywords: ['cal/osha asbestos exam', 'certified asbestos consultant exam'],
//             response: "Prepare for the Cal/OSHA Certified Asbestos Consultant Exam.",
//             link: '/dashboard/pages/resources/professionalresources',
//           },
//           {
//             keywords: ['asbestos refresher certification', 'renew asbestos worker'],
//             response: "Renew your certification with our Asbestos Worker Refresher course.",
//             link: '/dashboard/pages/training/asbestos/course-2',
//           },
//           {
//             keywords: ['mold sampling training', '16 hour mold training'],
//             response: "Learn about our 16-hour Introduction to Mold Sampling course.",
//             link: '/dashboard/pages/training/mold/course-1',
//           },
//           {
//             keywords: ['bloodborne pathogens training', 'osha bloodborne', 'infectious disease training'],
//             response: "Explore our Bloodborne Pathogens training for workplace safety.",
//             link: '/dashboard/pages/training/workersafety/bloodbornepathogens',
//           },
//           {
//             keywords: ['lockout tagout', 'osha loto', 'hazardous energy control training'],
//             response: "Learn about our OSHA-compliant Lockout/Tagout training.",
//             link: '/dashboard/pages/training/workersafety/lockouttagout',
//           },
//           {
//             keywords: ['confined space training', 'confined space osha course'],
//             response: "Take our Confined Spaces course to comply with OSHA standards.",
//             link: '/dashboard/pages/training/workersafety/confinedspaces',
//           },
//           {
//             keywords: ['lead sample technician course', 'cdph lead training'],
//             response: "Enroll in our CDPH Lead Sample Technician (Initial) course.",
//             link: '/dashboard/pages/training/lead/course-1',
//           },
//           {
//             keywords: ['plm analysis course', 'polarized light microscopy training'],
//             response: "Check out our Introduction to PLM Analysis course.",
//             link: '/dashboard/pages/training/analytical/course-2',
//           },
//           {
//             keywords: ['ahera project designer', 'asbestos project designer course'],
//             response: "Explore our AHERA Project Designer training program.",
//             link: '/dashboard/pages/training/asbestos/course-7',
//           },
//           {
//             keywords: ['ahera inspector refresher', 'renew building inspector'],
//             response: "Renew your certification with our AHERA Building Inspector Refresher course.",
//             link: '/dashboard/pages/training/asbestos/course-6',
//           },
//           {
//             keywords: ['cpr aed certification', 'first aid training'],
//             response: "Get certified in CPR, AED, and First Aid.",
//             link: '/dashboard/pages/training/cpraedfirstaid',
//           },
//           {
//             keywords: ['hazwoper certification', 'hazardous waste operations'],
//             response: "Learn about Hazardous Waste Operations with our HAZWOPER course.",
//             link: '/dashboard/pages/training/hazwoper',
//           },
//           {
//             keywords: ['exam dates', 'professional certification exams'],
//             response: "View upcoming exam dates on our resources page.",
//             link: '/dashboard/pages/resources/professionalresources',
//           },
//           {
//             keywords: ['contact instructors', 'reach out instructors'],
//             response: "Learn more about our instructors on the About Us page.",
//             link: '/dashboard/pages/about/instructorprofiles',
//           },
//           {
//             keywords: ['asbestos certification requirements', 'cac requirements', 'csst requirements'],
//             response: "Review the requirements to become a Certified Asbestos Consultant (CAC) or CSST.",
//             link: '/dashboard/pages/resources/faq',
//           },
//           {
//             keywords: ['accreditation', 'certifications aehs', 'approved training'],
//             response: "Learn about our accreditations and approvals.",
//             link: '/dashboard/pages/about/accreditation',
//           },
//           {
//             keywords: ['course calendar', 'training schedule', 'class dates'],
//             response: "Check out our course calendar for upcoming training dates.",
//             link: '/dashboard/pages/calendar',
//           },
//           {
//             keywords: ['professional resources', 'helpful resources', 'exam preparation'],
//             response: "Visit our Professional Resources page for more information.",
//             link: '/dashboard/pages/resources/professionalresources',
//           },
//           {
//             keywords: ['asbestos safety', 'asbestos dangers', 'asbestos information'],
//             response: "Learn about asbestos safety and its health impacts.",
//             link: '/dashboard/pages/resources/professionalresources',
//           },
//           {
//             keywords: ['renew certification', 'certification renewal courses'],
//             response: "Renew your certifications by enrolling in our refresher courses.",
//             link: '/dashboard/pages/alltraining',
//           },
//           {
//             keywords: ['lawndale california training', '15200 grevillea ave'],
//             response: "Our training center is located in Lawndale, CA.",
//             link: null,
//           },
//           {
//             keywords: ['support', 'customer service', 'contact email'],
//             response: "You can email us at info@pinnaclelab.com for support.",
//             link: null,
//           },
//           {
//             keywords: ['phone number', 'call aehs', 'training center phone'],
//             response: "Call us at (310) 400-6153 for inquiries.",
//             link: null,
//           },
//           {
//             keywords: ['training cost', 'course fees', 'pricing information'],
//             response: "Check out the course details for pricing information.",
//             link: '/dashboard/pages/alltraining',
//           },
//           {
//             keywords: ['google review', 'review aehs', 'feedback'],
//             response: "We value your feedback! Leave us a review on Google.",
//             link: 'https://g.page/r/Ceh4qq4FerBXEBM/review',
//           },
//           {
//             keywords: ['facebook page', 'social media', 'aehs facebook'],
//             response: "Visit our Facebook page to stay updated.",
//             link: 'https://www.facebook.com/profile.php?id=61567087595623',
//           },
//           {
//             keywords: ['linkedin', 'linkedin profile', 'professional network'],
//             response: "Connect with us on LinkedIn for updates and news.",
//             link: 'https://www.linkedin.com',
//           },
//           {
//             keywords: ['twitter', 'x profile', 'aehs updates'],
//             response: "Follow us on Twitter for updates.",
//             link: 'https://x.com/AEHS_Training',
//           },
//           {
//             keywords: ['instagram', 'social media', 'training updates'],
//             response: "Check out our Instagram for training updates and more.",
//             link: 'https://www.instagram.com/aehstraining/',
//           },

//               {
//                 keywords: ['upcoming courses', 'training dates', 'class schedule'],
//                 response: "Check the latest schedule for our upcoming courses.",
//                 link: '/dashboard/pages/calendar',
//               },
//               {
//                 keywords: ['ahera management planner', 'asbestos planner training'],
//                 response: "Learn about the AHERA Management Planner course.",
//                 link: '/dashboard/pages/training/asbestos/course-7',
//               },
//               {
//                 keywords: ['project designer asbestos', 'asbestos design training'],
//                 response: "Explore the AHERA Project Designer course.",
//                 link: '/dashboard/pages/training/asbestos/course-8',
//               },
//               {
//                 keywords: ['certified asbestos consultant', 'cal/osha exam preparation'],
//                 response: "Prepare for the Cal/OSHA Certified Asbestos Consultant Exam.",
//                 link: '/dashboard/pages/resources/professionalresources',
//               },
//               {
//                 keywords: ['california asbestos training', 'asbestos certifications'],
//                 response: "Discover our California-approved asbestos certification programs.",
//                 link: '/dashboard/pages/training/asbestos',
//               },
//               {
//                 keywords: ['lead worker training', 'lead safety training', 'cdph lead technician'],
//                 response: "Learn more about our CDPH Lead Sample Technician course.",
//                 link: '/dashboard/pages/training/lead/course-1',
//               },
//               {
//                 keywords: ['mold certification', 'mold sampling training', '16-hour mold'],
//                 response: "Check out the Introduction to Mold Sampling course.",
//                 link: '/dashboard/pages/training/mold/course-1',
//               },
//               {
//                 keywords: ['bloodborne pathogens online', 'osha safety training'],
//                 response: "Enroll in our OSHA-compliant Bloodborne Pathogens course.",
//                 link: '/dashboard/pages/training/workersafety/bloodbornepathogens',
//               },
//               {
//                 keywords: ['osha confined space', 'confined space certification'],
//                 response: "Learn more about our OSHA Confined Spaces course.",
//                 link: '/dashboard/pages/training/workersafety/confinedspaces',
//               },
//               {
//                 keywords: ['loto training', 'lock out tag out certification'],
//                 response: "Understand OSHA standards with our Lock Out, Tag Out course.",
//                 link: '/dashboard/pages/training/workersafety/lockouttagout',
//               },
//               {
//                 keywords: ['first aid training', 'cpr and aed courses'],
//                 response: "Get certified in CPR, AED, and First Aid.",
//                 link: '/dashboard/pages/training/cpraedfirstaid',
//               },
//               {
//                 keywords: ['hazwoper certification', 'hazardous waste training'],
//                 response: "Explore Hazardous Waste Operations with our HAZWOPER course.",
//                 link: '/dashboard/pages/training/hazwoper',
//               },
//               {
//                 keywords: ['niosh 582 equivalency', 'analytical air sampling'],
//                 response: "Check out our NIOSH 582 Equivalency Course.",
//                 link: '/dashboard/pages/training/analytical/course-1',
//               },
//               {
//                 keywords: ['plm analysis', 'advanced asbestos training'],
//                 response: "Explore our PLM Analysis courses for advanced training.",
//                 link: '/dashboard/pages/training/analytical',
//               },
//               {
//                 keywords: ['certification renewal', 'refresher courses'],
//                 response: "Keep your certifications current with our refresher courses.",
//                 link: '/dashboard/pages/alltraining',
//               },
//               {
//                 keywords: ['asbestos safety course', 'ahera safety training'],
//                 response: "Learn about asbestos safety with our AHERA courses.",
//                 link: '/dashboard/pages/training/asbestos',
//               },
//               {
//                 keywords: ['worker safety courses', 'online safety training'],
//                 response: "Explore our Worker Safety courses available online.",
//                 link: '/dashboard/pages/training/workersafety',
//               },
//               {
//                 keywords: ['training resources', 'helpful links'],
//                 response: "Access our resources for professional development.",
//                 link: '/dashboard/pages/resources/professionalresources',
//               },
//               {
//                 keywords: ['location aehs', 'training address'],
//                 response: "Visit us at 15200 Grevillea Ave, Ste A-2, Lawndale, CA.",
//                 link: null,
//               },
//               {
//                 keywords: ['email support', 'contact email'],
//                 response: "Email us at info@pinnaclelab.com for assistance.",
//                 link: null,
//               },
//               {
//                 keywords: ['phone contact', 'call aehs'],
//                 response: "Call us at (310) 400-6153 for more information.",
//                 link: null,
//               },
//               {
//                 keywords: ['leave review', 'feedback', 'google reviews'],
//                 response: "We value your feedback! Leave us a review on Google.",
//                 link: 'https://g.page/r/Ceh4qq4FerBXEBM/review',
//               },
//               {
//                 keywords: ['facebook updates', 'aehs facebook page'],
//                 response: "Follow us on Facebook for updates and news.",
//                 link: 'https://www.facebook.com/profile.php?id=61567087595623',
//               },
//               {
//                 keywords: ['linkedin profile', 'aehs linkedin'],
//                 response: "Connect with us on LinkedIn for professional updates.",
//                 link: 'https://www.linkedin.com',
//               },
//               {
//                 keywords: ['aehs twitter', 'training updates'],
//                 response: "Follow us on Twitter for the latest updates.",
//                 link: 'https://x.com/AEHS_Training',
//               },
//               {
//                 keywords: ['instagram training updates', 'social media'],
//                 response: "Check out our Instagram for training highlights.",
//                 link: 'https://www.instagram.com/aehstraining/',
//               },
//               {
//                 keywords: ['certified instructor profiles', 'meet trainers'],
//                 response: "Learn about our certified trainers on the Instructor Profiles page.",
//                 link: '/dashboard/pages/about/instructorprofiles',
//               },
//               {
//                 keywords: ['training center details', 'certified training'],
//                 response: "Visit our About Us page to learn about our training center.",
//                 link: '/dashboard/pages/about/aehsinfo',
//               },
//               {
//                 keywords: ['asbestos consultant certification', 'california asbestos exam'],
//                 response: "Prepare for the California Certified Asbestos Consultant Exam.",
//                 link: '/dashboard/pages/resources/faq',
//               },
//               {
//                 keywords: ['accreditation', 'certified courses'],
//                 response: "Review our accreditations and certifications.",
//                 link: '/dashboard/pages/about/accreditation',
//               },
//               {
//                 keywords: ['course duration', 'course timing'],
//                 response: "Find the duration and timing for each course on our All Courses page.",
//                 link: '/dashboard/pages/alltraining',
//               },
//               {
//                 keywords: ['asbestos supervisor', 'supervisor certification'],
//                 response: "Check out the AHERA Contractor/Supervisor courses.",
//                 link: '/dashboard/pages/training/asbestos/course-3',
//               },
//               {
//                 keywords: ['training packages', 'course bundles'],
//                 response: "Learn more about our bundled course options.",
//                 link: '/dashboard/pages/alltraining',
//               },
//               {
//                 keywords: ['niosh analytical training', 'advanced niosh course'],
//                 response: "Explore our advanced analytical courses, including NIOSH 582.",
//                 link: '/dashboard/pages/training/analytical/course-1',
//               },
//               {
//                 keywords: ['calendar view', 'class schedules'],
//                 response: "Check out our Calendar page for upcoming schedules.",
//                 link: '/dashboard/pages/calendar',
//               },
//               {
//                 keywords: ['resources for certification', 'helpful certification links'],
//                 response: "Access resources to prepare for certification exams.",
//                 link: '/dashboard/pages/resources/professionalresources',
//               },
//               {
//                 keywords: ['asbestos certification courses', 'asbestos training details'],
//                 response: "View detailed information about our asbestos courses.",
//                 link: '/dashboard/pages/training/asbestos',
//               },

//                   {
//                     keywords: ['asbestos worker initial', '32-hour asbestos', 'ahera asbestos training'],
//                     response: "Learn about our AHERA Asbestos Worker (Initial) - 32 Hour Course.",
//                     link: '/dashboard/pages/training/asbestos/course-1',
//                   },
//                   {
//                     keywords: ['ahera asbestos refresher', 'renew asbestos certification'],
//                     response: "Renew your certification with the Asbestos Worker Refresher - 8 Hour Course.",
//                     link: '/dashboard/pages/training/asbestos/course-2',
//                   },
//                   {
//                     keywords: ['contractor supervisor asbestos', 'ahera supervisor initial'],
//                     response: "Check out our AHERA Contractor/Supervisor (Initial) - 40 Hour Course.",
//                     link: '/dashboard/pages/training/asbestos/course-3',
//                   },
//                   {
//                     keywords: ['contractor supervisor refresher', 'supervisor renewal course'],
//                     response: "Renew your certification with the AHERA Contractor/Supervisor Refresher - 8 Hour Course.",
//                     link: '/dashboard/pages/training/asbestos/course-4',
//                   },
//                   {
//                     keywords: ['asbestos inspector training', '24-hour building inspector'],
//                     response: "Learn more about the AHERA Building Inspector (Initial) - 24 Hour Course.",
//                     link: '/dashboard/pages/training/asbestos/course-5',
//                   },
//                   {
//                     keywords: ['building inspector refresher', 'renew inspector certification'],
//                     response: "Renew your certification with the AHERA Building Inspector Refresher - 4 Hour Course.",
//                     link: '/dashboard/pages/training/asbestos/course-6',
//                   },
//                   {
//                     keywords: ['plm analysis course', 'polarized light microscopy training'],
//                     response: "Discover the Introduction to PLM Analysis - 40 Contact Hours.",
//                     link: '/dashboard/pages/training/analytical/course-2',
//                   },
//                   {
//                     keywords: ['advanced plm analysis', 'asbestos plm techniques'],
//                     response: "Advance your skills with the Advanced Asbestos PLM Analysis - 16 Contact Hours.",
//                     link: '/dashboard/pages/training/analytical/course-3',
//                   },
//                   {
//                     keywords: ['niosh 582 equivalency', 'air sampling course'],
//                     response: "Learn about our NIOSH 582 Equivalency Course - 32 Hours.",
//                     link: '/dashboard/pages/training/analytical/course-1',
//                   },
//                   {
//                     keywords: ['mold sampling training', 'mold certification course'],
//                     response: "Explore our Introduction to Mold Sampling - 16 Hour Course.",
//                     link: '/dashboard/pages/training/mold/course-1',
//                   },
//                   {
//                     keywords: ['lead sample technician', 'cdph lead training'],
//                     response: "Become certified with the CDPH Lead Sample Technician (Initial) - 8 Hour Course.",
//                     link: '/dashboard/pages/training/lead/course-1',
//                   },
//                   {
//                     keywords: ['cpr training', 'aed certification', 'first aid course'],
//                     response: "Get certified in CPR, AED, and First Aid with our courses.",
//                     link: '/dashboard/pages/training/cpraedfirstaid',
//                   },
//                   {
//                     keywords: ['bloodborne pathogens', 'osha safety training'],
//                     response: "Enroll in our OSHA-compliant Bloodborne Pathogens course.",
//                     link: '/dashboard/pages/training/workersafety/bloodbornepathogens',
//                   },
//                   {
//                     keywords: ['confined space training', 'osha confined spaces'],
//                     response: "Understand OSHA standards with our Confined Spaces training.",
//                     link: '/dashboard/pages/training/workersafety/confinedspaces',
//                   },
//                   {
//                     keywords: ['lockout tagout training', 'osha loto standards'],
//                     response: "Master OSHA's standards with our Lockout/Tagout course.",
//                     link: '/dashboard/pages/training/workersafety/lockouttagout',
//                   },
//                   {
//                     keywords: ['calendar of courses', 'schedule training'],
//                     response: "View upcoming training schedules on our Calendar page.",
//                     link: '/dashboard/pages/calendar',
//                   },
//                   {
//                     keywords: ['hazwoper certification', 'hazardous waste operations'],
//                     response: "Learn about our Hazardous Waste Operations (HAZWOPER) training.",
//                     link: '/dashboard/pages/training/hazwoper',
//                   },
//                   {
//                     keywords: ['training resources', 'certification preparation'],
//                     response: "Access our resources for professional development and certification preparation.",
//                     link: '/dashboard/pages/resources/professionalresources',
//                   },
//                   {
//                     keywords: ['exam dates', 'certification exams'],
//                     response: "Find information about upcoming certification exams.",
//                     link: '/dashboard/pages/resources/professionalresources',
//                   },
//                   {
//                     keywords: ['aehs instructors', 'trainer profiles'],
//                     response: "Learn about our certified trainers on the Instructor Profiles page.",
//                     link: '/dashboard/pages/about/instructorprofiles',
//                   },
//                   {
//                     keywords: ['aehs location', 'lawndale training center'],
//                     response: "Our training center is located in Lawndale, CA.",
//                     link: null,
//                   },
//                   {
//                     keywords: ['email aehs', 'contact support'],
//                     response: "Email us at info@pinnaclelab.com for assistance.",
//                     link: null,
//                   },
//                   {
//                     keywords: ['phone contact', 'call training center'],
//                     response: "Call us at (310) 400-6153 for inquiries.",
//                     link: null,
//                   },
//                   {
//                     keywords: ['feedback', 'google review', 'leave a review'],
//                     response: "We value your feedback! Leave us a review on Google.",
//                     link: 'https://g.page/r/Ceh4qq4FerBXEBM/review',
//                   },
//                   {
//                     keywords: ['social media', 'facebook page', 'aehs updates'],
//                     response: "Follow us on Facebook for updates and news.",
//                     link: 'https://www.facebook.com/profile.php?id=61567087595623',
//                   },
//                   {
//                     keywords: ['linkedin profile', 'connect on linkedin'],
//                     response: "Connect with us on LinkedIn for professional updates.",
//                     link: 'https://www.linkedin.com',
//                   },
//                   {
//                     keywords: ['twitter updates', 'aehs twitter'],
//                     response: "Follow us on Twitter for the latest updates.",
//                     link: 'https://x.com/AEHS_Training',
//                   },
//                   {
//                     keywords: ['instagram updates', 'training photos'],
//                     response: "Check out our Instagram for training highlights and updates.",
//                     link: 'https://www.instagram.com/aehstraining/',
//                   },
//                   {
//                     keywords: ['certification requirements', 'asbestos certification'],
//                     response: "Learn about the requirements for asbestos certification.",
//                     link: '/dashboard/pages/resources/faq',
//                   },
//                   {
//                     keywords: ['accreditation', 'certified courses', 'aehs approval'],
//                     response: "Review our accreditations and certifications.",
//                     link: '/dashboard/pages/about/accreditation',
//                   },
//                   {
//                     keywords: ['resources page', 'exam prep'],
//                     response: "Visit our Professional Resources page for helpful links and study guides.",
//                     link: '/dashboard/pages/resources/professionalresources',
//                   },
//                   {
//                     keywords: ['course fees', 'training costs'],
//                     response: "Find pricing and fees for our courses on the All Training page.",
//                     link: '/dashboard/pages/alltraining',
//                   },
//                   {
//                     keywords: ['renew certifications', 'refresher courses'],
//                     response: "Keep your certifications current with our refresher courses.",
//                     link: '/dashboard/pages/alltraining',
//                   },
//                   {
//                     keywords: ['upcoming courses', 'training schedule'],
//                     response: "Check out our training calendar for upcoming courses.",
//                     link: '/dashboard/pages/calendar',
//                   },

//                       {
//                         keywords: ['ahera worker training', 'asbestos worker initial course'],
//                         response: "Explore the AHERA Worker (Initial) - 32 Hour Course for asbestos training.",
//                         link: '/dashboard/pages/training/asbestos/course-1',
//                       },
//                       {
//                         keywords: ['asbestos refresher training', 'renew asbestos worker certification'],
//                         response: "Renew your asbestos certification with the Asbestos Worker Refresher - 8 Hour Course.",
//                         link: '/dashboard/pages/training/asbestos/course-2',
//                       },
//                       {
//                         keywords: ['supervisor asbestos training', 'ahera contractor course'],
//                         response: "Learn about the AHERA Contractor/Supervisor (Initial) - 40 Hour Course.",
//                         link: '/dashboard/pages/training/asbestos/course-3',
//                       },
//                       {
//                         keywords: ['supervisor refresher asbestos', 'contractor refresher course'],
//                         response: "Refresh your certification with the AHERA Contractor/Supervisor Refresher - 8 Hour Course.",
//                         link: '/dashboard/pages/training/asbestos/course-4',
//                       },
//                       {
//                         keywords: ['building inspector course', 'ahera inspector training'],
//                         response: "Learn about the AHERA Building Inspector (Initial) - 24 Hour Course.",
//                         link: '/dashboard/pages/training/asbestos/course-5',
//                       },
//                       {
//                         keywords: ['building inspector refresher', 'renew inspector training'],
//                         response: "Refresh your certification with the AHERA Building Inspector Refresher - 4 Hour Course.",
//                         link: '/dashboard/pages/training/asbestos/course-6',
//                       },
//                       {
//                         keywords: ['lead technician training', 'cdph lead certification'],
//                         response: "Learn about the CDPH Lead Sample Technician (Initial) - 8 Hour Course.",
//                         link: '/dashboard/pages/training/lead/course-1',
//                       },
//                       {
//                         keywords: ['mold training course', '16-hour mold sampling course'],
//                         response: "Explore the Introduction to Mold Sampling - 16 Hour Course.",
//                         link: '/dashboard/pages/training/mold/course-1',
//                       },
//                       {
//                         keywords: ['niosh 582 course', 'air sampling training'],
//                         response: "Check out the NIOSH 582 Equivalency Course - 32 Hours.",
//                         link: '/dashboard/pages/training/analytical/course-1',
//                       },
//                       {
//                         keywords: ['plm analysis training', 'advanced asbestos plm analysis'],
//                         response: "Discover the Advanced Asbestos PLM Analysis - 16 Contact Hours.",
//                         link: '/dashboard/pages/training/analytical/course-3',
//                       },
//                       {
//                         keywords: ['cpr first aid certification', 'aed training course'],
//                         response: "Get certified with our CPR, AED, and First Aid courses.",
//                         link: '/dashboard/pages/training/cpraedfirstaid',
//                       },
//                       {
//                         keywords: ['osha bloodborne pathogens', 'pathogen safety training'],
//                         response: "Learn workplace safety with our Bloodborne Pathogens course.",
//                         link: '/dashboard/pages/training/workersafety/bloodbornepathogens',
//                       },
//                       {
//                         keywords: ['confined spaces training', 'osha confined space certification'],
//                         response: "Understand OSHA standards with the Confined Spaces course.",
//                         link: '/dashboard/pages/training/workersafety/confinedspaces',
//                       },
//                       {
//                         keywords: ['lockout tagout training', 'osha loto training'],
//                         response: "Master OSHA's Lockout/Tagout standards with our training.",
//                         link: '/dashboard/pages/training/workersafety/lockouttagout',
//                       },
//                       {
//                         keywords: ['hazwoper training', 'hazardous waste certification'],
//                         response: "Learn about hazardous waste operations with our HAZWOPER course.",
//                         link: '/dashboard/pages/training/hazwoper',
//                       },
//                       {
//                         keywords: ['professional resources', 'certification study resources'],
//                         response: "Access resources for professional certification preparation.",
//                         link: '/dashboard/pages/resources/professionalresources',
//                       },
//                       {
//                         keywords: ['exam dates', 'certification exam schedules'],
//                         response: "View upcoming exam dates on the Professional Resources page.",
//                         link: '/dashboard/pages/resources/professionalresources',
//                       },
//                       {
//                         keywords: ['asbestos consultant certification', 'ahera consultant training'],
//                         response: "Prepare for the Certified Asbestos Consultant exam.",
//                         link: '/dashboard/pages/resources/faq',
//                       },
//                       {
//                         keywords: ['calendar courses', 'training schedule'],
//                         response: "Check the Calendar page for upcoming course schedules.",
//                         link: '/dashboard/pages/calendar',
//                       },
//                       {
//                         keywords: ['aehs instructors', 'meet trainers'],
//                         response: "Learn about our certified trainers on the Instructor Profiles page.",
//                         link: '/dashboard/pages/about/instructorprofiles',
//                       },
//                       {
//                         keywords: ['aehs location', 'lawndale address'],
//                         response: "Visit us at 15200 Grevillea Ave, Ste A-2, Lawndale, CA.",
//                         link: null,
//                       },
//                       {
//                         keywords: ['email contact', 'customer support email'],
//                         response: "Email us at info@pinnaclelab.com for support.",
//                         link: null,
//                       },
//                       {
//                         keywords: ['phone contact', 'call support'],
//                         response: "Reach us at (310) 400-6153 for inquiries.",
//                         link: null,
//                       },
//                       {
//                         keywords: ['google reviews', 'leave feedback'],
//                         response: "We value your feedback! Leave a review on Google.",
//                         link: 'https://g.page/r/Ceh4qq4FerBXEBM/review',
//                       },
//                       {
//                         keywords: ['facebook updates', 'aehs facebook'],
//                         response: "Follow us on Facebook for updates and news.",
//                         link: 'https://www.facebook.com/profile.php?id=61567087595623',
//                       },
//                       {
//                         keywords: ['linkedin page', 'aehs linkedin profile'],
//                         response: "Connect with us on LinkedIn for updates.",
//                         link: 'https://www.linkedin.com',
//                       },
//                       {
//                         keywords: ['twitter updates', 'aehs twitter'],
//                         response: "Follow us on Twitter for the latest updates.",
//                         link: 'https://x.com/AEHS_Training',
//                       },
//                       {
//                         keywords: ['instagram training', 'social media updates'],
//                         response: "Check out our Instagram for training photos and updates.",
//                         link: 'https://www.instagram.com/aehstraining/',
//                       },
//                       {
//                         keywords: ['accreditation details', 'approved training programs'],
//                         response: "Learn about our accreditations and approved training programs.",
//                         link: '/dashboard/pages/about/accreditation',
//                       },
//                       {
//                         keywords: ['course fees', 'training cost'],
//                         response: "Find detailed pricing for our courses on the All Courses page.",
//                         link: '/dashboard/pages/alltraining',
//                       },
//                       {
//                         keywords: ['renew certification', 'refresher courses available'],
//                         response: "Stay certified with our refresher courses.",
//                         link: '/dashboard/pages/alltraining',
//                       },
//                       {
//                         keywords: ['calendar courses', 'view training schedule'],
//                         response: "View upcoming courses on our Calendar page.",
//                         link: '/dashboard/pages/calendar',
//                       },
//                       {
//                         keywords: ['resources', 'helpful links for certifications'],
//                         response: "Access helpful links on our Professional Resources page.",
//                         link: '/dashboard/pages/resources/professionalresources',
//                       },
//                       {
//                         keywords: ['asbestos safety', 'asbestos health risks'],
//                         response: "Learn about asbestos safety on our Professional Resources page.",
//                         link: '/dashboard/pages/resources/professionalresources',
//                       },
//                       {
//                         keywords: ['worker safety training', 'online worker courses'],
//                         response: "Explore online worker safety courses available at AEHS.",
//                         link: '/dashboard/pages/training/workersafety',
//                       },
//                       {
//                         keywords: ['about aehs', 'training overview'],
//                         response: "Learn about AEHS and what we offer on the About Us page.",
//                         link: '/dashboard/pages/about/aehsinfo',
//                       },

//   ];

// // Set up Fuse.js with better keyword mapping and configuration for fuzzy matching
// const fuse = new Fuse(botKnowledge, {
//     keys: ['keywords'],
//     threshold: 0.2, // Lowered threshold for better keyword detection
//     distance: 100,
//     minMatchCharLength: 2,
//     ignoreLocation: true,
//   });

//   const Chatbot = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isMinimized, setIsMinimized] = useState(false);
//     const [messages, setMessages] = useState([
//       { from: 'bot', text: "Hi! I'm HelperBot. How can I assist you?" },
//     ]);
//     const [input, setInput] = useState('');
//     const chatWindowRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//       if (chatWindowRef.current) {
//         chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
//       }
//     }, [messages]);

//     const handleSend = () => {
//       if (!input.trim()) return;

//       const userMessage = { from: 'user', text: input };
//       setMessages((prev) => [...prev, userMessage]);

//       // Split user input into individual words
//       const words = input.toLowerCase().split(/\s+/);
//       let foundResponse = null;

//       // Check for greeting keywords
//       const greetingKeywords = ['hi', 'hello', 'hey', 'howdy', 'what’s up'];
//       const hasGreeting = words.some((word) => greetingKeywords.includes(word));

//       // Search for specific keywords using fuzzy matching
//       for (const word of words) {
//         const result = fuse.search(word);
//         if (result.length > 0) {
//           foundResponse = result[0].item;
//           break;
//         }
//       }

//       if (foundResponse) {
//         // If a specific response is found, use it
//         setMessages((prev) => [
//           ...prev,
//           { from: 'bot', text: foundResponse.response },
//           ...(foundResponse.link
//             ? [{ from: 'bot', link: foundResponse.link, text: 'Go to Page' }]
//             : []),
//         ]);
//       } else if (hasGreeting) {
//         // If there's no specific response, but a greeting is detected
//         const greetingResponses = [
//           "Hello there! How can I assist you today?",
//           "Hi! I'm here to help. Feel free to ask me anything!",
//           "Hey! What can I do for you today?",
//         ];
//         const randomGreeting =
//           greetingResponses[Math.floor(Math.random() * greetingResponses.length)];
//         setMessages((prev) => [...prev, { from: 'bot', text: randomGreeting }]);
//       } else {
//         // If there's no match at all, provide a fallback response
//         setMessages((prev) => [
//           ...prev,
//           { from: 'bot', text: "I couldn't find an answer to that. Please visit our FAQ page for more information. If you still need help, feel free to contact us directly!." },
//           { from: 'bot', link: faqPage, text: 'Go to FAQ' },
//         ]);
//       }

//       setInput('');
//     };

//     const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//       if (e.key === 'Enter') {
//         handleSend();
//       }
//     };

//     return (
//       <div>
//         {/* Chatbot Trigger */}
//         {!isOpen && !isMinimized && (
//           <motion.div
//             className="fixed bottom-24 right-6 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer text-lg"
//             animate={{ scale: [0, 1.2, 1] }}
//             onClick={() => setIsOpen(true)}
//           >
//             Hey, need help?
//           </motion.div>
//         )}

//         {/* Bell Icon */}
//         {!isOpen && isMinimized && (
//           <motion.div
//             className="fixed bottom-24 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer"
//             onClick={() => setIsOpen(true)}
//           >
//             🛎️
//           </motion.div>
//         )}

//         {/* Chat Window */}
//         {isOpen && (
//           <motion.div
//             className="fixed bottom-24 right-6 bg-white border rounded-lg shadow-lg w-80 h-96 flex flex-col"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 0.8 }}
//           >
//             {/* Header */}
//             <div className="bg-blue-500 text-white px-4 py-2 flex justify-between items-center rounded-t-lg">
//               <span className="font-bold">HelperBot</span>
//               <button
//                 className="text-lg font-bold"
//                 onClick={() => {
//                   setIsOpen(false);
//                   setIsMinimized(true);
//                 }}
//               >
//                 ✖️
//               </button>
//             </div>

//             {/* Messages */}
//             <div
//               className="flex-1 p-4 overflow-y-auto space-y-2"
//               ref={chatWindowRef}
//             >
//               {messages.map((message, index) => (
//                 <div
//                   key={index}
//                   className={`${
//                     message.from === 'bot' ? 'text-left' : 'text-right'
//                   } mb-2`}
//                 >
//                   {message.link ? (
//                     <span
//                       className={`inline-block px-3 py-2 rounded-lg ${
//                         message.from === 'bot'
//                           ? 'bg-gray-200 text-black'
//                           : 'bg-blue-500 text-white'
//                       }`}
//                     >
//                       <Link href={message.link} className="text-blue-500 underline">
//                         {message.text}
//                       </Link>
//                     </span>
//                   ) : (
//                     <span
//                       className={`inline-block px-3 py-2 rounded-lg ${
//                         message.from === 'bot'
//                           ? 'bg-gray-200 text-black'
//                           : 'bg-blue-500 text-white'
//                       }`}
//                     >
//                       {message.text}
//                     </span>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Input */}
//             <div className="border-t p-2 flex text-black">
//               <input
//                 type="text"
//                 className="flex-1 px-3 py-2 border rounded-lg focus:outline-none"
//                 placeholder="Type your message..."
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyDown={handleKeyDown} // Trigger send on Enter
//               />
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-lg"
//                 onClick={handleSend}
//               >
//                 Send
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </div>
//     );
//   };

//   export default Chatbot;

// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';
// import Fuse from 'fuse.js';
// import Link from 'next/link';

// const faqPage = '/faq';
// const botKnowledge = [
//     {
//       keywords: ['contact', 'support', 'help'],
//       response: "You can reach out to our support team via the Contact Us page.",
//       link: '/dashboard/pages/contactus/generalinquiry',
//     },
//     {
//       keywords: ['faq', 'questions'],
//       response: "Visit our FAQ page to find answers to commonly asked questions.",
//       link: '/dashboard/pages/resources/faq',
//     },
//     {
//       keywords: ['course', 'training', 'asbestos', 'lead', 'mold', 'worker safety'],
//       response: "Explore all our courses on the training page.",
//       link: '/dashboard/pages/alltraining',
//     },
//     {
//       keywords: ['schedule', 'calendar'],
//       response: "You can view our course schedule on the Calendar page.",
//       link: '/dashboard/pages/calendar',
//     },
//     {
//       keywords: ['location', 'address'],
//       response: "We are located at 15200 Grevillea Ave, Ste A-2, Lawndale, CA, 90260.",
//       link: null,
//     },

//       {
//         keywords: ['contact', 'support', 'help'],
//         response: "You can reach out to our support team via the Contact Us page.",
//         link: '/dashboard/pages/contactus/generalinquiry',
//       },
//       {
//         keywords: ['faq', 'questions'],
//         response: "Visit our FAQ page to find answers to commonly asked questions.",
//         link: '/dashboard/pages/resources/faq',
//       },
//       {
//         keywords: ['course', 'training', 'asbestos', 'lead', 'mold', 'worker safety'],
//         response: "Explore all our courses on the training page.",
//         link: '/dashboard/pages/alltraining',
//       },
//       {
//         keywords: ['schedule', 'calendar'],
//         response: "You can view our course schedule on the Calendar page.",
//         link: '/dashboard/pages/calendar',
//       },
//       {
//         keywords: ['location', 'address'],
//         response: "We are located at 15200 Grevillea Ave, Ste A-2, Lawndale, CA, 90260.",
//         link: null,
//       },
//       {
//         keywords: ['asbestos worker initial', '32 hour asbestos', 'asbestos training'],
//         response: "Learn more about the 32-hour Asbestos Worker (Initial) course.",
//         link: '/dashboard/pages/training/asbestos/course-1',
//       },
//       {
//         keywords: ['asbestos refresher', '8 hour asbestos', 'renew asbestos certification'],
//         response: "Renew your certification with the Asbestos Worker Refresher course.",
//         link: '/dashboard/pages/training/asbestos/course-2',
//       },
//       {
//         keywords: ['contractor supervisor initial', '40 hour supervisor', 'contractor asbestos training'],
//         response: "Check out the AHERA Contractor/Supervisor (Initial) - 40 Hour Course.",
//         link: '/dashboard/pages/training/asbestos/course-3',
//       },
//       {
//         keywords: ['contractor supervisor refresher', 'renew supervisor certification'],
//         response: "Renew your certification with the AHERA Contractor/Supervisor Refresher course.",
//         link: '/dashboard/pages/training/asbestos/course-4',
//       },
//       {
//         keywords: ['building inspector initial', '24 hour inspector', 'asbestos inspector training'],
//         response: "Learn about the AHERA Building Inspector (Initial) - 24 Hour Course.",
//         link: '/dashboard/pages/training/asbestos/course-5',
//       },
//       {
//         keywords: ['building inspector refresher', 'renew inspector certification'],
//         response: "Refresh your certification with the AHERA Building Inspector Refresher course.",
//         link: '/dashboard/pages/training/asbestos/course-6',
//       },
//       {
//         keywords: ['lead sample technician', '8 hour lead', 'lead certification'],
//         response: "Become certified with the CDPH Lead Sample Technician (Initial) course.",
//         link: '/dashboard/pages/training/lead/course-1',
//       },
//       {
//         keywords: ['mold sampling', '16 hour mold', 'mold certification'],
//         response: "Explore the Introduction to Mold Sampling - 16 Hour Course.",
//         link: '/dashboard/pages/training/mold/course-1',
//       },
//       {
//         keywords: ['niosh 582', 'air sampling', 'analytical course'],
//         response: "Learn about the NIOSH 582 Equivalency Course - 32 Hours.",
//         link: '/dashboard/pages/training/analytical/course-1',
//       },
//       {
//         keywords: ['introduction plm analysis', 'polarized light microscopy', 'analytical training'],
//         response: "Discover the Introduction to PLM Analysis - 40 Contact Hours.",
//         link: '/dashboard/pages/training/analytical/course-2',
//       },
//       {
//         keywords: ['advanced plm analysis', '16 hour plm', 'advanced analytical course'],
//         response: "Advance your skills with the Advanced Asbestos PLM Analysis - 16 Hours.",
//         link: '/dashboard/pages/training/analytical/course-3',
//       },
//       {
//         keywords: ['bloodborne pathogens', 'infectious materials training'],
//         response: "Learn workplace safety with the Bloodborne Pathogens course.",
//         link: '/dashboard/pages/training/workersafety/bloodbornepathogens',
//       },
//       {
//         keywords: ['confined spaces', 'osha confined spaces', 'confined space safety'],
//         response: "Understand OSHA standards with the Confined Spaces course.",
//         link: '/dashboard/pages/training/workersafety/confinedspaces',
//       },
//       {
//         keywords: ['lock out tag out', 'hazardous energy', 'osha loto training'],
//         response: "Master OSHA’s standards with the Lock Out, Tag Out course.",
//         link: '/dashboard/pages/training/workersafety/lockouttagout',
//       },
//       {
//         keywords: ['calendar courses', 'upcoming classes', 'schedule courses'],
//         response: "View upcoming courses and their schedules on the Calendar page.",
//         link: '/dashboard/pages/calendar',
//       },
//       {
//         keywords: ['resources', 'professional resources', 'exam dates'],
//         response: "Access professional resources and exam dates.",
//         link: '/dashboard/pages/resources/professionalresources',
//       },
//       {
//         keywords: ['certification renewal', 'refresher courses', 'renew certifications'],
//         response: "Renew your certifications with our refresher courses.",
//         link: '/dashboard/pages/alltraining',
//       },
//       {
//         keywords: ['first aid', 'cpr aed', 'emergency response training'],
//         response: "Get trained in CPR, AED, & First Aid.",
//         link: '/dashboard/pages/training/cpraedfirstaid',
//       },
//       {
//         keywords: ['hazwoper', 'hazardous waste training'],
//         response: "Learn about Hazardous Waste Operations with the HAZWOPER course.",
//         link: '/dashboard/pages/training/hazwoper',
//       },
//       {
//         keywords: ['about aehs', 'instructors', 'accreditation'],
//         response: "Learn about AEHS, our instructors, and accreditations.",
//         link: '/dashboard/pages/about/aehsinfo',
//       },
//       {
//         keywords: ['lawndale location', 'address aehs', 'training center address'],
//         response: "Our training center is in Lawndale, CA.",
//         link: null,
//       },
//       {
//         keywords: ['support email', 'aehs email'],
//         response: "Email us at info@pinnaclelab.com for assistance.",
//         link: null,
//       },
//       {
//         keywords: ['phone number', 'contact phone', 'aehs phone'],
//         response: "Call us at (310) 400-6153 for more information.",
//         link: null,
//       },
//       {
//         keywords: ['review aehs', 'google review', 'leave feedback'],
//         response: "We value your feedback! Leave a review on Google.",
//         link: 'https://g.page/r/Ceh4qq4FerBXEBM/review',
//       },

//           {
//             keywords: ['ahera worker', 'ahera training', 'asbestos worker training'],
//             response: "Learn about the AHERA Worker (Initial) - 32 Hour Course.",
//             link: '/dashboard/pages/training/asbestos/course-1',
//           },
//           {
//             keywords: ['asbestos contractor supervisor', '40 hour contractor', 'ahera contractor training'],
//             response: "Learn about the AHERA Contractor/Supervisor (Initial) - 40 Hour Course.",
//             link: '/dashboard/pages/training/asbestos/course-3',
//           },
//           {
//             keywords: ['cal/osha asbestos exam', 'certified asbestos consultant exam'],
//             response: "Prepare for the Cal/OSHA Certified Asbestos Consultant Exam.",
//             link: '/dashboard/pages/resources/professionalresources',
//           },
//           {
//             keywords: ['asbestos refresher certification', 'renew asbestos worker'],
//             response: "Renew your certification with our Asbestos Worker Refresher course.",
//             link: '/dashboard/pages/training/asbestos/course-2',
//           },
//           {
//             keywords: ['mold sampling training', '16 hour mold training'],
//             response: "Learn about our 16-hour Introduction to Mold Sampling course.",
//             link: '/dashboard/pages/training/mold/course-1',
//           },
//           {
//             keywords: ['bloodborne pathogens training', 'osha bloodborne', 'infectious disease training'],
//             response: "Explore our Bloodborne Pathogens training for workplace safety.",
//             link: '/dashboard/pages/training/workersafety/bloodbornepathogens',
//           },
//           {
//             keywords: ['lockout tagout', 'osha loto', 'hazardous energy control training'],
//             response: "Learn about our OSHA-compliant Lockout/Tagout training.",
//             link: '/dashboard/pages/training/workersafety/lockouttagout',
//           },
//           {
//             keywords: ['confined space training', 'confined space osha course'],
//             response: "Take our Confined Spaces course to comply with OSHA standards.",
//             link: '/dashboard/pages/training/workersafety/confinedspaces',
//           },
//           {
//             keywords: ['lead sample technician course', 'cdph lead training'],
//             response: "Enroll in our CDPH Lead Sample Technician (Initial) course.",
//             link: '/dashboard/pages/training/lead/course-1',
//           },
//           {
//             keywords: ['plm analysis course', 'polarized light microscopy training'],
//             response: "Check out our Introduction to PLM Analysis course.",
//             link: '/dashboard/pages/training/analytical/course-2',
//           },
//           {
//             keywords: ['ahera project designer', 'asbestos project designer course'],
//             response: "Explore our AHERA Project Designer training program.",
//             link: '/dashboard/pages/training/asbestos/course-7',
//           },
//           {
//             keywords: ['ahera inspector refresher', 'renew building inspector'],
//             response: "Renew your certification with our AHERA Building Inspector Refresher course.",
//             link: '/dashboard/pages/training/asbestos/course-6',
//           },
//           {
//             keywords: ['cpr aed certification', 'first aid training'],
//             response: "Get certified in CPR, AED, and First Aid.",
//             link: '/dashboard/pages/training/cpraedfirstaid',
//           },
//           {
//             keywords: ['hazwoper certification', 'hazardous waste operations'],
//             response: "Learn about Hazardous Waste Operations with our HAZWOPER course.",
//             link: '/dashboard/pages/training/hazwoper',
//           },
//           {
//             keywords: ['exam dates', 'professional certification exams'],
//             response: "View upcoming exam dates on our resources page.",
//             link: '/dashboard/pages/resources/professionalresources',
//           },
//           {
//             keywords: ['contact instructors', 'reach out instructors'],
//             response: "Learn more about our instructors on the About Us page.",
//             link: '/dashboard/pages/about/instructorprofiles',
//           },
//           {
//             keywords: ['asbestos certification requirements', 'cac requirements', 'csst requirements'],
//             response: "Review the requirements to become a Certified Asbestos Consultant (CAC) or CSST.",
//             link: '/dashboard/pages/resources/faq',
//           },
//           {
//             keywords: ['accreditation', 'certifications aehs', 'approved training'],
//             response: "Learn about our accreditations and approvals.",
//             link: '/dashboard/pages/about/accreditation',
//           },
//           {
//             keywords: ['course calendar', 'training schedule', 'class dates'],
//             response: "Check out our course calendar for upcoming training dates.",
//             link: '/dashboard/pages/calendar',
//           },
//           {
//             keywords: ['professional resources', 'helpful resources', 'exam preparation'],
//             response: "Visit our Professional Resources page for more information.",
//             link: '/dashboard/pages/resources/professionalresources',
//           },
//           {
//             keywords: ['asbestos safety', 'asbestos dangers', 'asbestos information'],
//             response: "Learn about asbestos safety and its health impacts.",
//             link: '/dashboard/pages/resources/professionalresources',
//           },
//           {
//             keywords: ['renew certification', 'certification renewal courses'],
//             response: "Renew your certifications by enrolling in our refresher courses.",
//             link: '/dashboard/pages/alltraining',
//           },
//           {
//             keywords: ['lawndale california training', '15200 grevillea ave'],
//             response: "Our training center is located in Lawndale, CA.",
//             link: null,
//           },
//           {
//             keywords: ['support', 'customer service', 'contact email'],
//             response: "You can email us at info@pinnaclelab.com for support.",
//             link: null,
//           },
//           {
//             keywords: ['phone number', 'call aehs', 'training center phone'],
//             response: "Call us at (310) 400-6153 for inquiries.",
//             link: null,
//           },
//           {
//             keywords: ['training cost', 'course fees', 'pricing information'],
//             response: "Check out the course details for pricing information.",
//             link: '/dashboard/pages/alltraining',
//           },
//           {
//             keywords: ['google review', 'review aehs', 'feedback'],
//             response: "We value your feedback! Leave us a review on Google.",
//             link: 'https://g.page/r/Ceh4qq4FerBXEBM/review',
//           },
//           {
//             keywords: ['facebook page', 'social media', 'aehs facebook'],
//             response: "Visit our Facebook page to stay updated.",
//             link: 'https://www.facebook.com/profile.php?id=61567087595623',
//           },
//           {
//             keywords: ['linkedin', 'linkedin profile', 'professional network'],
//             response: "Connect with us on LinkedIn for updates and news.",
//             link: 'https://www.linkedin.com',
//           },
//           {
//             keywords: ['twitter', 'x profile', 'aehs updates'],
//             response: "Follow us on Twitter for updates.",
//             link: 'https://x.com/AEHS_Training',
//           },
//           {
//             keywords: ['instagram', 'social media', 'training updates'],
//             response: "Check out our Instagram for training updates and more.",
//             link: 'https://www.instagram.com/aehstraining/',
//           },

//               {
//                 keywords: ['upcoming courses', 'training dates', 'class schedule'],
//                 response: "Check the latest schedule for our upcoming courses.",
//                 link: '/dashboard/pages/calendar',
//               },
//               {
//                 keywords: ['ahera management planner', 'asbestos planner training'],
//                 response: "Learn about the AHERA Management Planner course.",
//                 link: '/dashboard/pages/training/asbestos/course-7',
//               },
//               {
//                 keywords: ['project designer asbestos', 'asbestos design training'],
//                 response: "Explore the AHERA Project Designer course.",
//                 link: '/dashboard/pages/training/asbestos/course-8',
//               },
//               {
//                 keywords: ['certified asbestos consultant', 'cal/osha exam preparation'],
//                 response: "Prepare for the Cal/OSHA Certified Asbestos Consultant Exam.",
//                 link: '/dashboard/pages/resources/professionalresources',
//               },
//               {
//                 keywords: ['california asbestos training', 'asbestos certifications'],
//                 response: "Discover our California-approved asbestos certification programs.",
//                 link: '/dashboard/pages/training/asbestos',
//               },
//               {
//                 keywords: ['lead worker training', 'lead safety training', 'cdph lead technician'],
//                 response: "Learn more about our CDPH Lead Sample Technician course.",
//                 link: '/dashboard/pages/training/lead/course-1',
//               },
//               {
//                 keywords: ['mold certification', 'mold sampling training', '16-hour mold'],
//                 response: "Check out the Introduction to Mold Sampling course.",
//                 link: '/dashboard/pages/training/mold/course-1',
//               },
//               {
//                 keywords: ['bloodborne pathogens online', 'osha safety training'],
//                 response: "Enroll in our OSHA-compliant Bloodborne Pathogens course.",
//                 link: '/dashboard/pages/training/workersafety/bloodbornepathogens',
//               },
//               {
//                 keywords: ['osha confined space', 'confined space certification'],
//                 response: "Learn more about our OSHA Confined Spaces course.",
//                 link: '/dashboard/pages/training/workersafety/confinedspaces',
//               },
//               {
//                 keywords: ['loto training', 'lock out tag out certification'],
//                 response: "Understand OSHA standards with our Lock Out, Tag Out course.",
//                 link: '/dashboard/pages/training/workersafety/lockouttagout',
//               },
//               {
//                 keywords: ['first aid training', 'cpr and aed courses'],
//                 response: "Get certified in CPR, AED, and First Aid.",
//                 link: '/dashboard/pages/training/cpraedfirstaid',
//               },
//               {
//                 keywords: ['hazwoper certification', 'hazardous waste training'],
//                 response: "Explore Hazardous Waste Operations with our HAZWOPER course.",
//                 link: '/dashboard/pages/training/hazwoper',
//               },
//               {
//                 keywords: ['niosh 582 equivalency', 'analytical air sampling'],
//                 response: "Check out our NIOSH 582 Equivalency Course.",
//                 link: '/dashboard/pages/training/analytical/course-1',
//               },
//               {
//                 keywords: ['plm analysis', 'advanced asbestos training'],
//                 response: "Explore our PLM Analysis courses for advanced training.",
//                 link: '/dashboard/pages/training/analytical',
//               },
//               {
//                 keywords: ['certification renewal', 'refresher courses'],
//                 response: "Keep your certifications current with our refresher courses.",
//                 link: '/dashboard/pages/alltraining',
//               },
//               {
//                 keywords: ['asbestos safety course', 'ahera safety training'],
//                 response: "Learn about asbestos safety with our AHERA courses.",
//                 link: '/dashboard/pages/training/asbestos',
//               },
//               {
//                 keywords: ['worker safety courses', 'online safety training'],
//                 response: "Explore our Worker Safety courses available online.",
//                 link: '/dashboard/pages/training/workersafety',
//               },
//               {
//                 keywords: ['training resources', 'helpful links'],
//                 response: "Access our resources for professional development.",
//                 link: '/dashboard/pages/resources/professionalresources',
//               },
//               {
//                 keywords: ['location aehs', 'training address'],
//                 response: "Visit us at 15200 Grevillea Ave, Ste A-2, Lawndale, CA.",
//                 link: null,
//               },
//               {
//                 keywords: ['email support', 'contact email'],
//                 response: "Email us at info@pinnaclelab.com for assistance.",
//                 link: null,
//               },
//               {
//                 keywords: ['phone contact', 'call aehs'],
//                 response: "Call us at (310) 400-6153 for more information.",
//                 link: null,
//               },
//               {
//                 keywords: ['leave review', 'feedback', 'google reviews'],
//                 response: "We value your feedback! Leave us a review on Google.",
//                 link: 'https://g.page/r/Ceh4qq4FerBXEBM/review',
//               },
//               {
//                 keywords: ['facebook updates', 'aehs facebook page'],
//                 response: "Follow us on Facebook for updates and news.",
//                 link: 'https://www.facebook.com/profile.php?id=61567087595623',
//               },
//               {
//                 keywords: ['linkedin profile', 'aehs linkedin'],
//                 response: "Connect with us on LinkedIn for professional updates.",
//                 link: 'https://www.linkedin.com',
//               },
//               {
//                 keywords: ['aehs twitter', 'training updates'],
//                 response: "Follow us on Twitter for the latest updates.",
//                 link: 'https://x.com/AEHS_Training',
//               },
//               {
//                 keywords: ['instagram training updates', 'social media'],
//                 response: "Check out our Instagram for training highlights.",
//                 link: 'https://www.instagram.com/aehstraining/',
//               },
//               {
//                 keywords: ['certified instructor profiles', 'meet trainers'],
//                 response: "Learn about our certified trainers on the Instructor Profiles page.",
//                 link: '/dashboard/pages/about/instructorprofiles',
//               },
//               {
//                 keywords: ['training center details', 'certified training'],
//                 response: "Visit our About Us page to learn about our training center.",
//                 link: '/dashboard/pages/about/aehsinfo',
//               },
//               {
//                 keywords: ['asbestos consultant certification', 'california asbestos exam'],
//                 response: "Prepare for the California Certified Asbestos Consultant Exam.",
//                 link: '/dashboard/pages/resources/faq',
//               },
//               {
//                 keywords: ['accreditation', 'certified courses'],
//                 response: "Review our accreditations and certifications.",
//                 link: '/dashboard/pages/about/accreditation',
//               },
//               {
//                 keywords: ['course duration', 'course timing'],
//                 response: "Find the duration and timing for each course on our All Courses page.",
//                 link: '/dashboard/pages/alltraining',
//               },
//               {
//                 keywords: ['asbestos supervisor', 'supervisor certification'],
//                 response: "Check out the AHERA Contractor/Supervisor courses.",
//                 link: '/dashboard/pages/training/asbestos/course-3',
//               },
//               {
//                 keywords: ['training packages', 'course bundles'],
//                 response: "Learn more about our bundled course options.",
//                 link: '/dashboard/pages/alltraining',
//               },
//               {
//                 keywords: ['niosh analytical training', 'advanced niosh course'],
//                 response: "Explore our advanced analytical courses, including NIOSH 582.",
//                 link: '/dashboard/pages/training/analytical/course-1',
//               },
//               {
//                 keywords: ['calendar view', 'class schedules'],
//                 response: "Check out our Calendar page for upcoming schedules.",
//                 link: '/dashboard/pages/calendar',
//               },
//               {
//                 keywords: ['resources for certification', 'helpful certification links'],
//                 response: "Access resources to prepare for certification exams.",
//                 link: '/dashboard/pages/resources/professionalresources',
//               },
//               {
//                 keywords: ['asbestos certification courses', 'asbestos training details'],
//                 response: "View detailed information about our asbestos courses.",
//                 link: '/dashboard/pages/training/asbestos',
//               },

//                   {
//                     keywords: ['asbestos worker initial', '32-hour asbestos', 'ahera asbestos training'],
//                     response: "Learn about our AHERA Asbestos Worker (Initial) - 32 Hour Course.",
//                     link: '/dashboard/pages/training/asbestos/course-1',
//                   },
//                   {
//                     keywords: ['ahera asbestos refresher', 'renew asbestos certification'],
//                     response: "Renew your certification with the Asbestos Worker Refresher - 8 Hour Course.",
//                     link: '/dashboard/pages/training/asbestos/course-2',
//                   },
//                   {
//                     keywords: ['contractor supervisor asbestos', 'ahera supervisor initial'],
//                     response: "Check out our AHERA Contractor/Supervisor (Initial) - 40 Hour Course.",
//                     link: '/dashboard/pages/training/asbestos/course-3',
//                   },
//                   {
//                     keywords: ['contractor supervisor refresher', 'supervisor renewal course'],
//                     response: "Renew your certification with the AHERA Contractor/Supervisor Refresher - 8 Hour Course.",
//                     link: '/dashboard/pages/training/asbestos/course-4',
//                   },
//                   {
//                     keywords: ['asbestos inspector training', '24-hour building inspector'],
//                     response: "Learn more about the AHERA Building Inspector (Initial) - 24 Hour Course.",
//                     link: '/dashboard/pages/training/asbestos/course-5',
//                   },
//                   {
//                     keywords: ['building inspector refresher', 'renew inspector certification'],
//                     response: "Renew your certification with the AHERA Building Inspector Refresher - 4 Hour Course.",
//                     link: '/dashboard/pages/training/asbestos/course-6',
//                   },
//                   {
//                     keywords: ['plm analysis course', 'polarized light microscopy training'],
//                     response: "Discover the Introduction to PLM Analysis - 40 Contact Hours.",
//                     link: '/dashboard/pages/training/analytical/course-2',
//                   },
//                   {
//                     keywords: ['advanced plm analysis', 'asbestos plm techniques'],
//                     response: "Advance your skills with the Advanced Asbestos PLM Analysis - 16 Contact Hours.",
//                     link: '/dashboard/pages/training/analytical/course-3',
//                   },
//                   {
//                     keywords: ['niosh 582 equivalency', 'air sampling course'],
//                     response: "Learn about our NIOSH 582 Equivalency Course - 32 Hours.",
//                     link: '/dashboard/pages/training/analytical/course-1',
//                   },
//                   {
//                     keywords: ['mold sampling training', 'mold certification course'],
//                     response: "Explore our Introduction to Mold Sampling - 16 Hour Course.",
//                     link: '/dashboard/pages/training/mold/course-1',
//                   },
//                   {
//                     keywords: ['lead sample technician', 'cdph lead training'],
//                     response: "Become certified with the CDPH Lead Sample Technician (Initial) - 8 Hour Course.",
//                     link: '/dashboard/pages/training/lead/course-1',
//                   },
//                   {
//                     keywords: ['cpr training', 'aed certification', 'first aid course'],
//                     response: "Get certified in CPR, AED, and First Aid with our courses.",
//                     link: '/dashboard/pages/training/cpraedfirstaid',
//                   },
//                   {
//                     keywords: ['bloodborne pathogens', 'osha safety training'],
//                     response: "Enroll in our OSHA-compliant Bloodborne Pathogens course.",
//                     link: '/dashboard/pages/training/workersafety/bloodbornepathogens',
//                   },
//                   {
//                     keywords: ['confined space training', 'osha confined spaces'],
//                     response: "Understand OSHA standards with our Confined Spaces training.",
//                     link: '/dashboard/pages/training/workersafety/confinedspaces',
//                   },
//                   {
//                     keywords: ['lockout tagout training', 'osha loto standards'],
//                     response: "Master OSHA's standards with our Lockout/Tagout course.",
//                     link: '/dashboard/pages/training/workersafety/lockouttagout',
//                   },
//                   {
//                     keywords: ['calendar of courses', 'schedule training'],
//                     response: "View upcoming training schedules on our Calendar page.",
//                     link: '/dashboard/pages/calendar',
//                   },
//                   {
//                     keywords: ['hazwoper certification', 'hazardous waste operations'],
//                     response: "Learn about our Hazardous Waste Operations (HAZWOPER) training.",
//                     link: '/dashboard/pages/training/hazwoper',
//                   },
//                   {
//                     keywords: ['training resources', 'certification preparation'],
//                     response: "Access our resources for professional development and certification preparation.",
//                     link: '/dashboard/pages/resources/professionalresources',
//                   },
//                   {
//                     keywords: ['exam dates', 'certification exams'],
//                     response: "Find information about upcoming certification exams.",
//                     link: '/dashboard/pages/resources/professionalresources',
//                   },
//                   {
//                     keywords: ['aehs instructors', 'trainer profiles'],
//                     response: "Learn about our certified trainers on the Instructor Profiles page.",
//                     link: '/dashboard/pages/about/instructorprofiles',
//                   },
//                   {
//                     keywords: ['aehs location', 'lawndale training center'],
//                     response: "Our training center is located in Lawndale, CA.",
//                     link: null,
//                   },
//                   {
//                     keywords: ['email aehs', 'contact support'],
//                     response: "Email us at info@pinnaclelab.com for assistance.",
//                     link: null,
//                   },
//                   {
//                     keywords: ['phone contact', 'call training center'],
//                     response: "Call us at (310) 400-6153 for inquiries.",
//                     link: null,
//                   },
//                   {
//                     keywords: ['feedback', 'google review', 'leave a review'],
//                     response: "We value your feedback! Leave us a review on Google.",
//                     link: 'https://g.page/r/Ceh4qq4FerBXEBM/review',
//                   },
//                   {
//                     keywords: ['social media', 'facebook page', 'aehs updates'],
//                     response: "Follow us on Facebook for updates and news.",
//                     link: 'https://www.facebook.com/profile.php?id=61567087595623',
//                   },
//                   {
//                     keywords: ['linkedin profile', 'connect on linkedin'],
//                     response: "Connect with us on LinkedIn for professional updates.",
//                     link: 'https://www.linkedin.com',
//                   },
//                   {
//                     keywords: ['twitter updates', 'aehs twitter'],
//                     response: "Follow us on Twitter for the latest updates.",
//                     link: 'https://x.com/AEHS_Training',
//                   },
//                   {
//                     keywords: ['instagram updates', 'training photos'],
//                     response: "Check out our Instagram for training highlights and updates.",
//                     link: 'https://www.instagram.com/aehstraining/',
//                   },
//                   {
//                     keywords: ['certification requirements', 'asbestos certification'],
//                     response: "Learn about the requirements for asbestos certification.",
//                     link: '/dashboard/pages/resources/faq',
//                   },
//                   {
//                     keywords: ['accreditation', 'certified courses', 'aehs approval'],
//                     response: "Review our accreditations and certifications.",
//                     link: '/dashboard/pages/about/accreditation',
//                   },
//                   {
//                     keywords: ['resources page', 'exam prep'],
//                     response: "Visit our Professional Resources page for helpful links and study guides.",
//                     link: '/dashboard/pages/resources/professionalresources',
//                   },
//                   {
//                     keywords: ['course fees', 'training costs'],
//                     response: "Find pricing and fees for our courses on the All Training page.",
//                     link: '/dashboard/pages/alltraining',
//                   },
//                   {
//                     keywords: ['renew certifications', 'refresher courses'],
//                     response: "Keep your certifications current with our refresher courses.",
//                     link: '/dashboard/pages/alltraining',
//                   },
//                   {
//                     keywords: ['upcoming courses', 'training schedule'],
//                     response: "Check out our training calendar for upcoming courses.",
//                     link: '/dashboard/pages/calendar',
//                   },

//                       {
//                         keywords: ['ahera worker training', 'asbestos worker initial course'],
//                         response: "Explore the AHERA Worker (Initial) - 32 Hour Course for asbestos training.",
//                         link: '/dashboard/pages/training/asbestos/course-1',
//                       },
//                       {
//                         keywords: ['asbestos refresher training', 'renew asbestos worker certification'],
//                         response: "Renew your asbestos certification with the Asbestos Worker Refresher - 8 Hour Course.",
//                         link: '/dashboard/pages/training/asbestos/course-2',
//                       },
//                       {
//                         keywords: ['supervisor asbestos training', 'ahera contractor course'],
//                         response: "Learn about the AHERA Contractor/Supervisor (Initial) - 40 Hour Course.",
//                         link: '/dashboard/pages/training/asbestos/course-3',
//                       },
//                       {
//                         keywords: ['supervisor refresher asbestos', 'contractor refresher course'],
//                         response: "Refresh your certification with the AHERA Contractor/Supervisor Refresher - 8 Hour Course.",
//                         link: '/dashboard/pages/training/asbestos/course-4',
//                       },
//                       {
//                         keywords: ['building inspector course', 'ahera inspector training'],
//                         response: "Learn about the AHERA Building Inspector (Initial) - 24 Hour Course.",
//                         link: '/dashboard/pages/training/asbestos/course-5',
//                       },
//                       {
//                         keywords: ['building inspector refresher', 'renew inspector training'],
//                         response: "Refresh your certification with the AHERA Building Inspector Refresher - 4 Hour Course.",
//                         link: '/dashboard/pages/training/asbestos/course-6',
//                       },
//                       {
//                         keywords: ['lead technician training', 'cdph lead certification'],
//                         response: "Learn about the CDPH Lead Sample Technician (Initial) - 8 Hour Course.",
//                         link: '/dashboard/pages/training/lead/course-1',
//                       },
//                       {
//                         keywords: ['mold training course', '16-hour mold sampling course'],
//                         response: "Explore the Introduction to Mold Sampling - 16 Hour Course.",
//                         link: '/dashboard/pages/training/mold/course-1',
//                       },
//                       {
//                         keywords: ['niosh 582 course', 'air sampling training'],
//                         response: "Check out the NIOSH 582 Equivalency Course - 32 Hours.",
//                         link: '/dashboard/pages/training/analytical/course-1',
//                       },
//                       {
//                         keywords: ['plm analysis training', 'advanced asbestos plm analysis'],
//                         response: "Discover the Advanced Asbestos PLM Analysis - 16 Contact Hours.",
//                         link: '/dashboard/pages/training/analytical/course-3',
//                       },
//                       {
//                         keywords: ['cpr first aid certification', 'aed training course'],
//                         response: "Get certified with our CPR, AED, and First Aid courses.",
//                         link: '/dashboard/pages/training/cpraedfirstaid',
//                       },
//                       {
//                         keywords: ['osha bloodborne pathogens', 'pathogen safety training'],
//                         response: "Learn workplace safety with our Bloodborne Pathogens course.",
//                         link: '/dashboard/pages/training/workersafety/bloodbornepathogens',
//                       },
//                       {
//                         keywords: ['confined spaces training', 'osha confined space certification'],
//                         response: "Understand OSHA standards with the Confined Spaces course.",
//                         link: '/dashboard/pages/training/workersafety/confinedspaces',
//                       },
//                       {
//                         keywords: ['lockout tagout training', 'osha loto training'],
//                         response: "Master OSHA's Lockout/Tagout standards with our training.",
//                         link: '/dashboard/pages/training/workersafety/lockouttagout',
//                       },
//                       {
//                         keywords: ['hazwoper training', 'hazardous waste certification'],
//                         response: "Learn about hazardous waste operations with our HAZWOPER course.",
//                         link: '/dashboard/pages/training/hazwoper',
//                       },
//                       {
//                         keywords: ['professional resources', 'certification study resources'],
//                         response: "Access resources for professional certification preparation.",
//                         link: '/dashboard/pages/resources/professionalresources',
//                       },
//                       {
//                         keywords: ['exam dates', 'certification exam schedules'],
//                         response: "View upcoming exam dates on the Professional Resources page.",
//                         link: '/dashboard/pages/resources/professionalresources',
//                       },
//                       {
//                         keywords: ['asbestos consultant certification', 'ahera consultant training'],
//                         response: "Prepare for the Certified Asbestos Consultant exam.",
//                         link: '/dashboard/pages/resources/faq',
//                       },
//                       {
//                         keywords: ['calendar courses', 'training schedule'],
//                         response: "Check the Calendar page for upcoming course schedules.",
//                         link: '/dashboard/pages/calendar',
//                       },
//                       {
//                         keywords: ['aehs instructors', 'meet trainers'],
//                         response: "Learn about our certified trainers on the Instructor Profiles page.",
//                         link: '/dashboard/pages/about/instructorprofiles',
//                       },
//                       {
//                         keywords: ['aehs location', 'lawndale address'],
//                         response: "Visit us at 15200 Grevillea Ave, Ste A-2, Lawndale, CA.",
//                         link: null,
//                       },
//                       {
//                         keywords: ['email contact', 'customer support email'],
//                         response: "Email us at info@pinnaclelab.com for support.",
//                         link: null,
//                       },
//                       {
//                         keywords: ['phone contact', 'call support'],
//                         response: "Reach us at (310) 400-6153 for inquiries.",
//                         link: null,
//                       },
//                       {
//                         keywords: ['google reviews', 'leave feedback'],
//                         response: "We value your feedback! Leave a review on Google.",
//                         link: 'https://g.page/r/Ceh4qq4FerBXEBM/review',
//                       },
//                       {
//                         keywords: ['facebook updates', 'aehs facebook'],
//                         response: "Follow us on Facebook for updates and news.",
//                         link: 'https://www.facebook.com/profile.php?id=61567087595623',
//                       },
//                       {
//                         keywords: ['linkedin page', 'aehs linkedin profile'],
//                         response: "Connect with us on LinkedIn for updates.",
//                         link: 'https://www.linkedin.com',
//                       },
//                       {
//                         keywords: ['twitter updates', 'aehs twitter'],
//                         response: "Follow us on Twitter for the latest updates.",
//                         link: 'https://x.com/AEHS_Training',
//                       },
//                       {
//                         keywords: ['instagram training', 'social media updates'],
//                         response: "Check out our Instagram for training photos and updates.",
//                         link: 'https://www.instagram.com/aehstraining/',
//                       },
//                       {
//                         keywords: ['accreditation details', 'approved training programs'],
//                         response: "Learn about our accreditations and approved training programs.",
//                         link: '/dashboard/pages/about/accreditation',
//                       },
//                       {
//                         keywords: ['course fees', 'training cost'],
//                         response: "Find detailed pricing for our courses on the All Courses page.",
//                         link: '/dashboard/pages/alltraining',
//                       },
//                       {
//                         keywords: ['renew certification', 'refresher courses available'],
//                         response: "Stay certified with our refresher courses.",
//                         link: '/dashboard/pages/alltraining',
//                       },
//                       {
//                         keywords: ['calendar courses', 'view training schedule'],
//                         response: "View upcoming courses on our Calendar page.",
//                         link: '/dashboard/pages/calendar',
//                       },
//                       {
//                         keywords: ['resources', 'helpful links for certifications'],
//                         response: "Access helpful links on our Professional Resources page.",
//                         link: '/dashboard/pages/resources/professionalresources',
//                       },
//                       {
//                         keywords: ['asbestos safety', 'asbestos health risks'],
//                         response: "Learn about asbestos safety on our Professional Resources page.",
//                         link: '/dashboard/pages/resources/professionalresources',
//                       },
//                       {
//                         keywords: ['worker safety training', 'online worker courses'],
//                         response: "Explore online worker safety courses available at AEHS.",
//                         link: '/dashboard/pages/training/workersafety',
//                       },
//                       {
//                         keywords: ['about aehs', 'training overview'],
//                         response: "Learn about AEHS and what we offer on the About Us page.",
//                         link: '/dashboard/pages/about/aehsinfo',
//                       },

//   ];

// const botGreetings = [
//   { keywords: ['hey', 'hello', 'hi', 'greetings'], response: "Hello! How can I help you today?" },
//   { keywords: ['thanks', 'thank you'], response: "You're very welcome! If there's anything else, just let me know." },
//   { keywords: ['goodbye', 'bye', 'see ya'], response: "Goodbye! Feel free to come back anytime you need help." },
// ];

// const fuseGreetings = new Fuse(botGreetings, {
//   keys: ['keywords'],
//   threshold: 0.3,
//   distance: 100,
//   minMatchCharLength: 2,
//   ignoreLocation: true,
// });

// // Your botKnowledge data here (not shown for brevity)

// const fuse = new Fuse(botKnowledge, {
//   keys: ['keywords'],
//   threshold: 0.3,
//   distance: 100,
//   minMatchCharLength: 2,
//   ignoreLocation: true,
// });

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMinimized, setIsMinimized] = useState(false);
//   const [messages, setMessages] = useState([
//     { from: 'bot', text: "Hi! I'm HelperBot. How can I assist you?" },
//   ]);
//   const [input, setInput] = useState('');
//   const [isTyping, setIsTyping] = useState(false);
//   const chatWindowRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (chatWindowRef.current) {
//       chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
//     }
//   }, [messages, isTyping]);

//   const handleSend = () => {
//     if (!input.trim()) return;

//     const userMessage = { from: 'user', text: input };
//     setMessages((prev) => [...prev, userMessage]);

//     // Split user input into individual words and search for best match
//     const words = input.toLowerCase().split(/\s+/);
//     let foundResponse = null;

//     for (const word of words) {
//       const result = fuse.search(word);
//       if (result.length > 0) {
//         foundResponse = result[0].item;
//         break;
//       }
//     }

//     if (!foundResponse) {
//       // If no specific response, check for greetings
//       for (const word of words) {
//         const result = fuseGreetings.search(word);
//         if (result.length > 0) {
//           foundResponse = result[0].item;
//           break;
//         }
//       }
//     }

//     setInput('');
//     setIsTyping(true);

//     setTimeout(() => {
//       setIsTyping(false);
//       if (foundResponse) {
//         setMessages((prev) => [
//           ...prev,
//           { from: 'bot', text: foundResponse.response },
//           ...(foundResponse.link
//             ? [{ from: 'bot', link: foundResponse.link, text: 'Go to Page' }]
//             : []),
//         ]);
//       } else {
//         setMessages((prev) => [
//           ...prev,
//           { from: 'bot', text: "I couldn't find an answer to that. Please visit our FAQ page for more information. If you can't find the information there, please contact us." },
//           { from: 'bot', link: faqPage, text: 'Go to FAQ' },
//         ]);
//       }
//     }, 1000); // Simulating bot thinking delay
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter') {
//       handleSend();
//     }
//   };

//   return (
//     <div>
//       {/* Chatbot Trigger */}
//       {!isOpen && !isMinimized && (
//         <motion.div
//           className="fixed bottom-24 right-6 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer text-lg"
//           animate={{ scale: [0, 1.2, 1] }}
//           onClick={() => setIsOpen(true)}
//         >
//           Hey, need help?
//         </motion.div>
//       )}

//       {/* Bell Icon */}
//       {!isOpen && isMinimized && (
//         <motion.div
//           className="fixed bottom-24 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer"
//           onClick={() => setIsOpen(true)}
//         >
//           🛎️
//         </motion.div>
//       )}

//       {/* Chat Window */}
//       {isOpen && (
//         <motion.div
//           className="fixed bottom-24 right-6 bg-white border rounded-lg shadow-lg w-80 h-96 flex flex-col"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.8 }}
//         >
//           {/* Header */}
//           <div className="bg-blue-500 text-white px-4 py-2 flex justify-between items-center rounded-t-lg">
//             <span className="font-bold">HelperBot</span>
//             <button
//               className="text-lg font-bold"
//               onClick={() => {
//                 setIsOpen(false);
//                 setIsMinimized(true);
//               }}
//               style={{ outline: 'none' }}
//             >
//               ✖️
//             </button>
//           </div>

//           {/* Messages */}
//           <div
//             className="flex-1 p-4 overflow-y-auto space-y-2"
//             ref={chatWindowRef}
//           >
//             {messages.map((message, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3 }}
//                 className={`${
//                   message.from === 'bot' ? 'text-left' : 'text-right'
//                 } mb-2`}
//               >
//                 {message.link ? (
//                   <span
//                     className={`inline-block px-3 py-2 rounded-lg ${
//                       message.from === 'bot'
//                         ? 'bg-gray-200 text-black'
//                         : 'bg-blue-500 text-white'
//                     }`}
//                   >
//                     <Link href={message.link} className="text-blue-500 underline">
//                       {message.text}
//                     </Link>
//                   </span>
//                 ) : (
//                   <span
//                     className={`inline-block px-3 py-2 rounded-lg ${
//                       message.from === 'bot'
//                         ? 'bg-gray-200 text-black'
//                         : 'bg-blue-500 text-white'
//                     }`}
//                   >
//                     {message.text}
//                   </span>
//                 )}
//               </motion.div>
//             ))}

//             {/* Typing Indicator */}
//             {isTyping && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="text-left mb-2"
//               >
//                 <span className="inline-block px-3 py-2 rounded-lg bg-gray-200 text-black">
//                   <div className="flex items-center space-x-2">
//                     <div className="dot-flashing"></div>
//                     <span>HelperBot is typing...</span>
//                   </div>
//                 </span>
//               </motion.div>
//             )}
//           </div>

//           {/* Input */}
//           <div className="border-t p-2 flex text-black">
//             <input
//               type="text"
//               className="flex-1 px-3 py-2 border rounded-lg focus:outline-none"
//               placeholder="Type your message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleKeyDown} // Trigger send on Enter
//             />
//             <button
//               className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-lg"
//               onClick={handleSend}
//             >
//               Send
//             </button>
//           </div>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;

"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Fuse from "fuse.js";
import Link from "next/link";

type Message = {
  from: string;
  text: string;
  link?: string; // Optional link property
};

const faqPage = "/faq";

const botKnowledge = [
  {
    keywords: ["contact", "support", "help"],
    response: "You can reach out to our support team via the Contact Us page.",
    link: "/dashboard/pages/contactus/generalinquiry",
  },
  {
    keywords: ["faq", "questions"],
    response: "Visit our FAQ page to find answers to commonly asked questions.",
    link: "/dashboard/pages/resources/faq",
  },
  {
    keywords: [
      "course",
      "training",
      "asbestos",
      "lead",
      "mold",
      "worker safety",
    ],
    response: "Explore all our courses on the training page.",
    link: "/dashboard/pages/alltraining",
  },
  {
    keywords: ["schedule", "calendar"],
    response: "You can view our course schedule on the Calendar page.",
    link: "/dashboard/pages/calendar",
  },
  {
    keywords: ["location", "address"],
    response:
      "We are located at 15200 Grevillea Ave, Ste A-2, Lawndale, CA, 90260.",
    link: null,
  },

  {
    keywords: ["contact", "support", "help"],
    response: "You can reach out to our support team via the Contact Us page.",
    link: "/dashboard/pages/contactus/generalinquiry",
  },
  {
    keywords: ["faq", "questions"],
    response: "Visit our FAQ page to find answers to commonly asked questions.",
    link: "/dashboard/pages/resources/faq",
  },
  {
    keywords: [
      "course",
      "training",
      "asbestos",
      "lead",
      "mold",
      "worker safety",
    ],
    response: "Explore all our courses on the training page.",
    link: "/dashboard/pages/alltraining",
  },
  {
    keywords: ["schedule", "calendar"],
    response: "You can view our course schedule on the Calendar page.",
    link: "/dashboard/pages/calendar",
  },
  {
    keywords: ["location", "address"],
    response:
      "We are located at 15200 Grevillea Ave, Ste A-2, Lawndale, CA, 90260.",
    link: null,
  },
  {
    keywords: [
      "asbestos worker initial",
      "32 hour asbestos",
      "asbestos training",
    ],
    response: "Learn more about the 32-hour Asbestos Worker (Initial) course.",
    link: "/dashboard/pages/training/asbestos/course-1",
  },
  {
    keywords: [
      "asbestos refresher",
      "8 hour asbestos",
      "renew asbestos certification",
    ],
    response:
      "Renew your certification with the Asbestos Worker Refresher course.",
    link: "/dashboard/pages/training/asbestos/course-2",
  },
  {
    keywords: [
      "contractor supervisor initial",
      "40 hour supervisor",
      "contractor asbestos training",
    ],
    response:
      "Check out the AHERA Contractor/Supervisor (Initial) - 40 Hour Course.",
    link: "/dashboard/pages/training/asbestos/course-3",
  },
  {
    keywords: [
      "contractor supervisor refresher",
      "renew supervisor certification",
    ],
    response:
      "Renew your certification with the AHERA Contractor/Supervisor Refresher course.",
    link: "/dashboard/pages/training/asbestos/course-4",
  },
  {
    keywords: [
      "building inspector initial",
      "24 hour inspector",
      "asbestos inspector training",
    ],
    response:
      "Learn about the AHERA Building Inspector (Initial) - 24 Hour Course.",
    link: "/dashboard/pages/training/asbestos/course-5",
  },
  {
    keywords: ["building inspector refresher", "renew inspector certification"],
    response:
      "Refresh your certification with the AHERA Building Inspector Refresher course.",
    link: "/dashboard/pages/training/asbestos/course-6",
  },
  {
    keywords: ["lead sample technician", "8 hour lead", "lead certification"],
    response:
      "Become certified with the CDPH Lead Sample Technician (Initial) course.",
    link: "/dashboard/pages/training/lead/course-1",
  },
  {
    keywords: ["mold sampling", "16 hour mold", "mold certification"],
    response: "Explore the Introduction to Mold Sampling - 16 Hour Course.",
    link: "/dashboard/pages/training/mold/course-1",
  },
  {
    keywords: ["niosh 582", "air sampling", "analytical course"],
    response: "Learn about the NIOSH 582 Equivalency Course - 32 Hours.",
    link: "/dashboard/pages/training/analytical/course-1",
  },
  {
    keywords: [
      "introduction plm analysis",
      "polarized light microscopy",
      "analytical training",
    ],
    response: "Discover the Introduction to PLM Analysis - 40 Contact Hours.",
    link: "/dashboard/pages/training/analytical/course-2",
  },
  {
    keywords: [
      "advanced plm analysis",
      "16 hour plm",
      "advanced analytical course",
    ],
    response:
      "Advance your skills with the Advanced Asbestos PLM Analysis - 16 Hours.",
    link: "/dashboard/pages/training/analytical/course-3",
  },
  {
    keywords: ["bloodborne pathogens", "infectious materials training"],
    response: "Learn workplace safety with the Bloodborne Pathogens course.",
    link: "/dashboard/pages/training/workersafety/bloodbornepathogens",
  },
  {
    keywords: [
      "confined spaces",
      "osha confined spaces",
      "confined space safety",
    ],
    response: "Understand OSHA standards with the Confined Spaces course.",
    link: "/dashboard/pages/training/workersafety/confinedspaces",
  },
  {
    keywords: ["lock out tag out", "hazardous energy", "osha loto training"],
    response: "Master OSHA’s standards with the Lock Out, Tag Out course.",
    link: "/dashboard/pages/training/workersafety/lockouttagout",
  },
  {
    keywords: ["calendar courses", "upcoming classes", "schedule courses"],
    response: "View upcoming courses and their schedules on the Calendar page.",
    link: "/dashboard/pages/calendar",
  },
  {
    keywords: ["resources", "professional resources", "exam dates"],
    response: "Access professional resources and exam dates.",
    link: "/dashboard/pages/resources/professionalresources",
  },
  {
    keywords: [
      "certification renewal",
      "refresher courses",
      "renew certifications",
    ],
    response: "Renew your certifications with our refresher courses.",
    link: "/dashboard/pages/alltraining",
  },
  {
    keywords: ["first aid", "cpr aed", "emergency response training"],
    response: "Get trained in CPR, AED, & First Aid.",
    link: "/dashboard/pages/training/cpraedfirstaid",
  },
  {
    keywords: ["hazwoper", "hazardous waste training"],
    response:
      "Learn about Hazardous Waste Operations with the HAZWOPER course.",
    link: "/dashboard/pages/training/hazwoper",
  },
  {
    keywords: ["about aehs", "instructors", "accreditation"],
    response: "Learn about AEHS, our instructors, and accreditations.",
    link: "/dashboard/pages/about/aehsinfo",
  },
  {
    keywords: ["lawndale location", "address aehs", "training center address"],
    response: "Our training center is in Lawndale, CA.",
    link: null,
  },
  {
    keywords: ["support email", "aehs email"],
    response: "Email us at info@pinnaclelab.com for assistance.",
    link: null,
  },
  {
    keywords: ["phone number", "contact phone", "aehs phone"],
    response: "Call us at (310) 400-6153 for more information.",
    link: null,
  },
  {
    keywords: ["review aehs", "google review", "leave feedback"],
    response: "We value your feedback! Leave a review on Google.",
    link: "https://g.page/r/Ceh4qq4FerBXEBM/review",
  },

  {
    keywords: ["ahera worker", "ahera training", "asbestos worker training"],
    response: "Learn about the AHERA Worker (Initial) - 32 Hour Course.",
    link: "/dashboard/pages/training/asbestos/course-1",
  },
  {
    keywords: [
      "asbestos contractor supervisor",
      "40 hour contractor",
      "ahera contractor training",
    ],
    response:
      "Learn about the AHERA Contractor/Supervisor (Initial) - 40 Hour Course.",
    link: "/dashboard/pages/training/asbestos/course-3",
  },
  {
    keywords: ["cal/osha asbestos exam", "certified asbestos consultant exam"],
    response: "Prepare for the Cal/OSHA Certified Asbestos Consultant Exam.",
    link: "/dashboard/pages/resources/professionalresources",
  },
  {
    keywords: ["asbestos refresher certification", "renew asbestos worker"],
    response:
      "Renew your certification with our Asbestos Worker Refresher course.",
    link: "/dashboard/pages/training/asbestos/course-2",
  },
  {
    keywords: ["mold sampling training", "16 hour mold training"],
    response: "Learn about our 16-hour Introduction to Mold Sampling course.",
    link: "/dashboard/pages/training/mold/course-1",
  },
  {
    keywords: [
      "bloodborne pathogens training",
      "osha bloodborne",
      "infectious disease training",
    ],
    response: "Explore our Bloodborne Pathogens training for workplace safety.",
    link: "/dashboard/pages/training/workersafety/bloodbornepathogens",
  },
  {
    keywords: [
      "lockout tagout",
      "osha loto",
      "hazardous energy control training",
    ],
    response: "Learn about our OSHA-compliant Lockout/Tagout training.",
    link: "/dashboard/pages/training/workersafety/lockouttagout",
  },
  {
    keywords: ["confined space training", "confined space osha course"],
    response: "Take our Confined Spaces course to comply with OSHA standards.",
    link: "/dashboard/pages/training/workersafety/confinedspaces",
  },
  {
    keywords: ["lead sample technician course", "cdph lead training"],
    response: "Enroll in our CDPH Lead Sample Technician (Initial) course.",
    link: "/dashboard/pages/training/lead/course-1",
  },
  {
    keywords: ["plm analysis course", "polarized light microscopy training"],
    response: "Check out our Introduction to PLM Analysis course.",
    link: "/dashboard/pages/training/analytical/course-2",
  },
  {
    keywords: ["ahera project designer", "asbestos project designer course"],
    response: "Explore our AHERA Project Designer training program.",
    link: "/dashboard/pages/training/asbestos/course-7",
  },
  {
    keywords: ["ahera inspector refresher", "renew building inspector"],
    response:
      "Renew your certification with our AHERA Building Inspector Refresher course.",
    link: "/dashboard/pages/training/asbestos/course-6",
  },
  {
    keywords: ["cpr aed certification", "first aid training"],
    response: "Get certified in CPR, AED, and First Aid.",
    link: "/dashboard/pages/training/cpraedfirstaid",
  },
  {
    keywords: ["hazwoper certification", "hazardous waste operations"],
    response:
      "Learn about Hazardous Waste Operations with our HAZWOPER course.",
    link: "/dashboard/pages/training/hazwoper",
  },
  {
    keywords: ["exam dates", "professional certification exams"],
    response: "View upcoming exam dates on our resources page.",
    link: "/dashboard/pages/resources/professionalresources",
  },
  {
    keywords: ["contact instructors", "reach out instructors"],
    response: "Learn more about our instructors on the About Us page.",
    link: "/dashboard/pages/about/instructorprofiles",
  },
  {
    keywords: [
      "asbestos certification requirements",
      "cac requirements",
      "csst requirements",
    ],
    response:
      "Review the requirements to become a Certified Asbestos Consultant (CAC) or CSST.",
    link: "/dashboard/pages/resources/faq",
  },
  {
    keywords: ["accreditation", "certifications aehs", "approved training"],
    response: "Learn about our accreditations and approvals.",
    link: "/dashboard/pages/about/accreditation",
  },
  {
    keywords: ["course calendar", "training schedule", "class dates"],
    response: "Check out our course calendar for upcoming training dates.",
    link: "/dashboard/pages/calendar",
  },
  {
    keywords: [
      "professional resources",
      "helpful resources",
      "exam preparation",
    ],
    response: "Visit our Professional Resources page for more information.",
    link: "/dashboard/pages/resources/professionalresources",
  },
  {
    keywords: ["asbestos safety", "asbestos dangers", "asbestos information"],
    response: "Learn about asbestos safety and its health impacts.",
    link: "/dashboard/pages/resources/professionalresources",
  },
  {
    keywords: ["renew certification", "certification renewal courses"],
    response:
      "Renew your certifications by enrolling in our refresher courses.",
    link: "/dashboard/pages/alltraining",
  },
  {
    keywords: ["lawndale california training", "15200 grevillea ave"],
    response: "Our training center is located in Lawndale, CA.",
    link: null,
  },
  {
    keywords: ["support", "customer service", "contact email"],
    response: "You can email us at info@pinnaclelab.com for support.",
    link: null,
  },
  {
    keywords: ["phone number", "call aehs", "training center phone"],
    response: "Call us at (310) 400-6153 for inquiries.",
    link: null,
  },
  {
    keywords: ["training cost", "course fees", "pricing information"],
    response: "Check out the course details for pricing information.",
    link: "/dashboard/pages/alltraining",
  },
  {
    keywords: ["google review", "review aehs", "feedback"],
    response: "We value your feedback! Leave us a review on Google.",
    link: "https://g.page/r/Ceh4qq4FerBXEBM/review",
  },
  {
    keywords: ["facebook page", "social media", "aehs facebook"],
    response: "Visit our Facebook page to stay updated.",
    link: "https://www.facebook.com/profile.php?id=61567087595623",
  },
  {
    keywords: ["linkedin", "linkedin profile", "professional network"],
    response: "Connect with us on LinkedIn for updates and news.",
    link: "https://www.linkedin.com",
  },
  {
    keywords: ["twitter", "x profile", "aehs updates"],
    response: "Follow us on Twitter for updates.",
    link: "https://x.com/AEHS_Training",
  },
  {
    keywords: ["instagram", "social media", "training updates"],
    response: "Check out our Instagram for training updates and more.",
    link: "https://www.instagram.com/aehstraining/",
  },

  {
    keywords: ["upcoming courses", "training dates", "class schedule"],
    response: "Check the latest schedule for our upcoming courses.",
    link: "/dashboard/pages/calendar",
  },
  {
    keywords: ["ahera management planner", "asbestos planner training"],
    response: "Learn about the AHERA Management Planner course.",
    link: "/dashboard/pages/training/asbestos/course-7",
  },
  {
    keywords: ["project designer asbestos", "asbestos design training"],
    response: "Explore the AHERA Project Designer course.",
    link: "/dashboard/pages/training/asbestos/course-8",
  },
  {
    keywords: ["certified asbestos consultant", "cal/osha exam preparation"],
    response: "Prepare for the Cal/OSHA Certified Asbestos Consultant Exam.",
    link: "/dashboard/pages/resources/professionalresources",
  },
  {
    keywords: ["california asbestos training", "asbestos certifications"],
    response:
      "Discover our California-approved asbestos certification programs.",
    link: "/dashboard/pages/training/asbestos",
  },
  {
    keywords: [
      "lead worker training",
      "lead safety training",
      "cdph lead technician",
    ],
    response: "Learn more about our CDPH Lead Sample Technician course.",
    link: "/dashboard/pages/training/lead/course-1",
  },
  {
    keywords: ["mold certification", "mold sampling training", "16-hour mold"],
    response: "Check out the Introduction to Mold Sampling course.",
    link: "/dashboard/pages/training/mold/course-1",
  },
  {
    keywords: ["bloodborne pathogens online", "osha safety training"],
    response: "Enroll in our OSHA-compliant Bloodborne Pathogens course.",
    link: "/dashboard/pages/training/workersafety/bloodbornepathogens",
  },
  {
    keywords: ["osha confined space", "confined space certification"],
    response: "Learn more about our OSHA Confined Spaces course.",
    link: "/dashboard/pages/training/workersafety/confinedspaces",
  },
  {
    keywords: ["loto training", "lock out tag out certification"],
    response: "Understand OSHA standards with our Lock Out, Tag Out course.",
    link: "/dashboard/pages/training/workersafety/lockouttagout",
  },
  {
    keywords: ["first aid training", "cpr and aed courses"],
    response: "Get certified in CPR, AED, and First Aid.",
    link: "/dashboard/pages/training/cpraedfirstaid",
  },
  {
    keywords: ["hazwoper certification", "hazardous waste training"],
    response: "Explore Hazardous Waste Operations with our HAZWOPER course.",
    link: "/dashboard/pages/training/hazwoper",
  },
  {
    keywords: ["niosh 582 equivalency", "analytical air sampling"],
    response: "Check out our NIOSH 582 Equivalency Course.",
    link: "/dashboard/pages/training/analytical/course-1",
  },
  {
    keywords: ["plm analysis", "advanced asbestos training"],
    response: "Explore our PLM Analysis courses for advanced training.",
    link: "/dashboard/pages/training/analytical",
  },
  {
    keywords: ["certification renewal", "refresher courses"],
    response: "Keep your certifications current with our refresher courses.",
    link: "/dashboard/pages/alltraining",
  },
  {
    keywords: ["asbestos safety course", "ahera safety training"],
    response: "Learn about asbestos safety with our AHERA courses.",
    link: "/dashboard/pages/training/asbestos",
  },
  {
    keywords: ["worker safety courses", "online safety training"],
    response: "Explore our Worker Safety courses available online.",
    link: "/dashboard/pages/training/workersafety",
  },
  {
    keywords: ["training resources", "helpful links"],
    response: "Access our resources for professional development.",
    link: "/dashboard/pages/resources/professionalresources",
  },
  {
    keywords: ["location aehs", "training address"],
    response: "Visit us at 15200 Grevillea Ave, Ste A-2, Lawndale, CA.",
    link: null,
  },
  {
    keywords: ["email support", "contact email"],
    response: "Email us at info@pinnaclelab.com for assistance.",
    link: null,
  },
  {
    keywords: ["phone contact", "call aehs"],
    response: "Call us at (310) 400-6153 for more information.",
    link: null,
  },
  {
    keywords: ["leave review", "feedback", "google reviews"],
    response: "We value your feedback! Leave us a review on Google.",
    link: "https://g.page/r/Ceh4qq4FerBXEBM/review",
  },
  {
    keywords: ["facebook updates", "aehs facebook page"],
    response: "Follow us on Facebook for updates and news.",
    link: "https://www.facebook.com/profile.php?id=61567087595623",
  },
  {
    keywords: ["linkedin profile", "aehs linkedin"],
    response: "Connect with us on LinkedIn for professional updates.",
    link: "https://www.linkedin.com",
  },
  {
    keywords: ["aehs twitter", "training updates"],
    response: "Follow us on Twitter for the latest updates.",
    link: "https://x.com/AEHS_Training",
  },
  {
    keywords: ["instagram training updates", "social media"],
    response: "Check out our Instagram for training highlights.",
    link: "https://www.instagram.com/aehstraining/",
  },
  {
    keywords: ["certified instructor profiles", "meet trainers"],
    response:
      "Learn about our certified trainers on the Instructor Profiles page.",
    link: "/dashboard/pages/about/instructorprofiles",
  },
  {
    keywords: ["training center details", "certified training"],
    response: "Visit our About Us page to learn about our training center.",
    link: "/dashboard/pages/about/aehsinfo",
  },
  {
    keywords: ["asbestos consultant certification", "california asbestos exam"],
    response: "Prepare for the California Certified Asbestos Consultant Exam.",
    link: "/dashboard/pages/resources/faq",
  },
  {
    keywords: ["accreditation", "certified courses"],
    response: "Review our accreditations and certifications.",
    link: "/dashboard/pages/about/accreditation",
  },
  {
    keywords: ["course duration", "course timing"],
    response:
      "Find the duration and timing for each course on our All Courses page.",
    link: "/dashboard/pages/alltraining",
  },
  {
    keywords: ["asbestos supervisor", "supervisor certification"],
    response: "Check out the AHERA Contractor/Supervisor courses.",
    link: "/dashboard/pages/training/asbestos/course-3",
  },
  {
    keywords: ["training packages", "course bundles"],
    response: "Learn more about our bundled course options.",
    link: "/dashboard/pages/alltraining",
  },
  {
    keywords: ["niosh analytical training", "advanced niosh course"],
    response: "Explore our advanced analytical courses, including NIOSH 582.",
    link: "/dashboard/pages/training/analytical/course-1",
  },
  {
    keywords: ["calendar view", "class schedules"],
    response: "Check out our Calendar page for upcoming schedules.",
    link: "/dashboard/pages/calendar",
  },
  {
    keywords: ["resources for certification", "helpful certification links"],
    response: "Access resources to prepare for certification exams.",
    link: "/dashboard/pages/resources/professionalresources",
  },
  {
    keywords: ["asbestos certification courses", "asbestos training details"],
    response: "View detailed information about our asbestos courses.",
    link: "/dashboard/pages/training/asbestos",
  },

  {
    keywords: [
      "asbestos worker initial",
      "32-hour asbestos",
      "ahera asbestos training",
    ],
    response:
      "Learn about our AHERA Asbestos Worker (Initial) - 32 Hour Course.",
    link: "/dashboard/pages/training/asbestos/course-1",
  },
  {
    keywords: ["ahera asbestos refresher", "renew asbestos certification"],
    response:
      "Renew your certification with the Asbestos Worker Refresher - 8 Hour Course.",
    link: "/dashboard/pages/training/asbestos/course-2",
  },
  {
    keywords: ["contractor supervisor asbestos", "ahera supervisor initial"],
    response:
      "Check out our AHERA Contractor/Supervisor (Initial) - 40 Hour Course.",
    link: "/dashboard/pages/training/asbestos/course-3",
  },
  {
    keywords: ["contractor supervisor refresher", "supervisor renewal course"],
    response:
      "Renew your certification with the AHERA Contractor/Supervisor Refresher - 8 Hour Course.",
    link: "/dashboard/pages/training/asbestos/course-4",
  },
  {
    keywords: ["asbestos inspector training", "24-hour building inspector"],
    response:
      "Learn more about the AHERA Building Inspector (Initial) - 24 Hour Course.",
    link: "/dashboard/pages/training/asbestos/course-5",
  },
  {
    keywords: ["building inspector refresher", "renew inspector certification"],
    response:
      "Renew your certification with the AHERA Building Inspector Refresher - 4 Hour Course.",
    link: "/dashboard/pages/training/asbestos/course-6",
  },
  {
    keywords: ["plm analysis course", "polarized light microscopy training"],
    response: "Discover the Introduction to PLM Analysis - 40 Contact Hours.",
    link: "/dashboard/pages/training/analytical/course-2",
  },
  {
    keywords: ["advanced plm analysis", "asbestos plm techniques"],
    response:
      "Advance your skills with the Advanced Asbestos PLM Analysis - 16 Contact Hours.",
    link: "/dashboard/pages/training/analytical/course-3",
  },
  {
    keywords: ["niosh 582 equivalency", "air sampling course"],
    response: "Learn about our NIOSH 582 Equivalency Course - 32 Hours.",
    link: "/dashboard/pages/training/analytical/course-1",
  },
  {
    keywords: ["mold sampling training", "mold certification course"],
    response: "Explore our Introduction to Mold Sampling - 16 Hour Course.",
    link: "/dashboard/pages/training/mold/course-1",
  },
  {
    keywords: ["lead sample technician", "cdph lead training"],
    response:
      "Become certified with the CDPH Lead Sample Technician (Initial) - 8 Hour Course.",
    link: "/dashboard/pages/training/lead/course-1",
  },
  {
    keywords: ["cpr training", "aed certification", "first aid course"],
    response: "Get certified in CPR, AED, and First Aid with our courses.",
    link: "/dashboard/pages/training/cpraedfirstaid",
  },
  {
    keywords: ["bloodborne pathogens", "osha safety training"],
    response: "Enroll in our OSHA-compliant Bloodborne Pathogens course.",
    link: "/dashboard/pages/training/workersafety/bloodbornepathogens",
  },
  {
    keywords: ["confined space training", "osha confined spaces"],
    response: "Understand OSHA standards with our Confined Spaces training.",
    link: "/dashboard/pages/training/workersafety/confinedspaces",
  },
  {
    keywords: ["lockout tagout training", "osha loto standards"],
    response: "Master OSHA's standards with our Lockout/Tagout course.",
    link: "/dashboard/pages/training/workersafety/lockouttagout",
  },
  {
    keywords: ["calendar of courses", "schedule training"],
    response: "View upcoming training schedules on our Calendar page.",
    link: "/dashboard/pages/calendar",
  },
  {
    keywords: ["hazwoper certification", "hazardous waste operations"],
    response: "Learn about our Hazardous Waste Operations (HAZWOPER) training.",
    link: "/dashboard/pages/training/hazwoper",
  },
  {
    keywords: ["training resources", "certification preparation"],
    response:
      "Access our resources for professional development and certification preparation.",
    link: "/dashboard/pages/resources/professionalresources",
  },
  {
    keywords: ["exam dates", "certification exams"],
    response: "Find information about upcoming certification exams.",
    link: "/dashboard/pages/resources/professionalresources",
  },
  {
    keywords: ["aehs instructors", "trainer profiles"],
    response:
      "Learn about our certified trainers on the Instructor Profiles page.",
    link: "/dashboard/pages/about/instructorprofiles",
  },
  {
    keywords: ["aehs location", "lawndale training center"],
    response: "Our training center is located in Lawndale, CA.",
    link: null,
  },
  {
    keywords: ["email aehs", "contact support"],
    response: "Email us at info@pinnaclelab.com for assistance.",
    link: null,
  },
  {
    keywords: ["phone contact", "call training center"],
    response: "Call us at (310) 400-6153 for inquiries.",
    link: null,
  },
  {
    keywords: ["feedback", "google review", "leave a review"],
    response: "We value your feedback! Leave us a review on Google.",
    link: "https://g.page/r/Ceh4qq4FerBXEBM/review",
  },
  {
    keywords: ["social media", "facebook page", "aehs updates"],
    response: "Follow us on Facebook for updates and news.",
    link: "https://www.facebook.com/profile.php?id=61567087595623",
  },
  {
    keywords: ["linkedin profile", "connect on linkedin"],
    response: "Connect with us on LinkedIn for professional updates.",
    link: "https://www.linkedin.com",
  },
  {
    keywords: ["twitter updates", "aehs twitter"],
    response: "Follow us on Twitter for the latest updates.",
    link: "https://x.com/AEHS_Training",
  },
  {
    keywords: ["instagram updates", "training photos"],
    response: "Check out our Instagram for training highlights and updates.",
    link: "https://www.instagram.com/aehstraining/",
  },
  {
    keywords: ["certification requirements", "asbestos certification"],
    response: "Learn about the requirements for asbestos certification.",
    link: "/dashboard/pages/resources/faq",
  },
  {
    keywords: ["accreditation", "certified courses", "aehs approval"],
    response: "Review our accreditations and certifications.",
    link: "/dashboard/pages/about/accreditation",
  },
  {
    keywords: ["resources page", "exam prep"],
    response:
      "Visit our Professional Resources page for helpful links and study guides.",
    link: "/dashboard/pages/resources/professionalresources",
  },
  {
    keywords: ["course fees", "training costs"],
    response: "Find pricing and fees for our courses on the All Training page.",
    link: "/dashboard/pages/alltraining",
  },
  {
    keywords: ["renew certifications", "refresher courses"],
    response: "Keep your certifications current with our refresher courses.",
    link: "/dashboard/pages/alltraining",
  },
  {
    keywords: ["upcoming courses", "training schedule"],
    response: "Check out our training calendar for upcoming courses.",
    link: "/dashboard/pages/calendar",
  },

  {
    keywords: ["ahera worker training", "asbestos worker initial course"],
    response:
      "Explore the AHERA Worker (Initial) - 32 Hour Course for asbestos training.",
    link: "/dashboard/pages/training/asbestos/course-1",
  },
  {
    keywords: [
      "asbestos refresher training",
      "renew asbestos worker certification",
    ],
    response:
      "Renew your asbestos certification with the Asbestos Worker Refresher - 8 Hour Course.",
    link: "/dashboard/pages/training/asbestos/course-2",
  },
  {
    keywords: ["supervisor asbestos training", "ahera contractor course"],
    response:
      "Learn about the AHERA Contractor/Supervisor (Initial) - 40 Hour Course.",
    link: "/dashboard/pages/training/asbestos/course-3",
  },
  {
    keywords: ["supervisor refresher asbestos", "contractor refresher course"],
    response:
      "Refresh your certification with the AHERA Contractor/Supervisor Refresher - 8 Hour Course.",
    link: "/dashboard/pages/training/asbestos/course-4",
  },
  {
    keywords: ["building inspector course", "ahera inspector training"],
    response:
      "Learn about the AHERA Building Inspector (Initial) - 24 Hour Course.",
    link: "/dashboard/pages/training/asbestos/course-5",
  },
  {
    keywords: ["building inspector refresher", "renew inspector training"],
    response:
      "Refresh your certification with the AHERA Building Inspector Refresher - 4 Hour Course.",
    link: "/dashboard/pages/training/asbestos/course-6",
  },
  {
    keywords: ["lead technician training", "cdph lead certification"],
    response:
      "Learn about the CDPH Lead Sample Technician (Initial) - 8 Hour Course.",
    link: "/dashboard/pages/training/lead/course-1",
  },
  {
    keywords: ["mold training course", "16-hour mold sampling course"],
    response: "Explore the Introduction to Mold Sampling - 16 Hour Course.",
    link: "/dashboard/pages/training/mold/course-1",
  },
  {
    keywords: ["niosh 582 course", "air sampling training"],
    response: "Check out the NIOSH 582 Equivalency Course - 32 Hours.",
    link: "/dashboard/pages/training/analytical/course-1",
  },
  {
    keywords: ["plm analysis training", "advanced asbestos plm analysis"],
    response: "Discover the Advanced Asbestos PLM Analysis - 16 Contact Hours.",
    link: "/dashboard/pages/training/analytical/course-3",
  },
  {
    keywords: ["cpr first aid certification", "aed training course"],
    response: "Get certified with our CPR, AED, and First Aid courses.",
    link: "/dashboard/pages/training/cpraedfirstaid",
  },
  {
    keywords: ["osha bloodborne pathogens", "pathogen safety training"],
    response: "Learn workplace safety with our Bloodborne Pathogens course.",
    link: "/dashboard/pages/training/workersafety/bloodbornepathogens",
  },
  {
    keywords: ["confined spaces training", "osha confined space certification"],
    response: "Understand OSHA standards with the Confined Spaces course.",
    link: "/dashboard/pages/training/workersafety/confinedspaces",
  },
  {
    keywords: ["lockout tagout training", "osha loto training"],
    response: "Master OSHA's Lockout/Tagout standards with our training.",
    link: "/dashboard/pages/training/workersafety/lockouttagout",
  },
  {
    keywords: ["hazwoper training", "hazardous waste certification"],
    response:
      "Learn about hazardous waste operations with our HAZWOPER course.",
    link: "/dashboard/pages/training/hazwoper",
  },
  {
    keywords: ["professional resources", "certification study resources"],
    response: "Access resources for professional certification preparation.",
    link: "/dashboard/pages/resources/professionalresources",
  },
  {
    keywords: ["exam dates", "certification exam schedules"],
    response: "View upcoming exam dates on the Professional Resources page.",
    link: "/dashboard/pages/resources/professionalresources",
  },
  {
    keywords: [
      "asbestos consultant certification",
      "ahera consultant training",
    ],
    response: "Prepare for the Certified Asbestos Consultant exam.",
    link: "/dashboard/pages/resources/faq",
  },
  {
    keywords: ["calendar courses", "training schedule"],
    response: "Check the Calendar page for upcoming course schedules.",
    link: "/dashboard/pages/calendar",
  },
  {
    keywords: ["aehs instructors", "meet trainers"],
    response:
      "Learn about our certified trainers on the Instructor Profiles page.",
    link: "/dashboard/pages/about/instructorprofiles",
  },
  {
    keywords: ["aehs location", "lawndale address"],
    response: "Visit us at 15200 Grevillea Ave, Ste A-2, Lawndale, CA.",
    link: null,
  },
  {
    keywords: ["email contact", "customer support email"],
    response: "Email us at info@pinnaclelab.com for support.",
    link: null,
  },
  {
    keywords: ["phone contact", "call support"],
    response: "Reach us at (310) 400-6153 for inquiries.",
    link: null,
  },
  {
    keywords: ["google reviews", "leave feedback"],
    response: "We value your feedback! Leave a review on Google.",
    link: "https://g.page/r/Ceh4qq4FerBXEBM/review",
  },
  {
    keywords: ["facebook updates", "aehs facebook"],
    response: "Follow us on Facebook for updates and news.",
    link: "https://www.facebook.com/profile.php?id=61567087595623",
  },
  {
    keywords: ["linkedin page", "aehs linkedin profile"],
    response: "Connect with us on LinkedIn for updates.",
    link: "https://www.linkedin.com",
  },
  {
    keywords: ["twitter updates", "aehs twitter"],
    response: "Follow us on Twitter for the latest updates.",
    link: "https://x.com/AEHS_Training",
  },
  {
    keywords: ["instagram training", "social media updates"],
    response: "Check out our Instagram for training photos and updates.",
    link: "https://www.instagram.com/aehstraining/",
  },
  {
    keywords: ["accreditation details", "approved training programs"],
    response: "Learn about our accreditations and approved training programs.",
    link: "/dashboard/pages/about/accreditation",
  },
  {
    keywords: ["course fees", "training cost"],
    response: "Find detailed pricing for our courses on the All Courses page.",
    link: "/dashboard/pages/alltraining",
  },
  {
    keywords: ["renew certification", "refresher courses available"],
    response: "Stay certified with our refresher courses.",
    link: "/dashboard/pages/alltraining",
  },
  {
    keywords: ["calendar courses", "view training schedule"],
    response: "View upcoming courses on our Calendar page.",
    link: "/dashboard/pages/calendar",
  },
  {
    keywords: ["resources", "helpful links for certifications"],
    response: "Access helpful links on our Professional Resources page.",
    link: "/dashboard/pages/resources/professionalresources",
  },
  {
    keywords: ["asbestos safety", "asbestos health risks"],
    response: "Learn about asbestos safety on our Professional Resources page.",
    link: "/dashboard/pages/resources/professionalresources",
  },
  {
    keywords: ["worker safety training", "online worker courses"],
    response: "Explore online worker safety courses available at AEHS.",
    link: "/dashboard/pages/training/workersafety",
  },
  {
    keywords: ["about aehs", "training overview"],
    response: "Learn about AEHS and what we offer on the About Us page.",
    link: "/dashboard/pages/about/aehsinfo",
  },
];

// Set up Fuse.js with the correct data
const fuse = new Fuse(botKnowledge, {
  keys: ["keywords"],
  threshold: 0.2,
  distance: 100,
  minMatchCharLength: 2,
  ignoreLocation: true,
});

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: 'bot', text: "Hi! I'm Alex. How can I assist you?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Split user input into individual words
    // Define the type for Fuse search result
    type FuseItem = {
      keywords: string[];
      response: string;
      link: string | null;
    };

    const words = input.toLowerCase().split(/\s+/);
    let foundResponse: FuseItem | null = null;

    // Check for greeting keywords
    const greetingKeywords = ["hi', 'hello', 'hey', 'howdy', 'what’s up"];
    const hasGreeting = words.some((word) => greetingKeywords.includes(word));

    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);

      // Search for specific keywords using fuzzy matching
      // Search for specific keywords using fuzzy matching
      for (const word of words) {
        const result = fuse.search(word);
        if (result.length > 0) {
          foundResponse = result[0].item as FuseItem; // Cast the result to FuseItem
          break;
        }
      }

      if (foundResponse !== null) {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: foundResponse!.response }, // Use the non-null assertion operator `!`
          ...(foundResponse!.link
            ? [{ from: "bot", link: foundResponse!.link, text: "Go to Page" }]
            : []),
        ]);
      } else if (hasGreeting) {
        // Handle greetings
        const greetingResponses = [
          "Hello there! How can I assist you today?",
          "Hi! I'm here to help. Feel free to ask me anything!",
          "Hey! What can I do for you today?",
        ];
        const randomGreeting =
          greetingResponses[
            Math.floor(Math.random() * greetingResponses.length)
          ];
        setMessages((prev) => [...prev, { from: "bot", text: randomGreeting }]);
      } else {
        // If no match at all
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text:
              "I couldn't find an answer to that. Please visit our FAQ page for more information. If you still need help, feel free to contact us directly!",
          },
          { from: "bot", link: faqPage, text: "Go to FAQ" },
        ]);
      }
    }, 1000); // Simulating bot thinking delay
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div>
      {/* Chatbot Trigger */}
      {!isOpen && !isMinimized && (
        <motion.div
          className="fixed bottom-24 right-6 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg cursor-pointer text-lg"
          animate={{ scale: [0, 1.2, 1] }}
          onClick={() => setIsOpen(true)}
        >
          Hey, I'm Alex! Need help?
        </motion.div>
      )}

      {/* Bell Icon */}
      {!isOpen && isMinimized && (
        <motion.div
          className="fixed bottom-24 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Hey, need help?
        </motion.div>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 bg-white border rounded-lg shadow-lg w-80 h-96 flex flex-col"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            {/* Header */}
            <div className="bg-blue-500 text-white px-4 py-2 flex justify-between items-center rounded-t-lg">
              <span className="font-bold">Alex, Virtual Assistant</span>
              <button
                className="text-lg font-bold"
                onClick={() => {
                  setIsOpen(false);
                  setIsMinimized(true);
                }}
              >
                ✖️
              </button>
            </div>

            {/* Messages */}
            <div
              className="flex-1 p-4 overflow-y-auto space-y-2"
              ref={chatWindowRef}
            >
{messages.map((message, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className={`${
      message.from === 'bot' ? 'text-left' : 'text-right'
    } mb-2`}
  >
    {message.link ? (
      <span
        className={`inline-block px-3 py-2 rounded-lg ${
          message.from === 'bot'
            ? 'bg-gray-200 text-black'
            : 'bg-blue-500 text-white'
        }`}
      >
        <Link href={message.link} className="text-blue-500 underline">
          {message.text}
        </Link>
      </span>
    ) : (
      <span
        className={`inline-block px-3 py-2 rounded-lg ${
          message.from === 'bot'
            ? 'bg-gray-200 text-black'
            : 'bg-blue-500 text-white'
        }`}
      >
        {message.text}
      </span>
    )}
  </motion.div>
))}


              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-left mb-2"
                >
                  <span className="inline-block px-3 py-2 rounded-lg bg-gray-200 text-black">
                    <div className="flex items-center space-x-2">
                      <div className="dot-flashing"></div>
                      <span>Alex is typing...</span>
                    </div>
                  </span>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="border-t p-2 flex text-black">
              <input
                type="text"
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown} // Trigger send on Enter
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-lg"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
