// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';

// const images = [
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus1.jpg',
//     caption: 'The Journey Begins',
//     prompt: 'PHOTO UP OF A BEARDED MAN ...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus2.jpg',
//     caption: 'Golden Hour',
//     prompt: 'PHOTO UP OF A BEARDED MAN ...',
//   },
//   // Add more
// ];

// export default function ImageGallery() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   return (
//     <div className="relative min-h-screen bg-black text-white">
//       <h1 className="absolute top-10 left-10 text-6xl text-white/30 font-bold pointer-events-none z-10">
//         AI Photography
//       </h1>

//       <div className="flex gap-6 px-10 pt-32 overflow-x-scroll snap-x snap-mandatory">
//         {images.map((img, idx) => (
//           <div
//             key={idx}
//             className="min-w-[300px] h-[450px] relative snap-start cursor-pointer group"
//             onClick={() => setActiveIndex(idx)}
//           >
//             <Image src={img.src} alt={img.caption} layout="fill" objectFit="cover" className="rounded-lg" />
//             <button className="absolute bottom-4 right-4 bg-white/10 px-3 py-1 rounded text-xs group-hover:bg-white/20">
//               Copy Prompt
//             </button>
//           </div>
//         ))}
//       </div>

//       <AnimatePresence>
//         {activeIndex !== null && (
//           <motion.div
//             className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               initial={{ scale: 0.9, y: 100 }}
//               animate={{ scale: 1, y: 0 }}
//               exit={{ scale: 0.9, y: 100 }}
//               transition={{ duration: 0.5 }}
//               className="relative w-11/12 h-[80vh]"
//             >
//               <Image src={images[activeIndex].src} alt="Zoomed" layout="fill" objectFit="contain" />
//               <button
//                 onClick={() => setActiveIndex(null)}
//                 className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 px-4 py-1 rounded"
//               >
//                 Close
//               </button>
//               <div className="absolute bottom-4 left-4 max-w-xl text-sm">
//                 <p>{images[activeIndex].caption}</p>
//                 <p className="text-white/60 mt-2 text-xs">{images[activeIndex].prompt}</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }



















// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// const images = [
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus1.jpg',
//     caption: 'The Journey Begins',
//     prompt: 'PHOTO UP OF A BEARDED MAN WEARING A HIGH SKATE FASHION...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus2.jpg',
//     caption: 'Golden Hour',
//     prompt: 'CLOTHING GREEN, BROWN CLEAR SUNGLASSES (GLASSES)...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus3.jpg',
//     caption: 'Graffiti Light',
//     prompt: 'BACKGROUND IS DARK, MODERATE LIGHTING IN THE ROOM...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus4.jpg',
//     caption: 'Moody Frame',
//     prompt: 'TAKEN ON A 50MM CAMERA LENS, PROFESSIONAL PHOTOGRAPH...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus5.jpg',
//     caption: 'Focused Shadow',
//     prompt: 'HIGH SKIN DETAILS, UNDERGROUND CULTURE --v 6.0 --AR 9:16',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus6.jpg',
//     caption: 'Urban Blur',
//     prompt: 'PHOTO PORTRAIT STYLE IN DARK STREET SETTING...',
//   },
// ];

// export default function ProjectViewer() {
//   const [pageIndex, setPageIndex] = useState(0);
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

//   const itemsPerPage = 3;
//   const maxPage = Math.floor(images.length / itemsPerPage);

//   const start = pageIndex * itemsPerPage;
//   const currentImages = images.slice(start, start + itemsPerPage);

//   const handleNext = () => setPageIndex((prev) => Math.min(prev + 1, maxPage));
//   const handlePrev = () => setPageIndex((prev) => Math.max(prev - 1, 0));
  

//   return (
//     <div className="relative bg-black min-h-screen text-white px-8 py-20">
//       <h1 className="absolute top-8 left-10 text-6xl text-white/30 font-extrabold pointer-events-none z-0">
//         AI Photography
//       </h1>

//       {/* Main Gallery */}
//       <div className="flex justify-center items-center gap-6 z-10 relative">
//         <button
//           onClick={handlePrev}
//           disabled={pageIndex === 0}
//           className="hover:text-white disabled:opacity-20"
//         >
//           <ChevronLeft size={40} />
//         </button>

