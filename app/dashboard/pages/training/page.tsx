// // "use client";

// // import Image from "next/image";

// // const TrainingPage = () => {
// //   return (
// //     <div className="relative bg-gradient-to-b from-[#16436f] to-[#10b1b4] text-gray-800">
// //       {/* Banner Section */}
// //       <div className="relative">
// //         <div className="absolute inset-0">
// //           <Image
// //             src="/training-banner.jpg" // Replace with a relevant banner image
// //             alt="Training Banner"
// //             layout="fill"
// //             objectFit="cover"
// //             className="opacity-80"
// //           />
// //         </div>
// //         <div className="relative bg-gradient-to-b from-[#16436f] to-[#10b1b4] text-white py-16">
// //           <div className="max-w-4xl mx-auto text-center">
// //             <h1 className="text-5xl font-extrabold mb-4">Education & Training</h1>
// //             <p className="text-lg leading-relaxed">
// //               Enhance your environmental safety skills with expert training courses offered in partnership with the
// //               Academy of Environmental Health & Safety (AEHS).
// //             </p>
// //             <a
// //               href="http://www.aehstraining.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="mt-6 inline-block bg-white text-[#16436f] font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100"
// //             >
// //               Visit AEHS Training
// //             </a>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Content Section */}

// //       <div className="max-w-6xl mx-auto px-6 py-12">
// //         {/* AEHS Logo Section */}
// //         <div className="text-center mb-12">
// //           <Image
// //             src="/AEHS_Logo.png"
// //             alt="Academy of Environmental Health & Safety Logo"
// //             width={200}
// //             height={200}
// //             className="mx-auto"
// //           />
// //           <h2 className="text-3xl font-bold text-[#16436f] mt-6">Partnered with AEHS</h2>
// //           <p className="text-lg text-gray-700 mt-2">
// //             Hands-on training at our Lawndale facility by industry experts.
// //           </p>
// //         </div>

// //         {/* Training Courses Section */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
// //           {[
// //             {
// //               title: "Sampling and Evaluating Airborne Asbestos Dust by PCM",
// //               subtitle: "NIOSH 582 Equivalency Course",
// //               logo: "/logos/niosh-582.png", // Replace with actual logos
// //             },
// //             {
// //               title: "Introduction to Polarized Light Microscopy",
// //               subtitle: "Analysis of Asbestos Fibers",
// //               logo: "/logos/plm-intro.png",
// //             },
// //             {
// //               title: "Advanced PLM Analysis",
// //               subtitle: "Advanced Analysis of Asbestos Fibers",
// //               logo: "/logos/plm-advanced.png",
// //             },
// //             {
// //               title: "Mold Spore Identification and Analysis",
// //               subtitle: "Comprehensive Mold Analysis",
// //               logo: "/logos/mold-analysis.png",
// //             },
// //           ].map((course, index) => (
// //             <div
// //               key={index}
// //               className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-[#10b1b4]"
// //             >
// //               <div className="flex items-center space-x-4">
// //                 <Image
// //                   src={course.logo}
// //                   alt={course.title}
// //                   width={60}
// //                   height={60}
// //                   className="object-contain"
// //                 />
// //                 <div>
// //                   <h3 className="text-xl font-semibold text-[#16436f]">{course.title}</h3>
// //                   <p className="text-gray-600">{course.subtitle}</p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Call-to-Action Section */}
// //         <div className="text-center mt-12">
// //           <h3 className="text-3xl font-bold text-[#1E5A81]">Ready to Get Certified?</h3>
// //           <p className="text-lg text-gray-700 mt-2">
// //             Advance your career with expert-led training. Visit AEHS or call us for more details.
// //           </p>
// //           <div className="mt-6">
// //             <a
// //               href="http://www.aehstraining.com"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="bg-[#16436f] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#1E5A81] transition"
// //             >
// //               Visit AEHS Training
// //             </a>
// //             <a
// //               href="tel:3104319270"
// //               className="ml-4 bg-[#10b1b4] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#1E5A81] transition"
// //             >
// //               Call (310) 400-6153
// //             </a>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Upcoming Online Courses Section */}
// //       <div className=" py-16">
// //         <div className="max-w-6xl mx-auto px-6 text-center">
// //           <h3 className="text-4xl font-bold text-[#16436f] mb-6">Online Courses Coming Soon!</h3>
// //           <p className="text-lg text-gray-700 mb-8">
// //             We are working to bring our expert-led training courses to a virtual platform. Learn at your own pace, from
// //             anywhere in the world.
// //           </p>
// //           <Image
// //             src="/online-courses-preview.jpg" // Replace with a relevant image
// //             alt="Online Courses Preview"
// //             width={800}
// //             height={400}
// //             className="mx-auto rounded-lg shadow-lg"
// //           />
// //         </div>
// //       </div>

