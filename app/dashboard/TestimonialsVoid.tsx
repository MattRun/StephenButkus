// "use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useAnimation,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ---------------------------------- Data --------------------------------- */

type Review = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  stars?: number;
};

type PageData = {
  rating: number;
  blurb: string;
  leftBrandNote?: string;
  reviews: Review[];
};

const PAGES: PageData[] = [
  {
    rating: 4.9,
    blurb:
      "From kickoff to post, VOID turns brand goals into cinematic stories that move people.",
    leftBrandNote: "Trusted by brands & talent worldwide",
    reviews: [
      {
        id: "r1",
        name: "Bertony Da Silva",
        role: "Producer — City Campaign",
        avatar: "/Projects/SAFAR/SAFAR_stephenbutkus11.jpg",
        quote:
          "Finally a team that blends taste with velocity. Clear creative direction and flawless delivery.",
        stars: 5,
      },
      {
        id: "r2",
        name: "E. Martinez",
        role: "Brand Lead — Apparel",
        avatar: "/Projects/SAFAR/SAFAR_stephenbutkus7.jpg",
        quote:
          "VOID mapped a clean beginning → middle → end. Our launch finally feels like us.",
        stars: 5,
      },
    ],
  },
  {
    rating: 5.0,
    blurb:
      "We connect brands and talent with our core crew to ship memorable, measurable work.",
    leftBrandNote: "Multi-disciplinary, one narrative",
    reviews: [
      {
        id: "r3",
        name: "K. Ahn",
        role: "Founder — Beauty",
        avatar: "/Projects/SAFAR/SAFAR_stephenbutkus1.jpg",
        quote:
          "Obsessed with the fit of every frame. Editorial, but never precious. Big fan.",
        stars: 5,
      },
      {
        id: "r4",
        name: "R. Patel",
        role: "Creative — Beverage",
        avatar: "/Projects/SAFAR/SAFAR_stephenbutkus4.jpg",
        quote:
          "The process was seamless. They handled casting, locations, and motion without breaking pace.",
        stars: 5,
      },
    ],
  },
  {
    rating: 4.8,
    blurb:
      "Purpose-built production that scales: photography, motion, branding, and content systems.",
    leftBrandNote: "Beginning • Middle • End storytelling",
    reviews: [
      {
        id: "r5",
        name: "L. Coleman",
        role: "Artist — Collaboration",
        avatar: "/Projects/SAFAR/SAFAR_stephenbutkus7.jpg",
        quote:
          "Creative direction that actually directs. Felt collaborative and sharp the whole way.",
        stars: 5,
      },
      {
        id: "r6",
        name: "S. Nguyen",
        role: "Marketing — Tech",
        avatar: "/Projects/SAFAR/SAFAR_stephenbutkus11.jpg",
        quote:
          "Results we can point to. The work looks elevated and the metrics moved. Win-win.",
        stars: 5,
      },
    ],
  },
];

/* --------------------------------- View ---------------------------------- */

