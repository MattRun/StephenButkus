// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

// const productData = [
//   {
//     title: "PCM Air Monitoring Cassette (25mm), 50/box",
//     description: `Compliant with OSHA and NIOSH standards for PCM air sampling.`,
//     image: "/pinnaclelab/Products/PCM_Monitoring.png",
//     price: "$79.99",
//     category: "Asbestos",
//     path: "/dashboard/pages/products/asbestos",
//     icons: [
//       { label: "0.8μ", description: "Filter Size" },
//       { label: "OSHA", description: "Compliance" },
//     ],
//   },
//   {
//     title: "TEM Air Monitoring Cassette (25mm), 50/box",
//     description: `Ideal for TEM air sampling and manufactured to comply with EPA requirements.`,
//     image: "/pinnaclelab/Products/TEM_Monitoring.png",
//     price: "$89.99",
//     category: "Asbestos",
//     path: "/dashboard/pages/products/asbestos",
//     icons: [
//       { label: "0.45μ", description: "Filter Size" },
//       { label: "EPA", description: "Compliance" },
//     ],
//   },
//   {
//     title: "Invisi-Wipes (50/pk or 100/pk)",
//     description: `ASTM E1792 compliant, perfect for lead and surface dust sampling.`,
//     image: "/pinnaclelab/Products/Invisi_Wipe-removebg-preview.png",
//     price: "$49.99",
//     category: "Lead",
//     path: "/dashboard/pages/products/lead",
//     icons: [
//       { label: "50/pk", description: "Pack Size" },
//       { label: "ASTM", description: "Compliance" },
//     ],
//   },
//   {
//     title: "Allergenco-D Air Monitoring Cassette",
//     description: `Proprietary design ensures uniform impaction of mold spores.`,
//     image: "/pinnaclelab/Products/Allergenco-D_Air_Monitoring-removebg-preview.png",
//     price: "$99.99",
//     category: "Mold",
//     path: "/dashboard/pages/products/mold",
//     icons: [
//       { label: "Mold", description: "Type" },
//       { label: "Efficient", description: "Design" },
//     ],
//   },
//   {
//     title: "Allergenco-D Air Monitoring Cassette",
//     description: `Proprietary design ensures uniform impaction of mold spores.`,
//     image: "/pinnaclelab/Products/Allergenco-D_Air_Monitoring.png",
//     price: "$99.99",
//     category: "Mold",
//     path: "/dashboard/pages/products/mold",
//     icons: [
//       { label: "Mold", description: "Type" },
//       { label: "Efficient", description: "Design" },
//     ],
//   },
//   {
//     title: "Allergenco-D Air Monitoring Cassette",
//     description: `Proprietary design ensures uniform impaction of mold spores.`,
//     image: "/pinnaclelab/Products/Allergenco-D_Air_Monitoring.png",
//     price: "$99.99",
//     category: "Mold",
//     path: "/dashboard/pages/products/mold",
//     icons: [
//       { label: "Mold", description: "Type" },
//       { label: "Efficient", description: "Design" },
//     ],
//   },
// ];

// const BestSellers = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [progress, setProgress] = useState(0);

//   const updateProgress = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//       const scrollProgress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
//       setProgress(scrollProgress);
//     }
//   };

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     const scrollable = scrollRef.current;
//     if (scrollable) {
//       scrollable.addEventListener("scroll", updateProgress);
//     }
//     return () => {
//       if (scrollable) {
//         scrollable.removeEventListener("scroll", updateProgress);
//       }
//     };
//   }, []);

//   const isScrollable = productData.length > 3;

//   return (
//     <div className="bg-[#16436F] py-16">
//       {/* Header */}
//       <div className="flex items-center justify-between max-w-7xl mx-auto px-4 mb-4">
//         <h2 className="text-4xl font-bold text- White">Best</h2>
//         <h2 className="text-4xl font-bold text-[#10b1b4]"> Sellers</h2>
//         <div className="relative flex-1 mx-6 h-1 bg-[#1E5A81] rounded-full">
//           {isScrollable && (
//             <div
//               className="absolute top-0 left-0 h-full bg-[#10b1b4] rounded-full transition-all duration-300"
//               style={{ width: `${progress}%` }}
//             ></div>
//           )}
//         </div>
//         <div className="flex gap-2">
//           <button
//             onClick={scrollLeft}
//             disabled={!isScrollable}
//             className={`w-10 h-10 rounded-full ${
//               isScrollable ? "bg-white text-[#10b1b4] border-[#10b1b4]" : "bg-gray-200 text-gray-400"
//             } flex justify-center items-center border hover:bg-[#e0d5c5] transition`}
//           >
//             &#8249;
//           </button>
//           <button
//             onClick={scrollRight}
//             disabled={!isScrollable}
//             className={`w-10 h-10 rounded-full ${
//               isScrollable ? "bg-white text-[#10b1b4] border-[#10b1b4]" : "bg-gray-200 text-gray-400"
//             } flex justify-center items-center border hover:bg-[#e0d5c5] transition`}
//           >
//             &#8250;
//           </button>
//         </div>
//       </div>

