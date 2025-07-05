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
    name: 'Introduction to PLM Analysis (40 Contact Hours)',
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
  const analyticalCourses = [
    { title: "NIOSH 582 Equivalency Course", path: "/dashboard/pages/training/analytical/course-1" },
    { title: "Introduction to PLM Analysis", path: "/dashboard/pages/training/analytical/course-2" },
    { title: "Advanced Asbestos PLM Analysis", path: "/dashboard/pages/training/analytical/course-3" },
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-gray-700 to-gray-900 text-white">
      {/* Left Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 flex-shrink-0">
        <div className="flex items-center justify-between mb-6">
          {/* Arrow to Course Overview */}
          <button
            className="text-blue-400 hover:text-blue-600 transition flex items-center"
            onClick={() => router.push('/dashboard/pages/training/analytical')}
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            <span className="font-bold">Course Overview</span>
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Analytical Courses</h2>
        <ul className="space-y-4">
          {analyticalCourses.map((course, index) => (
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
          <h1 className="text-3xl font-bold mb-6">Introduction to PLM Analysis (40 Contact Hours)</h1>
          <p className="text-lg mb-4">
            This course provides a foundational understanding of Polarized Light Microscopy (PLM) analysis, focusing on its applications 
            in identifying and characterizing materials, particularly in the context of asbestos and other fibers. Participants will explore 
            the theoretical principles of PLM and gain practical skills essential for effective analysis.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Key Topics Include:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Principles of Polarized Light Microscopy: Understanding light behavior, polarization, and optical characteristics of materials.</li>
            <li>Sample Preparation Techniques: Best practices for preparing samples for PLM analysis.</li>
            <li>Identification of Fibrous Materials: Recognizing and differentiating various fibers, including asbestos types and other contaminants.</li>
            <li>Analytical Techniques: Utilizing PLM for quantitative and qualitative analysis.</li>
            <li>Regulatory Framework: Overview of relevant regulations and guidelines regarding fiber analysis and reporting.</li>
          </ul>
          <p className="text-lg mb-4">
            Participants will engage in hands-on lab sessions, allowing them to practice sample analysis under expert guidance. By the end of 
            the course, attendees will have foundational knowledge in PLM analysis, enhancing their skills for environmental assessments and 
            workplace safety evaluations. This course is ideal for environmental scientists, industrial hygienists, laboratory technicians, and 
            professionals involved in materials analysis.
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
            <strong>Next Session:</strong> October 25 - October 29, 2024
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
