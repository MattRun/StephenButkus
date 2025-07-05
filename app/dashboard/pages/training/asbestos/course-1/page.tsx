// 'use client';
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { ArrowLeftIcon } from '@heroicons/react/24/solid';
// import { useRouter } from 'next/navigation';

// export default function Course1Page() {
//   const router = useRouter();
//   const [currentPath, setCurrentPath] = useState('');

//   // Set the current path to compare for active states
//   useEffect(() => {
//     setCurrentPath(window.location.pathname); // Update state with the current path
//   }, []);

//   // Define the course list for the sidebar
//   const asbestosCourses = [
//     { title: "AHERA Asbestos Worker", subtitle: "(Initial) - ENGLISH", path: "/dashboard/pages/training/asbestos/course-1" },
//     { title: "AHERA Asbestos Worker", subtitle: "(Initial) - Español", path: "/dashboard/pages/training/asbestos/course-7" },
//     { title: "AHERA Asbestos Worker", subtitle: "(Refresher) - ENGLISH", path: "/dashboard/pages/training/asbestos/course-2" },
//     { title: "AHERA Asbestos Worker", subtitle: "(Refresher) - Español", path: "/dashboard/pages/training/asbestos/course-8" },
//     { title: "AHERA Contractor/Supervisor", subtitle: "(Initial)", path: "/dashboard/pages/training/asbestos/course-3" },
//     { title: "AHERA Contractor/Supervisor", subtitle: "(Refresher)", path: "/dashboard/pages/training/asbestos/course-4" },
//     { title: "AHERA Building Inspector", subtitle: "(Initial)", path: "/dashboard/pages/training/asbestos/course-5" },
//     { title: "AHERA Building Inspector", subtitle: "(Refresher)", path: "/dashboard/pages/training/asbestos/course-6" },
//   ];

//   return (
//     <div className="min-h-screen flex bg-gradient-to-r from-gray-700 to-gray-900 text-white">
//       {/* Left Sidebar */}
//       <aside className="w-60 bg-gray-800 p-4 flex-shrink-0">
//         <div className="flex items-center justify-between mb-6">
//           {/* Arrow to Course Overview */}
//           <button
//             className="text-blue-400 hover:text-blue-600 transition flex items-center"
//             onClick={() => router.push('/dashboard/pages/training/asbestos/asbestoscourses')}
//           >
//             <ArrowLeftIcon className="w-5 h-5 mr-2" />
//             <span className="font-bold">Course Overview</span>
//           </button>
//         </div>
//         <h2 className="text-xl font-bold mb-6 text-center">Asbestos Courses</h2>
//         <ul className="space-y-3">
//           {asbestosCourses.map((course, index) => (
//             <li key={index}>
//               <Link href={course.path}>
//                 <motion.a
//                   className={`block px-4 py-3 text-sm rounded hover:bg-blue-600 transition ${
//                     currentPath === course.path ? 'bg-blue-600' : 'bg-gray-600'
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   <div className="font-bold">{course.title}</div>
//                   <div className="text-xs">{course.subtitle}</div>
//                 </motion.a>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-grow p-8">
//         <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
//           <h1 className="text-3xl font-bold mb-6">AHERA Asbestos Worker (Initial) - 32 Hour Course</h1>
//           <p className="text-lg mb-4">
//             This comprehensive 32-hour course is designed for individuals seeking to gain the essential skills and knowledge
//             required to work safely with asbestos in compliance with the Asbestos Hazard Emergency Response Act (AHERA).
//             Participants will explore the properties and health risks associated with asbestos exposure, learn about regulatory
//             requirements, and acquire hands-on training in safe work practices.
//           </p>
//           <h2 className="text-2xl font-semibold mb-4">Key Topics Include:</h2>
//           <ul className="list-disc list-inside mb-6">
//             <li>Understanding asbestos types and characteristics</li>
//             <li>Health effects and risks of asbestos exposure</li>
//             <li>Overview of AHERA regulations and guidelines</li>
//             <li>Use of personal protective equipment (PPE)</li>
//             <li>Emergency response procedures and best practices</li>
//           </ul>
//           <p className="text-lg mb-4">
//             Through a combination of lectures, discussions, and practical exercises, participants will develop a solid foundation
//             in asbestos safety protocols. This course is essential for workers involved in asbestos-related activities, ensuring
//             they are equipped to protect themselves and others in the workplace. This course is ideal for construction workers,
//             maintenance staff, and environmental professionals who may come into contact with asbestos materials.
//           </p>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition">
//             Sign Up
//           </button>
//         </div>
//       </main>

