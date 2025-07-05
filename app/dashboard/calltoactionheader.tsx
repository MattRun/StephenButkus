
// // "use client";

// // import React, { useState, useEffect } from "react";
// // import Image from "next/image";
// // import { motion, AnimatePresence } from "framer-motion";

// // const CallToActionHeader = () => {
// //   // Rotating Phrases
// //   const phrases = [
// //     "Precise Environmental Analysis",
// //     "Precise Environmental Testing",
// //     "Precise Environmental Analysis",
// //     "Precise Environmental Analysis",
// //     "Precise Environmental Analysis", 
// //   ];

// //   const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

// //   // Rotate phrases every 5 seconds
// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
// //     }, 5000); // Rotate every 5 seconds
// //     return () => clearInterval(interval); // Cleanup interval
// //   }, []);

// //   return (
    
// //     <div
// //       className="relative bg-cover bg-center text-white min-h-screen flex flex-col justify-between"
// //       style={{
// //         backgroundImage:
// //           "url('/pinnaclelab/Lab Pictures/AdobeStock_138297161.jpeg')", // Replace with your image path
// //       }}
// //     >
// //       {/* Main Content */}
// //       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center h-[80vh] ">
// //       <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
// //         {/* Left Section */}
// //         <div className="w-full md:w-1/2 text-left px-2">
// //           {/* <Image
// //             src="/pinnaclelab/Logos/Logo_Long_no_bg.png"
// //             alt="Pinnacle Laboratory Logo"
// //             width={1600}
// //             height={800}
// //             className="object-contain mb-6"
// //           /> */}
// //           {/* <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
// //             Pinnacle Laboratory provides precise and reliable testing solutions,
// //             helping you protect your environment and meet compliance standards.
// //           </p> */}
// //         </div>

// //         {/* Right Section */}
// //         <div className="w-full md:w-1/2 text-center md:text-right px-2">
// //           {/* Rotating Phrase */}
// //           <div className="relative overflow-hidden h-48">
// //             <AnimatePresence mode="wait">
// //               <motion.h1
// //                 key={phrases[currentPhraseIndex]}
// //                 className="text-4xl md:text-6xl font-bold leading-relaxed"
// //                 initial={{ opacity: 0, y: -30 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 exit={{ opacity: 0, y: 30 }}
// //                 transition={{ duration: 0.5, ease: "easeOut" }}
// //               >
// //                 {phrases[currentPhraseIndex]}
// //               </motion.h1>
// //             </AnimatePresence>
// //             {/* <motion.span
// //     className="text-2xl md:text-4xl text-[#10b1b4] block mt-2"
// //     initial={{ opacity: 0 }}
// //     animate={{ opacity: 1 }}
// //     transition={{ delay: 0.2, duration: 0.5 }}
// //   >
// //     For a Safer Tomorrow
// //   </motion.span> */}
// //           </div>
// //           <motion.span
// //             className="text-2xl md:text-4xl text-[#10b1b4] block mt-2 font-semibold py-1"
// //             style={{ textShadow: "1px 1px 5px rgba(0,0,0,0.8)" }}
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.2, duration: 0.5 }}
// //           >
// //             with Top Tier Service
// //           </motion.span>
// //           {/* Buttons */}
// //           <div className="mt-8 flex justify-center md:justify-end gap-4">
// //             <a
// //               href="/dashboard/pages/contactus/generalinquiry"
// //               className="bg-[#10b1b4] hover:bg-[#16438F] text-white px-6 py-3 rounded-full text-lg font-medium transition"
// //             >
// //               Contact Us
// //             </a>
// //             <a
// //               href="/dashboard/pages/analyticalservices/asbestos"
// //               className="border border-blue-500 hover:border-blue-600 text-white px-6 py-3 rounded-full text-lg font-medium transition"
// //             >
// //               Learn More
// //             </a>
// //           </div>
          
// //         </div>
// //       </div>

// //       {/* Footer Details with Blend */}
// //       <div
// //         className="relative text-center text-sm md:text-base py-24"
// //         style={{
// //           backgroundImage:
// //             "linear-gradient(to bottom, rgba(0, 0, 0, 0), White)",
// //         }}
// //       >
// //         {/* <div className="flex justify-center gap-48 items-center">
// //           <p>EST. 2019</p>
// //           <p>Turnaround Times: 3 Hours, 6 Hours, Same Day</p>
// //           <p>Trusted by Thousands Nationwide</p>
// //         </div> */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CallToActionHeader;























"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaBox, FaClipboardCheck, FaFilter, FaShieldAlt, FaTag } from "react-icons/fa";

// SlideBrandIntro - Optimized (No Scrolling)
// SlideBrandIntro - Updated to make the logo bigger
const SlideBrandIntro = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {}, 4000);
    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
