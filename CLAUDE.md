# CLAUDE.md

動域科技官網（Astro 5 + Tailwind CSS v4，部署於 Cloudflare，套件管理用 pnpm）。

## Git / PR 語言慣例

- **Git commit message：一律使用英文**（conventional commits 風格，如 `feat:` / `fix:` / `chore:`）。
- **PR title：一律使用英文**。
- **PR 內文（body / description）：使用繁體中文**。

## SilverSole App 的加好友連結(不能改名或刪除)

- `src/pages/f/index.astro`:App「傳連結給朋友」的落地頁,網址 `https://dongyu.company/f/?t=<token>`。
- `public/.well-known/assetlinks.json`(Android App Links)、`public/.well-known/apple-app-site-association`(iOS Universal Links)、`public/_headers`(AASA 的 Content-Type)。
- 路徑 `/f/`、參數 `t` 與這兩個檔都寫死在 App 裡(silversole-app `lib/core/friends/friend_rules.dart`),改了已經分享出去的連結就打不開 App。
