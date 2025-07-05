// 'use client';

// import { useState, useEffect } from 'react';

// const AdminCertificates = () => {
//   const [certificates, setCertificates] = useState([]);
//   const [formData, setFormData] = useState({
//     certificateNumber: '',
//     studentName: '',
//     courseName: '',
//     courseID: '',
//     issueDate: '',
//     expirationDate: '',
//     securitySeal: '',
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState<number | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);

//   const fetchCertificates = async () => {
//     setError(null);
//     try {
//       const adminEmail = localStorage.getItem('userEmail'); // Assuming email is stored in localStorage after login
//       const res = await fetch(`/dashboard/pages/api/certificates?email=${adminEmail}`);
  
//       if (!res.ok) throw new Error('Failed to fetch certificates');
//       const data = await res.json();
//       setCertificates(data);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setSuccessMessage(null);
  
//     const adminEmail = localStorage.getItem('userEmail');
//     const method = isEditing ? 'PUT' : 'POST';
  
//     const payload = isEditing
//       ? { email: adminEmail, id: editId, updateData: formData }
//       : { email: adminEmail, certificateData: formData };
  
//     try {
//       const res = await fetch('/dashboard/pages/api/certificates', {
//         method,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });
  
//       if (!res.ok) throw new Error('Failed to save certificate');
  
//       const successMessage = isEditing
//         ? 'Certificate updated successfully!'
//         : 'Certificate added successfully!';
//       setSuccessMessage(successMessage);
  
//       fetchCertificates();
//       setFormData({
//         certificateNumber: '',
//         studentName: '',
//         courseName: '',
//         courseID: '',
//         issueDate: '',
//         expirationDate: '',
//         securitySeal: '',
//       });
//       setIsEditing(false);
//       setEditId(null);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleDelete = async (id: number) => {
//     setError(null);
//     setSuccessMessage(null);

//     const adminEmail = localStorage.getItem('userEmail');

//     try {
//       const res = await fetch('/dashboard/pages/api/certificates', {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: adminEmail, id }),
//       });

//       if (!res.ok) throw new Error('Failed to delete certificate');

