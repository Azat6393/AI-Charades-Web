export const site = {
  name: "AI Charades",
  domain: "https://ai-charades.net",
  tagline: "The word game with a brain",
  appStoreUrl: "TODO_APPSTORE_URL", // https://apps.apple.com/app/id__________
  playStoreUrl: "TODO_PLAY_URL", // https://play.google.com/store/apps/details?id=__________
  appStoreId: "TODO_APPSTORE_ID",
  // App is not published yet: store badges open the waitlist dialog instead of
  // linking to the stores. Flip to false once the store URLs above are real.
  preLaunch: true,
  // Cloudflare Pages Function that stores waitlist signups in D1.
  // See functions/api/waitlist.ts and wrangler.toml.
  waitlistEndpoint: "/api/waitlist",
  supportEmail: "support@ai-charades.net",
  analytics: "cloudflare" as const,
  rating: null as { value: number; count: number } | null,
  languagesCount: 19,
  packsCount: "40+",
};

export const faq = [
  {
    q: "Is AI Charades free?",
    a: "Yes — you can download and play for free on iPhone and Android.",
  },
  {
    q: "What is AI Charades?",
    a: "It's two word games in one: a solo mode where you outsmart an AI hiding a secret word (like 20 Questions), and a classic heads-up charades party mode where you pass the phone to friends.",
  },
  {
    q: "Do I need the internet to play?",
    a: "The heads-up party mode plays fully offline. The AI solo mode and AI-generated decks need a connection.",
  },
  {
    q: "How does the AI mode work?",
    a: "Fiesta, the in-game AI, secretly picks a word and answers your yes/no questions. You crack the word in as few guesses as possible — and it genuinely reasons, so no two games are the same.",
  },
  {
    q: "How many people can play?",
    a: "Solo mode is one-on-one against the AI. Heads-up party mode supports a whole group — add as many players as you like and pass the phone around.",
  },
  {
    q: "Can I make my own word packs?",
    a: "Yes. Create custom categories on any topic, or let the AI generate a full pack of words for you in seconds.",
  },
  {
    q: "What word packs are included?",
    a: "40+ and growing — Animals, Movies, Anime, Brands, Food, Sports, Music, Disney, Video Games, Kitchen, Jobs and many more.",
  },
  {
    q: "What's the Daily Word?",
    a: "A single new word every day, the same for every player. Solve it daily to build your streak.",
  },
  {
    q: "What languages are supported?",
    a: "19, including English, Spanish, French, German, Portuguese, Italian, Russian, Turkish, Japanese, Korean, Chinese, Arabic and Hindi.",
  },
  {
    q: "Which devices is it on?",
    a: "iPhone (App Store) and Android (Google Play).",
  },
];

export const categories = [
  "Animals", "Movies", "Anime", "Brands", "Food", "Sports", "Music", "Disney",
  "Video Games", "Kitchen", "Jobs", "Countries", "Famous People", "Cartoons",
  "Superheroes", "Nature", "TV Shows", "Emojis", "Colors & Shapes", "Instruments",
];
