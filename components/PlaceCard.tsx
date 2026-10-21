import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { TFunction } from "@/lib/i18n/t";
import { mapsUrl, type Place } from "@/lib/places";

type Props = {
  place: Place;
  lang: Locale;
  t: TFunction;
};

export default function PlaceCard({ place, lang, t }: Props) {
  const { image } = place;

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-foreground/15">
      {/* 縮圖：有 image 才顯示（目前景點有、餐廳沒有） */}
      {image && (
        <figure className="relative aspect-[16/10]">
          <Image
            src={image.src}
            alt={place.name[lang]}
            fill // 填滿外層的 16:10 方框
            // 告訴瀏覽器卡片在各種螢幕上大約多寬，Next.js 會挑剛好的尺寸，不會下載過大的圖
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          {/* CC 授權規定：標示作者、授權和出處 */}
          <figcaption className="absolute right-0 bottom-0 rounded-tl-md bg-black/55 px-2 py-0.5 text-[10px] text-white">
            {t("place.photo")}:{" "}
            <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">
              {image.credit}
            </a>{" "}
            ·{" "}
            <a href={image.licenseUrl} target="_blank" rel="noopener noreferrer" className="underline">
              {image.license}
            </a>
          </figcaption>
        </figure>
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
        </div>

        {/* 內容：用 lang 從 { "zh-TW": ..., en: ..., es: ... } 裡挑出目前語言 */}
        <h3 className="font-display text-base font-bold">{place.name[lang]}</h3>
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
