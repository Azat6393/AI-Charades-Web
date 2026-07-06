import type { LegalDictionary } from "../types";

export const pl: LegalDictionary = {
  privacy: {
    metaTitle: "Polityka Prywatności — AI Charades",
    metaDescription: "Jak AI Charades zbiera, wykorzystuje i udostępnia informacje na iOS i Android.",
    h1: "Polityka Prywatności AI Charades",
    effectiveDate: "Data wejścia w życie:",
    lastUpdated: "Ostatnia aktualizacja:",
    dateValue: "6 lipca 2026",
    intro: [
      `Niniejsza Polityka Prywatności wyjaśnia, w jaki sposób AI Charades ("my", "nas", "nasze") zbiera, wykorzystuje i udostępnia informacje podczas korzystania z aplikacji mobilnej <strong>AI Charades</strong> ("Aplikacja") na Androidzie i iOS.`,
      "Korzystając z Aplikacji, zgadzasz się na praktyki opisane w niniejszej polityce. Jeśli się nie zgadzasz, prosimy nie korzystać z Aplikacji.",
    ],
    contactLabel: "Kontakt:",
    appIdLabel: "Identyfikator aplikacji:",
    sections: [
      {
        h2: "1. Podsumowanie (wersja skrócona)",
        body: [
          `<ul>
            <li><strong>Nie</strong> wymagamy zakładania konta ani podawania imienia czy adresu e-mail, aby grać.</li>
            <li>Korzystamy z <strong>mikrofonu i rozpoznawania mowy</strong> wyłącznie podczas rund głosowych, aby zamienić wypowiedziane słowa na tekst, dzięki czemu gra może sprawdzić twoją odpowiedź.</li>
            <li><strong>Tryb gry AI</strong> wysyła tekst gry (np. kategorię i wygenerowane słowa) do naszego serwera oraz do Google Gemini w celu wygenerowania treści. <strong>Nie</strong> wysyła twoich nagrań głosowych.</li>
            <li>Korzystamy z <strong>Google Firebase</strong> do analityki, raportowania awarii i powiadomień push, a także z <strong>RevenueCat</strong> do zarządzania subskrypcjami/zakupami w aplikacji.</li>
            <li><strong>Nie</strong> sprzedajemy twoich danych osobowych.</li>
          </ul>`,
        ],
      },
      {
        h2: "2. Informacje, które zbieramy",
        body: [
          `<h3>2.1 Informacje podawane przez Ciebie</h3>
          <p><strong>Treść gry i ustawienia</strong> — wybrane kategorie, tworzone własne słowa/kategorie oraz preferencje ustawiane w Aplikacji. Własne słowa tworzone na potrzeby rund AI mogą być wysyłane do naszego zaplecza AI w celu wygenerowania rozgrywki.</p>`,
          `<h3>2.2 Mikrofon i dane głosowe</h3>
          <p>Podczas korzystania z <strong>rundy głosowej</strong> Aplikacja uzyskuje dostęp do <strong>mikrofonu</strong> i korzysta z usługi <strong>rozpoznawania mowy</strong> urządzenia (Apple Speech na iOS, rozpoznawanie mowy Google/Android na Androidzie), aby zamienić twoją wypowiedzianą odpowiedź na tekst. W zależności od urządzenia i ustawień systemu operacyjnego dźwięk ten może być przetwarzany <strong>na urządzeniu</strong> lub przez usługę mowy <strong>dostawcy systemu operacyjnego</strong> (Apple lub Google) zgodnie z ich odpowiednimi politykami prywatności. <strong>Nie</strong> nagrywamy, nie przechowujemy ani nie przesyłamy surowego dźwięku na nasze serwery. Wykorzystujemy jedynie powstały tekst w ramach aktualnej rundy gry.</p>`,
          `<h3>2.3 Informacje zbierane automatycznie</h3>
          <p>Za pośrednictwem <strong>Google Firebase</strong> i usług platformowych możemy zbierać:</p>
          <ul>
            <li><strong>Dane analityczne</strong> (Firebase Analytics): otwarcia aplikacji, wyświetlane ekrany, rozegrane tryby gry, zdarzenia w aplikacji, długość sesji, przybliżony kraj/region, język urządzenia.</li>
            <li><strong>Dane awarii i diagnostyczne</strong> (Firebase Crashlytics): ślady stosu awarii, model urządzenia, wersję systemu operacyjnego, wersję aplikacji oraz logi diagnostyczne.</li>
            <li><strong>Identyfikatory urządzenia / techniczne</strong>: identyfikator instalacji Firebase, identyfikator instancji aplikacji oraz (dla powiadomień push) token Firebase Cloud Messaging.</li>
            <li><strong>Sygnały integralności aplikacji</strong> (Firebase App Check): token potwierdzający, że żądanie pochodzi z autentycznej, niezmodyfikowanej kopii Aplikacji (za pośrednictwem Play Integrity na Androidzie i App Attest na iOS). Służy to ochronie naszego zaplecza przed nadużyciami.</li>
          </ul>`,
          `<h3>2.4 Informacje o zakupach</h3>
          <p><strong>Subskrypcje i zakupy w aplikacji</strong> są przetwarzane przez <strong>Apple App Store</strong> lub <strong>Google Play</strong> i zarządzane za pośrednictwem <strong>RevenueCat</strong>. Otrzymujemy status zakupu (np. czy posiadasz aktywne uprawnienie "premium"), anonimowy identyfikator użytkownika aplikacji RevenueCat oraz metadane transakcji. <strong>Nigdy nie otrzymujemy ani nie przechowujemy pełnych danych twojej karty płatniczej</strong> — pozostają one u Apple/Google.</p>`,
          `<h3>2.5 Dane trybu gry AI</h3>
          <p>Gdy grasz w <strong>trybie AI</strong>, tekst gry (np. wybrana kategoria i słowa wygenerowane na potrzeby rundy) jest wysyłany do naszego zaplecza (<strong>Google Firebase Cloud Functions</strong>) i przekazywany do <strong>Google Gemini</strong> w celu wygenerowania treści rozgrywki. Tekst ten z założenia nie zawiera danych osobowych, chyba że sam je wprowadzisz we własnej kategorii lub słowie.</p>`,
        ],
      },
      {
        h2: "3. Jak wykorzystujemy informacje",
        body: [
          `<p>Wykorzystujemy powyższe informacje, aby:</p>
          <ul>
            <li>Zapewniać i prowadzić grę, w tym rundy generowane przez AI i zgadywanie głosowe.</li>
            <li>Zarządzać twoją subskrypcją i odblokowywać funkcje premium.</li>
            <li>Wysyłać opcjonalne powiadomienia push (np. przypomnienia, nowe treści) — tylko jeśli udzielisz uprawnień do powiadomień.</li>
            <li>Rozumieć, jak Aplikacja jest wykorzystywana, i ulepszać funkcje oraz wydajność (analityka).</li>
            <li>Diagnozować awarie i naprawiać błędy (raportowanie awarii).</li>
            <li>Chronić nasze zaplecze przed oszustwami, nadużyciami i zautomatyzowanymi atakami (App Check).</li>
          </ul>`,
        ],
      },
      {
        h2: "4. Jak udostępniamy informacje",
        body: [
          `<p>Udostępniamy informacje wyłącznie dostawcom usług, którzy pomagają nam prowadzić Aplikację:</p>
          <table>
            <thead>
              <tr><th>Dostawca</th><th>Cel</th><th>Polityka prywatności</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Google Firebase (Analytics, Crashlytics, Cloud Messaging, App Check, Cloud Functions)</td>
                <td>Analityka, raportowanie awarii, powiadomienia push, integralność, zaplecze</td>
                <td><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">firebase.google.com/support/privacy</a></td>
              </tr>
              <tr>
                <td>Usługi mowy platform Google / Apple</td>
                <td>Zamiana mowy na tekst dla rund głosowych</td>
                <td>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a> ·
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a>
                </td>
              </tr>
              <tr>
                <td>Google Gemini</td>
                <td>Generowanie treści gry AI</td>
                <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a></td>
              </tr>
              <tr>
                <td>RevenueCat</td>
                <td>Zarządzanie subskrypcjami / zakupami</td>
                <td><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">revenuecat.com/privacy</a></td>
              </tr>
              <tr>
                <td>Apple App Store / Google Play</td>
                <td>Przetwarzanie płatności</td>
                <td>
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a> ·
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p><strong>Nie</strong> sprzedajemy twoich danych osobowych i <strong>nie</strong> udostępniamy ich do celów reklamy behawioralnej ponad kontekstem.</p>
          <p>Możemy ujawnić informacje, jeśli wymaga tego prawo, lub w celu ochrony naszych praw, bezpieczeństwa czy mienia, a także praw, bezpieczeństwa czy mienia naszych użytkowników.</p>`,
        ],
      },
      {
        h2: "5. Przechowywanie danych",
        body: [
          `<ul>
            <li>Przechowujemy dane analityczne i dane o awariach przez okresy retencji oferowane przez Firebase (zazwyczaj do 14 miesięcy dla danych analitycznych i ograniczony okres dla danych o awariach).</li>
            <li>Zapisy zakupów/uprawnień są przechowywane tak długo, jak jest to potrzebne do świadczenia usługi oraz zgodności z obowiązkami podatkowymi/księgowymi.</li>
            <li>Tekst zapytań AI może być tymczasowo przechowywany przez nas i przez Google Gemini w celu przetwarzania i zapobiegania nadużyciom, zgodnie z ich politykami.</li>
          </ul>`,
        ],
      },
      {
        h2: "6. Twoje wybory i prawa",
        body: [
          `<ul>
            <li><strong>Mikrofon / mowa</strong>: Możesz odmówić lub cofnąć uprawnienie do mikrofonu w ustawieniach urządzenia. Rundy głosowe nie będą wtedy działać, ale reszta gry - tak.</li>
            <li><strong>Powiadomienia</strong>: Możesz wyłączyć powiadomienia push w ustawieniach urządzenia.</li>
            <li><strong>Analityka</strong>: Możesz ograniczyć śledzenie reklamowe/analityczne poprzez ustawienia prywatności urządzenia (np. "Zezwól aplikacjom na śledzenie" na iOS i ustawienia reklam na Androidzie).</li>
            <li><strong>Dostęp / usunięcie</strong>: Ponieważ nie wymagamy konta, posiadamy niewiele lub żadnych danych, które identyfikują cię osobiście. Aby poprosić o dostęp do danych powiązanych z twoją instalacją lub ich usunięcie, skontaktuj się z nami pod adresem <a href="mailto:{supportEmail}">{supportEmail}</a>.</li>
          </ul>
          <p>W zależności od miejsca zamieszkania możesz mieć prawa wynikające z <strong>RODO</strong> (EOG/Wielka Brytania) lub <strong>CCPA/CPRA</strong> (Kalifornia), w tym prawo do dostępu, poprawiania, usuwania lub ograniczenia przetwarzania twoich danych osobowych oraz do złożenia skargi do organu nadzorczego.</p>`,
        ],
      },
      {
        h2: "7. Prywatność dzieci",
        body: [
          `<p>AI Charades jest przeznaczone dla <strong>szerokiego grona odbiorców</strong> i nie jest kierowane do dzieci poniżej 13 roku życia. Nie zbieramy świadomie danych osobowych od dzieci poniżej tego wieku. Jeśli uważasz, że dziecko przekazało nam dane osobowe, skontaktuj się z nami, a je usuniemy.</p>`,
        ],
      },
      {
        h2: "8. Międzynarodowe przekazywanie danych",
        body: [
          `<p>Nasi dostawcy usług mogą przetwarzać i przechowywać informacje w krajach innych niż kraj twojego zamieszkania, w tym w Stanach Zjednoczonych. Tam, gdzie jest to wymagane, opieramy się na odpowiednich zabezpieczeniach (takich jak Standardowe Klauzule Umowne) dla tych transferów.</p>`,
        ],
      },
      {
        h2: "9. Bezpieczeństwo",
        body: [
          `<p>Stosujemy standardowe dla branży środki (w tym szyfrowanie transmisji i Firebase App Check), aby chronić informacje. Żadna metoda transmisji ani przechowywania danych nie jest w 100% bezpieczna i nie możemy zagwarantować całkowitego bezpieczeństwa.</p>`,
        ],
      },
      {
        h2: "10. Zmiany w niniejszej polityce",
        body: [
          `<p>Możemy okresowo aktualizować niniejszą Politykę Prywatności. Nową wersję opublikujemy w Aplikacji i/lub pod tym adresem URL oraz zaktualizujemy powyższą datę "Ostatnia aktualizacja". Istotne zmiany będą, w miarę możliwości, wyróżnione.</p>`,
        ],
      },
      {
        h2: "11. Kontakt",
        body: [
          `<p>Jeśli masz pytania dotyczące niniejszej Polityki Prywatności lub swoich danych, skontaktuj się z nami:<br /><a href="mailto:{supportEmail}">{supportEmail}</a></p>`,
        ],
      },
    ],
  },
  terms: {
    metaTitle: "Regulamin — AI Charades",
    metaDescription: "Regulamin aplikacji mobilnej AI Charades na iOS i Android.",
    h1: "Regulamin",
    lastUpdatedLabel: "Ostatnia aktualizacja:",
    dateValue: "6 lipca 2026",
    intro:
      `Niniejszy Regulamin ("Regulamin") reguluje korzystanie z aplikacji mobilnej <strong>AI Charades</strong> ("Aplikacja"). Pobierając, instalując lub korzystając z Aplikacji, zgadzasz się na niniejszy Regulamin. Jeśli się nie zgadzasz, prosimy nie korzystać z Aplikacji.`,
    sections: [
      {
        h2: "1. Aplikacja",
        body: [`<p>AI Charades to gra w zgadywanie słów, oferująca tryb solo z AI oraz działający offline imprezowy tryb kalamburów. Aplikacja jest darmowa do pobrania i grania.</p>`],
      },
      {
        h2: "2. Dozwolone użytkowanie",
        body: [
          `<ul>
            <li>Nie będziesz korzystać z Aplikacji w żadnym niezgodnym z prawem celu ani w sposób naruszający prawa innych osób.</li>
            <li>Nie będziesz podejmować prób odtworzenia kodu, dekompilacji ani zakłócania działania Aplikacji lub usług zaplecza.</li>
            <li>Tworzone przez ciebie własne kategorie i słowa nie mogą zawierać nielegalnych treści; ponosisz odpowiedzialność za przesyłane treści, w tym za wszystko, co zostanie wysłane do naszego zaplecza AI.</li>
          </ul>`,
        ],
      },
      {
        h2: "3. Treści generowane przez AI",
        body: [`<p>Zestawy słów, pytania, podpowiedzi i odpowiedzi generowane przez tryb AI są tworzone automatycznie i mogą czasami być niedokładne, niekompletne lub nieoczekiwane. Aplikacja jest przeznaczona wyłącznie do celów rozrywkowych.</p>`],
      },
      {
        h2: "4. Zakupy w aplikacji",
        body: [`<p>Wszelkie subskrypcje lub zakupy w aplikacji są rozliczane i przetwarzane przez Apple App Store lub Google Play, zgodnie z ich odpowiednimi regulaminami. Zarządzanie zakupami (uprawnieniami) obsługuje RevenueCat, zgodnie z opisem w naszej <a href="/{lang}/privacy-policy">Polityce Prywatności</a>.</p>`],
      },
      {
        h2: "5. Własność intelektualna",
        body: [`<p>Aplikacja, w tym jej projekt, maskotka ("Fiesta"), zestawy słów i oprogramowanie, jest naszą własnością i jest chroniona prawami własności intelektualnej. Nie możesz kopiować, modyfikować ani rozpowszechniać żadnej części Aplikacji bez zgody.</p>`],
      },
      {
        h2: "6. Wyłączenie gwarancji",
        body: [`<p>Aplikacja jest dostarczana "tak jak jest", bez jakichkolwiek gwarancji, wyraźnych ani dorozumianych. Nie gwarantujemy, że Aplikacja będzie działać bez przerw, błędów ani że będzie zawsze dostępna.</p>`],
      },
      {
        h2: "7. Ograniczenie odpowiedzialności",
        body: [`<p>W maksymalnym zakresie dozwolonym przez prawo nie ponosimy odpowiedzialności za żadne szkody pośrednie, przypadkowe ani wtórne wynikające z korzystania z Aplikacji.</p>`],
      },
      {
        h2: "8. Zakończenie",
        body: [`<p>Możemy zawiesić lub zakończyć dostęp do Aplikacji dla użytkowników, którzy naruszają niniejszy Regulamin.</p>`],
      },
      {
        h2: "9. Zmiany w niniejszym Regulaminie",
        body: [`<p>Możemy okresowo aktualizować niniejszy Regulamin. Dalsze korzystanie z Aplikacji po wejściu w życie zmian oznacza akceptację zmienionego Regulaminu.</p>`],
      },
      {
        h2: "10. Kontakt",
        body: [`<p>Masz pytania dotyczące niniejszego Regulaminu? Skontaktuj się z nami pod adresem <a href="mailto:{supportEmail}">{supportEmail}</a>.</p>`],
      },
    ],
  },
  support: {
    metaTitle: "Wsparcie — AI Charades",
    metaDescription: "Uzyskaj pomoc dotyczącą AI Charades — gry słownej z mózgiem.",
    h1: "Wsparcie",
    intro: "Potrzebujesz pomocy z AI Charades? Masz opinię, znalazłeś błąd albo chcesz zaproponować nowy zestaw słów? Chętnie cię wysłuchamy.",
    emailIntro: "Napisz do nas na <a href=\"mailto:{supportEmail}\">{supportEmail}</a>, a odpowiemy najszybciej jak to możliwe.",
    commonQuestionsH2: "Najczęstsze pytania",
    commonQuestionsBody: "Szukasz szybkich odpowiedzi? Sprawdź <a href=\"/{lang}/#faq\">FAQ</a> na stronie głównej, aby dowiedzieć się więcej o trybach gry, grze offline, językach i nie tylko.",
    legalH2: "Informacje prawne",
  },
};
