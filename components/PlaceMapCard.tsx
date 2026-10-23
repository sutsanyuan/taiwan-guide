import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { TFunction } from "@/lib/i18n/t";
import { mapsUrl, type Place } from "@/lib/places";
import { pinIcons } from "@/components/mapPins";

type Props = {
  place: Place;
  lang: Locale;
  t: TFunction;
};

// 點地圖標記後，浮在地圖底部的「精簡版卡片」
// 只放決定「要不要去」需要的資訊：類型、名字、標籤、導航連結
// 想看完整介紹 → 點名字進詳細頁
export default function PlaceMapCard({ place, lang, t }: Props) {
  const icon = pinIcons[place.category];

  return (
    <article className="flex items-start gap-3 pr-8">
      {/* 左邊：和地圖上一樣的類型圖示，讓人一眼對上「我剛剛點的那個」 */}
      <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-foreground text-background">
        <svg viewBox={icon.viewBox} width="22" height="23" aria-hidden="true">
          <path d={icon.d} fill="currentColor" />
        </svg>
      </div>

      <div className="flex min-w-0 flex-col gap-1.5">
        <h3 className="font-display text-base leading-snug font-bold">
          <Link href={`/${lang}/places/${place.id}`} className="underline-offset-4 hover:underline">
            {place.name[lang]}
          </Link>
        </h3>

        <div className="flex flex-wrap gap-1.5 text-xs">
          <span className="rounded-full bg-foreground/10 px-2 py-0.5">
            {t(`regions.${place.region}`)}
          </span>
          {place.michelinBib && (
            <span className="rounded-full bg-red-600/10 px-2 py-0.5 text-red-700 dark:text-red-400">
              {t("place.michelinBib")} {place.michelinBib}
            </span>
          )}
          {place.localPick && (
            <span className="rounded-full bg-emerald-600/10 px-2 py-0.5 text-emerald-700 dark:text-emerald-400">
              {t("place.localPick")}
            </span>
          )}
        </div>

        <a
          href={mapsUrl(place)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium underline underline-offset-4"
        >
          {t("place.openMap")} ↗
        </a>
      </div>
    </article>
  );
}
