"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useSyncExternalStore } from "react";
import { LOCALES, switchLocalePath, type Locale } from "@/lib/i18n";
import type { Dictionary } from "@/lib/dictionary";
import styles from "./Header.module.css";

type Section = "home" | "see" | "members" | "info";

// 0 = at the top, 1 = scrolled a little (show the hairline), 2 = past the hero's top band.
function subscribe(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}
const scrollStage = () => (window.scrollY > 160 ? 2 : window.scrollY > 8 ? 1 : 0);
const serverStage = () => 0;

export function Header({ lang, dict }: { lang: Locale; dict: Pick<Dictionary, "brand" | "nav"> }) {
  const pathname = usePathname();
  const stage = useSyncExternalStore(subscribe, scrollStage, serverStage);
  // The menu belongs to the page it was opened on, so navigating closes it.
  const [menuFor, setMenuFor] = useState<string | null>(null);
  const menuOpen = menuFor === pathname;

  const section: Section = (pathname.split("/")[2] as Section | undefined) || "home";
  const overHero = section === "home" && stage < 2 && !menuOpen;
  const compact = !overHero;

  const links: { id: Section; href: string; label: string }[] = [
    { id: "home", href: `/${lang}`, label: dict.nav.home },
    { id: "see", href: `/${lang}/see`, label: dict.nav.see },
    { id: "members", href: `/${lang}/members`, label: dict.nav.members },
    { id: "info", href: `/${lang}/info`, label: dict.nav.info },
  ];

  const langSwitch = (
    <span className={styles.langs} role="group" aria-label={dict.nav.language}>
      {LOCALES.map((l, i) => (
        <span key={l} className={styles.langItem}>
          {i > 0 ? <span className={styles.slash} aria-hidden="true">/</span> : null}
          <Link
            href={switchLocalePath(pathname, l)}
            hrefLang={l}
            lang={l}
            className={styles.lang}
            aria-current={l === lang ? "true" : undefined}
            scroll={false}
          >
            {l === "el" ? "ΕΛ" : "EN"}
          </Link>
        </span>
      ))}
    </span>
  );

  return (
    <header
      className={styles.header}
      data-over-hero={overHero || undefined}
      data-compact={compact || undefined}
      data-hairline={(compact && (stage > 0 || section !== "home")) || menuOpen || undefined}
    >
      <div className={styles.bar}>
        <Link href={`/${lang}`} className={styles.brand}>
          <span className={styles.mark} aria-hidden="true">{dict.brand.mark}</span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>{dict.brand.name}</span>
            <span className={styles.brandSub}>{dict.brand.sub}</span>
          </span>
        </Link>

        <nav className={styles.nav} aria-label={dict.nav.main}>
          {links.map((l) => (
            <Link
              key={l.id}
              href={l.href}
              className={styles.navLink}
              aria-current={l.id === section ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
          {langSwitch}
        </nav>

        <div className={styles.mobileTools}>
          {langSwitch}
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuFor(menuOpen ? null : pathname)}
          >
            {menuOpen ? dict.nav.close : dict.nav.menu}
          </button>
        </div>
      </div>

      <nav id="site-menu" className={styles.menu} hidden={!menuOpen} aria-label={dict.nav.main}>
        {links.map((l, i) => (
          <Link
            key={l.id}
            href={l.href}
            className={styles.menuLink}
            aria-current={l.id === section ? "page" : undefined}
          >
            <span>{l.label}</span>
            {i > 0 ? <span className={styles.menuNum}>{String(i).padStart(2, "0")}</span> : null}
          </Link>
        ))}
      </nav>
    </header>
  );
}