// //       {/* Photo Gallery Section */}
// //       <div className="max-w-6xl mx-auto px-6 py-12">
// //         <h3 className="text-3xl font-bold text-[#16436f] mb-8 text-center">Our Training Facilities</h3>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //           {[
// //             "/photos/training-room.jpg",
// //             "/photos/equipment.jpg",
// //             "/photos/classroom.jpg",
// //           ].map((photo, index) => (
// //             <Image
// //               key={index}
// //               src={photo}
// //               alt={`Training Facility Photo ${index + 1}`}
// //               width={400}
// //               height={300}
// //               className="rounded-lg shadow-lg object-cover"
// //             />
// //           ))}
// //         </div>
// //       </div>
// //       <div className="mt-12 py-8 rounded-md shadow-md px-24 mx-auto">
// //   {/* <div className="container mx-auto px-28"> */}
// //   <iframe
// //   src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13247.370549329537!2d-118.354335!3d33.8937064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfeb4a8c89ec551d%3A0x57b07a05aeaa78e8!2sAcademy%20of%20Environmental%20Health%20and%20Safety%20(AEHS)!5e0!3m2!1sen!2sus!4v1731544118507!5m2!1sen!2sus"
// //   width="100%"
// //   height="450"
// //   allowFullScreen={true}
// //   loading="lazy"
// //   className="rounded-md"
// // ></iframe>

// // {/* </div> */}
// // </div>
// //     </div>
// //   );
// // };

// // export default TrainingPage;

// "use client";

// import Image from "next/image";

// const TrainingPage = () => {
//   return (
//     <div className="relative bg-gradient-to-b from-[#16436f] to-[#10b1b4] text-gray-800">
//       {/* Banner Section */}
//       <div className="relative">
//         {/* Video Background */}
//         <div className="absolute inset-0">
//           <video
//             className="w-full h-full object-cover opacity-80"
//             autoPlay
//             loop
//             muted
//             playsInline
//           >
//             <source src="/AEHSFinalVideo.mp4" type="video/mp4" />
//             {/* Fallback message if video not supported */}
//             Your browser does not support the video tag.
//           </video>
//         </div>

//         {/* Banner Text Overlay */}
//         <div className="relative bg-gradient-to-b from-[#10b1b4]/70 to-[#16436f]/70 text-white py-48">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-5xl font-extrabold mb-4">Education &amp; Training</h1>
//             <p className="text-lg leading-relaxed">
//               Enhance your environmental safety skills with expert training courses offered in partnership with the
//               Academy of Environmental Health &amp; Safety (AEHS).
//             </p>
//             <a
//               href="http://www.aehstraining.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="mt-6 inline-block bg-white text-[#16436f] font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100"
//             >
//               Visit AEHS Training
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="max-w-6xl mx-auto px-6 py-12">
//         {/* AEHS Logo Section */}
//         <div className="text-center mb-12">
//           <Image
//             src="/AEHS_Logo.png"
//             alt="Academy of Environmental Health & Safety Logo"
//             width={200}
//             height={200}
//             className="mx-auto"
//           />
//           <h2 className="text-3xl font-bold text-white mt-6">Partnered with AEHS</h2>
//           <p className="text-lg text-gray-200 mt-2">
//             Hands-on training at our Lawndale facility by industry experts.
//           </p>
//         </div>

