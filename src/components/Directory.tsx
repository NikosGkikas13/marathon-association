"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { MEMBERS, MEMBER_CATS } from "@/content/members";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { MemberCard } from "./MemberCard";
import { PageIntro } from "./PageIntro";
import styles from "./Directory.module.css";

type Props = {
  lang: Locale;
  t: Dictionary["members"];
  common: Dictionary["common"];
  joinHref: string;
};

/** The member directory. The chosen category lives in the URL (?cat=) so it can be linked to. */
export function Directory(props: Props) {
  // The static HTML shows every category; the URL's choice applies on load.
  return (
    <Suspense fallback={<DirectoryView {...props} cat="all" onCat={() => {}} />}>
      <DirectoryFromUrl {...props} />
    </Suspense>
  );
}

function DirectoryFromUrl(props: Props) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const requested = params.get("cat");
  const cat = MEMBER_CATS.some((c) => c.id === requested) ? requested! : "all";
  const onCat = (id: string) =>
    router.replace(id === "all" ? pathname : `${pathname}?cat=${id}`, { scroll: false });
  return <DirectoryView {...props} cat={cat} onCat={onCat} />;
}

function DirectoryView({
  lang,
  t,
  common,
  joinHref,
  cat,
  onCat,
}: Props & { cat: string; onCat: (id: string) => void }) {
  const [q, setQ] = useState("");
  const query = q.trim().toLocaleLowerCase(lang);
  const matches = (m: (typeof MEMBERS)[number]) =>
    !query || `${m.el} ${m.en} ${m.dEl} ${m.dEn}`.toLocaleLowerCase(lang).includes(query);

  const groups = MEMBER_CATS.filter((c) => cat === "all" || c.id === cat)
    .map((c) => ({ ...c, items: MEMBERS.filter((m) => m.cat === c.id && matches(m)) }))
    .filter((g) => cat !== "all" || g.items.length > 0);
  const noResults = groups.every((g) => g.items.length === 0);

  const cats = [
    { id: "all", label: t.allCategories, count: MEMBERS.length },
    ...MEMBER_CATS.map((c) => ({ id: c.id, label: c[lang], count: MEMBERS.filter((m) => m.cat === c.id).length })),
  ];
  const catButtons = (className: string) =>
    cats.map((c) => (
      <button
        key={c.id}
        type="button"
        className={className}
        aria-pressed={c.id === cat}
        onClick={() => onCat(c.id)}
      >
        <span>{c.label}</span> <span className={styles.catCount}>{c.count}</span>
      </button>
    ));

  return (
    <>
      <PageIntro
        kicker={t.kicker}
        title={t.title}
        asideWidth={340}
        aside={
          <div className={styles.tools}>
            <label className={styles.search}>
              <span className="label">{t.search}</span>
              <input
                className={`input ${styles.searchInput}`}
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={t.searchPlaceholder}
              />
            </label>
            <a href={joinHref} className="rule-link">{t.join}</a>
          </div>
        }
      >
        <p className={styles.lede}>{t.lede}</p>
      </PageIntro>

      <span className={`meander meander-muted ${styles.meander}`} aria-hidden="true" />

      <div className={`${styles.chipsBar} no-scrollbar`} role="group" aria-label={t.categories}>
        {catButtons(styles.chip)}
      </div>

      <div className={styles.layout}>
        <nav className={styles.sidebar} aria-label={t.categories}>
          <span className={`label ${styles.sidebarLabel}`}>{t.categories}</span>
          {catButtons(styles.catLink)}
        </nav>

        <div className={styles.groups} aria-live="polite">
          {noResults ? <p className={styles.empty}>{t.noResults}</p> : null}
          {groups.map((g) => (
            <section key={g.id}>
              <div className={styles.groupHead}>
                <h2 className={styles.groupTitle}>{g[lang]}</h2>
                <span className={styles.groupCount}>{g.items.length}</span>
                <span className={styles.groupRule} />
                <span className={styles.groupAlt} lang={lang === "el" ? "en" : "el"}>
                  {g[lang === "el" ? "en" : "el"]}
                </span>
              </div>
              <div className={styles.grid}>
                {g.items.map((m) => (
                  <MemberCard
                    key={m.id}
                    m={m}
                    lang={lang}
                    common={common}
                    featuredLabel={t.featured}
                    variant={m.feat ? "featured" : "standard"}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

