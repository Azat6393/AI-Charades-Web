import type { LegalDictionary } from "../types";

export const nl: LegalDictionary = {
  privacy: {
    metaTitle: "Privacybeleid — AI Charades",
    metaDescription: "Hoe AI Charades gegevens verzamelt, gebruikt en deelt op iOS en Android.",
    h1: "Privacybeleid voor AI Charades",
    effectiveDate: "Ingangsdatum:",
    lastUpdated: "Laatst bijgewerkt:",
    dateValue: "6 juli 2026",
    intro: [
      `Dit Privacybeleid legt uit hoe AI Charades ("wij", "ons", "onze") informatie verzamelt, gebruikt en deelt wanneer je de mobiele applicatie <strong>AI Charades</strong> (de "App") gebruikt op Android en iOS.`,
      "Door de App te gebruiken ga je akkoord met de praktijken die in dit beleid worden beschreven. Ga je hier niet mee akkoord, gebruik de App dan niet.",
    ],
    contactLabel: "Contact:",
    appIdLabel: "App-identificatie:",
    sections: [
      {
        h2: "1. Samenvatting (de korte versie)",
        body: [
          `<ul>
            <li>We vragen je <strong>niet</strong> om een account aan te maken of ons je naam of e-mailadres te geven om te spelen.</li>
            <li>We gebruiken de <strong>microfoon en spraakherkenning</strong> alleen tijdens spraakrondes, om wat je zegt om te zetten in tekst zodat het spel je gok kan controleren.</li>
            <li>De <strong>AI-spelmodus</strong> stuurt speltekst (zoals de categorie en gegenereerde woorden) naar onze server en naar Google Gemini om content te genereren. Dit stuurt <strong>geen</strong> spraakopnames van jou door.</li>
            <li>We gebruiken <strong>Google Firebase</strong> voor analyse, crashrapportage en pushmeldingen, en <strong>RevenueCat</strong> om abonnementen/in-app-aankopen te beheren.</li>
            <li>We verkopen je persoonsgegevens <strong>niet</strong>.</li>
          </ul>`,
        ],
      },
      {
        h2: "2. Informatie die we verzamelen",
        body: [
          `<h3>2.1 Informatie die je verstrekt</h3>
          <p><strong>Spelinhoud en instellingen</strong> — categorieën die je kiest, eigen woorden/categorieën die je maakt, en voorkeuren die je instelt in de App. Eigen woorden die je maakt voor AI-rondes kunnen naar onze AI-backend worden gestuurd om gameplay te genereren.</p>`,
          `<h3>2.2 Microfoon en spraakinvoer</h3>
          <p>Wanneer je een <strong>spraakronde</strong> gebruikt, krijgt de App toegang tot de <strong>microfoon</strong> en gebruikt de spraakherkenningsservice van je apparaat (Apple Speech op iOS, Google/Android-spraakherkenning op Android) om je gesproken gok om te zetten in tekst. Afhankelijk van je apparaat- en besturingssysteeminstellingen kan deze audio <strong>op het apparaat zelf</strong> worden verwerkt of door de spraakservice van de <strong>leverancier van het besturingssysteem</strong> (Apple of Google) onder hun eigen privacybeleid. We nemen je ruwe audio <strong>niet</strong> op, slaan het niet op en sturen het niet door naar onze eigen servers. We gebruiken alleen de resulterende tekst binnen de huidige speelronde.</p>`,
          `<h3>2.3 Automatisch verzamelde informatie</h3>
          <p>Via <strong>Google Firebase</strong> en platformdiensten kunnen we het volgende verzamelen:</p>
          <ul>
            <li><strong>Analysegegevens</strong> (Firebase Analytics): app-openingen, bekeken schermen, gespeelde spelmodi, in-app-gebeurtenissen, sessieduur, globaal land/regio, apparaattaal.</li>
            <li><strong>Crash- en diagnostische gegevens</strong> (Firebase Crashlytics): crash-stacktraces, apparaatmodel, OS-versie, app-versie en diagnostische logbestanden.</li>
            <li><strong>Apparaat-/technische identificatoren</strong>: een Firebase-installatie-ID, app-instantie-ID en (voor push) een Firebase Cloud Messaging-token.</li>
            <li><strong>App-integriteitssignalen</strong> (Firebase App Check): een token dat bevestigt dat het verzoek afkomstig is van een echte, ongewijzigde kopie van de App (via Play Integrity op Android en App Attest op iOS). Dit wordt gebruikt om onze backend tegen misbruik te beschermen.</li>
          </ul>`,
          `<h3>2.4 Aankoopinformatie</h3>
          <p><strong>Abonnementen en in-app-aankopen</strong> worden verwerkt door de <strong>Apple App Store</strong> of <strong>Google Play</strong>, en beheerd via <strong>RevenueCat</strong>. Wij ontvangen aankoopstatus (bijv. of je een actief "premium"-recht hebt), een anonieme RevenueCat-app-gebruikers-ID en transactiemetadata. <strong>We ontvangen of bewaren nooit je volledige betaalkaartgegevens</strong> — die blijven bij Apple/Google.</p>`,
          `<h3>2.5 Gegevens van de AI-spelmodus</h3>
          <p>Wanneer je de <strong>AI-modus</strong> speelt, wordt speltekst (zoals de gekozen categorie en de woorden die voor de ronde zijn gegenereerd) verstuurd naar onze backend (<strong>Google Firebase Cloud Functions</strong>) en doorgestuurd naar <strong>Google Gemini</strong> om spelinhoud te genereren. Deze tekst bevat standaard geen persoonsgegevens, tenzij je die zelf invoert in een eigen categorie of woord.</p>`,
        ],
      },
      {
        h2: "3. Hoe we informatie gebruiken",
        body: [
          `<p>We gebruiken bovenstaande informatie om:</p>
          <ul>
            <li>Het spel te leveren en draaiende te houden, inclusief door AI gegenereerde rondes en spraakgokken.</li>
            <li>Je abonnement te beheren en premiumfuncties te ontgrendelen.</li>
            <li>Optionele pushmeldingen te sturen (bijv. herinneringen, nieuwe content) — alleen als je toestemming geeft voor meldingen.</li>
            <li>Te begrijpen hoe de App wordt gebruikt en functies en prestaties te verbeteren (analyse).</li>
            <li>Crashes te diagnosticeren en bugs te verhelpen (crashrapportage).</li>
            <li>Onze backend te beschermen tegen fraude, misbruik en geautomatiseerde aanvallen (App Check).</li>
          </ul>`,
        ],
      },
      {
        h2: "4. Hoe we informatie delen",
        body: [
          `<p>We delen informatie alleen met dienstverleners die ons helpen de App te laten draaien:</p>
          <table>
            <thead>
              <tr><th>Leverancier</th><th>Doel</th><th>Privacybeleid</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Google Firebase (Analytics, Crashlytics, Cloud Messaging, App Check, Cloud Functions)</td>
                <td>Analyse, crashrapportage, push, integriteit, backend</td>
                <td><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">firebase.google.com/support/privacy</a></td>
              </tr>
              <tr>
                <td>Google/Apple platformspraakdiensten</td>
                <td>Spraak-naar-tekst voor spraakrondes</td>
                <td>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a> ·
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a>
                </td>
              </tr>
              <tr>
                <td>Google Gemini</td>
                <td>AI-spelinhoud genereren</td>
                <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a></td>
              </tr>
              <tr>
                <td>RevenueCat</td>
                <td>Beheer van abonnementen/aankopen</td>
                <td><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">revenuecat.com/privacy</a></td>
              </tr>
              <tr>
                <td>Apple App Store / Google Play</td>
                <td>Betalingsverwerking</td>
                <td>
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a> ·
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>We verkopen je persoonsgegevens <strong>niet</strong> en delen ze <strong>niet</strong> voor cross-context gedragsgerichte advertenties.</p>
          <p>We kunnen informatie openbaar maken indien vereist door de wet, of om onze rechten, veiligheid of eigendom, of die van onze gebruikers, te beschermen.</p>`,
        ],
      },
      {
        h2: "5. Bewaartermijn van gegevens",
        body: [
          `<ul>
            <li>We bewaren analyse- en crashgegevens gedurende de bewaartermijnen die Firebase biedt (doorgaans tot 14 maanden voor analysegegevens, en een beperkte periode voor crashgegevens).</li>
            <li>Aankoop-/rechtengegevens worden bewaard zolang nodig is om de dienst te leveren en te voldoen aan fiscale/boekhoudkundige verplichtingen.</li>
            <li>AI-verzoektekst kan tijdelijk door ons en door Google Gemini worden bewaard voor verwerking en misbruikpreventie, volgens hun eigen beleid.</li>
          </ul>`,
        ],
      },
      {
        h2: "6. Jouw keuzes en rechten",
        body: [
          `<ul>
            <li><strong>Microfoon/spraak</strong>: Je kunt microfoontoestemming weigeren of intrekken in de instellingen van je apparaat. Spraakrondes werken dan niet, maar de rest van het spel wel.</li>
            <li><strong>Meldingen</strong>: Je kunt pushmeldingen uitschakelen in de instellingen van je apparaat.</li>
            <li><strong>Analyse</strong>: Je kunt advertentie-/analysetracking beperken via de privacy-instellingen van je apparaat (bijv. iOS "Apps toestaan om te vragen om te volgen" en Android-advertentie-instellingen).</li>
            <li><strong>Toegang/verwijdering</strong>: Omdat we geen account vereisen, hebben we weinig tot geen gegevens die jou persoonlijk identificeren. Om toegang tot of verwijdering van gegevens van jouw installatie aan te vragen, neem contact met ons op via <a href="mailto:{supportEmail}">{supportEmail}</a>.</li>
          </ul>
          <p>Afhankelijk van waar je woont, kun je rechten hebben onder de <strong>AVG/GDPR</strong> (EER/VK) of <strong>CCPA/CPRA</strong> (Californië), waaronder het recht om je persoonsgegevens in te zien, te corrigeren, te verwijderen of de verwerking ervan te beperken, en om een klacht in te dienen bij een toezichthoudende autoriteit.</p>`,
        ],
      },
      {
        h2: "7. Privacy van kinderen",
        body: [
          `<p>AI Charades is bedoeld voor een <strong>algemeen publiek</strong> en is niet gericht op kinderen onder de 13 jaar. We verzamelen niet bewust persoonsgegevens van kinderen onder die leeftijd. Als je denkt dat een kind ons persoonsgegevens heeft verstrekt, neem dan contact met ons op en wij zullen deze verwijderen.</p>`,
        ],
      },
      {
        h2: "8. Internationale gegevensoverdrachten",
        body: [
          `<p>Onze dienstverleners kunnen informatie verwerken en opslaan in andere landen dan waar je woont, waaronder de Verenigde Staten. Waar vereist, vertrouwen we op passende waarborgen (zoals Standaardcontractbepalingen) voor deze overdrachten.</p>`,
        ],
      },
      {
        h2: "9. Beveiliging",
        body: [
          `<p>We gebruiken maatregelen volgens de industrienorm (waaronder versleuteling tijdens verzending en Firebase App Check) om informatie te beschermen. Geen enkele methode van verzending of opslag is 100% veilig en we kunnen absolute veiligheid niet garanderen.</p>`,
        ],
      },
      {
        h2: "10. Wijzigingen in dit beleid",
        body: [
          `<p>We kunnen dit Privacybeleid van tijd tot tijd bijwerken. We plaatsen de nieuwe versie in de App en/of op deze URL en werken de datum "Laatst bijgewerkt" hierboven bij. Materiële wijzigingen worden waar mogelijk gemarkeerd.</p>`,
        ],
      },
      {
        h2: "11. Neem contact met ons op",
        body: [
          `<p>Heb je vragen over dit Privacybeleid of je gegevens, neem contact op via:<br /><a href="mailto:{supportEmail}">{supportEmail}</a></p>`,
        ],
      },
    ],
  },
  terms: {
    metaTitle: "Gebruiksvoorwaarden — AI Charades",
    metaDescription: "Gebruiksvoorwaarden voor de mobiele app AI Charades op iOS en Android.",
    h1: "Gebruiksvoorwaarden",
    lastUpdatedLabel: "Laatst bijgewerkt:",
    dateValue: "6 juli 2026",
    intro:
      `Deze Gebruiksvoorwaarden ("Voorwaarden") regelen je gebruik van de mobiele applicatie <strong>AI Charades</strong> (de "App"). Door de App te downloaden, installeren of gebruiken, ga je akkoord met deze Voorwaarden. Ga je hier niet mee akkoord, gebruik de App dan niet.`,
    sections: [
      {
        h2: "1. De App",
        body: [`<p>AI Charades is een woordraadspel met een solo AI-modus en een offline charades-partymodus. De App is gratis te downloaden en te spelen.</p>`],
      },
      {
        h2: "2. Acceptabel gebruik",
        body: [
          `<ul>
            <li>Je gebruikt de App niet voor onwettige doeleinden of op een manier die de rechten van anderen schendt.</li>
            <li>Je probeert niet om de werking van de App of achterliggende diensten te reverse-engineeren, decompileren of te verstoren.</li>
            <li>Eigen categorieën en woorden die je maakt mogen geen illegale inhoud bevatten; je bent verantwoordelijk voor de inhoud die je indient, inclusief alles dat naar onze AI-backend wordt gestuurd.</li>
          </ul>`,
        ],
      },
      {
        h2: "3. Door AI gegenereerde inhoud",
        body: [`<p>Woordpaketten, vragen, hints en antwoorden die door de AI-modus worden gegenereerd, worden automatisch geproduceerd en kunnen soms onnauwkeurig, onvolledig of onverwacht zijn. De App is uitsluitend bedoeld voor entertainmentdoeleinden.</p>`],
      },
      {
        h2: "4. In-app-aankopen",
        body: [`<p>Abonnementen of in-app-aankopen worden gefactureerd en verwerkt door de Apple App Store of Google Play, volgens hun respectievelijke voorwaarden. Beheer van aankopen (rechten) wordt afgehandeld door RevenueCat, zoals beschreven in ons <a href="/{lang}/privacy-policy">Privacybeleid</a>.</p>`],
      },
      {
        h2: "5. Intellectueel eigendom",
        body: [`<p>De App, inclusief het ontwerp, de mascotte ("Fiesta"), woordpaketten en software, is ons eigendom en wordt beschermd door intellectuele-eigendomswetten. Je mag geen enkel deel van de App kopiëren, wijzigen of verspreiden zonder toestemming.</p>`],
      },
      {
        h2: "6. Uitsluiting van garanties",
        body: [`<p>De App wordt geleverd "zoals hij is" zonder garanties van welke aard dan ook, expliciet of impliciet. We garanderen niet dat de App ononderbroken, foutloos of altijd beschikbaar zal zijn.</p>`],
      },
      {
        h2: "7. Beperking van aansprakelijkheid",
        body: [`<p>Voor zover maximaal toegestaan door de wet, zijn wij niet aansprakelijk voor indirecte, incidentele of gevolgschade die voortvloeit uit je gebruik van de App.</p>`],
      },
      {
        h2: "8. Beëindiging",
        body: [`<p>We kunnen de toegang tot de App opschorten of beëindigen voor gebruikers die deze Voorwaarden schenden.</p>`],
      },
      {
        h2: "9. Wijzigingen in deze Voorwaarden",
        body: [`<p>We kunnen deze Voorwaarden van tijd tot tijd bijwerken. Voortgezet gebruik van de App nadat wijzigingen van kracht worden, geldt als aanvaarding van de herziene Voorwaarden.</p>`],
      },
      {
        h2: "10. Contact",
        body: [`<p>Vragen over deze Voorwaarden? Neem contact met ons op via <a href="mailto:{supportEmail}">{supportEmail}</a>.</p>`],
      },
    ],
  },
  support: {
    metaTitle: "Ondersteuning — AI Charades",
    metaDescription: "Krijg hulp met AI Charades — het woordspel met een brein.",
    h1: "Ondersteuning",
    intro: "Heb je hulp nodig met AI Charades? Heb je feedback, een bug gevonden, of wil je een nieuw woordpakket voorstellen? We horen graag van je.",
    emailIntro: "Mail ons op <a href=\"mailto:{supportEmail}\">{supportEmail}</a> en we reageren zo snel mogelijk.",
    commonQuestionsH2: "Veelgestelde vragen",
    commonQuestionsBody: "Op zoek naar snelle antwoorden? Bekijk de <a href=\"/{lang}/#faq\">FAQ</a> op de startpagina voor details over spelmodi, offline spelen, talen en meer.",
    legalH2: "Juridisch",
  },
};
