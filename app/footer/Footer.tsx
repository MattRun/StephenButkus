// "use client";

// import Link from "next/link";
// import { useMemo } from "react";

// const ACCENT = "#F9D84A";

// export default function FooterVoid() {
//   const year = useMemo(() => new Date().getFullYear(), []);
//   return (
//     <section className="relative w-full bg-white py-6 md:py-8">
//       {/* Rounded black card so the white shows on the corners/edges */}
//       <div className="mx-3 rounded-3xl bg-black text-white shadow-[0_10px_40px_rgba(0,0,0,.25)] md:mx-6">
//         {/* Top label row */}
//         <div className="flex items-center justify-between px-5 pt-5 text-[11px] uppercase tracking-wider text-white/70 md:px-8">
//           <span style={{ color: ACCENT }}>[ Big ideas, bigger results ]</span>
//           <span className="text-white/60">’99</span>
//         </div>

//         {/* Main grid */}
//         <div className="grid grid-cols-1 gap-8 px-5 pb-6 pt-6 md:grid-cols-12 md:gap-10 md:px-8">
//           {/* Left nav */}
//           <nav className="md:col-span-3">
//             <ul className="space-y-3 text-lg md:text-xl">
//               <li><Link href="/" className="hover:opacity-80">Home</Link></li>
//               <li><Link href="/who-we-are" className="hover:opacity-80">Who We Are</Link></li>
//               <li><Link href="/projects" className="hover:opacity-80">Projects</Link></li>
//               <li><Link href="/testimonials" className="hover:opacity-80">Testimonials</Link></li>
//               <li><Link href="/contact" className="hover:opacity-80">Contact</Link></li>
//             </ul>
//           </nav>

//           {/* Middle: contact + studio */}
//           <div className="space-y-8 md:col-span-6">
//             <div>
//               <div className="mb-2 text-sm uppercase tracking-wider text-white/60">Contact</div>
//               <div className="text-[15px] leading-relaxed">
//                 <a href="mailto:hello@voidcreatives.com" className="hover:opacity-80">
//                   hello@voidcreatives.com
//                 </a>
//                 <div className="text-white/60">Los Angeles, CA • Remote</div>
//               </div>
//             </div>

//             <div>
//               <div className="mb-2 text-sm uppercase tracking-wider text-white/60">Studio</div>
//               <div className="text-[15px] leading-relaxed text-white/80">
//                 Photography • Motion • Branding • Content Systems
//               </div>
//             </div>

//             {/* Service chips */}
//             <div className="flex flex-wrap gap-2 pt-2">
//               {[
//                 ["Photography / Modeling", "/services/photography"],
//                 ["Branding", "/services/branding"],
//                 ["Content Creation", "/services/content"],
//                 ["Marketing", "/services/marketing"],
//                 ["Media Design", "/services/media-design"],
//               ].map(([label, href]) => (
//                 <Link
//                   key={label}
//                   href={href}
//                   className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80 hover:border-white/50 hover:text-white"
//                 >
//                   {label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Right: socials */}
//           <div className="space-y-3 md:col-span-3">
//             <div className="text-sm uppercase tracking-wider text-white/60">Social</div>
//             <ul className="space-y-2 text-[15px]">
//               <li><a href="#" className="hover:opacity-80">Instagram</a></li>
//               <li><a href="#" className="hover:opacity-80">LinkedIn</a></li>
//               <li><a href="#" className="hover:opacity-80">Behance</a></li>
//               <li><a href="#" className="hover:opacity-80">YouTube</a></li>
//               <li><a href="#" className="hover:opacity-80">TikTok</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="mx-5 border-t border-white/10 md:mx-8" />

//         {/* Big VOID wordmark */}
//         <div className="relative mx-3 mt-5 rounded-xl bg-black">
//           <div className="px-2 pb-2 pt-3 md:px-4">
//             <div
//               className="select-none text-[20vw] font-extrabold leading-none tracking-tight text-white"
//               style={{ letterSpacing: "-0.03em" }}
//               aria-hidden
//             >
//               VOID
//             </div>
//           </div>
//         </div>

//         {/* Bottom chips + legal row */}
//         <div className="flex flex-wrap items-center justify-between gap-4 px-5 pb-6 md:px-8">
//           {/* quick-links chips */}
//           <div className="flex flex-wrap gap-2">
//             {["Studios", "Articles", "Projects", "Philosophy", "Collab"].map((x) => (
//               <Link
//                 key={x}
//                 href="#"
//                 className="rounded-full border border-white/20 px-3 py-1 text-[11px] text-white/80 hover:border-white/50 hover:text-white"
//               >
//                 {x}
//               </Link>
//             ))}
//           </div>

//           <div className="flex w-full items-center justify-between text-[11px] text-white/60 md:w-auto md:gap-6">
//             <span>© {year} VOID. All rights reserved.</span>
//             <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
//             <Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
//             <button
//               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//               className="ml-auto rounded-full px-2 py-1 hover:text-white md:ml-0"
//             >
//               Back to top ↑
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

































// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useRef } from "react";

// const ACCENT = "#F9D84A";

// /* ------------------------ Animated BG (canvas) ------------------------ */
// function FooterBG() {
//   const wrapRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const rafRef = useRef<number | null>(null);
//   const trail: Array<{ x: number; y: number }> = [];
//   const pos = useRef({ x: 100, y: 80 });
//   const vel = useRef({ x: 180, y: 140 });
//   const reduceMotion =
//     typeof window !== "undefined" &&
//     window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

//   const sizeCanvas = () => {
//     if (!wrapRef.current || !canvasRef.current) return;
//     const { width, height } = wrapRef.current.getBoundingClientRect();
//     const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
//     const c = canvasRef.current;
//     c.width = Math.max(1, Math.floor(width * dpr));
//     c.height = Math.max(1, Math.floor(height * dpr));
//     c.style.width = `${width}px`;
//     c.style.height = `${height}px`;
//     const ctx = c.getContext("2d")!;
//     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//   };

//   const drawGrid = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
//     const D = Math.hypot(w, h);
//     const spacing = 160;
//     ctx.save();
//     ctx.translate(w / 2, h / 2);
//     ctx.lineWidth = 8;
//     ctx.strokeStyle = "rgba(255,255,255,0.05)";

//     // / diagonal
//     ctx.save();
//     ctx.rotate(Math.PI / 4);
//     ctx.beginPath();
//     for (let x = -D; x <= D; x += spacing) {
//       ctx.moveTo(x, -D);
//       ctx.lineTo(x, D);
//     }
//     ctx.stroke();
//     ctx.restore();

//     // \ diagonal
//     ctx.save();
//     ctx.rotate(-Math.PI / 4);
//     ctx.beginPath();
//     for (let x = -D; x <= D; x += spacing) {
//       ctx.moveTo(x, -D);
//       ctx.lineTo(x, D);
//     }
//     ctx.stroke();
//     ctx.restore();

//     ctx.restore();
//   };

//   const step = (ts: number) => {
//     const c = canvasRef.current!;
//     const ctx = c.getContext("2d")!;
//     const rect = c.getBoundingClientRect();
//     const w = rect.width;
//     const h = rect.height;

//     // physics
//     const r = 9;
//     pos.current.x += vel.current.x * 0.016;
//     pos.current.y += vel.current.y * 0.016;

//     if (pos.current.x < r || pos.current.x > w - r) {
//       pos.current.x = Math.max(r, Math.min(w - r, pos.current.x));
//       vel.current.x *= -1;
//     }
//     if (pos.current.y < r || pos.current.y > h - r) {
//       pos.current.y = Math.max(r, Math.min(h - r, pos.current.y));
//       vel.current.y *= -1;
//     }

//     // keep a short trail
//     trail.push({ x: pos.current.x, y: pos.current.y });
//     if (trail.length > 20) trail.shift();

//     // clear & redraw
//     ctx.clearRect(0, 0, w, h);

//     // subtle grid
//     drawGrid(ctx, w, h);

//     if (!reduceMotion) {
//       // trail
//       for (let i = 0; i < trail.length; i++) {
//         const t = i / (trail.length - 1 || 1);
//         const alpha = 0.06 + t * 0.22;
//         const rad = r * (0.9 + t * 0.3);
//         ctx.beginPath();
//         ctx.arc(trail[i].x, trail[i].y, rad, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
//         ctx.fill();
//       }
//     }

//     // head
//     ctx.beginPath();
//     ctx.arc(pos.current.x, pos.current.y, r, 0, Math.PI * 2);
//     ctx.fillStyle = "rgba(255,255,255,0.95)";
//     ctx.fill();

//     rafRef.current = requestAnimationFrame(step);
//   };

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     sizeCanvas();
//     // randomize a bit each mount
//     vel.current = {
//       x: 140 + Math.random() * 140,
//       y: 120 + Math.random() * 120,
//     };
//     const onResize = () => sizeCanvas();

//     const io = new IntersectionObserver(
//       (entries) => {
//         const vis = entries[0]?.isIntersecting;
//         if (vis) {
//           if (!rafRef.current) rafRef.current = requestAnimationFrame(step);
//         } else {
//           if (rafRef.current) cancelAnimationFrame(rafRef.current);
//           rafRef.current = null;
//         }
//       },
//       { root: null, threshold: 0.05 }
//     );
//     io.observe(wrapRef.current!);

//     const ro = new ResizeObserver(onResize);
//     ro.observe(wrapRef.current!);
//     window.addEventListener("resize", onResize);

//     // start
//     rafRef.current = requestAnimationFrame(step);

//     return () => {
//       io.disconnect();
//       ro.disconnect();
//       window.removeEventListener("resize", onResize);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div ref={wrapRef} className="pointer-events-none absolute inset-0">
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0"
//         style={{
//           // keep it behind everything
//           zIndex: 0,
//           // soften it a hair
//           opacity: 0.8,
//         }}
//         aria-hidden
//       />
//     </div>
//   );
// }

// /* ------------------------------ Footer ------------------------------ */
// export default function FooterVoid() {
//   const year = useMemo(() => new Date().getFullYear(), []);

//   return (
//     <section className="relative w-full bg-white py-6 md:py-8">
//       {/* Rounded black card so the white shows on the corners/edges */}
//       <div className="relative mx-3 overflow-hidden rounded-3xl bg-black text-white shadow-[0_10px_40px_rgba(0,0,0,.25)] md:mx-6">
//         {/* animated background behind content */}
//         <FooterBG />

//         {/* Top label row */}
//         <div className="relative z-[1] flex items-center justify-between px-5 pt-5 text-[11px] uppercase tracking-wider text-white/70 md:px-8">
//           <span style={{ color: ACCENT }}>[ Big ideas, bigger results ]</span>
//           <span className="text-white/60">’99</span>
//         </div>

