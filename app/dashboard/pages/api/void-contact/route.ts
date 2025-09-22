// app/api/void-contact/route.ts
import { NextResponse } from "next/server";

export const runtime = "edge"; // keep it fast; works with fetch()

type Payload = {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  services: string[];
  budget?: string;
  timeline?: string;
  message: string;
  source?: string;
};

function esc(s: string = "") {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function adminHtml(p: Payload) {
  const services = p.services.length ? p.services.join(", ") : "—";
  return `
  <div style="font:14px/1.5 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; color:#111">
    <h2 style="margin:0 0 12px">New project inquiry</h2>
    <table style="border-collapse:collapse; width:100%">
      ${[
        ["Name", esc(p.name)],
        ["Email", esc(p.email)],
        ["Phone", esc(p.phone || "—")],
        ["Company", esc(p.company || "—")],
        ["Services", esc(services)],
        ["Budget", esc(p.budget || "—")],
        ["Timeline", esc(p.timeline || "—")],
        ["Source", esc(p.source || "—")],
      ]
        .map(
          ([k, v]) =>
            `<tr>
               <td style="padding:8px;border:1px solid #eee;background:#fafafa;width:160px"><strong>${k}</strong></td>
               <td style="padding:8px;border:1px solid #eee">${v}</td>
             </tr>`
        )
        .join("")}
      <tr>
        <td style="padding:8px;border:1px solid #eee;background:#fafafa"><strong>Message</strong></td>
        <td style="padding:12px;border:1px solid #eee;white-space:pre-wrap">${esc(p.message)}</td>
      </tr>
    </table>
  </div>`;
}

function userHtml(p: Payload) {
  return `
  <div style="font:14px/1.6 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; color:#111;background:#0b0b0b;padding:24px">
    <div style="max-width:640px;margin:0 auto;background:#111;border:1px solid #222;border-radius:14px;overflow:hidden">
      <div style="padding:18px 20px;background:linear-gradient(180deg,#191919,#0f0f0f);border-bottom:1px solid #222">
        <div style="font-weight:800;font-size:18px;letter-spacing:.08em;color:#F9D84A">VOID</div>
      </div>
      <div style="padding:22px 20px;color:#eee">
        <h2 style="margin:0 0 6px;font-size:22px;color:#fff">Thanks, ${esc(p.name)} — we got your message.</h2>
        <p style="margin:0 0 12px;color:#cfcfcf">
          Our team will review and reply shortly. Here’s a copy of what you sent:
        </p>
        <div style="border:1px solid #222;border-radius:10px;padding:14px;background:#0e0e0e;color:#ddd">
          <pre style="margin:0;white-space:pre-wrap;font:13px/1.5 ui-monospace, SFMono-Regular, Menlo, monospace">${esc(
            p.message
          )}</pre>
        </div>
        <p style="margin:16px 0 0;color:#cfcfcf">If anything changes, just reply to this email.</p>
      </div>
      <div style="padding:14px 20px;border-top:1px solid #222;color:#aaa;font-size:12px">
        VOID Studio · Los Angeles, CA
      </div>
    </div>
  </div>`;
}

async function sendWithResend(to: string, subject: string, html: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.FROM_EMAIL, // e.g. 'VOID <noreply@yourdomain.com>'
      to,
      subject,
      html,
    }),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.message || "Resend request failed");
  return data;
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as Payload;

    // Basic requireds
    if (!payload.name || !payload.email || !payload.message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Admin copy
    await sendWithResend(
      process.env.TO_EMAIL!,
      `New project inquiry — ${payload.name}`,
      adminHtml(payload)
    );

    // User confirmation (best-effort)
    if (payload.email) {
      await sendWithResend(
        payload.email,
        "Thanks for reaching out to VOID",
        userHtml(payload)
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Email failed";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
