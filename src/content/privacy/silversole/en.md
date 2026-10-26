# SilverSole App Privacy Policy

**Last updated: October 27, 2026**\
**Effective date: October 27, 2026**

> This is the English translation of the SilverSole privacy policy. In the event of any discrepancy, the [Traditional Chinese version](/products/silversole/privacy) shall prevail.

---

## 1. About This Policy

DongYu Technology Co., Ltd. (動域科技股份有限公司, hereinafter "the Company", "we", "us") respects and protects your personal data. This policy explains how we collect, process, use, and safeguard your personal data when you use the **SilverSole mobile application** (the "App").

**Scope**

- This policy applies **only to the SilverSole mobile application** (Android / iOS).
- This policy does **not** apply to: the Company's website, the independent privacy policies of third-party services (Google, GitHub, etc.), or any other application you choose to send exported files to from within the App.

By downloading, installing, or using the App, you confirm that you have read and agree to this policy. If you do not agree, please discontinue use of the App.

---

## 2. Data Controller and Contact

| Item | Details |
| --- | --- |
| Company | DongYu Technology Co., Ltd. (動域科技股份有限公司) |
| Business registration no. | 62134975 |
| Registered address | 1F., No. 33, Dade Rd., Sanxia Dist., New Taipei City 237021, Taiwan |
| Privacy contact email | contact@dongyu.company |
| Support phone | +886 967-030-336 |

---

## 3. Data We Collect

### 3.1 Data you provide

| Category | Items | When collected |
| --- | --- | --- |
| Account identifiers | Email address, password (email sign-up only) | Sign-up and sign-in |
| Third-party sign-in data | Sign in with Google: the email address, name, and profile picture URL provided by Google. Sign in with Apple: the email address provided by Apple (which may be an Apple private relay address); the App does not request your name from Apple | When you choose to sign in with Google or Apple |
| Friend profile | Nickname (optional; "銀足朋友" ("SilverSole Friend") is shown if left blank), a default avatar or a profile photo you upload, a system-assigned 8-digit friend code, whether you appear in organization member lists | When you use the friends feature or edit your profile |
| Friend and organization relationships | Friends list, friend requests (expire if not answered within 7 days), block list, organizations you join (such as community care centers or day-care centers) | When you add friends, respond to requests, block someone, or join an organization |
| Reports | The reported nickname or photo, the reason for the report | When you report another user |
| Device binding data | Smart insole Device ID, device nickname | When pairing or binding a device |
| Preferences | Role (caregiver / wearer), transmission method, dark mode, theme, language | When you change settings |

> Email sign-up requires **only an email address and a password**; a nickname and profile photo are optional, and every feature works without them. We do not ask for your national ID, date of birth, or phone number. Passwords are stored as one-way hashes by our backend provider; the Company cannot recover your plaintext password.

### 3.2 Data received from the smart insole

Over a Bluetooth Low Energy (BLE) connection, the App receives the following from the insole:

| Category | Items |
| --- | --- |
| Inertial sensor data | Tri-axis acceleration (ax / ay / az), tri-axis angular velocity (gx / gy / gz), pitch, roll |
| Plantar pressure data | Pressure values per sensing point, aggregate pressure |
| Wear and activity state | Whether the insole is being worn, activity timestamps |
| Device health | Battery percentage, charging state, heartbeat timestamps |
| Event data | Fall-detection trigger signals |
| Bluetooth connection info | Bluetooth device name, Bluetooth address / remote ID, signal strength |

> **Important**: Plantar pressure, gait, and fall-detection data may be considered health-related data. We process it only for the purposes described in this policy. **The App is a lifestyle and record-keeping aid, not a medical device. Its readings must not be used as the sole basis for medical diagnosis, treatment, or emergency response.**

### 3.3 Location data

| Purpose | Description | Leaves your phone? |
| --- | --- | --- |
| Show your current position on the map | The App requests your current coordinates from the operating system when you tap "locate" on the map screen or configure a safe zone. The App obtains your location only while you have the map open and never tracks your location in the background | **No.** Used on-device only; not uploaded, not stored |
| Show the insole's location | The App reads location records (latitude, longitude, accuracy, timestamp) associated with your device from the backend | Provided by the backend; the App only reads and displays them |

### 3.4 Automatically generated technical data

| Category | Description |
| --- | --- |
| Session and authentication data | Access token, user identifier (UUID) |
| Update checks | Android builds installed from Google Play check for and install updates through Google Play. iOS builds are updated through the App Store / TestFlight. Only Android builds **not** installed from Google Play query GitHub for new releases; that request exposes your IP address and User-Agent to GitHub |
| Firmware updates | The App downloads insole firmware version information and update files from the Company's cloud storage (Supabase) and updates the insole firmware over Bluetooth. No personal data is uploaded in this process |
| Error and diagnostic logs | Kept locally on your phone for debugging only; not automatically transmitted to the Company |

### 3.5 Friends and who can see your data