//       {/* Products */}
//       <div
//         ref={scrollRef}
//         className="flex gap-8 overflow-x-auto scrollbar-hide max-w-7xl mx-auto px-4"
//       >
//         {productData.map((product, index) => (
//           <div
//             key={index}
//             className="min-w-[280px] max-w-[300px] bg-[#1E5A81] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//           >
//                           <h3 className="text-lg font-bold text-white mb-2">
//                 {product.title}
//               </h3>
//             <Link href={product.path || "#"}>
//               <div className="relative">
//                 <Image
//                   src={product.image || "/placeholder-image.png"}
//                   alt={product.title}
//                   width={300}
//                   height={200}
//                   className="w-full h-48 object-cover rounded-t-lg"
//                 />
//                 <span className="absolute top-2 left-2 bg-[#10b1b4] text-black px-2 py-1 text-xs font-semibold rounded">
//                   {product.category}
//                 </span>
//               </div>
//             </Link>
//             <div className="p-4">
//               <h3 className="text-lg font-bold text-white mb-2">
//                 {product.title}
//               </h3>
//               <span className="text-lg font-bold text-[#10b1b4] block mb-4">
//                 {product.price}
//               </span>
//               <div className="flex gap-2 mt-4">
//                 {product.icons.map((icon, i) => (
//                   <div key={i} className="text-center text-white">
//                     <p className="font-bold">{icon.label}</p>
//                     <p className="text-xs">{icon.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BestSellers;






// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaFilter, FaClipboardCheck, FaBox, FaShieldAlt, FaTag } from "react-icons/fa"; // Importing icons

// const productData = [
//     {
//         title: "All Products",
//         description: "",
//         image: "/pinnaclelab/Lab Pictures/JLMEnvironmental-39.jpg",
//         altImage: "/pinnaclelab/Lab Pictures/JLMEnvironmental-39.jpg",
//         price: "",
//         category: "Browse",
//         path: "/dashboard/pages/products/allproducts",
//         isSpecial: true,
//       },
//       {
//         title: "Air Monitoring Cassette",
//         description: `Proprietary design ensures uniform impaction of mold spores.`,
//         image: "/pinnaclelab/Products/Allergenco-D_Air_Monitoring.png",
//         altImage: "/pinnaclelab/Products/Allergenco-D_Air_Monitoring_Alt.png",
//         price: "Call For Price",
//         category: "Mold",
//         path: "/dashboard/pages/products/mold",
//         icons: [
//           { label: "Mold", description: "Type", icon: <FaShieldAlt /> },
//           { label: "Efficient", description: "Design", icon: <FaClipboardCheck /> },
//           { label: "Allergenco-D", description: "Brand", icon: <FaTag /> },
//         ],
//       },
//       {
//         title: "Invisi-Wipes",
//         description: `ASTM E1792 compliant, perfect for lead and surface dust sampling.`,
//         image: "/pinnaclelab/Products/Invisi_Wipe.png",
//         altImage: "/pinnaclelab/Products/Invisi_Wipe-removebg-preview.png",
//         price: "Call For Price",
//         category: "Lead",
//         path: "/dashboard/pages/products/lead",
//         icons: [
//           { label: "50/pk", description: "Pack Sizes", icon: <FaBox /> },
//           { label: "_", description: "OR", icon: null },
//           { label: "100/pk", description: "Pack Sizes", icon: <FaBox /> },
//           { label: "ASTM", description: "Compliance", icon: <FaClipboardCheck /> },
//         ],
//       },
//   {
//     title: "PCM Air Monitoring Cassette",
//     description: `Compliant with OSHA and NIOSH standards for PCM air sampling.`,
//     image: "/pinnaclelab/Products/PCM_Monitoring.png",
//     altImage: "/pinnaclelab/Products/PCM_Monitoring_Alt.png",
//     price: "Call For Price",
//     category: "Asbestos",
//     path: "/dashboard/pages/products/asbestos",
//     icons: [
//       { label: "0.8μ", description: "Filter Size", icon: <FaFilter /> },
//       { label: "OSHA", description: "Compliance", icon: <FaClipboardCheck /> },
//       { label: "(25mm)", description: "Capacity", icon: <FaBox /> },
//       { label: "50/box", description: "Quantity", icon: <FaTag /> },
//     ],
//   },
//   {
//     title: "TEM Air Monitoring Cassette",
//     description: `Ideal for TEM air sampling and manufactured to comply with EPA requirements.`,
//     image: "/pinnaclelab/Products/TEM_Monitoring.png",
//     altImage: "/pinnaclelab/Products/TEM_Monitoring_Alt.png",
//     price: "Call For Price",
//     category: "Asbestos",
//     path: "/dashboard/pages/products/asbestos",
//     icons: [
//       { label: "0.45μ", description: "Filter Size", icon: <FaFilter /> },
//       { label: "EPA", description: "Compliance", icon: <FaClipboardCheck /> },
//       { label: "(25mm)", description: "Capacity", icon: <FaBox /> },
//       { label: "50/box", description: "Quantity", icon: <FaTag /> },
//     ],
//   },
//   {
//     title: "Clear Sample Bags",
//     description: `Durable sample bags for secure handling.`,
//     image: "/pinnaclelab/Products/Clear_Sample_Bags.jpg",
//     altImage: "/pinnaclelab/Products/Clear_Sample_Bags_Alt.jpg",
//     price: "Call For Price",
//     category: "Sample Bags",
//     path: "/dashboard/pages/products/samplebags",
//     icons: [
//       { label: "100 bags", description: "Pack Size", icon: <FaBox /> },
//       { label: "Secure", description: "Durability", icon: <FaShieldAlt /> },
//     ],
//   },
// ];

