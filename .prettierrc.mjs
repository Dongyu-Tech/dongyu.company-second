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
  ],
};
