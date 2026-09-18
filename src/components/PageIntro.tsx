import type { ReactNode } from "react";
import styles from "./PageIntro.module.css";

/** Kicker + large title on the left, a short note or tools on the right. */
export function PageIntro({
  kicker,
  title,
  children,
  aside,
  asideWidth = 300,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
  aside?: ReactNode;
  asideWidth?: number;
}) {
  return (
    <div className={styles.intro} style={{ gridTemplateColumns: `minmax(0, 1fr) minmax(0, ${asideWidth}px)` }}>
      <div>
        <p className="eyebrow">{kicker}</p>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>
      {aside ? <div className={styles.aside}>{aside}</div> : null}
    </div>
  );
}
