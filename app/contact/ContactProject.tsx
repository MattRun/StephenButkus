"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ACCENT = "#F9D84A";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  services: string[];
  budget: string;
  timeline: string;
  source: string;
  message: string;
  botField?: string; // honeypot
};

const SERVICE_OPTIONS = [
  "Photography / Modeling",
  "Branding & Identity",
  "Content Creation",
  "Marketing & Media Design",
  "Motion / Video",
];

const BUDGETS = ["$2–5k", "$5–15k", "$15–50k", "$50k+"];

const TIMELINES = ["ASAP", "2–4 weeks", "1–3 months", "Flexible"];

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [],
    budget: "",
    timeline: "",
    source: "",
    message: "",
    botField: "",
  });

  const toggleService = (label: string) => {
    setForm((f) => {
      const has = f.services.includes(label);
      return { ...f, services: has ? f.services.filter((s) => s !== label) : [...f.services, label] };
    });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);

    // Honeypot
    if (form.botField) return;

    if (!form.name || !form.email || !form.message) {
      setErr("Please fill in your name, email, and a short message.");
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        company: form.company.trim(),
        services: form.services,
        budget: form.budget,
        timeline: form.timeline,
        message: form.message.trim(),
        source: form.source.trim(),
      };

      const res = await fetch("/api/void-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data?.error || "Failed to send");

      setOk(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        services: [],
        budget: "",
        timeline: "",
        source: "",
        message: "",
        botField: "",
      });
    } catch (e: any) {
      setErr(e?.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="relative w-full bg-black text-white">
      {/* Background image + scrim */}
      <div className="absolute inset-0">
        <Image
          src="/Projects/SAFAR/SAFAR_stephenbutkus11.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_70%_at_50%_0%,transparent,transparent,rgba(0,0,0,.55))]" />
      </div>

      <section className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-12 md:px-8 md:py-24">
        {/* Left: Page intro */}
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-[0.22em] text-white/70">[ Create a Project ]</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
            From brief to <span className="text-white" style={{ color: ACCENT }}>breakthrough</span>.
          </h1>
          <p className="mt-3 max-w-md text-white/75">
            Tell us what you’re building. We’ll craft the plan, the team, and the visuals to match.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-white/60">
            <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} />
            <span>Avg response time: under 1 business day</span>
          </div>
        </div>

        {/* Right: Form card */}
        <form
          onSubmit={submit}
          className="md:col-span-8"
          autoComplete="off"
        >
          <div className="overflow-hidden rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur">
            <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-2 md:gap-6 md:p-6">
              {/* Honeypot */}
              <input
                type="text"
                name="company-website"
                className="hidden"
                value={form.botField}
                onChange={(e) => setForm((f) => ({ ...f, botField: e.target.value }))}
              />

              <Field
                label="Your name *"
                value={form.name}
                onChange={(v) => setForm((f) => ({ ...f, name: v }))}
                placeholder="Jane Doe"
              />
              <Field
                label="Email *"
                type="email"
                value={form.email}
                onChange={(v) => setForm((f) => ({ ...f, email: v }))}
                placeholder="you@company.com"
              />
              <Field
                label="Phone"
                value={form.phone}
                onChange={(v) => setForm((f) => ({ ...f, phone: v }))}
                placeholder="(xxx) xxx-xxxx"
              />
              <Field
                label="Company"
                value={form.company}
                onChange={(v) => setForm((f) => ({ ...f, company: v }))}
                placeholder="Brand / Studio / Org"
              />

              {/* Services */}
              <div className="md:col-span-2">
                <Label>What do you need?</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {SERVICE_OPTIONS.map((s) => {
                    const active = form.services.includes(s);
                    return (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        className={`rounded-full px-3 py-1 text-[12px] tracking-wide transition
                          ${active ? "bg-white text-black shadow" : "border border-white/30 text-white/85 hover:border-white/60"}`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget / timeline / source */}
              <SelectChips
                label="Budget"
                options={BUDGETS}
                value={form.budget}
                onChange={(v) => setForm((f) => ({ ...f, budget: v }))}
              />
              <SelectChips
                label="Timeline"
                options={TIMELINES}
                value={form.timeline}
                onChange={(v) => setForm((f) => ({ ...f, timeline: v }))}
              />
              <Field
                className="md:col-span-2"
                label="How did you hear about us?"
                value={form.source}
                onChange={(v) => setForm((f) => ({ ...f, source: v }))}
                placeholder="Referral, Instagram, Article…"
              />

              {/* Message */}
              <div className="md:col-span-2">
                <Label>Project details *</Label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  rows={6}
                  placeholder="Goals, deliverables, references, locations, dates…"
                  className="mt-2 w-full resize-y rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/40"
                />
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 px-5 py-4 md:px-6">
              <p className="text-[11px] uppercase tracking-widest text-white/60">
                We’ll reply by email. Your info stays private.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold tracking-wide text-white backdrop-blur transition hover:bg-white/20 disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Send inquiry ↗"}
              </button>
            </div>
          </div>

          {/* Errors / success */}
          <div className="mt-3 min-h-[24px] text-sm">
            {err && <p className="text-red-300">{err}</p>}
          </div>
        </form>
      </section>

      {/* Success overlay */}
      <AnimatePresence>
        {ok && (
          <motion.div
            className="fixed inset-0 z-[60] grid place-items-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOk(false)}
          >
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="w-[92vw] max-w-md rounded-2xl border border-white/15 bg-black/80 p-6 text-center shadow-2xl"
            >
              <div
                className="mx-auto mb-3 h-10 w-10 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
              <h3 className="text-xl font-bold">Message sent</h3>
              <p className="mt-1 text-white/70">We’ll be in touch shortly.</p>
              <button
                onClick={() => setOk(false)}
                className="mt-4 rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 hover:bg-white/10"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

/* ---------- tiny UI bits ---------- */

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs uppercase tracking-wider text-white/70">{children}</label>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-white/40"
      />
    </div>
  );
}

function SelectChips({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className={`rounded-full px-3 py-1 text-[12px] tracking-wide transition
                ${active ? "bg-white text-black shadow" : "border border-white/30 text-white/85 hover:border-white/60"}`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
