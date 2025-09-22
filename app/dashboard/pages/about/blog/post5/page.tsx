'use client';

import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function NonFungalBlogPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen pb-16">
      <header className="bg-[#16436F] text-white py-8 px-4 border-b border-[#0f2b4a]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <span className="bg-[#10b1b4] text-xs uppercase font-semibold px-2 py-1 rounded">
              Microbiology
            </span>
            <div className="text-sm space-x-2">
              <span className="font-bold">June 2025</span>
              <span>•</span>
              <span>By Bailey Coleman</span>
            </div>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-4 text-sm">
            <a href="https://www.instagram.com/pinnaclelaboratory/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:underline">
              <FaInstagram /> <span>Instagram</span>
            </a>
            <a href="https://www.linkedin.com/company/pinnacle-laboratory" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:underline">
              <FaLinkedinIn /> <span>LinkedIn</span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=100092455441130" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:underline">
              <FaFacebookF /> <span>FB</span>
            </a>
            <a href="#" className="hover:underline">0 Comments</a>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <article className="md:col-span-2">
          <div className="mb-8">
            <h1 className="text-4xl font-serif font-bold leading-tight text-[#1a1a1a] mb-6">
              Understanding Non-Fungal Particulate Baselines and Culture Sampling
            </h1>
            <div className="relative w-full h-80 rounded overflow-hidden mb-6">
              <Image
                src="/pinnaclelab/microbiology/Chaetomium1.jpg"
                alt="Microbiology Hero"
                fill
                className="object-cover object-center"
              />
            </div>
            <p className="text-lg text-gray-700 leading-8">
              Non-fungal particulates are a critical but often overlooked part of indoor environmental assessments.
              This article explores how Void Creatives evaluates these particles and what it means for health and compliance.
            </p>
          </div>

          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-bold text-[#16436F] mb-3">What Are Non-Fungal Particulates?</h2>
              <p className="text-gray-700 leading-7">
                Indoor air contains more than just mold. It may include skin cells, fibers, insect fragments, and synthetic materials from our daily environments.
                These airborne allergens are captured using cassettes like Air-O-Cell and Allergenco-D.
              </p>
            </section>

            <section>
              <div className="relative w-full h-60 mb-4 rounded-lg overflow-hidden">
                <Image
                  src="/pinnaclelab/microbiology/Skin Cells1.jpg"
                  alt="Skin Cells"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-[#16436F] mb-3">Why Baseline Ranges Matter</h2>
              <p className="text-gray-700 leading-7">
                By understanding typical indoor vs outdoor ranges, we help identify when something is out of balance. Our lab uses reference thresholds to guide interpretation and determine whether elevated counts should be flagged.
              </p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-bold text-[#16436F] mb-3">Culture Sampling</h2>
                <p className="text-gray-700 leading-7">
                  We grow viable fungi and bacteria on media like MEA to determine the living organisms present in an environment.
                  This complements traditional spore trap analysis and informs remediation plans.
                </p>
              </div>
              <div className="relative w-full h-56 rounded overflow-hidden">
                <Image
                  src="/pinnaclelab/microbiology/Skin Cells1.jpg"
                  alt="Aspergillus Culture"
                  fill
                  className="object-cover"
                />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#16436F] mb-3">Organisms We Commonly Identify</h2>
              <ul className="list-disc list-inside text-gray-700 leading-7 space-y-1">
                <li>Aspergillus (e.g., fumigatus, versicolor)</li>
                <li>Penicillium</li>
                <li>Cladosporium</li>
                <li>Stachybotrys & Memnoniella</li>
                <li>Chaetomium, Alternaria, Trichoderma</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#16436F] mb-3">Colilert: Water Bacteria Screening</h2>
              <p className="text-gray-700 leading-7">
                Using presence/absence testing, we check for total coliform and <em>E. coli</em> in water. Results are rapid and effective for regulatory or pre-sale checks.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#16436F] mb-3">Field Documentation & Compliance</h2>
              <p className="text-gray-700 leading-7">
                Every report is backed by detailed notes: sample ID, volume, date, conditions, and controls. This ensures defensible, traceable data for clients and auditors alike.
              </p>
            </section>

            <section className="bg-[#f1f5f9] p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-[#16436F] mb-2">New Testing Options at Pinnacle</h2>
              <p className="text-gray-700 leading-7">
                In addition to mold, Pinnacle now offers full-spectrum microbial analysis including non-fungal particulates, culture growth reporting, water bacteria (Colilert), and Micro5 cassette support.
              </p>
            </section>
          </div>

          <footer className="mt-16 border-t pt-8">
            <h3 className="text-lg font-bold text-[#16436F] mb-2">About the Author</h3>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gray-300 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-600">
                  <span className="font-bold">Bailey Coleman</span> is Void Creatives’s Microbiology Technical Manager, specializing in airborne particle analysis and viability culture protocols.
                </p>
              </div>
            </div>
          </footer>
        </article>

        <aside className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3 text-[#16436F]">Search</h3>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="Enter Keyword..."
                className="px-3 py-2 w-full focus:outline-none text-[#10b1b4]"
              />
              <button className="bg-[#16436F] text-white px-4 py-2">Go</button>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3 text-[#16436F]">Categories</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              <li>Microbiology</li>
              <li>Non-Fungal</li>
              <li>Culture Sampling</li>
              <li>Water Testing</li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-3 text-[#16436F]">Popular Post</h3>
            <p className="text-gray-600 text-sm">
              Lead, mold, and bacteria testing insights from the field.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2 text-[#16436F]">Subscribe</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get updates on new services and environmental testing insights.
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
      </main>
    </div>
  );
}
