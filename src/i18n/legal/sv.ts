import type { LegalDictionary } from "../types";

export const sv: LegalDictionary = {
  privacy: {
    metaTitle: "Integritetspolicy — AI Charades",
    metaDescription: "Hur AI Charades samlar in, använder och delar information på iOS och Android.",
    h1: "Integritetspolicy för AI Charades",
    effectiveDate: "Gäller från:",
    lastUpdated: "Senast uppdaterad:",
    dateValue: "6 juli 2026",
    intro: [
      `Denna integritetspolicy förklarar hur AI Charades ("vi", "oss", "vår") samlar in, använder och delar information när du använder mobilapplikationen <strong>AI Charades</strong> ("Appen") på Android och iOS.`,
      "Genom att använda Appen godkänner du de rutiner som beskrivs i denna policy. Om du inte godkänner detta, vänligen använd inte Appen.",
    ],
    contactLabel: "Kontakt:",
    appIdLabel: "App-identifierare:",
    sections: [
      {
        h2: "1. Sammanfattning (den korta versionen)",
        body: [
          `<ul>
            <li>Vi ber dig <strong>inte</strong> skapa ett konto eller ge oss ditt namn eller e-post för att spela.</li>
            <li>Vi använder <strong>mikrofon och taligenkänning</strong> endast under röstrundor, för att omvandla det du säger till text så att spelet kan kontrollera din gissning.</li>
            <li><strong>AI-spelläget</strong> skickar speltext (som kategori och genererade ord) till vår server och till Google Gemini för att generera innehåll. Det skickar <strong>inte</strong> dina röstinspelningar.</li>
            <li>Vi använder <strong>Google Firebase</strong> för analys, kraschrapportering och pushnotiser, samt <strong>RevenueCat</strong> för att hantera prenumerationer/köp i appen.</li>
            <li>Vi säljer <strong>inte</strong> din personliga information.</li>
          </ul>`,
        ],
      },
      {
        h2: "2. Information vi samlar in",
        body: [
          `<h3>2.1 Information du tillhandahåller</h3>
          <p><strong>Spelinnehåll och inställningar</strong> — kategorier du väljer, egna ord/kategorier du skapar samt inställningar du gör i Appen. Egna ord du skapar för AI-rundor kan skickas till vår AI-backend för att generera spel.</p>`,
          `<h3>2.2 Mikrofon och röstinmatning</h3>
          <p>När du använder en <strong>röstrunda</strong> använder Appen <strong>mikrofonen</strong> och enhetens <strong>taligenkänningstjänst</strong> (Apple Speech på iOS, Google/Android taligenkänning på Android) för att omvandla din uttalade gissning till text. Beroende på din enhet och OS-inställningar kan detta ljud behandlas <strong>på enheten</strong> eller av <strong>operativsystemsleverantörens</strong> taltjänst (Apple eller Google) enligt deras respektive integritetspolicyer. Vi spelar <strong>inte</strong> in, lagrar eller överför din råa ljudinspelning till våra egna servrar. Vi använder endast den resulterande texten inom den aktuella spelrundan.</p>`,
          `<h3>2.3 Information som samlas in automatiskt</h3>
          <p>Via <strong>Google Firebase</strong> och plattformstjänster kan vi samla in:</p>
          <ul>
            <li><strong>Analysdata</strong> (Firebase Analytics): appöppningar, visade skärmar, spelade lägen, händelser i appen, sessionslängd, ungefärligt land/region, enhetsspråk.</li>
            <li><strong>Krasch- och diagnostikdata</strong> (Firebase Crashlytics): kraschspårningar, enhetsmodell, OS-version, appversion och diagnostikloggar.</li>
            <li><strong>Enhets-/tekniska identifierare</strong>: ett Firebase-installations-ID, app-instans-ID och (för push) en Firebase Cloud Messaging-token.</li>
            <li><strong>Appintegritetssignaler</strong> (Firebase App Check): en token som intygar att förfrågan kommer från en äkta, oförändrad kopia av Appen (via Play Integrity på Android och App Attest på iOS). Detta används för att skydda vår backend mot missbruk.</li>
          </ul>`,
          `<h3>2.4 Köpinformation</h3>
          <p><strong>Prenumerationer och köp i appen</strong> behandlas av <strong>Apple App Store</strong> eller <strong>Google Play</strong>, och hanteras via <strong>RevenueCat</strong>. Vi tar emot köpstatus (t.ex. om du har en aktiv "premium"-rättighet), ett anonymt RevenueCat-app-användar-ID samt transaktionsmetadata. <strong>Vi tar aldrig emot eller lagrar dina fullständiga betalkortsuppgifter</strong> — de stannar hos Apple/Google.</p>`,
          `<h3>2.5 Data i AI-spelläget</h3>
          <p>När du spelar <strong>AI-läget</strong> skickas speltext (som vald kategori och orden som genererats för rundan) till vår backend (<strong>Google Firebase Cloud Functions</strong>) och vidare till <strong>Google Gemini</strong> för att generera spelinnehåll. Denna text innehåller inte, per design, personlig information om du inte själv anger det i en egen kategori eller ett eget ord.</p>`,
        ],
      },
      {
        h2: "3. Hur vi använder information",
        body: [
          `<p>Vi använder ovanstående information för att:</p>
          <ul>
            <li>Tillhandahålla och driva spelet, inklusive AI-genererade rundor och röstgissning.</li>
            <li>Hantera din prenumeration och låsa upp premiumfunktioner.</li>
            <li>Skicka valfria pushnotiser (t.ex. påminnelser, nytt innehåll) — endast om du beviljar tillstånd för notiser.</li>
            <li>Förstå hur Appen används och förbättra funktioner och prestanda (analys).</li>
            <li>Diagnostisera krascher och åtgärda buggar (kraschrapportering).</li>
            <li>Skydda vår backend från bedrägeri, missbruk och automatiserade attacker (App Check).</li>
          </ul>`,
        ],
      },
      {
        h2: "4. Hur vi delar information",
        body: [
          `<p>Vi delar information endast med tjänsteleverantörer som hjälper oss att driva Appen:</p>
          <table>
            <thead>
              <tr><th>Leverantör</th><th>Syfte</th><th>Integritetspolicy</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Google Firebase (Analytics, Crashlytics, Cloud Messaging, App Check, Cloud Functions)</td>
                <td>Analys, kraschrapportering, push, integritet, backend</td>
                <td><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">firebase.google.com/support/privacy</a></td>
              </tr>
              <tr>
                <td>Google/Apple plattformens taltjänster</td>
                <td>Tal-till-text för röstrundor</td>
                <td>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a> ·
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a>
                </td>
              </tr>
              <tr>
                <td>Google Gemini</td>
                <td>Generera AI-spelinnehåll</td>
                <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a></td>
              </tr>
              <tr>
                <td>RevenueCat</td>
                <td>Hantering av prenumerationer/köp</td>
                <td><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">revenuecat.com/privacy</a></td>
              </tr>
              <tr>
                <td>Apple App Store / Google Play</td>
                <td>Betalningshantering</td>
                <td>
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a> ·
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>Vi säljer <strong>inte</strong> din personliga information och delar den <strong>inte</strong> för beteendebaserad annonsering över olika sammanhang.</p>
          <p>Vi kan lämna ut information om det krävs enligt lag, eller för att skydda våra rättigheter, säkerhet eller egendom, eller våra användares.</p>`,
        ],
      },
      {
        h2: "5. Datalagring",
        body: [
          `<ul>
            <li>Vi behåller analys- och kraschdata under de lagringsperioder som Firebase erbjuder (vanligtvis upp till 14 månader för analys och en begränsad period för kraschdata).</li>
            <li>Köp-/rättighetsuppgifter behålls så länge det behövs för att tillhandahålla tjänsten och för att uppfylla skatte-/bokföringsskyldigheter.</li>
            <li>AI-förfrågningstext kan tillfälligt behållas av oss och av Google Gemini för behandling och missbruksförebyggande, enligt deras respektive policyer.</li>
          </ul>`,
        ],
      },
      {
        h2: "6. Dina val och rättigheter",
        body: [
          `<ul>
            <li><strong>Mikrofon/röst</strong>: Du kan neka eller återkalla mikrofonbehörighet i dina enhetsinställningar. Röstrundor fungerar inte utan den, men resten av spelet gör det.</li>
            <li><strong>Notiser</strong>: Du kan inaktivera pushnotiser i dina enhetsinställningar.</li>
            <li><strong>Analys</strong>: Du kan begränsa annons-/analysspårning via din enhets integritetsinställningar (t.ex. iOS "Tillåt appar att begära spårning" och Androids annonsinställningar).</li>
            <li><strong>Åtkomst/radering</strong>: Eftersom vi inte kräver ett konto har vi lite eller ingen data som identifierar dig personligen. För att begära åtkomst till eller radering av data kopplad till din installation, kontakta oss på <a href="mailto:{supportEmail}">{supportEmail}</a>.</li>
          </ul>
          <p>Beroende på var du bor kan du ha rättigheter enligt <strong>GDPR</strong> (EES/Storbritannien) eller <strong>CCPA/CPRA</strong> (Kalifornien), inklusive rätten att få tillgång till, korrigera, radera eller begränsa behandlingen av dina personuppgifter, samt att lämna in ett klagomål till en tillsynsmyndighet.</p>`,
        ],
      },
      {
        h2: "7. Barns integritet",
        body: [
          `<p>AI Charades riktar sig till en <strong>allmän publik</strong> och är inte avsedd för barn under 13 år. Vi samlar inte medvetet in personlig information från barn under den åldern. Om du tror att ett barn har lämnat oss personlig information, kontakta oss så raderar vi den.</p>`,
        ],
      },
      {
        h2: "8. Internationella dataöverföringar",
        body: [
          `<p>Våra tjänsteleverantörer kan behandla och lagra information i andra länder än det du bor i, inklusive USA. Där det krävs förlitar vi oss på lämpliga skyddsåtgärder (såsom standardavtalsklausuler) för dessa överföringar.</p>`,
        ],
      },
      {
        h2: "9. Säkerhet",
        body: [
          `<p>Vi använder branschstandardåtgärder (inklusive transportkryptering och Firebase App Check) för att skydda information. Ingen överförings- eller lagringsmetod är 100 % säker, och vi kan inte garantera absolut säkerhet.</p>`,
        ],
      },
      {
        h2: "10. Ändringar av denna policy",
        body: [
          `<p>Vi kan uppdatera denna integritetspolicy från tid till annan. Vi kommer att publicera den nya versionen i Appen och/eller på denna URL och uppdatera datumet för "Senast uppdaterad" ovan. Väsentliga ändringar kommer att markeras när det är praktiskt möjligt.</p>`,
        ],
      },
      {
        h2: "11. Kontakta oss",
        body: [
          `<p>Om du har frågor om denna integritetspolicy eller dina uppgifter, kontakta:<br /><a href="mailto:{supportEmail}">{supportEmail}</a></p>`,
        ],
      },
    ],
  },
  terms: {
    metaTitle: "Användarvillkor — AI Charades",
    metaDescription: "Användarvillkor för mobilappen AI Charades på iOS och Android.",
    h1: "Användarvillkor",
    lastUpdatedLabel: "Senast uppdaterad:",
    dateValue: "6 juli 2026",
    intro:
      `Dessa användarvillkor ("Villkor") reglerar din användning av mobilapplikationen <strong>AI Charades</strong> ("Appen"). Genom att ladda ner, installera eller använda Appen godkänner du dessa Villkor. Om du inte godkänner detta, vänligen använd inte Appen.`,
    sections: [
      {
        h2: "1. Appen",
        body: [`<p>AI Charades är ett ordgissningsspel som erbjuder ett AI-drivet sololäge och ett offline charader-partyläge. Appen är gratis att ladda ner och spela.</p>`],
      },
      {
        h2: "2. Godtagbar användning",
        body: [
          `<ul>
            <li>Du kommer inte att använda Appen för olagliga ändamål eller på ett sätt som kränker andras rättigheter.</li>
            <li>Du kommer inte att försöka reverse-engineera, dekompilera eller störa Appens funktion eller backend-tjänster.</li>
            <li>Egna kategorier och ord du skapar får inte innehålla olagligt innehåll; du ansvarar för innehåll du skickar in, inklusive allt som skickas till vår AI-backend.</li>
          </ul>`,
        ],
      },
      {
        h2: "3. AI-genererat innehåll",
        body: [`<p>Ordpaket, frågor, ledtrådar och svar som genereras av AI-läget produceras automatiskt och kan ibland vara felaktiga, ofullständiga eller oväntade. Appen är endast avsedd för underhållningssyfte.</p>`],
      },
      {
        h2: "4. Köp i appen",
        body: [`<p>Eventuella prenumerationer eller köp i appen faktureras och behandlas av Apple App Store eller Google Play, i enlighet med deras respektive villkor. Köphantering (rättigheter) sköts av RevenueCat enligt beskrivningen i vår <a href="/{lang}/privacy-policy">integritetspolicy</a>.</p>`],
      },
      {
        h2: "5. Immateriella rättigheter",
        body: [`<p>Appen, inklusive dess design, maskot ("Fiesta"), ordpaket och programvara, ägs av oss och skyddas av immaterialrättslig lagstiftning. Du får inte kopiera, ändra eller distribuera någon del av Appen utan tillstånd.</p>`],
      },
      {
        h2: "6. Friskrivning från garantier",
        body: [`<p>Appen tillhandahålls "i befintligt skick" utan garantier av något slag, uttryckliga eller underförstådda. Vi garanterar inte att Appen kommer att vara oavbruten, felfri eller tillgänglig hela tiden.</p>`],
      },
      {
        h2: "7. Ansvarsbegränsning",
        body: [`<p>I den utsträckning lagen tillåter är vi inte ansvariga för indirekta, tillfälliga eller följdskador som uppstår från din användning av Appen.</p>`],
      },
      {
        h2: "8. Uppsägning",
        body: [`<p>Vi kan stänga av eller avsluta åtkomsten till Appen för användare som bryter mot dessa Villkor.</p>`],
      },
      {
        h2: "9. Ändringar av dessa Villkor",
        body: [`<p>Vi kan uppdatera dessa Villkor från tid till annan. Fortsatt användning av Appen efter att ändringar trätt i kraft utgör godkännande av de reviderade Villkoren.</p>`],
      },
      {
        h2: "10. Kontakt",
        body: [`<p>Frågor om dessa Villkor? Kontakta oss på <a href="mailto:{supportEmail}">{supportEmail}</a>.</p>`],
      },
    ],
  },
  support: {
    metaTitle: "Support — AI Charades",
    metaDescription: "Få hjälp med AI Charades — ordspelet med en hjärna.",
    h1: "Support",
    intro: "Behöver du hjälp med AI Charades? Har du feedback, hittat en bugg eller vill föreslå ett nytt ordpaket? Vi vill gärna höra från dig.",
    emailIntro: "Mejla oss på <a href=\"mailto:{supportEmail}\">{supportEmail}</a> så återkommer vi så snart vi kan.",
    commonQuestionsH2: "Vanliga frågor",
    commonQuestionsBody: "Letar du efter snabba svar? Kolla in <a href=\"/{lang}/#faq\">FAQ</a> på startsidan för detaljer om spellägen, offline-spel, språk med mera.",
    legalH2: "Juridiskt",
  },
};
