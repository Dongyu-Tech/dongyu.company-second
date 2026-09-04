import type { PrivacyLangKey } from "./privacy";

/**
 * 各 App「刪除帳戶」說明頁的文案(Google Play 商店資訊要填的帳戶刪除網址)。
 *
 * Google Play 對這個連結有三項要求,每個產品的文案都要對得上:
 *   1. 提及商店資訊中的 App 名稱與開發人員名稱  → appLine
 *   2. 顯眼處列出使用者要求刪除帳戶的步驟        → steps
 *   3. 指明刪除/保留的資料類型與保留期限         → deleted / kept
 *
 * 刻意不做表單:以「寄件人信箱是否為註冊(登入)信箱」當身分驗證,收到信後人工處理。
 * 資料類型與期限請與 src/content/privacy/<專案>/ 的條文保持一致。
 *
 * 語言清單沿用 src/data/privacy.ts 的 PRIVACY_LANGS;與隱私權政策同樣的理由
 * (getStaticPaths 讀不到頁面 frontmatter 的常數),文案抽成獨立模組。
 *
 * 產出路由:
 *   /products/<slug>/app/delete-account      中文
 *   /products/<slug>/app/delete-account/en   英文
 */

/** 帳戶刪除申請的收件信箱 */
export const SUPPORT_EMAIL = "support@dongyu.company";

export interface DeleteAccountStep {
  title: string;
  /** 選填 —— 標題本身就講完的步驟不用再補一句 */
  body?: string;
}

export interface DeleteAccountCopy {
  title: string;
  description: string;
  back: { href: string; label: string };
  eyebrow: string;
  /** App 名稱 + 開發人員名稱,Google Play 規定要出現 */
  appLine: string;
  intro: string;
  stepsTitle: string;
  steps: DeleteAccountStep[];
  buttonLabel: string;
  /** 一鍵寄信按鈕預填的信件內文 */
  mailBody: string;
  deletedTitle: string;
  deletedIntro: string;
  deleted: string[];
  keptTitle: string;
  kept: { title: string; body: string }[];
  localTitle: string;
  localBody: string;
  noteTitle: string;
  noteBody: string;
  /** 選填 —— 還沒有隱私權政策頁的產品(如譯護)就不顯示這段 */
  privacy?: { prefix: string; label: string; href: string };
}

export interface DeleteAccountProduct {
  slug: string;
  /** 郵件主旨 —— 中英文共用,方便人工分類 */
  subject: string;
  copy: Record<PrivacyLangKey, DeleteAccountCopy>;
}

const SILVERSOLE_SUBJECT = "Delete SilverSole Account";
const HEYMYBRO_SUBJECT = "Delete Hey! My Bro Account";
const EASYCARE_SUBJECT = "Delete EasyCare Account";

