'use client';
import { Disclosure } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Course Data with Paths for Each Course
const courseData = [
  {
    title: "AHERA Asbestos Worker (Initial) - 32 Hour Course",
    description: `This comprehensive 32-hour course is designed for individuals seeking to gain the essential skills and knowledge required to work safely with asbestos in compliance with the Asbestos Hazard Emergency Response Act (AHERA).`,
    path: "/dashboard/pages/training/asbestos/course-1",
    keyTopics: [
      "Understanding asbestos types and characteristics",
      "Health effects and risks of asbestos exposure",
      "Overview of AHERA regulations and guidelines",
      "Use of personal protective equipment (PPE)",
      "Emergency response procedures and best practices"
    ]
  },
  {
    title: "AHERA Asbestos Worker (Refresher) - 8 Hour Course",
    description: `The AHERA Asbestos Worker Refresher course is an 8-hour training designed for individuals who have previously completed the initial AHERA Asbestos Worker course and need to renew their certification.`,
    path: "/dashboard/pages/training/asbestos/course-2",
    keyTopics: [
      "Review of asbestos properties and health risks",
      "Updates on asbestos regulations and compliance requirements",
      "Best practices for identifying and managing asbestos-containing materials (ACMs)",
      "Advanced safe work practices and use of personal protective equipment (PPE)",
      "Emergency response protocols and incident management"
    ]
  },
  {
    title: "AHERA Contractor/Supervisor (Initial) - 40 Hour Course",
    description: `The AHERA Contractor/Supervisor (Initial) course is a comprehensive 40-hour program designed for professionals responsible for overseeing asbestos-related activities in compliance with the Asbestos Hazard Emergency Response Act (AHERA).`,
    path: "/dashboard/pages/training/asbestos/course-3",
    keyTopics: [
      "Understanding the properties and hazards of asbestos",
      "Overview of AHERA regulations and the role of the contractor/supervisor",
      "Asbestos identification, assessment, and management strategies",
      "Effective planning and execution of asbestos abatement projects",
      "Risk assessment and safe work practices",
      "Legal responsibilities and documentation requirements"
    ]
  },
  {
    title: "AHERA Contractor/Supervisor (Refresher) - 8 Hour Course",
    description: `The AHERA Contractor/Supervisor Refresher course is an 8-hour training program designed for professionals who have previously completed the initial AHERA Contractor/Supervisor course.`,
    path: "/dashboard/pages/training/asbestos/course-4",
    keyTopics: [
      "Review of asbestos properties and health risks",
      "Updates on AHERA regulations and industry standards",
      "Best practices for effective asbestos project management",
      "Risk assessment techniques and safe work practices",
      "Advanced use of personal protective equipment (PPE)",
      "Incident response and emergency management protocols"
    ]
  },
  {
    title: "AHERA Building Inspector (Initial) - 24 Hour Course",
    description: `The AHERA Building Inspector (Initial) course is a thorough 24-hour program designed for individuals seeking to become qualified building inspectors in the field of asbestos management.`,
    path: "/dashboard/pages/training/asbestos/course-5",
    keyTopics: [
      "Understanding the properties and health risks of asbestos",
      "Overview of AHERA regulations and inspection requirements",
      "Techniques for identifying asbestos materials in buildings",
      "Conducting thorough inspections and sampling procedures",
      "Risk assessment and management strategies for ACMs"
    ]
  },
  {
    title: "AHERA Building Inspector (Refresher) - 4 Hour Course",
    description: `The AHERA Building Inspector Refresher course is a concise 4-hour program designed for individuals who have previously completed the initial AHERA Building Inspector training.`,
    path: "/dashboard/pages/training/asbestos/course-6",
    keyTopics: [
      "Review of asbestos properties and associated health risks",
      "Updates on asbestos regulations and compliance requirements",
      "Best practices for identifying and assessing asbestos-containing materials (ACMs)",
      "Effective inspection techniques and sampling methods",
      "Risk assessment and management strategies for ACMs"
    ]
  }
];
const CourseOfferings = () => {
  const router = useRouter();

  return (
    <div className="relative py-36 px-8 mt-40 w-full bg-cover bg-center" style={{ backgroundImage: `url('/ASBTRAIN_001.jpeg')` }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 w-full flex flex-col md:flex-row gap-8 items-center">
        {/* Left: Title */}
        <div className="md:w-1/3 text-center md:text-left text-white">
          <h2 className="text-4xl font-bold mb-8">Asbestos Course Offerings</h2>
          <p className="text-lg">
            Explore our comprehensive courses designed for asbestos training, covering topics from beginner to advanced levels.
          </p>
        </div>

        {/* Right: Accordion */}
        <div className="md:w-2/3 w-full"> {/* Ensure the accordion also spans full width on mobile */}
          {courseData.map((course, index) => (
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

// const CourseOfferings = () => {
//   const router = useRouter();

//   return (
    
//     <div className="py-12 px-4 bg-gray-300 mt-40" >
//       {/* Add margin before the hero image */}
//       <div className="mt-8"></div> {/* Adjust the margin as needed */}
      
//       <h2 className="text-4xl font-bold mb-8 text-center text-black">Asbestos Course Offerings</h2>
      
//       <div className="max-w-[1200px] mx-auto"> {/* Constraining accordion width */}
//         {courseData.map((course, index) => (
//           <motion.div
//             key={index}
//             className="w-full mb-6"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//             viewport={{ once: true }}
//           >
//             <Disclosure>
//               {({ open }) => (
//                 <>
//                   {/* Disclosure Button for Course Title */}
//                   <Disclosure.Button className="w-full flex justify-between items-center px-4 py-2 text-2xl font-semibold text-left bg-[#009b99] shadow-md rounded-lg hover:bg-gradient-to-r from-gray-300 to-gray-100 transition duration-300 cursor-pointer text-black">
//                     {course.title}
//                     <motion.span
//                       animate={{ rotate: open ? 90 : 0 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       ➤
//                     </motion.span>
//                   </Disclosure.Button>
                  
//                   {/* Disclosure Panel with Course Details */}
//                   <Disclosure.Panel className="p-4 text-gray-700 bg-gray-100 rounded-lg shadow-inner mt-2">
//                     <motion.p
//                       className="text-lg mb-4"
//                       initial={{ x: -30 }}
//                       animate={{ x: open ? 0 : -30 }}
//                       transition={{ duration: 0.5 }}
//                     >
//                       {course.description}
//                     </motion.p>

//                     <h3 className="font-semibold text-lg mb-2">Key Topics Covered:</h3>
//                     <motion.ul
//                       className="list-disc pl-6 mb-4"
//                       initial={{ scale: 0.9 }}
//                       animate={{ scale: open ? 1 : 0.9 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       {course.keyTopics.map((topic, topicIndex) => (
//                         <motion.li key={topicIndex} className="mb-2">
//                           {topic}
//                         </motion.li>
//                       ))}
//                     </motion.ul>

//                     {/* Action Buttons with Routing */}
//                     <div className="flex justify-between items-center mt-4">
//                       <motion.button
//                         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         onClick={() => router.push(course.path)}
//                       >
//                         See More Info
//                       </motion.button>
//                       <motion.button
//                         className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                       >
//                         Sign Up
//                       </motion.button>
//                     </div>
//                   </Disclosure.Panel>
//                 </>
//               )}
//             </Disclosure>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CourseOfferings;