//         {/* Main grid */}
//         <div className="relative z-[1] grid grid-cols-1 gap-8 px-5 pb-6 pt-6 md:grid-cols-12 md:gap-10 md:px-8">
//           {/* Left nav */}
//           <nav className="md:col-span-3">
//             <ul className="space-y-3 text-lg md:text-xl">
//               <li><Link href="/" className="hover:opacity-80">Home</Link></li>
//               <li><Link href="/who-we-are" className="hover:opacity-80">Who We Are</Link></li>
//               <li><Link href="/projects" className="hover:opacity-80">Projects</Link></li>
//               <li><Link href="/testimonials" className="hover:opacity-80">Testimonials</Link></li>
//               <li><Link href="/contact" className="hover:opacity-80">Contact</Link></li>
//             </ul>
//           </nav>

//           {/* Middle: contact + studio */}
//           <div className="relative z-[1] space-y-8 md:col-span-6">
//             <div>
//               <div className="mb-2 text-sm uppercase tracking-wider text-white/60">Contact</div>
//               <div className="text-[15px] leading-relaxed">
//                 <a href="mailto:hello@voidcreatives.com" className="hover:opacity-80">
//                   hello@voidcreatives.com
//                 </a>
//                 <div className="text-white/60">Los Angeles, CA • Remote</div>
//               </div>
//             </div>

//             <div>
//               <div className="mb-2 text-sm uppercase tracking-wider text-white/60">Studio</div>
//               <div className="text-[15px] leading-relaxed text-white/80">
//                 Photography • Motion • Branding • Content Systems
//               </div>
//             </div>

//             {/* Service chips */}
//             <div className="flex flex-wrap gap-2 pt-2">
//               {[
//                 ["Photography / Modeling", "/services/photography"],
//                 ["Branding", "/services/branding"],
//                 ["Content Creation", "/services/content"],
//                 ["Marketing", "/services/marketing"],
//                 ["Media Design", "/services/media-design"],
//               ].map(([label, href]) => (
//                 <Link
//                   key={label}
//                   href={href}
//                   className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80 hover:border-white/50 hover:text-white"
//                 >
//                   {label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Right: socials */}
//           <div className="relative z-[1] space-y-3 md:col-span-3">
//             <div className="text-sm uppercase tracking-wider text-white/60">Social</div>
//             <ul className="space-y-2 text-[15px]">
//               <li><a href="#" className="hover:opacity-80">Instagram</a></li>
//               <li><a href="#" className="hover:opacity-80">LinkedIn</a></li>
//               <li><a href="#" className="hover:opacity-80">Behance</a></li>
//               <li><a href="#" className="hover:opacity-80">YouTube</a></li>
//               <li><a href="#" className="hover:opacity-80">TikTok</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="relative z-[1] mx-5 border-t border-white/10 md:mx-8" />

//         {/* Big VOID wordmark */}
//         <div className="relative z-[1] mx-3 mt-5 rounded-xl bg-black">
//           <div className="px-2 pb-2 pt-3 md:px-4">
//             <div
//               className="select-none text-[20vw] font-extrabold leading-none tracking-tight text-white"
//               style={{ letterSpacing: "-0.03em" }}
//               aria-hidden
//             >
//               VOID
//             </div>
//           </div>
//         </div>

//         {/* Bottom chips + legal row */}
//         <div className="relative z-[1] flex flex-wrap items-center justify-between gap-4 px-5 pb-6 md:px-8">
//           {/* quick-links chips */}
//           <div className="flex flex-wrap gap-2">
//             {["Studios", "Articles", "Projects", "Philosophy", "Collab"].map((x) => (
//               <Link
//                 key={x}
//                 href="#"
//                 className="rounded-full border border-white/20 px-3 py-1 text-[11px] text-white/80 hover:border-white/50 hover:text-white"
//               >
//                 {x}
//               </Link>
//             ))}
//           </div>

//           <div className="flex w-full items-center justify-between text-[11px] text-white/60 md:w-auto md:gap-6">
//             <span>© {year} VOID. All rights reserved.</span>
//             <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
//             <Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
//             <button
//               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//               className="ml-auto rounded-full px-2 py-1 hover:text-white md:ml-0"
//             >
//               Back to top ↑
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




















// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useRef } from "react";

// const ACCENT = "#F9D84A";

// /* ------------------------ Animated BG (letters colliders) ------------------------ */
// function FooterBG({ targetSelector = "#void-wordmark" }: { targetSelector?: string }) {
//   const wrapRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const rafRef = useRef<number | null>(null);
//   const lastTs = useRef<number | null>(null);

//   const reduceMotion =
//     typeof window !== "undefined" &&
//     window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

//   // Ball
//   const pos = useRef({ x: 120, y: 90 });
//   const vel = useRef({ x: 180, y: 140 }); // px/s
//   const radius = 9;

//   type Rect = {
//     x: number;
//     y: number;
//     w: number;
//     h: number;
//     id: number;
//     cx: number;
//     cy: number;
//     isO: boolean; // <-- only absorb on this one
//   };
//   const glyphsRef = useRef<Rect[]>([]);
//   const wordBoxRef = useRef<{ x: number; y: number; w: number; h: number } | null>(null);

//   // Effects
//   type Ripple = { t: number; duration: number; x: number; y: number; maxR: number };
//   const ripples = useRef<Ripple[]>([]);

//   type Mode = "normal" | "magnet" | "absorbed" | "ejecting";
//   const modeRef = useRef<Mode>("normal");
//   const magnetCooldownUntil = useRef<number>(0);

//   const DPR = () =>
//     typeof window !== "undefined" ? Math.max(1, Math.min(2, window.devicePixelRatio || 1)) : 1;

//   const sizeCanvas = () => {
//     if (!wrapRef.current || !canvasRef.current) return;
//     const { width, height } = wrapRef.current.getBoundingClientRect();
//     const dpr = DPR();
//     const c = canvasRef.current;
//     c.width = Math.max(1, Math.floor(width * dpr));
//     c.height = Math.max(1, Math.floor(height * dpr));
//     c.style.width = `${width}px`;
//     c.style.height = `${height}px`;
//     const ctx = c.getContext("2d")!;
//     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//   };

//   // Get per-character rects for the VOID text
//   const collectGlyphRects = () => {
//     glyphsRef.current = [];
//     wordBoxRef.current = null;

//     const target = document.querySelector<HTMLElement>(targetSelector);
//     if (!wrapRef.current || !target) return;

//     const wrapBox = wrapRef.current.getBoundingClientRect();

//     // find the first text node under the element
//     const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT, null);
//     const textNode = walker.nextNode() as Text | null;
//     if (!textNode || !textNode.data) return;
//     const s = textNode.data;

//     let minX = Infinity,
//       minY = Infinity,
//       maxX = -Infinity,
//       maxY = -Infinity;
//     let gid = 0;

//     for (let i = 0; i < s.length; i++) {
//       const ch = s[i];
//       if (/\s/.test(ch)) continue; // skip spaces

//       const r = document.createRange();
//       r.setStart(textNode, i);
//       r.setEnd(textNode, i + 1);
//       const rects = r.getClientRects();
//       r.detach?.();

//       for (let j = 0; j < rects.length; j++) {
//         const rr = rects[j];
//         if (rr.width < 2 || rr.height < 2) continue;
//         const x = rr.left - wrapBox.left;
//         const y = rr.top - wrapBox.top;
//         const w = rr.width;
//         const h = rr.height;
//         const cx = x + w / 2;
//         const cy = y + h / 2;
//         glyphsRef.current.push({
//           x,
//           y,
//           w,
//           h,
//           id: gid++,
//           cx,
//           cy,
//           isO: ch.toUpperCase() === "O", // tag O
//         });

//         minX = Math.min(minX, x);
//         minY = Math.min(minY, y);
//         maxX = Math.max(maxX, x + w);
//         maxY = Math.max(maxY, y + h);
//       }
//     }

//     if (isFinite(minX)) {
//       wordBoxRef.current = { x: minX, y: minY, w: maxX - minX, h: maxY - minY };
//     }
//   };

//   const drawGrid = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
//     const D = Math.hypot(w, h);
//     const spacing = 160;
//     ctx.save();
//     ctx.translate(w / 2, h / 2);
//     ctx.lineWidth = 8;
//     ctx.strokeStyle = "rgba(255,255,255,0.05)";
//     // /
//     ctx.save();
//     ctx.rotate(Math.PI / 4);
//     ctx.beginPath();
//     for (let x = -D; x <= D; x += spacing) {
//       ctx.moveTo(x, -D);
//       ctx.lineTo(x, D);
//     }
//     ctx.stroke();
//     ctx.restore();
//     // \
//     ctx.save();
//     ctx.rotate(-Math.PI / 4);
//     ctx.beginPath();
//     for (let x = -D; x <= D; x += spacing) {
//       ctx.moveTo(x, -D);
//       ctx.lineTo(x, D);
//     }
//     ctx.stroke();
//     ctx.restore();
//     ctx.restore();
//   };

//   const easeOut = (k: number) => 1 - Math.pow(1 - k, 2);

//   const circleIntersectsRect = (cx: number, cy: number, r: number, R: Rect) => {
//     const nx = Math.max(R.x, Math.min(cx, R.x + R.w));
//     const ny = Math.max(R.y, Math.min(cy, R.y + R.h));
//     const dx = cx - nx;
//     const dy = cy - ny;
//     return dx * dx + dy * dy <= r * r;
//   };

//   const step = (ts: number) => {
//     const c = canvasRef.current!;
//     const ctx = c.getContext("2d")!;
//     const { width: w, height: h } = c.getBoundingClientRect();

//     // dt
//     let dt = 0.016;
//     if (lastTs.current != null) dt = Math.min(0.05, (ts - lastTs.current) / 1000);
//     lastTs.current = ts;

//     // integrate
//     if (modeRef.current !== "absorbed") {
//       pos.current.x += vel.current.x * dt;
//       pos.current.y += vel.current.y * dt;
//     }

//     // walls
//     if (modeRef.current !== "absorbed") {
//       if (pos.current.x < radius || pos.current.x > w - radius) {
//         pos.current.x = Math.max(radius, Math.min(w - radius, pos.current.x));
//         vel.current.x *= -1;
//       }
//       if (pos.current.y < radius || pos.current.y > h - radius) {
//         pos.current.y = Math.max(radius, Math.min(h - radius, pos.current.y));
//         vel.current.y *= -1;
//       }
//     }

//     // ----- letter gravity / absorb (O only) -----
//     const now = performance.now();
//     const glyphs = glyphsRef.current;

//     if (!reduceMotion && glyphs.length) {
//       // nearest glyph center
//       let nearest: Rect | null = null;
//       let best = Infinity;
//       for (const g of glyphs) {
//         const dx = g.cx - pos.current.x;
//         const dy = g.cy - pos.current.y;
//         const d2 = dx * dx + dy * dy;
//         if (d2 < best) {
//           best = d2;
//           nearest = g;
//         }
//       }

