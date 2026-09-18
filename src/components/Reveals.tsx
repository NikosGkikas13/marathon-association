"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Content marked `data-reveal` that starts below the fold rises in as it
 * scrolls into view, staggered among its siblings. Anything already on
 * screen is left alone, and without JS everything simply shows.
 */
export function Reveals() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const vh = window.innerHeight;
    const perParent = new Map<Element | null, number>();
    const pending: HTMLElement[] = [];

    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.94) return;
      const i = perParent.get(el.parentElement) ?? 0;
      perParent.set(el.parentElement, i + 1);
      el.style.transitionDelay = `${Math.min(i, 7) * 70}ms`;
      el.classList.remove("is-shown");
      el.classList.add("is-pending");
      pending.push(el);
    });

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.replace("is-pending", "is-shown");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -6% 0px" },
    );
    pending.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      pending.forEach((el) => el.classList.remove("is-pending"));
    };
  }, [pathname]);

  return null;
}
