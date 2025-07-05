"use client";

import React, { useState } from "react";

const SubscribeBox = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({
    title: "",
    subheading: "",
    text: "",
    imageUrl: "",
  });

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }
    try {
      const response = await fetch("/dashboard/pages/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setPopupData(data.popup);
        setShowPopup(true);
        setEmail("");
      } else {
        setMessage(data.error || "Subscription failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-2 text-[#10b1b4]">Subscribe Us</h3>
      <p className="text-gray-600 text-sm mb-4">
        Subscribe to get the latest news &amp; articles in your inbox.
      </p>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Email Address..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded w-full px-3 py-2 mb-3 focus:outline-none text-[#10b1b4]"
          required
        />
        <button type="submit" className="bg-[#16436F] w-full text-white py-2 rounded">
          Subscribe
        </button>
      </form>
      {message && <p className="text-center mt-4 text-sm text-gray-700">{message}</p>}

      {/* Subscription Confirmation Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#1d3b6e] w-11/12 md:w-3/4 lg:w-1/2 p-8 rounded-lg shadow-lg flex flex-col items-center">
            {popupData.imageUrl && (
              <img
                src={popupData.imageUrl}
                alt="Subscription Confirmation"
                width={100}
                height={100}
                className="rounded-full mb-4"
              />
            )}
            <h2 className="text-3xl font-bold mb-2 text-white">{popupData.title}</h2>
            <h3 className="text-2xl mb-4 text-white">{popupData.subheading}</h3>
            <p className="text-white text-center mb-6">{popupData.text}</p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-[#1c3b6e] hover:bg-[#24529c] text-white py-2 px-4 rounded-lg transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubscribeBox;
