"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import jobData from "./JobData";



// Filter options
const filterOptions = {
  locations: ["Lawndale, CA",],
  departments: ["Asbestos Lab", "Mold Lab", "Field Work", "Administration"],
};

const CareersPage = () => {
  // State for filters & search
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);

  // Generic toggle helper for checkboxes
  const toggleFilter = (prev: string[], value: string): string[] => {
    if (prev.includes(value)) {
      return prev.filter((item) => item !== value);
    }
    return [...prev, value];
  };

  // Update location filter
  const handleLocationChange = (loc: string) => {
    setSelectedLocations((prev) => toggleFilter(prev, loc));
  };

  // Update department filter
  const handleDepartmentChange = (dept: string) => {
    setSelectedDepartments((prev) => toggleFilter(prev, dept));
  };

  // Filtered job list
  const filteredJobs = jobData.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation =
      selectedLocations.length === 0 || selectedLocations.includes(job.location);
    const matchesDepartment =
      selectedDepartments.length === 0 || selectedDepartments.includes(job.department);

    return matchesSearch && matchesLocation && matchesDepartment;
  });

  return (
    <>
      {/* Banner */}
      <div className="relative w-full h-96 flex items-center justify-center">
  {/* Background Image */}
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{
      backgroundImage: "url('/pinnaclelab/Headshots:GroupPhotos/GroupApril2025.jpg')",
      backgroundPosition: "center 53%",
    }}
  />

  {/* Color Overlay with opacity */}
  <div className="absolute inset-0 bg-[#16436F] opacity-40 z-10" />

  {/* Foreground Content */}
  <h1 className="relative z-20 text-5xl font-bold text-white">Join Our Team</h1>
