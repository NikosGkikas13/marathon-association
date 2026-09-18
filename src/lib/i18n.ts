export const LOCALES = ["el", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "el";

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function otherLocale(lang: Locale): Locale {
  return lang === "el" ? "en" : "el";
}

/** Pick the localized field from a record carrying both `el` and `en`. */
export function pick<T>(o: { el: T; en: T }, lang: Locale): T {
  return o[lang];
}

/** Swap the locale segment of a pathname, e.g. /el/see → /en/see. */
export function switchLocalePath(pathname: string, to: Locale): string {
  const rest = pathname.replace(/^\/(el|en)(?=\/|$)/, "");
  return `/${to}${rest}`;
}
