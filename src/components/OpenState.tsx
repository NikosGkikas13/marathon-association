"use client";

import type { Member } from "@/content/members";
import { isOpenAt } from "@/lib/format";
import { useAthensClock } from "./useAthensClock";
import styles from "./OpenState.module.css";

export function OpenState({
  member,
  labels,
  className,
}: {
  member: Member;
  labels: { open: string; closed: string };
  className?: string;
}) {
  const now = useAthensClock();
  if (!now) return <span className={`${styles.state} ${className ?? ""}`} aria-hidden="true">&nbsp;</span>;
  const open = isOpenAt(member, now);
  return (
    <span className={`${styles.state} ${className ?? ""}`} data-open={open || undefined}>
      {open ? labels.open : labels.closed}
    </span>
  );
}
