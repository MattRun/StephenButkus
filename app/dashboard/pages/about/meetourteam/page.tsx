// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion"; // Removed AnimatePresence import
// import Image from "next/image";

// type TeamMember = {
//   name: string;
//   title: string;
//   image: string;
//   description: string;
//   fullBio: React.ReactNode;
// };

// const teamMembers: TeamMember[] = [
//   {
//     name: "Steve Vaughn",
//     title: "Laboratory Manager",
//     image: "/pinnaclelab/Headshots:GroupPhotos/Steve.png",
//     description: "Steve oversees daily operations to ensure accuracy and efficiency.",
//     fullBio: (
//       <div>
//         <p>Hi, I am</p>
//         <h2 className="text-3xl font-bold">Steve Vaughn</h2>
//         <p className="text-xl">Laboratory Manager</p>
//         <h3 className="mt-4 font-bold">Education</h3>
//         <ul className="list-disc list-inside">
//           <li>Geology – El Camino College</li>
//           <li>Occupational Safety & Health – Waldorf University</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Experience</h3>
//         <ul className="list-disc list-inside">
//           <li>Laboratory Manager, Pinnacle Laboratory</li>
//           <li>Laboratory Manager, JLM Environmental Laboratory</li>
//           <li>Cal/OSHA Certified Asbestos Consultant</li>
//           <li>CDPH Lead Inspector/Assessor</li>
//           <li>Cal/OSHA & CDPH Trainer, Academy of Environmental Health & Safety</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Fun Fact</h3>
//         <p>
//           Steve is an aspiring playwright and travels to New York City annually (and when he’s lucky, multiple times per year).
//         </p>
//         <h3 className="mt-4 font-bold">Quote</h3>
//         <p className="italic text-gray-600">"Working at Pinnacle has fueled my passion for storytelling and precision in equal measure."</p>
//         <h3 className="mt-4 font-bold">Contact me</h3>
//         <p>svaughn@pinnaclelab.com</p>
//       </div>
//     ),
//   },
//   {
//     name: "Lupe Escobar",
//     title: "Operations Manager",
//     image: "/pinnaclelab/Headshots:GroupPhotos/Lupe.png",
//     description: "Lupe ensures seamless operations and on-time delivery of results.",
//     fullBio: (
//       <div>
//         <p>Hi, I am</p>
//         <h2 className="text-3xl font-bold">Lupe Escobar</h2>
//         <p className="text-xl">Operations Manager</p>
//         <h3 className="mt-4 font-bold">Education</h3>
//         <ul className="list-disc list-inside">
//           <li>Biology – West Los Angeles College</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Experience</h3>
//         <ul className="list-disc list-inside">
//           <li>Over 3.5 years of analytical experience performing PLM, PCM, and direct fungal analyses</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Fun Fact</h3>
//         <p>
//           When she’s not handling daily operations, Lupe seeks out fresh powder for skiing—whether locally, out-of-state, or even internationally.
//         </p>
//         <h3 className="mt-4 font-bold">Quote</h3>
//         <p className="italic text-gray-600">"Pinnacle has taught me to tackle challenges with the same grit I bring to the slopes."</p>
//         <h3 className="mt-4 font-bold">Contact me</h3>
//         <p>lescobar@pinnaclelab.com</p>
//       </div>
//     ),
//   },
//   {
//     name: "Art Aldana",
//     title: "Technical Manager - Asbestos",
//     image: "/pinnaclelab/Headshots:GroupPhotos/Art.png",
//     description: "Art specializes in asbestos analysis and quality control.",
//     fullBio: (
//       <div>
//         <p>Hi, I am</p>
//         <h2 className="text-3xl font-bold">Art Aldana</h2>
//         <p className="text-xl">Technical Manager - Asbestos</p>
//         <h3 className="mt-4 font-bold">Education</h3>
//         <ul className="list-disc list-inside">
//           <li>B.F.A. Industrial Design – California State University, Long Beach</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Experience</h3>
//         <ul className="list-disc list-inside">
//           <li>Over twenty-two years of analytical experience leading asbestos departments for various laboratories</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Fun Fact</h3>
//         <p>Art is a longtime, avid basketball player who doesn’t let his broken knees slow his game.</p>
//         <h3 className="mt-4 font-bold">Quote</h3>
//         <p className="italic text-gray-600">"Pinnacle’s support has kept me in the game, both on and off the court."</p>
//         <h3 className="mt-4 font-bold">Contact me</h3>
//         <p>aaldana@pinnaclelab.com</p>
//       </div>
//     ),
//   },
//   {
//     name: "Meg De Lara",
//     title: "Analyst - Asbestos & Microbiology",
//     image: "/pinnaclelab/Headshots:GroupPhotos/Meg.png", // Replace with actual path
//     description: "Meg brings precision and passion to asbestos and microbiology analysis.",
//     fullBio: (
//       <div>
//         <p>Hi, I am</p>
//         <h2 className="text-3xl font-bold">Meg De Lara</h2>
//         <p className="text-xl">Analyst - Asbestos & Microbiology</p>
//         <h3 className="mt-4 font-bold">Education</h3>
//         <ul className="list-disc list-inside">
//           <li>B.A. English - University of California, Los Angeles</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Experience</h3>
//         <ul className="list-disc list-inside">
//           <li>Patriot Environmental - Administrative Assistant, Asbestos PLM Analyst</li>
//           <li>ATEL Environmental - Asbestos PLM & PCM Analyst</li>
//           <li>AmeriSci - Asbestos PLM Analyst</li>
//           <li>Pinnacle Laboratory - Asbestos & Microbiology Analyst</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Fun Fact</h3>
//         <p>Meg loves Green Day and has even appeared in one of their music videos!</p>
//         <h3 className="mt-4 font-bold">Quote</h3>
//         <p className="italic text-gray-600">"Pinnacle has turned my love for detail into a career worth rocking out for." - Meg De Lara</p>
//         <h3 className="mt-4 font-bold">Contact me</h3>
//         <p>mdelara@pinnaclelab.com</p>
//       </div>
//     ),
//   },
//   {
//     name: "Simeon Nichols",
//     title: "Analyst - Microbiology",
//     image: "/pinnaclelab/Headshots:GroupPhotos/Simeon.jpg", // Replace with actual path
//     description: "Simeon excels in microbiology analysis with a keen eye for detail.",
//     fullBio: (
//       <div>
//         <p>Hi, I am</p>
//         <h2 className="text-3xl font-bold">Simeon Nichols</h2>
//         <p className="text-xl">Analyst - Microbiology</p>
//         <h3 className="mt-4 font-bold">Education</h3>
//         <ul className="list-disc list-inside">
//           <li>B.A. English - University of California, Los Angeles</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Experience</h3>
//         <ul className="list-disc list-inside">
//           <li>Patriot Environmental - Administrative Assistant, Asbestos PLM Analyst</li>
//           <li>ATEL Environmental - Asbestos PLM & PCM Analyst</li>
//           <li>AmeriSci - Asbestos PLM Analyst</li>
//           <li>Pinnacle Laboratory - Asbestos & Microbiology Analyst</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Fun Fact</h3>
//         <p>Simeon is an avid reader who’s working through every book on the UCLA English syllabus.</p>
//         <h3 className="mt-4 font-bold">Quote</h3>
//         <p className="italic text-gray-600">"Pinnacle has given me a new chapter to write in my analytical story." - Simeon Nichols</p>
//         <h3 className="mt-4 font-bold">Contact me</h3>
//         <p>snichols@pinnaclelab.com</p>
//       </div>
//     ),
//   },
//   {
//     name: "Tyler Deflin",
//     title: "Analyst - Heavy Metals",
//     image: "/pinnaclelab/Headshots:GroupPhotos/Tyler.jpg", // Replace with actual path
//     description: "Tyler analyzes heavy metals with expertise and determination.",
//     fullBio: (
//       <div>
//         <p>Hi, I am</p>
//         <h2 className="text-3xl font-bold">Tyler Deflin</h2>
//         <p className="text-xl">Analyst - Heavy Metals</p>
//         <h3 className="mt-4 font-bold">Education</h3>
//         <ul className="list-disc list-inside">
//           <li>B.A. Philosophy - California State University, Fullerton</li>
//           <li>M.S. Analytical Chemistry - California State University, Fullerton</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Fun Fact</h3>
//         <p>In high school, Tyler pitched against future Dodgers World Series MVP, Freddie Freeman. Even though Freddie hit a home run during his first at-bat, Tyler struck him out the next time and his team won!</p>
//         <h3 className="mt-4 font-bold">Quote</h3>
//         <p className="italic text-gray-600">"Pinnacle has taught me to strike out challenges and hit career home runs." - Tyler Deflin</p>
//         <h3 className="mt-4 font-bold">Contact me</h3>
//         <p>tdeflin@pinnaclelab.com</p>
//       </div>
//     ),
//   },
//   // {
//   //   name: "Minh Phung",
//   //   title: "Technical Manager - Heavy Metals",
//   //   image: "/pinnaclelab/Headshots:GroupPhotos/Minh.png", // Replace with actual path
//   //   description: "Minh leads the heavy metals team with technical expertise and vision.",
//   //   fullBio: (
//   //     <div>
//   //       <p>Hi, I am</p>
//   //       <h2 className="text-3xl font-bold">Minh Phung</h2>
//   //       <p className="text-xl">Technical Manager - Heavy Metals</p>
//   //       <h3 className="mt-4 font-bold">Education</h3>
//   //       <ul className="list-disc list-inside">
//   //         <li>B.A. English - University of California, Los Angeles</li>
//   //       </ul>
//   //       <h3 className="mt-4 font-bold">Experience</h3>
//   //       <ul className="list-disc list-inside">
//   //         <li>Patriot Environmental - Administrative Assistant, Asbestos PLM Analyst</li>
//   //         <li>ATEL Environmental - Asbestos PLM & PCM Analyst</li>
//   //         <li>AmeriSci - Asbestos PLM Analyst</li>
//   //         <li>Pinnacle Laboratory - Asbestos & Microbiology Analyst</li>
//   //       </ul>
//   //       <h3 className="mt-4 font-bold">Fun Fact</h3>
//   //       <p>Minh is a skilled calligrapher who enjoys crafting elegant letter designs.</p>
//   //       <h3 className="mt-4 font-bold">Quote</h3>
//   //       <p className="italic text-gray-600">"Pinnacle has let me write my own script for success in heavy metals." - Minh Phung</p>
//   //       <h3 className="mt-4 font-bold">Contact me</h3>
//   //       <p>mphung@pinnaclelab.com</p>
//   //     </div>
//   //   ),
//   // },
//   {
//     name: "Bailey Coleman",
//     title: "Technical Manager - Microbiology",
//     image: "/pinnaclelab/Headshots:GroupPhotos/Bailey.jpg", // Replace with actual path
//     description: "Bailey manages microbiology with a focus on quality and innovation.",
//     fullBio: (
//       <div>
//         <p>Hi, I am</p>
//         <h2 className="text-3xl font-bold">Bailey Coleman</h2>
//         <p className="text-xl">Technical Manager - Microbiology</p>
//         <h3 className="mt-4 font-bold">Education</h3>
//         <ul className="list-disc list-inside">
//           <li>B.A. English - University of California, Los Angeles</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Experience</h3>
//         <ul className="list-disc list-inside">
//           <li>Patriot Environmental - Administrative Assistant, Asbestos PLM Analyst</li>
//           <li>ATEL Environmental - Asbestos PLM & PCM Analyst</li>
//           <li>AmeriSci - Asbestos PLM Analyst</li>
//           <li>Pinnacle Laboratory - Asbestos & Microbiology Analyst</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Fun Fact</h3>
//         <p>Bailey is a trivia buff who dominates local pub quiz nights.</p>
//         <h3 className="mt-4 font-bold">Quote</h3>
//         <p className="italic text-gray-600">"Pinnacle has made every day a winning answer in my career trivia." - Bailey Coleman</p>
//         <h3 className="mt-4 font-bold">Contact me</h3>
//         <p>bcoleman@pinnaclelab.com</p>
//       </div>
//     ),
//   },
//   {
//     name: "Pati Rodriguez",
//     title: "Analyst - Asbestos & Microbiology",
//     image: "/pinnaclelab/Headshots:GroupPhotos/Pati.png",
//     description: "Pati analyzes asbestos and microbiology samples with precision.",
//     fullBio: (
//       <div>
//         <p>Hi, I am</p>
//         <h2 className="text-3xl font-bold">Pati Rodriguez</h2>
//         <p className="text-xl">Analyst - Asbestos & Microbiology</p>
//         <h3 className="mt-4 font-bold">Education</h3>
//         <ul className="list-disc list-inside">
//           <li>B.S. Organismal Biology – California State University, Long Beach</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Experience</h3>
//         <ul className="list-disc list-inside">
//           <li>Two years of experience performing PLM analysis for asbestos and direct fungal examination</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Fun Fact</h3>
//         <p>
//           As a stationary aficionado, Pati owns over 100 blank notebooks and serves as Pinnacle Laboratory’s unofficial Resident Notebook Collector.
//         </p>
//         <h3 className="mt-4 font-bold">Quote</h3>
//         <p className="italic text-gray-600">"Pinnacle has inspired me to fill my notebooks with groundbreaking discoveries."</p>
//         <h3 className="mt-4 font-bold">Contact me</h3>
//         <p>prodriguez@pinnaclelab.com</p>
//       </div>
//     ),
//   },
//   {
//     name: "Jorge Castillo",
//     title: "Analyst - Asbestos",
//     image: "/pinnaclelab/Headshots:GroupPhotos/Jorge.png",
//     description: "Jorge focuses on asbestos sample analysis with commitment to accuracy.",
//     fullBio: (
//       <div>
//         <p>Hi, I am</p>
//         <h2 className="text-3xl font-bold">Jorge Castillo</h2>
//         <p className="text-xl">Analyst - Asbestos</p>
//         <h3 className="mt-4 font-bold">Education</h3>
//         <ul className="list-disc list-inside">
//           <li>Business – California State University, Los Angeles</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Experience</h3>
//         <ul className="list-disc list-inside">
//           <li>Years of experience working for major Southern California laboratories focusing on PLM analysis for asbestos</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Fun Fact</h3>
//         <p>Jorge enjoys exploring the outdoors with his family on weekends.</p>
//         <h3 className="mt-4 font-bold">Quote</h3>
//         <p className="italic text-gray-600">"Pinnacle has given me the tools to explore new horizons in my career."</p>
//         <h3 className="mt-4 font-bold">Contact me</h3>
//         <p>jcastillo@pinnaclelab.com</p>
//       </div>
//     ),
//   },
//   {
//     name: "Mod Ahmed",
//     title: "Analyst - Asbestos",
//     image: "/pinnaclelab/Headshots:GroupPhotos/Mod.png",
//     description: "Mod is dedicated to delivering accurate asbestos sample analysis.",
//     fullBio: (
//       <div>
//         <p>Hi, I am</p>
//         <h2 className="text-3xl font-bold">Mod Ahmed</h2>
//         <p className="text-xl">Analyst - Asbestos</p>
//         <h3 className="mt-4 font-bold">Education</h3>
//         <ul className="list-disc list-inside">
//           <li>B.A. Community Development – Burapha University (Thailand)</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Experience</h3>
//         <ul className="list-disc list-inside">
//           <li>Six years of analytical experience including NIOSH 7400 (PCM) analysis, TEM sample preparation, and PLM analysis for asbestos</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Fun Fact</h3>
//         <p>Mod enjoys cooking traditional Thai dishes in his spare time.</p>
//         <h3 className="mt-4 font-bold">Quote</h3>
//         <p className="italic text-gray-600">"Pinnacle has spiced up my career with new challenges and growth."</p>
//         <h3 className="mt-4 font-bold">Contact me</h3>
//         <p>mahmed@pinnaclelab.com</p>
//       </div>
//     ),
//   },
//   {
//     name: "Damaris Ixchop",
//     title: "Analyst - Microbiology",
//     image: "/pinnaclelab/Headshots:GroupPhotos/Damaris.png",
//     description: "Damaris excels in microbiology sample analysis and client support.",
//     fullBio: (
//       <div>
//         <p>Hi, I am</p>
//         <h2 className="text-3xl font-bold">Damaris Ixchop</h2>
//         <p className="text-xl">Analyst - Microbiology</p>
//         <h3 className="mt-4 font-bold">Experience</h3>
//         <ul className="list-disc list-inside">
//           <li>Three years of experience performing direct fungal examination</li>
//           <li>Prior experience at a large laboratory in Greater Los Angeles</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Fun Fact</h3>
//         <p>Damaris loves gardening and growing her own herbs.</p>
//         <h3 className="mt-4 font-bold">Quote</h3>
//         <p className="italic text-gray-600">"Pinnacle has helped me cultivate a thriving career in microbiology."</p>
//         <h3 className="mt-4 font-bold">Contact me</h3>
//         <p>dixchop@pinnaclelab.com</p>
//       </div>
//     ),
//   },
//   {
//     name: "David Wisnieski",
//     title: "Administrative Assistant",
//     image: "/pinnaclelab/Headshots:GroupPhotos/David.png",
//     description: "David provides administrative support to ensure smooth lab operations.",
//     fullBio: (
//       <div>
//         <p>Hi, I am</p>
//         <h2 className="text-3xl font-bold">David Wisnieski</h2>
//         <p className="text-xl">Administrative Assistant</p>
//         <h3 className="mt-4 font-bold">Education</h3>
//         <ul className="list-disc list-inside">
//           <li>B.S. Biochemistry – California State University, Long Beach</li>
//           <li>System Administration & Technical Support Certificate – Cypress College</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Fun Fact</h3>
//         <p>David is an amateur astronomer who enjoys stargazing on clear nights.</p>
//         <h3 className="mt-4 font-bold">Quote</h3>
//         <p className="italic text-gray-600">"Pinnacle has opened up a universe of opportunities for me."</p>
//         <h3 className="mt-4 font-bold">Contact me</h3>
//         <p>dwisnieski@pinnaclelab.com</p>
//       </div>
//     ),
//   },
//   {
//     name: "Jade Hagihara",
//     title: "Administrative Assistant",
//     image: "/pinnaclelab/Headshots:GroupPhotos/Jade.png",
//     description: "Jade supports the administrative team with dedication and efficiency.",
//     fullBio: (
//       <div>
//         <p>Hi, I am</p>
//         <h2 className="text-3xl font-bold">Jade Hagihara</h2>
//         <p className="text-xl">Administrative Assistant</p>
//         <h3 className="mt-4 font-bold">Education</h3>
//         <ul className="list-disc list-inside">
//           <li>B.S. Biochemistry – Loyola Marymount University</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Experience</h3>
//         <ul className="list-disc list-inside">
//           <li>Worked as a physical chemistry research assistant analyzing excited state proton transfers and performing absorption/fluorescence analyses</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Fun Facts</h3>
//         <p>
//           Born and raised in Hawaii, Jade completed her senior high school capstone project on cultural exchange and global citizenship in Alaska. She loves to bake, do her nails, and learn to play the guitar.
//         </p>
//         <h3 className="mt-4 font-bold">Quote</h3>
//         <p className="italic text-gray-600">"Pinnacle has been a sweet journey of growth and creativity."</p>
//         <h3 className="mt-4 font-bold">Contact me</h3>
//         <p>jhagihara@pinnaclelab.com</p>
//       </div>
//     ),
//   },
// ];

