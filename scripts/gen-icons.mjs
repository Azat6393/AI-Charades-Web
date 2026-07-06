import sharp from "sharp";
import { mkdirSync } from "node:fs";

const logo = "src/assets/brand/logo.png";

mkdirSync("public/icons", { recursive: true });

const targets = [
  { file: "public/apple-touch-icon.png", size: 180 },
  { file: "public/icons/icon-192.png", size: 192 },
  { file: "public/icons/icon-512.png", size: 512 },
  { file: "public/favicon-32.png", size: 32 },
];

for (const t of targets) {
  await sharp(logo).resize(t.size, t.size).png().toFile(t.file);
  console.log("wrote", t.file);
}

// OG cover 1200x630 — coral card with mascot on the right, wordmark + copy on the left
const mascotBuf = await sharp(logo).resize(420, 420).png().toBuffer();

const ogBackground = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#F5E9C9" />
  <circle cx="1120" cy="60" r="120" fill="#FFE4D6" />
  <circle cx="60" cy="580" r="160" fill="#D3F5E3" />
  <text x="90" y="250" font-family="Arial, sans-serif" font-weight="700" font-size="76" fill="#1A1410">AI Charades</text>
  <text x="90" y="310" font-family="Arial, sans-serif" font-weight="700" font-size="38" fill="#FF5A3C">The word game with a brain</text>
  <text x="90" y="380" font-family="Arial, sans-serif" font-size="28" fill="#1A1410">Outsmart the AI. Then pass the phone.</text>
  <rect x="90" y="440" width="230" height="64" rx="14" fill="#1A1410" />
  <text x="120" y="480" font-family="Arial, sans-serif" font-size="24" fill="#FFFFFF">App Store</text>
  <rect x="340" y="440" width="230" height="64" rx="14" fill="#1A1410" />
  <text x="365" y="480" font-family="Arial, sans-serif" font-size="24" fill="#FFFFFF">Google Play</text>
</svg>`;

await sharp(Buffer.from(ogBackground))
  .composite([{ input: mascotBuf, left: 720, top: 105 }])
  .png()
  .toFile("public/og/og-cover.png");
console.log("wrote public/og/og-cover.png");
