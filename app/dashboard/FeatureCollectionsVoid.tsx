// "use client";

// import Image from "next/image";
// import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from "framer-motion";
// import { useMemo, useRef, useState } from "react";

// const ACCENT = "#F9D84A";

// /* --------------------------------- Data --------------------------------- */

// const CATEGORIES = [
//   "All",
//   "Campaigns",
//   "BTS",
//   "Branding",
//   "Editorial",
//   "Motion",
//   "Design",
//   "Product",
// ] as const;
// type Category = (typeof CATEGORIES)[number];

// type CardItem = {
//   id: string;
//   tag: string;
//   title: string;
//   subtitle?: string;
//   image: string;
//   categories: Category[];
//   badge?: string;
//   meta?: string; // like [$816.00] or [Winter 2025]
// };

// const CARD_POOL: CardItem[] = [
//   {
//     id: "c1",
//     tag: "[ SERIES ]",
//     title: "Campaign BTS",
//     subtitle: "The Porter Off-Race",
//     image: "/Projects/SAFAR/SAFAR_stephenbutkus1.jpg",
//     categories: ["All", "Campaigns", "BTS", "Editorial", "Product"],
//     meta: "[$816.00]",
//   },
//   {
//     id: "c2",
//     tag: "[ COLLECTION ]",
//     title: "Explore",
//     subtitle: "Off Race Autumn",
//     image: "/Projects/SAFAR/SAFAR_stephenbutkus4.jpg",
//     categories: ["All", "Editorial", "Branding", "Design"],
//     badge: "Winter 2025",
//   },
//   {
//     id: "c3",
//     tag: "[ PORTRAIT ]",
//     title: "Portrait Series",
//     subtitle: "City Comfort",
//     image: "/Projects/SAFAR/SAFAR_stephenbutkus7.jpg",
//     categories: ["All", "BTS", "Campaigns", "Motion"],
//     meta: "[$316.00]",
//   },
//   {
//     id: "c4",
//     tag: "[ MOTION ]",
//     title: "Studio Motion",
//     subtitle: "Texture Studies",
//     image: "/Projects/SAFAR/SAFAR_stephenbutkus11.jpg",
//     categories: ["All", "Motion", "Design", "Branding"],
//   },
//   {
//     id: "c5",
//     tag: "[ BRAND ]",
//     title: "Identity Proof",
//     subtitle: "System Cohesion",
//     image: "/Projects/SAFAR/SAFAR_stephenbutkus4.jpg",
//     categories: ["All", "Branding", "Design", "Product"],
//   },
//   {
//     id: "c6",
//     tag: "[ PRODUCT ]",
//     title: "Product Focus",
//     subtitle: "Landing Visuals",
//     image: "/Projects/SAFAR/SAFAR_stephenbutkus1.jpg",
//     categories: ["All", "Product", "Campaigns"],
//   },
// ];

// /* ------------------------------ Component ------------------------------- */

// export default function FeatureCollectionsVoid() {
//   const prefersReduced = useReducedMotion();
//   const rootRef = useRef<HTMLElement>(null);

//   // background ghost type parallax (same as before)
//   const { scrollYProgress } = useScroll({ target: rootRef, offset: ["start 80%", "end 20%"] });
//   const ghostY = useTransform(scrollYProgress, [0, 1], [0, -40]);

//   const fadeUp = (delay = 0) => ({
//     initial: { y: 18, opacity: 0 },
//     whileInView: { y: 0, opacity: 1 },
//     viewport: { once: true, amount: 0.3 },
//     transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
//   });

//   // NEW: active category that only swaps the three cards below
//   const [active, setActive] = useState<Category>("All");

//   // pick 3 cards for the selected category; if <3, top up from "All"
//   const cards = useMemo(() => {
//     const primary = CARD_POOL.filter(c => c.categories.includes(active));
//     const topThree = [...primary];
//     if (topThree.length < 3) {
//       for (const extra of CARD_POOL) {
//         if (!topThree.find(t => t.id === extra.id) && extra.categories.includes("All")) {
//           topThree.push(extra);
//         }
//         if (topThree.length >= 3) break;
//       }
//     }
//     return topThree.slice(0, 3);
//   }, [active]);

//   return (
//     <section ref={rootRef} className="relative w-full overflow-hidden bg-black text-white">
//       {/* Frame lines */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
//         <div className="absolute inset-y-0 left-0 w-px bg-white/10" />
//         <div className="absolute inset-y-0 right-0 w-px bg-white/10" />
//         <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
//       </div>

//       {/* Ghost background typography */}
//       <motion.div
//         aria-hidden
//         style={prefersReduced ? {} : { y: ghostY }}
//         className="pointer-events-none absolute left-[-5%] top-[10%] z-0 select-none opacity-[0.06]"
//       >
//         <p className="font-extrabold leading-none tracking-tight" style={{ fontSize: "min(36vw, 520px)", letterSpacing: "-0.02em" }}>
//           VOID
//         </p>
//       </motion.div>

