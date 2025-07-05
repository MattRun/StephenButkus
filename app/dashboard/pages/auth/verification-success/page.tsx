// app/dashboard/pages/auth/verification-success/page.tsx

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function VerificationSuccess() {
  const router = useRouter();

  useEffect(() => {
    // Redirect the user to the login or dashboard after a few seconds
    const timer = setTimeout(() => {
      router.push('/dashboard/pages/auth/signin'); // Adjust this path if needed
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-semibold text-center mb-4">Verification Successful!</h2>
        <p className="text-center">Your email has been successfully verified.</p>
        <p className="text-center mt-2">You will be redirected shortly...</p>
      </div>
    </div>
  );
}
