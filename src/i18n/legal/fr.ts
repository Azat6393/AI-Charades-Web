import type { LegalDictionary } from "../types";

export const fr: LegalDictionary = {
  privacy: {
    metaTitle: "Politique de confidentialité — AI Charades",
    metaDescription: "Comment AI Charades collecte, utilise et partage les informations sur iOS et Android.",
    h1: "Politique de confidentialité d'AI Charades",
    effectiveDate: "Date d'entrée en vigueur :",
    lastUpdated: "Dernière mise à jour :",
    dateValue: "6 juillet 2026",
    intro: [
      `Cette politique de confidentialité explique comment AI Charades (« nous ») collecte, utilise et partage des informations lorsque vous utilisez l'application mobile <strong>AI Charades</strong> (l'« Application ») sur Android et iOS.`,
      "En utilisant l'Application, vous acceptez les pratiques décrites dans cette politique. Si vous n'êtes pas d'accord, veuillez ne pas utiliser l'Application.",
    ],
    contactLabel: "Contact :",
    appIdLabel: "Identifiant de l'application :",
    sections: [
      {
        h2: "1. Résumé (la version courte)",
        body: [
          `<ul>
            <li>Nous ne vous demandons <strong>pas</strong> de créer un compte ni de nous donner votre nom ou votre e-mail pour jouer.</li>
            <li>Nous utilisons le <strong>microphone et la reconnaissance vocale</strong> uniquement pendant les manches vocales, pour convertir ce que vous dites en texte afin que le jeu puisse vérifier votre réponse.</li>
            <li>Le <strong>mode de jeu IA</strong> envoie du texte de jeu (comme la catégorie et les mots générés) à notre serveur et à Google Gemini pour générer du contenu. Il n'envoie <strong>pas</strong> vos enregistrements vocaux.</li>
            <li>Nous utilisons <strong>Google Firebase</strong> pour les statistiques, les rapports de plantage et les notifications push, et <strong>RevenueCat</strong> pour gérer les abonnements/achats intégrés.</li>
            <li>Nous ne vendons <strong>pas</strong> vos informations personnelles.</li>
          </ul>`,
        ],
      },
      {
        h2: "2. Informations que nous collectons",
        body: [
          `<h3>2.1 Informations que vous fournissez</h3>
          <p><strong>Contenu de jeu et paramètres</strong> — catégories que vous choisissez, mots/catégories personnalisés que vous créez, et préférences que vous définissez dans l'Application. Les mots personnalisés que vous créez pour les manches IA peuvent être envoyés à notre backend IA pour générer le jeu.</p>`,
          `<h3>2.2 Microphone et saisie vocale</h3>
          <p>Lorsque vous utilisez une <strong>manche vocale</strong>, l'Application accède au <strong>microphone</strong> et utilise le service de <strong>reconnaissance vocale</strong> de l'appareil (Apple Speech sur iOS, reconnaissance vocale Google/Android sur Android) pour convertir votre réponse orale en texte. Selon votre appareil et les réglages du système, cet audio peut être traité <strong>sur l'appareil</strong> ou par le service vocal du <strong>fournisseur du système d'exploitation</strong> (Apple ou Google) selon leurs politiques de confidentialité respectives. Nous n'enregistrons, ne stockons ni ne transmettons <strong>pas</strong> votre audio brut à nos propres serveurs. Nous n'utilisons le texte obtenu que dans la manche de jeu en cours.</p>`,
          `<h3>2.3 Informations collectées automatiquement</h3>
          <p>Via <strong>Google Firebase</strong> et les services de la plateforme, nous pouvons collecter :</p>
          <ul>
            <li><strong>Données statistiques</strong> (Firebase Analytics) : ouvertures de l'application, écrans consultés, modes de jeu joués, événements dans l'application, durée de session, pays/région approximatifs, langue de l'appareil.</li>
            <li><strong>Données de plantage et de diagnostic</strong> (Firebase Crashlytics) : traces de pile de plantage, modèle d'appareil, version du système, version de l'application, et journaux de diagnostic.</li>
            <li><strong>Identifiants d'appareil / techniques</strong> : un ID d'installation Firebase, un ID d'instance d'application, et (pour le push) un jeton Firebase Cloud Messaging.</li>
            <li><strong>Signaux d'intégrité de l'application</strong> (Firebase App Check) : un jeton attestant que la requête provient d'une copie authentique et non modifiée de l'Application (via Play Integrity sur Android et App Attest sur iOS). Ceci sert à protéger notre backend contre les abus.</li>
          </ul>`,
          `<h3>2.4 Informations d'achat</h3>
          <p>Les <strong>abonnements et achats intégrés</strong> sont traités par l'<strong>Apple App Store</strong> ou <strong>Google Play</strong>, et gérés via <strong>RevenueCat</strong>. Nous recevons le statut d'achat (par exemple, si vous disposez d'un droit « premium » actif), un identifiant utilisateur RevenueCat anonyme, et des métadonnées de transaction. <strong>Nous ne recevons ni ne stockons jamais vos coordonnées bancaires complètes</strong> — elles restent chez Apple/Google.</p>`,
          `<h3>2.5 Données du mode de jeu IA</h3>
          <p>Lorsque vous jouez en <strong>mode IA</strong>, du texte de jeu (comme la catégorie sélectionnée et les mots générés pour la manche) est envoyé à notre backend (<strong>Google Firebase Cloud Functions</strong>) puis transmis à <strong>Google Gemini</strong> pour générer le contenu de jeu. Ce texte ne contient, par conception, aucune information personnelle, sauf si vous la saisissez vous-même dans une catégorie ou un mot personnalisé.</p>`,
        ],
      },
      {
        h2: "3. Comment nous utilisons les informations",
        body: [
          `<p>Nous utilisons les informations ci-dessus pour :</p>
          <ul>
            <li>Fournir et faire fonctionner le jeu, y compris les manches générées par IA et la reconnaissance vocale.</li>
            <li>Gérer votre abonnement et débloquer les fonctionnalités premium.</li>
            <li>Envoyer des notifications push facultatives (rappels, nouveau contenu) — uniquement si vous accordez l'autorisation de notification.</li>
            <li>Comprendre comment l'Application est utilisée et améliorer les fonctionnalités et les performances (statistiques).</li>
            <li>Diagnostiquer les plantages et corriger les bugs (rapports de plantage).</li>
            <li>Protéger notre backend contre la fraude, les abus et les attaques automatisées (App Check).</li>
          </ul>`,
        ],
      },
      {
        h2: "4. Comment nous partageons les informations",
        body: [
          `<p>Nous ne partageons des informations qu'avec les prestataires qui nous aident à faire fonctionner l'Application :</p>
          <table>
            <thead>
              <tr><th>Prestataire</th><th>Objectif</th><th>Politique de confidentialité</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Google Firebase (Analytics, Crashlytics, Cloud Messaging, App Check, Cloud Functions)</td>
                <td>Statistiques, rapports de plantage, push, intégrité, backend</td>
                <td><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">firebase.google.com/support/privacy</a></td>
              </tr>
              <tr>
                <td>Services vocaux des plateformes Google / Apple</td>
                <td>Reconnaissance vocale pour les manches vocales</td>
                <td>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a> ·
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a>
                </td>
              </tr>
              <tr>
                <td>Google Gemini</td>
                <td>Génération de contenu de jeu par IA</td>
                <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a></td>
              </tr>
              <tr>
                <td>RevenueCat</td>
                <td>Gestion des abonnements / achats</td>
                <td><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">revenuecat.com/privacy</a></td>
              </tr>
              <tr>
                <td>Apple App Store / Google Play</td>
                <td>Traitement des paiements</td>
                <td>
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a> ·
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>Nous ne vendons <strong>pas</strong> vos informations personnelles, et nous ne les partageons <strong>pas</strong> à des fins de publicité comportementale intercontextuelle.</p>
          <p>Nous pouvons divulguer des informations si la loi l'exige, ou pour protéger nos droits, notre sécurité ou nos biens, ou ceux de nos utilisateurs.</p>`,
        ],
      },
      {
        h2: "5. Conservation des données",
        body: [
          `<ul>
            <li>Nous conservons les données statistiques et de plantage pour les durées offertes par Firebase (généralement jusqu'à 14 mois pour les statistiques, et une fenêtre limitée pour les données de plantage).</li>
            <li>Les enregistrements d'achat/de droits sont conservés aussi longtemps que nécessaire pour fournir le service et respecter les obligations fiscales/comptables.</li>
            <li>Le texte des requêtes IA peut être conservé de manière transitoire par nous et par Google Gemini pour le traitement et la prévention des abus, conformément à leurs politiques.</li>
          </ul>`,
        ],
      },
      {
        h2: "6. Vos choix et vos droits",
        body: [
          `<ul>
            <li><strong>Microphone / voix</strong> : vous pouvez refuser ou révoquer l'autorisation du microphone dans les réglages de votre appareil. Les manches vocales ne fonctionneront pas sans cela, mais le reste du jeu continuera de fonctionner.</li>
            <li><strong>Notifications</strong> : vous pouvez désactiver les notifications push dans les réglages de votre appareil.</li>
            <li><strong>Statistiques</strong> : vous pouvez limiter le suivi publicitaire/statistique via les réglages de confidentialité de votre appareil (par exemple, « Autoriser les applications à demander à suivre » sur iOS et les réglages publicitaires sur Android).</li>
            <li><strong>Accès / suppression</strong> : comme nous n'exigeons pas de compte, nous détenons peu ou pas de données vous identifiant personnellement. Pour demander l'accès ou la suppression de toute donnée associée à votre installation, contactez-nous à <a href="mailto:{supportEmail}">{supportEmail}</a>.</li>
          </ul>
          <p>Selon votre lieu de résidence, vous pouvez disposer de droits au titre du <strong>RGPD</strong> (EEE/Royaume-Uni) ou du <strong>CCPA/CPRA</strong> (Californie), notamment le droit d'accéder, de corriger, de supprimer ou de limiter le traitement de vos données personnelles, et de déposer une plainte auprès d'une autorité de contrôle.</p>`,
        ],
      },
      {
        h2: "7. Confidentialité des enfants",
        body: [
          `<p>AI Charades est destiné à un <strong>public général</strong> et ne s'adresse pas aux enfants de moins de 13 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants de moins de cet âge. Si vous pensez qu'un enfant nous a fourni des informations personnelles, contactez-nous et nous les supprimerons.</p>`,
        ],
      },
      {
        h2: "8. Transferts internationaux de données",
        body: [
          `<p>Nos prestataires de services peuvent traiter et stocker des informations dans des pays autres que celui où vous résidez, y compris les États-Unis. Lorsque cela est requis, nous nous appuyons sur des garanties appropriées (comme les clauses contractuelles types) pour ces transferts.</p>`,
        ],
      },
      {
        h2: "9. Sécurité",
        body: [
          `<p>Nous utilisons des mesures conformes aux normes du secteur (y compris le chiffrement du transport et Firebase App Check) pour protéger les informations. Aucune méthode de transmission ou de stockage n'est sûre à 100 %, et nous ne pouvons garantir une sécurité absolue.</p>`,
        ],
      },
      {
        h2: "10. Modifications de cette politique",
        body: [
          `<p>Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous publierons la nouvelle version dans l'Application et/ou à cette adresse et mettrons à jour la date de « Dernière mise à jour » ci-dessus. Les changements importants seront mis en évidence lorsque cela est possible.</p>`,
        ],
      },
      {
        h2: "11. Nous contacter",
        body: [
          `<p>Si vous avez des questions concernant cette politique de confidentialité ou vos données, contactez-nous :<br /><a href="mailto:{supportEmail}">{supportEmail}</a></p>`,
        ],
      },
    ],
  },
  terms: {
    metaTitle: "Conditions d'utilisation — AI Charades",
    metaDescription: "Conditions d'utilisation de l'application mobile AI Charades sur iOS et Android.",
    h1: "Conditions d'utilisation",
    lastUpdatedLabel: "Dernière mise à jour :",
    dateValue: "6 juillet 2026",
    intro:
      `Ces conditions d'utilisation (les « Conditions ») régissent votre utilisation de l'application mobile <strong>AI Charades</strong> (l'« Application »). En téléchargeant, installant ou utilisant l'Application, vous acceptez ces Conditions. Si vous n'êtes pas d'accord, veuillez ne pas utiliser l'Application.`,
    sections: [
      {
        h2: "1. L'Application",
        body: [`<p>AI Charades est un jeu de devinettes proposant un mode solo propulsé par l'IA et un mode mimes hors ligne entre amis. L'Application est gratuite à télécharger et à utiliser.</p>`],
      },
      {
        h2: "2. Utilisation acceptable",
        body: [
          `<ul>
            <li>Vous n'utiliserez pas l'Application à des fins illégales ou d'une manière portant atteinte aux droits d'autrui.</li>
            <li>Vous ne tenterez pas de faire de l'ingénierie inverse, de décompiler ou d'interférer avec le fonctionnement de l'Application ou de ses services backend.</li>
            <li>Les catégories et mots personnalisés que vous créez ne doivent pas contenir de contenu illégal ; vous êtes responsable du contenu que vous soumettez, y compris tout ce qui est envoyé à notre backend IA.</li>
          </ul>`,
        ],
      },
      {
        h2: "3. Contenu généré par IA",
        body: [`<p>Les packs de mots, questions, indices et réponses générés par le mode IA sont produits automatiquement et peuvent parfois être inexacts, incomplets ou inattendus. L'Application est destinée uniquement au divertissement.</p>`],
      },
      {
        h2: "4. Achats intégrés",
        body: [`<p>Tout abonnement ou achat intégré est facturé et traité par l'Apple App Store ou Google Play, conformément à leurs conditions respectives. La gestion des achats (droits) est assurée par RevenueCat comme décrit dans notre <a href="/{lang}/privacy-policy">Politique de confidentialité</a>.</p>`],
      },
      {
        h2: "5. Propriété intellectuelle",
        body: [`<p>L'Application, y compris son design, sa mascotte (« Fiesta »), ses packs de mots et son logiciel, nous appartient et est protégée par les lois sur la propriété intellectuelle. Vous ne pouvez pas copier, modifier ou distribuer une partie de l'Application sans autorisation.</p>`],
      },
      {
        h2: "6. Exclusion de garanties",
        body: [`<p>L'Application est fournie « telle quelle » sans garantie d'aucune sorte, expresse ou implicite. Nous ne garantissons pas que l'Application sera ininterrompue, exempte d'erreurs ou disponible en permanence.</p>`],
      },
      {
        h2: "7. Limitation de responsabilité",
        body: [`<p>Dans toute la mesure permise par la loi, nous ne sommes pas responsables des dommages indirects, accessoires ou consécutifs résultant de votre utilisation de l'Application.</p>`],
      },
      {
        h2: "8. Résiliation",
        body: [`<p>Nous pouvons suspendre ou résilier l'accès à l'Application pour les utilisateurs qui enfreignent ces Conditions.</p>`],
      },
      {
        h2: "9. Modifications de ces Conditions",
        body: [`<p>Nous pouvons mettre à jour ces Conditions de temps à autre. L'utilisation continue de l'Application après l'entrée en vigueur des modifications constitue une acceptation des Conditions révisées.</p>`],
      },
      {
        h2: "10. Contact",
        body: [`<p>Des questions concernant ces Conditions ? Contactez-nous à <a href="mailto:{supportEmail}">{supportEmail}</a>.</p>`],
      },
    ],
  },
  support: {
    metaTitle: "Assistance — AI Charades",
    metaDescription: "Obtenez de l'aide pour AI Charades — le jeu de mots qui a un cerveau.",
    h1: "Assistance",
    intro: "Besoin d'aide avec AI Charades ? Vous avez un retour, trouvé un bug, ou une idée de nouveau pack de mots ? Nous serions ravis de vous entendre.",
    emailIntro: "Écrivez-nous à <a href=\"mailto:{supportEmail}\">{supportEmail}</a> et nous vous répondrons dès que possible.",
    commonQuestionsH2: "Questions fréquentes",
    commonQuestionsBody: "Vous cherchez des réponses rapides ? Consultez la <a href=\"/{lang}/#faq\">FAQ</a> sur la page d'accueil pour en savoir plus sur les modes de jeu, le mode hors ligne, les langues, et plus encore.",
    legalH2: "Mentions légales",
  },
};