// const BestSellers = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [progress, setProgress] = useState(0);

//   const updateProgress = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//       const scrollProgress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
//       setProgress(scrollProgress);
//     }
//   };

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   };

//   useEffect(() => {
//     const scrollable = scrollRef.current;
//     if (scrollable) {
//       scrollable.addEventListener("scroll", updateProgress);
//     }
//     return () => {
//       if (scrollable) {
//         scrollable.removeEventListener("scroll", updateProgress);
//       }
//     };
//   }, []);

//   const isScrollable = productData.length > 3;

//   return (
//     // <div className="py-16 bg-[url('/pinnaclelab/art/Background_Mountain.png')] bg-cover bg-center">
//     // <div className="py-28 bg-[url('/pinnaclelab/art/Background_Mountain_BrightBlue.png')] bg-cover bg-top">
//      <div className="bg-[#16436F] py-16"> 
//       {/* Header */}
//       <div className="flex items-center justify-between max-w-7xl mx-auto px-4 mb-4">
//         <div className="flex gap-2">
//           <h2 className="text-4xl font-bold text-white">Best</h2>
//           <h2 className="text-4xl font-bold text-[#10b1b4]">Sellers</h2>
//         </div>
//         <div className="relative flex-1 mx-6 h-1 bg-[#1E5A81] rounded-full">
//           {isScrollable && (
//             <div
//               className="absolute top-0 left-0 h-full bg-[#10b1b4] rounded-full transition-all duration-300"
//               style={{ width: `${progress}%` }}
//             ></div>
//           )}
//         </div>
//         <div className="flex gap-2">
//           <button
//             onClick={scrollLeft}
//             disabled={!isScrollable}
//             className={`w-10 h-10 rounded-full ${
//               isScrollable
//                 ? "bg-white text-[#10b1b4] border-[#10b1b4]"
//                 : "bg-gray-200 text-gray-400"
//             } flex justify-center items-center border hover:bg-[#e0d5c5] transition`}
//           >
//             &#8249;
//           </button>
//           <button
//             onClick={scrollRight}
//             disabled={!isScrollable}
//             className={`w-10 h-10 rounded-full ${
//               isScrollable
//                 ? "bg-white text-[#10b1b4] border-[#10b1b4]"
//                 : "bg-gray-200 text-gray-400"
//             } flex justify-center items-center border hover:bg-[#e0d5c5] transition`}
//           >
//             &#8250;
//           </button>
//         </div>
//       </div>

