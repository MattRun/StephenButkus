// app/services/content/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/**
 * CONTENT CREATION — VOID/Creatives
 * Sections:
 * 1) Hero (editorial frame + barcode)
 * 2) KPI / stats strip
 * 3) Formats we deliver (Reels, TikTok, Shorts, 1:1, 16:9)
 * 4) Showcase grid (6 cards)
 * 5) Production ribbon (Pre → Shoot → Post)
 * 6) Packages (Day Rate / Sprint / Retainer)
 * 7) CTA
 */

const ACCENT = "#F9D84A";

export default function ContentCreationPage() {
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
      <section className="relative min-h-[86svh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={prefersReduced ? false : { scale: 1.04, opacity: 0 }}
          animate={prefersReduced ? { opacity: 1 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/Projects/SAFAR/SAFAR_stephenbutkus7.jpg"
            alt="Content creation hero"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/78 via-black/25 to-black/85" />
          <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_0%,transparent,transparent,rgba(0,0,0,0.55))]" />
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-[86svh] max-w-7xl flex-col justify-center px-4 md:px-8">
          <motion.span
            className="inline-block rounded-[18px] border border-white/20 bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-[0.22em]"
            {...fadeUp(0)}
          >
            content engine
          </motion.span>

          <motion.h1
            className="mt-4 max-w-3xl font-extrabold leading-[0.96] tracking-tight"
            style={{ fontSize: "clamp(40px, 8vw, 88px)" }}
            {...fadeUp(0.05)}
          >
            Make content that{" "}
            <span className="text-white">moves people.</span>
          </motion.h1>

          <motion.p className="mt-3 max-w-xl text-white/85 md:text-lg" {...fadeUp(0.1)}>
            High-volume, on-brand assets across Reels, TikTok, Shorts, product stills, and campaign cutdowns.
          </motion.p>

          <motion.div className="mt-7 flex flex-col gap-3 sm:flex-row" {...fadeUp(0.15)}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95"
            >
              Start a Content Project
            </Link>
            <Link
              href="/projects?tag=content"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
            >
              See Content Work
            </Link>
          </motion.div>

          {/* frame + barcode */}
          <motion.div className="mt-10 rounded-xl border border-white/25 p-4 sm:p-5" {...fadeUp(0.2)}>
            <div className="flex items-center justify-between gap-6">
              <span className="text-sm text-white/70">VOID CONTENT KIT • V-0450197</span>
              <Barcode />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- KPI STRIP ---------- */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Stat label="Batch days" value="1–3" />
          <Stat label="Formats / day" value="8–20+" />
          <Stat label="Turnaround" value="48–72h" />
          <Stat label="Usage ready" value="All socials" />
        </div>
      </section>

      {/* ---------- FORMATS ---------- */}
      <section className="mx-3 rounded-3xl border border-white/10 bg-white/[0.04] py-12 shadow-[0_8px_40px_rgba(0,0,0,.25)] md:mx-6 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <header className="mb-8">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">formats</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Multi-format from a single shoot
            </h2>
          </header>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-5">
            <FormatCard title="Reels" ratio="9:16" meta=":06–:30" />
            <FormatCard title="TikTok" ratio="9:16" meta=":06–:30" />
            <FormatCard title="Shorts" ratio="9:16" meta=":15–:60" />
            <FormatCard title="Square" ratio="1:1" meta="Stills / clips" />
            <FormatCard title="Wide" ratio="16:9" meta="Cutdowns" />
          </div>
        </div>
      </section>

      {/* ---------- SHOWCASE GRID ---------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-white/60">examples</p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {[
            { t: "Lifestyle Reel", img: "/Projects/SAFAR/SAFAR_stephenbutkus11.jpg", span: "md:col-span-7" },
            { t: "Product Macro", img: "/Projects/SAFAR/SAFAR_stephenbutkus1.jpg", span: "md:col-span-5" },
            { t: "Creator UGC", img: "/Projects/SAFAR/SAFAR_stephenbutkus4.jpg", span: "md:col-span-4" },
            { t: "Studio Motion", img: "/Projects/SAFAR/SAFAR_stephenbutkus7.jpg", span: "md:col-span-4" },
            { t: "Editorial Cutdown", img: "/Projects/SAFAR/SAFAR_stephenbutkus12.jpg", span: "md:col-span-4" },
          ].map((c, i) => (
            <motion.article
              key={c.t}
              className={`group relative ${c.span} overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]`}
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
            >
              <div className="relative aspect-[16/10] w-full">
                <Image src={c.img} alt={c.t} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />
                <span
                  className="pointer-events-none absolute left-4 top-4 rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-black"
                  style={{ backgroundColor: ACCENT }}
                >
                  {c.t}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ---------- PRODUCTION RIBBON ---------- */}
      <section className="mx-3 rounded-3xl border border-white/10 bg-white/[0.03] md:mx-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch md:grid-cols-12">
          <div className="relative col-span-5 hidden overflow-hidden rounded-l-3xl md:block">
            <Image
              src="/Projects/SAFAR/SAFAR_stephenbutkus4.jpg"
              alt=""
              fill
              sizes="40vw"
              className="object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/10 to-transparent" />
          </div>
          <div className="col-span-7 p-6 md:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">production</p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Pre → Shoot → Post. Tight loop, fast output.
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Stage
                title="Pre-production"
                items={[
                  "Concept / shotlist",
                  "Casting & locations",
                  "Prop + wardrobe plan",
                ]}
              />
              <Stage
                title="Shoot day(s)"
                items={[
                  "Director + DP + AC",
                  "Lighting & grip",
                  "Still + motion capture",
                ]}
              />
              <Stage
                title="Post"
                items={[
                  "Edit & sound",
                  "Color + captions",
                  "Versioning per platform",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- PACKAGES ---------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-white/60">packages</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Pick your cadence
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Package
            name="Day Rate"
            price="On-site / studio"
            points={["Director + crew", "Lighting + studio options", "Stills + motion capture"]}
          />
          <Package
            name="Content Sprint"
            highlight
            price="2–3 days"
            points={["20–60 assets", "Multi-format delivery", "72h edit window", "Usage-ready exports"]}
          />
          <Package
            name="Retainer"
            price="Monthly"
            points={["Planned drops", "Creator / UGC pipeline", "Quarterly refresh & reports"]}
          />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-4 md:px-8 md:pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-10">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              mixBlendMode: "screen",
              background:
                "radial-gradient(90% 60% at 50% -10%, rgba(255,255,255,0.9), transparent 60%)",
            }}
          />
          <div className="relative">
            <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Need consistent drops that feel on-brand?
            </h3>
            <p className="mt-2 max-w-2xl text-white/80">
              We’ll map a content calendar and build a repeatable day-rate system for volume without creative fatigue.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95"
              >
                Book a Content Day
              </Link>
              <Link
                href="/projects?tag=content"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                View Content Library
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================ Subcomponents ============================ */

function Barcode() {
  return (
    <svg width="160" height="32" viewBox="0 0 160 32" aria-hidden>
      <rect x="0" y="0" width="160" height="32" fill="transparent" />
      {[
        1,2,1,1,3,1,2,1,1,1,2,3,1,1,2,1,1,3,1,2,1,1,2,1,3,1,1,1,2,2,1,2,3,1
      ].map((w, i) => {
        const x = 2 + 3 * i;
        return <rect key={i} x={x} y={5} width={w} height={22} fill="white" opacity={0.85} />;
      })}
    </svg>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
      <div className="text-2xl font-extrabold">{value}</div>
      <div className="text-sm text-white/70">{label}</div>
    </div>
  );
}

function FormatCard({ title, ratio, meta }: { title: string; ratio: string; meta: string }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-black/40">
      <div className="relative grid aspect-[9/16] place-items-center">
        <PlayMark />
        <span className="absolute bottom-2 right-2 rounded-md border border-white/20 bg-white/[0.06] px-2 py-0.5 text-[10px] tracking-wider text-white/90">
          {ratio}
        </span>
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <div className="text-sm font-semibold">{title}</div>
          <div className="text-xs text-white/60">{meta}</div>
        </div>
        <span
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
      </div>
    </div>
  );
}

