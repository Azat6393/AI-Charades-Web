// Guides are English-only SEO landing pages. Each entry drives the /guides/
// index cards and cross-linking between guides. Slugs are the target keyword.
export interface GuideMeta {
  slug: string;
  /** <title> — leads with the exact keyword the page targets. */
  title: string;
  description: string;
  /** Card copy on the guides index. */
  cardTitle: string;
  cardBlurb: string;
  icon: string;
}

export const guides: GuideMeta[] = [
  {
    slug: "how-to-play-charades",
    title: "How to Play Charades: Rules, Gestures & Setup (2026 Guide)",
    description:
      "Learn how to play charades: full rules, hand signals, team setup, timing, and word ideas — plus how to play charades on your phone with zero prep.",
    cardTitle: "How to play charades",
    cardBlurb: "The complete rules — gestures, teams, timing — and the zero-prep phone version.",
    icon: "🎭",
  },
  {
    slug: "charades-words",
    title: "150+ Charades Words & Ideas: Easy, Funny & Hard Lists",
    description:
      "The best charades words for your next game night: easy words for kids, funny words for adults, movies, animals, actions and hard expert-level ideas.",
    cardTitle: "Charades words & ideas",
    cardBlurb: "150+ words sorted by difficulty and theme, ready for your next game night.",
    icon: "📝",
  },
  {
    slug: "charades-word-generator",
    title: "Charades Word Generator: Unlimited Ideas with AI",
    description:
      "Never run out of charades words. See how an AI charades generator builds a full custom word pack on any topic in seconds — free on iPhone and Android.",
    cardTitle: "Charades word generator",
    cardBlurb: "Type any topic, get a full word pack in seconds — powered by AI.",
    icon: "✨",
  },
  {
    slug: "how-to-play-heads-up",
    title: "How to Play Heads Up: Rules for the Forehead Guessing Game",
    description:
      "Heads Up rules explained: hold the phone on your forehead, friends give clues, tilt to score. Setup, clue rules, scoring, and the best free app to play it.",
    cardTitle: "How to play Heads Up",
    cardBlurb: "Phone on forehead, tilt to score — the full rules of the party classic.",
    icon: "📱",
  },
  {
    slug: "20-questions-game",
    title: "20 Questions Game: How to Play & Win Against an AI",
    description:
      "How to play 20 Questions, the best questions to ask, winning strategy, and how to play 20 Questions online against a real AI opponent for free.",
    cardTitle: "20 Questions game",
    cardBlurb: "Rules, the smartest questions to ask, and how to beat a real AI at it.",
    icon: "🧠",
  },
  {
    slug: "charades-for-kids",
    title: "Charades for Kids: Easy Words & Simple Rules by Age",
    description:
      "Charades for kids made easy: simple rules, 75+ easy charades words by age group, and how to set up a kid-friendly game on one phone in seconds.",
    cardTitle: "Charades for kids",
    cardBlurb: "Simple rules and 75+ easy words kids actually know, sorted by age.",
    icon: "🧒",
  },
  {
    slug: "road-trip-games",
    title: "10 Best Road Trip Games (No Wi-Fi Needed) for 2026",
    description:
      "The best road trip games to play in the car — word games, guessing games and one-phone party games that work with no internet or signal.",
    cardTitle: "Road trip games",
    cardBlurb: "Guessing games and word games that survive dead zones — no Wi-Fi needed.",
    icon: "🚗",
  },
  {
    slug: "games-to-play-with-friends-on-one-phone",
    title: "Games to Play with Friends on One Phone: 8 Party Picks",
    description:
      "No console, no cards, one phone: the best pass-and-play party games for groups — charades, heads-up guessing, word games and more, mostly free.",
    cardTitle: "One-phone party games",
    cardBlurb: "Eight pass-and-play games for when the group has exactly one phone.",
    icon: "🎉",
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug)!;
