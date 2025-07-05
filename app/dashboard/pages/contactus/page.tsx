// 'use client';
// import React from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function ContactOverviewPage() {
//   const contactSections = [
//     {
//       title: 'Account & Billing Issues',
//       description: 'Have issues with billing? Reach out for help!',
//       link: '/dashboard/pages/contactus/generalinquiry',
//       image: '/AdobeStock_1.png',
//     },
//     {
//       title: 'App Issues',
//       description: 'Encountered a bug? Let us know.',
//       link: '/dashboard/pages/contactus/support',
//       image: '/AdobeStock_2.png',
//     },
//     {
//       title: 'Download & Installation Issues',
//       description: 'Having trouble downloading? We can assist.',
//       link: '/dashboard/pages/contactus/otherinquiries',
//       image: '/AdobeStock_3.png',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header Section */}
//       <header className="relative h-[300px]">
//         <Image 
//           src="/AdobeStock_Banner.png" 
//           alt="Banner Image" 
//           layout="fill" 
//           objectFit="cover" 
//           className="brightness-75"
//         />
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
//           <h1 className="text-5xl font-bold">How Can We Help You?</h1>
//           <p className="text-lg mt-4">Search for help or explore categories below.</p>
//         </div>
//       </header>

//       {/* Search Bar */}
//       <div className="container mx-auto my-8 px-4">
//         <input 
//           type="text" 
//           placeholder="Search the Help Center" 
//           className="w-full px-6 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none" 
//         />
//       </div>

//       {/* Contact Sections */}
//       <div className="container mx-auto py-12 px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {contactSections.map((section, index) => (
//             <motion.div
//               key={index}
//               className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="relative h-48">
//                 <Image
//                   src={section.image}
//                   alt={section.title}
//                   layout="fill"
//                   objectFit="cover"
//                   className="brightness-75"
//                 />
//                 <div className="absolute inset-0 flex justify-center items-center">
//                   <h3 className="text-white text-2xl font-bold">{section.title}</h3>
//                 </div>
//               </div>
//               <div className="p-6">
//                 <p className="text-gray-600 mb-6">{section.description}</p>
//                 <Link href={section.link}>
//                   <motion.a
//                     className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Learn More
//                   </motion.a>
//                 </Link>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Bottom Information Section */}
//       <div className="container mx-auto py-12 px-8 bg-yellow-200 text-center">
//         <h2 className="text-xl font-bold mb-4">Learn how to use your apps</h2>
//         <Link href="#">
//           <div className="bg-yellow-600 text-white px-6 py-2 rounded-md hover:bg-yellow-700 transition">
//             Learn More
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// }



'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import '@fontsource/source-sans-pro';

export default function ContactOverviewPage() {
  const contactSections = [
    {
      title: 'General Inquiry',
      description: 'Have a general question or comment? Reach out to us and we’ll be happy to assist you.',
      link: '/dashboard/pages/contactus/generalinquiry',
      image: '/AdobeStock_7.png',
      bgColor: 'bg-[#f7f7f7]', // soft neutral color for each box
    },
    {
      title: 'Media Requests',
      description: 'For media inquiries, interviews, and press-related questions, please use this form.',
      link: '/dashboard/pages/contactus/mediarequests',
      image: '/AdobeStock_2.png',
      bgColor: 'bg-[#e8f0f2]',
    },
    {
      title: 'Support',
      description: 'Encountered a problem or bug on our site? Let our developers know here.',
      link: '/dashboard/pages/contactus/support',
      image: '/AdobeStock_8.png',
      bgColor: 'bg-[#f1f0ff]',
    },
    {
      title: 'Other Inquiries',
      description: 'For any other questions, feel free to get in touch using this form.',
      link: '/dashboard/pages/contactus/otherinquiries',
      image: '/AdobeStock_4.png',
      bgColor: 'bg-[#ffefed]',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="relative h-[500px]">
  <Image 
    src="/AS_Contact_Background.jpeg" 
    // src="/AdobeStock_4.png" 
    alt="Banner Image" 
    layout="fill" 
    objectFit="cover" 
    objectPosition="top" // Adjusts the focus to the top half of the image
    className="brightness-95"
        />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-gray-100 font-sans">
      <div className="relative" style={{ transform: 'translate(-10px, -20px)' }}>
        {/* Applying a slight translation to move text up and to the left */}
        <h1
          className="text-5xl font-bold text-shadow-lg shadow-black leading-tight"
          style={{ textShadow: '2px 2px 5px rgba(0, 0, 0, 0.9)' }}
        >
          How Can We Help You?
        </h1>
        <p
          className="text-lg mt-4 text-center text-white-300"
          style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8)' }}
        >
          Search for help or explore below.
        </p>
      </div>
    </div>

      </header>

      {/* Search Bar */}
      <div className="container mx-auto my-8 px-4">
        <input 
          type="text" 
          placeholder="Search the Help Center" 
          className="w-full px-6 py-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-600 focus:outline-none" 
        />
      </div>

      {/* Contact Sections */}
      <div className="container mx-auto py-12 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactSections.slice(0, 3).map((section, index) => (
            <motion.div
              key={index}
              className={`shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform ${section.bgColor}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-48">
                <Image
                  src={section.image}
                  alt={section.title}
                  layout="fill"
                  objectFit="cover"
                  className="brightness-75"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                <div className="bg-[#002B45] bg-opacity-50 p-1.5 rounded-lg">
                  <h3 className="text-gray-100 text-3xl font-playfair">{section.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-[#002B45] mb-6">{section.description}</p>
                <Link href={section.link}>
                  <motion.button
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                    whileHover={{ scale: 1.05, textShadow: '0px 0px 10px rgba(0,0,0,0.2)' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}

          {/* Horizontal Rectangle for "Other Inquiries" */}
          <motion.div
            className="bg-[#fdf2e9] shadow-lg rounded-lg col-span-1 md:col-span-3 overflow-hidden transform hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-48 md:h-64">
              <Image
                src="/AdobeStock_Banner.png"
                alt="Other Inquiries"
                layout="fill"
                style={{ objectFit: "cover" }}
                className="brightness-75"
              />
              
              <div className="absolute inset-0 flex justify-center items-center">
              <div className="bg-[#002B45] bg-opacity-50 p-1.5 rounded-lg">
                <h3 className="text-gray-100 text-3xl font-playfair">Other Inquiries</h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-[#002B45] mb-6">For any other questions, feel free to get in touch using this form.</p>
              <Link href="/dashboard/pages/contactus/otherinquiries">
                <motion.button
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                  whileHover={{ scale: 1.05, textShadow: '0px 0px 10px rgba(0,0,0,0.2)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Information Section */}
      <div className="container mx-auto py-12 px-8 bg-[#d0e8f2] text-center">
        <h2 className="text-xl font-bold mb-4 text-[#002B45]">Learn how to use your Portal</h2>
        <Link href="#">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
}
