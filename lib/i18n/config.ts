// 網站支援的語言清單。要加語言（例如 "de"）時，只改這裡，
// 再新增對應的 messages/de.json。
export const locales = ["zh-TW", "en"] as const;

// Locale 型別 = "zh-TW" | "en"，由上面的陣列自動推導出來。
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh-TW";

// 網址裡的語言是任意字串（例如 /fr），用這個檢查是不是我們支援的。
// 回傳型別 `value is Locale` 讓 TypeScript 在 if 判斷後把 value 當成 Locale。
export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