<motion.div
  key="slide0"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  onAnimationComplete={onAnimationComplete}
  className="relative text-white h-[60vh] w-full flex items-center justify-center"
  style={{
    backgroundImage: `url('/pinnaclelab/Lab Pictures/20250328_102846.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Gradient overlay to improve text contrast */}
  <div
    className="absolute inset-0"
    style={{
      background: 'linear-gradient(to right, rgba(22, 67, 111, 0.7), rgba(16, 177, 180, 0.7))',
    }}
  />
  
  <motion.p
    className="relative text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold italic text-center px-4"
    initial={{ opacity: 0, y: 50, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{
      duration: 1.2,
      ease: [0.25, 1, 0.5, 1],
      delay: 0.3,
    }}
    style={{
      color: 'white', // Set text color to white
      letterSpacing: '0.05em', // Keep the polished letter spacing
    }}
  >
    Leading the Way in the Environmental Industry
  </motion.p>
</motion.div>
  );
};
const SlideCommunication = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => (
  <motion.div
    key="slide1"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    onAnimationComplete={onAnimationComplete}
    className="relative bg-gradient-to-r from-[#16436F] to-[#1E5A81] text-white h-[60vh] w-full flex items-center justify-start overflow-hidden"
  >
    <div className="w-full h-full px-2 md:px-4 py-2 md:py-4">
      <div className="max-w-7xl mx-auto h-full flex flex-col-reverse md:flex-row items-center md:gap-2 lg:gap-4">
        {/* TEXT LEFT */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-2 md:mt-0 z-10">
          <motion.h1
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight tracking-wide"
            style={{ textShadow: "0 4px 8px rgba(255, 255, 255, 0.3)" }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Exceptional Communication & Customer Service
          </motion.h1>
          <p className="mt-1 md:mt-2 text-sm sm:text-base md:text-lg text-gray-200">
            We're here to support you with unmatched responsiveness and care.
          </p>
          <div className="mt-2 md:mt-3 flex flex-wrap justify-center md:justify-start gap-2">
            <Link
              href="/dashboard/pages/contactus/generalinquiry"
              className="bg-[#10b1b4] hover:bg-[#0d91a0] text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base font-medium shadow-lg transition"
            >
              Contact Us Now
            </Link>
            <Link
              href="/dashboard/pages/about/meetourteam"
              className="border-2 border-blue-500 hover:border-blue-600 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base font-medium shadow-md hover:shadow-xl transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* IMAGE RIGHT */}
        <div className="w-full md:w-1/2 h-full relative">
          <img
            src="/pinnaclelab/Lab Pictures/Pinnacle_Reception_Jade.jpg"
            alt="Communication"
            className="absolute top-0 left-0 w-full h-full object-cover rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  </motion.div>
);


const SlideTesting = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const icons = ["Asbestos", "Lead", "Mold", "Water", "Soil", "Air"]; // Kept for alt text, but not displayed
  const images = [
    "/pinnaclelab/Sample Photos/Amosite-in-1680.jpg",
    "/pinnaclelab/Sample Photos/chaetomium_spores.jpg",
    "/pinnaclelab/Sample Photos/Chrysotile_Asbestos.jpg",
    "/pinnaclelab/Sample Photos/fiberglass.png",
    "/pinnaclelab/Sample Photos/fireandsmoke.png",
    "/pinnaclelab/Sample Photos/ICP_HeavyMetals.jpeg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      if (currentImageIndex === images.length - 1) {
        clearInterval(interval);
        setTimeout(onAnimationComplete, 500);
      }
    }, 2000); // Reduced interval to 2 seconds for quicker rotation
    return () => clearInterval(interval);
  }, [currentImageIndex, onAnimationComplete]);

  return (
    <motion.div
      key="slide2"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative bg-gradient-to-r from-[#16436F] to-[#10b1b4] text-white h-[60vh] w-full flex items-center justify-center"
    >
      <div className="w-full px-2 md:px-4 py-2 md:py-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6 md:space-y-8">
          {/* Title and Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="px-2 md:px-4"
          >
            <h1
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-wide"
              style={{ textShadow: "0 0 15px rgba(255, 255, 255, 0.8)" }}
            >
              One Lab for All of Your Environmental Needs
            </h1>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Trust Pinnacle for Comprehensive Testing of Asbestos, Lead, Mold, Heavy Metals, and More.
            </p>
          </motion.div>

          {/* Larger Rotating Image */}
          <motion.div
            className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-xl overflow-hidden shadow-2xl" // Increased sizes
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            key={currentImageIndex}
          >
            <Image
              src={images[currentImageIndex]}
              alt={`Environmental Testing - ${icons[currentImageIndex]}`}
              width={384} // Larger base width
              height={384} // Larger base height
              className="object-cover w-full h-full transition-opacity duration-500"
            />
          </motion.div>

          {/* Call to Action Button */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="mt-4"
          >
            <Link
              href="/dashboard/pages/analyticalservices/asbestos"
              className="bg-[#10b1b4] hover:bg-[#0d91a0] text-white px-3 py-2 md:px-4 md:py-2 rounded-full text-sm md:text-base font-medium shadow-lg transition"
            >
              Discover Our Services
            </Link>
          </motion.div>

          {/* Removed the icon animation div */}
        </div>
      </div>
    </motion.div>
  );
};

// SlideShipping - Optimized (No Scrolling)
const SlideShipping = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => {
  useEffect(() => {
    const timeout = setTimeout(onAnimationComplete, 3000);
    return () => clearTimeout(timeout);
  }, [onAnimationComplete]);

  return (
    <motion.div
    key="slide3"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    onAnimationComplete={onAnimationComplete}
    className="relative bg-gradient-to-t from-[#1E5A81] to-[#2D6A9F] text-white h-[60vh] w-full flex items-center justify-end"
  >
    <div className="w-full px-2 md:px-4 py-2 md:py-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:gap-2 lg:gap-4">
        <div className="w-full md:w-1/2 relative order-2 md:order-1">
          <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden"> {/* Significantly larger height */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-xl shadow-2xl"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            >
              <source src="/pinnaclelab/art/Online Delivery Service.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-right order-1 md:order-2 mb-2 md:mb-0">
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-wide" // Increased text size
            style={{ textShadow: "0 4px 8px rgba(255, 255, 255, 0.3)" }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Pre-Paid Shipping Labels—Print, Stick, Ship!
          </motion.h1>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-200">
            Generate labels at home, attach to your package, and drop off at FedEx—hassle-free.
          </p>
          <div className="mt-3 flex flex-wrap justify-center md:justify-end gap-2">
            <Link
              href="/dashboard/pages/shippinglabelform"
              className="bg-[#10b1b4] hover:bg-[#0d91a0] text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium shadow-lg transition"
            >
              Get Started Today
            </Link>
            <Link
              href="/dashboard/pages/shippinglabelform"
              className="border-2 border-blue-500 hover:border-blue-600 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium shadow-md hover:shadow-xl transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
  );
};

// SlidePortal - Optimized (No Scrolling)
const SlidePortal = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => (
  <motion.div
    key="slide4"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    onAnimationComplete={onAnimationComplete}
    className="relative h-[60vh] w-full overflow-hidden"
  >
    {/* Background Video */}
    <motion.iframe
      src="https://www.youtube.com/embed/pInp7_vVAdo?start=70&autoplay=1&loop=1&mute=1&playlist=pInp7_vVAdo"
      title="Client Portal Demo"
      allow="autoplay; encrypted-media"
      allowFullScreen
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

    {/* Foreground content */}
    <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-white text-center">
      <motion.h1
        className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2"
        style={{ textShadow: "0 0 10px rgba(0, 0, 0, 0.7)" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        Online Client Portal
      </motion.h1>
      <motion.p
        className="text-sm sm:text-base md:text-lg max-w-2xl mb-4 text-white/90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
      >
        Access your Chain-of-Custodies, lab results, and invoices securely with our intuitive portal.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
      >
        <Link
          href="https://limsexpressplus.com/software/html5.html?user=*PinnacleReports&pwd=NscK45v2!Cr"
          className="bg-[#10b1b4] hover:bg-[#0d91a0] text-white px-4 py-2 rounded-full text-sm font-medium shadow-md transition"
        >
          Explore Now
        </Link>
      </motion.div>
    </div>
  </motion.div>
);


// SlideCareers - Adjusted overlay to cover everything behind text
const SlideCareers = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => {
  const basePhotos = [
    "/pinnaclelab/Headshots:GroupPhotos/Art.png",
    "/pinnaclelab/Headshots:GroupPhotos/Damaris.png",
    "/pinnaclelab/Headshots:GroupPhotos/David.png",
    "/pinnaclelab/Headshots:GroupPhotos/Jade.png",
    "/pinnaclelab/Headshots:GroupPhotos/Jorge.png",
    "/pinnaclelab/Headshots:GroupPhotos/Lupe.png",
    "/pinnaclelab/Headshots:GroupPhotos/Meg.png",
    "/pinnaclelab/Headshots:GroupPhotos/Mod.png",
    "/pinnaclelab/Headshots:GroupPhotos/Pati.png",
    "/pinnaclelab/Headshots:GroupPhotos/Steve.png",
    "/pinnaclelab/Headshots:GroupPhotos/GroupApril2025.jpg",
    "/pinnaclelab/Headshots:GroupPhotos/Bailey.jpg",
    "/pinnaclelab/Headshots:GroupPhotos/DavidF.jpg",
    "/pinnaclelab/Headshots:GroupPhotos/Simeon.jpg",
    "/pinnaclelab/Lab Pictures/JLMEnvironmental-36.jpg",
    "/pinnaclelab/Lab Pictures/20250328_102820.jpg",
    "/pinnaclelab/Lab Pictures/20250328_102824.jpg",
    "/pinnaclelab/Lab Pictures/20250328_102831.jpg",
    "/pinnaclelab/Lab Pictures/20250328_102846.jpg",
  ];

  // Use a moderate number of images for dense coverage
  const photoCount = window?.innerWidth < 768 ? 50 : 100;
  const photos = Array.from({ length: photoCount }, (_, index) => basePhotos[index % basePhotos.length]);
  const [isLoaded, setIsLoaded] = useState(false);
  const hasAnimated = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imagePromises = photos.map((src) => {
      return new Promise((resolve) => {
        const img = new window.Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setIsLoaded(true);
      hasAnimated.current = false;
    });

    return () => {
      hasAnimated.current = false;
    };
  }, [photos]);

  useEffect(() => {
    if (isLoaded && !hasAnimated.current) {
      hasAnimated.current = true;
      onAnimationComplete();
    }
  }, [isLoaded, onAnimationComplete]);

  return (
    <motion.div
      key="slide5"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative bg-gradient-to-br from-[#2D6A9F] to-[#4682B4] text-white h-[60vh] w-full flex flex-col items-center justify-center overflow-hidden"
      ref={containerRef}
    >
      {/* Images layer */}
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {photos.map((src, index) => {
          const containerHeight = containerRef.current?.offsetHeight || 600;
          const containerWidth = containerRef.current?.offsetWidth || 1200;
          const randomTop = `${Math.random() * 100}%`; // Full 0%-100% range
          const randomLeft = `${Math.random() * 100}%`; // Full 0%-100% range
          const rotate = Math.random() * 90 - 45;
          const baseScale = window?.innerWidth < 768 ? 0.6 : 0.9; // Kept as is
          const scale = Math.random() * 0.4 + baseScale; // Kept as is
          const delay = Math.random() * 1.5;
          const zIndex = Math.floor(Math.random() * 10) + 10; // Below overlay

          return (
            <motion.div
              key={index}
              style={{
                position: "absolute",
                top: randomTop,
                left: randomLeft,
                transform: `translate(-50%, -50%) rotate(${rotate}deg) scale(${scale})`,
                zIndex,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay }}
            >
              <Image
                src={src}
                alt={`Team Member ${index + 1}`}
                width={150} // Kept at 150x150 as confirmed good
                height={150}
                className="object-cover rounded-lg shadow-md"
                loading="lazy"
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Full-screen overlay behind text */}
      <div className="absolute inset-0 bg-black opacity-40 z-20" style={{ mixBlendMode: "multiply" }} />

      {/* Text area with no overlay */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full px-2 md:px-4 py-2 text-center bg-transparent">
        <motion.h1
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight tracking-wide text-white"
          style={{ textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Join Our Team — Exciting Career Opportunities
        </motion.h1>
        <p className="mt-1 text-xs sm:text-sm md:text-base lg:text-lg text-white max-w-3xl">
          Explore the path to your new career
        </p>
        <div className="mt-2 flex flex-wrap justify-center gap-2">
          <Link
            href="/dashboard/pages/careers"
            className="bg-[#10b1b4] hover:bg-[#0d91a0] text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium shadow-lg transition"
          >
            View Careers
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// CallToActionHeader - Updated (No Scrolling)
const CallToActionHeader = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const slideDuration = 7000;
  const totalSlides = 6;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = [
    <SlideBrandIntro key="slide0" onAnimationComplete={() => {}} />,
    <SlideCommunication key="slide1" onAnimationComplete={() => {}} />,
    <SlideTesting key="slide2" onAnimationComplete={() => {}} />,
    <SlideShipping key="slide3" onAnimationComplete={() => {}} />,
    <SlidePortal key="slide4" onAnimationComplete={() => {}} />,
    <SlideCareers key="slide5" onAnimationComplete={() => {}} />,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
      }
    }, slideDuration);

    timerRef.current = timer;

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), slideDuration);
  };

  return (
    <div className="relative h-[60vh] w-full overflow-hidden">
      <div className="h-full w-full">
        {slides[currentSlide]}
      </div>
      
      <div className="absolute bottom-2 left-2 md:left-8 flex flex-col items-start z-20">
        <div className="flex gap-1 md:gap-2 mb-1">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition ${
                currentSlide === index ? "bg-[#10b1b4] scale-125" : "bg-gray-400"
              } hover:bg-[#1E5A81]`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <motion.div
          className="w-12 md:w-32 h-1 bg-gray-400 rounded-full overflow-hidden"
          initial={{ width: "0%" }}
          animate={{ width: isPaused ? "100%" : "0%" }}
          transition={{
            duration: isPaused ? 0 : slideDuration / 1000,
            ease: "linear",
          }}
        >
          <div className="h-full bg-[#10b1b4]" />
        </motion.div>
      </div>
    </div>
  );
};

