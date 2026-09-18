"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Drifts its content down at a fraction of the scroll speed. */
export function Parallax({ children, rate, className }: { children: ReactNode; rate: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      el.style.transform = `translate3d(0, ${(window.scrollY * rate).toFixed(1)}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [rate]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
