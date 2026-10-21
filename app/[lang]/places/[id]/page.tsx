import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getT } from "@/lib/i18n/t";
import { getPlace, mapsUrl, places } from "@/lib/places";
import PlacePhoto from "@/components/PlacePhoto";

// 打包時，每個地點各產生一頁。
// 上一層的 layout 已經產生 zh-TW、en、es，所以這裡只要給 id：
// 3 種語言 × 地點數 = 全部的詳細頁
export function generateStaticParams() {
  return places.map((place) => ({ id: place.id }));
}

// 分頁標題用地點名稱，例如「安平樹屋｜台灣私房景點」
export async function generateMetadata({
  params,
}: PageProps<"/[lang]/places/[id]">): Promise<Metadata> {
  const { lang, id } = await params;
  const place = getPlace(id);
  if (!isLocale(lang) || !place) return {};

  const t = await getT(lang);
  return {
    title: `${place.name[lang]}｜${t("meta.title")}`,
    description: place.description[lang],
  };
}

export default async function PlacePage({ params }: PageProps<"/[lang]/places/[id]">) {
  const { lang, id } = await params;
  const place = getPlace(id);

  // 語言不支援，或找不到這個地點（例如網址打錯）→ 404
  if (!isLocale(lang) || !place) notFound();

  const t = await getT(lang);

  // 同地區的其他地點，最多 6 個；同類型的排前面（看餐廳時先推薦其他餐廳）
  const nearby = places
    .filter((p) => p.region === place.region && p.id !== place.id)
    .sort((a, b) => Number(b.category === place.category) - Number(a.category === place.category))
    .slice(0, 6);

  return (
    <main className="mx-auto w-full max-w-3xl px-4 pb-16">
      <Link href={`/${lang}`} className="text-sm opacity-70 hover:opacity-100">
        ← {t("place.back")}
      </Link>

      <article className="mt-6 flex flex-col gap-5">
        {place.image && (
          <PlacePhoto
            image={place.image}
            alt={place.name[lang]}
            sizes="(min-width: 768px) 736px, 100vw"
            t={t}
            className="aspect-[16/9] rounded-xl"
          />
        )}

        <div className="flex flex-wrap gap-2 text-xs">
          <span className="rounded-full bg-foreground/10 px-2 py-0.5">
            {t(`regions.${place.region}`)}
          </span>
          <span className="rounded-full bg-foreground/10 px-2 py-0.5">
            {t(`categories.${place.category}`)}
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

        <h1 className="font-display text-3xl font-extrabold">{place.name[lang]}</h1>
        <p className="text-lg leading-relaxed opacity-80">{place.description[lang]}</p>

        {place.notice && (
          <p className="rounded-lg bg-amber-500/10 p-4">
            <strong>{t("place.notice")}</strong> {place.notice[lang]}
          </p>
        )}

        <a
          href={mapsUrl(place)}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background"
        >
          {t("place.openMap")} ↗
        </a>
      </article>

      {nearby.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-4 text-xl font-semibold">{t("place.moreInRegion")}</h2>
          <ul className="grid gap-2 sm:grid-cols-2">
            {nearby.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/${lang}/places/${p.id}`}
                  className="flex items-center justify-between rounded-lg border border-foreground/15 px-4 py-3 hover:border-foreground/50"
                >
                  <span>{p.name[lang]}</span>
                  <span className="text-xs opacity-60">{t(`categories.${p.category}`)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
