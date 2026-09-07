# 官網怎麼改 · 給團隊成員

這份文件講**流程**;要改什麼、不能寫什麼看 [README](README.md) 的「內容維護」與「內容紅線」。

## 一句話版本

開分支 → 改東西 → 開 PR → 看預覽網址 → 找人 review → 合併 → **部署自己會跑**。

你不需要有 Cloudflare 帳號,也不需要在自己電腦跑任何部署指令。

---

## 最常做的事:發一則最新消息

### 1. 開一條分支

```bash
git switch main
git pull
git switch -c feat/news-你的消息代號
```

分支請從**最新的 main** 開。從舊分支長出來的東西合回去會把別人的改動蓋掉。

### 2. 新增一個 md 檔

在 `src/content/news/` 放一個 `.md`,檔名用 `年份-代號.md`,例如 `2026-hsinchu-social-innovation.md`。

```markdown
---
title: 動域科技入選進駐新竹社創基地
date: 2026-09-02
dateLabel: "2026.09"
category: 里程碑
summary: 卡片上顯示的一兩句摘要,要能單獨看懂。
image: /news/你的圖.webp
imageAlt: 給看不到圖的人聽的描述
---

內文。第一段講發生什麼事,第二段講對我們的意義。
```

- `category` 只能填這五個之一:**獲獎 / 補助 / 專利 / 里程碑 / 參展**
- `date` 用來排序,`dateLabel` 是畫面上顯示的字。不確定確切日期就 `dateLabel: "2026.09"`,不要編一個假的日
- 完整欄位(外部連結、相關報導⋯⋯)見 `src/content.config.ts`,裡面每個欄位都有註解

### 3. 圖片

圖放 `public/news/`,轉成 **WebP**。

**卡片是 16:10 橫式裁切**(`object-cover`),所以請準備橫式的圖。直式的圖(例如活動海報)丟進去會被切掉頭尾 —— 常常剛好把最重要的那行切掉。直式素材的處理方式見 `src/content.config.ts` 裡 `imageFull` 的說明。

### 4. 本機看一下

```bash
pnpm install
pnpm dev        # → http://localhost:4321
```

改 `.md` 之後畫面沒更新是正常的,Astro 的 content collection 有快取,**重開 `pnpm dev` 就會了**。

### 5. 開 PR

```bash
git add .
git commit -m "feat: 新增消息「你的標題」"
git push -u origin feat/news-你的消息代號
```

推上去之後 GitHub 會給你開 PR 的連結。開完 PR 會自動跑三件事:

| 檢查             | 在看什麼                                                       |
| ---------------- | -------------------------------------------------------------- |
| **Format check** | 排版格式。紅了就跑 `pnpm format` 再推一次                      |
| **Astro build**  | 網站建得起來嗎。紅了通常是 frontmatter 少欄位或填錯 `category` |
| **Preview**      | 產生這個 PR 專屬的預覽網址,會用留言貼在 PR 上                  |

**預覽網址是這個 PR 獨立的,點進去看不會影響正式站。** 自己先點開確認畫面沒問題,再找人 review。

### 6. 合併

Review 過了就合併進 main。**合併之後部署會自己跑**,幾分鐘後 dongyu.company 就更新了。到 Actions 頁面可以看部署跑到哪。

---

## 不要做的事

### 不要在自己電腦跑 `wrangler deploy`

正式站只從 **main 的自動部署**上線。手動部署有兩個真實踩過的坑:

1. **會把你沒提交的東西一起推上去。** `wrangler deploy` 部署的是你電腦上 `dist/` 的內容,而 `dist/` 是從你當下的工作目錄建的 —— 包含你還在改、還沒 commit 的檔案。2026-09-07 就差點把一個還沒完成的頁面推上正式站。

2. **會把正式站退版。** 同一天,有人從一條落後 main 四個 commit 的分支手動部署,結果把各 App 的**隱私權政策頁與帳號刪除頁**弄成 404 大約半小時 —— 那兩個是 App 上架必須提供的連結。而且當下沒有任何機制擋下來,也沒有地方查得到線上到底是哪一版。

自動部署兩個坑都不會發生:來源永遠是 main 上某個被合併的 commit,而且每次部署對應哪個 commit 在 Actions 裡查得到。

### 不要直接推 main

所有改動都走 PR,不要 `git push origin main`。

目前 **repo 沒有開分支保護**,所以直推技術上推得動 —— 這條靠大家自己遵守。
真的要擋住,得由 repo 管理者到 Settings → Branches 加規則(強制 PR、
要求 Format check 與 Astro build 通過才能合併)。

### 不要從舊分支開新分支

開之前先 `git switch main && git pull`。

---

## 出事了怎麼辦

**線上壞掉要馬上復原** —— 不要急著修 code 再部署,先回滾到上一個好的版本:

```bash
npx wrangler deployments list    # 找出上一個正常的 Version ID
npx wrangler rollback <VERSION_ID>
```

回滾用的是 Cloudflare 已經存好的版本,不會動到你的 code,幾秒就生效。**這是唯一該用手動指令碰正式站的情況。** 復原之後再慢慢開 PR 修。

---

## 環境設定(只有第一次要做)

需要在 GitHub repo 設兩個 secret,自動部署才會動(Settings → Secrets and variables → Actions):

| 名稱                    | 哪裡拿                                                                                  |
| ----------------------- | --------------------------------------------------------------------------------------- |
| `CLOUDFLARE_API_TOKEN`  | Cloudflare → My Profile → API Tokens → Create Token,用 **Edit Cloudflare Workers** 範本 |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare 首頁右側,或 `npx wrangler whoami`                                            |

這兩個值是憑證,**只貼進 GitHub 的 secret 欄位,不要寫進任何檔案或訊息裡**。
