// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';

// const projects = [
//   {
//     id: 1,
//     image: '/Projects/SHOOT_SPEC_DEC2416.jpg',
//     name: 'EMMA CLARKE',
//     date: 'July 2025',
//     magazine: 'VOGUE Italia',
//     model: 'Emma Clarke',
//   },
//   {
//     id: 2,
//     image: '/Projects/SAFAR_stephenbutkus9.jpg',
//     name: 'LUNA JAMES',
//     date: 'June 2025',
//     magazine: 'HYPEBAE',
//     model: 'Luna James',
//   },
//   // Add more entries as needed
// ];

// export default function ProjectCarousel() {
//   const [index, setIndex] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);

//   const project = projects[index];

//   const nextSlide = () => {
//     setIsLoading(true);
//     setIndex((prev) => (prev + 1) % projects.length);
//   };

//   const prevSlide = () => {
//     setIsLoading(true);
//     setIndex((prev) => (prev - 1 + projects.length) % projects.length);
//   };

//   // Auto-slide every 6 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden font-serif text-black">
//       {/* Background */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={project.image}
//           className="absolute inset-0 z-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <Image
//             src={project.image}
//             alt="bg"
//             fill
//             onLoadingComplete={() => setIsLoading(false)}
//             className="blur-md scale-110 object-cover"
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Fading Loader */}
//       {isLoading && (
//         <motion.div
//           className="absolute inset-0 z-30 flex items-center justify-center bg-white/30 backdrop-blur-sm"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
//         </motion.div>
//       )}

//       {/* Large Text Overlay */}
//       <h1 className="absolute left-4 bottom-4 z-10 text-[15vw] font-extrabold tracking-tight opacity-10">
//         {project.name}
//       </h1>

//       {/* Top Navigation */}
//       <div className="absolute top-0 w-full px-6 pt-6 z-20 flex justify-between text-sm tracking-widest">
//         <div>HOME / ABOUT / CONTACT</div>
//         <div className="text-right">CONTACT ME TODAY</div>
//       </div>

//       {/* Center Image with swipe gesture */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 max-w-[90vw] w-[400px] shadow-lg">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={project.id}
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: -100, opacity: 0 }}
//             transition={{ duration: 0.8 }}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             dragElastic={0.2}
//             onDragEnd={(e, info) => {
//               if (info.offset.x < -50) nextSlide();
//               else if (info.offset.x > 50) prevSlide();
//             }}
//           >
//             <Image
//               src={project.image}
//               alt={project.name}
//               width={400}
//               height={600}
//               className="object-cover rounded-sm"
//               onLoadingComplete={() => setIsLoading(false)}
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Metadata */}
//       <div className="absolute bottom-12 w-full flex justify-center text-xs tracking-widest z-20 text-black/70">
//         <p className="text-center">
//           {project.date} &nbsp;/&nbsp; {project.magazine} &nbsp;/&nbsp; {project.model}
//         </p>
//       </div>

//       {/* Slide Buttons */}
//       <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-6">
//         <button
//           onClick={prevSlide}
//           className="px-4 py-2 bg-white/70 hover:bg-white/90 text-xs uppercase tracking-wider"
//         >
//           Prev
//         </button>
//         <button
//           onClick={nextSlide}
//           className="px-4 py-2 bg-white/70 hover:bg-white/90 text-xs uppercase tracking-wider"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }





// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';

// const projects = [
//   {
//     id: 1,
//     image: '/Projects/SHOOT_SPEC_DEC2416.jpg',
//     name: 'EMMA CLARKE',
//     date: 'July 2025',
//     magazine: 'VOGUE Italia',
//     model: 'Emma Clarke',
//     tint: 'bg-[#e4dcd6]/40', // light warm beige
//   },
//   {
//     id: 2,
//     image: '/Projects/SAFAR_stephenbutkus9.jpg',
//     name: 'LUNA JAMES',
//     date: 'June 2025',
//     magazine: 'HYPEBAE',
//     model: 'Luna James',
//     tint: 'bg-[#d1e3e9]/40', // soft cool blue
//   },
//   // Add more entries...
// ];

// export default function ProjectCarousel() {
//   const [index, setIndex] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const project = projects[index];

//   const nextSlide = () => {
//     setIsLoading(true);
//     setIndex((prev) => (prev + 1) % projects.length);
//   };

//   const prevSlide = () => {
//     setIsLoading(true);
//     setIndex((prev) => (prev - 1 + projects.length) % projects.length);
//   };

