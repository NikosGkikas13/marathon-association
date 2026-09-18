import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { SeeGrid, type SeeItem } from "@/components/SeeGrid";
import { LANDMARKS, SEE_CATS } from "@/content/landmarks";
import { getDictionary } from "@/lib/dictionary";
import { formatKm, mapsSearchHref } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import { landmarkText } from "@/lib/views";
import styles from "./see.module.css";

export async function generateMetadata({ params }: PageProps<"/[lang]/see">): Promise<Metadata> {
  const dict = getDictionary((await params).lang as Locale);
  return { title: dict.see.title, description: dict.see.lede };
}

export default async function SeePage({ params }: PageProps<"/[lang]/see">) {
  const lang = (await params).lang as Locale;
  const dict = getDictionary(lang);

  const items: SeeItem[] = LANDMARKS.map((lm) => {
    const t = landmarkText(lm, lang);
    return {
      id: lm.id,
      cat: lm.cat,
      href: `/${lang}/see/${lm.id}`,
      ...t,
      dist: `${dict.common.fromCentre} ${formatKm(lm.km, lang, dict.common)}`,
      mapsHref: mapsSearchHref(`${lm.en}, Marathon, Greece`),
      img: lm.img,
      ph: lm.ph,
    };
  });

  const cats = [
    { id: "all", label: dict.see.all, count: LANDMARKS.length },
    ...SEE_CATS.map((c) => ({ id: c.id, label: c[lang], count: LANDMARKS.filter((l) => l.cat === c.id).length })),
  ];

  return (
    <main className={`page ${styles.main}`}>
      <PageIntro
        kicker={dict.see.kicker}
        title={dict.see.title}
        aside={<p className={styles.lede}>{dict.see.lede}</p>}
      />
      <span className={`meander meander-muted ${styles.meander}`} aria-hidden="true" />
      <SeeGrid
        items={items}
        cats={cats}
        labels={{ count: dict.see.count, openMaps: dict.common.openMaps, filters: dict.see.filters }}
      />
    </main>
  );
}
