import type { Locale } from "@/lib/i18n/config";
import { places } from "@/data/places";

// 同一段內容的各語言版本，例如 { "zh-TW": "九份老街", en: "Jiufen Old Street" }
// 用 Record<Locale, string>：少寫任何一個語言，TypeScript 就會報錯
export type Localized = Record<Locale, string>;

export type Category = "sight" | "food";

export type Region =
  | "taipei"
  | "new-taipei"
  | "hsinchu"
  | "taichung"
  | "nantou"
  | "chiayi"
  | "tainan"
  | "kaohsiung"
  | "hualien";

// 外部圖片（Wikimedia Commons）。CC 授權規定要標示作者、授權和出處
export type PlaceImage = {
  src: string; // 圖片網址
  credit: string; // 作者
  license: string; // 授權名稱，例如 "CC BY-SA 4.0"
  licenseUrl: string; // 授權條款網址
  sourceUrl: string; // 圖片在 Commons 的原始頁面
};

export type Place = {
  id: string; // 網址用的代號，只用小寫英文和 -，例如 "anping-old-fort"
  category: Category;
  region: Region;
  name: Localized;
  description: Localized;
  mapQuery: string; // 丟給 Google 地圖搜尋的字，用中文店名＋城市最準
  michelinBib?: number; // 有入選米其林必比登的話，寫最近確認的年份
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