//       {/* Right Sidebar */}
//       <aside className="w-60 bg-gray-800 p-4 flex-shrink-0">
//         <h2 className="text-xl font-bold mb-4 text-center">Course Details</h2>
//         <div className="text-sm text-gray-300 mb-6">
//           <p className="mb-2">
//             <strong>Location:</strong> 123 Training Center, City, State
//           </p>
//           <p className="mb-2">
//             <strong>Next Session:</strong> October 15 - October 18, 2024
//           </p>
//           <p>
//             <strong>Time:</strong> 8:00 AM - 4:30 PM
//           </p>
//         </div>

//         {/* Download PDF Button */}
//         <div className="mt-6">
//           <motion.a
//             href="/path-to-course-schedule.pdf"
//             download
//             className="block w-full text-center bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
//             whileHover={{ scale: 1.05 }}
//           >
//             Download PDF Schedule
//           </motion.a>
//         </div>
//       </aside>
//     </div>
//   );
// }
'use client';

import React, { useState, useEffect } from 'react';
// import EnrollModal from '../../../auth/authenticate/EnrollModal';
// import AuthModal from '../../../auth/authenticate/AuthModal';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
// import styles from './CoursePage.module.css';
import CourseRegistration from '../../../courseregistration/CourseRegistration';

import Link from 'next/link';

