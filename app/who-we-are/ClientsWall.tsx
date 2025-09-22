"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ACCENT = "#F9D84A";

type Client = {
  name: string;
  logo?: string; // /public path (svg/png). If missing, name is rendered as text.
};

const CLIENTS: Client[] = [
  { name: "FPM Milano", logo: "/clients/fpm.svg" },
  { name: "Tocco Toscano", logo: "/clients/tocco-toscano.svg" },
  { name: "NA-KD", logo: "/clients/nakd.svg" },
  { name: "Samsung", logo: "/clients/samsung.svg" },
  { name: "Komono", logo: "/clients/komono.svg" },
  { name: "Famme", logo: "/clients/famme.svg" },
  { name: "Bingo Sports", logo: "/clients/bingo-sports.svg" },
  { name: "Blacksaw", logo: "/clients/blacksaw.svg" },
  { name: "The Thief", logo: "/clients/the-thief.svg" },
  { name: "H&M", logo: "/clients/hm.svg" },
  { name: "WESC", logo: "/clients/wesc.svg" },
  { name: "Red Bull", logo: "/clients/redbull.svg" },
  { name: "Amazuïn", logo: "/clients/amazuin.svg" },
  { name: "Florence", logo: "/clients/florence.svg" },
];

const fadeUp = (delay = 0) => ({
  initial: { y: 18, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
});

export default function ClientsWall({
  title = "OUR CLIENTS",
  note = "Selected collaborations",
}: {
  title?: string;
  note?: string;
}) {
  return (
    <section className="relative w-full bg-black text-white">
      {/* frame lines */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="mb-8 flex items-end justify-between">
          <motion.h2
            className="text-2xl font-extrabold tracking-[0.18em] text-white/90 md:text-3xl"
            {...fadeUp(0)}
          >
            {title}
          </motion.h2>
          <motion.div className="hidden items-center gap-2 md:flex" {...fadeUp(0.05)}>
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
            <span className="text-xs uppercase tracking-widest text-white/60">
              {note}
            </span>
          </motion.div>
        </div>

        {/* grid */}
        <motion.ul
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          {...fadeUp(0.08)}
          aria-label="Client logos"
        >
          {CLIENTS.map((c) => (
            <li key={c.name}>
              <div className="group relative flex h-28 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur transition hover:border-white/25 hover:bg-white/[0.06]">
                {/* glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(240px 120px at 50% 50%, rgba(255,255,255,0.06), transparent 60%)",
                  }}
                />
                {c.logo ? (
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={220}
                    height={80}
                    className="max-h-[56px] w-auto opacity-90 invert"
                    style={{ filter: "grayscale(1) brightness(1.1)" }}
                  />
                ) : (
                  <span className="text-sm font-semibold tracking-wide text-white/85">
                    {c.name}
                  </span>
                )}
              </div>
            </li>
          ))}
        </motion.ul>

        {/* mobile marquee (optional eye-candy) */}
        <motion.div
          className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-3 md:hidden"
          {...fadeUp(0.12)}
        >
          <div className="flex animate-[marquee_22s_linear_infinite] gap-6">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <div key={c.name + i} className="flex h-14 w-[42vw] items-center justify-center">
                {c.logo ? (
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={160}
                    height={40}
                    className="max-h-8 w-auto opacity-80 invert"
                    style={{ filter: "grayscale(1) brightness(1.1)" }}
                  />
                ) : (
                  <span className="text-xs text-white/80">{c.name}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* little caption */}
        <motion.p
          className="mt-6 text-center text-xs text-white/50"
          {...fadeUp(0.14)}
        >
          Logos shown for identification only. All marks are property of their respective owners.
        </motion.p>
      </div>

      {/* marquee keyframes */}
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
