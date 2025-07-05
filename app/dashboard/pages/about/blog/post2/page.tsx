"use client";

import React from "react";
import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"; // Social media icons

export default function AsbestosArticlePage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-10">
      {/* Top Hero Banner */}
      <header className="bg-[#16436F] text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Left: Category label, date, author */}
          <div className="space-y-2">
            <span className="bg-teal-500 text-xs uppercase font-semibold px-2 py-1 rounded">
              Asbestos
            </span>
            <div className="text-sm space-x-2">
              <span className="font-bold">July 18, 2023</span>
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
            {/* Update the src below with your actual asbestos image */}
            <Image
              src="/pinnaclelab/blog/asbestos-main.jpg"
              alt="Asbestos testing microscope"
              fill
              className="object-cover"
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-4 text-[#16436F]">
            What You Need to Know about Asbestos
          </h1>

          {/* Article Body */}
          <div className="prose max-w-none prose-p:leading-7 prose-img:rounded-lg">
            <p>
              In today’s blog post, we delve into a topic that is both alarming and
              pervasive: asbestos. While it was once hailed as a wonder material for
              its fireproofing and insulating properties, we now know that asbestos
              poses significant risks to human health. Join us as we uncover the
              truth about asbestos, its history, its dangers, and the importance of
              awareness and safety measures.
            </p>

            <h2>Understanding Asbestos</h2>
            <p>
              Asbestos refers to a group of naturally occurring mineral fibers that
              were widely used in various industries due to their desirable
              properties. Its heat resistance, strength, and durability made it an
              ideal component for building materials, insulation, and friction
              products. However, what made asbestos so appealing also makes it
              dangerous.
            </p>

            <h2>Historical Use and Health Risks</h2>
            <p>
              Asbestos has a long history dating back thousands of years, with
              evidence of its use found in ancient civilizations. However, it wasn’t
              until the 20th century that its harmful effects on human health became
              apparent. Prolonged inhalation of asbestos fibers can lead to serious
              health conditions such as asbestosis, lung cancer, and mesothelioma —
              a rare and aggressive form of cancer.
            </p>

            <h2>Asbestos in Buildings</h2>
            <p>
              One of the most significant concerns regarding asbestos is its presence
              in buildings, particularly those constructed before the 1980s. Asbestos
              was commonly used in insulation, floor tiles, roofing materials, and
              textured coatings. When these materials deteriorate or are disturbed
              during renovations or demolition, asbestos fibers can become airborne,
              posing a risk to anyone in the vicinity.
            </p>

            {/* Example second image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="relative w-full h-48 rounded-md overflow-hidden">
                <Image
                  src="/pinnaclelab/blog/asbestos-lab1.jpg"
                  alt="Asbestos fiber under microscope"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-full h-48 rounded-md overflow-hidden">
                <Image
                  src="/pinnaclelab/blog/asbestos-lab2.jpg"
                  alt="Microscopic asbestos patterns"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2>Occupational Exposure</h2>
            <p>
              Another major source of asbestos exposure is occupational settings.
              Industries such as construction, shipbuilding, manufacturing, and
              mining have historically used asbestos extensively. Workers in these
              industries, as well as their families, are at a higher risk of
              asbestos-related diseases due to repeated exposure to the fibers.
            </p>

            <h2>Current Regulations and Safety Measures</h2>
            <p>
              Recognizing the hazards of asbestos, many countries have implemented
              regulations and safety measures to protect people from exposure. These
              include strict guidelines for handling and removing
              asbestos-containing materials, proper training for workers, and
              regular inspections of buildings. It is crucial to consult with
              professionals when renovating or demolishing structures suspected to
              contain asbestos.
            </p>

            <h2>The Importance of Awareness and Education</h2>
            <p>
              Raising awareness about asbestos and its risks is vital to protect
              public health. By educating individuals about the dangers associated
              with asbestos exposure, we can empower them to make informed decisions
              regarding their safety. This knowledge should extend to homeowners,
              tenants, workers, and professionals involved in the construction and
              renovation industries.
            </p>

            <h2>Safe Asbestos Removal</h2>
            <p>
              If you suspect the presence of asbestos in your home or workplace, it
              is essential to consult with asbestos removal experts. Attempting to
              handle asbestos-containing materials without proper training and
              equipment can result in the release of fibers and further
              contamination. Trained professionals can safely assess, contain, and
              remove asbestos, minimizing the risk of exposure.
            </p>

            <h2>Encouraging Asbestos-Free Alternatives</h2>
            <p>
              Asbestos-free alternatives are readily available for many
              applications. Building materials such as fiberglass, cellulose, and
              mineral wool offer comparable insulation properties without the
              associated health risks. By choosing these safer alternatives, we can
              help reduce the demand for asbestos and promote a healthier
              environment.
            </p>

            <h2>Conclusion</h2>
            <p>
              Asbestos, once considered a miracle material, is now known to be a
              silent killer. Understanding its dangers and taking appropriate safety
              measures are essential to protect ourselves and future generations. By
              raising awareness, educating others, and supporting asbestos-free
              alternatives, we can work towards minimizing the risks associated with
              this hidden danger. Let us join hands to create a safer, asbestos-free
              world.
            </p>
          </div>

          {/* Prev / Next Posts */}
          <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-4">
            <div>
              <span className="text-sm text-gray-400">PREV POST</span>
              <div>
                <a href="/dashboard/pages/about/blog/post1" className="text-blue-600 hover:underline">
                  The Importance of Asbestos, Mold and Lead Testing and Environmental Services
                </a>
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm text-gray-400">NEXT POST</span>
              <div>
                <a href="/dashboard/pages/about/blog/post3" className="text-blue-600 hover:underline">
                  When and Why Should You Test for Mold in Your Property?
                </a>
              </div>
            </div>
          </div>

          {/* About Author */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-[#16436F]">
              About Author
            </h3>
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
