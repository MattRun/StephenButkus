"use client";

import React, { useState } from "react";

const AskOurExperts = () => {
  const [formData, setFormData] = useState({ name: "", email: "", question: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/dashboard/pages/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message || "Your question has been submitted. We will contact you soon.");
        setFormData({ name: "", email: "", question: "" });
      } else {
        setMessage(data.error || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting question:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 text-gray-900 border border-gray-300">
      <h2 className="text-2xl font-bold mb-6" style={{ color: "#16436F" }}>
        Ask Our Experts
      </h2>
      <p className="mb-8 text-md text-gray-700">
        Have a question? Reach out to our experts and get answers ASAP.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-md font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
            required
          />
        </div>
        <div>
          <label htmlFor="question" className="block text-sm font-medium text-gray-700">
            Your Question
          </label>
          <textarea
            id="question"
            name="question"
            rows={4}
            value={formData.question}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-gray-100"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#16436F] text-white py-3 rounded-lg shadow-md hover:bg-blue-800 transition"
        >
          Submit
        </button>
      </form>
      {message && <p className="mt-4 text-xs text-gray-500">* {message}</p>}
    </div>
  );
};

export default AskOurExperts;
