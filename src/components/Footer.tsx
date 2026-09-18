import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { telHref } from "@/lib/format";
import styles from "./Footer.module.css";

export function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const f = dict.footer;
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.grid}>
        <div className={styles.identity}>
          {/* Stands in for the association's logo until the artwork is supplied. */}
          <span className={styles.logo} aria-hidden="true">{dict.brand.mark}</span>
          <span className={styles.name}>{dict.brand.full}</span>
        </div>

        <div className={styles.col}>
          <span className={`label ${styles.colHead}`}>{f.contact}</span>
          <span className={styles.muted}>{f.address}</span>
          <a href={telHref(f.phone)} className={styles.plain}>{f.phone}</a>
          <a href={`mailto:${f.email}`} className={styles.plain}>{f.email}</a>
          <span className={styles.note}>{f.placeholder}</span>
        </div>

        <div className={styles.col}>
          <span className={`label ${styles.colHead}`}>{f.pages}</span>
          <Link href={`/${lang}/see`} className={styles.pageLink}>{dict.nav.see}</Link>
          <Link href={`/${lang}/members`} className={styles.pageLink}>{dict.nav.members}</Link>
          <Link href={`/${lang}/info`} className={styles.pageLink}>{dict.nav.info}</Link>
          <a href={`mailto:${f.email}`} className={styles.pageLink}>{dict.common.join}</a>
        </div>

        <div className={styles.col}>
          <span className={`label ${styles.colHead}`}>{f.association}</span>
          <span className={styles.muted} style={{ maxWidth: "30ch" }}>{f.associationBody}</span>
        </div>
      </div>

      <div className={styles.emergency}>
        <span className="label">{f.emergency}</span>
        {f.emergencyNumbers.map((n) => (
          <a key={n.num} href={telHref(n.num)} className={styles.number}>
            {n.num} <span className={styles.numberLabel}>{n.label}</span>
          </a>
        ))}
        <Link href={`/${lang}/info`} className={styles.allEmergency}>{f.allEmergency}</Link>
      </div>
    </footer>
  );
}