//         {currentImages.map((img, i) => {
//           const index = start + i;
//           return (
//             <motion.div
//               key={index}
//               layoutId={`card-${index}`}
//               className="relative w-[300px] h-[450px] overflow-hidden rounded-lg cursor-pointer group"
//               onClick={() => setExpandedIndex(index)}
//               whileHover={{ scale: 1.02 }}
//             >
//               <motion.div layoutId={`img-${index}`} className="w-full h-full relative">
//                 <Image
//                   src={img.src}
//                   alt={img.caption}
//                   fill
//                   className="object-cover"
//                 />
//               </motion.div>
//               <div className="absolute bottom-4 right-4 bg-white/10 text-xs px-3 py-1 rounded group-hover:bg-white/20 transition">
//                 View Image
//               </div>
//             </motion.div>
//           );
//         })}

//         <button
//           onClick={handleNext}
//           disabled={pageIndex === maxPage}
//           className="hover:text-white disabled:opacity-20"
//         >
//           <ChevronRight size={40} />
//         </button>
//       </div>

//       {/* Fullscreen View */}
//       <AnimatePresence>
//   {expandedIndex !== null && (
//     <motion.div
//       className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center px-6"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       {(() => {
//         const positionInRow = expandedIndex % itemsPerPage;
//         // const positionInRow = expandedIndex !== null ? expandedIndex % itemsPerPage : 1;

//         const xOffset = positionInRow === 0
//           ? '-30vw' // Left image slides from left to right
//           : positionInRow === 2
//           ? '30vw'  // Right image slides from right to left
//           : '0vw';  // Middle image just zooms in place

//         return (
//           <motion.div
//             layoutId={`img-${expandedIndex}`}
//             initial={{ scale: 0.9, x: xOffset, opacity: 0 }}
//             animate={{ scale: 1, x: 0, opacity: 1 }}
//             exit={{ scale: 0.9, x: xOffset, opacity: 0 }}
//             transition={{ duration: 0.5, ease: 'easeInOut' }}
//             className="relative w-full max-w-6xl h-[75vh] rounded-lg overflow-hidden"
//           >
//             <Image
//               src={images[expandedIndex].src}
//               alt="Expanded"
//               fill
//               className="object-cover object-center"
//               priority
//             />

//             <button
//               onClick={() => setExpandedIndex(null)}
//               className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded"
//             >
//               <X size={24} />
//             </button>
//           </motion.div>
//         );
//       })()}

//       {/* Caption Text */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         exit={{ opacity: 0, y: 40 }}
//         transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
//         className="mt-8 text-center max-w-4xl"
//       >
//         <h2 className="text-2xl font-bold">{images[expandedIndex].caption}</h2>
//         <p className="text-white/70 mt-2 text-sm leading-relaxed">
//           {images[expandedIndex].prompt}
//         </p>
//       </motion.div>
//     </motion.div>
//   )}
// </AnimatePresence>


//     </div>
//   );
// }







// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// const images = [
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus1.jpg',
//     caption: 'The Journey Begins',
//     prompt: 'PHOTO UP OF A BEARDED MAN WEARING A HIGH SKATE FASHION...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus2.jpg',
//     caption: 'Golden Hour',
//     prompt: 'CLOTHING GREEN, BROWN CLEAR SUNGLASSES...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus3.jpg',
//     caption: 'Urban Portrait',
//     prompt: 'MODERATE LIGHTING, DARK BACKDROP...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus4.jpg',
//     caption: 'Tattoo Closeup',
//     prompt: 'CINEMATIC SHADOW DETAILING...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus5.jpg',
//     caption: 'Eyes Hidden',
//     prompt: 'AE STYLE MAGAZINE SHADOW REEL...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus6.jpg',
//     caption: 'Graffiti Hue',
//     prompt: 'NEON BACKDROP, FULL COLOR RANGE...',
//   },
// ];

// export default function ProjectViewer() {
//   const [pageIndex, setPageIndex] = useState(0);
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

//   const itemsPerPage = 3;
//   const maxPage = Math.floor(images.length / itemsPerPage);
//   const start = pageIndex * itemsPerPage;
//   const currentImages = images.slice(start, start + itemsPerPage);

