"use client";

import { useSyncExternalStore } from "react";
import { athensNow } from "@/lib/format";

// A minute counter shared by every open/closed label on the page. The
// server renders no time at all (null) so the static HTML never claims a
// shop is open or closed at build time.
function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 30_000);
  return () => window.clearInterval(id);
}
const minuteNow = () => Math.floor(Date.now() / 60_000);
const serverMinute = () => null;

export function useAthensClock() {
  const minute = useSyncExternalStore(subscribe, minuteNow, serverMinute);
  return minute === null ? null : athensNow(new Date(minute * 60_000));
}
