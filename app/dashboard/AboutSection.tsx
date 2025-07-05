// "use client";

// import React from "react";
// import Image from "next/image";

// const AboutSection = () => {
//   return (
//     <div className="relative bg-[#F5F5F5]">
//       {/* Top Section */}
//       <div className="relative grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 py-16">
//         {/* Left Image with Diagonal Crop */}
//         <div className="relative">
//           <div className="overflow-hidden w-full h-full">
//             <div className="absolute -rotate-3 -top-5 -left-5 bg-[#16436F] w-full h-full z-0"></div>
//             <Image
//               src="/pinnaclelab/Lab Pictures/JLMEnvironmental-33 (1).jpg" // Replace with the correct image
//               alt="About Us"
//               width={800}
//               height={600}
//               className="rounded-lg shadow-md transform -rotate-2"
//             />
//           </div>
//         </div>

//         {/* Right Content */}
//         <div className="text-black z-10">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-snug text-[#16436F]">
//             TO CREATE LIGHT <br /> WHERE THERE IS DARKNESS
//           </h2>
//           <p className="text-lg leading-relaxed mb-6">
//             Founded in 1975, we are a USA-based manufacturer committed to
//             excellence in innovation, empowering adventurers and professionals
//             alike.
//           </p>
//           <p className="text-lg leading-relaxed">
//             Our unwavering commitment to quality and craftsmanship pushes us to
//             deliver cutting-edge solutions to meet the needs of all everyday
//             heroes.
//           </p>
//         </div>
//       </div>

//       {/* Divider with Color Transition */}
//       <div className="relative">
//         <div className="absolute inset-0 transform skew-y-2 bg-[#16436F]"></div>
//       </div>

//       {/* Bottom Section */}
//       <div className="relative grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 py-16 bg-[#F5F5F5]">
//         {/* Left Content */}
//         <div className="text-black">
//           <p className="text-lg leading-relaxed mb-6">
//             Join us as we innovate and break boundaries with unmatched
//             performance and excellence. We continue to push limits that empower
//             professionals and outdoor enthusiasts alike.
//           </p>
//           <button className="px-6 py-3 bg-[#10b1b4] text-white font-semibold rounded-lg hover:bg-[#0d91a0] transition">
//             Learn More
//           </button>
//         </div>

//         {/* Right Image with Diagonal Crop */}
//         <div className="relative">
//           <div className="overflow-hidden w-full h-full">
//             <div className="absolute rotate-3 top-5 right-5 bg-[#10b1b4] w-full h-full z-0"></div>
//             <Image
//               src="/pinnaclelab/Lab Pictures/JLMEnvironmental-38.jpg" // Replace with the correct image
//               alt="Our Mission"
//               width={800}
//               height={600}
//               className="rounded-lg shadow-md transform rotate-2"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;


















// This one is good
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="relative bg-[#F5F5F5] PY-24">
      {/* Top Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 py-12 gap-8">
        {/* Left Image with Diagonal Crop */}
        <div className="relative">
          <div className="overflow-hidden w-full h-[250px] md:h-[300px]">
            <div className="absolute -rotate-3 -top-2 -left-2 bg-[#16436F] w-full h-full z-0"></div>
            <Image
              src="/pinnaclelab/Lab Pictures/20250328_102846.jpg" // Replace with the correct image
              alt="About Us"
              fill
              className="rounded-lg shadow-md object-cover transform -rotate-2"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="text-black z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug text-[#16436F]">
            {/* TO CREATE LIGHT <br /> WHERE THERE IS DARKNESS */}
            A COMMITMENT TO <br /> ACCURACY AND EXCELLENCE
          </h2>
          {/* <p className="text-base leading-relaxed mb-4">
          With a collective experience exceeding 50+ years and a remarkable history of analyzing over
          1,000,000 PLM samples, our team is wholeheartedly dedicated to meeting your project deadlines while upholding
          the highest standards of quality and service.
          </p> */}

