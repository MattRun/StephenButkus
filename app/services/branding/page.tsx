// app/branding/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/**
 * BRANDING — VOID/Creatives
 * Sections
 * 1) Hero (editorial frame + barcode accent)
 * 2) Brand Pillars (3 cards)
 * 3) Identity System Sampler (logo grid, colors, type scale)
 * 4) Deliverables grid
 * 5) Process ribbon
 * 6) Packages
 * 7) CTA
 */

const ACCENT = "#F9D84A";

export default function BrandingPage() {
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
            src="/Projects/SAFAR/SAFAR_stephenbutkus11.jpg"
            alt="Branding hero"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/25 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_0%,transparent,transparent,rgba(0,0,0,0.55))]" />
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-[86svh] max-w-7xl flex-col justify-center px-4 md:px-8">
          <motion.span
            className="inline-block rounded-[18px] border border-white/20 bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-[0.22em]"
            {...fadeUp(0)}
          >
            brand systems
          </motion.span>

          <motion.h1
            className="mt-4 max-w-3xl font-extrabold leading-[0.96] tracking-tight"
            style={{ fontSize: "clamp(40px, 8vw, 88px)" }}
            {...fadeUp(0.05)}
          >
            Build a brand{" "}
            <span className="text-white">people feel.</span>
          </motion.h1>

          <motion.p
            className="mt-3 max-w-xl text-white/85 md:text-lg"
            {...fadeUp(0.1)}
          >
            Strategy → Identity → Content. Cohesive assets that look sharp on day
            one and scale without breaking.
          </motion.p>

          <motion.div className="mt-7 flex flex-col gap-3 sm:flex-row" {...fadeUp(0.15)}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95"
            >
              Start a Brand Project
            </Link>
            <Link
              href="/projects?tag=branding"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Branding Work
            </Link>
          </motion.div>

          {/* frame + barcode */}
          <motion.div className="mt-10 rounded-xl border border-white/25 p-4 sm:p-5" {...fadeUp(0.2)}>
            <div className="flex items-center justify-between gap-6">
              <span className="text-sm text-white/70">VOID ID KIT • V-0450197</span>
              <Barcode />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- PILLARS ---------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-white/60">pillars</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Foundations we build with
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "Clarity",
              copy:
                "Positioning that’s easy to remember and hard to ignore. Words first, then form.",
              img: "/Projects/SAFAR/SAFAR_stephenbutkus7.jpg",
            },
            {
              title: "Consistency",
              copy:
                "A system that stays beautiful when pressured: social, e-com, pitch decks, OOH.",
              img: "/Projects/SAFAR/SAFAR_stephenbutkus4.jpg",
            },
            {
              title: "Character",
              copy:
                "A recognizable tone—typography, color, motion and imagery that feel undeniably you.",
              img: "/Projects/SAFAR/SAFAR_stephenbutkus12.jpg",
            },
          ].map((p, i) => (
            <Pillar key={p.title} {...p} delay={i * 0.06} />
          ))}
        </div>
      </section>

      {/* ---------- IDENTITY SYSTEM SAMPLER ---------- */}
      <section className="mx-3 rounded-3xl border border-white/10 bg-white/[0.04] py-12 shadow-[0_8px_40px_rgba(0,0,0,.25)] md:mx-6 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 md:grid-cols-12 md:px-8">
          {/* Logo grid */}
          <div className="md:col-span-5">
            <h3 className="text-lg font-extrabold tracking-tight">Wordmark / lockups</h3>
            <p className="mt-1 text-sm text-white/70">
              Grid-tested logotypes and mono marks.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {["VOID", "VOID/CREATIVES", "V"].map((t) => (
                <div
                  key={t}
                  className="grid aspect-[5/3] place-items-center rounded-xl border border-white/10 bg-black/40 text-xl font-extrabold"
                >
                  {t}
                </div>
              ))}
              {["VC", "VOID—LAB", "V/ID"].map((t) => (
                <div
                  key={t}
                  className="grid aspect-[5/3] place-items-center rounded-xl border border-white/10 bg-black/40 text-xl font-extrabold"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-extrabold tracking-tight">Palette</h3>
            <p className="mt-1 text-sm text-white/70">
              Intentional contrast with one hero accent.
            </p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <Swatch label="#000000" hex="#000000" />
              <Swatch label="#111315" hex="#111315" />
              <Swatch label="#FFFFFF" hex="#FFFFFF" />
              <Swatch label="#C8C8C8" hex="#C8C8C8" />
              <Swatch label={ACCENT} hex={ACCENT} isAccent />
              <Swatch label="#2E2E2E" hex="#2E2E2E" />
            </div>
          </div>

          {/* Type scale */}
          <div className="md:col-span-3">
            <h3 className="text-lg font-extrabold tracking-tight">Type scale</h3>
            <p className="mt-1 text-sm text-white/70">
              Strong display + efficient UI text.
            </p>
            <div className="mt-4 space-y-2">
              <TypeRow size="clamp(24px, 4.8vw, 40px)" label="Display / EXB">
                The Seen & Unseen
              </TypeRow>
              <TypeRow size="20px" label="Title / EXB">
                Visual narratives
              </TypeRow>
              <TypeRow size="16px" label="Body / MED" muted>
                Designed for readability across devices.
              </TypeRow>
              <TypeRow size="12px" label="Meta / UPPER" upper muted>
                case study • 2025
              </TypeRow>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- DELIVERABLES ---------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-white/60">deliverables</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
            What you get
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            ["Strategy Kit", ["Positioning statement", "Audience & tone", "Competitive map"]],
            ["Identity Kit", ["Logo suite + usage", "Color & type system", "Iconography style"]],
            ["Content Kit", ["Art direction", "Template library", "Social & e-com guides"]],
            ["Motion Kit", ["Logo motion", "Lower thirds & titles", "Social tails"]],
            ["Brand Playbook", ["Rules & guardrails", "Examples that scale", "Do’s / Don’ts"]],
            ["Handoff", ["Figma files", "Assets foldering", "License & rights"]],
          ].map(([title, items]) => (
            <DeliverableCard key={title as string} title={title as string} items={items as string[]} />
          ))}
        </div>
      </section>

      {/* ---------- PROCESS RIBBON ---------- */}
      <section className="mx-3 rounded-3xl border border-white/10 bg-white/[0.03] md:mx-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch md:grid-cols-12">
          <div className="relative col-span-5 hidden overflow-hidden rounded-l-3xl md:block">
            <Image
              src="/Projects/SAFAR/SAFAR_stephenbutkus1.jpg"
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
              Strategy → Identity → Content
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                ["01 / Discover", "Stakeholders, goals, truths. We compress chaos into clarity."],
                ["02 / Define", "Positioning, name checks, messaging hierarchy."],
                ["03 / Design", "Logo routes, palettes, type, motion tests."],
                ["04 / Systemize", "Components, templates, handoff and training."],
              ].map(([t, d]) => (
                <div key={t} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
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

      {/* ---------- PACKAGES ---------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-white/60">packages</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Choose your runway
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Package
            name="Starter"
            highlight={false}
            price="Project-based"
            points={["Identity essentials", "Palette + type", "Basic logo suite"]}
          />
          <Package
            name="Growth"
            highlight
            price="Most chosen"
            points={["Strategy + identity", "Motion starters", "Content templates", "Brand playbook"]}
          />
          <Package
            name="Flagship"
            highlight={false}
            price="Retainer"
            points={["Campaign art direction", "Ongoing content ops", "Quarterly evolutions"]}
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
              Ready to make your brand unmistakable?
            </h3>
            <p className="mt-2 max-w-2xl text-white/80">
              Send a brief—or just an instinct. We’ll propose a clear plan with timelines and options.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:brightness-95"
              >
                Start a Brand Project
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                See Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================ Subcomponents ============================ */

function Pillar({
  title,
  copy,
  img,
  delay = 0,
}: {
  title: string;
  copy: string;
  img: string;
  delay?: number;
}) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-3xl border border-white/10"
      initial={{ y: 18, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, delay }}
    >
      <div className="relative aspect-[16/11] w-full">
        <Image src={img} alt="" fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40" />
        <span
          className="pointer-events-none absolute right-4 top-4 rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-black"
          style={{ backgroundColor: ACCENT }}
        >
          {title}
        </span>
      </div>
      <div className="p-5">
        <p className="text-sm text-white/80">{copy}</p>
      </div>
    </motion.article>
  );
}

function Swatch({ hex, label, isAccent = false }: { hex: string; label: string; isAccent?: boolean }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="h-16" style={{ background: hex }} />
      <div className="px-3 py-2 text-xs text-white/80 flex items-center justify-between">
        <span>{label}</span>
        {isAccent && (
          <span className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black" style={{ backgroundColor: ACCENT }}>
            Accent
          </span>
        )}
      </div>
    </div>
  );
}

function TypeRow({
  size,
  label,
  children,
  muted = false,
  upper = false,
}: {
  size: string;
  label: string;
  children: React.ReactNode;
  muted?: boolean;
  upper?: boolean;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-3">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-[11px] uppercase tracking-[0.2em] text-white/60">{label}</span>
        <span className="text-[11px] text-white/50">{size}</span>
      </div>
      <div
        className={`${muted ? "text-white/80" : "text-white"} font-extrabold tracking-tight`}
        style={{ fontSize: size, textTransform: upper ? "uppercase" : "none", letterSpacing: upper ? "0.18em" : undefined }}
      >
        {children}
      </div>
    </div>
  );
}

function DeliverableCard({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div
      className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
      initial={{ y: 14, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-2 text-sm font-semibold" style={{ color: ACCENT }}>
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
    </motion.div>
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
