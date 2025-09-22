// 'use client';

// import { useEffect, useState } from 'react';
// import { usePathname } from 'next/navigation';
// import Link from 'next/link';

// export default function Header() {
//   const pathname = usePathname();
//   const isProjectsPage = pathname?.startsWith('/dashboard/pages/Projects');

//   const [showHeader, setShowHeader] = useState(!isProjectsPage);

//   useEffect(() => {
//     if (!isProjectsPage) return;

//     const handleMouseMove = (e: MouseEvent) => {
//       // Show if cursor is near top 60px
//       setShowHeader(e.clientY < 60);
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [isProjectsPage]);

//   return (
//     <div
//       className={`
//         fixed top-0 left-0 w-full z-50 transition-transform duration-500 ease-in-out
//         ${!showHeader ? '-translate-y-full' : 'translate-y-0'}
//       `}
//     >
//       <header className="flex justify-between items-center px-6 py-4 md:px-10 md:py-6 bg-white/10 backdrop-blur-sm font-serif text-sm tracking-wide text-black/80">
//         <Link href="/">
//           <span className="text-lg italic font-light tracking-wider">S.B.</span>
//         </Link>

//         <nav className="space-x-6 text-xs uppercase tracking-wider hidden md:flex">
//           <Link href="/clients" className="hover:opacity-80">clients</Link>
//           <Link href="/projects" className="hover:opacity-80">projects</Link>
//           <Link href="/about" className="hover:opacity-80">about</Link>
//           <Link href="/contact" className="hover:opacity-80">contact</Link>
//         </nav>
//       </header>
//     </div>
//   );
// }






// 'use client';

// import Link from 'next/link';
// import { useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { playfair } from '../fonts/fonts';
// const navItems = [
//   { name: 'Home', href: '/' },
//   { name: 'Portfolio', href: '/portfolio' },
//   { name: 'Services', href: '/services' },
//   { name: 'About', href: '/about' },
//   { name: 'Contact', href: '/contact' },
// ];

// export default function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
//         <Link
//           href="/"
//           className={`${playfair.className} text-4xl tracking-wide font-bold text-gray-900`}
//         >
//           Stephen Butkus
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex gap-10 items-center">
//           {navItems.map((item) => (
//             <motion.div
//               whileHover={{ y: -2 }}
//               key={item.name}
//               className="relative group"
//             >
//               <Link
//                 href={item.href}
//                 className="text-lg text-gray-700 font-medium group-hover:text-black transition duration-300"
//               >
//                 {item.name}
//               </Link>
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
//             </motion.div>
//           ))}
//         </nav>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden">
//           <button onClick={() => setMenuOpen((prev) => !prev)}>
//             {menuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-white shadow-inner border-t"
//           >
//             <div className="flex flex-col px-6 py-4 space-y-4">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="text-lg text-gray-800 font-medium hover:text-black transition"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }





// // app/components/PhotoHeader.tsx
// 'use client';

// import React, { useState, useRef, useCallback } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { ChevronDown, Menu, X, Phone } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { motion, AnimatePresence } from 'framer-motion';

// const projectCategories = [
//   {
//     title: 'Editorial Shoots',
//     image: '/Projects/SAFAR/SAFAR_stephenbutkus1.jpg',
//     href: '/projects/editorial',
//   },
//   {
//     title: 'Weddings',
//     image: '/Projects/Wedding/wedding1.jpg',
//     href: '/projects/weddings',
//   },
//   {
//     title: 'Campaigns',
//     image: '/Projects/Campaigns/campaign1.jpg',
//     href: '/projects/campaigns',
//   },
//   {
//     title: 'Portraits',
//     image: '/Projects/Portraits/portrait1.jpg',
//     href: '/projects/portraits',
//   },
// ];

// const navItems = [
//   { name: 'About', href: '/about' },
//   { name: 'Services', href: '/services' },
//   { name: 'Contact', href: '/contact' },
// ];

// export default function PhotoHeader() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
//   const menuCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const router = useRouter();

//   const clearCloseTimeout = useCallback(() => {
//     if (menuCloseTimeoutRef.current) {
//       clearTimeout(menuCloseTimeoutRef.current);
//       menuCloseTimeoutRef.current = null;
//     }
//   }, []);

