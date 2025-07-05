'use client';

import { Disclosure } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const hazwoperCourseData = [
  {
    title: "HAZWOPER 40-Hour Course",
    description: `This comprehensive 40-hour course is designed for professionals involved in hazardous waste operations and emergency response. It covers essential safety procedures, regulations, and best practices for working in hazardous environments.`,
    path: "/dashboard/pages/training/hazwoper/course-1",
    keyTopics: [
      "Overview of OSHA HAZWOPER regulations",
      "Site characterization and analysis",
      "Use of Personal Protective Equipment (PPE)",
      "Decontamination procedures and best practices",
      "Emergency response planning and implementation",
      "Health and safety program requirements"
    ]
  }
];

const CourseOfferings = () => {
  const router = useRouter();

  return (
    <div className="relative py-36 px-8 mt-40 w-full bg-cover bg-center" style={{ backgroundImage: `url('/thisisengineering-EhPSMCvT9rY-unsplash.jpg')` }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 w-full flex flex-col md:flex-row gap-8 items-center">
        {/* Left: Title */}
        <div className="md:w-1/3 text-center md:text-left text-white">
          <h2 className="text-4xl font-bold mb-8">HAZWOPER Course Offerings</h2>
          <p className="text-lg">
            Explore our comprehensive courses designed for Hazordous Waste Removal training, covering topics at all levels levels.
          </p>
        </div>

        {/* Right: Accordion */}
        <div className="md:w-2/3 w-full"> {/* Ensure the accordion also spans full width on mobile */}
          {hazwoperCourseData.map((course, index) => (
            <motion.div
              key={index}
              className="w-full mb-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Disclosure>
                {({ open }) => (
                  <>
                    {/* Disclosure Button for Course Title */}
                    <Disclosure.Button className="w-full flex justify-between items-center px-4 py-2 text-2xl font-semibold text-left bg-gray-700 shadow-md rounded-lg hover:bg-gray-500 transition duration-300 cursor-pointer text-[#fff]">
                      {course.title}
                      <motion.span
                        animate={{ rotate: open ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        ➤
                      </motion.span>
                    </Disclosure.Button>
                    
                    {/* Disclosure Panel with Course Details */}
                    <Disclosure.Panel className="p-4 text-gray-700 bg-gray-100 rounded-lg shadow-inner mt-2">
                      <motion.p
                        className="text-lg mb-4"
                        initial={{ x: -30 }}
                        animate={{ x: open ? 0 : -30 }}
                        transition={{ duration: 0.5 }}
                      >
                        {course.description}
                      </motion.p>

                      <h3 className="font-semibold text-lg mb-2">Key Topics Covered:</h3>
                      <motion.ul
                        className="list-disc pl-6 mb-4"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: open ? 1 : 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        {course.keyTopics.map((topic, topicIndex) => (
                          <motion.li key={topicIndex} className="mb-2">
                            {topic}
                          </motion.li>
                        ))}
                      </motion.ul>

                      {/* Action Buttons with Routing */}
                      <div className="flex justify-between items-center mt-4">
                        <motion.button
                          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => router.push(course.path)}
                        >
                          See More Info
                        </motion.button>
                        <motion.button
                          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          Sign Up
                        </motion.button>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseOfferings;