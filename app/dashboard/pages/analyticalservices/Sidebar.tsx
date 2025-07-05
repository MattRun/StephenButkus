// "use client";

// import { useRouter } from "next/navigation";

// const Sidebar = ({ activeService }: { activeService: string }) => {
//   const router = useRouter();

//   const handleNavigation = (service: string) => {
//     router.push(`/dashboard/pages/analyticalservices/${service.toLowerCase()}`);
//   };

//   const services = ["ASBESTOS", "MOLD", "FIBERGLASS", "LEAD", "HEAVY METALS", "FIRE & SMOKE"];

//   return (
//     <aside className="w-full md:w-1/4">
//       <div className="border rounded-lg shadow p-4 bg-gray-50">
//         <h3 className="text-lg font-semibold mb-4">Our Analytical Services</h3>
//         <ul className="space-y-2">
//           {services.map((service, index) => (
//             <li key={index}>
//               <button
//                 onClick={() => handleNavigation(service)}
//                 className={`block px-4 py-2 rounded text-sm w-full text-left ${
//                   service === activeService ? "bg-blue-600 text-white" : "hover:bg-gray-100 text-gray-800"
//                 }`}
//               >
//                 {service}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;



// "use client";

// import { useRouter } from "next/navigation";

// const Sidebar = ({ activeService }: { activeService: string }) => {
//   const router = useRouter();

//   const handleNavigation = (service: string) => {
//     // Transform the name into a slug (replace spaces with hyphens, lowercase)
//     const slug = service.toLowerCase().replace(/\s+/g, "-");
//     router.push(`/dashboard/pages/analyticalservices/${slug}`);
//   };

//   const services = ["ASBESTOS", "MOLD", "MICROBIOLOGY", "LEAD", "HEAVY METALS", "FIRE & SMOKE", "FIBERGLASS",];

//   return (
//     <aside className="w-full md:w-1/4">
//       <div className="border rounded-lg shadow p-4 bg-gray-50">
//         <h3 className="text-lg font-semibold mb-4 text-[#10b1b4]">Our Analytical Services</h3>
//         <ul className="space-y-2">
//           {services.map((service, index) => (
//             <li key={index}>
//               <button
//                 onClick={() => handleNavigation(service)}
//                 className={`block px-4 py-2 rounded text-sm w-full text-left ${
//                   service === activeService ? "bg-[#10b1b4] text-white" : "hover:bg-[#10b1b4] text-gray-800"
//                 }`}
//               >
//                 {service}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

//OG ^^^^^^




// "use client";

// import { useRouter } from "next/navigation";

// const Sidebar = ({ activeService }: { activeService: string }) => {
//   const router = useRouter();

//   const handleNavigation = (service: string) => {
//     // Transform the name into a slug (replace spaces with hyphens, lowercase)
//     const slug = service.toLowerCase().replace(/\s+/g, "-");
//     router.push(`/dashboard/pages/analyticalservices/${slug}`);
//   };

//   const handleSubtabClick = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       // Smooth scroll with a slower duration
//       element.scrollIntoView({ behavior: "smooth" });
//       // Adjust scroll speed via CSS or polyfill if needed
//       document.documentElement.style.scrollBehavior = "smooth";
//     }
//   };

//   const services = [
//     "ASBESTOS",
//     "MOLD",
//     "MICROBIOLOGY",
//     "LEAD",
//     "HEAVY METALS",
//     "FIRE & SMOKE",
//     "FIBERGLASS",
//   ];

//   // Subtabs for MICROBIOLOGY
//   const microbiologySubtabs = [
//     { title: "Non-Fungal Particulates", id: "nonFungal" },
//     { title: "Air & Surface Cultures", id: "culture" },
//     { title: "Water Bacteria (Colilert)", id: "colilert" },
//   ];

//   return (
//     <aside className="w-full md:w-1/4">
//       <div className="border rounded-lg shadow p-4 bg-gray-50">
//         <h3 className="text-lg font-semibold mb-4 text-[#10b1b4]">
//           Our Analytical Services
//         </h3>
//         <ul className="space-y-2">
//           {services.map((service, index) => (
//             <li key={index}>
//               <button
//                 onClick={() => handleNavigation(service)}
//                 className={`block px-4 py-2 rounded text-sm w-full text-left ${
//                   service === activeService
//                     ? "bg-[#10b1b4] text-white"
//                     : "hover:bg-[#10b1b4] text-gray-800"
//                 }`}
//               >
//                 {service}
//               </button>
//               {service === activeService && service === "MICROBIOLOGY" && (
//                 <ul className="ml-4 mt-2 space-y-1">
//                   {microbiologySubtabs.map((subtab, subIndex) => (
//                     <li key={subIndex}>
//                       <button
//                         onClick={() => handleSubtabClick(subtab.id)}
//                         className="block px-4 py-1 text-sm w-full text-left text-gray-600 hover:text-[#10b1b4] hover:underline"
//                       >
//                         {subtab.title}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;



