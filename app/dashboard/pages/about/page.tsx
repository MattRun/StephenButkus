// 'use client';

// import { motion, useScroll, useTransform } from 'framer-motion';
// import { useEffect, useState } from 'react';

// export default function EnhancedScrollPage() {
//   const { scrollYProgress } = useScroll();
//   const [windowHeight, setWindowHeight] = useState(0);

//   useEffect(() => {
//     setWindowHeight(window.innerHeight);
//     const handleResize = () => setWindowHeight(window.innerHeight);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const sections = [
//     {
//       imageUrl: '/michael-schiffer-13UugSL9q7A-unsplash.jpg',
//       title: 'Mold',
//       subheader: 'Why you should take this course',
//       paragraph: 'Our Mold course teaches you how to identify, assess, and properly handle mold contamination in buildings.',
//     },
//     {
//       imageUrl: '/the-tampa-bay-estuary-program-DeR4Zt6rOB0-unsplash.jpg',
//       title: 'Analytical',
//       subheader: 'Why you should take this course',
//       paragraph: 'The Analytical course helps you understand scientific tools and processes in various fields.',
//     },
//     {
//       imageUrl: '/adrian-lange-Wk902ZLaA7M-unsplash.jpg',
//       title: 'Asbestos',
//       subheader: 'Why you should take this course',
//       paragraph: 'This course equips you with the knowledge to safely manage and remove asbestos.',
//     },
//     {
//       imageUrl: '/marvin-radke-bWo7bCnez68-unsplash.jpg',
//       title: 'Lead',
//       subheader: 'Why you should take this course',
//       paragraph: 'Learn to identify and mitigate lead hazards through this comprehensive course.',
//     },
//     {
//       imageUrl: '/testalize-me-JOXBzJdN8yk-unsplash.jpg',
//       title: 'Who We Are',
//       subheader: 'Get to know us',
//       paragraph: 'We are a team of dedicated professionals providing high-quality environmental safety education.',
//     },
//   ];

//   return (
//     <div className="w-full">
//       {sections.map((section, index) => {
//         const start = index / sections.length;
//         const end = (index + 1) / sections.length;

//         // Text should move down and stop as it reaches the bottom of the image
//         const textY = useTransform(scrollYProgress, [start, end - 0.2], ['0%', '50%']);

//         // Image and Text Fade Effect (Fade slightly without fully disappearing)
//         const fadeOpacity = useTransform(scrollYProgress, [start, end], [1, 0.5]);

//         return (
//           <div key={index} className="relative h-[150vh] overflow-hidden">
//             {/* Larger Image with Controlled Fade */}
//             <motion.div
//               className="absolute top-0 left-0 w-full h-[150vh] bg-cover bg-center"
//               style={{
//                 backgroundImage: `url(${section.imageUrl})`,
//                 opacity: fadeOpacity,
//               }}
//             />

//             {/* Parallax Text: Scrolling Downwards in the Image Frame */}
//             <motion.div
//               className="absolute top-1/4 left-16 p-8 text-white z-10 max-w-md"
//               style={{ y: textY, opacity: fadeOpacity }}
//             >
//               <h2 className="text-4xl md:text-5xl font-bold mb-2">{section.title}</h2>
//               <h3 className="text-lg md:text-xl mb-4 text-yellow-300">{section.subheader}</h3>
//               <p className="text-sm md:text-base mb-6">{section.paragraph}</p>

//               {/* Learn More Button */}
//               <motion.button
//                 whileHover={{ scale: 1.1 }}
//                 className="flex items-center text-xs text-yellow-300 hover:text-yellow-500"
//               >
//                 Learn More
//               </motion.button>
//             </motion.div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

export default function ParallaxPage() {
  const { scrollYProgress } = useScroll();

  const sections = [
    {
      imageUrl: '/michael-schiffer-13UugSL9q7A-unsplash.jpg',
      title: 'Mold',
      subheader: 'Why you should take this course',
      paragraph: 'Our Mold course teaches you how to identify, assess, and properly handle mold contamination in buildings. Understanding mold prevention is essential for creating healthier indoor environments and mitigating health risks.',
    },
    {
      imageUrl: '/the-tampa-bay-estuary-program-DeR4Zt6rOB0-unsplash.jpg',
      title: 'Analytical',
      subheader: 'Why you should take this course',
      paragraph: 'The Analytical course dives deep into methods for analyzing environmental samples, helping you understand the scientific tools and processes used in various fields such as air quality and hazardous material testing.',
    },
    {
      imageUrl: '/adrian-lange-Wk902ZLaA7M-unsplash.jpg',
      title: 'Asbestos',
      subheader: 'Why you should take this course',
      paragraph: 'Our Asbestos course equips you with the knowledge to safely manage and remove asbestos in construction or renovation projects. This course is vital for those looking to comply with safety standards and protect public health.',
    },
    {
      imageUrl: '/marvin-radke-bWo7bCnez68-unsplash.jpg',
      title: 'Lead',
      subheader: 'Why you should take this course',
      paragraph: 'Learn to identify and mitigate lead hazards in homes and workplaces through our comprehensive Lead course. Prevent exposure and understand the legal requirements for handling lead in construction.',
    },
    {
      imageUrl: '/testalize-me-JOXBzJdN8yk-unsplash.jpg',
      title: 'Who We Are',
      subheader: 'Get to know us',
      paragraph: 'We are a team of dedicated professionals providing high-quality environmental safety education to help you stay compliant and ensure safe practices in your industry.',
    },
  ];

  return (
    <div className="w-full">
      {sections.map((section, index) => {
        const start = index / sections.length;
        const end = (index + 1) / sections.length;

        // Parallax effect for images (slightly delayed scrolling effect)
        const yPos = useTransform(scrollYProgress, [start, end], ['-10%', '0%']);

        return (
          <div key={index} className="relative h-screen overflow-hidden">
            {/* Parallax Image */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${section.imageUrl})`,
                y: yPos,
                opacity: 1, // Removed fade effect by keeping opacity at 1
              }}
            />

            {/* Text Section: Middle Right */}
            <motion.div
              className="absolute top-1/2 right-10 transform -translate-y-1/2 flex flex-col items-start p-8 bg-black bg-opacity-60 text-white z-10 max-w-sm"
              style={{ opacity: 1 }} // Set opacity to 1 to keep text visible
            >
              <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
              <h3 className="text-2xl mb-4">{section.subheader}</h3>
              <p className="text-lg mb-6">{section.paragraph}</p>

              {/* Learn More Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="flex items-center text-blue-300 hover:text-blue-500"
              >
                Learn More
                <ChevronDownIcon className="ml-2 w-6 h-6 animate-bounce" />
              </motion.button>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};
