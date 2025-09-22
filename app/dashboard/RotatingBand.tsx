"use client";

type Item = { label: string; count?: number; href?: string };

// Tailored for VOID — tweak as you like
const DEFAULT_ITEMS: Item[] = [
  { label: "PHOTOGRAPHY", count: 24 },
  { label: "BRANDING", count: 18 },
  { label: "CONTENT CREATION", count: 36 },
  { label: "MARKETING", count: 21 },
  { label: "MEDIA DESIGN", count: 12 },
  { label: "MODEL CASTING", count: 9 },
];

export default function RotatingBand({
  items = DEFAULT_ITEMS,
  speed = 24,       // seconds per loop (lower = faster)
  reverse = false, // rotate the other direction
  height = 88,     // px (mobile)
  hoverPause = true,
}: {
  items?: Item[];
  speed?: number;
  reverse?: boolean;
  height?: number;
  hoverPause?: boolean;
}) {
  const sequence = [...items, ...items]; // duplicate for seamless loop

  return (
    <section
      className={`relative w-full bg-black text-white ${hoverPause ? "group" : ""}`}
      aria-label="Rotating categories"
      style={{ height }}
    >
      {/* Top/bottom borders & subtle vertical guides */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(255,255,255,0.18) 0 1px, transparent 1px 260px)",
          }}
        />

        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-black to-transparent" />
      </div> */}

      {/* Track */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`flex h-full items-center whitespace-nowrap will-change-transform marqueeBase ${
            reverse ? "marqueeRight" : "marqueeLeft"
          }`}
          style={{ animationDuration: `${speed}s` }} // <- reliable dynamic speed
        >
          {sequence.map((item, idx) => (
            <a
              key={`${item.label}-${idx}`}
              href={item.href || "#"}
              className="relative mx-8 inline-flex items-center gap-4 text-2xl font-extrabold tracking-tight md:text-5xl"
            >
              <span className="uppercase">{item.label}</span>
              {typeof item.count === "number" && (
                <span className="align-super text-sm opacity-70 md:text-base">[{item.count}]</span>
              )}
              <span className="text-white/30">✚</span>
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marqueeBase {
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-fill-mode: both;
        }
        .marqueeLeft {
          animation-name: marqueeL;
        }
        .marqueeRight {
          animation-name: marqueeR;
        }
        @keyframes marqueeL {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeR {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        ${hoverPause ? `.group:hover .marqueeBase { animation-play-state: paused; }` : ""}
        @media (min-width: 768px) {
          section[aria-label="Rotating categories"] { height: 112px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .marqueeBase { animation: none !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}
