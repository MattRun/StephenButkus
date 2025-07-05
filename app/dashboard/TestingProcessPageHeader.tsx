"use client";

import React from "react";

const TestingProcessPageHeader = () => {
  return (
    <div className="bg-[#16436F] text-white pb-0">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto px-6 py-20">
        {/* <span className="text-[#10b1b4] font-medium tracking-widest uppercase">
          Our Process
        </span> */}
        <h1 className="text-5xl font-bold mt-4 text-[#10b1b4]">
        The Pinnacle Process
        </h1>
        <p className="text-lg text-gray-300 mt-6">
          At Pinnacle Laboratory, we follow a comprehensive step-by-step process to deliver accurate and reliable testing results. Here’s how it works.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/dashboard/pages/contactus/generalinquiry"
            className="bg-[#10b1b4] hover:bg-[#16438F] text-white px-6 py-3 rounded-full text-lg font-medium transition"
          >
            Contact Us
          </a>
          <a
            href="/dashboard/pages/analyticalservices/asbestos"
            className="border border-blue-500 hover:border-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default TestingProcessPageHeader;
