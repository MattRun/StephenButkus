// 'use client';

// import { useEffect } from "react";
// import { useRouter } from 'next/navigation'; // Use useRouter for client-side navigation
// import ReactGA from 'react-ga4';

// const TRACKING_ID = 'G-EK98PWLE96';

// export default function Home() {
//   const router = useRouter(); // Initialize the router

//   useEffect(() => {
//     // Initialize Google Analytics
//     ReactGA.initialize(TRACKING_ID);

//     // Track an event when the component is loaded
//     ReactGA.event({
//       category: 'User',
//       action: 'Visited Home Page',
//     });

//     // Redirect to the /dashboard page
//     router.replace('/dashboard');
//   }, [router]); // Add router as a dependency

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
//       <p className="mb-4 text-gray-700">If you are not redirected, click the button below:</p>
//       <button
//         onClick={() => router.push('/dashboard')}
//         className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//       >
//         Go to Dashboard
//       </button>
//     </div>
//   );
// }



'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ReactGA from 'react-ga4';

const TRACKING_ID = 'G-EK98PWLE96';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Initialize GA only once
    ReactGA.initialize(TRACKING_ID);

    // Send a pageview
    ReactGA.send({ hitType: 'pageview', page: '/home', title: 'Home Page' });

    // Optional: add a slight delay to ensure GA loads before redirect
    const timeout = setTimeout(() => {
      router.replace('/dashboard');
    }, 300); // 300ms delay

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <p className="mb-4 text-gray-700">If you are not redirected, click the button below:</p>
      <button
        onClick={() => {
          ReactGA.event({
            category: 'Navigation',
            action: 'Manual Click to Dashboard',
          });
          router.push('/dashboard');
        }}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go to Dashboard
      </button>
    </div>
  );
}
