// // "use client";

// // import React, { useEffect, useState, Fragment } from "react";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { Menu, Transition } from "@headlessui/react";
// // import {
// //   ChevronDownIcon,
// //   ChevronRightIcon,
// //   Bars3Icon,
// //   XMarkIcon,
// // } from "@heroicons/react/24/solid";
// // import { useRouter } from "next/navigation";
// // import { motion } from "framer-motion";

// // // import SearchComponent from '../searchheader/page';

// // // Course data with titles and paths
// // type CourseCategory = 'asbestos' | 'analytical' | 'mold' | 'lead' | 'workersafety';

// // const coursesData: Record<CourseCategory, { title: string; path: string }[]> = {
// //   asbestos: [
// //     {
// //       title: "AHERA Asbestos Worker (Initial) - 32 Hour Course",
// //       path: "course-1",
// //     },
// //     {
// //       title: "AHERA Asbestos Worker (Refresher) - 8 Hour Course",
// //       path: "course-2",
// //     },
// //     {
// //       title: "AHERA Contractor/Supervisor (Initial) - 40 Hour Course",
// //       path: "course-3",
// //     },
// //     {
// //       title: "AHERA Contractor/Supervisor (Refresher) - 8 Hour Course",
// //       path: "course-4",
// //     },
// //     {
// //       title: "AHERA Building Inspector (Initial) - 24 Hour Course",
// //       path: "course-5",
// //     },
// //     {
// //       title: "AHERA Building Inspector (Refresher) - 4 Hour Course",
// //       path: "course-6",
// //     },
// //   ],
// //   analytical: [
// //     {
// //       title: "NIOSH 582 Equivalency Course - 32 Contact Hours",
// //       path: "course-1",
// //     },
// //     {
// //       title: "Introduction to PLM Analysis - 40 Contact Hours",
// //       path: "course-2",
// //     },
// //     {
// //       title: "Advanced Asbestos PLM Analysis - 16 Contact Hours",
// //       path: "course-3",
// //     },
// //   ],
// //   mold: [
// //     {
// //       title: "Introduction to Mold Sampling - 16 Contact Hours",
// //       path: "course-1",
// //     },
// //   ],
// //   lead: [
// //     {
// //       title: "CDPH Lead Sample Technician (Initial) - 8 Contact Hours",
// //       path: "course-1",
// //     },
// //   ],
// //   workersafety: [
// //     { title: "Bloodborne Pathogens", path: "bloodbornepathogens" },
// //     { title: "Confined Spaces", path: "confinedspaces" },
// //     { title: "Lock out, Tag out", path: "lockouttagout" },
// //   ],
// // };

// // const Navigation = () => {
// //   const router = useRouter();
// //   const [userEmail, setUserEmail] = useState<string | null>(null);
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// //   // const [coursesData, setCoursesData] = useState({});

// //   // Set up user email from localStorage on load
// //   useEffect(() => {
// //     if (typeof window !== "undefined") {
// //       const storedEmail = localStorage.getItem("userEmail");
// //       setUserEmail(storedEmail);
// //     }

// //     // Inject Yelp and Google scripts
// //     const yelpScript = document.createElement("script");
// //     yelpScript.src =
// //       "//yelp.com/biz_badge_js/en_US/rrc/mKnuWhCQX2LrqYBiLya9Lw.js";
// //     yelpScript.async = true;
// //     document.body.appendChild(yelpScript);
// //   }, []);

// //   const handleLogout = () => {
// //     if (typeof window !== "undefined") {
// //       localStorage.removeItem("token");
// //       localStorage.removeItem("userEmail");
// //     }
// //     setUserEmail(null);
// //     router.push("/dashboard/pages/auth/signin");
// //   };

// //   const handleLinkClick = (path: string) => {
// //     setMobileMenuOpen(false);
// //     router.push(path);
// //     window.scrollTo({ top: 0, behavior: 'smooth' });
// //   };

// //   //bg-[#002B45]
// //   return (
// //     <header className="sticky top-0 z-50 bg-gradient-to-r from-[#24529c] to-[#1c3b6e] text-white shadow-md">
// //       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
// //         {/* Logo */}
// //         <div
// //           className="flex items-center cursor-pointer"
// //           onClick={() => handleLinkClick("/dashboard")}
// //         >
// //           <Image src="/AEHS_Logo.png" width={50} height={20} alt="AEHS Logo" />
// //           <span className="ml-2 font-bold text-lg">AEHS</span>
// //         </div>

// //         {/* Desktop Menu */}
// //         <nav className="header__nav">
// //           <nav className="hidden md:flex items-center gap-4">
// //             <motion.div
// //               whileHover={{ x: 10 }} // Moves 10px to the right on hover
// //               transition={{ type: "spring", stiffness: 300 }}
// //             >
// //               <Link
// //                 href="/dashboard/pages/alltraining"
// //                 className="hover:text-gray-400 transition"
// //               >
// //                 All Courses
// //               </Link>
// //             </motion.div>
// //             <DropdownMenu
// //               title="Training"
// //               items={[
// //                 "Asbestos",
// //                 "Lead",
// //                 "Mold",
// //                 "Analytical",
// //                 "HAZWOPER",
// //                 "WorkerSafety",
// //                 "CPR AED & First Aid",
// //               ]}
// //               basePath="/dashboard/pages/training"
// //               handleLinkClick={handleLinkClick}
// //               hasSubItems={true}
// //             />
// //             <motion.div
// //               whileHover={{ x: 10 }} // Moves 10px to the right on hover
// //               transition={{ type: "spring", stiffness: 300 }}
// //             >
// //               <Link
// //                 href="/dashboard/pages/calendar"
// //                 className="hover:text-gray-400 transition"
// //               >
// //                 Calendar
// //               </Link>
// //             </motion.div>
// //             <DropdownMenu
// //               title="About Us"
// //               items={[
// //                 "AEHS Info",
// //                 "Instructor Profiles",
// //                 "Accreditation",
// //                 "Pinnacle Laboratory",
// //               ]}
// //               basePath="/dashboard/pages/about"
// //               handleLinkClick={handleLinkClick}
// //             />
// //             <DropdownMenu
// //               title="Resources"
// //               items={["Professional Resources", "Certification", "FAQ"]}
// //               basePath="/dashboard/pages/resources"
// //               handleLinkClick={handleLinkClick}
// //             />

// //             <div className="header__cta">
// //               <motion.div
// //                 whileHover={{ x: 10 }} // Moves 10px to the right on hover
// //                 transition={{ type: "spring", stiffness: 300 }}
// //               >
// //                 <Link
// //                   href="/dashboard/pages/contactus/generalinquiry"
// //                   className="contact-us-button"
// //                 >
// //                   Contact Us
// //                 </Link>
// //               </motion.div>
// //             </div>

