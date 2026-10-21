import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getT } from "@/lib/i18n/t";
import { categories, places, regions } from "@/lib/places";
import PlaceCard from "@/components/PlaceCard";
import PlaceFilter from "@/components/PlaceFilter";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const t = await getT(lang);

  // 卡片在伺服器上先畫好（翻譯也在這裡查好），
  // 篩選元件只負責決定「哪些要顯示」，不需要知道翻譯怎麼做
  const items = places.map((place) => ({
    id: place.id,
    category: place.category,
    region: place.region,
    card: <PlaceCard place={place} lang={lang} t={t} />,
  }));

  // 篩選按鈕上的文字，一樣在伺服器上查好再傳進去
  const labels = {
    all: t("filter.all"),
    type: t("filter.type"),
    region: t("filter.region"),
    empty: t("filter.empty"),
    categories: labelMap(categories, (c) => t(`categories.${c}`)),
    regions: labelMap(regions, (r) => t(`regions.${r}`)),
  };

  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-16">
      <h1 className="font-display text-3xl font-extrabold">{t("home.title")}</h1>
      <p className="mt-2 opacity-70">{t("home.subtitle")}</p>

      <PlaceFilter items={items} labels={labels} />
    </main>
  );
}

// 把一串代號變成 { 代號: 翻譯 }，例如 ["sight", "food"] → { sight: "景點", food: "餐廳" }
function labelMap<K extends string>(keys: readonly K[], label: (key: K) => string) {
  return Object.fromEntries(keys.map((key) => [key, label(key)])) as Record<K, string>;
}
