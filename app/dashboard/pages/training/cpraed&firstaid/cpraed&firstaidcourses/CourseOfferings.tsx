'use client';
import { Disclosure } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Course Data with Paths for Each Course
const cprCourseData = [
  {
    title: "CPR, AED, and First Aid Certification Course",
    description: `This comprehensive course provides hands-on training in cardiopulmonary resuscitation (CPR), the use of an automated external defibrillator (AED), and basic first aid. Designed for individuals in the workplace, schools, and community settings, this training equips participants with life-saving skills.`,
    path: "/dashboard/pages/training/cpr/course-1",
    keyTopics: [
      "Recognizing and responding to medical emergencies",
      "Performing high-quality CPR on adults, children, and infants",
      "Using an AED effectively in cardiac emergencies",
      "Handling choking situations and airway obstructions",
      "Administering basic first aid for injuries and illnesses",
      "Legal considerations and Good Samaritan laws"
    ]
  }
];



const CourseOfferings = () => {
  const router = useRouter();

  return (
    <div className="relative py-36 px-8 mt-40 w-full bg-cover bg-center" style={{ backgroundImage: `url('/Cpr.jpeg')` }}>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 w-full flex flex-col md:flex-row gap-8 items-center">
        {/* Left: Title */}
        <div className="md:w-1/3 text-center md:text-left text-white">
          <h2 className="text-4xl font-bold mb-8">CPR, AED & First Aid Course Offerings</h2>
          <p className="text-lg">
            Explore our comprehensive courses designed for CPR, AED, and First Aid training, covering topics for health and safety where ever you may need to use these skills.
          </p>
        </div>

        {/* Right: Accordion */}
        <div className="md:w-2/3 w-full"> {/* Ensure the accordion also spans full width on mobile */}
          {cprCourseData.map((course, index) => (
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