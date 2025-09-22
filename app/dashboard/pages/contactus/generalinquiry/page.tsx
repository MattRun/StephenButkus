

// 'use client';
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Review from './Review'; // Import the Review component
// import SocialMedia from './SocialMedia';

// export default function GeneralInquiry() {
//   const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
//   const [status, setStatus] = useState('');
//   const [showAnimation, setShowAnimation] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!formData.name || !formData.email || !formData.message) {
//       setStatus('Please fill out all required fields.');
//       return;
//     }

//     // Send emails to both admin and user
//     await sendEmailToAdmin();
//     await sendEmailToUser();

//     // Show animation after email is sent
//     setShowAnimation(true);
//     setFormData({ name: '', email: '', phone: '', message: '' });

//     // Hide animation and redirect after 3 seconds
//     setTimeout(() => {
//       setShowAnimation(false);
//       window.location.href = '/dashboard/pages/contactus/';
//     }, 3000);
//   };

//   const sendEmailToUser = async () => {
//     const userConfirmationEmail = `
//       <p>Dear ${formData.name},</p>
//       <p>Thank you for reaching out to AEHS Training. We appreciate your inquiry and will get back to you as soon as we can.</p>
//       <p>If your message requires immediate attention, feel free to call us at (310) 400-6153 during business hours or reply to this email, and someone from our team will assist you shortly.</p>
//       <p>Best regards,</p>
//       <p><strong>Steve Vaughn</strong></p>
//       <p>AEHS Training | Full Company Name</p>
//       <p>Phone: (310) 400-6153</p>
//       <p>Email: <a href="mailto:info@pinnaclelab.com">info@pinnaclelab.com</a></p>
//       <p>Website: <a href="https://aehstraining.com">https://aehstraining.com</a></p>
//     `;

//     const body = {
//       text: `Dear ${formData.name},\n\nThank you for reaching out to AEHS Training...`,
//       to: formData.email,
//       subject: 'Thank you for reaching out to AEHS Training!',
//       html: userConfirmationEmail,
//     };

//     await fetch(`../api?text=${encodeURIComponent(body.text)}&to=${encodeURIComponent(body.to)}&subject=${encodeURIComponent(body.subject)}`, {
//       method: 'GET',
//     });
//   };

//   const sendEmailToAdmin = async () => {
//     const adminNotificationEmail = `
//       <h2>New General Inquiry Received</h2>
//       <p><strong>Sender's Name:</strong> ${formData.name}</p>
//       <p><strong>Sender's Email:</strong> ${formData.email}</p>
//       <p><strong>Sender's Phone:</strong> ${formData.phone || 'No phone number provided'}</p>
//       <p><strong>Message:</strong></p>
//       <blockquote style="font-style: italic; color: #555;">
//         ${formData.message}
//       </blockquote>
//     `;

//     const body = {
//       text: `New General Inquiry Received\n\nSender's Name: ${formData.name}\nSender's Email: ${formData.email}\nSender's Phone: ${formData.phone}\n\nMessage:\n"${formData.message}"\n\nPlease follow up with the customer as soon as possible.\n\nThis is an automated notification. Do not reply directly to this email.\n\nAEHS Training Team`,
//       to: 'info@pinnaclelab.com',
//       subject: `New General Inquiry from ${formData.name}`,
//       html: adminNotificationEmail,
//     };

