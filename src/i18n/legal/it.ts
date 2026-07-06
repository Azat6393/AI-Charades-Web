import type { LegalDictionary } from "../types";

export const it: LegalDictionary = {
  privacy: {
    metaTitle: "Informativa sulla privacy — AI Charades",
    metaDescription: "Come AI Charades raccoglie, utilizza e condivide le informazioni su iOS e Android.",
    h1: "Informativa sulla privacy per AI Charades",
    effectiveDate: "Data di entrata in vigore:",
    lastUpdated: "Ultimo aggiornamento:",
    dateValue: "6 luglio 2026",
    intro: [
      `Questa Informativa sulla privacy spiega come AI Charades ("noi", "nostro") raccoglie, utilizza e condivide le informazioni quando utilizzi l'applicazione mobile <strong>AI Charades</strong> (l'"App") su Android e iOS.`,
      "Utilizzando l'App accetti le pratiche descritte in questa informativa. Se non sei d'accordo, ti preghiamo di non utilizzare l'App.",
    ],
    contactLabel: "Contatto:",
    appIdLabel: "Identificatore dell'app:",
    sections: [
      {
        h2: "1. Riepilogo (la versione breve)",
        body: [
          `<ul>
            <li><strong>Non</strong> ti chiediamo di creare un account né di fornirci nome o email per giocare.</li>
            <li>Utilizziamo <strong>microfono e riconoscimento vocale</strong> solo durante i round vocali, per trasformare ciò che dici in testo così il gioco può verificare la tua risposta.</li>
            <li>La <strong>modalità di gioco AI</strong> invia testo di gioco (come categoria e parole generate) al nostro server e a Google Gemini per generare contenuti. <strong>Non</strong> invia le tue registrazioni vocali.</li>
            <li>Utilizziamo <strong>Google Firebase</strong> per analisi, segnalazione di crash e notifiche push, e <strong>RevenueCat</strong> per gestire abbonamenti/acquisti in-app.</li>
            <li><strong>Non</strong> vendiamo le tue informazioni personali.</li>
          </ul>`,
        ],
      },
      {
        h2: "2. Informazioni che raccogliamo",
        body: [
          `<h3>2.1 Informazioni che fornisci</h3>
          <p><strong>Contenuti di gioco e impostazioni</strong> — categorie che scegli, parole/categorie personalizzate che crei e preferenze impostate nell'App. Le parole personalizzate create per i round AI potrebbero essere inviate al nostro backend AI per generare il gameplay.</p>`,
          `<h3>2.2 Microfono e input vocale</h3>
          <p>Quando utilizzi un <strong>round vocale</strong>, l'App accede al <strong>microfono</strong> e utilizza il servizio di <strong>riconoscimento vocale</strong> del dispositivo (Apple Speech su iOS, riconoscimento vocale Google/Android su Android) per convertire la tua risposta parlata in testo. A seconda del dispositivo e delle impostazioni del sistema operativo, questo audio potrebbe essere elaborato <strong>sul dispositivo</strong> o dal servizio vocale del <strong>fornitore del sistema operativo</strong> (Apple o Google) secondo le rispettive informative sulla privacy. <strong>Non</strong> registriamo, memorizziamo o trasmettiamo l'audio grezzo ai nostri server. Utilizziamo solo il testo risultante all'interno del round di gioco corrente.</p>`,
          `<h3>2.3 Informazioni raccolte automaticamente</h3>
          <p>Tramite <strong>Google Firebase</strong> e servizi della piattaforma potremmo raccogliere:</p>
          <ul>
            <li><strong>Dati analitici</strong> (Firebase Analytics): aperture dell'app, schermate visualizzate, modalità di gioco giocate, eventi in-app, durata della sessione, paese/regione approssimativi, lingua del dispositivo.</li>
            <li><strong>Dati di crash e diagnostici</strong> (Firebase Crashlytics): stack trace dei crash, modello del dispositivo, versione del sistema operativo, versione dell'app e log diagnostici.</li>
            <li><strong>Identificatori del dispositivo / tecnici</strong>: un ID di installazione Firebase, ID istanza app e (per le push) un token Firebase Cloud Messaging.</li>
            <li><strong>Segnali di integrità dell'app</strong> (Firebase App Check): un token che attesta che la richiesta proviene da una copia autentica e non modificata dell'App (tramite Play Integrity su Android e App Attest su iOS). Utilizzato per proteggere il nostro backend da abusi.</li>
          </ul>`,
          `<h3>2.4 Informazioni sugli acquisti</h3>
          <p>Gli <strong>abbonamenti e acquisti in-app</strong> sono elaborati da <strong>Apple App Store</strong> o <strong>Google Play</strong>, e gestiti tramite <strong>RevenueCat</strong>. Riceviamo lo stato dell'acquisto (ad es. se hai un diritto "premium" attivo), un ID utente anonimo RevenueCat e metadati della transazione. <strong>Non riceviamo né conserviamo mai i dettagli completi della tua carta di pagamento</strong> — questi rimangono con Apple/Google.</p>`,
          `<h3>2.5 Dati della modalità di gioco AI</h3>
          <p>Quando giochi alla <strong>modalità AI</strong>, il testo di gioco (come la categoria selezionata e le parole generate per il round) viene inviato al nostro backend (<strong>Google Firebase Cloud Functions</strong>) e inoltrato a <strong>Google Gemini</strong> per generare contenuti di gioco. Questo testo non contiene, per progettazione, informazioni personali a meno che tu stesso non le inserisca in una categoria o parola personalizzata.</p>`,
        ],
      },
      {
        h2: "3. Come utilizziamo le informazioni",
        body: [
          `<p>Utilizziamo le informazioni sopra per:</p>
          <ul>
            <li>Fornire e gestire il gioco, inclusi i round generati dall'AI e il riconoscimento vocale.</li>
            <li>Gestire il tuo abbonamento e sbloccare le funzionalità premium.</li>
            <li>Inviare notifiche push facoltative (ad es. promemoria, nuovi contenuti) — solo se concedi l'autorizzazione alle notifiche.</li>
            <li>Comprendere come viene utilizzata l'App e migliorare funzionalità e prestazioni (analisi).</li>
            <li>Diagnosticare crash e correggere bug (segnalazione crash).</li>
            <li>Proteggere il nostro backend da frodi, abusi e attacchi automatizzati (App Check).</li>
          </ul>`,
        ],
      },
      {
        h2: "4. Come condividiamo le informazioni",
        body: [
          `<p>Condividiamo le informazioni solo con fornitori di servizi che ci aiutano a gestire l'App:</p>
          <table>
            <thead>
              <tr><th>Fornitore</th><th>Scopo</th><th>Informativa sulla privacy</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Google Firebase (Analytics, Crashlytics, Cloud Messaging, App Check, Cloud Functions)</td>
                <td>Analisi, segnalazione crash, push, integrità, backend</td>
                <td><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">firebase.google.com/support/privacy</a></td>
              </tr>
              <tr>
                <td>Servizi vocali della piattaforma Google / Apple</td>
                <td>Riconoscimento vocale per i round vocali</td>
                <td>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a> ·
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a>
                </td>
              </tr>
              <tr>
                <td>Google Gemini</td>
                <td>Generazione di contenuti di gioco AI</td>
                <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a></td>
              </tr>
              <tr>
                <td>RevenueCat</td>
                <td>Gestione abbonamenti / acquisti</td>
                <td><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">revenuecat.com/privacy</a></td>
              </tr>
              <tr>
                <td>Apple App Store / Google Play</td>
                <td>Elaborazione pagamenti</td>
                <td>
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a> ·
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p><strong>Non</strong> vendiamo le tue informazioni personali e <strong>non</strong> le condividiamo per pubblicità comportamentale cross-context.</p>
          <p>Potremmo divulgare informazioni se richiesto dalla legge, o per proteggere i nostri diritti, la sicurezza o la proprietà, o quelli dei nostri utenti.</p>`,
        ],
      },
      {
        h2: "5. Conservazione dei dati",
        body: [
          `<ul>
            <li>Conserviamo i dati analitici e di crash per i periodi di conservazione offerti da Firebase (in genere fino a 14 mesi per l'analisi e una finestra limitata per i dati di crash).</li>
            <li>I registri di acquisto/diritti vengono conservati per il tempo necessario a fornire il servizio e per adempiere agli obblighi fiscali/contabili.</li>
            <li>Il testo delle richieste AI potrebbe essere conservato transitoriamente da noi e da Google Gemini per l'elaborazione e la prevenzione degli abusi, secondo le rispettive politiche.</li>
          </ul>`,
        ],
      },
      {
        h2: "6. Le tue scelte e i tuoi diritti",
        body: [
          `<ul>
            <li><strong>Microfono / voce</strong>: puoi rifiutare o revocare l'autorizzazione al microfono nelle impostazioni del dispositivo. I round vocali non funzioneranno senza di essa, ma il resto del gioco sì.</li>
            <li><strong>Notifiche</strong>: puoi disattivare le notifiche push nelle impostazioni del dispositivo.</li>
            <li><strong>Analisi</strong>: puoi limitare il tracciamento pubblicitario/analitico tramite le impostazioni privacy del dispositivo (ad es. "Consenti alle app di richiedere il tracciamento" su iOS e le impostazioni pubblicitarie su Android).</li>
            <li><strong>Accesso / cancellazione</strong>: poiché non richiediamo un account, deteniamo pochi o nessun dato che ti identifichi personalmente. Per richiedere l'accesso o la cancellazione di eventuali dati associati alla tua installazione, contattaci all'indirizzo <a href="mailto:{supportEmail}">{supportEmail}</a>.</li>
          </ul>
          <p>A seconda di dove vivi, potresti avere diritti ai sensi del <strong>GDPR</strong> (SEE/UK) o del <strong>CCPA/CPRA</strong> (California), inclusi il diritto di accedere, correggere, cancellare o limitare il trattamento dei tuoi dati personali, e di presentare un reclamo a un'autorità di controllo.</p>`,
        ],
      },
      {
        h2: "7. Privacy dei minori",
        body: [
          `<p>AI Charades è destinato a un <strong>pubblico generale</strong> e non è rivolto a minori di 13 anni. Non raccogliamo consapevolmente informazioni personali da minori di tale età. Se ritieni che un minore ci abbia fornito informazioni personali, contattaci e le elimineremo.</p>`,
        ],
      },
      {
        h2: "8. Trasferimenti internazionali di dati",
        body: [
          `<p>I nostri fornitori di servizi potrebbero elaborare e conservare informazioni in paesi diversi da quello in cui vivi, inclusi gli Stati Uniti. Ove richiesto, ci basiamo su garanzie appropriate (come le Clausole Contrattuali Standard) per questi trasferimenti.</p>`,
        ],
      },
      {
        h2: "9. Sicurezza",
        body: [
          `<p>Utilizziamo misure standard del settore (inclusa la crittografia del trasporto e Firebase App Check) per proteggere le informazioni. Nessun metodo di trasmissione o conservazione è sicuro al 100% e non possiamo garantire una sicurezza assoluta.</p>`,
        ],
      },
      {
        h2: "10. Modifiche a questa informativa",
        body: [
          `<p>Potremmo aggiornare questa Informativa sulla privacy di tanto in tanto. Pubblicheremo la nuova versione nell'App e/o a questo URL e aggiorneremo la data di "Ultimo aggiornamento" sopra. Le modifiche sostanziali saranno evidenziate quando possibile.</p>`,
        ],
      },
      {
        h2: "11. Contattaci",
        body: [
          `<p>Se hai domande su questa Informativa sulla privacy o sui tuoi dati, contattaci:<br /><a href="mailto:{supportEmail}">{supportEmail}</a></p>`,
        ],
      },
    ],
  },
  terms: {
    metaTitle: "Termini di servizio — AI Charades",
    metaDescription: "Termini di servizio per l'app mobile AI Charades su iOS e Android.",
    h1: "Termini di servizio",
    lastUpdatedLabel: "Ultimo aggiornamento:",
    dateValue: "6 luglio 2026",
    intro:
      `Questi Termini di servizio ("Termini") regolano l'utilizzo dell'applicazione mobile <strong>AI Charades</strong> (l'"App"). Scaricando, installando o utilizzando l'App, accetti questi Termini. Se non sei d'accordo, ti preghiamo di non utilizzare l'App.`,
    sections: [
      {
        h2: "1. L'App",
        body: [`<p>AI Charades è un gioco di indovinelli con parole che offre una modalità solitaria basata su AI e una modalità party offline "heads-up". L'App è gratuita da scaricare e giocare.</p>`],
      },
      {
        h2: "2. Uso consentito",
        body: [
          `<ul>
            <li>Non utilizzerai l'App per scopi illeciti o in modo da violare i diritti altrui.</li>
            <li>Non tenterai di decompilare, decodificare o interferire con il funzionamento dell'App o dei servizi backend.</li>
            <li>Le categorie e parole personalizzate che crei non devono contenere contenuti illegali; sei responsabile dei contenuti che invii, incluso tutto ciò che viene inviato al nostro backend AI.</li>
          </ul>`,
        ],
      },
      {
        h2: "3. Contenuti generati dall'AI",
        body: [`<p>Pacchetti di parole, domande, suggerimenti e risposte generati dalla modalità AI sono prodotti automaticamente e potrebbero occasionalmente risultare imprecisi, incompleti o inaspettati. L'App è destinata esclusivamente a scopi di intrattenimento.</p>`],
      },
      {
        h2: "4. Acquisti in-app",
        body: [`<p>Eventuali abbonamenti o acquisti in-app sono fatturati ed elaborati da Apple App Store o Google Play, in conformità con i rispettivi termini. La gestione degli acquisti (diritti) è gestita da RevenueCat come descritto nella nostra <a href="/{lang}/privacy-policy">Informativa sulla privacy</a>.</p>`],
      },
      {
        h2: "5. Proprietà intellettuale",
        body: [`<p>L'App, incluso il suo design, la mascotte ("Fiesta"), i pacchetti di parole e il software, è di nostra proprietà ed è protetta dalle leggi sulla proprietà intellettuale. Non puoi copiare, modificare o distribuire alcuna parte dell'App senza autorizzazione.</p>`],
      },
      {
        h2: "6. Esclusione di garanzie",
        body: [`<p>L'App è fornita "così com'è" senza garanzie di alcun tipo, esplicite o implicite. Non garantiamo che l'App sarà ininterrotta, priva di errori o disponibile in ogni momento.</p>`],
      },
      {
        h2: "7. Limitazione di responsabilità",
        body: [`<p>Nella misura massima consentita dalla legge, non siamo responsabili per eventuali danni indiretti, incidentali o consequenziali derivanti dall'utilizzo dell'App.</p>`],
      },
      {
        h2: "8. Risoluzione",
        body: [`<p>Potremmo sospendere o terminare l'accesso all'App per gli utenti che violano questi Termini.</p>`],
      },
      {
        h2: "9. Modifiche a questi Termini",
        body: [`<p>Potremmo aggiornare questi Termini di tanto in tanto. L'uso continuato dell'App dopo l'entrata in vigore delle modifiche costituisce accettazione dei Termini rivisti.</p>`],
      },
      {
        h2: "10. Contatti",
        body: [`<p>Domande su questi Termini? Contattaci all'indirizzo <a href="mailto:{supportEmail}">{supportEmail}</a>.</p>`],
      },
    ],
  },
  support: {
    metaTitle: "Assistenza — AI Charades",
    metaDescription: "Ottieni aiuto con AI Charades — il gioco di parole con un cervello.",
    h1: "Assistenza",
    intro: "Hai bisogno di aiuto con AI Charades? Hai un feedback, hai trovato un bug o vuoi suggerire un nuovo pacchetto di parole? Ci piacerebbe sentirti.",
    emailIntro: "Scrivici a <a href=\"mailto:{supportEmail}\">{supportEmail}</a> e ti risponderemo il prima possibile.",
    commonQuestionsH2: "Domande comuni",
    commonQuestionsBody: "Cerchi risposte rapide? Consulta le <a href=\"/{lang}/#faq\">FAQ</a> sulla pagina principale per dettagli su modalità di gioco, gioco offline, lingue e altro ancora.",
    legalH2: "Legale",
  },
};
