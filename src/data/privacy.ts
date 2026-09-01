/**
 * 各 App 隱私權政策的顯示用資料。
 *
 * 條文本身一律以 src/content/privacy/<專案>/<語言>.md 為準(原稿從各 App
 * 專案複製過來,更新方式見 src/content/privacy/README.md);這裡只放頁面標題、
 * 產品名、返回連結這類網站自己的東西。
 *
 * 抽成獨立模組是因為 Astro 會把 getStaticPaths 提到頁面 frontmatter 之外執行,
 * 直接寫在 .astro 裡的常數在那裡讀不到。
 *
 * 產出路由:
 *   /products/<slug>/privacy      中文
 *   /products/<slug>/privacy/en   英文
 */

export type PrivacyLangKey = "zh-tw" | "en";

export interface PrivacyLang {
  key: PrivacyLangKey;
  /** <html lang> 與 hreflang 用 */
  htmlLang: "zh-Hant" | "en";
  label: string;
  /** 路由的語言區段;中文是預設語言,不加區段 */
  seg: string | undefined;
}

export interface PrivacyMeta {
  /** 產品名 —— 中英文各有正式名稱,所以跟著語言走 */
  name: string;
  title: string;
  description: string;
}

export interface PrivacyProduct {
  slug: string;
  back: { href: string; label: string; labelEn: string };
  meta: Record<PrivacyLangKey, PrivacyMeta>;
}

export const PRIVACY_LANGS: PrivacyLang[] = [
  { key: "zh-tw", htmlLang: "zh-Hant", label: "繁體中文", seg: undefined },
  { key: "en", htmlLang: "en", label: "English", seg: "en" },
];

export const PRIVACY_PRODUCTS: PrivacyProduct[] = [
  {
    // slug 沿用 Android 套件名稱 com.dongyutech.heymybro 的字尾
    slug: "heymybro",
    // 產品頁還沒寫(/products/heymybro 目前導去 404),返回連結先指回產品列表
    back: {
      href: "/products",
      label: "返回產品列表",
      labelEn: "Back to products",
    },
    meta: {
      "zh-tw": {
        name: "欸! 粗哥",
        title: "欸! 粗哥 隱私權政策",
        description:
          "「欸! 粗哥」分帳與記帳 App 的隱私權政策 — 我們蒐集哪些資料、為什麼蒐集、存在哪裡,以及你可以怎麼處理這些資料。",
      },
      en: {
        name: "Hey! My Bro",
        title: "Hey! My Bro Privacy Policy",
        description:
          "Privacy policy for Hey! My Bro, the bill-splitting and expense-tracking app by Dongyu Tech.",
      },
    },
  },
  {
    slug: "silversole",
    back: {
      href: "/products/silversole",
      label: "返回 SilverSole 銀足",
      labelEn: "Back to SilverSole",
    },
    meta: {
      "zh-tw": {
        name: "SilverSole 銀足",
        title: "SilverSole 銀足 App 隱私權政策",
        description:
          "SilverSole 銀足智慧鞋墊 App 的隱私權政策 — 我們如何蒐集、處理、利用及保護您的個人資料。",
      },
      en: {
        name: "SilverSole",
        title: "SilverSole App Privacy Policy",
        description:
          "Privacy policy for the SilverSole smart insole app by Dongyu Tech.",
      },
    },
  },
];
