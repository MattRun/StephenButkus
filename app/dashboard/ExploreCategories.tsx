"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Category {
  label: string;
  path: string;
  image: string;
  external?: boolean; // Optional property for external links
}

const exploreCategoriesData: Category[] = [
  {
    label: "ABOUT US",
    path: "/dashboard/pages/about/meetourteam",
    image: "/pinnaclelab/Lab Pictures/20250328_102809.jpg",
  },
  {
    label: "ANALYTICAL SERVICES",
    path: "/dashboard/pages/analyticalservices/asbestos",
    image: "/pinnaclelab/Sample Photos/ICP_HeavyMetals.jpeg",
  },
  {
    label: "CLIENT PORTAL",
    path: "https://limsexpressplus.com/software/html5.html?user=*PinnacleReports&pwd=NscK45v2!Cr",
    image: "/pinnaclelab/Screenshot 2025-02-26 at 9.47.08 AM.png",
    external: true,
  },
];

const ExploreCategories = () => {
  return (
    <div className="bg-[white] py-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-[#16436F]">
          EXPLORE <span className="text-[#10b1b4]">CATEGORIES</span>
        </h2>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {exploreCategoriesData.map((category, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg"
          >
            {category.external ? (
              <a
                href={category.path}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative w-full h-[30rem]" // Increased height
              >
                <CategoryCard category={category} />
              </a>
            ) : (
              <Link
                href={category.path}
                className="block relative w-full h-[30rem]" // Increased height
              >
                <CategoryCard category={category} />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => (
  <div className="relative group w-full h-full flex items-center justify-center overflow-hidden">
    {/* Image */}
    <Image
      src={category.image}
      alt={category.label}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-125"
    />

    {/* Opacity Background Layer */}
    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-500"></div>

    {/* Text */}
    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <h3
        className="text-white text-3xl md:text-2xl font-bold tracking-wide uppercase text-center break-words relative p-4
        transition-transform duration-500 group-hover:scale-110 group-hover:text-white group-hover:text-bold"
      >
        {category.label}

        {/* Glow Effect */}
        {/* <span
          className="absolute inset-0 blur-sm bg-[#1E5A81] rounded-lg opacity-0 group-hover:opacity-50 transition-all duration-500"
        ></span> */}

        {/* Underline Animation */}
        <span
          className="absolute left-0 bottom-0 w-0 h-[3px] bg-[#10b1b4] group-hover:w-full transition-all duration-500"
        ></span>

        {/* Pulse Shadow */}
        <span
          className="absolute inset-0 animate-pulse bg-transparent rounded-lg group-hover:shadow-[0px_0px_10px_3px_#10b1b4]"
        ></span>
      </h3>
    </div>
  </div>
);

export default ExploreCategories;
