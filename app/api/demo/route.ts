import { NextResponse } from "next/server";
import { neon } from "@neondatabase/serverless";
import { Resend } from "resend";
import { demoRequestSchema } from "@/lib/demo-schema";

// Field sales reps are not on the edge; use the Node runtime so the
// Neon driver and Resend SDK behave predictably.
export const runtime = "nodejs";

const DEMO_TO = process.env.DEMO_TO ?? "omkar@ottosales.ai";
const DEMO_FROM = process.env.DEMO_FROM ?? "Otto <onboarding@resend.dev>";

async function storeLead(data: ReturnType<typeof demoRequestSchema.parse>) {
  const connectionString = process.env.NEON_DB;
  if (!connectionString) {
    console.warn("[demo] NEON_DB not set — skipping DB insert");
    return;
  }
  // Table is provisioned once via `npm run db:init` (scripts/init-db.mjs),
  // not on every request.
  const sql = neon(connectionString);
  await sql`
    INSERT INTO demo_requests (name, email, company, sells, system_today, team_size, message)
    VALUES (${data.name}, ${data.email}, ${data.company}, ${data.sells || null},
            ${data.systemToday || null}, ${data.teamSize || null}, ${data.message || null})
  `;
}

async function emailLead(data: ReturnType<typeof demoRequestSchema.parse>) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[demo] RESEND_API_KEY not set — skipping email");
    return;
  }
  const resend = new Resend(apiKey);
  const rows = [
    ["Name", data.name],
    ["Email", data.email],
    ["Company", data.company],
    ["What they sell", data.sells],
    ["System today", data.systemToday],
    ["Team size", data.teamSize],
    ["Message", data.message],
  ]
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

  await resend.emails.send({
    from: DEMO_FROM,
    to: DEMO_TO,
    replyTo: data.email,
    subject: `Otto demo request — ${data.company}`,
    text: `New demo request for Otto (industrial field sales)\n\n${rows}`,
  });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = demoRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 422 },
    );
  }

  // Persist first (durable), then notify. Email failure should not lose the lead.
  const results = await Promise.allSettled([
    storeLead(parsed.data),
    emailLead(parsed.data),
  ]);

  const stored = results[0];
  if (stored.status === "rejected") {
    console.error("[demo] DB insert failed:", stored.reason);
    // If we couldn't store AND couldn't email, surface an error.
    if (results[1].status === "rejected") {
      console.error("[demo] Email failed:", results[1].reason);
      return NextResponse.json(
        { error: "Could not save your request. Please email omkar@ottosales.ai." },
        { status: 500 },
      );
    }
  }
  if (results[1].status === "rejected") {
    console.error("[demo] Email failed:", results[1].reason);
  }

  return NextResponse.json({ ok: true });
}
