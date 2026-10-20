import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getT } from "@/lib/i18n/t";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const t = await getT(lang);

  return (
    <main>
      <h1>{t("home.title")}</h1>
      <p>{t("home.subtitle")}</p>
    </main>
  );
}
