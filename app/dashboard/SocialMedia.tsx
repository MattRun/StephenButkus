'use client';
import React from 'react';
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Import social media icons
import { FaXTwitter } from 'react-icons/fa6'; // Ensure this library is supported or switch to `FaTwitter`

export default function SocialMedia() {
  return (
    <div className="w-full bg-gray-100 py-16">
      {/* Container with gradient background */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center bg-gradient-to-r from-[#24529c] to-[#1c3b6e] p-12 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Left: Image */}
        <a
          href="https://www.instagram.com/aehstraining/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:w-1/3 flex justify-center hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <img
            src="/FollowUs_Instagram_AEHS.png"
            alt="Follow us on Instagram"
            className="w-3/4 lg:w-full h-auto rounded-md"
            style={{ boxShadow: "none", borderRadius: "0px" }}
          />
        </a>

        {/* Right: Text and Social Media Logos */}
        <div className="flex flex-col justify-center items-center w-full lg:w-2/3 px-4 lg:px-8">
          {/* Main Heading */}
          <h2
            className="text-4xl font-extrabold text-white mb-6 text-center leading-tight"
            style={{
              fontFamily: 'Product Sans, sans-serif',
              textShadow: '-2px 2px 4px rgba(0, 0, 0, 0.4)', // Text shadow effect
            }}
          >
            Follow <strong>AEHS</strong> to stay up to date!
          </h2>
          {/* Subheading */}
          <p
            className="text-lg text-white text-center font-light mb-8"
            style={{
              fontFamily: 'Product Sans, sans-serif',
              textShadow: '-1px 1px 3px rgba(0, 0, 0, 0.3)', // Lighter text shadow for subheading
            }}
          >
            Get updates on course dates, breaking information and exclusive deals!
          </p>

          {/* Social Media Section */}
          <div className="mt-8 flex justify-center space-x-6">
            {/* Facebook */}
            <Link
              href="https://www.facebook.com/profile.php?id=61567087595623"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 transition"
            >
              <FaFacebookF size={48} />
            </Link>

            {/* X (formerly Twitter) */}
            <Link
              href="https://x.com/AEHS_Training"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-800 transition"
            >
              <FaXTwitter size={48} />
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/company/aehs-training/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition"
            >
              <FaLinkedinIn size={48} />
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/aehstraining/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition"
            >
              <FaInstagram size={48} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
