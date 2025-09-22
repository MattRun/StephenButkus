"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";

/**
 * RecentFeatureVoid — Editorial feature block for VOID
 * - Left column: meta (label, copy, CTA, thumb, dots)
 * - Right column: GIANT headline overlapping an image
 * - NEW: Full-height transparent figure on the LEFT background
 *        (/Projects/SAFAR/Masked_Transparent_Man.png)
 *        with parallax and a soft right fade (mask)
 * - Mobile-first, reversible scroll motion, reduced-motion safe
 */

const ACCENT = "#F9D84A";

export default function RecentFeatureVoid() {
  const ref = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  // Scroll progress for reversible animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 25%"],
  });

  // Headline & image glide
  const hY = useTransform(scrollYProgress, [0, 1], [12, -8]);
  const imgY = useTransform(scrollYProgress, [0, 1], [10, -6]);
  const hO = useTransform(scrollYProgress, [0.05, 0.25], [0, 1]);
  const imgO = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  // LEFT background figure parallax + subtle opacity rise
  const figY = useTransform(scrollYProgress, [0, 1], [18, -10]);
  const figO = useTransform(scrollYProgress, [0, 0.25], [0.05, 0.22]); // gentle, stays behind

  return (
    <section ref={ref} className="relative w-full bg-black text-white">
      {/* framing lines */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/10" />
      {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" /> */}

      {/* ===== LEFT-SIDE BACKGROUND FIGURE (decorative) ===== */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-0 w-[60%] sm:w-[52%] md:w-[44%]"
        style={
          prefersReduced
            ? { opacity: 0.16 }
            : { y: figY, opacity: figO }
        }
      >
        <div className="relative h-full w-full">
          <Image
            src="/Projects/SAFAR/Masked_Transparent_Man.png"
            alt=""
            fill
            priority={false}
            sizes="(max-width: 768px) 60vw, 40vw"
            className="object-contain object-left"
          />
          {/* fade the figure as it approaches center so it doesn't clash with content */}
          <div
            className="absolute inset-0"
            style={{
              // mask the right edge (supported by modern browsers)
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 45%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 45%, rgba(0,0,0,0) 100%)",
              mixBlendMode: "screen",
            }}
          />
        </div>
      </motion.div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 gap-8 px-4 py-16 md:px-8 md:py-24">
        {/* LEFT META */}
        <div className="col-span-12 md:col-span-4">
          <p className="text-xs uppercase tracking-wider text-white/70">[ Recent Projects ]</p>

          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/75">
            We connect brands and talent with our core team to ship beginning–middle–end
            stories. Here’s a feature from our <span className="font-medium">SAFAR</span> series.
          </p>

          <div className="mt-6">
            <a
              href="projects"
              className="group inline-flex items-center text-sm font-semibold"
              style={{ color: ACCENT }}
            >
              <span
                className="bg-gradient-to-r from-transparent to-transparent bg-[length:0_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]"
                style={{ backgroundImage: `linear-gradient(${ACCENT},${ACCENT})` }}
              >
                SEE ALL PROJECTS
              </span>
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">↗</span>
            </a>
          </div>

          <div className="mt-8 w-24">
            <div className="relative h-16 w-24 overflow-hidden rounded-sm border border-white/15">
              <Image
                src="/Projects/SAFAR/SAFAR_stephenbutkus12.jpg"
                alt="Void / SAFAR thumb"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            {/* dots */}
            <div className="mt-6 flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} />
              <span className="inline-block h-2 w-2 rounded-full bg-white/30" />
              <span className="inline-block h-2 w-2 rounded-full bg-white/30" />
            </div>
          </div>
        </div>

        {/* VERTICAL DIVIDER (desktop) */}
        <div className="relative col-span-12 hidden md:col-span-1 md:block">
          <div className="pointer-events-none absolute right-1/2 top-0 h-full w-px translate-x-1/2 bg-white/10" />
        </div>

        {/* RIGHT FEATURE */}
        <div className="relative col-span-12 md:col-span-7">
          {/* Giant headline overlapping the image */}
          <motion.h3
            className="z-10 font-extrabold leading-[0.9] tracking-tight"
            style={{
              fontSize: "clamp(48px, 10vw, 120px)",
              y: prefersReduced ? 0 : hY,
              opacity: prefersReduced ? 1 : hO,
            }}
          >
            <span className="block">VOID</span>
            <span className="block">CITY</span>
            <span className="block">SERIES</span>
          </motion.h3>

          {/* Image card aligned right; headline sits over top-left */}
          <motion.div
            className="relative mt-2 ml-auto aspect-[4/3] w-full overflow-hidden rounded-sm border border-white/10 md:w-[85%]"
            style={{
              y: prefersReduced ? 0 : imgY,
              opacity: prefersReduced ? 1 : imgO,
            }}
          >
            <Image
              src="/Projects/SAFAR/SAFAR_stephenbutkus9.jpg"
              alt="VOID City Series — SAFAR"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/20" />
            {/* Yellow corner glyphs */}
            <span className="pointer-events-none absolute right-4 top-4 text-xl font-black leading-none" style={{ color: ACCENT }}>
              ✣
            </span>
            <span className="pointer-events-none absolute left-4 bottom-4 text-xl font-black leading-none" style={{ color: ACCENT }}>
              ✣
            </span>
          </motion.div>

          {/* Body copy under image */}
          <motion.p
            className="mt-4 max-w-xl text-sm leading-relaxed text-white/75 md:ml-[15%]"
            style={{ opacity: prefersReduced ? 1 : imgO }}
          >
            Narrative campaign exploring motion, texture, and contrast. From scouting to post,
            we mapped a clear beginning → middle → end to move the story forward.
          </motion.p>

          {/* Signature */}
          <motion.span
            className="mt-2 block text-right text-2xl italic"
            style={{ color: ACCENT, opacity: prefersReduced ? 1 : imgO }}
          >
            Void × SAFAR
          </motion.span>
        </div>
      </div>
    </section>
  );
}