//       {/* === Upper editorial band (unchanged) === */}
//       <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 gap-8 px-4 pt-16 md:px-8 md:pt-24">
//         {/* Left label & small copy */}
//         <div className="col-span-12 md:col-span-4">
//           <motion.p className="text-xs uppercase tracking-wider text-white/70" {...fadeUp(0)}>
//             [ Collections ]
//           </motion.p>

//           <motion.div className="mt-4 max-w-xs" {...fadeUp(0.05)}>
//             <span className="text-4xl font-extrabold">Summer</span>
//             <div className="text-lg font-medium text-white/70">Articles</div>
//           </motion.div>

//           <motion.a
//             href="#articles"
//             className="mt-6 inline-flex items-center text-sm font-semibold"
//             style={{ color: ACCENT }}
//             {...fadeUp(0.1)}
//           >
//             <span
//               className="bg-gradient-to-r from-transparent to-transparent bg-[length:0_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px]"
//               style={{ backgroundImage: `linear-gradient(${ACCENT},${ACCENT})` }}
//             >
//               SEE FOR THIS ARTICLES
//             </span>
//             <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
//           </motion.a>
//         </div>

//         {/* Center feature image */}
//         <motion.div className="relative col-span-12 aspect-[4/3] overflow-hidden rounded-sm border border-white/10 md:col-span-5" {...fadeUp(0.05)}>
//           <Image
//             src="/Projects/SAFAR/SAFAR_stephenbutkus11.jpg"
//             alt="VOID feature — eyewear concept"
//             fill
//             sizes="(max-width: 768px) 100vw, 45vw"
//             className="object-cover"
//             priority={false}
//           />
//           <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
//           <span className="pointer-events-none absolute left-3 top-3 text-xl italic" style={{ color: ACCENT, textShadow: "0 1px 1px rgba(0,0,0,.45)" }}>
//             Void Studio
//           </span>
//         </motion.div>

//         {/* Right meta */}
//         <div className="col-span-12 md:col-span-3">
//           <motion.div className="flex items-start justify-between" {...fadeUp(0.05)}>
//             <a href="#more" className="text-sm font-semibold" style={{ color: ACCENT }}>
//               SEE FOR THIS ARTICLES ↗
//             </a>
//             <span className="text-xs text-white/60">©99–25</span>
//           </motion.div>

//           <motion.p className="mt-4 text-sm leading-relaxed text-white/75" {...fadeUp(0.1)}>
//             Born from the idea of blending minimalism with sophistication, our collections are designed
//             for those who value quality, versatility, and confidence in every detail.
//           </motion.p>

//           <motion.div className="mt-4 grid grid-cols-2 gap-2" {...fadeUp(0.15)}>
//             <Thumb src="/Projects/SAFAR/SAFAR_stephenbutkus7.jpg" />
//             <Thumb src="/Projects/SAFAR/SAFAR_stephenbutkus4.jpg" />
//           </motion.div>
//         </div>
//       </div>

//       {/* Big overlapping headline */}
//       <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
//         <motion.h2 className="font-extrabold leading-[0.95] tracking-tight" style={{ fontSize: "clamp(28px, 7vw, 72px)" }} {...fadeUp(0.02)}>
//           Designed for Real <span className="text-white">Life</span> — Comfort
//         </motion.h2>
//         <motion.div className="mt-2 text-4xl font-extrabold text-white/10 md:text-6xl" {...fadeUp(0.06)}>
//           Meets Elegance
//         </motion.div>
//       </div>