//       if (nearest) {
//         const dx = nearest.cx - pos.current.x;
//         const dy = nearest.cy - pos.current.y;
//         const dist = Math.sqrt(best);
//         const influence = Math.max(nearest.w, nearest.h) * 0.8 + 120; // magnet zone per letter
//         const hitting = circleIntersectsRect(pos.current.x, pos.current.y, radius + 2, nearest);

//         if (modeRef.current === "ejecting") {
//           if (now > magnetCooldownUntil.current) modeRef.current = "normal";
//         } else if (hitting && nearest.isO && modeRef.current !== "absorbed") {
//           // ABSORB only if the hit glyph is the "O"
//           modeRef.current = "absorbed";

//           // ripple from whole word center
//           const WB =
//             wordBoxRef.current ?? { x: nearest.x, y: nearest.y, w: nearest.w, h: nearest.h };
//           const cx = WB.x + WB.w / 2;
//           const cy = WB.y + WB.h / 2;
//           const maxR = Math.hypot(WB.w, WB.h) * 0.9;
//           ripples.current.push({ t: 0, duration: 0.9, x: cx, y: cy, maxR });

//           setTimeout(() => {
//             // eject opposite of incoming
//             const sp = Math.hypot(vel.current.x, vel.current.y) || 1;
//             const ux = -vel.current.x / sp;
//             const uy = -vel.current.y / sp;
//             const launch = Math.min(520, Math.max(300, sp * 1.25));
//             // place just outside the O
//             const edge = Math.max(nearest.w, nearest.h) * 0.6 + radius + 6;
//             pos.current.x = nearest.cx + ux * edge;
//             pos.current.y = nearest.cy + uy * edge;
//             vel.current.x = ux * launch;
//             vel.current.y = uy * launch;
//             modeRef.current = "ejecting";
//             magnetCooldownUntil.current = performance.now() + 700;
//           }, 220);
//         } else if (
//           modeRef.current !== "absorbed" &&
//           now > magnetCooldownUntil.current &&
//           dist < influence
//         ) {
//           // magnet pull (all letters)
//           modeRef.current = "magnet";
//           const pull = 900;
//           const k = 1 - dist / influence;
//           const ax = (dx / (dist || 1)) * pull * (0.3 + 0.7 * k);
//           const ay = (dy / (dist || 1)) * pull * (0.3 + 0.7 * k);
//           vel.current.x += ax * dt;
//           vel.current.y += ay * dt;
//           const sp = Math.hypot(vel.current.x, vel.current.y);
//           const maxSp = 520;
//           if (sp > maxSp) {
//             vel.current.x = (vel.current.x / sp) * maxSp;
//             vel.current.y = (vel.current.y / sp) * maxSp;
//           }
//         } else if (modeRef.current === "magnet") {
//           modeRef.current = "normal";
//         }
//       }
//     }

//     // ---- render ----
//     ctx.clearRect(0, 0, w, h);
//     drawGrid(ctx, w, h);

//     // ripples
//     if (ripples.current.length) {
//       for (const r of ripples.current) {
//         r.t += dt;
//         const k = Math.min(1, r.t / r.duration);
//         const R = easeOut(k) * r.maxR;
//         const alpha = 0.35 * (1 - k);
//         ctx.beginPath();
//         ctx.arc(r.x, r.y, R, 0, Math.PI * 2);
//         ctx.strokeStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
//         ctx.lineWidth = 10 * (1 - k) + 2;
//         ctx.stroke();
//       }
//       ripples.current = ripples.current.filter((r) => r.t < r.duration);
//     }

//     // ball (hidden when absorbed)
//     if (modeRef.current !== "absorbed") {
//       if (!reduceMotion) {
//         for (let i = 4; i >= 1; i--) {
//           const t = i / 5;
//           const bx = pos.current.x - vel.current.x * 0.008 * i;
//           const by = pos.current.y - vel.current.y * 0.008 * i;
//           ctx.beginPath();
//           ctx.arc(bx, by, radius * (0.85 + 0.1 * t), 0, Math.PI * 2);
//           ctx.fillStyle = `rgba(255,255,255,${0.1 + 0.1 * t})`;
//           ctx.fill();
//         }
//       }
//       ctx.beginPath();
//       ctx.arc(pos.current.x, pos.current.y, radius, 0, Math.PI * 2);
//       ctx.fillStyle = "rgba(255,255,255,0.95)";
//       ctx.fill();
//     }

//     rafRef.current = requestAnimationFrame(step);
//   };

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     sizeCanvas();
//     collectGlyphRects();
//     vel.current = { x: 280 + Math.random() * 220, y: 240 + Math.random() * 200 };

//     const onResize = () => {
//       sizeCanvas();
//       collectGlyphRects();
//     };

//     const io = new IntersectionObserver(
//       (entries) => {
//         const vis = entries[0]?.isIntersecting;
//         if (vis) {
//           if (!rafRef.current) rafRef.current = requestAnimationFrame(step);
//         } else {
//           if (rafRef.current) cancelAnimationFrame(rafRef.current);
//           rafRef.current = null;
//         }
//       },
//       { root: null, threshold: 0.05 }
//     );
//     io.observe(wrapRef.current!);

//     const ro = new ResizeObserver(onResize);
//     ro.observe(wrapRef.current!);
//     window.addEventListener("resize", onResize);
//     // recalc once fonts are ready (important for accurate glyph boxes)
//     (document as any).fonts?.ready?.then?.(() => collectGlyphRects());

//     rafRef.current = requestAnimationFrame(step);

//     return () => {
//       io.disconnect();
//       ro.disconnect();
//       window.removeEventListener("resize", onResize);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div ref={wrapRef} className="pointer-events-none absolute inset-0">
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0"
//         style={{ zIndex: 0, opacity: 0.85 }}
//         aria-hidden
//       />
//     </div>
//   );
// }

// /* =============================== Footer =============================== */

// export default function FooterVoid() {
//   const year = useMemo(() => new Date().getFullYear(), []);

//   return (
//     <section className="relative w-full bg-white py-6 md:py-8">
//       <div className="relative mx-3 overflow-hidden rounded-3xl bg-black text-white shadow-[0_10px_40px_rgba(0,0,0,.25)] md:mx-6">
//         {/* animated canvas behind everything */}
//         <FooterBG />

//         {/* Top label row */}
//         <div className="relative z-[1] flex items-center justify-between px-5 pt-5 text-[11px] uppercase tracking-wider text-white/70 md:px-8">
//           <span style={{ color: ACCENT }}>[ Big ideas, bigger results ]</span>
//           <span className="text-white/60">’99</span>
//         </div>

//         {/* Main grid */}
//         <div className="relative z-[1] grid grid-cols-1 gap-8 px-5 pb-6 pt-6 md:grid-cols-12 md:gap-10 md:px-8">
//           {/* Left nav */}
//           <nav className="md:col-span-3">
//             <ul className="space-y-3 text-lg md:text-xl">
//               <li>
//                 <Link href="/" className="hover:opacity-80">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/who-we-are" className="hover:opacity-80">
//                   Who We Are
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/projects" className="hover:opacity-80">
//                   Projects
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/testimonials" className="hover:opacity-80">
//                   Testimonials
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="hover:opacity-80">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </nav>

//           {/* Middle: contact + studio */}
//           <div className="relative z-[1] space-y-8 md:col-span-6">
//             <div>
//               <div className="mb-2 text-sm uppercase tracking-wider text-white/60">Contact</div>
//               <div className="text-[15px] leading-relaxed">
//                 <a href="mailto:hello@voidcreatives.com" className="hover:opacity-80">
//                   hello@voidcreatives.com
//                 </a>
//                 <div className="text-white/60">Los Angeles, CA • Remote</div>
//               </div>
//             </div>

//             <div>
//               <div className="mb-2 text-sm uppercase tracking-wider text-white/60">Studio</div>
//               <div className="text-[15px] leading-relaxed text-white/80">
//                 Photography • Motion • Branding • Content Systems
//               </div>
//             </div>

//             {/* Service chips */}
//             <div className="flex flex-wrap gap-2 pt-2">
//               {[
//                 ["Photography / Modeling", "/services/photography"],
//                 ["Branding", "/services/branding"],
//                 ["Content Creation", "/services/content"],
//                 ["Marketing", "/services/marketing"],
//                 ["Media Design", "/services/media-design"],
//               ].map(([label, href]) => (
//                 <Link
//                   key={label}
//                   href={href}
//                   className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80 hover:border-white/50 hover:text-white"
//                 >
//                   {label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Right: socials */}
//           <div className="relative z-[1] space-y-3 md:col-span-3">
//             <div className="text-sm uppercase tracking-wider text-white/60">Social</div>
//             <ul className="space-y-2 text-[15px]">
//               <li>
//                 <a href="#" className="hover:opacity-80">
//                   Instagram
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:opacity-80">
//                   LinkedIn
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:opacity-80">
//                   Behance
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:opacity-80">
//                   YouTube
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:opacity-80">
//                   TikTok
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="relative z-[1] mx-5 border-t border-white/10 md:mx-8" />

//         {/* Big VOID wordmark (no background bar) */}
//         <div className="relative z-[1] mx-3 mt-5">
//           <div className="px-2 pb-2 pt-3 md:px-4">
//             <div
//               id="void-wordmark"
//               className="select-none text-[20vw] font-extrabold leading-none tracking-tight text-white"
//               style={{ letterSpacing: "-0.03em" }}
//               aria-hidden
//             >
//               VOID
//             </div>
//           </div>
//         </div>

//         {/* Bottom chips + legal row */}
//         <div className="relative z-[1] flex flex-wrap items-center justify-between gap-4 px-5 pb-6 md:px-8">
//           <div className="flex flex-wrap gap-2">
//             {["Studios", "Articles", "Projects", "Philosophy", "Collab"].map((x) => (
//               <Link
//                 key={x}
//                 href="#"
//                 className="rounded-full border border-white/20 px-3 py-1 text-[11px] text-white/80 hover:border-white/50 hover:text-white"
//               >
//                 {x}
//               </Link>
//             ))}
//           </div>

//           <div className="flex w-full items-center justify-between text-[11px] text-white/60 md:w-auto md:gap-6">
//             <span>© {year} VOID. All rights reserved.</span>
//             <Link href="/privacy" className="hover:text-white">
//               Privacy Policy
//             </Link>
//             <Link href="/terms" className="hover:text-white">
//               Terms &amp; Conditions
//             </Link>
//             <button
//               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//               className="ml-auto rounded-full px-2 py-1 hover:text-white md:ml-0"
//             >
//               Back to top ↑
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

































































