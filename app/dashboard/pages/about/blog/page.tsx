// "use client";

// import React from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";

// // Sample blog data
// const blogPosts = [
//   {
//     title: "The Importance of Asbestos, Mold and Lead Testing and Environmental Services",
//     date: "November 21, 2022",
//     author: "admin",
//     category: "Latest Blog",
//     excerpt:
//       "The Importance of Asbestos, Mold and Lead Testing and Environmental ...",
//     image: "/pinnaclelab/blog/Screenshot 2025-01-29 at 12.15.16 PM.png", // placeholder
//   },
//   {
//     title: "What you Need to Know about Asbestos",
//     date: "July 18, 2023",
//     author: "admin",
//     category: "Latest Blog",
//     excerpt:
//       "In today’s blog post, we delve into a topic that ...",
//     image: "/pinnaclelab/blog/Screenshot 2025-01-29 at 12.15.48 PM.png", // placeholder
//   },
//   {
//     title: "When and Why Should You Test for Mold in Your Property?",
//     date: "July 19, 2023",
//     author: "admin",
//     category: "Latest Blog",
//     excerpt:
//       "When and why should you Test for Mold in your ...",
//     image: "/pinnaclelab/blog/Screenshot 2025-01-29 at 12.16.01 PM.png", // placeholder
//   },
//   {
//     title: "The Importance of Environmental Testing for Lead",
//     date: "July 19, 2023",
//     author: "admin",
//     category: "Latest Blog",
//     excerpt:
//       "The Importance of Environmental Testing for Lead: Protecting Our Communities ...",
//     image: "/pinnaclelab/blog/Screenshot 2025-01-29 at 12.16.18 PM.png", // placeholder
//   },
// ];

// const NewsPage = () => {
//   const router = useRouter();

//   const handleReadMore = (title: string) => {
//     // Example: route to a dynamic post page or do something else
//     alert(`Navigating to blog post: ${title}`);
//     // router.push(`/some-blog-route/${slug}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero / Intro */}
//       <section className="relative bg-gradient-to-r from-[#16436F] to-[#10b1b4] text-white py-16 px-6">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
//             Latest News
//           </h1>
//           <p className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
//             Pinnacle Laboratory stands as Los Angeles’s foremost and trusted
//             environmental testing laboratory, priding itself on delivering not
//             only rapid turnaround times but also providing clients with accurate
//             and detailed reports. Unquestionably, our commitment is to empower
//             you with a comprehensive understanding of the entire scope of your
//             project. Therefore, when you choose Pinnacle Laboratory, you are
//             opting for a partnership that ensures precision and efficiency in
//             the analysis of your asbestos, mold, and lead samples. Nonetheless,
//             allow us to guide you through the process, delivering results that
//             are not only swift but also reliable, and be sure to stay tuned with
//             our news updates.
//           </p>
//         </div>
//       </section>

//       {/* Main Content: Blog Grid + Sidebar */}
//       <section className="max-w-6xl mx-auto py-10 px-4">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Left Column: Blog Cards */}
//           <div className="md:col-span-2 space-y-8">
//             {blogPosts.map((post, idx) => (
//               <article
//                 key={idx}
//                 className="bg-white rounded-lg shadow hover:shadow-md transition-shadow"
//               >
//                 <div className="relative w-full h-56 md:h-64 lg:h-72 rounded-t-lg overflow-hidden">
//                   <Image
//                     src={post.image}
//                     alt={post.title}
//                     fill
//                     className="object-cover"
//                   />
//                   <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs uppercase font-semibold px-2 py-1 rounded">
//                     {post.category}
//                   </span>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center text-sm text-gray-500 space-x-2 mb-2">
//                     <p>{post.date}</p>
//                     <span>·</span>
//                     <p>{post.author}</p>
//                   </div>
//                   <h2 className="text-xl font-bold mb-3 text-[#1E5A81]">{post.title}</h2>
//                   <p className="text-gray-700 mb-4">{post.excerpt}</p>
//                   <button
//                     onClick={() => handleReadMore(post.title)}
//                     className="text-[#10b1b4] hover:underline text-sm font-medium"
//                   >
//                     Read More
//                   </button>
//                 </div>
//               </article>
//             ))}
//           </div>

