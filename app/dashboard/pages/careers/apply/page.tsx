// // "use client";

// // import { useState } from "react";
// // import { useRouter } from "next/navigation";

// // const jobListings = [
// //   "Mold Analyst",
// //   "Asbestos Analyst",
// //   "Field Sampler",
// //   "Laboratory Assistant",
// //   "Environmental Technician",
// //   "Lab Technician",
// //   "Project Manager",
// //   "Health & Safety Officer",
// //   "Data Analyst",
// // ];

// // const ApplyPage = () => {
// //   const router = useRouter();

// //   // Form state
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     phone: "",
// //     address: "",
// //     jobTitle: "",
// //     resume: null as File | null,
// //     coverLetter: "",
// //     experience: "",
// //     availability: "",
// //   });

// //   const [errors, setErrors] = useState<Record<string, string>>({});

// //   // Handle input changes
// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   // Handle file upload safely
// //   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const file = e.target.files?.[0];
// //     if (file) {
// //       setFormData((prev) => ({ ...prev, resume: file }));
// //     }
// //   };

// //   // Validate required fields
// //   const validateForm = () => {
// //     const newErrors: Record<string, string> = {};
// //     if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required.";
// //     if (!formData.email.trim()) newErrors.email = "Email is required.";
// //     if (!formData.phone.trim()) newErrors.phone = "Phone Number is required.";
// //     if (!formData.jobTitle) newErrors.jobTitle = "Please select a job position.";
// //     if (!formData.resume) newErrors.resume = "Resume is required.";
// //     return newErrors;
// //   };

// //   // Handle form submission
// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     const validationErrors = validateForm();
// //     if (Object.keys(validationErrors).length > 0) {
// //       setErrors(validationErrors);
// //       return;
// //     }

