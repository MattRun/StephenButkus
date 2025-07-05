'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type CourseDetails = {
  name: string;
  price: string;
  description: string;
  location: string;
  nextSession: string;
  time: string;
};

interface CourseRegistrationProps {
  courseDetails: CourseDetails;
  onClose: () => void;
}

const CourseRegistration: React.FC<CourseRegistrationProps> = ({ courseDetails, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    course: courseDetails.name,
    date: '',
    additionalInfo: '',
    referralSource: '', // New field for "How Did You Hear About Us?"
  });

  const [, setShowPopup] = useState(true); 
  const [status, setStatus] = useState('');

  const courses = [
    {
      name: 'AHERA Asbestos Worker (Initial, English)',
      contactHours: 32,
      daysOffered: 'Mon-Thurs (Weekday Option), Weekend #1: Sat, Sun, Weekend #2: Sat, Sun',
      cost: '$500 ($35 multi-student discount available for Weekday Option), $650 ($35 multi-student discount available for Weekend Option)',
    },
    {
      name: 'AHERA Asbestos Worker (Refresher, English)',
      contactHours: 8,
      daysOffered: 'Saturdays',
      cost: '$150 ($10 multi-student discount available)',
    },
    {
      name: 'AHERA Contractor/Supervisor (Initial)',
      contactHours: 40,
      daysOffered: 'Mon-Fri (Weekday Option), Weekend #1: Sat, Sun, Weekend #2: Fri, Sat, Sun',
      cost: '$650 ($50 multi-student discount available for Weekday Option), $950 ($50 multi-student discount available for Weekend Option)',
    },
    {
      name: 'AHERA Contractor/Supervisor (Refresher)',
      contactHours: 8,
      daysOffered: 'Weekends',
      cost: '$150 ($10 multi-student discount available)',
    },
    {
      name: 'AHERA Building Inspector (Refresher)',
      contactHours: 4,
      daysOffered: 'Weekends (AM) & Mon-Fri (Evenings, 1730-2130)',
      cost: '$100',
    },
    {
      name: 'CDPH Lead Sampling Technician',
      contactHours: 8,
      daysOffered: 'Saturdays',
      cost: '$230 (Includes CDPH Fee)',
    },
    {
      name: 'NIOSH 582 Equivalency Course',
      contactHours: 30,
      daysOffered: 'Fri, Sat, Sun',
      cost: '$950 ($50 multi-student discount available)',
    },
    {
      name: 'Introduction to PLM Analysis',
      contactHours: 40,
      daysOffered: 'Fri, Sat, Sun, Mon, Tues',
      cost: '$1500',
    },
    {
      name: 'Advanced PLM Techniques',
      contactHours: 16,
      daysOffered: 'Sat, Sun',
      cost: '$850',
    },
    {
      name: 'Introduction to Mold Sampling',
      contactHours: 16,
      daysOffered: 'Sat, Sun',
      cost: '$950',
    },
    {
      name: 'Advanced Mold Sampling',
      contactHours: 16,
      daysOffered: 'Sat, Sun',
      cost: '$950',
    },
  ];
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.course) {
      setStatus('Please fill out all required fields.');
      return;
    }
  
    try {
      // Prepare email data
      const adminEmail = {
        to: 'info@pinnaclelab.com',
        from: { email: 'info@pinnaclelab.com', name: 'AEHS Training' },
        subject: 'New Course Registration',
        html: `
          <h2>New Course Registration</h2>
          <p><strong>First Name:</strong> ${formData.firstName}</p>
          <p><strong>Last Name:</strong> ${formData.lastName}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone || 'N/A'}</p>
          <p><strong>Course:</strong> ${formData.course}</p>
          <p><strong>Date:</strong> ${formData.date || 'N/A'}</p>
          <p><strong>Additional Info:</strong> ${formData.additionalInfo || 'N/A'}</p>
          <p><strong>How Did You Hear About Us:</strong> ${formData.referralSource || 'Not Provided'}</p>
        `,
      };
  
      const userEmail = {
        to: formData.email,
        from: { email: 'info@pinnaclelab.com', name: 'AEHS Training' },
        subject: 'Course Registration Confirmation',
        html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <header style="background-color: #0056b3; color: #ffffff; text-align: center; padding: 20px;">
            <h1 style="margin: 0; font-size: 24px;">Thank You for Registering!</h1>
          </header>
          <main style="padding: 20px;">
            <h2 style="color: #0056b3;">Hello ${formData.firstName},</h2>
            <p>Thank you for registering for <strong>${formData.course}</strong>. We're excited to have you on board!</p>
            <p>Below are the details of your registration:</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 16px;">
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Course</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${formData.course}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Date Desired</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${formData.date || 'To Be Confirmed'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Email</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${formData.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">Phone</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${formData.phone || 'Not Provided'}</td>
              </tr>
            </table>
            <p>If you have any questions or need further assistance, feel free to reach out to us at <a href="mailto:info@pinnaclelab.com" style="color: #0056b3;">info@pinnaclelab.com</a>.</p>
            <p style="color: #555;">Thank you again for choosing AEHS Training. We look forward to helping you achieve your goals!</p>
          </main>
          <footer style="background-color: #f9f9f9; color: #777; text-align: center; padding: 10px; font-size: 14px;">
            <p style="margin: 0;">Academy of Environmental Health & Safety</p>
            <p style="margin: 0;">15200 Grevillea Ave, Suite A-2, Lawndale, CA 90260</p>
            <p style="margin: 0;">Phone: <a href="tel:+13104006153" style="color: #0056b3;">(310) 400-6153</a></p>
            <p style="margin: 0;">Website: <a href="https://aehstraining.com" style="color: #0056b3;">aehstraining.com</a></p>
          </footer>
        </div>
      </div>
        `,
      };
  
      // Send emails through the backend API
      const response = await fetch('/dashboard/pages/api/send-registration-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminEmail, userEmail }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to send emails');
      }
  
      setStatus('Your registration has been submitted.');
      setFormData({ firstName: '', lastName: '', phone: '', email: '', course: '', date: '', additionalInfo: '', referralSource: ''  });
  
      setTimeout(() => {
        setShowPopup(false);
        setStatus('');
        if (onClose) onClose();
      }, 3000);
    } catch (error) {
      console.error('Error submitting registration:', error);
      setStatus('Failed to submit your registration. Please try again.');
    }
  };
  
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg shadow-lg w-full max-w-xl p-8 relative overflow-hidden"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
        >
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-black focus:outline-none"
            onClick={onClose} // Use the parent-provided `onClose` function
          >
            ✕
          </button>

            <h2 className="text-3xl font-bold text-blue-600 mb-6">
              {courseDetails?.name ? `Register for ${courseDetails.name}` : 'Course Registration'}
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-black">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Select Course</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none text-black"
                  style={{ height: 'auto' }}
                >
                  <option value="">-- Select a Course --</option>
                  {courses.map((course, index) => (
                    <option
                      key={index}
                      value={course.name}
                      style={{
                        whiteSpace: 'normal',
                        padding: '10px',
                        fontSize: '16px',
                      }}
                    >
                      {`${course.name} | ${course.contactHours} hrs | ${course.cost} | Days: ${course.daysOffered}`}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none text-black"
                />
              </div>

              <div className="mb-6 text-black">
                <label className="block text-gray-700 mb-2">Additional Information</label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  rows={4}
                  placeholder="Any additional questions or concerns?"
                ></textarea>
              </div>

              <div className="mb-6">
              <label className="block text-gray-700 mb-2">How Did You Hear About Us?</label>
              <select
                name="referralSource"
                value={formData.referralSource}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-600 focus:outline-none text-black"
              >
                <option value="">-- Select an Option --</option>
                <option value="Google">Google</option>
                <option value="Yelp">Yelp</option>
                <option value="Instagram">Instagram</option>
                <option value="X (Twitter)">X (Twitter)</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Pinnacle Laboratory">Pinnacle Laboratory</option>
                <option value="I Am A Current Student">I Am A Current Student</option>
                <option value="Word-of-Mouth">Word-of-Mouth</option>
              </select>
            </div>

              <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md font-bold hover:bg-blue-700 transition focus:ring-2 focus:ring-blue-600 focus:outline-none"
            >
              Submit Registration
            </button>
          </form>

          {status && (
            <motion.p className="mt-4 text-center text-green-600">{status}</motion.p>
          )}
        </motion.div>
        </motion.div>
      
    </AnimatePresence>
  );
};

// In CourseRegistration.tsx
export default CourseRegistration;
