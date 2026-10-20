import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { isLocale, locales } from "@/lib/i18n/config";
import { getT } from "@/lib/i18n/t";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 告訴 Next.js：打包時要產生 /zh-TW 和 /en 兩個版本的靜態頁面
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// <title> 和網頁描述也要跟著語言變，所以用函式產生，而不是寫死
export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const t = await getT(lang);
  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;

  // 網址是 /fr 這種不支援的語言 → 顯示 404
  if (!isLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="flex justify-end p-4">
          <LanguageSwitcher currentLang={lang} />
        </header>
        {children}
      </body>
    </html>
  );
}