//DUPLICATING BALLS



// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useRef } from "react";

// const ACCENT = "#F9D84A";

// /* ------------------------ Animated BG (letters colliders + spawns) ------------------------ */
// function FooterBG({ targetSelector = "#void-wordmark" }: { targetSelector?: string }) {
//   const wrapRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const rafRef = useRef<number | null>(null);
//   const lastTs = useRef<number | null>(null);

//   const reduceMotion =
//     typeof window !== "undefined" &&
//     window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

//   // ---- Tunables ----
//   const radius = 9;
//   const BALLS_MAX = 12;
//   const SPEED = {
//     baseX: 280,
//     jitterX: 220,
//     baseY: 240,
//     jitterY: 200,
//     magnetPull: 900,
//     max: 900,
//     ejectMin: 450,
//     ejectFactor: 1.6,
//     ejectMax: 900,
//     cooldownMs: 700,
//     absorbDelayMs: 220,
//   };

//   // Multi-ball support
//   type Mode = "normal" | "magnet" | "absorbed" | "ejecting";
//   type Ball = {
//     x: number;
//     y: number;
//     vx: number;
//     vy: number;
//     mode: Mode;
//     cooldownUntil: number;
//     pendingEject?: boolean;
//   };
//   const ballsRef = useRef<Ball[]>([]);

//   // Yellow background ball (non-colliding)
//   const yellow = useRef({ x: 100, y: 80, vx: 180, vy: 140 });
//   const yellowTrailRef = useRef<Array<{ x: number; y: number }>>([]);

//   // Glyphs
//   type Rect = { x: number; y: number; w: number; h: number; id: number; cx: number; cy: number; isO: boolean };
//   const glyphsRef = useRef<Rect[]>([]);
//   const wordBoxRef = useRef<{ x: number; y: number; w: number; h: number } | null>(null);

//   // Effects
//   type Ripple = { t: number; duration: number; x: number; y: number; maxR: number };
//   const ripples = useRef<Ripple[]>([]);

//   const DPR = () =>
//     typeof window !== "undefined" ? Math.max(1, Math.min(2, window.devicePixelRatio || 1)) : 1;

//   const sizeCanvas = () => {
//     if (!wrapRef.current || !canvasRef.current) return;
//     const { width, height } = wrapRef.current.getBoundingClientRect();
//     const dpr = DPR();
//     const c = canvasRef.current;
//     c.width = Math.max(1, Math.floor(width * dpr));
//     c.height = Math.max(1, Math.floor(height * dpr));
//     c.style.width = `${width}px`;
//     c.style.height = `${height}px`;
//     const ctx = c.getContext("2d")!;
//     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//   };

//   // Get per-character rects for the VOID text
//   const collectGlyphRects = () => {
//     glyphsRef.current = [];
//     wordBoxRef.current = null;

//     const target = document.querySelector<HTMLElement>(targetSelector);
//     if (!wrapRef.current || !target) return;

//     const wrapBox = wrapRef.current.getBoundingClientRect();

//     const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT, null);
//     const textNode = walker.nextNode() as Text | null;
//     if (!textNode || !textNode.data) return;
//     const s = textNode.data;

//     let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
//     let gid = 0;

//     for (let i = 0; i < s.length; i++) {
//       const ch = s[i];
//       if (/\s/.test(ch)) continue;

//       const r = document.createRange();
//       r.setStart(textNode, i);
//       r.setEnd(textNode, i + 1);
//       const rects = r.getClientRects();
//       r.detach?.();

//       for (let j = 0; j < rects.length; j++) {
//         const rr = rects[j];
//         if (rr.width < 2 || rr.height < 2) continue;
//         const x = rr.left - wrapBox.left;
//         const y = rr.top - wrapBox.top;
//         const w = rr.width;
//         const h = rr.height;
//         const cx = x + w / 2;
//         const cy = y + h / 2;
//         glyphsRef.current.push({ x, y, w, h, id: gid++, cx, cy, isO: ch.toUpperCase() === "O" });
//         minX = Math.min(minX, x);  minY = Math.min(minY, y);
//         maxX = Math.max(maxX, x + w);  maxY = Math.max(maxY, y + h);
//       }
//     }

//     if (isFinite(minX)) wordBoxRef.current = { x: minX, y: minY, w: maxX - minX, h: maxY - minY };
//   };

//   const drawGrid = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
//     const D = Math.hypot(w, h);
//     const spacing = 160;
//     ctx.save();
//     ctx.translate(w / 2, h / 2);
//     ctx.lineWidth = 8;
//     ctx.strokeStyle = "rgba(255,255,255,0.05)";
//     // /
//     ctx.save(); ctx.rotate(Math.PI / 4);
//     ctx.beginPath();
//     for (let x = -D; x <= D; x += spacing) { ctx.moveTo(x, -D); ctx.lineTo(x, D); }
//     ctx.stroke(); ctx.restore();
//     // \
//     ctx.save(); ctx.rotate(-Math.PI / 4);
//     ctx.beginPath();
//     for (let x = -D; x <= D; x += spacing) { ctx.moveTo(x, -D); ctx.lineTo(x, D); }
//     ctx.stroke(); ctx.restore();
//     ctx.restore();
//   };

//   const easeOut = (k: number) => 1 - Math.pow(1 - k, 2);

//   const circleIntersectsRect = (cx: number, cy: number, r: number, R: Rect) => {
//     const nx = Math.max(R.x, Math.min(cx, R.x + R.w));
//     const ny = Math.max(R.y, Math.min(cy, R.y + R.h));
//     const dx = cx - nx;
//     const dy = cy - ny;
//     return dx * dx + dy * dy <= r * r;
//   };

//   const step = (ts: number) => {
//     const c = canvasRef.current!;
//     const ctx = c.getContext("2d")!;
//     const { width: w, height: h } = c.getBoundingClientRect();

//     // dt
//     let dt = 0.016;
//     if (lastTs.current != null) dt = Math.min(0.05, (ts - lastTs.current) / 1000);
//     lastTs.current = ts;

//     // ---- Update yellow background ball (no collisions) ----
//     {
//       yellow.current.x += yellow.current.vx * dt;
//       yellow.current.y += yellow.current.vy * dt;

//       const r = radius;
//       if (yellow.current.x < r || yellow.current.x > w - r) {
//         yellow.current.x = Math.max(r, Math.min(w - r, yellow.current.x));
//         yellow.current.vx *= -1;
//       }
//       if (yellow.current.y < r || yellow.current.y > h - r) {
//         yellow.current.y = Math.max(r, Math.min(h - r, yellow.current.y));
//         yellow.current.vy *= -1;
//       }
//       // trail
//       yellowTrailRef.current.push({ x: yellow.current.x, y: yellow.current.y });
//       if (yellowTrailRef.current.length > 18) yellowTrailRef.current.shift();
//     }

//     // ---- Update white balls ----
//     const now = performance.now();
//     const glyphs = glyphsRef.current;

//     for (const b of ballsRef.current) {
//       if (b.mode !== "absorbed") {
//         b.x += b.vx * dt;
//         b.y += b.vy * dt;
//       }
//       // walls
//       if (b.mode !== "absorbed") {
//         if (b.x < radius || b.x > w - radius) {
//           b.x = Math.max(radius, Math.min(w - radius, b.x));
//           b.vx *= -1;
//         }
//         if (b.y < radius || b.y > h - radius) {
//           b.y = Math.max(radius, Math.min(h - radius, b.y));
//           b.vy *= -1;
//         }
//       }

//       if (!reduceMotion && glyphs.length) {
//         // nearest glyph
//         let nearest: Rect | null = null;
//         let best = Infinity;
//         for (const g of glyphs) {
//           const dx = g.cx - b.x;
//           const dy = g.cy - b.y;
//           const d2 = dx * dx + dy * dy;
//           if (d2 < best) { best = d2; nearest = g; }
//         }

//         if (nearest) {
//           const dx = nearest.cx - b.x;
//           const dy = nearest.cy - b.y;
//           const dist = Math.sqrt(best);
//           const influence = Math.max(nearest.w, nearest.h) * 0.8 + 120;
//           const hitting = circleIntersectsRect(b.x, b.y, radius + 2, nearest);

//           if (b.mode === "ejecting") {
//             if (now > b.cooldownUntil) b.mode = "normal";
//           } else if (hitting && nearest.isO && b.mode !== "absorbed" && !b.pendingEject) {
//             // ABSORB on O
//             b.mode = "absorbed";
//             b.pendingEject = true;

//             // ripple from word center
//             const WB = wordBoxRef.current ?? { x: nearest.x, y: nearest.y, w: nearest.w, h: nearest.h };
//             const cx = WB.x + WB.w / 2;
//             const cy = WB.y + WB.h / 2;
//             const maxR = Math.hypot(WB.w, WB.h) * 0.9;
//             ripples.current.push({ t: 0, duration: 0.9, x: cx, y: cy, maxR });

//             // Eject this ball + spawn a new one from O
//             setTimeout(() => {
//               const sp = Math.hypot(b.vx, b.vy) || 1;
//               const ux = -b.vx / sp;
//               const uy = -b.vy / sp;
//               const launch = Math.min(SPEED.ejectMax, Math.max(SPEED.ejectMin, sp * SPEED.ejectFactor));
//               const edge = Math.max(nearest.w, nearest.h) * 0.6 + radius + 6;
//               b.x = nearest.cx + ux * edge;
//               b.y = nearest.cy + uy * edge;
//               b.vx = ux * launch;
//               b.vy = uy * launch;
//               b.mode = "ejecting";
//               b.cooldownUntil = performance.now() + SPEED.cooldownMs;
//               b.pendingEject = false;

//               // Spawn one extra ball from the O (random direction)
//               if (ballsRef.current.length < BALLS_MAX) {
//                 const ang = Math.random() * Math.PI * 2;
//                 const sp2 = launch * (0.7 + Math.random() * 0.4);
//                 const nx = nearest.cx + Math.cos(ang) * (radius + 10);
//                 const ny = nearest.cy + Math.sin(ang) * (radius + 10);
//                 ballsRef.current.push({
//                   x: nx,
//                   y: ny,
//                   vx: Math.cos(ang) * sp2,
//                   vy: Math.sin(ang) * sp2,
//                   mode: "ejecting",
//                   cooldownUntil: performance.now() + 600,
//                 });
//               }
//             }, SPEED.absorbDelayMs);
//           } else if (b.mode !== "absorbed" && now > b.cooldownUntil && dist < influence) {
//             // magnet pull (all letters)
//             b.mode = "magnet";
//             const pull = SPEED.magnetPull;
//             const k = 1 - dist / influence;
//             const ax = (dx / (dist || 1)) * pull * (0.3 + 0.7 * k);
//             const ay = (dy / (dist || 1)) * pull * (0.3 + 0.7 * k);
//             b.vx += ax * dt;
//             b.vy += ay * dt;
//             const sp = Math.hypot(b.vx, b.vy);
//             if (sp > SPEED.max) {
//               b.vx = (b.vx / sp) * SPEED.max;
//               b.vy = (b.vy / sp) * SPEED.max;
//             }
//           } else if (b.mode === "magnet") {
//             b.mode = "normal";
//           }
//         }
//       }
//     }

