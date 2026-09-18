import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Photo } from "@/components/Photo";
import { LANDMARKS, getLandmark } from "@/content/landmarks";
import { LANDMARK_ARTICLES } from "@/content/landmark-articles";
import { getDictionary } from "@/lib/dictionary";
import { formatKm, mapsSearchHref, readingMinutes } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { landmarkText } from "@/lib/views";
import styles from "./place.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return LANDMARKS.map((lm) => ({ id: lm.id }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/see/[id]">): Promise<Metadata> {
  const { lang, id } = await params;
  const lm = getLandmark(id);
  if (!lm) return {};
  const t = landmarkText(lm, lang as Locale);
  return { title: t.name, description: t.desc };
}

export default async function PlacePage({ params }: PageProps<"/[lang]/see/[id]">) {
  const { lang: l, id } = await params;
  const lang = l as Locale;
  const lm = getLandmark(id);
  if (!lm) notFound();

  const dict = getDictionary(lang);
  const p = dict.place;
  const t = landmarkText(lm, lang);
  const article = LANDMARK_ARTICLES[lm.id] ?? { el: [], en: [] };
  const paragraphs = article[lang];
  const next = LANDMARKS[(LANDMARKS.indexOf(lm) + 1) % LANDMARKS.length];
  const km = formatKm(lm.km, lang, dict.common);
  const gallery = [0, 1, 2].map((i) => lm.gallery?.[i]);

  return (
    <main>
      <section className={`page ${styles.head}`}>
        <Link href={`/${lang}/see`} className={styles.back}>{p.back}</Link>
        <div className={styles.headGrid}>
          <div>
            <p className="eyebrow">{t.category}</p>
            <h1 className={styles.title}>{t.name}</h1>
            <p className={styles.alt} lang={lang === "el" ? "en" : "el"}>{t.alt}</p>
            <p className={styles.read}>
              {p.readPrefix}
              {readingMinutes(paragraphs)}
              {p.readSuffix}
            </p>
          </div>
          <div className={styles.headAside}>
            <span className={styles.dist}>{dict.common.fromCentre} {km}</span>
            <a href={mapsSearchHref(`${lm.en}, Marathon, Greece`)} target="_blank" rel="noopener" className="btn btn-secondary">
              {dict.common.openMaps}
            </a>
          </div>
        </div>
      </section>

      <figure className={styles.hero}>
        <Photo src={lm.img} alt={t.name} pending={lm.ph} sizes="100vw" priority />
      </figure>

      <section className={`page ${styles.bodyGrid}`}>
        <article className={styles.article}>
          {paragraphs.map((text, i) =>
            text.startsWith("## ") ? (
              <h2 key={i} className={styles.subhead}>{text.slice(3)}</h2>
            ) : (
              <p key={i} className={styles.para}>{text}</p>
            ),
          )}
          {article.quote ? (
            <blockquote className={styles.quote}>
              <p>{article.quote[lang]}</p>
              <footer>{article.quote.src}</footer>
            </blockquote>
          ) : null}
          <span className={`meander meander-muted ${styles.meander}`} aria-hidden="true" />
        </article>

        <aside className={styles.visit}>
          <span className={`label ${styles.visitLabel}`}>{p.visiting}</span>
          <dl className={styles.facts}>
            <div><dt>{dict.common.fromCentre}</dt><dd>{km}</dd></div>
            <div><dt>{p.category}</dt><dd>{t.category}</dd></div>
            <div><dt>{p.hours}</dt><dd className={styles.tbc}>{p.tbc}</dd></div>
            <div><dt>{p.admission}</dt><dd className={styles.tbc}>{p.tbc}</dd></div>
          </dl>
          <p className="placeholder-note">{p.placeholderNote}</p>
        </aside>
      </section>

      <section className={`page ${styles.gallerySection}`}>
        <span className={`label ${styles.galleryLabel}`}>{p.gallery}</span>
        <div className={styles.gallery}>
          {gallery.map((src, i) => (
            <div key={i} className={styles.galleryItem}>
              <Photo
                src={src}
                alt={`${t.name} — ${dict.common.photograph} ${i + 2}`}
                pending={`${dict.common.photograph} ${i + 2}`}
                sizes="(max-width: 720px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      <section className={`page ${styles.nextSection}`}>
        <Link href={`/${lang}/see/${next.id}`} className={`${styles.next} hover-card hover-flat`}>
          <span className={styles.nextText}>
            <span className={styles.nextLabel}>{p.next}</span>
            <span className={styles.nextName}>{next[lang]}</span>
            <span className="hover-rule" />
          </span>
          <span className={styles.arrow} aria-hidden="true">→</span>
        </Link>
      </section>
    </main>
  );
}
