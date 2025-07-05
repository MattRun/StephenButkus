"use client";

import React from "react";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"; // Social media icons

// Example: For the "previous post" link
// import Link from "next/link";

export default function LeadTestingArticlePage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      {/* Top Hero Banner */}
      <header className="bg-[#16436F] text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Left: Category label, date, author */}
          <div className="space-y-2">
            <span className="bg-teal-500 text-xs uppercase font-semibold px-2 py-1 rounded">
              Latest Blog
            </span>
            <div className="text-sm space-x-2">
              <span className="font-bold">July 19, 2023</span>
              <span>•</span>
              <span>By admin</span>
            </div>
          </div>
          {/* Right: Icons (placeholder for social media & comments) */}
          <div className="mt-4 md:mt-0 flex items-center space-x-4 text-sm">
          <a
            href="https://www.instagram.com/pinnaclelaboratory/"
            className="hover:underline flex items-center space-x-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/company/pinnacle-laboratory"
            className="hover:underline flex items-center space-x-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100092455441130"
            className="hover:underline flex items-center space-x-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF />
            <span>FB</span>
          </a>
          <a href="#" className="hover:underline">
            0 Comments
          </a>
          </div>
        </div>
      </header>

      {/* Main Content: 2-Column Layout */}
      <div className="max-w-6xl mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
        {/* Left Column: Article */}
        <article className="md:col-span-2">
          {/* Large Image */}
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-6">
            {/* Update the src below with an actual path/image */}
            <Image
              src="/pinnaclelab/blog/sample-lead.jpg"
              alt="Lead Test Banner"
              fill
              className="object-cover"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-4 text-[#16436F]">
            The Importance of Environmental Testing for Lead: Protecting Our Communities and Health
          </h1>

          {/* Article Body */}
          <div className="prose max-w-none prose-p:leading-7 prose-img:rounded-lg">
            <p>
              Lead is a highly toxic metal that can have detrimental effects on
              human health, particularly for children and pregnant women. It can be
              found in various sources, including paint, soil, water, and certain
              consumer products. To ensure the safety of our communities,
              environmental testing for lead is crucial. In this blog post, we will
              explore the significance of environmental testing for lead, its
              sources, potential health risks, and the measures that can be taken to
              mitigate exposure.
            </p>

            <h2>Identifying Lead Sources</h2>
            <p>
              Environmental testing helps in identifying sources of lead
              contamination in our surroundings. This includes testing for
              lead-based paint in older homes and buildings, assessing lead levels
              in soil near industrial sites or areas with historical lead
              emissions, and analyzing water samples for lead content in homes,
              schools, and public facilities.
            </p>

            <h2>Protecting Children’s Health</h2>
            <p>
              Children are especially vulnerable to the harmful effects of lead
              exposure. Even low levels of lead can lead to developmental delays,
              cognitive impairments, and behavioral problems. Environmental testing
              ensures that areas where children spend time, such as homes, schools,
              and playgrounds, are free from lead hazards, enabling proactive
              measures to be taken if contamination is detected.
            </p>

            <h2>Assessing Water Quality</h2>
            <p>
              Lead can enter the water supply through old plumbing systems or
              lead service lines. Environmental testing laboratories analyze water
              samples to measure lead levels and provide accurate information to
              individuals, municipalities, and water treatment facilities. This data
              helps identify potential sources of lead contamination and supports
              efforts to remediate the issue and protect public health.
            </p>

            <div className="relative w-full h-64 mt-4 mb-4 rounded-md overflow-hidden">
              <Image
                src="/pinnaclelab/blog/sample-lead-work.jpg"
                alt="Lead Work Area Sign"
                fill
                className="object-cover"
              />
            </div>

            <h2>Supporting Regulatory Compliance</h2>
            <p>
              Environmental testing for lead is essential for regulatory compliance.
              Regulations exist to protect individuals and communities from lead
              exposure, such as the EPA’s Lead Renovation, Repair, and Painting (RRP)
              rule. By conducting lead testing, property owners, contractors, and
              other stakeholders can ensure compliance with these regulations and
              take appropriate measures to address lead hazards.
            </p>

            <h2>Facilitating Remediation Efforts</h2>
            <p>
              In the event of lead contamination, environmental testing provides
              crucial information for effective remediation strategies. Testing
              results guide remediation efforts by identifying the extent and
              severity of lead contamination, helping to prioritize areas or
              surfaces that require attention, and verifying the success of
              remediation actions.
            </p>

            <h2>Promoting Public Awareness and Education</h2>
            <p>
              Environmental testing for lead raises public awareness about the
              potential risks and health effects associated with lead exposure. By
              highlighting the importance of testing and sharing information on
              lead sources and prevention strategies, communities can become better
              equipped to identify and address potential lead hazards, ultimately
              promoting healthier environments for everyone.
            </p>

            <p>
              Environmental testing for lead is a vital component in protecting our
              communities and safeguarding public health. Through thorough testing
              of various sources, including paint, soil, and water, we can identify
              lead contamination and take appropriate measures to mitigate exposure
              risks. By ensuring regulatory compliance, supporting remediation
              efforts, and promoting public awareness, we can create safer
              environments for our children and future generations. Let us
              prioritize environmental testing for lead to build healthier and
              lead-free communities.
            </p>
          </div>

          {/* Prev Post */}
          <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-4">
            <div>
              <span className="text-sm text-gray-400">PREV POST</span>
              <div>
                {/* Example link to previous post */}
                {/* <Link href="/dashboard/pages/about/blog/previous-post"> */}
                <a href="/dashboard/pages/about/blog/post3" className="text-blue-600 hover:underline">
                  When and Why Should You Test for Mold in Your Property?
                </a>
                {/* </Link> */}
              </div>
            </div>
          </div>

          {/* About Author */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-[#16436F]">About Author</h3>
            <div className="flex items-center space-x-4">
              {/* Placeholder for avatar */}
              <div className="w-16 h-16 rounded-full bg-gray-300 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-500 mb-2">
                  POST BY <span className="font-bold">admin</span>
                </p>
                {/* Social Icons */}
                <div className="flex space-x-3 text-[#16436F] text-xl">
                  <a href="#" className="hover:text-blue-600">
                    <i className="fab fa-facebook" />
                  </a>
                  <a href="#" className="hover:text-blue-600">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#" className="hover:text-blue-600">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Right Column: Sidebar */}
        <aside className="space-y-6">
          {/* Search */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3 text-[#16436F]">
              Search
            </h3>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Enter Keyword..."
                className="px-3 py-2 w-full focus:outline-none text-[#10b1b4]"
              />
              <button className="bg-[#16436F] text-white px-4 py-2">
                Go
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3 text-[#16436F]">Categories</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Latest Blog</li>
              <li>Asbestos</li>
              <li>Mold</li>
              <li>Lead</li>
            </ul>
          </div>

          {/* Popular Post */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3 text-[#16436F]">
              Popular Post
            </h3>
            <p className="text-gray-600 text-sm">
              Show your most popular or featured post here...
            </p>
          </div>

          {/* Subscribe Box */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2 text-[#16436F]">
              Subscribe Us
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe us to get latest news & articles in your inbox.
            </p>
            <input
              type="email"
              placeholder="Email Address..."
              className="border border-gray-300 rounded w-full px-3 py-2 mb-3 focus:outline-none text-[#10b1b4]"
            />
            <button className="bg-[#16436F] w-full text-white py-2 rounded">
              Subscribe
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
