// app/careers/page.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/** CAREERS — VOID/Creatives */

const ACCENT = "#F9D84A";

/* --------------------------- Data & Types --------------------------- */

type Team = "Creative" | "Production" | "Post" | "Operations";
type Location = "Los Angeles" | "Remote" | "Hybrid (LA)";
type RoleType = "Full-time" | "Contract" | "Internship";

type Role = {
  id: string;
  title: string;
  team: Team;
  type: RoleType;
  location: Location;
  tags: string[];
  blurb: string;
};

const OPEN_ROLES: Role[] = [
  {
    id: "ad-001",
    title: "Art Director",
    team: "Creative",
    type: "Full-time",
    location: "Hybrid (LA)",
    tags: ["Campaign", "Editorial", "Brand"],
    blurb:
      "Own the concept arc from reference to on-set language. Strong taste, treatment writing, and deck craft.",
  },
  {
    id: "dp-002",
    title: "Director of Photography",
    team: "Production",
    type: "Contract",
    location: "Los Angeles",
    tags: ["Motion", "Lighting", "Studio/Location"],
    blurb:
      "Lead camera + lighting for short-form and brand film. Bonus for tabletop or beauty light experience.",
  },
  {
    id: "ed-003",
    title: "Editor (Short-form)",
    team: "Post",
    type: "Full-time",
    location: "Remote",
    tags: ["Reels", "TikTok", "Cutdowns"],
    blurb:
      "Rhythmic, meme-literate, brand-safe. Comfortable versioning across 9:16 / 1:1 / 16:9 with captions.",
  },
  {
    id: "col-004",
    title: "Colorist",
    team: "Post",
    type: "Contract",
    location: "Remote",
    tags: ["DaVinci", "LookDev", "Skin"],
    blurb:
      "Build consistent brand looks; balance mixed lighting and handle beauty cleanup with restraint.",
  },
  {
    id: "sm-005",
    title: "Studio Manager",
    team: "Operations",
    type: "Full-time",
    location: "Los Angeles",
    tags: ["Scheduling", "Vendors", "Inventory"],
    blurb:
      "Keep the machine smooth—bookings, equipment, PA pipeline, set safety, and coffee that slaps.",
  },
  {
    id: "int-006",
    title: "Creative Intern",
    team: "Creative",
    type: "Internship",
    location: "Hybrid (LA)",
    tags: ["Design", "Assist", "Research"],
    blurb:
      "Deck assembly, reference hunts, layout, on-set support. A strong eye and curiosity required.",
  },
];

/* --------------------------- Small helpers -------------------------- */

function mailtoFor(role: Role) {
  const subject = encodeURIComponent(`Application — ${role.title} (${role.id})`);
  const body = encodeURIComponent(
    `Hello VOID/Creatives,\n\nI'd like to apply for the ${role.title} role.\n\nLinks:\nPortfolio:\nReel:\nLinkedIn:\n\nNotes:\n- Availability:\n- Location:\n\nThanks!`
  );
  return `mailto:talent@voidcreatives.com?subject=${subject}&body=${body}`;
}

