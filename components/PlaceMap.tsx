"use client"; // 地圖需要瀏覽器才有的東西（畫布、滑鼠、定位），只能在瀏覽器執行

import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Map as MapLibreMap, Marker } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { Category, PlaceLocation } from "@/lib/places";
import { pinIcons } from "@/components/mapPins";

// 地圖上一個標記需要的資料
export type MapPoint = {
  id: string;
  name: string;
  category: Category;
  location: PlaceLocation;
};

type Props = {
  points: MapPoint[]; // 目前篩選後要顯示的地點
  selectedId: string | null; // 目前選中的地點
  selectedCard?: ReactNode; // 選中地點的精簡卡片（浮在地圖底部）
  onSelect: (id: string | null) => void; // 點了某個標記（null = 取消選取）
  labels: { map: string; locateMe: string; locating: string; locationError: string; close: string };
};

// 免費、不用金鑰的底圖（OpenFreeMap 的淺灰色 positron 風格）
const MAP_STYLE = "https://tiles.openfreemap.org/styles/positron";

export default function PlaceMap({ points, selectedId, selectedCard, onSelect, labels }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const libRef = useRef<typeof import("maplibre-gl") | null>(null);
  const markersRef = useRef(new Map<string, { marker: Marker; el: HTMLButtonElement }>());
  const userMarkerRef = useRef<Marker | null>(null);
  const [ready, setReady] = useState(false);
  const [locStatus, setLocStatus] = useState<"idle" | "locating" | "error">("idle");

  // 永遠用最新的 onSelect（標記的點擊事件是建立時綁的，不想因為它重建標記）
  const onSelectRef = useRef(onSelect);
  useEffect(() => {
    onSelectRef.current = onSelect;
  });

  const selectedIdRef = useRef(selectedId);
  useEffect(() => {
    selectedIdRef.current = selectedId;
  });

  // ① 建立地圖：只在第一次出現時做一次
  useEffect(() => {
    let cancelled = false;
    let map: MapLibreMap | undefined;
    const markers = markersRef.current;

    // 地圖套件很大，等到瀏覽器真的要顯示地圖時才下載
    import("maplibre-gl").then((lib) => {
      if (cancelled || !containerRef.current) return;
      libRef.current = lib;
      // 告訴 MapLibre 背景工人放在哪（檔案由 scripts/copy-maplibre-worker.mjs 複製過去）
      lib.setWorkerUrl("/maplibre/maplibre-gl-worker.mjs");
      map = new lib.Map({
        container: containerRef.current,
        style: MAP_STYLE,
        center: [120.2, 23.0], // 台南附近，等一下會自動縮放到所有標記
        zoom: 12,
        attributionControl: { compact: true }, // 右下角的 OpenStreetMap 版權標示，一定要保留
      });
      map.addControl(new lib.NavigationControl({ showCompass: false }), "top-left");
      // 點地圖空白處 → 收起卡片（點在標記上的不算）
      map.on("click", (e) => {
        const target = e.originalEvent.target as HTMLElement;
        if (!target.closest(".place-pin")) onSelectRef.current(null);
      });
      mapRef.current = map;
      // 標記不用等底圖下載完就能放，所以地圖一建立就可以開始加標記
      setReady(true);
    });

    return () => {
      cancelled = true;
      map?.remove();
      mapRef.current = null;
      markers.clear();
      userMarkerRef.current = null;
    };
  }, []);

  // ② 篩選條件變了：同步標記，並縮放到能看到全部標記
  useEffect(() => {
    const map = mapRef.current;
    const lib = libRef.current;
    if (!ready || !map || !lib) return;

    const current = markersRef.current;
    const ids = new Set(points.map((p) => p.id));

    // 移除不在篩選結果裡的標記
    for (const [id, { marker }] of current) {
      if (!ids.has(id)) {
        marker.remove();
        current.delete(id);
      }
    }

    // 加上新的標記：用 Figma 畫的圖釘
    for (const p of points) {
      if (current.has(p.id)) continue;
      const icon = pinIcons[p.category];
      const el = document.createElement("button");
      el.type = "button";
      el.className = "place-pin";
      el.title = p.name;
      el.setAttribute("aria-label", p.name);
      el.innerHTML = `<svg viewBox="${icon.viewBox}" width="30" height="31" aria-hidden="true"><path d="${icon.d}" fill="currentColor"/></svg>`;
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        onSelectRef.current(p.id);
      });
      const marker = new lib.Marker({ element: el, anchor: "bottom" })
        .setLngLat([p.location.lng, p.location.lat])
        .addTo(map);
      current.set(p.id, { marker, el });
    }
    highlight(current, selectedIdRef.current); // 新加的標記也要套上「選中」樣式

    if (points.length > 0) {
      const bounds = new lib.LngLatBounds();
      for (const p of points) bounds.extend([p.location.lng, p.location.lat]);
      map.fitBounds(bounds, { padding: 48, maxZoom: 15, duration: 600 });
    }
  }, [points, ready]);

  // ③ 選中的標記：變深色、放大，地圖移過去
  useEffect(() => {
    highlight(markersRef.current, selectedId);
    const selected = points.find((p) => p.id === selectedId);
    if (selected && mapRef.current) {
      // offset：讓選中的標記停在地圖中間「偏上」，才不會被底部的卡片擋住
      mapRef.current.easeTo({
        center: [selected.location.lng, selected.location.lat],
        offset: [0, -60],
        duration: 500,
      });
    }
  }, [selectedId, points, ready]);

  // 「顯示我的位置」：使用者按了才問定位權限
  function locate() {
    if (!("geolocation" in navigator)) {
      setLocStatus("error");
      return;
    }
    setLocStatus("locating");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const map = mapRef.current;
        const lib = libRef.current;
        if (!map || !lib) return;
        const lngLat: [number, number] = [pos.coords.longitude, pos.coords.latitude];
        if (userMarkerRef.current) {
          userMarkerRef.current.setLngLat(lngLat);
        } else {
          const dot = document.createElement("div");
          dot.className = "user-dot";
          userMarkerRef.current = new lib.Marker({ element: dot }).setLngLat(lngLat).addTo(map);
        }
        map.flyTo({ center: lngLat, zoom: 15 });
        setLocStatus("idle");
      },
      () => setLocStatus("error"), // 使用者拒絕、或抓不到位置
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 },
    );
  }

  return (
    <div>
      <div className="relative">
        <div
          ref={containerRef}
          role="region"
          aria-label={labels.map}
          className="isolate h-[440px] w-full overflow-hidden rounded-xl border border-foreground/15 bg-foreground/5"
        />

        {/* 精簡卡片：浮在地圖底部，key 讓換一個地點時重新播放滑入動畫 */}
        {selectedId && selectedCard && (
          <div
            key={selectedId}
            aria-live="polite"
            className="map-card-in absolute inset-x-3 bottom-3 rounded-xl border border-foreground/10 bg-background p-3 shadow-lg sm:right-auto sm:w-96"
          >
            {selectedCard}
            <button
              type="button"
              onClick={() => onSelect(null)}
              aria-label={labels.close}
              className="absolute top-2 right-2 flex size-8 items-center justify-center rounded-full text-lg leading-none opacity-60 hover:bg-foreground/10 hover:opacity-100"
            >
              ✕
            </button>
          </div>
        )}
        <button
          type="button"
          onClick={locate}
          disabled={locStatus === "locating"}
          className="absolute top-3 right-3 rounded-full border border-foreground/20 bg-background px-3 py-1.5 text-sm shadow-sm hover:border-foreground/60 disabled:opacity-60"
        >
          📍 {locStatus === "locating" ? labels.locating : labels.locateMe}
        </button>
      </div>
      {locStatus === "error" && (
        <p role="status" className="mt-2 text-sm text-red-700 dark:text-red-400">
          {labels.locationError}
        </p>
      )}
    </div>
  );
}

// 把選中的標記變深色、放大；其他的恢復灰色
function highlight(markers: Map<string, { el: HTMLButtonElement }>, selectedId: string | null) {
  for (const [id, { el }] of markers) {
    const isSelected = id === selectedId;
    el.dataset.selected = String(isSelected);
    el.setAttribute("aria-pressed", String(isSelected));
    el.style.zIndex = isSelected ? "2" : "1";
  }
}
