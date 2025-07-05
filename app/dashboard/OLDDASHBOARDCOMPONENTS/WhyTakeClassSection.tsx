// 'use client';
// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// // Updated data to include image paths
// const whyTakeOurClassData = [
//   {
//     title: "Industry-Leading Instructors",
//     content: "Our team of instructors are experienced professionals with years of real-world expertise in their respective fields. We prioritize providing practical knowledge and hands-on training that goes beyond the classroom.",
//     image: "/national-cancer-institute-wTrKloP4UKw-unsplash.jpg", // Example image path
//   },
//   {
//     title: "Comprehensive Curriculum",
//     content: "We offer a range of courses that cover every aspect of environmental health and safety. From asbestos handling to lead certification, our programs are designed to meet regulatory requirements and industry standards.",
//     image: "/national-cancer-institute-wTrKloP4UKw-unsplash.jpg", // Example image path
//   },
//   {
//     title: "Flexible Learning Options",
//     content: "Our training programs are tailored to fit your schedule with both in-person and remote learning options, ensuring you can get certified without compromising your work-life balance.",
//     image: "/national-cancer-institute-wTrKloP4UKw-unsplash.jpg", // Example image path
//   }
// ];

// export default function WhyTakeOurClass() {
//   return (
//     <section className="py-16 bg-gray-900">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12 text-white">Why Choose AEHS for Your Training</h2>

//         {whyTakeOurClassData.map((item, index) => (
//           <motion.div
//             key={index}
//             className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-12`}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//           >
//             {/* Image */}
//             <div className="w-full md:w-1/2">
//               <Image
//                 src={item.image}
//                 alt={item.title}
//                 width={500}
//                 height={300}
//                 className="rounded-lg object-cover"
//               />
//             </div>

//             {/* Text */}
//             <div className="w-full md:w-1/2 p-6">
//               <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
//               <p className="text-gray-300">{item.content}</p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }




// 'use client';
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { ChevronRightIcon } from '@heroicons/react/24/solid';

// // Example data
// const recentStories = [
//   {
//     date: "6.6.24",
//     title: "Meet the New R1T and R1S - The second generation of our flagship lineup is here",
//     image: "/national-cancer-institute-wTrKloP4UKw-unsplash.jpg",
//   },
//   {
//     date: "5.15.24",
//     title: "Software Spotlight: Google Cast & YouTube - Introducing video streaming to Rivian vehicles",
//     image: "/GeneralSupport.png",
//   },
//   {
//     date: "3.18.24",
//     title: "Irvine, CA - Rivian Vehicles Are Now Compatible with the Supercharger Network",
//     image: "/Support.jpg",
//   }
// ];

// export default function RecentStories() {
//   const [hoveredStory, setHoveredStory] = useState(recentStories[0]);

//   return (
//     <section className="flex flex-col md:flex-row items-center justify-center py-12 bg-white space-y-8 md:space-y-0">
//       {/* Left: Text section */}
//       <div className="w-full md:w-1/2 p-6 md:pl-12">
//         <h1 className="text-4xl font-bold mb-8">Recent Stories</h1>
//         <div className="space-y-12">
//           {recentStories.map((story, index) => (
//             <motion.div
//               key={index}
//               onMouseEnter={() => setHoveredStory(story)}
//               className={`cursor-pointer flex items-center space-x-2 ${
//                 hoveredStory.title === story.title ? "text-black" : "text-gray-400"
//               }`}
//               whileHover={{ scale: 1.02 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div>
//                 <p className="text-sm">{story.date}</p>
//                 <h3 className="text-xl font-semibold">{story.title}</h3>
//               </div>
//               {hoveredStory.title === story.title && (
//                 <ChevronRightIcon className="w-5 h-5 text-gray-500" />
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Right: Image section */}
//       <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
//         <motion.div
//           key={hoveredStory.title}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="relative w-[450px] h-[300px]" // Fixed width and height to avoid jumping
//         >
//           <Image
//             src={hoveredStory.image}
//             alt={hoveredStory.title}
//             layout="fill"
//             className="rounded-lg object-cover"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// }









'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

// Example data
const recentStories = [
  {
    date: "Industry-Leading Instructors",
    title: "Our team of instructors are experienced professionals with years of real-world expertise in their respective fields. We prioritize providing practical knowledge and hands-on training that goes beyond the classroom.",
    image: "/national-cancer-institute-wTrKloP4UKw-unsplash.jpg",
  },
  {
    date: "Comprehensive Curriculum",
    title: "We offer a range of courses that cover every aspect of environmental health and safety. From asbestos handling to lead certification, our programs are designed to meet regulatory requirements and industry standards.",
    image: "/GeneralSupport.png",
  },
  {
    date: "Flexible Learning Options",
    title: "Our training programs are tailored to fit your schedule with both in-person and remote learning options, ensuring you can get certified without compromising your work-life balance.",
    image: "/Support.jpg",
  }
];

export default function RecentStories() {
  const [hoveredStory, setHoveredStory] = useState(recentStories[0]);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-12 bg-white space-y-8 md:space-y-0 bg-[url('/AdobeStock_439250228.jpeg')]">
      {/* Left: Text section */}
      <div className="w-full md:w-1/2 p-6 md:pl-12">
        <h1 className="text-4xl font-bold mb-4 text-black">Helpful Resources</h1>
        <div className="border-b-2 border-gray-200 mb-8 w-24"></div> {/* Subtle horizontal line */}
        <div className="space-y-12">
          {recentStories.map((story, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredStory(story)}
              className={`cursor-pointer flex items-center space-x-2 ${
                hoveredStory.title === story.title ? "text-black" : "text-gray-400"
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <p className="text-sm">{story.date}</p>
                <h3 className="text-xl font-semibold">{story.title}</h3>
              </div>
              {hoveredStory.title === story.title && (
                //arrow move right
                <ChevronRightIcon className="w-20 h-20 text-gray-500 ml-10" /> 
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right: Image section */}
      <div className="w-full md:w-1/2 p-6 flex items-center justify-center">
        <motion.div
          key={hoveredStory.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-[450px] h-[300px]" // Fixed width and height to avoid jumping
        >
          <Image
            src={hoveredStory.image}
            alt={hoveredStory.title}
            layout="fill"
            className="rounded-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