//         {/* Training Courses Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//           {[
//             {
//               title: "Sampling and Evaluating Airborne Asbestos Dust by PCM",
//               subtitle: "NIOSH 582 Equivalency Course",
//               logo: "/logos/niosh-582.png", // Replace with actual logos
//             },
//             {
//               title: "Introduction to Polarized Light Microscopy",
//               subtitle: "Analysis of Asbestos Fibers",
//               logo: "/logos/plm-intro.png",
//             },
//             {
//               title: "Advanced PLM Analysis",
//               subtitle: "Advanced Analysis of Asbestos Fibers",
//               logo: "/logos/plm-advanced.png",
//             },
//             {
//               title: "Mold Spore Identification and Analysis",
//               subtitle: "Comprehensive Mold Analysis",
//               logo: "/logos/mold-analysis.png",
//             },
//           ].map((course, index) => (
//             <div
//               key={index}
//               className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-[#10b1b4]"
//             >
//               <div className="flex items-center space-x-4">
//                 <Image
//                   src={course.logo}
//                   alt={course.title}
//                   width={60}
//                   height={60}
//                   className="object-contain"
//                 />
//                 <div>
//                   <h3 className="text-xl font-semibold text-[#16436f]">{course.title}</h3>
//                   <p className="text-gray-600">{course.subtitle}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Call-to-Action Section */}
//         <div className="text-center mt-12">
//           <h3 className="text-3xl font-bold text-white">Ready to Get Certified?</h3>
//           <p className="text-lg text-gray-200 mt-2">
//             Advance your career with expert-led training. Visit AEHS or call us for more details.
//           </p>
//           <div className="mt-6">
//             <a
//               href="http://www.aehstraining.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-[#16436f] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#1E5A81] transition"
//             >
//               Visit AEHS Training
//             </a>
//             <a
//               href="tel:3104006153"
//               className="ml-4 bg-[#10b1b4] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#1E5A81] transition"
//             >
//               Call (310) 400-6153
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Upcoming Online Courses Section */}
//       {/* <div className="py-16">
//         <div className="max-w-6xl mx-auto px-6 text-center">
//           <h3 className="text-4xl font-bold text-white mb-6">Online Courses Coming Soon!</h3>
//           <p className="text-lg text-gray-200 mb-8">
//             We are working to bring our expert-led training courses to a virtual platform. Learn at your own pace, from
//             anywhere in the world.
//           </p>
//           <Image
//             src="/online-courses-preview.jpg" // Replace with a relevant image
//             alt="Online Courses Preview"
//             width={800}
//             height={400}
//             className="mx-auto rounded-lg shadow-lg"
//           />
//         </div>
//       </div> */}

//       {/* Photo Gallery Section */}
//       {/* <div className="max-w-6xl mx-auto px-6 py-12">
//         <h3 className="text-3xl font-bold text-[#16436f] mb-8 text-center">Our Training Facilities</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {[
//             "/photos/training-room.jpg",
//             "/photos/equipment.jpg",
//             "/photos/classroom.jpg",
//           ].map((photo, index) => (
//             <Image
//               key={index}
//               src={photo}
//               alt={`Training Facility Photo ${index + 1}`}
//               width={400}
//               height={300}
//               className="rounded-lg shadow-lg object-cover"
//             />
//           ))}
//         </div>
//       </div> */}

//       {/* Google Map Section */}
//       <div className="mt-12 py-8 rounded-md px-24 mx-auto">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13247.370549329537!2d-118.354335!3d33.8937064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfeb4a8c89ec551d%3A0x57b07a05aeaa78e8!2sAcademy%20of%20Environmental%20Health%20and%20Safety%20(AEHS)!5e0!3m2!1sen!2sus!4v1731544118507!5m2!1sen!2sus"
//           width="100%"
//           height="450"
//           allowFullScreen={true}
//           loading="lazy"
//           className="rounded-md"
//         />
//       </div>
//     </div>
//   );
// };

// export default TrainingPage;

"use client";

