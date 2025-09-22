"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Pong with TEXT-ONLY colliders:
 * - Collides against per-line text boxes collected from elements that have .text-collider
 * - Avoids card borders, so no more "stuck in the card" laggy behavior
 * - Simple circle-vs-rect resolution with small epsilon & collision cooldown
 */

type Rect = { x: number; y: number; w: number; h: number; id: number };

const DPR = () => (typeof window !== "undefined" ? Math.max(1, Math.min(2, window.devicePixelRatio || 1)) : 1);

export default function PongVoidTextBounds({
  colliderSelector = ".text-collider",
  bg = "#0b0b0b",
  ballColor = "#E8E8E8",
  trail = true,
}: {
  colliderSelector?: string;
  bg?: string;
  ballColor?: string;
  trail?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // ball state
  const pos = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: 340, y: 260 }); // px/s
  const radius = 10;

  // colliders + bookkeeping
  const colliders = useRef<Rect[]>([]);
  const lastHitId = useRef<number | null>(null);
  const lastHitAt = useRef<number>(0);

  const rafRef = useRef<number | null>(null);
  const lastTs = useRef<number | null>(null);

  const [ready, setReady] = useState(false);

  // --- Helpers -------------------------------------------------------------

  const sizeCanvas = () => {
    const cvs = canvasRef.current!;
    const d = DPR();
    const parent = containerRef.current!;
    const { width, height } = parent.getBoundingClientRect();
    cvs.width = Math.max(1, Math.floor(width * d));
    cvs.height = Math.max(1, Math.floor(height * d));
    cvs.style.width = `${width}px`;
    cvs.style.height = `${height}px`;
    const ctx = cvs.getContext("2d")!;
    ctx.setTransform(d, 0, 0, d, 0, 0);
  };

  const collectTextRects = () => {
    const parent = containerRef.current!;
    const parentBox = parent.getBoundingClientRect();
    const dpr = 1; // we already transform ctx; keep collider coords in CSS pixels
    const found: Rect[] = [];
    let idCounter = 1;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(colliderSelector));
    elements.forEach((el) => {
      // For each text node under this element, collect per-line boxes
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null);
      let node: Node | null = walker.nextNode();
      while (node) {
        const range = document.createRange();
        range.selectNodeContents(node);
        const rectList = range.getClientRects();
        for (let i = 0; i < rectList.length; i++) {
          const r = rectList[i];
          // skip zero-sized
          if (r.width < 2 || r.height < 2) continue;
          // map to container-local coords
          const x = (r.left - parentBox.left) * dpr;
          const y = (r.top - parentBox.top) * dpr;
          const w = r.width * dpr;
          const h = r.height * dpr;
          found.push({ x, y, w, h, id: idCounter++ });
        }
        node = walker.nextNode();
      }
    });

    colliders.current = found;
  };

  const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

  // circle vs rect collision + response
  const collideCircleRect = (
    cx: number,
    cy: number,
    r: number,
    vx: { x: number; y: number },
    rect: Rect
  ): { hit: boolean; nx: number; ny: number; resolveX: number; resolveY: number } => {
    const nnx = clamp(cx, rect.x, rect.x + rect.w);
    const nny = clamp(cy, rect.y, rect.y + rect.h);
    const dx = cx - nnx;
    const dy = cy - nny;
    const dist2 = dx * dx + dy * dy;
    if (dist2 > r * r) return { hit: false, nx: 0, ny: 0, resolveX: 0, resolveY: 0 };

    // avoid zero-length normals
    const dist = Math.sqrt(dist2) || 1;
    const nx = dx / dist;
    const ny = dy / dist;

    // push out by penetration + epsilon
    const pen = r - dist + 0.5; // epsilon
    const resolveX = nx * pen;
    const resolveY = ny * pen;

    return { hit: true, nx, ny, resolveX, resolveY };
  };

  // --- Animation loop ------------------------------------------------------

  const step = (ts: number) => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d")!;
    const { width, height } = canvasRef.current.getBoundingClientRect();

    // delta time (cap to avoid huge jumps)
    let dt = 0.016;
    if (lastTs.current != null) dt = Math.min(0.033, (ts - lastTs.current) / 1000);
    lastTs.current = ts;

    // integrate
    pos.current.x += vel.current.x * dt;
    pos.current.y += vel.current.y * dt;

    // walls
    if (pos.current.x - radius < 0) {
      pos.current.x = radius + 0.5;
      vel.current.x *= -1;
    } else if (pos.current.x + radius > width) {
      pos.current.x = width - radius - 0.5;
      vel.current.x *= -1;
    }
    if (pos.current.y - radius < 0) {
      pos.current.y = radius + 0.5;
      vel.current.y *= -1;
    } else if (pos.current.y + radius > height) {
      pos.current.y = height - radius - 0.5;
      vel.current.y *= -1;
    }

    // collisions with text rects
    const now = performance.now();
    const cooldownMs = 60; // throttle repeated hits on same rect
    for (const r of colliders.current) {
      const { hit, nx, ny, resolveX, resolveY } = collideCircleRect(
        pos.current.x,
        pos.current.y,
        radius,
        vel.current,
        r
      );
      if (!hit) continue;

      // skip if we just hit this same id
      if (lastHitId.current === r.id && now - lastHitAt.current < cooldownMs) continue;

      // positional correction
      pos.current.x += resolveX;
      pos.current.y += resolveY;

      // reflect velocity
      const dot = vel.current.x * nx + vel.current.y * ny;
      vel.current.x = vel.current.x - 2 * dot * nx;
      vel.current.y = vel.current.y - 2 * dot * ny;

      // damp a hair to reduce chatter
      vel.current.x *= 0.985;
      vel.current.y *= 0.985;

      lastHitId.current = r.id;
      lastHitAt.current = now;
      break; // handle one collider per frame to avoid multi-bounce chaos
    }

    // draw
    if (!trail) {
      ctx.clearRect(0, 0, width, height);
    } else {
      ctx.fillStyle = "rgba(11,11,11,0.18)";
      ctx.fillRect(0, 0, width, height);
    }

    // optional: visual debug of text rects
    // ctx.strokeStyle = "rgba(255,255,255,0.12)";
    // for (const r of colliders.current) ctx.strokeRect(r.x, r.y, r.w, r.h);

    // ball
    ctx.fillStyle = ballColor;
    ctx.beginPath();
    ctx.arc(pos.current.x, pos.current.y, radius, 0, Math.PI * 2);
    ctx.fill();

    rafRef.current = requestAnimationFrame(step);
  };

  // --- Effects -------------------------------------------------------------

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const init = () => {
      sizeCanvas();
      collectTextRects();

      // start ball in center
      const rect = containerRef.current!.getBoundingClientRect();
      pos.current.x = rect.width * 0.5;
      pos.current.y = rect.height * 0.5;

      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTs.current = null;
      rafRef.current = requestAnimationFrame(step);
      setReady(true);
    };

    init();

    // Recalc on resize or font reflow
    const ro = new ResizeObserver(() => {
      sizeCanvas();
      collectTextRects();
    });
    ro.observe(containerRef.current);

    // Light mutation observer: if text content changes, refresh
    const mo = new MutationObserver(() => {
      collectTextRects();
    });
    mo.observe(document.body, { subtree: true, characterData: true, childList: true });

    // On scroll, the DOM rects are relative to container, so no update needed
    // unless the container itself moves (handled by ResizeObserver sizing).

    return () => {
      ro.disconnect();
      mo.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      <canvas ref={canvasRef} className="block w-full" style={{ background: bg }} />
      {!ready && (
        <div className="pointer-events-none absolute inset-0 grid place-items-center text-neutral-400">
          Initializing…
        </div>
      )}
    </div>
  );
}
