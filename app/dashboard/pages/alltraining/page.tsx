"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import OnboardingModal from "../auth/onboarding/page";
interface Course {
  id: string; // Ensure this matches API response
  title: string;
  description: string;
  image?: string;
  format?: string; // 'offered' will map to this
  category?: string;
  language?: string;
  duration?: string;
  level?: string;
  path?: string; // Include 'path' for linking
}


const courseData = [
  {
    title: "AHERA Asbestos Worker (Initial) - 32 Hour Course",
    description: `This comprehensive 32-hour course is designed for individuals seeking to gain the essential skills and knowledge required to work safely with asbestos in compliance with the Asbestos Hazard Emergency Response Act (AHERA).`,
    image: "/ASBTRAIN_001.jpeg",
    offered: "In-Person",
    category: "Asbestos",
    path: "/dashboard/pages/training/asbestos/course-1",
    language: "English",
    duration: "32 Hours",
    level: "Initial",
  },
  {
    title: "AHERA Trabajador de asbesto (inicial) - Curso de 32 horas",
    description: `This comprehensive 32-hour course is designed for individuals seeking to gain the essential skills and knowledge required to work safely with asbestos in compliance with the Asbestos Hazard Emergency Response Act (AHERA).`,
    image: "/ASBTRAIN_001.jpeg",
    offered: "In-Person",
    category: "Asbestos",
    path: "/dashboard/pages/training/asbestos/course-7",
    language: "Español",
    duration: "32 Hours",
    level: "Initial",
  },
  {
    title: "AHERA Asbestos Worker (Refresher) - 8 Hour Course",
    description: `The AHERA Asbestos Worker Refresher course is an 8-hour training designed for individuals who have previously completed the initial AHERA Asbestos Worker course and need to renew their certification.`,
    image: "/ASBTRAIN_001.jpeg",
    offered: "In-Person",
    category: "Asbestos",
    path: "/dashboard/pages/training/asbestos/course-2",
    language: "English",
    duration: "8 Hours",
    level: "Refresher",
  },
  {
    title: "Trabajador de asbesto AHERA (actualización) - Curso de 8 horas",
    description: `The AHERA Asbestos Worker Refresher course is an 8-hour training designed for individuals who have previously completed the initial AHERA Asbestos Worker course and need to renew their certification.`,
    image: "/ASBTRAIN_001.jpeg",
    offered: "In-Person",
    category: "Asbestos",
    path: "/dashboard/pages/training/asbestos/course-8",
    language: "Español",
    duration: "8 Hours",
    level: "Refresher",
  },
  {
    title: "AHERA Contractor/Supervisor (Initial) - 40 Hour Course",
    description: `The AHERA Contractor/Supervisor (Initial) course is a comprehensive 40-hour program designed for professionals responsible for overseeing asbestos-related activities in compliance with the Asbestos Hazard Emergency Response Act (AHERA).`,
    image: "/ASBTRAIN_002.jpeg",
    offered: "In-Person",
    category: "Asbestos",
    path: "/dashboard/pages/training/asbestos/course-3",
    language: "English",
    duration: "40 Hours",
    level: "Initial",
  },
  {
    title: "AHERA Contractor/Supervisor (Refresher) - 8 Hour Course",
    description: `The AHERA Contractor/Supervisor Refresher course is an 8-hour training program designed for professionals who have previously completed the initial AHERA Contractor/Supervisor course.`,
    image: "/ASBTRAIN_002.jpeg",
    offered: "In-Person",
    category: "Asbestos",
    path: "/dashboard/pages/training/asbestos/course-4",
    language: "English",
    duration: "8 Hours",
    level: "Refresher",
  },
  {
    title: "AHERA Building Inspector (Initial) - 24 Hour Course",
    description: `The AHERA Building Inspector (Initial) course is a thorough 24-hour program designed for individuals seeking to become qualified building inspectors in the field of asbestos management.`,
    image: "/ASBTRAIN_002.jpeg",
    offered: "In-Person",
    category: "Asbestos",
    path: "/dashboard/pages/training/asbestos/course-5",
    language: "English",
    duration: "24 Hours",
    level: "Initial",
  },
  {
    title: "AHERA Building Inspector (Refresher) - 4 Hour Course",
    description: `The AHERA Building Inspector Refresher course is a concise 4-hour program designed for individuals who have previously completed the initial AHERA Building Inspector training.`,
    image: "/ASBTRAIN_002.jpeg",
    offered: "In-Person",
    category: "Asbestos",
    path: "/dashboard/pages/training/asbestos/course-6",
    language: "English",
    duration: "4 Hours",
    level: "Refresher",
  },
  {
    title: "NIOSH 582 Equivalency Course - 32 Contact Hours",
    description: `A 32-hour comprehensive program covering air sampling and analytical techniques.`,
    image: "/niosh582.png",
    offered: "In-Person",
    category: "Analytical",
    path: "/dashboard/pages/training/analytical/course-1",
    language: "English",
    duration: "32 Hours",
    level: "Initial",
  },
  {
    title: "Introduction to PLM Analysis - 40 Contact Hours",
    description: `A 40-hour course focusing on Polarized Light Microscopy (PLM) analysis techniques.`,
    image: "/plm.jpg",
    offered: "In-Person",
    category: "Analytical",
    path: "/dashboard/pages/training/analytical/course-2",
    language: "English",
    duration: "40 Hours",
    level: "Initial",
  },
  {
    title: "Advanced Asbestos PLM Analysis - 16 Contact Hours",
    description: `A 16-hour advanced course for complex asbestos sample analysis and quantification techniques.`,
    image: "/plm.jpg",
    offered: "In-Person",
    category: "Analytical",
    path: "/dashboard/pages/training/analytical/course-3",
    language: "English",
    duration: "16 Hours",
    level: "Initial",
  },
  {
    title: "CDPH Lead Sample Technician (Initial) - 8 Contact Hours",
    description: `The CDPH Lead Sample Technician (Initial) course is an intensive 8-hour program designed for individuals seeking to become certified lead sample technicians in accordance with California Department of Public Health (CDPH) regulations.`,
    image: "/lead_header.jpeg",
    offered: "In-Person",
    category: "Lead",
    path: "/dashboard/pages/training/lead/course-1",
    language: "English",
    duration: "8 Hours",
    level: "Initial",
  },
  {
    title: "CDPH Continuing Education General - XXX Contact Hours COMING SOON",
    description: `The CDPH Lead Sample Technician (Initial) course is an intensive 8-hour program designed for individuals seeking to become certified lead sample technicians in accordance with California Department of Public Health (CDPH) regulations.`,
    image: "/lead_header.jpeg",
    offered: "In-Person",
    category: "Lead",
    path: "/dashboard/pages/training/lead/course-2",
    language: "English",
    duration: "8 Hours",
    level: "Coming Soon",
  },
  {
    title: "Introduction to Mold Sampling (Initial) - 16 Contact Hours",
    description: `The Introduction to Mold Sampling course is an introductory 16-hour program designed for professionals looking to gain foundational knowledge and practical skills in mold sampling techniques.`,
    image: "/mold.jpeg",
    offered: "In-Person",
    category: "Mold",
    path: "/dashboard/pages/training/mold/course-1",
    language: "English",
    duration: "16 Hours",
    level: "Initial",
  },
  {
    title: "Bloodborne Pathogens (Online) - 1 Hour Course",
    description:
      "Designed for healthcare professionals, first responders, custodial staff, and any employees at risk of exposure to infectious materials, the course equips participants with the knowledge and skills needed to ensure workplace safety and compliance.",
    image: "/HIV.jpg",
    offered: "Online",
    category: "Worker Safety",
    language: "English",
    duration: "1 Hour",
    level: "Coming Soon",
    path: "/dashboard/pages/training/workersafety/bloodbornepathogens",
  },
  {
    title: "Confined Spaces",
    description:
      "This 100% online course provides critical training on OSHA’s Confined Spaces Standard (29 CFR 1910.146), equipping workers with the knowledge to safely enter, work in, and exit confined spaces. ",
    image: "/ConfinedSpaces.jpeg",
    offered: "Online",
    category: "Worker Safety",
    language: "English",
    duration: "1.5 Hours",
    level: "Coming Soon",
    path: "/dashboard/pages/training/workersafety/confinedspaces",
  },
  {
    title: "CPR AED & First Aid",
    description:
      "Learn critical CPR, AED, and first aid skills to respond to emergencies and save lives.",
    image: "/CPR.jpeg",
    offered: "In-Person",
    category: "CPR AED & First Aid",
    language: "English",
    duration: "TBD",
    level: "Coming Soon",
    path: "/coming-soon",
  },
  {
    title: "HAZWOPER",
    description:
      "Comprehensive training for hazardous waste operations and emergency response.",
    image: "/HAZWOPER.jpeg",
    offered: "Online",
    category: "HAZWOPER",
    language: "English",
    duration: "TBD",
    level: "Coming Soon",
    path: "/coming-soon",
  },
  {
    title: "Lock Out, Tag Out",
    description:
      "This 100% online course provides critical training on OSHA’s Lockout/Tagout Standard (29 CFR 1910.147), designed to help employees and supervisors understand the procedures for safely controlling hazardous energy sources during maintenance and repair tasks.",
    image: "/LOTO.jpg",
    offered: "Online",
    category: "Worker Safety",
    language: "English",
    duration: "1.5 Hours",
    level: "Coming Soon",
    path: "/dashboard/pages/training/workersafety/lockouttagout",
  },
];

