"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,   // ✅ add the type
} from "framer-motion";
import { useMemo, useRef } from "react";

const ACCENT = "#F9D84A";
const GREY = "rgba(255,255,255,0.45)";
const WHITE = "rgba(255,255,255,1)";

type Token = { t: "word" | "space" | "glyph"; v?: string };

const TOKENS: Token[] = [
  { t: "word", v: "Founded" }, { t: "space" },
  { t: "word", v: "on" }, { t: "space" },
  { t: "word", v: "the" }, { t: "space" },
  { t: "word", v: "principles" }, { t: "space" },
  { t: "word", v: "of" }, { t: "space" },
  { t: "word", v: "quality," }, { t: "space" },
  { t: "word", v: "detail," }, { t: "space" },
  { t: "word", v: "and" }, { t: "space" },
  { t: "word", v: "timeless" }, { t: "space" },
  { t: "word", v: "design," }, { t: "space" },
  { t: "word", v: "we" }, { t: "space" },
  { t: "word", v: "create" }, { t: "space" },
  { t: "word", v: "pieces" }, { t: "space" },
  { t: "word", v: "that" }, { t: "space" },
  { t: "word", v: "blend" }, { t: "space" },
  { t: "word", v: "modern" }, { t: "space" },
  { t: "glyph" }, { t: "space" },
  { t: "glyph", v: "ring" }, { t: "space" },
  { t: "word", v: "aesthetics" }, { t: "space" },
  { t: "word", v: "with" }, { t: "space" },
  { t: "word", v: "everyday" }, { t: "space" },
  { t: "word", v: "functionality." },
];

/** One word driven by scroll progress 0..1 */
function Word({
  text,
  index,
  total,
  progress,
  reduced,
}: {
  text: string;
  index: number;
  total: number;
  progress: MotionValue<number>; // ✅ no `any`
  reduced: boolean;
}) {
  const start = Math.max(0, (index - 0.5) / total);
  const end = Math.min(1, (index + 0.5) / total);

  const color = useTransform(progress, [start, end], [GREY, WHITE]);
  const y = useTransform(progress, [start, end], [6, 0]);
  const o = useTransform(progress, [start, end], [0.85, 1]);

  return (
    <motion.span
      style={reduced ? { color: WHITE } : { color, y, opacity: o }}
      className="inline-block will-change-[transform,color,opacity]"
    >
      {text}
    </motion.span>
  );
}

export default function OurStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 70%"],
  });

  const rightY = useTransform(scrollYProgress, [0.15, 0.4], [24, 0]);
  const rightO = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);

  // ✅ simpler & memoized total word count
  const totalWords = useMemo(
    () => TOKENS.reduce((n, t) => n + (t.t === "word" ? 1 : 0), 0),
    []
  );

  // ✅ remove unused `i`
  const lineBreakIndexRaw = TOKENS.findIndex((t) => t.t === "word" && t.v === "design,");
  const lineBreakIndex = lineBreakIndexRaw >= 0 ? lineBreakIndexRaw + 1 : -1;

  let wordCounter = 0;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black text-white"
      aria-labelledby="our-story-heading"
    >
      {/* frame lines */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/10" />

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <div className="mb-8 flex items-center justify-between text-xs uppercase tracking-wider text-white/70">
          <span className="font-medium">[ Our Story ]</span>
          <span className="hidden sm:block">scroll down</span>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          {/* LEFT: headline + meta */}
          <div className="md:col-span-8">
            <h2
              id="our-story-heading"
              className="font-extrabold leading-tight tracking-tight"
              style={{ fontSize: "clamp(32px, 5.6vw, 56px)" }}
            >
              {TOKENS.map((tok, i) => {
                // Insert a line break at the chosen point
                const br =
                  i === lineBreakIndex ? <br key={`br-${i}`} /> : null;

                if (tok.t === "space") {
                  return (
                    <span key={`s-${i}`}>
                      {br}{" "}
                    </span>
                  );
                }

                if (tok.t === "glyph") {
                  // two yellow dots: solid + ring
                  const ring = tok.v === "ring";
                  return (
                    <span key={`g-${i}`} className="relative inline-block align-middle">
                      {br}
                      <span
                        className={`inline-block h-[0.9em] w-[0.9em] rounded-full ${
                          ring ? "bg-transparent ring-2" : ""
                        }`}
                        style={
                          ring
                            ? { borderColor: ACCENT }
                            : { backgroundColor: ACCENT }
                        }
                      />
                    </span>
                  );
                }

                // word token -> animated
                wordCounter += 1;
                return (
                  <span key={`w-${i}`} className="inline-block">
                    {br}
                    <Word
                      text={tok.v!}
                      index={wordCounter}
                      total={totalWords + 1}
                      progress={scrollYProgress}
                      reduced={!!prefersReduced}
                    />
                  </span>
                );
              })}
            </h2>

            <p className="mt-6 text-xs tracking-widest text-white/80">
              / ESTABLISHED SINCE 1999
            </p>
          </div>

          {/* RIGHT: portrait, copy, CTA (driven by section progress) */}
          <motion.aside
            className="md:col-span-4"
            style={
              prefersReduced
                ? undefined
                : { opacity: rightO, y: rightY }
            }
          >
            <div className="ml-auto w-full max-w-[360px] md:ml-0">
              <div className="flex items-center justify-end">
                <div className="relative h-24 w-24 overflow-hidden rounded-sm border border-white/15">
                  <Image
                    src="/Projects/SAFAR/SAFAR_stephenbutkus12.jpg"
                    alt="Behind-the-scenes portrait"
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-white/75">
                Whether it’s an elevated basic or a statement piece, our
                collaborations are crafted to empower confidence and celebrate
                individuality.
              </p>

              <div className="mt-6">
                <a
                  href="about"
                  className="group inline-flex items-center text-sm font-semibold"
                  style={{ color: ACCENT }}
                >
                  <span
                    className="bg-gradient-to-r from-transparent to-transparent bg-[length:0_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]"
                    style={{ backgroundImage: `linear-gradient(${ACCENT},${ACCENT})` }}
                  >
                    MORE ABOUT US
                  </span>
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: ACCENT }}
                />
                <span className="inline-block h-2 w-2 rounded-full bg-white/30" />
                <span className="inline-block h-2 w-2 rounded-full bg-white/30" />
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* soft top sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          background:
            "radial-gradient(90% 60% at 50% -10%, rgba(255,255,255,0.8), transparent 60%)",
          mixBlendMode: "screen",
        }}
      />
    </section>
  );
}
