// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://dongyu.company",
  integrations: [sitemap()],
  build: {
    // 頁面 CSS 很小,直接內聯省一個阻塞請求
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