//   const handleContainerMouseLeave = () => {
//     menuCloseTimeoutRef.current = setTimeout(() => setActiveMegaMenu(null), 300);
//   };

//   const handleContainerMouseEnter = () => {
//     clearCloseTimeout();
//   };

//   const handleLinkClick = (path: string) => {
//     setMobileMenuOpen(false);
//     setActiveMegaMenu(null);
//     if (path.startsWith('tel:')) {
//       window.location.href = path;
//     } else {
//       router.push(path);
//     }
//   };

//   return (
//     <header className="relative z-50">
//       <div
//         onMouseLeave={handleContainerMouseLeave}
//         onMouseEnter={handleContainerMouseEnter}
//         className="bg-white shadow-md border-b border-gray-200"
//       >
//         <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
//           <div className="flex items-center cursor-pointer" onClick={() => handleLinkClick('/')}> 
//             <Image
//               src="/logo.png"
//               alt="Photographer Logo"
//               width={180}
//               height={50}
//               className="object-contain h-12"
//             />
//           </div>

//           <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
//             <div className="relative group">
//               <button
//                 className="flex items-center text-gray-700 hover:text-black transition"
//                 onMouseEnter={() => setActiveMegaMenu('projects')}
//               >
//                 Projects <ChevronDown className="w-4 h-4 ml-1" />
//               </button>
//             </div>
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-700 hover:text-black transition"
//                 onClick={() => handleLinkClick(item.href)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <a
//               href="tel:15555555555"
//               className="flex items-center gap-1 text-gray-700 hover:text-black transition"
//             >
//               <Phone className="w-4 h-4" /> Call
//             </a>
//           </nav>

//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="lg:hidden text-gray-800"
//           >
//             {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         <AnimatePresence>
//           {activeMegaMenu === 'projects' && (
//             <motion.div
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 10 }}
//               className="absolute top-full left-0 w-full bg-white border-t border-gray-200 py-6 z-40"
//             >
//               <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//                 {projectCategories.map((proj) => (
//                   <div key={proj.title} onClick={() => handleLinkClick(proj.href)} className="cursor-pointer group">
//                     <div className="h-40 rounded-lg overflow-hidden mb-2 shadow">
//                       <Image
//                         src={proj.image}
//                         alt={proj.title}
//                         width={300}
//                         height={160}
//                         className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
//                       />
//                     </div>
//                     <h3 className="text-sm font-semibold text-gray-800 group-hover:text-black">
//                       {proj.title}
//                     </h3>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="lg:hidden bg-white border-t border-gray-200 shadow px-6 py-4"
//           >
//             <Link href="/projects" className="block py-2 text-gray-800 hover:text-black">
//               Projects
//             </Link>
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="block py-2 text-gray-800 hover:text-black"
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <a
//               href="tel:15555555555"
//               className="block py-2 text-gray-800 hover:text-black"
//             >
//               Call
//             </a>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }





















































// // app/components/PhotoHeader.tsx
// 'use client';

// import React, { useState, useRef, useCallback } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { ChevronDown, Menu, X, Phone } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import { motion, AnimatePresence } from 'framer-motion';

// const projectCategories = [
//   {
//     title: 'Editorial Shoots',
//     image: '/Projects/SAFAR/SAFAR_stephenbutkus1.jpg',
//     href: '/projects/editorial',
//   },
//   {
//     title: 'Weddings',
//     image: '/Projects/Wedding/wedding1.jpg',
//     href: '/projects/weddings',
//   },
//   {
//     title: 'Campaigns',
//     image: '/Projects/Campaigns/campaign1.jpg',
//     href: '/projects/campaigns',
//   },
//   {
//     title: 'Portraits',
//     image: '/Projects/Portraits/portrait1.jpg',
//     href: '/projects/portraits',
//   },
// ];

// const navItems = [
//   { name: 'About', href: '/about' },
//   { name: 'Services', href: '/services' },
//   { name: 'Contact', href: '/contact' },
// ];

// export default function PhotoHeader() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
//   const menuCloseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
//   const router = useRouter();

//   const clearCloseTimeout = useCallback(() => {
//     if (menuCloseTimeoutRef.current) {
//       clearTimeout(menuCloseTimeoutRef.current);
//       menuCloseTimeoutRef.current = null;
//     }
//   }, []);

