// // app/layout.tsx

// import type { Metadata, Viewport } from "next";
// import "./globals.css";
// import ClientLayout from "./clientlayout";
// import Script from "next/script";
// import { playfair } from "./fonts/fonts";
// import FooterVoid from "./footer/Footer";
// import Header from "./header/headerj";

// <html lang="en" className={`${playfair.variable}`}></html>
// export const metadata: Metadata = {
//   title: "Void Creatives",
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
//       <head>
//         <Header />
//         {/* ✅ GA Script - HEAD LOAD */}
//         <Script
//           src="https://www.googletagmanager.com/gtag/js?id=G-EK98PWLE96"
//           strategy="afterInteractive"
//         />
//         <Script id="google-analytics" strategy="afterInteractive">
//           {`
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', 'G-EK98PWLE96', {
//               page_path: window.location.pathname,
//             });
//           `}
//         </Script>
//       </head>
//       <body className="font-saira">
//         <ClientLayout>{children}</ClientLayout>
//         <FooterVoid/>
//       </body>
//     </html>
//   );
// }






































// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import ClientLayout from "./clientlayout";
import Script from "next/script";
import { playfair } from "./fonts/fonts";
import FooterVoid from "./footer/Footer";
import Header from "./header/headerj";

export const metadata: Metadata = {
  title: "Void Creatives",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={playfair.variable}>
      <head>
        {/* GA (kept in <head>) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EK98PWLE96"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EK98PWLE96', { page_path: window.location.pathname });
          `}
        </Script>
      </head>
      <body className="font-saira">
        {/* Transparent OVERLAY header (non-sticky, scrolls away) */}
        <Header />

        {/* Your pages; put the hero first on each page so the header covers it */}
        <ClientLayout>{children}</ClientLayout>

        <FooterVoid />
      </body>
    </html>
  );
}
