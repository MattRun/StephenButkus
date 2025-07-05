'use client';

import { useState } from 'react';

export default function OnboardingPage() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Onboarding</h2>
            <p>Welcome to the onboarding process!</p>
            <button
              onClick={closeModal}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-4"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <h1 className="text-center text-2xl mt-10">Welcome to the Onboarding Page</h1>
    </div>
  );
}