export default CallToActionHeader;








// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import { FaBox, FaClipboardCheck, FaFilter, FaShieldAlt, FaTag } from "react-icons/fa";

// // New Slide: Brand Introduction (Unchanged)
// const SlideBrandIntro = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       // Trigger fade-out after 4000ms (adjust to match slideDuration)
//     }, 4000);

//     return () => clearTimeout(timer);
//   }, [onAnimationComplete]);

//   return (
//     <motion.div
//       key="slide0"
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       onAnimationComplete={onAnimationComplete}
//       className="relative bg-gradient-to-r from-[#16436F] to-[#2D6A9F] text-white min-h-[60vh] w-full flex items-center justify-start"
//     >
//       <div className="w-full px-4 md:px-8 py-8 md:py-12">
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:gap-12 lg:gap-24">
//           <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               transition={{ duration: 1.2, ease: "easeInOut" }}
//               className="w-full max-w-xs md:max-w-md"
//             >
//               <Image
//                 src="/pinnaclelab/Logos/Logo_Long_no_bg.png"
//                 alt="Pinnacle Laboratory Logo"
//                 width={800}
//                 height={800}
//                 className="object-contain w-full"
//               />
//             </motion.div>
//           </div>
//           <div className="w-full md:w-1/2 text-center md:text-left">
//             <motion.p
//               className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic"
//               initial={{ opacity: 0, y: 50, letterSpacing: "0.2em" }}
//               animate={{ opacity: 1, y: 0, letterSpacing: "0.1em" }}
//               exit={{ opacity: 0, y: 50, letterSpacing: "0.2em" }}
//               transition={{
//                 duration: 1.5,
//                 ease: [0.6, -0.05, 0.01, 0.99],
//                 delay: 0.5,
//               }}
//             >
//               Leading the Way in Environmental Mastery
//             </motion.p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // Slide 1: Communication (Unchanged)
// const SlideCommunication = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => (
//   <motion.div
//     key="slide1"
//     initial={{ opacity: 0, y: -50 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: 50 }}
//     transition={{ duration: 0.5, ease: "easeOut" }}
//     onAnimationComplete={onAnimationComplete}
//     className="relative bg-gradient-to-r from-[#16436F] to-[#1E5A81] text-white min-h-[60vh] w-full flex items-center justify-start"
//   >
//     <div className="w-full px-4 md:px-8 py-8 md:py-12">
//       <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center md:gap-8 lg:gap-12">
//         <div className="w-full md:w-1/2 text-center md:text-left mt-6 md:mt-0">
//           <motion.h1
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-wide"
//             style={{ textShadow: "0 4px 8px rgba(255, 255, 255, 0.3)" }}
//             initial={{ opacity: 0, x: -100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             Exceptional Communication & Customer Service
//           </motion.h1>
//           <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200">
//             We're here to support you with unmatched responsiveness and care—your partner in precision.
//           </p>
//           <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
//             <Link
//               href="/dashboard/pages/contactus/generalinquiry"
//               className="bg-[#10b1b4] hover:bg-[#0d91a0] text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-lg md:text-xl font-medium shadow-lg transition"
//             >
//               Contact Us Now
//             </Link>
//             <Link
//               href="/dashboard/pages/about/meetourteam"
//               className="border-2 border-blue-500 hover:border-blue-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-lg md:text-xl font-medium shadow-md hover:shadow-xl transition"
//             >
//               Learn More
//             </Link>
//           </div>
//         </div>
//         <div className="w-full md:w-1/2">
//           <Image
//             src="/pinnaclelab/Lab Pictures/JLMEnvironmental-36.jpg"
//             alt="Communication"
//             width={600}
//             height={400}
//             className="object-contain w-full rounded-xl shadow-2xl"
//           />
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