//           {/* Right Column: Sidebar */}
//           <aside className="space-y-6">
//             {/* Search Box */}
//             <div className="bg-white p-4 rounded-lg shadow">
//               <h3 className="text-lg font-semibold mb-3 text-[#10b1b4]">Search</h3>
//               <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
//                 <input
//                   type="text"
//                   placeholder="Enter Keyword..."
//                   className="px-3 py-2 w-full focus:outline-none text-[#10b1b4]"
//                 />
//                 <button className="bg-[#16436F] text-white px-4 py-2">
//                   Go
//                 </button>
//               </div>
//             </div>

//             {/* Categories */}
//             <div className="bg-white p-4 rounded-lg shadow">
//               <h3 className="text-lg font-semibold mb-3 text-[#10b1b4]">Categories</h3>
//               <ul className="list-disc list-inside text-gray-700 space-y-1">
//                 <li>Latest Blog</li>
//                 <li>Asbestos</li>
//                 <li>Mold</li>
//                 <li>Lead</li>
//                 {/* Add more if needed */}
//               </ul>
//             </div>

//             {/* Popular Post */}
//             <div className="bg-white p-4 rounded-lg shadow">
//               <h3 className="text-lg font-semibold mb-3 text-[#10b1b4]">Popular Post</h3>
//               <p className="text-gray-600 text-sm">
//                 Show your most popular or featured post here...
//               </p>
//             </div>

//             {/* Subscribe Box */}
//             <div className="bg-white p-4 rounded-lg shadow">
//               <h3 className="text-lg font-semibold mb-2 text-[#10b1b4]">Subscribe Us</h3>
//               <p className="text-gray-600 text-sm mb-4">
//                 Subscribe us to get latest news & articles in your inbox.
//               </p>
//               <input
//                 type="email"
//                 placeholder="Email Address..."
//                 className="border border-gray-300 rounded w-full px-3 py-2 mb-3 focus:outline-none text-[#10b1b4]"
//               />
//               <button className="bg-[#16436F] w-full text-white py-2 rounded">
//                 Subscribe
//               </button>
//             </div>
//           </aside>
//         </div>
//       </section>

//       {/* Optional Testimonials or "Look at What Our Customers Say!" */}
//       <section className="bg-[#10b1b4] text-white py-10 px-4 mt-8">
//         <div className="max-w-6xl mx-auto">
//           <h3 className="text-2xl font-bold mb-4">Look at What our Customers Say!</h3>

//           <div className="space-y-4">
//             <blockquote className="italic">
//               “Pinnacle Laboratory provided top-notch services and quick turnaround times!”
//             </blockquote>
//             <blockquote className="italic">
//               “Their staff was professional and guided us through every step. Highly recommend!”
//             </blockquote>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default NewsPage;




"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SubscribeBox from "../../subscribe/SubscribeBox";

// Sample blog data
const blogPosts = [
  {
    title: "Understanding Non-Fungal Particulate Baselines and Culture Sampling",
    date: "June 13, 2025",
    author: "Bailey Coleman, Microbiology Technical Manager",
    category: "Testing",
    excerpt: "Indoor air quality assessments often focus on fungal spores, but ...",
    image: "/pinnaclelab/microbiology/Skin Cells1.jpg",
    path: "/dashboard/pages/about/blog/post5",
  },
  {
    title: "The Importance of Asbestos, Mold and Lead Testing and Environmental Services",
    date: "November 21, 2022",
    author: "admin",
    category: "Testing",
    excerpt: "The Importance of Asbestos, Mold and Lead Testing and Environmental ...",
    image: "/pinnaclelab/blog/Screenshot 2025-01-29 at 12.15.16 PM.png",
    path: "/dashboard/pages/about/blog/post1",
  },
  {
    title: "What you Need to Know about Asbestos",
    date: "July 18, 2023",
    author: "admin",
    category: "Asbestos",
    excerpt: "In today’s blog post, we delve into a topic that ...",
    image: "/pinnaclelab/blog/Screenshot 2025-01-29 at 12.15.48 PM.png",
    path: "/dashboard/pages/about/blog/post2",
  },
  {
    title: "When and Why Should You Test for Mold in Your Property?",
    date: "July 19, 2023",
    author: "admin",
    category: "Mold",
    excerpt: "When and why should you Test for Mold in your ...",
    image: "/pinnaclelab/blog/Screenshot 2025-01-29 at 12.16.01 PM.png",
    path: "/dashboard/pages/about/blog/post3",
  },
  {
    title: "The Importance of Environmental Testing for Lead",
    date: "July 19, 2023",
    author: "admin",
    category: "Lead",
    excerpt: "Protecting Our Communities and Health ...",
    image: "/pinnaclelab/blog/Screenshot 2025-01-29 at 12.16.18 PM.png",
    path: "/dashboard/pages/about/blog/post4",
  },
];

