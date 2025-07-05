'use client';

import { useState, useEffect } from 'react';
import styles from './certificateVerification.module.css';
import { motion } from 'framer-motion';

interface CertificateData {
  certificateNumber: string;
  studentName: string;
  courseName: string;
  issueDate: string;
  expirationDate: string;
  isValid: boolean;
}


const CertificateVerification = () => {
  const [certificateNumber, setCertificateNumber] = useState('');
  const [verificationResult, setVerificationResult] = useState<CertificateData | null>(null);

  const [error, setError] = useState('');
  const [isAdmin, setIsAdmin] = useState(false); // Check admin status
  const [userEmail, setUserEmail] = useState<string | null>(null);



  useEffect(() => {
    const checkAdminStatus = async () => {
      try {
        // Fetch user email from localStorage
        const email = localStorage.getItem('userEmail');
        setUserEmail(email);

        if (!email) return;

        // Call the API to get user details
        const res = await fetch(`/dashboard/pages/api/auth/user?email=${email}`);
        if (!res.ok) throw new Error('Failed to fetch user data');

        const user = await res.json();
        if (user.role === 'ADMIN') {
          setIsAdmin(true); // Mark user as admin
        }
      } catch (err) {
        console.error('Error checking admin status:', err);
      }
    };

    checkAdminStatus();
  }, []);

  // const handleVerification = async () => {
  //   if (!certificateNumber.trim()) return;
  
  //   try {
  //     console.log('Sending certificateNumber:', certificateNumber); // Debug log
  //     const res = await fetch(`/dashboard/pages/api/certificates/search?certificateNumber=${certificateNumber}`);
  //     if (!res.ok) throw new Error('Certificate not found or expired. Please contact support for further assistance.');
  
  //     const data = await res.json();
  //     console.log('Verification result:', data); // Debug log
  //     setVerificationResult(data);
  //     setError('');
  //   } catch (err) {
  //     console.error('Error verifying certificate:', err.message); // Debug log
  //     setError(err.message);
  //     setVerificationResult(null);
  //   }
  // };

  const handleVerification = async () => {
    if (!certificateNumber.trim()) return;
  
    try {
      const res = await fetch(`/dashboard/pages/api/certificates/search?certificateNumber=${certificateNumber}`);
      if (!res.ok) throw new Error('Certificate not found or expired. Please contact support for further assistance.');
  
      const data = await res.json();
  
      // Redirect to the dynamic route with the actual certificateNumber
      window.location.href = `/dashboard/pages/certificate/${certificateNumber}`;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
      
      setVerificationResult(null);
    }
  };
  
  
  
  

  return (
    <div className={`${styles.container} flex flex-col items-center p-8`}>
      <motion.div
        className="w-full max-w-2xl bg-gray-100 p-8 rounded-lg shadow-md"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Certificate Verification Page</h2>
        <p className="text-lg text-gray-700 mb-8">
          We are pleased to offer an electronic verification process in an effort to assist employers and regulatory agencies in determining the validity of student certificates issued by the Academy of Environmental Health & Safety.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Please enter the certificate number below (located at the bottom center of each course completion certificate issued by AEHS).
        </p>
        <label htmlFor="certificateNumber" className="block text-xl font-semibold text-gray-800 mb-2 text-black">
          AEHS Certificate Number:
        </label>
        <input
          type="text"
          id="certificateNumber"
          value={certificateNumber}
          onChange={(e) => setCertificateNumber(e.target.value)}
          className="w-full p-4 text-xl border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
        />
        <button
          onClick={handleVerification}
          className="w-full bg-blue-500 text-white font-semibold py-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Verify Certificate
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {verificationResult && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mt-6 p-4 bg-white border rounded-lg text-lg text-gray-800"
          >
            <h2 className="text-lg font-bold mb-2">Certificate Details</h2>
            <p><strong>Certificate Number:</strong> {verificationResult.certificateNumber}</p>
            <p><strong>Student Name:</strong> {verificationResult.studentName}</p>
            <p><strong>Course Name:</strong> {verificationResult.courseName}</p>
            <p><strong>Issue Date:</strong> {new Date(verificationResult.issueDate).toLocaleDateString()}</p>
            <p><strong>Expiration Date:</strong> {new Date(verificationResult.expirationDate).toLocaleDateString()}</p>
            <p><strong>Validity:</strong> {verificationResult.isValid ? 'Valid' : 'Expired'}</p>
          </motion.div>
        )}
        {/* Show admin button */}
        {isAdmin && (
          <button
            onClick={() => (window.location.href = '/dashboard/pages/admin/certification')}
            className="w-full mt-4 bg-green-500 text-white font-semibold py-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Admin: Manage Certificates
          </button>
        )}
        <p className="text-sm text-gray-600 mt-6">
          Please note, certificates issued prior to 5/1/2024 may not have a security seal attached; if you have any questions, please contact us at <a href="mailto:support@aehstraining.com" className="text-blue-500 underline">support@aehstraining.com</a> for assistance.
        </p>
      </motion.div>
    </div>
  );
};

export default CertificateVerification;
