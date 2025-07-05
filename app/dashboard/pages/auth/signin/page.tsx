'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error message

    try {
      const response = await fetch('../api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle unauthorized errors with a specific message
        if (response.status === 401) {
          setError('Invalid email or password. Please try again.');
        } else {
          setError(data.message || 'An error occurred');
        }
        return;
      }

      // Store the JWT token and user email in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('userEmail', email); // Save email for display in header

      // Redirect and refresh the page
      window.location.href = '/dashboard/pages/alltraining';
    } catch (err) {
      console.error('Login failed:', err);
      setError('Failed to sign in. Please try again later.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="flex w-full max-w-6xl bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 p-8">
          <div className="mb-6">
            <img src="/AEHS_Logo.png" alt="AEHS Logo" className="h-12" />
          </div>
          <h2 className="text-3xl font-bold mb-6">Sign In</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email*
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border border-gray-700 rounded bg-gray-700 text-white focus:ring focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium">
                Password*
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-700 rounded bg-gray-700 text-white focus:ring focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </form>
          <p className="text-center mt-4">
            Don&apos;t have an account?{' '}
            <Link href="/dashboard/pages/auth/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>

        {/* Right Section */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url('/ICP_HeavyMetals.jpeg')`,
            opacity: 0.9,
          }}
        ></div>
      </div>
    </div>
  );
}