//       {/* Category chips (these ONLY change the 3 cards below) */}
//       <div className="relative z-10 mx-auto max-w-7xl px-4 pt-6 md:px-8">
//         <div className="flex flex-wrap gap-2">
//           {CATEGORIES.map((cat) => {
//             const isActive = active === cat;
//             return (
//               <button
//                 key={cat}
//                 onClick={() => setActive(cat)}
//                 className={`relative rounded-full px-3 py-1 text-xs transition ${
//                   isActive ? "bg-white text-black" : "border border-white/30 text-white/80 hover:border-white/60 hover:text-white"
//                 }`}
//                 aria-pressed={isActive}
//               >
//                 {cat}
//                 {isActive && (
//                   <motion.span
//                     layoutId="chipGlow2"
//                     className="pointer-events-none absolute inset-0 rounded-full"
//                     style={{ boxShadow: "0 0 0 1px rgba(255,255,255,.3), 0 6px 18px rgba(255,255,255,.08)" }}
//                   />
//                 )}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* === Three cards in diagonal step (this is the ONLY adaptive part) === */}
//       <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pb-16 pt-8 md:grid-cols-12 md:gap-8 md:px-8 md:pb-24">
//         <AnimatePresence mode="popLayout">
//           {cards.map((c, idx) => (
//             <motion.article
//               key={c.id + "-" + active}
//               layout
//               initial={{ y: 18, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               exit={{ y: 12, opacity: 0 }}
//               viewport={{ once: false, amount: 0.3 }}
//               transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
//               className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] md:col-span-4
//                 ${idx === 1 ? "md:mt-12 lg:mt-20" : ""} ${idx === 2 ? "md:mt-24 lg:mt-40" : ""}`}
//             >
//               {/* image */}
//               <div className="relative aspect-[4/5] w-full overflow-hidden">
//                 <Image
//                   src={c.image}
//                   alt={`${c.title} — ${c.subtitle || ""}`}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                   className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
//                 {c.badge && <span className="pointer-events-none absolute bottom-3 right-3 text-3xl font-extrabold text-white/40">{c.badge}</span>}
//               </div>

//               {/* tag pill */}
//               <div className="pointer-events-none absolute left-0 top-0 p-4 sm:p-5">
//                 <span className="rounded-full border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/80">
//                   {c.tag}
//                 </span>
//               </div>

//               {/* text block */}
//               <div className="absolute inset-0 flex flex-col justify-end p-5">
//                 <h3 className="text-2xl font-extrabold leading-tight">
//                   {c.title}
//                   {c.subtitle ? <span className="block text-white/90">{c.subtitle}</span> : null}
//                 </h3>

//                 <p className="mt-2 max-w-sm text-xs text-white/80">
//                   Features refined production, BTS stills, and editorial selects across the city series.
//                 </p>

//                 <div className="mt-4 flex items-center justify-between">
//                   <button
//                     onClick={() => cycleIntoAnotherCategory(active, setActive, c.categories)}
//                     className="inline-flex items-center text-sm font-semibold"
//                     style={{ color: ACCENT }}
//                   >
//                     <span
//                       className="bg-gradient-to-r from-transparent to-transparent bg-[length:0_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px]"
//                       style={{ backgroundImage: `linear-gradient(${ACCENT},${ACCENT})` }}
//                     >
//                       VIEW IN {pickNextCategory(active, c.categories)}
//                     </span>
//                     <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
//                   </button>

//                   {c.meta && <span className="text-[11px] uppercase tracking-widest text-white/60">{c.meta}</span>}
//                 </div>
//               </div>

//               {/* corner glyph */}
//               <span className="pointer-events-none absolute right-3 top-3 text-xl font-black leading-none opacity-70" style={{ color: ACCENT }}>
//                 ✣
//               </span>
//             </motion.article>
//           ))}
//         </AnimatePresence>
//       </div>

//       {/* Bottom caption (unchanged) */}
//       <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 text-sm text-white/70 md:px-8">
//         We craft adaptable visuals that empower brands and talent — press a chip to re-contextualize the work.
//       </div>
//     </section>
//   );
// }

// /* --------------------------------- UI bits -------------------------------- */

// function Thumb({ src }: { src: string }) {
//   return (
//     <div className="relative aspect-square overflow-hidden rounded-sm border border-white/15">
//       <Image src={src} alt="" fill sizes="140px" className="object-cover" />
//     </div>
//   );
// }

// /* ------------------------------- Helpers ---------------------------------- */

// function pickNextCategory(current: Category, cardCats: Category[]): Category {
//   const options = cardCats.filter(c => c !== "All");
//   if (!options.length) return current;
//   const next = options.includes(current)
//     ? options[(options.indexOf(current) + 1) % options.length]
//     : options[0];
//   return next as Category;
// }

// function cycleIntoAnotherCategory(
//   current: Category,
//   set: (c: Category) => void,
//   cats: Category[]
// ) {
//   set(pickNextCategory(current, cats));
// }





































"use client";

import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef, useState } from "react";

const ACCENT = "#F9D84A";

/* --------------------------------- Data --------------------------------- */

const CATEGORIES = [
    "All",
    "Campaigns",
    "BTS",
    "Branding",
    "Editorial",
    "Motion",
    "Design",
    "Product",
  ] as const;
  type Category = (typeof CATEGORIES)[number];

  type NonAllCategory = Exclude<Category, "All">;

type CardItem = {
  id: string;
  tag: string;
  title: string;
  subtitle?: string;
  image: string;
  categories: Category[];
  badge?: string;
  meta?: string;
};

