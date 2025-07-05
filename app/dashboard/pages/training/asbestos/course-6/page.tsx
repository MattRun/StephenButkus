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
    name: 'AHERA Building Inspector (Refresher) - 4 Hour Course',
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
          {/* Arrow to Course Overview */}
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
          <h1 className="text-3xl font-bold mb-6">AHERA Building Inspector (Refresher) - 4 Hour Course</h1>
          <p className="text-lg mb-4">
            The AHERA Building Inspector Refresher course is a concise 4-hour program designed for individuals who have previously 
            completed the initial AHERA Building Inspector training. This refresher course aims to update participants on the latest 
            regulations, inspection techniques, and best practices related to asbestos management in compliance with the Asbestos 
            Hazard Emergency Response Act (AHERA).
          </p>
          <h2 className="text-2xl font-semibold mb-4">Key Topics Include:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Review of asbestos properties and associated health risks</li>
            <li>Updates on asbestos regulations and compliance requirements</li>
            <li>Best practices for identifying and assessing asbestos-containing materials (ACMs)</li>
            <li>Effective inspection techniques and sampling methods</li>
            <li>Risk assessment and management strategies for ACMs</li>
            <li>Documentation and reporting protocols</li>
            <li>Discussion of recent case studies and regulatory changes</li>
          </ul>
          <p className="text-lg mb-4">
            Participants will engage in interactive discussions and practical exercises that reinforce their knowledge and skills 
            in asbestos inspection. This course is essential for ensuring that building inspectors stay current with industry standards 
            and practices to effectively manage asbestos risks. This course is ideal for individuals who have previously completed 
            the AHERA Building Inspector training and wish to maintain their expertise and knowledge in asbestos management.
          </p>
          {/* Sign Up Button */}
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
            <strong>Next Session:</strong> February 20, 2025
          </p>
          <p>
            <strong>Time:</strong> 8:00 AM - 12:00 PM
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