// export default function MeetOurTeamPage() {
//   const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

//   const modalVariants = {
//     hidden: { opacity: 0, y: -50 },
//     visible: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: 50 },
//   };

//   return (
//     <section className="py-0 bg-gradient-to-b from-[#16436F] to-[#10b1b4] text-black">
//       {/* Banner Section */}
//       <div className="relative text-white">
//         <Image
//           src="/pinnaclelab/Headshots:GroupPhotos/GroupApril2025.jpg"
//           alt="Team Banner"
//           layout="fill"
//           objectFit="cover"
//           objectPosition="center 40%"
//           className="opacity-75"
//         />
//         <div className="relative max-w-4xl mx-auto text-center py-72 z-10">
//           <h1 className="text-5xl font-bold">MEET OUR TEAM</h1>
//         </div>
//       </div>

//       {/* Introductory Section */}
//       <div className="relative text-white py-16 px-6">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-8">Meet Our Dedicated Team</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-[#10b1b4] p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold mb-4 flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-white mr-2"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//                 </svg>
//                 Over 50 Years of Experience
//               </h3>
//               <p className="leading-relaxed mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl">
//                 Our team is composed of devoted and seasoned analysts, who tirelessly work to provide precise and timely results. With a remarkable history of analyzing over <strong>1,000,000 PLM samples and COUNTING</strong>, we are wholeheartedly dedicated to meeting your project deadlines while upholding the highest standards of quality and service.
//               </p>
//             </div>
//             <div className="bg-[#10b1b4] p-6 rounded-lg shadow-lg">
//               <h3 className="text-2xl font-semibold mb-4 flex items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6 text-white mr-2"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h11M9 21V3m4 18l6-6m-6 6l-6-6" />
//                 </svg>
//                 Unmatched Precision in Environmental Solutions
//               </h3>
//               <p className="leading-relaxed mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl">
//                 What distinguishes Pinnacle Laboratory is our relentless pursuit of excellence. Our dedicated team exceeds expectations, delivering deep expertise and customized insights for every project. With analysts always on call to guide you through results or provide support, we ensure comprehensive, trustworthy environmental assessments tailored to your needs.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"></div>
//       </div>

