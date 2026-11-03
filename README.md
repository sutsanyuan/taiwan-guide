# Taiwan Hidden Gems · 台灣私房景點

A multilingual guide to Taiwan's sights and food, built for friends from Europe visiting Taiwan for the first time. It's also my front-end portfolio piece and the project I use to learn TypeScript, Next.js and internationalisation (i18n).

給來台灣玩的歐洲朋友的多語系景點與美食指南，也是我的前端作品集，以及我學 TypeScript、Next.js 和多語系的練習專案。

- **Languages / 語言：** 繁體中文 · English · Español
- **Places / 地點：** 255 places across 17 regions: 71 sights, 163 restaurants, 12 cafés & drinks, 9 shops
- **Includes / 收錄：** all 146 restaurants on the 2026 MICHELIN Bib Gourmand list for Taiwan, plus 48 of my own local picks

---

## Features

- **Three languages in the URL**: `/zh-TW`, `/en`, `/es`. Every page is statically generated per language, so links can be shared and search engines see each language. The language switcher keeps you on the same page.
- **Filter by type and region**: sights, food, cafés & drinks, shopping; 17 regions from Taipei to Penghu. Region buttons show how many places match the current type.
- **Interactive map**: pins for every place currently shown, using the category icons I designed in Figma. Tap a pin to open a compact card floating at the bottom of the map, with a link out to Google Maps.
- **"Show my location"**: asks for location only when you tap the button, never on page load. Your position stays in the browser.
- **Place detail pages** with a CC-licensed photo (credited), tags (MICHELIN Bib Gourmand, local pick), practical notices (closures, ferries, weather), and nearby places in the same region.
- **Fonts for three scripts**: Krona One (display) and Manrope (body) for Latin text, and a self-hosted, subset-split LINE Seed TW for Chinese, so visitors only download the characters a page actually uses.

## Tech stack

| | |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, fully static, Cache Components) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Map | [MapLibre GL](https://maplibre.org) + [OpenFreeMap](https://openfreemap.org) tiles (free, no API key) |
| i18n | Hand-written `t()` function, no i18n library (see below) |
| Design | Figma (components, colour variables and text styles) |
| Hosting | Vercel (planned) |

## Getting started

```bash
npm install     # also copies the MapLibre worker into public/maplibre/
npm run dev     # http://localhost:3000/zh-TW
```

Other scripts: `npm run build`, `npm run start`, `npm run lint`.

## How the i18n works

I deliberately built the first version **without an i18n library**, to understand what libraries like next-intl do under the hood. The plan is to switch to next-intl once the concepts are solid.

- `messages/zh-TW.json`, `en.json`, `es.json`: one dictionary per language, with the same keys in every file.
- `lib/i18n/config.ts`: the list of supported locales and an `isLocale()` check. Adding a language starts here.
- `lib/i18n/t.ts`: `getT(locale)` returns a `t("home.title")` function. Keys are **type-checked** against the dictionary, so a typo or a missing translation shows up in the editor before it reaches the browser.
- `app/[lang]/`: the language is the first segment of the URL. `generateStaticParams` builds one static version per language, and unknown locales return 404.
- Place data in `data/places.ts` stores every text as `{ "zh-TW": "...", en: "...", es: "..." }`, typed as `Record<Locale, string>`. Leaving out a language is a type error.

The original step-by-step plan is in [`docs/i18n-plan.md`](docs/i18n-plan.md).

## Project structure

```
app/
  [lang]/
    layout.tsx            <html lang>, fonts, language switcher
    page.tsx              home: filters, map, place list
    places/[id]/page.tsx  place detail page
  fonts/line-seed-tw/     self-hosted LINE Seed TW, split into unicode-range chunks
components/
  PlaceFilter.tsx         filter state (client component)
  PlaceMap.tsx            MapLibre map, pins, "show my location" (client component)
  PlaceMapCard.tsx        compact card shown on the map
  PlaceCard.tsx           full card in the list
  PlacePhoto.tsx          photo with author and licence credit
  LanguageSwitcher.tsx
  mapPins.ts              pin icons exported from Figma
data/places.ts            all places: edit this file to add or change places
lib/
  places.ts               types (Place, Category, Region) and helpers
  i18n/                   locale config and t()
messages/                 UI translations
scripts/
  copy-maplibre-worker.mjs   runs on postinstall (see "Notes")
```

## Adding a place

Copy any `{ ... }` block in `data/places.ts` and change its content. TypeScript marks anything missing in red.

```ts
{
  id: "chihkan-tower",
  category: "sight",          // sight | food | cafe | shop
  region: "tainan",
  name: { "zh-TW": "赤崁樓", en: "Chihkan Tower", es: "Torre Chihkan" },
  description: { "zh-TW": "...", en: "...", es: "..." },
  mapQuery: "赤崁樓 台南",     // what "Open in Google Maps" searches for
  location: { lat: 22.997478, lng: 120.2025433 },
  // optional: image, notice, michelinBib, localPick
},
```

**Finding `lat` / `lng`:** open the place in Google Maps and look at the URL. The number after `!3d` is the latitude and the number after `!4d` is the longitude.

**Adding a region:** add it to the `regions` array in `lib/places.ts`. TypeScript will then ask for its name in all three `messages/*.json` files.

## Notes

- **MapLibre worker:** MapLibre draws the map in a Web Worker. Turbopack's dev server can't resolve the worker's default path, so `scripts/copy-maplibre-worker.mjs` copies it into `public/maplibre/` after every `npm install`, and `PlaceMap.tsx` points MapLibre there with `setWorkerUrl()`. The copied files are git-ignored.
- **Hydration warning on `<body>`:** browser extensions like Grammarly add attributes to `<body>` before React loads, so `<body>` has `suppressHydrationWarning`.
- **Spanish** text is a first draft and still needs review by a native speaker.

## Roadmap

- [ ] Deploy to Vercel
- [ ] Desktop map layout (list on the left, map on the right)
- [ ] Rewrite the short descriptions marked `// TODO` in `data/places.ts` in my own words
- [ ] Native-speaker review of the Spanish text
- [ ] Move from the hand-written `t()` to next-intl

## Credits

- **Restaurants:** [MICHELIN Guide Taiwan 2026](https://guide.michelin.com/tw/zh_TW), Bib Gourmand selection (announced July 2026). Sights are based on Lonely Planet, local tourism sites, and my own experience.
- **Photos:** [Wikimedia Commons](https://commons.wikimedia.org). Each photo's author and licence are shown on the photo and stored in `data/places.ts`. Images are loaded from Commons, not copied into this repo.
- **Map:** © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors, tiles by [OpenFreeMap](https://openfreemap.org), rendered with [MapLibre GL](https://maplibre.org).
- **Fonts:** [LINE Seed TW](https://seed.line.me/) (SIL Open Font License 1.1); Krona One and Manrope via Google Fonts.

---

Made by [Tsan-Yuan Su 蘇粲淵](https://github.com/sutsanyuan).
