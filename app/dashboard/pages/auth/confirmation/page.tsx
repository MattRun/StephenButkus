// // app/dashboard/pages/auth/confirmation/page.tsx

// 'use client';

// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// export default function ConfirmationPage() {
//   const router = useRouter();
//   const [code, setCode] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const [message, setMessage] = useState<string | null>(null);

//   // Resend Code function
//   const resendCode = async () => {
//     setError(null);
//     setMessage(null);
//     try {
//       const response = await fetch('/api/auth/resend-code', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: localStorage.getItem('userEmail') }), // Ensure email is saved on sign up
//       });

//       if (response.ok) {
//         setMessage('A new verification code has been sent to your email.');
//       } else {
//         setError('Failed to resend code. Please try again later.');
//       }
//     } catch {
//       setError('Failed to resend code. Please try again later.');
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       const response = await fetch('../api/auth/verify-code', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ code }), // Send code to backend for verification
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         setError(data.message || 'Invalid or expired code. Please try again.');
//         return;
//       }

//       // Redirect to dashboard or show success message
//       router.push('/dashboard');
//     } catch (err) {
//       console.error('Verification failed:', err);
//       setError('Verification failed. Please try again.');
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-100">
//       <div className="max-w-md w-full bg-white p-8 rounded shadow">
//         <h2 className="text-2xl font-semibold text-center mb-4">Enter Verification Code</h2>
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         {message && <p className="text-green-500 text-center">{message}</p>}
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             maxLength={4}
//             placeholder="4-digit code"
//             className="w-full p-3 border rounded mb-4 text-center"
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//             required
//           />
//           <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded mb-4">
//             Verify Code
//           </button>
//         </form>
//         <button
//           onClick={resendCode}
//           className="w-full bg-gray-600 text-white p-3 rounded"
//         >
//           Resend Code
//         </button>
//       </div>
//     </div>
//   );
// }


// app/dashboard/pages/auth/confirmation/page.tsx

// 'use client';

// import { useRouter } from 'next/navigation';
// import { useState } from 'react';

// export default function ConfirmationPage() {
//   const router = useRouter();
//   const [code, setCode] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const [message, setMessage] = useState<string | null>(null);

//   // Resend Code function
//   const resendCode = async () => {
//     setError(null);
//     setMessage(null);
//     try {
//       const response = await fetch('/api/auth/resend-code', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: localStorage.getItem('userEmail') }), // Ensure email is saved on sign up
//       });

//       if (response.ok) {
//         setMessage('A new verification code has been sent to your email.');
//       } else {
//         setError('Failed to resend code. Please try again later.');
//       }
//     } catch {
//       setError('Failed to resend code. Please try again later.');
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);

//     try {
//       const response = await fetch('../api/auth/verify-code', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ code }), // Send code to backend for verification
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         setError(data.message || 'Invalid or expired code. Please try again.');
//         return;
//       }

//       // Redirect to dashboard or show success message
//       router.push('/dashboard');
//     } catch (err) {
//       console.error('Verification failed:', err);
//       setError('Verification failed. Please try again.');
//     }
//   };

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-900">
//       <div className="max-w-md w-full bg-gray-800 p-8 rounded-xl shadow-lg">
//         <div className="flex flex-col items-center mb-6">
//           <div className="bg-blue-600 p-4 rounded-full mb-4">
//           <div className="mb-4">
//             <img
//               src="/EmailConfirm.png"
//               alt="Email Confirmation"
//               className="w-16 h-16"
//             />
//           </div>
//             </div>
//           <h2 className="text-2xl font-semibold text-white">Verification Code</h2>
//           <p className="text-gray-400 text-center">
//             Enter the 4-digit code we’ve sent to <br />
//             <span className="text-white">
//               {(() => {
//                 const email = localStorage.getItem('userEmail') || '';
//                 const [localPart, domain] = email.split('@');
//                 const maskedLocalPart =
//                   localPart.length > 3
//                     ? `${localPart.slice(0, 3)}***`
//                     : `${localPart[0]}***`; // Mask the local part
//                 return `${maskedLocalPart}@${domain || ''}`;
//               })()}
//             </span>
//           </p>
//         </div>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         {message && <p className="text-green-500 text-center mb-4">{message}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="flex gap-2 justify-center mb-6">
//             {[...Array(4)].map((_, index) => (
//               <input
//                 key={index}
//                 type="text"
//                 maxLength={1}
//                 className="w-12 h-12 text-xl text-center border rounded-md border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={code[index] || ''}
//                 onChange={(e) => {
//                   const value = e.target.value.replace(/\D/, ''); // Ensure only digits
//                   setCode((prev) =>
//                     prev.substring(0, index) + value + prev.substring(index + 1)
//                   );
//                 }}
//                 required
//               />
//             ))}
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-md shadow-lg hover:bg-blue-700 transition"
//           >
//             Verify
//           </button>
//         </form>
//         <div className="text-center mt-4">
//           <p className="text-gray-400">
//             Didn’t get the code?{' '}
//             <button
//               onClick={resendCode}
//               className="text-blue-500 hover:underline"
//             >
//               Click to resend
//             </button>
//           </p>
//         </div>
//         <button
//           onClick={() => router.push('/dashboard/pages/auth/signin')}
//           className="w-full bg-gray-700 text-white py-3 mt-4 rounded-md hover:bg-gray-600 transition"
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// }




