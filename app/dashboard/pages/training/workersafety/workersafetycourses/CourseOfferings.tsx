'use client';
import { Disclosure } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Worker Safety Course Data
const workSafetyCourseData = [
  {
    title: "Bloodborne Pathogens",
    subtitle: "COMING SOON (Online) - 1 Hour Course",
    path: "/dashboard/pages/training/workersafety/bloodbornepathogens",
    description: `This comprehensive, 100% online course provides essential training on OSHA’s Bloodborne Pathogens Standard (29 CFR 1910.1030). 
      Designed for healthcare professionals, first responders, custodial staff, and any employees at risk of exposure to infectious materials, 
      the course equips participants with the knowledge and skills needed to ensure workplace safety and compliance.`,
    keyTopics: [
      "Understanding what bloodborne pathogens are and how they are transmitted",
      "Identifying high-risk situations and exposure risks in the workplace",
      "Learning OSHA’s universal precautions",
      "Use of personal protective equipment (PPE)",
      "Safe practices for handling sharps and contaminated materials",
      "Proper procedures for exposure incidents, including reporting and post-exposure evaluation",
    ],
  },
  {
    title: "Confined Spaces",
    subtitle: "COMING SOON (Online) - 1.5 Hours Course",
    path: "/dashboard/pages/training/workersafety/confinedspaces",
    description: `This 100% online course provides critical training on OSHA’s Confined Spaces Standard (29 CFR 1910.146), 
      equipping workers with the knowledge to safely enter, work in, and exit confined spaces.`,
    keyTopics: [
      "Understanding what defines a confined space and a permit-required confined space",
      "Recognize common hazards associated with confined spaces (e.g., toxic gases, oxygen deficiencies, engulfment)",
      "Learn to properly complete and follow a confined space entry permit",
      "Understand the roles and responsibilities of authorized entrants, attendants, and entry supervisors",
      "Learn the principles of ventilation, atmospheric testing, and hazard control techniques",
      "Know rescue procedures and emergency protocols",
    ],
  },
  {
    title: "Lockout/Tagout",
    subtitle: "COMING SOON (Online) - 1.5 Hours Course",
    path: "/dashboard/pages/training/workersafety/lockouttagout",
    description: `This 100% online course provides critical training on OSHA’s Lockout/Tagout Standard (29 CFR 1910.147), 
      designed to help employees and supervisors understand the procedures for safely controlling hazardous energy sources during 
      maintenance and repair tasks.`,
    keyTopics: [
      "Understanding what lockout/tagout (LOTO) procedures are and why they are critical",
      "Identify hazardous energy sources, including electrical, hydraulic, mechanical, and pneumatic energy",
      "Learn the six steps of LOTO procedures, including shutdown, isolation, and lockout/tagout application",
      "Recognize roles and responsibilities of authorized, affected, and other employees in the LOTO process",
      "Master the use of LOTO devices, locks, and tags to ensure safe maintenance and repair",
      "Know emergency response and the safe removal of locks and tags",
    ],
  },
];

const WorkerSafetyCourseOfferings = () => {
  const router = useRouter();

  return (
    <div className="relative py-36 px-8 mt-40 w-full bg-gradient-to-r from-gray-700 to-gray-900"style={{ backgroundImage: `url('/Mold.jpeg')` }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 w-full flex flex-col md:flex-row gap-8 items-center">
        {/* Left: Title */}
        <div className="md:w-1/3 text-center md:text-left text-white">
          <h2 className="text-4xl font-bold mb-8">Worker Safety Course Offerings</h2>
          <p className="text-lg">
            Explore our online worker safety courses designed to provide essential knowledge and skills for ensuring a safe work environment.
          </p>
        </div>

        {/* Right: Accordion */}
        <div className="md:w-2/3 w-full">
          {workSafetyCourseData.map((course, index) => (
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
                    <Disclosure.Button className="w-full flex justify-between items-center px-4 py-2 text-2xl font-semibold text-left bg-gray-700 shadow-md rounded-lg hover:bg-gray-500 transition duration-300 cursor-pointer text-white">
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

export default WorkerSafetyCourseOfferings;