//   const handleNext = () => setPageIndex((prev) => Math.min(prev + 1, maxPage));
//   const handlePrev = () => setPageIndex((prev) => Math.max(prev - 1, 0));

//   return (
//     <div className="relative bg-black min-h-screen text-white px-8 py-20">
//       <h1 className="absolute top-8 left-10 text-6xl text-white/30 font-extrabold pointer-events-none z-0">
//         AI Photography
//       </h1>

//       {/* Gallery Row */}
//       <div className="flex justify-center items-center gap-6 z-10 relative">
//         <button
//           onClick={handlePrev}
//           disabled={pageIndex === 0}
//           className="hover:text-white disabled:opacity-20"
//         >
//           <ChevronLeft size={40} />
//         </button>

//         {currentImages.map((img, i) => {
//           const globalIndex = start + i;
//           const isExpanded = expandedIndex === globalIndex;

//           return (
//             <motion.div
//               key={globalIndex}
//               layoutId={`card-${globalIndex}`}
//               className={`relative w-[300px] h-[450px] rounded-lg overflow-hidden cursor-pointer ${
//                 expandedIndex !== null && !isExpanded
//                   ? 'pointer-events-none blur-sm opacity-30 scale-[.98] transition-all'
//                   : ''
//               }`}
//               onClick={() => setExpandedIndex(globalIndex)}
//               whileHover={{ scale: expandedIndex === null ? 1.02 : 1 }}
//             >
//               <motion.div layoutId={`img-${globalIndex}`} className="relative w-full h-full">
//                 <Image
//                   src={img.src}
//                   alt={img.caption}
//                   fill
//                   className="object-cover"
//                 />
//               </motion.div>
//               <div className="absolute bottom-4 right-4 text-xs bg-white/10 hover:bg-white/20 px-3 py-1 rounded transition">
//                 Copy Prompt
//               </div>
//             </motion.div>
//           );
//         })}

//         <button
//           onClick={handleNext}
//           disabled={pageIndex === maxPage}
//           className="hover:text-white disabled:opacity-20"
//         >
//           <ChevronRight size={40} />
//         </button>
//       </div>

//       {/* Expanded Image Overlay */}
//       <AnimatePresence>
//         {expandedIndex !== null && (
//           <motion.div
//             layoutId={`card-${expandedIndex}`}
//             className="fixed inset-0 z-50 bg-black/80 flex flex-col items-center justify-center px-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               layoutId={`img-${expandedIndex}`}
//               className="relative w-full max-w-6xl h-[75vh] rounded-lg overflow-hidden"
//               transition={{ type: 'spring', damping: 25, stiffness: 120 }}
//             >
//               <Image
//                 src={images[expandedIndex].src}
//                 alt="Expanded"
//                 fill
//                 className="object-cover object-center"
//                 priority
//               />
//               <button
//                 onClick={() => setExpandedIndex(null)}
//                 className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded"
//               >
//                 <X size={24} />
//               </button>
//             </motion.div>

//             {/* Text Slides Up */}
//             <motion.div
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 40 }}
//               transition={{ delay: 0.2 }}
//               className="mt-8 text-center max-w-3xl"
//             >
//               <h2 className="text-2xl font-bold">{images[expandedIndex].caption}</h2>
//               <p className="text-white/70 mt-2 text-sm leading-relaxed">
//                 {images[expandedIndex].prompt}
//               </p>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }











// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
// import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// const images = [
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus1.jpg',
//     caption: 'The Journey Begins',
//     prompt: 'PHOTO UP OF A BEARDED MAN WEARING A HIGH SKATE FASHION...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus2.jpg',
//     caption: 'Golden Hour',
//     prompt: 'CLOTHING GREEN, BROWN CLEAR SUNGLASSES...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus3.jpg',
//     caption: 'Urban Portrait',
//     prompt: 'MODERATE LIGHTING, DARK BACKDROP...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus4.jpg',
//     caption: 'Tattoo Closeup',
//     prompt: 'CINEMATIC SHADOW DETAILING...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus5.jpg',
//     caption: 'Eyes Hidden',
//     prompt: 'AE STYLE MAGAZINE SHADOW REEL...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus6.jpg',
//     caption: 'Graffiti Hue',
//     prompt: 'NEON BACKDROP, FULL COLOR RANGE...',
//   },
// ];

