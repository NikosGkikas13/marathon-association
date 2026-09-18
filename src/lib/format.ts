import type { Locale } from "./i18n";
import type { Dictionary } from "./dictionary";
import type { Member } from "@/content/members";

type Common = Dictionary["common"];

const ALL_DAY = "00:00-23:59";

export function formatKm(km: number, lang: Locale, common: Common): string {
  const n = lang === "el" ? String(km).replace(".", ",") : String(km);
  return `${n} ${common.km}`;
}

export function telHref(tel: string): string {
  return `tel:${tel.replace(/\s+/g, "")}`;
}

export function mapsSearchHref(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function mapsDirectionsHref(latLng: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${latLng}`;
}

function hoursRange(h: string, common: Common): string {
  return h === ALL_DAY ? common.allDay : h.replace("-", "–");
}

/** "Mon–Sat · 06:30–14:30" — consecutive open days collapse into a run. */
export function hoursSummary(m: Member, common: Common): string {
  const days = m.d.split("").map(Number).sort((a, b) => a - b);
  const runs: number[][] = [];
  for (const d of days) {
    const last = runs[runs.length - 1];
    if (last && d === last[last.length - 1] + 1) last.push(d);
    else runs.push([d]);
  }
  const names = common.days;
  const label = runs
    .map((r) => (r.length > 1 ? `${names[r[0]]}–${names[r[r.length - 1]]}` : names[r[0]]))
    .join(", ");
  return `${label} · ${hoursRange(m.h, common)}`;
}

export type WeekRow = { day: number; label: string; hours: string };

/** Monday-first opening hours for the week. */
export function weekHours(m: Member, common: Common): WeekRow[] {
  return [1, 2, 3, 4, 5, 6, 0].map((d) => ({
    day: d,
    label: common.days[d],
    hours: m.d.includes(String(d)) ? hoursRange(m.h, common) : common.closed,
  }));
}

/** Day of week (0 = Sunday) and minutes since midnight, in Marathon's time zone. */
export function athensNow(date = new Date()): { day: number; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Athens",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return { day, minutes: Number(get("hour")) * 60 + Number(get("minute")) };
}

export function isOpenAt(m: Member, now: { day: number; minutes: number }): boolean {
  if (!m.d.includes(String(now.day))) return false;
  const [from, to] = m.h.split("-");
  const toMin = (s: string) => Number(s.slice(0, 2)) * 60 + Number(s.slice(3, 5));
  const a = toMin(from);
  const z = toMin(to);
  // A closing time at or before the opening time runs past midnight.
  return z > a ? now.minutes >= a && now.minutes < z : now.minutes >= a || now.minutes < z;
}

export function readingMinutes(paragraphs: string[]): number {
  return Math.max(1, Math.round(paragraphs.join(" ").split(/\s+/).length / 180));
}
