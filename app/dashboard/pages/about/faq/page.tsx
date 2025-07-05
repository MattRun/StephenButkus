// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import AskOurExperts from "./AskOurExperts";

// const faqs = [
//   {
//     question: "How Do I Prepare a Sample for Submission?",
//     answer: `Before submitting a sample, fill out a Chain-of-Custody form for the relevant service (editable PDF files are located on each page under "Services"). After completion, make sure to securely place your samples in the appropriate storage containers. Double-bag samples in Ziploc-style bags or use rigid containers securely taped closed. If uncertain about the proper sample preparation, reach out to us at (310) 431-9270, and we will gladly assist you.`,
//   },
//   {
//     question: "How Do I Submit Samples?",
//     answer: `Our office is available for walk-in sample submissions Monday through Friday from 9:00 AM until 5:00 PM. For after-hours sample drop-offs, utilize our convenient 24-hour dropbox (located next to our front entrance on the north side of the building), checked multiple times daily on weekdays at 9:00 AM, 11:30 AM, 2:00 PM, 4:00 PM, and 5:00 PM. If you require expedited service, we suggest opting for a walk-in submission to ensure timely receipt of your samples into our system.`,
//   },
//   {
//     question: "How Will I Receive My Lab Results?",
//     answer: `After completing the sample analysis and quality control procedures, our lab will send a PDF copy of your results to the email address you provided.`,
//   },
//   {
//     question: "Is Pinnacle Laboratory Accredited?",
//     answer: `Yes, Pinnacle Laboratory holds federal accreditation for Asbestos Fiber Analysis through NVLAP (Lab Code #600117-0). We also are accredited under the AIHA's Industrial Hygiene, Environmental Lead, and Environmental Microbiology programs (Lab ID #225542).`,
//   },
//   {
//     question: "Do you have a client online portal to access my results?",
//     answer: (
//       <>
// Yes, we do! You should have received your login info in your welcome email. If you haven't, please{" "}
// <Link
//   href="https://limsexpressplus.com/software/html5.html"
//   className="text-[#16436F] underline font-bold"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   click here
// </Link>{" "}
// to access our client portal. Alternatively, feel free to call us at{" "}
// <a href="tel:3104319270" className="text-[#16436F] underline font-bold">
//   (310) 431-9270
// </a>{" "}
// and we'll get you set up.

//       </>
//     ),
//   },
//   {
//     question: "Do you offer shipping?",
//     answer: (
//       <>
//         Yes, we do – and we've made it easier than ever before! Simply click the{" "}
//         <Link
//           href="/dashboard/pages/shippinglabelform"
//           className="inline-block bg-[#16436F] text-white px-4 py-2 rounded hover:bg-[#10b1b4] transition"
//         >
//           Ship
//         </Link>{" "}
//         button in the header. That will prompt you to enter your information and download your shipping label so you can send your samples directly to us!
//       </>
//     ),
//   },
// ];

// const FAQPage = () => {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const [formData, setFormData] = useState({ name: "", email: "", question: "" });

//   const handleToggle = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Submitted:", formData);
//     alert("Your question has been submitted. We will contact you soon.");
//     setFormData({ name: "", email: "", question: "" });
//   };

//   return (
//     <div className="bg-gradient-to-b from-[#16436F] to-[#10b1b4] text-white min-h-screen">
//       {/* Banner Section */}
//       <div className="relative">
//         {/* Header Image */}
//         <div className="absolute inset-0">
//           <Image
//             src="/pinnaclelab/Lab Pictures/AdobeStock_138297161.jpeg" // Replace with your image path
//             alt="Header Background"
//             layout="fill"
//             objectFit="cover"
//             className="opacity-90"
//           />
//         </div>

//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#16436F] opacity-80"></div>

//         {/* Content */}
//         <div className="relative max-w-6xl mx-auto flex items-center h-[70vh] px-6 z-10 justify-end">
//           <motion.div
//             className="w-full md:w-1/2 text-right"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h1 className="text-8xl font-extrabold text-white mb-6">FAQs</h1>
//             <p className="text-lg leading-relaxed text-gray-200">
//               Pinnacle Laboratory, the preferred Environmental Testing Lab in Los Angeles, provides answers to FAQs on asbestos, mold, and lead testing. If your question is not in our FAQs, feel free to contact our team for personalized support at every step of your project.
//             </p>
//           </motion.div>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row md:gap-12">
//   {/* FAQ Section */}
//   <div className="md:w-2/3 space-y-6 mb-12 md:mb-0">
//     {faqs.map((faq, index) => (
//       <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
//         <button
//           onClick={() => handleToggle(index)}
//           className="w-full text-left text-xl font-semibold text-[#16436F] flex justify-between items-center"
//         >
//           {faq.question}
//           <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
//         </button>
//         {openIndex === index && <div className="mt-4 text-gray-700">{faq.answer}</div>}
//       </div>
//     ))}
//   </div>