//   return (
//     <div className={`relative w-full h-screen overflow-hidden font-serif text-black ${project.tint}`}>
//       {/* Background Image */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={project.image}
//           className="absolute inset-0 z-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <Image
//             src={project.image}
//             alt="bg"
//             fill
//             onLoadingComplete={() => setIsLoading(false)}
//             className="object-cover scale-110 blur-md transition duration-500"
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Custom cursor hit zones */}
//       <div
//         className="absolute left-0 top-0 w-1/2 h-full z-40 cursor-w-resize"
//         onClick={prevSlide}
//       />
//       <div
//         className="absolute right-0 top-0 w-1/2 h-full z-40 cursor-e-resize"
//         onClick={nextSlide}
//       />

//       {/* Large faded name overlay */}
//       <h1 className="absolute left-4 bottom-4 z-10 text-[15vw] font-extrabold tracking-tight opacity-10 pointer-events-none">
//         {project.name}
//       </h1>

//       {/* Top bar */}
//       <div className="absolute top-0 w-full px-6 pt-6 z-20 flex justify-between text-sm tracking-widest">
//         <div>HOME / ABOUT / CONTACT</div>
//         <div className="text-right">CONTACT ME TODAY</div>
//       </div>

//       {/* Center Image with drag + transition */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 max-w-[90vw] w-[400px] shadow-lg">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={project.id}
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: -100, opacity: 0 }}
//             transition={{ duration: 0.8 }}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             dragElastic={0.2}
//             onDragEnd={(e, info) => {
//               if (info.offset.x < -50) nextSlide();
//               else if (info.offset.x > 50) prevSlide();
//             }}
//           >
//             <Image
//               src={project.image}
//               alt={project.name}
//               width={400}
//               height={600}
//               className="object-cover rounded-sm"
//               onLoadingComplete={() => setIsLoading(false)}
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Metadata */}
//       <div className="absolute bottom-12 w-full flex justify-center text-xs tracking-widest z-20 text-black/70 pointer-events-none">
//         <p className="text-center">
//           {project.date} &nbsp;/&nbsp; {project.magazine} &nbsp;/&nbsp; {project.model}
//         </p>
//       </div>
//     </div>
//   );
// }







// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';

// const photos = [
//   {
//     id: 1,
//     image: '/Projects/SAFAR/SAFAR_stephenbutkus1.jpg',
//     about: 'This shot focuses on rich desert textures and ambient tones to reflect the SAFAR theme.',
//   },
//   {
//     id: 2,
//     image: '/Projects/SAFAR/SAFAR_stephenbutkus2.jpg',
//     about: 'An intimate moment of natural light showcasing organic fabrics and fluid motion.',
//   },
//   {
//     id: 3,
//     image: '/Projects/SAFAR/SAFAR_stephenbutkus3.jpg',
//     about: 'Desert wind meets minimal couture – a candid capture mid motion.',
//   },
//   {
//     id: 4,
//     image: '/Projects/SAFAR/SAFAR_stephenbutkus4.jpg',
//     about: 'Layered silhouettes in muted tones emphasizing texture over form.',
//   },
//   {
//     id: 5,
//     image: '/Projects/SAFAR/SAFAR_stephenbutkus5.jpg',
//     about: 'A wide shot capturing environmental stillness paired with poised elegance.',
//   },
//   {
//     id: 6,
//     image: '/Projects/SAFAR/SAFAR_stephenbutkus6.jpg',
//     about: 'Close-up portrait—detailing the model’s eyes, framing, and natural warmth.',
//   },
// ];

// export default function ProjectCarousel() {
//   const [index, setIndex] = useState(0);
//   const photo = photos[index];

//   return (
//     <div className="relative w-full h-screen overflow-hidden font-serif text-black bg-black">

//       {/* Static Background Image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/Projects/SAFAR/SAFAR_stephenbutkus9.jpg"
//           alt="Background"
//           fill
//           className="object-cover blur-md scale-110"
//           priority
//         />
//         <div className="absolute inset-0 bg-white/20" />
//       </div>

//       {/* Large faded background text */}
//       <h1 className="absolute left-10 bottom-8 z-0 text-[18vw] font-extrabold tracking-tight text-white opacity-10 pointer-events-none">
//         SAFAR
//       </h1>

//       {/* Side Navigation like folder structure */}
//       <div className="absolute left-[12vw] top-1/2 -translate-y-1/2 z-30 space-y-4 text-sm font-mono text-white">
//         {photos.map((item, i) => (
//           <button
//             key={item.id}
//             onClick={() => setIndex(i)}
//             className={`block px-3 py-1 rounded-md transition ${
//               i === index ? 'bg-white text-black' : 'hover:bg-white/20'
//             }`}
//           >
//             Image {i + 1}
//           </button>
//         ))}
//       </div>