// export default function ProjectViewer() {
//   const [page, setPage] = useState(0);
//   const [active, setActive] = useState<number | null>(null);

//   const perPage = 3;
//   const start = page * perPage;
//   const current = images.slice(start, start + perPage);

//   return (
//     <LayoutGroup>
//       <div className="relative bg-black text-white min-h-screen px-8 py-16">
//         <div className="flex justify-between items-center mb-10">
//           <button
//             onClick={() => setPage((p) => Math.max(p - 1, 0))}
//             className="text-white hover:text-gray-300 disabled:opacity-30"
//             disabled={page === 0}
//           >
//             <ChevronLeft size={40} />
//           </button>
//           <h1 className="text-4xl font-bold text-white/40">AI Photography</h1>
//           <button
//             onClick={() => setPage((p) => Math.min(p + 1, Math.floor((images.length - 1) / perPage)))}
//             className="text-white hover:text-gray-300 disabled:opacity-30"
//             disabled={page >= Math.floor((images.length - 1) / perPage)}
//           >
//             <ChevronRight size={40} />
//           </button>
//         </div>

//         <div className="flex justify-center gap-6">
//           {current.map((img, i) => {
//             const idx = start + i;
//             const isActive = idx === active;

//             return (
//               <motion.div
//                 key={idx}
//                 layoutId={`card-${idx}`}
//                 layout
//                 onClick={() => setActive(idx)}
//                 initial={false}
//                 animate={{
//                   opacity: active === null ? 1 : isActive ? 1 : 0.3,
//                   filter: active === null ? 'blur(0px)' : isActive ? 'blur(0px)' : 'blur(4px)',
//                   scale: active === null ? 1 : isActive ? 1 : 0.97,
//                 }}
//                 transition={{ duration: 0.4 }}
//                 className="relative w-[300px] h-[450px] rounded-xl overflow-hidden cursor-pointer"
//               >
//                 <motion.div layoutId={`img-${idx}`} layout className="w-full h-full relative">
//                   <Image
//                     src={img.src}
//                     alt={img.caption}
//                     fill
//                     className="object-cover rounded-xl"
//                   />
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </div>

//         <AnimatePresence>
//           {active !== null && (
//             <motion.div
//               className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//             >
//               <motion.div
//                 layoutId={`card-${active}`}
//                 layout
//                 className="relative w-[90vw] h-[80vh] rounded-lg overflow-hidden bg-black"
//                 transition={{ type: 'spring', stiffness: 200, damping: 30 }}
//               >
//                 <motion.div layoutId={`img-${active}`} layout="size" className="w-full h-full relative">
//                   <Image
//                     src={images[active].src}
//                     alt={images[active].caption}
//                     fill
//                     className="object-cover"
//                   />
//                 </motion.div>

//                 <button
//                   onClick={() => setActive(null)}
//                   className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-2 rounded"
//                 >
//                   <X size={24} />
//                 </button>

//                 <motion.div
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 40 }}
//                   transition={{ delay: 0.2 }}
//                   className="absolute bottom-6 left-6 max-w-2xl text-white"
//                 >
//                   <h2 className="text-2xl font-bold">{images[active].caption}</h2>
//                   <p className="text-sm text-white/70 mt-2">{images[active].prompt}</p>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </LayoutGroup>
//   );
// }










// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
// import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// const images = [
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus1.jpg',
//     caption: 'The Journey Begins',
//     prompt: 'PHOTO UP OF A BEARDED MAN WEARING A HIGH SKATE FASHION...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus2.jpg',
//     caption: 'Golden Hour',
//     prompt: 'CLOTHING GREEN, BROWN CLEAR SUNGLASSES...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus3.jpg',
//     caption: 'Urban Portrait',
//     prompt: 'MODERATE LIGHTING, DARK BACKDROP...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus4.jpg',
//     caption: 'Tattoo Closeup',
//     prompt: 'CINEMATIC SHADOW DETAILING...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus5.jpg',
//     caption: 'Eyes Hidden',
//     prompt: 'AE STYLE MAGAZINE SHADOW REEL...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus6.jpg',
//     caption: 'Graffiti Hue',
//     prompt: 'NEON BACKDROP, FULL COLOR RANGE...',
//   },
// ];

