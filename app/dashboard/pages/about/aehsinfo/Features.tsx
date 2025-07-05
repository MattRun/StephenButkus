// components/Features.tsx

import { useState } from 'react';
import Image from 'next/image';

const Features = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const features = [
    {
      title: 'State of the Art Equipment',
      description: 'Our facility is equipped with the latest tools and machines for comprehensive training.',
      image: '/state-of-the-art-equipment.jpg',
    },
    {
      title: 'In-House Laboratory',
      description: 'Experience hands-on learning in our fully equipped in-house laboratory.',
      image: '/in-house-laboratory.jpg',
    },
    {
      title: 'Veteran Instructors',
      description: 'Learn from seasoned experts with years of industry experience.',
      image: '/veteran-instructors.jpg',
    },
  ];

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="py-12 bg-[#3c6484]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {features.map((feature, index) => (
          <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            {/* Clickable area to toggle expansion */}
            <div onClick={() => toggleExpanded(index)} className="cursor-pointer">
              <Image src="/AEHS_Logo.png" alt={feature.title} width={80} height={80} />
              <p className="mt-2 text-lg font-semibold text-[#3c6484]">{feature.title}</p>
            </div>

            {/* Conditionally render expanded information only for the selected card */}
            {expandedIndex === index && (
              <div className="mt-4 p-4 bg-[#acadad] rounded-lg shadow-inner text-left transition-all duration-500 ease-in-out">
                <Image src={feature.image} alt={feature.title} width={300} height={200} className="rounded mb-4 object-cover" />
                <p className="text-gray-700 text-sm text-center">{feature.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