//     await fetch(`../api?text=${encodeURIComponent(body.text)}&to=${encodeURIComponent(body.to)}&subject=${encodeURIComponent(body.subject)}`, {
//       method: 'GET',
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 font-sans px-4 lg:px-8 py-24 pb-0">
//       {/* Confirmation Animation */}
//       <AnimatePresence>
//         {showAnimation && (
//           <motion.div
//             className="fixed inset-0 bg-gray-900 flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             style={{ zIndex: 1000 }}
//           >
//             <div className="flex flex-col items-center">
//               <video
//                 src="/mailsent.mp4"
//                 autoPlay
//                 loop={false}
//                 muted
//                 style={{ width: 200, height: 200, borderRadius: '12px' }}
//               />
//               <motion.p
//                 className="text-white text-2xl mt-4"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//               >
//                 Message Sent!
//               </motion.p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Main Content */}
//       <div className="container mx-auto flex flex-col lg:flex-row w-full max-w-7xl">
//         {/* Contact Form Section */}
//         <motion.div
//           className="bg-white p-8 shadow-md rounded-lg w-full lg:w-2/3 mr-4 border border-gray-300"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h3 className="text-4xl font-bold mb-4 text-[#0056b3]">General Inquiry</h3>
//           <form onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#0056b3] text-black bg-gray-100"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#0056b3] text-black bg-gray-100"
//               />
//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Your Phone (Optional)"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#0056b3] text-black bg-gray-100"
//               />
//             </div>
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows={6}
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#0056b3] text-black bg-gray-100"
//             ></textarea>
//             <button
//               type="submit"
//               className="mt-4 bg-[#0056b3] text-white px-6 py-2 rounded hover:bg-blue-700 transition"
//             >
//               Send Message
//             </button>
//           </form>
//           {status && <p className="mt-4 text-center text-lg text-[#0056b3]">{status}</p>}
//         </motion.div>

//         {/* Sidebar with Contact Information */}
//         <div className="w-full lg:w-1/3 lg:pl-6 mt-8 lg:mt-0">
//           <div className="p-6 bg-white rounded-lg shadow-md border border-gray-300 text-black">
//             <h2 className="text-2xl font-bold mb-4 text-[#0056b3]">Contact Us</h2>
//             <p className="mb-2 font-semibold text-black"><strong>Academy of Environmental Health & Safety</strong></p>
//             <p className="mb-2 text-black">Office: <a href="tel:3109788281" className="text-[#0056b3]">(310) 400.6153</a></p>
//             {/* <p className="mb-2 text-black">Fax: <a href="fax:3102631853" className="text-[#0056b3]">(310) 263.1853</a></p> */}
//             <p className="mb-4 text-black">Email: <a href="mailto:info@pinnaclelab.com" className="text-[#0056b3]">info@pinnaclelab.com</a></p>
//             <h3 className="text-xl font-bold mt-4 text-black">Office Hours:</h3>
//             <p><strong>Monday - Friday</strong></p>
//             <p>8:00 a.m. to 5:00 p.m.</p>
//             <p><strong>Saturday - Sunday</strong></p>
//             <p>CLOSED</p>
//             {/* <p>Saturday</p>
//             <p>Classroom times may vary</p>
//             <p>Sunday</p>
//             <p>CLOSED</p> */}
//             <h3 className="text-xl font-bold mt-4 text-black">Training Facility/Classrooms</h3>
//             <p>15200 Grevillea Ave. Suite A-2</p>
//             <p>Lawndale, CA 90260</p>
//             </div>
//           </div>
//         </div>

//       {/* Full-Width Map Section */}
//       <div className="mt-12 bg-gray-100 py-8 rounded-md shadow-md px-24 mx-auto">
//   {/* <div className="container mx-auto px-28"> */}
//     <iframe
//       src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13247.370549329537!2d-118.354335!3d33.8937064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfeb4a8c89ec551d%3A0x57b07a05aeaa78e8!2sAcademy%20of%20Environmental%20Health%20and%20Safety%20(AEHS)!5e0!3m2!1sen!2sus!4v1731544118507!5m2!1sen!2sus"
//       width="100%"
//       height="450"
//       allowFullScreen=""
//       loading="lazy"
//       className="rounded-md"
//     ></iframe>
//   {/* </div> */}
// </div>


//       {/* Full-Width Review and Social Media Section */}
//       <div className="w-full py-6 mt-12">
//   <div className="container mx-auto">
//     <Review />
//     <div className="pb-0">
//       <SocialMedia />
//     </div>
//   </div>
// </div>

//     </div>
//   );
// }




"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Removed AnimatePresence import
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Review from "./Review";

interface FormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  message: string;
  howDidYouHear: string[];
}

