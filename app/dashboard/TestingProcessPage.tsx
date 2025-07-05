"use client";

import React, { useEffect, useState, useRef } from "react";

const TestingProcessPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const startScrollThreshold = sectionTop - viewportHeight * 0.50;
      const endScrollThreshold = sectionTop + sectionHeight;

      if (scrollY >= startScrollThreshold && scrollY <= endScrollThreshold) {
        const progress = ((scrollY - startScrollThreshold) / (endScrollThreshold - startScrollThreshold)) * 200;
        setScrollProgress(Math.min(Math.max(progress, 0), 100));
      } else if (scrollY < startScrollThreshold) {
        setScrollProgress(0);
      } else if (scrollY > endScrollThreshold) {
        setScrollProgress(100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const steps = [
    {
      title: "Sample Collection",
      // description: "Our team helps you prepare and collect samples, ensuring compliance with regulatory standards.",
      description: `Contact us for:
- Chain of Custodies
- Rental Equipment
- Sample Bags and Media.`,

    },

    {
      title: "Sample Recieving",
      description: "With the Pinnacle Method, we've streamlined sample intake like never before — offering fast, reliable options including professional courier services, prepaid shipping labels, and a 24 hour drop box."
      // description: "Using state-of-the-art equipment, we analyze asbestos, mold, lead, and other samples to provide precise results.",
    },
    {
      title: "Analysis & Quality Assurance",
      // description: "Rigorous quality control measures ensure the accuracy and reliability of every report we produce.",
      description: "All of Pinnacle's projects undergo rigorous quality control measures (blind repeats, round robins, and proficiency testing) to ensure the accuracy and reliability of every report we produce.",
    },
    {
      title: "Report Delivery",
      // description: "Reports are delivered promptly in a clear and easy-to-understand format, helping you make informed decisions.",
      description: "Reports are delivered promptly in a clear and easy-to-understand format, helping you make informed decisions. Reports are provided by our Online Clinet Portal as well as through Email",
    },
  ];

  return (

<div className="bg-[#16436F] text-white min-h-screen py-1 pb-24 bg-[url('/pinnaclelab/Logos/Logo_Long_Mountain_Only_Grey.png')] bg-no-repeat bg-bottom bg-[length:100%]">
  
  <div ref={sectionRef} className="relative mt-16 max-w-6xl mx-auto px-6 lg:px-0">
    {/* Vertical Progress Bar */}
    <div className="absolute inset-0 flex justify-center lg:left-1/2 lg:translate-x-[-50%]">
      <div className="w-1 bg-[#1E5A81] relative"
        style={{
          background: `linear-gradient(to bottom, #10b1b4 ${scrollProgress}%, #1E5A81 ${scrollProgress}%)`,
          transition: "background 0.2s linear",
        }}
      ></div>
    </div>

    {/* Steps - Mobile (Stacked) & Desktop (Alternating) */}
    {steps.map((step, index) => (
      <div 
        key={index} 
        className={`relative flex flex-col lg:flex-row items-center mb-16 lg:mb-20 
          ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}
        `}
      >
        
        {/* Step Number and Title */}
        <div className="w-full lg:w-1/2 px-4 text-center lg:text-left">
          <div className="bg-[#1E5A81] p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold flex items-center justify-center lg:justify-start gap-2">
              <span className="h-8 w-8 flex items-center justify-center bg-[#10b1b4] text-black rounded-full font-bold">
                {index + 1}
              </span>
              {step.title}
            </h3>
            <p className="mt-4 text-gray-300 whitespace-pre-line leading-relaxed">
  {step.description}
</p>

          </div>
        </div>

        {/* Progress Line Extension for Desktop */}
        <div className="hidden lg:flex w-1/2 justify-center items-center relative">
          <div
            className={`absolute h-1 ${index % 2 === 0 ? "left-0" : "right-0"}`}
            style={{
              width: scrollProgress >= (index + 1) * (100 / steps.length) ? "calc(50% - 2rem)" : "0%",
              backgroundColor: "#10b1b4",
              transition: "width 0.2s ease-in-out",
            }}
          ></div>
        </div>

      </div>
    ))}
  </div>

  {/* Conclusion Section */}
  <div className="text-center max-w-4xl mx-auto px-6 mt-16 pb-8">
    {/* <span className="text-[#10b1b4] font-medium tracking-widest uppercase">
      Our Promise
    </span> */}
  <p className="text-4xl sm:text-5xl font-extrabold my-2 text-[#10b1b4]">
    Our Promise
    </p>
    {/* <h2 className="text-4xl font-bold mt-4">
      A commitment to accuracy and excellence
    </h2>
    <div className="text-center mt-6 py-2 pb-4 relative text-[#10b1b4] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)]">
  <p className="text-lg font-bold">
    With over 50 years of combined experience and a proven track record,
  </p>
  <p className="text-4xl sm:text-5xl font-extrabold my-2 text-[#10b1b4]">
    1,000,000 SAMPLES ANALYZED
  </p>
  <p className="text-lg font-bold">
    Pinnacle Laboratory ensures your testing needs are met with the highest standards.
  </p>
</div> */}

  </div>

</div>
  )}

export default TestingProcessPage;
