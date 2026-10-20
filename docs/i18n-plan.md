# 第一階段多語系計畫（不使用 i18n 套件）

> 狀態：第一階段（第 1–4 步）完成。
>
> 跟計畫不同的地方：專案開了 `cacheComponents`，不能用 `dynamicParams = false`，改成在 layout 裡用 `isLocale()` 檢查、不支援的語言呼叫 `notFound()`。
> 參考：`node_modules/next/dist/docs/01-app/02-guides/internationalization.md`（Next.js 16.4.2 內附文件）

## 目標
1. 建立 `messages/zh-TW.json` 和 `messages/en.json`，先放幾個首頁會用到的字串
2. 寫一個簡單的 `t()` 函式
3. 建立 `/zh-TW` 和 `/en` 兩個路由，首頁 `/` 自動導向 `/zh-TW`
4. 加一個語言切換按鈕，切換時保留目前所在的頁面路徑
5. `<html lang>` 要依照目前語言設定

## 檔案結構

```
taiwan-guide/
├── messages/
│   ├── zh-TW.json            ← 新增：中文翻譯字串
│   └── en.json               ← 新增：英文翻譯字串
├── lib/i18n/
│   ├── config.ts             ← 新增：網站支援哪些語言
│   └── t.ts                  ← 新增：t() 函式
├── components/
│   └── LanguageSwitcher.tsx  ← 新增：語言切換按鈕
├── app/
│   ├── [lang]/
│   │   ├── layout.tsx        ← 從 app/layout.tsx 搬過來，設定 <html lang>
│   │   └── page.tsx          ← 從 app/page.tsx 搬過來，首頁
│   ├── globals.css           （不動）
│   └── favicon.ico           （不動）
└── next.config.ts            ← 修改：讓 / 自動導向 /zh-TW
```

## 每個檔案的用途

### `messages/zh-TW.json`、`en.json`：翻譯字典
每種語言一個 JSON 檔，用同一個名字（叫做「key」）對應不同語言的文字：

```json
{ "home": { "title": "探索台灣" } }
```
```json
{ "home": { "title": "Discover Taiwan" } }
```

程式碼裡只寫 key（`home.title`），不直接寫中文或英文。之後要加德文，只要多一個 `de.json`，程式碼不用改。

### `lib/i18n/config.ts`：語言清單
在這裡寫 `locales = ["zh-TW", "en"]`（locale 就是語言代碼）和預設語言 `zh-TW`，再加一個 `isLocale()`，用來檢查網址裡的語言是不是我們支援的。其他檔案都從這裡讀語言清單，所以加語言時只改這一個地方。

### `lib/i18n/t.ts`：t() 函式
做兩件事：
1. 依照語言載入對應的 JSON
2. `t("home.title")` 用點把 key 拆開，在 JSON 裡一層一層往下找，找到就回傳那段文字

- 如果找不到，就直接把 key 顯示在畫面上，這樣漏翻的地方一眼就看得出來。
- 用 TypeScript 讓 `en.json` 和 `zh-TW.json` 的 key 必須完全一樣，少一個 key 的話，寫程式時就會跳錯誤。

### `app/[lang]/`：多語系路由的關鍵
- 資料夾名稱加 `[ ]` 叫做「動態路由」：`/zh-TW` 和 `/en` 會用同一份程式，`lang` 會拿到網址裡的語言。
- **為什麼要把語言放在網址裡？** 因為要部署成全站靜態。每種語言在打包時會各自產生一份 HTML，網址可以直接分享給朋友，搜尋引擎也看得到兩種語言。如果改用 cookie 記住語言，伺服器每次都要讀 cookie 才知道要給哪個語言，就沒辦法做成靜態。
- **為什麼 layout 要搬進 `[lang]`？** 因為 `<html>` 標籤寫在最外層的 layout 裡，只有放在 `[lang]` 底下，它才拿得到目前的語言，`<html lang>` 才能跟著變。原本的 `app/layout.tsx` 會刪掉。
- `generateStaticParams` 會告訴 Next.js 打包時要產生 `/zh-TW` 和 `/en` 兩個版本。再加上 `dynamicParams = false`，像 `/fr` 這種不支援的語言會直接顯示 404。

### `components/LanguageSwitcher.tsx`：語言切換按鈕
- 它要知道「現在在哪一頁」（`usePathname()`），這只能在瀏覽器裡取得，所以它是 **Client Component**（會在瀏覽器執行的元件）。其他頁面維持 Server Component，翻譯檔不會被打包進瀏覽器下載的 JS 裡。
- 做法是把網址的第一段換掉：`/zh-TW/spots/101` 會變成 `/en/spots/101`，所以停在哪一頁，換完語言還是同一頁。
- 按鈕上的語言名稱用該語言自己的寫法（「中文」、「English」），不翻譯。這是業界慣例，因為看不懂目前語言的人，也找得到自己的語言。

### `next.config.ts`：`/` 導向 `/zh-TW`
有兩種做法：
- **`next.config.ts` 的 `redirects`（選這個）：** 規則在打包時就決定好，Vercel 直接處理，跟全站靜態最搭。
- **`proxy.ts`（舊版叫 middleware）：** 每次有人開網頁都會執行，可以依照瀏覽器的語言自動選擇。比較聰明，但比較複雜。

先用簡單的。導向設成「暫時」（307），之後想改成依瀏覽器語言判斷時，瀏覽器不會記住舊的導向規則。

## 實作步驟（每步做完確認再繼續）

- [x] **第 1 步**：建立 `messages/`、`config.ts`、`t.ts`（畫面還不會變，先理解 t() 怎麼運作）
- [x] **第 2 步**：把頁面搬進 `app/[lang]/`，設定 `<html lang>`，首頁改用 `t()` 顯示文字
- [x] **第 3 步**：設定 `/` 導向 `/zh-TW`
- [x] **第 4 步**：加上語言切換按鈕