// Example categories. "All" is an extra category to reset the filter.
const categories = ["All", "Latest Blog", "Asbestos", "Mold", "Lead"];

const NewsPage = () => {
  const router = useRouter();

  // Search text & category states
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter logic (title & excerpt contain search term, plus matching category)
  const filteredPosts = blogPosts.filter((post) => {
    // 1) Match search
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    // 2) Match category; "All" means no category filter
    const matchesCategory =
      activeCategory === "All" ? true : post.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // Navigate to the post's path
  const handleReadMore = (path: string) => {
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero / Intro */}
      <section className="relative bg-gradient-to-r from-[#16436F] to-[#10b1b4] text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
            Latest News
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto">
            Pinnacle Laboratory stands as Los Angeles’s foremost and trusted
            environmental testing laboratory, priding itself on delivering not
            only rapid turnaround times but also providing clients with accurate
            and detailed reports. Unquestionably, our commitment is to empower
            you with a comprehensive understanding of the entire scope of your
            project. Therefore, when you choose Pinnacle Laboratory, you are
            opting for a partnership that ensures precision and efficiency in
            the analysis of your asbestos, mold, and lead samples. Nonetheless,
            allow us to guide you through the process, delivering results that
            are not only swift but also reliable, and be sure to stay tuned with
            our news updates.
          </p>
        </div>
      </section>

      {/* Main Content: Blog Grid + Sidebar */}
      <section className="max-w-6xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Blog Cards */}
          <div className="md:col-span-2 space-y-8">
            {filteredPosts.map((post, idx) => (
              <article
                key={idx}
                className="bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <div className="relative w-full h-56 md:h-64 lg:h-72 rounded-t-lg overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs uppercase font-semibold px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 space-x-2 mb-2">
                    <p>{post.date}</p>
                    <span>·</span>
                    <p>{post.author}</p>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-[#1E5A81]">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 mb-4">{post.excerpt}</p>
                  <button
                    onClick={() => handleReadMore(post.path)}
                    className="text-[#10b1b4] hover:underline text-sm font-medium"
                  >
                    Read More
                  </button>
                </div>
              </article>
            ))}

            {/* Show a message if no posts matched the filter */}
            {filteredPosts.length === 0 && (
              <div className="text-center text-gray-500">
                No posts found. Try a different search or category.
              </div>
            )}
          </div>

          {/* Right Column: Sidebar */}
          <aside className="space-y-6">
            {/* Search Box */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-3 text-[#10b1b4]">
                Search
              </h3>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Enter Keyword..."
                  className="px-3 py-2 w-full focus:outline-none text-[#10b1b4]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  onClick={() => setSearchTerm("")}
                  className="bg-[#16436F] text-white px-4 py-2"
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-3 text-[#10b1b4]">
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`cursor-pointer px-2 py-1 rounded hover:bg-gray-100 transition-colors text-[#1E5A81] ${
                      activeCategory === cat ? "font-bold text-[#16436F]" : ""
                    }`}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Post */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-3 text-[#10b1b4]">
                Popular Post
              </h3>
              <p className="text-gray-600 text-sm">
                Show your most popular or featured post here...
              </p>
            </div>

            {/* Subscribe Box */}
            <aside className="...">
  <SubscribeBox />
</aside>
          </aside>
        </div>
      </section>

      {/* Testimonials or "Look at What Our Customers Say!" */}
      <section className="bg-[#10b1b4] text-white py-10 px-4 mt-8">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Look at What our Customers Say!</h3>
          <div className="space-y-4">
            <blockquote className="italic">
              “Pinnacle Laboratory provided top-notch services and quick turnaround times!”
            </blockquote>
            <blockquote className="italic">
              “Their staff was professional and guided us through every step. Highly recommend!”
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
