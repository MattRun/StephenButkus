"use client";

import Image from "next/image";
import { useState } from "react";
import ProjectInquiryForm from "../ProductInquiryForm";

const moldProducts = [
  {
    title: "Allergenco-D Air Monitoring Cassette, 50/box",
    description: `Utilizing a proprietary design, the Allergenco-D Air Monitoring Cassette allows for a uniform impaction of mold spores, pollen, insects, and combustion particles onto the built-in slide.`,
    image: "/pinnaclelab/Products/Allergenco-D_Air_Monitoring.png",
    offered: "In-Person Pickup",
    category: "Mold",
    path: "/shop/mold/product-1",
  },
  {
    title: "Mold Check Swabs, 50/pack",
    description: `Individually packaged, the Mold Check swabs allow for quick and easy sampling of surface growth. Each sterile swab includes a shipping tube with media designed to preserve viable samples.`,
    image: "/pinnaclelab/Products/Mold_Check_Swabs.png",
    offered: "In-Person Pickup",
    category: "Mold",
    path: "/shop/mold/product-2",
  },
];

const MoldProductsPage = () => {
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
        <h1 className="text-3xl font-bold text-gray-100 mb-4" style={{ letterSpacing: "0.05em", color: "white" }}>
          Mold Products
        </h1>
        <p className="text-lg mb-4" style={{ lineHeight: "1.6", fontSize: "1.125rem" }}>
          Molds exist naturally in the outdoor environment, contributing to the decomposition of organic matter. However, indoor mold growth should be prevented as it thrives on wet surfaces.
        </p>
        <p className="text-lg mb-4" style={{ lineHeight: "1.6", fontSize: "1.125rem" }}>
          Pinnacle Laboratory offers a wide selection of mold products to help you address these issues. From air cassettes to mold swabs, our products ensure precision and efficiency in sampling and testing.
        </p>
        <p className="text-lg font-medium" style={{ color: "white", marginTop: "1rem" }}>
          Can’t find the exact product you’re looking for? <span style={{ fontWeight: "bold", color: "#0099EE" }}>Contact us</span>, and we’ll assist you in finding the perfect solution.
        </p>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {moldProducts.map((product, index) => (
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

export default MoldProductsPage;