// // Slide 2: Testing - Optimized for medium screens
// const SlideTesting = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => {
//   const [currentIcon, setCurrentIcon] = useState(0);
//   const icons = ["Asbestos", "Lead", "Mold", "Water", "Soil", "Air"];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIcon((prev) => (prev + 1) % icons.length);
//       if (currentIcon === icons.length - 1) {
//         clearInterval(interval);
//         setTimeout(onAnimationComplete, 500);
//       }
//     }, 1000);
//     return () => clearInterval(interval);
//   }, [currentIcon, onAnimationComplete]);

//   return (
//     <motion.div
//       key="slide2"
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.9 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="relative bg-gradient-to-r from-[#16436F] to-[#10b1b4] text-white min-h-[60vh] w-full flex items-center justify-center overflow-hidden"
//     >
//       <div className="w-full px-4 md:px-6 py-8 md:py-10">
//         <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-4 md:space-y-6">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="px-2"
//           >
//             <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-wide" style={{ textShadow: "0 0 15px rgba(255, 255, 255, 0.8)" }}>
//               One Lab for All Your Environmental Needs
//             </h1>
//             <p className="mt-2 text-base md:text-xl text-gray-200 leading-relaxed max-w-xl mx-auto">
//               Asbestos, Lead, Mold, and More—Trust Pinnacle for Comprehensive Testing.
//             </p>
//           </motion.div>