//only microbiology subtabs^^^^



















"use client";

import { useRouter } from "next/navigation";

const Sidebar = ({ activeService }: { activeService: string }) => {
  const router = useRouter();

  const handleNavigation = (service: string) => {
    // Transform the name into a slug (replace spaces with hyphens, lowercase)
    const slug = service.toLowerCase().replace(/\s+/g, "-");
    router.push(`/dashboard/pages/analyticalservices/${slug}`);
  };

  const handleSubtabClick = (id: string) => {
    console.log(`Attempting to scroll to element with id: "${id}"`);
    const element = document.getElementById(id);

    if (element) {
      console.log(`Found element with id: "${id}"`);
      // Smooth scroll to the element
      element.scrollIntoView({ behavior: "smooth" });
      // Adjust scroll speed via CSS
      document.documentElement.style.scrollBehavior = "smooth";
      // Offset for header (80px estimated header height)
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      // Apply offset after scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      // Trigger pulse animation
      console.log(`Adding pulse-glow to element with id: "${id}"`);
      element.classList.add("pulse-glow");
      setTimeout(() => {
        console.log(`Removing pulse-glow from element with id: "${id}"`);
        element.classList.remove("pulse-glow");
      }, 1500); // Remove after animation duration (1.5s)
    } else {
      console.error(`Element with id "${id}" not found in DOM`);
    }
  };

  const services = [
    "ASBESTOS",
    "MOLD",
    "MICROBIOLOGY",
    "LEAD",
    "HEAVY METALS",
    "FIRE & SMOKE",
    "FIBERGLASS",
  ];

  // Subtabs for MICROBIOLOGY
  const microbiologySubtabs = [
    { title: "Allergens", id: "allergens" },
    { title: "Air & Surface Cultures", id: "culture" },
    { title: "Water Bacteria (Colilert)", id: "colilert" },
  ];

  // Subtabs for ASBESTOS
  const asbestosSubtabs = [
    { title: "Building Materials by PLM", id: "building-materials-analysis-by-plm" },
    { title: "1000 Point Count", id: "1000-point-count-gravimetric-non-gravimetric" },
    { title: "PLM Qualitative Dust & PCM", id: "plm-qualitative-dust-pcm-cassette" },
    { title: "PLM Qualitative Tape Lift", id: "plm-qualitative-tape-lift" },
    { title: "PLM Qualitative Soil", id: "plm-qualitative-soil" },
    { title: "CARB Method 435", id: "carb-method-435-milling" },
    { title: "Air Sample by PCM (NIOSH 7400)", id: "air-sample-analysis-by-pcm-niosh-7400" },
  ];

  // Subtabs for LEAD
  const leadSubtabs = [
    { title: "Paint Chip", id: "paint-chip-epa-3050b-6010d" },
    { title: "Dust Wipe", id: "dust-wipe-epa-3050b-6010d" },
    { title: "Soil", id: "soil-epa-3050b-6010d" },
    { title: "Air", id: "air-niosh-7303m" },
    { title: "Drinking Water", id: "drinking-water-epa-200-5" },
    { title: "Wastewater", id: "wastewater-epa-200-7" },
    { title: "Waste Characterization", id: "waste-characterization-tclp-ttlc-stlc" },
  ];

  // Subtabs for MOLD
  const moldSubtabs = [
    { title: "Direct Fungal (Air)", id: "direct-fungal-air" },
    { title: "Direct Fungal (Swab, Tape, Bulk)", id: "direct-fungal-analysis-swab-tape-lift-bulk" },
  ];

  // Subtabs for FIRE & SMOKE
  const fireSmokeSubtabs = [
    { title: "Bulk/Fire Debris", id: "bulk-fire-debris-by-astm-d6602-qualitative" },
    { title: "Dust Wipe & Tape Lift", id: "dust-wipe-tape-lift-by-astm-d6602-qualitative" },
    { title: "Airborne Particulates", id: "airborne-particulates-by-niosh-500" },
  ];

  // Subtabs for FIBERGLASS
  const fiberglassSubtabs = [
    { title: "PCM Air Samples", id: "pcm-air-samples-niosh-7400-rule-b" },
    { title: "PLM Qualitative Dust Wipe", id: "plm-qualitative-dust-wipe" },
    { title: "PLM Qualitative Bulk Testing", id: "plm-qualitative-bulk-testing-fiberglass-fiber-detection" },
  ];

  // Subtabs for HEAVY METALS
  const heavyMetalsSubtabs = [
    { title: "Paint Chip", id: "paint-chip-epa-3050b-6010d" },
    { title: "Dust Wipe", id: "dust-wipe-epa-3050b-6010d" },
    { title: "Soil", id: "soil-epa-3050b-6010d" },
    { title: "Air", id: "air-niosh-7303m" },
    { title: "Drinking Water", id: "drinking-water-epa-200-5" },
    { title: "Wastewater", id: "wastewater-epa-200-7" },
    { title: "Waste Characterization", id: "waste-characterization-tclp-ttlc-stlc" },
  ];

  return (
    <aside className="w-full md:w-1/4">
      <div className="border rounded-lg shadow p-4 bg-gray-50">
        <h3 className="text-lg font-semibold mb-4 text-[#10b1b4]">
          Our Analytical Services
        </h3>
        <ul className="space-y-2">
          {services.map((service, index) => (
            <li key={index}>
              <button
                onClick={() => handleNavigation(service)}
                className={`block px-4 py-1 rounded text-sm w-full text-left ${
                  service === activeService
                    ? "bg-[#10b1b4] text-white"
                    : "hover:bg-[#10b1b4] text-gray-800"
                }`}
              >
                {service}
              </button>
              {service === activeService && service === "MICROBIOLOGY" && (
                <ul className="ml-4 mt-2 space-y-1">
                  {microbiologySubtabs.map((subtab, subIndex) => (
                    <li key={subIndex}>
                      <button
                        onClick={() => handleSubtabClick(subtab.id)}
                        className="block px-4 py-1 text-sm w-full text-left text-gray-600 hover:text-[#10b1b4] hover:underline"
                      >
                        {subtab.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {service === activeService && service === "ASBESTOS" && (
                <ul className="ml-4 mt-2 space-y-1">
                  {asbestosSubtabs.map((subtab, subIndex) => (
                    <li key={subIndex}>
                      <button
                        onClick={() => handleSubtabClick(subtab.id)}
                        className="block px-4 py-1 text-sm w-full text-left text-gray-600 hover:text-[#10b1b4] hover:underline"
                      >
                        {subtab.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {service === activeService && service === "LEAD" && (
                <ul className="ml-4 mt-2 space-y-1">
                  {leadSubtabs.map((subtab, subIndex) => (
                    <li key={subIndex}>
                      <button
                        onClick={() => handleSubtabClick(subtab.id)}
                        className="block px-4 py-1 text-sm w-full text-left text-gray-600 hover:text-[#10b1b4] hover:underline"
                      >
                        {subtab.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {service === activeService && service === "MOLD" && (
                <ul className="ml-4 mt-2 space-y-1">
                  {moldSubtabs.map((subtab, subIndex) => (
                    <li key={subIndex}>
                      <button
                        onClick={() => handleSubtabClick(subtab.id)}
                        className="block px-4 py-1 text-sm w-full text-left text-gray-600 hover:text-[#10b1b4] hover:underline"
                      >
                        {subtab.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {service === activeService && service === "FIRE & SMOKE" && (
                <ul className="ml-4 mt-2 space-y-1">
                  {fireSmokeSubtabs.map((subtab, subIndex) => (
                    <li key={subIndex}>
                      <button
                        onClick={() => handleSubtabClick(subtab.id)}
                        className="block px-4 py-1 text-sm w-full text-left text-gray-600 hover:text-[#10b1b4] hover:underline"
                      >
                        {subtab.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {service === activeService && service === "FIBERGLASS" && (
                <ul className="ml-4 mt-2 space-y-1">
                  {fiberglassSubtabs.map((subtab, subIndex) => (
                    <li key={subIndex}>
                      <button
                        onClick={() => handleSubtabClick(subtab.id)}
                        className="block px-4 py-1 text-sm w-full text-left text-gray-600 hover:text-[#10b1b4] hover:underline"
                      >
                        {subtab.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {service === activeService && service === "HEAVY METALS" && (
                <ul className="ml-4 mt-2 space-y-1">
                  {heavyMetalsSubtabs.map((subtab, subIndex) => (
                    <li key={subIndex}>
                      <button
                        onClick={() => handleSubtabClick(subtab.id)}
                        className="block px-4 py-1 text-sm w-full text-left text-gray-600 hover:text-[#10b1b4] hover:underline"
                      >
                        {subtab.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;