// //     // Placeholder for submission logic (e.g., sending to backend)
// //     alert("Application submitted successfully!");
// //     router.push("/careers"); // Redirect back to careers page
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-[#16436F] to-[#10b1b4] flex items-center justify-center p-6">
// //       <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
// //         {/* Title */}
// //         <h1 className="text-4xl font-extrabold text-[#16436F] mb-6 text-center">Apply for a Job</h1>

// //         <form onSubmit={handleSubmit} className="space-y-6">
// //           {/* Job Position */}
// //           <div>
// //             <label className="block font-semibold text-lg text-[#16436F]">
// //               Job Position <span className="text-red-500">*</span>
// //             </label>
// //             <select
// //               name="jobTitle"
// //               value={formData.jobTitle}
// //               onChange={handleChange}
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-[#16436F] focus:border-[#16436F]"
// //             >
// //               <option value="">Select a Job</option>
// //               {jobListings.map((job, index) => (
// //                 <option key={index} value={job}>{job}</option>
// //               ))}
// //             </select>
// //             {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>}
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             {/* Full Name */}
// //             <div>
// //               <label className="block font-semibold text-lg text-[#16436F]">Full Name <span className="text-red-500">*</span></label>
// //               <input
// //                 type="text"
// //                 name="fullName"
// //                 value={formData.fullName}
// //                 onChange={handleChange}
// //                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-[#16436F] focus:border-[#16436F]"
// //               />
// //               {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
// //             </div>

// //             {/* Email */}
// //             <div>
// //               <label className="block font-semibold text-lg text-[#16436F]">Email <span className="text-red-500">*</span></label>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-[#16436F] focus:border-[#16436F]"
// //               />
// //               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
// //             </div>
// //           </div>

// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             {/* Phone Number */}
// //             <div>
// //               <label className="block font-semibold text-lg text-[#16436F]">Phone Number <span className="text-red-500">*</span></label>
// //               <input
// //                 type="text"
// //                 name="phone"
// //                 value={formData.phone}
// //                 onChange={handleChange}
// //                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-[#16436F] focus:border-[#16436F]"
// //               />
// //               {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
// //             </div>

// //             {/* Address */}
// //             <div>
// //               <label className="block font-semibold text-lg text-[#16436F]">Address</label>
// //               <input
// //                 type="text"
// //                 name="address"
// //                 value={formData.address}
// //                 onChange={handleChange}
// //                 className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-[#16436F] focus:border-[#16436F]"
// //               />
// //             </div>
// //           </div>

// //           {/* Resume Upload */}
// //           <div>
// //             <label className="block font-semibold text-lg text-[#16436F]">Resume (PDF/DOCX) <span className="text-red-500">*</span></label>
// //             <input
// //               type="file"
// //               accept=".pdf,.doc,.docx"
// //               onChange={handleFileUpload}
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-[#16436F] focus:border-[#16436F]"
// //             />
// //             {errors.resume && <p className="text-red-500 text-sm mt-1">{errors.resume}</p>}
// //           </div>

// //           {/* Experience */}
// //           <div>
// //             <label className="block font-semibold text-lg text-[#16436F]">Relevant Experience</label>
// //             <textarea
// //               name="experience"
// //               value={formData.experience}
// //               onChange={handleChange}
// //               rows={3}
// //               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-[#16436F] focus:border-[#16436F]"
// //             ></textarea>
// //           </div>

// //           {/* Submit Button */}
// //           <button
// //             type="submit"
// //             className="w-full bg-[#16436F] text-white font-semibold py-3 rounded-lg hover:bg-[#1E5A81] transition"
// //           >
// //             Submit Application
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ApplyPage;






// // "use client";

// // import React, { useState } from "react";
// // import { useRouter } from "next/navigation";

// // const jobListings = [
// //   "Mold Analyst",
// //   "Asbestos Analyst",
// //   "Field Sampler",
// //   "Laboratory Assistant",
// //   "Heavy Metal Analyst",
// //   "Customer Service",
// //   "Accounting",
// //   "Chemist",
// // ];

// // const ApplyPage = () => {
// //   const router = useRouter();

// //   // Main form fields
// //   const [formData, setFormData] = useState({
// //     fullName: "",
// //     email: "",
// //     phone: "",
// //     address: "",
// //     jobTitle: "",
// //     availability: "",
// //     preferredStartDate: "",
// //   });

// //   // For bullet-point relevant experience (max 5)
// //   const [experienceList, setExperienceList] = useState<string[]>([]);
// //   const [experienceInput, setExperienceInput] = useState("");

// //   // Resume file state
// //   const [resume, setResume] = useState<File | null>(null);

// //   const [errors, setErrors] = useState<Record<string, string>>({});
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   // Handle changes for text/select inputs
// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({ ...prev, [name]: value }));
// //   };

// //   // Handle phone input (with placeholder and pattern)
// //   const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     setFormData(prev => ({ ...prev, phone: e.target.value }));
// //   };

// //   // Handle resume upload
// //   const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     if (e.target.files && e.target.files[0]) {
// //       setResume(e.target.files[0]);
// //     }
// //   };

// //   // Add a bullet-point experience (max 5)
// //   const addExperience = () => {
// //     if (experienceInput.trim() && experienceList.length < 5) {
// //       setExperienceList([...experienceList, experienceInput.trim()]);
// //       setExperienceInput("");
// //     }
// //   };

// //   const removeExperience = (index: number) => {
// //     setExperienceList(experienceList.filter((_, i) => i !== index));
// //   };

// //   // Validate form fields
// //   const validateForm = () => {
// //     const newErrors: Record<string, string> = {};
// //     if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required.";
// //     if (!formData.email.trim()) newErrors.email = "Email is required.";
// //     if (!formData.phone.trim()) newErrors.phone = "Phone Number is required.";
// //     if (!formData.jobTitle) newErrors.jobTitle = "Please select a job position.";
// //     if (!formData.preferredStartDate) newErrors.preferredStartDate = "Preferred Start Date is required.";
// //     // Enforce phone pattern: (000) 000-0000
// //     const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
// //     if (!phonePattern.test(formData.phone.trim())) {
// //       newErrors.phone = "Phone number must be in the format (000) 000-0000.";
// //     }
// //     return newErrors;
// //   };

// //   // Handle form submission using FormData (for file upload)
// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
// //     const validationErrors = validateForm();
// //     if (Object.keys(validationErrors).length > 0) {
// //       setErrors(validationErrors);
// //       setIsSubmitting(false);
// //       return;
// //     }
    
// //     // Build FormData payload
// //     const payload = new FormData();
// //     payload.append("fullName", formData.fullName);
// //     payload.append("email", formData.email);
// //     payload.append("phone", formData.phone);
// //     payload.append("address", formData.address);
// //     payload.append("jobTitle", formData.jobTitle);
// //     payload.append("availability", formData.availability);
// //     payload.append("preferredStartDate", formData.preferredStartDate);
// //     // Send experience list as JSON string
// //     payload.append("relevantExperience", JSON.stringify(experienceList));
// //     if (resume) {
// //       payload.append("resume", resume);
// //     }

// //     try {
// //       const response = await fetch("/dashboard/pages/api/apply", {
// //         method: "POST",
// //         body: payload,
// //       });
// //       const data = await response.json();
// //       if (response.ok) {
// //         alert("Application submitted successfully!");
// //         router.push("/dashboard/pages/careers");
// //       } else {
// //         alert(data.error || "Failed to send application.");
// //       }
// //     } catch (error) {
// //       console.error("Error submitting application:", error);
// //       alert("An error occurred. Please try again later.");
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-[#16436F] to-[#10b1b4] flex items-center justify-center p-6">
// //       <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
// //         <h1 className="text-4xl font-extrabold text-black mb-6 text-center">Apply for a Job</h1>

// //         <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
// //           {/* Job Selection */}
// //           <div>
// //             <label className="block font-semibold text-lg text-black">
// //               Job Position <span className="text-red-500">*</span>
// //             </label>
// //             <select
// //               name="jobTitle"
// //               value={formData.jobTitle}
// //               onChange={handleChange}
// //               className="w-full border px-4 py-2 rounded-lg focus:ring-black text-black"
// //               required
// //             >
// //               <option value="">Select a Job</option>
// //               {jobListings.map((job, index) => (
// //                 <option key={index} value={job}>{job}</option>
// //               ))}
// //             </select>
// //             {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>}
// //           </div>

// //           {/* Contact Details */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             <div>
// //               <label className="block text-sm font-medium text-black">
// //                 Full Name <span className="text-red-500">*</span>
// //               </label>
// //               <input
// //                 type="text"
// //                 name="fullName"
// //                 placeholder="Enter your full name"
// //                 value={formData.fullName}
// //                 onChange={handleChange}
// //                 className="mt-1 block w-full border px-4 py-2 rounded-md focus:ring-black text-black"
// //                 required
// //               />
// //               {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-black">
// //                 Email <span className="text-red-500">*</span>
// //               </label>
// //               <input
// //                 type="email"
// //                 name="email"
// //                 placeholder="Enter your email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 className="mt-1 block w-full border px-4 py-2 rounded-md focus:ring-black text-black"
// //                 required
// //               />
// //               {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
// //             </div>
// //             <div>
// //               <label className="block text-sm font-medium text-black">
// //                 Phone <span className="text-red-500">*</span>
// //               </label>
// //               <input
// //                 type="tel"
// //                 name="phone"
// //                 placeholder="(000) 000-0000"
// //                 value={formData.phone}
// //                 onChange={handlePhoneChange}
// //                 className="mt-1 block w-full border px-4 py-2 rounded-md focus:ring-black text-black"
// //                 required
// //                 pattern="^\(\d{3}\) \d{3}-\d{4}$"
// //               />
// //               {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
// //             </div>
// //           </div>

// //           {/* Optional Address */}
// //           <div>
// //             <label className="block text-sm font-medium text-black">Address</label>
// //             <input
// //               type="text"
// //               name="address"
// //               placeholder="Enter your address"
// //               value={formData.address}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border px-4 py-2 rounded-md focus:ring-black text-black"
// //             />
// //           </div>

// //           {/* Resume Upload */}
// //           <div>
// //             <label className="block text-sm font-medium text-black">Upload Resume <span className="text-red-500">*</span></label>
// //             <input
// //               type="file"
// //               name="resume"
// //               onChange={handleResumeChange}
// //               className="mt-1 block w-full text-black"
// //               accept=".pdf,.doc,.docx"
// //               required
// //             />
// //           </div>

// //           {/* Preferred Start Date */}
// //           <div>
// //             <label className="block text-sm font-medium text-black">
// //               Preferred Start Date <span className="text-red-500">*</span>
// //             </label>
// //             <input
// //               type="date"
// //               name="preferredStartDate"
// //               value={formData.preferredStartDate}
// //               onChange={handleChange}
// //               className="mt-1 block w-full border px-4 py-2 rounded-md focus:ring-black text-black"
// //               required
// //             />
// //             {errors.preferredStartDate && <p className="text-red-500 text-sm mt-1">{errors.preferredStartDate}</p>}
// //           </div>

// //           {/* Availability Dropdown */}
// //           <div>
// //             <label className="block text-sm font-medium text-black">
// //               Availability <span className="text-red-500">*</span>
// //             </label>
// //             <select
// //               name="availability"
// //               value={formData.availability}
// //               onChange={handleChange}
// //               className="w-full border px-4 py-2 rounded-lg focus:ring-black text-black"
// //               required
// //             >
// //               <option value="">Select Availability</option>
// //               <option value="Full Time">Full Time</option>
// //               <option value="Part Time">Part Time</option>
// //             </select>
// //           </div>

// //           {/* Relevant Experience Bullet Points */}
// //           <div>
// //             <label className="block text-sm font-medium text-black">
// //               Relevant Experience (max 5 bullet points)
// //             </label>
// //             <div className="flex items-center gap-2">
// //               <input
// //                 type="text"
// //                 name="experienceInput"
// //                 placeholder="Enter experience"
// //                 value={experienceInput}
// //                 onChange={(e) => setExperienceInput(e.target.value)}
// //                 className="mt-1 block w-full border px-4 py-2 rounded-md focus:ring-black text-black"
// //               />
// //               <button type="button" onClick={addExperience} className="bg-black text-white px-4 py-2 rounded-md">
// //                 Add
// //               </button>
// //             </div>
// //             <ul className="mt-2 list-disc pl-5 text-black">
// //               {experienceList.map((exp, index) => (
// //                 <li key={index} className="flex justify-between items-center">
// //                   {exp}
// //                   <button type="button" onClick={() => removeExperience(index)} className="text-red-500">
// //                     Remove
// //                   </button>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Submit Button */}
// //           <button
// //             type="submit"
// //             className="w-full bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-800 transition"
// //             disabled={isSubmitting}
// //           >
// //             {isSubmitting ? "Submitting..." : "Submit Application"}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ApplyPage;





































// // "use client";

// // import React, { useState } from "react";
// // import { useRouter } from "next/navigation";

// // // Helper function to auto-format phone numbers as (000) 000-0000.
// // const formatPhone = (value: string) => {
// //   const digits = value.replace(/\D/g, "");
// //   if (digits.length <= 3) return `(${digits}`;
// //   if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
// //   return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
// // };

// // const jobListings = [
// //   "Mold Analyst",
// //   "Asbestos Analyst",
// //   "Field Sampler",
// //   "Laboratory Assistant",
// //   "Heavy Metal Analyst",
// //   "Customer Service",
// //   "Accounting",
// //   "Chemist",
// // ];

// // const ApplyPage = () => {
// //   const router = useRouter();

// //   // Form state split into sections.
// //   const [personalData, setPersonalData] = useState({
// //     firstName: "",
// //     middleName: "",
// //     lastName: "",
// //     address: "",
// //     homePhone: "",
// //     email: "",
// //     preferredStartDate: "",
// //   });

// //   const [positionInfo, setPositionInfo] = useState({
// //     hours: "",
// //     position: "",
// //     city: "",
// //     state: "",
// //     zip: "",
// //     cellularPhone: "",
// //     businessPhone: "",
// //     salaryDesired: "",
// //   });

// //   const [workPreferences, setWorkPreferences] = useState({
// //     Days: false,
// //     Evenings: false,
// //     Swing: false,
// //     Graveyard: false,
// //     Weekends: false,
// //   });

// //   const [felony, setFelony] = useState({ answer: "", explanation: "" });
// //   const [qualifications, setQualifications] = useState({
// //     education: "",
// //     specialSkills: "",
// //     references: "",
// //     workHistory: "",
// //   });
// //   const [certification, setCertification] = useState(false);
// //   const [signature, setSignature] = useState("");
// //   const [signatureDate, setSignatureDate] = useState("");

// //   // Relevant experience as a bullet list (max 5)
// //   const [experienceList, setExperienceList] = useState<string[]>([]);
// //   const [experienceInput, setExperienceInput] = useState("");

// //   // Resume file
// //   const [resume, setResume] = useState<File | null>(null);

// //   const [errors, setErrors] = useState<Record<string, string>>({});
// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   // Generic handler for personal and position fields
// //   const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     // For phone fields, auto-format the value.
// //     if (name === "homePhone") {
// //       setPersonalData(prev => ({ ...prev, [name]: formatPhone(value) }));
// //     } else {
// //       setPersonalData(prev => ({ ...prev, [name]: value }));
// //     }
// //   };

// //   const handlePositionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
// //     const { name, value } = e.target;
// //     if (name === "cellularPhone" || name === "businessPhone") {
// //       setPositionInfo(prev => ({ ...prev, [name]: formatPhone(value) }));
// //     } else {
// //       setPositionInfo(prev => ({ ...prev, [name]: value }));
// //     }
// //   };

// //   // Handle work preferences checkboxes
// //   const togglePreference = (pref: string) => {
// //     setWorkPreferences(prev => ({ ...prev, [pref]: !prev[pref] }));
// //   };

// //   // Handle resume upload
// //   const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     if (e.target.files && e.target.files[0]) {
// //       setResume(e.target.files[0]);
// //     }
// //   };

// //   // Add experience bullet (max 5)
// //   const addExperience = () => {
// //     if (experienceInput.trim() && experienceList.length < 5) {
// //       setExperienceList([...experienceList, experienceInput.trim()]);
// //       setExperienceInput("");
// //     }
// //   };

// //   const removeExperience = (index: number) => {
// //     setExperienceList(experienceList.filter((_, i) => i !== index));
// //   };

// //   // Validate required fields
// //   const validateForm = () => {
// //     const newErrors: Record<string, string> = {};
// //     if (!personalData.firstName.trim()) newErrors.firstName = "First name is required.";
// //     if (!personalData.lastName.trim()) newErrors.lastName = "Last name is required.";
// //     if (!personalData.email.trim()) newErrors.email = "Email is required.";
// //     if (!personalData.homePhone.trim() || personalData.homePhone.replace(/\D/g, "").length !== 10)
// //       newErrors.homePhone = "Home phone must be in the format (000) 000-0000.";
// //     if (!personalData.preferredStartDate) newErrors.preferredStartDate = "Start date is required.";
// //     if (!positionInfo.hours) newErrors.hours = "Please select your availability (Full Time/Part Time).";
// //     if (!positionInfo.position) newErrors.position = "Please select a position.";
// //     if (!certification) newErrors.certification = "You must certify the application.";
// //     if (!signature.trim()) newErrors.signature = "Signature is required.";
// //     if (!signatureDate) newErrors.signatureDate = "Signature date is required.";
// //     return newErrors;
// //   };

// //   // Handle form submission via FormData (for file upload)
// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
// //     const validationErrors = validateForm();
// //     if (Object.keys(validationErrors).length > 0) {
// //       setErrors(validationErrors);
// //       setIsSubmitting(false);
// //       return;
// //     }

// //     // Build FormData payload
// //     const payload = new FormData();
// //     // Personal Data
// //     payload.append("firstName", personalData.firstName);
// //     payload.append("middleName", personalData.middleName);
// //     payload.append("lastName", personalData.lastName);
// //     payload.append("address", personalData.address);
// //     payload.append("homePhone", personalData.homePhone);
// //     payload.append("email", personalData.email);
// //     payload.append("preferredStartDate", personalData.preferredStartDate);
// //     // Position Information
// //     payload.append("hours", positionInfo.hours);
// //     payload.append("position", positionInfo.position);
// //     payload.append("city", positionInfo.city);
// //     payload.append("state", positionInfo.state);
// //     payload.append("zip", positionInfo.zip);
// //     payload.append("cellularPhone", positionInfo.cellularPhone);
// //     payload.append("businessPhone", positionInfo.businessPhone);
// //     payload.append("salaryDesired", positionInfo.salaryDesired);
// //     // Work Preferences (send as JSON)
// //     payload.append("workPreferences", JSON.stringify(workPreferences));
// //     // Felony
// //     payload.append("felony", felony.answer);
// //     payload.append("felonyExplanation", felony.explanation);
// //     // Qualifications
// //     payload.append("education", qualifications.education);
// //     payload.append("specialSkills", qualifications.specialSkills);
// //     payload.append("references", qualifications.references);
// //     payload.append("workHistory", qualifications.workHistory);
// //     // Certification and Signature
// //     payload.append("certification", certification.toString());
// //     payload.append("signature", signature);
// //     payload.append("signatureDate", signatureDate);
// //     // Relevant Experience bullet points (as JSON)
// //     payload.append("relevantExperience", JSON.stringify(experienceList));
// //     // Resume
// //     if (resume) {
// //       payload.append("resume", resume);
// //     }

// //     try {
// //       const response = await fetch("/dashboard/pages/api/apply", {
// //         method: "POST",
// //         body: payload,
// //       });
// //       const data = await response.json();
// //       if (response.ok) {
// //         alert("Application submitted successfully! A copy has been sent to your email.");
// //         router.push("/dashboard/pages/careers");
// //       } else {
// //         alert(data.error || "Submission failed. Please try again.");
// //       }
// //     } catch (error) {
// //       console.error("Error submitting application:", error);
// //       alert("An error occurred. Please try again later.");
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gradient-to-b from-[#16436F] to-[#10b1b4] p-6 text-black">
// //       <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
// //         <h1 className="text-4xl font-bold text-center mb-4">Standard Application for Employment</h1>
// //         <p className="mb-6 text-center">
// //           It is our policy to comply with all applicable state and federal laws prohibiting discrimination
// //           in employment. Please carefully read and answer all questions. You will not be considered for employment if you fail to completely answer all questions.
// //         </p>
        
// //         <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-8">
// //           {/* PERSONAL DATA */}
// //           <fieldset className="border p-4 rounded">
// //             <legend className="font-bold text-lg">PERSONAL DATA</legend>
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
// //               <div>
// //                 <label className="block">First Name <span className="text-red-500">*</span></label>
// //                 <input type="text" name="firstName" value={personalData.firstName} onChange={handlePersonalChange} className="w-full border px-2 py-1" required />
// //                 {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
// //               </div>
// //               <div>
// //                 <label className="block">Middle Name</label>
// //                 <input type="text" name="middleName" value={personalData.middleName} onChange={handlePersonalChange} className="w-full border px-2 py-1" />
// //               </div>
// //               <div>
// //                 <label className="block">Last Name <span className="text-red-500">*</span></label>
// //                 <input type="text" name="lastName" value={personalData.lastName} onChange={handlePersonalChange} className="w-full border px-2 py-1" required />
// //                 {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
// //               </div>
// //             </div>
// //             <div className="mt-4">
// //               <label className="block">Street/Mailing Address</label>
// //               <input type="text" name="address" value={personalData.address} onChange={handlePersonalChange} className="w-full border px-2 py-1" />
// //             </div>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
// //               <div>
// //                 <label className="block">Home Telephone Number <span className="text-red-500">*</span></label>
// //                 <input type="tel" name="homePhone" value={personalData.homePhone} onChange={handlePersonalChange} placeholder="(000) 000-0000" className="w-full border px-2 py-1" required />
// //                 {errors.homePhone && <p className="text-red-500 text-sm">{errors.homePhone}</p>}
// //               </div>
// //               <div>
// //                 <label className="block">Email <span className="text-red-500">*</span></label>
// //                 <input type="email" name="email" value={personalData.email} onChange={handlePersonalChange} className="w-full border px-2 py-1" required />
// //                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
// //               </div>
// //             </div>
// //             <div className="mt-4">
// //               <label className="block">Date You Can Start Work (Preferred Start Date) <span className="text-red-500">*</span></label>
// //               <input type="date" name="preferredStartDate" value={personalData.preferredStartDate} onChange={handlePersonalChange} className="w-full border px-2 py-1" required />
// //               {errors.preferredStartDate && <p className="text-red-500 text-sm">{errors.preferredStartDate}</p>}
// //             </div>
// //             <div className="mt-4">
// //               <label className="block">Upload Resume <span className="text-red-500">*</span></label>
// //               <input type="file" name="resume" onChange={handleResumeChange} className="w-full" accept=".pdf,.doc,.docx" required />
// //             </div>
// //           </fieldset>

// //           {/* POSITION INFORMATION */}
// //           <fieldset className="border p-4 rounded">
// //             <legend className="font-bold text-lg">POSITION INFORMATION</legend>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
// //               <div>
// //                 <label className="block">Hours <span className="text-red-500">*</span></label>
// //                 <select name="hours" value={positionInfo.hours} onChange={handlePositionChange} className="w-full border px-2 py-1" required>
// //                   <option value="">Select</option>
// //                   <option value="Full Time">Full Time</option>
// //                   <option value="Part Time">Part Time</option>
// //                 </select>
// //                 {errors.hours && <p className="text-red-500 text-sm">{errors.hours}</p>}
// //               </div>
// //               <div>
// //                 <label className="block">Position Applying For <span className="text-red-500">*</span></label>
// //                 <select name="position" value={positionInfo.position} onChange={handlePositionChange} className="w-full border px-2 py-1" required>
// //                   <option value="">Select</option>
// //                   {jobListings.map((job, idx) => (
// //                     <option key={idx} value={job}>{job}</option>
// //                   ))}
// //                 </select>
// //                 {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
// //               </div>
// //             </div>
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
// //               <div>
// //                 <label className="block">City</label>
// //                 <input type="text" name="city" value={positionInfo.city} onChange={handlePositionChange} className="w-full border px-2 py-1" />
// //               </div>
// //               <div>
// //                 <label className="block">State</label>
// //                 <input type="text" name="state" value={positionInfo.state} onChange={handlePositionChange} className="w-full border px-2 py-1" />
// //               </div>
// //               <div>
// //                 <label className="block">Zip</label>
// //                 <input type="text" name="zip" value={positionInfo.zip} onChange={handlePositionChange} className="w-full border px-2 py-1" />
// //               </div>
// //             </div>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
// //               <div>
// //                 <label className="block">Cellular Telephone Number</label>
// //                 <input type="tel" name="cellularPhone" value={positionInfo.cellularPhone} onChange={handlePositionChange} placeholder="(000) 000-0000" className="w-full border px-2 py-1" />
// //               </div>
// //               <div>
// //                 <label className="block">Business Telephone Number</label>
// //                 <input type="tel" name="businessPhone" value={positionInfo.businessPhone} onChange={handlePositionChange} placeholder="(000) 000-0000" className="w-full border px-2 py-1" />
// //               </div>
// //             </div>
// //             <div className="mt-4">
// //               <label className="block">Salary Desired</label>
// //               <input type="text" name="salaryDesired" value={positionInfo.salaryDesired} onChange={handlePositionChange} className="w-full border px-2 py-1" />
// //             </div>
// //           </fieldset>

// //           {/* WORK SCHEDULE PREFERENCES */}
// //           <fieldset className="border p-4 rounded">
// //             <legend className="font-bold text-lg">WORK SCHEDULE PREFERENCES</legend>
// //             <div className="flex flex-wrap gap-4 mt-4">
// //               {["Days", "Evenings", "Swing", "Graveyard", "Weekends"].map(pref => (
// //                 <label key={pref} className="flex items-center">
// //                   <input type="checkbox" checked={workPreferences[pref]} onChange={() => togglePreference(pref)} className="mr-2" />
// //                   {pref}
// //                 </label>
// //               ))}
// //             </div>
// //           </fieldset>

// //           {/* FELONY CONVICTION */}
// //           <fieldset className="border p-4 rounded">
// //             <legend className="font-bold text-lg">FELONY CONVICTION</legend>
// //             <div className="mt-4">
// //               <label className="block">Have you ever been convicted of a felony? <span className="text-red-500">*</span></label>
// //               <div className="flex gap-4 mt-2">
// //                 <label className="flex items-center">
// //                   <input type="radio" name="felony" value="Yes" checked={felony.answer === "Yes"} onChange={() => setFelony({ ...felony, answer: "Yes" })} className="mr-2" />
// //                   Yes
// //                 </label>
// //                 <label className="flex items-center">
// //                   <input type="radio" name="felony" value="No" checked={felony.answer === "No"} onChange={() => setFelony({ ...felony, answer: "No" })} className="mr-2" />
// //                   No
// //                 </label>
// //               </div>
// //               {felony.answer === "Yes" && (
// //                 <div className="mt-2">
// //                   <label className="block">If yes, explain:</label>
// //                   <textarea value={felony.explanation} onChange={(e) => setFelony({ ...felony, explanation: e.target.value })} className="w-full border px-2 py-1"></textarea>
// //                 </div>
// //               )}
// //             </div>
// //           </fieldset>

// //           {/* QUALIFICATIONS */}
// //           <fieldset className="border p-4 rounded">
// //             <legend className="font-bold text-lg">QUALIFICATIONS</legend>
// //             <div className="mt-4">
// //               <label className="block">Education/Training</label>
// //               <textarea value={qualifications.education} onChange={(e) => setQualifications({ ...qualifications, education: e.target.value })} className="w-full border px-2 py-1"></textarea>
// //             </div>
// //             <div className="mt-4">
// //               <label className="block">Special Skills</label>
// //               <textarea value={qualifications.specialSkills} onChange={(e) => setQualifications({ ...qualifications, specialSkills: e.target.value })} className="w-full border px-2 py-1"></textarea>
// //             </div>
// //             <div className="mt-4">
// //               <label className="block">References (List three professional references)</label>
// //               <textarea value={qualifications.references} onChange={(e) => setQualifications({ ...qualifications, references: e.target.value })} className="w-full border px-2 py-1"></textarea>
// //             </div>
// //             <div className="mt-4">
// //               <label className="block">Work History</label>
// //               <textarea value={qualifications.workHistory} onChange={(e) => setQualifications({ ...qualifications, workHistory: e.target.value })} className="w-full border px-2 py-1"></textarea>
// //             </div>
// //           </fieldset>

// //           {/* RELEVANT EXPERIENCE */}
// //           <fieldset className="border p-4 rounded">
// //             <legend className="font-bold text-lg">RELEVANT EXPERIENCE (max 5 bullet points)</legend>
// //             <div className="flex items-center gap-2 mt-4">
// //               <input type="text" value={experienceInput} onChange={(e) => setExperienceInput(e.target.value)} placeholder="Enter experience" className="w-full border px-2 py-1" />
// //               <button type="button" onClick={addExperience} className="bg-black text-white px-4 py-1 rounded">Add</button>
// //             </div>
// //             <ul className="mt-2 list-disc pl-5">
// //               {experienceList.map((exp, idx) => (
// //                 <li key={idx} className="flex justify-between items-center">
// //                   {exp}
// //                   <button type="button" onClick={() => removeExperience(idx)} className="text-red-500 ml-2">Remove</button>
// //                 </li>
// //               ))}
// //             </ul>
// //           </fieldset>

// //           {/* CERTIFICATION */}
// //           <fieldset className="border p-4 rounded">
// //             <legend className="font-bold text-lg">CERTIFICATION</legend>
// //             <p className="mt-2">
// //               I certify that the facts set forth in this Application for Employment are true and complete to the best of my knowledge. I understand that false statements may result in my dismissal.
// //             </p>
// //             <div className="flex items-center gap-2 mt-4">
// //               <input type="checkbox" checked={certification} onChange={(e) => setCertification(e.target.checked)} />
// //               <label>I certify the above.</label>
// //               {errors.certification && <p className="text-red-500 text-sm">{errors.certification}</p>}
// //             </div>
// //             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
// //               <div>
// //                 <label>Applicant Signature <span className="text-red-500">*</span></label>
// //                 <input type="text" value={signature} onChange={(e) => setSignature(e.target.value)} placeholder="Type your full name" className="w-full border px-2 py-1" required />
// //                 {errors.signature && <p className="text-red-500 text-sm">{errors.signature}</p>}
// //               </div>
// //               <div>
// //                 <label>Signature Date <span className="text-red-500">*</span></label>
// //                 <input type="date" value={signatureDate} onChange={(e) => setSignatureDate(e.target.value)} className="w-full border px-2 py-1" required />
// //                 {errors.signatureDate && <p className="text-red-500 text-sm">{errors.signatureDate}</p>}
// //               </div>
// //             </div>
// //           </fieldset>

// //           {/* Submit Button */}
// //           <button type="submit" disabled={isSubmitting} className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">
// //             {isSubmitting ? "Submitting..." : "Submit Application"}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ApplyPage;



















// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// // Helper function to auto-format phone numbers as (000) 000-0000.
// const formatPhone = (value: string) => {
//   const digits = value.replace(/\D/g, "");
//   if (!digits) return "";
//   if (digits.length <= 3) return `(${digits}`;
//   if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
//   return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
// };

// const jobListings = [
//   "Mold Analyst",
//   "Asbestos Analyst",
//   // "Field Sampler",
//   "Laboratory Assistant",
//   "Heavy Metal Analyst",
//   "Customer Service",
//   "Accounting",
//   "Chemist",
// ];

// const ApplyPage = () => {
//   const router = useRouter();

//   // Preload signature date to today's date (YYYY-MM-DD)
//   const today = new Date().toISOString().split("T")[0];

//   // PERSONAL DATA
//   const [personalData, setPersonalData] = useState({
//     firstName: "",
//     mi: "",
//     lastName: "",
//     address: "",
//     homePhone: "",
//     secondaryPhone: "",
//     email: "",
//     preferredStartDate: "",
//   });

//   // POSITION INFORMATION
//   const [positionInfo, setPositionInfo] = useState({
//     hours: "",
//     position: "",
//     preferredLocation: "15200 Grevillea Avenue, Suite A-1, Lawndale, CA 90260",
//     compensationType: "",
//     compensationAmount: "",
//   });

//   // WORK SCHEDULE PREFERENCES: Weekdays, Weekends, Mornings, Evenings
//   const [workPreferences, setWorkPreferences] = useState({
//     Weekdays: false,
//     Weekends: false,
//     Mornings: false,
//     Evenings: false,
//   });

//   // FELONY CONVICTION
//   const [felony, setFelony] = useState({ answer: "", explanation: "" });

//   // QUALIFICATIONS
//   const [qualifications, setQualifications] = useState({
//     education: "",
//     specialSkills: "",
//     references: "",
//     workHistory: "",
//   });

//   // RELEVANT EXPERIENCE (max 5 bullet points)
//   const [experienceList, setExperienceList] = useState<string[]>([]);
//   const [experienceInput, setExperienceInput] = useState("");

//   // CERTIFICATION & SIGNATURE
//   const [certification, setCertification] = useState(false);
//   const [signature, setSignature] = useState("");
//   const [signatureDate, setSignatureDate] = useState(today);

//   // Resume file
//   const [resume, setResume] = useState<File | null>(null);

//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Handle personal data changes
//   const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     if (name === "homePhone" || name === "secondaryPhone") {
//       setPersonalData(prev => ({ ...prev, [name]: formatPhone(value) }));
//     } else {
//       setPersonalData(prev => ({ ...prev, [name]: value }));
//     }
//   };

//   // Handle position information changes
//   const handlePositionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setPositionInfo(prev => ({ ...prev, [name]: value }));
//   };

//   // Toggle work schedule preference
//   const togglePreference = (pref: string) => {
//     setWorkPreferences(prev => ({ ...prev, [pref]: !prev[pref] }));
//   };

//   // Handle resume upload
//   const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files[0]) {
//       setResume(e.target.files[0]);
//     }
//   };

//   // Add experience bullet (max 5)
//   const addExperience = () => {
//     if (experienceInput.trim() && experienceList.length < 5) {
//       setExperienceList([...experienceList, experienceInput.trim()]);
//       setExperienceInput("");
//     }
//   };

//   const removeExperience = (index: number) => {
//     setExperienceList(experienceList.filter((_, i) => i !== index));
//   };

//   // Validate required fields
//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};
//     if (!personalData.firstName.trim()) newErrors.firstName = "First name is required.";
//     if (!personalData.lastName.trim()) newErrors.lastName = "Last name is required.";
//     if (!personalData.email.trim()) newErrors.email = "Email is required.";
//     if (!personalData.homePhone.trim() || personalData.homePhone.replace(/\D/g, "").length !== 10)
//       newErrors.homePhone = "Home phone must be in the format (000) 000-0000.";
//     if (!personalData.preferredStartDate) newErrors.preferredStartDate = "Preferred start date is required.";
//     if (!positionInfo.hours) newErrors.hours = "Availability is required.";
//     if (!positionInfo.position) newErrors.position = "Position is required.";
//     if (!positionInfo.compensationType) newErrors.compensationType = "Compensation type is required.";
//     if (!positionInfo.compensationAmount) newErrors.compensationAmount = "Compensation amount is required.";
//     if (!certification) newErrors.certification = "You must certify the application.";
//     if (!signature.trim()) newErrors.signature = "Signature is required.";
//     if (!signatureDate) newErrors.signatureDate = "Signature date is required.";
//     return newErrors;
//   };

//   // Handle form submission using FormData (for file upload)
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       setIsSubmitting(false);
//       return;
//     }

//     // Build FormData payload
//     const payload = new FormData();
//     // Personal Data
//     payload.append("firstName", personalData.firstName);
//     payload.append("mi", personalData.mi);
//     payload.append("lastName", personalData.lastName);
//     payload.append("address", personalData.address);
//     payload.append("homePhone", personalData.homePhone);
//     payload.append("secondaryPhone", personalData.secondaryPhone);
//     payload.append("email", personalData.email);
//     payload.append("preferredStartDate", personalData.preferredStartDate);
//     // Position Information
//     payload.append("hours", positionInfo.hours);
//     payload.append("position", positionInfo.position);
//     payload.append("preferredLocation", positionInfo.preferredLocation);
//     payload.append("compensationType", positionInfo.compensationType);
//     payload.append("compensationAmount", positionInfo.compensationAmount);
//     // Work Preferences
//     payload.append("workPreferences", JSON.stringify(workPreferences));
//     // Felony
//     payload.append("felony", felony.answer);
//     payload.append("felonyExplanation", felony.explanation);
//     // Qualifications
//     payload.append("education", qualifications.education);
//     payload.append("specialSkills", qualifications.specialSkills);
//     payload.append("references", qualifications.references);
//     payload.append("workHistory", qualifications.workHistory);
//     // Certification and Signature
//     payload.append("certification", certification.toString());
//     payload.append("signature", signature);
//     payload.append("signatureDate", signatureDate);
//     // Relevant Experience
//     payload.append("relevantExperience", JSON.stringify(experienceList));
//     // Resume
//     if (resume) {
//       payload.append("resume", resume);
//     }

//     try {
//       const response = await fetch("/dashboard/pages/api/apply", {
//         method: "POST",
//         body: payload,
//       });
//       const data = await response.json();
//       if (response.ok) {
//         alert("Application submitted successfully! A copy has been sent to your email.");
//         router.push("/dashboard/pages/careers");
//       } else {
//         alert(data.error || "Submission failed. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting application:", error);
//       alert("An error occurred. Please try again later.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#16436F] to-[#10b1b4] p-6 text-black">
//       <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
//         <h1 className="text-4xl font-bold text-center mb-4">Standard Application for Employment</h1>
//         <p className="mb-6 text-center">
//           It is our policy to comply with all applicable state and federal laws prohibiting discrimination in employment.
//           Please carefully read and answer all questions. You will not be considered for employment if you fail to completely answer all the questions.
//           You may attach a résumé, but all questions must be answered.
//         </p>
        
//         <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-8">
//           {/* PERSONAL DATA */}
//           <fieldset className="border p-4 rounded">
//             <legend className="font-bold text-lg">PERSONAL DATA</legend>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
//               <div>
//                 <label className="block">First Name <span className="text-red-500">*</span></label>
//                 <input type="text" name="firstName" value={personalData.firstName} onChange={handlePersonalChange} className="w-full border px-2 py-1" required />
//                 {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
//               </div>
//               <div>
//                 <label className="block">MI</label>
//                 <input type="text" name="mi" value={personalData.mi} onChange={handlePersonalChange} className="w-full border px-2 py-1" maxLength={1} />
//               </div>
//               <div>
//                 <label className="block">Last Name <span className="text-red-500">*</span></label>
//                 <input type="text" name="lastName" value={personalData.lastName} onChange={handlePersonalChange} className="w-full border px-2 py-1" required />
//                 {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
//               </div>
//             </div>
//             <div className="mt-4">
//               <label className="block">Home Address</label>
//               <input type="text" name="address" value={personalData.address} onChange={handlePersonalChange} className="w-full border px-2 py-1" />
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div>
//                 <label className="block">Home Telephone Number <span className="text-red-500">*</span></label>
//                 <input type="tel" name="homePhone" value={personalData.homePhone} onChange={handlePersonalChange} placeholder="(000) 000-0000" className="w-full border px-2 py-1" required />
//                 {errors.homePhone && <p className="text-red-500 text-sm">{errors.homePhone}</p>}
//               </div>
//               <div>
//                 <label className="block">Secondary Telephone Number</label>
//                 <input type="tel" name="secondaryPhone" value={personalData.secondaryPhone} onChange={handlePersonalChange} placeholder="(000) 000-0000" className="w-full border px-2 py-1" />
//               </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div>
//                 <label className="block">Email <span className="text-red-500">*</span></label>
//                 <input type="email" name="email" value={personalData.email} onChange={handlePersonalChange} className="w-full border px-2 py-1" required />
//                 {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//               </div>
//               <div>
//                 <label className="block">Preferred Start Date <span className="text-red-500">*</span></label>
//                 <input type="date" name="preferredStartDate" value={personalData.preferredStartDate} onChange={handlePersonalChange} className="w-full border px-2 py-1" required min="2025-01-01" />
//                 {errors.preferredStartDate && <p className="text-red-500 text-sm">{errors.preferredStartDate}</p>}
//               </div>
//             </div>
//             <div className="mt-4">
//               <label className="block">Upload Resume <span className="text-red-500">*</span></label>
//               <input type="file" name="resume" onChange={handleResumeChange} className="w-full" accept=".pdf,.doc,.docx" required />
//             </div>
//           </fieldset>

//           {/* POSITION INFORMATION */}
//           <fieldset className="border p-4 rounded">
//             <legend className="font-bold text-lg">POSITION INFORMATION</legend>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div>
//                 <label className="block">Hours <span className="text-red-500">*</span></label>
//                 <select name="hours" value={positionInfo.hours} onChange={handlePositionChange} className="w-full border px-2 py-1" required>
//                   <option value="">Select</option>
//                   <option value="Full Time">Full Time</option>
//                   <option value="Part Time">Part Time</option>
//                 </select>
//                 {errors.hours && <p className="text-red-500 text-sm">{errors.hours}</p>}
//               </div>
//               <div>
//                 <label className="block">Position Applying For <span className="text-red-500">*</span></label>
//                 <select name="position" value={positionInfo.position} onChange={handlePositionChange} className="w-full border px-2 py-1" required>
//                   <option value="">Select</option>
//                   {jobListings.map((job, idx) => (
//                     <option key={idx} value={job}>{job}</option>
//                   ))}
//                 </select>
//                 {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
//               </div>
//             </div>
//             <div className="mt-4">
//               <label className="block">Preferred Pinnacle Location <span className="text-red-500">*</span></label>
//               <select name="preferredLocation" value={positionInfo.preferredLocation} onChange={handlePositionChange} className="w-full border px-2 py-1" required>
//                 <option value="15200 Grevillea Avenue, Suite A-1, Lawndale, CA 90260">15200 Grevillea Avenue, Suite A-1, Lawndale, CA 90260</option>
//               </select>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div>
//                 <label className="block">Compensation Type <span className="text-red-500">*</span></label>
//                 <select name="compensationType" value={positionInfo.compensationType} onChange={handlePositionChange} className="w-full border px-2 py-1" required>
//                   <option value="">Select</option>
//                   <option value="Salary">Salary</option>
//                   <option value="Hourly">Hourly</option>
//                 </select>
//                 {errors.compensationType && <p className="text-red-500 text-sm">{errors.compensationType}</p>}
//               </div>
//               <div>
//                 <label className="block">Compensation Amount <span className="text-red-500">*</span></label>
//                 <input type="text" name="compensationAmount" value={positionInfo.compensationAmount} onChange={handlePositionChange} className="w-full border px-2 py-1" required />
//                 {errors.compensationAmount && <p className="text-red-500 text-sm">{errors.compensationAmount}</p>}
//               </div>
//             </div>
//           </fieldset>

//           {/* WORK SCHEDULE PREFERENCES */}
//           <fieldset className="border p-4 rounded">
//             <legend className="font-bold text-lg">WORK SCHEDULE PREFERENCES</legend>
//             <div className="flex flex-wrap gap-4 mt-4">
//               {["Weekdays", "Weekends", "Mornings", "Evenings"].map(pref => (
//                 <label key={pref} className="flex items-center">
//                   <input type="checkbox" checked={workPreferences[pref]} onChange={() => togglePreference(pref)} className="mr-2" />
//                   {pref}
//                 </label>
//               ))}
//             </div>
//           </fieldset>

//           {/* FELONY CONVICTION */}
//           <fieldset className="border p-4 rounded">
//             <legend className="font-bold text-lg">FELONY CONVICTION</legend>
//             <div className="mt-4">
//               <label className="block">Have you ever been convicted of a felony? <span className="text-red-500">*</span></label>
//               <div className="flex gap-4 mt-2">
//                 <label className="flex items-center">
//                   <input type="radio" name="felony" value="Yes" checked={felony.answer === "Yes"} onChange={() => setFelony({ ...felony, answer: "Yes" })} className="mr-2" />
//                   Yes
//                 </label>
//                 <label className="flex items-center">
//                   <input type="radio" name="felony" value="No" checked={felony.answer === "No"} onChange={() => setFelony({ ...felony, answer: "No" })} className="mr-2" />
//                   No
//                 </label>
//               </div>
//               {felony.answer === "Yes" && (
//                 <div className="mt-2">
//                   <label className="block">If yes, explain:</label>
//                   <textarea value={felony.explanation} onChange={(e) => setFelony({ ...felony, explanation: e.target.value })} className="w-full border px-2 py-1"></textarea>
//                 </div>
//               )}
//             </div>
//           </fieldset>

//           {/* QUALIFICATIONS */}
//           <fieldset className="border p-4 rounded">
//             <legend className="font-bold text-lg">QUALIFICATIONS</legend>
//             <div className="mt-4">
//               <label className="block">Education/Training</label>
//               <textarea value={qualifications.education} onChange={(e) => setQualifications({ ...qualifications, education: e.target.value })} className="w-full border px-2 py-1"></textarea>
//             </div>
//             <div className="mt-4">
//               <label className="block">Special Skills</label>
//               <textarea value={qualifications.specialSkills} onChange={(e) => setQualifications({ ...qualifications, specialSkills: e.target.value })} className="w-full border px-2 py-1"></textarea>
//             </div>
//             <div className="mt-4">
//               <label className="block">References (List three professional references)</label>
//               <textarea value={qualifications.references} onChange={(e) => setQualifications({ ...qualifications, references: e.target.value })} className="w-full border px-2 py-1"></textarea>
//             </div>
//             <div className="mt-4">
//               <label className="block">Work History</label>
//               <textarea value={qualifications.workHistory} onChange={(e) => setQualifications({ ...qualifications, workHistory: e.target.value })} className="w-full border px-2 py-1"></textarea>
//             </div>
//           </fieldset>

//           {/* RELEVANT EXPERIENCE */}
//           <fieldset className="border p-4 rounded">
//             <legend className="font-bold text-lg">RELEVANT EXPERIENCE (max 5 bullet points)</legend>
//             <div className="flex items-center gap-2 mt-4">
//               <input type="text" value={experienceInput} onChange={(e) => setExperienceInput(e.target.value)} placeholder="Enter experience" className="w-full border px-2 py-1" />
//               <button type="button" onClick={addExperience} className="bg-black text-white px-4 py-1 rounded">Add</button>
//             </div>
//             <ul className="mt-2 list-disc pl-5">
//               {experienceList.map((exp, idx) => (
//                 <li key={idx} className="flex justify-between items-center">
//                   {exp}
//                   <button type="button" onClick={() => removeExperience(idx)} className="text-red-500 ml-2">Remove</button>
//                 </li>
//               ))}
//             </ul>
//           </fieldset>

//           {/* CERTIFICATION */}
//           <fieldset className="border p-4 rounded">
//             <legend className="font-bold text-lg">CERTIFICATION</legend>
//             <p className="mt-2">
//               I certify that the facts set forth in this Application for Employment are true and complete to the best of my knowledge.
//               I understand that false statements, omissions, or misrepresentations may result in my dismissal.
//             </p>
//             <div className="flex items-center gap-2 mt-4">
//               <input type="checkbox" checked={certification} onChange={(e) => setCertification(e.target.checked)} />
//               <label>I certify the above.</label>
//               {errors.certification && <p className="text-red-500 text-sm">{errors.certification}</p>}
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div>
//                 <label>Applicant Signature <span className="text-red-500">*</span></label>
//                 <input type="text" value={signature} onChange={(e) => setSignature(e.target.value)} placeholder="Type your full name" className="w-full border px-2 py-1" required />
//                 {errors.signature && <p className="text-red-500 text-sm">{errors.signature}</p>}
//               </div>
//               <div>
//                 <label>Signature Date <span className="text-red-500">*</span></label>
//                 <input type="date" value={signatureDate} onChange={(e) => setSignatureDate(e.target.value)} className="w-full border px-2 py-1" required />
//                 {errors.signatureDate && <p className="text-red-500 text-sm">{errors.signatureDate}</p>}
//               </div>
//             </div>
//           </fieldset>

//           {/* Submit Button */}
//           <button type="submit" disabled={isSubmitting} className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">
//             {isSubmitting ? "Submitting..." : "Submit Application"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ApplyPage;































































"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Helper function to auto-format phone numbers as (000) 000-0000.
const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "");
  if (!digits) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
};

const jobListings = [
  "Mold Analyst",
  "Asbestos Analyst",
  "Laboratory Assistant",
  "Heavy Metal Analyst",
  "Customer Service",
  "Accounting",
  "Chemist",
];

const ApplyPage = () => {
  const router = useRouter();

  // Preload signature date to today's date (YYYY-MM-DD)
  const today = new Date().toISOString().split("T")[0];

  // PERSONAL DATA
  const [personalData, setPersonalData] = useState({
    firstName: "",
    mi: "",
    lastName: "",
    address: "",
    homePhone: "",
    secondaryPhone: "",
    email: "",
    preferredStartDate: "",
  });

  // POSITION INFORMATION
  const [positionInfo, setPositionInfo] = useState({
    hours: "",
    position: "",
    preferredLocation: "15200 Grevillea Avenue, Suite A-1, Lawndale, CA 90260",
    compensationType: "",
    compensationAmount: "",
  });

  // WORK SCHEDULE PREFERENCES with an explicit type
  const [workPreferences, setWorkPreferences] = useState<{
    Weekdays: boolean;
    Weekends: boolean;
    Mornings: boolean;
    Evenings: boolean;
  }>({
    Weekdays: false,
    Weekends: false,
    Mornings: false,
    Evenings: false,
  });

  // FELONY CONVICTION
  const [felony, setFelony] = useState({ answer: "", explanation: "" });

  // QUALIFICATIONS
  const [qualifications, setQualifications] = useState({
    education: "",
    specialSkills: "",
    references: "",
    workHistory: "",
  });

  // RELEVANT EXPERIENCE (max 5 bullet points)
  const [experienceList, setExperienceList] = useState<string[]>([]);
  const [experienceInput, setExperienceInput] = useState("");

  // CERTIFICATION & SIGNATURE
  const [certification, setCertification] = useState(false);
  const [signature, setSignature] = useState("");
  const [signatureDate, setSignatureDate] = useState(today);

  // Resume file
  const [resume, setResume] = useState<File | null>(null);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle personal data changes
  const handlePersonalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "homePhone" || name === "secondaryPhone") {
      setPersonalData(prev => ({ ...prev, [name]: formatPhone(value) }));
    } else {
      setPersonalData(prev => ({ ...prev, [name]: value }));
    }
  };

  // Handle position information changes
  const handlePositionChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPositionInfo(prev => ({ ...prev, [name]: value }));
  };

  // Toggle work schedule preference (with proper typing)
  const togglePreference = (pref: keyof typeof workPreferences) => {
    setWorkPreferences(prev => ({ ...prev, [pref]: !prev[pref] }));
  };

  // Handle resume upload
  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  // Add experience bullet (max 5)
  const addExperience = () => {
    if (experienceInput.trim() && experienceList.length < 5) {
      setExperienceList([...experienceList, experienceInput.trim()]);
      setExperienceInput("");
    }
  };

  const removeExperience = (index: number) => {
    setExperienceList(experienceList.filter((_, i) => i !== index));
  };

  // Validate required fields
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!personalData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!personalData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!personalData.email.trim()) newErrors.email = "Email is required.";
    if (!personalData.homePhone.trim() || personalData.homePhone.replace(/\D/g, "").length !== 10)
      newErrors.homePhone = "Home phone must be in the format (000) 000-0000.";
    if (!personalData.preferredStartDate) newErrors.preferredStartDate = "Preferred start date is required.";
    if (!positionInfo.hours) newErrors.hours = "Availability is required.";
    if (!positionInfo.position) newErrors.position = "Position is required.";
    if (!positionInfo.compensationType) newErrors.compensationType = "Compensation type is required.";
    if (!positionInfo.compensationAmount) newErrors.compensationAmount = "Compensation amount is required.";
    if (!certification) newErrors.certification = "You must certify the application.";
    if (!signature.trim()) newErrors.signature = "Signature is required.";
    if (!signatureDate) newErrors.signatureDate = "Signature date is required.";
    return newErrors;
  };

  // Handle form submission using FormData (for file upload)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    // Build FormData payload
    const payload = new FormData();
    // Personal Data
    payload.append("firstName", personalData.firstName);
    payload.append("mi", personalData.mi);
    payload.append("lastName", personalData.lastName);
    payload.append("address", personalData.address);
    payload.append("homePhone", personalData.homePhone);
    payload.append("secondaryPhone", personalData.secondaryPhone);
    payload.append("email", personalData.email);
    payload.append("preferredStartDate", personalData.preferredStartDate);
    // Position Information
    payload.append("hours", positionInfo.hours);
    payload.append("position", positionInfo.position);
    payload.append("preferredLocation", positionInfo.preferredLocation);
    payload.append("compensationType", positionInfo.compensationType);
    payload.append("compensationAmount", positionInfo.compensationAmount);
    // Work Preferences
    payload.append("workPreferences", JSON.stringify(workPreferences));
    // Felony
    payload.append("felony", felony.answer);
    payload.append("felonyExplanation", felony.explanation);
    // Qualifications
    payload.append("education", qualifications.education);
    payload.append("specialSkills", qualifications.specialSkills);
    payload.append("references", qualifications.references);
    payload.append("workHistory", qualifications.workHistory);
    // Certification and Signature
    payload.append("certification", certification.toString());
    payload.append("signature", signature);
    payload.append("signatureDate", signatureDate);
    // Relevant Experience
    payload.append("relevantExperience", JSON.stringify(experienceList));
    // Resume
    if (resume) {
      payload.append("resume", resume);
    }

    try {
      const response = await fetch("/dashboard/pages/api/apply", {
        method: "POST",
        body: payload,
      });
      const data = await response.json();
      if (response.ok) {
        alert("Application submitted successfully! A copy has been sent to your email.");
        router.push("/dashboard/pages/careers");
      } else {
        alert(data.error || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#16436F] to-[#10b1b4] p-6 text-black">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-4">Standard Application for Employment</h1>
        <p className="mb-6 text-center">
          It is our policy to comply with all applicable state and federal laws prohibiting discrimination in employment.
          Please carefully read and answer all questions. You will not be considered for employment if you fail to completely answer all the questions.
          You may attach a résumé, but all questions must be answered.
        </p>
        
        <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-8">
          {/* PERSONAL DATA */}
          <fieldset className="border p-4 rounded">
            <legend className="font-bold text-lg">PERSONAL DATA</legend>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block">First Name <span className="text-red-500">*</span></label>
                <input type="text" name="firstName" value={personalData.firstName} onChange={handlePersonalChange} className="w-full border px-2 py-1" required />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block">MI</label>
                <input type="text" name="mi" value={personalData.mi} onChange={handlePersonalChange} className="w-full border px-2 py-1" maxLength={1} />
              </div>
              <div>
                <label className="block">Last Name <span className="text-red-500">*</span></label>
                <input type="text" name="lastName" value={personalData.lastName} onChange={handlePersonalChange} className="w-full border px-2 py-1" required />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
              </div>
            </div>
            <div className="mt-4">
              <label className="block">Home Address</label>
              <input type="text" name="address" value={personalData.address} onChange={handlePersonalChange} className="w-full border px-2 py-1" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block">Home Telephone Number <span className="text-red-500">*</span></label>
                <input type="tel" name="homePhone" value={personalData.homePhone} onChange={handlePersonalChange} placeholder="(000) 000-0000" className="w-full border px-2 py-1" required />
                {errors.homePhone && <p className="text-red-500 text-sm">{errors.homePhone}</p>}
              </div>
              <div>
                <label className="block">Secondary Telephone Number</label>
                <input type="tel" name="secondaryPhone" value={personalData.secondaryPhone} onChange={handlePersonalChange} placeholder="(000) 000-0000" className="w-full border px-2 py-1" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block">Email <span className="text-red-500">*</span></label>
                <input type="email" name="email" value={personalData.email} onChange={handlePersonalChange} className="w-full border px-2 py-1" required />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>
              <div>
                <label className="block">Preferred Start Date <span className="text-red-500">*</span></label>
                <input type="date" name="preferredStartDate" value={personalData.preferredStartDate} onChange={handlePersonalChange} className="w-full border px-2 py-1" required min="2025-01-01" />
                {errors.preferredStartDate && <p className="text-red-500 text-sm">{errors.preferredStartDate}</p>}
              </div>
            </div>
            <div className="mt-4">
              <label className="block">Upload Resume <span className="text-red-500">*</span></label>
              <input type="file" name="resume" onChange={handleResumeChange} className="w-full" accept=".pdf,.doc,.docx" required />
            </div>
          </fieldset>

          {/* POSITION INFORMATION */}
          <fieldset className="border p-4 rounded">
            <legend className="font-bold text-lg">POSITION INFORMATION</legend>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block">Hours <span className="text-red-500">*</span></label>
                <select name="hours" value={positionInfo.hours} onChange={handlePositionChange} className="w-full border px-2 py-1" required>
                  <option value="">Select</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                </select>
                {errors.hours && <p className="text-red-500 text-sm">{errors.hours}</p>}
              </div>
              <div>
                <label className="block">Position Applying For <span className="text-red-500">*</span></label>
                <select name="position" value={positionInfo.position} onChange={handlePositionChange} className="w-full border px-2 py-1" required>
                  <option value="">Select</option>
                  {jobListings.map((job, idx) => (
                    <option key={idx} value={job}>{job}</option>
                  ))}
                </select>
                {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
              </div>
            </div>
            <div className="mt-4">
              <label className="block">Preferred Pinnacle Location <span className="text-red-500">*</span></label>
              <select name="preferredLocation" value={positionInfo.preferredLocation} onChange={handlePositionChange} className="w-full border px-2 py-1" required>
                <option value="15200 Grevillea Avenue, Suite A-1, Lawndale, CA 90260">
                  15200 Grevillea Avenue, Suite A-1, Lawndale, CA 90260
                </option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block">Compensation Type <span className="text-red-500">*</span></label>
                <select name="compensationType" value={positionInfo.compensationType} onChange={handlePositionChange} className="w-full border px-2 py-1" required>
                  <option value="">Select</option>
                  <option value="Salary">Salary</option>
                  <option value="Hourly">Hourly</option>
                </select>
                {errors.compensationType && <p className="text-red-500 text-sm">{errors.compensationType}</p>}
              </div>
              <div>
                <label className="block">Compensation Amount <span className="text-red-500">*</span></label>
                <input type="text" name="compensationAmount" value={positionInfo.compensationAmount} onChange={handlePositionChange} className="w-full border px-2 py-1" required />
                {errors.compensationAmount && <p className="text-red-500 text-sm">{errors.compensationAmount}</p>}
              </div>
            </div>
          </fieldset>

          {/* WORK SCHEDULE PREFERENCES */}
          <fieldset className="border p-4 rounded">
            <legend className="font-bold text-lg">WORK SCHEDULE PREFERENCES</legend>
            <div className="flex flex-wrap gap-4 mt-4">
              {["Weekdays", "Weekends", "Mornings", "Evenings"].map(pref => (
                <label key={pref} className="flex items-center">
                  <input type="checkbox" checked={workPreferences[pref as keyof typeof workPreferences]} onChange={() => togglePreference(pref as keyof typeof workPreferences)} className="mr-2" />
                  {pref}
                </label>
              ))}
            </div>
          </fieldset>

          {/* FELONY CONVICTION */}
          <fieldset className="border p-4 rounded">
            <legend className="font-bold text-lg">FELONY CONVICTION</legend>
            <div className="mt-4">
              <label className="block">Have you ever been convicted of a felony? <span className="text-red-500">*</span></label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center">
                  <input type="radio" name="felony" value="Yes" checked={felony.answer === "Yes"} onChange={() => setFelony({ ...felony, answer: "Yes" })} className="mr-2" />
                  Yes
                </label>
                <label className="flex items-center">
                  <input type="radio" name="felony" value="No" checked={felony.answer === "No"} onChange={() => setFelony({ ...felony, answer: "No" })} className="mr-2" />
                  No
                </label>
              </div>
              {felony.answer === "Yes" && (
                <div className="mt-2">
                  <label className="block">If yes, explain:</label>
                  <textarea value={felony.explanation} onChange={(e) => setFelony({ ...felony, explanation: e.target.value })} className="w-full border px-2 py-1"></textarea>
                </div>
              )}
            </div>
          </fieldset>

          {/* QUALIFICATIONS */}
          <fieldset className="border p-4 rounded">
            <legend className="font-bold text-lg">QUALIFICATIONS</legend>
            <div className="mt-4">
              <label className="block">Education/Training</label>
              <textarea value={qualifications.education} onChange={(e) => setQualifications({ ...qualifications, education: e.target.value })} className="w-full border px-2 py-1"></textarea>
            </div>
            <div className="mt-4">
              <label className="block">Special Skills</label>
              <textarea value={qualifications.specialSkills} onChange={(e) => setQualifications({ ...qualifications, specialSkills: e.target.value })} className="w-full border px-2 py-1"></textarea>
            </div>
            <div className="mt-4">
              <label className="block">References (List three professional references)</label>
              <textarea value={qualifications.references} onChange={(e) => setQualifications({ ...qualifications, references: e.target.value })} className="w-full border px-2 py-1"></textarea>
            </div>
            <div className="mt-4">
              <label className="block">Work History</label>
              <textarea value={qualifications.workHistory} onChange={(e) => setQualifications({ ...qualifications, workHistory: e.target.value })} className="w-full border px-2 py-1"></textarea>
            </div>
          </fieldset>

          {/* RELEVANT EXPERIENCE */}
          <fieldset className="border p-4 rounded">
            <legend className="font-bold text-lg">RELEVANT EXPERIENCE (max 5 bullet points)</legend>
            <div className="flex items-center gap-2 mt-4">
              <input type="text" value={experienceInput} onChange={(e) => setExperienceInput(e.target.value)} placeholder="Enter experience" className="w-full border px-2 py-1" />
              <button type="button" onClick={addExperience} className="bg-black text-white px-4 py-1 rounded">Add</button>
            </div>
            <ul className="mt-2 list-disc pl-5">
              {experienceList.map((exp, idx) => (
                <li key={idx} className="flex justify-between items-center">
                  {exp}
                  <button type="button" onClick={() => removeExperience(idx)} className="text-red-500 ml-2">Remove</button>
                </li>
              ))}
            </ul>
          </fieldset>

          {/* CERTIFICATION */}
          <fieldset className="border p-4 rounded">
            <legend className="font-bold text-lg">CERTIFICATION</legend>
            <p className="mt-2">
              I certify that the facts set forth in this Application for Employment are true and complete to the best of my knowledge.
              I understand that false statements, omissions, or misrepresentations may result in my dismissal.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <input type="checkbox" checked={certification} onChange={(e) => setCertification(e.target.checked)} />
              <label>I certify the above.</label>
              {errors.certification && <p className="text-red-500 text-sm">{errors.certification}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label>Applicant Signature <span className="text-red-500">*</span></label>
                <input type="text" value={signature} onChange={(e) => setSignature(e.target.value)} placeholder="Type your full name" className="w-full border px-2 py-1" required />
                {errors.signature && <p className="text-red-500 text-sm">{errors.signature}</p>}
              </div>
              <div>
                <label>Signature Date <span className="text-red-500">*</span></label>
                <input type="date" value={signatureDate} onChange={(e) => setSignatureDate(e.target.value)} className="w-full border px-2 py-1" required />
                {errors.signatureDate && <p className="text-red-500 text-sm">{errors.signatureDate}</p>}
              </div>
            </div>
          </fieldset>

          {/* Submit Button */}
          <button type="submit" disabled={isSubmitting} className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition">
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyPage;
