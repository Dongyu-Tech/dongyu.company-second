# 隱私權政策原稿

一個資料夾 = 一個 App 專案,底下每個語言一個 `.md`(`zh-tw.md` / `en.md`), 由 `src/pages/products/[product]/privacy/[...lang].astro` 算成下列路由:

| 專案資料夾            | 路由                              |
| --------------------- | --------------------------------- |
| `heymybro/zh-tw.md`   | `/products/heymybro/privacy`      |
| `heymybro/en.md`      | `/products/heymybro/privacy/en`   |
| `silversole/zh-tw.md` | `/products/silversole/privacy`    |
| `silversole/en.md`    | `/products/silversole/privacy/en` |

## 來源與更新方式

政策條文的唯一真相在各 App 專案裡,這裡只是複製過來給官網 render。App 那邊改了就重新複製一次:

| 這裡                  | 來源檔                                       |
| --------------------- | -------------------------------------------- |
| `heymybro/zh-tw.md`   | `OhMyBro/oh-my-bro-app/PRIVACY.md`           |
| `heymybro/en.md`      | `OhMyBro/oh-my-bro-app/PRIVACY.en.md`        |
| `silversole/zh-tw.md` | `SilverSole/silversole-app/PRIVACY.zh-TW.md` |
| `silversole/en.md`    | `SilverSole/silversole-app/PRIVACY.en.md`    |

複製後做三件加工,條文一個字都不改:

1. **跨語言連結**:原稿寫的是 repo 內的相對檔名(如 `[PRIVACY.en.md](PRIVACY.en.md)`), 在網站上點不到,改成上表的站內路由。
2. **移除內部備註**:SilverSole 兩份原稿結尾有「發布前待補項目」的 HTML 註解, 雖然畫面上看不見,但 view-source 會看到,上線版本要拿掉。
3. **換行正規化**:跑一次 `pnpm exec prettier --write "src/content/privacy/**/*.md"`。「欸! 粗哥」原稿把段落硬折到 ~95 字元,markdown 會把折行接成一個空格 ——中文接起來就變成「一款 朋友之間」這種夾字空格。`.prettierrc.mjs` 對這個資料夾設了 `proseWrap: "never"`,會把段落攤回單行(中文接起來不加空格)。真的想斷行的地方(生效日期那兩行、頁尾聯絡資訊)用 markdown 硬換行標 —— **行尾一個反斜線 `\`**,prettier 會保留它。

這些 `.md` 刻意不加 frontmatter,保持跟原稿一致;頁面標題、產品名等顯示用資料寫在路由檔的 `PRODUCTS` 陣列裡。

> 本 README 不會被 content collection 讀進去 —— glob pattern 是 `*/*.md`, 只收資料夾底下那一層。
