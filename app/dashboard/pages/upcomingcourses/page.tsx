// components/UpcomingCourses.tsx
'use client'
import React from 'react';
import Link from 'next/link';

const courses = [
  {
    category: 'ASBESTOS',
    details: [
      {
        title: 'AHERA Contractor/Supervisor (Initial)',
        schedule: [
          'Sat 11/16, Sun 11/17, Fri 11/22, Sat 11/23, Sun 11/24 (two consecutive weekends)',
          '0830 - 1700',
        ],
      },
    ],
  },
  {
    category: 'LEAD',
    details: [
      {
        title: 'CDPH Lead Sampling Technician',
        schedule: ['12/14', '0800 - 1700'],
      },
    ],
  },
  {
    category: 'ANALYTICAL',
    details: [
      {
        title: 'Introduction to PLM Analysis',
        schedule: ['Sat 12/7 - Wed 12/11', '0900 - 1700'],
      },
    ],
  },
];

const UpcomingCourses = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-12">
          Upcoming Courses
        </h1>

        {courses.map((course, index) => (
          <div
            key={index}
            className="mb-10 bg-white shadow-md rounded-lg overflow-hidden"
          >
            {/* Category Header */}
            <div className="bg-blue-600 text-white py-4 px-6">
              <h2 className="text-2xl font-bold">{course.category}</h2>
            </div>

            {/* Course Details */}
            <div className="p-6 space-y-6">
              {course.details.map((detail, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {detail.title}
                  </h3>
                  <ul className="text-gray-700">
                    {detail.schedule.map((item, i) => (
                      <li key={i} className="mb-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}



            <button className="bg-blue-600 text-white px-6 py-3 rounded shadow-md hover:bg-blue-700 transition">
            <Link href="/dashboard/pages/alltraining">
                View All Courses
            </Link>
            </button>

        </div>
      </div>

  );
};

export default UpcomingCourses;
