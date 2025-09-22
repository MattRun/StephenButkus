"use client";

import Image from "next/image";
import { useState } from "react";
import ProjectInquiryForm from "../ProductInquiryForm";

// Equipment Rentals Data
const equipmentRentals = [
  {
    title: "e-PRP HD High Volume Sampling Pump",
    description: `Weighing only 7.5 lbs., this portable pump operates at an average volume of 49 dB (quieter than a refrigerator). With an adjustable flow rate of 2.0 LPM to 30 LPM, it is ideal for most asbestos and lead air sampling projects.`,
    image: "/pinnaclelab/Products/e-PRP_Pump.png",
    offered: "Contact for Pricing",
    category: "Equipment Rental",
    path: "/shop/equipment-rentals/product-1",
  },
  {
    title: "Gillian BDX-II Low Volume Sampling Pump, 5 pumps/kit",
    description: `Optimized for abatement applications, the BDX-II sampling pumps operate at sampling rates of 0.5 LPM - 3.0 LPM. Each pump features a rechargeable NiMH battery pack, enabling up to 10 hours of sampling per charge. The kit includes 5 pumps, 5 security cover screwdrivers, 5 charging adapters, and 5 charging cables.`,
    image: "/pinnaclelab/Products/Gillian_BDX-II.png",
    offered: "Contact for Pricing",
    category: "Equipment Rental",
    path: "/shop/equipment-rentals/product-2",
  },
];

const EquipmentRentalsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    productName: "",
    productDescription: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Your request has been submitted. We will contact you shortly.");
    setFormData({
      name: "",
      contactNumber: "",
      email: "",
      productName: "",
      productDescription: "",
    });
  };

  return (
    <div className="relative bg-gradient-to-b from-[#16436F] to-[#10b1b4] text-gray-100 px-6 py-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 
          className="text-3xl font-bold text-gray-100 mb-4" 
          style={{ letterSpacing: "0.05em", color: "white" }}
        >
          Equipment Rentals
        </h1>
        <p 
          className="text-lg mb-4" 
          style={{ lineHeight: "1.6", fontSize: "1.125rem" }}
        >
          Achieve your tasks with the right equipment rental from Void Creatives. Our wide selection of equipment 
          empowers home inspectors and environmental professionals to perform their jobs with efficiency and precision.
        </p>
        <p 
          className="text-lg mb-4" 
          style={{ lineHeight: "1.6", fontSize: "1.125rem" }}
        >
          From high-volume sampling pumps to specialized low-volume kits, we provide top-notch equipment without the 
          commitment of ownership. Elevate your inspection projects with Void Creatives’s rental solutions!
        </p>
        <p 
          className="text-lg font-medium" 
          style={{ color: "white", marginTop: "1rem" }}
        >
          Can’t find the exact equipment you’re looking for? <span style={{ fontWeight: "bold", color: "#0099EE" }}>Contact us</span>, 
          and we’ll help you find the perfect rental solution.
        </p>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {equipmentRentals.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg bg-gray-50 hover:shadow-xl transition"
            style={{ height: "360px" }}
          >
            <div className="relative w-full h-64">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="contain"
                className="object-contain"
              />
            </div>
            <div className="p-3 flex flex-col justify-between h-[calc(100%-256px)]">
              <div>
                <h3 className="text-base font-semibold text-gray-800 mb-1">{product.title}</h3>
                <p className="text-sm text-gray-700 mb-1">{product.description}</p>
              </div>
              <div>
                <p className="text-xs text-blue-600">{product.offered}</p>
                <a
                  href={product.path}
                  className="mt-2 inline-block text-white bg-blue-600 px-3 py-1 text-sm rounded shadow hover:bg-blue-700 transition"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto mt-16 p-6 bg-gray-50 rounded-lg shadow">
        <ProjectInquiryForm />
      </div>
    </div>
  );
};

export default EquipmentRentalsPage;