// export default function ProjectViewer() {
//   const [page, setPage] = useState(0);
//   const [active, setActive] = useState<number | null>(null);

//   const perPage = 3;
//   const start = page * perPage;
//   const current = images.slice(start, start + perPage);

//   return (
//     <LayoutGroup>
//       <div className="relative bg-black text-white min-h-screen px-8 py-16">
//         <div className="flex justify-between items-center mb-10">
//           <button
//             onClick={() => setPage((p) => Math.max(p - 1, 0))}
//             className="text-white hover:text-gray-300 disabled:opacity-30"
//             disabled={page === 0}
//           >
//             <ChevronLeft size={40} />
//           </button>
//           <h1 className="text-4xl font-bold text-white/40">AI Photography</h1>
//           <button
//             onClick={() => setPage((p) => Math.min(p + 1, Math.floor((images.length - 1) / perPage)))}
//             className="text-white hover:text-gray-300 disabled:opacity-30"
//             disabled={page >= Math.floor((images.length - 1) / perPage)}
//           >
//             <ChevronRight size={40} />
//           </button>
//         </div>

//         <div className="flex justify-center gap-6">
//           {current.map((img, i) => {
//             const idx = start + i;
//             const isActive = idx === active;

//             return (
//               <motion.div
//                 key={idx}
//                 layoutId={`card-${idx}`} // Unique layoutId for each card
//                 onClick={() => setActive(idx)}
//                 initial={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
//                 animate={{
//                   opacity: active === null ? 1 : isActive ? 1 : 0.3,
//                   filter: active === null ? 'blur(0px)' : isActive ? 'blur(0px)' : 'blur(4px)',
//                   scale: active === null ? 1 : isActive ? 1 : 0.97,
//                 }}
//                 exit={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
//                 transition={{ duration: 0.4, ease: "easeInOut" }}
//                 className="relative w-[300px] h-[450px] rounded-xl overflow-hidden cursor-pointer"
//               >
//                 <motion.div layoutId={`img-${idx}`} className="w-full h-full relative">
//                   <Image
//                     src={img.src}
//                     alt={img.caption}
//                     fill
//                     className="object-cover rounded-xl"
//                   />
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </div>

//         <AnimatePresence>
//           {active !== null && (
//             <motion.div
//               className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3, ease: "easeInOut" }}
//             >
//               <motion.div
//                 layoutId={`card-${active}`} // Match layoutId with the card
//                 className="relative w-[90vw] h-[80vh] rounded-lg overflow-hidden bg-black"
//                 initial={{ scale: 0.9 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0.9 }}
//                 transition={{ type: 'spring', stiffness: 200, damping: 30 }}
//               >
//                 <motion.div layoutId={`img-${active}`} className="w-full h-full relative">
//                   <Image
//                     src={images[active].src}
//                     alt={images[active].caption}
//                     fill
//                     className="object-cover"
//                   />
//                 </motion.div>

//                 <button
//                   onClick={() => setActive(null)}
//                   className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-2 rounded"
//                 >
//                   <X size={24} />
//                 </button>

//                 <motion.div
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 40 }}
//                   transition={{ delay: 0.2 }}
//                   className="absolute bottom-6 left-6 max-w-2xl text-white"
//                 >
//                   <h2 className="text-2xl font-bold">{images[active].caption}</h2>
//                   <p className="text-sm text-white/70 mt-2">{images[active].prompt}</p>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </LayoutGroup>
//   );
// }









// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
// import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// const images = [
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus1.jpg',
//     caption: 'The Journey Begins',
//     prompt: 'PHOTO UP OF A BEARDED MAN WEARING A HIGH SKATE FASHION...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus2.jpg',
//     caption: 'Golden Hour',
//     prompt: 'CLOTHING GREEN, BROWN CLEAR SUNGLASSES...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus3.jpg',
//     caption: 'Urban Portrait',
//     prompt: 'MODERATE LIGHTING, DARK BACKDROP...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus4.jpg',
//     caption: 'Tattoo Closeup',
//     prompt: 'CINEMATIC SHADOW DETAILING...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus5.jpg',
//     caption: 'Eyes Hidden',
//     prompt: 'AE STYLE MAGAZINE SHADOW REEL...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus6.jpg',
//     caption: 'Graffiti Hue',
//     prompt: 'NEON BACKDROP, FULL COLOR RANGE...',
//   },
// ];