//       {/* Team Grid */}
//       <div className="container mx-auto text-center">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//           {teamMembers.map((member, index) => (
//             <motion.div
//               key={index}
//               className="bg-white text-gray-900 rounded-lg shadow-md border border-gray-300 overflow-hidden flex"
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               {/* Member Image */}
//               <motion.div
//                 className="w-1/2 h-auto relative overflow-hidden flex-grow"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   width={300}
//                   height={300}
//                   className="object-cover w-full h-full"
//                 />
//               </motion.div>

//               {/* Member Details */}
//               <div className="w-1/2 p-6 flex flex-col justify-center">
//                 <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
//                 <h3 className="text-lg mb-4 text-blue-500">{member.title}</h3>
//                 <p>{member.description}</p>
//                 <button
//                   onClick={() => setSelectedMember(member)}
//                   className="mt-4 bg-[#10b1b4] text-white px-4 py-2 rounded hover:bg-[#16436F] transition"
//                 >
//                   Read Bio
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedMember && (
//         <motion.div
//           key="team-modal"
//           className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
//           variants={{
//             hidden: { opacity: 0, y: -50 },
//             visible: { opacity: 1, y: 0 },
//             exit: { opacity: 0, y: 50 },
//           }}
//           initial="hidden"
//           animate="visible"
//           exit="exit"
//           transition={{ duration: 0.5 }}
//           onClick={() => setSelectedMember(null)}
//         >
//           <motion.div
//             className="bg-white rounded-lg shadow-lg max-w-8xl w-full mx-4 p-12 relative max-h-[180vh] overflow-y-auto sm:max-w-2xl sm:max-h-[160vh] sm:p-8" // Doubled size
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-4 right-4 text-black font-bold"
//               onClick={() => setSelectedMember(null)}
//             >
//               X
//             </button>
//             <div className="flex flex-col md:flex-row">
//               <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
//                 <Image
//                   src={selectedMember.image}
//                   alt={selectedMember.name}
//                   width={600} // Doubled from 300
//                   height={600} // Doubled from 300
//                   className="object-cover rounded-lg"
//                 />
//               </div>
//               <div className="md:w-1/2 mt-4 md:mt-0 md:ml-8 text-left overflow-y-auto max-h-[800px]"> {/* Doubled max height */}
//                 {selectedMember.fullBio}
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </section>
//   );
// }


































"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type TeamMember = {
  name: string;
  title: string;
  image: string;
  description: string;
  fullBio: React.ReactNode;
};

