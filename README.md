# 動域科技 官網 · Dongyu Tech Website

動域科技股份有限公司(Dongyu Tech)官方網站。以 [Astro](https://astro.build/) 建置。

**設計方向(2026-07 改版)**:白底淺色乾淨風(參考 EZeeTech 的信任感內容策略,非復刻),磚橙重點色(`#D9472B`)+ Orbit 軌道母題,深色只留 Footer 與 Hero 照片遮罩。Space Grotesk × 系統正黑體。

## 開發

本專案使用 **pnpm**(已用 `packageManager` 欄位釘住版本)。

```bash
pnpm install     # 安裝依賴
pnpm dev         # 本機開發 → http://localhost:4321
pnpm build       # 產生靜態網站到 dist/
pnpm preview     # 預覽 build 結果
```

## 頁面

| 路徑                      | 內容                                                                      |
| ------------------------- | ------------------------------------------------------------------------- |
| `/`                       | 首頁:Hero 輪播 ＋ 三大核心能力 ＋ 主打商品 ＋ 最新動態 ＋ 落地實績 ＋ CTA |
| `/news`                   | 最新動態列表(內容來自 content collection)                                 |
| `/news/[id]`              | 消息內頁(全文、配圖、相關報導連結)                                        |
| `/technology`             | 核心技術:三大技術支柱 ＋ 專利 ＋ 開發流程 ＋ 差異化                       |
| `/products`               | 產品列表:SilverSole、QuickPlate、橋伴、譯護                               |
| `/products/silversole` 等 | 四個產品各自的完整介紹內頁                                                |
| `/huilan`                 | 洄瀾樂齡:高齡科技巡迴賦能計畫專頁(HSH 金獎)                               |
| `/about`                  | 關於動域:團隊 ＋ 故事 ＋ 名字與標誌 ＋ 價值                               |
| `/contact`                | 聯絡我們:表單(mailto)＋ FAQ                                               |
| `/404`                    | 404 頁                                                                    |

## 內容維護

- **新增消息**:在 `src/content/news/` 丟一個 `.md`(frontmatter 見 `src/content.config.ts`),支援配圖 `image`、外部連結 `link`、相關報導 `sources`。
- **圖片**:`public/news/`、`public/products/`、`public/competitions/`;新圖請縮到長邊 ≤1600px 的 JPG。
- **Hero 輪播圖**:自託管 WebP(`public/hero/`,來源紀錄見 `_來源.txt`),換自有照片時改 `src/pages/index.astro` 的 `slides` 陣列。

## 內容紅線(改文案前必讀)

- **誠實**:沒做完的寫「開發中/原型/規劃中」,不寫成已完成;金額與獎項要有依據。
- **機密**:不寫電路元件料號/BOM;申請中專利不揭露請求項細節。
- **法規**:全站不用「診斷/治療/處方」;SilverSole 標示非醫療器材;洄瀾樂齡用「健康促進/運動指導」。
- 公司英文一律 **Dongyu Tech**。

## 結構

```
src/
├── layouts/Layout.astro      # 共用版型(SEO、og、JSON-LD、字體、Header/Footer)
├── components/               # OrbitMark / Header / Footer / Button / 各類卡片
├── content.config.ts         # news collection schema
├── content/news/             # 消息 md
├── pages/                    # 各頁面(見上表)
└── styles/global.css         # 設計 token(Tailwind v4 @theme)+ 動畫 + 文章排版
public/                       # logo、og-image、產品/消息圖、robots.txt
```

SEO:`@astrojs/sitemap` 自動產 sitemap;`Layout.astro` 內建 canonical、og:image、Organization JSON-LD。
