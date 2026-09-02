// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

/** 節點底下所有文字接起來,用來判斷表頭是不是空的 @param {any} node */
function textOf(node) {
  if (node.type === "text") return node.value;
  if (!Array.isArray(node.children)) return "";
  return node.children.map(textOf).join("");
}

/**
 * markdown 表格的兩件加工:
 * 1. 外面包一層 <div class="table-scroll">,讓窄螢幕可以橫向捲動
 *    (隱私權政策條文有不少多欄表格)。
 * 2. 拿掉空的 <thead> —— 原稿有幾張「無表頭的兩欄資料表」寫成 `| | |`,
 *    GFM 還是會生出一列空的 th,留著會在表格頂端多一條灰帶。
 * 手寫走訪,不額外裝 unist-util-visit。
 */
function rehypeWrapTables() {
  /** @param {any} node */
  const walk = (node) => {
    if (!Array.isArray(node.children)) return;
    node.children = node.children.map((/** @type {any} */ child) => {
      walk(child);
      if (child.type !== "element" || child.tagName !== "table") return child;

      const table = {
        ...child,
        children: child.children.filter(
          (/** @type {any} */ section) =>
            !(
              section.type === "element" &&
              section.tagName === "thead" &&
              textOf(section).trim() === ""
            ),
        ),
      };

      return {
        type: "element",
        tagName: "div",
        properties: { className: ["table-scroll"] },
        children: [table],
      };
    });
  };
  return walk;
}

// https://astro.build/config
export default defineConfig({
  site: "https://dongyu.company",
  integrations: [sitemap()],
  // 「欸! 粗哥」(Hey! My Bro)產品頁還沒寫,先把路由佔起來導去 404;
  // 之後補上 src/pages/products/heymybro.astro 時把這段拿掉。
  // (隱私權政策 /products/heymybro/privacy 不受影響,已經可以看)
  redirects: {
    "/products/heymybro": "/404",
  },
  markdown: {
    rehypePlugins: [rehypeWrapTables],
  },
  build: {
    // 頁面 CSS 很小,直接內聯省一個阻塞請求
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
