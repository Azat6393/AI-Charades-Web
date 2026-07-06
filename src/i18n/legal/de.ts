import type { LegalDictionary } from "../types";

export const de: LegalDictionary = {
  privacy: {
    metaTitle: "Datenschutzerklärung — AI Charades",
    metaDescription: "Wie AI Charades Informationen auf iOS und Android erfasst, nutzt und weitergibt.",
    h1: "Datenschutzerklärung für AI Charades",
    effectiveDate: "Gültig ab:",
    lastUpdated: "Zuletzt aktualisiert:",
    dateValue: "6. Juli 2026",
    intro: [
      `Diese Datenschutzerklärung erläutert, wie AI Charades („wir", „uns", „unser") Informationen erfasst, nutzt und weitergibt, wenn du die mobile Anwendung <strong>AI Charades</strong> (die „App") auf Android und iOS nutzt.`,
      "Durch die Nutzung der App stimmst du den in dieser Erklärung beschriebenen Praktiken zu. Wenn du nicht einverstanden bist, nutze die App bitte nicht.",
    ],
    contactLabel: "Kontakt:",
    appIdLabel: "App-Kennung:",
    sections: [
      {
        h2: "1. Zusammenfassung (die Kurzversion)",
        body: [
          `<ul>
            <li>Wir verlangen <strong>nicht</strong>, dass du ein Konto erstellst oder uns deinen Namen oder deine E-Mail-Adresse gibst, um zu spielen.</li>
            <li>Wir nutzen <strong>Mikrofon und Spracherkennung</strong> nur während Sprachrunden, um das Gesagte in Text umzuwandeln, damit das Spiel deine Vermutung überprüfen kann.</li>
            <li>Der <strong>KI-Spielmodus</strong> sendet Spieltext (z. B. die Kategorie und generierte Wörter) an unseren Server und an Google Gemini, um Inhalte zu erzeugen. Er sendet <strong>keine</strong> Sprachaufnahmen von dir.</li>
            <li>Wir nutzen <strong>Google Firebase</strong> für Analysen, Absturzberichte und Push-Benachrichtigungen sowie <strong>RevenueCat</strong> zur Verwaltung von Abonnements/In-App-Käufen.</li>
            <li>Wir verkaufen deine persönlichen Daten <strong>nicht</strong>.</li>
          </ul>`,
        ],
      },
      {
        h2: "2. Informationen, die wir erfassen",
        body: [
          `<h3>2.1 Informationen, die du bereitstellst</h3>
          <p><strong>Spielinhalte und Einstellungen</strong> — von dir gewählte Kategorien, selbst erstellte Wörter/Kategorien und Einstellungen, die du in der App vornimmst. Selbst erstellte Wörter für KI-Runden können an unser KI-Backend gesendet werden, um das Spiel zu erzeugen.</p>`,
          `<h3>2.2 Mikrofon und Spracheingabe</h3>
          <p>Wenn du eine <strong>Sprachrunde</strong> nutzt, greift die App auf das <strong>Mikrofon</strong> zu und verwendet den <strong>Spracherkennungsdienst</strong> des Geräts (Apple Speech unter iOS, Google-/Android-Spracherkennung unter Android), um deine gesprochene Vermutung in Text umzuwandeln. Je nach Gerät und Betriebssystemeinstellungen kann dieses Audio <strong>auf dem Gerät</strong> oder durch den <strong>Sprachdienst des Betriebssystemanbieters</strong> (Apple oder Google) gemäß deren jeweiligen Datenschutzerklärungen verarbeitet werden. Wir zeichnen deine Rohaudiodaten <strong>nicht</strong> auf, speichern sie nicht und übertragen sie nicht an unsere eigenen Server. Wir verwenden nur den resultierenden Text innerhalb der laufenden Spielrunde.</p>`,
          `<h3>2.3 Automatisch erfasste Informationen</h3>
          <p>Über <strong>Google Firebase</strong> und Plattformdienste können wir Folgendes erfassen:</p>
          <ul>
            <li><strong>Analysedaten</strong> (Firebase Analytics): App-Aufrufe, angesehene Bildschirme, gespielte Spielmodi, In-App-Ereignisse, Sitzungsdauer, grobes Land/Region, Gerätesprache.</li>
            <li><strong>Absturz- und Diagnosedaten</strong> (Firebase Crashlytics): Absturz-Stack-Traces, Gerätemodell, Betriebssystemversion, App-Version und Diagnoseprotokolle.</li>
            <li><strong>Geräte-/technische Kennungen</strong>: eine Firebase-Installations-ID, eine App-Instanz-ID und (für Push) ein Firebase-Cloud-Messaging-Token.</li>
            <li><strong>App-Integritätssignale</strong> (Firebase App Check): ein Token, das bestätigt, dass die Anfrage von einer echten, unveränderten Kopie der App stammt (über Play Integrity unter Android und App Attest unter iOS). Dies dient dem Schutz unseres Backends vor Missbrauch.</li>
          </ul>`,
          `<h3>2.4 Kaufinformationen</h3>
          <p><strong>Abonnements und In-App-Käufe</strong> werden vom <strong>Apple App Store</strong> oder <strong>Google Play</strong> verarbeitet und über <strong>RevenueCat</strong> verwaltet. Wir erhalten den Kaufstatus (z. B. ob du ein aktives „Premium"-Recht hast), eine anonyme RevenueCat-App-Nutzer-ID und Transaktionsmetadaten. <strong>Wir erhalten oder speichern niemals deine vollständigen Zahlungskartendaten</strong> — diese verbleiben bei Apple/Google.</p>`,
          `<h3>2.5 Daten des KI-Spielmodus</h3>
          <p>Wenn du den <strong>KI-Modus</strong> spielst, wird Spieltext (z. B. die ausgewählte Kategorie und die für die Runde generierten Wörter) an unser Backend (<strong>Google Firebase Cloud Functions</strong>) gesendet und an <strong>Google Gemini</strong> weitergeleitet, um Spielinhalte zu erzeugen. Dieser Text enthält konzeptionell keine persönlichen Informationen, es sei denn, du gibst sie selbst in eine eigene Kategorie oder ein eigenes Wort ein.</p>`,
        ],
      },
      {
        h2: "3. Wie wir Informationen nutzen",
        body: [
          `<p>Wir nutzen die oben genannten Informationen, um:</p>
          <ul>
            <li>Das Spiel bereitzustellen und zu betreiben, einschließlich KI-generierter Runden und Sprach-Ratefunktionen.</li>
            <li>Dein Abonnement zu verwalten und Premium-Funktionen freizuschalten.</li>
            <li>Optionale Push-Benachrichtigungen zu senden (z. B. Erinnerungen, neue Inhalte) — nur wenn du die Benachrichtigungsberechtigung erteilst.</li>
            <li>Zu verstehen, wie die App genutzt wird, und Funktionen sowie Leistung zu verbessern (Analysen).</li>
            <li>Abstürze zu diagnostizieren und Fehler zu beheben (Absturzberichte).</li>
            <li>Unser Backend vor Betrug, Missbrauch und automatisierten Angriffen zu schützen (App Check).</li>
          </ul>`,
        ],
      },
      {
        h2: "4. Wie wir Informationen weitergeben",
        body: [
          `<p>Wir geben Informationen nur an Dienstanbieter weiter, die uns beim Betrieb der App helfen:</p>
          <table>
            <thead>
              <tr><th>Anbieter</th><th>Zweck</th><th>Datenschutzerklärung</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Google Firebase (Analytics, Crashlytics, Cloud Messaging, App Check, Cloud Functions)</td>
                <td>Analysen, Absturzberichte, Push, Integrität, Backend</td>
                <td><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">firebase.google.com/support/privacy</a></td>
              </tr>
              <tr>
                <td>Google-/Apple-Plattform-Sprachdienste</td>
                <td>Sprache-zu-Text für Sprachrunden</td>
                <td>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a> ·
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a>
                </td>
              </tr>
              <tr>
                <td>Google Gemini</td>
                <td>Erzeugung von KI-Spielinhalten</td>
                <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a></td>
              </tr>
              <tr>
                <td>RevenueCat</td>
                <td>Verwaltung von Abonnements/Käufen</td>
                <td><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">revenuecat.com/privacy</a></td>
              </tr>
              <tr>
                <td>Apple App Store / Google Play</td>
                <td>Zahlungsabwicklung</td>
                <td>
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a> ·
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>Wir verkaufen deine persönlichen Daten <strong>nicht</strong> und geben sie <strong>nicht</strong> für kontextübergreifende Verhaltenswerbung weiter.</p>
          <p>Wir können Informationen offenlegen, wenn dies gesetzlich vorgeschrieben ist oder um unsere Rechte, Sicherheit oder Eigentum oder die unserer Nutzer zu schützen.</p>`,
        ],
      },
      {
        h2: "5. Speicherdauer",
        body: [
          `<ul>
            <li>Wir bewahren Analyse- und Absturzdaten für die von Firebase angebotenen Aufbewahrungsfristen auf (in der Regel bis zu 14 Monate für Analysen und ein begrenztes Zeitfenster für Absturzdaten).</li>
            <li>Kauf-/Berechtigungsdatensätze werden so lange aufbewahrt, wie es zur Bereitstellung des Dienstes und zur Einhaltung von Steuer-/Buchhaltungspflichten erforderlich ist.</li>
            <li>KI-Anfragetext kann vorübergehend von uns und von Google Gemini zur Verarbeitung und Missbrauchsprävention gemäß deren jeweiligen Richtlinien gespeichert werden.</li>
          </ul>`,
        ],
      },
      {
        h2: "6. Deine Wahlmöglichkeiten und Rechte",
        body: [
          `<ul>
            <li><strong>Mikrofon / Sprache</strong>: Du kannst die Mikrofonberechtigung in deinen Geräteeinstellungen ablehnen oder widerrufen. Sprachrunden funktionieren dann nicht mehr, der Rest des Spiels aber schon.</li>
            <li><strong>Benachrichtigungen</strong>: Du kannst Push-Benachrichtigungen in deinen Geräteeinstellungen deaktivieren.</li>
            <li><strong>Analysen</strong>: Du kannst Werbe-/Analyse-Tracking über die Datenschutzeinstellungen deines Geräts einschränken (z. B. iOS „Apps erlauben, Tracking anzufordern" und Android-Werbeeinstellungen).</li>
            <li><strong>Zugriff / Löschung</strong>: Da wir kein Konto verlangen, speichern wir kaum oder keine Daten, die dich persönlich identifizieren. Um Zugriff auf oder Löschung von Daten zu beantragen, die mit deiner Installation verknüpft sind, kontaktiere uns unter <a href="mailto:{supportEmail}">{supportEmail}</a>.</li>
          </ul>
          <p>Je nachdem, wo du lebst, hast du möglicherweise Rechte gemäß der <strong>DSGVO</strong> (EWR/UK) oder <strong>CCPA/CPRA</strong> (Kalifornien), einschließlich des Rechts auf Zugriff, Berichtigung, Löschung oder Einschränkung der Verarbeitung deiner personenbezogenen Daten sowie des Rechts, eine Beschwerde bei einer Aufsichtsbehörde einzureichen.</p>`,
        ],
      },
      {
        h2: "7. Datenschutz von Kindern",
        body: [
          `<p>AI Charades richtet sich an ein <strong>allgemeines Publikum</strong> und ist nicht für Kinder unter 13 Jahren bestimmt. Wir erfassen wissentlich keine persönlichen Informationen von Kindern unter diesem Alter. Wenn du glaubst, dass ein Kind uns persönliche Informationen mitgeteilt hat, kontaktiere uns, und wir werden sie löschen.</p>`,
        ],
      },
      {
        h2: "8. Internationale Datenübermittlungen",
        body: [
          `<p>Unsere Dienstanbieter können Informationen in anderen Ländern als deinem Wohnsitzland verarbeiten und speichern, einschließlich der Vereinigten Staaten. Sofern erforderlich, stützen wir uns bei diesen Übermittlungen auf geeignete Garantien (wie Standardvertragsklauseln).</p>`,
        ],
      },
      {
        h2: "9. Sicherheit",
        body: [
          `<p>Wir setzen branchenübliche Maßnahmen (einschließlich Transportverschlüsselung und Firebase App Check) zum Schutz von Informationen ein. Keine Übertragungs- oder Speichermethode ist zu 100 % sicher, und wir können keine absolute Sicherheit garantieren.</p>`,
        ],
      },
      {
        h2: "10. Änderungen dieser Erklärung",
        body: [
          `<p>Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir veröffentlichen die neue Version in der App und/oder unter dieser URL und aktualisieren das Datum „Zuletzt aktualisiert" oben. Wesentliche Änderungen werden nach Möglichkeit hervorgehoben.</p>`,
        ],
      },
      {
        h2: "11. Kontakt",
        body: [
          `<p>Wenn du Fragen zu dieser Datenschutzerklärung oder deinen Daten hast, kontaktiere:<br /><a href="mailto:{supportEmail}">{supportEmail}</a></p>`,
        ],
      },
    ],
  },
  terms: {
    metaTitle: "Nutzungsbedingungen — AI Charades",
    metaDescription: "Nutzungsbedingungen für die mobile App AI Charades auf iOS und Android.",
    h1: "Nutzungsbedingungen",
    lastUpdatedLabel: "Zuletzt aktualisiert:",
    dateValue: "6. Juli 2026",
    intro:
      `Diese Nutzungsbedingungen (die „Bedingungen") regeln deine Nutzung der mobilen Anwendung <strong>AI Charades</strong> (die „App"). Durch das Herunterladen, Installieren oder Nutzen der App stimmst du diesen Bedingungen zu. Wenn du nicht einverstanden bist, nutze die App bitte nicht.`,
    sections: [
      {
        h2: "1. Die App",
        body: [`<p>AI Charades ist ein Wortratespiel mit einem KI-gestützten Solo-Modus und einem offline spielbaren Stirnraten-Party-Modus. Die App ist kostenlos herunterladbar und spielbar.</p>`],
      },
      {
        h2: "2. Zulässige Nutzung",
        body: [
          `<ul>
            <li>Du wirst die App nicht für rechtswidrige Zwecke oder in einer Weise nutzen, die die Rechte anderer verletzt.</li>
            <li>Du wirst nicht versuchen, die App zurückzuentwickeln, zu dekompilieren oder den Betrieb der App oder der Backend-Dienste zu stören.</li>
            <li>Von dir erstellte eigene Kategorien und Wörter dürfen keine illegalen Inhalte enthalten; du bist für von dir übermittelte Inhalte verantwortlich, einschließlich allem, was an unser KI-Backend gesendet wird.</li>
          </ul>`,
        ],
      },
      {
        h2: "3. KI-generierte Inhalte",
        body: [`<p>Wortpakete, Fragen, Hinweise und Antworten, die vom KI-Modus generiert werden, entstehen automatisch und können gelegentlich ungenau, unvollständig oder unerwartet sein. Die App ist ausschließlich zu Unterhaltungszwecken bestimmt.</p>`],
      },
      {
        h2: "4. In-App-Käufe",
        body: [`<p>Alle Abonnements oder In-App-Käufe werden vom Apple App Store oder von Google Play gemäß deren jeweiligen Bedingungen abgerechnet und verarbeitet. Die Verwaltung von Käufen (Berechtigungen) erfolgt über RevenueCat, wie in unserer <a href="/{lang}/privacy-policy">Datenschutzerklärung</a> beschrieben.</p>`],
      },
      {
        h2: "5. Geistiges Eigentum",
        body: [`<p>Die App, einschließlich ihres Designs, ihres Maskottchens („Fiesta"), ihrer Wortpakete und ihrer Software, gehört uns und ist durch Gesetze zum Schutz geistigen Eigentums geschützt. Du darfst keinen Teil der App ohne Genehmigung kopieren, verändern oder verbreiten.</p>`],
      },
      {
        h2: "6. Gewährleistungsausschluss",
        body: [`<p>Die App wird „wie besehen" ohne Gewährleistungen jeglicher Art, weder ausdrücklich noch stillschweigend, bereitgestellt. Wir garantieren nicht, dass die App unterbrechungsfrei, fehlerfrei oder jederzeit verfügbar ist.</p>`],
      },
      {
        h2: "7. Haftungsbeschränkung",
        body: [`<p>Soweit gesetzlich zulässig, haften wir nicht für indirekte, zufällige oder Folgeschäden, die aus deiner Nutzung der App entstehen.</p>`],
      },
      {
        h2: "8. Kündigung",
        body: [`<p>Wir können den Zugang zur App für Nutzer, die gegen diese Bedingungen verstoßen, aussetzen oder beenden.</p>`],
      },
      {
        h2: "9. Änderungen dieser Bedingungen",
        body: [`<p>Wir können diese Bedingungen von Zeit zu Zeit aktualisieren. Die fortgesetzte Nutzung der App nach Inkrafttreten von Änderungen stellt die Annahme der überarbeiteten Bedingungen dar.</p>`],
      },
      {
        h2: "10. Kontakt",
        body: [`<p>Fragen zu diesen Bedingungen? Kontaktiere uns unter <a href="mailto:{supportEmail}">{supportEmail}</a>.</p>`],
      },
    ],
  },
  support: {
    metaTitle: "Support — AI Charades",
    metaDescription: "Erhalte Hilfe zu AI Charades — dem Wortspiel mit Grips.",
    h1: "Support",
    intro: "Brauchst du Hilfe mit AI Charades? Hast du Feedback, einen Fehler gefunden oder möchtest ein neues Wortpaket vorschlagen? Wir freuen uns, von dir zu hören.",
    emailIntro: "Schreib uns eine E-Mail an <a href=\"mailto:{supportEmail}\">{supportEmail}</a>, und wir melden uns so schnell wie möglich zurück.",
    commonQuestionsH2: "Häufige Fragen",
    commonQuestionsBody: "Suchst du schnelle Antworten? Schau dir die <a href=\"/{lang}/#faq\">FAQ</a> auf der Startseite an für Details zu Spielmodi, Offline-Spiel, Sprachen und mehr.",
    legalH2: "Rechtliches",
  },
};
