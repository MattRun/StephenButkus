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
    name: 'AHERA Contractor/Supervisor (Refresher) - 8 Hour Course',
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
          <h1 className="text-3xl font-bold mb-6">AHERA Contractor/Supervisor (Refresher) - 8 Hour Course</h1>
          <p className="text-lg mb-4">
            The AHERA Contractor/Supervisor Refresher course is an 8-hour training program designed for professionals who have previously
            completed the initial AHERA Contractor/Supervisor course. This refresher course updates participants on the latest regulations,
            safety practices, and management strategies related to asbestos abatement and compliance under the Asbestos Hazard Emergency Response Act (AHERA).
          </p>
          <h2 className="text-2xl font-semibold mb-4">Key Topics Include:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Review of asbestos properties and health risks</li>
            <li>Updates on AHERA regulations and industry standards</li>
            <li>Best practices for effective asbestos project management</li>
            <li>Risk assessment techniques and safe work practices</li>
            <li>Advanced use of personal protective equipment (PPE)</li>
            <li>Incident response and emergency management protocols</li>
            <li>Discussion of recent case studies and lessons learned</li>
          </ul>
          <p className="text-lg mb-4">
            Participants will engage in interactive discussions and practical exercises that reinforce their knowledge and enhance 
            their skills in managing asbestos projects safely. This course is essential for maintaining compliance and ensuring the
            health and safety of workers and the public in environments where asbestos may be present.
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
            <strong>Next Session:</strong> November 20, 2024
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
