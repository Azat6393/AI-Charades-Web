-- Waitlist signups, written by functions/api/waitlist.ts.
-- Apply locally:  npx wrangler d1 execute ai-charades-waitlist --local --file=db/schema.sql
-- Apply to prod:  npx wrangler d1 execute ai-charades-waitlist --remote --file=db/schema.sql
CREATE TABLE IF NOT EXISTS waitlist (
  email TEXT PRIMARY KEY,
  lang TEXT NOT NULL DEFAULT '',
  country TEXT NOT NULL DEFAULT '',
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