{/* <div className="text-center mt-6 py-2 pb-4 relative text-black drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)]"> */}
  <p className="text-lg text-base leading-relaxed mb-2">
    With over 50 years of combined experience and a proven track record,
  </p>
  <p className="text-xl sm:text-3xl font-bold my-2 text-[#10b1b4]">
    1,000,000 + SAMPLES ANALYZED
  </p>
  <p className="text-lg text-base leading-relaxed mb-4">
    Pinnacle Laboratory ensures your testing needs are met with the highest standards.
  </p>

          {/* <p className="text-base leading-relaxed">
          Not only does our team excel in PLM sample analysis, but we also specialize in handling asbestos, lead, and
          mold samples with equal expertise. Trust our team to go beyond expectations, offering you a breadth of
          knowledge and proficiency in the analysis of diverse samples for a thorough and reliable assessment.
          </p> */}
        </div>
      </div>
      {/* </div> */}

    {/* <h2 className="text-4xl font-bold mt-4">
      A commitment to accuracy and excellence
    </h2>
    <div className="text-center mt-6 py-2 pb-4 relative text-[#10b1b4] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)]">
  <p className="text-lg font-bold">
    With over 50 years of combined experience and a proven track record,
  </p>
  <p className="text-4xl sm:text-5xl font-extrabold my-2 text-[#10b1b4]">
    1,000,000 SAMPLES ANALYZED
  </p>
  <p className="text-lg font-bold">
    Pinnacle Laboratory ensures your testing needs are met with the highest standards.
  </p>

      {/* Divider with Color Transition */}
      <div className="relative">
        <div className="absolute inset-0 transform skew-y-2 bg-[#16436F] h-[40px]"></div>
      </div>

      {/* Bottom Section */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 py-12 gap-8 bg-[#F5F5F5]">
        {/* Left Content */}
        <div className="text-black">
          <p className="text-base leading-relaxed mb-4">
          Not only does our team excel in PLM analysis analysis, we also specialize in mold and heavy metals samples with equal expertise. Trust our team to go beyond expectations, offering you a breadth of
          knowledge and proficiency in the analysis of diverse samples for a thorough and reliable assessment.
          </p>
         <Link 
            href="/dashboard/pages/about/meetourteam"
            className="px-6 py-2 bg-[#10b1b4] text-white font-semibold rounded-lg hover:bg-[#0d91a0] transition"
            >
            Learn More
         </Link>

        </div>

        {/* Right Image with Diagonal Crop */}
        <div className="relative">
          <div className="overflow-hidden w-full h-[250px] md:h-[300px]">
            <div className="absolute rotate-3 top-2 right-2 bg-[#10b1b4] w-full h-full z-0"></div>
            <Image
              src="/pinnaclelab/Lab Pictures/JLMEnvironmental-38.jpg" // Replace with the correct image
              alt="Our Mission"
              fill
              className="rounded-lg shadow-md object-cover transform rotate-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;



















// // "use client";

// // import React from "react";
// // import Image from "next/image";
// // import Link from "next/link";

// // const AboutSection = () => {
// //   return (
// //     <div
// //       className="relative py-24"
// //       style={{
// //         background: "linear-gradient(to bottom, #F5F5F5, #16436F)", // Smooth gradient blend
// //       }}
// //     >
// //       {/* Top Section */}
// //       <div className="relative grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 py-12 gap-8">
// //         {/* Left Image with Diagonal Crop */}
// //         <div className="relative">
// //           <div className="overflow-hidden w-full h-[250px] md:h-[300px]">
// //             <div className="absolute -rotate-3 -top-2 -left-2 bg-[#16436F] w-full h-full z-0"></div>
// //             <Image
// //               src="/pinnaclelab/Lab Pictures/JLMEnvironmental-33 (1).jpg"
// //               alt="About Us"
// //               fill
// //               className="rounded-lg shadow-md object-cover transform -rotate-2"
// //             />
// //           </div>
// //         </div>

// //         {/* Right Content */}
// //         <div className="text-black z-10">
// //           <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-snug text-[#16436F]">
// //             TO CREATE LIGHT <br /> WHERE THERE IS DARKNESS
// //           </h2>
// //           <p className="text-base leading-relaxed mb-4">
// //             With a collective experience exceeding 25 years and a remarkable history of analyzing over
// //             250,000 PLM samples, our team is wholeheartedly dedicated to meeting your project deadlines while upholding
// //             the highest standards of quality and service.
// //           </p>
// //         </div>
// //       </div>

// //       {/* Divider with Color Transition */}
// //       <div className="relative">
// //         <div className="absolute inset-0 transform skew-y-2 bg-[#16436F] h-[40px]"></div>
// //       </div>

// //       {/* Bottom Section */}
// //       <div className="relative grid grid-cols-1 md:grid-cols-2 items-center max-w-7xl mx-auto px-6 py-12 gap-8">
// //         {/* Left Content */}
// //         <div className="text-black">
// //           <p className="text-base leading-relaxed mb-4">
// //             Not only does our team excel in PLM sample analysis, but we also specialize in handling asbestos, lead, and
// //             mold samples with equal expertise. Trust our team to go beyond expectations, offering you a breadth of
// //             knowledge and proficiency in the analysis of diverse samples for a thorough and reliable assessment.
// //           </p>
// //           <Link
// //             href="/dashboard/pages/about/meetourteam"
// //             className="px-6 py-2 bg-[#10b1b4] text-white font-semibold rounded-lg hover:bg-[#0d91a0] transition"
// //           >
// //             Learn More
// //           </Link>
// //         </div>

// //         {/* Right Image with Diagonal Crop */}
// //         <div className="relative">
// //           <div className="overflow-hidden w-full h-[250px] md:h-[300px]">
// //             <div className="absolute rotate-3 top-2 right-2 bg-[#10b1b4] w-full h-full z-0"></div>
// //             <Image
// //               src="/pinnaclelab/Lab Pictures/JLMEnvironmental-38.jpg"
// //               alt="Our Mission"
// //               fill
// //               className="rounded-lg shadow-md object-cover transform rotate-2"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AboutSection;















// "use client";

// import React from "react";
// import Image from "next/image";
// import styles from "./aboutsection.module.css";

// const AboutSection = () => {
//   return (
//     <div className={styles.section}>
//       {/* Background Gradient */}
//       <div className={styles["background-gradient"]}></div>

//       {/* Content Wrapper */}
//       <div className={styles["content-wrapper"]}>
//         {/* Top Section */}
//         <div className={styles["section-content"]}>
//           <div className={styles["text-block"]}>
//             <h2 className={styles.heading}>TO CREATE LIGHT WHERE THERE IS DARKNESS</h2>
//             <p>
//               Founded in 1975, Pinnacle Tec is a family-owned and operated
//               USA-based manufacturer. For almost 50 years, we’ve committed to
//               innovation in tactical lighting and serving the military, law
//               enforcement, and more.
//             </p>
//           </div>
//           <div className={`${styles["image-wrapper"]} ${styles["image-left"]}`}>
//             <Image
//               src="/pinnaclelab/Lab Pictures/JLMEnvironmental-33 (1).jpg"
//               alt="Lab Work"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className={styles["section-content"]}>
//           <div className={`${styles["image-wrapper"]} ${styles["image-right"]}`}>
//             <Image
//               src="/pinnaclelab/Lab Pictures/JLMEnvironmental-38.jpg"
//               alt="Microscope Work"
//               fill
//               className="object-cover"
//             />
//           </div>
//           <div className={`${styles["text-block"]} ${styles["text-block-dark"]}`}>
//             <p>
//               What sets us apart is our dedication to being an entirely USA-made
//               brand. From concept to completion, we ensure superior craftsmanship
//               and performance. Join us on our mission to push limits further.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;
