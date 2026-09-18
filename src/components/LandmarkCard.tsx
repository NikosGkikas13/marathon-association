import Link from "next/link";
import type { Landmark } from "@/content/landmarks";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";
import { formatKm } from "@/lib/format";
import { landmarkText } from "@/lib/views";
import { Photo } from "./Photo";
import styles from "./LandmarkCard.module.css";

/** Tall portrait card used for the home page's "Four not to miss". */
export function LandmarkCard({ lm, lang, dict }: { lm: Landmark; lang: Locale; dict: Dictionary }) {
  const t = landmarkText(lm, lang);
  return (
    <article className={`${styles.card} hover-card stretch`} data-reveal>
      <div className={styles.media}>
        <div className={`${styles.photo} hover-zoom`}>
          <Photo src={lm.img} alt={t.name} pending={lm.ph} sizes="(max-width: 720px) 186px, 25vw" />
        </div>
      </div>
      <div className={styles.body}>
        <span className={styles.kicker}>{t.category}</span>
        <h3 className={styles.name}>
          <Link href={`/${lang}/see/${lm.id}`} className="stretch-link">{t.name}</Link>
        </h3>
        <span className="hover-rule" />
        <span className={styles.desc}>{t.desc}</span>
        <span className={styles.dist}>{dict.common.fromCentre} {formatKm(lm.km, lang, dict.common)}</span>
      </div>
    </article>
  );
}
