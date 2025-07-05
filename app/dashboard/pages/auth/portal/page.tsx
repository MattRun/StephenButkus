// app/dashboard/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UserDashboard() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated by looking for the token
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('userEmail');

    if (!token) {
      // Redirect to sign-in if no token is found
      router.push('/dashboard/pages/auth/signin');
    } else {
      // Set the email for display if authenticated
      setUserEmail(email);
    }
  }, [router]);

  if (!userEmail) {
    return <div>Loading...</div>; // Show loading state until authenticated
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to Your Portal</h1>
        <p className="text-lg text-center">Hello, {userEmail}!</p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Dashboard Options</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>View Courses</li>
            <li>Check Progress</li>
            <li>Account Settings</li>
            <li>Notifications</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
