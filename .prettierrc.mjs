/** @type {import("prettier").Config} */
export default {
  // prettier-plugin-tailwindcss 必須放最後,才能正確排序 class
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  // Tailwind v4:設定改在 CSS,指到 @theme 所在的入口檔,plugin 才讀得到自訂 token
  tailwindStylesheet: "./src/styles/global.css",
  overrides: [
    {
      files: "*.astro",
      options: { parser: "astro" },
    },
    {
      // 隱私權政策原稿是從各 App 專案複製過來的,兩邊換行習慣不一樣
      //(「欸! 粗哥」把段落硬折到 ~95 字元)。折行的中文接回 HTML 時會在字
      // 與字之間留下空格,所以這裡一律把段落攤成單行;真正要斷行的地方
      // 用 markdown 硬換行(行尾反斜線)標,prettier 會保留。
      files: "src/content/privacy/**/*.md",
      options: { proseWrap: "never" },
    },
  ],
};