//       {/* Main Image */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2 z-20">
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={photo.id}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -30 }}
//             transition={{ duration: 0.6 }}
//           >
//             <Image
//               src={photo.image}
//               alt={`SAFAR photo ${index + 1}`}
//               width={500}
//               height={700}
//               className="rounded shadow-xl object-cover"
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* About Text to the right of the image */}
//       <div className="absolute top-1/2 right-[8vw] transform -translate-y-1/2 z-30 w-[300px] text-sm text-white leading-relaxed bg-black/40 p-6 rounded-lg backdrop-blur-md">
//         <AnimatePresence mode="wait">
//           <motion.p
//             key={photo.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.6 }}
//           >
//             {photo.about}
//           </motion.p>
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }












// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import TypewriterDescription from './TypewriterDescription';


// const projectName = 'SAFAR';
// const backgroundImage = '/Projects/SAFAR/SAFAR_stephenbutkus9.jpg';

// const projectImages = [
//   { filename: 'SAFAR_stephenbutkus1.jpg', caption: 'The Journey Begins' },
//   { filename: 'SAFAR_stephenbutkus2.jpg', caption: 'Golden Hour' },
//   { filename: 'SAFAR_stephenbutkus3.jpg', caption: 'Behind the Scenes' },
//   { filename: 'SAFAR_stephenbutkus4.jpg', caption: 'Into the Light' },
//   { filename: 'SAFAR_stephenbutkus5.jpg', caption: 'Textures & Shadows' },
//   { filename: 'SAFAR_stephenbutkus6.jpg', caption: 'The Mood' },
//   { filename: 'SAFAR_stephenbutkus7.jpg', caption: 'Motion & Stillness' },
//   { filename: 'SAFAR_stephenbutkus8.jpg', caption: 'Final Frame' },
// ];

// export default function ProjectViewer() {
//   const [[index, direction], setIndex] = useState([0, 0]);

//   const paginate = (newDirection: number) => {
//     setIndex(([prevIndex]) => [
//       (prevIndex + newDirection + projectImages.length) % projectImages.length,
//       newDirection,
//     ]);
//   };

//   const image = projectImages[index];

//   return (
//     <div className="relative w-full h-screen overflow-hidden text-white">
//       <Image
//         src={backgroundImage}
//         alt="bg"
//         fill
//         priority
//         className="object-cover blur-sm scale-110 brightness-[.4]"
//       />
//       <div className="absolute inset-0 bg-black/30 z-0" />

//       <h1 className="absolute bottom-2 left-6 z-0 text-[16vw] font-extrabold opacity-10 pointer-events-none select-none">
//         {projectName}
//       </h1>

//       <div className="absolute top-1/2 left-[5vw] z-10 -translate-y-1/2 flex flex-col gap-4 font-mono text-sm">
//         <div className="font-bold text-white/70">📁 {projectName}</div>
//         {projectImages.map((img, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex([i, i > index ? 1 : -1])}
//             className={`text-left transition hover:text-white ${
//               i === index ? 'text-white font-semibold underline' : 'text-white/50'
//             }`}
//           >
//             {img.caption}
//           </button>
//         ))}
//       </div>

//       <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[420px]">
//         <AnimatePresence initial={false} custom={direction} mode="wait">
//           <motion.div
//             key={image.filename}
//             custom={direction}
//             variants={variants}
//             initial="enter"
//             animate="center"
//             exit="exit"
//             transition={{ duration: 0.5, ease: 'easeInOut' }}
//             drag="x"
//             dragConstraints={{ left: 0, right: 0 }}
//             dragElastic={0.2}
//             onDragEnd={(e, info) => {
//               if (info.offset.x < -50) paginate(1);
//               else if (info.offset.x > 50) paginate(-1);
//             }}
//             className="cursor-grab active:cursor-grabbing"
//           >
//             <Image
//               src={`/Projects/SAFAR/${image.filename}`}
//               alt={image.caption}
//               width={420}
//               height={600}
//               className="rounded-sm object-cover w-full h-auto"
//               draggable={false}
//             />
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       <div className="absolute top-1/2 right-6 -translate-y-1/2 z-10 w-[25vw] max-w-sm hidden md:block">
//   <motion.div
//     key={image.caption}
//     initial={{ opacity: 0, y: 40 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: -20 }}
//     transition={{ duration: 0.5 }}
//     className="bg-white/90 rounded-md p-6 shadow-xl border border-gray-300 font-serif text-black"
//   >
//     <h3 className="text-md font-semibold text-gray-700 mb-1">Project:</h3>
//     <p className="text-lg font-bold mb-2">{projectName} — July 2025</p>
//     <TypewriterDescription key={image.caption} text={image.caption} />
//   </motion.div>
// </div>

//     </div>
//   );
// }