export default function Course1Page() {
  const router = useRouter();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [showAuthModal, setShowAuthModal] = useState(false);
  // const [showEnrollModal, setShowEnrollModal] = useState(false);
  // const [activeTab, setActiveTab] = useState('about');
  const [currentPath, setCurrentPath] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility

  // Define course details for the current course
  const courseDetails = {
    name: 'AHERA Asbestos Worker (Initial) - 32 Hour Course',
    price: '$500',
    description:
      'This comprehensive course provides participants with an in-depth understanding of the principles and practices of industrial hygiene related to air sampling and analytical techniques.',
    location: '15200 Grevillea Ave Suite A-2, Lawndale, CA 90260',
    nextSession: 'View Calendar',
    time: 'TBD',
  };

    // Set the current path to compare for active states
    useEffect(() => {
      setCurrentPath(window.location.pathname); // Update state with the current path
    }, []);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   setIsAuthenticated(!!token);
  // }, []);

  // const handleEnrollClick = () => {
  //   if (isAuthenticated) {
  //     setShowEnrollModal(true);
  //   } else {
  //     setShowAuthModal(true);
  //   }
  // };

  const asbestosCourses = [
    { title: "AHERA Asbestos Worker", subtitle: "(Initial) - ENGLISH", path: "/dashboard/pages/training/asbestos/course-1" },
    { title: "AHERA Asbestos Worker", subtitle: "(Initial) - Español", path: "/dashboard/pages/training/asbestos/course-7" },
    { title: "AHERA Asbestos Worker", subtitle: "(Refresher) - ENGLISH", path: "/dashboard/pages/training/asbestos/course-2" },
    { title: "AHERA Asbestos Worker", subtitle: "(Refresher) - Español", path: "/dashboard/pages/training/asbestos/course-8" },
    { title: "AHERA Contractor/Supervisor", subtitle: "(Initial)", path: "/dashboard/pages/training/asbestos/course-3" },
    { title: "AHERA Contractor/Supervisor", subtitle: "(Refresher)", path: "/dashboard/pages/training/asbestos/course-4" },
    { title: "AHERA Building Inspector", subtitle: "(Initial)", path: "/dashboard/pages/training/asbestos/course-5" },
    { title: "AHERA Building Inspector", subtitle: "(Refresher)", path: "/dashboard/pages/training/asbestos/course-6" },
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-gray-700 to-gray-900 text-white">
      {/* Left Sidebar */}
      <aside className="w-60 bg-gray-800 p-4 flex-shrink-0">
        <div className="flex items-center justify-between mb-6">
          <button
            className="text-blue-400 hover:text-blue-600 transition flex items-center"
            onClick={() => router.push('/dashboard/pages/training/asbestos/asbestoscourses')}
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            <span className="font-bold">Course Overview</span>
          </button>
        </div>
        <h2 className="text-xl font-bold mb-6 text-center">Asbestos Courses</h2>
        <ul className="space-y-3">
          {asbestosCourses.map((course, index) => (
            <li key={index}>
              <motion.a
                href={course.path}
                className="block px-4 py-3 text-sm rounded hover:bg-blue-600 transition bg-gray-600"
                whileHover={{ scale: 1.05 }}
              >
                <div className="font-bold">{course.title}</div>
                <div className="text-xs">{course.subtitle}</div>
              </motion.a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6">AHERA Asbestos Worker (Initial) - 32 Hour Course</h1>
          <p className="text-lg mb-4">Instructor: Certified Asbestos Trainers</p>
          {/* <button onClick={handleEnrollClick} className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition">
            Enroll for $148
          </button> */}
                    <button
            className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition"
            onClick={() => setShowPopup(true)} // Open the popup
          >
            Sign Up
          </button>
          
          {/* Course Overview Section */}
          <div className="bg-gray-100 p-6 mt-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Course Title: AHERA Asbestos Worker (Initial) - 32 Hour Course</h2>
            <p className="text-lg mb-4">
              This comprehensive 32-hour course is designed for individuals seeking to gain the essential skills and knowledge
              required to work safely with asbestos in compliance with the Asbestos Hazard Emergency Response Act (AHERA).
              Participants will explore the properties and health risks associated with asbestos exposure, learn about regulatory
              requirements, and acquire hands-on training in safe work practices.
            </p>
            <h3 className="text-xl font-semibold mb-3">Key Topics Include:</h3>
            <ul className="list-disc list-inside mb-6">
              <li>Understanding asbestos types and characteristics</li>
              <li>Health effects and risks of asbestos exposure</li>
              <li>Overview of AHERA regulations and guidelines</li>
              <li>Use of personal protective equipment (PPE)</li>
              <li>Emergency response procedures and best practices</li>
            </ul>
            <p className="text-lg mb-4">
              Through a combination of lectures, discussions, and practical exercises, participants will develop a solid foundation
              in asbestos safety protocols. This course is essential for workers involved in asbestos-related activities, ensuring
              they are equipped to protect themselves and others in the workplace. This course is ideal for construction workers,
              maintenance staff, and environmental professionals who may come into contact with asbestos materials.
            </p>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-60 bg-gray-800 p-4 flex-shrink-0">
        <h2 className="text-xl font-bold mb-4 text-center">Course Details</h2>
        <div className="text-sm text-gray-300 mb-6">
          <p className="mb-2">
            <strong>Location:</strong> 123 Training Center, City, State
          </p>
          <p className="mb-2">
            <strong>Next Session:</strong> October 15 - October 18, 2024
          </p>
          <p>
            <strong>Time:</strong> 8:00 AM - 4:30 PM
          </p>
        </div>

        {/* Download PDF Button */}
        <div className="mt-6">
          <motion.a
            href="/path-to-course-schedule.pdf"
            download
            className="block w-full text-center bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            whileHover={{ scale: 1.05 }}
          >
            Download PDF Schedule
          </motion.a>
        </div>
      </aside>

      {/* Modals */}
      {/* {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onAuthSuccess={() => {
            setIsAuthenticated(true);
            setShowAuthModal(false);
            setShowEnrollModal(true);
          }}
        />
      )}
      {showEnrollModal && <EnrollModal onClose={() => setShowEnrollModal(false)} />}
 */}
                    {/* Course Registration Popup */}
                    <AnimatePresence>
          {showPopup && (
            <CourseRegistration
              courseDetails={courseDetails}
              onClose={() => {
                setShowPopup(false); // Close the popup
              }}
            />
          )}
        </AnimatePresence>
    </div>
  );
}