// export default function ProjectViewer() {
//   const [page, setPage] = useState(0);
//   const [active, setActive] = useState<number | null>(null);

//   const perPage = 3;
//   const start = page * perPage;
//   const current = images.slice(start, start + perPage);

//   return (
//     <LayoutGroup>
//       <div className="relative bg-black text-white min-h-screen px-8 py-16">
//         <div className="flex justify-between items-center mb-10">
//           <button
//             onClick={() => setPage((p) => Math.max(p - 1, 0))}
//             className="text-white hover:text-gray-300 disabled:opacity-30"
//             disabled={page === 0}
//           >
//             <ChevronLeft size={40} />
//           </button>
//           <h1 className="text-4xl font-bold text-white/40">AI Photography</h1>
//           <button
//             onClick={() => setPage((p) => Math.min(p + 1, Math.floor((images.length - 1) / perPage)))}
//             className="text-white hover:text-gray-300 disabled:opacity-30"
//             disabled={page >= Math.floor((images.length - 1) / perPage)}
//           >
//             <ChevronRight size={40} />
//           </button>
//         </div>

//         <div className="flex justify-center gap-6">
//           {current.map((img, i) => {
//             const idx = start + i;
//             const isActive = idx === active;

//             return (
//               <motion.div
//                 key={idx}
//                 layoutId={`card-${idx}`}
//                 onClick={() => setActive(idx)}
//                 initial={{ scale: 1, opacity: 1 }}
//                 animate={{
//                   opacity: active === null ? 1 : isActive ? 1 : 0.3,
//                   scale: active === null ? 1 : isActive ? 1 : 0.97,
//                 }}
//                 exit={{ scale: 1, opacity: 1 }}
//                 transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
//                 style={{ willChange: 'transform, opacity' }}
//                 className="relative w-[300px] h-[450px] rounded-xl overflow-hidden cursor-pointer"
//               >
//                 <motion.div layoutId={`img-${idx}`} className="w-full h-full relative">
//                   <Image
//                     src={img.src}
//                     alt={img.caption}
//                     fill
//                     className="object-cover rounded-xl"
//                     priority={true}
//                   />
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </div>

//         <AnimatePresence>
//           {active !== null && (
//             <motion.div
//               className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }} // Slower fade for background
//             >
//               <motion.div
//                 layoutId={`card-${active}`}
//                 className="relative w-[90vw] h-[80vh] rounded-lg overflow-hidden bg-black"
//                 initial={{ scale: 0.95 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0.7, opacity: 0 }} // Scale down and fade out on close
//                 transition={{ type: 'spring', stiffness: 200, damping: 30, duration: 0.6 }} // Slower spring for zoom
//                 style={{ willChange: 'transform' }}
//               >
//                 <motion.div layoutId={`img-${active}`} className="w-full h-full relative">
//                   <Image
//                     src={images[active].src}
//                     alt={images[active].caption}
//                     fill
//                     className="object-cover"
//                     priority={true}
//                   />
//                 </motion.div>

//                 <button
//                   onClick={() => setActive(null)}
//                   className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-2 rounded"
//                 >
//                   <X size={24} />
//                 </button>

//                 <motion.div
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 40 }}
//                   transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
//                   className="absolute bottom-6 left-6 max-w-2xl text-white"
//                 >
//                   <h2 className="text-2xl font-bold">{images[active].caption}</h2>
//                   <p className="text-sm text-white/70 mt-2">{images[active].prompt}</p>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </LayoutGroup>
//   );
// }












// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
// import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// const images = [
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus1.jpg',
//     caption: 'The Journey Begins',
//     prompt: 'PHOTO UP OF A BEARDED MAN WEARING A HIGH SKATE FASHION...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus2.jpg',
//     caption: 'Golden Hour',
//     prompt: 'CLOTHING GREEN, BROWN CLEAR SUNGLASSES...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus3.jpg',
//     caption: 'Urban Portrait',
//     prompt: 'MODERATE LIGHTING, DARK BACKDROP...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus4.jpg',
//     caption: 'Tattoo Closeup',
//     prompt: 'CINEMATIC SHADOW DETAILING...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus5.jpg',
//     caption: 'Eyes Hidden',
//     prompt: 'AE STYLE MAGAZINE SHADOW REEL...',
//   },
//   {
//     src: '/Projects/SAFAR/SAFAR_stephenbutkus6.jpg',
//     caption: 'Graffiti Hue',
//     prompt: 'NEON BACKDROP, FULL COLOR RANGE...',
//   },
// ];

