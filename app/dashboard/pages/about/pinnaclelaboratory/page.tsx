// pages/YourPage.tsx
'use client'
import React from 'react';
import ImageHotspots from './ImageHotspots';
import PinnacleLab from './PinnacleLab';
import WhyTakeClassSection from './WhyTakeClassSection'
import InteractiveVideoOverlay from './InteractiveVideoOverlay';


const YourPage = () => {
  return (
    <div>
      {/* <h1>Explore Our Interactive Image</h1> */}
      {/* <InteractiveVideoOverlay /> */}
      <PinnacleLab />
      <ImageHotspots />
      <WhyTakeClassSection />
    </div>
  );
};

export default YourPage;
