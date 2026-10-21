"use client"; // 篩選要記住「使用者點了哪個按鈕」，這種會變動的狀態只能在瀏覽器裡

import { useState, type ReactNode } from "react";
import { categories, regions, type Category, type Region } from "@/lib/places";

// 每一筆資料：篩選需要的欄位＋伺服器已經畫好的卡片
export type FilterItem = {
  id: string;
  category: Category;
  region: Region;
  card: ReactNode;
};

type Props = {
  items: FilterItem[];
  labels: {
    all: string;
    type: string;
    region: string;
    empty: string;
    categories: Record<Category, string>;
    regions: Record<Region, string>;
  };
};

export default function PlaceFilter({ items, labels }: Props) {
  // useState：記住目前選了什麼，預設都是「全部」
  const [category, setCategory] = useState<Category | "all">("all");
  const [region, setRegion] = useState<Region | "all">("all");

  // 符合條件的才留下來
  const matches = (item: FilterItem) =>
    (category === "all" || item.category === category) &&
    (region === "all" || item.region === region);
  const visible = items.filter(matches);

  // 每個地區在「目前類型」下有幾筆，顯示在按鈕上；0 筆的按鈕就停用
  const regionCount = (r: Region) =>
    items.filter((item) => (category === "all" || item.category === category) && item.region === r)
      .length;

  return (
    <div className="mt-8 flex flex-col gap-10">
      {/* 篩選按鈕 */}
      <div className="flex flex-col gap-3">
        <ChipGroup label={labels.type}>
          <Chip active={category === "all"} onClick={() => setCategory("all")}>
            {labels.all}
          </Chip>
          {categories.map((c) => (
            <Chip key={c} active={category === c} onClick={() => setCategory(c)}>
              {labels.categories[c]}
            </Chip>
          ))}
        </ChipGroup>

        <ChipGroup label={labels.region}>
          <Chip active={region === "all"} onClick={() => setRegion("all")}>
            {labels.all}
          </Chip>
          {regions.map((r) => {
            const count = regionCount(r);
            return (
              <Chip key={r} active={region === r} disabled={count === 0} onClick={() => setRegion(r)}>
                {labels.regions[r]}
                <span className="ml-1 opacity-60">{count}</span>
              </Chip>
            );
          })}
        </ChipGroup>
      </div>

      {/* 結果：照類型分區，沒有東西的區塊就不顯示 */}
      {visible.length === 0 && <p className="opacity-70">{labels.empty}</p>}

      {categories.map((c) => {
        const sectionItems = visible.filter((item) => item.category === c);
        if (sectionItems.length === 0) return null;
        return (
          <section key={c}>
            <h2 className="mb-4 text-xl font-semibold">
              {labels.categories[c]}
              <span className="ml-2 text-base font-normal opacity-60">{sectionItems.length}</span>
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sectionItems.map((item) => (
                <div key={item.id} className="flex">
                  {item.card}
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

// 一排按鈕＋前面的小標題
function ChipGroup({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap items-center gap-2">
      <span className="mr-1 w-full text-xs font-semibold uppercase tracking-wider opacity-60 sm:w-auto">
        {label}
      </span>
      {children}
    </div>
  );
}

// 單一個篩選按鈕
function Chip({
  active,
  disabled = false,
  onClick,
  children,
}: {
  active: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={active} // 讓螢幕閱讀器知道這個按鈕目前「有被選」
      className={
        "rounded-full border px-3 py-1 text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-30 " +
        (active
          ? "border-foreground bg-foreground text-background"
          : "border-foreground/20 hover:border-foreground/60")
      }
    >
      {children}
    </button>
  );
}
