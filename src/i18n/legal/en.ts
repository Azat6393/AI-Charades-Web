import type { LegalDictionary } from "../types";

export const en: LegalDictionary = {
  privacy: {
    metaTitle: "Privacy Policy — AI Charades",
    metaDescription: "How AI Charades collects, uses, and shares information on iOS and Android.",
    h1: "Privacy Policy for AI Charades",
    effectiveDate: "Effective date:",
    lastUpdated: "Last updated:",
    dateValue: "6 July 2026",
    intro: [
      `This Privacy Policy explains how AI Charades ("we", "us", "our") collects, uses, and shares information when you use the <strong>AI Charades</strong> mobile application (the "App") on Android and iOS.`,
      "By using the App you agree to the practices described in this policy. If you do not agree, please do not use the App.",
    ],
    contactLabel: "Contact:",
    appIdLabel: "App identifier:",
    sections: [
      {
        h2: "1. Summary (the short version)",
        body: [
          `<ul>
            <li>We do <strong>not</strong> ask you to create an account or give us your name or email to play.</li>
            <li>We use the <strong>microphone and speech recognition</strong> only during voice rounds, to turn what you say into text so the game can check your guess.</li>
            <li>The <strong>AI game mode</strong> sends game text (such as the category and generated words) to our server and to Google Gemini to generate content. It does <strong>not</strong> send your voice recordings.</li>
            <li>We use <strong>Google Firebase</strong> for analytics, crash reporting, and push notifications, and <strong>RevenueCat</strong> to manage subscriptions/in-app purchases.</li>
            <li>We do <strong>not</strong> sell your personal information.</li>
          </ul>`,
        ],
      },
      {
        h2: "2. Information we collect",
        body: [
          `<h3>2.1 Information you provide</h3>
          <p><strong>Game content and settings</strong> — categories you choose, custom words/categories you create, and preferences you set in the App. Custom words you create for AI rounds may be sent to our AI backend to generate gameplay.</p>`,
          `<h3>2.2 Microphone and speech input</h3>
          <p>When you use a <strong>voice round</strong>, the App accesses the <strong>microphone</strong> and uses the device's <strong>speech-recognition</strong> service (Apple Speech on iOS, Google/Android speech recognition on Android) to convert your spoken guess into text. Depending on your device and OS settings, this audio may be processed <strong>on-device</strong> or by the <strong>operating-system provider's</strong> speech service (Apple or Google) under their respective privacy policies. We do <strong>not</strong> record, store, or transmit your raw audio to our own servers. We only use the resulting text within the current game round.</p>`,
          `<h3>2.3 Information collected automatically</h3>
          <p>Through <strong>Google Firebase</strong> and platform services we may collect:</p>
          <ul>
            <li><strong>Analytics data</strong> (Firebase Analytics): app opens, screens viewed, game modes played, in-app events, session length, coarse country/region, device language.</li>
            <li><strong>Crash and diagnostic data</strong> (Firebase Crashlytics): crash stack traces, device model, OS version, app version, and diagnostic logs.</li>
            <li><strong>Device / technical identifiers</strong>: a Firebase installation ID, app-instance ID, and (for push) a Firebase Cloud Messaging token.</li>
            <li><strong>App integrity signals</strong> (Firebase App Check): a token attesting the request comes from a genuine, unmodified copy of the App (via Play Integrity on Android and App Attest on iOS). This is used to protect our backend from abuse.</li>
          </ul>`,
          `<h3>2.4 Purchase information</h3>
          <p><strong>Subscriptions and in-app purchases</strong> are processed by <strong>Apple App Store</strong> or <strong>Google Play</strong>, and managed through <strong>RevenueCat</strong>. We receive purchase status (e.g., whether you have an active "premium" entitlement), an anonymous RevenueCat app-user ID, and transaction metadata. <strong>We never receive or store your full payment-card details</strong> — those stay with Apple/Google.</p>`,
          `<h3>2.5 AI game-mode data</h3>
          <p>When you play the <strong>AI mode</strong>, game text (such as the selected category and the words generated for the round) is sent to our backend (<strong>Google Firebase Cloud Functions</strong>) and forwarded to <strong>Google Gemini</strong> to generate gameplay content. This text does not, by design, contain personal information unless you enter it yourself into a custom category or word.</p>`,
        ],
      },
      {
        h2: "3. How we use information",
        body: [
          `<p>We use the information above to:</p>
          <ul>
            <li>Provide and run the game, including AI-generated rounds and voice guessing.</li>
            <li>Manage your subscription and unlock premium features.</li>
            <li>Send optional push notifications (e.g., reminders, new content) — only if you grant notification permission.</li>
            <li>Understand how the App is used and improve features and performance (analytics).</li>
            <li>Diagnose crashes and fix bugs (crash reporting).</li>
            <li>Protect our backend from fraud, abuse, and automated attacks (App Check).</li>
          </ul>`,
        ],
      },
      {
        h2: "4. How we share information",
        body: [
          `<p>We share information only with service providers that help us operate the App:</p>
          <table>
            <thead>
              <tr><th>Provider</th><th>Purpose</th><th>Privacy policy</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Google Firebase (Analytics, Crashlytics, Cloud Messaging, App Check, Cloud Functions)</td>
                <td>Analytics, crash reporting, push, integrity, backend</td>
                <td><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">firebase.google.com/support/privacy</a></td>
              </tr>
              <tr>
                <td>Google / Apple platform speech services</td>
                <td>Speech-to-text for voice rounds</td>
                <td>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a> ·
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a>
                </td>
              </tr>
              <tr>
                <td>Google Gemini</td>
                <td>Generate AI game content</td>
                <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a></td>
              </tr>
              <tr>
                <td>RevenueCat</td>
                <td>Subscription / purchase management</td>
                <td><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">revenuecat.com/privacy</a></td>
              </tr>
              <tr>
                <td>Apple App Store / Google Play</td>
                <td>Payment processing</td>
                <td>
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a> ·
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>We do <strong>not</strong> sell your personal information, and we do <strong>not</strong> share it for cross-context behavioral advertising.</p>
          <p>We may disclose information if required by law, or to protect our rights, safety, or property, or that of our users.</p>`,
        ],
      },
      {
        h2: "5. Data retention",
        body: [
          `<ul>
            <li>We keep analytics and crash data for the retention periods offered by Firebase (typically up to 14 months for analytics, and a limited window for crash data).</li>
            <li>Purchase/entitlement records are retained for as long as needed to provide the service and to comply with tax/accounting obligations.</li>
            <li>AI request text may be retained transiently by us and by Google Gemini for processing and abuse prevention, per their policies.</li>
          </ul>`,
        ],
      },
      {
        h2: "6. Your choices and rights",
        body: [
          `<ul>
            <li><strong>Microphone / speech</strong>: You can decline or revoke microphone permission in your device settings. Voice rounds will not work without it, but the rest of the game will.</li>
            <li><strong>Notifications</strong>: You can disable push notifications in your device settings.</li>
            <li><strong>Analytics</strong>: You can limit ad/analytics tracking through your device's privacy settings (e.g., iOS "Allow Apps to Request to Track" and Android ad-settings).</li>
            <li><strong>Access / deletion</strong>: Because we do not require an account, we hold little to no data that identifies you personally. To request access to or deletion of any data associated with your installation, contact us at <a href="mailto:{supportEmail}">{supportEmail}</a>.</li>
          </ul>
          <p>Depending on where you live, you may have rights under the <strong>GDPR</strong> (EEA/UK) or <strong>CCPA/CPRA</strong> (California), including the right to access, correct, delete, or restrict processing of your personal data, and to lodge a complaint with a supervisory authority.</p>`,
        ],
      },
      {
        h2: "7. Children's privacy",
        body: [
          `<p>AI Charades is intended for a <strong>general audience</strong> and is not directed to children under 13. We do not knowingly collect personal information from children under that age. If you believe a child has provided us personal information, contact us and we will delete it.</p>`,
        ],
      },
      {
        h2: "8. International data transfers",
        body: [
          `<p>Our service providers may process and store information in countries other than the one in which you live, including the United States. Where required, we rely on appropriate safeguards (such as Standard Contractual Clauses) for these transfers.</p>`,
        ],
      },
      {
        h2: "9. Security",
        body: [
          `<p>We use industry-standard measures (including transport encryption and Firebase App Check) to protect information. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</p>`,
        ],
      },
      {
        h2: "10. Changes to this policy",
        body: [
          `<p>We may update this Privacy Policy from time to time. We will post the new version in the App and/or at this URL and update the "Last updated" date above. Material changes will be highlighted where practical.</p>`,
        ],
      },
      {
        h2: "11. Contact us",
        body: [
          `<p>If you have questions about this Privacy Policy or your data, contact:<br /><a href="mailto:{supportEmail}">{supportEmail}</a></p>`,
        ],
      },
    ],
  },
  terms: {
    metaTitle: "Terms of Service — AI Charades",
    metaDescription: "Terms of Service for the AI Charades mobile app on iOS and Android.",
    h1: "Terms of Service",
    lastUpdatedLabel: "Last updated:",
    dateValue: "6 July 2026",
    intro:
      `These Terms of Service ("Terms") govern your use of the <strong>AI Charades</strong> mobile application (the "App"). By downloading, installing, or using the App, you agree to these Terms. If you do not agree, please do not use the App.`,
    sections: [
      {
        h2: "1. The App",
        body: [`<p>AI Charades is a word-guessing game offering a solo AI-powered mode and an offline heads-up party mode. The App is free to download and play.</p>`],
      },
      {
        h2: "2. Acceptable use",
        body: [
          `<ul>
            <li>You will not use the App for any unlawful purpose or in a way that infringes the rights of others.</li>
            <li>You will not attempt to reverse-engineer, decompile, or interfere with the App's operation or backend services.</li>
            <li>Custom categories and words you create must not contain illegal content; you are responsible for content you submit, including anything sent to our AI backend.</li>
          </ul>`,
        ],
      },
      {
        h2: "3. AI-generated content",
        body: [`<p>Word packs, questions, hints, and answers generated by the AI mode are produced automatically and may occasionally be inaccurate, incomplete, or unexpected. The App is intended for entertainment purposes only.</p>`],
      },
      {
        h2: "4. In-app purchases",
        body: [`<p>Any subscriptions or in-app purchases are billed and processed by the Apple App Store or Google Play, in accordance with their respective terms. Purchase management (entitlements) is handled by RevenueCat as described in our <a href="/{lang}/privacy-policy">Privacy Policy</a>.</p>`],
      },
      {
        h2: "5. Intellectual property",
        body: [`<p>The App, including its design, mascot ("Fiesta"), word packs, and software, is owned by us and protected by intellectual property laws. You may not copy, modify, or distribute any part of the App without permission.</p>`],
      },
      {
        h2: "6. Disclaimer of warranties",
        body: [`<p>The App is provided "as is" without warranties of any kind, express or implied. We do not guarantee the App will be uninterrupted, error-free, or available at all times.</p>`],
      },
      {
        h2: "7. Limitation of liability",
        body: [`<p>To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the App.</p>`],
      },
      {
        h2: "8. Termination",
        body: [`<p>We may suspend or terminate access to the App for users who violate these Terms.</p>`],
      },
      {
        h2: "9. Changes to these Terms",
        body: [`<p>We may update these Terms from time to time. Continued use of the App after changes take effect constitutes acceptance of the revised Terms.</p>`],
      },
      {
        h2: "10. Contact",
        body: [`<p>Questions about these Terms? Contact us at <a href="mailto:{supportEmail}">{supportEmail}</a>.</p>`],
      },
    ],
  },
  support: {
    metaTitle: "Support — AI Charades",
    metaDescription: "Get help with AI Charades — the word game with a brain.",
    h1: "Support",
    intro: "Need help with AI Charades? Have feedback, found a bug, or want to suggest a new word pack? We'd love to hear from you.",
    emailIntro: "Email us at <a href=\"mailto:{supportEmail}\">{supportEmail}</a> and we'll get back to you as soon as we can.",
    commonQuestionsH2: "Common questions",
    commonQuestionsBody: "Looking for quick answers? Check the <a href=\"/{lang}/#faq\">FAQ</a> on the home page for details on game modes, offline play, languages, and more.",
    legalH2: "Legal",
  },
};