const CARD_POOL: CardItem[] = [
  { id: "c1", tag: "[ SERIES ]", title: "Campaign BTS", subtitle: "The Porter Off-Race", image: "/Projects/SAFAR/SAFAR_stephenbutkus1.jpg", categories: ["All","Campaigns","BTS","Editorial","Product"], meta: "[$816.00]" },
  { id: "c2", tag: "[ COLLECTION ]", title: "Explore", subtitle: "Off Race Autumn", image: "/Projects/SAFAR/SAFAR_stephenbutkus4.jpg", categories: ["All","Editorial","Branding","Design"], badge: "Winter 2025" },
  { id: "c3", tag: "[ PORTRAIT ]", title: "Portrait Series", subtitle: "City Comfort", image: "/Projects/SAFAR/SAFAR_stephenbutkus7.jpg", categories: ["All","BTS","Campaigns","Motion"], meta: "[$316.00]" },
  { id: "c4", tag: "[ MOTION ]", title: "Studio Motion", subtitle: "Texture Studies", image: "/Projects/SAFAR/SAFAR_stephenbutkus11.jpg", categories: ["All","Motion","Design","Branding"] },
  { id: "c5", tag: "[ BRAND ]", title: "Identity Proof", subtitle: "System Cohesion", image: "/Projects/SAFAR/SAFAR_stephenbutkus4.jpg", categories: ["All","Branding","Design","Product"] },
  { id: "c6", tag: "[ PRODUCT ]", title: "Product Focus", subtitle: "Landing Visuals", image: "/Projects/SAFAR/SAFAR_stephenbutkus1.jpg", categories: ["All","Product","Campaigns"] },
];



/* ------------------------------ Component ------------------------------- */