// export default function ProjectViewer() {
//   const [page, setPage] = useState(0);
//   const [active, setActive] = useState<number | null>(null);

//   const perPage = 3;
//   const start = page * perPage;
//   const current = images.slice(start, start + perPage);

//   return (
//     <LayoutGroup>
//       <div className="relative bg-black text-white min-h-screen px-8 py-16">
//         <div className="flex justify-between items-center mb-10">
//           <button
//             onClick={() => setPage((p) => Math.max(p - 1, 0))}
//             className="text-white hover:text-gray-300 disabled:opacity-30"
//             disabled={page === 0}
//           >
//             <ChevronLeft size={40} />
//           </button>
//           <h1 className="text-4xl font-bold text-white/40">AI Photography</h1>
//           <button
//             onClick={() => setPage((p) => Math.min(p + 1, Math.floor((images.length - 1) / perPage)))}
//             className="text-white hover:text-gray-300 disabled:opacity-30"
//             disabled={page >= Math.floor((images.length - 1) / perPage)}
//           >
//             <ChevronRight size={40} />
//           </button>
//         </div>

//         <div className="flex justify-center gap-6">
//           {current.map((img, i) => {
//             const idx = start + i;
//             const isActive = idx === active;

//             return (
//               <motion.div
//                 key={idx}
//                 layoutId={`card-${idx}`}
//                 onClick={() => setActive(idx)}
//                 initial={{ opacity: 1 }}
//                 animate={{
//                   opacity: active === null ? 1 : isActive ? 1 : 0.3,
//                 }}
//                 exit={{ opacity: 1 }}
//                 transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
//                 style={{ willChange: 'opacity' }}
//                 className="relative w-[300px] h-[450px] rounded-xl overflow-hidden cursor-pointer"
//               >
//                 <motion.div layoutId={`img-${idx}`} className="w-full h-full relative">
//                   <Image
//                     src={img.src}
//                     alt={img.caption}
//                     fill
//                     className="object-cover rounded-xl"
//                     priority={true}
//                     sizes="(max-width: 300px) 100vw, 300px"
//                   />
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </div>

//         <AnimatePresence>
//           {active !== null && (
//             <motion.div
//               className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
//             >
//               <motion.div
//                 layoutId={`card-${active}`}
//                 className="relative w-[90vw] h-[calc(90vw*1.5)] rounded-lg overflow-hidden bg-black" // Match aspect ratio
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 1, duration: 0.6 }}
//                 style={{ willChange: 'transform' }}
//               >
//                 <motion.div layoutId={`img-${active}`} className="w-full h-full relative">
//                   <Image
//                     src={images[active].src}
//                     alt={images[active].caption}
//                     fill
//                     className="object-cover"
//                     priority={true}
//                     sizes="(max-width: 90vw) 100vw, 90vw"
//                   />
//                 </motion.div>

//                 <button
//                   onClick={() => setActive(null)}
//                   className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-2 rounded"
//                 >
//                   <X size={24} />
//                 </button>

//                 <motion.div
//                   initial={{ opacity: 0, y: 40 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: 40 }}
//                   transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
//                   className="absolute bottom-6 left-6 max-w-2xl text-white"
//                 >
//                   <h2 className="text-2xl font-bold">{images[active].caption}</h2>
//                   <p className="text-sm text-white/70 mt-2">{images[active].prompt}</p>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </LayoutGroup>
//   );
// }
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const images = [
  {
    src: '/Projects/SAFAR/SAFAR_stephenbutkus1.jpg',
    caption: 'The Journey Begins',
    prompt: 'PHOTO UP OF A BEARDED MAN WEARING A HIGH SKATE FASHION...',
  },
  {
    src: '/Projects/SAFAR/SAFAR_stephenbutkus2.jpg',
    caption: 'Golden Hour',
    prompt: 'CLOTHING GREEN, BROWN CLEAR SUNGLASSES...',
  },
  {
    src: '/Projects/SAFAR/SAFAR_stephenbutkus3.jpg',
    caption: 'Urban Portrait',
    prompt: 'MODERATE LIGHTING, DARK BACKDROP...',
  },
  {
    src: '/Projects/SAFAR/SAFAR_stephenbutkus4.jpg',
    caption: 'Tattoo Closeup',
    prompt: 'CINEMATIC SHADOW DETAILING...',
  },
  {
    src: '/Projects/SAFAR/SAFAR_stephenbutkus5.jpg',
    caption: 'Eyes Hidden',
    prompt: 'AE STYLE MAGAZINE SHADOW REEL...',
  },
  {
    src: '/Projects/SAFAR/SAFAR_stephenbutkus6.jpg',
    caption: 'Graffiti Hue',
    prompt: 'NEON BACKDROP, FULL COLOR RANGE...',
  },
];