export const DELETE_ACCOUNT_PRODUCTS: DeleteAccountProduct[] = [
  {
    slug: "silversole",
    subject: SILVERSOLE_SUBJECT,
    copy: {
      "zh-tw": {
        title: "刪除 SilverSole 銀足帳戶",
        description:
          "如何要求刪除 SilverSole 銀足 App 的帳戶及關聯資料。SilverSole 銀足由動域科技股份有限公司(Dongyu Tech)開發。",
        back: { href: "/products/silversole", label: "返回 SilverSole 銀足" },
        eyebrow: "帳戶刪除",
        appLine: "SilverSole 銀足 —— 由動域科技股份有限公司(Dongyu Tech)開發",
        intro:
          "您可以隨時要求刪除 SilverSole 銀足帳戶及其關聯資料。目前 App 內尚未提供自助刪除按鈕,請以電子郵件提出申請;我們以「寄件人信箱」驗證身分,因此請務必使用您註冊時使用的信箱來信。",
        stepsTitle: "申請刪除帳戶的步驟",
        steps: [
          {
            title: "以註冊信箱寄信",
            body: `請用您註冊 SilverSole 銀足時使用的電子郵件信箱,寄信到 ${SUPPORT_EMAIL}。以其他信箱寄出的申請無法驗證身分,恕無法受理。`,
          },
          { title: `主旨填寫「${SILVERSOLE_SUBJECT}」` },
          {
            title: "等待我們回覆確認",
            body: "我們會在 15 日內回覆;完成身分確認後,將於 30 日內刪除您的帳戶與相關資料,並以電子郵件通知您處理結果。",
          },
        ],
        buttonLabel: "寄信申請刪除帳戶",
        mailBody: `我要求刪除我的 SilverSole 銀足帳戶及其關聯資料。

註冊信箱:(即本封信的寄件信箱)
應用程式:SilverSole 銀足(動域科技股份有限公司)

我了解此操作無法復原。`,
        deletedTitle: "會被刪除的資料",
        deletedIntro: "申請完成後,以下資料會從我們的後端永久刪除:",
        deleted: [
          "帳號資料 —— 電子郵件地址、雜湊後的密碼、使用者識別碼(UUID)",
          "裝置綁定資料 —— 智慧鞋墊裝置編號(Device ID)、裝置暱稱、配對紀錄",
          "量測與活動紀錄 —— 步態、足底壓力、穿戴狀態、跌倒偵測事件",
          "裝置狀態與心跳紀錄 —— 電量、充電狀態、連線紀錄",
          "與您裝置關聯的位置紀錄",
          "儲存於伺服器端的 App 偏好設定",
        ],
        keptTitle: "會保留的資料與保留期限",
        kept: [
          {
            title: "匿名化統計資料",
            body: "已無法連結到您本人或您裝置的彙總統計資料,將無期限保留,僅用於產品改善。",
          },
          {
            title: "法令要求保存的紀錄",
            body: "依會計、稅務或其他法令應保存者,保留至法定期間屆滿(一般為 5 年)後刪除。",
          },
          {
            title: "客服往來信件",
            body: "您的刪除申請信與我們的回覆,將保留至多 12 個月作為處理紀錄,期滿後刪除。",
          },
          {
            title: "備份檔",
            body: "加密備份以 30 天為週期輪替,因此殘留副本最遲於刪除後 30 天內一併消失,期間不作其他用途。",
          },
        ],
        localTitle: "留在您手機上的資料",
        localBody:
          "App 設定、已配對裝置清單與感測資料暫存僅存在您的手機中,不受伺服器端刪除影響。請於系統設定中清除本 App 的資料,或直接解除安裝 SilverSole 銀足。",
        noteTitle: "送出申請前請注意",
        noteBody:
          "帳戶刪除無法復原,量測歷史紀錄刪除後即無法還原。若您想保留紀錄,請先於 App 內匯出資料。刪除帳戶後,原本綁定於該帳戶的鞋墊也將無法繼續使用。",
        privacy: {
          prefix: "關於我們蒐集哪些資料、如何處理,完整說明請見 ",
          label: "SilverSole 銀足隱私權政策",
          href: "/products/silversole/privacy",
        },
      },
      en: {
        title: "Delete Your SilverSole Account",
        description:
          "How to request deletion of your SilverSole account and associated data. SilverSole is developed by DongYu Technology Co., Ltd. (Dongyu Tech).",
        back: { href: "/products/silversole", label: "Back to SilverSole" },
        eyebrow: "Account Deletion",
        appLine:
          "SilverSole — developed by DongYu Technology Co., Ltd. (Dongyu Tech)",
        intro:
          "You can ask us to delete your SilverSole account and the data associated with it at any time. There is no in-app deletion button yet, so requests are handled by email: we verify your identity from the address the request is sent from, which is why it must come from the email address you registered with.",
        stepsTitle: "How to request deletion",
        steps: [
          {
            title: "Send an email from your registered address",
            body: `Email ${SUPPORT_EMAIL} from the address you used to sign up for SilverSole. Requests sent from any other address cannot be verified and will not be processed.`,
          },
          { title: `Use the subject line “${SILVERSOLE_SUBJECT}”` },
          {
            title: "Wait for our confirmation",
            body: "We reply within 15 days. Once your identity is confirmed, the account and its data are deleted within 30 days, and we email you when it is done.",
          },
        ],
        buttonLabel: "Email us to delete my account",
        mailBody: `Please delete my SilverSole account and its associated data.

Registered email: (this email address)
App: SilverSole (Dongyu Tech)

I understand this action is irreversible.`,
        deletedTitle: "Data that is deleted",
        deletedIntro:
          "When your request is completed, the following is permanently deleted from our backend:",
        deleted: [
          "Account data — email address, hashed password, user identifier (UUID)",
          "Device binding data — smart insole Device ID, device nickname, pairing records",
          "Measurement and activity records — gait, plantar pressure, wear state, fall-detection events",
          "Device status and heartbeat records — battery level, charging state, connection logs",
          "Location records associated with your device",
          "App preferences stored on the server",
        ],
        keptTitle: "Data that is kept, and for how long",
        kept: [
          {
            title: "Anonymised statistics",
            body: "Aggregated data that can no longer be linked to you or your device is retained indefinitely for product improvement.",
          },
          {
            title: "Records required by law",
            body: "Where accounting, tax, or other legal obligations require retention, the relevant records are kept for the statutory period (generally up to 5 years) and then deleted.",
          },
          {
            title: "Support correspondence",
            body: "Your deletion request email and our reply are kept for up to 12 months as proof that the request was handled, then deleted.",
          },
          {
            title: "Backups",
            body: "Encrypted backups are rotated on a 30-day cycle, so residual copies disappear no later than 30 days after deletion. They are not used for any other purpose.",
          },
        ],
        localTitle: "Data on your phone",
        localBody:
          "Settings, paired-device lists, and cached sensor data stay on your device and are not touched by a server-side deletion. Remove them by clearing the app's data in your system settings, or by uninstalling SilverSole.",
        noteTitle: "Before you send the request",
        noteBody:
          "Account deletion is irreversible: measurement history cannot be restored afterwards. If you want to keep your records, export them from the app first. Deleting your account also ends access to any insole bound to it.",
        privacy: {
          prefix:
            "For full details on what we collect and how we handle it, see the ",
          label: "SilverSole privacy policy",
          href: "/products/silversole/privacy/en",
        },
      },
    },
  },
  {
    slug: "heymybro",
    subject: HEYMYBRO_SUBJECT,
    copy: {
      "zh-tw": {
        title: "刪除欸! 粗哥帳戶",
        description:
          "如何要求刪除「欸! 粗哥」App 的帳戶及關聯資料。「欸! 粗哥」由動域科技股份有限公司(Dongyu Tech)開發。",
        // 產品頁還沒寫(/products/heymybro 目前導去 404),返回連結先指回產品列表
        back: { href: "/products", label: "返回產品列表" },
        eyebrow: "帳戶刪除",
        appLine: "欸! 粗哥 —— 由動域科技股份有限公司(Dongyu Tech)開發",
        intro:
          "您可以隨時要求刪除「欸! 粗哥」帳戶及其關聯資料。目前 App 內尚未提供自助刪除按鈕,請以電子郵件提出申請;我們以「寄件人信箱」驗證身分,因此請務必使用您登入時使用的 Google 帳號信箱來信。",
        stepsTitle: "申請刪除帳戶的步驟",
        steps: [
          {
            title: "以登入用的 Google 帳號信箱寄信",
            body: `請用您登入「欸! 粗哥」時使用的 Google 帳號電子郵件信箱,寄信到 ${SUPPORT_EMAIL}。以其他信箱寄出的申請無法驗證身分,恕無法受理。`,
          },
          { title: `主旨填寫「${HEYMYBRO_SUBJECT}」` },
          {
            title: "等待我們回覆確認",
            body: "我們會在收到申請後 30 天內完成身分確認與刪除,並以電子郵件通知您處理結果。",
          },
        ],
        buttonLabel: "寄信申請刪除帳戶",
        mailBody: `我要求刪除我的「欸! 粗哥」帳戶及其關聯資料。

登入信箱:(即本封信的寄件信箱)
應用程式:欸! 粗哥(動域科技股份有限公司)

我了解此操作無法復原。`,
        deletedTitle: "會被刪除的資料",
        deletedIntro: "申請完成後,以下資料會從我們的後端永久刪除:",
        deleted: [
          "帳號資料 —— Google 帳號的電子郵件地址與識別碼、使用者識別碼(UUID)",
          "個人檔案 —— 使用者代號(handle)、顯示名稱、大頭貼、性別、生日、自我介紹",
          "好友(bro)關係,以及您替好友設定的名稱",
          "由您建立的揪團,及其中的消費、分攤與結清紀錄",
          "債務協商紀錄 —— 標題、金額、還款紀錄與拒絕理由",
          "尚未到期的揪團邀請碼與分享 token",
        ],
        keptTitle: "會保留的資料與保留期限",
        kept: [
          {
            title: "其他成員帳本中的分帳紀錄",
            body: "共享揪團中您參與過的消費,同時存在於其他成員的帳本裡 —— 那是他們自己的財務紀錄,不會因您刪除帳號而消失。刪除後這些紀錄不再連結到您的個人檔案。",
          },
          {
            title: "法令要求保存的紀錄",
            body: "依會計、稅務或其他法令應保存者,保留至法定期間屆滿(一般為 5 年)後刪除。",
          },
          {
            title: "客服往來信件",
            body: "您的刪除申請信與我們的回覆,將保留至多 12 個月作為處理紀錄,期滿後刪除。",
          },
          {
            title: "備份檔",
            body: "加密備份以 30 天為週期輪替,因此殘留副本最遲於刪除後 30 天內一併消失,期間不作其他用途。",
          },
        ],
        localTitle: "留在您手機上的資料",
        localBody:
          "揪團、消費與分帳明細、個人記帳、好友清單快取與 App 設定儲存在您手機的本機資料庫中,不受伺服器端刪除影響。請於系統設定中清除本 App 的資料,或直接解除安裝「欸! 粗哥」。",
        noteTitle: "送出申請前請注意",
        noteBody:
          "帳戶刪除無法復原,分帳與個人記帳的歷史紀錄刪除後即無法還原。若您想保留紀錄,請先於 App 內以分享功能匯出。刪除帳戶後,您的使用者代號將無法再被搜尋到,原本的 bro 也會立即失去讀取您個人檔案的權限。",
        privacy: {
          prefix: "關於我們蒐集哪些資料、如何處理,完整說明請見 ",
          label: "「欸! 粗哥」隱私權政策",
          href: "/products/heymybro/privacy",
        },
      },
      en: {
        title: "Delete Your Hey! My Bro Account",
        description:
          "How to request deletion of your Hey! My Bro account and associated data. Hey! My Bro is developed by DongYu Technology Co., Ltd. (Dongyu Tech).",
        back: { href: "/products", label: "Back to products" },
        eyebrow: "Account Deletion",
        appLine:
          "Hey! My Bro — developed by DongYu Technology Co., Ltd. (Dongyu Tech)",
        intro:
          "You can ask us to delete your Hey! My Bro account and the data associated with it at any time. There is no in-app deletion button yet, so requests are handled by email: we verify your identity from the address the request is sent from, which is why it must come from the Google account email you sign in with.",
        stepsTitle: "How to request deletion",
        steps: [
          {
            title: "Send an email from the Google account you sign in with",
            body: `Email ${SUPPORT_EMAIL} from the Google account email address you use to sign in to Hey! My Bro. Requests sent from any other address cannot be verified and will not be processed.`,
          },
          { title: `Use the subject line “${HEYMYBRO_SUBJECT}”` },
          {
            title: "Wait for our confirmation",
            body: "We confirm your identity and complete the deletion within 30 days of receiving your request, and email you when it is done.",
          },
        ],
        buttonLabel: "Email us to delete my account",
        mailBody: `Please delete my Hey! My Bro account and its associated data.

Sign-in email: (this email address)
App: Hey! My Bro (Dongyu Tech)

I understand this action is irreversible.`,
        deletedTitle: "Data that is deleted",
        deletedIntro:
          "When your request is completed, the following is permanently deleted from our backend:",
        deleted: [
          "Account data — Google account email address and identifier, user identifier (UUID)",
          "Profile — handle, display name, avatar, gender, date of birth, bio",
          "Bro (friend) relationships and the names you gave your bros",
          "Groups you created, together with their expenses, splits, and settlement records",
          "Debt negotiation records — title, amount, repayments, and decline reasons",
          "Unexpired group invite codes and share tokens",
        ],
        keptTitle: "Data that is kept, and for how long",
        kept: [
          {
            title: "Split records in other members' ledgers",
            body: "Expenses you took part in inside a shared group also exist in the other members' ledgers — those are their own financial records and do not disappear when you delete your account. After deletion they are no longer linked to your profile.",
          },
          {
            title: "Records required by law",
            body: "Where accounting, tax, or other legal obligations require retention, the relevant records are kept for the statutory period (generally up to 5 years) and then deleted.",
          },
          {
            title: "Support correspondence",
            body: "Your deletion request email and our reply are kept for up to 12 months as proof that the request was handled, then deleted.",
          },
          {
            title: "Backups",
            body: "Encrypted backups are rotated on a 30-day cycle, so residual copies disappear no later than 30 days after deletion. They are not used for any other purpose.",
          },
        ],
        localTitle: "Data on your phone",
        localBody:
          "Groups, expense and split details, personal expense records, cached bro lists, and app settings live in a local database on your phone and are not touched by a server-side deletion. Remove them by clearing the app's data in your system settings, or by uninstalling Hey! My Bro.",
        noteTitle: "Before you send the request",
        noteBody:
          "Account deletion is irreversible: split and personal expense history cannot be restored afterwards. If you want to keep your records, export them from the app with the share function first. Once your account is deleted, your handle can no longer be found in search, and your bros immediately lose access to your profile.",
        privacy: {
          prefix:
            "For full details on what we collect and how we handle it, see the ",
          label: "Hey! My Bro privacy policy",
          href: "/products/heymybro/privacy/en",
        },
      },
    },
  },
  {
    // 譯護還在原型驗證階段,也還沒有隱私權政策頁 —— 資料清單先寫概括版本,
    // 等條文定稿再依條文細列(屆時記得補上 privacy 連結)。
    slug: "easycare",
    subject: EASYCARE_SUBJECT,
    copy: {
      "zh-tw": {
        title: "刪除譯護 EasyCare 帳戶",
        description:
          "如何要求刪除譯護 EasyCare 的帳戶及關聯資料。譯護 EasyCare 由動域科技股份有限公司(Dongyu Tech)開發。",
        back: { href: "/products/easycare", label: "返回譯護 EasyCare" },
        eyebrow: "帳戶刪除",
        appLine: "譯護 EasyCare —— 由動域科技股份有限公司(Dongyu Tech)開發",
        intro:
          "您可以隨時要求刪除譯護 EasyCare 帳戶及其關聯資料。目前服務內尚未提供自助刪除按鈕,請以電子郵件提出申請;我們以「寄件人信箱」驗證身分,因此請務必使用您註冊或登入時使用的信箱來信。",
        stepsTitle: "申請刪除帳戶的步驟",
        steps: [
          {
            title: "以註冊或登入用的信箱寄信",
            body: `請用您註冊譯護 EasyCare 時使用的電子郵件信箱,寄信到 ${SUPPORT_EMAIL};若您是以 Google 登入,請使用該 Google 帳號的信箱。以其他信箱寄出的申請無法驗證身分,恕無法受理。`,
          },
          { title: `主旨填寫「${EASYCARE_SUBJECT}」` },
          {
            title: "等待我們回覆確認",
            body: "我們會在 15 日內回覆;完成身分確認後,將於 30 日內刪除您的帳戶與相關資料,並以電子郵件通知您處理結果。",
          },
        ],
        buttonLabel: "寄信申請刪除帳戶",
        mailBody: `我要求刪除我的譯護 EasyCare 帳戶及其關聯資料。

註冊/登入信箱:(即本封信的寄件信箱)
服務:譯護 EasyCare(動域科技股份有限公司)

我了解此操作無法復原。`,
        deletedTitle: "會被刪除的資料",
        deletedIntro: "申請完成後,以下資料會從我們的後端永久刪除:",
        deleted: [
          "帳號資料 —— 電子郵件地址、使用者識別碼(UUID);以 Google 登入者另含 Google 帳號識別碼",
          "個人檔案與偏好設定 —— 顯示名稱、身分別、使用語言等",
          "您在譯護 EasyCare 中建立的內容與紀錄",
          "您與其他使用者、家庭或合作仲介之間的綁定關係",
        ],
        keptTitle: "會保留的資料與保留期限",
        kept: [
          {
            title: "對方帳戶中留存的往來內容",
            body: "您與他人往來的內容同時存在於對方的帳戶裡 —— 那是對方自己的紀錄,不會因您刪除帳戶而消失。刪除後這些內容不再連結到您的個人檔案。",
          },
          {
            title: "法令要求保存的紀錄",
            body: "依會計、稅務或其他法令應保存者,保留至法定期間屆滿(一般為 5 年)後刪除。",
          },
          {
            title: "客服往來信件",
            body: "您的刪除申請信與我們的回覆,將保留至多 12 個月作為處理紀錄,期滿後刪除。",
          },
          {
            title: "備份檔",
            body: "加密備份以 30 天為週期輪替,因此殘留副本最遲於刪除後 30 天內一併消失,期間不作其他用途。",
          },
        ],
        localTitle: "留在您裝置上的資料",
        localBody:
          "登入狀態、語言與介面偏好等設定存放在您的裝置上(瀏覽器儲存區或 App 本機),不受伺服器端刪除影響。請於瀏覽器清除本站資料,或於系統設定中清除 App 的資料、直接解除安裝。",
        noteTitle: "送出申請前請注意",
        noteBody:
          "帳戶刪除無法復原,您在服務中建立的內容刪除後即無法還原。刪除帳戶後,您與家庭、看護或仲介之間的綁定關係會一併解除,對方將無法再透過譯護與您聯繫。",
      },
      en: {
        title: "Delete Your EasyCare Account",
        description:
          "How to request deletion of your EasyCare account and associated data. EasyCare is developed by DongYu Technology Co., Ltd. (Dongyu Tech).",
        back: { href: "/products/easycare", label: "Back to EasyCare" },
        eyebrow: "Account Deletion",
        appLine:
          "EasyCare — developed by DongYu Technology Co., Ltd. (Dongyu Tech)",
        intro:
          "You can ask us to delete your EasyCare account and the data associated with it at any time. There is no in-service deletion button yet, so requests are handled by email: we verify your identity from the address the request is sent from, which is why it must come from the address you signed up or signed in with.",
        stepsTitle: "How to request deletion",
        steps: [
          {
            title: "Send an email from the address you signed up with",
            body: `Email ${SUPPORT_EMAIL} from the address you used to register for EasyCare; if you signed in with Google, use that Google account's address. Requests sent from any other address cannot be verified and will not be processed.`,
          },
          { title: `Use the subject line “${EASYCARE_SUBJECT}”` },
          {
            title: "Wait for our confirmation",
            body: "We reply within 15 days. Once your identity is confirmed, the account and its data are deleted within 30 days, and we email you when it is done.",
          },
        ],
        buttonLabel: "Email us to delete my account",
        mailBody: `Please delete my EasyCare account and its associated data.

Registered / sign-in email: (this email address)
Service: EasyCare (Dongyu Tech)

I understand this action is irreversible.`,
        deletedTitle: "Data that is deleted",
        deletedIntro:
          "When your request is completed, the following is permanently deleted from our backend:",
        deleted: [
          "Account data — email address, user identifier (UUID), and for Google sign-in the Google account identifier",
          "Profile and preferences — display name, role, language",
          "Content and records you created in EasyCare",
          "Links between your account and other users, families, or partner agencies",
        ],
        keptTitle: "Data that is kept, and for how long",
        kept: [
          {
            title: "Exchanges kept in other people's accounts",
            body: "Content you exchanged with others also exists in their accounts — those are their own records and do not disappear when you delete your account. After deletion it is no longer linked to your profile.",
          },
          {
            title: "Records required by law",
            body: "Where accounting, tax, or other legal obligations require retention, the relevant records are kept for the statutory period (generally up to 5 years) and then deleted.",
          },
          {
            title: "Support correspondence",
            body: "Your deletion request email and our reply are kept for up to 12 months as proof that the request was handled, then deleted.",
          },
          {
            title: "Backups",
            body: "Encrypted backups are rotated on a 30-day cycle, so residual copies disappear no later than 30 days after deletion. They are not used for any other purpose.",
          },
        ],
        localTitle: "Data on your device",
        localBody:
          "Sign-in state, language, and interface preferences are stored on your device (browser storage or local app storage) and are not touched by a server-side deletion. Clear this site's data in your browser, or clear the app's data in your system settings or uninstall it.",
        noteTitle: "Before you send the request",
        noteBody:
          "Account deletion is irreversible: the content you created in the service cannot be restored afterwards. Deleting your account also removes the links between you and the families, caregivers, or agencies you were connected to, and they can no longer reach you through EasyCare.",
      },
    },
  },
];