// //             <a
// //               href="https://g.page/r/CSQ6jOlBlGcFEBE/review"
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               style={{
// //                 display: "inline-block",
// //                 width: "110px",
// //                 height: "100px",
// //               }}
// //             >
// //               <img
// //                 src="/png-clipart-google-customer-review-business-company-google-search-engine-optimization-company-Photoroom.png"
// //                 alt="Google Reviews"
// //                 style={{ width: "100%", height: "100%", objectFit: "contain" }}
// //               />
// //             </a>
// //             <div
// //               id="yelp-biz-badge-plain-vQcEZZs78fZC5K7nhMCcSQ"
// //               className="ml-4"
// //               style={{ width: "85px", height: "40px" }}
// //             >
// //               <a
// //                 href="http://yelp.com/biz/pinnacle-laboratory-lawndale?utm_medium=badge_star_rating_reviews&amp;utm_source=biz_review_badge"
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //               >
// //                 {/* Check out AEHS on Yelp */}
// //               </a>
// //             </div>

// //             {userEmail ? (
// //               <div className="relative">
// //                 <Menu as="div" className="relative">
// //                   <Menu.Button className="flex items-center gap-2">
// //                     <span>{userEmail}</span>
// //                     <ChevronDownIcon className="w-5 h-5" />
// //                   </Menu.Button>
// //                   <Transition as={Fragment}>
// //                     <Menu.Items className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md">
// //                       <Menu.Item>
// //                         {({ active }) => (
// //                           <button
// //                             onClick={() =>
// //                               router.push(
// //                                 "/dashboard/pages/auth/portal/dashboard"
// //                               )
// //                             }
// //                             className={`${
// //                               active ? "bg-gray-100" : ""
// //                             } block w-full text-left px-4 py-2`}
// //                           >
// //                             My Portal
// //                           </button>
// //                         )}
// //                       </Menu.Item>
// //                       <Menu.Item>
// //                         {({ active }) => (
// //                           <button
// //                             onClick={() =>
// //                               router.push(
// //                                 "/dashboard/pages/auth/portal/account"
// //                               )
// //                             }
// //                             className={`${
// //                               active ? "bg-gray-100" : ""
// //                             } block w-full text-left px-4 py-2`}
// //                           >
// //                             My Account
// //                           </button>
// //                         )}
// //                       </Menu.Item>

// //                       {/* Add Course Button for Admins */}
// //                       {userEmail === "Mattrun27@gmail.com" && ( // Replace this with your actual admin validation logic
// //                         <Menu.Item>
// //                           {({ active }) => (
// //                             <button
// //                               onClick={() =>
// //                                 router.push(
// //                                   "/dashboard/pages/admin/admincourses"
// //                                 )
// //                               }
// //                               className={`${
// //                                 active ? "bg-gray-100" : ""
// //                               } block w-full text-left px-4 py-2`}
// //                             >
// //                               Add Course
// //                             </button>
// //                           )}
// //                         </Menu.Item>
// //                       )}

// //                       <Menu.Item>
// //                         {({ active }) => (
// //                           <button
// //                             onClick={handleLogout}
// //                             className={`${
// //                               active ? "bg-gray-100" : ""
// //                             } block w-full text-left px-4 py-2`}
// //                           >
// //                             Sign Out
// //                           </button>
// //                         )}
// //                       </Menu.Item>
// //                     </Menu.Items>
// //                   </Transition>
// //                 </Menu>
// //               </div>
// //             ) : (
// //               <Link
// //                 href="/dashboard/pages/auth/signin"
// //                 className="hover:text-gray-400 transition"
// //               >
// //                 Sign In / Sign Up
// //               </Link>
// //             )}
// //           </nav>
// //         </nav>

// //         {/* Mobile Menu Button */}
// //         <button
// //           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// //           className="md:hidden text-white hover:text-gray-400"
// //         >
// //           {mobileMenuOpen ? (
// //             <XMarkIcon className="h-8 w-8" />
// //           ) : (
// //             <Bars3Icon className="h-8 w-8" />
// //           )}
// //         </button>
// //       </div>

// //       {/* Mobile Menu */}
// //       {mobileMenuOpen && (
// //         <div className="md:hidden bg-gray-800 text-white w-full px-4 py-4 space-y-2 overflow-y-auto h-screen">
// //           <MobileDropdown
// //             title="Training"
// //             items={Object.keys(coursesData)}
// //             basePath="/dashboard/pages/training"
// //             handleLinkClick={handleLinkClick}
// //             hasSubItems
// //           />
// //           <MobileDropdown
// //             title="About Us"
// //             items={["AEHS Info", "Instructor Profiles", "Accreditation"]}
// //             basePath="/dashboard/pages/about"
// //             handleLinkClick={handleLinkClick}
// //           />
// //           <MobileDropdown
// //             title="Resources"
// //             items={["Exam Dates", "FAQ", "Certification Info"]}
// //             basePath="/dashboard/pages/resources"
// //             handleLinkClick={handleLinkClick}
// //           />
// //           <div
// //             onClick={() => handleLinkClick("/dashboard/pages/calendar")}
// //             className="block hover:bg-gray-700 px-4 py-2 rounded transition"
// //           >
// //             Calendar
// //           </div>
// //           <div
// //             onClick={() =>
// //               handleLinkClick("/dashboard/pages/contactus/generalinquiry")
// //             }
// //             className="block hover:bg-gray-700 px-4 py-2 rounded transition"
// //           >
// //             Contact Us
// //           </div>
// //         </div>
// //       )}
// //     </header>
// //   );
// // };

// // const DropdownMenu: React.FC<{
// //   title: string;
// //   items: string[];
// //   basePath: string;
// //   hasSubItems?: boolean;
// //   handleLinkClick: (path: string) => void;
// // }> = ({ title, items, basePath, hasSubItems = false, handleLinkClick }) => (
// //   <Menu as="div" className="relative">
// //     <Menu.Button className="hover:text-gray-400 transition inline-flex items-center">
// //       {title} <ChevronDownIcon className="w-4 h-4 ml-1" />
// //     </Menu.Button>
// //     <Transition as={Fragment}>
// //       <Menu.Items className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
// //         <div className="py-1">
// //           {items.map((item, index) => (
// //             <Menu.Item key={index} as="div" className="relative group">
// //               <Link
// //                 href={`${basePath}/${item.toLowerCase().replace(/ /g, '')}`}
// //                 className="block px-4 py-2 hover:bg-gray-200 rounded"
// //                 onClick={() => handleLinkClick(`${basePath}/${item.toLowerCase().replace(/ /g, '')}`)}
// //               >
// //                 {item} {hasSubItems && <ChevronRightIcon className="w-4 h-4 inline ml-1" />}
// //               </Link>
// //               {hasSubItems && (item.toLowerCase() as CourseCategory) in coursesData && (
// //               <Transition as={Fragment}>
// //                 <div className="hidden absolute left-full top-0 mt-0 w-48 bg-white text-black shadow-lg rounded-md p-2 group-hover:block">
// //                   {coursesData[item.toLowerCase() as CourseCategory].map((course, courseIndex) => (
// //                     <Link
// //                       key={courseIndex}
// //                       href={`${basePath}/${item.toLowerCase().replace(/ /g, '')}/${course.path}`}
// //                       className="block px-4 py-2 hover:bg-gray-200"
// //                     >
// //                       {course.title}
// //                     </Link>
// //                   ))}
// //                 </div>
// //               </Transition>
// //             )}

// //             </Menu.Item>
// //           ))}
// //         </div>
// //       </Menu.Items>
// //     </Transition>
// //   </Menu>
// // );

// // interface MobileDropdownProps {
// //   title: string;
// //   items: string[];
// //   basePath: string;
// //   handleLinkClick: (path: string) => void;
// //   hasSubItems?: boolean;
// // }

// // const MobileDropdown: React.FC<MobileDropdownProps> = ({
// //   title,
// //   items,
// //   basePath,
// //   handleLinkClick,
// //   hasSubItems = false,
// // }) => (
// //   <div className="border-t border-gray-700">
// //     <button className="w-full text-left px-4 py-2 bg-gray-800 hover:bg-gray-700 transition">{title}</button>
// //     <div className="pl-4 pt-2">
// //       {items.map((item, index) => (
// //         <div key={index} className="block">
// //           <div
// //             onClick={() => handleLinkClick(`${basePath}/${item.toLowerCase().replace(/ /g, '')}`)}
// //             className="block px-4 py-2 hover:bg-gray-700 rounded transition"
// //           >
// //             {item}
// //           </div>
// //           {hasSubItems && item.toLowerCase() in coursesData && (
// //             <div className="pl-4 pt-1">
// //               {coursesData[item.toLowerCase() as CourseCategory].map((course, subIndex) => (
// //                 <div
// //                   key={subIndex}
// //                   onClick={() =>
// //                     handleLinkClick(`${basePath}/${item.toLowerCase().replace(/ /g, '')}/${course.path}`)
// //                   }
// //                   className="block px-4 py-2 hover:bg-gray-700 rounded transition"
// //                 >
// //                   {course.title}
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   </div>
// // );

// // export default Navigation;





























// "use client";


// import React, { useState, Fragment } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, Transition } from "@headlessui/react";
// import {
//  ChevronDownIcon,
//  Bars3Icon,
//  XMarkIcon,
//  PhoneIcon,
// } from "@heroicons/react/24/solid";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import styles from "./headerj.module.css";


// const Navigation = () => {
//  const router = useRouter();
//  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


//  const handleLinkClick = (path: string) => {
//    setMobileMenuOpen(false);
//    router.push(path);
//    window.scrollTo({ top: 0, behavior: "smooth" });
//  };


//  return (
//    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#16436f] to-[#10b1b4] text-white shadow-md">
//      <div className="text-sm">
//        <div className="flex justify-between items-center h-19">
//          {/* Logo */}
//          <div
//            className="flex items-center cursor-pointer"
//            onClick={() => handleLinkClick("/dashboard")}
//            style={{ marginLeft: 0 }}
//          >
//            <Image
//              src="/pinnaclelab/Logos/Logo_Long_no_bg.png"
//              width={460}
//              height={100}
//              alt="Pinnacle Laboratory Logo"
//              className="max-w-full h-auto"
//            />
//          </div>


//          {/* Desktop Navigation */}
//          <nav className="hidden md:flex items-center justify-center gap-6 px-4 w-full">
//            <DropdownMenu
//              title="ABOUT US"
//              basePath="/dashboard/pages/about"
//              items={[
//                { label: "MEET OUR TEAM", path: "meetourteam" },
//                { label: "ACCREDITATION", path: "accreditation" },
//                { label: "FAQ", path: "faq" },
//                { label: "BLOG", path: "blog" },
//              ]}
//            />


//            <DropdownMenu
//              title="SERVICES"
//              basePath="/dashboard/pages/analyticalservices"
//              items={[
//                { label: "ASBESTOS", path: "asbestos" },
//                { label: "MOLD", path: "mold" },
//                { label: "MICROBIOLOGY", path: "microbiology" },
//                { label: "FIBERGLASS", path: "fiberglass" },
//                { label: "LEAD", path: "lead" },
//                { label: "HEAVY METALS", path: "heavy-metals" },
//                { label: "FIRE AND SMOKE", path: "fire-&-smoke" },
//              ]}
//            />


//            <motion.div
//              whileHover={{ x: 10 }}
//              transition={{ type: "spring", stiffness: 300 }}
//            >
//              <Link
//                href="/dashboard/pages/chainofcustody"
//                className="hover:text-gray-200 transition"
//              >
//                CHAIN OF CUSTODY FORMS
//              </Link>
//            </motion.div>


//            <DropdownMenu
//              title="CAREERS"
//              basePath="/dashboard/pages/"
//              items={[
//                { label: "JOIN OUR TEAM", path: "careers" },
//                { label: "TRAINING", path: "training" },
//              ]}
//            />


//            <DropdownMenu
//              title="SHOP"
//              basePath="/dashboard/pages/products"
//              items={[
//                { label: "ALL PRODUCTS", path: "allproducts" },
//                { label: "ASBESTOS", path: "asbestos" },
//                { label: "MOLD", path: "mold" },
//                { label: "LEAD", path: "lead" },
//                { label: "EQUIPMENT RENTALS", path: "equipmentrental" },
//                { label: "SAMPLE BAGS", path: "samplebags" },
//              ]}
//            />


//            <motion.div
//              whileHover={{ x: 10 }}
//              transition={{ type: "spring", stiffness: 300 }}
//            >
//              <Link
//                href="/dashboard/pages/contactus/generalinquiry"
//                className="hover:text-gray-200 transition"
//              >
//                CONTACT US
//              </Link>
//            </motion.div>


//            <motion.div
//              whileHover={{ x: 10 }}
//              transition={{ type: "spring", stiffness: 300 }}
//            >
//              <Link
//                href="/dashboard/pages/shippinglabelform"
//                className="hover:text-gray-200 transition"
//              >
//                SHIPPING
//              </Link>
//            </motion.div>


//            <motion.div
//              whileHover={{ x: 10 }}
//              transition={{ type: "spring", stiffness: 300 }}
//            >
//              <Link
//                href=" https://limsexpressplus.com/software/html5.html?user=*PinnacleReports&pwd=NscK45v2!Cr"
//                className="hover:text-gray-200 transition"
//                target="_blank"
//                rel="noopener noreferrer"
//              >
//                LOGIN
//              </Link>
//            </motion.div>


//            <a href="tel:3104319270">
//              <motion.div
//                whileHover={{ x: 10 }}
//                transition={{ type: "spring", stiffness: 300 }}
//                className="flex items-center gap-2"
//              >
//                <PhoneIcon className="w-5 h-5" />
//                <span>(310) 431-9270</span>
//              </motion.div>
//            </a>
//          </nav>
//        </div>


//        {/* Mobile Menu Button */}
//        <button
//          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//          className="md:hidden text-white hover:text-gray-200"
//        >
//          {mobileMenuOpen ? (
//            <XMarkIcon className="h-8 w-8" />
//          ) : (
//            <Bars3Icon className="h-8 w-8" />
//          )}
//        </button>
//      </div>


//      {/* Mobile Menu */}
// {mobileMenuOpen && (
//   <div className="md:hidden bg-gradient-to-r from-[#16436f] to-[#10b1b4] text-white w-full px-4 py-4 space-y-2 fixed inset-0 overflow-y-auto z-50">
//     <div className="flex justify-between items-center mb-6">
//       {/* Logo in mobile menu */}
//       <div className="flex items-center">
//         <Image
//           src="/pinnaclelab/Logos/Logo_Long_no_bg.png"
//           width={230}
//           height={50}
//           alt="Pinnacle Laboratory Logo"
//           className="max-w-full h-auto"
//         />
//       </div>

//       {/* X Button to Close Menu */}
//       <button
//         onClick={() => setMobileMenuOpen(false)}
//         className="text-white hover:text-gray-200"
//       >
//         <XMarkIcon className="h-8 w-8" />
//       </button>
//     </div>

//     <MobileDropdown
//       title="ABOUT US"
//       basePath="/dashboard/pages/about"
//       items={[
//         { label: "MEET OUR TEAM", path: "meetourteam" },
//         { label: "ACCREDITATION", path: "accreditation" },
//         { label: "FAQ", path: "faq" },
//         { label: "BLOG", path: "blog" },
//       ]}
//       setMobileMenuOpen={setMobileMenuOpen}
//     />

//     <MobileDropdown
//       title="SERVICES"
//       basePath="/dashboard/pages/analyticalservices"
//       items={[
//         { label: "ASBESTOS", path: "asbestos" },
//         { label: "MOLD", path: "mold" },
//         { label: "MICROBIOLOGY", path: "microbiology" },
//         { label: "FIBERGLASS", path: "fiberglass" },
//         { label: "LEAD", path: "lead" },
//         { label: "HEAVY METALS", path: "heavy-metals" },
//         { label: "FIRE AND SMOKE", path: "fire-&-smoke" },
//       ]}
//       setMobileMenuOpen={setMobileMenuOpen}
//     />

//     <div
//       onClick={() => handleLinkClick("/dashboard/pages/chainofcustody")}
//       className="block hover:bg-[#10b1b4] px-4 py-2 rounded transition cursor-pointer border-b border-gray-200/20"
//     >
//       CHAIN OF CUSTODY FORMS
//     </div>

//     <MobileDropdown
//       title="CAREERS"
//       basePath="/dashboard/pages"
//       items={[
//         { label: "JOIN OUR TEAM", path: "careers" },
//         { label: "TRAINING", path: "training" },
//       ]}
//       setMobileMenuOpen={setMobileMenuOpen}
//     />

//     <MobileDropdown
//       title="SHOP"
//       basePath="/dashboard/pages/products"
//       items={[
//         { label: "ALL PRODUCTS", path: "allproducts" },
//         { label: "ASBESTOS", path: "asbestos" },
//         { label: "MOLD", path: "mold" },
//         { label: "LEAD", path: "lead" },
//         { label: "EQUIPMENT RENTALS", path: "equipmentrental" },
//         { label: "SAMPLE BAGS", path: "samplebags" },
//       ]}
//       setMobileMenuOpen={setMobileMenuOpen}
//     />

//     <div
//       onClick={() => handleLinkClick("/dashboard/pages/contactus/generalinquiry")}
//       className="block hover:bg-[#10b1b4] px-4 py-2 rounded transition cursor-pointer border-b border-gray-200/20"
//     >
//       CONTACT US
//     </div>

//     <div
//       onClick={() => handleLinkClick("/dashboard/pages/shippinglabelform")}
//       className="block hover:bg-[#10b1b4] px-4 py-2 rounded transition cursor-pointer border-b border-gray-200/20"
//     >
//       SHIPPING
//     </div>

//     <div className="block hover:bg-[#10b1b4] px-4 py-2 rounded transition cursor-pointer border-b border-gray-200/20">
//       <a
//         href="https://limsexpressplus.com/software/html5.html?user=*PinnacleReports&pwd=NscK45v2!Cr"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         LOGIN
//       </a>
//     </div>
    
//     <a href="tel:3104319270" className="block">
//       <div className="flex items-center gap-2 px-4 py-2 hover:bg-[#10b1b4] rounded transition cursor-pointer">
//         <PhoneIcon className="w-5 h-5" />
//         <span>(310) 431-9270</span>
//       </div>
//     </a>
//   </div>
// )}
//    </header>
//  );
// };


// const DropdownMenu: React.FC<{
//  title: string;
//  items: { label: string; path: string }[];
//  basePath: string;
// }> = ({ title, items, basePath }) => (
//  <Menu as="div" className="relative">
//    <Menu.Button className="hover:text-gray-400 transition inline-flex items-center">
//      {title} <ChevronDownIcon className="w-4 h-4 ml-1" />
//    </Menu.Button>
//    <Transition as={Fragment}>
//      <Menu.Items className="absolute left-0 mt-2 w-56 bg-white text-black shadow-xl rounded-lg ring-1 ring-gray-300 focus:outline-none z-50">
//        <div className="py-1">
//          {items.map((item, index) => (
//            <Menu.Item key={index}>
//              <Link
//                href={`${basePath}/${item.path}`}
//                className="block px-4 py-2 hover:bg-gray-200 rounded transition"
//              >
//                {item.label}
//              </Link>
//            </Menu.Item>
//          ))}
//        </div>
//      </Menu.Items>
//    </Transition>
//  </Menu>
// );


// const MobileDropdown: React.FC<{
//   title: string;
//   items: { label: string; path: string }[];
//   basePath: string;
//   setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }> = ({ title, items, basePath, setMobileMenuOpen }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter();

//   const handleItemClick = (path: string) => {
//     setMobileMenuOpen(false);
//     router.push(`${basePath}/${path}`);
//   };

//   return (
//     <div className="border-b border-gray-200/20">
//       <button 
//         className="w-full text-left px-4 py-3 hover:bg-[#10b1b4]/50 transition flex justify-between items-center"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         {title}
//         <ChevronDownIcon className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
//       </button>
      
//       {isOpen && (
//         <div className="pl-4">
//           {items.map((item, index) => (
//             <div 
//               key={index}
//               onClick={() => handleItemClick(item.path)}
//               className="block px-4 py-2 hover:bg-[#10b1b4] rounded transition cursor-pointer"
//             >
//               {item.label}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };


// export default Navigation;


//og one^^^^


"use client";

import React, { useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Navigation = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (path: string) => {
    setMobileMenuOpen(false);
    router.push(path);
    const anchor = path.split("#")[1];
    if (anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#16436f] to-[#10b1b4] text-white shadow-md">
      <div className="text-sm">
        <div className="flex justify-between items-center h-19">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleLinkClick("/dashboard")}
            style={{ marginLeft: 0 }}
          >
            <Image
              src="/pinnaclelab/Logos/Logo_Long_no_bg.png"
              width={460}
              height={100}
              alt="Pinnacle Laboratory Logo"
              className="max-w-full h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-6 px-4 w-full">
            <DropdownMenu
              title="ABOUT US"
              basePath="/dashboard/pages/about"
              items={[
                { label: "MEET OUR TEAM", path: "meetourteam" },
                { label: "ACCREDITATION", path: "accreditation" },
                { label: "FAQ", path: "faq" },
                { label: "BLOG", path: "blog" },
              ]}
            />

            <DropdownMenu
              title="SERVICES"
              basePath="/dashboard/pages/analyticalservices"
              items={[
                { label: "ASBESTOS", path: "asbestos" },
                { label: "MOLD", path: "mold" },
                {
                  label: "MICROBIOLOGY",
                  path: "/dashboard/pages/analyticalservices/microbiology",
                  subLinks: [
                    { label: "Allergen/Pollen", path: "/dashboard/pages/analyticalservices/microbiology#allergen" },
                    { label: "Bacteria", path: "/dashboard/pages/analyticalservices/microbiology#colilert" },
                    { label: "Cultures", path: "/dashboard/pages/analyticalservices/microbiology#culture" },
                  ],
                },
                { label: "FIBERGLASS", path: "fiberglass" },
                { label: "LEAD", path: "lead" },
                { label: "HEAVY METALS", path: "heavy-metals" },
                { label: "FIRE AND SMOKE", path: "fire-&-smoke" },
              ]}
            />

            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="/dashboard/pages/chainofcustody"
                className="hover:text-gray-200 transition"
              >
                CHAIN OF CUSTODY FORMS
              </Link>
            </motion.div>

            <DropdownMenu
              title="CAREERS"
              basePath="/dashboard/pages/"
              items={[
                { label: "JOIN OUR TEAM", path: "careers" },
                { label: "TRAINING", path: "training" },
              ]}
            />

            <DropdownMenu
              title="SHOP"
              basePath="/dashboard/pages/products"
              items={[
                { label: "ALL PRODUCTS", path: "allproducts" },
                { label: "ASBESTOS", path: "asbestos" },
                { label: "MOLD", path: "mold" },
                { label: "LEAD", path: "lead" },
                { label: "EQUIPMENT RENTALS", path: "equipmentrental" },
                { label: "SAMPLE BAGS", path: "samplebags" },
              ]}
            />

            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="/dashboard/pages/contactus/generalinquiry"
                className="hover:text-gray-200 transition"
              >
                CONTACT US
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="/dashboard/pages/shippinglabelform"
                className="hover:text-gray-200 transition"
              >
                SHIPPING
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="https://limsexpressplus.com/software/html5.html?user=*PinnacleReports&pwd=NscK45v2!Cr"
                className="hover:text-gray-200 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                LOGIN
              </Link>
            </motion.div>

            <a href="tel:3104319270">
              <motion.div
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-2"
              >
                <PhoneIcon className="w-5 h-5" />
                <span>(310) 431-9270</span>
              </motion.div>
            </a>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white hover:text-gray-200"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-8 w-8" />
          ) : (
            <Bars3Icon className="h-8 w-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#16436f] to-[#10b1b4] text-white w-full px-4 py-4 space-y-2 fixed inset-0 overflow-y-auto z-50">
          <div className="flex justify-between items-center mb-6">
            {/* Logo in mobile menu */}
            <div className="flex items-center">
              <Image
                src="/pinnaclelab/Logos/Logo_Long_no_bg.png"
                width={230}
                height={50}
                alt="Pinnacle Laboratory Logo"
                className="max-w-full h-auto"
              />
            </div>

            {/* X Button to Close Menu */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-gray-200"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
          </div>

          <MobileDropdown
            title="ABOUT US"
            basePath="/dashboard/pages/about"
            items={[
              { label: "MEET OUR TEAM", path: "meetourteam" },
              { label: "ACCREDITATION", path: "accreditation" },
              { label: "FAQ", path: "faq" },
              { label: "BLOG", path: "blog" },
            ]}
            setMobileMenuOpen={setMobileMenuOpen}
          />

          <MobileDropdown
            title="SERVICES"
            basePath="/dashboard/pages/analyticalservices"
            items={[
              { label: "ASBESTOS", path: "asbestos" },
              { label: "MOLD", path: "mold" },
              {
                label: "MICROBIOLOGY",
                path: "/dashboard/pages/analyticalservices/microbiology",
                subLinks: [

                  { label: "Allergen/Pollen", path: "/dashboard/pages/analyticalservices/microbiology#allergen" },
                  { label: "Bacteria", path: "/dashboard/pages/analyticalservices/microbiology#colilert" },
                  { label: "Cultures", path: "/dashboard/pages/analyticalservices/microbiology#culture" },
                ],
              },
              { label: "FIBERGLASS", path: "fiberglass" },
              { label: "LEAD", path: "lead" },
              { label: "HEAVY METALS", path: "heavy-metals" },
              { label: "FIRE AND SMOKE", path: "fire-&-smoke" },
            ]}
            setMobileMenuOpen={setMobileMenuOpen}
          />

          <div
            onClick={() => handleLinkClick("/dashboard/pages/chainofcustody")}
            className="block hover:bg-[#10b1b4] px-4 py-2 rounded transition cursor-pointer border-b border-gray-200/20"
          >
            CHAIN OF CUSTODY FORMS
          </div>

          <MobileDropdown
            title="CAREERS"
            basePath="/dashboard/pages"
            items={[
              { label: "JOIN OUR TEAM", path: "careers" },
              { label: "TRAINING", path: "training" },
            ]}
            setMobileMenuOpen={setMobileMenuOpen}
          />

          <MobileDropdown
            title="SHOP"
            basePath="/dashboard/pages/products"
            items={[
              { label: "ALL PRODUCTS", path: "allproducts" },
              { label: "ASBESTOS", path: "asbestos" },
              { label: "MOLD", path: "mold" },
              { label: "LEAD", path: "lead" },
              { label: "EQUIPMENT RENTALS", path: "equipmentrental" },
              { label: "SAMPLE BAGS", path: "samplebags" },
            ]}
            setMobileMenuOpen={setMobileMenuOpen}
          />

          <div
            onClick={() => handleLinkClick("/dashboard/pages/contactus/generalinquiry")}
            className="block hover:bg-[#10b1b4] px-4 py-2 rounded transition cursor-pointer border-b border-gray-200/20"
          >
            CONTACT US
          </div>

          <div
            onClick={() => handleLinkClick("/dashboard/pages/shippinglabelform")}
            className="block hover:bg-[#10b1b4] px-4 py-2 rounded transition cursor-pointer border-b border-gray-200/20"
          >
            SHIPPING
          </div>

          <div className="block hover:bg-[#10b1b4] px-4 py-2 rounded transition cursor-pointer border-b border-gray-200/20">
            <a
              href="https://limsexpressplus.com/software/html5.html?user=*PinnacleReports&pwd=NscK45v2!Cr"
              target="_blank"
              rel="noopener noreferrer"
            >
              LOGIN
            </a>
          </div>
          
          <a href="tel:3104319270" className="block">
            <div className="flex items-center gap-2 px-4 py-2 hover:bg-[#10b1b4] rounded transition cursor-pointer">
              <PhoneIcon className="w-5 h-5" />
              <span>(310) 431-9270</span>
            </div>
          </a>
        </div>
      )}
    </header>
  );
};

const DropdownMenu: React.FC<{
  title: string;
  items: { label: string; path?: string; subLinks?: { label: string; path: string }[] }[];
  basePath: string;
}> = ({ title, items, basePath }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="hover:text-gray-400 transition inline-flex items-center focus:outline-none">
        {title} <ChevronDownIcon className="w-4 h-4 ml-1 inline" />
      </button>
      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-[-10px]"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-[-10px]"
      >
        <motion.div
          className="absolute left-0 mt-2 min-w-[460px] bg-[#16436f] text-white border border-[#10b1b4]/40 shadow-2xl rounded-xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="p-6">
            {items.map((item, index) =>
              item.subLinks ? (
                <div key={index} className="mb-4">
                  {item.path ? (
                    <motion.div
                      whileHover={{ scale: 1.02, color: "#10b1b4" }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={item.path}
                        className="block font-semibold px-4 py-2 rounded-md hover:bg-[#10b1b4]/10 transition"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ) : (
                    <div className="font-semibold px-4 py-2 text-white">
                      {item.label}
                    </div>
                  )}
                  {item.subLinks.map((subLink, subIndex) => (
                    <motion.div
                      key={subIndex}
                      whileHover={{ scale: 1.02, color: "#10b1b4" }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={subLink.path}
                        className="block px-8 py-2 rounded-md hover:bg-[#10b1b4]/10 transition"
                      >
                        {subLink.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, color: "#10b1b4" }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={`${basePath}/${item.path}`}
                    className="block px-4 py-2 rounded-md hover:bg-[#10b1b4]/10 transition"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              )
            )}
          </div>
        </motion.div>
      </Transition>
    </div>
  );
};
const MobileDropdown: React.FC<{
  title: string;
  items: { label: string; path?: string; subLinks?: { label: string; path: string }[] }[];
  basePath: string;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ title, items, basePath, setMobileMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleItemClick = (path: string) => {
    setMobileMenuOpen(false);
    router.push(path);
    const anchor = path.split("#")[1];
    if (anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <div className="border-b border-gray-200/20">
      <button 
        className="w-full text-left px-4 py-3 hover:bg-[#10b1b4]/50 transition flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDownIcon className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="pl-4">
          {items.map((item, index) =>
            item.subLinks ? (
              <div key={index}>
                <div
                  onClick={() => item.path && handleItemClick(item.path)}
                  className={`px-4 py-2 font-semibold ${item.path ? 'hover:bg-[#10b1b4] cursor-pointer' : ''}`}
                >
                  {item.label}
                </div>
                {item.subLinks.map((subLink, subIndex) => (
                  <div
                    key={subIndex}
                    onClick={() => handleItemClick(subLink.path)}
                    className="block px-4 py-2 hover:bg-[#10b1b4] rounded transition cursor-pointer"
                  >
                    {subLink.label}
                  </div>
                ))}
              </div>
            ) : (
              <div
                key={index}
                onClick={() => handleItemClick(`${basePath}/${item.path}`)}
                className="block px-4 py-2 hover:bg-[#10b1b4] rounded transition cursor-pointer"
              >
                {item.label}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Navigation;













































// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { PhoneIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import { useRouter } from "next/navigation";

// const MegaHeader = () => {
//   // Which mega menu is open on desktop (“about”, “services”, “careers”, “shop”)
//   const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
//   // For mobile: toggle entire mobile menu open/closed
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const router = useRouter();

//   const handleLinkClick = (path: string) => {
//     setMobileMenuOpen(false);
//     router.push(path);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <header className="relative">
//       {/* Top header with background */}
//       <div className="bg-gradient-to-r from-[#16436f] to-[#10b1b4] text-white shadow-md">
//         {/* Wrap header content and mega menus in a container that resets the active menu on mouse leave */}
//         <div
//           className="max-w-7xl mx-auto px-4"
//           onMouseLeave={() => setActiveMegaMenu(null)}
//         >
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <div
//               className="flex items-center cursor-pointer"
//               onClick={() => handleLinkClick("/dashboard")}
//             >
//               <Image
//                 src="/pinnaclelab/Logos/Logo_Long_no_bg.png"
//                 width={460}
//                 height={100}
//                 alt="Pinnacle Laboratory Logo"
//                 className="max-w-full h-auto"
//               />
//             </div>

//             {/* Desktop Navigation (hidden on mobile) */}
//             <nav className="hidden md:flex items-center space-x-8">
//               <div onMouseEnter={() => setActiveMegaMenu("about")}>
//                 <button className="hover:text-gray-200">ABOUT US</button>
//               </div>
//               <div onMouseEnter={() => setActiveMegaMenu("services")}>
//                 <button className="hover:text-gray-200">SERVICES</button>
//               </div>
//               <div onMouseEnter={() => setActiveMegaMenu("careers")}>
//                 <button className="hover:text-gray-200">CAREERS</button>
//               </div>
//               <div onMouseEnter={() => setActiveMegaMenu("shop")}>
//                 <button className="hover:text-gray-200">SHOP</button>
//               </div>
//               <Link
//                 href="/chain-of-custody"
//                 className="hover:text-gray-200 transition"
//               >
//                 CHAIN OF CUSTODY FORMS
//               </Link>
//               <Link href="/contact-us" className="hover:text-gray-200 transition">
//                 CONTACT US
//               </Link>
//               <Link href="/ship" className="hover:text-gray-200 transition">
//                 SHIP
//               </Link>
//               <a
//                 href="https://limsexpressplus.com/software/html5.html"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-gray-200 transition"
//               >
//                 LOGIN
//               </a>
//               <a
//                 href="tel:3104319270"
//                 className="hover:text-gray-200 flex items-center gap-1 transition"
//               >
//                 <PhoneIcon className="w-5 h-5" /> (310) 431-9270
//               </a>
//             </nav>

//             {/* Mobile Menu Button (visible on mobile) */}
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="md:hidden text-white"
//             >
//               {mobileMenuOpen ? (
//                 <XMarkIcon className="h-8 w-8" />
//               ) : (
//                 <Bars3Icon className="h-8 w-8" />
//               )}
//             </button>
//           </div>

//           {/* Mega Dropdowns for Desktop */}
//           {activeMegaMenu === "about" && <MegaDropdownAbout />}
//           {activeMegaMenu === "services" && <MegaDropdownServices />}
//           {activeMegaMenu === "careers" && <MegaDropdownCareers />}
//           {activeMegaMenu === "shop" && <MegaDropdownShop />}
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {mobileMenuOpen && <MobileNav handleLinkClick={handleLinkClick} />}
//     </header>
//   );
// };

// export default MegaHeader;

// /* ──────────────────────────────────────────────────────────────── */
// /*                          Mega Dropdowns                         */
// /* ──────────────────────────────────────────────────────────────── */

// const MegaDropdownAbout = () => (
//   <div
//     className="absolute top-full left-0 w-full bg-white text-black shadow-lg py-8 z-50"
//     // Keeping the dropdown open while hovering over it:
//     onMouseEnter={() => {}}
//   >
//     <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-8">
//       {/* Left column with links */}
//       <div>
//         <h3 className="text-lg font-bold mb-4">About Pinnacle Laboratory</h3>
//         <ul>
//           <li className="mb-2">
//             <Link
//               href="/dashboard/pages/about/meetourteam"
//               className="hover:text-blue-600"
//             >
//               Meet Our Team
//             </Link>
//           </li>
//           <li className="mb-2">
//             <Link
//               href="/dashboard/pages/about/accreditation"
//               className="hover:text-blue-600"
//             >
//               Accreditation
//             </Link>
//           </li>
//           <li className="mb-2">
//             <Link
//               href="/dashboard/pages/about/faq"
//               className="hover:text-blue-600"
//             >
//               FAQ
//             </Link>
//           </li>
//           <li className="mb-2">
//             <Link
//               href="/dashboard/pages/about/blog"
//               className="hover:text-blue-600"
//             >
//               Blog
//             </Link>
//           </li>
//         </ul>
//       </div>
//       {/* Right column with an image and address */}
//       <div className="flex flex-col items-start">
//         <Image
//           src="/images/about-mega.jpg"
//           width={400}
//           height={300}
//           alt="About Us"
//           className="mb-4 rounded"
//         />
//         <address className="not-italic text-sm">
//           123 Lab Street,
//           <br />
//           Science City, XY 12345
//           <br />
//           Phone: (310) 431-9270
//         </address>
//       </div>
//     </div>
//   </div>
// );

// const MegaDropdownServices = () => (
//   <div
//     className="absolute top-full left-0 w-full bg-white text-black shadow-lg py-8 z-50"
//     onMouseEnter={() => {}}
//   >
//     <div className="max-w-7xl mx-auto px-4 grid grid-cols-3 gap-8">
//       {/* First Column */}
//       <div>
//         <h3 className="text-lg font-bold mb-4">Environmental Testing</h3>
//         <ul>
//           <li className="mb-2">
//             <Link
//               href="/dashboard/pages/analyticalservices/asbestos"
//               className="hover:text-blue-600"
//             >
//               Asbestos
//             </Link>
//           </li>
//           <li className="mb-2">
//             <Link
//               href="/dashboard/pages/analyticalservices/mold"
//               className="hover:text-blue-600"
//             >
//               Mold
//             </Link>
//           </li>
//           <li className="mb-2">
//             <Link
//               href="/dashboard/pages/analyticalservices/fiberglass"
//               className="hover:text-blue-600"
//             >
//               Fiberglass
//             </Link>
//           </li>
//         </ul>
//       </div>
//       {/* Second Column */}
//       <div>
//         <h3 className="text-lg font-bold mb-4">Chemical Analysis</h3>
//         <ul>
//           <li className="mb-2">
//             <Link
//               href="/dashboard/pages/analyticalservices/lead"
//               className="hover:text-blue-600"
//             >
//               Lead
//             </Link>
//           </li>
//           <li className="mb-2">
//             <Link
//               href="/dashboard/pages/analyticalservices/heavy-metals"
//               className="hover:text-blue-600"
//             >
//               Heavy Metals
//             </Link>
//           </li>
//           <li className="mb-2">
//             <Link
//               href="/dashboard/pages/analyticalservices/fire-&-smoke"
//               className="hover:text-blue-600"
//             >
//               Fire &amp; Smoke
//             </Link>
//           </li>
//         </ul>
//       </div>
//       {/* Third Column with a highlight image and text */}
//       <div>
//         <h3 className="text-lg font-bold mb-4">Service Highlight</h3>
//         <p className="text-sm mb-4">
//           Our state-of-the-art laboratories ensure precise and accurate results
//           every time.
//         </p>
//         <Image
//           src="/images/services-mega.jpg"
//           width={400}
//           height={300}
//           alt="Services"
//           className="rounded"
//         />
//       </div>
//     </div>
//   </div>
// );

// const MegaDropdownCareers = () => (
//   <div
//     className="absolute top-full left-0 w-full bg-white text-black shadow-lg py-8 z-50"
//     onMouseEnter={() => {}}
//   >
//     <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-8">
//       {/* Left Column with text */}
//       <div>
//         <h3 className="text-lg font-bold mb-4">Join Our Team</h3>
//         <p className="text-sm mb-4">
//           Explore exciting career opportunities at Pinnacle Laboratory. Grow
//           with us in a dynamic and innovative environment.
//         </p>
//         <Link
//           href="/dashboard/pages/careers"
//           className="text-blue-600 hover:underline"
//         >
//           View Careers
//         </Link>
//       </div>
//       {/* Right Column with a video embed */}
//       <div>
//         <h3 className="text-lg font-bold mb-4">Career Video</h3>
//         <div className="w-full aspect-video">
//           <iframe
//             src="https://www.youtube.com/embed/dQw4w9WgXcQ"
//             title="Career Opportunities"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="w-full h-full rounded"
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const MegaDropdownShop = () => (
//   <div
//     className="absolute top-full left-0 w-full bg-white text-black shadow-lg py-8 z-50"
//     onMouseEnter={() => {}}
//   >
//     <div className="max-w-7xl mx-auto px-4">
//       <h3 className="text-lg font-bold mb-4">Shop Our Products</h3>
//       <div className="grid grid-cols-4 gap-6">
//         <div className="text-center">
//           <Link href="/dashboard/pages/products/allproducts">
//             <Image
//               src="/images/product1.jpg"
//               width={200}
//               height={150}
//               alt="Product 1"
//               className="rounded mb-2"
//             />
//             <span className="block text-sm">Product 1</span>
//           </Link>
//         </div>
//         <div className="text-center">
//           <Link href="/dashboard/pages/products/asbestos">
//             <Image
//               src="/images/product2.jpg"
//               width={200}
//               height={150}
//               alt="Product 2"
//               className="rounded mb-2"
//             />
//             <span className="block text-sm">Product 2</span>
//           </Link>
//         </div>
//         <div className="text-center">
//           <Link href="/dashboard/pages/products/mold">
//             <Image
//               src="/images/product3.jpg"
//               width={200}
//               height={150}
//               alt="Product 3"
//               className="rounded mb-2"
//             />
//             <span className="block text-sm">Product 3</span>
//           </Link>
//         </div>
//         <div className="text-center">
//           <Link href="/dashboard/pages/products/lead">
//             <Image
//               src="/images/product4.jpg"
//               width={200}
//               height={150}
//               alt="Product 4"
//               className="rounded mb-2"
//             />
//             <span className="block text-sm">Product 4</span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// /* ──────────────────────────────────────────────────────────────── */
// /*                          Mobile Navigation                        */
// /* ──────────────────────────────────────────────────────────────── */

// interface MobileNavProps {
//   handleLinkClick: (path: string) => void;
// }

// const MobileNav: React.FC<MobileNavProps> = ({ handleLinkClick }) => {
//   // Keep track of which sections are expanded
//   const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
//     {}
//   );

//   const toggleSection = (section: string) => {
//     setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
//   };

//   return (
//     <div className="md:hidden bg-[#16436f] text-white px-4 py-4 space-y-2">
//       {/* ABOUT US */}
//       <div>
//         <button
//           onClick={() => toggleSection("about")}
//           className="w-full text-left px-4 py-2 bg-gray-800 hover:bg-gray-700 transition"
//         >
//           ABOUT US
//         </button>
//         {openSections["about"] && (
//           <div className="pl-4">
//             <div
//               onClick={() =>
//                 handleLinkClick("/dashboard/pages/about/meetourteam")
//               }
//               className="px-4 py-2 hover:bg-gray-700 rounded"
//             >
//               Meet Our Team
//             </div>
//             <div
//               onClick={() =>
//                 handleLinkClick("/dashboard/pages/about/accreditation")
//               }
//               className="px-4 py-2 hover:bg-gray-700 rounded"
//             >
//               Accreditation
//             </div>
//             <div
//               onClick={() => handleLinkClick("/dashboard/pages/about/faq")}
//               className="px-4 py-2 hover:bg-gray-700 rounded"
//             >
//               FAQ
//             </div>
//             <div
//               onClick={() => handleLinkClick("/dashboard/pages/about/blog")}
//               className="px-4 py-2 hover:bg-gray-700 rounded"
//             >
//               Blog
//             </div>
//           </div>
//         )}
//       </div>

//       {/* SERVICES */}
//       <div>
//         <button
//           onClick={() => toggleSection("services")}
//           className="w-full text-left px-4 py-2 bg-gray-800 hover:bg-gray-700 transition"
//         >
//           SERVICES
//         </button>
//         {openSections["services"] && (
//           <div className="pl-4">
//             <div
//               onClick={() =>
//                 handleLinkClick(
//                   "/dashboard/pages/analyticalservices/asbestos"
//                 )
//               }
//               className="px-4 py-2 hover:bg-gray-700 rounded"
//             >
//               Asbestos
//             </div>
//             <div
//               onClick={() =>
//                 handleLinkClick("/dashboard/pages/analyticalservices/mold")
//               }
//               className="px-4 py-2 hover:bg-gray-700 rounded"
//             >
//               Mold
//             </div>
//             <div
//               onClick={() =>
//                 handleLinkClick(
//                   "/dashboard/pages/analyticalservices/fiberglass"
//                 )
//               }
//               className="px-4 py-2 hover:bg-gray-700 rounded"
//             >
//               Fiberglass
//             </div>
//             <div
//               onClick={() =>
//                 handleLinkClick("/dashboard/pages/analyticalservices/lead")
//               }
//               className="px-4 py-2 hover:bg-gray-700 rounded"
//             >
//               Lead
//             </div>
//             <div
//               onClick={() =>
//                 handleLinkClick(
//                   "/dashboard/pages/analyticalservices/heavy-metals"
//                 )
//               }
//               className="px-4 py-2 hover:bg-gray-700 rounded"
//             >
//               Heavy Metals
//             </div>
//             <div
//               onClick={() =>
//                 handleLinkClick(
//                   "/dashboard/pages/analyticalservices/fire-&-smoke"
//                 )
//               }
//               className="px-4 py-2 hover:bg-gray-700 rounded"
//             >
//               Fire &amp; Smoke
//             </div>
//           </div>
//         )}
//       </div>

//       {/* CAREERS */}
//       <div>
//         <button
//           onClick={() => toggleSection("careers")}
//           className="w-full text-left px-4 py-2 bg-gray-800 hover:bg-gray-700 transition"
//         >
//           CAREERS
//         </button>
//         {openSections["careers"] && (
//           <div className="pl-4">
//             <div
//               onClick={() => handleLinkClick("/dashboard/pages/careers")}
//               className="px-4 py-2 hover:bg-gray-700 rounded"
//             >
//               Career Opportunities
//             </div>
//           </div>
//         )}
//       </div>

//       {/* SHOP */}
//       <div>
//         <button
//           onClick={() => toggleSection("shop")}
//           className="w-full text-left px-4 py-2 bg-gray-800 hover:bg-gray-700 transition"
//         >
//           SHOP
//         </button>
//         {openSections["shop"] && (
//           <div className="pl-4">
//             <div
//               onClick={() =>
//                 handleLinkClick("/dashboard/pages/products/allproducts")
//               }
//               className="px-4 py-2 hover:bg-gray-700 rounded"
//             >
//               All Products
//             </div>
//             <div
//               onClick={() =>
//                 handleLinkClick("/dashboard/pages/products/asbestos")
//               }
//               className="px-4 py-2 hover:bg-gray-700 rounded"
//             >
//               Asbestos
//             </div>
//             <div
//               onClick={() =>
//                 handleLinkClick("/dashboard/pages/products/mold")
//               }
//               className="px-4 py-2 hover:bg-gray-700 rounded"
//             >
//               Mold
//             </div>
//             <div
//               onClick={() =>
//                 handleLinkClick("/dashboard/pages/products/lead")
//               }
//               className="px-4 py-2 hover:bg-gray-700 rounded"
//             >
//               Lead
//             </div>
//             <div
//               onClick={() =>
//                 handleLinkClick(
//                   "/dashboard/pages/products/equipmentrental"
//                 )
//               }
//               className="px-4 py-2 hover:bg-gray-700 rounded"
//             >
//               Equipment Rentals
//             </div>
//             <div
//               onClick={() =>
//                 handleLinkClick("/dashboard/pages/products/samplebags")
//               }
//               className="px-4 py-2 hover:bg-gray-700 rounded"
//             >
//               Sample Bags
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Other simple links */}
//       <div
//         onClick={() => handleLinkClick("/chain-of-custody")}
//         className="px-4 py-2 hover:bg-gray-700 rounded cursor-pointer"
//       >
//         CHAIN OF CUSTODY FORMS
//       </div>
//       <div
//         onClick={() => handleLinkClick("/contact-us")}
//         className="px-4 py-2 hover:bg-gray-700 rounded cursor-pointer"
//       >
//         CONTACT US
//       </div>
//       <div
//         onClick={() => handleLinkClick("/ship")}
//         className="px-4 py-2 hover:bg-gray-700 rounded cursor-pointer"
//       >
//         SHIP
//       </div>
//       <div className="px-4 py-2 hover:bg-gray-700 rounded">
//         <a
//           href="https://limsexpressplus.com/software/html5.html"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           LOGIN
//         </a>
//       </div>
//       <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 rounded">
//         <PhoneIcon className="w-5 h-5" />
//         <span>(310) 431-9270</span>
//       </div>
//     </div>
//   );
// };
