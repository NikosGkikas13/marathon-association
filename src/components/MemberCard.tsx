import Link from "next/link";
import { memberSlug, type Member } from "@/content/members";
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
  /** standard: directory card; compact: the related-members strip on a member page. */
  variant: "standard" | "compact";
};

export function MemberCard({ m, lang, common, variant }: Props) {
  const t = memberText(m, lang);
  const href = `/${lang}/members/${memberSlug(m)}`;
  const state = (
    <OpenState member={m} labels={{ open: common.openNow, closed: common.closedNow }} className={styles.state} />
  );
  const title = (
    <h3 className={styles.name}>
      <Link href={href} className="stretch-link">{t.name}</Link>
    </h3>
  );

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
