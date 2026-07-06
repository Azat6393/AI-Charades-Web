import type { LegalDictionary } from "../types";

export const pt: LegalDictionary = {
  privacy: {
    metaTitle: "Política de Privacidade — AI Charades",
    metaDescription: "Como o AI Charades recolhe, utiliza e partilha informações no iOS e Android.",
    h1: "Política de Privacidade do AI Charades",
    effectiveDate: "Data de entrada em vigor:",
    lastUpdated: "Última atualização:",
    dateValue: "6 de julho de 2026",
    intro: [
      `Esta Política de Privacidade explica como o AI Charades ("nós", "nosso") recolhe, utiliza e partilha informações quando utilizas a aplicação móvel <strong>AI Charades</strong> (a "App") em Android e iOS.`,
      "Ao utilizar a App, concordas com as práticas descritas nesta política. Se não concordares, por favor não utilizes a App.",
    ],
    contactLabel: "Contacto:",
    appIdLabel: "Identificador da app:",
    sections: [
      {
        h2: "1. Resumo (a versão curta)",
        body: [
          `<ul>
            <li><strong>Não</strong> te pedimos para criar uma conta nem para nos dares o teu nome ou email para jogares.</li>
            <li>Usamos o <strong>microfone e o reconhecimento de voz</strong> apenas durante as rondas de voz, para converter o que dizes em texto para que o jogo possa verificar a tua resposta.</li>
            <li>O <strong>modo de jogo com IA</strong> envia texto do jogo (como a categoria e as palavras geradas) para o nosso servidor e para o Google Gemini para gerar conteúdo. <strong>Não</strong> envia as tuas gravações de voz.</li>
            <li>Usamos o <strong>Google Firebase</strong> para análises, relatórios de falhas e notificações push, e o <strong>RevenueCat</strong> para gerir subscrições/compras dentro da app.</li>
            <li><strong>Não</strong> vendemos a tua informação pessoal.</li>
          </ul>`,
        ],
      },
      {
        h2: "2. Informação que recolhemos",
        body: [
          `<h3>2.1 Informação que forneces</h3>
          <p><strong>Conteúdo e definições do jogo</strong> — categorias que escolhes, palavras/categorias personalizadas que crias, e preferências que defines na App. As palavras personalizadas que crias para rondas de IA podem ser enviadas para o nosso backend de IA para gerar o jogo.</p>`,
          `<h3>2.2 Microfone e entrada de voz</h3>
          <p>Quando usas uma <strong>ronda de voz</strong>, a App acede ao <strong>microfone</strong> e utiliza o serviço de <strong>reconhecimento de voz</strong> do dispositivo (Apple Speech no iOS, reconhecimento de voz Google/Android no Android) para converter a tua resposta falada em texto. Dependendo do teu dispositivo e das definições do sistema operativo, este áudio pode ser processado <strong>no dispositivo</strong> ou pelo serviço de voz do <strong>fornecedor do sistema operativo</strong> (Apple ou Google) segundo as respetivas políticas de privacidade. <strong>Não</strong> gravamos, armazenamos ou transmitimos o teu áudio bruto para os nossos próprios servidores. Utilizamos apenas o texto resultante dentro da ronda de jogo atual.</p>`,
          `<h3>2.3 Informação recolhida automaticamente</h3>
          <p>Através do <strong>Google Firebase</strong> e de serviços da plataforma, podemos recolher:</p>
          <ul>
            <li><strong>Dados de análise</strong> (Firebase Analytics): aberturas da app, ecrãs visualizados, modos de jogo jogados, eventos dentro da app, duração da sessão, país/região aproximados, idioma do dispositivo.</li>
            <li><strong>Dados de falhas e diagnóstico</strong> (Firebase Crashlytics): traços de pilha de falhas, modelo do dispositivo, versão do SO, versão da app, e registos de diagnóstico.</li>
            <li><strong>Identificadores de dispositivo / técnicos</strong>: um ID de instalação Firebase, um ID de instância da app, e (para notificações push) um token do Firebase Cloud Messaging.</li>
            <li><strong>Sinais de integridade da app</strong> (Firebase App Check): um token que atesta que o pedido vem de uma cópia genuína e não modificada da App (via Play Integrity no Android e App Attest no iOS). Isto é usado para proteger o nosso backend de abusos.</li>
          </ul>`,
          `<h3>2.4 Informação de compras</h3>
          <p>As <strong>subscrições e compras dentro da app</strong> são processadas pela <strong>Apple App Store</strong> ou <strong>Google Play</strong>, e geridas através do <strong>RevenueCat</strong>. Recebemos o estado da compra (por exemplo, se tens um direito "premium" ativo), um ID de utilizador RevenueCat anónimo, e metadados da transação. <strong>Nunca recebemos nem armazenamos os detalhes completos do teu cartão de pagamento</strong> — esses ficam com a Apple/Google.</p>`,
          `<h3>2.5 Dados do modo de jogo com IA</h3>
          <p>Quando jogas o <strong>modo IA</strong>, o texto do jogo (como a categoria selecionada e as palavras geradas para a ronda) é enviado para o nosso backend (<strong>Google Firebase Cloud Functions</strong>) e encaminhado para o <strong>Google Gemini</strong> para gerar conteúdo de jogo. Este texto não contém, por conceção, informação pessoal, a menos que a insiras tu próprio numa categoria ou palavra personalizada.</p>`,
        ],
      },
      {
        h2: "3. Como utilizamos a informação",
        body: [
          `<p>Utilizamos a informação acima para:</p>
          <ul>
            <li>Fornecer e executar o jogo, incluindo rondas geradas por IA e adivinhação por voz.</li>
            <li>Gerir a tua subscrição e desbloquear funcionalidades premium.</li>
            <li>Enviar notificações push opcionais (por exemplo, lembretes, novo conteúdo) — apenas se concederes permissão de notificações.</li>
            <li>Compreender como a App é utilizada e melhorar funcionalidades e desempenho (análises).</li>
            <li>Diagnosticar falhas e corrigir erros (relatórios de falhas).</li>
            <li>Proteger o nosso backend de fraude, abuso e ataques automatizados (App Check).</li>
          </ul>`,
        ],
      },
      {
        h2: "4. Como partilhamos informação",
        body: [
          `<p>Partilhamos informação apenas com fornecedores de serviços que nos ajudam a operar a App:</p>
          <table>
            <thead>
              <tr><th>Fornecedor</th><th>Finalidade</th><th>Política de privacidade</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Google Firebase (Analytics, Crashlytics, Cloud Messaging, App Check, Cloud Functions)</td>
                <td>Análises, relatórios de falhas, notificações push, integridade, backend</td>
                <td><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">firebase.google.com/support/privacy</a></td>
              </tr>
              <tr>
                <td>Serviços de voz da plataforma Google / Apple</td>
                <td>Conversão de voz em texto para rondas de voz</td>
                <td>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a> ·
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a>
                </td>
              </tr>
              <tr>
                <td>Google Gemini</td>
                <td>Gerar conteúdo de jogo com IA</td>
                <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a></td>
              </tr>
              <tr>
                <td>RevenueCat</td>
                <td>Gestão de subscrições / compras</td>
                <td><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">revenuecat.com/privacy</a></td>
              </tr>
              <tr>
                <td>Apple App Store / Google Play</td>
                <td>Processamento de pagamentos</td>
                <td>
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a> ·
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p><strong>Não</strong> vendemos a tua informação pessoal, e <strong>não</strong> a partilhamos para publicidade comportamental entre contextos.</p>
          <p>Podemos divulgar informação se exigido por lei, ou para proteger os nossos direitos, segurança ou propriedade, ou os dos nossos utilizadores.</p>`,
        ],
      },
      {
        h2: "5. Retenção de dados",
        body: [
          `<ul>
            <li>Mantemos dados de análises e falhas pelos períodos de retenção oferecidos pelo Firebase (normalmente até 14 meses para análises, e uma janela limitada para dados de falhas).</li>
            <li>Os registos de compras/direitos são retidos pelo tempo necessário para fornecer o serviço e cumprir obrigações fiscais/contabilísticas.</li>
            <li>O texto dos pedidos de IA pode ser retido transitoriamente por nós e pelo Google Gemini para processamento e prevenção de abusos, de acordo com as suas políticas.</li>
          </ul>`,
        ],
      },
      {
        h2: "6. As tuas escolhas e direitos",
        body: [
          `<ul>
            <li><strong>Microfone / voz</strong>: Podes recusar ou revogar a permissão de microfone nas definições do teu dispositivo. As rondas de voz não funcionarão sem ela, mas o resto do jogo sim.</li>
            <li><strong>Notificações</strong>: Podes desativar as notificações push nas definições do teu dispositivo.</li>
            <li><strong>Análises</strong>: Podes limitar o rastreio de anúncios/análises através das definições de privacidade do teu dispositivo (por exemplo, "Permitir que as Apps peçam para Rastrear" no iOS e as definições de anúncios no Android).</li>
            <li><strong>Acesso / eliminação</strong>: Como não exigimos uma conta, mantemos poucos ou nenhuns dados que te identifiquem pessoalmente. Para solicitar acesso a, ou eliminação de, quaisquer dados associados à tua instalação, contacta-nos em <a href="mailto:{supportEmail}">{supportEmail}</a>.</li>
          </ul>
          <p>Dependendo de onde vives, podes ter direitos ao abrigo do <strong>RGPD</strong> (EEE/Reino Unido) ou do <strong>CCPA/CPRA</strong> (Califórnia), incluindo o direito de aceder, corrigir, eliminar ou restringir o processamento dos teus dados pessoais, e de apresentar uma reclamação a uma autoridade de supervisão.</p>`,
        ],
      },
      {
        h2: "7. Privacidade das crianças",
        body: [
          `<p>O AI Charades destina-se a um <strong>público geral</strong> e não é dirigido a crianças com menos de 13 anos. Não recolhemos conscientemente informação pessoal de crianças com menos dessa idade. Se acreditares que uma criança nos forneceu informação pessoal, contacta-nos e iremos eliminá-la.</p>`,
        ],
      },
      {
        h2: "8. Transferências internacionais de dados",
        body: [
          `<p>Os nossos fornecedores de serviços podem processar e armazenar informação em países diferentes daquele em que vives, incluindo os Estados Unidos. Quando exigido, recorremos a salvaguardas adequadas (como Cláusulas Contratuais Padrão) para estas transferências.</p>`,
        ],
      },
      {
        h2: "9. Segurança",
        body: [
          `<p>Utilizamos medidas padrão da indústria (incluindo encriptação de transporte e Firebase App Check) para proteger a informação. Nenhum método de transmissão ou armazenamento é 100% seguro, e não podemos garantir segurança absoluta.</p>`,
        ],
      },
      {
        h2: "10. Alterações a esta política",
        body: [
          `<p>Podemos atualizar esta Política de Privacidade periodicamente. Publicaremos a nova versão na App e/ou neste URL e atualizaremos a data de "Última atualização" acima. As alterações materiais serão destacadas sempre que possível.</p>`,
        ],
      },
      {
        h2: "11. Contacta-nos",
        body: [
          `<p>Se tiveres perguntas sobre esta Política de Privacidade ou os teus dados, contacta:<br /><a href="mailto:{supportEmail}">{supportEmail}</a></p>`,
        ],
      },
    ],
  },
  terms: {
    metaTitle: "Termos de Serviço — AI Charades",
    metaDescription: "Termos de Serviço da app móvel AI Charades para iOS e Android.",
    h1: "Termos de Serviço",
    lastUpdatedLabel: "Última atualização:",
    dateValue: "6 de julho de 2026",
    intro:
      `Estes Termos de Serviço ("Termos") regem a tua utilização da aplicação móvel <strong>AI Charades</strong> (a "App"). Ao descarregares, instalares ou utilizares a App, concordas com estes Termos. Se não concordares, por favor não utilizes a App.`,
    sections: [
      {
        h2: "1. A App",
        body: [`<p>O AI Charades é um jogo de adivinhar palavras que oferece um modo solo alimentado por IA e um modo festa de mímica offline. A App é gratuita para descarregar e jogar.</p>`],
      },
      {
        h2: "2. Utilização aceitável",
        body: [
          `<ul>
            <li>Não utilizarás a App para qualquer fim ilegal ou de forma que viole os direitos de terceiros.</li>
            <li>Não tentarás fazer engenharia reversa, descompilar ou interferir com o funcionamento da App ou dos serviços de backend.</li>
            <li>As categorias e palavras personalizadas que criares não devem conter conteúdo ilegal; és responsável pelo conteúdo que submeteres, incluindo qualquer coisa enviada para o nosso backend de IA.</li>
          </ul>`,
        ],
      },
      {
        h2: "3. Conteúdo gerado por IA",
        body: [`<p>Pacotes de palavras, perguntas, dicas e respostas geradas pelo modo IA são produzidos automaticamente e podem ocasionalmente ser imprecisos, incompletos ou inesperados. A App destina-se apenas a fins de entretenimento.</p>`],
      },
      {
        h2: "4. Compras dentro da app",
        body: [`<p>Quaisquer subscrições ou compras dentro da app são faturadas e processadas pela Apple App Store ou Google Play, de acordo com os respetivos termos. A gestão de compras (direitos) é feita pelo RevenueCat conforme descrito na nossa <a href="/{lang}/privacy-policy">Política de Privacidade</a>.</p>`],
      },
      {
        h2: "5. Propriedade intelectual",
        body: [`<p>A App, incluindo o seu design, mascote ("Fiesta"), pacotes de palavras e software, é propriedade nossa e protegida por leis de propriedade intelectual. Não podes copiar, modificar ou distribuir qualquer parte da App sem autorização.</p>`],
      },
      {
        h2: "6. Isenção de garantias",
        body: [`<p>A App é fornecida "tal como está", sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos que a App será ininterrupta, isenta de erros, ou disponível em todos os momentos.</p>`],
      },
      {
        h2: "7. Limitação de responsabilidade",
        body: [`<p>Na máxima extensão permitida por lei, não somos responsáveis por quaisquer danos indiretos, incidentais ou consequenciais decorrentes da tua utilização da App.</p>`],
      },
      {
        h2: "8. Rescisão",
        body: [`<p>Podemos suspender ou rescindir o acesso à App para utilizadores que violem estes Termos.</p>`],
      },
      {
        h2: "9. Alterações a estes Termos",
        body: [`<p>Podemos atualizar estes Termos periodicamente. A utilização continuada da App após as alterações entrarem em vigor constitui aceitação dos Termos revistos.</p>`],
      },
      {
        h2: "10. Contacto",
        body: [`<p>Perguntas sobre estes Termos? Contacta-nos em <a href="mailto:{supportEmail}">{supportEmail}</a>.</p>`],
      },
    ],
  },
  support: {
    metaTitle: "Suporte — AI Charades",
    metaDescription: "Obtém ajuda com o AI Charades — o jogo de palavras com cérebro.",
    h1: "Suporte",
    intro: "Precisas de ajuda com o AI Charades? Tens feedback, encontraste um erro, ou queres sugerir um novo pacote de palavras? Adoraríamos ouvir-te.",
    emailIntro: "Envia-nos um email para <a href=\"mailto:{supportEmail}\">{supportEmail}</a> e responderemos assim que possível.",
    commonQuestionsH2: "Perguntas comuns",
    commonQuestionsBody: "À procura de respostas rápidas? Consulta as <a href=\"/{lang}/#faq\">FAQ</a> na página inicial para detalhes sobre modos de jogo, jogo offline, idiomas e mais.",
    legalH2: "Legal",
  },
};
