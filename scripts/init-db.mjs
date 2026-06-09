// One-time (idempotent) schema setup for the demo-request lead store.
// Run with: npm run db:init
import { readFileSync } from "node:fs";
import { neon } from "@neondatabase/serverless";

function loadNeonUrl() {
  if (process.env.NEON_DB) return process.env.NEON_DB;
  for (const file of [".env.local", ".env"]) {
    try {
      const m = readFileSync(file, "utf8").match(/^\s*NEON_DB\s*=\s*(.+)\s*$/m);
      if (m) return m[1].trim().replace(/^["']|["']$/g, "");
    } catch {
      // file may not exist — keep looking
    }
  }
  return null;
}

const url = loadNeonUrl();
if (!url) {
  console.error("NEON_DB is not set (checked env, .env.local, .env). Aborting.");
  process.exit(1);
}

const sql = neon(url);
await sql`
  CREATE TABLE IF NOT EXISTS demo_requests (
    id           BIGSERIAL PRIMARY KEY,
    name         TEXT NOT NULL,
    email        TEXT NOT NULL,
    company      TEXT NOT NULL,
    sells        TEXT,
    system_today TEXT,
    team_size    TEXT,
    message      TEXT,
    created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
  )
`;
await sql`CREATE INDEX IF NOT EXISTS demo_requests_created_at_idx ON demo_requests (created_at DESC)`;
console.log("✓ demo_requests table is ready");
