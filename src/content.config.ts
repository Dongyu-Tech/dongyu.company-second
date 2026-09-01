import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * 最新消息:一則消息 = src/content/news/ 下一個 .md 檔。
 * frontmatter:
 *   title     消息標題
 *   date      用於排序(新→舊);不確定確切日期時抓個大概月份即可
 *   dateLabel 顯示用日期文字(如 "2026.07" 或只寫 "2026"),避免亂寫假日期
 *   category  分類:獲獎 / 補助 / 專利 / 里程碑 / 參展
 *   summary   卡片上顯示的摘要
 *   link      (選填)外部連結,例如計畫官網
 *   linkLabel (選填)外部連結按鈕文字,預設「前往計畫官網」
 */
const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    dateLabel: z.string(),
    category: z.enum(["獲獎", "補助", "專利", "里程碑", "參展"]),
    summary: z.string(),
    link: z.string().url().optional(),
    linkLabel: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    /** 相關報導/外部連結,顯示在內頁底部 */
    sources: z
      .array(z.object({ title: z.string(), url: z.string().url() }))
      .optional(),
  }),
});

/**
 * 隱私權政策:一個 App 專案 = src/content/privacy/ 下一個資料夾,
 * 底下每個語言一個 .md(zh-tw.md / en.md)。條文原稿由各 App 專案複製過來,
 * 刻意不加 frontmatter 以保持與原稿一致 —— 顯示用的產品名、頁面標題等
 * 寫在 src/data/privacy.ts 的 PRIVACY_PRODUCTS。
 * pattern 只收資料夾底下那一層,所以 privacy/README.md 不會被讀進來。
 * entry id 形如 "heymybro/zh-tw"。
 */
const privacy = defineCollection({
  loader: glob({ pattern: "*/*.md", base: "./src/content/privacy" }),
});

export const collections = { news, privacy };