//       {/* Products */}
//       <div
//         ref={scrollRef}
//         className="flex gap-8 overflow-x-auto scrollbar-hide max-w-7xl mx-auto px-4"
//       >
//         {productData.map((product, index) => (
//           <div
//             key={index}
//             className="min-w-[300px] max-w-[300px] h-[450px] bg-[#1E5A81] text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden"
//           >
//             {/* Title */}
//             <div className="p-4">
//               <h3 className="text-lg font-bold text-white">{product.title}</h3>
//             </div>

//             {/* Image */}
//             <div className="relative">
//               <Image
//                 src={product.image || "/placeholder-image.png"}
//                 alt={product.title}
//                 width={300}
//                 height={200}
//                 className="w-full h-[200px] object-cover"
//               />
//               <span className="absolute top-2 right-2 text-xs text-black font-medium">
//                 {product.category}
//               </span>
//             </div>

//             {/* Price & Icons */}
//             <div className="p-4">
//               <div className="flex gap-4">
//                 {product.icons?.map((icon, i) => (
//                     <div key={i} className="text-center">
//                     {icon.icon && <div className="text-white text-sm mb-1">{icon.icon}</div>}
//                     <p className="font-bold">{icon.label}</p>
//                     <p className="text-xs">{icon.description}</p>
//                   </div>
//                 ))}
//               </div>
//                 <h3 className="text-lg font-bold text-white py-4">{product.price}</h3>
//             </div>

//             {/* View Product (Hover Only) */}
//             <Link
//     href={product.path || "#"}
//     className="absolute bottom-0 left-0 w-full h-12 bg-[#10b1b4] text-white flex items-center justify-center text-sm font-bold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
//   >
//     View Product
//   </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BestSellers;










































"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFilter, FaClipboardCheck, FaBox, FaShieldAlt, FaTag } from "react-icons/fa"; // Importing icons

const productData = [
  {
    title: "All Products",
    description: "",
    image: "/pinnaclelab/Lab Pictures/JLMEnvironmental-39.jpg",
    altImage: "/pinnaclelab/Lab Pictures/JLMEnvironmental-39.jpg",
    price: "",
    category: "Browse",
    path: "/dashboard/pages/products/allproducts",
    isSpecial: true,
  },
  {
    title: "Air Monitoring Cassette",
    description: `Proprietary design ensures uniform impaction of mold spores.`,
    image: "/pinnaclelab/Products/Allergenco-D_Air_Monitoring.png",
    altImage: "/pinnaclelab/Products/Allergenco-D_Air_Monitoring_Alt.png",
    price: "Call For Price",
    category: "Mold",
    path: "/dashboard/pages/products/mold",
    icons: [
      { label: "Mold", description: "Type", icon: <FaShieldAlt /> },
      { label: "Efficient", description: "Design", icon: <FaClipboardCheck /> },
      { label: "Allergenco-D", description: "Brand", icon: <FaTag /> },
    ],
  },
  {
    title: "Invisi-Wipes",
    description: `ASTM E1792 compliant, perfect for lead and surface dust sampling.`,
    image: "/pinnaclelab/Products/Invisi_Wipe.png",
    altImage: "/pinnaclelab/Products/Invisi_Wipe-removebg-preview.png",
    price: "Call For Price",
    category: "Lead",
    path: "/dashboard/pages/products/lead",
    icons: [
      { label: "50/pk", description: "Pack Sizes", icon: <FaBox /> },
      { label: "_", description: "OR", icon: null },
      { label: "100/pk", description: "Pack Sizes", icon: <FaBox /> },
      { label: "ASTM", description: "Compliance", icon: <FaClipboardCheck /> },
    ],
  },
  {
    title: "PCM Air Monitoring Cassette",
    description: `Compliant with OSHA and NIOSH standards for PCM air sampling.`,
    image: "/pinnaclelab/Products/PCM_Monitoring.png",
    altImage: "/pinnaclelab/Products/PCM_Monitoring_Alt.png",
    price: "Call For Price",
    category: "Asbestos",
    path: "/dashboard/pages/products/asbestos",
    icons: [
      { label: "0.8μ", description: "Filter Size", icon: <FaFilter /> },
      { label: "OSHA", description: "Compliance", icon: <FaClipboardCheck /> },
      { label: "(25mm)", description: "Capacity", icon: <FaBox /> },
      { label: "50/box", description: "Quantity", icon: <FaTag /> },
    ],
  },
  {
    title: "TEM Air Monitoring Cassette",
    description: `Ideal for TEM air sampling and manufactured to comply with EPA requirements.`,
    image: "/pinnaclelab/Products/TEM_Monitoring.png",
    altImage: "/pinnaclelab/Products/TEM_Monitoring_Alt.png",
    price: "Call For Price",
    category: "Asbestos",
    path: "/dashboard/pages/products/asbestos",
    icons: [
      { label: "0.45μ", description: "Filter Size", icon: <FaFilter /> },
      { label: "EPA", description: "Compliance", icon: <FaClipboardCheck /> },
      { label: "(25mm)", description: "Capacity", icon: <FaBox /> },
      { label: "50/box", description: "Quantity", icon: <FaTag /> },
    ],
  },
  {
    title: "Clear Sample Bags",
    description: `Durable sample bags for secure handling.`,
    image: "/pinnaclelab/Products/Clear_Sample_Bags.jpg",
    altImage: "/pinnaclelab/Products/Clear_Sample_Bags_Alt.jpg",
    price: "Call For Price",
    category: "Sample Bags",
    path: "/dashboard/pages/products/samplebags",
    icons: [
      { label: "100 bags", description: "Pack Size", icon: <FaBox /> },
      { label: "Secure", description: "Durability", icon: <FaShieldAlt /> },
    ],
  },
];