//           <motion.div
//             className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden"
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.5, ease: "easeOut" }}
//             key={currentIcon}
//           >
//             <Image
//               src={`/pinnaclelab/Lab Pictures/JLMEnvironmental-36.jpg`}
//               alt={`Environmental Testing - ${icons[currentIcon]}`}
//               width={256}
//               height={256}
//               className="object-cover w-full h-full transition-opacity duration-500"
//               style={{ filter: `hue-rotate(${currentIcon * 60}deg)` }}
//             />
//           </motion.div>

//           <div className="flex justify-around w-full max-w-3xl px-2">
//             {icons.map((service, index) => (
//               <motion.div
//                 key={service}
//                 initial={{ scale: 0, y: 20, opacity: 0 }}
//                 animate={{
//                   scale: index <= currentIcon ? 1 : 0,
//                   y: index <= currentIcon ? 0 : 20,
//                   opacity: index <= currentIcon ? 1 : 0,
//                 }}
//                 transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
//                 className="text-lg md:text-xl"
//               >
//                 {service === "Asbestos" ? (
//                   <FaShieldAlt className="text-white" />
//                 ) : service === "Lead" ? (
//                   <FaTag className="text-white" />
//                 ) : service === "Mold" ? (
//                   <FaBox className="text-white" />
//                 ) : service === "Water" ? (
//                   <FaClipboardCheck className="text-white" />
//                 ) : service === "Soil" ? (
//                   <FaShieldAlt className="text-white" />
//                 ) : (
//                   <FaFilter className="text-white" />
//                 )}
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
//             className="mt-2"
//           >
//             <Link
//               href="/dashboard/pages/analyticalservices/asbestos"
//               className="bg-[#10b1b4] hover:bg-[#0d91a0] text-white px-4 py-1 md:px-5 md:py-2 rounded-full text-base md:text-lg font-medium shadow-lg transition"
//             >
//               Discover Our Services
//             </Link>
//           </motion.div>

