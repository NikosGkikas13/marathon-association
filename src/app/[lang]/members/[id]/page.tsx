import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MemberCard } from "@/components/MemberCard";
import { OpenState } from "@/components/OpenState";
import { Photo } from "@/components/Photo";
import { WeekHours } from "@/components/WeekHours";
import { MEMBERS, MEMBER_CATS, MEMBER_DETAILS, getMember } from "@/content/members";
import { getDictionary } from "@/lib/dictionary";
import { mapsDirectionsHref, mapsSearchHref, telHref, weekHours } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { memberText } from "@/lib/views";
import styles from "./member.module.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return MEMBERS.map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/members/[id]">): Promise<Metadata> {
  const { lang, id } = await params;
  const m = getMember(id);
  if (!m) return {};
  const t = memberText(m, lang as Locale);
  return { title: t.name, description: t.desc };
}

export default async function MemberPage({ params }: PageProps<"/[lang]/members/[id]">) {
  const { lang: l, id } = await params;
  const lang = l as Locale;
  const m = getMember(id);
  if (!m) notFound();

  const dict = getDictionary(lang);
  const d = dict.member;
  const t = memberText(m, lang);
  const more = MEMBER_DETAILS[m.id];
  const services = more ? (lang === "el" ? more.svcEl : more.svcEn) : [];
  const mapsHref = more?.ll
    ? mapsSearchHref(more.ll)
    : mapsSearchHref(`${more?.addr ?? ""}, Marathon, Greece`);
  const sameCat = MEMBERS.filter((x) => x.cat === m.cat && x.id !== m.id).slice(0, 3);
  const catName = MEMBER_CATS.find((c) => c.id === m.cat)?.[lang] ?? "";

  return (
    <main>
      <section className={`page narrow ${styles.head}`}>
        <Link href={`/${lang}/members`} className={styles.back}>{d.back}</Link>
        <div className={styles.headGrid}>
          <div>
            <p className="eyebrow">{t.category}</p>
            <h1 className={styles.title}>{t.name}</h1>
            <p className={styles.alt} lang={lang === "el" ? "en" : "el"}>{t.alt}</p>
          </div>
          <div className={styles.headAside}>
            <OpenState member={m} labels={{ open: dict.common.openNow, closed: dict.common.closedNow }} className={styles.state} />
            <a href={telHref(m.tel)} className={`btn btn-primary ${styles.call}`}>
              {d.call} {m.tel}
            </a>
          </div>
        </div>
      </section>

      <figure className={styles.hero}>
        <Photo alt={t.name} pending={t.name} sizes="100vw" />
      </figure>

      <section className={`page narrow ${styles.bodyGrid}`}>
        <div>
          {more ? <p className={styles.about}>{lang === "el" ? more.el : more.en}</p> : null}
          <h2 className={styles.smallHead}>{d.services}</h2>
          <ul className={styles.services}>
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <span className={`meander meander-muted ${styles.meander}`} aria-hidden="true" />
          <div className={styles.gallery}>
            {[2, 3, 4].map((n) => (
              <div key={n} className={styles.galleryItem}>
                <Photo alt={`${t.name} — ${dict.common.photograph} ${n}`} pending={`${dict.common.photograph} ${n}`} sizes="(max-width: 720px) 100vw, 25vw" />
              </div>
            ))}
          </div>
        </div>

        <aside className={styles.aside}>
          <div>
            <span className={`label ${styles.asideLabel}`}>{d.hours}</span>
            <WeekHours rows={weekHours(m, dict.common)} />
          </div>
          <div>
            <span className={`label ${styles.asideLabel}`}>{d.contact}</span>
            <div className={styles.contact}>
              <span className={styles.addr}>{more?.addr ?? "—"}</span>
              <a href={telHref(m.tel)} className={styles.tel}>{m.tel}</a>
            </div>
          </div>
          <div>
            <span className={`label ${styles.asideLabel}`}>{d.location}</span>
            <a href={mapsHref} target="_blank" rel="noopener" className={`${styles.map} hover-card hover-flat`}>
              <span className={styles.mapArt}>
                <svg width="100%" height="132" viewBox="0 0 300 132" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
                  <path d="M-10 96 L120 60 L200 74 L310 40" fill="none" stroke="currentColor" strokeWidth="7" opacity=".16" />
                  <path d="M84 -10 L104 60 L96 142" fill="none" stroke="currentColor" strokeWidth="4" opacity=".16" />
                  <path d="M210 -10 L196 74 L232 142" fill="none" stroke="currentColor" strokeWidth="3" opacity=".13" />
                  <path d="M-10 26 L118 12 L300 22" fill="none" stroke="currentColor" strokeWidth="2.5" opacity=".1" />
                </svg>
                <span className={styles.pin} />
              </span>
              <span className={styles.mapFoot}>
                <span className={styles.ll}>{more?.ll}</span>
                <span className={styles.mapCta}>{dict.common.openMaps} →</span>
              </span>
            </a>
            {more?.ll ? (
              <a href={mapsDirectionsHref(more.ll)} target="_blank" rel="noopener" className={styles.directions}>
                {d.directions} →
              </a>
            ) : null}
          </div>
          <div>
            <span className={styles.badge}>{d.memberBadge}</span>
            <p className={`placeholder-note ${styles.note}`}>{d.placeholderNote}</p>
          </div>
        </aside>
      </section>

      {sameCat.length ? (
        <section className={`page narrow ${styles.related}`}>
          <div className={styles.relatedHead}>
            <h2 className={styles.relatedTitle}>{d.others}{catName}</h2>
            <span className={styles.rule} />
          </div>
          <div className={styles.relatedGrid}>
            {sameCat.map((x) => (
              <MemberCard key={x.id} m={x} lang={lang} common={dict.common} featuredLabel={dict.members.featured} variant="compact" />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