const BestSellers = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollProgress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setProgress(scrollProgress);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const scrollable = scrollRef.current;
    if (scrollable) {
      scrollable.addEventListener("scroll", updateProgress);
    }
    return () => {
      if (scrollable) {
        scrollable.removeEventListener("scroll", updateProgress);
      }
    };
  }, []);

  const isScrollable = productData.length > 3;

  return (
    <div className="bg-[#16436F] py-16">
      {/* Header */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 mb-4">
        <div className="flex gap-2">
          <h2 className="text-4xl font-bold text-white">Best</h2>
          <h2 className="text-4xl font-bold text-[#10b1b4]">Sellers</h2>
        </div>
        <div className="relative flex-1 mx-6 h-1 bg-[#1E5A81] rounded-full">
          {isScrollable && (
            <div
              className="absolute top-0 left-0 h-full bg-[#10b1b4] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            disabled={!isScrollable}
            className={`w-10 h-10 rounded-full ${
              isScrollable
                ? "bg-white text-[#10b1b4] border-[#10b1b4]"
                : "bg-gray-200 text-gray-400"
            } flex justify-center items-center border hover:bg-[#e0d5c5] transition`}
          >
            &#8249;
          </button>
          <button
            onClick={scrollRight}
            disabled={!isScrollable}
            className={`w-10 h-10 rounded-full ${
              isScrollable
                ? "bg-white text-[#10b1b4] border-[#10b1b4]"
                : "bg-gray-200 text-gray-400"
            } flex justify-center items-center border hover:bg-[#e0d5c5] transition`}
          >
            &#8250;
          </button>
        </div>
      </div>

      {/* Products */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide max-w-7xl mx-auto px-4"
      >
        {productData.map((product, index) =>
          product.isSpecial ? (
            <Link href={product.path || "#"} key={index} className="cursor-pointer">
              <div className="min-w-[300px] max-w-[300px] h-[450px] relative rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 hover:scale-105">
                <Image
                  src={product.image || "/placeholder-image.png"}
                  alt={product.title}
                  width={300}
                  height={450}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">{product.title}</h3>
                </div>
              </div>
            </Link>
          ) : (
            <div
              key={index}
              className="min-w-[300px] max-w-[300px] h-[450px] bg-[#1E5A81] text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden"
            >
              {/* Title */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-white">{product.title}</h3>
              </div>

              {/* Image */}
              <div className="relative">
                <Image
                  src={product.image || "/placeholder-image.png"}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="w-full h-[200px] object-cover"
                />
                <span className="absolute top-2 right-2 text-xs text-black font-medium">
                  {product.category}
                </span>
              </div>

              {/* Price & Icons */}
              <div className="p-4">
                <div className="flex gap-4">
                  {product.icons?.map((icon, i) => (
                    <div key={i} className="text-center">
                      {icon.icon && (
                        <div className="text-white text-sm mb-1">{icon.icon}</div>
                      )}
                      <p className="font-bold">{icon.label}</p>
                      <p className="text-xs">{icon.description}</p>
                    </div>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-white py-4">{product.price}</h3>
              </div>

              {/* View Product (Hover Only) */}
              <Link
                href={product.path || "#"}
                className="absolute bottom-0 left-0 w-full h-12 bg-[#10b1b4] text-white flex items-center justify-center text-sm font-bold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              >
                View Product
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BestSellers;
