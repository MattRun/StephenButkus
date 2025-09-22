"use client";

import { useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent, type MotionValue } from "framer-motion";
import Image from "next/image";

/**
 * PinnedVisualProcess (lint-safe)
 * - Fixed overlay pin
 * - Scene A: zoom hero
 * - Scene B: horizontal rail, center card scales
 * - Scene C: full-bleed pan/zoom + copy
 */

// Small custom hook to create a clamped 0..1 segment from a progress MV
function useSegment(progress: MotionValue<number>, start: number, end: number) {
  return useTransform(progress, [start, end], [0, 1], { clamp: true });
}

export default function PinnedVisualProcess() {
  // Tall spacer that defines the pin duration
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end start"], // 0 when wrapper hits top; 1 when wrapper bottom hits top
  });

  // Only show overlay while within the spacer
  const [pinned, setPinned] = useState(false);
  useMotionValueEvent(scrollYProgress, "change", (v) => setPinned(v > 0 && v < 1));

  // Unsplash images
  const imgs = useMemo(
    () => ({
      a: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=80",
      b: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=80",
      c: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2400&q=80",
      d: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=2400&q=80",
    }),
    []
  );

  // Segments
  const tA = useSegment(scrollYProgress, 0.0, 0.33);
  const tB = useSegment(scrollYProgress, 0.33, 0.66);
  const tC = useSegment(scrollYProgress, 0.66, 1.0);

  // Scene A
  const aScale = useTransform(tA, [0, 1], [1, 1.18]);
  const aTextO = useTransform(tA, [0, 0.15, 0.8, 1], [0, 1, 1, 0]);
  const aTextY = useTransform(tA, [0, 1], ["8%", "0%"]);

  // Bridge B→C (last card smooth zoom to full bleed)
  const zoomBridge = useSegment(scrollYProgress, 0.58, 0.68);
  const bridgeScale = useTransform(zoomBridge, [0, 1], [1, 1.12]);
  const bridgeRadius = useTransform(zoomBridge, [0, 1], [24, 0]);

  // Scene C
  const cScale = useTransform(tC, [0, 1], [1.05, 1.18]);
  const cY = useTransform(tC, [0, 1], ["10%", "-10%"]);
  const cTextO = useTransform(tC, [0, 0.15], [0, 1]);
  const cBadgeO = useTransform(tC, [0.1, 0.3], [0, 1]);

  // Subtle backdrop motion
  const bgY = useTransform(scrollYProgress, [0, 1], ["-3%", "4%"]);

  return (
    <>
      {/* Spacer controls how long the stage is pinned */}
      <div ref={wrapRef} className="relative h-[360vh]" />

      {/* Fixed overlay */}
      <motion.section
        className="fixed inset-0 z-[40]"
        style={{
          opacity: pinned ? 1 : 0,
          visibility: pinned ? "visible" : "hidden",
          pointerEvents: pinned ? "auto" : "none",
        }}
        aria-hidden={!pinned}
      >
        {/* THEME BACKDROP */}
        <motion.div className="absolute inset-0 -z-10" style={{ y: bgY }} aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e3d60] via-[#124a78] to-[#0e3d60]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_15%,rgba(255,255,255,0.10),transparent)]" />
        </motion.div>

        {/* ===== Scene A ===== */}
        <motion.div className="absolute inset-0" style={{ opacity: useTransform(tA, [0, 1], [1, 0.2]) }}>
          <motion.div className="absolute inset-0" style={{ scale: aScale }}>
            <Image src={imgs.a} alt="Hero visual" fill priority sizes="100vw" className="object-cover" />
          </motion.div>

          <motion.div
            style={{ opacity: aTextO, y: aTextY }}
            className="absolute left-6 right-6 top-[12vh] md:left-12 md:right-auto md:max-w-xl"
          >
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm md:p-6">
              <p className="text-xs uppercase tracking-[0.12em] text-sky-100/80 md:text-sm">Our Process</p>
              <h2 className="mt-1 text-4xl font-semibold leading-[1.05] text-white md:text-6xl">Start with clarity.</h2>
              <p className="mt-2 text-sm text-white/85 md:text-base">
                We scope fast and focus on what matters—so every next step is obvious.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ===== Scene B (rail) ===== */}
        <motion.div className="absolute inset-0" style={{ opacity: useTransform(tB, [0, 1], [1, 1]) }}>
          <div className="absolute left-1/2 top-1/2 h-[66vh] w-[92vw] -translate-x-1/2 -translate-y-1/2 sm:w-[86vw] md:w-[80vw]">
            {[imgs.b, imgs.c, imgs.d].map((src, i) => (
              <RailCard
                key={src}
                i={i}
                src={src}
                tB={tB}
                bridgeScale={bridgeScale}
                bridgeRadius={bridgeRadius}
              />
            ))}
          </div>
        </motion.div>

        {/* ===== Scene C ===== */}
        <motion.div className="absolute inset-0" style={{ opacity: tC }}>
          <motion.div className="absolute inset-0" style={{ scale: cScale, y: cY }}>
            <Image src={imgs.d} alt="Outcome visual" fill sizes="100vw" className="object-cover" />
          </motion.div>

          <motion.div style={{ opacity: cBadgeO }} className="absolute left-6 top-[8vh] md:left-12">
            <span className="inline-block rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs text-white backdrop-blur-sm md:text-sm">
              Accredited · Fast turnaround
            </span>
          </motion.div>

          <motion.div
            style={{ opacity: cTextO }}
            className="absolute bottom-[12vh] left-6 right-6 md:left-12 md:right-auto md:max-w-xl"
          >
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm md:p-6">
              <h2 className="text-4xl font-semibold leading-[1.05] text-white md:text-6xl">Results you can act on.</h2>
              <p className="mt-2 text-sm text-white/85 md:text-base">
                Clear recommendations and defensible documentation—delivered without the noise.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}