import Image from "next/image";
import Link from "next/link";

const TrainingPage = () => {
  // Best courses selected from your provided courseData
  const bestCourses = [
    {
      title: "AHERA Asbestos Worker (Initial) - 32 Hour Course",
      subtitle: "English | 32 Hours | Initial",
      logo: "/ASBTRAIN_001.jpeg",
      path:
        "https://aehstraining.com/dashboard/pages/training/asbestos/course-1",
    },
    {
      title: "AHERA Trabajador de asbesto (inicial) - Curso de 32 horas",
      subtitle: "Español | 32 Horas | Inicial",
      logo: "/ASBTRAIN_001.jpeg",
      path:
        "https://aehstraining.com/dashboard/pages/training/asbestos/course-7",
    },
    {
      title: "Introduction to PLM Analysis - 40 Contact Hours",
      subtitle: "English | 40 Hours | Initial",
      logo: "/plm.jpg",
      path:
        "https://aehstraining.com/dashboard/pages/training/analytical/course-2",
    },
    {
      title: "Introduction to Mold Sampling (Initial) - 16 Contact Hours",
      subtitle: "English | 16 Hours | Initial",
      logo: "/mold.jpeg",
      path: "https://aehstraining.com/dashboard/pages/training/mold/course-1",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-[#16436f] to-[#10b1b4] text-gray-800">
      {/* Banner Section */}
      <div className="relative">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover opacity-80"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/AEHSFinalVideo.mp4" type="video/mp4" />
            {/* Fallback message if video not supported */}
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Banner Text Overlay */}
        <div className="relative bg-gradient-to-b from-[#10b1b4]/70 to-[#16436f]/70 text-white py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-4">
              Education &amp; Training
            </h1>
            <p className="text-lg leading-relaxed">
              Enhance your environmental safety skills with expert training
              courses offered in partnership with the Academy of Environmental
              Health &amp; Safety (AEHS).
            </p>
            <a
              href="http://www.aehstraining.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-white text-[#16436f] font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100"
            >
              Visit AEHS Training
            </a>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* AEHS Logo Section */}
        <div className="text-center mb-12">
          <Image
            src="/AEHS_Logo.png"
            alt="Academy of Environmental Health & Safety Logo"
            width={200}
            height={200}
            className="mx-auto"
          />
          <h2 className="text-3xl font-bold text-white mt-6">
            Partnered with AEHS
          </h2>
          <p className="text-lg text-gray-200 mt-2">
            Hands-on training at our Lawndale facility by industry experts.
          </p>
        </div>

        {/* Training Courses Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bestCourses.map((course, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-[#10b1b4]"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={course.logo}
                  alt={course.title}
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <div>
                  <h3 className="text-xl font-semibold text-[#16436f]">
                    {course.title}
                  </h3>
                  <p className="text-gray-600">{course.subtitle}</p>
                </div>
              </div>
              <div className="mt-4">
                <Link
                  href={course.path}
                  className="inline-block bg-[#16436f] text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-[#0f2b48] transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        {/* Call-to-Action Section */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold text-white">
            Ready to Get Certified?
          </h3>
          <p className="text-lg text-gray-200 mt-2">
            Advance your career with expert-led training. Visit AEHS or call us
            for more details.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0">
            <a
              href="http://www.aehstraining.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-[#16436f] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#1E5A81] transition"
            >
              Visit AEHS Training
            </a>
            <a
              href="tel:3104006153"
              className="w-full sm:w-auto text-center bg-[#10b1b4] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#1E5A81] transition"
            >
              Call (310) 400-6153
            </a>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      {/* Google Map Section */}
      <div className="mt-12 py-8 px-4 sm:px-24 mx-auto">
        <div className="w-full h-[300px] sm:h-[450px] rounded-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13247.370549329537!2d-118.354335!3d33.8937064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfeb4a8c89ec551d%3A0x57b07a05aeaa78e8!2sAcademy%20of%20Environmental%20Health%20and%20Safety%20(AEHS)!5e0!3m2!1sen!2sus!4v1731544118507!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TrainingPage;