export default function FeatureCollectionsVoid() {
  const prefersReduced = useReducedMotion();
  const rootRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: rootRef, offset: ["start 80%", "end 20%"] });
  const ghostY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const fadeUp = (delay = 0) => ({
    initial: { y: 18, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  });

  const [active, setActive] = useState<Category>("All");

  const cards = useMemo(() => {
    const pool =
      active === "All"
        ? CARD_POOL
        : CARD_POOL.filter((c) => c.categories.includes(active));
    const topThree: typeof CARD_POOL = [...pool];
    if (topThree.length < 3) {
      for (const extra of CARD_POOL) {
        if (!topThree.find((t) => t.id === extra.id)) topThree.push(extra);
        if (topThree.length >= 3) break;
      }
    }
    return topThree.slice(0, 3);
  }, [active]);
  

  return (
    // ⬇️ White stage so the rounded bottom corners reveal white
    <div className="relative w-full bg-white">
      <section
        ref={rootRef}
        className="
          relative w-full overflow-hidden bg-black text-white
          rounded-b-[28px] md:rounded-b-[40px] lg:rounded-b-[56px]
        "
      >
        {/* Frame lines */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
          <div className="absolute inset-y-0 left-0 w-px bg-white/10" />
          <div className="absolute inset-y-0 right-0 w-px bg-white/10" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
        </div>

        {/* Ghost background typography */}
        <motion.div
          aria-hidden
          style={prefersReduced ? {} : { y: ghostY }}
          className="pointer-events-none absolute left-[-5%] top-[10%] z-0 select-none opacity-[0.06]"
        >
          <p className="font-extrabold leading-none tracking-tight" style={{ fontSize: "min(36vw, 520px)", letterSpacing: "-0.02em" }}>
            VOID
          </p>
        </motion.div>

        {/* === Upper editorial band (unchanged) === */}
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 gap-8 px-4 pt-16 md:px-8 md:pt-24">
          <div className="col-span-12 md:col-span-4">
            <motion.p className="text-xs uppercase tracking-wider text-white/70" {...fadeUp(0)}>
              [ Collections ]
            </motion.p>
            <motion.div className="mt-4 max-w-xs" {...fadeUp(0.05)}>
              <span className="text-4xl font-extrabold">Summer</span>
              <div className="text-lg font-medium text-white/70">Articles</div>
            </motion.div>
            <motion.a
              href="articles"
              className="mt-6 inline-flex items-center text-sm font-semibold"
              style={{ color: ACCENT }}
              {...fadeUp(0.1)}
            >
              <span
                className="bg-gradient-to-r from-transparent to-transparent bg-[length:0_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px]"
                style={{ backgroundImage: `linear-gradient(${ACCENT},${ACCENT})` }}
              >
                SEE FOR THIS ARTICLES
              </span>
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
            </motion.a>
          </div>

          <motion.div className="relative col-span-12 aspect-[4/3] overflow-hidden rounded-sm border border-white/10 md:col-span-5" {...fadeUp(0.05)}>
            <Image
              src="/Projects/SAFAR/SAFAR_stephenbutkus11.jpg"
              alt="VOID feature — eyewear concept"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
            <span className="pointer-events-none absolute left-3 top-3 text-xl italic" style={{ color: ACCENT, textShadow: "0 1px 1px rgba(0,0,0,.45)" }}>
              Void Studio
            </span>
          </motion.div>

          <div className="col-span-12 md:col-span-3">
            <motion.div className="flex items-start justify-between" {...fadeUp(0.05)}>
              <a href="#more" className="text-sm font-semibold" style={{ color: ACCENT }}>
                SEE FOR THIS ARTICLES ↗
              </a>
              <span className="text-xs text-white/60">©99–25</span>
            </motion.div>
            <motion.p className="mt-4 text-sm leading-relaxed text-white/75" {...fadeUp(0.1)}>
              Born from the idea of blending minimalism with sophistication, our collections are designed
              for those who value quality, versatility, and confidence in every detail.
            </motion.p>
            <motion.div className="mt-4 grid grid-cols-2 gap-2" {...fadeUp(0.15)}>
              <Thumb src="/Projects/SAFAR/SAFAR_stephenbutkus7.jpg" />
              <Thumb src="/Projects/SAFAR/SAFAR_stephenbutkus4.jpg" />
            </motion.div>
          </div>
        </div>

        {/* Big overlapping headline */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
          <motion.h2 className="font-extrabold leading-[0.95] tracking-tight" style={{ fontSize: "clamp(28px, 7vw, 72px)" }} {...fadeUp(0.02)}>
            Designed for Real <span className="text-white">Life</span> — Comfort
          </motion.h2>
          <motion.div className="mt-2 text-4xl font-extrabold text-white/10 md:text-6xl" {...fadeUp(0.06)}>
            Meets Elegance
          </motion.div>
        </div>

        {/* Chips (only change the 3 cards) */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-6 md:px-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`relative rounded-full px-3 py-1 text-xs transition ${
                    isActive ? "bg-white text-black" : "border border-white/30 text-white/80 hover:border-white/60 hover:text-white"
                  }`}
                  aria-pressed={isActive}
                >
                  {cat}
                  {isActive && (
                    <motion.span
                      layoutId="chipGlow2"
                      className="pointer-events-none absolute inset-0 rounded-full"
                      style={{ boxShadow: "0 0 0 1px rgba(255,255,255,.3), 0 6px 18px rgba(255,255,255,.08)" }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Three cards in diagonal step */}
        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pb-16 pt-8 md:grid-cols-12 md:gap-8 md:px-8 md:pb-24">
          <AnimatePresence mode="popLayout">
            {cards.map((c, idx) => (
              <motion.article
                key={c.id + "-" + active}
                layout
                initial={{ y: 18, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                exit={{ y: 12, opacity: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] md:col-span-4
                  ${idx === 1 ? "md:mt-12 lg:mt-20" : ""} ${idx === 2 ? "md:mt-24 lg:mt-40" : ""}`}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={c.image}
                    alt={`${c.title} — ${c.subtitle || ""}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
                  {c.badge && <span className="pointer-events-none absolute bottom-3 right-3 text-3xl font-extrabold text-white/40">{c.badge}</span>}
                </div>

                <div className="pointer-events-none absolute left-0 top-0 p-4 sm:p-5">
                  <span className="rounded-full border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/80">
                    {c.tag}
                  </span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <h3 className="text-2xl font-extrabold leading-tight">
                    {c.title}
                    {c.subtitle ? <span className="block text-white/90">{c.subtitle}</span> : null}
                  </h3>

                  <p className="mt-2 max-w-sm text-xs text-white/80">
                    Features refined production, BTS stills, and editorial selects across the city series.
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <button
                      onClick={() => cycleIntoAnotherCategory(active, setActive, c.categories)}
                      className="inline-flex items-center text-sm font-semibold"
                      style={{ color: ACCENT }}
                    >
                      <span
                        className="bg-gradient-to-r from-transparent to-transparent bg-[length:0_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px]"
                        style={{ backgroundImage: `linear-gradient(${ACCENT},${ACCENT})` }}
                      >
                        VIEW IN {pickNextCategory(active, c.categories)}
                      </span>
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
                    </button>

                    {c.meta && <span className="text-[11px] uppercase tracking-widest text-white/60">{c.meta}</span>}
                  </div>
                </div>

                <span className="pointer-events-none absolute right-3 top-3 text-xl font-black leading-none opacity-70" style={{ color: ACCENT }}>
                  ✣
                </span>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom caption */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 text-sm text-white/70 md:px-8">
          We craft adaptable visuals that empower brands and talent — press a chip to re-contextualize the work.
        </div>
      </section>
    </div>
  );
}

/* --------------------------------- UI bits -------------------------------- */

function Thumb({ src }: { src: string }) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-sm border border-white/15">
      <Image src={src} alt="" fill sizes="140px" className="object-cover" />
    </div>
  );
}

/* ------------------------------- Helpers ---------------------------------- */

// Narrower type guard
function isNonAll(c: Category): c is NonAllCategory {
    return c !== "All";
  }

function pickNextCategory(current: Category, cardCats: ReadonlyArray<Category>): Category {
    const options = cardCats.filter(isNonAll); // NonAllCategory[]
    if (options.length === 0) return current;
  
    const idx = options.indexOf(current as NonAllCategory);
    const next = idx >= 0 ? options[(idx + 1) % options.length] : options[0];
    return next; // still compatible with Category
  }
  
  function cycleIntoAnotherCategory(
    current: Category,
    set: (c: Category) => void,
    cats: ReadonlyArray<Category>
  ) {
    set(pickNextCategory(current, cats));
  }
















// "use client";

// import Image from "next/image";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useTransform,
//   useReducedMotion,
// } from "framer-motion";
// import { useMemo, useRef, useState } from "react";

// /** Accent color (RAWLINE yellow) */
// const ACCENT = "#F9D84A";

// /* --------------------------- Data --------------------------- */

// const CATEGORIES = [
//   "All",
//   "Campaigns",
//   "BTS",
//   "Branding",
//   "Editorial",
//   "Motion",
//   "Design",
//   "Product",
// ] as const;
// type Category = (typeof CATEGORIES)[number];

// type Feature = {
//   title: string;
//   kicker: string;
//   image: string;
//   caption: string;
//   signature?: string;
// };

// const FEATURE_BY_CATEGORY: Record<Category, Feature> = {
//   All: {
//     title: "Designed for Real Life — Comfort",
//     kicker: "Summer Articles",
//     image: "/Projects/SAFAR/SAFAR_stephenbutkus11.jpg",
//     caption:
//       "Void editorial features curated to show where your brand can go — from rough cuts to polished launches.",
//     signature: "Void Studio",
//   },
//   Campaigns: {
//     title: "City Campaign — Momentum",
//     kicker: "Campaigns",
//     image: "/Projects/SAFAR/SAFAR_stephenbutkus1.jpg",
//     caption:
//       "Beginning → Middle → End storytelling across city locations with consistent creative direction.",
//     signature: "Void × SAFAR",
//   },
//   BTS: {
//     title: "Behind the Scenes — Process",
//     kicker: "BTS",
//     image: "/Projects/SAFAR/SAFAR_stephenbutkus7.jpg",
//     caption:
//       "Scouting, lighting tests, and team workflow — the craft behind the output.",
//     signature: "BTS Unit",
//   },
//   Branding: {
//     title: "Identity Systems — Cohesion",
//     kicker: "Branding",
//     image: "/Projects/SAFAR/SAFAR_stephenbutkus4.jpg",
//     caption:
//       "Type, motion, and color decisions that scale from social to out-of-home.",
//     signature: "Brand Lab",
//   },
//   Editorial: {
//     title: "Editorial Selects — Detail",
//     kicker: "Editorial",
//     image: "/Projects/SAFAR/SAFAR_stephenbutkus4.jpg",
//     caption:
//       "Focused frames and layout rhythm designed for long-form reads.",
//     signature: "Edit Suite",
//   },
//   Motion: {
//     title: "Motion Studies — Texture",
//     kicker: "Motion",
//     image: "/Projects/SAFAR/SAFAR_stephenbutkus11.jpg",
//     caption:
//       "Logo behaviors, kinetic type, and interstitials built for pace.",
//     signature: "Void Motion",
//   },
//   Design: {
//     title: "Design Systems — Scale",
//     kicker: "Design",
//     image: "/Projects/SAFAR/SAFAR_stephenbutkus4.jpg",
//     caption:
//       "Component libraries and layout rules that keep teams shipping fast.",
//     signature: "Design Ops",
//   },
//   Product: {
//     title: "Product Focus — Clarity",
//     kicker: "Product",
//     image: "/Projects/SAFAR/SAFAR_stephenbutkus1.jpg",
//     caption:
//       "Hero images and landing flows that convert without noise.",
//     signature: "Studio Build",
//   },
// };

// type CardItem = {
//   id: string;
//   tag: string;
//   title: string;
//   subtitle?: string;
//   image: string;
//   categories: Category[];
// };

// const ALL_CARDS: CardItem[] = [
//   {
//     id: "c1",
//     tag: "[ SERIES ]",
//     title: "Campaign BTS",
//     subtitle: "The Porter Off-Race",
//     image: "/Projects/SAFAR/SAFAR_stephenbutkus1.jpg",
//     categories: ["All", "Campaigns", "BTS", "Editorial", "Product"],
//   },
//   {
//     id: "c2",
//     tag: "[ COLLECTION ]",
//     title: "Explore",
//     subtitle: "Off Race Autumn",
//     image: "/Projects/SAFAR/SAFAR_stephenbutkus4.jpg",
//     categories: ["All", "Editorial", "Branding", "Design"],
//   },
//   {
//     id: "c3",
//     tag: "[ PORTRAIT ]",
//     title: "Portrait Series",
//     subtitle: "City Comfort",
//     image: "/Projects/SAFAR/SAFAR_stephenbutkus7.jpg",
//     categories: ["All", "BTS", "Campaigns", "Motion"],
//   },
// ];

// /* ------------------------- Component ------------------------ */

// export default function FeatureCollectionsVoidAdaptive() {
//   const [active, setActive] = useState<Category>("All");
//   const feature = FEATURE_BY_CATEGORY[active];

//   const sectionRef = useRef<HTMLElement>(null);
//   const prefersReduced = useReducedMotion();

//   // subtle background parallax for ghost text
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ["start 80%", "end 20%"],
//   });
//   const ghostY = useTransform(scrollYProgress, [0, 1], [0, -40]);

//   const filteredCards = useMemo(
//     () => ALL_CARDS.filter((c) => c.categories.includes(active)),
//     [active]
//   );

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.08, when: "beforeChildren" },
//     },
//   };
//   const item = {
//     hidden: { y: 16, opacity: 0 },
//     show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full overflow-hidden bg-black text-white"
//     >
//       {/* frame lines */}
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
//         <div className="absolute inset-y-0 left-0 w-px bg-white/10" />
//         <div className="absolute inset-y-0 right-0 w-px bg-white/10" />
//         <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
//       </div>

//       {/* ghost background type */}
//       <motion.div
//         aria-hidden
//         style={prefersReduced ? {} : { y: ghostY }}
//         className="pointer-events-none absolute left-[-6%] top-[8%] z-0 select-none opacity-[0.06]"
//       >
//         <p
//           className="font-extrabold leading-none tracking-tight"
//           style={{ fontSize: "min(36vw, 520px)", letterSpacing: "-0.02em" }}
//         >
//           VOID
//         </p>
//       </motion.div>

//       {/* top grid: label / feature / meta */}
//       <motion.div
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.3 }}
//         className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 gap-8 px-4 pt-16 md:px-8 md:pt-24"
//       >
//         {/* left label */}
//         <motion.div variants={item} className="col-span-12 md:col-span-4">
//           <p className="text-xs uppercase tracking-wider text-white/70">[ Collections ]</p>
//           <div className="mt-4 max-w-xs">
//             <span className="text-4xl font-extrabold">{feature.kicker}</span>
//             <div className="text-lg font-medium text-white/70">Void</div>
//           </div>
//         </motion.div>

//         {/* center: feature image (adaptive) */}
//         <motion.div
//           variants={item}
//           className="relative col-span-12 aspect-[4/3] overflow-hidden rounded-sm border border-white/10 md:col-span-5"
//         >
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={feature.image}
//               initial={{ opacity: 0, scale: 1.02 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.98 }}
//               transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//               className="absolute inset-0"
//             >
//               <Image
//                 src={feature.image}
//                 alt={feature.title}
//                 fill
//                 sizes="(max-width: 768px) 100vw, 45vw"
//                 className="object-cover"
//                 priority={false}
//               />
//               <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/25" />
//               {feature.signature && (
//                 <span
//                   className="pointer-events-none absolute left-3 top-3 text-xl italic"
//                   style={{ color: ACCENT, textShadow: "0 1px 1px rgba(0,0,0,.45)" }}
//                 >
//                   {feature.signature}
//                 </span>
//               )}
//             </motion.div>
//           </AnimatePresence>
//         </motion.div>

//         {/* right meta */}
//         <motion.div variants={item} className="col-span-12 md:col-span-3">
//           <p className="text-sm leading-relaxed text-white/75">{feature.caption}</p>
//           <div className="mt-4 grid grid-cols-2 gap-2">
//             {/* reuse two thumbs; you can rotate per category if you like */}
//             <Thumb src="/Projects/SAFAR/SAFAR_stephenbutkus7.jpg" />
//             <Thumb src="/Projects/SAFAR/SAFAR_stephenbutkus4.jpg" />
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* overlapping headline */}
//       <motion.div
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.3 }}
//         className="relative z-10 mx-auto max-w-7xl px-4 md:px-8"
//       >
//         <AnimatePresence mode="wait">
//           <motion.h2
//             key={feature.title}
//             variants={item}
//             initial={{ y: 18, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: -10, opacity: 0 }}
//             transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
//             className="font-extrabold leading-[0.95] tracking-tight"
//             style={{ fontSize: "clamp(28px, 7vw, 72px)" }}
//           >
//             {feature.title}
//           </motion.h2>
//         </AnimatePresence>
//         <motion.div variants={item} className="mt-2 text-4xl font-extrabold text-white/10 md:text-6xl">
//           Meets Elegance
//         </motion.div>
//       </motion.div>

//       {/* filter chips */}
//       <div className="relative z-10 mx-auto max-w-7xl px-4 pt-6 md:px-8">
//         <div className="flex flex-wrap gap-2">
//           {CATEGORIES.map((cat) => {
//             const activeState = active === cat;
//             return (
//               <button
//                 key={cat}
//                 onClick={() => setActive(cat)}
//                 className={`relative rounded-full px-3 py-1 text-xs transition ${
//                   activeState
//                     ? "bg-white text-black"
//                     : "border border-white/30 text-white/80 hover:border-white/60 hover:text-white"
//                 }`}
//                 aria-pressed={activeState}
//               >
//                 {cat}
//                 {activeState && (
//                   <motion.span
//                     layoutId="chipGlow"
//                     className="pointer-events-none absolute inset-0 rounded-full"
//                     style={{ boxShadow: "0 0 0 1px rgba(255,255,255,.3), 0 6px 18px rgba(255,255,255,.08)" }}
//                   />
//                 )}
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* cards grid (adaptive & animated) */}
//       <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pb-16 pt-8 md:grid-cols-12 md:gap-8 md:px-8 md:pb-24">
//         <AnimatePresence mode="popLayout">
//           {filteredCards.map((c) => (
//             <motion.article
//               key={c.id}
//               layout
//               initial={{ y: 16, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 12, opacity: 0 }}
//               transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
//               className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] md:col-span-4"
//             >
//               <div className="relative aspect-[4/5] w-full overflow-hidden">
//                 <Image
//                   src={c.image}
//                   alt={`${c.title} — ${c.subtitle || ""}`}
//                   fill
//                   sizes="(max-width: 768px) 100vw, 33vw"
//                   className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
//               </div>

//               {/* tag pill */}
//               <div className="pointer-events-none absolute left-0 top-0 p-4 sm:p-5">
//                 <span className="rounded-full border border-white/20 px-2 py-0.5 text-[10px] uppercase tracking-wider text-white/80">
//                   {c.tag}
//                 </span>
//               </div>

//               {/* text block */}
//               <div className="absolute inset-0 flex flex-col justify-end p-5">
//                 <h3 className="text-2xl font-extrabold leading-tight">
//                   {c.title}
//                   {c.subtitle ? <span className="block text-white/90">{c.subtitle}</span> : null}
//                 </h3>

//                 <p className="mt-2 max-w-sm text-xs text-white/80">
//                   Features refined production, BTS stills, and editorial selects across the city series.
//                 </p>

//                 <div className="mt-4 flex items-center justify-between">
//                   <button
//                     onClick={() => setActive(nextCategoryFromCard(c.categories))}
//                     className="inline-flex items-center text-sm font-semibold"
//                     style={{ color: ACCENT }}
//                   >
//                     <span
//                       className="bg-gradient-to-r from-transparent to-transparent bg-[length:0_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_2px]"
//                       style={{ backgroundImage: `linear-gradient(${ACCENT},${ACCENT})` }}
//                     >
//                       VIEW IN {nextCategoryFromCard(c.categories)}
//                     </span>
//                     <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
//                   </button>

//                   {/* decorative price-like meta */}
//                   <span className="text-[11px] uppercase tracking-widest text-white/60">
//                     {metaForCard(c.id)}
//                   </span>
//                 </div>
//               </div>

//               {/* corner glyph */}
//               <span className="pointer-events-none absolute right-3 top-3 text-xl font-black leading-none opacity-70" style={{ color: ACCENT }}>
//                 ✣
//               </span>
//             </motion.article>
//           ))}
//         </AnimatePresence>
//       </div>

//       {/* bottom caption */}
//       <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 text-sm text-white/70 md:px-8">
//         Adaptive section — press any chip above to re-contextualize the feature and cards.
//       </div>
//     </section>
//   );
// }

// /* ----------------------- Small helpers ---------------------- */

// function Thumb({ src }: { src: string }) {
//   return (
//     <div className="relative aspect-square overflow-hidden rounded-sm border border-white/15">
//       <Image src={src} alt="" fill sizes="140px" className="object-cover" />
//     </div>
//   );
// }

// function nextCategoryFromCard(categories: Category[]): Category {
//   // pick the first non-"All" category for the "VIEW IN ..." button
//   const first = categories.find((c) => c !== "All");
//   return (first || "All") as Category;
// }

// function metaForCard(id: string) {
//   if (id === "c1") return "[$816.00]";
//   if (id === "c2") return "[Winter 2025]";
//   if (id === "c3") return "[$316.00]";
//   return "";
// }
