"use client";

import type { Member } from "@/content/members";
import type { Dictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { MemberRow } from "./MemberRow";
import { useShuffled } from "./useShuffled";

/**
 * The home page's member list, in a new random order on every visit. Rendered
 * here rather than on the server so the rows can be reordered after hydration.
 * Hidden until shuffled, so the source order never flashes.
 */
export function HomeMembers({
  members,
  lang,
  common,
  className,
}: {
  members: Member[];
  lang: Locale;
  common: Dictionary["common"];
  className?: string;
}) {
  const { items, ready } = useShuffled(members);
  return (
    <div className={className} style={{ opacity: ready ? 1 : 0, transition: "opacity 200ms" }}>
      {items.map((m) => (
        <MemberRow key={m.id} m={m} lang={lang} common={common} />
      ))}
    </div>
  );
}