You can add friends by QR code, by friend code, or through an organization you both belong to. The friends feature exchanges **profiles only**; it does **not** share your insole measurements, plantar pressure, gait, fall events, or location.

| Who | What they can see |
| --- | --- |
| Your friends | Your nickname and profile photo (or the default avatar if you have not uploaded one) |
| Other members of the same organization (not friends) | Your nickname and default avatar (**not your photo**); you can turn off "Show in organization lists" in your profile |
| Anyone who scans your QR code or enters your friend code | Your nickname and default avatar, so they can confirm whether to add you |
| People you have blocked | They cannot see you and cannot invite you again |

Profile photos are resized on your phone before upload (512 pixels on the longest side) and stored in non-public cloud storage. Only you and your friends can read them, through short-lived links.

To keep the community safe, you can report inappropriate nicknames or photos and block other users. Reported users are not told who reported them. Company staff review reports and may remove offending nicknames or photos and suspend the ability to upload photos.

---

## 4. Purposes of Collection and Use

We collect and use your personal data for the following specific purposes:

| Purpose | Description |
| --- | --- |
| Account management and authentication | Creating your account, signing in (including Sign in with Google and Sign in with Apple), maintaining sessions, password reset |
| Device connection and binding | Scanning, pairing, and connecting the smart insole; remembering your preferred device |
| Core functionality | Real-time gait and pressure charts, battery and connection status, fall alerts, activity statistics and analytics |
| Location and safe-zone features | Displaying device location and safe-zone boundaries on the map |
| Friends and social interaction | Letting you add family, friends, or organization members as friends and showing each other's nicknames and avatars |
| Community safety and report handling | Reviewing reports, removing violating content, limiting abuse (for example, daily caps on lookups, invitations, and uploads) |
| Service operation and improvement | Troubleshooting, bug fixing, delivering update notifications |
| Legal compliance | Responding to lawful requests from competent authorities |

**We do not** sell, rent, or trade your personal data to third parties, and we do not use your sensor data for undisclosed marketing or advertising.

---

## 5. Permissions

| Permission | Why it is needed | If you decline |
| --- | --- | --- |
| Bluetooth (scan / connect) | Discover and connect to the smart insole | The device cannot connect; all live features are unavailable |
| Location (precise / approximate) | (1) Required by the OS for Bluetooth scanning on Android 11 and below; (2) showing your position on the map and setting safe zones | Map positioning is unavailable; on some Android versions Bluetooth scanning will not work |
| Camera | (1) Scanning a friend's or organization's QR code; (2) taking a profile photo; (3) the mini-games' "camera mode", which lets users without an insole play with body movements. Game footage is processed in real time on your phone only — **never recorded or uploaded** | You cannot scan QR codes (you can still enter a code), cannot take a profile photo (you can still pick one from your photos), and games fall back to on-screen buttons |
| Photos | Picking a profile photo from your library; the App reads only the one photo you select | You cannot choose a profile photo from your library (the default avatar remains available) |
| Notifications | Ongoing Bluetooth connection notice, fall and anomaly alerts | You will not receive alerts |
| Foreground service (Android) | Keeps the insole's Bluetooth connection alive while the App is in the background or the screen is locked | The connection drops when you leave the App, producing gaps in your records |
| Network access | Reaching the backend, loading maps and mini-games, checking for updates | Only offline features remain usable |
| File access / sharing | Exporting your recorded sessions as a JSON file via the system share sheet | You cannot export data |

You may revoke any of these permissions at any time in your device settings. Revocation stops the corresponding feature but does not affect the lawfulness of processing carried out beforehand.

---

## 6. Storage and Retention

### 6.1 Stored on your phone

The following is kept on your device only and is never uploaded automatically:

- App settings (role, dark mode, theme, transmission method, language)
- Paired Bluetooth device list and preferred device
- A rolling buffer of recent live sensor samples (cleared when the App closes)
- The fall-event counter (valid for the current App session only; reset on restart)
- The result level and date of your most recent foot check (kept on your phone only, for display on the home screen)
- Local storage created by the mini-game web pages inside the in-app WebView

**How to delete**: clear the App's data in your system settings, or uninstall the App.

### 6.2 Stored on our backend

| Data | Retention |
| --- | --- |
| Account data (email, hashed password, UUID, data provided by third-party sign-in) | For the life of the account. **Deleted immediately** when you delete your account in the App; system backups rotate out within 30 days |
| Friend profile, profile photo, friendships, requests, blocks, organization memberships | For the life of the account; deleted immediately together with your account |
| Reports | Up to 12 months after the report is resolved. If you delete your account, reports you filed are kept with your identity removed; reports filed against you are deleted |
| Device status and heartbeat records | 12 months |
| Measurement and activity records | 12 months |
| Location records | 3 months |

Measurement, device status, and location records are stored under the insole's Device ID, not under your account. When you delete your account, we unbind the insole from your account, so these records are no longer associated with you, and they are deleted when the retention periods above expire. If you would like them deleted sooner, please email the privacy contact.

