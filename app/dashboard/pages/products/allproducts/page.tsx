"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFilter, FaClipboardCheck, FaBox, FaShieldAlt, FaTag } from "react-icons/fa";
import ProjectInquiryForm from "../ProductInquiryForm";

interface Product {
  id?: string;
  title: string;
  description: string;
  image?: string;
  format?: string;
  category?: string[];
  language?: string;
  duration?: string;
  level?: string;
  path?: string;
  icons?: {
    label: string;
    description: string;
    icon: JSX.Element | null;
  }[];
}

// Your product data
const productData: Product[] = [
  {
    title: "PCM Air Monitoring Cassette (25mm), 50/box",
    description: `We equip each cassette with a 2" static conductive extension cowl and preload it with a 0.8µ mixed cellulose ester (MCE) filter. These cassettes are specifically designed for PCM air sampling...`,
    image: "/pinnaclelab/Products/PCM_Monitoring.png",
    format: "In-Person Pickup",
    category: ["Asbestos"],
    path: "/dashboard/pages/products/asbestos",
    icons: [
      { label: "Asbestos", description: "Type", icon: <FaShieldAlt /> },
      { label: "Efficient", description: "Design", icon: <FaClipboardCheck /> },
      { label: "PCM", description: "Brand", icon: <FaTag /> },
    ],
  },
  {
    title: "TEM Air Monitoring Cassette (25mm), 50/box",
    description: `The cassette comes with a 2" static conductive extension cowl and contains preloaded 0.45µ + 5.0µ MCE filters...`,
    image: "/pinnaclelab/Products/TEM_Monitoring.png",
    format: "In-Person Pickup",
    category: ["Asbestos"],
    path: "/dashboard/pages/products/asbestos",
    icons: [
      { label: "Asbestos", description: "Type", icon: <FaShieldAlt /> },
      { label: "Efficient", description: "Design", icon: <FaClipboardCheck /> },
      { label: "TEM", description: "Brand", icon: <FaTag /> },
    ],
  },
  {
    title: "Invisi-Wipes (50/pk or 100/pk)",
    description: `Individually packaged and ASTM E1792 compliant, Invisi-Wipes are ideal for lead and surface dust sampling...`,
    image: "/pinnaclelab/Products/Invisi_Wipe.png",
    format: "In-Person Pickup",
    category: ["Lead", "Asbestos"],
    path: "/dashboard/pages/products/lead",
    icons: [
      { label: "50/pk", description: "Pack Sizes", icon: <FaBox /> },
      { label: "OR", description: "", icon: null },
      { label: "100/pk", description: "Pack Sizes", icon: <FaBox /> },
      { label: "ASTM", description: "Compliance", icon: <FaClipboardCheck /> },
    ],
  },
  {
    title: "Allergenco-D Air Monitoring Cassette, 50/box",
    description: `Utilizing a proprietary design, the Allergenco-D Air Monitoring Cassette allows for uniform impaction of mold spores...`,
    image: "/pinnaclelab/Products/Allergenco-D_Air_Monitoring.png",
    format: "In-Person Pickup",
    category: ["Mold"],
    path: "/dashboard/pages/products/mold",
    icons: [
      { label: "Mold", description: "Type", icon: <FaShieldAlt /> },
      { label: "Efficient", description: "Design", icon: <FaClipboardCheck /> },
      { label: "Allergenco-D", description: "Brand", icon: <FaTag /> },
    ],
  },
  {
    title: "Mold Check Swabs, 50/pack",
    description: `Individually packaged, these swabs provide quick and efficient sampling of surface mold growth...`,
    image: "/pinnaclelab/Products/Mold_Check_Swabs.png",
    format: "In-Person Pickup",
    category: ["Mold"],
    path: "/dashboard/pages/products/mold",
    icons: [
      { label: "50/pack", description: "Pack Size", icon: <FaBox /> },
      { label: "Reliable", description: "Quality", icon: <FaClipboardCheck /> },
      { label: "ASTM", description: "Standard", icon: <FaTag /> },
    ],
  },
  {
    title: "Clear with White Sample Bags (Pack of 100 / 1000)",
    description: `Durable sample bags designed for secure labeling and handling.`,
    image: "/pinnaclelab/Products/Clear_white_Sample_Bags.jpg",
    format: "In-Person Pickup",
    category: ["Sample Bags"],
    path: "/dashboard/pages/products/samplebags",
    icons: [
      { label: "100 bags", description: "Pack Size", icon: <FaBox /> },
      { label: "Secure", description: "Durability", icon: <FaShieldAlt /> },
    ],
  },
  {
    title: "Sample Bags (Pack of 100 / 1000)",
    description: `Reliable and durable sample bags for secure handling.`,
    image: "/pinnaclelab/Products/Clear_Sample_Bags.jpg",
    format: "In-Person Pickup",
    category: ["Sample Bags"],
    path: "/dashboard/pages/products/samplebags",
    icons: [
      { label: "100 bags", description: "Pack Size", icon: <FaBox /> },
      { label: "Secure", description: "Durability", icon: <FaShieldAlt /> },
    ],
  },
  {
    title: "e-PRP HD High Volume Sampling Pump",
    description: `This small, highly portable pump weighs only 7.5 lbs. and offers an adjustable flow rate of 2.0 LPM to 30 LPM.`,
    image: "/pinnaclelab/Products/e-PRP_Pump_Compressor.png",
    format: "In-Person Pickup",
    category: ["Equipment Rentals"],
    path: "/dashboard/pages/products/equipmentrental",
    icons: [
      { label: "Compact", description: "Design", icon: <FaShieldAlt /> },
      { label: "Adjustable", description: "Flow Rate", icon: <FaClipboardCheck /> },
      { label: "High Volume", description: "Performance", icon: <FaTag /> },
    ],
  },
  {
    title: "Gillian BDX-II Low Volume Sampling Pump, 5 pumps/kit",
    description: `Designed for abatement applications with sampling rates between 0.5 LPM and 3.0 LPM. This kit contains 5 BDX-II sampling pumps.`,
    image: "/pinnaclelab/Products/Gillian_BDX-II.png",
    format: "In-Person Pickup",
    category: ["Equipment Rentals"],
    path: "/dashboard/pages/products/equipmentrental",
    icons: [
      { label: "Low Volume", description: "Performance", icon: <FaShieldAlt /> },
      { label: "Efficient", description: "Design", icon: <FaClipboardCheck /> },
      { label: "5/kit", description: "Pack", icon: <FaTag /> },
    ],
  },
];

