// app/marketing/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

/**
 * MARKETING — VOID/Creatives
 * - Hero with framed, editorial headline + barcode motif
 * - Capability tiles (photos/video/branding) with hover reveals
 * - Proof/metrics strip
 * - Clients wall (names or swap to logos)
 * - Process ribbon
 * - Big CTA
 *
 * Uses only Next/Image + Framer Motion (already in your project).
 */

const ACCENT = "#F9D84A";

export default function MarketingPage() {
  const prefersReduced = useReducedMotion();
  const fadeUp = (delay = 0) => ({
    initial: { y: 18, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true, amount: 0.35 },
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  });

  return (
    <main className="bg-black text-white">
      {/* ---------- HERO ---------- */}
      <section className="relative min-h-[90svh] w-full overflow-hidden">
        <HeroBackground reduced={!!prefersReduced} />

        <div className="relative z-10 mx-auto flex min-h-[90svh] max-w-7xl flex-col items-start justify-center px-4 md:px-8">
          <motion.div
            className="inline-block rounded-[18px] border border-white/20 bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-[0.22em]"
            {...fadeUp(0)}
          >
            for brands & talent
          </motion.div>

          <motion.h1
            className="mt-4 max-w-3xl font-extrabold leading-[0.96] tracking-tight"
            style={{ fontSize: "clamp(40px, 8vw, 88px)" }}
            {...fadeUp(0.05)}
          >
            Elevate your{" "}
            <span className="text-white">Product Visibility</span>
          </motion.h1>

          <motion.p
            className="mt-3 max-w-xl text-white/85 md:text-lg"
            {...fadeUp(0.1)}
          >
            Visual systems that sell: campaign images, e-com sets, editorial
            stories and motion that move culture—end-to-end.
          </motion.p>

          <motion.div className="mt-7 flex flex-col gap-3 sm:flex-row" {...fadeUp(0.15)}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95"
            >
              Start a Project
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
            >
              See Work
            </Link>
          </motion.div>

          {/* Framed tile + barcode accent (IG vibe) */}
          <motion.div
            className="mt-10 rounded-xl border border-white/25 p-4 sm:p-5"
            {...fadeUp(0.2)}
          >
            <div className="flex items-center justify-between gap-6">
              <span className="text-sm text-white/70">VOID FRAME 450197</span>
              <Barcode />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- CAPABILITIES GRID ---------- */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <header className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">
              services
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              What we do — end to end
            </h2>
          </div>
          <Link
            href="/services"
            className="hidden text-sm font-semibold text-white/80 hover:text-white md:block"
            style={{ color: ACCENT }}
          >
            All Services ↗
          </Link>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <CapabilityCard
            className="md:col-span-5"
            title="Product Photography"
            subtitle="E-com, editorial, campaign sets"
            image="/Projects/SAFAR/SAFAR_stephenbutkus1.jpg"
            bullets={["E-com kits", "Macro/texture", "Lifestyle sets"]}
          />
          <CapabilityCard
            className="md:col-span-7"
            title="Campaigns"
            subtitle="Narratives that travel further"
            image="/Projects/SAFAR/SAFAR_stephenbutkus11.jpg"
            bullets={["Lookbooks", "OOH + social", "Toolkits"]}
          />

          <CapabilityCard
            className="md:col-span-7"
            title="Motion"
            subtitle="Micro spots, loops, BTS"
            image="/Projects/SAFAR/SAFAR_stephenbutkus7.jpg"
            bullets={["Short-form", "Social cuts", "Sound design"]}
          />
          <CapabilityCard
            className="md:col-span-5"
            title="Brand & Design"
            subtitle="Identity & content systems"
            image="/Projects/SAFAR/SAFAR_stephenbutkus4.jpg"
            bullets={["Identity kits", "Art direction", "Content ops"]}
          />
        </div>
      </section>

      {/* ---------- METRICS / PROOF ---------- */}
      <section className="mx-3 rounded-3xl border border-white/10 bg-white/[0.04] py-10 shadow-[0_8px_40px_rgba(0,0,0,.25)] md:mx-6">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 text-center md:grid-cols-4 md:px-8">
          {[
            ["120+", "Shoots delivered"],
            ["3–5d", "Typical turnaround"],
            ["98%", "Client retention"],
            ["12M+", "Cumulative views"],
          ].map(([k, v], i) => (
            <motion.div
              key={k}
              className="rounded-2xl border border-white/10 bg-black/40 px-4 py-6"
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
            >
              <div className="text-3xl font-extrabold">{k}</div>
              <div className="mt-1 text-sm text-white/70">{v}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------- CLIENTS WALL ---------- */}
      <section className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">
              partners
            </p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Our Clients
            </h3>
          </div>
          <div className="text-xs text-white/60">
            Selected logos we’ve worked with
          </div>
        </div>

        <ClientsWall />
      </section>

      {/* ---------- PROCESS RIBBON ---------- */}
      <section className="mx-3 mb-6 rounded-3xl border border-white/10 bg-white/[0.03] md:mx-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch md:grid-cols-12">
          <div className="relative col-span-5 hidden overflow-hidden rounded-l-3xl md:block">
            <Image
              src="/Projects/SAFAR/SAFAR_stephenbutkus12.jpg"
              alt=""
              fill
              sizes="40vw"
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/10 to-transparent" />
          </div>
          <div className="col-span-7 p-6 md:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">
              process
            </p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              From brief → launch
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                ["Discover", "Clarity on objectives, audience, cadence."],
                ["Plan", "Shot lists, art direction, logistics, crew."],
                ["Produce", "Capture day(s), live review, on-set agility."],
                ["Deliver", "Edits, masters, toolkits—ready to deploy."],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="mb-1 text-sm font-semibold" style={{ color: ACCENT }}>
                    {t}
                  </div>
                  <div className="text-sm text-white/80">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- BIG CTA ---------- */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 md:px-8 md:pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-10">
          <div className="absolute inset-0 opacity-[0.06]" style={{ mixBlendMode: "screen", background: "radial-gradient(90% 60% at 50% -10%, rgba(255,255,255,0.9), transparent 60%)" }} />
          <div className="relative">
            <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Let’s build the visuals your market remembers.
            </h3>
            <p className="mt-2 max-w-2xl text-white/80">
              Send us a brief (or even just a feeling). We’ll come back with an efficient plan and the right team.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95"
              >
                Start a Project
              </Link>
              <Link
                href="/who-we-are"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Who We Are
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================ Pieces ============================ */

function HeroBackground({ reduced }: { reduced: boolean }) {
  // subtle scale on mount; keep static if prefers-reduced-motion
  return (
    <motion.div
      className="absolute inset-0"
      initial={reduced ? false : { scale: 1.04, opacity: 0 }}
      animate={reduced ? { opacity: 1 } : { scale: 1, opacity: 1 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Image
        src="/Projects/SAFAR/SAFAR_stephenbutkus12.jpg"
        alt="Marketing hero"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_0%,transparent,transparent,rgba(0,0,0,0.5))]" />
    </motion.div>
  );
}

function CapabilityCard({
  title,
  subtitle,
  image,
  bullets,
  className = "",
}: {
  title: string;
  subtitle: string;
  image: string;
  bullets: string[];
  className?: string;
}) {
  return (
    <motion.article
      className={`group relative overflow-hidden rounded-3xl border border-white/10 ${className}`}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative aspect-[16/11] w-full">
        <Image src={image} alt="" fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
        <span
          className="pointer-events-none absolute right-4 top-4 rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-black"
          style={{ backgroundColor: ACCENT }}
        >
          {title.split(" ")[0]}
        </span>
      </div>

      <div className="flex items-start justify-between gap-4 p-5">
        <div>
          <h3 className="text-xl font-extrabold leading-tight">{title}</h3>
          <p className="mt-1 text-sm text-white/75">{subtitle}</p>
          <ul className="mt-3 space-y-1 text-sm text-white/70">
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
                {b}
              </li>
            ))}
          </ul>
        </div>
        <Link
          href="/contact"
          className="mt-1 hidden rounded-full border border-white/25 px-3 py-1 text-xs text-white/80 backdrop-blur transition hover:border-white/40 hover:bg-white/10 sm:inline-block"
        >
          Enquire →
        </Link>
      </div>
    </motion.article>
  );
}

function ClientsWall() {
  const clients = useMemo(
    () => [
      "FPM MILANO",
      "TOCCO TOSCANO",
      "NA-KD",
      "SAMSUNG",
      "KOMONO",
      "FAMME",
      "BINGO SPORTS",
      "BLACKSAW",
      "THE THIEF",
      "H&M",
      "WESC",
      "RED BULL",
      "AMAZUÌN",
      "FLORENCE",
    ],
    []
  );

  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {clients.map((name, i) => (
        <motion.div
          key={name}
          className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 text-center text-white/80 transition hover:border-white/25 hover:bg-white/[0.06]"
          initial={{ y: 14, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: i * 0.03 }}
        >
          <span className="text-sm sm:text-[15px]">{name}</span>
        </motion.div>
      ))}
    </div>
  );
}

function Barcode() {
  // simple SVG barcode block to echo your IG tiles
  return (
    <svg width="140" height="30" viewBox="0 0 140 30" aria-hidden>
      <rect x="0" y="0" width="140" height="30" fill="transparent" />
      {[
        1,2,1,1,3,1,2,1,1,1,2,3,1,1,2,1,1,3,1,2,1,1,2,1,3,1,1,1,2,2
      ].map((w, i) => {
        const x = 2 + 3 * i;
        return <rect key={i} x={x} y={4} width={w} height={22} fill="white" opacity={0.85} />;
      })}
    </svg>
  );
}
