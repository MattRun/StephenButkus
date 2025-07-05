"use client";

import Image from "next/image";
import { useState } from "react";
import ProjectInquiryForm from "../ProductInquiryForm";

// Asbestos Products Data
const asbestosProducts = [
  {
    title: "PCM Air Monitoring Cassette (25mm), 50/box",
    description: `Equipped with a 2" static conductive extension cowl and preloaded with a 0.8µ mixed cellulose ester (MCE) filter. Specifically designed for PCM air sampling, ensuring compliance with OSHA, NIOSH, and EPA requirements. Includes barcode and serial number for efficient recordkeeping.`,
    image: "/pinnaclelab/Products/PCM_Monitoring.png",
    offered: "Contact for Pricing",
    category: "Asbestos",
    path: "/shop/asbestos/product-1",
  },
  {
    title: "TEM Air Monitoring Cassette (25mm), 50/box",
    description: `Preloaded with 0.45µ + 5.0µ mixed cellulose ester (MCE) filters. Ideal for TEM air sampling, meeting OSHA, NIOSH, and EPA requirements. Includes barcode and serial number for accurate sample identification.`,
    image: "/pinnaclelab/Products/TEM_Monitoring.png",
    offered: "Contact for Pricing",
    category: "Asbestos",
    path: "/shop/asbestos/product-2",
  },
];

const AsbestosProductsPage = () => {
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
          Asbestos Products
        </h1>
        <p 
          className="text-lg mb-4" 
          style={{ lineHeight: "1.6", fontSize: "1.125rem" }}
        >
          Pinnacle Laboratory proudly serves as your trusted partner for asbestos testing and products in Los Angeles. 
          With over 25 years of experience, we deliver unparalleled precision, exceptional turnaround times, and a 
          comprehensive selection of asbestos-related products.
        </p>
        <p 
          className="text-lg mb-4" 
          style={{ lineHeight: "1.6", fontSize: "1.125rem" }}
        >
          Explore our range of air monitoring cassettes for PCM and TEM sampling, fully compliant with OSHA, NIOSH, and 
          EPA standards. Need assistance? <span style={{ fontWeight: "bold", color: "#0099CC" }}>Contact us</span>, and we’ll help you find the right product.
        </p>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {asbestosProducts.map((product, index) => (
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
        {/* <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Don’t See What You're Looking For?</h2>
        <p className="text-lg mb-6 text-center text-black">
          Provide the name and description of the product you’re looking for, and we’ll assist you in finding it.
        </p>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                Contact Number
              </label>
              <input
                type="text"
                name="contactNumber"
                id="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your contact number"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
              Name of Product
            </label>
            <input
              type="text"
              name="productName"
              id="productName"
              value={formData.productName}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter the product name"
            />
          </div>
          <div>
            <label htmlFor="productDescription" className="block text-sm font-medium text-gray-700">
              Description of Product
            </label>
            <textarea
              name="productDescription"
              id="productDescription"
              rows={4}
              value={formData.productDescription}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter a description of the product you're looking for"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default AsbestosProductsPage;
