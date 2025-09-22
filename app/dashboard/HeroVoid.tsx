// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useMemo } from "react";

// /**
//  * RAWLINE-style editorial hero for Void Creative
//  * - Background: your hero image with grain + gradient scrims
//  * - Oversized headline text
//  * - Ghost/duotone overlay of subject for depth
//  * - Ticker strip (For Brands • For Talent • For Culture)
//  * - Corner badges: © mark + coords + time
//  * - Subheadline and scroll cue
//  * - Mobile-first + reduced motion safe
//  */

// const ACCENT = "#F9D84A"; // yellow accent (can swap to red later)
// const BRAND_RED = "#E30613";

// export default function HeroVoidRawline() {
//   const now = useMemo(() => new Date(), []);
//   const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
//   const date = now.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" });

//   return (
//     <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#0A0A0A] text-white">
//       {/* BACKGROUND IMAGE */}
//       <motion.div
//         initial={{ scale: 1.08, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//         className="absolute inset-0"
//       >
//         <Image
//           src="/Projects/SAFAR/SAFAR_stephenbutkus12.jpg"
//           alt="Void Creative — editorial hero"
//           fill
//           priority
//           className="object-cover"
//         />
//         {/* Scrims for readability */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
//         <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.12]">
//           {/* Embedded film grain */}
//           <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
//             <filter id="noise">
//               <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
//               <feColorMatrix type="saturate" values="0" />
//             </filter>
//             <rect width="100%" height="100%" filter="url(#noise)" />
//           </svg>
//         </div>
//       </motion.div>

//       {/* GHOST / DUOTONE BACKDROP (subtle, behind subject) */}
//       <motion.div
//         aria-hidden
//         initial={{ x: 40, opacity: 0 }}
//         animate={{ x: 0, opacity: 0.25 }}
//         transition={{ delay: 0.35, duration: 1, ease: "easeOut" }}
//         className="absolute right-[-8%] top-[12%] hidden h-[52svh] w-[52svh] -rotate-6 select-none md:block"
//         style={{
//           backgroundImage: "url(/Projects/SAFAR/SAFAR_stephenbutkus12.jpg)",
//           backgroundSize: "cover",
//           backgroundPosition: "58% 30%",
//           maskImage:
//             "radial-gradient(60% 60% at 60% 40%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 70%)",
//           WebkitMaskImage:
//             "radial-gradient(60% 60% at 60% 40%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0) 70%)",
//           filter: "grayscale(100%) contrast(1.2) brightness(1.1)",
//           mixBlendMode: "screen",
//         }}
//       />

//       {/* TOP NAV PILLS (visual only for mock) */}
//       <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-4 pt-4 md:px-8 md:pt-6">
//         <div className="flex items-center gap-2">
//           <div className="h-6 w-6 rounded-md bg-white text-black grid place-items-center font-black">✚</div>
//           <div className="hidden gap-2 md:flex">
//             {["Services", "Projects", "Who We Are", "Testimonials", "Contact"].map((item) => (
//               <span
//                 key={item}
//                 className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80 hover:border-white/40 hover:text-white transition"
//               >
//                 {item}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* © Badge */}
//         <motion.div
//           initial={{ y: -12, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.4 }}
//           className="hidden md:block"
//         >
//           <span className="rounded-full bg-white/10 px-3 py-1 text-sm tracking-widest backdrop-blur-sm">
//             © <span className="font-semibold">VOID</span> • 99–25
//           </span>
//         </motion.div>
//       </div>

//       {/* RIGHT META: COORDS + TIME */}
//       <motion.div
//         initial={{ x: 24, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ delay: 0.6 }}
//         className="absolute right-4 top-24 hidden flex-col items-end gap-1 text-[11px] text-white/80 md:flex"
//       >
//         <span>34° 03′ N — 118° 15′ W</span>
//         <span>{date} • {time}</span>
//       </motion.div>