//     // ---- render ----
//     ctx.clearRect(0, 0, w, h);
//     drawGrid(ctx, w, h);

//     // Draw yellow ball (behind whites)
//     if (!reduceMotion) {
//       for (let i = 0; i < yellowTrailRef.current.length; i++) {
//         const t = i / (yellowTrailRef.current.length - 1 || 1);
//         const alpha = 0.05 + t * 0.25;
//         const rad = radius * (0.9 + t * 0.35);
//         const p = yellowTrailRef.current[i];
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(249,216,74,${alpha.toFixed(3)})`; // ACCENT trail
//         ctx.fill();
//       }
//     }
//     ctx.beginPath();
//     ctx.arc(yellow.current.x, yellow.current.y, radius, 0, Math.PI * 2);
//     ctx.fillStyle = ACCENT; // solid yellow head
//     ctx.fill();

//     // ripples
//     if (ripples.current.length) {
//       for (const r of ripples.current) {
//         r.t += dt;
//         const k = Math.min(1, r.t / r.duration);
//         const R = easeOut(k) * r.maxR;
//         const alpha = 0.35 * (1 - k);
//         ctx.beginPath();
//         ctx.arc(r.x, r.y, R, 0, Math.PI * 2);
//         ctx.strokeStyle = `rgba(255,255,255,${alpha.toFixed(3)})`;
//         ctx.lineWidth = 10 * (1 - k) + 2;
//         ctx.stroke();
//       }
//       ripples.current = ripples.current.filter((r) => r.t < r.duration);
//     }

//     // white balls (with subtle trail)
//     for (const b of ballsRef.current) {
//       if (b.mode !== "absorbed" && !reduceMotion) {
//         for (let i = 4; i >= 1; i--) {
//           const t = i / 5;
//           const bx = b.x - b.vx * 0.008 * i;
//           const by = b.y - b.vy * 0.008 * i;
//           ctx.beginPath();
//           ctx.arc(bx, by, radius * (0.85 + 0.1 * t), 0, Math.PI * 2);
//           ctx.fillStyle = `rgba(255,255,255,${0.10 + 0.10 * t})`;
//           ctx.fill();
//         }
//       }
//       if (b.mode !== "absorbed") {
//         ctx.beginPath();
//         ctx.arc(b.x, b.y, radius, 0, Math.PI * 2);
//         ctx.fillStyle = "rgba(255,255,255,0.95)";
//         ctx.fill();
//       }
//     }

//     rafRef.current = requestAnimationFrame(step);
//   };

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     sizeCanvas();
//     collectGlyphRects();

//     // Seed one white ball
//     ballsRef.current = [
//       {
//         x: 120,
//         y: 90,
//         vx: SPEED.baseX + Math.random() * SPEED.jitterX,
//         vy: SPEED.baseY + Math.random() * SPEED.jitterY,
//         mode: "normal",
//         cooldownUntil: 0,
//       },
//     ];

//     // Randomize yellow a bit
//     yellow.current.vx = 140 + Math.random() * 160;
//     yellow.current.vy = 120 + Math.random() * 140;

//     const onResize = () => { sizeCanvas(); collectGlyphRects(); };

//     const io = new IntersectionObserver(
//       (entries) => {
//         const vis = entries[0]?.isIntersecting;
//         if (vis) {
//           if (!rafRef.current) rafRef.current = requestAnimationFrame(step);
//         } else {
//           if (rafRef.current) cancelAnimationFrame(rafRef.current);
//           rafRef.current = null;
//         }
//       },
//       { root: null, threshold: 0.05 }
//     );
//     io.observe(wrapRef.current!);

//     const ro = new ResizeObserver(onResize);
//     ro.observe(wrapRef.current!);
//     window.addEventListener("resize", onResize);
//     (document as any).fonts?.ready?.then?.(() => collectGlyphRects());

//     rafRef.current = requestAnimationFrame(step);

//     return () => {
//       io.disconnect();
//       ro.disconnect();
//       window.removeEventListener("resize", onResize);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div ref={wrapRef} className="pointer-events-none absolute inset-0">
//       <canvas ref={canvasRef} className="absolute inset-0" style={{ zIndex: 0, opacity: 0.85 }} aria-hidden />
//     </div>
//   );
// }

// /* =============================== Footer =============================== */

// export default function FooterVoid() {
//   const year = useMemo(() => new Date().getFullYear(), []);

//   return (
//     <section className="relative w-full bg-white py-6 md:py-8">
//       <div className="relative mx-3 overflow-hidden rounded-3xl bg-black text-white shadow-[0_10px_40px_rgba(0,0,0,.25)] md:mx-6">
//         {/* animated canvas behind everything */}
//         <FooterBG />

//         {/* Top label row */}
//         <div className="relative z-[1] flex items-center justify-between px-5 pt-5 text-[11px] uppercase tracking-wider text-white/70 md:px-8">
//           <span style={{ color: ACCENT }}>[ Big ideas, bigger results ]</span>
//           <span className="text-white/60">’99</span>
//         </div>

//         {/* Main grid */}
//         <div className="relative z-[1] grid grid-cols-1 gap-8 px-5 pb-6 pt-6 md:grid-cols-12 md:gap-10 md:px-8">
//           {/* Left nav */}
//           <nav className="md:col-span-3">
//             <ul className="space-y-3 text-lg md:text-xl">
//               <li><Link href="/" className="hover:opacity-80">Home</Link></li>
//               <li><Link href="/who-we-are" className="hover:opacity-80">Who We Are</Link></li>
//               <li><Link href="/projects" className="hover:opacity-80">Projects</Link></li>
//               <li><Link href="/testimonials" className="hover:opacity-80">Testimonials</Link></li>
//               <li><Link href="/contact" className="hover:opacity-80">Contact</Link></li>
//             </ul>
//           </nav>

//           {/* Middle: contact + studio */}
//           <div className="relative z-[1] space-y-8 md:col-span-6">
//             <div>
//               <div className="mb-2 text-sm uppercase tracking-wider text-white/60">Contact</div>
//               <div className="text-[15px] leading-relaxed">
//                 <a href="mailto:hello@voidcreatives.com" className="hover:opacity-80">hello@voidcreatives.com</a>
//                 <div className="text-white/60">Los Angeles, CA • Remote</div>
//               </div>
//             </div>

//             <div>
//               <div className="mb-2 text-sm uppercase tracking-wider text-white/60">Studio</div>
//               <div className="text-[15px] leading-relaxed text-white/80">
//                 Photography • Motion • Branding • Content Systems
//               </div>
//             </div>

//             {/* Service chips */}
//             <div className="flex flex-wrap gap-2 pt-2">
//               {[
//                 ["Photography / Modeling", "/services/photography"],
//                 ["Branding", "/services/branding"],
//                 ["Content Creation", "/services/content"],
//                 ["Marketing", "/services/marketing"],
//                 ["Media Design", "/services/media-design"],
//               ].map(([label, href]) => (
//                 <Link
//                   key={label}
//                   href={href}
//                   className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80 hover:border-white/50 hover:text-white"
//                 >
//                   {label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Right: socials */}
//           <div className="relative z-[1] space-y-3 md:col-span-3">
//             <div className="text-sm uppercase tracking-wider text-white/60">Social</div>
//             <ul className="space-y-2 text-[15px]">
//               <li><a href="#" className="hover:opacity-80">Instagram</a></li>
//               <li><a href="#" className="hover:opacity-80">LinkedIn</a></li>
//               <li><a href="#" className="hover:opacity-80">Behance</a></li>
//               <li><a href="#" className="hover:opacity-80">YouTube</a></li>
//               <li><a href="#" className="hover:opacity-80">TikTok</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="relative z-[1] mx-5 border-t border-white/10 md:mx-8" />

//         {/* Big VOID wordmark (no background bar) */}
//         <div className="relative z-[1] mx-3 mt-5">
//           <div className="px-2 pb-2 pt-3 md:px-4">
//             <div
//               id="void-wordmark"
//               className="select-none text-[20vw] font-extrabold leading-none tracking-tight text-white"
//               style={{ letterSpacing: "-0.03em" }}
//               aria-hidden
//             >
//               VOID
//             </div>
//           </div>
//         </div>

//         {/* Bottom chips + legal row */}
//         <div className="relative z-[1] flex flex-wrap items-center justify-between gap-4 px-5 pb-6 md:px-8">
//           <div className="flex flex-wrap gap-2">
//             {["Studios", "Articles", "Projects", "Philosophy", "Collab"].map((x) => (
//               <Link key={x} href="#" className="rounded-full border border-white/20 px-3 py-1 text-[11px] text-white/80 hover:border-white/50 hover:text-white">
//                 {x}
//               </Link>
//             ))}
//           </div>

//           <div className="flex w-full items-center justify-between text-[11px] text-white/60 md:w-auto md:gap-6">
//             <span>© {year} VOID. All rights reserved.</span>
//             <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
//             <Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
//             <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="ml-auto rounded-full px-2 py-1 hover:text-white md:ml-0">
//               Back to top ↑
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





































//YELLOW TRAIL



// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useRef } from "react";

// const ACCENT = "#F9D84A";

// /* ------------------------ Minimal BG: non-colliding ball + permanent trail ------------------------ */
// function FooterBGPermanentTrail({
//   color = ACCENT,
// }: {
//   color?: string;
// }) {
//   const wrapRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const rafRef = useRef<number | null>(null);
//   const lastTs = useRef<number | null>(null);

//   // ball state
//   const pos = useRef({ x: 120, y: 90 });
//   const vel = useRef({ x: 220, y: 180 }); // px/s
//   const radius = 9;

//   const reduceMotion =
//     typeof window !== "undefined" &&
//     window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

//   const DPR = () =>
//     typeof window !== "undefined" ? Math.max(1, Math.min(2, window.devicePixelRatio || 1)) : 1;

//   const sizeCanvas = () => {
//     if (!wrapRef.current || !canvasRef.current) return;
//     const { width, height } = wrapRef.current.getBoundingClientRect();
//     const dpr = DPR();
//     const c = canvasRef.current;
//     c.width = Math.max(1, Math.floor(width * dpr));
//     c.height = Math.max(1, Math.floor(height * dpr));
//     c.style.width = `${width}px`;
//     c.style.height = `${height}px`;
//     const ctx = c.getContext("2d")!;
//     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

//     // draw the subtle grid ONCE (since we won't clear the canvas)
//     drawGrid(ctx, width, height);
//   };

//   const drawGrid = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
//     ctx.save();
//     const D = Math.hypot(w, h);
//     const spacing = 160;
//     ctx.translate(w / 2, h / 2);
//     ctx.lineWidth = 8;
//     ctx.strokeStyle = "rgba(255,255,255,0.05)";

//     // /
//     ctx.save();
//     ctx.rotate(Math.PI / 4);
//     ctx.beginPath();
//     for (let x = -D; x <= D; x += spacing) {
//       ctx.moveTo(x, -D);
//       ctx.lineTo(x, D);
//     }
//     ctx.stroke();
//     ctx.restore();

//     // \
//     ctx.save();
//     ctx.rotate(-Math.PI / 4);
//     ctx.beginPath();
//     for (let x = -D; x <= D; x += spacing) {
//       ctx.moveTo(x, -D);
//       ctx.lineTo(x, D);
//     }
//     ctx.stroke();
//     ctx.restore();

//     ctx.restore();
//   };

//   const step = (ts: number) => {
//     const c = canvasRef.current!;
//     const ctx = c.getContext("2d")!;
//     const { width: w, height: h } = c.getBoundingClientRect();

//     // dt
//     let dt = 0.016;
//     if (lastTs.current != null) dt = Math.min(0.05, (ts - lastTs.current) / 1000);
//     lastTs.current = ts;

//     // move (no collisions with text—only bounce on card edges)
//     pos.current.x += vel.current.x * dt;
//     pos.current.y += vel.current.y * dt;

//     if (pos.current.x < radius || pos.current.x > w - radius) {
//       pos.current.x = Math.max(radius, Math.min(w - radius, pos.current.x));
//       vel.current.x *= -1;
//     }
//     if (pos.current.y < radius || pos.current.y > h - radius) {
//       pos.current.y = Math.max(radius, Math.min(h - radius, pos.current.y));
//       vel.current.y *= -1;
//     }

//     // PERMANENT TRAIL: do NOT clear the canvas.
//     // Just draw a short line segment and a head each frame.
//     if (!reduceMotion) {
//       // small glow behind head (soften trail buildup)
//       ctx.beginPath();
//       ctx.arc(pos.current.x, pos.current.y, radius * 1.6, 0, Math.PI * 2);
//       ctx.fillStyle = `${color}22`; // low alpha fill
//       ctx.fill();
//     }

//     // trail segment (line)
//     ctx.beginPath();
//     ctx.arc(pos.current.x, pos.current.y, 0.5, 0, Math.PI * 2); // dot to avoid gaps
//     ctx.moveTo(pos.current.x, pos.current.y);
//     ctx.lineTo(pos.current.x + 0.001, pos.current.y + 0.001); // 1px segment; stacking frames builds the trail
//     ctx.strokeStyle = `${color}33`; // translucent stroke
//     ctx.lineWidth = 3;
//     ctx.lineCap = "round";
//     ctx.stroke();

//     // head (solid)
//     ctx.beginPath();
//     ctx.arc(pos.current.x, pos.current.y, radius, 0, Math.PI * 2);
//     ctx.fillStyle = color;
//     ctx.fill();

//     rafRef.current = requestAnimationFrame(step);
//   };

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     // randomize a touch
//     vel.current = { x: 180 + Math.random() * 160, y: 160 + Math.random() * 140 };

//     const onResize = () => sizeCanvas();

//     sizeCanvas();

//     const io = new IntersectionObserver(
//       (entries) => {
//         const vis = entries[0]?.isIntersecting;
//         if (vis) {
//           if (!rafRef.current) rafRef.current = requestAnimationFrame(step);
//         } else {
//           if (rafRef.current) cancelAnimationFrame(rafRef.current);
//           rafRef.current = null;
//         }
//       },
//       { root: null, threshold: 0.05 }
//     );
//     io.observe(wrapRef.current!);

//     const ro = new ResizeObserver(onResize);
//     ro.observe(wrapRef.current!);
//     window.addEventListener("resize", onResize);

//     rafRef.current = requestAnimationFrame(step);

//     return () => {
//       io.disconnect();
//       ro.disconnect();
//       window.removeEventListener("resize", onResize);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div ref={wrapRef} className="pointer-events-none absolute inset-0">
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0"
//         style={{ zIndex: 0, opacity: 0.9 }}
//         aria-hidden
//       />
//     </div>
//   );
// }

// /* =============================== Footer (uses the simple BG) =============================== */

// export default function FooterVoid() {
//   const year = useMemo(() => new Date().getFullYear(), []);

//   return (
//     <section className="relative w-full bg-white py-6 md:py-8">
//       <div className="relative mx-3 overflow-hidden rounded-3xl bg-black text-white shadow-[0_10px_40px_rgba(0,0,0,.25)] md:mx-6">
//         {/* Swap this line to go back to the interactive version */}
//         <FooterBGPermanentTrail color={ACCENT} />

//         {/* Top label row */}
//         <div className="relative z-[1] flex items-center justify-between px-5 pt-5 text-[11px] uppercase tracking-wider text-white/70 md:px-8">
//           <span style={{ color: ACCENT }}>[ Big ideas, bigger results ]</span>
//           <span className="text-white/60">’99</span>
//         </div>

//         {/* Main grid */}
//         <div className="relative z-[1] grid grid-cols-1 gap-8 px-5 pb-6 pt-6 md:grid-cols-12 md:gap-10 md:px-8">
//           {/* Left nav */}
//           <nav className="md:col-span-3">
//             <ul className="space-y-3 text-lg md:text-xl">
//               <li><Link href="/" className="hover:opacity-80">Home</Link></li>
//               <li><Link href="/who-we-are" className="hover:opacity-80">Who We Are</Link></li>
//               <li><Link href="/projects" className="hover:opacity-80">Projects</Link></li>
//               <li><Link href="/testimonials" className="hover:opacity-80">Testimonials</Link></li>
//               <li><Link href="/contact" className="hover:opacity-80">Contact</Link></li>
//             </ul>
//           </nav>

//           {/* Middle: contact + studio */}
//           <div className="relative z-[1] space-y-8 md:col-span-6">
//             <div>
//               <div className="mb-2 text-sm uppercase tracking-wider text-white/60">Contact</div>
//               <div className="text-[15px] leading-relaxed">
//                 <a href="mailto:hello@voidcreatives.com" className="hover:opacity-80">
//                   hello@voidcreatives.com
//                 </a>
//                 <div className="text-white/60">Los Angeles, CA • Remote</div>
//               </div>
//             </div>

//             <div>
//               <div className="mb-2 text-sm uppercase tracking-wider text-white/60">Studio</div>
//               <div className="text-[15px] leading-relaxed text-white/80">
//                 Photography • Motion • Branding • Content Systems
//               </div>
//             </div>

//             {/* Service chips */}
//             <div className="flex flex-wrap gap-2 pt-2">
//               {[
//                 ["Photography / Modeling", "/services/photography"],
//                 ["Branding", "/services/branding"],
//                 ["Content Creation", "/services/content"],
//                 ["Marketing", "/services/marketing"],
//                 ["Media Design", "/services/media-design"],
//               ].map(([label, href]) => (
//                 <Link
//                   key={label}
//                   href={href}
//                   className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80 hover:border-white/50 hover:text-white"
//                 >
//                   {label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Right: socials */}
//           <div className="relative z-[1] space-y-3 md:col-span-3">
//             <div className="text-sm uppercase tracking-wider text-white/60">Social</div>
//             <ul className="space-y-2 text-[15px]">
//               <li><a href="#" className="hover:opacity-80">Instagram</a></li>
//               <li><a href="#" className="hover:opacity-80">LinkedIn</a></li>
//               <li><a href="#" className="hover:opacity-80">Behance</a></li>
//               <li><a href="#" className="hover:opacity-80">YouTube</a></li>
//               <li><a href="#" className="hover:opacity-80">TikTok</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="relative z-[1] mx-5 border-t border-white/10 md:mx-8" />

//         {/* Big VOID wordmark (no background bar) */}
//         <div className="relative z-[1] mx-3 mt-5">
//           <div className="px-2 pb-2 pt-3 md:px-4">
//             <div
//               id="void-wordmark"
//               className="select-none text-[20vw] font-extrabold leading-none tracking-tight text-white"
//               style={{ letterSpacing: "-0.03em" }}
//               aria-hidden
//             >
//               VOID
//             </div>
//           </div>
//         </div>

//         {/* Bottom chips + legal row */}
//         <div className="relative z-[1] flex flex-wrap items-center justify-between gap-4 px-5 pb-6 md:px-8">
//           <div className="flex flex-wrap gap-2">
//             {["Studios", "Articles", "Projects", "Philosophy", "Collab"].map((x) => (
//               <Link key={x} href="#" className="rounded-full border border-white/20 px-3 py-1 text-[11px] text-white/80 hover:border-white/50 hover:text-white">
//                 {x}
//               </Link>
//             ))}
//           </div>

//           <div className="flex w-full items-center justify-between text-[11px] text-white/60 md:w-auto md:gap-6">
//             <span>© {year} VOID. All rights reserved.</span>
//             <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
//             <Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
//             <button
//               onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//               className="ml-auto rounded-full px-2 py-1 hover:text-white md:ml-0"
//             >
//               Back to top ↑
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

















































//NORMAL


// "use client";

// import Link from "next/link";
// import { useEffect, useMemo, useRef } from "react";

// const ACCENT = "#F9D84A";

// /* ------------------------ BG: non-colliding ball that paints a diagonal grid ------------------------ */
// export function FooterBGPaintedGrid({
//   color = "rgba(255,255,255,0.06)", // trail stroke
//   headColor = "rgba(255,255,255,0.95)",
//   lineWidth = 8,
//   lock45 = true, // snap to 45° after bounces for that lattice look
// }: {
//   color?: string;
//   headColor?: string;
//   lineWidth?: number;
//   lock45?: boolean;
// }) {
//   const wrapRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const rafRef = useRef<number | null>(null);
//   const lastTs = useRef<number | null>(null);

//   const pos = useRef({ x: 160, y: 120 });
//   const prev = useRef({ x: 160, y: 120 });
//   const vel = useRef({ x: 260, y: 260 }); // equal x/y => 45°
//   const radius = 9;

//   const reduceMotion =
//     typeof window !== "undefined" &&
//     window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

//   const DPR = () =>
//     typeof window !== "undefined" ? Math.max(1, Math.min(2, window.devicePixelRatio || 1)) : 1;

//   const sizeCanvas = () => {
//     if (!wrapRef.current || !canvasRef.current) return;
//     const { width, height } = wrapRef.current.getBoundingClientRect();
//     const dpr = DPR();
//     const c = canvasRef.current;
//     c.width = Math.max(1, Math.floor(width * dpr));
//     c.height = Math.max(1, Math.floor(height * dpr));
//     c.style.width = `${width}px`;
//     c.style.height = `${height}px`;
//     const ctx = c.getContext("2d")!;
//     ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     // No clear: we paint permanently.
//   };

//   const snapVel45 = () => {
//     // Preserve speed; force |vx| == |vy|
//     const s = Math.hypot(vel.current.x, vel.current.y) || 1;
//     const m = s / Math.SQRT2;
//     vel.current.x = Math.sign(vel.current.x || 1) * m;
//     vel.current.y = Math.sign(vel.current.y || 1) * m;
//   };

//   const step = (ts: number) => {
//     const c = canvasRef.current!;
//     const ctx = c.getContext("2d")!;
//     const { width: w, height: h } = c.getBoundingClientRect();

//     let dt = 0.016;
//     if (lastTs.current != null) dt = Math.min(0.05, (ts - lastTs.current) / 1000);
//     lastTs.current = ts;

//     prev.current.x = pos.current.x;
//     prev.current.y = pos.current.y;

//     pos.current.x += vel.current.x * dt;
//     pos.current.y += vel.current.y * dt;

//     // bounce on card edges
//     if (pos.current.x < radius || pos.current.x > w - radius) {
//       pos.current.x = Math.max(radius, Math.min(w - radius, pos.current.x));
//       vel.current.x *= -1;
//       if (lock45) snapVel45();
//     }
//     if (pos.current.y < radius || pos.current.y > h - radius) {
//       pos.current.y = Math.max(radius, Math.min(h - radius, pos.current.y));
//       vel.current.y *= -1;
//       if (lock45) snapVel45();
//     }

//     // permanent trail (no clear)
//     ctx.save();
//     ctx.globalCompositeOperation = "lighter";
//     ctx.lineWidth = lineWidth;
//     ctx.lineCap = "round";
//     ctx.strokeStyle = color;
//     ctx.beginPath();
//     ctx.moveTo(prev.current.x, prev.current.y);
//     ctx.lineTo(pos.current.x, pos.current.y);
//     ctx.stroke();
//     ctx.restore();

//     // head + soft glow
//     if (!reduceMotion) {
//       ctx.beginPath();
//       ctx.arc(pos.current.x, pos.current.y, radius * 1.6, 0, Math.PI * 2);
//       ctx.fillStyle = headColor.replace("0.95", "0.15");
//       ctx.fill();
//     }
//     ctx.beginPath();
//     ctx.arc(pos.current.x, pos.current.y, radius, 0, Math.PI * 2);
//     ctx.fillStyle = headColor;
//     ctx.fill();

//     rafRef.current = requestAnimationFrame(step);
//   };

//   useEffect(() => {
//     if (!canvasRef.current) return;

//     if (lock45) snapVel45();
//     else {
//       vel.current.x = 200 + Math.random() * 180;
//       vel.current.y = 180 + Math.random() * 160;
//     }

//     const onResize = () => sizeCanvas();
//     sizeCanvas();

//     const io = new IntersectionObserver(
//       (entries) => {
//         const vis = entries[0]?.isIntersecting;
//         if (vis) {
//           if (!rafRef.current) rafRef.current = requestAnimationFrame(step);
//         } else {
//           if (rafRef.current) cancelAnimationFrame(rafRef.current);
//           rafRef.current = null;
//         }
//       },
//       { root: null, threshold: 0.05 }
//     );
//     io.observe(wrapRef.current!);

//     const ro = new ResizeObserver(onResize);
//     ro.observe(wrapRef.current!);
//     window.addEventListener("resize", onResize);

//     rafRef.current = requestAnimationFrame(step);

//     return () => {
//       io.disconnect();
//       ro.disconnect();
//       window.removeEventListener("resize", onResize);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div ref={wrapRef} className="pointer-events-none absolute inset-0">
//       <canvas className="absolute inset-0" ref={canvasRef} style={{ zIndex: 0, opacity: 0.9 }} aria-hidden />
//     </div>
//   );
// }

// /* ----------------------------------- FOOTER (default export) ----------------------------------- */
// export default function FooterVoid() {
//   const year = useMemo(() => new Date().getFullYear(), []);

//   return (
//     <section className="relative w-full bg-white py-6 md:py-8">
//       <div className="relative mx-3 overflow-hidden rounded-3xl bg-black text-white shadow-[0_10px_40px_rgba(0,0,0,.25)] md:mx-6">
//         {/* Painted trail background */}
//         <FooterBGPaintedGrid />

//         {/* Top label row */}
//         <div className="relative z-[1] flex items-center justify-between px-5 pt-5 text-[11px] uppercase tracking-wider text-white/70 md:px-8">
//           <span style={{ color: ACCENT }}>[ Big ideas, bigger results ]</span>
//           <span className="text-white/60">’99</span>
//         </div>

//         {/* Main grid */}
//         <div className="relative z-[1] grid grid-cols-1 gap-8 px-5 pb-6 pt-6 md:grid-cols-12 md:gap-10 md:px-8">
//           <nav className="md:col-span-3">
//             <ul className="space-y-3 text-lg md:text-xl">
//               <li><Link href="/" className="hover:opacity-80">Home</Link></li>
//               <li><Link href="/who-we-are" className="hover:opacity-80">Who We Are</Link></li>
//               <li><Link href="/projects" className="hover:opacity-80">Projects</Link></li>
//               <li><Link href="/testimonials" className="hover:opacity-80">Testimonials</Link></li>
//               <li><Link href="/contact" className="hover:opacity-80">Contact</Link></li>
//             </ul>
//           </nav>

//           <div className="relative z-[1] space-y-8 md:col-span-6">
//             <div>
//               <div className="mb-2 text-sm uppercase tracking-wider text-white/60">Contact</div>
//               <div className="text-[15px] leading-relaxed">
//                 <a href="mailto:hello@voidcreatives.com" className="hover:opacity-80">hello@voidcreatives.com</a>
//                 <div className="text-white/60">Los Angeles, CA • Remote</div>
//               </div>
//             </div>

//             <div>
//               <div className="mb-2 text-sm uppercase tracking-wider text-white/60">Studio</div>
//               <div className="text-[15px] leading-relaxed text-white/80">
//                 Photography • Motion • Branding • Content Systems
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-2 pt-2">
//               {[
//                 ["Photography / Modeling", "/services/photography"],
//                 ["Branding", "/services/branding"],
//                 ["Content Creation", "/services/content"],
//                 ["Marketing", "/services/marketing"],
//                 ["Media Design", "/services/media-design"],
//               ].map(([label, href]) => (
//                 <Link key={label} href={href} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80 hover:border-white/50 hover:text-white">
//                   {label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           <div className="relative z-[1] space-y-3 md:col-span-3">
//             <div className="text-sm uppercase tracking-wider text-white/60">Social</div>
//             <ul className="space-y-2 text-[15px]">
//               <li><a href="#" className="hover:opacity-80">Instagram</a></li>
//               <li><a href="#" className="hover:opacity-80">LinkedIn</a></li>
//               <li><a href="#" className="hover:opacity-80">Behance</a></li>
//               <li><a href="#" className="hover:opacity-80">YouTube</a></li>
//               <li><a href="#" className="hover:opacity-80">TikTok</a></li>
//             </ul>
//           </div>
//         </div>

//         <div className="relative z-[1] mx-5 border-t border-white/10 md:mx-8" />

//         {/* Wordmark without extra background bar */}
//         <div className="relative z-[1] mx-3 mt-5">
//           <div className="px-2 pb-2 pt-3 md:px-4">
//             <div
//               id="void-wordmark"
//               className="select-none text-[20vw] font-extrabold leading-none tracking-tight text-white"
//               style={{ letterSpacing: "-0.03em" }}
//               aria-hidden
//             >
//               VOID
//             </div>
//           </div>
//         </div>

//         <div className="relative z-[1] flex flex-wrap items-center justify-between gap-4 px-5 pb-6 md:px-8">
//           <div className="flex flex-wrap gap-2">
//             {["Studios", "Articles", "Projects", "Philosophy", "Collab"].map((x) => (
//               <Link key={x} href="#" className="rounded-full border border-white/20 px-3 py-1 text-[11px] text-white/80 hover:border-white/50 hover:text-white">
//                 {x}
//               </Link>
//             ))}
//           </div>

//           <div className="flex w-full items-center justify-between text-[11px] text-white/60 md:w-auto md:gap-6">
//             <span>© {year} VOID. All rights reserved.</span>
//             <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
//             <Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
//             <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="ml-auto rounded-full px-2 py-1 hover:text-white md:ml-0">
//               Back to top ↑
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






















"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

const ACCENT = "#F9D84A";

/* ================= BG: trail + text-only colliders (constant-speed) ================= */
type Rect = { x: number; y: number; w: number; h: number; id: number };

const DPR = () =>
  typeof window !== "undefined"
    ? Math.max(1, Math.min(2, window.devicePixelRatio || 1))
    : 1;

// put this above your JSX
const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://www.instagram.com/void.creatives/" },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/void-creatives" },   // update if different
  { label: "Behance",   href: "https://www.behance.net/voidcreatives" },              // update if different
  { label: "YouTube",   href: "https://www.youtube.com/@voidcreatives" },             // update if different
  { label: "TikTok",    href: "https://www.tiktok.com/@void.creatives" },             // update if different
];


function FooterBGTrail({
  colliderSelector = ".text-collider",
  ballColor = "rgba(232,232,232,0.95)",
  fadeAlpha = 0.18,
  speed = { x: 340, y: 260 }, // initial velocity components (px/s)
}: {
  colliderSelector?: string;
  ballColor?: string;
  fadeAlpha?: number;
  speed?: { x: number; y: number };
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  // ball state
  const pos = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: speed.x, y: speed.y });
  const radius = 10;

  // target speed magnitude stays fixed
  const targetSpeedRef = useRef(Math.hypot(speed.x, speed.y) || 1);

  // colliders + bookkeeping
  const colliders = useRef<Rect[]>([]);
  const lastHitId = useRef<number | null>(null);
  const lastHitAt = useRef<number>(0);

  const rafRef = useRef<number | null>(null);
  const lastTs = useRef<number | null>(null);
  const [ready, setReady] = useState(false);

  // keep velocity magnitude exactly = target
  const normalizeSpeed = () => {
    const s = Math.hypot(vel.current.x, vel.current.y) || 1;
    const t = targetSpeedRef.current;
    vel.current.x = (vel.current.x / s) * t;
    vel.current.y = (vel.current.y / s) * t;
  };

  useEffect(() => {
    // if props change, update target and rescale current velocity
    targetSpeedRef.current = Math.hypot(speed.x, speed.y) || 1;
    normalizeSpeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speed.x, speed.y]);

  const sizeCanvas = () => {
    if (!wrapRef.current || !canvasRef.current) return;
    const cvs = canvasRef.current!;
    const d = DPR();
    const { width, height } = wrapRef.current.getBoundingClientRect();
    cvs.width = Math.max(1, Math.floor(width * d));
    cvs.height = Math.max(1, Math.floor(height * d));
    cvs.style.width = `${width}px`;
    cvs.style.height = `${height}px`;
    const ctx = cvs.getContext("2d")!;
    ctx.setTransform(d, 0, 0, d, 0, 0);
  };

  const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

  const collectTextRects = () => {
    if (!wrapRef.current) return;
    const parentBox = wrapRef.current.getBoundingClientRect();
    const found: Rect[] = [];
    let idCounter = 1;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(colliderSelector));
    elements.forEach((el) => {
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
      let node: Node | null = walker.nextNode();
      while (node) {
        const range = document.createRange();
        range.selectNodeContents(node);
        const rectList = range.getClientRects();
        for (let i = 0; i < rectList.length; i++) {
          const r = rectList[i];
          if (r.width < 2 || r.height < 2) continue;
          const x = r.left - parentBox.left;
          const y = r.top - parentBox.top;
          found.push({ x, y, w: r.width, h: r.height, id: idCounter++ });
        }
        node = walker.nextNode();
      }
    });

    colliders.current = found;
  };

  // circle vs rect collision
  const collideCircleRect = (
    cx: number,
    cy: number,
    r: number,
    rect: Rect
  ): { hit: boolean; nx: number; ny: number; resolveX: number; resolveY: number } => {
    const nnx = clamp(cx, rect.x, rect.x + rect.w);
    const nny = clamp(cy, rect.y, rect.y + rect.h);
    const dx = cx - nnx;
    const dy = cy - nny;
    const d2 = dx * dx + dy * dy;
    if (d2 > r * r) return { hit: false, nx: 0, ny: 0, resolveX: 0, resolveY: 0 };
    const d = Math.sqrt(d2) || 1;
    const nx = dx / d;
    const ny = dy / d;
    const pen = r - d + 0.5;
    return { hit: true, nx, ny, resolveX: nx * pen, resolveY: ny * pen };
  };

  const step = (ts: number) => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d")!;
    const { width, height } = canvasRef.current.getBoundingClientRect();

    // dt
    let dt = 0.016;
    if (lastTs.current != null) dt = Math.min(0.033, (ts - lastTs.current) / 1000);
    lastTs.current = ts;

    // integrate
    pos.current.x += vel.current.x * dt;
    pos.current.y += vel.current.y * dt;

    // walls (reflect AND normalize)
    if (pos.current.x - radius < 0) {
      pos.current.x = radius + 0.5;
      vel.current.x *= -1;
      normalizeSpeed();
    } else if (pos.current.x + radius > width) {
      pos.current.x = width - radius - 0.5;
      vel.current.x *= -1;
      normalizeSpeed();
    }
    if (pos.current.y - radius < 0) {
      pos.current.y = radius + 0.5;
      vel.current.y *= -1;
      normalizeSpeed();
    } else if (pos.current.y + radius > height) {
      pos.current.y = height - radius - 0.5;
      vel.current.y *= -1;
      normalizeSpeed();
    }

    // text collisions (reflect AND normalize)
    const now = performance.now();
    const cooldownMs = 60;
    for (const r of colliders.current) {
      const { hit, nx, ny, resolveX, resolveY } = collideCircleRect(
        pos.current.x,
        pos.current.y,
        radius,
        r
      );
      if (!hit) continue;
      if (lastHitId.current === r.id && now - lastHitAt.current < cooldownMs) continue;

      pos.current.x += resolveX;
      pos.current.y += resolveY;

      const dot = vel.current.x * nx + vel.current.y * ny;
      vel.current.x = vel.current.x - 2 * dot * nx;
      vel.current.y = vel.current.y - 2 * dot * ny;

      normalizeSpeed(); // <- keep speed constant

      lastHitId.current = r.id;
      lastHitAt.current = now;
      break;
    }

    // tiny safety: nudge speed back to target once per frame (handles FP drift)
    normalizeSpeed();

    // trail (fade instead of clear)
    ctx.fillStyle = `rgba(11,11,11,${fadeAlpha})`;
    ctx.fillRect(0, 0, width, height);

    // ball
    ctx.fillStyle = ballColor;
    ctx.beginPath();
    ctx.arc(pos.current.x, pos.current.y, radius, 0, Math.PI * 2);
    ctx.fill();

    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    if (!canvasRef.current || !wrapRef.current) return;

    const init = () => {
      sizeCanvas();
      collectTextRects();
      const rect = wrapRef.current!.getBoundingClientRect();
      pos.current.x = rect.width * 0.5;
      pos.current.y = rect.height * 0.5;
      vel.current.x = speed.x;
      vel.current.y = speed.y;
      targetSpeedRef.current = Math.hypot(speed.x, speed.y) || 1;
      normalizeSpeed();

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTs.current = null;
      rafRef.current = requestAnimationFrame(step);
      setReady(true);
    };

    init();

    const ro = new ResizeObserver(() => {
      sizeCanvas();
      collectTextRects();
    });
    ro.observe(wrapRef.current);

    const mo = new MutationObserver(() => collectTextRects());
    mo.observe(document.body, { subtree: true, characterData: true, childList: true });

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          if (!rafRef.current) rafRef.current = requestAnimationFrame(step);
        } else {
          if (rafRef.current) cancelAnimationFrame(rafRef.current);
          rafRef.current = null;
        }
      },
      { threshold: 0.05 }
    );
    io.observe(wrapRef.current);

    return () => {
      ro.disconnect();
      mo.disconnect();
      io.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={wrapRef} className="pointer-events-none absolute inset-0">
      <canvas ref={canvasRef} className="absolute inset-0" style={{ zIndex: 0, opacity: 0.9 }} aria-hidden />
      {!ready && (
        <div className="absolute inset-0 grid place-items-center text-neutral-400 text-xs">
          Initializing…
        </div>
      )}
    </div>
  );
}

/* =================================== FOOTER (unchanged below) =================================== */


export default function FooterVoid() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <section className="relative w-full bg-white py-6 md:py-8">
      <div className="relative mx-3 overflow-hidden rounded-3xl bg-black text-white shadow-[0_10px_40px_rgba(0,0,0,.25)] md:mx-6">
        {/* animated background behind everything (uses your trail logic) */}
        <FooterBGTrail
          colliderSelector=".text-collider"
          ballColor="rgba(255,255,255,0.95)"
          fadeAlpha={0.18}
          speed={{ x: 340, y: 260 }}
        />

        {/* Top label row */}
        <div className="relative z-[1] flex items-center justify-between px-5 pt-5 text-[11px] uppercase tracking-wider text-white/70 md:px-8">
          <span style={{ color: ACCENT }}>[ Big ideas, bigger results ]</span>
          <span className="text-white/60">’99</span>
        </div>

        {/* Main grid */}
        <div className="relative z-[1] grid grid-cols-1 gap-8 px-5 pb-6 pt-6 md:grid-cols-12 md:gap-10 md:px-8">
          {/* Left nav */}
          <nav className="md:col-span-3">
            <ul className="space-y-3 text-lg md:text-xl">
              <li><Link href="/" className="hover:opacity-80 text-collider">Home</Link></li>
              <li><Link href="/who-we-are" className="hover:opacity-80 text-collider">Who We Are</Link></li>
              <li><Link href="/projects" className="hover:opacity-80 text-collider">Projects</Link></li>
              <li><Link href="/testimonials" className="hover:opacity-80 text-collider">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:opacity-80 text-collider">Contact</Link></li>
            </ul>
          </nav>

          {/* Middle */}
          <div className="relative z-[1] space-y-8 md:col-span-6">
            <div>
              <div className="mb-2 text-sm uppercase tracking-wider text-white/60 text-collider">Contact</div>
              <div className="text-[15px] leading-relaxed text-collider">
                <a href="mailto:hello@voidcreatives.com" className="hover:opacity-80">
                  hello@voidcreatives.com
                </a>
                <div className="text-white/60">Los Angeles, CA • Remote</div>
              </div>
            </div>

            <div>
              <div className="mb-2 text-sm uppercase tracking-wider text-white/60 text-collider">Studio</div>
              <div className="text-[15px] leading-relaxed text-white/80 text-collider">
                Photography • Motion • Branding • Content Systems
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                ["Photography / Modeling", "/services/photography"],
                ["Branding", "/services/branding"],
                ["Content Creation", "/services/content"],
                ["Marketing", "/services/marketing"],
                ["Media Design", "/services/media-design"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80 hover:border-white/50 hover:text-white text-collider"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: socials */}
          <div className="relative z-[1] space-y-3 md:col-span-3">
  <div className="text-sm uppercase tracking-wider text-white/60 text-collider">
    Social
  </div>
  <ul className="space-y-2 text-[15px]">
    {SOCIAL_LINKS.map(({ label, href }) => (
      <li key={label} className="text-collider">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${label} — opens in a new tab`}
          className="hover:opacity-80 underline decoration-transparent hover:decoration-current underline-offset-4 transition"
        >
          {label}
        </a>
      </li>
    ))}
  </ul>
