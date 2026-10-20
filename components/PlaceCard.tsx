import type { Locale } from "@/lib/i18n/config";
import type { TFunction } from "@/lib/i18n/t";
import { mapsUrl, type Place } from "@/lib/places";

type Props = {
  place: Place;
  lang: Locale;
  t: TFunction;
};

export default function PlaceCard({ place, lang, t }: Props) {
  return (
    <article className="flex flex-col gap-3 rounded-xl border border-foreground/15 p-5">
      {/* 標籤列：地區＋必比登 */}
      <div className="flex flex-wrap gap-2 text-xs">
        <span className="rounded-full bg-foreground/10 px-2 py-0.5">
          {t(`regions.${place.region}`)}
        </span>
        {place.michelinBib && (
          <span className="rounded-full bg-red-600/10 px-2 py-0.5 text-red-700 dark:text-red-400">
            {t("place.michelinBib")} {place.michelinBib}
          </span>
        )}
      </div>

      {/* 內容：用 lang 從 { "zh-TW": ..., en: ... } 裡挑出目前語言 */}
      <h3 className="text-lg font-semibold">{place.name[lang]}</h3>
      <p className="text-sm leading-relaxed opacity-80">{place.description[lang]}</p>

      {place.notice && (
        <p className="rounded-lg bg-amber-500/10 p-3 text-sm">
          <strong>{t("place.notice")}</strong> 
          {place.notice[lang]}
        </p>
      )}

      {/* mt-auto：把連結推到卡片最下面，讓每張卡片的連結對齊 */}
      <a
        href={mapsUrl(place)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto text-sm font-medium underline underline-offset-4"
      >
        {t("place.openMap")} ↗
      </a>
    </article>
  );
}
