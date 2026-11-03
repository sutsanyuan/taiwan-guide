import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Krona_One, Manrope } from "next/font/google";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { getT } from "@/lib/i18n/t";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import "../globals.css";
// 中文字體 LINE Seed TW：不在 Google Fonts 上，切片後放在 app/fonts，用 CSS 載入
import "../fonts/line-seed-tw/line-seed-tw.css";

// 標題字體：Krona One（只有一種粗細，所以要指定 weight）
// latin-ext 包含西語的 á é ñ
const krona = Krona_One({
    weight: "400",
    subsets: ["latin", "latin-ext"],
    variable: "--font-krona",
});

// 內文字體：Manrope（可變字體，粗細不用指定）
const manrope = Manrope({
    subsets: ["latin", "latin-ext"],
    variable: "--font-manrope",
});

// 告訴 Next.js：打包時要產生 /zh-TW 和 /en 兩個版本的靜態頁面
export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

// <title> 和網頁描述也要跟著語言變，所以用函式產生，而不是寫死
export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
    const { lang } = await params;
    if (!isLocale(lang)) return {};

    const t = await getT(lang);
    const title = t("meta.title");
    const description = t("meta.description");
    return {
        // 網站的正式網址：分享預覽圖要用「完整網址」，Next.js 會把下面的 /og/... 接在這後面
        metadataBase: new URL("https://taiwan-guide-rho.vercel.app"),
        title,
        description,
        // Open Graph：貼網址到 LINE、Facebook、Messenger 時顯示的標題、描述和大圖
        openGraph: {
            type: "website",
            siteName: title,
            title,
            description,
            url: `/${lang}`,
            locale: ogLocale[lang],
            // 每種語言一張圖，放在 public/og/
            images: [{ url: `/og/${lang}.png`, width: 1200, height: 630, alt: title }],
        },
        // X（Twitter）用的設定：summary_large_image = 顯示大圖
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [`/og/${lang}.png`],
        },
    };
}

// Open Graph 的語言代碼格式是「語言_地區」，和網址用的 zh-TW 寫法不一樣
const ogLocale: Record<Locale, string> = {
    "zh-TW": "zh_TW",
    en: "en_US",
    es: "es_ES",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
    const { lang } = await params;

    // 網址是 /fr 這種不支援的語言 → 顯示 404
    if (!isLocale(lang)) notFound();

    return (
        <html lang={lang} className={`${krona.variable} ${manrope.variable} h-full antialiased`}>
            <body className="min-h-full flex flex-col" suppressHydrationWarning>
                <header className="flex justify-end p-4">
                    <LanguageSwitcher currentLang={lang} />
                </header>
                {children}
            </body>
        </html>
    );
}
