"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import { Photo } from "./Photo";
import { PinIcon } from "./PinIcon";
import styles from "./SeeGrid.module.css";

export type SeeItem = {
  id: string;
  cat: string;
  href: string;
  name: string;
  alt: string;
  desc: string;
  category: string;
  dist: string;
  mapsHref: string;
  img?: string;
  ph: string;
};

type Props = {
  items: SeeItem[];
  cats: { id: string; label: string; count: number }[];
  labels: { count: string; openMaps: string; filters: string };
};

const EASE = "cubic-bezier(.16,.84,.44,1)";
const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * The places grid with its category filter. Changing category fades the
 * leaving cards out, then slides the remaining ones to their new places
 * (FLIP) while newcomers scale in.
 */
export function SeeGrid({ items, cats, labels }: Props) {
  const [cat, setCat] = useState("all");
  const [busy, setBusy] = useState(false);
  const grid = useRef<HTMLDivElement>(null);
  const before = useRef<Map<string, DOMRect> | null>(null);

  const visible = items.filter((i) => cat === "all" || i.cat === cat);

  const cards = () => Array.from(grid.current?.querySelectorAll<HTMLElement>("[data-flip]") ?? []);

  const choose = (next: string) => {
    if (next === cat || busy) return;
    const commit = () => {
      before.current = new Map(cards().map((n) => [n.dataset.flip!, n.getBoundingClientRect()]));
      setCat(next);
      setBusy(false);
    };
    const leaving = cards().filter((n) => next !== "all" && n.dataset.cat !== next);
    if (!leaving.length || reducedMotion()) return commit();
    setBusy(true);
    leaving.forEach((n) =>
      n.animate([{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(.96)" }], {
        duration: 180,
        easing: EASE,
        fill: "forwards",
      }),
    );
    window.setTimeout(commit, 190);
  };

  useLayoutEffect(() => {
    const prev = before.current;
    before.current = null;
    if (!prev) return;
    for (const n of cards()) {
      n.getAnimations().forEach((a) => a.cancel());
      const old = prev.get(n.dataset.flip!);
      if (!old) {
        n.animate([{ opacity: 0, transform: "scale(.96)" }, { opacity: 1, transform: "none" }], {
          duration: 320,
          easing: EASE,
        });
        continue;
      }
      const now = n.getBoundingClientRect();
      const dx = old.left - now.left;
      const dy = old.top - now.top;
      if (Math.abs(dx) < 1 && Math.abs(dy) < 1) continue;
      n.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "none" }], {
        duration: 420,
        easing: EASE,
      });
    }
  }, [cat]);

  return (
    <>
      <div className={styles.toolbar}>
        <div className={`${styles.chips} no-scrollbar`} role="group" aria-label={labels.filters}>
          {cats.map((c) => (
            <button
              key={c.id}
              type="button"
              className={styles.chip}
              aria-pressed={c.id === cat}
              onClick={() => choose(c.id)}
            >
              {c.label} <span className={styles.chipCount}>{c.count}</span>
            </button>
          ))}
        </div>
        <span className={styles.count} aria-live="polite">
          {visible.length} {labels.count}
        </span>
      </div>

      <div className={styles.grid} ref={grid}>
        {visible.map((i) => (
          <article key={i.id} data-flip={i.id} data-cat={i.cat} className={`${styles.card} hover-card hover-flat stretch`}>
            <div className={styles.media}>
              <div className={`${styles.photo} hover-zoom`}>
                <Photo src={i.img} alt={i.name} pending={i.ph} sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" />
              </div>
            </div>
            <div className={styles.body}>
              <span className={styles.kicker}>{i.category}</span>
              <h3 className={styles.name}>
                <Link href={i.href} className="stretch-link">{i.name}</Link>
              </h3>
              <span className="hover-rule" />
              <span className={styles.alt}>{i.alt}</span>
              <p className={styles.desc}>{i.desc}</p>
              <div className={styles.foot}>
                <span className={styles.dist}>{i.dist}</span>
                <a href={i.mapsHref} target="_blank" rel="noopener" className={`${styles.maps} above`}>
                  <PinIcon />
                  {labels.openMaps}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
