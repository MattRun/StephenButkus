"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const servicesData = [
  {
    label: "ASBESTOS",
    path: "asbestos",
    image: "/plm.jpg",
  },
  {
    label: "MOLD",
    path: "mold",
    image: "/pinnaclelab/Sample Photos/chaetomium_spores.jpg",
  },
  {
    label: "FIBERGLASS",
    path: "fiberglass",
    image: "/pinnaclelab/Sample Photos/fiberglass.png",
  },
  {
    label: "LEAD",
    path: "lead",
    image: "/leaddust.png",
  },
  {
    label: "HEAVY METALS",
    path: "heavymetals",
    image: "/pinnaclelab/Sample Photos/ICP_HeavyMetals.jpeg",
  },
  {
    label: "FIRE AND SMOKE",
    path: "fireandsmoke",
    image: "/pinnaclelab/Sample Photos/fireandsmoke.png",
  },
];

const ExploreServices = () => {
  return (
    <div className="bg-[#16436F] py-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white">
          EXPLORE <span className="text-[#10b1b4]">SERVICES</span>
        </h2>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
        {servicesData.map((service, index) => (
          <Link
            key={index}
            href={`/dashboard/pages/analyticalservices/${service.path}`}
            className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg"
          >
            {/* Service Image */}
            <div className="w-full h-56 relative">
              <Image
                src={service.image}
                alt={service.label}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Service Label */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-60">
              <h3 className="text-white text-lg font-bold tracking-wide uppercase">
                {service.label}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExploreServices;
