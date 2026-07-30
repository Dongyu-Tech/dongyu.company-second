import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * 最新消息:一則消息 = src/content/news/ 下一個 .md 檔。
 * frontmatter:
 *   title     消息標題
 *   date      用於排序(新→舊);不確定確切日期時抓個大概月份即可
 *   dateLabel 顯示用日期文字(如 "2026.07" 或只寫 "2026"),避免亂寫假日期
 *   category  分類:獲獎 / 補助 / 專利 / 里程碑
 *   summary   卡片上顯示的摘要
 *   link      (選填)外部連結,例如計畫官網
 */
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    dateLabel: z.string(),
    category: z.enum(['獲獎', '補助', '專利', '里程碑']),
    summary: z.string(),
    link: z.string().url().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    /** 相關報導/外部連結,顯示在內頁底部 */
    sources: z.array(z.object({ title: z.string(), url: z.string().url() })).optional(),
  }),
});

export const collections = { news };
