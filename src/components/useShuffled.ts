"use client";

import { useSyncExternalStore } from "react";

// Members are listed in a fresh random order on every visit, so no one is
// always first. The pages are static, so the order is picked in the browser:
// the server renders no seed (null) and the source order, and the browser
// swaps in its own seed, chosen once per page load, right after hydration.
let seed: number | null = null;
const subscribe = () => () => {};
const browserSeed = () => (seed ??= Math.floor(Math.random() * 2 ** 32));
const serverSeed = () => null;

/** Shuffles a copy of `items` (Fisher–Yates) with a small seeded generator (mulberry32). */
function shuffle<T>(items: readonly T[], s: number): T[] {
  const random = () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 2 ** 32;
  };
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** `items` in this page load's random order; `ready` is false until the browser has shuffled them. */
export function useShuffled<T>(items: readonly T[]): { items: readonly T[]; ready: boolean } {
  const s = useSyncExternalStore(subscribe, browserSeed, serverSeed);
  return s === null ? { items, ready: false } : { items: shuffle(items, s), ready: true };
}