//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//             {Array.from({ length: 5 }).map((_, index) => (
//               <motion.div
//                 key={index}
//                 className="w-1 h-1 md:w-2 md:h-2 bg-white rounded-full"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // Slide 3: Shipping - Optimized for medium screens
// const SlideShipping = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => {
//   useEffect(() => {
//     const timeout = setTimeout(onAnimationComplete, 3000);
//     return () => clearTimeout(timeout);
//   }, [onAnimationComplete]);

//   return (
//     <motion.div
//       key="slide3"
//       initial={{ opacity: 0, x: 50 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: 50 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       onAnimationComplete={onAnimationComplete}
//       className="relative bg-gradient-to-t from-[#1E5A81] to-[#2D6A9F] text-white min-h-[60vh] w-full flex items-center justify-end"
//     >
//       <div className="w-full px-4 md:px-6 py-8 md:py-10">
//         <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:gap-6">
//           <div className="w-full md:w-1/2 relative order-2 md:order-1">
//             <div className="relative w-full h-[250px] md:h-[280px] overflow-hidden">
//               <video
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 className="w-full h-full object-cover rounded-xl shadow-2xl"
//                 style={{ maxWidth: "100%", maxHeight: "100%" }}
//               >
//                 <source src="/pinnaclelab/art/Delivery service.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 text-center md:text-right order-1 md:order-2 mb-6 md:mb-0">
//             <motion.h1
//               className="text-3xl md:text-4xl font-extrabold leading-tight tracking-wide"
//               style={{ textShadow: "0 4px 8px rgba(255, 255, 255, 0.3)" }}
//               initial={{ opacity: 0, x: 100 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//             >
//               Pre-Paid Shipping Labels—Print, Stick, Ship!
//             </motion.h1>
//             <p className="mt-4 text-lg md:text-xl text-gray-200">
//               Generate labels at home, attach to your package, and drop off at FedEx—hassle-free.
//             </p>
//             <div className="mt-6 flex flex-wrap justify-center md:justify-end gap-4">
//               <Link
//                 href="/dashboard/pages/shippinglabelform"
//                 className="bg-[#10b1b4] hover:bg-[#0d91a0] text-white px-6 py-2 md:px-6 md:py-2 rounded-full text-lg md:text-lg font-medium shadow-lg transition"
//               >
//                 Get Started Today
//               </Link>
//               <Link
//                 href="/dashboard/pages/shippinglabelform"
//                 className="border-2 border-blue-500 hover:border-blue-600 text-white px-6 py-2 md:px-6 md:py-2 rounded-full text-lg md:text-lg font-medium shadow-md hover:shadow-xl transition"
//               >
//                 Learn More
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // Slide 4: Portal (Unchanged)
// const SlidePortal = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => (
//   <motion.div
//     key="slide4"
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     exit={{ opacity: 0, y: 50 }}
//     transition={{ duration: 0.5, ease: "easeOut" }}
//     onAnimationComplete={onAnimationComplete}
//     className="relative bg-gradient-to-bl from-[#4682B4] to-[#2D6A9F] text-white min-h-[60vh] w-full flex items-center justify-center"
//   >
//     <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-4 md:py-12 flex flex-col md:flex-row items-center gap-2 md:gap-8">
//       <div className="w-full md:w-1/3 text-center md:text-left order-1 md:order-2 mb-2 md:mb-0">
//         <motion.h1
//           className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight tracking-wide"
//           style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           Online Client Portal
//         </motion.h1>
//         <p className="mt-2 md:mt-4 text-sm sm:text-base md:text-xl text-gray-200">
//           Access your Chain of Custody and results securely, anytime, anywhere with our intuitive portal.
//         </p>
//         <div className="mt-3 md:mt-6 flex justify-center md:justify-start">
//           <Link
//             href="https://limsexpressplus.com/software/html5.html?user=*PinnacleReports&pwd=NscK45v2!Cr"
//             className="bg-[#10b1b4] hover:bg-[#0d91a0] text-white px-4 py-1 md:px-6 md:py-2 rounded-full text-sm md:text-lg font-medium shadow-lg transition"
//           >
//             Explore Now
//           </Link>
//         </div>
//       </div>
      
