// app/ClientLayout.tsx

'use client';

import { useState, useEffect } from 'react';
import LoadingPage from './dashboard/pages/loadingpage/LoadingPage';
import Chatbot from './chatbot/page';
import CookieConsent from './cookieconsent/page';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a fixed duration for the loading page (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          {/* Chatbot: Ensure it's always rendered on top and properly positioned */}
          <div className="fixed bottom-24 right-6 z-50">
            {/* <Chatbot /> */}
          </div>

          {/* Main Content */}
          {children}

          {/* Cookie Consent */}
          <div className="fixed bottom-0 left-0 z-40">
            {/* <CookieConsent /> */}
          </div>
        </>
      )}
    </>
  );
}
