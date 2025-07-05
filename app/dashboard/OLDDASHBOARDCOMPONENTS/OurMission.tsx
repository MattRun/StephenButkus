'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const OurMission = () => {
  const router = useRouter();

  return (
    <div className="w-full bg-gray-100">
      {/* Full-width image */}
      <div className="relative w-full h-[600px]">
        <Image
          src="/Testmission.png"
          alt="Our Mission"
          layout="fill"
          objectFit="cover" // Makes sure the image fills the width while keeping its aspect ratio
          priority // Ensures fast loading
          className="z-0"
        />
      </div>

      {/* Button in the bottom-right corner of the viewport */}
      <button
        onClick={() => router.push('/dashboard/pages/pinnaclelaboratory')}
        className="absolute bottom-8 right-8 bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition shadow-md"
      >
        Learn More
      </button>
    </div>
  );
};

export default OurMission;
