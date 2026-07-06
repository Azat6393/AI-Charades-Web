import type { LegalDictionary } from "../types";

export const ko: LegalDictionary = {
  privacy: {
    metaTitle: "개인정보 처리방침 — AI Charades",
    metaDescription: "AI Charades가 iOS 및 Android에서 정보를 수집, 사용, 공유하는 방법.",
    h1: "AI Charades 개인정보 처리방침",
    effectiveDate: "발효일:",
    lastUpdated: "최종 업데이트:",
    dateValue: "2026년 7월 6일",
    intro: [
      `본 개인정보 처리방침은 Android 및 iOS에서 <strong>AI Charades</strong> 모바일 애플리케이션(이하 "앱")을 사용할 때 AI Charades("당사")가 정보를 어떻게 수집, 사용, 공유하는지 설명합니다.`,
      "앱을 사용함으로써 귀하는 본 방침에 설명된 관행에 동의하게 됩니다. 동의하지 않으시는 경우 앱을 사용하지 마시기 바랍니다.",
    ],
    contactLabel: "문의처:",
    appIdLabel: "앱 식별자:",
    sections: [
      {
        h2: "1. 요약(간단 버전)",
        body: [
          `<ul>
            <li>플레이를 위해 계정 생성이나 이름, 이메일 제공을 요청하지 <strong>않습니다</strong>.</li>
            <li>발화 내용을 텍스트로 변환하여 게임이 답변을 확인할 수 있도록, <strong>마이크와 음성 인식</strong>은 음성 라운드 중에만 사용됩니다.</li>
            <li><strong>AI 게임 모드</strong>는 카테고리 및 생성된 단어와 같은 게임 텍스트를 당사 서버와 Google Gemini로 전송하여 콘텐츠를 생성합니다. 음성 녹음은 전송하지 <strong>않습니다</strong>.</li>
            <li>분석, 충돌 보고, 푸시 알림에는 <strong>Google Firebase</strong>를, 구독/인앱 결제 관리에는 <strong>RevenueCat</strong>을 사용합니다.</li>
            <li>귀하의 개인정보를 판매하지 <strong>않습니다</strong>.</li>
          </ul>`,
        ],
      },
      {
        h2: "2. 수집하는 정보",
        body: [
          `<h3>2.1 귀하가 제공하는 정보</h3>
          <p><strong>게임 콘텐츠 및 설정</strong> — 선택한 카테고리, 생성한 커스텀 단어/카테고리, 앱 내 설정한 환경설정. AI 라운드를 위해 생성한 커스텀 단어는 게임플레이 생성을 위해 당사 AI 백엔드로 전송될 수 있습니다.</p>`,
          `<h3>2.2 마이크 및 음성 입력</h3>
          <p><strong>음성 라운드</strong>를 사용할 때, 앱은 <strong>마이크</strong>에 접근하고 기기의 <strong>음성 인식</strong> 서비스(iOS의 Apple Speech, Android의 Google/Android 음성 인식)를 사용하여 발화한 답변을 텍스트로 변환합니다. 기기 및 OS 설정에 따라, 이 오디오는 <strong>기기 내에서</strong> 처리되거나 각 운영체제 제공업체(Apple 또는 Google)의 개인정보 처리방침에 따라 <strong>운영체제 제공업체의</strong> 음성 서비스에 의해 처리될 수 있습니다. 원본 오디오를 당사 서버에 기록, 저장, 전송하지 <strong>않습니다</strong>. 변환된 텍스트는 현재 게임 라운드 내에서만 사용합니다.</p>`,
          `<h3>2.3 자동으로 수집되는 정보</h3>
          <p><strong>Google Firebase</strong> 및 플랫폼 서비스를 통해 다음을 수집할 수 있습니다:</p>
          <ul>
            <li><strong>분석 데이터</strong>(Firebase Analytics): 앱 실행, 조회한 화면, 플레이한 게임 모드, 인앱 이벤트, 세션 길이, 대략적인 국가/지역, 기기 언어.</li>
            <li><strong>충돌 및 진단 데이터</strong>(Firebase Crashlytics): 충돌 스택 트레이스, 기기 모델, OS 버전, 앱 버전, 진단 로그.</li>
            <li><strong>기기/기술 식별자</strong>: Firebase 설치 ID, 앱 인스턴스 ID, (푸시용) Firebase Cloud Messaging 토큰.</li>
            <li><strong>앱 무결성 신호</strong>(Firebase App Check): 요청이 정품이고 변경되지 않은 앱 사본에서 온 것임을 증명하는 토큰(Android는 Play Integrity, iOS는 App Attest 경유). 당사 백엔드를 악용으로부터 보호하는 데 사용됩니다.</li>
          </ul>`,
          `<h3>2.4 결제 정보</h3>
          <p><strong>구독 및 인앱 결제</strong>는 <strong>Apple App Store</strong> 또는 <strong>Google Play</strong>를 통해 처리되며, <strong>RevenueCat</strong>을 통해 관리됩니다. 당사는 결제 상태(예: 활성 "프리미엄" 자격 보유 여부), 익명의 RevenueCat 앱 사용자 ID, 거래 메타데이터를 받습니다. <strong>귀하의 전체 결제 카드 정보를 받거나 저장하는 일은 결코 없습니다</strong> — 이는 Apple/Google이 보관합니다.</p>`,
          `<h3>2.5 AI 게임 모드 데이터</h3>
          <p><strong>AI 모드</strong>를 플레이할 때, 선택한 카테고리 및 해당 라운드에서 생성된 단어와 같은 게임 텍스트가 당사 백엔드(<strong>Google Firebase Cloud Functions</strong>)로 전송되고 <strong>Google Gemini</strong>로 전달되어 게임플레이 콘텐츠를 생성합니다. 이 텍스트는 귀하가 직접 커스텀 카테고리나 단어에 입력하지 않는 한 개인정보를 포함하지 않도록 설계되어 있습니다.</p>`,
        ],
      },
      {
        h2: "3. 정보 이용 방법",
        body: [
          `<p>당사는 위 정보를 다음 목적으로 이용합니다:</p>
          <ul>
            <li>AI 생성 라운드 및 음성 추측을 포함한 게임 제공 및 운영.</li>
            <li>구독 관리 및 프리미엄 기능 잠금 해제.</li>
            <li>선택적 푸시 알림 전송(예: 리마인더, 신규 콘텐츠) — 알림 권한을 부여한 경우에만.</li>
            <li>앱 사용 방식 파악 및 기능/성능 개선(분석).</li>
            <li>충돌 진단 및 버그 수정(충돌 보고).</li>
            <li>사기, 악용, 자동화된 공격으로부터 당사 백엔드 보호(App Check).</li>
          </ul>`,
        ],
      },
      {
        h2: "4. 정보 공유 방법",
        body: [
          `<p>당사는 앱 운영을 돕는 서비스 제공업체와만 정보를 공유합니다:</p>
          <table>
            <thead>
              <tr><th>제공업체</th><th>목적</th><th>개인정보 처리방침</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Google Firebase(Analytics, Crashlytics, Cloud Messaging, App Check, Cloud Functions)</td>
                <td>분석, 충돌 보고, 푸시, 무결성, 백엔드</td>
                <td><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">firebase.google.com/support/privacy</a></td>
              </tr>
              <tr>
                <td>Google / Apple 플랫폼 음성 서비스</td>
                <td>음성 라운드용 음성-텍스트 변환</td>
                <td>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a> ·
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a>
                </td>
              </tr>
              <tr>
                <td>Google Gemini</td>
                <td>AI 게임 콘텐츠 생성</td>
                <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a></td>
              </tr>
              <tr>
                <td>RevenueCat</td>
                <td>구독/결제 관리</td>
                <td><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">revenuecat.com/privacy</a></td>
              </tr>
              <tr>
                <td>Apple App Store / Google Play</td>
                <td>결제 처리</td>
                <td>
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a> ·
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>귀하의 개인정보를 판매하지 <strong>않으며</strong>, 교차 맥락 행동 광고를 위해 공유하지도 <strong>않습니다</strong>.</p>
          <p>법률에 의해 요구되는 경우, 또는 당사나 이용자의 권리, 안전, 재산을 보호하기 위해 정보를 공개할 수 있습니다.</p>`,
        ],
      },
      {
        h2: "5. 데이터 보관",
        body: [
          `<ul>
            <li>분석 및 충돌 데이터는 Firebase가 제공하는 보관 기간(일반적으로 분석은 최대 14개월, 충돌 데이터는 제한된 기간) 동안 보관합니다.</li>
            <li>결제/자격 기록은 서비스 제공 및 세무/회계 의무 준수에 필요한 기간 동안 보관됩니다.</li>
            <li>AI 요청 텍스트는 각사의 정책에 따라 처리 및 악용 방지를 위해 당사와 Google Gemini에 의해 일시적으로 보관될 수 있습니다.</li>
          </ul>`,
        ],
      },
      {
        h2: "6. 귀하의 선택 및 권리",
        body: [
          `<ul>
            <li><strong>마이크/음성</strong>: 기기 설정에서 마이크 권한을 거부하거나 취소할 수 있습니다. 음성 라운드는 작동하지 않지만 나머지 게임은 정상 작동합니다.</li>
            <li><strong>알림</strong>: 기기 설정에서 푸시 알림을 비활성화할 수 있습니다.</li>
            <li><strong>분석</strong>: 기기의 개인정보 설정(예: iOS의 "앱의 추적 요청 허용" 및 Android의 광고 설정)을 통해 광고/분석 추적을 제한할 수 있습니다.</li>
            <li><strong>접근/삭제</strong>: 당사는 계정을 요구하지 않으므로 귀하를 개인적으로 식별할 수 있는 데이터를 거의 또는 전혀 보유하지 않습니다. 설치와 관련된 데이터에 대한 접근 또는 삭제를 요청하려면 <a href="mailto:{supportEmail}">{supportEmail}</a>로 문의해 주세요.</li>
          </ul>
          <p>거주 지역에 따라 <strong>GDPR</strong>(EEA/영국) 또는 <strong>CCPA/CPRA</strong>(캘리포니아)에 따른 개인 데이터 접근, 정정, 삭제 또는 처리 제한 권리와 감독 기관에 이의를 제기할 권리를 가질 수 있습니다.</p>`,
        ],
      },
      {
        h2: "7. 아동 개인정보 보호",
        body: [
          `<p>AI Charades는 <strong>일반 대중</strong>을 대상으로 하며 13세 미만 아동을 대상으로 하지 않습니다. 당사는 해당 연령 미만 아동으로부터 고의로 개인정보를 수집하지 않습니다. 아동이 당사에 개인정보를 제공했다고 생각되는 경우 문의해 주시면 삭제하겠습니다.</p>`,
        ],
      },
      {
        h2: "8. 국제 데이터 이전",
        body: [
          `<p>당사의 서비스 제공업체는 미국을 포함하여 귀하가 거주하는 국가 이외의 국가에서 정보를 처리하고 저장할 수 있습니다. 필요한 경우, 당사는 이러한 이전에 대해 표준 계약 조항과 같은 적절한 보호 조치를 적용합니다.</p>`,
        ],
      },
      {
        h2: "9. 보안",
        body: [
          `<p>당사는 정보를 보호하기 위해 전송 암호화 및 Firebase App Check를 포함한 업계 표준 조치를 사용합니다. 어떠한 전송 또는 저장 방법도 100% 안전할 수 없으며, 당사는 절대적인 보안을 보장할 수 없습니다.</p>`,
        ],
      },
      {
        h2: "10. 본 방침의 변경",
        body: [
          `<p>당사는 본 개인정보 처리방침을 수시로 업데이트할 수 있습니다. 새 버전은 앱 및/또는 이 URL에 게시되며 위의 "최종 업데이트" 날짜가 갱신됩니다. 중대한 변경 사항은 가능한 한 강조 표시됩니다.</p>`,
        ],
      },
      {
        h2: "11. 문의하기",
        body: [
          `<p>본 개인정보 처리방침이나 귀하의 데이터에 대해 질문이 있으시면 문의해 주세요:<br /><a href="mailto:{supportEmail}">{supportEmail}</a></p>`,
        ],
      },
    ],
  },
  terms: {
    metaTitle: "이용약관 — AI Charades",
    metaDescription: "iOS 및 Android용 AI Charades 모바일 앱 이용약관.",
    h1: "이용약관",
    lastUpdatedLabel: "최종 업데이트:",
    dateValue: "2026년 7월 6일",
    intro:
      `본 이용약관("약관")은 <strong>AI Charades</strong> 모바일 애플리케이션(이하 "앱")의 이용을 규율합니다. 앱을 다운로드, 설치 또는 이용함으로써 귀하는 본 약관에 동의하게 됩니다. 동의하지 않으시는 경우 앱을 이용하지 마시기 바랍니다.`,
    sections: [
      {
        h2: "1. 앱 소개",
        body: [`<p>AI Charades는 AI 기반 솔로 모드와 오프라인 헤드업 파티 모드를 제공하는 단어 맞추기 게임입니다. 앱은 무료로 다운로드하고 플레이할 수 있습니다.</p>`],
      },
      {
        h2: "2. 허용되는 사용",
        body: [
          `<ul>
            <li>불법적인 목적으로, 또는 타인의 권리를 침해하는 방식으로 앱을 사용하지 않습니다.</li>
            <li>앱 또는 백엔드 서비스의 운영을 리버스 엔지니어링, 디컴파일하거나 방해하려 시도하지 않습니다.</li>
            <li>생성하는 커스텀 카테고리와 단어에 불법 콘텐츠를 포함해서는 안 되며, 당사 AI 백엔드로 전송되는 것을 포함하여 제출하는 콘텐츠에 대한 책임은 귀하에게 있습니다.</li>
          </ul>`,
        ],
      },
      {
        h2: "3. AI 생성 콘텐츠",
        body: [`<p>AI 모드가 생성하는 단어 팩, 질문, 힌트, 답변은 자동으로 생성되며 때때로 부정확하거나 불완전하거나 예상치 못한 내용일 수 있습니다. 앱은 오락 목적으로만 제공됩니다.</p>`],
      },
      {
        h2: "4. 인앱 결제",
        body: [`<p>구독 또는 인앱 결제는 각각의 약관에 따라 Apple App Store 또는 Google Play가 청구 및 처리합니다. 결제 관리(자격)는 당사 <a href="/{lang}/privacy-policy">개인정보 처리방침</a>에 설명된 대로 RevenueCat이 처리합니다.</p>`],
      },
      {
        h2: "5. 지적재산권",
        body: [`<p>디자인, 마스코트("Fiesta"), 단어 팩, 소프트웨어를 포함한 앱은 당사가 소유하며 지적재산권법에 의해 보호됩니다. 허가 없이 앱의 어떠한 부분도 복사, 수정 또는 배포할 수 없습니다.</p>`],
      },
      {
        h2: "6. 보증의 부인",
        body: [`<p>앱은 명시적이든 묵시적이든 어떠한 종류의 보증 없이 "있는 그대로" 제공됩니다. 당사는 앱이 중단 없이, 오류 없이, 또는 항상 이용 가능할 것이라고 보장하지 않습니다.</p>`],
      },
      {
        h2: "7. 책임의 제한",
        body: [`<p>법이 허용하는 최대 범위 내에서, 당사는 앱 사용으로 인해 발생하는 간접적, 부수적 또는 결과적 손해에 대해 책임을 지지 않습니다.</p>`],
      },
      {
        h2: "8. 종료",
        body: [`<p>당사는 본 약관을 위반한 이용자에 대해 앱 접근을 중단하거나 종료할 수 있습니다.</p>`],
      },
      {
        h2: "9. 본 약관의 변경",
        body: [`<p>당사는 본 약관을 수시로 업데이트할 수 있습니다. 변경 사항이 발효된 후에도 앱을 계속 이용하는 것은 개정된 약관에 대한 동의를 구성합니다.</p>`],
      },
      {
        h2: "10. 문의",
        body: [`<p>본 약관에 대해 질문이 있으신가요? <a href="mailto:{supportEmail}">{supportEmail}</a>로 문의해 주세요.</p>`],
      },
    ],
  },
  support: {
    metaTitle: "고객 지원 — AI Charades",
    metaDescription: "두뇌를 가진 단어 게임, AI Charades에 대한 도움을 받아보세요.",
    h1: "고객 지원",
    intro: "AI Charades 이용 중 도움이 필요하신가요? 의견이 있거나, 버그를 발견했거나, 새로운 단어 팩을 제안하고 싶으신가요? 언제든 알려주세요.",
    emailIntro: "<a href=\"mailto:{supportEmail}\">{supportEmail}</a>로 이메일을 보내주시면 최대한 빨리 답변드리겠습니다.",
    commonQuestionsH2: "자주 묻는 질문",
    commonQuestionsBody: "빠른 답변을 찾고 계신가요? 게임 모드, 오프라인 플레이, 지원 언어 등에 대한 자세한 내용은 홈페이지의 <a href=\"/{lang}/#faq\">FAQ</a>를 확인해 보세요.",
    legalH2: "법적 정보",
  },
};
