import { en } from "./en";
import { ar } from "./ar";
import { de } from "./de";
import { es } from "./es";
import { fr } from "./fr";
import { hi } from "./hi";
import { id } from "./id";
import { it } from "./it";
import { ja } from "./ja";
import { ko } from "./ko";
import { nl } from "./nl";
import { pl } from "./pl";
import { pt } from "./pt";
import { ru } from "./ru";
import { sv } from "./sv";
import { th } from "./th";
import { tr } from "./tr";
import { uk } from "./uk";
import { zh } from "./zh";

import { en as legalEn } from "./legal/en";
import { ar as legalAr } from "./legal/ar";
import { de as legalDe } from "./legal/de";
import { es as legalEs } from "./legal/es";
import { fr as legalFr } from "./legal/fr";
import { hi as legalHi } from "./legal/hi";
import { id as legalId } from "./legal/id";
import { it as legalIt } from "./legal/it";
import { ja as legalJa } from "./legal/ja";
import { ko as legalKo } from "./legal/ko";
import { nl as legalNl } from "./legal/nl";
import { pl as legalPl } from "./legal/pl";
import { pt as legalPt } from "./legal/pt";
import { ru as legalRu } from "./legal/ru";
import { sv as legalSv } from "./legal/sv";
import { th as legalTh } from "./legal/th";
import { tr as legalTr } from "./legal/tr";
import { uk as legalUk } from "./legal/uk";
import { zh as legalZh } from "./legal/zh";

import type { Dictionary, LegalDictionary } from "./types";
import { site } from "../data/site";

import { defaultLocale } from "./locales";
export { locales, defaultLocale, getLocaleInfo, localeCodes } from "./locales";
export type { LocaleInfo } from "./locales";

const dictionaries: Record<string, Dictionary> = {
  en, ar, de, es, fr, hi, id, it, ja, ko, nl, pl, pt, ru, sv, th, tr, uk, zh,
};

const legalDictionaries: Record<string, LegalDictionary> = {
  en: legalEn, ar: legalAr, de: legalDe, es: legalEs, fr: legalFr, hi: legalHi,
  id: legalId, it: legalIt, ja: legalJa, ko: legalKo, nl: legalNl, pl: legalPl,
  pt: legalPt, ru: legalRu, sv: legalSv, th: legalTh, tr: legalTr, uk: legalUk,
  zh: legalZh,
};

export function getDictionary(lang: string): Dictionary {
  return dictionaries[lang] ?? dictionaries.en;
}

export function getLegalDictionary(lang: string): LegalDictionary {
  return legalDictionaries[lang] ?? legalDictionaries.en;
}

const placeholders: Record<string, string> = {
  packsCount: site.packsCount,
  languagesCount: String(site.languagesCount),
  supportEmail: site.supportEmail,
};

/** Replaces {token} placeholders (e.g. {supportEmail}, {lang}) in a string. */
export function tpl(str: string, lang?: string): string {
  const vars = lang ? { ...placeholders, lang } : placeholders;
  return str.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? `{${key}}`);
}

/** Builds a locale-aware path, omitting the /en prefix for the default locale. */
export function localePath(lang: string, path: string): string {
  return lang === defaultLocale ? path : `/${lang}${path}`;
}