</div>




      {/* Main Content */}
      <div className="relative bg-gradient-to-b from-[#16436F] to-[#10b1b4] text-white p-6 flex flex-col md:flex-row min-h-screen">
  {/* Left Sidebar Filters */}
  <div className="w-full md:w-1/4 mb-8 md:mb-0 md:pr-8 md:sticky md:top-0 md:h-screen md:overflow-y-auto">
    <h2 className="font-bold text-2xl mb-6">Filter by</h2>

    {/* Search Bar */}
    <div className="mb-6">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by job title..."
        className="border border-gray-300 rounded-full px-4 py-2 w-full text-black"
      />
    </div>

    {/* Location Filter */}
    <div className="mb-8">
      <h3 className="font-bold text-xl mb-4">Location</h3>
      <div className="flex flex-col gap-2">
        {filterOptions.locations.map((loc) => (
          <label key={loc} className="flex items-center gap-2 cursor-pointer hover:underline">
            <input
              type="checkbox"
              checked={selectedLocations.includes(loc)}
              onChange={() => handleLocationChange(loc)}
            />
            {loc}
          </label>
        ))}
      </div>
    </div>

    {/* Department Filter */}
    <div className="mb-8">
      <h3 className="font-bold text-xl mb-4">Department</h3>
      <div className="flex flex-col gap-2">
        {filterOptions.departments.map((dept) => (
          <label key={dept} className="flex items-center gap-2 cursor-pointer hover:underline">
            <input
              type="checkbox"
              checked={selectedDepartments.includes(dept)}
              onChange={() => handleDepartmentChange(dept)}
            />
            {dept}
          </label>
        ))}
      </div>
    </div>
  </div>

  {/* Center Job Listings */}
  <div className="w-full md:w-1/2">
    <h2 className="text-3xl font-bold mb-6">Current Openings</h2>
    {filteredJobs.length === 0 ? (
      <p>No job openings match your filters.</p>
    ) : (
      filteredJobs.map((job) => (
        <div key={job.id} className="bg-white text-black rounded-lg shadow-lg p-4 mb-6 flex gap-4">
          {/* Job Image */}
          <div className="w-28 h-28 md:w-40 md:h-40 relative flex-shrink-0">
            <Image src={job.image} alt={job.title} fill className="object-cover rounded-lg" />
          </div>

          {/* Job Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-[#16436F]">{job.title}</h3>
              <p className="text-gray-700 mt-1">
                {job.department} — {job.location}
              </p>
              <p className="text-sm mt-4">{job.description}</p>
            </div>
            <Link href="/dashboard/pages/careers/apply">
              <button className="bg-[#16436F] text-white py-2 px-4 rounded-lg hover:bg-[#0f2b48] transition-colors">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      ))
    )}
  </div>

{/* Right Sidebar: Contact Info / Help */}
<div className="w-full md:w-1/4 mt-8 md:mt-0 md:pl-8 md:sticky md:top-0 md:h-screen md:overflow-y-auto">
  <h2 className="font-bold text-2xl mb-6">Need Help?</h2>

  {/* Contact Info Section */}
  <div className="bg-white text-black rounded-lg shadow-lg p-6 mb-6">
    <h3 className="text-lg font-bold text-[#16436F] mb-2">Contact Us</h3>
    <p className="text-sm mb-2">
      <span className="font-semibold">Phone:</span> (310) 400-6153
    </p>
    <p className="text-sm mb-2">
      <span className="font-semibold">Email:</span> careers@pinnaclelab.com
    </p>
  </div>

  {/* Job Opportunities Advertisement Section */}
  <div className="bg-gradient-to-r from-[#16436F] to-[#2A6EBB] text-white rounded-lg shadow-lg p-6">
    <h3 className="text-lg font-bold mb-2">Join Our Team!</h3>
    <p className="text-sm mb-4">
      Excited to grow with Pinnacle Laboratory? Explore exciting career opportunities and apply today!
    </p>
    <div className="space-y-3">
      {/* LinkedIn Job Ad */}
      <a
        href="https://www.linkedin.com/company/pinnacle-laboratory/jobs/"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-white text-[#16436F] font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300 text-center"
      >
        Apply on LinkedIn
      </a>
      {/* Indeed Job Ad */}
      <a
        href="https://www.indeed.com/cmp/Pinnacle-Laboratory"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-white text-[#16436F] font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition duration-300 text-center"
      >
        Apply on Indeed
      </a>
    </div>
    <p className="text-xs mt-4 text-gray-200">
      * Opens in a new tab. We’re hiring—don’t miss out!
    </p>
  </div>
</div>
</div>
    </>
  );
};

export default CareersPage;




//   return (

    
//     <div className="relative bg-gradient-to-b from-[#16436F] to-[#10b1b4] text-white p-8 flex min-h-screen">
      
//       {/* Left Sidebar Filters */}
//       <div className="w-1/4 pr-8 sticky top-0 h-screen overflow-y-auto">
//         <h2 className="font-bold text-2xl mb-6">Filter by</h2>

//         {/* Search Bar */}
//         <div className="mb-6">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search by job title..."
//             className="border border-gray-300 rounded-full px-4 py-2 w-full text-black"
//           />
//         </div>

//         {/* Location Filter */}
//         <div className="mb-8">
//           <h3 className="font-bold text-xl mb-4">Location</h3>
//           <div className="flex flex-col gap-2">
//             {filterOptions.locations.map((loc) => (
//               <label
//                 key={loc}
//                 className="flex items-center gap-2 cursor-pointer hover:underline"
//               >
//                 <input
//                   type="checkbox"
//                   checked={selectedLocations.includes(loc)}
//                   onChange={() => handleLocationChange(loc)}
//                 />
//                 {loc}
//               </label>
//             ))}
//           </div>
//         </div>

//         {/* Department Filter */}
//         <div className="mb-8">
//           <h3 className="font-bold text-xl mb-4">Department</h3>
//           <div className="flex flex-col gap-2">
//             {filterOptions.departments.map((dept) => (
//               <label
//                 key={dept}
//                 className="flex items-center gap-2 cursor-pointer hover:underline"
//               >
//                 <input
//                   type="checkbox"
//                   checked={selectedDepartments.includes(dept)}
//                   onChange={() => handleDepartmentChange(dept)}
//                 />
//                 {dept}
//               </label>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Center Job Listings */}
//       <div className="w-1/2">
//         <h2 className="text-3xl font-bold mb-6">Current Openings</h2>
//         {filteredJobs.length === 0 ? (
//           <p>No job openings match your filters.</p>
//         ) : (
//           filteredJobs.map((job) => (
//             <div
//               key={job.id}
//               className="bg-white text-black rounded-lg shadow-lg p-4 mb-6 flex gap-4"
//             >
//               {/* Job Image (Optional) */}
//               <div className="w-40 h-40 relative flex-shrink-0">
//                 <Image
//                   src={job.image}
//                   alt={job.title}
//                   fill
//                   className="object-cover rounded-lg"
//                 />
//               </div>

//               {/* Job Details */}
//               <div className="flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-xl font-semibold text-[#16436F]">{job.title}</h3>
//                   <p className="text-gray-700 mt-1">{job.department} — {job.location}</p>
//                   <p className="text-sm mt-4">{job.description}</p>
//                 </div>

//                 <div className="mt-4">
//                   <a
//                     href={job.indeedLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-block bg-[#16436F] text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#1E5A81] transition"
//                   >
//                     Apply on Indeed
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Right Sidebar: Contact Info / Help */}
//       <div className="w-1/4 pl-8 sticky top-0 h-screen overflow-y-auto">
//         <h2 className="font-bold text-2xl mb-6">Need Help?</h2>
//         <div className="bg-white text-black rounded-lg shadow-lg p-6">
//           <h3 className="text-lg font-bold text-[#16436F] mb-2">Contact Us</h3>
//           <p className="text-sm mb-2">
//             <span className="font-semibold">Phone:</span> (310) 400-6153
//           </p>
//           <p className="text-sm mb-2">
//             <span className="font-semibold">Email:</span> careers@pinnaclelab.com
//           </p>
//           <p className="text-sm mb-4">
//             <span className="font-semibold">Address:</span> 15200 Grevillea Avenue, Suite A-1 Lawndale, CA 90260
//           </p>
//           <hr className="my-4" />
//           <p className="text-sm">
//             If you have any questions about our job postings or the application process, feel free to reach out or visit
//             us at our facility.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CareersPage;