'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ConfirmationPage() {
  const router = useRouter();
  const [code, setCode] = useState(['', '', '', '']); // Array for each digit of the code
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const resendCode = async () => {
    setError(null);
    setMessage(null);
  
    const email = localStorage.getItem('userEmail'); // Get email from localStorage
  
    if (!email) {
      setError('No email found. Please sign up again.');
      console.error('Email missing from localStorage');
      return;
    }
  
    console.log('Sending email:', email);
  
    try {
      const response = await fetch('/api/auth/resend-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
  
      const data = await response.json();
      console.log('API Response:', data);
  
      if (!response.ok) {
        setError(data.error || 'Failed to resend code. Please try again.');
        return;
      }
  
      setMessage('A new verification code has been sent to your email.');
    } catch (err) {
      console.error('Error in resendCode:', err);
      setError('Failed to resend code. Please try again.');
    }
  };
  
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('../api/auth/verify-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: code.join('') }), // Combine code digits
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Invalid or expired code. Please try again.');
        return;
      }

      router.push('/dashboard/pages/auth/signin');
    } catch (err) {
      console.error('Verification failed:', err);
      setError('Verification failed. Please try again.');
    }
  };

  const handleInputChange = (value: string, index: number) => {
    const sanitizedValue = value.replace(/\D/, ''); // Allow only digits
    if (!sanitizedValue && code[index] === '') return;

    setCode((prev) => {
      const newCode = [...prev];
      newCode[index] = sanitizedValue;
      return newCode;
    });

    // Automatically move to the next input field
    if (sanitizedValue) {
      const nextInput = document.getElementById(`code-input-${index + 1}`);
      if (nextInput) {
        (nextInput as HTMLInputElement).focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && code[index] === '') {
      const prevInput = document.getElementById(`code-input-${index - 1}`);
      if (prevInput) {
        (prevInput as HTMLInputElement).focus();
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-xl shadow-lg">
        <div className="flex flex-col items-center mb-6">
          <div className="p-4 mb-4">
            <img
              src="/EmailConfirm.png"
              alt="Confirmation"
              className="w-16 h-16"
            />
          </div>
          <h2 className="text-2xl font-semibold text-white">Verification Code</h2>
          <p className="text-gray-400 text-center">
            Enter the 4-digit code we’ve sent to your email<br />
          </p>
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {message && <p className="text-green-500 text-center mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2 justify-center mb-6">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-input-${index}`}
                type="text"
                maxLength={1}
                className="w-12 h-12 text-xl text-center border rounded-md border-gray-600 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={digit}
                onChange={(e) => handleInputChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                required
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md shadow-lg hover:bg-blue-700 transition"
          >
            Verify
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-gray-400">
            Didn’t get the code?{' '}
            <button
              onClick={resendCode}
              className="text-blue-500 hover:underline"
            >
              Click to resend
            </button>
          </p>
        </div>
        <button
          onClick={() => router.push('/dashboard/pages/auth/signin')}
          className="w-full bg-gray-700 text-white py-3 mt-4 rounded-md hover:bg-gray-600 transition"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
