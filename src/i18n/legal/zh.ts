import type { LegalDictionary } from "../types";

export const zh: LegalDictionary = {
  privacy: {
    metaTitle: "隐私政策 — AI Charades",
    metaDescription: "了解 AI Charades 在 iOS 和安卓平台上如何收集、使用和共享信息。",
    h1: "AI Charades 隐私政策",
    effectiveDate: "生效日期：",
    lastUpdated: "最近更新：",
    dateValue: "2026年7月6日",
    intro: [
      `本隐私政策说明了当你在安卓和 iOS 上使用 <strong>AI Charades</strong> 移动应用（以下简称「本应用」）时，AI Charades（以下简称「我们」）如何收集、使用和共享信息。`,
      "使用本应用即表示你同意本政策所述的做法。如果你不同意，请不要使用本应用。",
    ],
    contactLabel: "联系方式：",
    appIdLabel: "应用标识符：",
    sections: [
      {
        h2: "1. 概要（简要版）",
        body: [
          `<ul>
            <li>我们<strong>不会</strong>要求你创建账户，也不会要求你提供姓名或邮箱才能游玩。</li>
            <li>我们仅在语音回合中使用<strong>麦克风和语音识别</strong>，将你说的内容转换为文字，以便游戏核对你的答案。</li>
            <li><strong>AI 游戏模式</strong>会将游戏文本（例如分类和生成的词语）发送到我们的服务器以及 Google Gemini 以生成内容，但<strong>不会</strong>发送你的语音录音。</li>
            <li>我们使用 <strong>Google Firebase</strong> 进行数据分析、崩溃报告和推送通知，并使用 <strong>RevenueCat</strong> 管理订阅／应用内购买。</li>
            <li>我们<strong>不会</strong>出售你的个人信息。</li>
          </ul>`,
        ],
      },
      {
        h2: "2. 我们收集的信息",
        body: [
          `<h3>2.1 你提供的信息</h3>
          <p><strong>游戏内容与设置</strong>——你选择的分类、你创建的自定义词语／分类，以及你在应用中设置的偏好。你为 AI 回合创建的自定义词语可能会被发送至我们的 AI 后端以生成游戏内容。</p>`,
          `<h3>2.2 麦克风与语音输入</h3>
          <p>当你使用<strong>语音回合</strong>时，本应用会访问<strong>麦克风</strong>，并使用设备的<strong>语音识别</strong>服务（iOS 上为 Apple Speech，安卓上为 Google／安卓语音识别）将你说出的答案转换为文字。根据你的设备和系统设置，该音频可能会在<strong>设备本地</strong>处理，也可能由<strong>操作系统提供方</strong>（Apple 或 Google）的语音服务按其各自的隐私政策进行处理。我们<strong>不会</strong>将你的原始音频录制、存储或传输至我们自己的服务器，仅在当前游戏回合中使用转换后的文本。</p>`,
          `<h3>2.3 自动收集的信息</h3>
          <p>通过 <strong>Google Firebase</strong> 及平台服务，我们可能会收集：</p>
          <ul>
            <li><strong>分析数据</strong>（Firebase Analytics）：应用打开次数、浏览的屏幕、游玩的游戏模式、应用内事件、会话时长、大致的国家／地区、设备语言。</li>
            <li><strong>崩溃与诊断数据</strong>（Firebase Crashlytics）：崩溃堆栈跟踪、设备型号、系统版本、应用版本以及诊断日志。</li>
            <li><strong>设备／技术标识符</strong>：Firebase 安装 ID、应用实例 ID，以及（用于推送的）Firebase 云消息传递令牌。</li>
            <li><strong>应用完整性信号</strong>（Firebase App Check）：用于证明请求来自真实、未经修改的应用副本的令牌（通过安卓上的 Play Integrity 和 iOS 上的 App Attest）。此信息用于防止我们的后端被滥用。</li>
          </ul>`,
          `<h3>2.4 购买信息</h3>
          <p><strong>订阅和应用内购买</strong>由 <strong>Apple App Store</strong> 或 <strong>Google Play</strong> 处理，并通过 <strong>RevenueCat</strong> 进行管理。我们会收到购买状态（例如你是否拥有有效的「高级版」权益）、匿名的 RevenueCat 应用用户 ID 以及交易元数据。<strong>我们绝不会收到或存储你完整的付款卡信息</strong>——这些信息仅保留在 Apple／Google 一方。</p>`,
          `<h3>2.5 AI 游戏模式数据</h3>
          <p>当你使用 <strong>AI 模式</strong>游玩时，游戏文本（例如所选分类以及该回合生成的词语）会被发送到我们的后端（<strong>Google Firebase Cloud Functions</strong>），并转发给 <strong>Google Gemini</strong> 以生成游戏内容。除非你自己在自定义分类或词语中输入了个人信息，否则该文本按设计不会包含个人信息。</p>`,
        ],
      },
      {
        h2: "3. 我们如何使用信息",
        body: [
          `<p>我们使用上述信息用于：</p>
          <ul>
            <li>提供并运行游戏，包括 AI 生成的回合和语音猜词。</li>
            <li>管理你的订阅并解锁高级功能。</li>
            <li>发送可选的推送通知（例如提醒、新内容）——仅在你授予通知权限时发送。</li>
            <li>了解本应用的使用情况，改进功能和性能（数据分析）。</li>
            <li>诊断崩溃并修复错误（崩溃报告）。</li>
            <li>保护我们的后端免受欺诈、滥用和自动化攻击（App Check）。</li>
          </ul>`,
        ],
      },
      {
        h2: "4. 我们如何共享信息",
        body: [
          `<p>我们仅与协助我们运营本应用的服务提供商共享信息：</p>
          <table>
            <thead>
              <tr><th>服务提供商</th><th>用途</th><th>隐私政策</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Google Firebase（Analytics、Crashlytics、Cloud Messaging、App Check、Cloud Functions）</td>
                <td>数据分析、崩溃报告、推送、完整性验证、后端服务</td>
                <td><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">firebase.google.com/support/privacy</a></td>
              </tr>
              <tr>
                <td>Google／Apple 平台语音服务</td>
                <td>语音回合的语音转文字</td>
                <td>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a> ·
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a>
                </td>
              </tr>
              <tr>
                <td>Google Gemini</td>
                <td>生成 AI 游戏内容</td>
                <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a></td>
              </tr>
              <tr>
                <td>RevenueCat</td>
                <td>订阅／购买管理</td>
                <td><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">revenuecat.com/privacy</a></td>
              </tr>
              <tr>
                <td>Apple App Store／Google Play</td>
                <td>支付处理</td>
                <td>
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a> ·
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>我们<strong>不会</strong>出售你的个人信息，也<strong>不会</strong>将其用于跨情境行为广告共享。</p>
          <p>如法律要求，或为保护我们或用户的权利、安全或财产，我们可能会披露信息。</p>`,
        ],
      },
      {
        h2: "5. 数据保留",
        body: [
          `<ul>
            <li>我们会按照 Firebase 提供的保留期限保存分析和崩溃数据（分析数据通常最长保留 14 个月，崩溃数据的保留期限有限）。</li>
            <li>购买／权益记录将在提供服务及遵守税务／会计义务所需的期间内保留。</li>
            <li>根据我们与 Google Gemini 各自的政策，AI 请求文本可能会被我们及 Google Gemini 短暂保留，用于处理和防止滥用。</li>
          </ul>`,
        ],
      },
      {
        h2: "6. 你的选择与权利",
        body: [
          `<ul>
            <li><strong>麦克风／语音</strong>：你可以在设备设置中拒绝或撤销麦克风权限。没有该权限，语音回合将无法使用，但游戏的其他部分仍可正常游玩。</li>
            <li><strong>通知</strong>：你可以在设备设置中关闭推送通知。</li>
            <li><strong>数据分析</strong>：你可以通过设备的隐私设置限制广告／分析追踪（例如 iOS 的「允许应用请求跟踪」和安卓的广告设置）。</li>
            <li><strong>访问／删除</strong>：由于我们不要求账户注册，我们几乎不持有能识别你个人身份的数据。如需请求访问或删除与你的安装相关的任何数据，请通过 <a href="mailto:{supportEmail}">{supportEmail}</a> 联系我们。</li>
          </ul>
          <p>根据你所在地区，你可能依据 <strong>GDPR</strong>（欧洲经济区／英国）或 <strong>CCPA/CPRA</strong>（加利福尼亚州）享有相应权利，包括访问、更正、删除或限制处理你的个人数据的权利，以及向监管机构投诉的权利。</p>`,
        ],
      },
      {
        h2: "7. 儿童隐私",
        body: [
          `<p>AI Charades 面向<strong>大众用户</strong>，并非专为 13 岁以下儿童设计。我们不会在明知的情况下收集 13 岁以下儿童的个人信息。如果你认为某位儿童向我们提供了个人信息，请与我们联系，我们将予以删除。</p>`,
        ],
      },
      {
        h2: "8. 国际数据传输",
        body: [
          `<p>我们的服务提供商可能会在你所在国家以外的国家（包括美国）处理和存储信息。在必要时，我们会依赖适当的保障措施（例如标准合同条款）来进行此类传输。</p>`,
        ],
      },
      {
        h2: "9. 安全",
        body: [
          `<p>我们采用行业标准措施（包括传输加密和 Firebase App Check）来保护信息。任何传输或存储方式都无法做到 100% 安全，我们无法保证绝对的安全性。</p>`,
        ],
      },
      {
        h2: "10. 本政策的变更",
        body: [
          `<p>我们可能会不时更新本隐私政策。我们会在本应用内和／或此网址发布新版本，并更新上方的「最近更新」日期。如有重大变更，我们会在合理范围内予以标注。</p>`,
        ],
      },
      {
        h2: "11. 联系我们",
        body: [
          `<p>如果你对本隐私政策或你的数据有任何疑问，请联系：<br /><a href="mailto:{supportEmail}">{supportEmail}</a></p>`,
        ],
      },
    ],
  },
  terms: {
    metaTitle: "服务条款 — AI Charades",
    metaDescription: "AI Charades 移动应用在 iOS 和安卓平台上的服务条款。",
    h1: "服务条款",
    lastUpdatedLabel: "最近更新：",
    dateValue: "2026年7月6日",
    intro:
      `本服务条款（「条款」）规范你对 <strong>AI Charades</strong> 移动应用（「本应用」）的使用。下载、安装或使用本应用即表示你同意本条款。如果你不同意，请不要使用本应用。`,
    sections: [
      {
        h2: "1. 本应用",
        body: [`<p>AI Charades 是一款猜词游戏，提供由 AI 驱动的单人模式和可离线游玩的比划猜词派对模式。本应用可免费下载和游玩。</p>`],
      },
      {
        h2: "2. 可接受的使用方式",
        body: [
          `<ul>
            <li>你不得将本应用用于任何非法目的，或以侵犯他人权利的方式使用本应用。</li>
            <li>你不得试图对本应用进行逆向工程、反编译，或干扰本应用的运行或后端服务。</li>
            <li>你创建的自定义分类和词语不得包含违法内容；你需对自己提交的内容负责，包括发送至我们 AI 后端的任何内容。</li>
          </ul>`,
        ],
      },
      {
        h2: "3. AI 生成内容",
        body: [`<p>由 AI 模式生成的词包、问题、提示和答案均为自动生成，可能偶尔出现不准确、不完整或意料之外的情况。本应用仅供娱乐用途。</p>`],
      },
      {
        h2: "4. 应用内购买",
        body: [`<p>任何订阅或应用内购买均由 Apple App Store 或 Google Play 按照其各自的条款进行计费和处理。购买管理（权益）由 RevenueCat 负责，详见我们的<a href="/{lang}/privacy-policy">隐私政策</a>。</p>`],
      },
      {
        h2: "5. 知识产权",
        body: [`<p>本应用，包括其设计、吉祥物（「Fiesta」）、词包和软件，均归我们所有，并受知识产权法保护。未经许可，你不得复制、修改或分发本应用的任何部分。</p>`],
      },
      {
        h2: "6. 保证免责声明",
        body: [`<p>本应用按「现状」提供，不附带任何明示或暗示的保证。我们不保证本应用将不间断、无错误或始终可用。</p>`],
      },
      {
        h2: "7. 责任限制",
        body: [`<p>在法律允许的最大范围内，我们对因你使用本应用而产生的任何间接、附带或后果性损害不承担责任。</p>`],
      },
      {
        h2: "8. 终止",
        body: [`<p>对于违反本条款的用户，我们可能会暂停或终止其对本应用的访问权限。</p>`],
      },
      {
        h2: "9. 条款变更",
        body: [`<p>我们可能会不时更新本条款。条款变更生效后继续使用本应用，即视为你接受修订后的条款。</p>`],
      },
      {
        h2: "10. 联系方式",
        body: [`<p>对本条款有疑问？请通过 <a href="mailto:{supportEmail}">{supportEmail}</a> 联系我们。</p>`],
      },
    ],
  },
  support: {
    metaTitle: "支持 — AI Charades",
    metaDescription: "获取 AI Charades（会思考的猜词游戏）相关帮助。",
    h1: "支持",
    intro: "使用 AI Charades 时需要帮助？有反馈意见、发现了错误，或想推荐新的词包？我们很乐意听取你的意见。",
    emailIntro: "发送邮件至 <a href=\"mailto:{supportEmail}\">{supportEmail}</a>，我们会尽快回复你。",
    commonQuestionsH2: "常见问题",
    commonQuestionsBody: "想快速找到答案？请查看主页上的<a href=\"/{lang}/#faq\">常见问题</a>，了解游戏模式、离线游玩、语言支持等详细信息。",
    legalH2: "法律信息",
  },
};