function PlayMark() {
  return (
    <div className="relative h-12 w-12">
      <div className="absolute inset-0 rounded-full border border-white/30" />
      <div
        className="absolute left-[38%] top-[28%]"
        style={{
          width: 0,
          height: 0,
          borderLeft: "18px solid white",
          borderTop: "12px solid transparent",
          borderBottom: "12px solid transparent",
        }}
      />
    </div>
  );
}

function Stage({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
      <div className="mb-1 text-sm font-semibold" style={{ color: ACCENT }}>
        {title}
      </div>
      <ul className="space-y-1 text-sm text-white/80">
        {items.map((it) => (
          <li key={it} className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Package({
  name,
  price,
  points,
  highlight,
}: {
  name: string;
  price: string;
  points: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative rounded-3xl border p-6 ${
        highlight
          ? "border-white/20 bg-white/[0.07] shadow-[0_10px_40px_rgba(0,0,0,.35)]"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      {highlight && (
        <span
          className="absolute right-4 top-4 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black"
          style={{ backgroundColor: ACCENT }}
        >
          Recommended
        </span>
      )}
      <h4 className="text-xl font-extrabold">{name}</h4>
      <div className="mt-1 text-sm text-white/70">{price}</div>
      <ul className="mt-4 space-y-2 text-sm text-white/85">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full" style={{ backgroundColor: ACCENT }} />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/25 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:border-white/40 hover:bg-white/10"
      >
        Enquire →
      </Link>
    </div>
  );
}
