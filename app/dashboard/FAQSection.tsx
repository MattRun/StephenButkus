"use client";

import React, { useState } from "react";

const faqItems = [
  // {
  //   question: "Are the results guaranteed?",
  //   answer: "While we strive for precision and accuracy, results depend on numerous variables, such as sample quality and environmental conditions.",
  // },
  {
    question: "How quickly can I expect results?",
    answer: "We offer turnaround times ranging from 3 hours to 5 business days, depending on the service selected.",
  },
  {
    question: "Is Pinnacle Laboratory accredited?",
    answer: "Yes, we are accredited by the National Voluntary Laboratory Accreditation Program (NVLAP) for asbestos fiber analysis and the American Industrial Hygiene Association (AIHA) for mold, lead, and heavy metals analyses.",
  },
  {
    question: "How do I submit a sample for testing?",
    answer: "Samples can be dropped off in-person or mailed to our location using our Chain-of-Custody forms available on our website. Please follow all sample preparation instructions provided to ensure your sample arrives safely and intact.",
  },
  {
    question: "What are the costs associated with testing?",
    answer: "Costs vary by service type and turnaround time. Please contact our team for a detailed quote.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-[#16436F] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        <p className="text-gray-300 mt-4">
          Can't find the answer you're looking for? Feel free to reach out to our team for more information.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-10">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-600 py-4"
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex justify-between items-center text-left text-lg text-white font-medium hover:text-[#10b1b4] focus:outline-none"
            >
              {item.question}
              <span className="ml-4">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-gray-300 text-base">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
