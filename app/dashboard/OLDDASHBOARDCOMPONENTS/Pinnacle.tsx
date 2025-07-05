'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Pinnacle = () => {
  const router = useRouter();

  return (
    <div className="relative w-full h-screen">
      {/* Full-width background image */}
      <Image
        src="/PinnacleLab_Full.png"
        alt="Pinnacle Laboratory"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      {/* Button in the bottom left */}
      <button
        onClick={() => router.push('/dashboard/pages/about/pinnaclelaboratory')}
        className="absolute bottom-8 left-8 bg-blue-600 text-white font-semibold px-6 py-6 rounded hover:bg-blue-700 transition shadow-md"
      >
        Learn More
      </button>
    </div>
  );
};

export default Pinnacle;
