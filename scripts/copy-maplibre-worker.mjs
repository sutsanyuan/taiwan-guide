// 把地圖套件的「背景工人」(worker) 檔案複製到 public/maplibre/
//
// 為什麼要這樣做？
// MapLibre 會另外開一個背景執行緒 (Web Worker) 來處理地圖資料，
// 它預設會「相對於自己的檔案位置」去找 worker 檔，
// 但開發模式 (Turbopack) 把套件重新打包後，那個相對位置就找不到了。
// 放到 public/ 的檔案會原封不動地放在網站根目錄，路徑固定是 /maplibre/...，
// 再在 PlaceMap 裡用 setWorkerUrl() 告訴 MapLibre 去那裡拿就好。
//
// package.json 的 "postinstall" 會在每次 npm install 之後自動執行這個檔案，
// 所以套件升級時，worker 也會自動換成同一個版本。
import { cpSync, mkdirSync } from "node:fs";

const from = "node_modules/maplibre-gl/dist";
const to = "public/maplibre";
mkdirSync(to, { recursive: true });
// worker 會 import 同資料夾的 shared 檔，所以兩個都要複製
for (const file of ["maplibre-gl-worker.mjs", "maplibre-gl-shared.mjs"]) {
  cpSync(`${from}/${file}`, `${to}/${file}`);
}
console.log("MapLibre worker copied to public/maplibre/");