// Default category images
const categoryImages = {
  Asbestos: "/ASBTRAIN_001.jpeg",
  Lead: "/lead_header.jpeg",
  Mold: "/iStock-1468031957.jpg",
  Analytical: "/mold.jpeg",
  "Worker Safety": "/ConfinedSpaces.jpeg",
  "CPR AED & First Aid": "/CPR.jpeg",
  HAZWOPER: "/HAZWOPER.jpeg",
  Uncategorized: "/ComingSoon.png", // Fallback for uncategorized
};

const filterOptions = {
  categories: [
    "Asbestos",
    "Lead",
    "Mold",
    "Analytical",
    "Worker Safety",
    "CPR AED & First Aid",
    "HAZWOPER",
  ],
  formats: ["Online", "In-Person", "Online and In-Person"],
  languages: ["English", "Español"],
  levels: ["Initial", "Refresher", "Bundles", "Coming Soon"],
  duration: [
    "1 Hour",
    "1.5 Hours",
    "4 Hours",
    "8 Hours",
    "16 Hours",
    "24 Hours",
    "36 Hours",
    "40 Hours",
    "TBD",
  ],
};

const CoursePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedDurations, setSelectedDurations] = useState<string[]>([]);
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);
  const [dynamicCourses, setDynamicCourses] = useState<Course[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25); // Default items per page
  const [showMore, setShowMore] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(false);


  // Fetch dynamic courses on component mount
  useEffect(() => {
    async function fetchDynamicCourses() {
      try {
        const response = await fetch("/dashboard/pages/api/courses");
        const data: Course[] = await response.json(); // Explicit type assertion
        setDynamicCourses(data);
      } catch (error) {
        console.error("Error fetching dynamic courses:", error);
      }
    }
    fetchDynamicCourses();
  }, []);
  

  // Merge hardcoded and dynamic courses
  const mergedCourses: Course[] = [
    ...courseData.map((course, index) => ({
      id: `static-${index}`, // Assign a unique default ID for hardcoded courses
      ...course,
      format: course.offered, // Map 'offered' to 'format'
    })),
    ...dynamicCourses.map((course) => ({
      ...course,
      image:
        course.image ||
        categoryImages[course.category as keyof typeof categoryImages] ||
        categoryImages["Uncategorized"],
      format: course.format || "In-Person",
      path: `/dashboard/pages/training/${
        course.category?.toLowerCase() || "uncategorized"
      }/${course.id}`,
    })),
  ];
  
  

  useEffect(() => {
    // Trigger the onboarding modal if it's the user's first login or as required
    setShowOnboarding(true);

    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage, appliedFilters, itemsPerPage]);
  // Helper function to toggle filter
  const toggleFilter = (prev: string[], filter: string): string[] => {
    if (prev.includes(filter)) {
      return prev.filter((item) => item !== filter); // Remove if exists
    } else {
      return [...prev, filter]; // Add if doesn't exist
    }
  };

  // Unified function to handle filter changes and appliedFilters state
  const handleFilterChange = (
    filter: string,
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelected((prev: string[]) => toggleFilter(prev, filter));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  

  // Function to remove filter when "X" is clicked
  const removeFilter = (filter: string) => {
    setAppliedFilters((prev) => prev.filter((f) => f !== filter));
    setSelectedCategories((prev) => prev.filter((item) => item !== filter));
    setSelectedFormats((prev) => prev.filter((item) => item !== filter));
    setSelectedLanguages((prev) => prev.filter((item) => item !== filter));
    setSelectedLevels((prev) => prev.filter((item) => item !== filter));
    setSelectedDurations((prev) => prev.filter((item) => item !== filter));
  };
  

  // Function to change the number of courses displayed per page
  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1); // Reset to first page when changing items per page
  };
  

  // Scroll to the top when filters or page changes

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const filteredCourses = mergedCourses.filter((course) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      (course.category && selectedCategories.includes(course.category));
      const matchesFormat =
      selectedFormats.length === 0 ||
      (course.format && selectedFormats.includes(course.format));
    
    const matchesLanguage =
      selectedLanguages.length === 0 ||
      (course.language && selectedLanguages.includes(course.language));
    const matchesLevel =
      selectedLevels.length === 0 ||
      (course.level && selectedLevels.includes(course.level));
    const matchesDuration =
      selectedDurations.length === 0 ||
      (course.duration && selectedDurations.includes(course.duration));
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  
    return (
      matchesCategory &&
      matchesFormat &&
      matchesLanguage &&
      matchesLevel &&
      matchesDuration &&
      matchesSearch
    );
  });
  

  // Pagination logic
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Trigger scroll to top when currentPage or itemsPerPage changes
  useEffect(() => {
    scrollToTop();
  }, [currentPage, itemsPerPage]);
  
  return (
    <div className="bg-white text-black p-8 flex">
      {/* Sidebar Filter Section */}
      <div className="w-1/4 pr-8 sticky top-0 h-screen overflow-y-auto">
        <h2 className="font-bold text-2xl mb-6">Filter by</h2>

        {/* Subject Filter */}
        <div className="mb-8">
          <h3 className="font-bold text-xl mb-4">Courses</h3>
          <div className="flex flex-col gap-2">
            {filterOptions.categories
              .slice(0, showMore ? filterOptions.categories.length : 100)
              .map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-2 cursor-pointer hover:underline"
                >
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() =>
                      handleFilterChange(category, setSelectedCategories)
                    }
                  />
                  {category}
                </label>
              ))}
            {/* <button className="text-blue-500 mt-2 hover:underline" onClick={() => setShowMore(!showMore)}>
              {showMore ? "Show less" : "Show more"}
            </button> */}
          </div>
        </div>

        {/* Format Filter */}
        <div className="mb-8">
          <h3 className="font-bold text-xl mb-4">Format</h3>
          <div className="flex flex-col gap-2">
            {filterOptions.formats.map((format) => (
              <label
                key={format}
                className="flex items-center gap-2 cursor-pointer hover:underline"
              >
                <input
                  type="checkbox"
                  checked={selectedFormats.includes(format)}
                  onChange={() =>
                    handleFilterChange(format, setSelectedFormats)
                  }
                />
                {format}
              </label>
            ))}
          </div>
        </div>

        {/* Language Filter */}
        <div className="mb-8">
          <h3 className="font-bold text-xl mb-4">Language</h3>
          <div className="flex flex-col gap-2">
            {filterOptions.languages.map((language) => (
              <label
                key={language}
                className="flex items-center gap-2 cursor-pointer hover:underline"
              >
                <input
                  type="checkbox"
                  checked={selectedLanguages.includes(language)}
                  onChange={() =>
                    handleFilterChange(language, setSelectedLanguages)
                  }
                />
                {language}
              </label>
            ))}
          </div>
        </div>

        {/* Skill Level Filter */}
        <div className="mb-8">
          <h3 className="font-bold text-xl mb-4">Training Type</h3>
          <div className="flex flex-col gap-2">
            {filterOptions.levels.map((level) => (
              <label
                key={level}
                className="flex items-center gap-2 cursor-pointer hover:underline"
              >
                <input
                  type="checkbox"
                  checked={selectedLevels.includes(level)}
                  onChange={() => handleFilterChange(level, setSelectedLevels)}
                />
                {level}
              </label>
            ))}
          </div>
        </div>

        {/* Duration Filter */}
        <div className="mb-8">
          <h3 className="font-bold text-xl mb-4">Duration</h3>
          <div className="flex flex-col gap-2">
            {filterOptions.duration.map((duration) => (
              <label
                key={duration}
                className="flex items-center gap-2 cursor-pointer hover:underline"
              >
                <input
                  type="checkbox"
                  checked={selectedDurations.includes(duration)}
                  onChange={() =>
                    handleFilterChange(duration, setSelectedDurations)
                  }
                />
                {duration}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      {/* Main Content Section */}
      <div className="w-3/4">
        <div className="w-full mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for a course..."
            className="border border-gray-300 rounded-full px-4 py-2 w-full"
          />
        </div>
        {appliedFilters.length > 0 && (
          <div className="mb-6">
            <h3 className="font-bold text-lg mb-2">Applied Filters:</h3>
            <div className="flex gap-2 flex-wrap">
              {appliedFilters.map((filter, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-black px-3 py-1 rounded-full flex items-center gap-2"
                >
                  {filter}
                  <button
                    onClick={() => removeFilter(filter)}
                    className="text-red-500"
                  >
                    &times;
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paginatedCourses.map((course, index) => (
            <Link
              href={course.path || "/coming-soon"}
              key={index}
              className="relative group border border-gray-300 rounded-lg overflow-hidden shadow-lg transition hover:shadow-xl"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                <p className="text-sm text-gray-700">{course.description}</p>
                <div className="mt-4 text-sm text-blue-500">
                {course.format}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            Previous
          </button>
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <button
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            Next
          </button>
        </div>

        {/* Items Per Page Selection */}
        <div className="mt-4 flex justify-center">
          <label htmlFor="itemsPerPage" className="mr-2">
            Display:
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="border border-gray-300 rounded px-2 py-1"
          >
            {/* <option value={9}>9</option> */}
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