</div>

        </div>

        {/* Divider */}
        <div className="relative z-[1] mx-5 border-t border-white/10 md:mx-8" />

        {/* Big VOID wordmark (tagged as text-collider so the ball can bounce on it) */}
        <div className="relative z-[1] mx-3 mt-5">
          <div className="px-2 pb-2 pt-3 md:px-4">
            <div
              id="void-wordmark"
              className="text-collider select-none text-[20vw] font-extrabold leading-none tracking-tight text-white"
              style={{ letterSpacing: "-0.03em" }}
              aria-hidden
            >
              VOID
            </div>
          </div>
        </div>

        {/* Bottom chips + legal row */}
        <div className="relative z-[1] flex flex-wrap items-center justify-between gap-4 px-5 pb-6 md:px-8">
          <div className="flex flex-wrap gap-2">
            {["Studios", "Articles", "Projects", "Philosophy", "Collab"].map((x) => (
              <Link
                key={x}
                href=""
                className="rounded-full border border-white/20 px-3 py-1 text-[11px] text-white/80 hover:border-white/50 hover:text-white text-collider"
              >
                {x}
              </Link>
            ))}
          </div>

          <div className="flex w-full items-center justify-between text-[11px] text-white/60 md:w-auto md:gap-6">
            <span>© {year} VOID. All rights reserved.</span>
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms &amp; Conditions</Link>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="ml-auto rounded-full px-2 py-1 hover:text-white md:ml-0"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