/** One card in the rail (hooks live at the top level of this component) */

function RailCard({
  i,
  src,
  tB,
  bridgeScale,
  bridgeRadius,
}: {
  i: number;
  src: string;
  tB: MotionValue<number>;
  bridgeScale: MotionValue<number>;
  bridgeRadius: MotionValue<number>;
}) {
  // Slide position: [-100,0,+100]vw, moving left across the segment
  const x = useTransform(tB, (v) => `${(i - 1) * 100 - v * 100}vw`);

  // Base scale (center card is largest)
  const sBase = useTransform(tB, (v) => {
    const centerIndex = v < 0.5 ? 1 : 2;
    const closeness = 1 - Math.min(1, Math.abs(i - centerIndex));
    return 0.92 + closeness * 0.13;
  });

  // ✅ Always call useTransform; choose which MV to use afterwards
// Combine the base scale with the bridge zoom (last card only)
const sCombined = useTransform([sBase, bridgeScale], (latest) => {
  const sb = latest[0] as number;
  const br = latest[1] as number;
  return sb * br;
});

  const scale = i === 2 ? sCombined : sBase;

  // Shadow strongest on the centered card
  const shadow = useTransform(tB, (v) => {
    const centerIndex = v < 0.5 ? 1 : 2;
    const closeness = 1 - Math.min(1, Math.abs(i - centerIndex));
    const alpha = 0.15 + 0.35 * closeness;
    return `0 40px 80px rgba(0,0,0,${alpha})`;
  });

  // Border radius flattens only for the last card during the bridge
  const borderRadius: number | MotionValue<number> = i === 2 ? bridgeRadius : 24;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-white"
      style={{ x, scale, boxShadow: shadow, width: "64vw", height: "66vh", borderRadius }}
    >
      <Image
        src={src}
        alt={`Step ${i + 1}`}
        fill
        sizes="(max-width: 768px) 92vw, 64vw"
        className="object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-4 left-5 right-5 text-white drop-shadow">
        <h3 className="text-2xl font-semibold md:text-3xl">
          {i === 0 && "Inspect with intent"}
          {i === 1 && "Sample with precision"}
          {i === 2 && "Report with confidence"}
        </h3>
      </div>
    </motion.div>
  );
}
