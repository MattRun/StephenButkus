// 'use client';

// import { useState, useEffect } from 'react';
// import DynamicCourse from '../../training/dynamiccourse/DynamicCourse';
// const AdminCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     keyTopics: '',
//     location: '',
//     nextSession: '',
//     time: '',
//     contactHours: '',
//     pdfPath: '',
//     type: '',
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [previewCourse, setPreviewCourse] = useState(null); // Track course being previewed
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const res = await fetch('/dashboard/pages/api/courses');
//       const data = await res.json();
//       setCourses(data);
//     } catch (err) {
//       setError('Failed to fetch courses');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       ...formData,
//       keyTopics: formData.keyTopics.split(','), // Convert string to array
//     };

//     try {
//       const method = isEditing ? 'PUT' : 'POST';
//       const url = `/dashboard/pages/api/courses`;
//       const body = isEditing ? { id: editId, updateData: payload } : payload;

//       const res = await fetch(url, {
//         method,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(body),
//       });

//       if (!res.ok) throw new Error('Failed to save course');

//       fetchCourses();
//       setSuccessMessage(isEditing ? 'Course updated!' : 'Course added!');
//       setIsEditing(false);
//       setEditId(null);
//       setFormData({
//         title: '',
//         description: '',
//         keyTopics: '',
//         location: '',
//         nextSession: '',
//         time: '',
//         contactHours: '',
//         pdfPath: '',
//         type: '',
//       });
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleEdit = (course) => {
//     setIsEditing(true);
//     setEditId(course.id);
//     setFormData({
//       title: course.title,
//       description: course.description,
//       keyTopics: course.keyTopics.join(','),
//       location: course.location,
//       nextSession: course.nextSession,
//       time: course.time,
//       contactHours: course.contactHours,
//       pdfPath: course.pdfPath,
//       type: course.type,
//     });
//   };

//   const handleDelete = async (id) => {
//     try {
//       await fetch(`/dashboard/pages/api/courses`, {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ id }),
//       });
//       fetchCourses();
//     } catch (err) {
//       setError('Failed to delete course');
//     }
//   };

//   return (
//     <div className="container mx-auto p-6 text-black">
//       <h1 className="text-2xl font-bold mb-6">Manage Courses</h1>

//       {error && <p className="text-red-500">{error}</p>}
//       {successMessage && <p className="text-green-500">{successMessage}</p>}

//       <form onSubmit={handleSubmit} className="mb-6">
//         <input
//           type="text"
//           placeholder="Course Title"
//           value={formData.title}
//           onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//           className="block w-full border rounded px-4 py-2 mb-2"
//         />
//         <textarea
//           placeholder="Description"
//           value={formData.description}
//           onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//           className="block w-full border rounded px-4 py-2 mb-2"
//         />
//         <input
//           type="text"
//           placeholder="Key Topics (comma-separated)"
//           value={formData.keyTopics}
//           onChange={(e) => setFormData({ ...formData, keyTopics: e.target.value })}
//           className="block w-full border rounded px-4 py-2 mb-2"
//         />
//         <input
//           type="text"
//           placeholder="Location"
//           value={formData.location}
//           onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//           className="block w-full border rounded px-4 py-2 mb-2"
//         />
//         <input
//           type="text"
//           placeholder="Next Session"
//           value={formData.nextSession}
//           onChange={(e) => setFormData({ ...formData, nextSession: e.target.value })}
//           className="block w-full border rounded px-4 py-2 mb-2"
//         />
//         <input
//           type="text"
//           placeholder="Time"
//           value={formData.time}
//           onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//           className="block w-full border rounded px-4 py-2 mb-2"
//         />
//         <input
//           type="text"
//           placeholder="Contact Hours"
//           value={formData.contactHours}
//           onChange={(e) => setFormData({ ...formData, contactHours: e.target.value })}
//           className="block w-full border rounded px-4 py-2 mb-2"
//         />
//         <input
//           type="text"
//           placeholder="PDF Path"
//           value={formData.pdfPath}
//           onChange={(e) => setFormData({ ...formData, pdfPath: e.target.value })}
//           className="block w-full border rounded px-4 py-2 mb-2"
//         />
//         <button className="bg-blue-500 text-white px-4 py-2 rounded">
//           {isEditing ? 'Update Course' : 'Add Course'}
//         </button>
//       </form>

//       {/* Preview Section */}
//       {previewCourse && (
//         <div className="border-t border-gray-300 pt-4 mt-6">
//           <h2 className="text-xl font-semibold mb-4">Course Preview</h2>
//           <DynamicCourse course={previewCourse} />
//         </div>
//       )}

//       {/* Courses Table */}
//       <table className="table-auto w-full border-collapse border border-gray-300">
//         <thead>
//           <tr>
//             <th className="border px-4 py-2">Title</th>
//             <th className="border px-4 py-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {courses.map((course) => (
//             <tr key={course.id}>
//               <td className="border px-4 py-2">{course.title}</td>
//               <td className="border px-4 py-2">
//                 <button
//                   onClick={() => setPreviewCourse(course)} // Preview course
//                   className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
//                 >
//                   Preview
//                 </button>
//                 <button
//                   onClick={() => handleEdit(course)}
//                   className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(course.id)}
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

// export default AdminCourses;

// 'use client';

// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';

// const AdminCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     keyTopics: '',
//     location: '',
//     nextSession: '',
//     time: '',
//     contactHours: '',
//     pdfPath: '',
//     type: '',
//     quickbooksLink: '',
//     googleFormsLink: '',
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [previewCourse, setPreviewCourse] = useState(null); // Track course being previewed
//   const [showCategoryPopup, setShowCategoryPopup] = useState(false); // Popup visibility
//   const [selectedCategory, setSelectedCategory] = useState(''); // Selected category
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const categories = [
//     'Analytical',
//     'Mold',
//     'Lead',
//     'Asbestos',
//     'CPR, AED, and First Aid',
//     'HAZWOPER',
//     'Worker Safety',
//   ];

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const res = await fetch('/dashboard/pages/api/courses');
//       const data = await res.json();
//       setCourses(data);
//     } catch (err) {
//       setError('Failed to fetch courses');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       ...formData,
//       keyTopics: formData.keyTopics.split(','), // Convert string to array
//       type: selectedCategory, // Assign selected category
//     };

//     try {
//       const method = isEditing ? 'PUT' : 'POST';
//       const url = `/dashboard/pages/api/courses`;
//       const body = isEditing ? { id: editId, updateData: payload } : payload;

//       const res = await fetch(url, {
//         method,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(body),
//       });

//       if (!res.ok) throw new Error('Failed to save course');

//       fetchCourses();
//       setSuccessMessage(isEditing ? 'Course updated!' : 'Course added!');
//       setIsEditing(false);
//       setEditId(null);
//       resetForm();
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       title: '',
//       description: '',
//       keyTopics: '',
//       location: '',
//       nextSession: '',
//       time: '',
//       contactHours: '',
//       pdfPath: '',
//       type: '',
//       quickbooksLink: '',
//       googleFormsLink: '',
//     });
//     setSelectedCategory('');
//     setPreviewCourse(null);
//   };

//   const handleEdit = (course) => {
//     setIsEditing(true);
//     setEditId(course.id);
//     setFormData({
//       ...course,
//       keyTopics: course.keyTopics.join(','),
//     });
//     setSelectedCategory(course.type);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await fetch(`/dashboard/pages/api/courses`, {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ id }),
//       });
//       fetchCourses();
//     } catch (err) {
//       setError('Failed to delete course');
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-700 to-gray-900 text-white">
//       {/* Header */}
//       <header className="p-6 bg-gray-800 shadow-md">
//         <h1 className="text-3xl font-bold">Admin: Manage Courses</h1>
//       </header>

//       {/* Main Content */}
//       <div className="flex flex-1 p-6">
//         {/* Left Sidebar */}
//         <aside className="w-64 bg-gray-800 p-6 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold mb-4 text-center">Available Courses</h2>
//           <ul className="space-y-4">
//             {courses.map((course) => (
//               <li key={course.id} className="bg-gray-600 p-3 rounded shadow-md">
//                 <button
//                   onClick={() => setPreviewCourse(course)}
//                   className="block w-full text-left hover:text-blue-400"
//                 >
//                   {course.title}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </aside>

//         {/* Main Panel */}
//         <main className="flex-1 p-6">
//           {previewCourse ? (
//             <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
//               <h1 className="text-3xl font-bold mb-6">{previewCourse.title}</h1>
//               <p className="text-lg mb-4">{previewCourse.description}</p>
//               <h2 className="text-2xl font-semibold mb-4">Key Topics Include:</h2>
//               <ul className="list-disc list-inside mb-6">
//                 {previewCourse.keyTopics.map((topic, index) => (
//                   <li key={index}>{topic}</li>
//                 ))}
//               </ul>
//               <p className="text-lg mb-4">
//                 <strong>Location:</strong> {previewCourse.location}
//               </p>
//               <p className="text-lg mb-4">
//                 <strong>Next Session:</strong> {previewCourse.nextSession}
//               </p>
//               <p className="text-lg mb-4">
//                 <strong>Time:</strong> {previewCourse.time}
//               </p>
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded mr-4 hover:bg-blue-600"
//                 onClick={() => handleEdit(previewCourse)}
//               >
//                 Edit
//               </button>
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                 onClick={() => handleDelete(previewCourse.id)}
//               >
//                 Delete
//               </button>
//             </div>
//           ) : (
//             <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
//               <h2 className="text-2xl font-bold mb-6">{isEditing ? 'Edit Course' : 'Add New Course'}</h2>
//               {error && <p className="text-red-500">{error}</p>}
//               {successMessage && <p className="text-green-500">{successMessage}</p>}
//               <form onSubmit={handleSubmit}>
//                 <input
//                   type="text"
//                   placeholder="Course Title"
//                   value={formData.title}
//                   onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                   className="block w-full border rounded px-4 py-2 mb-2"
//                 />
//                 <textarea
//                   placeholder="Description"
//                   value={formData.description}
//                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                   className="block w-full border rounded px-4 py-2 mb-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Key Topics (comma-separated)"
//                   value={formData.keyTopics}
//                   onChange={(e) => setFormData({ ...formData, keyTopics: e.target.value })}
//                   className="block w-full border rounded px-4 py-2 mb-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Location"
//                   value={formData.location}
//                   onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//                   className="block w-full border rounded px-4 py-2 mb-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Next Session"
//                   value={formData.nextSession}
//                   onChange={(e) => setFormData({ ...formData, nextSession: e.target.value })}
//                   className="block w-full border rounded px-4 py-2 mb-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Time"
//                   value={formData.time}
//                   onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//                   className="block w-full border rounded px-4 py-2 mb-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Contact Hours"
//                   value={formData.contactHours}
//                   onChange={(e) => setFormData({ ...formData, contactHours: e.target.value })}
//                   className="block w-full border rounded px-4 py-2 mb-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="PDF Path"
//                   value={formData.pdfPath}
//                   onChange={(e) => setFormData({ ...formData, pdfPath: e.target.value })}
//                   className="block w-full border rounded px-4 py-2 mb-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="QuickBooks Link"
//                   value={formData.quickbooksLink}
//                   onChange={(e) => setFormData({ ...formData, quickbooksLink: e.target.value })}
//                   className="block w-full border rounded px-4 py-2 mb-2"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Google Forms Link"
//                   value={formData.googleFormsLink}
//                   onChange={(e) => setFormData({ ...formData, googleFormsLink: e.target.value })}
//                   className="block w-full border rounded px-4 py-2 mb-2"
//                 />
//                 <button
//                   type="button"
//                   className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
//                   onClick={() => setShowCategoryPopup(true)}
//                 >
//                   Select Category
//                 </button>
//                 <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
//                   {isEditing ? 'Update Course' : 'Add Course'}
//                 </button>
//               </form>
//             </div>
//           )}
//         </main>
//       </div>

//       {/* Category Selection Popup */}
//       {showCategoryPopup && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <h2 className="text-2xl font-bold mb-4">Select Course Category</h2>
//             <ul className="space-y-2">
//               {categories.map((category) => (
//                 <li key={category}>
//                   <button
//                     onClick={() => {
//                       setSelectedCategory(category);
//                       setShowCategoryPopup(false);
//                     }}
//                     className="block w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//                   >
//                     {category}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminCourses;

// 'use client';

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const AdminCourses = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     keyTopics: [],
//     location: '',
//     nextSession: '',
//     time: '',
//     contactHours: '',
//     pdfPath: '',
//     registerLink: '',
//     paymentLink: '',
//   });
//   const [metadata, setMetadata] = useState({
//     category: '',
//     format: '',
//     language: '',
//     level: '',
//     duration: '',
//   });
//   const [previewMode, setPreviewMode] = useState(false); // Toggles between editing and preview modes
//   const [showMetadataModal, setShowMetadataModal] = useState(false);
//   const [courses, setCourses] = useState([]); // List of saved courses

//   const categories = ['Asbestos', 'Lead', 'Mold', 'Analytical', 'Worker Safety', 'CPR AED & First Aid', 'HAZWOPER'];
//   const formats = ['Online', 'In-Person', 'Online and In-Person'];
//   const languages = ['English', 'Español'];
//   const levels = ['Initial', 'Refresher', 'Bundles', 'Coming Soon'];
//   const durations = ['1 Hour', '1.5 Hours', '4 Hours', '8 Hours', '16 Hours', '24 Hours', '36 Hours', '40 Hours', 'TBD'];

//   const handleFieldChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   const addKeyTopic = (topic) => {
//     if (topic.trim() !== '') {
//       setFormData({ ...formData, keyTopics: [...formData.keyTopics, topic] });
//     }
//   };

//   const removeKeyTopic = (index) => {
//     const updatedTopics = formData.keyTopics.filter((_, i) => i !== index);
//     setFormData({ ...formData, keyTopics: updatedTopics });
//   };

//   const saveCourse = () => {
//     setShowMetadataModal(true);
//   };

//   const publishCourse = () => {
//     const newCourse = { ...formData, ...metadata };
//     setCourses([...courses, newCourse]);
//     resetForm();
//     setShowMetadataModal(false);
//   };

//   const resetForm = () => {
//     setFormData({
//       title: '',
//       description: '',
//       keyTopics: [],
//       location: '',
//       nextSession: '',
//       time: '',
//       contactHours: '',
//       pdfPath: '',
//       registerLink: '',
//       paymentLink: '',
//     });
//     setMetadata({
//       category: '',
//       format: '',
//       language: '',
//       level: '',
//       duration: '',
//     });
//     setPreviewMode(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Admin: Add or Edit Course</h1>
//       </div>

//       <div className="flex flex-col bg-gray-800 p-6 rounded-lg shadow-lg">
//         {/* Editable Course Section */}
//         <div className="flex flex-col">
//           <input
//             type="text"
//             placeholder="Course Title"
//             value={formData.title}
//             onChange={(e) => handleFieldChange('title', e.target.value)}
//             className="text-3xl font-bold bg-transparent text-white placeholder-gray-500 border-b-2 border-gray-600 focus:outline-none mb-4"
//           />

//           <textarea
//             placeholder="Description"
//             value={formData.description}
//             onChange={(e) => handleFieldChange('description', e.target.value)}
//             className="bg-transparent text-white placeholder-gray-500 border-b-2 border-gray-600 focus:outline-none mb-4"
//             rows={5}
//           />

//           <div className="mb-4">
//             <h2 className="text-xl font-semibold">Key Topics:</h2>
//             <div className="mt-2 space-y-2">
//               {formData.keyTopics.map((topic, index) => (
//                 <div key={index} className="flex items-center">
//                   <span className="text-white bg-blue-600 px-3 py-1 rounded">{topic}</span>
//                   <button
//                     onClick={() => removeKeyTopic(index)}
//                     className="ml-2 text-red-500 hover:underline"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//             </div>
//             <div className="mt-2 flex">
//               <input
//                 type="text"
//                 placeholder="Add Key Topic"
//                 onKeyDown={(e) => {
//                   if (e.key === 'Enter') {
//                     addKeyTopic(e.target.value);
//                     e.target.value = '';
//                   }
//                 }}
//                 className="bg-transparent text-white placeholder-gray-500 border-b-2 border-gray-600 focus:outline-none"
//               />
//             </div>
//           </div>

//           <input
//             type="text"
//             placeholder="Location"
//             value={formData.location}
//             onChange={(e) => handleFieldChange('location', e.target.value)}
//             className="bg-transparent text-white placeholder-gray-500 border-b-2 border-gray-600 focus:outline-none mb-4"
//           />

//           <input
//             type="text"
//             placeholder="Next Session"
//             value={formData.nextSession}
//             onChange={(e) => handleFieldChange('nextSession', e.target.value)}
//             className="bg-transparent text-white placeholder-gray-500 border-b-2 border-gray-600 focus:outline-none mb-4"
//           />

//           <input
//             type="text"
//             placeholder="Time"
//             value={formData.time}
//             onChange={(e) => handleFieldChange('time', e.target.value)}
//             className="bg-transparent text-white placeholder-gray-500 border-b-2 border-gray-600 focus:outline-none mb-4"
//           />

//           <input
//             type="text"
//             placeholder="Contact Hours"
//             value={formData.contactHours}
//             onChange={(e) => handleFieldChange('contactHours', e.target.value)}
//             className="bg-transparent text-white placeholder-gray-500 border-b-2 border-gray-600 focus:outline-none mb-4"
//           />

//           <input
//             type="text"
//             placeholder="PDF Path"
//             value={formData.pdfPath}
//             onChange={(e) => handleFieldChange('pdfPath', e.target.value)}
//             className="bg-transparent text-white placeholder-gray-500 border-b-2 border-gray-600 focus:outline-none mb-4"
//           />

//           <div className="mt-4 flex space-x-4">
//             <input
//               type="text"
//               placeholder="QuickBooks Payment Link"
//               value={formData.paymentLink}
//               onChange={(e) => handleFieldChange('paymentLink', e.target.value)}
//               className="flex-1 bg-transparent text-white placeholder-gray-500 border-b-2 border-gray-600 focus:outline-none"
//             />
//             <input
//               type="text"
//               placeholder="Google Forms Registration Link"
//               value={formData.registerLink}
//               onChange={(e) => handleFieldChange('registerLink', e.target.value)}
//               className="flex-1 bg-transparent text-white placeholder-gray-500 border-b-2 border-gray-600 focus:outline-none"
//             />
//           </div>

//           <button
//             onClick={saveCourse}
//             className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
//           >
//             Save
//           </button>
//         </div>
//       </div>

//       {/* Metadata Modal */}
//       {showMetadataModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//           <div className="bg-gray-800 p-6 rounded-lg w-full max-w-lg">
//             <h2 className="text-2xl font-bold text-white mb-4">Select Course Metadata</h2>
//             <div className="space-y-4">
//               <select
//                 value={metadata.category}
//                 onChange={(e) => setMetadata({ ...metadata, category: e.target.value })}
//                 className="w-full bg-transparent text-white placeholder-gray-500 border-b-2 border-gray-600 focus:outline-none"
//               >
//                 <option value="" disabled>Select Category</option>
//                 {categories.map((cat) => (
//                   <option key={cat} value={cat}>{cat}</option>
//                 ))}
//               </select>

//               <select
//                 value={metadata.format}
//                 onChange={(e) => setMetadata({ ...metadata, format: e.target.value })}
//                 className="w-full bg-transparent text-white placeholder-gray-500 border-b-2 border-gray-600 focus:outline-none"
//               >
//                 <option value="" disabled>Select Format</option>
//                 {formats.map((format) => (
//                   <option key={format} value={format}>{format}</option>
//                 ))}
//               </select>

//               <select
//                 value={metadata.language}
//                 onChange={(e) => setMetadata({ ...metadata, language: e.target.value })}
//                 className="w-full bg-transparent text-white placeholder-gray-500 border-b-2 border-gray-600 focus:outline-none"
//               >
//                 <option value="" disabled>Select Language</option>
//                 {languages.map((lang) => (
//                   <option key={lang} value={lang}>{lang}</option>
//                 ))}
//               </select>

//               <select
//                 value={metadata.level}
//                 onChange={(e) => setMetadata({ ...metadata, level: e.target.value })}
//                 className="w-full bg-transparent text-white placeholder-gray-500 border-b-2 border-gray-600 focus:outline-none"
//               >
//                 <option value="" disabled>Select Level</option>
//                 {levels.map((level) => (
//                   <option key={level} value={level}>{level}</option>
//                 ))}
//               </select>

//               <select
//                 value={metadata.duration}
//                 onChange={(e) => setMetadata({ ...metadata, duration: e.target.value })}
//                 className="w-full bg-transparent text-white placeholder-gray-500 border-b-2 border-gray-600 focus:outline-none"
//               >
//                 <option value="" disabled>Select Duration</option>
//                 {durations.map((duration) => (
//                   <option key={duration} value={duration}>{duration}</option>
//                 ))}
//               </select>
//             </div>
//             <div className="mt-6 flex justify-end space-x-4">
//               <button
//                 onClick={() => setShowMetadataModal(false)}
//                 className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={publishCourse}
//                 className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               >
//                 Publish
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminCourses;

// 'use client';

// import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal'; // Modal for metadata
// import { motion } from 'framer-motion';
// import RichTextEditor from 'react-quill'; // For rich text editing
// import 'react-quill/dist/quill.snow.css'; // Editor styles
// import { ArrowLeftIcon } from '@heroicons/react/24/solid';
// import { useRouter } from 'next/navigation';

// // Accessibility for react-modal
// Modal.setAppElement('#__next');

// const AdminCourses = () => {
//   const router = useRouter();
//   const [courses, setCourses] = useState([]); // List of courses
//   const [selectedCourse, setSelectedCourse] = useState(null); // Selected course for editing/viewing
//   const [isEditing, setIsEditing] = useState(false); // Whether in editing mode
//   const [isAddingNew, setIsAddingNew] = useState(false); // Adding a new course
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     keyTopics: '',
//     location: '',
//     nextSession: '',
//     time: '',
//     contactHours: '',
//     pdfPath: '',
//   });
//   const [showModal, setShowModal] = useState(false); // Metadata modal
//   const [metadata, setMetadata] = useState({
//     category: '',
//     format: '',
//     language: '',
//     level: '',
//     duration: '',
//   });

//   const fetchCourses = async () => {
//     try {
//       const res = await fetch('/dashboard/pages/api/courses');
//       const data = await res.json();
//       setCourses(data);
//     } catch (err) {
//       console.error('Failed to fetch courses:', err);
//     }
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const handleEdit = (course) => {
//     setSelectedCourse(course);
//     setFormData({ ...course });
//     setIsEditing(true);
//     setIsAddingNew(false);
//   };

//   const handleAddNew = () => {
//     setIsAddingNew(true);
//     setSelectedCourse(null);
//     setFormData({
//       title: '',
//       description: '',
//       keyTopics: '',
//       location: '',
//       nextSession: '',
//       time: '',
//       contactHours: '',
//       pdfPath: '',
//     });
//     setIsEditing(false);
//   };

//   const handleSave = async () => {
//     try {
//       const payload = { ...formData, keyTopics: formData.keyTopics.split(',') };
//       const method = isEditing ? 'PUT' : 'POST';
//       const url = isEditing
//         ? `/dashboard/pages/api/courses/${selectedCourse.id}`
//         : '/dashboard/pages/api/courses';

//       const res = await fetch(url, {
//         method,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) throw new Error('Failed to save course');

//       setShowModal(true); // Show metadata modal
//       fetchCourses();
//     } catch (err) {
//       console.error('Error saving course:', err);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await fetch(`/dashboard/pages/api/courses/${id}`, {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//       });
//       fetchCourses();
//     } catch (err) {
//       console.error('Error deleting course:', err);
//     }
//   };

//   const handleMetadataSubmit = () => {
//     setShowModal(false);
//     fetchCourses(); // Refresh courses with updated metadata
//   };

//   return (
//     <div className="flex min-h-screen bg-gradient-to-r from-gray-700 to-gray-900 text-white">
//       {/* Left Sidebar */}
//       <aside className="w-64 bg-gray-800 p-6 flex-shrink-0">
//         <div className="flex items-center justify-between mb-6">
//           <button
//             className="text-blue-400 hover:text-blue-600 transition flex items-center"
//             onClick={() => router.push('/dashboard/pages/training')}
//           >
//             <ArrowLeftIcon className="w-5 h-5 mr-2" />
//             <span className="font-bold">Course Overview</span>
//           </button>
//         </div>
//         <h2 className="text-2xl font-bold mb-6 text-center">Courses</h2>
//         <button
//           onClick={handleAddNew}
//           className="bg-green-500 text-white px-4 py-2 rounded mb-4 w-full"
//         >
//           Add New Course
//         </button>
//         <ul className="space-y-4">
//           {courses.map((course) => (
//             <li key={course.id}>
//               <button
//                 className={`block px-4 py-2 rounded hover:bg-blue-600 transition ${
//                   selectedCourse?.id === course.id ? 'bg-blue-600' : 'bg-gray-600'
//                 }`}
//                 onClick={() => handleEdit(course)}
//               >
//                 {course.title}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-grow p-8 bg-white text-gray-900 rounded-lg shadow-lg">
//         <div>
//           <input
//             type="text"
//             placeholder="Course Title"
//             value={formData.title}
//             onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//             className="text-3xl font-bold mb-6 w-full bg-transparent border-none outline-none"
//           />
//           <RichTextEditor
//             value={formData.description}
//             onChange={(value) => setFormData({ ...formData, description: value })}
//           />
//           <textarea
//             placeholder="Key Topics (comma-separated)"
//             value={formData.keyTopics}
//             onChange={(e) => setFormData({ ...formData, keyTopics: e.target.value })}
//             className="block w-full border rounded px-4 py-2 my-4"
//           />
//         </div>
//       </main>

//       {/* Right Sidebar */}
//       <aside className="w-80 bg-gray-800 p-6 flex-shrink-0">
//         <h2 className="text-2xl font-bold mb-4 text-center">Course Details</h2>
//         <input
//           type="text"
//           placeholder="Location"
//           value={formData.location}
//           onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//           className="block w-full mb-4 p-2 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Next Session"
//           value={formData.nextSession}
//           onChange={(e) => setFormData({ ...formData, nextSession: e.target.value })}
//           className="block w-full mb-4 p-2 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Time"
//           value={formData.time}
//           onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//           className="block w-full mb-4 p-2 rounded"
//         />
//         <input
//           type="text"
//           placeholder="PDF Path"
//           value={formData.pdfPath}
//           onChange={(e) => setFormData({ ...formData, pdfPath: e.target.value })}
//           className="block w-full mb-4 p-2 rounded"
//         />
//         <button
//           onClick={handleSave}
//           className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full"
//         >
//           Save Changes
//         </button>
//       </aside>

//       {/* Metadata Modal */}
//       <Modal
//         isOpen={showModal}
//         onRequestClose={() => setShowModal(false)}
//         contentLabel="Course Metadata"
//         style={{
//           overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
//           content: { color: 'black', padding: '2rem', borderRadius: '8px' },
//         }}
//       >
//         <h2 className="text-xl font-bold mb-4">Course Metadata</h2>
//         <select
//           value={metadata.category}
//           onChange={(e) => setMetadata({ ...metadata, category: e.target.value })}
//           className="block w-full mb-4 p-2"
//         >
//           <option value="">Select Category</option>
//           <option value="Asbestos">Asbestos</option>
//           <option value="Lead">Lead</option>
//           <option value="Mold">Mold</option>
//           <option value="Analytical">Analytical</option>
//           <option value="Worker Safety">Worker Safety</option>
//           <option value="CPR AED & First Aid">CPR AED & First Aid</option>
//           <option value="HAZWOPER">HAZWOPER</option>
//         </select>
//         <button
//           onClick={handleMetadataSubmit}
//           className="bg-green-500 text-white px-4 py-2 rounded mt-4"
//         >
//           Save Metadata
//         </button>
//       </Modal>
//     </div>
//   );
// };

// export default AdminCourses;

// 'use client';

// import { useState, useEffect } from 'react';

// const AdminCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     keyTopics: '',
//     location: '',
//     nextSession: '',
//     time: '',
//     contactHours: '',
//     pdfPath: '',
//     type: '',
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [previewCourse, setPreviewCourse] = useState(null); // Preview course state
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const res = await fetch('/dashboard/pages/api/courses');
//       const data = await res.json();
//       setCourses(data);
//     } catch (err) {
//       setError('Failed to fetch courses');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       ...formData,
//       keyTopics: formData.keyTopics.split(','), // Convert comma-separated string to array
//     };

//     try {
//       const method = isEditing ? 'PUT' : 'POST';
//       const url = `/dashboard/pages/api/courses`;
//       const body = isEditing ? { id: editId, updateData: payload } : payload;

//       const res = await fetch(url, {
//         method,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(body),
//       });

//       if (!res.ok) throw new Error('Failed to save course');

//       fetchCourses();
//       setSuccessMessage(isEditing ? 'Course updated!' : 'Course added!');
//       setIsEditing(false);
//       setEditId(null);
//       setFormData({
//         title: '',
//         description: '',
//         keyTopics: '',
//         location: '',
//         nextSession: '',
//         time: '',
//         contactHours: '',
//         pdfPath: '',
//         type: '',
//       });
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleEdit = (course) => {
//     setIsEditing(true);
//     setEditId(course.id);
//     setFormData({
//       title: course.title,
//       description: course.description,
//       keyTopics: course.keyTopics.join(','),
//       location: course.location,
//       nextSession: course.nextSession,
//       time: course.time,
//       contactHours: course.contactHours,
//       pdfPath: course.pdfPath,
//       type: course.type,
//     });
//   };

//   const handleDelete = async (id) => {
//     try {
//       await fetch(`/dashboard/pages/api/courses`, {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ id }),
//       });
//       fetchCourses();
//     } catch (err) {
//       setError('Failed to delete course');
//     }
//   };

//   const handlePreview = (course) => {
//     setPreviewCourse(course);
//   };

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Left Sidebar */}
//       <aside className="w-64 bg-gray-800 p-6 text-white">
//         <h2 className="text-xl font-bold mb-4">Courses</h2>
//         <button
//           onClick={() => {
//             setFormData({
//               title: '',
//               description: '',
//               keyTopics: '',
//               location: '',
//               nextSession: '',
//               time: '',
//               contactHours: '',
//               pdfPath: '',
//               type: '',
//             });
//             setIsEditing(false);
//           }}
//           className="w-full bg-green-500 text-white px-4 py-2 rounded mb-4"
//         >
//           Add New Course
//         </button>
//         <ul className="space-y-2">
//           {courses.map((course) => (
//             <li
//               key={course.id}
//               className="cursor-pointer bg-gray-700 hover:bg-gray-600 p-3 rounded"
//               onClick={() => handlePreview(course)}
//             >
//               {course.title}
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-8">
//         {previewCourse ? (
//           <div className="bg-white shadow-lg rounded-lg p-6">
//             <h1 className="text-2xl font-bold mb-4">{previewCourse.title}</h1>
//             <p className="mb-4">{previewCourse.description}</p>
//             <h2 className="text-xl font-semibold mb-2">Key Topics:</h2>
//             <ul className="list-disc list-inside mb-4">
//               {previewCourse.keyTopics.map((topic, idx) => (
//                 <li key={idx}>{topic}</li>
//               ))}
//             </ul>
//             <p className="mb-2">
//               <strong>Location:</strong> {previewCourse.location}
//             </p>
//             <p className="mb-2">
//               <strong>Next Session:</strong> {previewCourse.nextSession}
//             </p>
//             <p className="mb-2">
//               <strong>Time:</strong> {previewCourse.time}
//             </p>
//             <p className="mb-4">
//               <strong>Contact Hours:</strong> {previewCourse.contactHours}
//             </p>
//             <div className="flex space-x-4">
//               <button
//                 onClick={() => handleEdit(previewCourse)}
//                 className="bg-yellow-500 text-white px-4 py-2 rounded"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(previewCourse.id)}
//                 className="bg-red-500 text-white px-4 py-2 rounded"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
//             <h1 className="text-2xl font-bold mb-4">
//               {isEditing ? 'Edit Course' : 'Add New Course'}
//             </h1>
//             <input
//               type="text"
//               placeholder="Course Title"
//               value={formData.title}
//               onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//               className="w-full p-3 mb-4 border rounded"
//             />
//             <textarea
//               placeholder="Description"
//               value={formData.description}
//               onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//               className="w-full p-3 mb-4 border rounded"
//             />
//             <input
//               type="text"
//               placeholder="Key Topics (comma-separated)"
//               value={formData.keyTopics}
//               onChange={(e) => setFormData({ ...formData, keyTopics: e.target.value })}
//               className="w-full p-3 mb-4 border rounded"
//             />
//             <input
//               type="text"
//               placeholder="Location"
//               value={formData.location}
//               onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//               className="w-full p-3 mb-4 border rounded"
//             />
//             <input
//               type="text"
//               placeholder="Next Session"
//               value={formData.nextSession}
//               onChange={(e) => setFormData({ ...formData, nextSession: e.target.value })}
//               className="w-full p-3 mb-4 border rounded"
//             />
//             <input
//               type="text"
//               placeholder="Time"
//               value={formData.time}
//               onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//               className="w-full p-3 mb-4 border rounded"
//             />
//             <input
//               type="text"
//               placeholder="Contact Hours"
//               value={formData.contactHours}
//               onChange={(e) => setFormData({ ...formData, contactHours: e.target.value })}
//               className="w-full p-3 mb-4 border rounded"
//             />
//             <input
//               type="text"
//               placeholder="PDF Path"
//               value={formData.pdfPath}
//               onChange={(e) => setFormData({ ...formData, pdfPath: e.target.value })}
//               className="w-full p-3 mb-4 border rounded"
//             />
//             <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//               {isEditing ? 'Update Course' : 'Add Course'}
//             </button>
//           </form>
//         )}
//       </main>
//     </div>
//   );
// };

// export default AdminCourses;

// 'use client';

// import { useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';
// import { motion } from 'framer-motion';
// import { ArrowLeftIcon } from '@heroicons/react/24/solid';

// // Dynamically import React-Quill for rich text editing
// const RichTextEditor = dynamic(() => import('react-quill'), { ssr: false });
// import 'react-quill/dist/quill.snow.css';

// const AdminCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     keyTopics: '',
//     location: '',
//     nextSession: '',
//     time: '',
//     contactHours: '',
//     pdfPath: '',
//     category: 'Asbestos', // Default category
//     format: 'Online', // Default format
//     language: 'English', // Default language
//     level: 'Initial', // Default level
//     duration: 'TBD', // Default duration
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [previewCourse, setPreviewCourse] = useState(null); // For showing course preview

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const res = await fetch('../dashboard/pages/api/courses');
//       const data = await res.json();
//       setCourses(data);
//     } catch (err) {
//       setError('Failed to fetch courses');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const payload = {
//       ...formData,
//       keyTopics: formData.keyTopics.split(','), // Convert string to array
//     };

//     try {
//       const method = isEditing ? 'PUT' : 'POST';
//       const url = `/dashboard/pages/api/courses`;
//       const body = isEditing ? { id: editId, updateData: payload } : payload;

//       const res = await fetch(url, {
//         method,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(body),
//       });

//       if (!res.ok) throw new Error('Failed to save course');

//       fetchCourses();
//       setSuccessMessage(isEditing ? 'Course updated!' : 'Course added!');
//       setIsEditing(false);
//       setEditId(null);
//       setFormData({
//         title: '',
//         description: '',
//         keyTopics: '',
//         location: '',
//         nextSession: '',
//         time: '',
//         contactHours: '',
//         pdfPath: '',
//         category: 'Asbestos',
//         format: 'Online',
//         language: 'English',
//         level: 'Initial',
//         duration: 'TBD',
//       });
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleEdit = (course) => {
//     setIsEditing(true);
//     setEditId(course.id);
//     setFormData({
//       ...course,
//       keyTopics: course.keyTopics.join(','), // Convert array to string for editing
//     });
//   };

//   const handleDelete = async (id) => {
//     try {
//       await fetch(`/dashboard/pages/api/courses`, {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ id }),
//       });
//       fetchCourses();
//     } catch (err) {
//       setError('Failed to delete course');
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       {/* Left Sidebar */}
//       <aside className="w-64 bg-gray-800 text-white p-6">
//         <h2 className="text-2xl font-bold mb-6">Courses</h2>
//         {Object.entries(
//           (Array.isArray(courses) ? courses : []).reduce((acc, course) => {
//             acc[course.category] = acc[course.category] || [];
//             acc[course.category].push(course);
//             return acc;
//           }, {})
//         ).map(([category, categoryCourses]) => (
//           <div key={category} className="mb-4">
//             <h3 className="text-xl font-semibold">{category}</h3>
//             <ul className="space-y-2">
//               {categoryCourses.map((course) => (
//                 <li key={course.id}>
//                   <button
//                     className="block w-full text-left px-2 py-1 hover:bg-blue-600 transition"
//                     onClick={() => setPreviewCourse(course)}
//                   >
//                     {course.title}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </aside>

//       {/* Main Content */}
//       <main className="flex-grow bg-white p-6">
//         <h1 className="text-2xl font-bold mb-4">
//           {isEditing ? 'Edit Course' : 'Add New Course'}
//         </h1>
//         {error && <p className="text-red-500">{error}</p>}
//         {successMessage && <p className="text-green-500">{successMessage}</p>}
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Course Title"
//             value={formData.title}
//             onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//             className="block w-full border rounded px-4 py-2 mb-4"
//           />
//           <RichTextEditor
//             value={formData.description}
//             onChange={(value) => setFormData({ ...formData, description: value })}
//             className="mb-4"
//           />
//           <input
//             type="text"
//             placeholder="Key Topics (comma-separated)"
//             value={formData.keyTopics}
//             onChange={(e) => setFormData({ ...formData, keyTopics: e.target.value })}
//             className="block w-full border rounded px-4 py-2 mb-4"
//           />
//           <input
//             type="text"
//             placeholder="Location"
//             value={formData.location}
//             onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//             className="block w-full border rounded px-4 py-2 mb-4"
//           />
//           <input
//             type="text"
//             placeholder="Next Session"
//             value={formData.nextSession}
//             onChange={(e) => setFormData({ ...formData, nextSession: e.target.value })}
//             className="block w-full border rounded px-4 py-2 mb-4"
//           />
//           <input
//             type="text"
//             placeholder="Time"
//             value={formData.time}
//             onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//             className="block w-full border rounded px-4 py-2 mb-4"
//           />
//           <input
//             type="text"
//             placeholder="Contact Hours"
//             value={formData.contactHours}
//             onChange={(e) => setFormData({ ...formData, contactHours: e.target.value })}
//             className="block w-full border rounded px-4 py-2 mb-4"
//           />
//           <input
//             type="text"
//             placeholder="PDF Path"
//             value={formData.pdfPath}
//             onChange={(e) => setFormData({ ...formData, pdfPath: e.target.value })}
//             className="block w-full border rounded px-4 py-2 mb-4"
//           />
//           <select
//             value={formData.category}
//             onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//             className="block w-full border rounded px-4 py-2 mb-4"
//           >
//             <option>Asbestos</option>
//             <option>Lead</option>
//             <option>Mold</option>
//             <option>Analytical</option>
//             <option>Worker Safety</option>
//             <option>CPR AED & First Aid</option>
//             <option>HAZWOPER</option>
//           </select>
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//             Save Changes
//           </button>
//         </form>
//       </main>

//       {/* Right Sidebar */}
//       <aside className="w-80 bg-gray-100 p-6">
//         {previewCourse && (
//           <div>
//             <h2 className="text-2xl font-bold mb-4">{previewCourse.title}</h2>
//             <p className="mb-2">
//               <strong>Location:</strong> {previewCourse.location}
//             </p>
//             <p className="mb-2">
//               <strong>Next Session:</strong> {previewCourse.nextSession}
//             </p>
//             <p className="mb-2">
//               <strong>Time:</strong> {previewCourse.time}
//             </p>
//             <p className="mb-2">
//               <strong>Contact Hours:</strong> {previewCourse.contactHours}
//             </p>
//             <a
//               href={previewCourse.pdfPath}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="block bg-green-500 text-white px-4 py-2 rounded text-center"
//             >
//               Download PDF
//             </a>
//           </div>
//         )}
//       </aside>
//     </div>
//   );
// };

// export default AdminCourses;

// 'use client';

// import { useState, useEffect } from 'react';
// import dynamic from 'next/dynamic';
// import { motion } from 'framer-motion';

// const RichTextEditor = dynamic(() => import('react-quill'), { ssr: false });
// import 'react-quill/dist/quill.snow.css';

// const AdminCourses = () => {
//   const [courses, setCourses] = useState([]);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     keyTopics: [],
//     location: '',
//     nextSession: '',
//     time: '',
//     contactHours: '',
//     pdfPath: '',
//     quickbooksLink: '',
//     googleFormsLink: '',
//   });
//   const [metadata, setMetadata] = useState({
//     category: 'Asbestos', // Default
//     format: 'Online', // Default
//     language: 'English', // Default
//     level: 'Initial', // Default
//     duration: 'TBD', // Default
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [previewCourse, setPreviewCourse] = useState(null); // Preview mode
//   const [error, setError] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');

//   const categories = ['Asbestos', 'Lead', 'Mold', 'Analytical', 'Worker Safety', 'CPR AED & First Aid', 'HAZWOPER'];
//   const formats = ['Online', 'In-Person', 'Online and In-Person'];
//   const languages = ['English', 'Español'];
//   const levels = ['Initial', 'Refresher', 'Bundles', 'Coming Soon'];
//   const durations = ['1 Hour', '1.5 Hours', '4 Hours', '8 Hours', '16 Hours', '24 Hours', '36 Hours', '40 Hours', 'TBD'];

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const res = await fetch('/dashboard/pages/api/courses');
//       const data = await res.json();
//       setCourses(data);
//     } catch (err) {
//       setError('Failed to fetch courses');
//     }
//   };

//   const handleSubmit = async (e: { preventDefault: () => void; }) => {
//     e.preventDefault();

//     const payload = {
//       ...formData,
//       keyTopics: formData.keyTopics,
//       ...metadata, // Merge metadata fields into payload
//     };

//     try {
//       const method = isEditing ? 'PUT' : 'POST';
//       const url = `/dashboard/pages/api/courses`;
//       const body = isEditing ? { id: editId, updateData: payload } : payload;

//       const res = await fetch(url, {
//         method,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(body),
//       });

//       if (!res.ok) throw new Error('Failed to save course');

//       fetchCourses();
//       setSuccessMessage(isEditing ? 'Course updated!' : 'Course added!');
//       resetForm();
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       title: '',
//       description: '',
//       keyTopics: [],
//       location: '',
//       nextSession: '',
//       time: '',
//       contactHours: '',
//       pdfPath: '',
//       quickbooksLink: '',
//       googleFormsLink: '',
//     });
//     setMetadata({
//       category: 'Asbestos',
//       format: 'Online',
//       language: 'English',
//       level: 'Initial',
//       duration: 'TBD',
//     });
//     setIsEditing(false);
//     setEditId(null);
//     setPreviewCourse(null);
//   };

//   const handleEdit = (course) => {
//     setIsEditing(true);
//     setEditId(course.id);
//     setFormData({
//       ...course,
//       keyTopics: course.keyTopics || [],
//     });
//     setMetadata({
//       category: course.category,
//       format: course.format,
//       language: course.language,
//       level: course.level,
//       duration: course.duration,
//     });
//   };

//   const handleDelete = async (id) => {
//     try {
//       await fetch(`/dashboard/pages/api/courses`, {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ id }),
//       });
//       fetchCourses();
//     } catch (err) {
//       setError('Failed to delete course');
//     }
//   };

//   const addKeyTopic = (topic) => {
//     if (topic.trim() !== '') {
//       setFormData({ ...formData, keyTopics: [...formData.keyTopics, topic] });
//     }
//   };

//   const removeKeyTopic = (index) => {
//     const updatedTopics = formData.keyTopics.filter((_, i) => i !== index);
//     setFormData({ ...formData, keyTopics: updatedTopics });
//   };

//   return (
//     <div className="min-h-screen flex bg-gradient-to-r from-gray-700 to-gray-900 text-white">
//       {/* Left Sidebar */}
//       <aside className="w-64 bg-gray-800 p-6">
//         <h2 className="text-2xl font-bold mb-6">Courses</h2>
//         {Object.entries(
//           courses.reduce((acc, course) => {
//             acc[course.category] = acc[course.category] || [];
//             acc[course.category].push(course);
//             return acc;
//           }, {})
//         ).map(([category, categoryCourses]) => (
//           <div key={category} className="mb-4">
//             <h3 className="text-xl font-semibold">{category}</h3>
//             <ul className="space-y-2">
//               {categoryCourses.map((course) => (
//                 <li key={course.id}>
//                   <button
//                     className="block w-full text-left px-2 py-1 hover:bg-blue-600 transition"
//                     onClick={() => setPreviewCourse(course)}
//                   >
//                     {course.title}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//         <button
//           onClick={() => {
//             resetForm();
//             setPreviewCourse(null);
//           }}
//           className="block w-full bg-green-500 text-white py-2 rounded mt-4 hover:bg-green-600"
//         >
//           Add New Course
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-grow p-6">
//         {previewCourse ? (
//           <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
//             <h1 className="text-3xl font-bold mb-6">{previewCourse.title}</h1>
//             <p className="text-lg mb-4">{previewCourse.description}</p>
//             <h2 className="text-2xl font-semibold mb-4">Key Topics:</h2>
//             <ul className="list-disc list-inside mb-6">
//               {previewCourse.keyTopics.map((topic, index) => (
//                 <li key={index}>{topic}</li>
//               ))}
//             </ul>
//             <p>
//               <strong>Location:</strong> {previewCourse.location}
//             </p>
//             <p>
//               <strong>Next Session:</strong> {previewCourse.nextSession}
//             </p>
//             <p>
//               <strong>Time:</strong> {previewCourse.time}
//             </p>
//             <p>
//               <strong>Contact Hours:</strong> {previewCourse.contactHours}
//             </p>
//             <p>
//               <strong>Category:</strong> {previewCourse.category}
//             </p>
//             <p>
//               <strong>Format:</strong> {previewCourse.format}
//             </p>
//             <p>
//               <strong>Language:</strong> {previewCourse.language}
//             </p>
//             <p>
//               <strong>Level:</strong> {previewCourse.level}
//             </p>
//             <p>
//               <strong>Duration:</strong> {previewCourse.duration}
//             </p>
//             <div className="mt-4 flex space-x-4">
//               <button
//                 onClick={() => handleEdit(previewCourse)}
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(previewCourse.id)}
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ) : (
//           // Begin Add/Edit Form
//           <form onSubmit={handleSubmit} className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold mb-6">{isEditing ? 'Edit Course' : 'Add New Course'}</h2>
//           <input
//             type="text"
//             placeholder="Course Title"
//             value={formData.title}
//             onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//             className="block w-full border rounded px-4 py-2 mb-4"
//           />
//           <RichTextEditor
//             value={formData.description}
//             onChange={(value) => setFormData({ ...formData, description: value })}
//             className="mb-4"
//           />
//           <div className="mb-4">
//             <h3 className="text-lg font-bold mb-2">Key Topics</h3>
//             <ul className="list-disc list-inside mb-2">
//               {formData.keyTopics.map((topic, index) => (
//                 <li key={index}>
//                   {topic}
//                   <button
//                     onClick={() => removeKeyTopic(index)}
//                     className="ml-2 text-red-500 hover:underline"
//                   >
//                     Remove
//                   </button>
//                 </li>
//               ))}
//             </ul>
//             <input
//               type="text"
//               placeholder="Add Key Topic"
//               onKeyDown={(e) => {
//                 if (e.key === 'Enter') {
//                   addKeyTopic(e.target.value);
//                   e.target.value = '';
//                 }
//               }}
//               className="block w-full border rounded px-4 py-2"
//             />
//           </div>
//           <input
//             type="text"
//             placeholder="Location"
//             value={formData.location}
//             onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//             className="block w-full border rounded px-4 py-2 mb-4"
//           />
//           <input
//             type="text"
//             placeholder="Next Session"
//             value={formData.nextSession}
//             onChange={(e) => setFormData({ ...formData, nextSession: e.target.value })}
//             className="block w-full border rounded px-4 py-2 mb-4"
//           />
//           <input
//             type="text"
//             placeholder="Time"
//             value={formData.time}
//             onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//             className="block w-full border rounded px-4 py-2 mb-4"
//           />
//           <input
//             type="text"
//             placeholder="Contact Hours"
//             value={formData.contactHours}
//             onChange={(e) => setFormData({ ...formData, contactHours: e.target.value })}
//             className="block w-full border rounded px-4 py-2 mb-4"
//           />
//           <input
//             type="text"
//             placeholder="PDF Path"
//             value={formData.pdfPath}
//             onChange={(e) => setFormData({ ...formData, pdfPath: e.target.value })}
//             className="block w-full border rounded px-4 py-2 mb-4"
//           />
//           <input
//             type="text"
//             placeholder="QuickBooks Payment Link"
//             value={formData.quickbooksLink}
//             onChange={(e) => setFormData({ ...formData, quickbooksLink: e.target.value })}
//             className="block w-full border rounded px-4 py-2 mb-4"
//           />
//           <input
//             type="text"
//             placeholder="Google Forms Registration Link"
//             value={formData.googleFormsLink}
//             onChange={(e) => setFormData({ ...formData, googleFormsLink: e.target.value })}
//             className="block w-full border rounded px-4 py-2 mb-4"
//           />

//           {/* Metadata Section */}
//           <div className="bg-gray-200 p-4 rounded-lg mb-4">
//             <h3 className="text-lg font-bold mb-2">Course Metadata</h3>
//             <div className="mb-2">
//               <label className="block font-bold mb-1">Category:</label>
//               <select
//                 value={metadata.category}
//                 onChange={(e) => setMetadata({ ...metadata, category: e.target.value })}
//                 className="w-full border rounded px-4 py-2"
//               >
//                 {categories.map((cat) => (
//                   <option key={cat} value={cat}>
//                     {cat}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-2">
//               <label className="block font-bold mb-1">Format:</label>
//               <select
//                 value={metadata.format}
//                 onChange={(e) => setMetadata({ ...metadata, format: e.target.value })}
//                 className="w-full border rounded px-4 py-2"
//               >
//                 {formats.map((format) => (
//                   <option key={format} value={format}>
//                     {format}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-2">
//               <label className="block font-bold mb-1">Language:</label>
//               <select
//                 value={metadata.language}
//                 onChange={(e) => setMetadata({ ...metadata, language: e.target.value })}
//                 className="w-full border rounded px-4 py-2"
//               >
//                 {languages.map((lang) => (
//                   <option key={lang} value={lang}>
//                     {lang}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-2">
//               <label className="block font-bold mb-1">Level:</label>
//               <select
//                 value={metadata.level}
//                 onChange={(e) => setMetadata({ ...metadata, level: e.target.value })}
//                 className="w-full border rounded px-4 py-2"
//               >
//                 {levels.map((level) => (
//                   <option key={level} value={level}>
//                     {level}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <label className="block font-bold mb-1">Duration:</label>
//               <select
//                 value={metadata.duration}
//                 onChange={(e) => setMetadata({ ...metadata, duration: e.target.value })}
//                 className="w-full border rounded px-4 py-2"
//               >
//                 {durations.map((duration) => (
//                   <option key={duration} value={duration}>
//                     {duration}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>

//           <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
//             {isEditing ? 'Update Course' : 'Add Course'}
//           </button>
//         </form>
//       )}
//     </main>
//   </div>
// );
//                 }
//                 export default AdminCourses;

// 'use client';

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowLeftIcon } from '@heroicons/react/24/solid';
// import { useRouter } from 'next/navigation';

// export default function AdminCoursePage() {
//   const router = useRouter();
//   const [courses, setCourses] = useState([]);
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     keyTopics: [''],
//     location: '',
//     nextSession: '',
//     time: '',
//     contactHours: '',
//     pdfPath: '',
//     category: 'Asbestos', // Default
//     format: 'Online', // Default
//     language: 'English', // Default
//     level: 'Initial', // Default
//     duration: '32 Hours', // Default
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [editId, setEditId] = useState(null);
//   const [previewCourse, setPreviewCourse] = useState(null);

//   const categories = ['Asbestos', 'Lead', 'Mold', 'Analytical', 'Worker Safety', 'CPR AED & First Aid', 'HAZWOPER'];
//   const formats = ['Online', 'In-Person', 'Online and In-Person'];
//   const languages = ['English', 'Español'];
//   const levels = ['Initial', 'Refresher', 'Bundles', 'Coming Soon'];
//   const durations = ['32 Hours', '8 Hours', '40 Hours', '24 Hours'];

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const response = await fetch('../api/courses');
//       const data = await response.json();
//       setCourses(data);
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const payload = { ...formData, keyTopics: formData.keyTopics };

//     try {
//       const method = isEditing ? 'PUT' : 'POST';
//       const endpoint = isEditing ? `../api/courses/${editId}` : '../api/courses';
//       const response = await fetch(endpoint, {
//         method,
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(payload),
//       });

//       if (!response.ok) throw new Error('Failed to save course');
//       fetchCourses();
//       resetForm();
//     } catch (error) {
//       console.error('Error saving course:', error);
//     }
//   };

//   const resetForm = () => {
//     setFormData({
//       title: '',
//       description: '',
//       keyTopics: [''],
//       location: '',
//       nextSession: '',
//       time: '',
//       contactHours: '',
//       pdfPath: '',
//       category: 'Asbestos',
//       format: 'Online',
//       language: 'English',
//       level: 'Initial',
//       duration: '32 Hours',
//     });
//     setIsEditing(false);
//     setEditId(null);
//     setPreviewCourse(null);
//   };

//   const handleEdit = (course) => {
//     setIsEditing(true);
//     setEditId(course.id);
//     setFormData({
//       ...course,
//       keyTopics: course.keyTopics || [],
//     });
//   };

//   const handleDelete = async (id) => {
//     try {
//       await fetch(`../api/courses/${id}`, {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//       });
//       fetchCourses();
//     } catch (error) {
//       console.error('Error deleting course:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen flex bg-gradient-to-r from-gray-700 to-gray-900 text-white">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-800 p-6">
//         <div className="flex items-center justify-between mb-6">
//           <button
//             className="text-blue-400 hover:text-blue-600 transition flex items-center"
//             onClick={() => router.push('/dashboard/pages/training')}
//           >
//             <ArrowLeftIcon className="w-5 h-5 mr-2" />
//             <span className="font-bold">Course Overview</span>
//           </button>
//         </div>
//         <h2 className="text-2xl font-bold mb-6 text-center">Admin Courses</h2>
//         <ul className="space-y-4">
//           {courses.map((course) => (
//             <li key={course.id} className="bg-gray-700 p-3 rounded hover:bg-gray-600">
//               <button onClick={() => setPreviewCourse(course)} className="text-left w-full">
//                 {course.title}
//               </button>
//             </li>
//           ))}
//         </ul>
//         <button
//           onClick={resetForm}
//           className="block w-full bg-green-500 text-white py-2 rounded mt-4 hover:bg-green-600"
//         >
//           Add New Course
//         </button>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-grow p-8">
//         {previewCourse ? (
//           <div className="bg-white shadow-lg p-6 rounded text-gray-900">
//             <h1 className="text-3xl font-bold mb-4">{previewCourse.title}</h1>
//             <p className="text-lg mb-4">{previewCourse.description}</p>
//             <h2 className="text-xl font-semibold mb-2">Key Topics:</h2>
//             <ul className="list-disc pl-6 mb-4">
//               {previewCourse.keyTopics.map((topic, index) => (
//                 <li key={index}>{topic}</li>
//               ))}
//             </ul>
//             <p><strong>Location:</strong> {previewCourse.location}</p>
//             <p><strong>Next Session:</strong> {previewCourse.nextSession}</p>
//             <p><strong>Time:</strong> {previewCourse.time}</p>
//             <p><strong>Contact Hours:</strong> {previewCourse.contactHours}</p>
//             <p><strong>Category:</strong> {previewCourse.category}</p>
//             <p><strong>Format:</strong> {previewCourse.format}</p>
//             <p><strong>Language:</strong> {previewCourse.language}</p>
//             <p><strong>Level:</strong> {previewCourse.level}</p>
//             <p><strong>Duration:</strong> {previewCourse.duration}</p>
//             <div className="mt-4 flex space-x-4">
//               <button
//                 onClick={() => handleEdit(previewCourse)}
//                 className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(previewCourse.id)}
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ) : (
//           <form onSubmit={handleSubmit} className="bg-white shadow-lg p-6 rounded text-gray-900">
//             <h2 className="text-2xl font-bold mb-6">{isEditing ? 'Edit Course' : 'Add New Course'}</h2>
//             <div className="mb-4">
//               <label className="block font-bold mb-2">Course Title</label>
//               <input
//                 type="text"
//                 value={formData.title}
//                 onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                 className="w-full border px-4 py-2 rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block font-bold mb-2">Description</label>
//               <textarea
//                 value={formData.description}
//                 onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                 className="w-full border px-4 py-2 rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block font-bold mb-2">Key Topics</label>
//               {formData.keyTopics.map((topic, index) => (
//                 <div key={index} className="flex items-center mb-2">
//                   <input
//                     type="text"
//                     value={topic}
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         keyTopics: formData.keyTopics.map((t, i) => (i === index ? e.target.value : t)),
//                       })
//                     }
//                     className="w-full border px-4 py-2 rounded"
//                   />
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setFormData({ ...formData, keyTopics: formData.keyTopics.filter((_, i) => i !== index) })
//                     }
//                     className="ml-2 text-red-500"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               ))}
//               <button
//                 type="button"
//                 onClick={() => setFormData({ ...formData, keyTopics: [...formData.keyTopics, ''] })}
//                 className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
//               >
//                 Add Key Topic
//               </button>
//             </div>
//             <div className="mb-4">
//               <label className="block font-bold mb-2">Location</label>
//               <input
//                 type="text"
//                 value={formData.location}
//                 onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//                 className="w-full border px-4 py-2 rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block font-bold mb-2">Next Session</label>
//               <input
//                 type="text"
//                 value={formData.nextSession}
//                 onChange={(e) => setFormData({ ...formData, nextSession: e.target.value })}
//                 className="w-full border px-4 py-2 rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block font-bold mb-2">Time</label>
//               <input
//                 type="text"
//                 value={formData.time}
//                 onChange={(e) => setFormData({ ...formData, time: e.target.value })}
//                 className="w-full border px-4 py-2 rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block font-bold mb-2">Contact Hours</label>
//               <input
//                 type="text"
//                 value={formData.contactHours}
//                 onChange={(e) => setFormData({ ...formData, contactHours: e.target.value })}
//                 className="w-full border px-4 py-2 rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block font-bold mb-2">PDF Path</label>
//               <input
//                 type="text"
//                 value={formData.pdfPath}
//                 onChange={(e) => setFormData({ ...formData, pdfPath: e.target.value })}
//                 className="w-full border px-4 py-2 rounded"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block font-bold mb-2">Category</label>
//               <select
//                 value={formData.category}
//                 onChange={(e) => setFormData({ ...formData, category: e.target.value })}
//                 className="w-full border px-4 py-2 rounded"
//               >
//                 {categories.map((cat) => (
//                   <option key={cat} value={cat}>
//                     {cat}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block font-bold mb-2">Format</label>
//               <select
//                 value={formData.format}
//                 onChange={(e) => setFormData({ ...formData, format: e.target.value })}
//                 className="w-full border px-4 py-2 rounded"
//               >
//                 {formats.map((format) => (
//                   <option key={format} value={format}>
//                     {format}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block font-bold mb-2">Language</label>
//               <select
//                 value={formData.language}
//                 onChange={(e) => setFormData({ ...formData, language: e.target.value })}
//                 className="w-full border px-4 py-2 rounded"
//               >
//                 {languages.map((lang) => (
//                   <option key={lang} value={lang}>
//                     {lang}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block font-bold mb-2">Level</label>
//               <select
//                 value={formData.level}
//                 onChange={(e) => setFormData({ ...formData, level: e.target.value })}
//                 className="w-full border px-4 py-2 rounded"
//               >
//                 {levels.map((level) => (
//                   <option key={level} value={level}>
//                     {level}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div className="mb-4">
//               <label className="block font-bold mb-2">Duration</label>
//               <select
//                 value={formData.duration}
//                 onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
//                 className="w-full border px-4 py-2 rounded"
//               >
//                 {durations.map((duration) => (
//                   <option key={duration} value={duration}>
//                     {duration}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <button
//               type="submit"
//               className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//             >
//               {isEditing ? 'Update Course' : 'Add Course'}
//             </button>
//           </form>
//         )}
//       </main>
//     </div>
//   );
// }

// 'use client';

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowLeftIcon } from '@heroicons/react/24/solid';

// export default function AdminCourseEditor() {
//   const [formData, setFormData] = useState({
//     title: 'AHERA Contractor/Supervisor (Initial) - 40 Hour Course',
//     description: '',
//     additionalParagraph: '',
//     keyTopics: ['Understanding the properties and hazards of asbestos'],
//     location: '123 Training Center, City, State',
//     nextSession: 'November 15, 2024',
//     time: '8:00 AM - 4:30 PM',
//     contactHours: '40 Hours',
//     pdfPath: '/path-to-course-schedule.pdf',
//     quickbooksLink: '',
//     registrationLink: '',
//     category: 'Asbestos',
//     format: 'Online',
//     language: 'English',
//     level: 'Initial',
//     duration: '40 Hours',
//   });
//   const [courses, setCourses] = useState([
//     { id: 1, title: 'CPR AED & First Aid', category: 'CPR AED & First Aid' },
//     { id: 2, title: 'HAZWOPER 40 Hour', category: 'HAZWOPER' },
//     { id: 3, title: 'Lead Safety Training', category: 'Lead' },
//   ]);
//   const [isEditing, setIsEditing] = useState(false);

//   const categories = ['Asbestos', 'Lead', 'Mold', 'Analytical', 'Worker Safety', 'CPR AED & First Aid', 'HAZWOPER'];
//   const formats = ['Online', 'In-Person', 'Online and In-Person'];
//   const languages = ['English', 'Español'];
//   const levels = ['Initial', 'Refresher', 'Bundles', 'Coming Soon'];
//   const durations = ['32 Hours', '8 Hours', '40 Hours', '24 Hours'];

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const addKeyTopic = () => {
//     setFormData((prev) => ({
//       ...prev,
//       keyTopics: [...prev.keyTopics, ''],
//     }));
//   };

//   const updateKeyTopic = (index, value) => {
//     const updatedKeyTopics = [...formData.keyTopics];
//     updatedKeyTopics[index] = value;
//     setFormData((prev) => ({ ...prev, keyTopics: updatedKeyTopics }));
//   };

//   const removeKeyTopic = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       keyTopics: prev.keyTopics.filter((_, i) => i !== index),
//     }));
//   };

//   const handleEdit = (course) => {
//     setIsEditing(true);
//     setFormData(course);
//   };

//   const handleDelete = (id) => {
//     setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));
//   };

//   const handlePublish = () => {
//     console.log(isEditing ? 'Republished Course:' : 'Published Course:', formData);
//     setIsEditing(false);
//   };

//   return (
//     <div className="min-h-screen flex bg-gradient-to-r from-gray-700 to-gray-900 text-white">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-800 p-6">
//         <div className="flex items-center justify-between mb-6">
//           <button className="text-blue-400 hover:text-blue-600 transition flex items-center">
//             <ArrowLeftIcon className="w-5 h-5 mr-2" />
//             <span className="font-bold">Course Overview</span>
//           </button>
//         </div>
//         <h2 className="text-2xl font-bold mb-6 text-center">Admin Courses</h2>
//         {categories.map((category) => (
//           <div key={category} className="mb-4">
//             <h3 className="text-lg font-semibold">{category}</h3>
//             <ul className="space-y-2">
//               {courses
//                 .filter((course) => course.category === category)
//                 .map((course) => (
//                   <li
//                     key={course.id}
//                     className="bg-gray-700 p-3 rounded hover:bg-gray-600 cursor-pointer"
//                     onClick={() => handleEdit(course)}
//                   >
//                     {course.title}
//                   </li>
//                 ))}
//             </ul>
//           </div>
//         ))}
//       </aside>

//       {/* Main Content */}
//       <main className="flex-grow p-8">
//         <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
//           {/* Title */}
//           <input
//             type="text"
//             value={formData.title}
//             onChange={(e) => handleChange('title', e.target.value)}
//             className="w-full text-3xl font-bold mb-4 border-b-2 border-gray-300 focus:outline-none"
//             placeholder="Course Title"
//           />

//           {/* Description */}
//           <textarea
//             value={formData.description}
//             onChange={(e) => handleChange('description', e.target.value)}
//             className="w-full text-lg border border-gray-300 rounded-lg p-4 mb-6 focus:outline-none"
//             placeholder="Add a course description..."
//           />

//           {/* Additional Paragraph */}
//           <textarea
//             value={formData.additionalParagraph}
//             onChange={(e) => handleChange('additionalParagraph', e.target.value)}
//             className="w-full text-lg border border-gray-300 rounded-lg p-4 mb-6 focus:outline-none"
//             placeholder="Add an additional paragraph..."
//           />

//           {/* Key Topics */}
//           <h2 className="text-2xl font-semibold mb-4">Key Topics Include:</h2>
//           <ul className="list-disc list-inside space-y-2">
//             {formData.keyTopics.map((topic, index) => (
//               <li key={index} className="flex items-center">
//                 <input
//                   type="text"
//                   value={topic}
//                   onChange={(e) => updateKeyTopic(index, e.target.value)}
//                   className="w-full border rounded-lg px-3 py-2 mr-4 focus:outline-none"
//                   placeholder="Key Topic"
//                 />
//                 <button
//                   onClick={() => removeKeyTopic(index)}
//                   className="text-red-500 hover:underline"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <button
//             onClick={addKeyTopic}
//             className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//           >
//             Add Key Topic
//           </button>

//           {/* Dropdowns */}
//           <div className="flex space-x-4 mt-6">
//             <select
//               value={formData.category}
//               onChange={(e) => handleChange('category', e.target.value)}
//               className="w-1/5 border rounded-lg px-3 py-2"
//             >
//               {categories.map((category) => (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={formData.format}
//               onChange={(e) => handleChange('format', e.target.value)}
//               className="w-1/5 border rounded-lg px-3 py-2"
//             >
//               {formats.map((format) => (
//                 <option key={format} value={format}>
//                   {format}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={formData.language}
//               onChange={(e) => handleChange('language', e.target.value)}
//               className="w-1/5 border rounded-lg px-3 py-2"
//             >
//               {languages.map((language) => (
//                 <option key={language} value={language}>
//                   {language}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={formData.level}
//               onChange={(e) => handleChange('level', e.target.value)}
//               className="w-1/5 border rounded-lg px-3 py-2"
//             >
//               {levels.map((level) => (
//                 <option key={level} value={level}>
//                   {level}
//                 </option>
//               ))}
//             </select>
//             <select
//               value={formData.duration}
//               onChange={(e) => handleChange('duration', e.target.value)}
//               className="w-1/5 border rounded-lg px-3 py-2"
//             >
//               {durations.map((duration) => (
//                 <option key={duration} value={duration}>
//                   {duration}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Action Buttons */}
//           <div className="mt-8 flex space-x-4">
//             <button
//               onClick={handlePublish}
//               className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
//             >
//               {isEditing ? 'Republish' : 'Publish'}
//             </button>
//             <button
//               onClick={() => setFormData({})}
//               className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
//             >
//               Edit
//             </button>
//             <button
//               onClick={() => handleDelete(formData.id)}
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       </main>

//       {/* Right Sidebar */}
//       <aside className="w-80 bg-gray-800 p-6 text-white">
//         <h2 className="text-2xl font-bold mb-4 text-center">Course Details</h2>
//         <div className="text-lg text-gray-300 mb-6">
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">Location:</label>
//             <input
//               type="text"
//               value={formData.location}
//               onChange={(e) => handleChange('location', e.target.value)}
//               className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">Next Session:</label>
//             <input
//               type="text"
//               value={formData.nextSession}
//               onChange={(e) => handleChange('nextSession', e.target.value)}
//               className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">Time:</label>
//             <input
//               type="text"
//               value={formData.time}
//               onChange={(e) => handleChange('time', e.target.value)}
//               className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">Contact Hours:</label>
//             <input
//               type="text"
//               value={formData.contactHours}
//               onChange={(e) => handleChange('contactHours', e.target.value)}
//               className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
//             />
//           </div>
//           <motion.a
//             href={formData.pdfPath}
//             download
//             className="block mt-6 bg-green-500 text-center text-white py-2 rounded hover:bg-green-600 transition"
//           >
//             Download PDF Schedule
//           </motion.a>
//         </div>
//       </aside>
//     </div>
//   );
// }




//visually looks great no function

// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { PlusCircleIcon } from "@heroicons/react/24/solid";

// export default function AdminCourseEditor() {
//   const [formData, setFormData] = useState({
//     title: "AHERA Contractor/Supervisor (Initial) - 40 Hour Course",
//     description: "",
//     additionalParagraph: "",
//     keyTopics: ["Understanding the properties and hazards of asbestos"],
//     location: "123 Training Center, City, State",
//     nextSession: "November 15, 2024",
//     time: "8:00 AM - 4:30 PM",
//     contactHours: "40 Hours",
//     pdfPath: "",
//     quickbooksLink: "",
//     registrationLink: "",
//     talentLmsLink: "", // New field
//     category: "Asbestos",
//     format: "Online",
//     language: "English",
//     level: "Initial",
//     duration: "40 Hours",
//   });
//   const [courses, setCourses] = useState([
//     { id: 1, title: "CPR AED & First Aid", category: "CPR AED & First Aid" },
//     { id: 2, title: "HAZWOPER 40 Hour", category: "HAZWOPER" },
//     { id: 3, title: "Lead Safety Training", category: "Lead" },
//   ]);
//   const [isEditing, setIsEditing] = useState(false);

//   const categories = [
//     "Asbestos",
//     "Lead",
//     "Mold",
//     "Analytical",
//     "Worker Safety",
//     "CPR AED & First Aid",
//     "HAZWOPER",
//   ];
//   const formats = ["Online", "In-Person", "Online and In-Person"];
//   const languages = ["English", "Español"];
//   const levels = ["Initial", "Refresher", "Bundles", "Coming Soon"];
//   const durations = ["32 Hours", "8 Hours", "40 Hours", "24 Hours"];

//   const handleChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//   };

//   const addKeyTopic = () => {
//     setFormData((prev) => ({
//       ...prev,
//       keyTopics: [...prev.keyTopics, ""],
//     }));
//   };

//   const updateKeyTopic = (index, value) => {
//     const updatedKeyTopics = [...formData.keyTopics];
//     updatedKeyTopics[index] = value;
//     setFormData((prev) => ({ ...prev, keyTopics: updatedKeyTopics }));
//   };

//   const removeKeyTopic = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       keyTopics: prev.keyTopics.filter((_, i) => i !== index),
//     }));
//   };

//   const handleEdit = (course) => {
//     setIsEditing(true);
//     setFormData(course);
//   };

//   const handleDelete = (id) => {
//     setCourses((prevCourses) =>
//       prevCourses.filter((course) => course.id !== id)
//     );
//   };

//   const handlePublish = () => {
//     console.log(
//       isEditing ? "Republished Course:" : "Published Course:",
//       formData
//     );
//     setIsEditing(false);
//   };

//   const handleAddNew = () => {
//     setIsEditing(false);
//     setFormData({
//       title: "",
//       description: "",
//       additionalParagraph: "",
//       keyTopics: [],
//       location: "",
//       nextSession: "",
//       time: "",
//       contactHours: "",
//       pdfPath: "",
//       quickbooksLink: "",
//       registrationLink: "",
//       talentLmsLink: "", // New field
//       category: "Asbestos",
//       format: "Online",
//       language: "English",
//       level: "Initial",
//       duration: "40 Hours",
//     });
//   };

//   return (
//     <div className="min-h-screen flex bg-gradient-to-r from-gray-700 to-gray-900 text-white">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-800 p-6">
//         <div className="flex items-center justify-between mb-6">
//           <button
//             onClick={handleAddNew}
//             className="text-blue-400 hover:text-blue-600 transition flex items-center"
//           >
//             <PlusCircleIcon className="w-5 h-5 mr-2" />
//             <span className="font-bold">Add New Course</span>
//           </button>
//         </div>
//         <h2 className="text-2xl font-bold mb-6 text-center">Admin Courses</h2>
//         {categories.map((category) => (
//           <div key={category} className="mb-4">
//             <h3 className="text-lg font-semibold">{category}</h3>
//             <ul className="space-y-2">
//               {courses
//                 .filter((course) => course.category === category)
//                 .map((course) => (
//                   <li
//                     key={course.id}
//                     className="bg-gray-700 p-3 rounded hover:bg-gray-600 cursor-pointer"
//                     onClick={() => handleEdit(course)}
//                   >
//                     {course.title}
//                   </li>
//                 ))}
//             </ul>
//           </div>
//         ))}
//       </aside>

      // {/* Main Content */}
      // <main className="flex-grow p-8">
      //   <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
      //     {/* Title */}
      //     <input
      //       type="text"
      //       value={formData.title}
      //       onChange={(e) => handleChange("title", e.target.value)}
      //       className="w-full text-3xl font-bold mb-4 border-b-2 border-gray-300 focus:outline-none"
      //       placeholder="Course Title"
      //     />

      //     {/* Description */}
      //     <textarea
      //       value={formData.description}
      //       onChange={(e) => handleChange("description", e.target.value)}
      //       className="w-full text-lg border border-gray-300 rounded-lg p-4 mb-6 focus:outline-none"
      //       placeholder="Add a course description..."
      //     />

      //     {/* Key Topics */}
      //     <h2 className="text-2xl font-semibold mb-4">Key Topics Include:</h2>
      //     <ul className="list-disc list-inside space-y-2">
      //       {formData.keyTopics.map((topic, index) => (
      //         <li key={index} className="flex items-center">
      //           <input
      //             type="text"
      //             value={topic}
      //             onChange={(e) => updateKeyTopic(index, e.target.value)}
      //             className="w-full border rounded-lg px-3 py-2 mr-4 focus:outline-none"
      //             placeholder="Key Topic"
      //           />
      //           <button
      //             onClick={() => removeKeyTopic(index)}
      //             className="text-red-500 hover:underline"
      //           >
      //             Remove
      //           </button>
      //         </li>
      //       ))}
      //     </ul>
      //     <button
      //       onClick={addKeyTopic}
      //       className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      //     >
      //       Add Key Topic
      //     </button>

      //     {/* Additional Paragraph */}
      //     <h2 className="text-2xl font-semibold mt-8">
      //       Additional Information
      //     </h2>
      //     <textarea
      //       value={formData.additionalParagraph}
      //       onChange={(e) =>
      //         handleChange("additionalParagraph", e.target.value)
      //       }
      //       className="w-full text-lg border border-gray-300 rounded-lg p-4 mt-4 focus:outline-none"
      //       placeholder="Add additional course information..."
      //     />

      //     {/* Dropdowns */}
      //     <div className="flex space-x-4 mt-6">
      //       <select
      //         value={formData.category}
      //         onChange={(e) => handleChange("category", e.target.value)}
      //         className="w-1/5 border rounded-lg px-3 py-2"
      //       >
      //         {categories.map((category) => (
      //           <option key={category} value={category}>
      //             {category}
      //           </option>
      //         ))}
      //       </select>
      //       <select
      //         value={formData.format}
      //         onChange={(e) => handleChange("format", e.target.value)}
      //         className="w-1/5 border rounded-lg px-3 py-2"
      //       >
      //         {formats.map((format) => (
      //           <option key={format} value={format}>
      //             {format}
      //           </option>
      //         ))}
      //       </select>
      //       <select
      //         value={formData.language}
      //         onChange={(e) => handleChange("language", e.target.value)}
      //         className="w-1/5 border rounded-lg px-3 py-2"
      //       >
      //         {languages.map((language) => (
      //           <option key={language} value={language}>
      //             {language}
      //           </option>
      //         ))}
      //       </select>
      //       <select
      //         value={formData.level}
      //         onChange={(e) => handleChange("level", e.target.value)}
      //         className="w-1/5 border rounded-lg px-3 py-2"
      //       >
      //         {levels.map((level) => (
      //           <option key={level} value={level}>
      //             {level}
      //           </option>
      //         ))}
      //       </select>
      //       <select
      //         value={formData.duration}
      //         onChange={(e) => handleChange("duration", e.target.value)}
      //         className="w-1/5 border rounded-lg px-3 py-2"
      //       >
      //         {durations.map((duration) => (
      //           <option key={duration} value={duration}>
      //             {duration}
      //           </option>
      //         ))}
      //       </select>
      //     </div>

      //     {/* Action Buttons */}
      //     <div className="mt-8 flex space-x-4">
      //       <button
      //         onClick={handlePublish}
      //         className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      //       >
      //         {isEditing ? "Republish" : "Publish"}
      //       </button>
      //       <button
      //         onClick={() => handleDelete(formData.id)}
      //         className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      //       >
      //         Delete
      //       </button>
      //     </div>
      //   </div>
//       </main>

//       {/* Right Sidebar */}
//       <aside className="w-80 bg-gray-800 p-6 text-white">
//         <h2 className="text-2xl font-bold mb-4 text-center">Course Details</h2>
//         <div className="text-lg text-gray-300 mb-6">
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">Location:</label>
//             <input
//               type="text"
//               value={formData.location}
//               onChange={(e) => handleChange("location", e.target.value)}
//               className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">Next Session:</label>
//             <input
//               type="text"
//               value={formData.nextSession}
//               onChange={(e) => handleChange("nextSession", e.target.value)}
//               className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">Time:</label>
//             <input
//               type="text"
//               value={formData.time}
//               onChange={(e) => handleChange("time", e.target.value)}
//               className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">Contact Hours:</label>
//             <input
//               type="text"
//               value={formData.contactHours}
//               onChange={(e) => handleChange("contactHours", e.target.value)}
//               className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">
//               PDF Schedule Link:
//             </label>
//             <input
//               type="text"
//               value={formData.pdfPath}
//               onChange={(e) => handleChange("pdfPath", e.target.value)}
//               className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
//               placeholder="Add PDF schedule link..."
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">
//               QuickBooks Payment Link:
//             </label>
//             <input
//               type="text"
//               value={formData.quickbooksLink}
//               onChange={(e) => handleChange("quickbooksLink", e.target.value)}
//               className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
//               placeholder="Add payment link..."
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block font-semibold mb-1">
//               Registration Google Form Link:
//             </label>
//             <input
//               type="text"
//               value={formData.registrationLink}
//               onChange={(e) => handleChange("registrationLink", e.target.value)}
//               className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
//               placeholder="Add registration link..."
//             />
//           </div>
//           {formData.format === "Online" && (
//             <div className="mb-4">
//               <label className="block font-semibold mb-1">
//                 Talent LMS Link:
//               </label>
//               <input
//                 type="text"
//                 value={formData.talentLmsLink}
//                 onChange={(e) => handleChange("talentLmsLink", e.target.value)}
//                 className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
//                 placeholder="Add Talent LMS link..."
//               />
//             </div>
//           )}

//           <motion.a
//             href={formData.registrationLink || "#"}
//             className={`block mt-6 text-center py-2 rounded transition ${
//               formData.registrationLink
//                 ? "bg-blue-500 hover:bg-blue-600 text-white"
//                 : "bg-gray-500 text-gray-300 cursor-not-allowed"
//             }`}
//           >
//             Register
//           </motion.a>
//         </div>
//       </aside>
//     </div>
//   );
// }



"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
interface CourseFormData {
  title: string;
  description: string;
  additionalParagraph: string;
  keyTopics: string[]; // Correctly define as an array of strings
  location: string;
  nextSession: string;
  time: string;
  contactHours: string;
  pdfPath: string;
  quickbooksLink: string;
  registrationLink: string;
  talentLmsLink: string;
  category: string;
  format: string;
  language: string;
  level: string;
  duration: string;
  type: string;
}
interface FormData {
  id?: string; // Make 'id' optional if it's not always present
  title: string;
  description: string;
  additionalParagraph: string;
  keyTopics: string[];
  location: string;
  nextSession: string;
  time: string;
  contactHours: string;
  pdfPath: string;
  quickbooksLink: string;
  registrationLink: string;
  talentLmsLink: string;
  category: string;
  format: string;
  language: string;
  level: string;
  duration: string;
  type: string;
}



export default function AdminCourseEditor() {
  const [formData, setFormData] = useState<FormData>({
    id: "", // Ensure id is always initialized as a string
    title: "",
    description: "",
    additionalParagraph: "",
    keyTopics: [],
    location: "",
    nextSession: "",
    time: "",
    contactHours: "",
    pdfPath: "",
    quickbooksLink: "",
    registrationLink: "",
    talentLmsLink: "",
    category: "Asbestos",
    format: "Online",
    language: "English",
    level: "Initial",
    duration: "40 Hours",
    type: "Default",
  });
  
  
  
  

  const [courses, setCourses] = useState<Course[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(true);
  const [courseToDelete, setCourseToDelete] = useState<Course | null>(null);


  // Dropdown data
  const formats = ["Online", "In-Person", "Online and In-Person"];
  const categories = [
    "Asbestos",
    "Lead",
    "Mold",
    "Analytical",
    "Worker Safety",
    "CPR AED & First Aid",
    "HAZWOPER",
  ];
  const languages = ["English", "Español"];
  const levels = ["Initial", "Refresher", "Bundles", "Coming Soon"];
  const durations = ["1 Hour", "1.5 Hours","4 Hours", "8 Hours", "16 Hours", "24 Hours", "36 Hours", "40 Hours", "TBD"];

  // Fetch courses on component mount
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("../api/courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  const handleChange = (field: keyof typeof formData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  

  const addKeyTopic = () => {
    setFormData((prev) => ({
      ...prev,
      keyTopics: [...prev.keyTopics, ""],
    }));
  };
  
  const updateKeyTopic = (index: number, value: string) => {
    const updatedKeyTopics = [...formData.keyTopics];
    updatedKeyTopics[index] = value;
    setFormData((prev) => ({ ...prev, keyTopics: updatedKeyTopics }));
  };
  
  

  const removeKeyTopic = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      keyTopics: prev.keyTopics.filter((_, i) => i !== index),
    }));
  };
  

  type Course = {
    id?: string; // Make id optional to match FormData
    title: string;
    description: string;
    additionalParagraph: string;
    keyTopics: string[];
    location: string;
    nextSession: string;
    time: string;
    contactHours: string;
    pdfPath: string;
    quickbooksLink: string;
    registrationLink: string;
    talentLmsLink: string;
    category: string;
    format: string;
    language: string;
    level: string;
    duration: string;
    type: string;
  };
  
  
  
  const handleEdit = (course: typeof formData) => {
    setIsEditing(true);
    setFormData(course);
  };
  
  
  

   // Confirm delete course
   const confirmDeleteCourse = async () => {
    if (!courseToDelete?.id) {
      console.error("No course selected or missing course ID.");
      return;
    }

    try {
      const response = await fetch(
        `/dashboard/pages/api/courses?id=${courseToDelete.id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setCourses((prevCourses) =>
          prevCourses.filter((course) => course.id !== courseToDelete.id)
        );
        setPopupVisible(false);
        setCourseToDelete(null);
      } else {
        console.error("Failed to delete course.");
      }
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  const handleDelete = (course: Course) => {
    if (showDeletePopup) {
      setCourseToDelete(course);
      setPopupVisible(true);
    } else {
      setCourseToDelete(course);
      confirmDeleteCourse();
    }
  };
  

  // Handle popup preference change
  const handlePopupPreferenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const shouldShowPopup = !e.target.checked;
    setShowDeletePopup(shouldShowPopup);
    localStorage.setItem("showDeletePopup", shouldShowPopup ? "true" : "false");
  };
  


  const handlePublish = async () => {
    try {
      if (isEditing) {
        await fetch(`../api/courses/${formData.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        
        setCourses((prevCourses) =>
          prevCourses.map((course) =>
            course.id === formData.id ? { ...course, ...formData } : course
          )
        );
      } else {
        const response = await fetch("../api/courses", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const newCourse = await response.json();
        setCourses((prevCourses) => [...prevCourses, newCourse]);
      }
      setFormData({
        title: "",
        description: "",
        additionalParagraph: "",
        keyTopics: [],
        location: "",
        nextSession: "",
        time: "",
        contactHours: "",
        pdfPath: "",
        quickbooksLink: "",
        registrationLink: "",
        talentLmsLink: "",
        category: "Asbestos",
        format: "Online",
        language: "English",
        level: "Initial",
        duration: "40 Hours",
        type: "Default",
      });
      setIsEditing(false);
    } catch (error) {
      console.error("Error publishing course:", error);
    }
  };

  const handleAddNew = () => {
    setIsEditing(false);
    setFormData({
      title: "",
      description: "",
      additionalParagraph: "",
      keyTopics: [],
      location: "",
      nextSession: "",
      time: "",
      contactHours: "",
      pdfPath: "",
      quickbooksLink: "",
      registrationLink: "",
      talentLmsLink: "",
      category: "Asbestos",
      format: "Online",
      language: "English",
      level: "Initial",
      duration: "40 Hours",
      type: "Default",
    });
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-r from-gray-700 to-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handleAddNew}
            className="text-blue-400 hover:text-blue-600 transition flex items-center"
          >
            <PlusCircleIcon className="w-5 h-5 mr-2" />
            <span className="font-bold">Add New Course</span>
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Courses</h2>
        {categories.map((category) => (
          <div key={category} className="mb-4">
            <h3 className="text-lg font-semibold">{category}</h3>
            <ul className="space-y-2">
              {courses
                .filter((course) => course.category === category)
                .map((course) => (
                  <li
                    key={course.id}
                    className="bg-gray-700 p-3 rounded hover:bg-gray-600 cursor-pointer"
                    onClick={() => handleEdit(course)}
                  >
                    {course.title}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </aside>


      {/* Main Content */}
      <main className="flex-grow p-8">
        <div className="bg-white text-gray-900 p-8 rounded-lg shadow-lg">
          {/* Title */}
          <input
            type="text"
            value={formData.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className="w-full text-3xl font-bold mb-4 border-b-2 border-gray-300 focus:outline-none"
            placeholder="Course Title"
          />

          {/* Description */}
          <textarea
            value={formData.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className="w-full text-lg border border-gray-300 rounded-lg p-4 mb-6 focus:outline-none"
            placeholder="Add a course description..."
          />

          {/* Key Topics */}
          <h2 className="text-2xl font-semibold mb-4">Key Topics Include:</h2>
          <ul className="list-disc list-inside space-y-2">
          {formData.keyTopics.map((topic, index) => (
            <li key={index} className="flex items-center">
              <input
                type="text"
                value={topic}
                onChange={(e) => updateKeyTopic(index, e.target.value)}
                className="w-full border rounded-lg px-3 py-2 mr-4 focus:outline-none"
                placeholder="Key Topic"
              />
              <button
                onClick={() => removeKeyTopic(index)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={addKeyTopic} // This ensures the function is called when clicked
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Add Key Topic
        </button>

          {/* Additional Paragraph */}
          <h2 className="text-2xl font-semibold mt-8">
            Additional Information
          </h2>
          <textarea
            value={formData.additionalParagraph}
            onChange={(e) =>
              handleChange("additionalParagraph", e.target.value)
            }
            className="w-full text-lg border border-gray-300 rounded-lg p-4 mt-4 focus:outline-none"
            placeholder="Add additional course information..."
          />

          {/* Dropdowns */}
          <div className="flex space-x-4 mt-6">
            <select
              value={formData.category}
              onChange={(e) => handleChange("category", e.target.value)}
              className="w-1/5 border rounded-lg px-3 py-2"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <select
              value={formData.format}
              onChange={(e) => handleChange("format", e.target.value)}
              className="w-1/5 border rounded-lg px-3 py-2"
            >
              {formats.map((format) => (
                <option key={format} value={format}>
                  {format}
                </option>
              ))}
            </select>
            <select
              value={formData.language}
              onChange={(e) => handleChange("language", e.target.value)}
              className="w-1/5 border rounded-lg px-3 py-2"
            >
              {languages.map((language) => (
                <option key={language} value={language}>
                  {language}
                </option>
              ))}
            </select>
            <select
              value={formData.level}
              onChange={(e) => handleChange("level", e.target.value)}
              className="w-1/5 border rounded-lg px-3 py-2"
            >
              {levels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
            <select
              value={formData.duration}
              onChange={(e) => handleChange("duration", e.target.value)}
              className="w-1/5 border rounded-lg px-3 py-2"
            >
              {durations.map((duration) => (
                <option key={duration} value={duration}>
                  {duration}
                </option>
              ))}
            </select>

            {/* <select
            value={formData.type}
            onChange={(e) => handleChange("type", e.target.value)}
            className="w-1/5 border rounded-lg px-3 py-2"
          >
            <option value="In-Person">In-Person</option>
            <option value="Online">Online</option>
            <option value="Hybrid">Hybrid</option>
          </select> */}

          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex space-x-4">
  <button
    onClick={handlePublish}
    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
  >
    {isEditing ? "Republish" : "Publish"}
  </button>
  <button
    onClick={() => handleDelete(formData)} // Pass formData for the currently edited course
    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
  >
    Delete
  </button>
</div>
        </div>
      </main>


{/* Popup for Delete Confirmation */}
{popupVisible && courseToDelete && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg text-black">
      <h3 className="text-xl font-bold mb-4">Are you sure?</h3>
      <p>
        Do you want to delete the course{" "}
        <span className="font-semibold">{courseToDelete.title}</span>?
      </p>
      <div className="flex items-center mt-4">
        <input
          type="checkbox"
          id="dontShowAgain"
          className="mr-2"
          onChange={handlePopupPreferenceChange}
        />
        <label htmlFor="dontShowAgain">Don't show this confirmation again</label>
      </div>
      <div className="flex justify-end mt-4 space-x-2">
        <button
          onClick={() => {
            setPopupVisible(false);
            setCourseToDelete(null);
          }}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
        >
          Cancel
        </button>
        <button
          onClick={confirmDeleteCourse}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)}




          <aside className="w-80 bg-gray-800 p-6 text-white">
          <h2 className="text-2xl font-bold mb-4 text-center">Course Details</h2>
          <div className="text-lg text-gray-300 mb-6">
            <div className="mb-4">
              <label className="block font-semibold mb-1">Location:</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleChange("location", e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Next Session:</label>
              <input
                type="text"
                value={formData.nextSession}
                onChange={(e) => handleChange("nextSession", e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Time:</label>
              <input
                type="text"
                value={formData.time}
                onChange={(e) => handleChange("time", e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Contact Hours:</label>
              <input
                type="text"
                value={formData.contactHours}
                onChange={(e) => handleChange("contactHours", e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">
                PDF Schedule Link:
              </label>
              <input
                type="text"
                value={formData.pdfPath}
                onChange={(e) => handleChange("pdfPath", e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
                placeholder="Add PDF schedule link..."
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">
                QuickBooks Payment Link:
              </label>
              <input
                type="text"
                value={formData.quickbooksLink}
                onChange={(e) => handleChange("quickbooksLink", e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
                placeholder="Add payment link..."
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">
                Registration Google Form Link:
              </label>
              <input
                type="text"
                value={formData.registrationLink}
                onChange={(e) => handleChange("registrationLink", e.target.value)}
                className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
                placeholder="Add registration link..."
              />
            </div>
            {formData.format === "Online" && (
              <div className="mb-4">
                <label className="block font-semibold mb-1">
                  Talent LMS Link:
                </label>
                <input
                  type="text"
                  value={formData.talentLmsLink}
                  onChange={(e) => handleChange("talentLmsLink", e.target.value)}
                  className="w-full bg-gray-700 text-white px-4 py-2 rounded focus:outline-none"
                  placeholder="Add Talent LMS link..."
                />
              </div>
            )}
  
            <motion.a
              href={formData.registrationLink || "#"}
              className={`block mt-6 text-center py-2 rounded transition ${
                formData.registrationLink
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-gray-500 text-gray-300 cursor-not-allowed"
              }`}
            >
              Register
            </motion.a>
          </div>
        </aside>
        </div>

  );
}