const teamMembers: TeamMember[] = [
  // {
  //   name: "Steve Vaughn",
  //   title: "Laboratory Manager",
  //   image: "/pinnaclelab/Headshots:GroupPhotos/Steve.png",
  //   description: "Steve oversees daily operations to ensure accuracy and efficiency.",
  //   fullBio: (
  //     <div>
  //       <p>Hi, I am</p>
  //       <h2 className="text-3xl font-bold">Steve Vaughn</h2>
  //       <p className="text-xl">Laboratory Manager</p>
  //       <h3 className="mt-4 font-bold">Education</h3>
  //       <ul className="list-disc list-inside">
  //         <li>Geology – El Camino College</li>
  //         <li>Occupational Safety & Health – Waldorf University</li>
  //       </ul>
  //       <h3 className="mt-4 font-bold">Experience</h3>
  //       <ul className="list-disc list-inside">
  //         <li>Laboratory Manager, Pinnacle Laboratory</li>
  //         <li>Laboratory Manager, JLM Environmental Laboratory</li>
  //         <li>Cal/OSHA Certified Asbestos Consultant</li>
  //         <li>CDPH Lead Inspector/Assessor</li>
  //         <li>Cal/OSHA & CDPH Trainer, Academy of Environmental Health & Safety</li>
  //       </ul>
  //       <h3 className="mt-4 font-bold">Fun Fact</h3>
  //       <p>
  //         Steve is an aspiring playwright and travels to New York City annually (and when he’s lucky, multiple times per year).
  //       </p>
  //       <h3 className="mt-4 font-bold">Quote</h3>
  //       <p className="italic text-gray-600">“To the world we dream about and to the one we live in now.” - Hadestown</p>
  //       <h3 className="mt-4 font-bold">Contact me</h3>
  //       <p>svaughn@pinnaclelab.com</p>
  //     </div>
  //   ),
  // },
  {
    name: "Lupe Escobar",
    title: "Laboratory Manager",
    image: "/pinnaclelab/Headshots:GroupPhotos/Lupe.png",
    description: "Lupe ensures seamless operations and on-time delivery of results.",
    fullBio: (
      <div>
        <p>Hi, I am</p>
        <h2 className="text-3xl font-bold">Lupe Escobar</h2>
        <p className="text-xl">Operations Manager</p>
        <h3 className="mt-4 font-bold">Education</h3>
        <ul className="list-disc list-inside">
          <li>Biology – West Los Angeles College</li>
        </ul>
        <h3 className="mt-4 font-bold">Experience</h3>
        <ul className="list-disc list-inside">
          <li>Over 3.5 years of analytical experience performing PLM, PCM, and direct fungal analyses</li>
        </ul>
        <h3 className="mt-4 font-bold">Fun Fact</h3>
        <p>
          When she’s not handling daily operations, Lupe seeks out fresh powder for skiing—whether locally, out-of-state, or even internationally.
        </p>
        <h3 className="mt-4 font-bold">Quote</h3>
        <p className="italic text-gray-600">"Lifes to short...Go Ski!"</p>
        <h3 className="mt-4 font-bold">Contact me</h3>
        <p>lescobar@pinnaclelab.com</p>
      </div>
    ),
  },
  // {
  //   name: "Art Aldana",
  //   title: "Technical Manager - Asbestos",
  //   image: "/pinnaclelab/Headshots:GroupPhotos/Art.png",
  //   description: "Art specializes in asbestos analysis and quality control.",
  //   fullBio: (
  //     <div>
  //       <p>Hi, I am</p>
  //       <h2 className="text-3xl font-bold">Art Aldana</h2>
  //       <p className="text-xl">Technical Manager - Asbestos</p>
  //       <h3 className="mt-4 font-bold">Education</h3>
  //       <ul className="list-disc list-inside">
  //         <li>B.F.A. Industrial Design – California State University, Long Beach</li>
  //       </ul>
  //       <h3 className="mt-4 font-bold">Experience</h3>
  //       <ul className="list-disc list-inside">
  //         <li>Over twenty-two years of analytical experience leading asbestos departments for various laboratories</li>
  //       </ul>
  //       <h3 className="mt-4 font-bold">Fun Fact</h3>
  //       <p>Art is a longtime, avid basketball player who doesn’t let his broken knees slow his game.</p>
  //       <h3 className="mt-4 font-bold">Quote</h3>
  //       <p className="italic text-gray-600">“Yesterday is history, tomorrow is a mystery, but today is a gift. That’s why we call it the present.”</p>
  //       <h3 className="mt-4 font-bold">Contact me</h3>
  //       <p>aaldana@pinnaclelab.com</p>
  //     </div>
  //   ),
  // },
  {
    name: "Meg De Lara",
    title: "Technical Manager - Asbestos",
    image: "/pinnaclelab/Headshots:GroupPhotos/Meg.png",
    description: "Meg brings precision and passion to asbestos and microbiology analysis.",
    fullBio: (
      <div>
        <p>Hi, I am</p>
        <h2 className="text-3xl font-bold">Meg De Lara</h2>
        <p className="text-xl">Asbestos Technical Manager</p>
        <h3 className="mt-4 font-bold">Education</h3>
        <ul className="list-disc list-inside">
          <li>B.A. English - University of California, Los Angeles</li>
        </ul>
        <h3 className="mt-4 font-bold">Experience</h3>
        <ul className="list-disc list-inside">
          <li>Patriot Environmental - Administrative Assistant, Asbestos PLM Analyst</li>
          <li>ATEL Environmental - Asbestos PLM & PCM Analyst</li>
          <li>AmeriSci - Asbestos PLM Analyst</li>
          <li>Pinnacle Laboratory - Asbestos & Microbiology Analyst</li>
        </ul>
        <h3 className="mt-4 font-bold">Fun Fact</h3>
        <p>Meg loves Green Day and has even appeared in one of their music videos!</p>
        <h3 className="mt-4 font-bold">Quote</h3>
        <p className="italic text-gray-600">“Visions are worth fighting for. Why spend your life making someone else’s dreams?” - Ed Wood (film)</p>
        <h3 className="mt-4 font-bold">Contact me</h3>
        <p>mdelara@pinnaclelab.com</p>
      </div>
    ),
  },
  {
    name: "Bailey Coleman",
    title: "Technical Manager - Microbiology",
    image: "/pinnaclelab/Headshots:GroupPhotos/Bailey.jpg", // Replace with actual path
    description: "Bailey manages microbiology with a focus on quality and innovation.",
    fullBio: (
      <div>
        <p>Hi, I am</p>
        <h2 className="text-3xl font-bold">Bailey Coleman</h2>
        <p className="text-xl">Technical Manager - Microbiology</p>
        <h3 className="mt-4 font-bold">Education</h3>
        <ul className="list-disc list-inside">
          <li>B.S. Biology, Minor in Chemistry - University of South Carolina</li>
        </ul>
        <h3 className="mt-4 font-bold">Experience</h3>
        <ul className="list-disc list-inside">
          <li>Southeast Environmental - Quality Control Coordinator</li>
          <li>Additional undergraduate research in Ecology and Public Health</li>
        </ul>
        <h3 className="mt-4 font-bold">Fun Fact</h3>
        <p>Bailey loves an adrenaline rush and has been skydiving, bungee jumping, and zip lining!</p>
        <h3 className="mt-4 font-bold">Quote</h3>
        <p className="italic text-gray-600">“People change and things go wrong, but just remember, life goes on.” - Mac Miller</p>
        <h3 className="mt-4 font-bold">Contact me</h3>
        <p>bcoleman@pinnaclelab.com</p>
      </div>
    ),
  },
  
  {
    name: "Pati Rodriguez",
    title: "Analyst - Asbestos & Microbiology",
    image: "/pinnaclelab/Headshots:GroupPhotos/Pati.png",
    description: "Pati analyzes asbestos and microbiology samples with precision.",
    fullBio: (
      <div>
        <p>Hi, I am</p>
        <h2 className="text-3xl font-bold">Pati Rodriguez</h2>
        <p className="text-xl">Analyst - Asbestos & Microbiology</p>
        <h3 className="mt-4 font-bold">Education</h3>
        <ul className="list-disc list-inside">
          <li>B.S. Organismal Biology – California State University, Long Beach</li>
        </ul>
        <h3 className="mt-4 font-bold">Experience</h3>
        <ul className="list-disc list-inside">
          <li>Two years of experience performing PLM analysis for asbestos and direct fungal examination</li>
        </ul>
        <h3 className="mt-4 font-bold">Fun Fact</h3>
        <p>
          As a stationary aficionado, Pati owns over 100 blank notebooks and serves as Pinnacle Laboratory’s unofficial Resident Notebook Collector.
        </p>
        <h3 className="mt-4 font-bold">Quote</h3>
        <p className="italic text-gray-600">"Pinnacle has inspired me to fill my notebooks with groundbreaking discoveries."</p>
        <h3 className="mt-4 font-bold">Contact me</h3>
        <p>prodriguez@pinnaclelab.com</p>
      </div>
    ),
  },
  {
    name: "Jorge Castillo",
    title: "Analyst - Asbestos",
    image: "/pinnaclelab/Headshots:GroupPhotos/Jorge.png",
    description: "Jorge focuses on asbestos sample analysis with commitment to accuracy.",
    fullBio: (
      <div>
        <p>Hi, I am</p>
        <h2 className="text-3xl font-bold">Jorge Castillo</h2>
        <p className="text-xl">Analyst - Asbestos</p>
        <h3 className="mt-4 font-bold">Education</h3>
        <ul className="list-disc list-inside">
          <li>Business – California State University, Los Angeles</li>
        </ul>
        <h3 className="mt-4 font-bold">Experience</h3>
        <ul className="list-disc list-inside">
          <li>Years of experience working for major Southern California laboratories focusing on PLM analysis for asbestos</li>
        </ul>
        <h3 className="mt-4 font-bold">Fun Fact</h3>
        <p>Jorge enjoys exploring the outdoors with his family on weekends.</p>
        <h3 className="mt-4 font-bold">Quote</h3>
        <p className="italic text-gray-600">“Great things come from hard work and perseverance. No excuses.” - Kobe Bryant</p>
        <h3 className="mt-4 font-bold">Contact me</h3>
        <p>jcastillo@pinnaclelab.com</p>
      </div>
    ),
  },
  {
    name: "Mod Ahmed",
    title: "Analyst - Asbestos",
    image: "/pinnaclelab/Headshots:GroupPhotos/Mod.png",
    description: "Mod is dedicated to delivering accurate asbestos sample analysis.",
    fullBio: (
      <div>
        <p>Hi, I am</p>
        <h2 className="text-3xl font-bold">Mod Ahmed</h2>
        <p className="text-xl">Analyst - Asbestos</p>
        <h3 className="mt-4 font-bold">Education</h3>
        <ul className="list-disc list-inside">
          <li>B.A. Community Development – Burapha University (Thailand)</li>
        </ul>
        <h3 className="mt-4 font-bold">Experience</h3>
        <ul className="list-disc list-inside">
          <li>Six years of analytical experience including NIOSH 7400 (PCM) analysis, TEM sample preparation, and PLM analysis for asbestos</li>
        </ul>
        <h3 className="mt-4 font-bold">Fun Fact</h3>
        <p>Mod enjoys cooking traditional Thai dishes in her spare time.</p>
        <h3 className="mt-4 font-bold">Quote</h3>
        <p className="italic text-gray-600">“Don’t judge a book by its cover.”</p>
        <h3 className="mt-4 font-bold">Contact me</h3>
        <p>mahmed@pinnaclelab.com</p>
      </div>
    ),
  },
  {
    name: "Damaris Ixchop",
    title: "Analyst - Microbiology",
    image: "/pinnaclelab/Headshots:GroupPhotos/Damaris.png",
    description: "Damaris excels in microbiology sample analysis and client support.",
    fullBio: (
      <div>
        <p>Hi, I am</p>
        <h2 className="text-3xl font-bold">Damaris Ixchop</h2>
        <p className="text-xl">Analyst - Microbiology</p>
        <h3 className="mt-4 font-bold">Experience</h3>
        <ul className="list-disc list-inside">
          <li>Three years of experience performing direct fungal examination</li>
          <li>Prior experience at a large laboratory in Greater Los Angeles</li>
        </ul>
        <h3 className="mt-4 font-bold">Fun Fact</h3>
        <p>Damaris loves gardening and growing her own herbs.</p>
        <h3 className="mt-4 font-bold">Quote</h3>
        <p className="italic text-gray-600">“You may talk. And I may listen. And miracles might happen.” - Ernest Hemingway</p>
        <h3 className="mt-4 font-bold">Contact me</h3>
        <p>dixchop@pinnaclelab.com</p>
      </div>
    ),
  },
  // {
  //   name: "Tyler Deflin",
  //   title: "Analyst - Heavy Metals",
  //   image: "/pinnaclelab/Headshots:GroupPhotos/Tyler.jpg",
  //   description: "Tyler analyzes heavy metals with expertise and determination.",
  //   fullBio: (
  //     <div>
  //       <p>Hi, I am</p>
  //       <h2 className="text-3xl font-bold">Tyler Deflin</h2>
  //       <p className="text-xl">Analyst - Heavy Metals</p>
  //       <h3 className="mt-4 font-bold">Education</h3>
  //       <ul className="list-disc list-inside">
  //         <li>B.A. Philosophy - California State University, Fullerton</li>
  //         <li>M.S. Analytical Chemistry - California State University, Fullerton</li>
  //       </ul>
  //       <h3 className="mt-4 font-bold">Fun Fact</h3>
  //       <p>In high school, Tyler pitched against future Dodgers World Series MVP, Eddie Freeman. Even though Eddie hit a home run during his first at-bat, Tyler struck him out the next time and his team won!</p>
  //       <h3 className="mt-4 font-bold">Quote</h3>
  //       <p className="italic text-gray-600">“Wherever you go, there you are.” - Confucius </p>
  //       <h3 className="mt-4 font-bold">Contact me</h3>
  //       <p>tdeflin@pinnaclelab.com</p>
  //     </div>
  //   ),
  // },
    // {
    //   name: "Simeon Nichols",
    //   title: "Analyst - Microbiology",
    //   image: "/pinnaclelab/Headshots:GroupPhotos/Simeon.jpg",
    //   description: "Simeon excels in microbiology analysis with a keen eye for detail.",
    //   fullBio: (
    //     <div>
    //       <p>Hi, I am</p>
    //       <h2 className="text-3xl font-bold">Simeon Nichols</h2>
    //       <p className="text-xl">Analyst - Microbiology</p>
    //       <h3 className="mt-4 font-bold">Education</h3>
    //       <ul className="list-disc list-inside">
    //         <li>B.S. Environmental Science - University of Phoenix</li>
    //         <li>M.S. Environmental Studies - Prescott College</li>
    //       </ul>
    //       <h3 className="mt-4 font-bold">Experience</h3>
    //       <ul className="list-disc list-inside">
    //         <li>Gilead Sciences - Quality Control Specialist II</li>
    //         <li>Dendreon Pharmaceuticals - Quality Control Analyst</li>
    //         <li>Eurofins Laboratories - Quality Control Scientist</li>
    //         <li>Avid Bio Services - Quality Control Analyst</li>
    //         <li>Genentech - Quality Control Analyst</li>
    //         <li>Prometheus Laboratories - Quality Control Analyst</li>
    //         <li>East Los Angeles College - Biotechnology, Adjunct Instructor</li>
    //       </ul>
    //       <h3 className="mt-4 font-bold">Fun Fact</h3>
    //       <p>Simeon loves to travel with Spain being his favorite country to visit; he also loves to go wine tasting (but not in Temecula!).</p>
    //       <h3 className="mt-4 font-bold">Quote</h3>
    //       <p className="italic text-gray-600">“Nothing in life is to be feared, it is only to be understood.” - Marie Curie</p>
    //       <h3 className="mt-4 font-bold">Contact me</h3>
    //       <p>snichols@pinnaclelab.com</p>
    //     </div>
    //   ),
    // },

  // {
  //   name: "David Wisnieski",
  //   title: "Administrative Assistant",
  //   image: "/pinnaclelab/Headshots:GroupPhotos/David.png",
  //   description: "David provides administrative support to ensure smooth lab operations.",
  //   fullBio: (
  //     <div>
  //       <p>Hi, I am</p>
  //       <h2 className="text-3xl font-bold">David Wisnieski</h2>
  //       <p className="text-xl">Administrative Assistant</p>
  //       <h3 className="mt-4 font-bold">Education</h3>
  //       <ul className="list-disc list-inside">
  //         <li>B.S. Biochemistry – California State University, Long Beach</li>
  //         <li>System Administration & Technical Support Certificate – Cypress College</li>
  //       </ul>
  //       <h3 className="mt-4 font-bold">Fun Fact</h3>
  //       <p>David is an amateur astronomer who enjoys stargazing on clear nights.</p>
  //       <h3 className="mt-4 font-bold">Quote</h3>
  //       <p className="italic text-gray-600">"Pinnacle has opened up a universe of opportunities for me."</p>
  //       <h3 className="mt-4 font-bold">Contact me</h3>
  //       <p>dwisnieski@pinnaclelab.com</p>
  //     </div>
  //   ),
  // },
  {
    name: "Jade Hagihara",
    title: "Administrative Assistant",
    image: "/pinnaclelab/Headshots:GroupPhotos/Jade.png",
    description: "Jade supports the administrative team with dedication and efficiency.",
    fullBio: (
      <div>
        <p>Hi, I am</p>
        <h2 className="text-3xl font-bold">Jade Hagihara</h2>
        <p className="text-xl">Administrative Assistant</p>
        <h3 className="mt-4 font-bold">Education</h3>
        <ul className="list-disc list-inside">
          <li>B.S. Biochemistry – Loyola Marymount University</li>
        </ul>
        <h3 className="mt-4 font-bold">Experience</h3>
        <ul className="list-disc list-inside">
          <li>Worked as a physical chemistry research assistant analyzing excited state proton transfers and performing absorption/fluorescence analyses</li>
        </ul>
        <h3 className="mt-4 font-bold">Fun Facts</h3>
        <p>
          Born and raised in Hawaii, Jade completed her senior high school capstone project on cultural exchange and global citizenship in Alaska. She loves to bake, do her nails, and learn to play the guitar.
        </p>
        {/* <h3 className="mt-4 font-bold">Quote</h3>
        <p className="italic text-gray-600">"Pinnacle has been a sweet journey of growth and creativity."</p> */}
        <h3 className="mt-4 font-bold">Contact me</h3>
        <p>jhagihara@pinnaclelab.com</p>
      </div>
    ),
  },
//   {
//     name: "David Fleming",
//     title: "Administrative Assistant",
//     image: "/pinnaclelab/Headshots:GroupPhotos/DavidF.jpg",
//     description: "David supports the team with his expertise in customer service and IT.",
//     fullBio: (
//       <div>
//         <p>Hi, I am</p>
//         <h2 className="text-3xl font-bold">David Fleming</h2>
//         <p className="text-xl">Administrative Assistant</p>
//         <h3 className="mt-4 font-bold">Education</h3>
//         <ul className="list-disc list-inside">
//           <li>Computer Information Systems (CIS) coursework - Compton College</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Experience</h3>
//         <ul className="list-disc list-inside">
//           <li>10+ years of customer service and Computer Information Systems (CIS) experience</li>
//         </ul>
//         <h3 className="mt-4 font-bold">Fun Fact</h3>
//         <p>David is an avid Dungeons & Dragons player.</p>
//         <h3 className="mt-4 font-bold">Quote</h3>
//         <p className="italic text-gray-600">"Pinnacle has shown me that the journey to excellence is worth every step." - David Fleming</p>
//         <h3 className="mt-4 font-bold">Contact me</h3>
//         <p>dfleming@pinnaclelab.com</p>
//       </div>
//     ),
//   },
];

