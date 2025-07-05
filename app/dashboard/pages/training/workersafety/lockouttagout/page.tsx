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
    name: 'Lockout/Tagout (Online) - 1.5 Hours Course COMING SOON',
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
  const workSafetyCourses = [
    { title: "Bloodborne Pathogens", subtitle: "COMING SOON (Online) - 1 Hour Course", path: "/dashboard/pages/training/workersafety/bloodbornepathogens" },
    { title: "Confined Spaces", subtitle: "COMING SOON (Online) - 1.5 Hours Course", path: "/dashboard/pages/training/workersafety/confinedspaces" },
    { title: "Lockout/Tagout", subtitle: "COMING SOON (Online) - 1.5 Hours Course", path: "/dashboard/pages/training/workersafety/lockouttagout" },
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-gray-700 to-gray-900 text-white">
      {/* Left Sidebar */}
      <aside className="w-60 bg-gray-800 p-4 flex-shrink-0">
        <div className="flex items-center justify-between mb-6">
          {/* Arrow to Course Overview */}
          <button
            className="text-blue-400 hover:text-blue-600 transition flex items-center"
            onClick={() => router.push('/dashboard/pages/training/workersafety/workersafetycourses')}
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            <span className="font-bold">Course Overview</span>
          </button>
        </div>
        <h2 className="text-xl font-bold mb-6 text-center">Work Safety Courses</h2>
        <ul className="space-y-3">
          {workSafetyCourses.map((course, index) => (
            <li key={index}>
              <Link href={course.path}>
                <motion.a
                  className={`block px-4 py-3 text-sm rounded hover:bg-blue-600 transition ${
                    currentPath === course.path ? 'bg-blue-600' : 'bg-gray-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="font-bold">{course.title}</div>
                  <div className="text-xs">{course.subtitle}</div>
                </motion.a>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6">Lockout/Tagout (Online) - 1.5 Hours Course COMING SOON</h1>
          <p className="text-lg mb-4">
            This 100% online course provides critical training on OSHA’s Lockout/Tagout Standard (29 CFR 1910.147), designed 
            to help employees and supervisors understand the procedures for safely controlling hazardous energy sources during 
            maintenance and repair tasks.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Key Topics Include:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Understanding what lockout/tagout (LOTO) procedures are and why they are critical</li>
            <li>Identify hazardous energy sources, including electrical, hydraulic, mechanical, and pneumatic energy</li>
            <li>Learn the six steps of LOTO procedures, including shutdown, isolation, and lockout/tagout application</li>
            <li>Recognize roles and responsibilities of authorized, affected, and other employees in the LOTO process</li>
            <li>Master the use of LOTO devices, locks, and tags to ensure safe maintenance and repair</li>
            <li>Know emergency response and the safe removal of locks and tags</li>
          </ul>
          <p className="text-lg mb-4">
            Through a combination of videos and quizzes, participants will develop a solid foundation in lockout/tagout safety 
            protocols. This course is ideal for any worker involved in servicing or maintaining machinery, ensuring that they 
            are prepared to prevent unexpected equipment startup or release of hazardous energy.
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
      <aside className="w-60 bg-gray-800 p-4 flex-shrink-0">
        <h2 className="text-xl font-bold mb-4 text-center">Course Details</h2>
        <div className="text-sm text-gray-300 mb-6">
          <p className="mb-2">
            <strong>Location:</strong> Online
          </p>
          <p className="mb-2">
            <strong>Duration:</strong> 1.5 Hours
          </p>
          <p>
            <strong>Status:</strong> Coming Soon
          </p>
        </div>

        {/* Download PDF Button */}
        <div className="mt-6">
          <motion.a
            href="/path-to-lockout-tagout-schedule.pdf"
            download
            className="block w-full text-center bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            whileHover={{ scale: 1.05 }}
          >
            Download Course Info
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
