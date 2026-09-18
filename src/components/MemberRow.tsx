import Link from "next/link";
import type { Member } from "@/content/members";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { telHref } from "@/lib/format";
import { memberText } from "@/lib/views";
import { OpenState } from "./OpenState";
import { Photo } from "./Photo";
import styles from "./MemberRow.module.css";

/** Compact member listing with a square thumbnail — the home page's shop list. */
export function MemberRow({ m, lang, dict }: { m: Member; lang: Locale; dict: Dictionary }) {
  const t = memberText(m, lang);
  return (
    <article className={`${styles.row} hover-card stretch`} data-reveal>
      <div className={styles.thumb}>
        <div className={`${styles.thumbInner} hover-zoom`}>
          <Photo alt={t.name} sizes="88px" />
        </div>
      </div>
      <div className={styles.body}>
        <span className={styles.kicker}>{t.category}</span>
        <h3 className={styles.name}>
          <Link href={`/${lang}/members/${m.id}`} className="stretch-link">{t.name}</Link>
        </h3>
        <span className="hover-rule" />
        <span className={styles.desc}>{t.desc}</span>
        <span className={styles.meta}>
          <OpenState member={m} labels={{ open: dict.common.openNow, closed: dict.common.closedNow }} />
          <a href={telHref(m.tel)} className={`${styles.tel} above`}>{m.tel}</a>
        </span>
      </div>
    </article>
  );
}
