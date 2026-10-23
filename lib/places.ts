import type { Locale } from "@/lib/i18n/config";
import { places } from "@/data/places";

// 同一段內容的各語言版本，例如 { "zh-TW": "九份老街", en: "Jiufen Old Street" }
// 用 Record<Locale, string>：少寫任何一個語言，TypeScript 就會報錯
export type Localized = Record<Locale, string>;

// 類型和地區都用「陣列＋as const」定義，跟 config.ts 的語言清單同一招：
// 陣列的順序就是篩選按鈕的順序，型別也從陣列自動推導
export const categories = ["sight", "food", "cafe", "shop"] as const;
export type Category = (typeof categories)[number]; // "sight" | "food" | "cafe" | "shop"

// 由北到南、最後東部
export const regions = [
  "taipei",
  "new-taipei",
  "hsinchu",
  "taichung",
  "nantou",
  "chiayi",
  "tainan",
  "kaohsiung",
  "hualien",
] as const;
export type Region = (typeof regions)[number];

// 外部圖片（Wikimedia Commons）。CC 授權規定要標示作者、授權和出處
export type PlaceImage = {
  src: string; // 圖片網址
  credit: string; // 作者
  license: string; // 授權名稱，例如 "CC BY-SA 4.0"
  licenseUrl: string; // 授權條款網址
  sourceUrl: string; // 圖片在 Commons 的原始頁面
};

// 經緯度：地圖標記的位置
export type PlaceLocation = { lat: number; lng: number };

export type Place = {
  id: string; // 網址用的代號，只用小寫英文和 -，例如 "anping-old-fort"
  category: Category;
  region: Region;
  name: Localized;
  description: Localized;
  mapQuery: string; // 丟給 Google 地圖搜尋的字，用中文店名＋城市最準
  location: PlaceLocation; // 地圖上的位置（必填，少了會標紅）
  michelinBib?: number; // 有入選米其林必比登的話，寫最近確認的年份
  localPick?: boolean; // 我自己的私房推薦（不是米其林名單上的）
  notice?: Localized; // 需要特別提醒的事，例如部分封閉
  image?: PlaceImage; // 選填：卡片縮圖
};

// 產生 Google 地圖連結
export function mapsUrl(place: Place) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.mapQuery)}`;
}

export function getPlace(id: string) {
  return places.find((place) => place.id === id);
}

export { places };