export default function MeetOurTeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const modalVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <section className="py-0 bg-gradient-to-b from-[#16436F] to-[#10b1b4] text-black">
      {/* Banner Section */}
      <div className="relative text-white">
        <Image
          src="/pinnaclelab/Headshots:GroupPhotos/GroupApril2025.jpg"
          alt="Team Banner"
          layout="fill"
          objectFit="cover"
          objectPosition="center 40%"
          className="opacity-75"
        />
        <div className="relative max-w-4xl mx-auto text-center py-72 z-10">
          <h1 className="text-5xl font-bold">MEET OUR TEAM</h1>
        </div>
      </div>

      {/* Introductory Section */}
      <div className="relative text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Meet Our Dedicated Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#10b1b4] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Over 50 Years of Experience
              </h3>
              <p className="leading-relaxed mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl">
                Our team is composed of devoted and seasoned analysts, who tirelessly work to provide precise and timely results. With a remarkable history of analyzing over <strong>1,000,000 PLM samples and COUNTING</strong>, we are wholeheartedly dedicated to meeting your project deadlines while upholding the highest standards of quality and service.
              </p>
            </div>
            <div className="bg-[#10b1b4] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h11M9 21V3m4 18l6-6m-6 6l-6-6" />
                </svg>
                Unmatched Precision in Environmental Solutions
              </h3>
              <p className="leading-relaxed mt-4 text-xl md:text-2xl text-gray-200 max-w-3xl">
                What distinguishes Pinnacle Laboratory is our relentless pursuit of excellence. Our dedicated team exceeds expectations, delivering deep expertise and customized insights for every project. With analysts always on call to guide you through results or provide support, we ensure comprehensive, trustworthy environmental assessments tailored to your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"></div>
      </div>

      {/* Team Grid */}
      <div className="container mx-auto text-center py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white text-gray-900 rounded-lg shadow-md border border-gray-300 overflow-hidden flex min-h-[400px]" // Added min height
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Member Image */}
              <motion.div
                className="w-1/2 h-auto relative overflow-hidden flex-grow min-h-full" // Ensure image container stretches
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              {/* Member Details */}
              <div className="w-1/2 p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
                <h3 className="text-lg mb-4 text-blue-500">{member.title}</h3>
                <p>{member.description}</p>
                <button
                  onClick={() => setSelectedMember(member)}
                  className="mt-4 bg-[#10b1b4] text-white px-4 py-2 rounded hover:bg-[#16436F] transition"
                >
                  Read Bio
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <motion.div
          key="team-modal"
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 50 },
          }}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.5 }}
          onClick={() => setSelectedMember(null)}
        >
          <motion.div
            className="bg-white rounded-lg shadow-lg max-w-8xl w-full mx-4 p-12 relative max-h-[180vh] overflow-y-auto sm:max-w-2xl sm:max-h-[160vh] sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-black font-bold"
              onClick={() => setSelectedMember(null)}
            >
              X
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  width={600}
                  height={600}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0 md:ml-8 text-left overflow-y-auto max-h-[800px]">
                {selectedMember.fullBio}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}