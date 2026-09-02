# Hey! My Bro — Privacy Policy

> 繁體中文版本：[欸! 粗哥 隱私權政策](/products/heymybro/privacy)

**Effective date: 31 August 2026**\
**Last updated: 31 August 2026**

---

## 1. Who we are

"Hey! My Bro" (the "App", Android package `com.dongyutech.heymybro`) is a bill-splitting and expense-tracking app for groups of friends.

|                 |                                                    |
| --------------- | -------------------------------------------------- |
| Data controller | Dongyu Technology Co., Ltd. (動域科技股份有限公司) |
| Contact         | contact@dongyu.company                             |

This policy explains what the App collects, why, where it is stored, who can see it, and what you can do about it.

---

## 2. Scope

This policy covers the Hey! My Bro mobile app and its backend service. When you use the App's share feature, the content is handed to another app you pick yourself (LINE, Messages, email, and so on). Once handed over, it is governed by that app's privacy policy, not ours.

---

## 3. What we collect

### 3.1 Information you give us

**When you create an account (via Google Sign-In)**

- Your Google account **email address** and **user identifier**, used to authenticate you and create your account
- Your Google **display name** and **profile picture URL**, used to seed your profile

Sign-in works through a Google ID token. We never receive, and cannot access, your Google password.

**Your profile (some required, some entirely optional)**

| Field | Required? | Notes |
| --- | --- | --- |
| Handle | Required | 3–20 letters, digits or underscores; unique; the only way others can find you |
| Display name | Required | Seeded from your Google name; you can change it |
| Avatar | Optional | Your Google picture, or one you choose yourself |
| Gender | Optional | Male / female / other / prefer not to say |
| Birthday | Optional | Stored as a date, not an age |
| Bio | Optional | Up to 200 characters |

**Content you enter while using the App**

- **Gatherings / groups**: name, cover colour, member list
- **Expenses**: item title, amount (whole TWD), who paid, each person's share
- **Personal entries**: item title, amount
- **Your bro list**: their account, and the name you give them
- **Debt negotiations**: title, amount, repayment amount, and any reason you type when rejecting a proposal
- **Settlements**: who paid whom, how much, and when

### 3.2 Information generated automatically

- **Identifiers and timestamps**: a UUID per record, plus creation, update and deletion times
- **Invite codes and share tokens**: generated server-side with a cryptographically secure random number generator, and time-limited (gathering invites expire after 7 days by default)
- **Credit score**: computed **on your device**, live, from repayment history inside the App. It is not a stored rating and is never sent to any credit bureau or third party.
- **App settings**: theme mode, language, accent colour — stored locally on your device

### 3.3 What we do **not** collect

- Precise or approximate location
- Your contacts or address book
- Your photo library or device files
- Payment information, card numbers, or bank accounts
- Advertising identifiers
- Usage analytics, event tracking, or crash reports

The App ships with **no analytics, advertising, or crash-reporting SDK of any kind**.

---

## 4. Where your data lives

The App stores data in two places:

### 4.1 On your device (local database)

The following is stored in a SQLite database on your phone: gatherings, members, expenses and their splits, personal entries, your bro list (including a cached copy of their name, handle and avatar URL), settlements, debt negotiations, plus your App settings and plan status.

On Android the App explicitly disables system backup (`allowBackup=false`), so this financial database **cannot be pulled out by Android auto-backup or `adb backup`**.

### 4.2 On our servers (Supabase)

Data that has to sync across devices and between people — your account, profile, shared gatherings and expenses, friendships and debt negotiations — is stored in our hosted Supabase (PostgreSQL) database.

|                 |                                              |
| --------------- | -------------------------------------------- |
| Provider        | Supabase Inc.                                |
| Database region | **Tokyo, Japan (`ap-northeast-1`)**          |
| Transport       | All connections use HTTPS / TLS              |
| Access control  | Row Level Security is enabled on every table |

---

## 5. Who can see your data

This is the most important section in a bill-splitting app. The rules below are enforced in the database itself, not merely in the app's UI:

**Your profile (display name, avatar, gender, birthday, bio) is readable by exactly three kinds of people:**

1. **You**
2. **Your bros** — people you and they have both agreed to
3. **Members of a gathering you are in**

No other signed-in user can read your profile.

**Search is deliberately narrow.** Someone can only find you by typing your **exact handle**. There is no prefix search and no fuzzy matching, at most one result is ever returned, and the returned fields are limited to handle, display name and avatar. This exists to stop anyone enumerating the user base one keystroke at a time. **Your gender, birthday and bio never appear in a search result.**

**Everything inside a shared gathering is visible to everyone in that gathering** — item titles, amounts, who paid, and each person's share. Please don't put anything in an item title that you wouldn't want the group to read.

