
// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import Image from "next/image";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
// } from "react-icons/fa"; // Social media icons
// import { FaXTwitter } from "react-icons/fa6";

// const Footer = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [showPopup, setShowPopup] = useState(false); // New state to manage popup visibility

//   const handleSubscribe = async () => {
//     if (!email) {
//       setMessage("Please enter a valid email.");
//       return;
//     }

//     try {
//       const response = await fetch("/dashboard/pages/api/subscribe", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email }),
//       });

//       if (response.ok) {
//         setMessage("Thank you for subscribing!");
//         setEmail(""); // Clear the email field after successful subscription
//         setShowPopup(true); // Show the popup after successful subscription
//       } else {
//         setMessage("Subscription failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setMessage("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <footer className="bg-[#1c3b6e] text-white py-12">
//       {/* Newsletter Section */}
//       <div className="bg-gradient-to-r from-[#ececec] to-[#f0f0f0] py-8 px-4">
//         <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
//           {/* Text Section */}
//           <div className="mb-6 lg:mb-0 py-8">
//             <h2 className="text-2xl lg:text-3xl font-bold text-[#1c3b6e] mb-2">
//               Join our Newsletter!
//             </h2>
//             <p className="text-gray-700 text-lg">
//               Stay in the loop with everything you need to know.
//             </p>
//           </div>
//           {/* Subscription Form */}
//           <div className="flex items-center">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="py-2 px-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:ring-blue-300 text-gray-800 w-64" // Made the input field slightly longer
//             />
//             <button
//               onClick={handleSubscribe}
//               className="bg-[#1c3b6e] hover:bg-[#24529c] text-white py-2 px-6 rounded-r-lg transition"
//             >
//               Subscribe
//             </button>
//           </div>
//         </div>
//         {/* Message Section */}
//         {message && (
//           <p className="text-center mt-4 text-sm text-gray-700">{message}</p>
//         )}
//       </div>

