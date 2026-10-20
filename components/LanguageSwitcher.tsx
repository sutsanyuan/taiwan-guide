"use client"; // 這個元件要在瀏覽器執行，才能知道目前網址

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeNames, type Locale } from "@/lib/i18n/config";

type Props = {
  currentLang: Locale;
};

export default function LanguageSwitcher({ currentLang }: Props) {
  const pathname = usePathname(); // 例如 "/zh-TW/places/jiufen"

  // 把網址的第一段（語言）換掉，其他保留：
  // "/zh-TW/places/jiufen" → "/en/places/jiufen"
  function pathFor(lang: Locale) {
    const segments = pathname.split("/"); // ["", "zh-TW", "places", "jiufen"]
    segments[1] = lang;
    return segments.join("/");
  }

  return (
    <nav aria-label="Language">
      <ul className="flex gap-3 text-sm">
        {locales.map((lang) => {
          const isCurrent = lang === currentLang;
          return (
            <li key={lang}>
              <Link
                href={pathFor(lang)}
                lang={lang} // 讓螢幕閱讀器用正確的語言唸出「English」「中文」
                hrefLang={lang}
                aria-current={isCurrent ? "true" : undefined}
                className={
                  isCurrent ? "font-semibold underline" : "opacity-60 hover:opacity-100"
                }
              >
                {localeNames[lang]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
