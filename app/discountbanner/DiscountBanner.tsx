'use client'
import React, { useState } from "react";

const DiscountBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; // Don't render the banner if not visible
  }

  return (
    <div className="w-full bg-[white] text-[#000] flex items-center justify-between py-2 px-6">
      <div className="flex items-center gap-2">
        {/* Icon */}
        <span className="text-lg">🔨</span>
        {/* Text */}
        <span className="font-medium text-sm">EST. 2016</span>
      </div>
      {/* Discount Text */}
      <div className="text-center text-sm font-semibold">
        Need Same Day Results? Give us a call to discuss same day analysis availability!
      </div>
      {/* Close Button */}
      <button onClick={handleClose} className="text-lg font-bold">
        ✖
      </button>
    </div>
  );
};

export default DiscountBanner;