Once the retention period expires, the purpose of collection ceases, or you exercise your right to erasure, we delete, destroy, or anonymize your personal data, unless retention is required by law.

---

## 7. Third-Party Services

The App integrates the following third-party services, each governed by its own privacy policy, which we encourage you to review:

| Service | Provider | Purpose | Data it may receive |
| --- | --- | --- | --- |
| Supabase | Supabase Inc. | Authentication, database, backend functions | Email, hashed password, friend profiles and profile photos, device data, measurement and location records, connection IP |
| Sign in with Google | Google LLC | Signing in with a Google account (optional) | Your Google account's email address, name, and profile picture |
| Sign in with Apple | Apple Inc. | Signing in with an Apple account (optional, iOS) | Your Apple ID email address or private relay address |
| Google Maps Platform | Google LLC | Map tiles and rendering | Map viewport coordinates, device and network information |
| Cloudflare | Cloudflare, Inc. | Hosting of the in-app HTML5 mini-games | IP address, browser information |
| Google Play / App Store | Google LLC / Apple Inc. | Installing and updating the App | As set out in each store's policies |
| GitHub | GitHub, Inc. (Microsoft) | Checking for and downloading App updates | IP address, User-Agent |

The App contains **no** third-party advertising SDKs or behavioral tracking SDKs, and it does not track you across other companies' apps or websites. Sign in with Google and Sign in with Apple are used only to verify your identity.

### In-app web content and mini-games

The App embeds HTML5 mini-games in a WebView. These pages may store local data such as game progress in your browser storage. While a game is running, the App forwards the insole's live motion signal to the game page for control input; that signal stays on your device.

---

## 8. Disclosure and International Transfers

We disclose your personal data only in the following circumstances:

1. **With your consent or at your initiative** — for example, when you use the share feature to export a recording and send it to an app or recipient you choose. Once exported, the file is under your control; the Company can neither track nor recall it.
2. **Service providers** — the cloud providers listed in Section 7, who are required to process data only as necessary to provide their service.
3. **Legal requirements** — lawful requests from courts, prosecutors, or competent authorities.
4. **Corporate transactions** — in a merger, acquisition, or reorganization, with prior notice to you by appropriate means.

**International transfers**: the servers of the above providers may be located outside Taiwan (for example, in the United States or Singapore). By using the App, you understand and agree that your data may be transferred to, processed, and stored abroad. We require our processors to apply protections no lower than those set out in this policy.

---

## 9. Security Measures

- All communication between the App and our backend is encrypted with **HTTPS / TLS**.
- The backend database enforces **Row Level Security**, so each user can access only their own records.
- Passwords are stored as **one-way hashes**; Company personnel cannot view your plaintext password.
- Access tokens are kept in the App's private storage area provided by the operating system.

Although we apply reasonable technical and organizational measures, no transmission over the internet can be guaranteed to be absolutely secure. Please keep your credentials safe and do not share them.

---

## 10. Your Rights

Under Taiwan's Personal Data Protection Act (and, where applicable, comparable laws in your jurisdiction), you may:

1. **Inquire about or request access to** your personal data
2. **Request a copy** of it
3. **Request correction or supplementation**
4. **Request that we cease collecting, processing, or using it**
5. **Request its deletion**

You may also at any time:

- Change your preferences and bound devices inside the App.
- Change or clear your nickname and profile photo, choose whether you appear in organization lists, and block or unblock other users inside the App.
- Revoke any permission in your system settings.
- **Delete your account:** you can do this at any time in the App — open the **Person** page and tap **Delete account**. Once you confirm, your account, friend profile, profile photo, and friendships are deleted immediately and your insole is unbound. This cannot be undone. If you cannot use the App, you may instead email the privacy contact in Section 2; we will complete the request within 30 days of verifying your identity.

We will respond within **15 days** of receiving your request (extendable once by a further 15 days, with reasons given). We may need to verify your identity before acting, to prevent unauthorized access to your data.

If you believe our handling of your data violates data protection law, you have the right to lodge a complaint with the competent supervisory authority.

---

## 11. Children and Minors

The App is not designed for children under the age of 12. If a minor uses the App, a parent or legal guardian should read and accept this policy and supervise that use. If we learn that we have collected a minor's personal data without the required consent, we will delete it promptly.

If the App is used to care for an elderly person or another person under care, please ensure you have that person's consent — or their legal guardian's — before binding a device and viewing their data.

---

## 12. Changes to This Policy

We may revise this policy in response to legal changes, new features, or technical updates. Revisions will be published in the App and on the Company's website, and the "Last updated" date above will change. For material changes — such as new categories of data or new purposes of use — we will notify you separately by in-app notice or email and, where required, seek your consent again.

---

## 13. Contact Us

For questions or comments about this policy, or to exercise any of the rights in Section 10, please contact us:

**DongYu Technology Co., Ltd. (動域科技股份有限公司)**\
Privacy contact: contact@dongyu.company\
Address: 1F., No. 33, Dade Rd., Sanxia Dist., New Taipei City 237021, Taiwan\
Phone: +886 967-030-336
