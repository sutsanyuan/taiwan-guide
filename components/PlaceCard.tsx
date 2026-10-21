import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { TFunction } from "@/lib/i18n/t";
import { mapsUrl, type Place } from "@/lib/places";
import PlacePhoto from "@/components/PlacePhoto";

type Props = {
  place: Place;
  lang: Locale;
  t: TFunction;
};

export default function PlaceCard({ place, lang, t }: Props) {
  const { image } = place;

  return (
    <article className="flex w-full flex-col overflow-hidden rounded-xl border border-foreground/15">
      {/* 縮圖：有 image 才顯示（目前景點有、餐廳沒有） */}
      {image && (
        <PlacePhoto
          image={image}
          alt={place.name[lang]}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          t={t}
          className="aspect-[16/10]"
        />
      )}

      <div className="flex flex-1 flex-col gap-3 p-5">
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
          {place.localPick && (
            <span className="rounded-full bg-emerald-600/10 px-2 py-0.5 text-emerald-700 dark:text-emerald-400">
              {t("place.localPick")}
            </span>
          )}
        </div>

        {/* 內容：用 lang 從 { "zh-TW": ..., en: ..., es: ... } 裡挑出目前語言 */}
        {/* 名稱連到這個地點的詳細頁，例如 /zh-TW/places/anping-tree-house */}
        <h3 className="font-display text-base font-bold">
          <Link href={`/${lang}/places/${place.id}`} className="hover:underline underline-offset-4">
            {place.name[lang]}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed opacity-80">{place.description[lang]}</p>

        {place.notice && (
          <p className="rounded-lg bg-amber-500/10 p-3 text-sm">
            <strong>{t("place.notice")}</strong> {place.notice[lang]}
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
      </div>
    </article>
  );
}