//       setSuccessMessage('Certificate deleted successfully!');
//       fetchCertificates();
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleEdit = (certificate: any) => {
//     setIsEditing(true);
//     setEditId(certificate.id);
//     setFormData({
//       certificateNumber: certificate.certificateNumber,
//       studentName: certificate.studentName,
//       courseName: certificate.courseName,
//       courseID: certificate.courseID,
//       issueDate: certificate.issueDate.split('T')[0],
//       expirationDate: certificate.expirationDate?.split('T')[0] || '',
//       securitySeal: certificate.securitySeal,
//     });
//   };

//   useEffect(() => {
//     fetchCertificates();
//   }, []);

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6">Manage Certificates</h1>

//       {error && <p className="text-red-500">{error}</p>}
//       {successMessage && <p className="text-green-500">{successMessage}</p>}

//       <form onSubmit={handleSubmit} className="mb-6">
//         <input
//           type="text"
//           placeholder="Certificate Number"
//           value={formData.certificateNumber}
//           onChange={(e) => setFormData({ ...formData, certificateNumber: e.target.value })}
//           className="block w-full border rounded px-4 py-2 mb-2"
//         />
//         <input
//           type="text"
//           placeholder="Student Name"
//           value={formData.studentName}
//           onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
//           className="block w-full border rounded px-4 py-2 mb-2"
//         />
//         <input
//           type="text"
//           placeholder="Course Name"
//           value={formData.courseName}
//           onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
//           className="block w-full border rounded px-4 py-2 mb-2"
//         />
//         <input
//           type="text"
//           placeholder="Course ID"
//           value={formData.courseID}
//           onChange={(e) => setFormData({ ...formData, courseID: e.target.value })}
//           className="block w-full border rounded px-4 py-2 mb-2"
//         />
//         <input
//           type="date"
//           placeholder="Issue Date"
//           value={formData.issueDate}
//           onChange={(e) => setFormData({ ...formData, issueDate: e.target.value })}
//           className="block w-full border rounded px-4 py-2 mb-2"
//         />
//         <input
//           type="date"
//           placeholder="Expiration Date"
//           value={formData.expirationDate}
//           onChange={(e) => setFormData({ ...formData, expirationDate: e.target.value })}
//           className="block w-full border rounded px-4 py-2 mb-2"
//         />
//         <input
//           type="text"
//           placeholder="Security Seal"
//           value={formData.securitySeal}
//           onChange={(e) => setFormData({ ...formData, securitySeal: e.target.value })}
//           className="block w-full border rounded px-4 py-2 mb-2"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white px-4 py-2 rounded"
//         >
//           {isEditing ? 'Update Certificate' : 'Add Certificate'}
//         </button>
//       </form>

//       <table className="table-auto w-full border-collapse border border-gray-300">
//         <thead>
//           <tr>
//             <th className="border px-4 py-2">Certificate Number</th>
//             <th className="border px-4 py-2">Student Name</th>
//             <th className="border px-4 py-2">Course Name</th>
//             <th className="border px-4 py-2">Course ID</th>
//             <th className="border px-4 py-2">Issue Date</th>
//             <th className="border px-4 py-2">Expiration Date</th>
//             <th className="border px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {certificates.map((certificate) => (
//             <tr key={certificate.id}>
//               <td className="border px-4 py-2">{certificate.certificateNumber}</td>
//               <td className="border px-4 py-2">{certificate.studentName}</td>
//               <td className="border px-4 py-2">{certificate.courseName}</td>
//               <td className="border px-4 py-2">{certificate.courseID}</td>
//               <td className="border px-4 py-2">
//                 {new Date(certificate.issueDate).toLocaleDateString()}
//               </td>
//               <td className="border px-4 py-2">
//                 {certificate.expirationDate
//                   ? new Date(certificate.expirationDate).toLocaleDateString()
//                   : 'N/A'}
//               </td>
//               <td className="border px-4 py-2">
//                 <button
//                   onClick={() => handleEdit(certificate)}
//                   className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(certificate.id)}
//                   className="bg-red-500 text-white px-2 py-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AdminCertificates;

'use client';

import { useState, useEffect } from 'react';
interface Certificate {
  id: number; // Adjust to `string` if your ID is a string
  certificateNumber: string;
  studentName: string;
  courseName: string;
  courseID: string;
  issueDate: string; // Use `Date` if it's an actual Date object
  expirationDate?: string; // Optional if it can be null
  securitySeal: string;
}


const AdminCertificates = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  const [formData, setFormData] = useState({
    certificateNumber: '',
    studentName: '',
    courseName: '',
    courseID: '',
    issueDate: '',
    expirationDate: '',
    securitySeal: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const getErrorMessage = (err: unknown): string => {
    return err instanceof Error ? err.message : 'An unknown error occurred';
  };
  
  const fetchCertificates = async () => {
    setError(null);
    try {
      const adminEmail = localStorage.getItem('userEmail'); // Assuming email is stored in localStorage after login
      const res = await fetch(`/dashboard/pages/api/certificates?email=${adminEmail}`);
  
      if (!res.ok) throw new Error('Failed to fetch certificates');
      const data = await res.json();
      setCertificates(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  }    

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
  
    const adminEmail = localStorage.getItem('userEmail');
    const method = isEditing ? 'PUT' : 'POST';
  
    // Convert dates to ISO-8601 format if not empty
    const payload = isEditing
      ? {
          email: adminEmail,
          id: editId,
          updateData: {
            ...formData,
            issueDate: formData.issueDate ? new Date(formData.issueDate).toISOString() : null,
            expirationDate: formData.expirationDate ? new Date(formData.expirationDate).toISOString() : null,
          },
        }
      : {
          email: adminEmail,
          certificateData: {
            ...formData,
            issueDate: formData.issueDate ? new Date(formData.issueDate).toISOString() : null,
            expirationDate: formData.expirationDate ? new Date(formData.expirationDate).toISOString() : null,
          },
        };
  
    try {
      const res = await fetch('/dashboard/pages/api/certificates', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
  
      if (!res.ok) throw new Error('Failed to save certificate');
  
      const successMessage = isEditing
        ? 'Certificate updated successfully!'
        : 'Certificate added successfully!';
      setSuccessMessage(successMessage);
  
      fetchCertificates();
      handleResetForm();
    } catch (err) {
      setError(getErrorMessage(err));
    }    
  };
  

  const handleDelete = async (id: number) => {
    setError(null);
    setSuccessMessage(null);
  
    const adminEmail = localStorage.getItem('userEmail');
  
    // Show confirmation popup
    const confirmDelete = window.confirm('Are you sure you want to delete this certificate?');
    if (!confirmDelete) return; // Exit if the user cancels
  
    try {
      const res = await fetch('/dashboard/pages/api/certificates', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: adminEmail, id }),
      });
  
      if (!res.ok) throw new Error('Failed to delete certificate');
  
      setSuccessMessage('Certificate deleted successfully!');
      fetchCertificates();
    } catch (err) {
      setError(getErrorMessage(err));
    }
    
  };
  

  const handleEdit = (certificate: any) => {
    setIsEditing(true);
    setEditId(certificate.id);
    setFormData({
      certificateNumber: certificate.certificateNumber,
      studentName: certificate.studentName,
      courseName: certificate.courseName,
      courseID: certificate.courseID,
      issueDate: certificate.issueDate.split('T')[0],
      expirationDate: certificate.expirationDate?.split('T')[0] || '',
      securitySeal: certificate.securitySeal,
    });
  };

  const handleResetForm = () => {
    setFormData({
      certificateNumber: '',
      studentName: '',
      courseName: '',
      courseID: '',
      issueDate: '',
      expirationDate: '',
      securitySeal: '',
    });
    setIsEditing(false);
    setEditId(null);
    setSuccessMessage(null);
    setError(null);
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Manage Certificates</h1>
        <button
          onClick={handleResetForm}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
        >
          Add New
        </button>
      </div>

      {error && <p className="text-red-500">{error}</p>}
      {successMessage && <p className="text-green-500">{successMessage}</p>}

      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Certificate Number"
          value={formData.certificateNumber}
          onChange={(e) => setFormData({ ...formData, certificateNumber: e.target.value })}
          className="block w-full border rounded px-4 py-2 mb-2 text-black"
        />
        <input
          type="text"
          placeholder="Student Name"
          value={formData.studentName}
          onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
          className="block w-full border rounded px-4 py-2 mb-2 text-black"
        />
        <input
          type="text"
          placeholder="Course Name"
          value={formData.courseName}
          onChange={(e) => setFormData({ ...formData, courseName: e.target.value })}
          className="block w-full border rounded px-4 py-2 mb-2 text-black"
        />
        <input
          type="text"
          placeholder="Course ID"
          value={formData.courseID}
          onChange={(e) => setFormData({ ...formData, courseID: e.target.value })}
          className="block w-full border rounded px-4 py-2 mb-2 text-black"
        />
        <input
          type="date"
          placeholder="Issue Date"
          value={formData.issueDate}
          onChange={(e) => setFormData({ ...formData, issueDate: e.target.value })}
          className="block w-full border rounded px-4 py-2 mb-2 text-black"
        />
        <input
          type="date"
          placeholder="Expiration Date"
          value={formData.expirationDate}
          onChange={(e) => setFormData({ ...formData, expirationDate: e.target.value })}
          className="block w-full border rounded px-4 py-2 mb-2 text-black"
        />
        <input
          type="text"
          placeholder="Security Seal"
          value={formData.securitySeal}
          onChange={(e) => setFormData({ ...formData, securitySeal: e.target.value })}
          className="block w-full border rounded px-4 py-2 mb-2 text-black"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {isEditing ? 'Update Certificate' : 'Add Certificate'}
        </button>
      </form>

      <table className="table-auto w-full border-collapse border border-gray-300 text-black">
        <thead>
          <tr>
            <th className="border px-4 py-2">Certificate Number</th>
            <th className="border px-4 py-2">Student Name</th>
            <th className="border px-4 py-2">Course Name</th>
            <th className="border px-4 py-2">Course ID</th>
            <th className="border px-4 py-2">Issue Date</th>
            <th className="border px-4 py-2">Expiration Date</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {certificates.map((certificate) => (
            <tr key={certificate.id}>
              <td className="border px-4 py-2">{certificate.certificateNumber}</td>
              <td className="border px-4 py-2">{certificate.studentName}</td>
              <td className="border px-4 py-2">{certificate.courseName}</td>
              <td className="border px-4 py-2">{certificate.courseID}</td>
              <td className="border px-4 py-2">
                {new Date(certificate.issueDate).toLocaleDateString()}
              </td>
              <td className="border px-4 py-2">
                {certificate.expirationDate
                  ? new Date(certificate.expirationDate).toLocaleDateString()
                  : 'N/A'}
              </td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleEdit(certificate)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                >
                  Edit
                </button>
                 <button
                    onClick={() => handleDelete(certificate.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCertificates;