export default function ProjectViewer() {
  const [page, setPage] = useState<number>(0);
  const [active, setActive] = useState<number | null>(null);
  const [direction, setDirection] = useState<number>(0); // Track direction: 1 for right, -1 for left

  const perPage = 3;
  const start = page * perPage;
  const current = images.slice(start, start + perPage);

  // Handle page change and set direction
  const handlePageChange = (newPage: number) => {
    setDirection(newPage > page ? 1 : -1);
    setPage(newPage);
  };

  // Variants for slide animation
  const slideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    animate: {
      x: '0%',
      opacity: 1,
      transition: {
        x: { duration: 0.6, ease: 'linear' },
        opacity: { duration: 0.6, ease: 'linear' },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        x: { duration: 0.6, ease: 'linear' },
        opacity: { duration: 0.6, ease: 'linear' },
      },
    }),
  };

  // Variants for hop animation
  const hopVariants = {
    initial: { y: 0 },
    animate: (i: number) => ({
      y: [0, -20, 0],
      transition: {
        y: {
          delay: 0.6 + i * 0.1, // Staggered hop after slide
          duration: 0.25,
          ease: 'easeOut',
        },
      },
    }),
  };

  return (
    <div className="relative bg-black text-white min-h-screen px-8 py-16">
      <div className="flex justify-between items-center mb-10">
        <button
          onClick={() => handlePageChange(Math.max(page - 1, 0))}
          className="text-white hover:text-gray-300 disabled:opacity-30"
          disabled={page === 0}
        >
          <ChevronLeft size={40} />
        </button>
        <h1 className="text-4xl font-bold text-white/40">SAFAR</h1>
        <button
          onClick={() => handlePageChange(Math.min(page + 1, Math.floor((images.length - 1) / perPage)))}
          className="text-white hover:text-gray-300 disabled:opacity-30"
          disabled={page >= Math.floor((images.length - 1) / perPage)}
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="relative w-full min-h-[450px] overflow-visible flex justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ 
              display: 'flex', 
              gap: '24px', 
              position: 'absolute',
              willChange: 'transform, opacity' 
            }}
          >
            {current.map((img, i) => (
              <motion.div
                key={start + i}
                custom={i}
                variants={hopVariants}
                initial="initial"
                animate="animate"
                style={{ 
                  width: '300px', 
                  height: '450px', 
                  flexShrink: 0,
                  position: 'relative',
                  willChange: 'transform' 
                }}
                className="rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setActive(start + i)}
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover rounded-xl"
                  priority={true}
                  sizes="(max-width: 300px) 100vw, 300px"
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'linear' }}
          >
            <motion.div
              className="relative w-[90vw] h-[80vh] rounded-lg overflow-hidden bg-black"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 1 }}
              style={{ willChange: 'transform' }}
            >
              <div className="w-full h-full relative">
                <Image
                  src={images[active].src}
                  alt={images[active].caption}
                  fill
                  className="object-cover"
                  priority={true}
                  sizes="(max-width: 90vw) 100vw, 90vw"
                />
              </div>

              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-2 rounded"
              >
                <X size={24} />
              </button>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.3, ease: 'linear' }}
                className="absolute bottom-6 left-6 max-w-2xl text-white"
              >
                <h2 className="text-2xl font-bold">{images[active].caption}</h2>
                <p className="text-sm text-white/70 mt-2">{images[active].prompt}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}