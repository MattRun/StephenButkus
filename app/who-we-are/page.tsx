"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ClientsWall from "./ClientsWall";

const ACCENT = "#F9D84A";

/** Small animation helper */
const fadeUp = (delay = 0) => ({
  initial: { y: 18, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
});

export default function WhoWeArePage() {
//   const prefersReduced = useReducedMotion();

  return (
    <main className="relative w-full bg-black text-white">
      {/* Thin stage frame */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />

      {/* ============================== 1) INTRO HERO ============================== */}
      <section className="relative">
        {/* BG */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/Projects/SAFAR/SAFAR_stephenbutkus12.jpg"
            alt="VOID studio background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_0%,transparent,transparent,rgba(0,0,0,.55))]" />
        </motion.div>

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-20 md:grid-cols-12 md:px-8 md:py-28">
          <div className="md:col-span-7">
            <motion.p className="text-xs uppercase tracking-[0.22em] text-white/70" {...fadeUp(0)}>
              [ Who we are ]
            </motion.p>
            <motion.h1
              className="mt-3 font-extrabold leading-tight tracking-tight"
              style={{ fontSize: "clamp(36px, 6.5vw, 72px)" }}
              {...fadeUp(0.05)}
            >
              From <span style={{ color: ACCENT }}>Void</span> to Vision —
              we craft stories that move culture.
            </motion.h1>
            <motion.p className="mt-4 max-w-2xl text-white/80" {...fadeUp(0.1)}>
              We’re a multidisciplinary studio blending photography, motion, branding, and content
              systems. Our teams scale to the brief—delivering beginning–middle–end work that feels
              inevitable when you see it.
            </motion.p>

            <motion.div className="mt-6 flex flex-wrap items-center gap-3" {...fadeUp(0.15)}>
              {["Photography", "Branding", "Motion", "Content Systems"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/25 px-3 py-1 text-[12px] text-white/85"
                >
                  {chip}
                </span>
              ))}
            </motion.div>

            <motion.div className="mt-6 flex items-center gap-6 text-xs text-white/60" {...fadeUp(0.2)}>
              <MetaDot text="Since ’99" />
              <MetaDot text="Los Angeles • Remote" />
              <MetaDot text="End-to-end production" />
            </motion.div>
          </div>

          <motion.div className="md:col-span-5" {...fadeUp(0.1)}>
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur">
              <div className="grid grid-cols-3 gap-2 p-2">
                {[
                  "/Projects/SAFAR/SAFAR_stephenbutkus1.jpg",
                  "/Projects/SAFAR/SAFAR_stephenbutkus7.jpg",
                  "/Projects/SAFAR/SAFAR_stephenbutkus11.jpg",
                ].map((src) => (
                  <div key={src} className="relative aspect-[3/4] overflow-hidden rounded-md">
                    <Image src={src} alt="" fill sizes="33vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================ 2) CAPABILITIES GRID ============================ */}
      <section className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <motion.div className="mb-8 flex items-center justify-between" {...fadeUp(0)}>
          <p className="text-xs uppercase tracking-[0.22em] text-white/70">[ What we do ]</p>
          <span className="text-xs text-white/50">Modular teams • Clear scopes</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          <CapCard
            className="md:col-span-6"
            title="Photography / Modeling"
            img="/Projects/SAFAR/SAFAR_stephenbutkus4.jpg"
            points={["Editorial & lookbooks", "Campaign/BTS", "Studio & on-location", "Talent direction"]}
          />
          <CapCard
            className="md:col-span-6"
            title="Branding & Identity"
            img="/Projects/SAFAR/SAFAR_stephenbutkus11.jpg"
            points={["Naming & voice", "Identity systems", "Style guides", "Art direction"]}
          />
          <CapCard
            className="md:col-span-7"
            title="Content Systems"
            img="/Projects/SAFAR/SAFAR_stephenbutkus7.jpg"
            points={["Evergreen libraries", "E-com & DTC pipelines", "Social kits", "Asset QA & handoff"]}
          />
          <CapCard
            className="md:col-span-5"
            title="Motion / Post"
            img="/Projects/SAFAR/SAFAR_stephenbutkus1.jpg"
            points={["Short-form & cutdowns", "Grading & sound", "Product loops", "Launch edits"]}
          />
        </div>
      </section>

      {/* =============================== 3) OUR APPROACH =============================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" aria-hidden />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:140px_1px,1px_140px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <motion.p className="text-xs uppercase tracking-[0.22em] text-white/70" {...fadeUp(0)}>
            [ How we work ]
          </motion.p>
          <motion.h2
            className="mt-2 font-extrabold leading-tight tracking-tight"
            style={{ fontSize: "clamp(28px, 5.2vw, 56px)" }}
            {...fadeUp(0.05)}
          >
            Clarity. Craft. Momentum.
          </motion.h2>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Principle
              title="Clarity"
              copy="Begin with the end. We scope fast and define success early so every decision compounds."
              delay={0.08}
            />
            <Principle
              title="Craft"
              copy="Taste is a system. We combine standards, references, and iteration—so quality is repeatable."
              delay={0.12}
            />
            <Principle
              title="Momentum"
              copy="Teams scale to the brief. We move quickly, communicate clearly, and ship on schedule."
              delay={0.16}
            />
          </div>
        </div>
      </section>

      {/* =============================== 4) PROCESS TIMELINE =============================== */}
      <section className="relative mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <motion.p className="text-xs uppercase tracking-[0.22em] text-white/70" {...fadeUp(0)}>
          [ Process ]
        </motion.p>
        <motion.h3
          className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl"
          {...fadeUp(0.05)}
        >
          From brief to delivery—built to be painless.
        </motion.h3>

        <div className="relative mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          {[
            ["01", "Discovery", "Goals, audience, references, constraints."],
            ["02", "Blueprint", "Scope, team, schedule, and success criteria."],
            ["03", "Production", "On-set direction, capture, and check-ins."],
            ["04", "Delivery", "Selects, edits, assets, and documentation."],
          ].map(([num, title, body], i) => (
            <motion.div
              key={num}
              className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.03] p-5 backdrop-blur"
              {...fadeUp(i * 0.05)}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-white/50">{num}</span>
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: ACCENT }}
                />
              </div>
              <div className="text-lg font-semibold">{title}</div>
              <p className="mt-2 text-sm text-white/75">{body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =============================== 5) PROOF / LOGOS =============================== */}
      <section className="relative mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-24">
        <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
          <motion.div className="md:col-span-5" {...fadeUp(0)}>
            <div className="grid grid-cols-3 gap-4">
              {[
                ["98%", "repeat work"],
                ["12d", "avg turnaround"],
                ["1k+", "shoot days"],
              ].map(([big, small]) => (
                <div
                  key={small}
                  className="rounded-2xl border border-white/12 bg-white/[0.03] p-4 text-center backdrop-blur"
                >
                  <div className="text-3xl font-extrabold">{big}</div>
                  <div className="text-xs uppercase tracking-widest text-white/60">{small}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="md:col-span-7" {...fadeUp(0.08)}>
            <div className="rounded-2xl border border-white/12 bg-white/[0.03] p-4 backdrop-blur">
              <p className="mb-3 text-xs uppercase tracking-widest text-white/60">Selected collaborators</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {["Partner One", "Studio Two", "Label Three", "House Four", "Lumen", "Fabrik", "North", "After"].map(
                  (name) => (
                    <div
                      key={name}
                      className="flex h-16 items-center justify-center rounded-lg border border-white/10 bg-black/30 text-sm text-white/70"
                    >
                      {name}
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <ClientsWall/>

      {/* =============================== 6) CTA BAND =============================== */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
          <motion.div
            className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/12 bg-white/[0.03] p-6 backdrop-blur md:flex-row md:items-center"
            {...fadeUp(0)}
          >
            <div>
              <h4 className="text-xl font-extrabold">Have a brief? Let’s build it.</h4>
              <p className="mt-1 text-white/75">
                One email is enough to get a realistic scope, timeline, and route to launch.
              </p>
            </div>
            <a
              href="/contact"
              className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold tracking-wide text-white transition hover:bg-white/20"
            >
              Start a project ↗
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* =============================== Bits/Blocks =============================== */

function MetaDot({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: ACCENT }} />
      <span>{text}</span>
    </span>
  );
}

function CapCard({
  className = "",
  title,
  img,
  points,
}: {
  className?: string;
  title: string;
  img: string;
  points: string[];
}) {
  return (
    <motion.article
      className={`group relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.03] backdrop-blur ${className}`}
      {...fadeUp(0.04)}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image src={img} alt={title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/35" />
        <span
          className="pointer-events-none absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wider text-black"
          style={{ backgroundColor: ACCENT }}
        >
          Focus
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <ul className="mt-3 space-y-2 text-sm text-white/80">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-2">
              <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: ACCENT }} />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

function Principle({ title, copy, delay }: { title: string; copy: string; delay: number }) {
  return (
    <motion.div
      className="overflow-hidden rounded-2xl border border-white/12 bg-white/[0.03] p-6 backdrop-blur"
      {...fadeUp(delay)}
    >
      <div className="mb-2 text-xs uppercase tracking-widest text-white/60">Principle</div>
      <div className="text-xl font-semibold">{title}</div>
      <p className="mt-2 text-sm text-white/75">{copy}</p>
    </motion.div>
  );
}
