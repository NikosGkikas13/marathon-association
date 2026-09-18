import { SEE_CATS, type Landmark } from "@/content/landmarks";
import { MEMBER_CATS, type Member } from "@/content/members";
import type { Locale } from "./i18n";

// Localized fields for a card or detail page. `alt` is the name in the other
// language, set in italics under the title.

export function landmarkText(lm: Landmark, lang: Locale) {
  const cat = SEE_CATS.find((c) => c.id === lm.cat);
  return {
    name: lang === "el" ? lm.el : lm.en,
    alt: lang === "el" ? lm.en : lm.el,
    desc: lang === "el" ? lm.dEl : lm.dEn,
    category: cat ? cat[lang] : "",
  };
}

export function memberText(m: Member, lang: Locale) {
  const cat = MEMBER_CATS.find((c) => c.id === m.cat);
  return {
    name: lang === "el" ? m.el : m.en,
    alt: lang === "el" ? m.en : m.el,
    desc: lang === "el" ? m.dEl : m.dEn,
    category: cat ? cat[lang] : "",
  };
}