//       <div className="w-full md:w-2/3 order-2 md:order-1">
//         <motion.iframe
//           src="https://www.youtube.com/embed/pInp7_vVAdo?start=70&autoplay=1&loop=1&mute=1&playlist=pInp7_vVAdo"
//           title="Client Portal Demo"
//           allow="autoplay; encrypted-media"
//           allowFullScreen
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="w-full h-[180px] md:h-[400px] rounded-xl shadow-2xl"
//         />
//       </div>
//     </div>
//   </motion.div>
// );

// // Slide 5: Careers - Optimized for medium screens
// const SlideCareers = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => {
//   const basePhotos = [
//     "/pinnaclelab/Headshots:GroupPhotos/Art.png",
//     "/pinnaclelab/Headshots:GroupPhotos/Damaris.png",
//     "/pinnaclelab/Headshots:GroupPhotos/David.png",
//     "/pinnaclelab/Headshots:GroupPhotos/Jade.png",
//     "/pinnaclelab/Headshots:GroupPhotos/Jorge.png",
//     "/pinnaclelab/Headshots:GroupPhotos/Lupe.png",
//     "/pinnaclelab/Headshots:GroupPhotos/Meg.png",
//     "/pinnaclelab/Headshots:GroupPhotos/Mod.png",
//     "/pinnaclelab/Headshots:GroupPhotos/Pati.png",
//     "/pinnaclelab/Headshots:GroupPhotos/Steve.png",
//     "/pinnaclelab/Lab Pictures/JLMEnvironmental-36.jpg",
//   ];

//   const photos = Array.from({ length: 40 }, (_, index) => basePhotos[index % basePhotos.length]);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const hasAnimated = useRef(false);

//   useEffect(() => {
//     const imagePromises = photos.map((src) => {
//       return new Promise((resolve) => {
//         const img = new window.Image();
//         img.src = src;
//         img.onload = resolve;
//         img.onerror = resolve;
//       });
//     });

//     Promise.all(imagePromises).then(() => {
//       setIsLoaded(true);
//       hasAnimated.current = false;
//     });

//     return () => {
//       hasAnimated.current = false;
//     };
//   }, [photos]);

//   useEffect(() => {
//     if (isLoaded && !hasAnimated.current) {
//       hasAnimated.current = true;
//       onAnimationComplete();
//     }
//   }, [isLoaded, onAnimationComplete]);

//   return (
//     <motion.div
//       key="slide5"
//       initial={{ opacity: 0, x: 50 }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0, x: 50 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       className="relative bg-gradient-to-br from-[#2D6A9F] to-[#4682B4] text-white min-h-[60vh] w-full flex flex-col items-center justify-center overflow-hidden"
//     >
//       <div className="absolute inset-0 bg-black opacity-50 z-10" style={{ mixBlendMode: "multiply" }} />
//       <div className="absolute inset-0 z-10 pointer-events-none">
//         <div className="relative h-full w-full">
//           <div className="absolute top-0 left-0 w-full h-full bg-transparent" />
//           <div className="absolute top-1/3 left-0 w-full h-2/3 bg-black opacity-50" style={{ mixBlendMode: "multiply" }} />
//         </div>
//       </div>

