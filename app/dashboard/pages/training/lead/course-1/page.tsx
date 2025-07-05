'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion'; // Ensure AnimatePresence is imported
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import CourseRegistration from '../../../courseregistration/CourseRegistration';

export default function Course1Page() {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState('');
  const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility


  // Define course details for the current course
  const courseDetails = {
    name: 'CDPH Lead Sample Technician (Initial) - 8 Contact Hours',
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
  // Define the course list for the sidebar
  const leadCourses = [
    { title: "CDPH Lead Sample Technician (Initial)", path: "/dashboard/pages/training/lead/course-1" },
    { title: "CDPH Continuing Education General - XXX Contact Hours COMING SOON", path: "/dashboard/pages/training/lead/course-2" },
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-gray-700 to-gray-900 text-white">
      {/* Left Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 flex-shrink-0">
        <div className="flex items-center justify-between mb-6">
          {/* Arrow to Course Overview */}
          <button
            className="text-blue-400 hover:text-blue-600 transition flex items-center"
            onClick={() => router.push('/dashboard/pages/training/lead')}
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            <span className="font-bold">Course Overview</span>
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Lead Courses</h2>
        <ul className="space-y-4">
          {leadCourses.map((course, index) => (
            <li key={index}>
              <Link href={course.path}>
                <motion.a
                  className={`block px-4 py-2 rounded hover:bg-blue-600 transition ${
                    currentPath === course.path ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {course.title}
                </motion.a>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6">CDPH Lead Sample Technician (Initial) - 8 Contact Hours</h1>
          <p className="text-lg mb-4">
            The CDPH Lead Sample Technician (Initial) course is an intensive 8-hour program designed for individuals seeking to become 
            certified lead sample technicians in accordance with California Department of Public Health (CDPH) regulations. This course provides 
            essential training on the collection of lead samples to ensure compliance with lead exposure standards and protect public health.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Key Topics Include:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Understanding lead hazards and health effects</li>
            <li>Overview of CDPH regulations and guidelines</li>
            <li>Techniques for collecting lead samples (paint chip, XRF, dust, and soil)</li>
            <li>Proper handling and transportation of samples</li>
            <li>Analytical methods used for lead detection</li>
            <li>Documentation and reporting procedures</li>
            <li>Best practices for safety and contamination prevention</li>
          </ul>
          <p className="text-lg mb-4">
            Through a combination of lectures, discussions, and practical exercises, participants will gain the knowledge and skills needed 
            to effectively perform lead sampling tasks. This course is crucial for environmental professionals, construction workers, and 
            anyone involved in lead hazard assessments and abatement activities.
          </p>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700 transition"
            onClick={() => setShowPopup(true)} // Open the popup
          >
            Sign Up
          </button>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 bg-gray-800 p-6 flex-shrink-0">
        <h2 className="text-2xl font-bold mb-4 text-center">Course Details</h2>
        <div className="text-lg text-gray-300 mb-6">
          <p className="mb-2">
            <strong>Location:</strong> 123 Training Center, City, State
          </p>
          <p className="mb-2">
            <strong>Next Session:</strong> November 10, 2024
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
