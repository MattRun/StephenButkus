"use client";

import React, { useState } from "react";

export default function ShippingLabelForm() {
  // ------------------------------------------------------------------
  // Sender (the user) details
  // ------------------------------------------------------------------
  const [senderName, setSenderName] = useState("");
  const [senderAddress, setSenderAddress] = useState("");
  const [senderCity, setSenderCity] = useState("");
  const [senderState, setSenderState] = useState("");
  const [senderZip, setSenderZip] = useState("");
  const [senderPhone, setSenderPhone] = useState("");

  // ------------------------------------------------------------------
  // Package
  // ------------------------------------------------------------------
  const [weight, setWeight] = useState("1.0");
  const [serviceType, setServiceType] = useState("PRIORITY_OVERNIGHT");

  // ------------------------------------------------------------------
  // Request Results
  // ------------------------------------------------------------------
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  // ------------------------------------------------------------------
  // On Submit
  // ------------------------------------------------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    try {
      const res = await fetch("/dashboard/pages/api/ship-fedex", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sender: {
            name: senderName,
            address: senderAddress,
            city: senderCity,
            state: senderState,
            zip: senderZip,
            phone: senderPhone,
          },
          package: {
            weight: parseFloat(weight),
            serviceType,
          },
        }),
      });

      const data = await res.json();
      if (data.error) {
        setError(data.error);
      } else {
        setResult(data);
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    // <div className="relative bg-gradient-to-b from-[#16436F] to-[#10b1b4]">
    <div className="p-6 bg-white shadow-md rounded max-w-xl mx-auto text-black">
      <h2 className="text-xl font-bold mb-4">Generate FedEx Shipping Label</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* SENDER INFO */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Sender Info</h3>

          <label className="block mb-1">Name</label>
          <input
            className="border w-full p-1"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            required
          />

          <label className="block mt-3 mb-1">Address</label>
          <input
            className="border w-full p-1"
            value={senderAddress}
            onChange={(e) => setSenderAddress(e.target.value)}
            required
          />

          <div className="flex space-x-2 mt-3">
            <div className="flex-1">
              <label className="block mb-1">City</label>
              <input
                className="border w-full p-1"
                value={senderCity}
                onChange={(e) => setSenderCity(e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1">State</label>
              <input
                className="border w-full p-1"
                value={senderState}
                onChange={(e) => setSenderState(e.target.value)}
                required
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1">ZIP</label>
              <input
                className="border w-full p-1"
                value={senderZip}
                onChange={(e) => setSenderZip(e.target.value)}
                required
              />
            </div>
          </div>

          <label className="block mt-3 mb-1">Phone</label>
          <input
            className="border w-full p-1"
            value={senderPhone}
            onChange={(e) => setSenderPhone(e.target.value)}
            required
          />
        </div>

        {/* NOTE: The recipient is pinned on the server; user can’t edit it. */}

        {/* PACKAGE INFO */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Package Details</h3>
          <label className="block mb-1">Weight (lbs)</label>
          <input
            className="border w-full p-1"
            type="number"
            step="0.1"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />

          <label className="block mt-3 mb-1">Service Type</label>
          <select
            className="border w-full p-1"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            required
          >
            <option value="PRIORITY_OVERNIGHT">Priority Overnight</option>
            <option value="FEDEX_2_DAY">FedEx 2 Day</option>
            <option value="FEDEX_GROUND">FedEx Ground</option>
          </select>
        </div>

        {/* SUBMIT */}
        <button className="bg-blue-600 text-white py-2 px-4 rounded" type="submit">
          Create Label
        </button>
      </form>

      {/* SHOW ERRORS */}
      {error && <p className="text-red-500 mt-4">Error: {error}</p>}

      {/* SHOW SUCCESS */}
      {result?.success && (
        <div className="mt-4 p-4 bg-green-50 rounded">
          <p className="font-semibold">Label Created!</p>

          {/* transactionId for reference */}
          {result.shipment?.transactionId && (
            <p>Transaction ID: {result.shipment.transactionId}</p>
          )}

          {/* The direct label link */}
          {result.labelUrl ? (
            <a
              href={result.labelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline"
            >
              Download Label (PDF)
            </a>
          ) : (
            <p className="text-sm text-gray-600 mt-2">
              No labelUrl found in FedEx response.
            </p>
          )}
        </div>
      )}
    </div>
  // </div>
  );
}