**A debt negotiation is visible only to the two people involved**, including its amount, title and rejection reason.

**Your bro list, personal entries and private notes stay private** — not even the friend on that list can see the name you gave them or the personal entries you keep.

**We do not sell, rent, or share your data with third parties for marketing.** We disclose data only where legally required, in response to a valid order from a court or competent authority, or where urgently necessary to protect someone's physical safety.

---

## 6. Device permissions

| Permission | When it's requested | Why |
| --- | --- | --- |
| **Camera** | When you tap to scan a bro's QR code | To read the QR code. The image is **decoded on-device in real time; it is never stored and never uploaded** |
| **Internet** | Always | Sign-in, syncing, and font downloads |

While showing your own QR code, the App temporarily raises the screen brightness so it can be scanned. This needs no permission and does not change your system settings.

---

## 7. Third-party services

| Service | Purpose | What it sees |
| --- | --- | --- |
| **Google Sign-In** | Authenticating you | Your Google email, identifier, name and avatar URL |
| **Supabase** | Hosted database and auth (Tokyo) | The server-side data listed in section 4.2 |
| **Google Fonts** | Downloading the App's typefaces | Your IP address (unavoidably attached to a font request) |
| **OS share sheet** | When you share an invite link or a repayment reminder | Only the text you chose to share, and only with the app you picked |

Each of these is governed by its own privacy policy.

---

## 8. About paid features

The App's PRO status is currently just **a local flag stored on your device**. No payment processor or in-app purchase system is connected yet, so we **do not collect, process, or store any payment data**. If Google Play Billing or another payment service is added later, we will update this policy and tell you before it takes effect.

---

## 9. Data retention and deletion

**Soft delete and the recycle bin.** When you delete a gathering, expense, personal entry or bro, it moves to the App's recycle bin, where you can restore it. Items in the recycle bin **do not expire on their own** — they stay until you permanently delete them or empty the bin. Permanent deletion removes the record from your device, and the corresponding server-side record is deleted with it.

**Settled shared records.** To keep the books correct, once a gathering has a settlement recorded, its individual expenses can no longer be edited or deleted — otherwise the two sides' ledgers would disagree. You can still move the whole gathering to the recycle bin.

**Account deletion.** The App does not yet have a "delete account" button. To delete your account and all associated server-side data, email **contact@dongyu.company**. We will complete the deletion **within 30 days** of your request. Deleting your account removes your profile, friendships, debt negotiations, and the gatherings you created.

> Please note: expenses you took part in inside a shared gathering also exist in other members' ledgers. Deleting your account removes your identity information, but the split amounts each of them retains do not disappear — those are their own financial records.

---

## 10. Your rights

At any time you can:

- **View and correct** your profile (Account → Edit profile in the App)
- **Delete** any record you created (recycle bin → permanent delete)
- **Sign out**, disconnecting this device from your account
- **Request a copy** of your data, or **request deletion** of your account — email contact@dongyu.company
- **Remove a bro**, which immediately revokes their access to your profile

If you are in the European Economic Area, the United Kingdom, or another jurisdiction with comparable rules, you additionally have the right to object to or restrict processing and to lodge a complaint with your local data protection authority. Users in Taiwan have the rights to inquire, review, copy, correct, halt processing, and delete under Article 3 of the Personal Data Protection Act.

We respond to requests **within 30 days**.

---

## 11. Children's privacy

The App is not designed for children **under 13**, and we do not knowingly collect their personal data. If you are a parent or guardian and believe your child has given us personal data without your consent, contact us and we will delete it promptly.

---

## 12. International data transfers

Our servers are located in **Tokyo, Japan**. If you use the App from another country, your data is transferred to and stored and processed in Japan. By using the App you understand and agree to this transfer.

---

## 13. Security

Concrete measures we take:

- All network connections use **HTTPS / TLS**
- **Row Level Security** is enabled on every database table, so access rules are enforced by the database itself rather than trusted to the client
- Invite codes and share tokens are always **minted server-side with a cryptographically secure RNG** and carry an expiry
- System backup is disabled on Android, so the local financial database cannot be extracted by external tools
- Debug logging is stripped from release builds
- **We never store your password** — authentication is handled entirely by Google

No system can be guaranteed perfectly secure, but we maintain these protections continuously.

---

## 14. Changes to this policy

If this policy changes, we will update the "Last updated" date at the top of this page. For material changes — new categories of collected data, or a new third-party service — we will notify you inside the App.

---

## 15. Contact us

For questions about this policy, or to exercise any of the rights above:

**Dongyu Technology Co., Ltd.**\
contact@dongyu.company

We respond **within 30 days**.
