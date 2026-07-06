import type { LegalDictionary } from "../types";

export const ja: LegalDictionary = {
  privacy: {
    metaTitle: "プライバシーポリシー — AI Charades",
    metaDescription: "AI CharadesがiOSおよびAndroidで情報をどのように収集、使用、共有するか。",
    h1: "AI Charades プライバシーポリシー",
    effectiveDate: "発効日:",
    lastUpdated: "最終更新日:",
    dateValue: "2026年7月6日",
    intro: [
      `本プライバシーポリシーは、Android および iOS 上で <strong>AI Charades</strong> モバイルアプリケーション（「本アプリ」）をご利用の際に、AI Charades（「当社」）が情報をどのように収集、使用、共有するかを説明するものです。`,
      "本アプリをご利用いただくことで、本ポリシーに記載された取り扱いに同意したものとみなされます。同意いただけない場合は、本アプリのご利用をお控えください。",
    ],
    contactLabel: "お問い合わせ:",
    appIdLabel: "アプリ識別子:",
    sections: [
      {
        h2: "1. 概要（要約版）",
        body: [
          `<ul>
            <li>プレイするためにアカウント作成やお名前・メールアドレスの提供を<strong>求めません</strong>。</li>
            <li><strong>マイクと音声認識</strong>は、発言をテキストに変換してゲームが解答を確認できるようにするため、音声ラウンド中のみ使用します。</li>
            <li><strong>AIゲームモード</strong>は、カテゴリーや生成された単語などのゲームテキストを当社サーバーおよび Google Gemini に送信し、コンテンツを生成します。音声録音は<strong>送信しません</strong>。</li>
            <li>分析、クラッシュレポート、プッシュ通知には <strong>Google Firebase</strong>、サブスクリプション/アプリ内購入の管理には <strong>RevenueCat</strong> を使用しています。</li>
            <li>お客様の個人情報を販売することは<strong>ありません</strong>。</li>
          </ul>`,
        ],
      },
      {
        h2: "2. 収集する情報",
        body: [
          `<h3>2.1 お客様が提供する情報</h3>
          <p><strong>ゲームコンテンツと設定</strong> — 選択したカテゴリー、作成したカスタム単語/カテゴリー、アプリ内で設定した各種設定。AIラウンド用に作成したカスタム単語は、ゲームプレイ生成のため当社のAIバックエンドに送信される場合があります。</p>`,
          `<h3>2.2 マイクと音声入力</h3>
          <p><strong>音声ラウンド</strong>を使用する際、本アプリは<strong>マイク</strong>にアクセスし、デバイスの<strong>音声認識</strong>サービス（iOSではApple Speech、Androidでは Google/Android 音声認識）を使用して発話した回答をテキストに変換します。デバイスとOSの設定によっては、この音声は<strong>デバイス上</strong>で処理される場合と、各社のプライバシーポリシーに基づき<strong>OS提供元</strong>（AppleまたはGoogle）の音声サービスによって処理される場合があります。生のオーディオを当社サーバーに記録、保存、または送信することは<strong>ありません</strong>。生成されたテキストは現在のゲームラウンド内でのみ使用します。</p>`,
          `<h3>2.3 自動的に収集される情報</h3>
          <p><strong>Google Firebase</strong>およびプラットフォームサービスを通じて、以下を収集する場合があります:</p>
          <ul>
            <li><strong>分析データ</strong>（Firebase Analytics）: アプリの起動、閲覧画面、プレイしたゲームモード、アプリ内イベント、セッション長、おおよその国/地域、デバイスの言語。</li>
            <li><strong>クラッシュおよび診断データ</strong>（Firebase Crashlytics）: クラッシュスタックトレース、デバイスモデル、OSバージョン、アプリバージョン、診断ログ。</li>
            <li><strong>デバイス/技術識別子</strong>: Firebaseインストールation ID、アプリインスタンスID、（プッシュ用の）Firebase Cloud Messagingトークン。</li>
            <li><strong>アプリの整合性シグナル</strong>（Firebase App Check）: リクエストが本物の未改変のアプリから送信されていることを証明するトークン（Androidでは Play Integrity、iOSでは App Attest 経由）。当社バックエンドを不正利用から保護するために使用されます。</li>
          </ul>`,
          `<h3>2.4 購入情報</h3>
          <p><strong>サブスクリプションおよびアプリ内購入</strong>は<strong>Apple App Store</strong>または<strong>Google Play</strong>によって処理され、<strong>RevenueCat</strong>を通じて管理されます。当社は購入状況（有効な「プレミアム」権利があるかどうかなど）、匿名のRevenueCatアプリユーザーID、および取引メタデータを受け取ります。<strong>お客様のクレジットカード情報の全体を受け取ったり保存したりすることは決してありません</strong> — それらはApple/Googleのもとに保管されます。</p>`,
          `<h3>2.5 AIゲームモードのデータ</h3>
          <p><strong>AIモード</strong>をプレイする際、選択したカテゴリーやラウンドで生成された単語などのゲームテキストが当社のバックエンド（<strong>Google Firebase Cloud Functions</strong>）に送信され、<strong>Google Gemini</strong>に転送されてゲームプレイコンテンツを生成します。このテキストは、ユーザー自身がカスタムカテゴリーや単語に入力しない限り、設計上個人情報を含みません。</p>`,
        ],
      },
      {
        h2: "3. 情報の利用方法",
        body: [
          `<p>上記の情報は以下の目的で利用します:</p>
          <ul>
            <li>AI生成ラウンドや音声推測を含む、ゲームの提供と運営。</li>
            <li>サブスクリプションの管理とプレミアム機能の解除。</li>
            <li>任意のプッシュ通知（リマインダー、新コンテンツなど）の送信 — 通知権限を許可した場合のみ。</li>
            <li>アプリの利用状況の把握と、機能・パフォーマンスの改善（分析）。</li>
            <li>クラッシュの診断とバグ修正（クラッシュレポート）。</li>
            <li>不正行為、悪用、自動攻撃から当社バックエンドを保護（App Check）。</li>
          </ul>`,
        ],
      },
      {
        h2: "4. 情報の共有方法",
        body: [
          `<p>情報は、本アプリの運営を支援するサービスプロバイダーとのみ共有します:</p>
          <table>
            <thead>
              <tr><th>プロバイダー</th><th>目的</th><th>プライバシーポリシー</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Google Firebase（Analytics、Crashlytics、Cloud Messaging、App Check、Cloud Functions）</td>
                <td>分析、クラッシュレポート、プッシュ、整合性、バックエンド</td>
                <td><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">firebase.google.com/support/privacy</a></td>
              </tr>
              <tr>
                <td>Google / Apple プラットフォーム音声サービス</td>
                <td>音声ラウンド用の音声テキスト変換</td>
                <td>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a> ·
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a>
                </td>
              </tr>
              <tr>
                <td>Google Gemini</td>
                <td>AIゲームコンテンツの生成</td>
                <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a></td>
              </tr>
              <tr>
                <td>RevenueCat</td>
                <td>サブスクリプション/購入管理</td>
                <td><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">revenuecat.com/privacy</a></td>
              </tr>
              <tr>
                <td>Apple App Store / Google Play</td>
                <td>決済処理</td>
                <td>
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a> ·
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>お客様の個人情報を販売することは<strong>なく</strong>、クロスコンテキスト行動広告のために共有することも<strong>ありません</strong>。</p>
          <p>法律で求められる場合、または当社や利用者の権利、安全、財産を保護するために情報を開示することがあります。</p>`,
        ],
      },
      {
        h2: "5. データの保持",
        body: [
          `<ul>
            <li>分析データおよびクラッシュデータは、Firebaseが提供する保持期間（通常、分析データは最大14か月、クラッシュデータは限定された期間）保持します。</li>
            <li>購入/権利記録は、サービス提供および税務/会計上の義務を遵守するために必要な期間保持されます。</li>
            <li>AIリクエストのテキストは、処理および不正利用防止のため、当社とGoogle Geminiによりそれぞれのポリシーに従って一時的に保持される場合があります。</li>
          </ul>`,
        ],
      },
      {
        h2: "6. お客様の選択と権利",
        body: [
          `<ul>
            <li><strong>マイク/音声</strong>: デバイス設定でマイク権限を拒否または取り消すことができます。音声ラウンドは機能しなくなりますが、ゲームの他の部分は機能します。</li>
            <li><strong>通知</strong>: デバイス設定でプッシュ通知を無効にできます。</li>
            <li><strong>分析</strong>: デバイスのプライバシー設定（iOSの「アプリからのトラッキング要求を許可」やAndroidの広告設定など）を通じて広告/分析トラッキングを制限できます。</li>
            <li><strong>アクセス/削除</strong>: アカウントを必要としないため、個人を特定できるデータはほとんど、またはまったく保有していません。インストールに関連するデータへのアクセスまたは削除をご希望の場合は、<a href="mailto:{supportEmail}">{supportEmail}</a>までご連絡ください。</li>
          </ul>
          <p>お住まいの地域によっては、<strong>GDPR</strong>（EEA/UK）または<strong>CCPA/CPRA</strong>（カリフォルニア州）に基づき、個人データへのアクセス、訂正、削除、処理の制限を求める権利、および監督機関への苦情申立ての権利を有する場合があります。</p>`,
        ],
      },
      {
        h2: "7. 子どものプライバシー",
        body: [
          `<p>AI Charadesは<strong>一般利用者向け</strong>であり、13歳未満の子どもを対象としていません。当社はその年齢未満の子どもから故意に個人情報を収集することはありません。子どもが当社に個人情報を提供したと思われる場合は、ご連絡いただければ削除いたします。</p>`,
        ],
      },
      {
        h2: "8. 国際的なデータ移転",
        body: [
          `<p>当社のサービスプロバイダーは、米国を含め、お客様の居住国以外の国で情報を処理・保存する場合があります。必要な場合、当社はこれらの移転について標準契約条項などの適切な保護措置を講じます。</p>`,
        ],
      },
      {
        h2: "9. セキュリティ",
        body: [
          `<p>当社は情報を保護するため、転送時の暗号化やFirebase App Checkを含む業界標準の対策を講じています。送信または保存の方法に100%安全なものはなく、絶対的なセキュリティを保証することはできません。</p>`,
        ],
      },
      {
        h2: "10. 本ポリシーの変更",
        body: [
          `<p>当社は本プライバシーポリシーを随時更新することがあります。新しいバージョンはアプリ内および/またはこのURLに掲載し、上記の「最終更新日」を更新します。重要な変更については、可能な限り強調表示します。</p>`,
        ],
      },
      {
        h2: "11. お問い合わせ",
        body: [
          `<p>本プライバシーポリシーやお客様のデータについてご質問がある場合は、こちらまでご連絡ください:<br /><a href="mailto:{supportEmail}">{supportEmail}</a></p>`,
        ],
      },
    ],
  },
  terms: {
    metaTitle: "利用規約 — AI Charades",
    metaDescription: "iOSおよびAndroid向けAI Charadesモバイルアプリの利用規約。",
    h1: "利用規約",
    lastUpdatedLabel: "最終更新日:",
    dateValue: "2026年7月6日",
    intro:
      `本利用規約（「本規約」）は、<strong>AI Charades</strong>モバイルアプリケーション（「本アプリ」）のご利用を規定するものです。本アプリをダウンロード、インストール、または使用することにより、本規約に同意したものとみなされます。同意いただけない場合は、本アプリのご利用をお控えください。`,
    sections: [
      {
        h2: "1. 本アプリについて",
        body: [`<p>AI Charadesは、AI搭載のソロモードとオフラインのヘッズアップパーティーモードを提供する単語当てゲームです。本アプリは無料でダウンロード・プレイできます。</p>`],
      },
      {
        h2: "2. 許容される利用",
        body: [
          `<ul>
            <li>違法な目的、または他者の権利を侵害する方法で本アプリを使用しないこと。</li>
            <li>本アプリまたはバックエンドサービスのリバースエンジニアリング、逆コンパイル、または動作妨害を試みないこと。</li>
            <li>作成するカスタムカテゴリーや単語には違法なコンテンツを含めないこと。当社のAIバックエンドに送信されるものを含め、送信するコンテンツについてはお客様が責任を負います。</li>
          </ul>`,
        ],
      },
      {
        h2: "3. AI生成コンテンツ",
        body: [`<p>AIモードによって生成される単語パック、質問、ヒント、回答は自動的に生成され、時として不正確、不完全、または予期しないものとなる場合があります。本アプリは娯楽目的のみを意図しています。</p>`],
      },
      {
        h2: "4. アプリ内購入",
        body: [`<p>サブスクリプションやアプリ内購入は、それぞれの規約に従い、Apple App StoreまたはGoogle Playによって請求・処理されます。購入管理（権利）は、<a href="/{lang}/privacy-policy">プライバシーポリシー</a>に記載の通りRevenueCatによって処理されます。</p>`],
      },
      {
        h2: "5. 知的財産",
        body: [`<p>本アプリは、そのデザイン、マスコット（「Fiesta」）、単語パック、ソフトウェアを含め、当社が所有し、知的財産法により保護されています。許可なく本アプリの一部をコピー、改変、配布することはできません。</p>`],
      },
      {
        h2: "6. 保証の否認",
        body: [`<p>本アプリは、明示または黙示を問わずいかなる保証もなく「現状のまま」提供されます。当社は、本アプリが中断されないこと、エラーがないこと、または常に利用可能であることを保証しません。</p>`],
      },
      {
        h2: "7. 責任の制限",
        body: [`<p>法律で許容される最大限の範囲で、当社は本アプリの使用に起因する間接的、付随的、または結果的損害について責任を負いません。</p>`],
      },
      {
        h2: "8. 終了",
        body: [`<p>本規約に違反した利用者に対しては、本アプリへのアクセスを停止または終了する場合があります。</p>`],
      },
      {
        h2: "9. 本規約の変更",
        body: [`<p>当社は本規約を随時更新することがあります。変更発効後も本アプリの利用を継続する場合、改訂後の規約に同意したものとみなされます。</p>`],
      },
      {
        h2: "10. お問い合わせ",
        body: [`<p>本規約についてご質問がありますか？<a href="mailto:{supportEmail}">{supportEmail}</a>までご連絡ください。</p>`],
      },
    ],
  },
  support: {
    metaTitle: "サポート — AI Charades",
    metaDescription: "頭脳を持つ単語ゲーム、AI Charadesのサポートを受ける。",
    h1: "サポート",
    intro: "AI Charadesについてお困りですか？ご意見・ご感想、バグの報告、新しい単語パックのご提案など、お気軽にお寄せください。",
    emailIntro: "<a href=\"mailto:{supportEmail}\">{supportEmail}</a>までメールをお送りください。できるだけ早くご返信いたします。",
    commonQuestionsH2: "よくある質問",
    commonQuestionsBody: "手っ取り早い回答をお探しですか？ゲームモード、オフラインプレイ、対応言語などの詳細については、ホームページの<a href=\"/{lang}/#faq\">FAQ</a>をご覧ください。",
    legalH2: "法的情報",
  },
};
