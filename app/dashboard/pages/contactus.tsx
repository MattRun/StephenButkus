// // pages/contactus.tsx
// 'use client';
// import React, { useState } from 'react';
// import ContactUsForm from '../dashboard/contactus';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [notification, setNotification] = useState('');

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       // Send the form data to an API endpoint to handle email sending
//       const response = await fetch('/api/send-email', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setNotification('Your message has been sent successfully!');
//         setFormData({ name: '', email: '', message: '' }); // Clear form
//       } else {
//         setNotification('There was an issue sending your message. Please try again.');
//       }
//     } catch (error) {
//       setNotification('Error sending message. Please try again later.');
//     }
//   };

//   // Handle input change
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white flex justify-center items-center">
//       <div className="max-w-4xl w-full p-8 bg-gray-800 shadow-lg rounded-lg">
//         <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>

//         {notification && (
//           <div className="bg-green-500 text-white p-4 mb-4 rounded-lg text-center">
//             {notification}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="w-full md:w-1/2">
//               <label htmlFor="name" className="block text-sm font-medium mb-1">
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <div className="w-full md:w-1/2">
//               <label htmlFor="email" className="block text-sm font-medium mb-1">
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-sm font-medium mb-1">
//               Your Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               rows={6}
//               className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors duration-300"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
