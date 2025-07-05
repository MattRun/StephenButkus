// // app/layout.tsx

// import type { Metadata } from 'next';
// import localFont from 'next/font/local';
// import './globals.css';
// import NewsletterPopup from './dashboard/pages/newsletter/page'; // Corrected import
// import Chatbot from './chatbot/page';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });

// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

// export const metadata: Metadata = {
//   title: 'Academy of Environmental Health & Safety',
//   description: 'Southern California Certified',
//   icons: {
//     icon: '/AEHS_Logo.png', // Path to your favicon file in the public directory
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <Chatbot />
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//       {/* <NewsletterPopup /> */}
      
//         {children}
//       </body>
//     </html>
//   );
// }







// //Works Great
// // app/layout.tsx
// import type { Metadata } from 'next';
// import localFont from 'next/font/local';
// import './globals.css';
// import NewsletterPopup from './dashboard/pages/newsletter/page'; // Corrected import
// import Chatbot from './chatbot/page';
// import CookieConsent from './cookieconsent/page';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });

// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

// export const metadata: Metadata = {
//   title: 'Academy of Environmental Health & Safety',
//   description: 'Southern California Certified',
//   icons: {
//     icon: '/AEHS_Logo.png', // Path to your favicon file in the public directory
//   },
// };
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
  
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         {/* Chatbot: Ensure it's always rendered on top and properly positioned */}
//         <div className="fixed bottom-24 right-6 z-50">
//           <Chatbot />
//         </div>

//         {/* Main Content */}
//         {children}

//         {/* Cookie Consent */}
//         <div className="fixed bottom-0 left-0 z-40">
//           <CookieConsent />
//         </div>
//       </body>
//     </html>
//   );
// }

// app/layout.tsx














































// import type { Metadata } from 'next';
// import localFont from 'next/font/local';
// import './globals.css';
// import ClientLayout from './clientlayout'; // Import the client layout

// // const geistSans = localFont({
// //   src: './fonts/GeistVF.woff',
// //   variable: '--font-geist-sans',
// //   weight: '100 900',
// // });

// // const geistMono = localFont({
// //   src: './fonts/GeistMonoVF.woff',
// //   variable: '--font-geist-mono',
// //   weight: '100 900',
// // });

// export const metadata: Metadata = {
//   title: 'Pinnacle Laboratory',
//   description: 'Southern California Certified',
//   icons: {
//     icon: '/Pinnacle_Icon_Square.ico', // Path to your favicon file in the public directory
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}> */}
//       <head>
//         {/* Embed Google Font */}
//         <link
//           rel="stylesheet"
//           href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap"
//         />
//       </head>

//       <body className="font-saira">
//         {/* Client layout handles loading and other client-specific features */}
//         <ClientLayout>
//           {children}
//         </ClientLayout>
//       </body>
//     </html>
//   );
// }

















































// import type { Metadata } from 'next';
// import './globals.css';
// import ClientLayout from './clientlayout';

// // Define metadata with enhanced favicon configuration
// export const metadata: Metadata = {
//   title: 'Pinnacle Laboratory',
//   description: 'Southern California Certified',
//   icons: {
//     icon: [
//       { url: '/favicon.ico', type: 'image/x-icon' }, // Fallback to root favicon
//       { url: '/Pinnacle_Icon_Square.ico?v=1', type: 'image/x-icon' }, // Primary favicon with cache-busting
//       { url: '/Pinnacle_Icon_16x16.ico?v=1', type: 'image/x-icon', sizes: '16x16' }, // 16x16 variant
//     ],
//     apple: { url: '/Pinnacle_Icon_apple_touch.ico?v=1', type: 'image/x-icon' }, // Apple touch icon
//     shortcut: '/Pinnacle_Icon_Square.ico?v=1', // Shortcut icon
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Google Font */}
//         <link
//           rel="stylesheet"
//           href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100..900;1,100..900&display=swap"
//         />
//         {/* Explicit favicon links with cache-busting */}
//         <link rel="icon" href="/Pinnacle_Icon_Square.ico?v=1" type="image/x-icon" />
//         <link rel="shortcut icon" href="/Pinnacle_Icon_Square.ico?v=1" type="image/x-icon" />
//         <link rel="apple-touch-icon" href="/Pinnacle_Icon_apple_touch.ico?v=1" />
//       </head>
//       <body className="font-saira">
//         <ClientLayout>
//           {children}
//         </ClientLayout>
//       </body>
//     </html>
//   );
// }



















//Cache-Busting the Favicon

//this will clear everyone whos been on the site and hasnt cleared their cache to purge the old vercel icon

// app/layout.tsx

// import type { Metadata, Viewport } from "next";
// import "./globals.css";
// import ClientLayout from "./clientlayout";

// export const metadata: Metadata = {
//   title: "Pinnacle Laboratory",
//   description: "Southern California Certified",
//   icons: {
//     icon: [
//       { url: "/Pinnacle_Icon_Square.ico?v=2", type: "image/x-icon" },
//       { url: "/Pinnacle_Icon_16x16.ico?v=2", type: "image/x-icon", sizes: "16x16" },
//     ],
//     apple: { url: "/Pinnacle_Icon_apple_touch.ico?v=2", type: "image/x-icon" },
//     shortcut: "/Pinnacle_Icon_Square.ico?v=2",
//   },
// };

// // ✅ Correct way to define mobile viewport in Next.js 13.4+
// export const viewport: Viewport = {
//   width: "device-width",
//   initialScale: 1,
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="font-saira">
//         <ClientLayout>{children}</ClientLayout>
//       </body>
//     </html>
//   );
// }










































// app/layout.tsx

import type { Metadata, Viewport } from "next";
import "./globals.css";
import ClientLayout from "./clientlayout";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pinnacle Laboratory",
  description: "Southern California Certified",
  icons: {
    icon: [
      { url: "/Pinnacle_Icon_Square.ico?v=2", type: "image/x-icon" },
      { url: "/Pinnacle_Icon_16x16.ico?v=2", type: "image/x-icon", sizes: "16x16" },
    ],
    apple: { url: "/Pinnacle_Icon_apple_touch.ico?v=2", type: "image/x-icon" },
    shortcut: "/Pinnacle_Icon_Square.ico?v=2",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ GA Script - HEAD LOAD */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EK98PWLE96"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EK98PWLE96', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="font-saira">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
