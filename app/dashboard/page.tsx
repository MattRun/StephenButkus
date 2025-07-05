"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import TestingProcessPage from "./TestingProcessPage";
import TestingProcessPageHeader from "./TestingProcessPageHeader";
import CallToActionHeader from "./calltoactionheader";
import ServiceCarousel from "./CourseOverviewSection";
import WhyChooseSection from "./WhyChooseUs";
import FAQSection from "./FAQSection";
import TurnaroundTimes from "./TurnaroundTimes";
import OurPartners from "./OurPartners";
import VideoSection from "./VideoSection";
import ProductCarousel from "./ProductCarousel";
import ExploreServices from "./ExploreServices";
import ExploreCategories from "./ExploreCategories";
import AboutSection from "./AboutSection";
import Review from "./Review";
import SocialMedia from "./SocialMedia";
import { motion } from "framer-motion"; // Import motion for animations
import PrePaidShippingLabels from "./PrePaidShippingLabels";
import ClientPortalShowcase from "./ClientPortalShowcase";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleToggle = (category: string) => {
    setActiveCategory((prev) => (prev === category ? null : category));
  };

  // Auto-slide functionality for the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3); // Assuming 3 slides in ProductCarousel
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#16436F] text-white">
      <CallToActionHeader />
      <WhyChooseSection />
      <TestingProcessPageHeader />
      <TestingProcessPage />
      <AboutSection />
      <ProductCarousel />
      <ExploreCategories />
      {/* New Section: Client Portal Showcase */}
      <ClientPortalShowcase />
      {/* New Section: Pre-Paid Shipping Labels */}
      <PrePaidShippingLabels />
      {/* <ExploreServices /> */}
      {/* <VideoSection /> */}
      {/* <SocialMedia /> */}
      <FAQSection />
      <Review />
      {/* <TurnaroundTimes /> */}
      <OurPartners />
    </div>
  );
};

export default HomePage;