// Optional category images (if needed)
const categoryImages: Record<string, string> = {
  Asbestos: "/asbestos_category.jpg",
  Mold: "/mold_category.jpg",
  Lead: "/lead_category.jpg",
  "Sample Bags": "/sample_bags_category.jpg",
  "Equipment Rentals": "/equipment_rentals_category.jpg",
  Uncategorized: "/coming_soon.jpg",
};

// Filter options
const filterOptions = {
  categories: ["Asbestos", "Mold", "Lead", "Equipment Rentals", "Sample Bags"],
  formats: ["Delivery", "In-Person Pickup"],
};

const ProductPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [showFilters, setShowFilters] = useState(false);

  // Filter the product list
  const filteredProducts = productData.filter((product) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      (product.category && product.category.some((cat) => selectedCategories.includes(cat)));
    const matchesFormat =
      selectedFormats.length === 0 ||
      (product.format && selectedFormats.includes(product.format));
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesFormat && matchesSearch;
  });

  // Separate products into sale and rental categories
  const saleProducts = filteredProducts.filter((product) =>
    product.category && !product.category.includes("Equipment Rentals")
  );
  const rentalProducts = filteredProducts.filter((product) =>
    product.category && product.category.includes("Equipment Rentals")
  );

  // Pagination for each section
  const totalSalePages = Math.ceil(saleProducts.length / itemsPerPage);
  const paginatedSaleProducts = saleProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const totalRentalPages = Math.ceil(rentalProducts.length / itemsPerPage);
  const paginatedRentalProducts = rentalProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Toggle filter
  const toggleFilter = (prev: string[], filter: string): string[] => {
    if (prev.includes(filter)) {
      return prev.filter((item) => item !== filter);
    } else {
      return [...prev, filter];
    }
  };
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleFilterChange = (
    filter: string,
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setSelected((prev: string[]) => toggleFilter(prev, filter));
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top on filter click
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top on search
  };

  return (
    <div className="relative bg-gradient-to-b from-[#16436F] to-[#10b1b4] text-gray-100 text-white p-6 flex flex-col md:flex-row">
      {/* Sidebar Filter Section */}
      <div className="w-full md:w-1/4 pr-8 md:sticky top-0 md:h-screen overflow-y-auto hidden md:block">
        <h2 className="font-bold text-2xl mb-6">Filter by</h2>

        {/* Category Filter */}
        <div className="mb-8">
          <h3 className="font-bold text-xl mb-4">Categories</h3>
          <div className="flex flex-col gap-2">
            {filterOptions.categories.map((category) => (
              <label key={category} className="flex items-center gap-2 cursor-pointer hover:underline">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleFilterChange(category, setSelectedCategories)}
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Format Filter */}
        <div className="mb-8">
          <h3 className="font-bold text-xl mb-4">Format</h3>
          <div className="flex flex-col gap-2">
            {filterOptions.formats.map((format) => (
              <label key={format} className="flex items-center gap-2 cursor-pointer hover:underline">
                <input
                  type="checkbox"
                  checked={selectedFormats.includes(format)}
                  onChange={() => handleFilterChange(format, setSelectedFormats)}
                />
                {format}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Filter Button */}
      <div className="md:hidden mb-6">
        <button
          onClick={() => {
            setShowFilters(!showFilters);
            if (!showFilters) window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll on show
          }}
          className="w-full bg-[#16436F] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-[#1E5A81] transition"
        >
          {showFilters ? "Hide Filters" : "Filter By"}
        </button>
        {showFilters && (
          <div className="bg-white text-black p-4 rounded-lg mt-4">
            <h2 className="font-bold text-lg">Filter by</h2>
            {filterOptions.categories.map((category) => (
              <div key={category} className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleFilterChange(category, setSelectedCategories)}
                />
                <span>{category}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main Content Section */}
      <div className="w-full md:w-3/4">
        {/* Search Bar */}
        <div className="w-full max-w-sm mx-auto mb-6">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search for a product..."
            className="border border-gray-300 rounded-full px-4 py-2 w-full text-black"
          />
        </div>

        {/* Sale Products Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paginatedSaleProducts.map((product, index) => (
            <div key={index} className="bg-[#1E5A81] text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden">
              {/* Title */}
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.title}</h3>
              </div>

              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={product.image || "/placeholder-image.png"}
                  alt={product.title}
                  layout="fill"
                  objectFit="contain"
                />
                <span className="absolute top-2 right-2 text-xs text-black font-medium bg-white px-2 py-1 rounded-lg">
                  {product.category?.join(", ") || "Uncategorized"}
                </span>
              </div>

              {/* Icons + Description */}
              <div className="p-4">
                <div className="flex gap-4 mb-2">
                  {product.icons?.map((iconItem, i) => (
                    <div key={i} className="text-center">
                      {iconItem.icon && <div className="text-white text-sm mb-1">{iconItem.icon}</div>}
                      <p className="font-bold">{iconItem.label}</p>
                      <p className="text-xs">{iconItem.description}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm">{product.description}</p>
              </div>

              {/* Hover Link */}
              <Link
                href={product.path || "/coming-soon"}
                className="absolute bottom-0 left-0 w-full h-12 bg-[#10b1b4] text-white flex items-center justify-center text-sm font-bold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination for Sale Products */}
        {saleProducts.length > 0 && (
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 text-black"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <p className="text-white">Page {currentPage} of {totalSalePages}</p>
            <button
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 text-black"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalSalePages))}
              disabled={currentPage === totalSalePages}
            >
              Next
            </button>
          </div>
        )}

        {/* Header Break for Equipment Rentals */}
        {rentalProducts.length > 0 && (
          <div className="w-full my-8">
            <h2 className="text-3xl font-bold text-white text-center border-b-4 border-[#10b1b4] py-4">
              Equipment Rentals
            </h2>
          </div>
        )}

        {/* Equipment Rentals Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {paginatedRentalProducts.map((product, index) => (
            <div key={index} className="bg-[#1E5A81] text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative group overflow-hidden">
              {/* Title */}
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.title}</h3>
              </div>

              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={product.image || "/placeholder-image.png"}
                  alt={product.title}
                  layout="fill"
                  objectFit="contain"
                />
                <span className="absolute top-2 right-2 text-xs text-black font-medium bg-white px-2 py-1 rounded-lg">
                  {product.category?.join(", ") || "Uncategorized"}
                </span>
              </div>

              {/* Icons + Description */}
              <div className="p-4">
                <div className="flex gap-4 mb-2">
                  {product.icons?.map((iconItem, i) => (
                    <div key={i} className="text-center">
                      {iconItem.icon && <div className="text-white text-sm mb-1">{iconItem.icon}</div>}
                      <p className="font-bold">{iconItem.label}</p>
                      <p className="text-xs">{iconItem.description}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm">{product.description}</p>
              </div>

              {/* Hover Link */}
              <Link
                href={product.path || "/coming-soon"}
                className="absolute bottom-0 left-0 w-full h-12 bg-[#10b1b4] text-white flex items-center justify-center text-sm font-bold transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination for Equipment Rentals */}
        {rentalProducts.length > 0 && (
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 text-black"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <p className="text-white">Page {currentPage} of {totalRentalPages}</p>
            <button
              className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 text-black"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalRentalPages))}
              disabled={currentPage === totalRentalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;