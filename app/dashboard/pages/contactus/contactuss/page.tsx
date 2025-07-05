// your-component.tsx
'use client'
import React from 'react';

const YourComponent = () => {
  const sendEmail = async () => {
    try {
      const response = await fetch('/api/send-email.ts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'info@pinnaclelab.com',
          subject: 'Test Email',
          text: 'This is a test email from Next.js and SendGrid.',
        }),
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error);
      }

      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <button onClick={sendEmail}>Send Email</button>
  );
};

export default YourComponent;