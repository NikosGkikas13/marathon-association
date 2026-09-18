import Link from "next/link";
import { Photo } from "@/components/Photo";
import { Parallax } from "@/components/Parallax";
import { LandmarkCard } from "@/components/LandmarkCard";
import { MemberRow } from "@/components/MemberRow";
import { HERO_IMAGE, LANDMARKS, getLandmark } from "@/content/landmarks";
import { MEMBER_CATS, getMember } from "@/content/members";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import styles from "./home.module.css";

const FEATURED = ["tymbos", "schinias", "museum", "dam"];
const HOME_MEMBERS = ["b1", "b4", "b8", "b10", "b13", "b24"];

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const lang = (await params).lang as Locale;
  const dict = getDictionary(lang);
  const h = dict.home;

  const entries = [
    { href: `/${lang}/see`, ...h.entries.see },
    { href: `/${lang}/members`, ...h.entries.members },
    { href: `/${lang}/info`, ...h.entries.info },
  ];

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <Parallax rate={0.16} className={styles.heroParallax}>
          <div className={styles.heroZoom}>
            <Photo src={HERO_IMAGE} alt={h.heroAlt} sizes="100vw" priority />
          </div>
        </Parallax>
        <div className={styles.heroScrim} aria-hidden="true" />
        <div className={`page ${styles.heroContent}`}>
          <div className={styles.heroLine}>
            <p className={styles.heroKicker}>{h.kicker}</p>
            <h1 className={styles.heroTitle}>
              {h.title[0]} <br />
              {h.title[1]}
            </h1>
            <p className={styles.heroLede}>{h.lede}</p>
          </div>
        </div>
        <span className={`meander ${styles.heroMeander}`} aria-hidden="true" />
      </section>

      <section className={`page ${styles.entries}`}>
        {entries.map((e, i) => (
          <Link key={e.href} href={e.href} className={`${styles.entry} hover-card hover-flat`} data-reveal>
            <span className={styles.entryNum}>{String(i + 1).padStart(2, "0")}</span>
            <span className={styles.entryTitle}>{e.title}</span>
            <span className={`hover-rule ${styles.entryRule}`} />
            <span className={styles.entryBody}>{e.body}</span>
          </Link>
        ))}
      </section>

      <section className={styles.battleSection}>
        <div className={`page ${styles.battle}`}>
          <div className={styles.battleText} data-reveal>
            <p className="eyebrow">{h.battle.kicker}</p>
            <div className={styles.year}>{h.battle.year}</div>
            <h2 className={styles.battleTitle}>{h.battle.title}</h2>
            <p className={styles.battleBody}>{h.battle.body}</p>
            <Link href={`/${lang}/see/tymbos`} className={`${styles.battleCta} hover-card hover-flat`}>
              <span>{h.battle.cta}</span>
              <span className={`hover-rule ${styles.accentRule}`} />
            </Link>
          </div>
          <figure className={styles.battleFigure} data-reveal>
            <div className={styles.battlePhoto}>
              <Photo src="/images/tymbos-aerial.jpg" alt={h.battle.imgAlt} sizes="(max-width: 900px) 100vw, 50vw" />
            </div>
            <figcaption className={styles.caption}>{h.battle.caption}</figcaption>
          </figure>
        </div>
      </section>

      <section className={`page ${styles.featured}`}>
        <div className={styles.sectionHead} data-reveal>
          <h2 className={styles.sectionTitle}>{h.featured.title}</h2>
          <Link href={`/${lang}/see`} className="rule-link">
            {h.featured.all} ({LANDMARKS.length})
          </Link>
        </div>
        <div className={styles.featuredGrid}>
          {FEATURED.map((id) => (
            <LandmarkCard key={id} lm={getLandmark(id)!} lang={lang} dict={dict} />
          ))}
        </div>
      </section>

      <section className={`page ${styles.shops}`}>
        <div className={styles.shopsHead} data-reveal>
          <div className={styles.shopsIntro}>
            <h2 className={styles.sectionTitle}>
              {h.shops.title[0]} <br />
              {h.shops.title[1]}
            </h2>
            <p className={styles.shopsBody}>{h.shops.body}</p>
            <Link href={`/${lang}/members`} className={`rule-link ${styles.desktopOnly}`}>
              {h.shops.all}
            </Link>
          </div>
          <div className={`${styles.chips} no-scrollbar`}>
            {MEMBER_CATS.map((c) => (
              <Link key={c.id} href={`/${lang}/members?cat=${c.id}`} className={`tag tag-outline ${styles.chip}`}>
                {c[lang]}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.memberGrid}>
          {HOME_MEMBERS.map((id) => (
            <MemberRow key={id} m={getMember(id)!} lang={lang} dict={dict} />
          ))}
        </div>
        <Link href={`/${lang}/members`} className={`btn btn-primary btn-block ${styles.mobileOnly} ${styles.allMembers}`}>
          {h.shops.all}
        </Link>
      </section>
    </main>
  );
}
