// Cloudflare Pages Function: POST /api/waitlist
// Stores waitlist signups in the D1 database bound as `DB` (see wrangler.toml).
// One-time setup: npx wrangler d1 create ai-charades-waitlist, paste the id
// into wrangler.toml, then apply db/schema.sql (see README section in repo).

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  run(): Promise<unknown>;
}

interface Env {
  DB: { prepare(query: string): D1PreparedStatement };
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function onRequestPost(context: {
  request: Request;
  env: Env;
}): Promise<Response> {
  const { request, env } = context;

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json({ ok: false, error: "bad_request" }, 400);
  }

  // Honeypot field: humans never see it, bots fill everything.
  // Pretend success so bots don't retry, store nothing.
  if (form.get("website")) return json({ ok: true });

  const email = String(form.get("email") ?? "")
    .trim()
    .toLowerCase();
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return json({ ok: false, error: "invalid_email" }, 400);
  }

  const lang = String(form.get("lang") ?? "").slice(0, 8);
  const country = request.headers.get("cf-ipcountry") ?? "";

  // INSERT OR IGNORE: signing up twice is a success, not an error.
  await env.DB.prepare(
    "INSERT OR IGNORE INTO waitlist (email, lang, country) VALUES (?1, ?2, ?3)"
  )
    .bind(email, lang, country)
    .run();

  return json({ ok: true });
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json" },
  });
}
