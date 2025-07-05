'use client';

import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [showPreferencesPopup, setShowPreferencesPopup] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else {
      setPreferences(JSON.parse(consent));
    }
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(newPreferences);
    setShowBanner(false);
    setShowPreferencesPopup(false);
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
  };

  const handleRejectAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(newPreferences);
    setShowBanner(false);
    setShowPreferencesPopup(false);
    localStorage.setItem('cookieConsent', JSON.stringify(newPreferences));
  };

  const handleSavePreferences = () => {
    setShowBanner(false);
    setShowPreferencesPopup(false);
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
  };

  if (!showBanner && !showPreferencesPopup) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      {showBanner && !showPreferencesPopup && (
        <div className="fixed bottom-0 w-full bg-gray-900 text-white py-6 px-8 z-50 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm mb-4 md:mb-0 md:mr-4 text-center md:text-left">
            We use cookies to enhance your browsing experience and provide you with personalized content. By clicking "Accept All," you agree to our use of cookies as outlined in our Privacy Policy. Your privacy is our priority, and you can always manage your cookie preferences to suit your comfort level.
          </p>
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <button
              onClick={handleRejectAll}
              className="bg-gray-700 text-white py-2 px-6 rounded-md hover:bg-gray-600"
            >
              Only Necessary
            </button>
            <button
              onClick={() => setShowPreferencesPopup(true)}
              className="bg-gray-700 text-white py-2 px-6 rounded-md hover:bg-gray-600"
            >
              Change Preferences
            </button>
            <button
              onClick={handleAcceptAll}
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-400"
            >
              Accept All
            </button>
          </div>
        </div>
      )}

      {/* Preferences Pop-Up */}
      {showPreferencesPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Manage Cookie Preferences</h2>

            {/* Necessary Section */}
            <div className="border-b border-gray-700 pb-4 mb-4">
              <h3 className="text-lg font-semibold">Necessary Cookies</h3>
              <p className="text-sm text-gray-400">
                These cookies are required for the website to function properly and cannot be disabled.
              </p>
              <label className="flex items-center mt-2">
                <input
                  type="checkbox"
                  checked={preferences.necessary}
                  disabled
                  className="mr-3"
                />
                <span className="text-gray-400">Always Enabled</span>
              </label>
            </div>

            {/* Analytics Section */}
            <div className="border-b border-gray-700 pb-4 mb-4">
              <h3 className="text-lg font-semibold">Analytics Cookies</h3>
              <p className="text-sm text-gray-400">
                These cookies help us understand how visitors interact with the website by collecting and reporting information anonymously.
              </p>
              <label className="flex items-center mt-2">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() =>
                    setPreferences({
                      ...preferences,
                      analytics: !preferences.analytics,
                    })
                  }
                  className="mr-3"
                />
                <span>Enable Analytics Cookies</span>
              </label>
            </div>

            {/* Marketing Section */}
            <div>
              <h3 className="text-lg font-semibold">Marketing Cookies</h3>
              <p className="text-sm text-gray-400">
                These cookies are used to deliver advertisements that are relevant to you and your interests.
              </p>
              <label className="flex items-center mt-2">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() =>
                    setPreferences({
                      ...preferences,
                      marketing: !preferences.marketing,
                    })
                  }
                  className="mr-3"
                />
                <span>Enable Marketing Cookies</span>
              </label>
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-6 space-x-4">
              <button
                onClick={() => setShowPreferencesPopup(false)}
                className="bg-gray-700 text-white py-2 px-6 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePreferences}
                className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-400"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