const fadeUp = (delay = 0) => ({
  initial: { y: 18, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
});

/* ================================ Page =============================== */

export default function CareersPage() {
  const prefersReduced = useReducedMotion();

  // Filters
  const [q, setQ] = useState("");
  const [team, setTeam] = useState<"All" | Team>("All");
  const [loc, setLoc] = useState<"All" | Location>("All");
  const [kind, setKind] = useState<"All" | RoleType>("All");

  const filtered = useMemo(() => {
    return OPEN_ROLES.filter((r) => {
      const mTeam = team === "All" || r.team === team;
      const mLoc = loc === "All" || r.location === loc;
      const mType = kind === "All" || r.type === kind;
      const qq = q.trim().toLowerCase();
      const mQ =
        !qq ||
        r.title.toLowerCase().includes(qq) ||
        r.tags.some((t) => t.toLowerCase().includes(qq)) ||
        r.blurb.toLowerCase().includes(qq);
      return mTeam && mLoc && mType && mQ;
    });
  }, [q, team, loc, kind]);

  return (
    <main className="bg-black text-white">
      {/* ------------------------------ HERO ------------------------------ */}
      <section className="relative min-h-[82svh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={prefersReduced ? false : { scale: 1.04, opacity: 0 }}
          animate={prefersReduced ? { opacity: 1 } : { scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/Projects/SAFAR/SAFAR_stephenbutkus12.jpg"
            alt="Join the collective"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/25 to-black/90" />
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-[82svh] max-w-7xl flex-col justify-center px-4 md:px-8">
          <motion.span
            className="inline-block rounded-[18px] border border-white/20 bg-white/[0.06] px-3 py-1 text-[11px] uppercase tracking-[0.22em]"
            {...fadeUp(0)}
          >
            careers
          </motion.span>

          <motion.h1
            className="mt-4 max-w-3xl font-extrabold leading-[0.96] tracking-tight"
            style={{ fontSize: "clamp(40px, 8vw, 90px)" }}
            {...fadeUp(0.05)}
          >
            Join the <span className="text-white">collective.</span>
          </motion.h1>

          <motion.p className="mt-3 max-w-xl text-white/85 md:text-lg" {...fadeUp(0.1)}>
            We design visual systems that move culture. Bring your craft; keep your ego at the door.
          </motion.p>

          <motion.div className="mt-7 flex flex-col gap-3 sm:flex-row" {...fadeUp(0.15)}>
            <a href="#open-roles" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:brightness-95">
              View Open Roles
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Pitch a Role
            </Link>
          </motion.div>

          <motion.div className="mt-10 rounded-xl border border-white/25 p-4 sm:p-5" {...fadeUp(0.2)}>
            <div className="flex items-center justify-between gap-6">
              <span className="text-sm text-white/70">VOID TALENT NETWORK • V-0450197</span>
              <Barcode />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ----------------------- Search / Filters ------------------------ */}
      <section id="open-roles" className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <header className="mb-6">
          <p className="text-xs uppercase tracking-[0.22em] text-white/60">open roles</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">Build with us</h2>
        </header>

        <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search title, tags, skills…"
            className="rounded-xl border border-white/15 bg-white/[0.05] px-3 py-2 text-sm outline-none placeholder:text-white/50 focus:border-white/35"
          />
          <Select value={team} onChange={setTeam} label="Team" options={["All", "Creative", "Production", "Post", "Operations"]} />
          <Select value={loc} onChange={setLoc} label="Location" options={["All", "Los Angeles", "Remote", "Hybrid (LA)"]} />
          <Select value={kind} onChange={setKind} label="Type" options={["All", "Full-time", "Contract", "Internship"]} />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {filtered.length ? (
            filtered.map((role, i) => <RoleCard key={role.id} role={role} index={i} />)
          ) : (
            <EmptyState />
          )}
        </div>

        {/* Talent network banner */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="text-sm font-semibold" style={{ color: ACCENT }}>
                Not seeing a fit?
              </div>
              <p className="text-sm text-white/80">Join our talent network for future shoots and sprints.</p>
            </div>
            <a
              href="mailto:talent@voidcreatives.com?subject=Talent%20Network%20Submission&body=Links:%20Portfolio%2FReel%2FLinkedIn"
              className="rounded-full border border-white/25 px-4 py-2 text-sm text-white/90 hover:border-white/40 hover:bg-white/10"
            >
              Send Portfolio →
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------- Benefits --------------------------- */}
      <section className="mx-3 rounded-3xl border border-white/10 bg-white/[0.04] py-12 shadow-[0_8px_40px_rgba(0,0,0,.25)] md:mx-6 md:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <header className="mb-8">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">benefits</p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">Do your best work</h3>
          </header>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Benefit icon="⚡" title="Creative sprints" body="Focused batch days—with space to think between." />
            <Benefit icon="🎥" title="Gear & studio" body="Access to our light kit, stages and partner houses." />
            <Benefit icon="🌎" title="Remote-friendly" body="Hybrid options with async rituals and tight briefs." />
            <Benefit icon="🏥" title="Health support" body="Stipends for full-timers; mental health friendly." />
            <Benefit icon="📈" title="Growth budget" body="Courses, plugins, LUTs—invest in your edge." />
            <Benefit icon="🗓️" title="Flexible PTO" body="We plan around sprints; recharge without guilt." />
            <Benefit icon="💬" title="Open feedback" body="Weekly crit, postmortems, and shared style guides." />
            <Benefit icon="💛" title="Zero-ego culture" body="Strong opinions, soft holds. We’re here to build." />
          </div>
        </div>
      </section>

      {/* ----------------------- Culture (principles) -------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-white/60">culture</p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {[
            { t: "The Seen and Unseen", img: "/Projects/SAFAR/SAFAR_stephenbutkus7.jpg" },
            { t: "Transmutation of Fashion Norms", img: "/Projects/SAFAR/SAFAR_stephenbutkus4.jpg" },
            { t: "Elevate Product Visibility", img: "/Projects/SAFAR/SAFAR_stephenbutkus1.jpg" },
          ].map((c, i) => (
            <motion.article
              key={c.t}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] ${
                i === 0 ? "md:col-span-6" : "md:col-span-3"
              }`}
              initial={{ y: 18, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <div className="relative aspect-[16/10] w-full">
                <Image src={c.img} alt={c.t} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/50" />
                <span
                  className="absolute left-4 top-4 rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-black"
                  style={{ backgroundColor: ACCENT }}
                >
                  Principle
                </span>
                <h4 className="absolute bottom-4 left-4 right-4 text-xl font-extrabold leading-tight">{c.t}</h4>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ------------------------ Hiring Process ------------------------ */}
      <section className="mx-3 rounded-3xl border border-white/10 bg-white/[0.03] md:mx-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch md:grid-cols-12">
          <div className="relative col-span-5 hidden overflow-hidden rounded-l-3xl md:block">
            <Image src="/Projects/SAFAR/SAFAR_stephenbutkus11.jpg" alt="" fill sizes="40vw" className="object-cover opacity-85" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/10 to-transparent" />
          </div>
          <div className="col-span-7 p-6 md:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">process</p>
            <h3 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">How we hire</h3>

            <ol className="mt-6 space-y-4">
              <Step n={1} title="Apply" body="Send portfolio links, reel, and a short note about what you want to build here." />
              <Step n={2} title="Intro chat" body="20–30 min to align on craft, pace, and what a great week looks like for you." />
              <Step n={3} title="Exercise" body="A paid micro-brief or recent project debrief to see how we think together." />
              <Step n={4} title="Offer" body="Clear scope, rate, and path for growth. Zero-ego collaboration starts here." />
            </ol>
          </div>
        </div>
      </section>

      {/* ------------------------------ FAQ ----------------------------- */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <header className="mb-8">
          <p className="text-xs uppercase tracking-[0.22em] text-white/60">faq</p>
        </header>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FAQ q="Do you hire remote?" a="Yes. Many post roles are fully remote. Production is LA-centric with travel as needed." />
          <FAQ q="What do you look for in reels?" a="Taste and intent. Rhythm, typography, restraint, and an understanding of platform context." />
          <FAQ q="Internships?" a="We host seasonal Creative internships (Hybrid LA). Strong eye > years of experience." />
          <FAQ q="Can I pitch a role?" a="Absolutely. If you see a gap we should fill, email talent@voidcreatives.com with your proposal." />
        </div>
      </section>

      {/* ------------------------------ CTA ----------------------------- */}
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
            <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Ready to move culture?</h3>
            <p className="mt-2 max-w-2xl text-white/80">Send us the work you’re proudest of—one link is better than ten.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:talent@voidcreatives.com?subject=General%20Application&body=Portfolio%2FReel%20links%3A%0A%0ARole%20interest%3A"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:brightness-95"
              >
                Apply via Email
              </a>
              <Link
                href="/projects"
                className="rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
              >
                Explore our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================ Components ============================ */

function RoleCard({ role, index }: { role: Role; index: number }) {
  return (
    <motion.article
      className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-5"
      initial={{ y: 18, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, delay: index * 0.04 }}
    >
      <div>
        <div className="mb-2 flex items-center gap-2">
          <span className="text-sm font-semibold" style={{ color: ACCENT }}>
            {role.team}
          </span>
          <span className="text-white/40">•</span>
          <span className="text-sm text-white/80">{role.type}</span>
          <span className="text-white/40">•</span>
          <span className="text-sm text-white/70">{role.location}</span>
        </div>

        <h3 className="text-xl font-extrabold">{role.title}</h3>
        <p className="mt-2 text-sm text-white/80">{role.blurb}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {role.tags.map((t) => (
            <span key={t} className="rounded-full border border-white/20 px-2 py-0.5 text-[11px] text-white/80">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <a
          href={mailtoFor(role)}
          className="rounded-full border border-white/25 px-4 py-2 text-sm text-white/90 hover:border-white/40 hover:bg-white/10"
        >
          Apply →
        </a>
        <span className="text-xs text-white/50">{role.id}</span>
      </div>
    </motion.article>
  );
}

function EmptyState() {
  return (
    <div className="col-span-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center">
      <div className="text-sm">No roles match your filters.</div>
      <a
        href="mailto:talent@voidcreatives.com?subject=Open%20Application&body=Links%3A"
        className="mt-3 inline-flex rounded-full border border-white/25 px-4 py-2 text-sm text-white/90 hover:border-white/40 hover:bg-white/10"
      >
        Send Portfolio →
      </a>
    </div>
  );
}

function Benefit({ icon, title, body }: { icon: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="text-2xl">{icon}</div>
      <div className="mt-2 text-sm font-semibold" style={{ color: ACCENT }}>
        {title}
      </div>
      <p className="mt-1 text-sm text-white/80">{body}</p>
    </div>
  );
}

function Step({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <li className="relative rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <span
        className="absolute -left-3 -top-3 inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold text-black"
        style={{ backgroundColor: ACCENT }}
      >
        {n}
      </span>
      <div className="text-sm font-semibold">{title}</div>
      <p className="mt-1 text-sm text-white/80">{body}</p>
    </li>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between bg-white/[0.03] px-4 py-3 text-left"
      >
        <span className="text-sm font-semibold">{q}</span>
        <span className="ml-3 h-6 w-6 rounded-full border border-white/20 text-center text-sm leading-6">
          {open ? "–" : "+"}
        </span>
      </button>
      {open && <div className="px-4 py-3 text-sm text-white/80">{a}</div>}
    </div>
  );
}

function Select<T extends string>({
  value,
  onChange,
  label,
  options,
}: {
  value: T;
  onChange: (v: T) => void;
  label: string;
  options: readonly T[];
}) {
  return (
    <label className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-3 py-2 text-sm">
      <span className="text-white/60">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
        className="w-full bg-transparent text-white outline-none"
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-black">
            {opt}
          </option>
        ))}
      </select>
    </label>
  );
}

function Barcode() {
  return (
    <svg width="160" height="32" viewBox="0 0 160 32" aria-hidden>
      <rect x="0" y="0" width="160" height="32" fill="transparent" />
      {[
        1, 2, 1, 1, 3, 1, 2, 1, 1, 1, 2, 3, 1, 1, 2, 1, 1, 3, 1, 2, 1, 1, 2, 1, 3, 1, 1, 1, 2, 2, 1, 2, 3, 1,
      ].map((w, i) => {
        const x = 2 + 3 * i;
        return <rect key={i} x={x} y={5} width={w} height={22} fill="white" opacity={0.85} />;
      })}
    </svg>
  );
}
