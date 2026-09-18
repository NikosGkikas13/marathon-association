# Marathon Business Association

The brochure website of the Marathon Business Association (Σύλλογος Επιχειρηματιών Μαραθώνα), in Greek and English. Built from the Claude Design file `Marathon.dc.html`, using its "Broadsheet" design system.

## Stack

- Next.js 16 (App Router) and TypeScript. Every page is prerendered as static HTML.
- Plain CSS: the Broadsheet tokens in `src/app/globals.css`, plus a CSS Module per component.
- Source Serif 4 (Latin and Greek) through `next/font`.
- No backend. All content lives in typed files under `src/content/`.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000. It redirects to `/el`, the Greek site. The English site is at `/en`.

```bash
npm run build   # production build (static pages)
npm run lint
```

## Pages

| Path | Page |
| --- | --- |
| `/[lang]` | Home: hero, entry points, the battle, four featured places, member preview |
| `/[lang]/see` | What to see: ten places with a category filter |
| `/[lang]/see/[id]` | A place: long-form article, visiting details, photos |
| `/[lang]/members` | Member directory: search and categories (`?cat=` links to one category) |
| `/[lang]/members/[id]` | A member: about, services, hours, contact, map link |
| `/[lang]/info` | Emergency numbers and practical information |

## Where things live

- `src/content/landmarks.ts`: places, their categories and photos.
- `src/content/landmark-articles.ts`: long-form copy for each place. Lines starting with `## ` are subheadings.
- `src/content/members.ts`: members, categories, hours and detail copy.
- `src/lib/dictionary.ts`: all interface text in both languages. The English object is typed against the Greek one, so a missing key fails the build.
- `public/images/`: photographs.

To add a photo to a place, put the file in `public/images/`, then set `img` (and optionally `gallery`) on its entry in `landmarks.ts`.

## Still placeholder content

The design marks these as "to be confirmed". Replace them before launch:

- Member phone numbers (`22940 xx xxx`), addresses and opening hours in `members.ts`.
- Local service phone numbers on the info page (`dictionary.ts` → `info.localRows`).
- The association's address, phone and email (`dictionary.ts` → `footer`).
- Opening hours and admission for each place (shown as "To be confirmed").
- Photos for nine of the ten places and for every member. The empty frames show a caption until a photo is added.
- The association logo. The footer shows a ΣΕΜ monogram in its place.
- "Join the association" links to the placeholder email address.

"Open now / Closed now" is computed in the browser in Athens time, so the static HTML never shows a stale state.
