// // app/dashboard/pages/auth/signup/page.tsx

// 'use client';

// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { useState } from 'react';

// export default function SignUp() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setSuccessMessage(null);

//     // Validate passwords match
//     if (password !== confirmPassword) {
//       setError('Passwords do not match.');
//       return;
//     }

//     try {
//       // Make POST request to the register API
//       console.log("test",email,password)
//       const response = await fetch('../api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: '"email":"mattrun","password":"test"'
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         setError(data.message || 'An error occurred during registration.');
//         return;
//       }

//       // Success handling
//       setSuccessMessage('Registration successful! Please check your email to verify your account.');

//       // Redirect to confirmation page after delay
//       setTimeout(() => router.push('/dashboard/pages/auth/confirmation'), 3000);
//     } catch (err) {
//       setError('Failed to sign up. Please try again later.');
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <div className="max-w-md w-full bg-white p-8 rounded shadow">
//         <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-3 border rounded mb-4"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-3 border rounded mb-4"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             className="w-full p-3 border rounded mb-4"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//           <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded">
//             Sign Up
//           </button>
//         </form>
//         <p className="text-center mt-4">
//           Already have an account?{' '}
//           <Link href="/dashboard/pages/auth/signin" className="text-blue-600">
//             Sign In
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }





//worksGREAT
// 'use client';

// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { useState } from 'react';

// export default function SignUp() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setSuccessMessage(null);
  
//     if (password !== confirmPassword) {
//       setError('Passwords do not match.');
//       return;
//     }
  
//     try {
//       const response = await fetch('../api/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
  
//       const data = await response.json();
  
//       if (!response.ok) {
//         if (data.error === 'User already exists') {
//           setError('This email is already registered. Please try a different email.');
//         } else {
//           // setError(data.error || 'An error occurred during registration.');
//         }
//         return;
//       }
  
//       setSuccessMessage('Registration successful! Please check your email to verify your account.');
//       setTimeout(() => router.push('/dashboard/pages/auth/confirmation'), 3000);
//     } catch (err) {
//       setError('Failed to sign up. Please try again later.');
//     }
//   };
  

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100 text-black">
//       <div className="max-w-md w-full bg-white p-8 rounded shadow">
//         <h2 className="text-2xl font-semibold text-center mb-4">Sign Up</h2>
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full p-3 border rounded mb-4"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full p-3 border rounded mb-4"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             className="w-full p-3 border rounded mb-4"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//           <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded">
//             Sign Up
//           </button>
//         </form>
//         <p className="text-center mt-4">
//           Already have an account?{' '}
//           <Link href="/dashboard/pages/auth/signin" className="text-blue-600">
//             Sign In
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// }



'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [passwordStrength, setPasswordStrength] = useState<string>(''); // For password strength

  const handlePasswordChange = (value: string) => {
    setPassword(value);

    // Check password strength
    if (value.length < 7) {
      setPasswordStrength('Weak');
    } else if (/[A-Z]/.test(value) && /\d/.test(value)) {
      setPasswordStrength('Strong');
    } else {
      setPasswordStrength('Moderate');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (password.length < 7) {
      setError('Password must be at least 7 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('../api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.error === 'User already exists') {
          setError('This email is already registered. Please try a different email.');
        } else {
          setError(data.error || 'An error occurred during registration.');
        }
        return;
      }

      setSuccessMessage('Registration successful! Please check your email to verify your account.');
      setTimeout(() => router.push('/dashboard/pages/auth/confirmation'), 3000);
    } catch (err) {
      setError('Failed to sign up. Please try again later.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="flex w-full max-w-6xl bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="w-1/2 p-8">
          <div className="mb-6">
            <img src="/AEHS_Logo.png" alt="AEHS Logo" className="h-12" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-white">Sign Up</h2>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {successMessage && <p className="text-green-500 text-sm mb-4">{successMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                Email*
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className={`w-full p-3 border rounded focus:ring focus:ring-blue-500 bg-gray-700 text-white ${
                  error?.includes('email') ? 'border-red-500' : 'border-gray-600'
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {error?.includes('email') && (
                <span className="absolute right-3 top-10 text-red-500">!</span>
              )}
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-400">
                Password*
              </label>
              <input
                id="password"
                type="password"
                placeholder="Create a password"
                className={`w-full p-3 border rounded focus:ring focus:ring-blue-500 bg-gray-700 text-white ${
                  error?.includes('Password must') ? 'border-red-500' : 'border-gray-600'
                }`}
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                required
              />
              <p
                className={`text-sm mt-2 ${
                  passwordStrength === 'Weak'
                    ? 'text-red-500'
                    : passwordStrength === 'Moderate'
                    ? 'text-yellow-500'
                    : 'text-green-500'
                }`}
              >
                {passwordStrength ? `Password strength: ${passwordStrength}` : ''}
              </p>
              {error?.includes('Password must') && (
                <span className="absolute right-3 top-10 text-red-500">!</span>
              )}
            </div>
            <div className="mb-6 relative">
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-400">
                Confirm Password*
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm your password"
                className={`w-full p-3 border rounded focus:ring focus:ring-blue-500 bg-gray-700 text-white ${
                  error?.includes('Passwords do not match') ? 'border-red-500' : 'border-gray-600'
                }`}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {error?.includes('Passwords do not match') && (
                <span className="absolute right-3 top-10 text-red-500">!</span>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          </form>
          <p className="text-center mt-4 text-gray-400">
            Already have an account?{' '}
            <Link href="/dashboard/pages/auth/signin" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </p>
        </div>

        {/* Right Section */}
        <div
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `url('/mold.jpeg')`,
            opacity: 0.85,
          }}
        ></div>
      </div>
    </div>
  );
}