//   {/* Ask Our Experts Section */}
//   <div className="md:w-1/3 order-last md:order-first">
//     <AskOurExperts />
//   </div>
// </div>

//     </div>
//   );
// };

// export default FAQPage;





















































"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AskOurExperts from "./AskOurExperts";

const faqs = [
  {
    question: "How Do I Prepare a Sample for Submission?",
    answer: `Before submitting a sample, fill out a Chain-of-Custody form for the relevant service (editable PDF files are located on each page under "Services"). After completion, make sure to securely place your samples in the appropriate storage containers. Double-bag samples in Ziploc-style bags or use rigid containers securely taped closed. If uncertain about the proper sample preparation, reach out to us at (310) 431-9270, and we will gladly assist you.`,
  },
  {
    question: "How Do I Submit Samples?",
    answer: `Our office is available for walk-in sample submissions Monday through Friday from 9:00 AM until 5:00 PM. For after-hours sample drop-offs, utilize our convenient 24-hour dropbox (located next to our front entrance on the north side of the building), checked multiple times daily on weekdays at 9:00 AM, 11:30 AM, 2:00 PM, 4:00 PM, and 5:00 PM. If you require expedited service, we suggest opting for a walk-in submission to ensure timely receipt of your samples into our system.`,
  },
  {
    question: "How Will I Receive My Lab Results?",
    answer: `After completing the sample analysis and quality control procedures, our lab will send a PDF copy of your results to the email address you provided.`,
  },
  {
    question: "Is Pinnacle Laboratory Accredited?",
    answer: `Yes, Pinnacle Laboratory holds federal accreditation for Asbestos Fiber Analysis through NVLAP (Lab Code #600117-0). We are also accredited under AIHA's Industrial Hygiene (heavy metals), Environmental Lead, and Environmental Microbiology (mold) programs (Lab ID #225542).`,
  },
  {
    question: "Do you have a client online portal to access my results?",
    answer: (
      <>
        Yes, we do! You should have received your login info in your welcome email. If you haven't, please{" "}
        <Link
          href="https://limsexpressplus.com/software/html5.html"
          className="text-[#16436F] underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here
        </Link>{" "}
        to access our client portal. Alternatively, feel free to call us at{" "}
        <a href="tel:3104319270" className="text-[#16436F] underline font-bold">
          (310) 431-9270
        </a>{" "}
        and we'll get you set up.
      </>
    ),
  },
  {
    question: "Do you offer shipping?",
    answer: (
      <>
        Yes, we do – and we've made it easier than ever before! Simply click the{" "}
        <Link
          href="/dashboard/pages/shippinglabelform"
          className="inline-block bg-[#16436F] text-white px-4 py-2 rounded hover:bg-[#10b1b4] transition"
        >
          Ship
        </Link>{" "}
        button in the header. That will prompt you to enter your information and download your shipping label so you can send your samples directly to us!
      </>
    ),
  },
  {
    question: "Do you offer courier services?",
    answer: `Contact us for more information on courier pickup.`,
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", question: "" });

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Your question has been submitted. We will contact you soon.");
    setFormData({ name: "", email: "", question: "" });
  };

  return (
    <div className="bg-gradient-to-b from-[#16436F] to-[#10b1b4] text-white min-h-screen">
      {/* Banner Section */}
      <div className="relative">
        {/* Header Image */}
        <div className="absolute inset-0">
          <Image
            src="/pinnaclelab/Lab Pictures/AdobeStock_138297161.jpeg"
            alt="Header Background"
            layout="fill"
            objectFit="cover"
            className="opacity-90"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#16436F] opacity-80"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto flex items-center h-[50vh] px-6 z-10 justify-end"> {/* Reduced height */}
          <motion.div
            className="w-full md:w-1/2 text-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-8xl font-extrabold text-white mb-6">FAQs</h1>
            <p className="text-lg leading-relaxed text-gray-200">
              With decades of experience, the Pinnacle team is ready to answer your questions!
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row md:gap-12">
        {/* FAQ Section */}
        <div className="md:w-2/3 space-y-6 mb-12 md:mb-0">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <button
                onClick={() => handleToggle(index)}
                className="w-full text-left text-xl font-semibold text-[#16436F] flex justify-between items-center"
              >
                {faq.question}
                <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && <div className="mt-4 text-gray-700">{faq.answer}</div>}
            </div>
          ))}
        </div>

        {/* Ask Our Experts Section */}
        <div className="md:w-1/3 order-last md:order-first">
          <AskOurExperts />
        </div>
      </div>
    </div>
  );
};

export default FAQPage;