//       {/* Popup Section */}
//       {showPopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-[#1d3b6e] w-22/12 md:w-4/3 lg:w-2/1 p-16 rounded-lg shadow-lg flex">
//             {/* Image Section */}
//             <div className="flex-none w-1/2 pr-4">
//               <Image
//                 src="/AdobeStock_1.png"
//                 alt="Thank you for subscribing"
//                 width={500}
//                 height={500}
//                 className="rounded-lg"
//               />
//             </div>
//             {/* Text Section */}
//             <div className="flex-grow pl-4">
//               <h2 className="text-4xl font-bold mb-4">
//                 Thank You for Subscribing!
//               </h2>
//               <h3 className="text-3xl font-semibold mb-2">
//                 Stay tuned for updates!
//               </h3>
//               <p className="text-lg text-gray-200">
//                 Look out for our emails with upcoming course information,
//               </p>
//               <p className="text-lg text-gray-200">
//                 exclusive deals, and more. 
//               </p>
//               <p className="text-lg text-gray-200">
//                We are excited to have you with us!
//               </p>
//               <button
//                 onClick={() => setShowPopup(false)}
//                 className="mt-6 bg-[#1c3b6e] hover:bg-[#24529c] text-white py-2 px-4 rounded-lg transition"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Footer Links Section */}
//       <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
//         {/* Company Section */}
//         <div>
//           <h3 className="text-2xl font-bold mb-6">Company</h3>
//           <ul>
//             <li className="mb-2">
//               <Link
//                 href="/dashboard/pages/about/aehsinfo"
//                 className="hover:text-gray-400 transition"
//               >
//                 About Us
//               </Link>
//             </li>
//             <li className="mb-2">
//               <Link
//                 href="/dashboard/pages/about/instructorprofiles"
//                 className="hover:text-gray-400 transition"
//               >
//                 Instructors
//               </Link>
//             </li>
//             <li className="mb-2">
//               <Link
//                 href="/dashboard/pages/contactus/generalinquiry"
//                 className="hover:text-gray-400 transition"
//               >
//                 Contact Us
//               </Link>
//             </li>
//             <li className="mb-2">
//               <Link
//                 href="/dashboard/pages/privacypolicy"
//                 className="hover:text-gray-400 transition"
//               >
//                 Privacy Policy
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Resources Section */}
//         <div>
//           <h3 className="text-2xl font-bold mb-6">Resources</h3>
//           <ul>
//             <li className="mb-2">
//               <Link
//                 href="/dashboard/pages/resources/professionalresources"
//                 className="hover:text-gray-400 transition"
//               >
//                 Resources
//               </Link>
//             </li>
//             <li className="mb-2">
//               <Link
//                 href="/dashboard/pages/about/accreditation"
//                 className="hover:text-gray-400 transition"
//               >
//                 Accreditations
//               </Link>
//             </li>
//             <li className="mb-2">
//               <Link
//                 href="/dashboard/pages/calendar"
//                 className="hover:text-gray-400 transition"
//               >
//                 Calendar/Schedule
//               </Link>
//             </li>
//             <li className="mb-2">
//               <Link
//                 href="/dashboard/pages/resources/faq"
//                 className="hover:text-gray-400 transition"
//               >
//                 FAQ
//               </Link>
//             </li>
//             <li className="mb-2">
//               <Link
//                 href="/dashboard/pages/contactus/generalinquiries"
//                 className="hover:text-gray-400 transition"
//               >
//                 Support
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Product Section */}
//         <div>
//           <h3 className="text-2xl font-bold mb-6">Product</h3>
//           <ul>
//             <li className="mb-2">
//               <Link
//                 href="/dashboard/pages/training/allcourses"
//                 className="hover:text-gray-400 transition"
//               >
//                 All Courses
//               </Link>
//             </li>
//             <li className="mb-2">
//               <Link
//                 href="/dashboard/pages/upcomingcourses"
//                 className="hover:text-gray-400 transition"
//               >
//                 Upcoming Courses
//               </Link>
//             </li>
//             <li className="mb-2">
//               <Link
//                 href="/dashboard/pages/auth/signup"
//                 className="hover:text-gray-400 transition"
//               >
//                 Sign Up
//               </Link>
//             </li>
//             <li className="mb-2">
//               <Link
//                 href="/dashboard/pages/auth/signin"
//                 className="hover:text-gray-400 transition"
//               >
//                 Sign In
//               </Link>
//             </li>
//             <li className="mb-2">
//               <Link
//                 href="/dashboard/comingsoon"
//                 className="hover:text-gray-400 transition"
//               >
//                 Demo Course
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Section */}
//         <div>
//           <h3 className="text-2xl font-bold mb-6">Contact</h3>
//           <p className="mb-2">
//             <strong className="text-lg underline">Email:{" "}</strong>
//             <a
//               href="mailto:info@pinnaclelab.com"
//               className="text-white-600 hover:text-gray-300"
//             >
//               info@pinnaclelab.com
//             </a>
//           </p>
//           <p className="mb-2">
//            <strong className="text-lg underline"> Phone:{" "} </strong>
//             <a
//               href="tel:+13104006153"
//               className="text-white-600 hover:text-gray-300"
//             >
//               (310) 431-9270
//             </a>
//           </p>
//           <p className="mb-2">
//             <a
//               href="https://www.google.com/maps/search/?api=1&query=15200+Grevillea+Ave+Ste+A-2+Lawndale+CA+90260"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-white-600 hover:text-gray-300"
//             >
//               15200 Grevillea Avenue, Suite A-1, Lawndale, CA 90260
//             </a>
//           </p>
//           <p className="mb-2 py-4">
//             <strong className="text-lg underline">Office Hours</strong>
//             <ul>Monday - Friday</ul>
//             <ul>~ 8:30am-5:00pm ~</ul>
//             <ul>~ Saturday - Sunday </ul>
//             <ul>~ CLOSED ~</ul>
//           </p>
//         </div>
//       </div>