//   const handleContainerMouseLeave = () => {
//     menuCloseTimeoutRef.current = setTimeout(() => setActiveMegaMenu(null), 300);
//   };

//   const handleContainerMouseEnter = () => {
//     clearCloseTimeout();
//   };

//   const handleLinkClick = (path: string) => {
//     setMobileMenuOpen(false);
//     setActiveMegaMenu(null);
//     if (path.startsWith('tel:')) {
//       window.location.href = path;
//     } else {
//       router.push(path);
//     }
//   };

//   return (
//     <header className="relative z-50">
//       <div
//         onMouseLeave={handleContainerMouseLeave}
//         onMouseEnter={handleContainerMouseEnter}
//         className="bg-white shadow-md border-b border-gray-200"
//       >
//         <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
//           <div className="flex items-center cursor-pointer" onClick={() => handleLinkClick('/')}> 
//             <Image
//               src="/logo.png"
//               alt="Photographer Logo"
//               width={180}
//               height={50}
//               className="object-contain h-12"
//             />
//           </div>

//           <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
//             <div className="relative group">
//               <button
//                 className="flex items-center text-gray-700 hover:text-black transition"
//                 onMouseEnter={() => setActiveMegaMenu('projects')}
//               >
//                 Projects <ChevronDown className="w-4 h-4 ml-1" />
//               </button>
//             </div>
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-700 hover:text-black transition"
//                 onClick={() => handleLinkClick(item.href)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <a
//               href="tel:15555555555"
//               className="flex items-center gap-1 text-gray-700 hover:text-black transition"
//             >
//               <Phone className="w-4 h-4" /> Call
//             </a>
//           </nav>

//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="lg:hidden text-gray-800"
//           >
//             {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         <AnimatePresence>
//           {activeMegaMenu === 'projects' && (
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 20 }}
//               transition={{ duration: 0.6, ease: 'easeInOut' }}
//               className="absolute top-full left-0 w-full backdrop-blur-lg bg-white/70 border-t border-gray-200 py-10 z-40 shadow-xl"
//             >
//               <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//                 {projectCategories.map((proj, idx) => (
//                   <motion.div
//                     key={proj.title}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: idx * 0.1 }}
//                     onClick={() => handleLinkClick(proj.href)}
//                     className="cursor-pointer group"
//                   >
//                     <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
//                       <Image
//                         src={proj.image}
//                         alt={proj.title}
//                         fill
//                         className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500" />
//                     </div>
//                     <h3 className="mt-3 text-sm font-semibold text-gray-900 group-hover:text-black transition">
//                       {proj.title}
//                     </h3>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             className="lg:hidden bg-white border-t border-gray-200 shadow px-6 py-4"
//           >
//             <Link href="/projects" className="block py-2 text-gray-800 hover:text-black">
//               Projects
//             </Link>
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="block py-2 text-gray-800 hover:text-black"
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <a
//               href="tel:15555555555"
//               className="block py-2 text-gray-800 hover:text-black"
//             >
//               Call
//             </a>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// }




































"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

/* -------------------- Theme -------------------- */
const ACCENT = "#F9D84A";

/* -------------------- Data -------------------- */
type MegaLink = { label: string; href: string };
type MegaFeature = { title: string; tag?: string; image: string; href: string };
type NavDef = {
  key: string;
  label: string;
  href: string;
  links: MegaLink[];
  feature?: MegaFeature;
};

