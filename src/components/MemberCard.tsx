import Link from "next/link";
import type { Member } from "@/content/members";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { hoursSummary, telHref } from "@/lib/format";
import { memberText } from "@/lib/views";
import { OpenState } from "./OpenState";
import { Photo } from "./Photo";
import styles from "./MemberCard.module.css";

type Props = {
  m: Member;
  lang: Locale;
  common: Dictionary["common"];
  featuredLabel: string;
  /** featured: large card with a photo; standard: thumbnail row; compact: related-members strip. */
  variant: "featured" | "standard" | "compact";
};

export function MemberCard({ m, lang, common, featuredLabel, variant }: Props) {
  const t = memberText(m, lang);
  const href = `/${lang}/members/${m.id}`;
  const state = (
    <OpenState member={m} labels={{ open: common.openNow, closed: common.closedNow }} className={styles.state} />
  );
  const title = (
    <h3 className={styles.name}>
      <Link href={href} className="stretch-link">{t.name}</Link>
    </h3>
  );

  if (variant === "featured") {
    return (
      <article className={`${styles.featured} hover-card stretch`}>
        <div className={styles.featuredMedia}>
          <div className={`${styles.featuredPhoto} halftone hover-zoom`}>
            <Photo alt={t.name} sizes="(max-width: 720px) 100vw, 33vw" />
          </div>
        </div>
        <div className={styles.featuredBody}>
          <div className={styles.featuredTop}>
            <span className={styles.kicker}>{t.category}</span>
            <span className={styles.badge}>{featuredLabel}</span>
          </div>
          {title}
          <span className="hover-rule" />
          <p className={styles.desc}>{t.desc}</p>
          <div className={styles.meta}>
            {state}
            <span className={styles.hours}>{hoursSummary(m, common)}</span>
          </div>
          <a href={telHref(m.tel)} className={`${styles.tel} above`}>{m.tel}</a>
        </div>
      </article>
    );
  }

  const compact = variant === "compact";
  return (
    <article className={`${styles.standard} ${compact ? styles.compact : ""} hover-card stretch`}>
      <div className={styles.thumb}>
        <div className={`${styles.thumbInner} hover-zoom`}>
          <Photo alt={t.name} sizes="84px" />
        </div>
      </div>
      <div className={styles.standardBody}>
        {compact ? null : <span className={styles.kicker}>{t.category}</span>}
        {title}
        <span className="hover-rule" />
        <p className={styles.desc}>{t.desc}</p>
        {compact ? (
          state
        ) : (
          <>
            <div className={styles.meta}>
              {state}
              <span className={styles.hours}>{hoursSummary(m, common)}</span>
            </div>
            <a href={telHref(m.tel)} className={`${styles.tel} above`}>{m.tel}</a>
          </>
        )}
      </div>
    </article>
  );
}
