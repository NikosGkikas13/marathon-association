"use client";

import type { WeekRow } from "@/lib/format";
import { useAthensClock } from "./useAthensClock";
import styles from "./WeekHours.module.css";

/** The week's opening hours, with today set in the heavier weight. */
export function WeekHours({ rows }: { rows: WeekRow[] }) {
  const now = useAthensClock();
  return (
    <dl className={styles.list}>
      {rows.map((r) => (
        <div key={r.day} className={styles.row} data-today={now?.day === r.day || undefined}>
          <dt className={styles.day}>{r.label}</dt>
          <dd className={styles.hours}>{r.hours}</dd>
        </div>
      ))}
    </dl>
  );
}
