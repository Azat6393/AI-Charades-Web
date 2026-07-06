export interface FaqItem {
  q: string;
  a: string;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  header: {
    modes: string;
    packs: string;
    faq: string;
    getApp: string;
  };
  hero: {
    eyebrow: string;
    h1: string;
    subhead: string;
    micro: string;
    imageAlt: string;
    imageAlt2: string;
  };
  trust: {
    items: [string, string, string, string, string];
    rating: string; // e.g. "on the App Store & Google Play"
  };
  modeSolo: {
    eyebrow: string;
    h2: string;
    body: string;
    bullets: [string, string, string, string];
    imageAlt: string;
  };
  modeParty: {
    eyebrow: string;
    h2: string;
    body: string;
    bullets: [string, string, string, string];
    imageAlt: string;
  };
  howItWorks: {
    h2: string;
    steps: { title: string; body: string }[];
  };
  packGrid: {
    eyebrow: string;
    h2: string;
    intro: string;
    categoryImageAlt: string;
    customBadge: string;
    customBody: string;
    customImageAlt: string;
  };
  featureGrid: {
    h2: string;
    features: { icon: string; title: string; body: string }[];
  };
  occasions: {
    h2: string;
    intro: string;
    tiles: { icon: string; label: string }[];
  };
  faqSection: {
    h2: string;
  };
  finalCta: {
    h2: string;
    body: string;
  };
  footer: {
    tagline: string;
    modes: string;
    packs: string;
    faq: string;
    support: string;
    privacy: string;
    terms: string;
    copyright: string; // "All rights reserved."
    availableOn: string;
  };
  storeBadges: {
    appStoreAria: string;
    playStoreAria: string;
  };
  waitlist: {
    title: string;
    body: string;
    emailPlaceholder: string;
    submit: string;
    success: string;
    error: string;
    close: string;
    note: string;
  };
  faq: FaqItem[];
  categories: string[];
}

export interface LegalSection {
  h2: string;
  body: string[]; // paragraphs / list blocks as raw HTML strings
}

export interface PrivacyDictionary {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  effectiveDate: string;
  lastUpdated: string;
  dateValue: string;
  intro: string[];
  contactLabel: string;
  appIdLabel: string;
  sections: LegalSection[];
}

export interface TermsDictionary {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lastUpdatedLabel: string;
  dateValue: string;
  intro: string;
  sections: LegalSection[];
}

export interface SupportDictionary {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  emailIntro: string;
  commonQuestionsH2: string;
  commonQuestionsBody: string;
  legalH2: string;
}

export interface LegalDictionary {
  privacy: PrivacyDictionary;
  terms: TermsDictionary;
  support: SupportDictionary;
}
