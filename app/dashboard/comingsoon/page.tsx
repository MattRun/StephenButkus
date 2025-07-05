'use client';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const ComingSoon = () => (
  <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
    {/* Logo Section */}
    <div className="mb-8">
      <Image 
        src="/AEHS_Logo.png" 
        alt="AEHS Logo" 
        width={150} 
        height={150} 
        className="opacity-90"
      />
    </div>
    
    {/* Coming Soon Message */}
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Coming Soon</h1>
    <p className="text-lg mb-8 text-gray-600 text-center">We are working hard to get things ready. Stay tuned!</p>
    
    {/* Link to Homepage */}
    <Link href="/dashboard" className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition">
      Go Back to Home
    </Link>
  </div>
);

export default ComingSoon;