//       <motion.div
//         className="absolute inset-0 z-0"
//         initial={{ opacity: 0 }}
//         animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         {photos.map((src, index) => {
//           const randomTop = `${Math.random() * 100 - 10}%`; // Reduced range to keep within bounds
//           const randomLeft = `${Math.random() * 100 - 10}%`;
//           const rotate = Math.random() * 90 - 45;
//           const baseScale = 0.4; // Smaller scale for medium screens
//           const scale = Math.random() * 0.2 + baseScale;
//           const delay = Math.random() * 1.5;
//           const zIndex = Math.floor(Math.random() * 5);

//           return (
//             <motion.div
//               key={index}
//               style={{
//                 position: "absolute",
//                 top: randomTop,
//                 left: randomLeft,
//                 transform: `rotate(${rotate}deg) scale(${scale})`,
//                 zIndex,
//               }}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3, delay }}
//             >
//               <Image
//                 src={src}
//                 alt={`Team Member ${index + 1}`}
//                 width={120}
//                 height={120}
//                 className="object-cover rounded-lg shadow-md"
//               />
//             </motion.div>
//           );
//         })}
//       </motion.div>

//       <div className="relative z-30 flex flex-col items-center justify-center h-full px-4 md:px-6 py-6 text-center">
//         <motion.h1
//           className="text-3xl md:text-4xl font-extrabold leading-tight tracking-wide text-white"
//           style={{ textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)" }}
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           Join Our Team—Exciting Career Opportunities
//         </motion.h1>
//         <p className="mt-4 text-base md:text-xl text-gray-200 max-w-2xl">
//           Be part of our mission to lead in environmental testing—explore careers now.
//         </p>
//         <div className="mt-6 flex flex-wrap justify-center gap-4">
//           <Link
//             href="/dashboard/pages/careers"
//             className="bg-[#10b1b4] hover:bg-[#0d91a0] text-white px-6 py-2 md:px-6 md:py-2 rounded-full text-lg md:text-lg font-medium shadow-lg transition"
//           >
//             View Careers
//           </Link>
//           <Link
//             href="/dashboard/pages/about/meetourteam"
//             className="border-2 border-blue-500 hover:border-blue-600 text-white px-6 py-2 md:px-6 md:py-2 rounded-full text-lg md:text-lg font-medium shadow-md hover:shadow-xl transition"
//           >
//             Learn More
//           </Link>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const CallToActionHeader = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const timerRef = useRef<NodeJS.Timeout | null>(null);
//   const slideDuration = 7000;
//   const totalSlides = 6;

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
    
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const slides = [
//     <SlideBrandIntro key="slide0" onAnimationComplete={() => {}} />,
//     <SlideCommunication key="slide1" onAnimationComplete={() => {}} />,
//     <SlideTesting key="slide2" onAnimationComplete={() => {}} />,
//     <SlideShipping key="slide3" onAnimationComplete={() => {}} />,
//     <SlidePortal key="slide4" onAnimationComplete={() => {}} />,
//     <SlideCareers key="slide5" onAnimationComplete={() => {}} />,
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       if (!isPaused) {
//         setCurrentSlide((prev) => (prev + 1) % totalSlides);
//       }
//     }, slideDuration);

//     timerRef.current = timer;

//     return () => {
//       if (timerRef.current) clearInterval(timerRef.current);
//     };
//   }, [isPaused]);

//   const handleDotClick = (index: number) => {
//     setCurrentSlide(index);
//     setIsPaused(true);
//     setTimeout(() => setIsPaused(false), slideDuration);
//   };

//   return (
//     <div className="relative h-[60vh] md:min-h-[60vh] w-full overflow-hidden">
//       <div className="h-full w-full">
//         {slides[currentSlide]}
//       </div>
      
//       <div className="absolute bottom-4 left-4 md:left-16 flex flex-col items-start z-20">
//         <div className="flex gap-1 md:gap-2 mb-1 md:mb-2">
//           {Array.from({ length: totalSlides }).map((_, index) => (
//             <button
//               key={index}
//               onClick={() => handleDotClick(index)}
//               className={`w-2 h-2 md:w-4 md:h-4 rounded-full transition ${
//                 currentSlide === index ? "bg-[#10b1b4] scale-125" : "bg-gray-400"
//               } hover:bg-[#1E5A81]`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//         <motion.div
//           className="w-16 md:w-40 h-1 md:h-2 bg-gray-400 rounded-full overflow-hidden"
//           initial={{ width: "0%" }}
//           animate={{ width: isPaused ? "100%" : "0%" }}
//           transition={{
//             duration: isPaused ? 0 : slideDuration / 1000,
//             ease: "linear",
//           }}
//         >
//           <div className="h-full bg-[#10b1b4]" />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default CallToActionHeader;