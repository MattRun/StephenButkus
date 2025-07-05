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
    name: 'Bloodborne Pathogens (Online) - 1 Hour Course COMING SOON',
    price: '$500',
    description:
      'This comprehensive course provides participants with an in-depth understanding of the principles and practices of industrial hygiene related to air sampling and analytical techniques.',
    location: '15200 Grevillea Ave Suite A-2, Lawndale, CA 90260',
    nextSession: 'View Calendar',
    time: 'TBD',
  };

  // Define the course list for the sidebar
  const workSafetyCourses = [
    { title: "Bloodborne Pathogens", subtitle: "COMING SOON (Online) - 1 Hour Course", path: "/dashboard/pages/training/workersafety/bloodbornepathogens" },
    { title: "Confined Spaces", subtitle: "COMING SOON (Online) - ENGLISH", path: "/dashboard/pages/training/workersafety/confinedspaces" },
    { title: "Lockout/Tagout", subtitle: "COMING SOON (Online) - ENGLISH", path: "/dashboard/pages/training/workersafety/lockouttagout" },
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
          <h1 className="text-3xl font-bold mb-6">Bloodborne Pathogens (Online) - 1 Hour Course COMING SOON</h1>
          <p className="text-lg mb-4">
            This comprehensive, 100% online course provides essential training on OSHA’s Bloodborne Pathogens Standard (29 CFR 1910.1030). 
            Designed for healthcare professionals, first responders, custodial staff, and any employees at risk of exposure to infectious materials, 
            the course equips participants with the knowledge and skills needed to ensure workplace safety and compliance.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Key Topics Include:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Understanding what bloodborne pathogens are and how they are transmitted</li>
            <li>Identifying high-risk situations and exposure risks in the workplace</li>
            <li>Learning OSHA’s universal precautions</li>
            <li>Use of personal protective equipment (PPE)</li>
            <li>Safe practices for handling sharps and contaminated materials</li>
            <li>Proper procedures for exposure incidents, including reporting and post-exposure evaluation</li>
          </ul>
          <p className="text-lg mb-4">
            Through a combination of videos and quizzes, participants will develop a solid foundation in bloodborne pathogen safety protocols. 
            This course is ideal for all employees who may come into contact with bloodborne pathogens.
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
      <aside className="w-60 bg-gray-800 p-4 flex-shrink-0">
        <h2 className="text-xl font-bold mb-4 text-center">Course Details</h2>
        <div className="text-sm text-gray-300 mb-6">
          <p className="mb-2">
            <strong>Location:</strong> Online
          </p>
          <p className="mb-2">
            <strong>Duration:</strong> 1 Hour
          </p>
          <p>
            <strong>Status:</strong> Coming Soon
          </p>
        </div>

        {/* Download PDF Button */}
        <div className="mt-6">
          <motion.a
            href="/path-to-bloodborne-pathogens-schedule.pdf"
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