const NAV: NavDef[] = [
  {
    key: "about",
    label: "ABOUT US",
    href: "/who-we-are",
    links: [
      { label: "Who We Are", href: "/who-we-are" },
      { label: "Philosophy", href: "/philosophy" },
      { label: "Studios", href: "/studios" },
      { label: "Careers", href: "/careers" },
    ],
    feature: {
      title: "Inside the Studio",
      tag: "Culture",
      image: "/menu/about.jpg",
      href: "/who-we-are",
    },
  },
  {
    key: "services",
    label: "SERVICES",
    href: "/services",
    links: [
      { label: "Photography / Modeling", href: "/services/photography" },
      { label: "Branding & Identity", href: "/services/branding" },
      { label: "Content Creation", href: "/services/content" },
      { label: "Marketing & Media Design", href: "/services/marketing" },
    ],
    feature: {
      title: "Campaign Blueprint",
      tag: "Guide",
      image: "/menu/services.jpg",
      href: "/services",
    },
  },
  {
    key: "cases",
    label: "CASE STUDIES",
    href: "/projects",
    links: [
      { label: "All Projects", href: "/projects" },
      { label: "E-Com & DTC", href: "/projects?tag=ecom" },
      { label: "Editorial", href: "/projects?tag=editorial" },
      { label: "Narrative", href: "/projects?tag=narrative" },
    ],
    feature: {
      title: "VOID × Partner",
      tag: "Case Study",
      image: "/menu/case.jpg",
      href: "/projects/void-x-partner",
    },
  },
  {
    key: "blog",
    label: "BLOG",
    href: "/articles",
    links: [
      { label: "All Articles", href: "/articles" },
      { label: "Behind the Shots", href: "/articles?tag=behind-the-scenes" },
      { label: "Process", href: "/articles?tag=process" },
      { label: "Announcements", href: "/articles?tag=announcements" },
    ],
    feature: {
      title: "Lighting Recipes",
      tag: "Read",
      image: "/menu/blog.jpg",
      href: "/articles/lighting-recipes",
    },
  },
];

/* -------------------- Small hooks -------------------- */
function useScrolled(th = 24) {
  const [s, setS] = useState(false);
  useEffect(() => {
    const onScroll = () => setS(window.scrollY > th);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [th]);
  return s;
}

function useBodyLock(lock: boolean) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (lock) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [lock]);
}

/* ====================================================================== */
/*                              HEADER                                    */
/* ====================================================================== */

