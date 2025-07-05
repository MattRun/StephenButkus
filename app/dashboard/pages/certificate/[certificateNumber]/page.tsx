'use client';

import { useEffect, useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
interface Certificate {
  studentName: string;
  courseName: string;
  issueDate: string;
  expirationDate: string;
  certificateNumber: string;
  securitySeal?: string;
}


const CertificatePage = ({ params }: { params: { certificateNumber: string } }) => {
  const { certificateNumber } = params;
  const [certificate, setCertificate] = useState<Certificate | null>(null);

  const [error, setError] = useState('');
  const certificateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const res = await fetch(`/dashboard/pages/api/certificates/search?certificateNumber=${certificateNumber}`);
        if (!res.ok) throw new Error('Certificate not found.');

        const data = await res.json();
        setCertificate(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      }
    }
      

    fetchCertificate();
  }, [certificateNumber]);

  const downloadCertificate = async () => {
    if (!certificateRef.current) return;

    const canvas = await html2canvas(certificateRef.current);
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
    pdf.save(`Certificate_${certificateNumber}.pdf`);
  };

  if (error) return <div className="text-red-500">Error: {error}</div>;

  if (!certificate) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center p-6 text-black">
      <div
        ref={certificateRef}
        className="bg-white border border-gray-300 shadow-lg px-10 py-12 max-w-5xl relative rounded-md"
      >
        {/* Certificate Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-700 uppercase tracking-wide">
            The Information below has been verified by AEHS:
          </h2>
          {/* <p className="text-sm text-gray-600">15200 Grevillea Avenue, Suite A-2, Lawndale, CA 90260</p> */}
        </div>

        {/* Certificate Title */}
        {/* <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold uppercase text-blue-800">
            Certificate of Completion
          </h1>
          <p className="text-xl text-gray-700 italic mt-2">This certifies that</p>
        </div> */}

        {/* Student Name */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold uppercase text-gray-800">{certificate.studentName}</h2>
          <h2 className="text-3xl font-semibold uppercase text-gray-800">{certificate.courseName}</h2>
        </div>

        {/* Course Name and Details */}
        <div className="text-center mb-12">
          <p className="text-5xl text-green-600 font-bold">VERIFIED</p>
        </div>

        {/* Issue and Expiration Dates */}
        <div className="flex justify-between items-center mt-12 px-6">
          <div className="text-left">
            <p className="text-lg text-gray-700 py-4">
              <strong>Issue Date:</strong> {new Date(certificate.issueDate).toLocaleDateString()}
            </p>
            <p className="text-lg text-gray-700">
              <strong>Expiration Date:</strong> {new Date(certificate.expirationDate).toLocaleDateString()}
            </p>
          </div>
          <div className="text-right">
          <p className="text-lg text-gray-700 mt-2 text-right">
          <span className="font-bold">Certificate Number:</span> {certificate.certificateNumber}
          </p>
            <p className="text-lg text-gray-700">
              <strong>Security Seal Number:</strong> {certificate.securitySeal || 'N/A'}
            </p>
          </div>
        </div>
        <div className="text-center mb-12 py-4">
          <div className='py-2'>
          <strong>For Questions Regarding verification, please contact </strong>
          <p>support@aehstraining.com</p>
          </div>
          </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-10 right-10 flex justify-between py-4">
          <p className="text-sm text-gray-500">© 2024 AEHS Training, All Rights Reserved</p>
          <p className="text-sm text-gray-500">www.AEHSTraining.com</p>
        </div>
      </div>

      {/* Download Button */}
      <button
        onClick={downloadCertificate}
        className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        Download Certificate
      </button>
    </div>
  );
};

export default CertificatePage;
