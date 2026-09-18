// Turns a name into a URL segment: "Φούρνος Γκίκα" → "fournos-gkika",
// "Taverna O Tymvos" → "taverna-o-tymvos". Greek is transliterated to Latin
// letters (close to ELOT 743, the Greek standard), so the result works in
// both language versions of the site.

// Letter pairs that read as one sound. Checked before single letters.
const PAIRS: Record<string, string> = {
  ου: "ou",
  γγ: "ng",
  γκ: "gk",
  γξ: "nx",
  γχ: "nch",
  μπ: "mp",
  ντ: "nt",
  τσ: "ts",
  τζ: "tz",
};

const LETTERS: Record<string, string> = {
  α: "a", β: "v", γ: "g", δ: "d", ε: "e", ζ: "z", η: "i", θ: "th",
  ι: "i", κ: "k", λ: "l", μ: "m", ν: "n", ξ: "x", ο: "o", π: "p",
  ρ: "r", σ: "s", ς: "s", τ: "t", υ: "y", φ: "f", χ: "ch", ψ: "ps", ω: "o",
};

// αυ, ευ, ηυ read "af/ef/if" before a voiceless consonant or at the end of
// a word ("Πευκιάς" → "pefkias"), and "av/ev/iv" otherwise ("Ευβοϊκός" → "evvoikos").
const U_VOWELS: Record<string, string> = { α: "a", ε: "e", η: "i" };
const VOICELESS = new Set("θκξπστφχψ");

export function slugify(text: string): string {
  // Lowercase and strip accents (ά → α, ϊ → ι) before transliterating.
  const plain = text.toLocaleLowerCase("el").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  let out = "";
  for (let i = 0; i < plain.length; i++) {
    if (U_VOWELS[plain[i]] && plain[i + 1] === "υ") {
      const next = plain[i + 2];
      const soft = next === undefined || VOICELESS.has(next) || !/\p{L}/u.test(next);
      out += U_VOWELS[plain[i]] + (soft ? "f" : "v");
      i++;
      continue;
    }
    const pair = PAIRS[plain.slice(i, i + 2)];
    if (pair) {
      out += pair;
      i++;
    } else {
      out += LETTERS[plain[i]] ?? plain[i];
    }
  }
  return out.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