// const variants = {
//   enter: (direction: number) => ({
//     x: direction > 0 ? 300 : -300,
//     opacity: 0,
//   }),
//   center: {
//     x: 0,
//     opacity: 1,
//   },
//   exit: (direction: number) => ({
//     x: direction < 0 ? 300 : -300,
//     opacity: 0,
//   }),
// };





'use client';
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const projectName = 'SAFAR';
const backgroundImage = '/Projects/SAFAR/SAFAR_stephenbutkus9.jpg';

const projectImages = [
  { filename: 'SAFAR_stephenbutkus1.jpg', caption: 'The Journey Begins' },
  { filename: 'SAFAR_stephenbutkus2.jpg', caption: 'Golden Hour' },
  { filename: 'SAFAR_stephenbutkus3.jpg', caption: 'Behind the Scenes' },
  { filename: 'SAFAR_stephenbutkus4.jpg', caption: 'Into the Light' },
  { filename: 'SAFAR_stephenbutkus5.jpg', caption: 'Textures & Shadows' },
  { filename: 'SAFAR_stephenbutkus6.jpg', caption: 'The Mood' },
  { filename: 'SAFAR_stephenbutkus7.jpg', caption: 'Motion & Stillness' },
  { filename: 'SAFAR_stephenbutkus8.jpg', caption: 'Final Frame' },
];

const projectDescription = `SAFAR is a journey through light, emotion, and texture. It explores the subtle interplay between motion and stillness, capturing not just what is seen, but what is felt. Each frame serves as a chapter in a broader visual narrative — moments that feel both personal and expansive.`;

export default function ProjectViewer() {
  const [[index, direction], setIndex] = useState([0, 0]);
  const [showContent, setShowContent] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [startTyping, setStartTyping] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  const paginate = (newDirection: number) => {
    setIndex(([prevIndex]) => [
      (prevIndex + newDirection + projectImages.length) % projectImages.length,
      newDirection,
    ]);
  };

  useEffect(() => {
    if (!startTyping) return;
    let i = 0;
    const interval = setInterval(() => {
      setTypedText((prev) => projectDescription.slice(0, i + 1));
      i++;
      if (i >= projectDescription.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [startTyping]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroComplete(true);
      setTimeout(() => {
        setShowContent(true);
        setStartTyping(true);
      }, 600);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const image = projectImages[index];

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      <Image
        src={backgroundImage}
        alt="bg"
        fill
        priority
        className="object-cover scale-110 blur-sm brightness-[.4] transition-all duration-[2000ms]"
      />

      {/* Title: bottom left */}
      <motion.h1
        initial={{
          opacity: 0,
          scale: 1.5,
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          position: 'absolute',
        }}
        animate={
          introComplete
            ? {
                opacity: 1,
                scale: 1,
                top: 'auto',
                bottom: '2rem',
                left: '2rem',
                x: 0,
                y: 0,
                position: 'absolute',
              }
            : {}
        }
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="z-0 text-[16vw] font-extrabold pointer-events-none select-none text-white/80"
      >
        {projectName}
      </motion.h1>

      <AnimatePresence>
        {showContent && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-black/30 z-0"
            />

            {/* Centered Content Row */}
            <div className="absolute inset-0 flex items-center justify-center gap-[3vw] z-10 px-[5vw]">

              {/* Folder Nav */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
                className="flex flex-col gap-4 font-mono text-sm w-[18vw] max-w-xs"
              >
                <div className="font-bold text-white/70">📁 {projectName}</div>
                {projectImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex([i, i > index ? 1 : -1])}
                    className={`text-left transition hover:text-white ${
                      i === index ? 'text-white font-semibold underline' : 'text-white/50'
                    }`}
                  >
                    {img.caption}
                  </button>
                ))}
              </motion.div>

              {/* Center Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                className="w-[28vw] max-w-[420px]"
              >
                <AnimatePresence initial={false} custom={direction} mode="wait">
                  <motion.div
                    key={image.filename}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(e, info) => {
                      if (info.offset.x < -50) paginate(1);
                      else if (info.offset.x > 50) paginate(-1);
                    }}
                    className="cursor-grab active:cursor-grabbing"
                  >
                    <Image
                      src={`/Projects/SAFAR/${image.filename}`}
                      alt={image.caption}
                      width={420}
                      height={600}
                      className="rounded-sm object-cover w-full h-auto"
                      draggable={false}
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              {/* About Panel */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 1 }}
                className="w-[22vw] max-w-sm hidden md:block"
              >
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-md border border-white/20">
                  <h2 className="text-xl font-bold mb-2">About this Project</h2>
                  <p className="text-sm text-white/80 leading-relaxed whitespace-pre-wrap">
                    {typedText}
                  </p>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};
