
'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence for exit animation
import Link from 'next/link';

export default function GeneralInquiry() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');
  const [showAnimation, setShowAnimation] = useState(false); // State to control animation display

  const userConfirmationEmail = `
    <p>Dear ${formData.name},</p>
    <p>Thank you for reaching out to AEHS Training. We appreciate your inquiry and will get back to you as soon as we can.</p>
    <p>If your message requires immediate attention, feel free to call us at (123) 456-7890 during business hours or reply to this email, and someone from our team will assist you shortly.</p>
    <p>In the meantime, feel free to check out our <a href="https://aehstraining.com/dashboard/resources">Resources</a> section for more information on our courses and services.</p>
    <p>Best regards,</p>
    <p><strong>Steve Vaughn</strong></p>
    <p>AEHS Training | Full Company Name</p>
    <p>Phone: (310) 400-6153</p>
    <p>Email: <a href="mailto:info@pinnaclelab.com">info@pinnaclelab.com</a></p>
    <p>Website: <a href="https://aehstraining.com">https://aehstraining.com</a></p>
  `;

  const adminNotificationEmail = `
    <h2>New General Inquiry Received</h2>
    <p><strong>Sender's Name:</strong> ${formData.name}</p>
    <p><strong>Sender's Email:</strong> ${formData.email}</p>
    <p><strong>Sender's Phone:</strong> ${formData.phone || 'No phone number provided'}</p>
    <p><strong>Message:</strong></p>
    <blockquote style="font-style: italic; color: #555;">
      ${formData.message}
  `;

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill out all required fields.');
      return;
    }

    // Send two emails: one to the admin and one to the user
    await sendEmailToAdmin();
    await sendEmailToUser();

    // Show animation once email is sent
    setShowAnimation(true);

    // Reset the form data
    setFormData({ name: '', email: '', phone: '', message: '' });

    // Hide the animation and redirect after 3 seconds
    setTimeout(() => {
      setShowAnimation(false);
      window.location.href = '/dashboard/pages/contactus/';
    }, 3000); // Adjust time if needed
  };

  const sendEmailToUser = async () => {
    const body = {
      text: `Dear ${formData.name},\n\nThank you for reaching out to AEHS Training...`,
      to: formData.email,
      subject: 'Thank you for reaching out to AEHS Training!',
      html: userConfirmationEmail,
    };

    await fetch(`../api?text=${encodeURIComponent(body.text)}&to=${encodeURIComponent(body.to)}&subject=${encodeURIComponent(body.subject)}`, {
      method: 'GET',
    });
  };

  const sendEmailToAdmin = async () => {
    const body = {
      text: `New General Inquiry Received\n\nSender's Name: ${formData.name}\nSender's Email: ${formData.email}\nSender's Phone: ${formData.phone}\n\nMessage:\n"${formData.message}"\n\nPlease follow up with the customer as soon as possible.\n\nThis is an automated notification. Do not reply directly to this email.\n\nAEHS Training Team`,
      to: 'info@pinnaclelab.com',
      subject: `New General Inquiry from ${formData.name}`,
      html: adminNotificationEmail,
    };

    await fetch(`../api?text=${encodeURIComponent(body.text)}&to=${encodeURIComponent(body.to)}&subject=${encodeURIComponent(body.subject)}`, {
      method: 'GET',
    });
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <AnimatePresence>
        {showAnimation && (
          <motion.div
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
                style={{ width: 200, height: 200, borderRadius: '12px' }}
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
      </AnimatePresence>

      {/* Header Section */}
      <header className="bg-blue-700 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Other Inquiries</h1>
          <p className="mt-4 text-lg">Need to get in contact with someone to find out if aliens are real? We Might Have The Answers!</p>
        </div>
      </header>

      {/* Main Content with Background Image */}
      <div className="container mx-auto py-10 px-8 lg:px-6 flex">
        {/* Sidebar Navigation (Skinnier)
        <aside className="w-48 bg-blue-700 p-4 shadow-lg rounded-lg lg:sticky top-20 self-start">
          <h2 className="text-xl font-bold mb-4">Contact Categories</h2>
          <ul className="space-y-4">
            <li>
              <Link href="/dashboard/pages/contactus/generalinquiry" className="text-blue-100 hover:underline">
                General Inquiry
              </Link>
            </li>
            <li>
              <Link href="/dashboard/pages/contactus/mediarequests" className="text-blue-100 hover:underline">
                Media Requests
              </Link>
            </li>
            <li>
              <Link href="/dashboard/pages/contactus/reportingissues" className="text-blue-100 hover:underline">
                Reporting Issues
              </Link>
            </li>
            <li>
              <Link href="/dashboard/pages/contactus/otherinquiries" className="text-blue-100 hover:underline">
                Other Inquiries
              </Link>
            </li>
          </ul>
        </aside> */}

        {/* Contact Form Section Shifted Left */}
        <motion.div
          className="lg:col-span-2 bg-blue-500 p-8 shadow-lg rounded-lg flex-1 mr-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-white">Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-600 text-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-600 text-black"
              />
              {/* New phone field (optional) */}
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-600 text-black"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-blue-600 text-black"
            ></textarea>
            <button
              type="submit"
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center text-lg text-blue-600">{status}</p>}
        </motion.div>

        {/* Background Image on the Right Side */}
        <div className="hidden lg:block relative w-1/3">
          <img
            src="/AdobeStock_4.png"
            alt="Background Art"
            className="absolute top-0 right-0 w-full h-auto max-h-96 opacity-90 object-contain"
          />
        </div>
      </div>
    </div>
  );
}