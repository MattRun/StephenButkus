"use client";

import React from "react";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"; // Social media icons

export default function MoldArticlePage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      {/* Top Hero Banner */}
      <header className="bg-[#16436F] text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Left: Category label, date, author */}
          <div className="space-y-2">
            <span className="bg-teal-500 text-xs uppercase font-semibold px-2 py-1 rounded">
              Mold
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
            {/* Update with your preferred image path */}
            <Image
              src="/pinnaclelab/blog/mold-main.jpg"
              alt="Mold under microscope"
              fill
              className="object-cover"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-4 text-[#16436F]">
            When and Why Should You Test for Mold in Your Property?
          </h1>

          {/* Article Body */}
          <div className="prose max-w-none prose-p:leading-7 prose-img:rounded-lg">
            <p>
              Mold is a common issue that many property owners face, and it can
              have detrimental effects on both the structural integrity of the
              building and the health of its occupants. While some instances of
              mold growth may be visible and obvious, others may be hidden
              behind walls or in areas that are difficult to access. To address
              mold-related concerns, it becomes crucial to know when and why you
              should consider testing for mold in your property. In this blog
              post, we will explore different scenarios where mold testing is
              warranted and the benefits it provides.
            </p>

            <h2>Visible Mold Growth</h2>
            <p>
              When you see mold growing on surfaces such as walls, ceilings, or
              floors, it’s a clear indication of a problem. Testing can help
              identify the type of mold present and determine the extent of
              contamination, providing insights into the necessary steps for
              remediation.
            </p>

            <h2>Suspicion of Hidden Mold</h2>
            <p>
              Musty odors or a persistent dampness in certain areas of your
              property might indicate hidden mold growth. Testing can help
              locate the source of the smell and identify if there is mold
              present in concealed areas, such as within walls, under carpets,
              or in ventilation systems.
            </p>

            <h2>Water Damage</h2>
            <p>
              Any significant water damage event, such as flooding, leaks, or
              burst pipes, increases the risk of mold growth. In such cases,
              it’s essential to conduct mold testing to assess whether mold has
              started to colonize in affected areas and prevent further damage.
            </p>

            <h2>Unexplained Health Issues</h2>
            <p>
              If your family members experience allergic reactions, respiratory
              problems, or other unexplained health issues that seem to worsen
              when inside the property, mold exposure could be a potential
              cause. Mold testing can identify if mold spores are present in the
              air and help establish a correlation between the symptoms and
              mold contamination.
            </p>

            <div className="relative w-full h-64 mt-4 mb-4 rounded-md overflow-hidden">
              <Image
                src="/pinnaclelab/blog/mold-duck.jpg"
                alt="Mold inspection image"
                fill
                className="object-cover"
              />
            </div>

            <h2>Pre–Purchase or Pre–Rental Inspections</h2>
            <p>
              Before buying or renting a property, it’s wise to conduct a mold
              test as part of the inspection process. This can ensure that the
              property is free from mold or provide information that allows you
              to negotiate repairs or remediation measures as part of the
              transaction.
            </p>

            <h2>Post–Remediation Verification</h2>
            <p>
              If you have previously dealt with mold issues and undergone
              remediation, testing can confirm the effectiveness of the
              remediation efforts. It helps ensure that the mold problem has
              been fully resolved, providing peace of mind and reassurance to
              the property owner.
            </p>

            <h2>Conclusion</h2>
            <p>
              Testing for mold in your property is crucial in various situations
              to assess the presence and severity of mold growth. Whether you
              notice visible mold, suspect hidden contamination, experience
              unexplained health issues, or undergo water damage events, mold
              testing offers valuable insights into the extent of the problem
              and guides appropriate remediation measures. Remember to consult
              qualified professionals for accurate testing procedures and
              interpretations. By addressing mold issues promptly, you can
              safeguard the structural integrity of your property and protect
              the health of its occupants.
            </p>
          </div>

          {/* Prev / Next Posts */}
          <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-4">
            <div>
              <span className="text-sm text-gray-400">PREV POST</span>
              <div>
                <a href="/dashboard/pages/about/blog/post2" className="text-blue-600 hover:underline">
                  What you Need to Know about Asbestos
                </a>
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-400">NEXT POST</span>
              <div>
                <a href="/dashboard/pages/about/blog/post1" className="text-blue-600 hover:underline">
                  The Importance of Environmental Testing for Lead: Protecting Our
                  Communities and Health
                </a>
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
            <h3 className="text-lg font-semibold mb-3 text-[#16436F]">
              Categories
            </h3>
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
