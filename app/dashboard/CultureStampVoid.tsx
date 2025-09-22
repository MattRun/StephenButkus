"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const ACCENT = "#F9D84A";

export default function CultureStampVoid() {
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { y: prefersReduced ? 0 : 18, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, amount: 0.35 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  });

  return (
    <section
      className="relative w-full bg-white text-black"
      aria-labelledby="culture-stamp-heading"
    >
      {/* light frame lines for that editorial feel */}
      <div className="pointer-events-none absolute inset-0">
        {/* <div className="absolute inset-x-0 top-0 h-px bg-neutral-200" /> */}
        <div className="absolute inset-y-0 left-0 w-px bg-neutral-200" />
        <div className="absolute inset-y-0 right-0 w-px bg-neutral-200" />
        {/* <div className="absolute inset-x-0 bottom-0 h-px bg-neutral-200" /> */}
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-4 py-16 md:px-8 md:py-24">
        {/* Left: rounded visual */}
        <motion.div
          className="col-span-12 md:col-span-5"
          {...fadeUp(0)}
        >
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-neutral-200 shadow-[0_10px_40px_rgba(0,0,0,.06)]">
            <Image
              src="/Projects/SAFAR/SAFAR_stephenbutkus1.jpg"
              alt="VOID — city series still"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
              priority={false}
            />
          </div>
        </motion.div>

        {/* Right: mark + copy */}
        <div className="col-span-12 md:col-span-7">
          {/* big typographic mark */}
          <motion.h2
            id="culture-stamp-heading"
            className="font-extrabold leading-none tracking-tight"
            style={{ fontSize: "clamp(36px, 10vw, 112px)" }}
            {...fadeUp(0.05)}
          >
            <span className="inline-block align-top">©99–25</span>
          </motion.h2>

          {/* bracket label */}
          <motion.div
            className="mt-3 flex items-center gap-3 text-xs uppercase tracking-wider text-neutral-500"
            {...fadeUp(0.12)}
          >
            <span
              className="inline-grid h-5 w-5 place-items-center rounded-sm"
              style={{ color: ACCENT }}
              aria-hidden
            >
              ✣
            </span>
            <span className="text-[11px]">[ From the city, for the culture ]</span>
          </motion.div>

          {/* bold lead + grey continuation */}
          <motion.p
            className="mt-6 max-w-2xl text-lg leading-relaxed"
            {...fadeUp(0.18)}
          >
            <span className="font-extrabold text-neutral-900">
              Born from the idea of blending minimalism with sophistication,
            </span>{" "}
            <span className="text-neutral-500">
              VOID crafts photography, motion, and brand systems for those who
              value quality, versatility, and confidence in every detail.
            </span>
          </motion.p>

          {/* small meta row */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4 text-sm text-neutral-600"
            {...fadeUp(0.24)}
          >
            <span className="inline-flex items-center gap-2">
              <i
                className="inline-block h-2 w-2 rounded-full"
                style={{ backgroundColor: ACCENT }}
                aria-hidden
              />
              Established • VOID Studio
            </span>
            <span className="hidden h-4 w-px bg-neutral-200 md:inline-block" />
            <span className="opacity-70">Beginning → Middle → End storytelling</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
