"use client";

import Image from "next/image";
import { useState } from "react";
import ProjectInquiryForm from "../ProductInquiryForm";

// Sample Bags Data
const sampleBags = [
  {
    title: "Clear with White Block (100 Pack / 1000 Pack)",
    description: `Durable sample bags featuring a clear design with a white block for easy labeling. Available in sizes 2" x 3". Ideal for secure and organized sample storage.`,
    image: "/pinnaclelab/Products/Clear_white_Sample_Bags.jpg",
    offered: "Call for Pricing",
    category: "Sample Bags",
    path: "/shop/sample-bags/product-1",
  },
  {
    title: "Clear Sample Bags (100 Pack / 1000 Pack)",
    description: `High-quality clear sample bags available in multiple sizes: 5" x 8", 8" x 10", 10" x 12", and 12" x 15". Perfect for a variety of sampling needs.`,
    image: "/pinnaclelab/Products/Clear_Sample_Bags.jpg",
    offered: "Call for Pricing",
    category: "Sample Bags",
    path: "/shop/sample-bags/product-2",
  },
];

const SampleBagsPage = () => {
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
    console.log("Submitted form data:", formData);
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
      Sample Bags
    </h1>
    <p 
      className="text-lg mb-4" 
      style={{ lineHeight: "1.6", fontSize: "1.125rem" }}
    >
      Void Creatives offers top-quality sample bags for secure and reliable sample collection. Designed to support asbestos, mold, and lead testing, our products are trusted by professionals for their durability and efficiency.
    </p>
    <p 
      className="text-lg mb-4" 
      style={{ lineHeight: "1.6", fontSize: "1.125rem" }}
    >
      Choose from a variety of sizes and styles, including clear bags and options with white blocks for easy labeling. Whether for environmental testing or other projects, our sample bags ensure precision and convenience.
    </p>
    <p 
      className="text-lg font-medium" 
      style={{ color: "white", marginTop: "1rem" }}
    >
      Can’t find the exact product you’re looking for? <span style={{ fontWeight: "bold", color: "#0099EE" }}>Contact us</span>, and we’ll help you find the perfect solution for your needs.
    </p>
  </div>




      {/* Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {sampleBags.map((product, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-lg bg-gray-50 hover:shadow-xl transition"
            style={{ height: "360px" }} // Smaller card size
          >
            <div className="relative w-full h-64"> {/* Taller image */}
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

export default SampleBagsPage;