export default function TestimonialsVoid() {
  const sectionRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const prefersReduced = useReducedMotion();

  // black → white ink-wipe transition
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 45%", "start 5%"],
  });

  // ❌ DO NOT call hooks conditionally
  // Build both motion values, then choose one.
  const OPEN = "circle(140% at 50% 0%)";
  const CLOSED = "circle(0% at 50% 0%)";
  const clipAnimated = useTransform(scrollYProgress, [0, 1], [CLOSED, OPEN]);
  const clipStatic = useMotionValue(OPEN); // used when reduced motion is preferred
  const clipMotionValue = prefersReduced ? clipStatic : clipAnimated;

  // pager
  const [page, setPage] = useState(0);
  const pages = PAGES.length;

  // measure viewport width for snapping
  const [vw, setVw] = useState(0);
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setVw(el.clientWidth));
    ro.observe(el);
    setVw(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: -page * vw,
      transition: { type: "spring", stiffness: 420, damping: 46 },
    });
  }, [page, vw, controls]);

  function handleDragEnd(
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number }; velocity: { x: number } }
  ) {
    const swipePower = info.offset.x + info.velocity.x * 180;
    const threshold = 120;
    if (swipePower < -threshold && page < pages - 1) setPage(page + 1);
    else if (swipePower > threshold && page > 0) setPage(page - 1);
    else controls.start({
      x: -page * vw,
      transition: { type: "spring", stiffness: 420, damping: 46 },
    });
  }

  const toPage = (p: number) => setPage(Math.max(0, Math.min(pages - 1, p)));

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.08 } },
  };
  const item = {
    hidden: { y: 16, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      {/* white layer revealed via clip-path */}
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-white"
        style={{ clipPath: clipMotionValue }}
      />

      {/* top sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-24"
        style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0))", mixBlendMode: "screen" }}
      />

      {/* ghost VOID watermark */}
      <div className="pointer-events-none absolute left-0 right-0 top-10 z-0 flex justify-center opacity-[0.04]">
        <div className="select-none text-[22vw] font-extrabold leading-none tracking-tight text-black">
          VOID
        </div>
      </div>

      {/* content */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mx-auto max-w-7xl px-4 py-16 text-black md:px-8 md:py-24"
      >
        <div className="mb-8 flex items-center justify-between">
          <div className="text-xs uppercase tracking-wider text-neutral-500">
            [ What clients & collaborators say ]
          </div>
          <div className="hidden gap-2 md:flex">
            <NavButton dir="prev" onClick={() => toPage(page - 1)} disabled={page === 0} />
            <NavButton dir="next" onClick={() => toPage(page + 1)} disabled={page === pages - 1} />
          </div>
        </div>

        <motion.h2 variants={item} className="mb-10 leading-[0.95] tracking-tight" style={{ fontSize: "clamp(28px,6vw,64px)" }}>
          <span className="block font-extrabold text-neutral-400">Your Stories,</span>
          <span className="block font-extrabold text-neutral-950">Our Drive at VOID</span>
        </motion.h2>

        {/* slider viewport */}
        <div ref={viewportRef} className="relative overflow-hidden">
          {/* dots */}
          <div className="mb-3 flex items-center gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => toPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={`h-2 w-2 rounded-full transition ${i === page ? "bg-neutral-900" : "bg-neutral-300"}`}
              />
            ))}
          </div>

          {/* draggable track */}
          <motion.div
            className="flex cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -((pages - 1) * vw), right: 0 }}
            onDragEnd={handleDragEnd}
            animate={controls}
          >
            {PAGES.map((p, idx) => (
              <div key={idx} style={{ minWidth: vw, width: vw }} className="px-1 md:px-2">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
                  {/* left rating card */}
                  <motion.div variants={item} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_6px_30px_rgba(0,0,0,0.06)] md:col-span-4">
                    <p className="text-xs uppercase tracking-wider text-neutral-500">[ VOID / Results ]</p>
                    <div className="mt-4 flex items-end gap-2">
                      <span className="text-6xl font-extrabold leading-none">{p.rating.toFixed(1)}</span>
                      <span className="pb-1 text-neutral-500">/5</span>
                    </div>
                    <p className="mt-4 max-w-sm text-sm text-neutral-600">{p.blurb}</p>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                          <Avatar src="/Projects/SAFAR/SAFAR_stephenbutkus1.jpg" />
                          <Avatar src="/Projects/SAFAR/SAFAR_stephenbutkus4.jpg" />
                          <Avatar src="/Projects/SAFAR/SAFAR_stephenbutkus7.jpg" />
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-neutral-700">
                          <Stars count={5} />
                          <span>{p.leftBrandNote}</span>
                        </div>
                      </div>
                      <span className="text-sm font-semibold">VOID.</span>
                    </div>

                    <a
                      href="leave-a-review"
                      className="mt-6 inline-flex items-center justify-center rounded-xl border border-neutral-300 px-3 py-2 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-50"
                    >
                      LEAVE A REVIEW ↗
                    </a>
                  </motion.div>

                  {/* middle review */}
                  <motion.div variants={item} className="rounded-2xl border border-neutral-200 bg-white p-0 shadow-[0_6px_30px_rgba(0,0,0,0.06)] md:col-span-4">
                    <ReviewCard review={p.reviews[0]} />
                  </motion.div>

                  {/* right review */}
                  <motion.div variants={item} className="rounded-2xl border border-neutral-200 bg-white p-0 shadow-[0_6px_30px_rgba(0,0,0,0.06)] md:col-span-4">
                    <ReviewCard review={p.reviews[1]} big />
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* mobile arrows */}
          <div className="mt-6 flex items-center justify-between md:hidden">
            <NavButton dir="prev" onClick={() => toPage(page - 1)} disabled={page === 0} />
            <NavButton dir="next" onClick={() => toPage(page + 1)} disabled={page === pages - 1} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------- UI bits --------------------------------- */

function NavButton({
  dir,
  onClick,
  disabled,
}: {
  dir: "prev" | "next";
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition ${
        disabled
          ? "cursor-not-allowed border-neutral-200 text-neutral-300"
          : "border-neutral-300 text-neutral-900 hover:bg-neutral-50"
      }`}
      aria-label={dir === "prev" ? "Previous" : "Next"}
    >
      {dir === "prev" ? "←" : "→"}
    </button>
  );
}

function ReviewCard({ review, big = false }: { review: Review; big?: boolean }) {
  return (
    <>
      <div className="flex items-center gap-3 border-b border-neutral-100 p-4">
        <div className="relative h-9 w-9 overflow-hidden rounded-full">
          <Image src={review.avatar} alt={review.name} fill sizes="36px" className="object-cover" />
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold">{review.name}</div>
          <div className="text-xs text-neutral-500">{review.role}</div>
        </div>
      </div>
      <div className="p-5">
        <div className="mb-3 text-[10px] text-neutral-700">{review.stars ? <Stars count={review.stars} /> : null}</div>
        <p className={`text-neutral-900 ${big ? "text-[15px] leading-relaxed" : "text-[15px] leading-relaxed text-center"}`}>
          {review.quote}
        </p>
      </div>
    </>
  );
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="inline-flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="10" height="10" viewBox="0 0 24 24" className="fill-yellow-400" aria-hidden>
          <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.168L12 18.896l-7.336 3.869 1.402-8.168L.132 9.21l8.2-1.192z" />
        </svg>
      ))}
    </span>
  );
}

function Avatar({ src }: { src: string }) {
  return (
    <div className="relative h-6 w-6 overflow-hidden rounded-full ring-2 ring-white">
      <Image src={src} alt="" fill sizes="24px" className="object-cover" />
    </div>
  );
}
