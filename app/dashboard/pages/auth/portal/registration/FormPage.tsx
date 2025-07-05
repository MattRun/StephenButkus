// app/dashboard/pages/auth/portal/FormPage.tsx
'use client';

import React from 'react';

export default function FormPage() {
  return (
    <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">Fill Out the Form</h1>
      <p className="text-center mb-6">Please fill out the following form to submit your information.</p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeFPP5UE7_KgbjbQHWxXPffAGjLCIZpx0i-R8pSlghzlBtzow/viewform?embedded=true"
        width="100%"
        height="800"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        className="border-0 rounded-lg"
      >
        Loading…
      </iframe>
    </div>
  );
}
