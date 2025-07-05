'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

const LoadingPage = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // After 8 seconds, display the fallback message
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 8000); // 8000ms = 8 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center">
      <video
        src="/pinnaclelab/art/Pinnacle_Loading.mov" // Path to your video file
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto max-w-md" // Adjust sizing if needed
      />
      {showMessage && (
        <div className="mt-8 p-4 border border-gray-600 rounded-lg bg-gray-800 bg-opacity-75 text-center text-white animate-fadeIn">
          <p className="mb-4 text-lg">
            If the page is still not loading, please try refreshing or return home.
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
            >
              Refresh
            </button>
            <Link href="/" className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition">
              Return Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingPage;