//       {/* Social Media Section */}
//       <div className="mt-12 flex justify-center space-x-6">
//         <Link
//           href="https://www.facebook.com/profile.php?id=61567087595623"
//           target="_blank"
//           className="text-white hover:text-blue-400 transition"
//         >
//           <FaFacebookF size={24} />
//         </Link>
//         <Link
//           href="https://x.com/AEHS_Training"
//           target="_blank"
//           className="text-white hover:text-gray-800 transition"
//         >
//           <FaXTwitter size={24} />
//         </Link>
//         <Link
//           href="https://www.linkedin.com/company/aehs-training/"
//           target="_blank"
//           className="text-white hover:text-blue-400 transition"
//         >
//           <FaLinkedinIn size={24} />
//         </Link>
//         <Link
//           href="https://www.instagram.com/aehstraining/"
//           target="_blank"
//           className="text-white hover:text-pink-400 transition"
//         >
//           <FaInstagram size={24} />
//         </Link>
//       </div>
//       {/* Legal Compliance Section */}
//       <div className="max-w-7xl mx-auto mt-12 px-6 md:px-8 lg:px-12 text-sm text-gray-400">
//         <h3 className="text-lg font-bold text-white mb-4">Legal Compliance</h3>
//         <p>
//           The Academy of Environmental Health & Safety operates in accordance
//           with state and federal regulations, including but not limited to:
//         </p>
//         <ul className="list-disc list-inside mt-2">
//           <li>
//             California Code of Regulations, Title 8, governing occupational
//             safety and health.
//           </li>
//           <li>
//             Required certifications for asbestos, mold, lead, and hazardous
//             materials training.
//           </li>
//         </ul>
//         <p className="mt-2">
//           For more details about our legal obligations and how they impact your
//           training or certification, contact us at{" "}
//           <a
//             href="mailto:info@pinnaclelab.com"
//             className="text-blue-400 hover:text-blue-300"
//           >
//             info@pinnaclelab.com
//           </a>
//           .
//         </p>
//       </div>
//       {/* Logo and Copyright Section */}
//       <div className="mt-12 flex flex-col items-center">
//         <div className="mb-6">
//           <Image
//             src="/AEHS_Logo.png"
//             alt="AEHS Logo"
//             width={80}
//             height={80}
//             className="opacity-80 hover:opacity-100 transition-opacity duration-300"
//           />
//         </div>
//         <div className="text-center text-sm w-full">
//           <p>
//             © {new Date().getFullYear()} Pinnacle Laboratory. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"; // Social media icons
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-16 bg-[url('/pinnaclelab/art/Background_Mountain_Blue.png')] bg-cover bg-center bg-[#10b1b4]">
      {/* Contact Details Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Location */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Location</h3>
          <p className="mb-2">
            15200 Grevillea Avenue, Suite A-1 <br />
            Lawndale, CA 90260
          </p>
          <div className="relative overflow-hidden rounded-lg shadow-lg mt-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.843152791432!2d-118.35704172478115!3d33.89369312608646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b5da8ee1c1b7%3A0x5679441e98c3a24!2sPinnacle%20Laboratory!5e0!3m2!1sen!2sus!4v1738105621914!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <p className="mb-2">
            <strong>Phone:</strong>{" "}
            <a href="tel:+13104319270" className="relative group text-white font-medium">
              (310) 431-9270
              <span
                className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#10b1b4] group-hover:w-full transition-all duration-500"
              ></span>
            </a>
          </p>
          <p className="mb-2">
            <strong>Office Hours:</strong>
          </p>
          <p className="text-base">
  <span className="font-semibold text-lg">Mon – Fri:</span> 8:30 AM to 5:00 PM
</p>
<p className="text-base">
  <span className="font-semibold text-lg">Sat & Sun:</span> Call for Availability
</p>

        </div>

        {/* Quick Links */}
        <div>
  <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
  <ul>
    {[
      { label: "Home", path: "/dashboard" },
      { label: "About us", path: "/dashboard/pages/about/meetourteam" },
      { label: "Chain of Custody Forms", path: "/dashboard/pages/chainofcustody" },
      { label: "Accreditation", path: "/dashboard/pages/about/accreditation" },
      { label: "Training", path: "/dashboard/pages/training" },
      { label: "Shop", path: "/dashboard/pages/products/allproducts" },
      { label: "Contact Us", path: "/dashboard/pages/contactus/generalinquiry" },
    ].map((link, index) => (
      <li key={index} className="mb-2">
        <Link href={link.path} className="relative group text-white font-medium">
          {link.label}
          {/* Underline Animation */}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500"></span>
        </Link>
      </li>
    ))}

    {/* External link opens in a new tab */}
    <li className="mb-2">
      <a
        href="https://limsexpressplus.com/software/html5.html?user=*PinnacleReports&pwd=NscK45v2!Cr"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group text-white font-medium"
      >
        View your Results Online!
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500"></span>
      </a>
    </li>
  </ul>
</div>

      </div>

      {/* Social Media Section */}
      <div className="mt-12 flex justify-center space-x-6">
        {[
          {
            href: "https://www.facebook.com/profile.php?id=100092455441130",
            icon: <FaFacebookF size={24} />,
          },
          // {
          //   href: "https://x.com/pinnaclelabCA",
          //   icon: <FaXTwitter size={24} />,
          // },
          {
            href: "https://www.linkedin.com/company/pinnacle-laboratory",
            icon: <FaLinkedinIn size={24} />,
          },
          {
            href: "https://www.instagram.com/pinnaclelaboratory/",
            icon: <FaInstagram size={24} />,
          },
        ].map((social, index) => (
          <Link key={index} href={social.href} target="_blank" className="relative group text-white">
            {social.icon}
            {/* Underline Animation */}
            <span
              className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#10b1b4] group-hover:w-full transition-all duration-500"
            ></span>
          </Link>
        ))}
      </div>

      {/* Privacy Policy */}
      <div className="text-center mt-12 text-sm text-gray-300">
        <Link href="/privacy-policy" className="relative group text-white font-medium">
          Privacy Policy
          <span
            className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#10b1b4] group-hover:w-full transition-all duration-500"
          ></span>
        </Link>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 flex flex-col items-center">
        <Image
          src="/pinnaclelab/Logos/Logo_Long_no_bg.png"
          alt="Pinnacle Laboratory Logo"
          width={100}
          height={40}
          className="opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
        <p className="text-center text-sm mt-4">
          © {new Date().getFullYear()} Pinnacle Laboratory. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
















// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import Image from "next/image";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaInstagram,
// } from "react-icons/fa"; // Social media icons
// import { FaXTwitter } from "react-icons/fa6";

// const Footer = () => {
//   const [subscribeEmail, setSubscribeEmail] = useState("");
//   const [subscribeMessage, setSubscribeMessage] = useState("");
//   const [showSubscribePopup, setShowSubscribePopup] = useState(false);
//   const [popupData, setPopupData] = useState({
//     title: "",
//     subheading: "",
//     text: "",
//     imageUrl: "",
//   });

//   const handleSubscribe = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!subscribeEmail) {
//       setSubscribeMessage("Please enter a valid email.");
//       return;
//     }
//     try {
//       const response = await fetch("/api/subscribe", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email: subscribeEmail }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         setSubscribeMessage("Thank you for subscribing!");
//         setPopupData(data.popup);
//         setShowSubscribePopup(true);
//         setSubscribeEmail("");
//       } else {
//         setSubscribeMessage(data.error || "Subscription failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       setSubscribeMessage("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <footer className="py-16 bg-[url('/pinnaclelab/art/Background_Mountain_Blue.png')] bg-cover bg-center bg-[#10b1b4]">
//       {/* Subscribe Section at the Top */}
//       <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 mb-12">
//         <div className="bg-gradient-to-r from-[#ececec] to-[#f0f0f0] py-8 px-4 rounded-lg">
//           <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
//             <div className="mb-6 lg:mb-0">
//               <h2 className="text-2xl lg:text-3xl font-bold text-[#1c3b6e] mb-2">
//                 Join our Newsletter!
//               </h2>
//               <p className="text-gray-700 text-lg">
//                 Stay updated with the latest news and exclusive offers from Pinnacle Laboratory.
//               </p>
//             </div>
//             <form onSubmit={handleSubscribe} className="flex items-center">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 value={subscribeEmail}
//                 onChange={(e) => setSubscribeEmail(e.target.value)}
//                 className="py-2 px-4 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:ring-blue-300 text-gray-800 w-64"
//               />
//               <button
//                 type="submit"
//                 className="bg-[#1c3b6e] hover:bg-[#24529c] text-white py-2 px-6 rounded-r-lg transition"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//           {subscribeMessage && (
//             <p className="text-center mt-4 text-sm text-gray-700">{subscribeMessage}</p>
//           )}
//         </div>
//       </div>

//       {/* Contact Details, Quick Links, etc. */}
//       <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
//         {/* Location */}
//         <div>
//           <h3 className="text-2xl font-bold mb-4">Location</h3>
//           <p className="mb-2">
//             15200 Grevillea Avenue, Suite A-1 <br />
//             Lawndale, CA 90260
//           </p>
//           <div className="relative overflow-hidden rounded-lg shadow-lg mt-8">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.843152791432!2d-118.35704172478115!3d33.89369312608646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b5da8ee1c1b7%3A0x5679441e98c3a24!5e0!3m2!1sen!2sus!4v1738105621914!5m2!1sen!2sus"
//               width="100%"
//               height="200"
//               style={{ border: 0 }}
//               allowFullScreen
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             ></iframe>
//           </div>
//         </div>

//         {/* Contact */}
//         <div>
//           <h3 className="text-2xl font-bold mb-4">Contact</h3>
//           <p className="mb-2">
//             <strong>Phone:</strong>{" "}
//             <a href="tel:+13104319270" className="relative group text-white font-medium">
//               (310) 431-9270
//               <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#10b1b4] group-hover:w-full transition-all duration-500"></span>
//             </a>
//           </p>
//           <p className="mb-2">
//             <strong>Office Hours:</strong>
//           </p>
//           <p>Mon - Fri: 8:30 AM to 5:00 PM</p>
//           <p>Sat, Sun: Closed</p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
//           <ul>
//             {[
//               { label: "Home", path: "/dashboard" },
//               { label: "About us", path: "/dashboard/pages/about/meetourteam" },
//               { label: "Chain of Custody Forms", path: "/dashboard/pages/chainofcustody" },
//               { label: "Accreditation", path: "/dashboard/pages/about/accreditation" },
//               { label: "Training", path: "/dashboard/pages/training" },
//               { label: "Shop", path: "/dashboard/pages/products/allproducts" },
//               { label: "Contact Us", path: "/dashboard/pages/contactus/generalinquiry" },
//             ].map((link, index) => (
//               <li key={index} className="mb-2">
//                 <Link href={link.path} className="relative group text-white font-medium">
//                   {link.label}
//                   <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500"></span>
//                 </Link>
//               </li>
//             ))}
//             <li className="mb-2">
//               <a
//                 href="https://limsexpressplus.com/software/html5.html"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="relative group text-white font-medium"
//               >
//                 View your Results Online!
//                 <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-500"></span>
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Social Media Section */}
//       <div className="mt-12 flex justify-center space-x-6">
//         {[
//           {
//             href: "https://www.facebook.com/profile.php?id=100092455441130",
//             icon: <FaFacebookF size={24} />,
//           },
//           {
//             href: "https://x.com/pinnaclelabCA",
//             icon: <FaXTwitter size={24} />,
//           },
//           {
//             href: "https://www.linkedin.com/company/pinnacle-laboratory",
//             icon: <FaLinkedinIn size={24} />,
//           },
//           {
//             href: "https://www.instagram.com/pinnaclelaboratory/",
//             icon: <FaInstagram size={24} />,
//           },
//         ].map((social, index) => (
//           <Link key={index} href={social.href} target="_blank" className="relative group text-white">
//             {social.icon}
//             <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#10b1b4] group-hover:w-full transition-all duration-500"></span>
//           </Link>
//         ))}
//       </div>

//       {/* Privacy Policy */}
//       <div className="text-center mt-12 text-sm text-gray-300">
//         <Link href="/privacy-policy" className="relative group text-white font-medium">
//           Privacy Policy
//           <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#10b1b4] group-hover:w-full transition-all duration-500"></span>
//         </Link>
//       </div>

//       {/* Footer Bottom */}
//       <div className="mt-12 flex flex-col items-center">
//         <Image
//           src="/pinnaclelab/Logos/Logo_Long_no_bg.png"
//           alt="Pinnacle Laboratory Logo"
//           width={100}
//           height={40}
//           className="opacity-80 hover:opacity-100 transition-opacity duration-300"
//         />
//         <p className="text-center text-sm mt-4">
//           © {new Date().getFullYear()} Pinnacle Laboratory. All rights reserved.
//         </p>
//       </div>

//       {/* Popup Subscription Confirmation */}
//       {showSubscribePopup && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-[#1d3b6e] w-11/12 md:w-3/4 lg:w-1/2 p-8 rounded-lg shadow-lg flex flex-col items-center">
//             {popupData.imageUrl && (
//               <Image
//                 src={popupData.imageUrl}
//                 alt="Subscription Confirmation"
//                 width={100}
//                 height={100}
//                 className="rounded-full mb-4"
//               />
//             )}
//             <h2 className="text-3xl font-bold mb-2 text-white">{popupData.title}</h2>
//             <h3 className="text-2xl mb-4 text-white">{popupData.subheading}</h3>
//             <p className="text-white text-center mb-6">{popupData.text}</p>
//             <button
//               onClick={() => setShowSubscribePopup(false)}
//               className="bg-[#1c3b6e] hover:bg-[#24529c] text-white py-2 px-4 rounded-lg transition"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </footer>
//   );
// };

// export default Footer;
