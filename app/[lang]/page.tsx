import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getT } from "@/lib/i18n/t";
import { places, type Category } from "@/lib/places";
import PlaceCard from "@/components/PlaceCard";

// 首頁分兩區：先景點、再餐廳
const sections: Category[] = ["sight", "food"];

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const t = await getT(lang);

  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-16">
      <h1 className="font-display text-3xl font-extrabold">{t("home.title")}</h1>
      <p className="mt-2 opacity-70">{t("home.subtitle")}</p>

      {sections.map((category) => {
        // 從全部地點裡，篩出這一區的
        const items = places.filter((place) => place.category === category);

        return (
          <section key={category} className="mt-12">
            <h2 className="mb-4 text-xl font-semibold">
              {t(`categories.${category}`)}
              <span className="ml-2 text-base font-normal opacity-60">{items.length}</span>
            </h2>
            {/* 手機一欄、平板兩欄、桌機三欄 */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((place) => (
                <PlaceCard key={place.id} place={place} lang={lang} t={t} />
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
