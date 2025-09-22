"use client";

import { motion } from "framer-motion";

/**
 * TickerStrip — editorial scrolling band
 * - Full-width accent background (yellow by default)
 * - Repeating marquee text
 * - Mobile-first, reduced motion safe
 */

const ACCENT = "#F9D84A"; // bright yellow
const DARK = "#0A0A0A";   // background text color

export default function TickerStrip() {
  return (
    <section
      className="relative z-10 h-10 w-full overflow-hidden"
      style={{ backgroundColor: ACCENT, color: DARK }}
      aria-label="Ticker strip"
    >
      <div className="absolute inset-0 flex items-center">
        <motion.div
          className="flex whitespace-nowrap text-[12px] font-semibold tracking-widest uppercase"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
        >
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="mx-6 inline-flex items-center gap-3">
              <span>✺ For Brands</span>
              <span>• For Talent</span>
              <span>• For Culture</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Reduced motion fallback */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          section[aria-label="Ticker strip"] div > div {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
