// "use client";

// import React, { useState } from "react";

// export default function ShippingLabelForm() {
//   // ------------------------------------------------------------------
//   // Sender (the user) details
//   // ------------------------------------------------------------------
//   const [senderName, setSenderName] = useState("");
//   const [senderAddress, setSenderAddress] = useState("");
//   const [senderCity, setSenderCity] = useState("");
//   const [senderState, setSenderState] = useState("");
//   const [senderZip, setSenderZip] = useState("");
//   const [senderPhone, setSenderPhone] = useState("");

//   // ------------------------------------------------------------------
//   // Package
//   // ------------------------------------------------------------------
//   const [weight, setWeight] = useState("1.0");
//   const [serviceType, setServiceType] = useState("PRIORITY_OVERNIGHT");

//   // ------------------------------------------------------------------
//   // Request Results
//   // ------------------------------------------------------------------
//   const [result, setResult] = useState<any>(null);
//   const [error, setError] = useState("");

//   // ------------------------------------------------------------------
//   // On Submit
//   // ------------------------------------------------------------------
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setResult(null);

//     try {
//       const res = await fetch("/dashboard/pages/api/ship-fedex", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           sender: {
//             name: senderName,
//             address: senderAddress,
//             city: senderCity,
//             state: senderState,
//             zip: senderZip,
//             phone: senderPhone,
//           },
//           package: {
//             weight: parseFloat(weight),
//             serviceType,
//           },
//         }),
//       });

//       const data = await res.json();
//       if (data.error) {
//         setError(data.error);
//       } else {
//         setResult(data);
//       }
//     } catch (err: any) {
//       setError(err.message);
//     }
//   };

//   return (
//     // <div className="relative bg-gradient-to-b from-[#16436F] to-[#10b1b4]">
//     <div className="p-6 bg-white shadow-md rounded max-w-xl mx-auto text-black">
//       <h2 className="text-xl font-bold mb-4">Generate FedEx Shipping Label</h2>

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* SENDER INFO */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Sender Info</h3>

//           <label className="block mb-1">Name</label>
//           <input
//             className="border w-full p-1"
//             value={senderName}
//             onChange={(e) => setSenderName(e.target.value)}
//             required
//           />

//           <label className="block mt-3 mb-1">Address</label>
//           <input
//             className="border w-full p-1"
//             value={senderAddress}
//             onChange={(e) => setSenderAddress(e.target.value)}
//             required
//           />

//           <div className="flex space-x-2 mt-3">
//             <div className="flex-1">
//               <label className="block mb-1">City</label>
//               <input
//                 className="border w-full p-1"
//                 value={senderCity}
//                 onChange={(e) => setSenderCity(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block mb-1">State</label>
//               <input
//                 className="border w-full p-1"
//                 value={senderState}
//                 onChange={(e) => setSenderState(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label className="block mb-1">ZIP</label>
//               <input
//                 className="border w-full p-1"
//                 value={senderZip}
//                 onChange={(e) => setSenderZip(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           <label className="block mt-3 mb-1">Phone</label>
//           <input
//             className="border w-full p-1"
//             value={senderPhone}
//             onChange={(e) => setSenderPhone(e.target.value)}
//             required
//           />
//         </div>

//         {/* NOTE: The recipient is pinned on the server; user can’t edit it. */}

//         {/* PACKAGE INFO */}
//         <div>
//           <h3 className="text-lg font-semibold mb-2">Package Details</h3>
//           <label className="block mb-1">Weight (lbs)</label>
//           <input
//             className="border w-full p-1"
//             type="number"
//             step="0.1"
//             value={weight}
//             onChange={(e) => setWeight(e.target.value)}
//             required
//           />

//           <label className="block mt-3 mb-1">Service Type</label>
//           <select
//             className="border w-full p-1"
//             value={serviceType}
//             onChange={(e) => setServiceType(e.target.value)}
//             required
//           >
//             <option value="PRIORITY_OVERNIGHT">Priority Overnight</option>
//             <option value="FEDEX_2_DAY">FedEx 2 Day</option>
//             <option value="FEDEX_GROUND">FedEx Ground</option>
//           </select>
//         </div>