export default function Header() {
  const scrolled = useScrolled();

  // hover state
  const [openKey, setOpenKey] = useState<string | null>(null);

  // Refs to anchors
  const itemRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [anchorRect, setAnchorRect] = useState<DOMRect | null>(null);

  // Layouter
  const zoneRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [barBottom, setBarBottom] = useState(72);

  // Hover intent timers (prevent flicker)
  const openT = useRef<number | null>(null);
  const closeT = useRef<number | null>(null);

  // Side drawer
  const [drawer, setDrawer] = useState(false);
  useBodyLock(drawer);

  const clearTimers = () => {
    if (openT.current !== null) {
      cancelAnimationFrame(openT.current);
      openT.current = null;
    }
    if (closeT.current !== null) {
      clearTimeout(closeT.current);
      closeT.current = null;
    }
  };
  

  const openWithDelay = (key: string) => {
    clearTimers();
    // tiny delay to allow cursor to settle
    openT.current = requestAnimationFrame(() => {
      setOpenKey((k) => (k === key ? k : key));
      if (itemRefs.current[key]) setAnchorRect(itemRefs.current[key]!.getBoundingClientRect());
    });
  };

  const closeWithDelay = () => {
    clearTimers();
    closeT.current = window.setTimeout(() => setOpenKey(null), 120);
  };

  useEffect(() => {
    const update = () => {
      if (!barRef.current) return;
      const r = barRef.current.getBoundingClientRect();
      setBarBottom(Math.max(56, r.bottom + 6));
      if (openKey && itemRefs.current[openKey]) {
        setAnchorRect(itemRefs.current[openKey]!.getBoundingClientRect());
      }
    };
  
    const onScroll = () => {
      update();
      setOpenKey(null); // close mega on scroll
    };
  
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", onScroll, { passive: true });
  
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", onScroll);
    };
  }, [openKey]);
  

  return (
    <>
      {/* Transparent, not sticky */}
      <header className="absolute inset-x-0 top-0 z-50">
        {/* gentle gradient for readability */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 to-transparent" />
        <div ref={zoneRef} className="relative mx-3 mt-3 md:mx-6"
             // This zone keeps hover when moving between bar and panel
             onMouseLeave={closeWithDelay} onMouseEnter={() => clearTimers()}>
          <div
            ref={barRef}
            className="relative z-10 rounded-3xl px-3 py-2 md:px-6 md:py-4"
          >
            <div className="flex items-center justify-between gap-4">
              {/* Logo left only */}
              <Link href="/" aria-label="Home" className="inline-flex items-center">
                <Image
                  src="/logo.png"
                  alt="VOID"
                  width={172}
                  height={46}
                  priority
                  className="h-8 w-auto object-contain md:h-10"
                />
              </Link>

              {/* Center nav (desktop) */}
              <nav className="hidden md:block">
                <ul className="flex items-center gap-7 lg:gap-9">
                  {NAV.map((item, idx) => (
                    <li key={item.key} className="relative">
       <button
  ref={(el: HTMLButtonElement | null) => {
    itemRefs.current[item.key] = el;
  }}
  className="group inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.22em] text-white/90 hover:text-white"
  onMouseEnter={() => openWithDelay(item.key)}
  onFocus={() => openWithDelay(item.key)}
  onClick={() => setOpenKey(item.key)}
  aria-expanded={openKey === item.key}
>
  {item.label}
</button>

                      {idx < NAV.length - 1 && (
                        <span
                          aria-hidden
                          className="absolute -right-4 top-1/2 hidden h-1.5 w-1.5 -translate-y-1/2 rounded-full md:block"
                          style={{ backgroundColor: ACCENT }}
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* CTA + burger */}
              <div className="flex items-center gap-2 md:gap-3">
                <Link
                  href="/contact"
                  className="hidden rounded-full border border-white/20 bg-white/5 px-3.5 py-2 text-xs tracking-wider text-white/90 backdrop-blur transition hover:border-white/40 hover:bg-white/10 md:inline-block"
                >
                  START A PROJECT
                </Link>
                <button
                  aria-label="Open menu"
                  onClick={() => setDrawer(true)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-black/30 text-white/90 backdrop-blur transition hover:border-white/40 hover:bg-black/40 md:hidden"
                >
                  <BurgerIcon />
                </button>
              </div>
            </div>
          </div>

          {/* The mega lives inside the same hover zone (no backdrop) */}
          <FixedMega
            containerRef={zoneRef}
            openKey={openKey}
            anchorRect={anchorRect}
            barBottom={barBottom}
            onClose={closeWithDelay}
            onKeepOpen={() => clearTimers()}
          />
        </div>
      </header>

      {/* Floating burger when scrolled */}
      <AnimatePresence>
        {scrolled && !drawer && (
          <motion.button
            aria-label="Open menu"
            onClick={() => setDrawer(true)}
            className="fixed left-3 top-3 z-[95] inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/25 bg-black/60 text-white backdrop-blur transition hover:border-white/40 hover:bg-black/70 md:left-4 md:top-4"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            <BurgerIcon />
          </motion.button>
        )}
      </AnimatePresence>

      <SideDrawer open={drawer} onClose={() => setDrawer(false)} />
    </>
  );
}

/* ====================================================================== */
/*                           FIXED MEGA PANEL                             */
/* ====================================================================== */

function FixedMega({
  containerRef,
  openKey,
  anchorRect,
  barBottom,
  onClose,
  onKeepOpen,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  openKey: string | null;
  anchorRect: DOMRect | null;
  barBottom: number;
  onClose: () => void;
  onKeepOpen: () => void;
}) {
  const current = useMemo(() => NAV.find((n) => n.key === openKey) || null, [openKey]);

  const [left, width] = useMemo(() => {
    const container = containerRef.current;
    if (!container) return [12, Math.min(1100, (typeof window !== "undefined" ? window.innerWidth : 1200) - 24)] as const;
    const cRect = container.getBoundingClientRect();
    const panelW = Math.min(1100, Math.floor(cRect.width - 24)); // keep a gutter
    if (!anchorRect) {
      const centerLeft = Math.floor(cRect.left + (cRect.width - panelW) / 2);
      return [centerLeft - cRect.left + 12, panelW] as const;
    }
    // anchor relative to container
    const anchorCenter = anchorRect.left + anchorRect.width / 2;
    const rawLeft = Math.floor(anchorCenter - panelW / 2);
    const minLeft = cRect.left + 12;
    const maxLeft = cRect.right - panelW - 12;
    const clampedLeft = Math.max(minLeft, Math.min(maxLeft, rawLeft));
    return [clampedLeft - cRect.left, panelW] as const;
  }, [anchorRect, containerRef, openKey]);

  return (
    <AnimatePresence>
      {current && (
        <motion.div
          className="absolute z-[70]"
          style={{ top: barBottom, left, width, pointerEvents: "auto" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.16, ease: "easeOut" }}
          onMouseEnter={onKeepOpen}
          onMouseLeave={onClose}
        >
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-black/75 shadow-2xl backdrop-blur">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Left feature */}
              <Link
                href={current.feature?.href || current.href}
                className="relative col-span-1 hidden min-h-[220px] md:block"
              >
                <Image
                  src={current.feature?.image || "/menu/placeholder.jpg"}
                  alt={current.feature?.title || "Featured"}
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
                <div className="absolute bottom-3 left-3 right-3">
                  {current.feature?.tag && (
                    <span
                      className="mb-2 inline-block rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-black"
                      style={{ backgroundColor: ACCENT }}
                    >
                      {current.feature.tag}
                    </span>
                  )}
                  <h4 className="text-base font-semibold">{current.feature?.title || "Explore"}</h4>
                </div>
              </Link>

              {/* Right links */}
              <div className="col-span-2 grid grid-cols-1 gap-6 p-5 md:grid-cols-2 md:p-6">
                {current.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-white/90 transition hover:border-white/25 hover:bg-white/[0.06]"
                    onClick={onClose}
                  >
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-semibold tracking-wide">{l.label}</span>
                      <span
                        className="h-1.5 w-1.5 rounded-full opacity-80 transition group-hover:opacity-100"
                        style={{ backgroundColor: ACCENT }}
                      />
                    </div>
                    <p className="text-xs text-white/60">Learn more →</p>
                  </Link>
                ))}

                <div className="col-span-full flex flex-wrap gap-2 pt-2">
                  {["Studios", "Capabilities", "Press", "Collab"].map((chip) => (
                    <Link
                      key={chip}
                      href=""
                      className="rounded-full border border-white/15 px-3 py-1 text-[11px] text-white/80 hover:border-white/40 hover:text-white"
                      onClick={onClose}
                    >
                      {chip}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ====================================================================== */
/*                             SIDE DRAWER                                 */
/* ====================================================================== */

function SideDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  useBodyLock(open);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[98] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed left-0 top-0 z-[99] h-full w-[88%] max-w-sm overflow-y-auto rounded-r-3xl border-r border-white/15 bg-black/90 p-5 text-white shadow-2xl backdrop-blur"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-white/60">Menu</span>
              <button
                aria-label="Close menu"
                onClick={onClose}
                className="rounded-lg border border-white/20 bg-white/5 px-2 py-1 text-xs text-white/80"
              >
                Close
              </button>
            </div>

            <Link href="/" onClick={onClose} className="mb-5 inline-flex items-center">
              <Image src="/logo.png" alt="VOID" width={150} height={40} className="h-8 w-auto object-contain" />
            </Link>

            <div className="space-y-4">
              {NAV.map((section) => (
                <div key={section.key} className="rounded-2xl border border-white/10 bg-white/[0.03]">
                  <Link
                    href={section.href}
                    onClick={onClose}
                    className="flex items-center justify-between px-4 py-3 text-sm font-semibold tracking-wider"
                  >
                    {section.label}
                    <span className="ml-3 inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                  </Link>
                  <div className="grid grid-cols-1 gap-1 px-2 pb-3">
                    {section.links.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        onClick={onClose}
                        className="rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/[0.06]"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                  {section.feature && (
                    <Link href={section.feature.href} onClick={onClose} className="relative block overflow-hidden rounded-b-2xl">
                      <div className="relative h-36 w-full">
                        <Image src={section.feature.image} alt={section.feature.title} fill sizes="80vw" className="object-cover" />
                      </div>
                      <div className="flex items-center justify-between px-3 py-2 text-sm">
                        <span className="font-semibold">{section.feature.title}</span>
                        {section.feature.tag && (
                          <span
                            className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black"
                            style={{ backgroundColor: ACCENT }}
                          >
                            {section.feature.tag}
                          </span>
                        )}
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-white/70">
              <a href="#" className="hover:text-white">Instagram</a>
              <span className="text-white/30">•</span>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <span className="text-white/30">•</span>
              <a href="#" className="hover:text-white">YouTube</a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

/* -------------------- Icons -------------------- */
function BurgerIcon() {
  return (
    <div className="relative h-4 w-5">
      <span className="absolute left-0 top-0 block h-[2px] w-full bg-white" />
      <span className="absolute left-0 top-[7px] block h-[2px] w-full bg-white" />
      <span className="absolute bottom-0 left-0 block h-[2px] w-full bg-white" />
    </div>
  );
}
