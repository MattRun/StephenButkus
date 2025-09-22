'use client';

import { useState, useEffect } from 'react';
import LoadingPage from './dashboard/pages/loadingpage/LoadingPage';
import Header from './header/headerj'; // ✅ Your custom header

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <LoadingPage />
  ) : (
    <>
      {/* ✅ Show Header only once */}
      <Header />

      {/* ✅ Main Content */}
      {children}

      {/* Optional: Chatbot */}
      <div className="fixed bottom-24 right-6 z-50">
        {/* <Chatbot /> */}
      </div>

      {/* Optional: Cookie Consent */}
      <div className="fixed bottom-0 left-0 z-40">
        {/* <CookieConsent /> */}
      </div>
    </>
  );
}
