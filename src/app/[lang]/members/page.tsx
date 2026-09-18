import type { Metadata } from "next";
import { Directory } from "@/components/Directory";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import styles from "./members.module.css";

export async function generateMetadata({ params }: PageProps<"/[lang]/members">): Promise<Metadata> {
  const dict = getDictionary((await params).lang as Locale);
  return { title: dict.members.title, description: dict.members.lede };
}

export default async function MembersPage({ params }: PageProps<"/[lang]/members">) {
  const lang = (await params).lang as Locale;
  const dict = getDictionary(lang);
  return (
    <main className={`page ${styles.main}`}>
      <Directory lang={lang} t={dict.members} common={dict.common} joinHref={`mailto:${dict.footer.email}`} />
    </main>
  );
}
