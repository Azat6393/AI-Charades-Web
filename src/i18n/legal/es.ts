import type { LegalDictionary } from "../types";

export const es: LegalDictionary = {
  privacy: {
    metaTitle: "Política de Privacidad — AI Charades",
    metaDescription: "Cómo AI Charades recopila, usa y comparte información en iOS y Android.",
    h1: "Política de Privacidad de AI Charades",
    effectiveDate: "Fecha de vigencia:",
    lastUpdated: "Última actualización:",
    dateValue: "6 de julio de 2026",
    intro: [
      `Esta Política de Privacidad explica cómo AI Charades ("nosotros", "nos", "nuestro") recopila, usa y comparte información cuando usas la aplicación móvil <strong>AI Charades</strong> (la "App") en Android e iOS.`,
      "Al usar la App, aceptas las prácticas descritas en esta política. Si no estás de acuerdo, por favor no uses la App.",
    ],
    contactLabel: "Contacto:",
    appIdLabel: "Identificador de la app:",
    sections: [
      {
        h2: "1. Resumen (la versión corta)",
        body: [
          `<ul>
            <li>No te pedimos crear una cuenta ni darnos tu nombre o correo electrónico para jugar.</li>
            <li>Usamos el <strong>micrófono y el reconocimiento de voz</strong> solo durante las rondas de voz, para convertir lo que dices en texto y así el juego pueda verificar tu respuesta.</li>
            <li>El <strong>modo de juego con IA</strong> envía texto del juego (como la categoría y las palabras generadas) a nuestro servidor y a Google Gemini para generar contenido. <strong>No</strong> envía tus grabaciones de voz.</li>
            <li>Usamos <strong>Google Firebase</strong> para análisis, reporte de errores y notificaciones push, y <strong>RevenueCat</strong> para gestionar suscripciones/compras dentro de la app.</li>
            <li>No vendemos tu información personal.</li>
          </ul>`,
        ],
      },
      {
        h2: "2. Información que recopilamos",
        body: [
          `<h3>2.1 Información que tú proporcionas</h3>
          <p><strong>Contenido y configuraciones del juego</strong> — categorías que eliges, palabras/categorías personalizadas que creas, y preferencias que defines en la App. Las palabras personalizadas que creas para rondas de IA pueden enviarse a nuestro backend de IA para generar la jugabilidad.</p>`,
          `<h3>2.2 Micrófono y entrada de voz</h3>
          <p>Cuando usas una <strong>ronda de voz</strong>, la App accede al <strong>micrófono</strong> y usa el servicio de <strong>reconocimiento de voz</strong> del dispositivo (Apple Speech en iOS, reconocimiento de voz de Google/Android en Android) para convertir tu respuesta hablada en texto. Dependiendo de tu dispositivo y configuraciones del sistema operativo, este audio puede procesarse <strong>en el dispositivo</strong> o mediante el servicio de voz del <strong>proveedor del sistema operativo</strong> (Apple o Google) bajo sus respectivas políticas de privacidad. <strong>No</strong> grabamos, almacenamos ni transmitimos tu audio sin procesar a nuestros propios servidores. Solo usamos el texto resultante dentro de la ronda actual del juego.</p>`,
          `<h3>2.3 Información recopilada automáticamente</h3>
          <p>A través de <strong>Google Firebase</strong> y servicios de la plataforma podemos recopilar:</p>
          <ul>
            <li><strong>Datos de análisis</strong> (Firebase Analytics): aperturas de la app, pantallas vistas, modos de juego jugados, eventos dentro de la app, duración de la sesión, país/región aproximado, idioma del dispositivo.</li>
            <li><strong>Datos de fallos y diagnóstico</strong> (Firebase Crashlytics): rastros de pila de fallos, modelo del dispositivo, versión del sistema operativo, versión de la app y registros de diagnóstico.</li>
            <li><strong>Identificadores de dispositivo/técnicos</strong>: un ID de instalación de Firebase, un ID de instancia de la app y (para notificaciones push) un token de Firebase Cloud Messaging.</li>
            <li><strong>Señales de integridad de la app</strong> (Firebase App Check): un token que certifica que la solicitud proviene de una copia genuina y sin modificar de la App (a través de Play Integrity en Android y App Attest en iOS). Esto se usa para proteger nuestro backend de abusos.</li>
          </ul>`,
          `<h3>2.4 Información de compras</h3>
          <p>Las <strong>suscripciones y compras dentro de la app</strong> son procesadas por la <strong>Apple App Store</strong> o <strong>Google Play</strong>, y gestionadas a través de <strong>RevenueCat</strong>. Recibimos el estado de la compra (por ejemplo, si tienes un beneficio "premium" activo), un ID de usuario anónimo de RevenueCat y metadatos de la transacción. <strong>Nunca recibimos ni almacenamos los datos completos de tu tarjeta de pago</strong> — esos permanecen con Apple/Google.</p>`,
          `<h3>2.5 Datos del modo de juego con IA</h3>
          <p>Cuando juegas el <strong>modo IA</strong>, el texto del juego (como la categoría seleccionada y las palabras generadas para la ronda) se envía a nuestro backend (<strong>Google Firebase Cloud Functions</strong>) y se reenvía a <strong>Google Gemini</strong> para generar el contenido del juego. Este texto, por diseño, no contiene información personal a menos que tú mismo la ingreses en una categoría o palabra personalizada.</p>`,
        ],
      },
      {
        h2: "3. Cómo usamos la información",
        body: [
          `<p>Usamos la información anterior para:</p>
          <ul>
            <li>Proveer y ejecutar el juego, incluidas las rondas generadas por IA y las adivinanzas por voz.</li>
            <li>Gestionar tu suscripción y desbloquear funciones premium.</li>
            <li>Enviar notificaciones push opcionales (por ejemplo, recordatorios, contenido nuevo) — solo si otorgas el permiso de notificaciones.</li>
            <li>Entender cómo se usa la App y mejorar sus funciones y rendimiento (análisis).</li>
            <li>Diagnosticar fallos y corregir errores (reporte de fallos).</li>
            <li>Proteger nuestro backend de fraude, abuso y ataques automatizados (App Check).</li>
          </ul>`,
        ],
      },
      {
        h2: "4. Cómo compartimos información",
        body: [
          `<p>Compartimos información únicamente con proveedores de servicios que nos ayudan a operar la App:</p>
          <table>
            <thead>
              <tr><th>Proveedor</th><th>Propósito</th><th>Política de privacidad</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Google Firebase (Analytics, Crashlytics, Cloud Messaging, App Check, Cloud Functions)</td>
                <td>Análisis, reporte de fallos, notificaciones push, integridad, backend</td>
                <td><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">firebase.google.com/support/privacy</a></td>
              </tr>
              <tr>
                <td>Servicios de voz de las plataformas de Google/Apple</td>
                <td>Conversión de voz a texto para rondas de voz</td>
                <td>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a> ·
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a>
                </td>
              </tr>
              <tr>
                <td>Google Gemini</td>
                <td>Generar contenido de juego con IA</td>
                <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a></td>
              </tr>
              <tr>
                <td>RevenueCat</td>
                <td>Gestión de suscripciones/compras</td>
                <td><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">revenuecat.com/privacy</a></td>
              </tr>
              <tr>
                <td>Apple App Store / Google Play</td>
                <td>Procesamiento de pagos</td>
                <td>
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a> ·
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p><strong>No</strong> vendemos tu información personal, y <strong>no</strong> la compartimos para publicidad conductual entre contextos.</p>
          <p>Podemos divulgar información si la ley lo requiere, o para proteger nuestros derechos, seguridad o propiedad, o los de nuestros usuarios.</p>`,
        ],
      },
      {
        h2: "5. Retención de datos",
        body: [
          `<ul>
            <li>Conservamos los datos de análisis y fallos durante los periodos de retención que ofrece Firebase (típicamente hasta 14 meses para análisis, y una ventana limitada para datos de fallos).</li>
            <li>Los registros de compras/beneficios se conservan durante el tiempo necesario para prestar el servicio y cumplir con obligaciones fiscales/contables.</li>
            <li>El texto de las solicitudes de IA puede ser retenido de forma transitoria por nosotros y por Google Gemini para su procesamiento y prevención de abuso, según sus políticas.</li>
          </ul>`,
        ],
      },
      {
        h2: "6. Tus opciones y derechos",
        body: [
          `<ul>
            <li><strong>Micrófono/voz</strong>: Puedes rechazar o revocar el permiso del micrófono en la configuración de tu dispositivo. Las rondas de voz no funcionarán sin él, pero el resto del juego sí.</li>
            <li><strong>Notificaciones</strong>: Puedes desactivar las notificaciones push en la configuración de tu dispositivo.</li>
            <li><strong>Análisis</strong>: Puedes limitar el seguimiento de publicidad/análisis a través de la configuración de privacidad de tu dispositivo (por ejemplo, "Permitir que las apps soliciten seguimiento" en iOS y las configuraciones de anuncios en Android).</li>
            <li><strong>Acceso/eliminación</strong>: Debido a que no requerimos una cuenta, guardamos poca o ninguna información que te identifique personalmente. Para solicitar acceso o eliminación de cualquier dato asociado con tu instalación, contáctanos en <a href="mailto:{supportEmail}">{supportEmail}</a>.</li>
          </ul>
          <p>Dependiendo de dónde vivas, puedes tener derechos bajo el <strong>RGPD</strong> (EEE/Reino Unido) o la <strong>CCPA/CPRA</strong> (California), incluido el derecho a acceder, corregir, eliminar o restringir el procesamiento de tus datos personales, y a presentar una queja ante una autoridad supervisora.</p>`,
        ],
      },
      {
        h2: "7. Privacidad de los menores",
        body: [
          `<p>AI Charades está dirigido a un <strong>público general</strong> y no está dirigido a menores de 13 años. No recopilamos a sabiendas información personal de menores de esa edad. Si crees que un menor nos ha proporcionado información personal, contáctanos y la eliminaremos.</p>`,
        ],
      },
      {
        h2: "8. Transferencias internacionales de datos",
        body: [
          `<p>Nuestros proveedores de servicios pueden procesar y almacenar información en países distintos al tuyo, incluyendo Estados Unidos. Cuando sea necesario, nos apoyamos en garantías adecuadas (como las Cláusulas Contractuales Estándar) para estas transferencias.</p>`,
        ],
      },
      {
        h2: "9. Seguridad",
        body: [
          `<p>Usamos medidas estándar de la industria (incluyendo cifrado de transporte y Firebase App Check) para proteger la información. Ningún método de transmisión o almacenamiento es 100% seguro, y no podemos garantizar una seguridad absoluta.</p>`,
        ],
      },
      {
        h2: "10. Cambios a esta política",
        body: [
          `<p>Podemos actualizar esta Política de Privacidad periódicamente. Publicaremos la nueva versión en la App y/o en esta URL, y actualizaremos la fecha de "Última actualización" indicada arriba. Los cambios importantes se destacarán cuando sea posible.</p>`,
        ],
      },
      {
        h2: "11. Contáctanos",
        body: [
          `<p>Si tienes preguntas sobre esta Política de Privacidad o tus datos, contáctanos:<br /><a href="mailto:{supportEmail}">{supportEmail}</a></p>`,
        ],
      },
    ],
  },
  terms: {
    metaTitle: "Términos de Servicio — AI Charades",
    metaDescription: "Términos de Servicio para la app móvil AI Charades en iOS y Android.",
    h1: "Términos de Servicio",
    lastUpdatedLabel: "Última actualización:",
    dateValue: "6 de julio de 2026",
    intro:
      `Estos Términos de Servicio ("Términos") rigen tu uso de la aplicación móvil <strong>AI Charades</strong> (la "App"). Al descargar, instalar o usar la App, aceptas estos Términos. Si no estás de acuerdo, por favor no uses la App.`,
    sections: [
      {
        h2: "1. La App",
        body: [`<p>AI Charades es un juego de adivinar palabras que ofrece un modo solo impulsado por IA y un modo fiesta de charadas sin conexión. La App es gratuita para descargar y jugar.</p>`],
      },
      {
        h2: "2. Uso aceptable",
        body: [
          `<ul>
            <li>No usarás la App para ningún propósito ilegal ni de una manera que infrinja los derechos de terceros.</li>
            <li>No intentarás realizar ingeniería inversa, descompilar ni interferir con el funcionamiento de la App o sus servicios de backend.</li>
            <li>Las categorías y palabras personalizadas que crees no deben contener contenido ilegal; eres responsable del contenido que envíes, incluido cualquier contenido enviado a nuestro backend de IA.</li>
          </ul>`,
        ],
      },
      {
        h2: "3. Contenido generado por IA",
        body: [`<p>Los mazos de palabras, preguntas, pistas y respuestas generados por el modo IA se producen automáticamente y ocasionalmente pueden ser inexactos, incompletos o inesperados. La App está destinada únicamente a fines de entretenimiento.</p>`],
      },
      {
        h2: "4. Compras dentro de la app",
        body: [`<p>Cualquier suscripción o compra dentro de la app es facturada y procesada por la Apple App Store o Google Play, de acuerdo con sus respectivos términos. La gestión de compras (beneficios) es manejada por RevenueCat como se describe en nuestra <a href="/{lang}/privacy-policy">Política de Privacidad</a>.</p>`],
      },
      {
        h2: "5. Propiedad intelectual",
        body: [`<p>La App, incluyendo su diseño, mascota ("Fiesta"), mazos de palabras y software, es de nuestra propiedad y está protegida por leyes de propiedad intelectual. No puedes copiar, modificar ni distribuir ninguna parte de la App sin permiso.</p>`],
      },
      {
        h2: "6. Renuncia de garantías",
        body: [`<p>La App se proporciona "tal cual", sin garantías de ningún tipo, expresas o implícitas. No garantizamos que la App será ininterrumpida, libre de errores o estará disponible en todo momento.</p>`],
      },
      {
        h2: "7. Limitación de responsabilidad",
        body: [`<p>En la máxima medida permitida por la ley, no somos responsables de daños indirectos, incidentales o consecuentes derivados de tu uso de la App.</p>`],
      },
      {
        h2: "8. Terminación",
        body: [`<p>Podemos suspender o cancelar el acceso a la App para usuarios que violen estos Términos.</p>`],
      },
      {
        h2: "9. Cambios a estos Términos",
        body: [`<p>Podemos actualizar estos Términos periódicamente. El uso continuado de la App después de que los cambios entren en vigor constituye la aceptación de los Términos revisados.</p>`],
      },
      {
        h2: "10. Contacto",
        body: [`<p>¿Preguntas sobre estos Términos? Contáctanos en <a href="mailto:{supportEmail}">{supportEmail}</a>.</p>`],
      },
    ],
  },
  support: {
    metaTitle: "Soporte — AI Charades",
    metaDescription: "Obtén ayuda con AI Charades — el juego de palabras con cerebro.",
    h1: "Soporte",
    intro: "¿Necesitas ayuda con AI Charades? ¿Tienes comentarios, encontraste un error o quieres sugerir un nuevo mazo de palabras? Nos encantaría saber de ti.",
    emailIntro: "Escríbenos a <a href=\"mailto:{supportEmail}\">{supportEmail}</a> y te responderemos lo antes posible.",
    commonQuestionsH2: "Preguntas frecuentes",
    commonQuestionsBody: "¿Buscas respuestas rápidas? Consulta las <a href=\"/{lang}/#faq\">Preguntas frecuentes</a> en la página de inicio para más detalles sobre modos de juego, juego sin conexión, idiomas y más.",
    legalH2: "Legal",
  },
};