//       {/* HEADLINE / SUBHEAD / CTAS */}
//       <div className="relative z-10 mx-auto grid h-[70svh] max-w-7xl place-content-end px-4 pb-10 md:px-8 md:pb-14">
//         <motion.h1
//           initial={{ y: 32, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//           className="select-none font-extrabold leading-none tracking-tight"
//           style={{
//             fontSize: "clamp(48px, 12vw, 180px)",
//             letterSpacing: "-0.02em",
//           }}
//         >
//           <span className="relative inline-block">
//             <span className="relative z-[2]">VOID</span>
//             {/* Outline echo behind text */}
//             <span
//               aria-hidden
//               className="absolute left-0 top-0 z-[1] translate-y-[18%] translate-x-[-2%] select-none opacity-20 blur-[1px]"
//               style={{
//                 WebkitTextStroke: "1px white",
//                 color: "transparent",
//               }}
//             >
//               VOID
//             </span>
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//           className="mt-4 max-w-3xl text-base text-white/85 md:text-lg"
//         >
//           From <span className="text-[var(--accent)]" style={{ ["--accent" as any]: BRAND_RED }}>Void</span> to Vision — we connect brands & talent with a core of creative experts to deliver beginning-middle-end stories that move culture.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 8 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1 }}
//           className="mt-6 flex flex-wrap gap-3"
//         >
//           <a
//             href="#start"
//             className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95"
//           >
//             Start a Project
//           </a>
//           <a
//             href="#projects"
//             className="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
//           >
//             See Projects
//           </a>
//         </motion.div>
//       </div>

//       {/* TICKER STRIP */}
//       <motion.div
//         initial={{ y: 40, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ delay: 1.1 }}
//         className="relative z-10 h-10 w-full"
//         style={{ backgroundColor: ACCENT, color: "#0A0A0A" }}
//       >
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="animate-[marquee_18s_linear_infinite] whitespace-nowrap text-[12px] font-semibold tracking-widest">
//             {Array.from({ length: 8 }).map((_, i) => (
//               <span key={i} className="mx-6 inline-flex items-center gap-3">
//                 <span>✺ FOR BRANDS</span>
//                 <span>• FOR TALENT</span>
//                 <span>• FOR CULTURE</span>
//               </span>
//             ))}
//           </div>
//         </div>
//       </motion.div>

//       {/* LOWER BAR + SCROLL CUE */}
//       <div className="relative z-10 flex items-center justify-between px-4 py-3 text-[11px] text-white/70 md:px-8">
//         <span className="hidden md:inline">[ OUR STORY ]</span>
//         <span className="mx-auto uppercase tracking-[0.25em]">scroll down ⟱</span>
//         <span className="hidden md:inline">bts • process • outcomes</span>
//       </div>

//       <style jsx global>{`
//         @keyframes marquee {
//           0% { transform: translateX(0%); }
//           100% { transform: translateX(-50%); }
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .animate-[marquee_18s_linear_infinite] { animation: none; }
//         }
//       `}</style>
//     </section>
//   );
// }






"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const BRAND_RED = "#F9D84A";

export default function HeroVoid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Background parallax
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  // Title transforms
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const titleTracking = useTransform(scrollYProgress, [0, 1], [-0.02, -0.04]); // number
  const titleTrackingEm = useTransform(titleTracking, (v) => `${v}em`);        // string "em"

  // Tagline fade
  const taglineOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] w-full overflow-hidden bg-black text-white"
      aria-label="Hero section"
    >
      {/* Background image + scrims */}
      <motion.div
        style={prefersReduced ? undefined : { scale: bgScale, y: bgY }}
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/Projects/SAFAR/SAFAR_stephenbutkus12.jpg"
          alt="Editorial hero background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_0%,transparent,transparent,rgba(0,0,0,0.55))]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-overlay">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
              <feColorMatrix type="saturate" values="0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-4 text-center md:px-8">
        {/* Headline */}
        <motion.h1
          className="select-none font-extrabold leading-none tracking-tight"
          style={{
            fontSize: "clamp(56px, 13vw, 200px)",
            y: prefersReduced ? undefined : titleY,
            letterSpacing: prefersReduced ? undefined : titleTrackingEm,
          }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="relative inline-block">
            <span className="relative z-[2]">VOID</span>
            <span
              aria-hidden
              className="absolute left-0 top-0 z-[1] translate-x-[-2%] translate-y-[18%] select-none opacity-25 blur-[0.5px]"
              style={{ WebkitTextStroke: "1px #fff", color: "transparent" }}
            >
              VOID
            </span>
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-4 max-w-3xl text-base text-white/90 sm:text-lg md:text-xl"
          style={prefersReduced ? undefined : { opacity: taglineOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          From <span className="font-semibold" style={{ color: BRAND_RED }}>Void</span> to Vision — we connect brands & talent with creative experts to deliver beginning–middle–end stories that move culture.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <a
            href="start"
            className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Start a Project
          </a>
          <a
            href="projects"
            className="inline-flex items-center justify-center rounded-full border border-white/70 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            See Projects
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.25em] text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <span className="inline-block animate-bounce">scroll down ⟱</span>
        </motion.div>
      </div>
    </section>
  );
}