//         {/* SUBMIT */}
//         <button className="bg-blue-600 text-white py-2 px-4 rounded" type="submit">
//           Create Label
//         </button>
//       </form>

//       {/* SHOW ERRORS */}
//       {error && <p className="text-red-500 mt-4">Error: {error}</p>}

//       {/* SHOW SUCCESS */}
//       {result?.success && (
//         <div className="mt-4 p-4 bg-green-50 rounded">
//           <p className="font-semibold">Label Created!</p>

//           {/* transactionId for reference */}
//           {result.shipment?.transactionId && (
//             <p>Transaction ID: {result.shipment.transactionId}</p>
//           )}

//           {/* The direct label link */}
//           {result.labelUrl ? (
//             <a
//               href={result.labelUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-700 underline"
//             >
//               Download Label (PDF)
//             </a>
//           ) : (
//             <p className="text-sm text-gray-600 mt-2">
//               No labelUrl found in FedEx response.
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   // </div>
//   );
// }












"use client";

import React from "react";
import Image from "next/image";
import ShippingLabelForm from "./ShippingLabelForm"; // Adjust the path if needed

export default function ShippingLabelInstructionsPage() {
  return (
    <div className="bg-[#16436F] text-white min-h-screen">
      {/* Header Banner */}
      <div className="relative h-80 md:h-96">
        <Image
          src="/pinnaclelab/Lab Pictures/AdobeStock_138297161.jpeg"
          alt="Shipping Banner"
          fill
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#16436F] opacity-80"></div>
        <div className="relative flex items-center justify-center h-full px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center">
            Your Fastest Path to Pre-paid Shipping Labels
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 md:px-8 py-10 md:py-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Left Sidebar: Instructions */}
          <div className="md:col-span-1 order-2 md:order-1">
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
                How It Works
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    1
                  </span>
                  <p className="text-base">
                    <strong>Tell Us Who You Are:</strong> Drop in your name, address, and phone—quick and easy.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    2
                  </span>
                  <p className="text-base">
                    <strong>Pack It Up:</strong> Add your package weight (usually 1-2 lbs) and pick your FedEx speed.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    3
                  </span>
                  <p className="text-base">
                    <strong>Hit Create:</strong> One click, and your label’s ready to roll.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">
                    4
                  </span>
                  <p className="text-base">
                    <strong>Print & Ship:</strong> Download, slap it on, and drop it at FedEx. Done!
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-6 text-center">
                Lightning-fast. Hassle-free. We’ve got you covered.
              </p>
            </div>
          </div>

          {/* Center: Form */}
          <div className="md:col-span-2 order-1 md:order-2">
            <div className="bg-white text-gray-800 p-6 md:p-8 rounded-lg shadow-xl">
              <ShippingLabelForm />
            </div>
          </div>

          {/* Right Sidebar: Additional Info */}
          <div className="md:col-span-3 order-3">
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Why we're the Best!
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <p className="text-base font-semibold">
                    Print Multiple Labels, Save Big
                  </p>
                  <p className="text-base">
                    Create as many pre-paid labels as you need in one go. Save time, cut costs, and ship smarter with FedEx’s top-tier reliability.
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-base font-semibold">
                    Perfect for all your Samples
                  </p>
                  <p className="text-base">
                    Most shipments weigh in at 1-2 pounds—ideal for samples, small goods, or anything lightweight. Speed meets simplicity.
                  </p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Image
                  src="/pinnaclelab/Screenshot%202025-02-05%20at%209.12.40%20AM.png"
                  alt="Shipping Label Preview"
                  width={200}
                  height={125}
                  className="mx-auto rounded-lg shadow-md max-w-full h-auto"
                />
                <p className="text-sm text-gray-600 mt-4">
                  See it in action! Questions? Our team’s here to help you ship like a pro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}