export default function GeneralInquiry() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
    howDidYouHear: [],
  });
  const [status, setStatus] = useState<string>("");
  const [showAnimation, setShowAnimation] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      howDidYouHear: prev.howDidYouHear.includes(value)
        ? prev.howDidYouHear.filter((item) => item !== value)
        : [...prev.howDidYouHear, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill out all required fields.");
      return;
    }

    try {
      await sendEmailToAdmin();
      await sendEmailToUser();
      setShowAnimation(true);
      setTimeout(() => {
        setShowAnimation(false);
        setStatus("");
        router.push("/dashboard");
      }, 3000);
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      setStatus("Failed to send your inquiry. Please try again.");
    }
  };

  const sendEmailToAdmin = async () => {
    const adminHtml = `
      <h2>New General Inquiry Received</h2>
      <p><strong>Sender's Name:</strong> ${formData.name}</p>
      <p><strong>Sender's Email:</strong> ${formData.email}</p>
      <p><strong>Sender's Phone:</strong> ${formData.phone || "No phone number provided"}</p>
      <p><strong>Company Name:</strong> ${formData.companyName || "Not provided"}</p>
      <p><strong>How They Heard About Us:</strong> ${formData.howDidYouHear.length > 0 ? formData.howDidYouHear.join(", ") : "Not specified"}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="font-style: italic; color: #555;">
        ${formData.message}
      </blockquote>
    `;

    const adminSubject = `New General Inquiry from ${formData.name}`;

    const response = await fetch(
      `../api?text=${encodeURIComponent(adminHtml)}&to=info@pinnaclelab.com&subject=${encodeURIComponent(adminSubject)}&name=${encodeURIComponent(formData.name)}`,
      { method: "GET" }
    );

    if (!response.ok) throw new Error("Failed to send email to admin");
  };

  const sendEmailToUser = async () => {
    const userHtml = `
      <div style="font-family: 'Saira', sans-serif; line-height: 1.6; color: #333; background-color: #ECECEC; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <header style="background: linear-gradient(90deg, #16436F, #10b1b4); color: #ffffff; text-align: center; padding: 20px;">
            <img 
              src="https://pinnaclelab.com/pinnaclelab/Logos/logoemail.png"
              alt="Void Creatives Banner" 
              style="max-width: 100%; height: auto; border-radius: 5px;"
            />
          </header>
          <main style="padding: 20px;">
            <h2 style="color: #16436F; margin-top: 0;">Dear ${formData.name},</h2>
            <p>Thank you for reaching out to <strong>Void Creatives</strong>. We’ve received your inquiry and will respond promptly.</p>
            <p>Here’s what you sent us:</p>
            <blockquote style="font-style: italic; color: #555; margin: 20px 0; padding-left: 10px; border-left: 4px solid #16436F;">
              ${formData.message}
            </blockquote>
            ${formData.companyName ? `<p><strong>Your Company:</strong> ${formData.companyName}</p>` : ""}
            <p><strong>How You Found Us:</strong> ${formData.howDidYouHear.length > 0 ? formData.howDidYouHear.join(", ") : "Not specified"}</p>
            <p>Explore our <a href="https://pinnaclelab.com/dashboard/pages/faq" style="color: #16436F; text-decoration: none; font-weight: bold;">FAQ</a> while you wait!</p>
            <p>Talk to you soon,<br />Pinnacle Team</p>
          </main>
          <footer style="background-color: #f9f9f9; color: #777; padding: 10px; text-align: center; font-size: 14px;">
            <p style="margin: 0; font-weight: bold;">PinnacleLab</p>
            <p style="margin: 0;">15200 Grevillea Ave. Suite A-1, Lawndale, CA 90260</p>
            <p style="margin: 0;">Phone: <a href="tel:+13104319270" style="color: #16436F;">(310) 431-9270</a></p>
            <p style="margin: 0;">Website: <a href="https://pinnaclelab.com" style="color: #16436F;">pinnaclelab.com</a></p>
          </footer>
        </div>
      </div>
    `;

    const userSubject = "Thank You for Reaching Out to Void Creatives";

    const response = await fetch(
      `../api?text=${encodeURIComponent(userHtml)}&to=${encodeURIComponent(formData.email)}&subject=${encodeURIComponent(userSubject)}&name=${encodeURIComponent(formData.name)}`,
      { method: "GET" }
    );

    if (!response.ok) throw new Error("Failed to send email to user");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#16436F] to-[#10b1b4] font-sans px-4 lg:px-8 py-24 pb-0">
      {showAnimation && (
        <motion.div
          key="success-animation"
          className="fixed inset-0 bg-gray-900 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ zIndex: 1000 }}
        >
          <div className="flex flex-col items-center">
            <video
              src="/mailsent.mp4"
              autoPlay
              loop={false}
              muted
              style={{ width: 200, height: 200, borderRadius: "12px" }}
            />
            <motion.p
              className="text-white text-2xl mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Message Sent!
            </motion.p>
          </div>
        </motion.div>
      )}

      <div className="container mx-auto flex flex-col lg:flex-row w-full max-w-7xl">
        <motion.div
          className="bg-white p-8 shadow-md rounded-lg w-full lg:w-2/3 mr-4 border border-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-4xl font-bold mb-4 text-[#10b1b4]">General Inquiry</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#0056b3] text-black bg-gray-100"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#0056b3] text-black bg-gray-100"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#0056b3] text-black bg-gray-100"
              />
              <input
                type="text"
                name="companyName"
                placeholder="Your Company Name (Optional)"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#0056b3] text-black bg-gray-100"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message *"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-[#0056b3] text-black bg-gray-100"
              required
            ></textarea>
            <div className="mt-6">
              <p className="text-lg font-semibold text-black mb-2">How did you hear about us?</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "Google",
                  "Yelp",
                  "Social Media",
                  "Friend/Colleague",
                  "Website",
                  "Advertisement",
                  "Trade Show/Event",
                  "Email Campaign",
                  "Referral Program",
                  "Other",
                ].map((option) => (
                  <label key={option} className="flex items-center space-x-2 text-black">
                    <input
                      type="checkbox"
                      value={option}
                      checked={formData.howDidYouHear.includes(option)}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-[#10b1b4] border-gray-300 rounded focus:ring-[#0056b3]"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 bg-[#10b1b4] text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center text-lg text-[#0056b3]">{status}</p>}
        </motion.div>

        <div className="w-full lg:w-1/3 lg:pl-6 mt-8 lg:mt-0">
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-300 text-black">
            <h2 className="text-2xl font-bold mb-4 text-[#10b1b4]">Contact Us</h2>
            <p className="mb-2 font-semibold text-black"><strong>Void Creatives</strong></p>
            <p className="mb-2 text-black">Office: <a href="tel:3104319270" className="text-[#10b1b4]">(310)431-9270</a></p>
            <p className="mb-4 text-black">Email: <a href="mailto:info@pinnaclelab.com" className="text-[#10b1b4]">info@pinnaclelab.com</a></p>
            <h3 className="text-xl font-bold mt-4 text-black py-1">Office Hours:</h3>
            <p><strong>Monday - Friday</strong></p>
            <p>8:00 a.m. to 5:00 p.m.</p>
            <p><strong>Saturday - Sunday</strong></p>
            <p>Call for availability</p>
            <h3 className="text-xl font-bold mt-4 text-black">Laboratory Testing Centers</h3>
            <p>15200 Grevillea Ave. Suite A</p>
            <p>Lawndale, CA 90260</p>
          </div>
        </div>
      </div>

      <div className="mt-12 py-8 px-4 sm:px-12 mx-auto w-full">
        <div className="w-full h-64 sm:h-96 rounded-md overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.843152791432!2d-118.35704172478115!3d33.89369312608646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b5da8ee1c1b7%3A0x5679441e98c3a24!2sPinnacle%20Laboratory!5e0!3m2!1sen!2sus!4v1738105621914!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen={true}
            loading="lazy"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <div className="w-full py-6 mt-12">
        <div className="container mx-auto">
          <Review />
          <div className="pb-0">
            {/* <SocialMedia /> */}
          </div>
        </div>
      </div>
    </div>
  );
};