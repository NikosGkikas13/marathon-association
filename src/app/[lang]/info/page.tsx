import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { getDictionary } from "@/lib/dictionary";
import { telHref } from "@/lib/format";
import type { Locale } from "@/lib/i18n";
import styles from "./info.module.css";

export async function generateMetadata({ params }: PageProps<"/[lang]/info">): Promise<Metadata> {
  const dict = getDictionary((await params).lang as Locale);
  return { title: dict.info.title, description: dict.info.lede };
}

export default async function InfoPage({ params }: PageProps<"/[lang]/info">) {
  const lang = (await params).lang as Locale;
  const t = getDictionary(lang).info;

  return (
    <main className={`page narrow ${styles.main}`}>
      <div className={styles.intro}>
        <PageIntro kicker={t.kicker} title={t.title} asideWidth={360} aside={<p className={styles.lede}>{t.lede}</p>} />
      </div>

      <h2 className={styles.smallHead}>{t.national}</h2>
      <p className={styles.nationalNote}>{t.nationalNote}</p>

      <a href="tel:112" className={styles.eu}>
        <span className={styles.euNum}>112</span>
        <span className={styles.euText}>
          <span className={styles.euTitle}>{t.euTitle}</span>
          <span className={styles.euBody}>{t.euBody}</span>
        </span>
      </a>

      <div className={styles.numbers}>
        {t.numbers.map((n) => (
          <a key={n.num} href={telHref(n.num)} className={styles.number}>
            <span className={styles.num}>{n.num}</span>
            <span className={styles.numTitle}>{n.title}</span>
            <span className={styles.numBody}>{n.body}</span>
          </a>
        ))}
      </div>

      <div className={styles.columns}>
        <section>
          <h2 className={styles.smallHead}>{t.local}</h2>
          <p className={`placeholder-note ${styles.localNote}`}>{t.localNote}</p>
          <table className="table">
            <tbody>
              {t.localRows.map((r) => (
                <tr key={r.name}>
                  <td className={styles.cellName}>{r.name}</td>
                  <td className={styles.cellTel}>{r.tel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <div className={styles.practical}>
          <section>
            <h2 className={`${styles.smallHead} ${styles.spaced}`}>{t.access}</h2>
            {t.accessItems.map((a) => (
              <p key={a.label} className={styles.para}>
                <strong>{a.label}</strong> {a.text}
              </p>
            ))}
          </section>
          <section>
            <h2 className={`${styles.smallHead} ${styles.spaced}`}>{t.beach}</h2>
            <p className={styles.para}>{t.beachBody}</p>
          </section>
          <section className={styles.fire}>
            <h2 className={`${styles.smallHead} ${styles.fireHead}`}>{t.fire}</h2>
            <p className={styles.para}>
              {t.fireBody[0]}
              <strong>{t.fireBody[1]}</strong>
              {t.fireBody[2]}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
