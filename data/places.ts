import type { Place } from "@/lib/places";

// ─────────────────────────────────────────────────────────────
// 景點和餐廳資料：要新增、修改、刪除，直接改這個檔案就好。
//
// 新增一筆時，複製任何一個 { ... } 區塊改內容。
// 每段文字都要有 "zh-TW"、en、es 三種語言（西語為初稿，建議請懂西語的人看過）。
// 少填了必填欄位、或少寫了某個語言，編輯器會標紅提醒你。
//
// 餐廳資料來源：2026 米其林必比登推介名單（2026 年 7 月公布）
// 景點參考：Lonely Planet、各縣市觀光資訊
// 景點照片：Wikimedia Commons（只存網址，不存圖片檔；必須標示作者和授權）
// ─────────────────────────────────────────────────────────────

export const places: Place[] = [
  // ===== 景點 Sights =====

  // --- 台北 ---
  {
    id: "national-palace-museum",
    category: "sight",
    region: "taipei",
    name: { "zh-TW": "國立故宮博物院", en: "National Palace Museum", es: "Museo Nacional del Palacio" },
    description: {
      "zh-TW": "收藏大量中國歷代文物，翠玉白菜和肉形石是最有名的展品。館藏很多，建議至少留半天。",
      en: "Home to a vast collection of Chinese imperial treasures; the Jadeite Cabbage and the Meat-shaped Stone are the star pieces. Give it at least half a day.",
      es: "Alberga una enorme colección de tesoros imperiales chinos; la Col de Jade y la Piedra con Forma de Carne son las piezas estrella. Reserva al menos media jornada.",
    },
    mapQuery: "國立故宮博物院 台北",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/National_Palace_Museum%2C_Taipei.jpg/1280px-National_Palace_Museum%2C_Taipei.jpg",
      credit: "Jason Zhang",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:National_Palace_Museum,_Taipei.jpg",
    },
  },
  {
    id: "dadaocheng-wharf",
    category: "sight",
    region: "taipei",
    name: { "zh-TW": "大稻埕碼頭", en: "Dadaocheng Wharf", es: "Muelle de Dadaocheng" },
    description: {
      "zh-TW": "淡水河畔的老碼頭，傍晚看夕陽最美。附近的迪化街有很多老店和南北貨行。",
      en: "An old wharf on the Tamsui River, best at sunset. Nearby Dihua Street is lined with old shops selling dried goods and tea.",
      es: "Un antiguo muelle a orillas del río Tamsui, precioso al atardecer. Muy cerca, la calle Dihua está llena de tiendas antiguas de productos secos y té.",
    },
    mapQuery: "大稻埕碼頭 台北",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Skyline_view_from_Dadaocheng_Wharf_20090418.jpg/1280px-Skyline_view_from_Dadaocheng_Wharf_20090418.jpg",
      credit: "黃 zero",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Skyline_view_from_Dadaocheng_Wharf_20090418.jpg",
    },
  },
  {
    id: "longshan-temple",
    category: "sight",
    region: "taipei",
    name: { "zh-TW": "艋舺龍山寺", en: "Longshan Temple", es: "Templo Longshan" },
    description: {
      "zh-TW": "台北最有名的廟宇之一，建於清代。在這裡可以看到在地人日常參拜的樣子。",
      en: "One of Taipei's best-known temples, founded in the Qing dynasty. A good place to see how locals pray in everyday life.",
      es: "Uno de los templos más conocidos de Taipéi, fundado en la dinastía Qing. Un buen lugar para ver cómo reza la gente local en su día a día.",
    },
    mapQuery: "艋舺龍山寺 台北",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Longshan_Temple%2C_Taipei_01.jpg/1280px-Longshan_Temple%2C_Taipei_01.jpg",
      credit: "Bernard Gagnon",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Longshan_Temple,_Taipei_01.jpg",
    },
  },
  {
    id: "elephant-mountain",
    category: "sight",
    region: "taipei",
    name: { "zh-TW": "象山步道", en: "Elephant Mountain Trail", es: "Sendero de la Montaña del Elefante" },
    description: {
      "zh-TW": "就在市區旁的短程步道，爬 20–30 分鐘就能從高處看台北 101 和整個市景。",
      en: "A short trail right next to the city. After a 20–30 minute climb you get a view over Taipei 101 and the whole skyline.",
      es: "Un sendero corto junto a la ciudad. Tras 20–30 minutos de subida tienes vistas de Taipei 101 y de toda la ciudad.",
    },
    mapQuery: "象山步道 台北",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/20190418_Elephant_Mountain_view-4.jpg/1280px-20190418_Elephant_Mountain_view-4.jpg",
      credit: "Balon Greyjoy",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:20190418_Elephant_Mountain_view-4.jpg",
    },
  },

  // --- 新北 ---
  {
    id: "jiufen",
    category: "sight",
    region: "new-taipei",
    name: { "zh-TW": "九份老街", en: "Jiufen Old Street", es: "Calle Vieja de Jiufen" },
    description: {
      "zh-TW": "山城老街，紅燈籠和茶樓沿著山坡排列，傍晚點燈後最有氣氛。週末人很多，平日去比較舒服。",
      en: "A hillside village of narrow lanes, red lanterns and teahouses, most atmospheric once the lights come on in the evening. Weekends get very crowded, so go on a weekday if you can.",
      es: "Un pueblo en la ladera con callejuelas, faroles rojos y casas de té; tiene más encanto al anochecer, cuando se encienden las luces. Los fines de semana se llena, así que mejor ir entre semana.",
    },
    mapQuery: "九份老街 新北",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Jiufen_at_night_lantern_glow.jpg/1280px-Jiufen_at_night_lantern_glow.jpg",
      credit: "Sunkenbean",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Jiufen_at_night_lantern_glow.jpg",
    },
  },

  // --- 南投 ---
  {
    id: "sun-moon-lake",
    category: "sight",
    region: "nantou",
    name: { "zh-TW": "日月潭", en: "Sun Moon Lake", es: "Lago Sol Luna" },
    description: {
      "zh-TW": "台灣最大的天然湖泊，可以搭船遊湖、沿著湖邊騎自行車，或搭纜車看湖景。",
      en: "Taiwan's largest natural lake. Take a boat across, cycle along the shore, or ride the cable car for views over the water.",
      es: "El lago natural más grande de Taiwán. Puedes cruzarlo en barco, recorrer la orilla en bici o subir al teleférico para ver el lago desde arriba.",
    },
    mapQuery: "日月潭 南投",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/%E6%97%A5%E6%9C%88%E6%BD%AD%E6%B0%B4%E7%A4%BE%E7%A2%BC%E9%A0%AD_View_of_Shuishe_Pier_from_Sun_Moon_Lake_20151213.jpg/1280px-%E6%97%A5%E6%9C%88%E6%BD%AD%E6%B0%B4%E7%A4%BE%E7%A2%BC%E9%A0%AD_View_of_Shuishe_Pier_from_Sun_Moon_Lake_20151213.jpg",
      credit: "LowensteinYang",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:%E6%97%A5%E6%9C%88%E6%BD%AD%E6%B0%B4%E7%A4%BE%E7%A2%BC%E9%A0%AD_View_of_Shuishe_Pier_from_Sun_Moon_Lake_20151213.jpg",
    },
  },

  // --- 嘉義 ---
  {
    id: "alishan",
    category: "sight",
    region: "chiayi",
    name: { "zh-TW": "阿里山", en: "Alishan", es: "Alishan" },
    description: {
      "zh-TW": "高山森林區，有森林小火車和巨木步道，清晨的日出和雲海最有名。",
      en: "A mountain forest area with a heritage forest railway and giant-tree trails, famous for its sunrise over a sea of clouds.",
      es: "Una zona de bosque de montaña con un tren forestal histórico y senderos entre árboles gigantes, famosa por su amanecer sobre un mar de nubes.",
    },
    mapQuery: "阿里山國家森林遊樂區",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0c/Alishan_Taiwan_Alishan-Forest-Railway-02.jpg/1280px-Alishan_Taiwan_Alishan-Forest-Railway-02.jpg",
      credit: "CEphoto, Uwe Aranas",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Alishan_Taiwan_Alishan-Forest-Railway-02.jpg",
    },
  },

  // --- 台南 ---
  {
    id: "chihkan-tower",
    category: "sight",
    region: "tainan",
    name: { "zh-TW": "赤崁樓", en: "Chihkan Tower", es: "Torre Chihkan" },
    description: {
      "zh-TW": "前身是 1653 年荷蘭人建的普羅民遮城，後來改建成中式樓閣，是認識台南歷史的好起點。",
      en: "Originally Fort Provintia, built by the Dutch in 1653 and later rebuilt as Chinese-style pavilions. A good starting point for Tainan's history.",
      es: "Originalmente el Fuerte Provintia, construido por los holandeses en 1653 y reconstruido después como pabellones de estilo chino. Un buen punto de partida para conocer la historia de Tainan.",
    },
    mapQuery: "赤崁樓 台南",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Tainan_Taiwan_Fort-Provintia-01.jpg/1280px-Tainan_Taiwan_Fort-Provintia-01.jpg",
      credit: "CEphoto, Uwe Aranas",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tainan_Taiwan_Fort-Provintia-01.jpg",
    },
  },
  {
    id: "anping-old-fort",
    category: "sight",
    region: "tainan",
    name: { "zh-TW": "安平古堡", en: "Anping Old Fort", es: "Antiguo Fuerte de Anping" },
    description: {
      "zh-TW": "1624 年荷蘭人建的熱蘭遮城遺址，是台灣最早的城堡之一，可以登上瞭望台看安平。",
      en: "The remains of Fort Zeelandia, built by the Dutch in 1624 and one of Taiwan's oldest fortifications. Climb the lookout tower for views over Anping.",
      es: "Los restos del Fuerte Zeelandia, construido por los holandeses en 1624 y una de las fortificaciones más antiguas de Taiwán. Sube a la torre mirador para ver Anping.",
    },
    mapQuery: "安平古堡 台南",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Tainan_Taiwan_Fort-Zeelandia-01.jpg/1280px-Tainan_Taiwan_Fort-Zeelandia-01.jpg",
      credit: "CEphoto, Uwe Aranas",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tainan_Taiwan_Fort-Zeelandia-01.jpg",
    },
  },
  {
    id: "anping-tree-house",
    category: "sight",
    region: "tainan",
    name: { "zh-TW": "安平樹屋", en: "Anping Tree House", es: "Casa del Árbol de Anping" },
    description: {
      "zh-TW": "原本是英商德記洋行的倉庫，廢棄後被榕樹的氣根整個包住，像被大自然收回的建築。",
      en: "A former warehouse of the British trading firm Tait & Co., now completely wrapped in banyan roots, as if nature has taken the building back.",
      es: "Un antiguo almacén de la compañía comercial británica Tait & Co., hoy completamente envuelto por raíces de baniano, como si la naturaleza hubiera recuperado el edificio.",
    },
    mapQuery: "安平樹屋 台南",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Anping_Tree_House%2C_Tainan_%28Taiwan%29.jpg/1280px-Anping_Tree_House%2C_Tainan_%28Taiwan%29.jpg",
      credit: "Mk2010",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Anping_Tree_House,_Tainan_(Taiwan).jpg",
    },
  },
  {
    id: "confucius-temple",
    category: "sight",
    region: "tainan",
    name: { "zh-TW": "臺南孔廟", en: "Tainan Confucius Temple", es: "Templo de Confucio de Tainan" },
    description: {
      "zh-TW": "1665 年建立的台灣第一座孔廟，被稱為「全臺首學」。紅牆和老樹很安靜，適合慢慢散步。",
      en: "Built in 1665, Taiwan's first Confucian temple and known as the island's first school. Quiet red walls and old trees make it a lovely place for a slow walk.",
      es: "Construido en 1665, es el primer templo confuciano de Taiwán y se le conoce como la primera escuela de la isla. Sus muros rojos y árboles centenarios invitan a pasear sin prisa.",
    },
    mapQuery: "臺南孔廟",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Exterior_of_Tainan_Confucius_Temple_in_November_2017.jpg/1280px-Exterior_of_Tainan_Confucius_Temple_in_November_2017.jpg",
      credit: "Nick-D",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Exterior_of_Tainan_Confucius_Temple_in_November_2017.jpg",
    },
  },
  {
    id: "shennong-street",
    category: "sight",
    region: "tainan",
    name: { "zh-TW": "神農街", en: "Shennong Street", es: "Calle Shennong" },
    description: {
      "zh-TW": "保留清代街屋的老街，現在開了很多小店、咖啡廳和小酒館，晚上燈籠亮起來最好看。",
      en: "A Qing-era street of old shophouses, now full of small shops, cafés and bars. Prettiest at night when the lanterns are lit.",
      es: "Una calle de la época Qing con casas tienda antiguas, hoy llena de tiendas pequeñas, cafés y bares. Está más bonita de noche, con los faroles encendidos.",
    },
    mapQuery: "神農街 台南",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/Tainan_Shennong_St_1.jpg/1280px-Tainan_Shennong_St_1.jpg",
      credit: "Andrzej Otrębski",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Tainan_Shennong_St_1.jpg",
    },
  },
  {
    id: "hayashi-department-store",
    category: "shop", // 百貨公司：歸在購物（也可以逛，算半個景點）
    region: "tainan",
    name: { "zh-TW": "林百貨", en: "Hayashi Department Store", es: "Grandes Almacenes Hayashi" },
    description: {
      "zh-TW": "1932 年開幕的日治時期百貨公司，現在賣台南的文創商品，頂樓還保留當年的神社和戰爭留下的彈痕。",
      en: "A department store from the Japanese era, opened in 1932. It now sells Tainan-made design goods, and the rooftop still has its old Shinto shrine and wartime bullet marks.",
      es: "Unos grandes almacenes de la época japonesa, inaugurados en 1932. Hoy venden productos de diseño de Tainan, y en la azotea se conservan el antiguo santuario sintoísta y marcas de balas de la guerra.",
    },
    mapQuery: "林百貨 台南",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a8/Hayashi_Department_Store_in_Tainan%2C_Taiwan_%28%E6%9E%97%E7%99%BE%E8%B2%A8%EF%BC%89.jpg/1280px-Hayashi_Department_Store_in_Tainan%2C_Taiwan_%28%E6%9E%97%E7%99%BE%E8%B2%A8%EF%BC%89.jpg",
      credit: "Lchung9779",
      license: "CC0",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/deed.en",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Hayashi_Department_Store_in_Tainan,_Taiwan_(%E6%9E%97%E7%99%BE%E8%B2%A8%EF%BC%89.jpg",
    },
  },
  {
    id: "chimei-museum",
    category: "sight",
    region: "tainan",
    name: { "zh-TW": "奇美博物館", en: "Chimei Museum", es: "Museo Chimei" },
    description: {
      "zh-TW": "外觀像歐洲宮殿的私人博物館，收藏西洋藝術、樂器和兵器，提琴收藏享譽國際。",
      en: "A private museum housed in a European-style palace, with Western art, musical instruments and arms. Its violin collection is world-famous.",
      es: "Un museo privado en un edificio de estilo palacio europeo, con arte occidental, instrumentos musicales y armas. Su colección de violines es famosa en todo el mundo.",
    },
    mapQuery: "奇美博物館 台南",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Chimei_Museum_20190210_%28cropped%29.jpg/1280px-Chimei_Museum_20190210_%28cropped%29.jpg",
      credit: "Deon",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Chimei_Museum_20190210_(cropped).jpg",
    },
  },

  // --- 高雄 ---
  {
    id: "pier-2",
    category: "sight",
    region: "kaohsiung",
    name: { "zh-TW": "駁二藝術特區", en: "Pier-2 Art Center", es: "Centro de Arte Pier-2" },
    description: {
      "zh-TW": "港邊舊倉庫改建的藝術特區，有展覽、公共藝術和小店，可以租自行車沿著港邊騎。",
      en: "Old harbour warehouses turned into an arts district with exhibitions, public art and small shops. Rent a bike and ride along the waterfront.",
      es: "Antiguos almacenes del puerto convertidos en un barrio artístico con exposiciones, arte público y tiendas. Alquila una bici y recorre el paseo marítimo.",
    },
    mapQuery: "駁二藝術特區 高雄",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1e/202407_Penglai_warehouses%2C_Pier-2_Art_Center%2C_Kaohsiung.jpg/1280px-202407_Penglai_warehouses%2C_Pier-2_Art_Center%2C_Kaohsiung.jpg",
      credit: "Jonashtand",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:202407_Penglai_warehouses,_Pier-2_Art_Center,_Kaohsiung.jpg",
    },
  },
  {
    id: "lotus-pond",
    category: "sight",
    region: "kaohsiung",
    name: { "zh-TW": "蓮池潭龍虎塔", en: "Lotus Pond & Dragon and Tiger Pagodas", es: "Estanque del Loto y Pagodas del Dragón y el Tigre" },
    description: {
      "zh-TW": "湖上的龍虎塔是高雄的代表風景。傳說從龍口進、虎口出，可以去除厄運。",
      en: "The Dragon and Tiger Pagodas on the lake are a Kaohsiung icon. Tradition says entering through the dragon's mouth and leaving through the tiger's turns bad luck into good.",
      es: "Las Pagodas del Dragón y el Tigre sobre el lago son un símbolo de Kaohsiung. Según la tradición, entrar por la boca del dragón y salir por la del tigre convierte la mala suerte en buena.",
    },
    mapQuery: "蓮池潭龍虎塔 高雄",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fb/Kaohsiung_Taiwan_Dragon-and-Tiger-Pagodas-01.jpg/1280px-Kaohsiung_Taiwan_Dragon-and-Tiger-Pagodas-01.jpg",
      credit: "CEphoto, Uwe Aranas",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Kaohsiung_Taiwan_Dragon-and-Tiger-Pagodas-01.jpg",
    },
  },

  // --- 花蓮 ---
  {
    id: "taroko",
    category: "sight",
    region: "hualien",
    name: { "zh-TW": "太魯閣國家公園", en: "Taroko National Park", es: "Parque Nacional de Taroko" },
    description: {
      "zh-TW": "大理石峽谷，斷崖和溪谷非常壯觀，清水斷崖的海景也很有名。",
      en: "A marble gorge with dramatic cliffs and river valleys, plus the famous Qingshui Cliffs dropping into the sea.",
      es: "Un desfiladero de mármol con acantilados y valles impresionantes, además de los famosos acantilados de Qingshui que caen al mar.",
    },
    mapQuery: "太魯閣國家公園遊客中心",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/08/Taroko-Gorge_Hualien_Taiwan_Cihmu-Bridge-at-Taroko-National-Park-01.jpg/1280px-Taroko-Gorge_Hualien_Taiwan_Cihmu-Bridge-at-Taroko-National-Park-01.jpg",
      credit: "CEphoto, Uwe Aranas",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Taroko-Gorge_Hualien_Taiwan_Cihmu-Bridge-at-Taroko-National-Park-01.jpg",
    },
    notice: {
      "zh-TW": "2024 年地震後只部分開放：車輛限時段通過峽谷，燕子口、砂卡礑步道仍封閉（2026 年 8 月資訊）。出發前請查官網。",
      en: "Only partly open since the 2024 earthquake: cars may pass through the gorge only at set times, and Swallow Grotto and the Shakadang Trail remain closed (as of August 2026). Check the official website before you go.",
      es: "Solo está abierto en parte desde el terremoto de 2024: los coches solo pueden cruzar el desfiladero en horarios fijos, y la Gruta de las Golondrinas y el sendero Shakadang siguen cerrados (datos de agosto de 2026). Consulta la web oficial antes de ir.",
    },
  },

  // ===== 餐廳 Food（2026 米其林必比登推介＋我的私房推薦 localPick）=====

  // --- 台北 ---
  {
    id: "yu-yu-1969",
    category: "food",
    region: "taipei",
    name: { "zh-TW": "有有1969", en: "Yu Yu 1969", es: "Yu Yu 1969" },
    description: {
      "zh-TW": "台式熱炒店，適合一群人點好幾道菜配啤酒，體驗台灣人聚餐的方式。2026 年新入選。",
      en: "A Taiwanese stir-fry joint: order lots of dishes to share with a group and a few beers, the way locals eat out together. New to the list in 2026.",
      es: "Un local de salteados taiwaneses: pide muchos platos para compartir en grupo con unas cervezas, como sale a cenar la gente de aquí. Nuevo en la lista en 2026.",
    },
    mapQuery: "有有1969 台北",
    michelinBib: 2026,
  },
  {
    id: "open-smile",
    category: "food",
    region: "taipei",
    name: { "zh-TW": "開囍", en: "Open Smile", es: "Open Smile" },
    description: {
      "zh-TW": "招牌是台式滷肉，2026 年新入選必比登。",
      en: "Known for Taiwanese braised pork. New to the list in 2026.",
      es: "Conocido por su cerdo guisado al estilo taiwanés. Nuevo en la lista en 2026.",
    },
    mapQuery: "開囍 台北",
    michelinBib: 2026,
  },
  {
    id: "serenity",
    category: "food",
    region: "taipei",
    name: { "zh-TW": "祥和蔬食（中正）", en: "Serenity (Zhongzheng)", es: "Serenity (Zhongzheng)" },
    description: {
      "zh-TW": "川味素食，吃素的朋友也能吃到重口味的料理。",
      en: "Sichuan-style vegetarian cooking: bold, spicy flavours for friends who don't eat meat.",
      es: "Cocina vegetariana al estilo de Sichuan: sabores intensos y picantes para quienes no comen carne.",
    },
    mapQuery: "祥和蔬食 中正 台北",
    michelinBib: 2026,
  },

  // --- 新北 ---
  {
    id: "bitan-goose",
    category: "food",
    region: "new-taipei",
    name: { "zh-TW": "碧潭橋頭鵝肉", en: "Bitan Chiao Tou Goose", es: "Bitan Chiao Tou Goose" },
    description: {
      "zh-TW": "招牌是煙燻鵝肉，2026 年新入選。在新店碧潭附近，吃完可以去吊橋散步。",
      en: "Famous for smoked goose and new to the list in 2026. It's near Bitan in Xindian, so you can walk off lunch on the suspension bridge.",
      es: "Famoso por su ganso ahumado y nuevo en la lista en 2026. Está cerca de Bitan, en Xindian, así que después puedes pasear por el puente colgante.",
    },
    mapQuery: "碧潭橋頭鵝肉 新店",
    michelinBib: 2026,
  },
  {
    id: "tsai-chia-beef-noodles",
    category: "food",
    region: "new-taipei",
    name: { "zh-TW": "蔡家牛肉麵", en: "Tsai Chia Beef Noodles", es: "Tsai Chia Beef Noodles" },
    description: {
      "zh-TW": "牛肉麵是台灣的國民美食，這家是新北的必比登推薦。",
      en: "Beef noodle soup is Taiwan's national comfort food, and this is one of New Taipei's Bib Gourmand picks.",
      es: "La sopa de fideos con ternera es el plato reconfortante nacional de Taiwán, y este es uno de los Bib Gourmand de Nuevo Taipéi.",
    },
    mapQuery: "蔡家牛肉麵 新北",
    michelinBib: 2026,
  },

  // --- 新竹 ---
  {
    id: "tsou-chi-cai-bao",
    category: "food",
    region: "hsinchu",
    name: { "zh-TW": "鄒記菜包（北埔）", en: "Tsou Chi Cai Bao (Beipu)", es: "Tsou Chi Cai Bao (Beipu)" },
    description: {
      "zh-TW": "北埔的客家菜包，外皮是米做的，口感 Q 軟。可以順便逛北埔老街。",
      en: "Hakka savoury buns made with a chewy rice-flour dough, in the old Hakka town of Beipu. Pair it with a stroll down Beipu Old Street.",
      es: "Bollos salados hakka hechos con una masa de harina de arroz elástica, en el antiguo pueblo hakka de Beipu. Combínalo con un paseo por su calle vieja.",
    },
    mapQuery: "鄒記菜包 北埔 中正路",
    michelinBib: 2026,
  },

  // --- 台中 ---
  {
    id: "fan-chi-chin-chih-yuan",
    category: "food",
    region: "taichung",
    name: { "zh-TW": "范記金之園（中區）", en: "Chin Chih Yuan (Central)", es: "Chin Chih Yuan (Central)" },
    description: {
      "zh-TW": "台中中區的台菜館，必比登推薦。",
      en: "A Taiwanese restaurant in Taichung's Central District, recommended by the Bib Gourmand list.",
      es: "Un restaurante de cocina taiwanesa en el distrito Central de Taichung, recomendado en la lista Bib Gourmand.",
    },
    mapQuery: "范記金之園 台中 中區",
    michelinBib: 2026,
  },

  // --- 台南 ---
  {
    id: "a-xing-milkfish",
    category: "food",
    region: "tainan",
    name: { "zh-TW": "阿興虱目魚", en: "A Xing Shi Mu Yu (Milkfish)", es: "A Xing Shi Mu Yu (pez de leche)" },
    description: {
      "zh-TW": "虱目魚是台南人常吃的早餐，魚肚湯和魚皮都很受歡迎，建議早點去。",
      en: "Milkfish is a classic Tainan breakfast; the fish belly soup and fish skin are favourites. Go early.",
      es: "El pez de leche es un desayuno clásico en Tainan; la sopa de vientre de pescado y la piel de pescado son las favoritas. Ve temprano.",
    },
    mapQuery: "阿興虱目魚 台南",
    michelinBib: 2026,
  },
  {
    id: "yeh-san-duck",
    category: "food",
    region: "tainan",
    name: { "zh-TW": "葉桑生炒鴨肉焿", en: "Yeh San Duck Thick Soup", es: "Yeh San Duck Thick Soup" },
    description: {
      "zh-TW": "台南式的生炒鴨肉羹，酸甜的羹湯配意麵或米粉。",
      en: "Tainan-style stir-fried duck in a sweet-and-sour thick soup, served with noodles or rice vermicelli.",
      es: "Pato salteado al estilo de Tainan en una sopa espesa agridulce, servida con fideos o fideos de arroz.",
    },
    mapQuery: "葉桑生炒鴨肉焿 台南",
    michelinBib: 2026,
  },
  {
    id: "chan-chi",
    category: "food",
    region: "tainan",
    name: { "zh-TW": "詹記", en: "Chan Chi", es: "Chan Chi" },
    description: {
      "zh-TW": "以魚湯為主的小吃店，2026 年新入選必比登。",
      en: "A small eatery focused on fish soup, new to the list in 2026.",
      es: "Un pequeño local centrado en la sopa de pescado, nuevo en la lista en 2026.",
    },
    mapQuery: "詹記 魚湯 台南",
    michelinBib: 2026,
  },
  {
    id: "fu-tai-table",
    category: "food",
    region: "tainan",
    name: { "zh-TW": "福泰飯桌第三代", en: "Fu Tai Table Third Generation", es: "Fu Tai Table Third Generation" },
    description: {
      "zh-TW": "「飯桌仔」是台南特有的家常小吃店：看檯面上的菜直接點，像在地人家裡的家常飯。",
      en: "A Tainan \"rice table\": point at the home-style dishes on the counter and build your own meal, just like a local family dinner.",
      es: "Una «mesa de arroz» de Tainan: señala los platos caseros del mostrador y monta tu propia comida, como en una cena familiar de aquí.",
    },
    mapQuery: "福泰飯桌第三代 台南",
    michelinBib: 2026,
  },
  {
    id: "shang-hao-chih-beef-soup",
    category: "food",
    region: "tainan",
    name: { "zh-TW": "尚好吃牛肉湯", en: "Shang Hao Chih Beef Soup", es: "Shang Hao Chih Beef Soup" },
    description: {
      "zh-TW": "台南牛肉湯用新鮮的溫體牛肉，熱湯一沖就是半熟的嫩度，是台南人的早餐之一。",
      en: "Tainan beef soup uses fresh, never-frozen beef, sliced thin and cooked by the hot broth poured over it. A favourite local breakfast.",
      es: "La sopa de ternera de Tainan usa carne fresca, nunca congelada, cortada fina y cocinada con el caldo caliente que se vierte encima. Un desayuno muy local.",
    },
    mapQuery: "尚好吃牛肉湯 台南",
    michelinBib: 2026,
  },
  {
    id: "lo-cheng-migao",
    category: "food",
    region: "tainan",
    name: { "zh-TW": "落成米糕", en: "Lo Cheng Migao", es: "Lo Cheng Migao" },
    description: {
      "zh-TW": "台南代表小吃米糕：糯米飯上鋪肉燥和魚鬆，份量小，適合邊走邊吃好幾家。",
      en: "Migao, a Tainan classic: sticky rice topped with braised pork and fish floss. Portions are small, so you can try several places in one walk.",
      es: "El migao, un clásico de Tainan: arroz glutinoso con cerdo guisado y hebras de pescado por encima. Las raciones son pequeñas, así que puedes probar varios sitios en un paseo.",
    },
    mapQuery: "落成米糕 台南",
    michelinBib: 2026,
  },
  {
    id: "ba-bao-bin",
    category: "food",
    region: "tainan",
    name: { "zh-TW": "八寶彬圓仔惠（國華街）", en: "Ba Bao Bin Yuan Zai Hui (Guohua St.)", es: "Ba Bao Bin Yuan Zai Hui (calle Guohua)" },
    description: {
      "zh-TW": "傳統冰品和湯圓甜品，吃完鹹的小吃剛好來一碗。",
      en: "Traditional shaved ice and rice-ball desserts, perfect after a round of savoury snacks.",
      es: "Hielo raspado tradicional y postres de bolitas de arroz, perfectos después de una ronda de platos salados.",
    },
    mapQuery: "八寶彬圓仔惠 國華街 台南",
    michelinBib: 2026,
  },

  // 第一次來台南必吃的經典小吃（同樣是 2026 必比登）
  {
    id: "xiao-gong-yuan-danzai",
    category: "food",
    region: "tainan",
    name: { "zh-TW": "小公園擔仔麵", en: "Xiao Gong Yuan Danzai Noodles", es: "Xiao Gong Yuan Danzai Noodles" },
    description: {
      "zh-TW": "擔仔麵是台南最具代表性的小吃：小小一碗，湯麵上放肉燥和鮮蝦。第一次來台南一定要吃。",
      en: "Danzai noodles are Tainan's signature snack: a small bowl of noodles in broth, topped with minced braised pork and a shrimp. A must on your first visit.",
      es: "Los fideos danzai son el plato más emblemático de Tainan: un cuenco pequeño de fideos en caldo con cerdo picado guisado y una gamba. Imprescindibles en tu primera visita.",
    },
    mapQuery: "小公園擔仔麵 台南",
    michelinBib: 2026,
  },
  {
    id: "huang-jia-shrimp-roll",
    category: "food",
    region: "tainan",
    name: { "zh-TW": "黃家蝦捲", en: "Huang Jia Shrimp Rolls", es: "Huang Jia Shrimp Rolls" },
    description: {
      "zh-TW": "炸得酥脆的蝦捲，是台南經典小吃之一，適合邊走邊吃。",
      en: "Crispy deep-fried shrimp rolls, one of Tainan's classic snacks and easy to eat on the go.",
      es: "Rollitos de gamba fritos y crujientes, uno de los aperitivos clásicos de Tainan, fáciles de comer mientras paseas.",
    },
    mapQuery: "黃家蝦捲 台南",
    michelinBib: 2026,
  },
  {
    id: "kai-yuan-mackerel-soup",
    category: "food",
    region: "tainan",
    name: { "zh-TW": "開元紅燒土魠魚羮", en: "Kai Yuan Spanish Mackerel Thick Soup", es: "Kai Yuan Spanish Mackerel Thick Soup" },
    description: {
      "zh-TW": "先炸過的土魠魚塊放進酸甜的羹湯裡，可以配米粉或意麵，是台南人熟悉的味道。",
      en: "Fried chunks of Spanish mackerel in a sweet-and-sour thick soup, with rice vermicelli or noodles. A taste every Tainan local knows.",
      es: "Trozos de caballa frita en una sopa espesa agridulce, con fideos de arroz o de trigo. Un sabor que todo el mundo en Tainan conoce.",
    },
    mapQuery: "開元紅燒土魠魚羮 台南",
    michelinBib: 2026,
  },
  {
    id: "xian-zheng-ba-wan",
    category: "food",
    region: "tainan",
    name: { "zh-TW": "鮮蒸蝦仁肉圓", en: "Xian Zheng Shrimp Ba-wan", es: "Xian Zheng Shrimp Ba-wan" },
    description: {
      "zh-TW": "台南的肉圓是用蒸的，跟中北部油炸的不一樣，內餡有蝦仁，口感比較清爽。",
      en: "Tainan ba-wan are steamed rather than fried like in the north, with shrimp inside and a lighter texture.",
      es: "En Tainan el ba-wan se hace al vapor, no frito como en el norte; lleva gambas dentro y es más ligero.",
    },
    mapQuery: "鮮蒸蝦仁肉圓 台南",
    michelinBib: 2026,
  },
  {
    id: "a-xing-congee",
    category: "food",
    region: "tainan",
    name: { "zh-TW": "阿星鹹粥", en: "A Xing Savory Congee", es: "A Xing Savory Congee" },
    description: {
      "zh-TW": "台南人的早餐之一：鹹粥裡有虱目魚和海鮮，湯頭鮮甜。適合早起去吃。",
      en: "A Tainan breakfast staple: savoury congee with milkfish and seafood in a sweet, fresh broth. Go early in the morning.",
      es: "Un desayuno típico de Tainan: gachas saladas de arroz con pez de leche y marisco en un caldo suave. Ve temprano por la mañana.",
    },
    mapQuery: "阿星鹹粥 台南",
    michelinBib: 2026,
  },
  {
    id: "a-mei-restaurant",
    category: "food",
    region: "tainan",
    name: { "zh-TW": "阿美飯店", en: "A Mei Restaurant", es: "A Mei Restaurant" },
    description: {
      "zh-TW": "台南的台菜餐廳，適合一群人一起點好幾道菜分享，坐下來好好吃一頓。",
      en: "A Taiwanese restaurant in Tainan, good for a group sharing several dishes over a proper sit-down meal.",
      es: "Un restaurante de cocina taiwanesa en Tainan, ideal para ir en grupo y compartir varios platos con calma.",
    },
    mapQuery: "阿美飯店 台南",
    michelinBib: 2026,
  },

  // 我的私房推薦
  {
    id: "ye-feng-milkfish-soup",
    category: "food",
    region: "tainan",
    name: { "zh-TW": "葉鳳浮水魚羹", en: "Ye Feng Milkfish Thick Soup", es: "Ye Feng Milkfish Thick Soup" },
    description: {
      "zh-TW": "保安路上的浮水魚羹，是老店阿鳳的第二代。虱目魚漿包著魚肉，浮在清甜的羹湯上，是台南很道地的小吃。",
      en: "Fish-ball thick soup on Bao'an Road, run by the second generation of the well-known A Feng. Milkfish paste wrapped around chunks of fish, floating in a light, sweet broth: a true Tainan snack.",
      es: "Sopa espesa con bolas de pescado en la calle Bao'an, llevada por la segunda generación del conocido A Feng. Pasta de pez de leche envolviendo trozos de pescado, flotando en un caldo suave y dulce: un bocado muy de Tainan.",
    },
    mapQuery: "葉鳳浮水虱目魚羹 保安路 台南",
    localPick: true,
  },
  {
    id: "khuntor",
    category: "food",
    region: "tainan",
    name: { "zh-TW": "鯤島 Khuntor", en: "Khuntor", es: "Khuntor" },
    description: {
      "zh-TW": "台南北區的餐酒館，把台南在地食材做進西式料理和調酒裡，例如用柳營牛奶、麻豆碗粿調的酒。晚上想坐下來喝一杯很適合。",
      en: "A bistro and bar in Tainan's North District that works local ingredients into Western dishes and cocktails, such as drinks inspired by Liuying milk and Madou rice cakes. Great for an evening drink.",
      es: "Un bistró y bar en el distrito Norte de Tainan que lleva ingredientes locales a platos occidentales y cócteles, como bebidas inspiradas en la leche de Liuying y los pasteles de arroz de Madou. Perfecto para tomar algo por la noche.",
    },
    mapQuery: "鯤島 Khuntor 台南 北區",
    localPick: true,
  },

  {
    id: "grand-matsu-temple",
    category: "sight",
    region: "tainan",
    name: { "zh-TW": "臺南祀典大天后宮", en: "Grand Matsu Temple", es: "Gran Templo de Matsu" },
    description: {
      "zh-TW": "台灣第一座官方建造的媽祖廟，前身是明朝寧靖王的府邸，香火很旺。",
      en: "Taiwan's first officially built temple to Matsu, the sea goddess, set in the former residence of a Ming dynasty prince.",
      es: "El primer templo dedicado oficialmente a Matsu, la diosa del mar, en la antigua residencia de un príncipe de la dinastía Ming.",
    },
    mapQuery: "臺南祀典大天后宮",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/2017-08-08_Tainan_Grand_Matsu_Temple.jpg/1280px-2017-08-08_Tainan_Grand_Matsu_Temple.jpg",
      credit: "Felix Filnkoessl",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:2017-08-08_Tainan_Grand_Matsu_Temple.jpg",
    },
    localPick: true,
  },
  {
    id: "hele-square",
    category: "sight",
    region: "tainan",
    name: { "zh-TW": "河樂廣場", en: "Hé Lè Square", es: "Plaza Hé Lè" },
    description: {
      "zh-TW": "原本是老舊的中國城商場，拆除後改建成親水廣場。天氣熱的時候很多人來玩水，傍晚很適合散步。",
      en: "Once an ageing shopping mall, now a waterfront plaza where people come to splash around on hot days. Lovely for an evening stroll.",
      es: "Antes era un viejo centro comercial; ahora es una plaza junto al agua donde la gente se refresca en los días de calor. Ideal para pasear al atardecer.",
    },
    mapQuery: "河樂廣場 台南",
    image: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/%E8%87%BA%E5%8D%97%E6%B2%B3%E6%A8%82%E5%BB%A3%E5%A0%B4.jpg/1280px-%E8%87%BA%E5%8D%97%E6%B2%B3%E6%A8%82%E5%BB%A3%E5%A0%B4.jpg",
      credit: "Pbdragonwang",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:%E8%87%BA%E5%8D%97%E6%B2%B3%E6%A8%82%E5%BB%A3%E5%A0%B4.jpg",
    },
    localPick: true,
  },
  {
    id: "ximen-asakusa",
    category: "sight",
    region: "tainan",
    name: { "zh-TW": "西門淺草（淺草新天地）", en: "Ximen Asakusa Market", es: "Mercado Ximen Asakusa" },
    description: {
      "zh-TW": "公有市場裡的小店聚落，有選物、手作和小吃攤，適合慢慢逛。",
      en: "A cluster of small stalls inside a public market, with design goods, handmade crafts and snacks. Good for a slow browse.",
      es: "Un conjunto de puestos pequeños dentro de un mercado público, con objetos de diseño, artesanía y comida. Para pasear sin prisa.",
    },
    mapQuery: "西門淺草公有零售市場 淺草新天地 台南",
    localPick: true,
  },
  {
    id: "a-feng-fish-soup",
    category: "food",
    region: "tainan",
    name: { "zh-TW": "阿鳳浮水虱目魚羹", en: "A Feng Milkfish Paste Soup", es: "Sopa de pez de leche A Feng" },
    description: {
      "zh-TW": "用虱目魚做的浮水魚羹，是台南特有的吃法。",
      en: "Floating fish paste soup made with milkfish, a way of eating it you'll only find in Tainan.",
      es: "Sopa con bolitas flotantes de pasta de pez de leche, una forma de comerlo propia de Tainan.",
    },
    mapQuery: "阿鳳浮水虱目魚羹 台南",
    localPick: true,
  },
  {
    id: "wang-fish-skin",
    category: "food",
    region: "tainan",
    name: { "zh-TW": "王氏魚皮", en: "Wang's Milkfish Skin", es: "Piel de pescado Wang" },
    description: {
      "zh-TW": "虱目魚皮湯和魚肚，是台南人常吃的早餐，建議早點去。",
      en: "Milkfish skin soup and fish belly, a favourite Tainan breakfast. Go early.",
      es: "Sopa de piel de pez de leche y ventresca, un desayuno muy típico de Tainan. Ve temprano.",
    },
    mapQuery: "王氏魚皮 台南",
    localPick: true,
  },
  {
    id: "yi-wei-pin",
    category: "food",
    region: "tainan",
    name: { "zh-TW": "台南一味品碗粿魚羹", en: "Yi Wei Pin Wa-kue & Fish Soup", es: "Yi Wei Pin: wa-kue y sopa de pescado" },
    description: {
      "zh-TW": "碗粿配魚羹，是台南經典的組合。",
      en: "Wa-kue (savoury steamed rice cake) with fish thick soup, a classic Tainan pairing.",
      es: "Wa-kue (pastel de arroz salado al vapor) con sopa espesa de pescado, una combinación clásica de Tainan.",
    },
    mapQuery: "一味品碗粿魚羹 台南",
    michelinBib: 2026,
    localPick: true,
  },
  {
    id: "klin-taibao",
    category: "food",
    region: "tainan",
    name: { "zh-TW": "克林台包", en: "Klin Taibao", es: "Klin Taibao" },
    description: {
      "zh-TW": "台式包子和肉粽，適合買來當點心或帶著走。",
      en: "Taiwanese steamed buns and sticky rice dumplings, good as a snack or to take away.",
      es: "Bollos al vapor taiwaneses y zongzi (arroz glutinoso envuelto en hoja), perfectos como tentempié o para llevar.",
    },
    mapQuery: "克林台包 台南",
    localPick: true,
  },
  {
    id: "stone-corn",
    category: "food",
    region: "tainan",
    name: { "zh-TW": "石頭鄉燜烤香味玉米", en: "Shi Tou Xiang Stone-Roasted Corn", es: "Maíz asado Shi Tou Xiang" },
    description: {
      "zh-TW": "用石頭燜烤的玉米，香味很重，適合當點心邊走邊吃。",
      en: "Corn roasted among hot stones, very fragrant and an easy snack to eat as you walk.",
      es: "Maíz asado entre piedras calientes, muy aromático y fácil de comer mientras paseas.",
    },
    mapQuery: "石頭鄉燜烤香味玉米 台南",
    localPick: true,
  },
  {
    id: "sun-brand-ice",
    category: "food",
    region: "tainan",
    name: { "zh-TW": "太陽牌冰品", en: "Sun Brand Ice", es: "Helados Sun Brand" },
    description: {
      "zh-TW": "老字號冰店，招牌是紅豆牛奶霜，台南的夏天必吃。",
      en: "A long-running ice shop famous for its red bean milk frost, a Tainan summer essential.",
      es: "Una heladería de toda la vida, famosa por su granizado de leche con judía roja. Imprescindible en verano.",
    },
    mapQuery: "太陽牌冰品 台南",
    localPick: true,
  },
  {
    id: "yanyan",
    category: "cafe",
    region: "tainan",
    name: { "zh-TW": "懨懨", en: "Yan Yan", es: "Yan Yan" },
    description: {
      "zh-TW": "很受歡迎的咖啡店，座位在二、三樓，巴斯克乳酪蛋糕是招牌。",
      en: "A popular café with seating on the second and third floors, best known for its Basque cheesecake.",
      es: "Una cafetería muy popular con mesas en la segunda y tercera planta, conocida por su tarta de queso vasca.",
    },
    mapQuery: "懨懨 台南",
    localPick: true,
  },
  // TODO：介紹寫得比較簡單，可以改成你自己的推薦語
  {
    id: "gui-coffee",
    category: "cafe",
    region: "tainan",
    name: { "zh-TW": "軌咖啡", en: "Gui Coffee", es: "Gui Coffee" },
    description: {
      "zh-TW": "台南的咖啡店。",
      en: "A café in Tainan.",
      es: "Una cafetería en Tainan.",
    },
    mapQuery: "軌咖啡 台南",
    localPick: true,
  },
  // TODO：介紹寫得比較簡單，可以改成你自己的推薦語
  {
    id: "irresponsible-cafe",
    category: "cafe",
    region: "tainan",
    name: { "zh-TW": "無責任咖啡", en: "Irresponsible Cafe", es: "Irresponsible Cafe" },
    description: {
      "zh-TW": "台南的咖啡店。",
      en: "A café in Tainan.",
      es: "Una cafetería en Tainan.",
    },
    mapQuery: "無責任咖啡 Irresponsible Cafe 台南",
    localPick: true,
  },
  // TODO：介紹寫得比較簡單，可以改成你自己的推薦語
  {
    id: "mi-cafe",
    category: "cafe",
    region: "tainan",
    name: { "zh-TW": "秘氏咖啡", en: "Mi's Cafe", es: "Mi's Cafe" },
    description: {
      "zh-TW": "台南的咖啡店。",
      en: "A café in Tainan.",
      es: "Una cafetería en Tainan.",
    },
    mapQuery: "秘氏咖啡 台南",
    localPick: true,
  },
  // TODO：介紹寫得比較簡單，可以改成你自己的推薦語
  {
    id: "present-coffee",
    category: "cafe",
    region: "tainan",
    name: { "zh-TW": "Present Coffee", en: "Present Coffee", es: "Present Coffee" },
    description: {
      "zh-TW": "台南的咖啡店。",
      en: "A café in Tainan.",
      es: "Una cafetería en Tainan.",
    },
    mapQuery: "Present Coffee 台南",
    localPick: true,
  },
  // TODO：介紹寫得比較簡單，可以改成你自己的推薦語
  {
    id: "yaoshi-black-tea",
    category: "cafe",
    region: "tainan",
    name: { "zh-TW": "藥師的私房紅茶", en: "Yao Shi Black Tea", es: "Té negro Yao Shi" },
    description: {
      "zh-TW": "台南的紅茶飲料店。",
      en: "A black tea drink stand in Tainan.",
      es: "Un puesto de té negro en Tainan.",
    },
    mapQuery: "藥師的私房紅茶 台南",
    localPick: true,
  },
  // TODO：介紹寫得比較簡單，可以改成你自己的推薦語
  {
    id: "chikan-herbal",
    category: "cafe",
    region: "tainan",
    name: { "zh-TW": "赤崁中藥行", en: "Chikan Herbal Shop", es: "Herbolario Chikan" },
    description: {
      "zh-TW": "赤崁樓附近的中藥行。",
      en: "A traditional herbal medicine shop near Chihkan Tower.",
      es: "Un herbolario tradicional cerca de la Torre Chihkan.",
    },
    mapQuery: "赤崁中藥行 台南",
    localPick: true,
  },
  // TODO：介紹寫得比較簡單，可以改成你自己的推薦語
  {
    id: "hsiang-lan",
    category: "shop",
    region: "tainan",
    name: { "zh-TW": "香蘭男子電棒燙", en: "Hsiang Lan", es: "Hsiang Lan" },
    description: {
      "zh-TW": "台南的服飾店。",
      en: "A clothing shop in Tainan.",
      es: "Una tienda de ropa en Tainan.",
    },
    mapQuery: "香蘭男子電棒燙 台南",
    localPick: true,
  },

  // --- 高雄 ---
  {
    id: "hou-chi-duck-rice",
    category: "food",
    region: "kaohsiung",
    name: { "zh-TW": "侯記鴨肉飯", en: "Hou Chi Duck Rice", es: "Hou Chi Duck Rice" },
    description: {
      "zh-TW": "高雄的鴨肉飯，必比登推薦。",
      en: "A duck rice shop in Kaohsiung, recommended by the Bib Gourmand list.",
      es: "Un local de arroz con pato en Kaohsiung, recomendado en la lista Bib Gourmand.",
    },
    mapQuery: "侯記鴨肉飯 高雄",
    michelinBib: 2026,
  },
  {
    id: "liang-chia-pig-knuckle",
    category: "food",
    region: "kaohsiung",
    name: { "zh-TW": "良佳豬腳", en: "Liang Chia Pig Knuckle", es: "Liang Chia Pig Knuckle" },
    description: {
      "zh-TW": "滷豬腳配白飯，滷得軟嫩入味。",
      en: "Slow-braised pig knuckle over rice, tender and full of flavour.",
      es: "Codillo de cerdo guisado a fuego lento sobre arroz, tierno y lleno de sabor.",
    },
    mapQuery: "良佳豬腳 高雄",
    michelinBib: 2026,
  },
];
