"use client";

import React, { useState } from "react";

const ProjectInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    productName: "",
    productDescription: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({
    title: "",
    subheading: "",
    text: "",
    imageUrl: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    // Create a FormData object for sending text fields and files
    const formPayload = new FormData();
    formPayload.append("name", formData.name);
    formPayload.append("contactNumber", formData.contactNumber);
    formPayload.append("email", formData.email);
    formPayload.append("productName", formData.productName);
    formPayload.append("productDescription", formData.productDescription);

    files.forEach((file) => {
      formPayload.append("images", file);
    });

    try {
      const response = await fetch("/dashboard/pages/api/inquiry", {
        method: "POST",
        body: formPayload,
      });
      const data = await response.json();
      if (response.ok) {
        setPopupData(data.popup);
        setShowPopup(true);
        // Clear the form fields after a successful submission
        setFormData({
          name: "",
          contactNumber: "",
          email: "",
          productName: "",
          productDescription: "",
        });
        setFiles([]);
      } else {
        setMessage(data.error || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-16 p-6 bg-gray-50 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Don’t See What You're Looking For?
      </h2>
      <p className="text-lg mb-6 text-center text-black">
        Provide the name and description of the product you’re looking for,
        and we’ll assist you in finding it.
      </p>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6"
        encType="multipart/form-data"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="contactNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Number
            </label>
            <input
              type="text"
              name="contactNumber"
              id="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
              placeholder="Enter your contact number"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
            placeholder="Enter your email address"
            required
          />
        </div>
        <div>
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-gray-700"
          >
            Name of Product
          </label>
          <input
            type="text"
            name="productName"
            id="productName"
            value={formData.productName}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
            placeholder="Enter the product name"
          />
        </div>
        <div>
          <label
            htmlFor="productDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Description of Product
          </label>
          <textarea
            name="productDescription"
            id="productDescription"
            rows={4}
            value={formData.productDescription}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
            placeholder="Enter a description of the product you're looking for"
          ></textarea>
        </div>
        <div>
          <label
            htmlFor="images"
            className="block text-sm font-medium text-gray-700"
          >
            Attach Images (Optional)
          </label>
          <input
            type="file"
            name="images"
            id="images"
            multiple
            onChange={handleFileChange}
            className="mt-1 block w-full text-black"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded shadow hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
      {message && (
        <p className="mt-4 text-center text-red-600">{message}</p>
      )}

      {/* Popup Confirmation */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full relative">
            <div className="flex flex-col items-center">
              {popupData.imageUrl && (
                <img
                  src={popupData.imageUrl}
                  alt="Popup"
                  className="w-24 h-24 mb-4 rounded-full"
                />
              )}
              <h2 className="text-2xl font-bold mb-2 text-gray-800">
                {popupData.title}
              </h2>
              <h3 className="text-xl mb-4 text-gray-600">
                {popupData.subheading}
              </h3>
              <p className="text-gray-700 mb-6 text-center">
                {popupData.text}
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectInquiryForm;
