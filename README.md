# 動域科技 官網 · Dongyu Tech Website

動域科技股份有限公司（Dongyu Tech）官方網站。以 [Astro](https://astro.build/) 建置，整體風格由公司 **Orbit** LOGO 推導：墨黑底（`#0E0E10`）＋ 磚橙重點色（`#D9472B`），Space Grotesk × Noto Sans TC 字體。

## 開發

```bash
npm install      # 安裝依賴
npm run dev      # 本機開發 → http://localhost:4321
npm run build    # 產生靜態網站到 dist/
npm run preview  # 預覽 build 結果
```

## 頁面

| 路徑 | 內容 |
|---|---|
| `/` | 首頁：Hero ＋ 三大核心能力 ＋ 代表產品 ＋ CTA |
| `/about` | 關於我們：使命/價值 ＋ 創辦團隊 |
| `/products` | 產品：SilverSole 銀足、QuickPlate 智慧槓片 |
| `/contact` | 聯絡我們：表單（mailto）＋ Email |

## 結構

```
src/
├── layouts/Layout.astro      # 共用版型（SEO、字體、Header/Footer）
├── components/
│   ├── OrbitMark.astro       # 可調色的品牌 LOGO（SVG）
│   ├── Header.astro          # 導覽列（含行動裝置選單）
│   ├── Footer.astro
│   ├── Button.astro
│   ├── ServiceCard.astro     # 三大能力卡
│   ├── ProductCard.astro     # 產品卡
│   └── TeamCard.astro        # 團隊成員卡
├── pages/                    # 四個頁面
└── styles/global.css         # 品牌設計 token（Tailwind v4 @theme）
public/logo/                  # 來自 00_品牌 的 Orbit LOGO SVG
```

## 設計重點

- **Orbit 母題**：導覽列旋轉 LOGO、Hero 背景旋轉軌道、卡片 hover 浮現的軌道弧。
- **品牌色 token** 定義在 `src/styles/global.css` 的 `@theme`，要調色改這裡即可。
- 尊重 `prefers-reduced-motion`，會自動停用動畫。

## 內容來源

文字內容取自公司既有資料（SilverSole 計畫書、團隊成員、品牌系統）。產品法規敘述採消費級定位，未使用「診斷/治療/處方」字眼。
