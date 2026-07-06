import type { LegalDictionary } from "../types";

export const tr: LegalDictionary = {
  privacy: {
    metaTitle: "Gizlilik Politikası — AI Charades",
    metaDescription: "AI Charades'in iOS ve Android'de bilgileri nasıl topladığı, kullandığı ve paylaştığı.",
    h1: "AI Charades Gizlilik Politikası",
    effectiveDate: "Yürürlük tarihi:",
    lastUpdated: "Son güncelleme:",
    dateValue: "6 Temmuz 2026",
    intro: [
      `Bu Gizlilik Politikası, AI Charades'in ("biz", "bizi", "bizim") Android ve iOS'ta <strong>AI Charades</strong> mobil uygulamasını ("Uygulama") kullandığınızda bilgileri nasıl topladığını, kullandığını ve paylaştığını açıklar.`,
      "Uygulamayı kullanarak bu politikada açıklanan uygulamaları kabul etmiş olursunuz. Kabul etmiyorsanız lütfen Uygulamayı kullanmayın.",
    ],
    contactLabel: "İletişim:",
    appIdLabel: "Uygulama tanımlayıcısı:",
    sections: [
      {
        h2: "1. Özet (kısa versiyon)",
        body: [
          `<ul>
            <li>Oynamak için sizden hesap oluşturmanızı ya da adınızı veya e-postanızı vermenizi <strong>istemiyoruz</strong>.</li>
            <li><strong>Mikrofonu ve konuşma tanımayı</strong> yalnızca sesli turlar sırasında, söylediklerinizi metne çevirip oyunun tahmininizi kontrol edebilmesi için kullanıyoruz.</li>
            <li><strong>Yapay zekâ oyun modu</strong>, içerik oluşturmak için oyun metnini (kategori ve oluşturulan kelimeler gibi) sunucumuza ve Google Gemini'ye gönderir. Ses kayıtlarınızı <strong>göndermez</strong>.</li>
            <li>Analiz, çökme raporlama ve push bildirimleri için <strong>Google Firebase</strong>'i, abonelik/uygulama içi satın alma yönetimi için <strong>RevenueCat</strong>'i kullanıyoruz.</li>
            <li>Kişisel bilgilerinizi <strong>satmıyoruz</strong>.</li>
          </ul>`,
        ],
      },
      {
        h2: "2. Topladığımız bilgiler",
        body: [
          `<h3>2.1 Sağladığınız bilgiler</h3>
          <p><strong>Oyun içeriği ve ayarları</strong> — seçtiğiniz kategoriler, oluşturduğunuz özel kelimeler/kategoriler ve Uygulamada belirlediğiniz tercihler. Yapay zekâ turları için oluşturduğunuz özel kelimeler, oyun içeriğini üretmek üzere yapay zekâ arka ucumuza gönderilebilir.</p>`,
          `<h3>2.2 Mikrofon ve konuşma girişi</h3>
          <p>Bir <strong>sesli tur</strong> kullandığınızda, Uygulama <strong>mikrofona</strong> erişir ve söylediğiniz tahmini metne dönüştürmek için cihazınızın <strong>konuşma tanıma</strong> servisini kullanır (iOS'ta Apple Speech, Android'de Google/Android konuşma tanıma). Cihazınıza ve işletim sistemi ayarlarınıza bağlı olarak bu ses, <strong>cihaz üzerinde</strong> veya <strong>işletim sistemi sağlayıcısının</strong> (Apple ya da Google) kendi gizlilik politikaları kapsamında konuşma servisi tarafından işlenebilir. Ham sesinizi kendi sunucularımıza <strong>kaydetmiyor, saklamıyor veya iletmiyoruz</strong>. Elde edilen metni yalnızca mevcut oyun turu içinde kullanıyoruz.</p>`,
          `<h3>2.3 Otomatik olarak toplanan bilgiler</h3>
          <p><strong>Google Firebase</strong> ve platform servisleri aracılığıyla şunları toplayabiliriz:</p>
          <ul>
            <li><strong>Analiz verileri</strong> (Firebase Analytics): uygulama açılışları, görüntülenen ekranlar, oynanan oyun modları, uygulama içi etkinlikler, oturum süresi, yaklaşık ülke/bölge, cihaz dili.</li>
            <li><strong>Çökme ve tanı verileri</strong> (Firebase Crashlytics): çökme yığın izleri, cihaz modeli, işletim sistemi sürümü, uygulama sürümü ve tanı günlükleri.</li>
            <li><strong>Cihaz / teknik tanımlayıcılar</strong>: bir Firebase kurulum kimliği, uygulama örneği kimliği ve (push için) bir Firebase Cloud Messaging jetonu.</li>
            <li><strong>Uygulama bütünlüğü sinyalleri</strong> (Firebase App Check): isteğin Uygulamanın gerçek, değiştirilmemiş bir kopyasından geldiğini doğrulayan bir jeton (Android'de Play Integrity, iOS'ta App Attest aracılığıyla). Bu, arka ucumuzu kötüye kullanımdan korumak için kullanılır.</li>
          </ul>`,
          `<h3>2.4 Satın alma bilgileri</h3>
          <p><strong>Abonelikler ve uygulama içi satın almalar</strong>, <strong>Apple App Store</strong> veya <strong>Google Play</strong> tarafından işlenir ve <strong>RevenueCat</strong> üzerinden yönetilir. Satın alma durumunu (örneğin, aktif bir "premium" hakkınız olup olmadığı), anonim bir RevenueCat uygulama kullanıcı kimliğini ve işlem meta verilerini alırız. <strong>Tam ödeme kartı bilgilerinizi asla almıyor veya saklamıyoruz</strong> — bunlar Apple/Google'da kalır.</p>`,
          `<h3>2.5 Yapay zekâ oyun modu verileri</h3>
          <p><strong>Yapay zekâ modunu</strong> oynadığınızda, oyun metni (seçilen kategori ve tur için oluşturulan kelimeler gibi) arka ucumuza (<strong>Google Firebase Cloud Functions</strong>) gönderilir ve oyun içeriği oluşturmak için <strong>Google Gemini</strong>'ye iletilir. Bu metin, siz kendiniz özel bir kategoriye veya kelimeye girmediğiniz sürece tasarım gereği kişisel bilgi içermez.</p>`,
        ],
      },
      {
        h2: "3. Bilgileri nasıl kullanıyoruz",
        body: [
          `<p>Yukarıdaki bilgileri şunlar için kullanıyoruz:</p>
          <ul>
            <li>Yapay zekâ ile oluşturulan turlar ve sesli tahmin dahil olmak üzere oyunu sağlamak ve çalıştırmak.</li>
            <li>Aboneliğinizi yönetmek ve premium özelliklerin kilidini açmak.</li>
            <li>Bildirim izni verdiğiniz takdirde isteğe bağlı push bildirimleri (ör. hatırlatmalar, yeni içerik) göndermek.</li>
            <li>Uygulamanın nasıl kullanıldığını anlamak ve özellikleri ile performansı geliştirmek (analiz).</li>
            <li>Çökmeleri teşhis etmek ve hataları düzeltmek (çökme raporlama).</li>
            <li>Arka ucumuzu dolandırıcılık, kötüye kullanım ve otomatik saldırılardan korumak (App Check).</li>
          </ul>`,
        ],
      },
      {
        h2: "4. Bilgileri nasıl paylaşıyoruz",
        body: [
          `<p>Bilgileri yalnızca Uygulamayı işletmemize yardımcı olan hizmet sağlayıcılarla paylaşıyoruz:</p>
          <table>
            <thead>
              <tr><th>Sağlayıcı</th><th>Amaç</th><th>Gizlilik politikası</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Google Firebase (Analytics, Crashlytics, Cloud Messaging, App Check, Cloud Functions)</td>
                <td>Analiz, çökme raporlama, push, bütünlük, arka uç</td>
                <td><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">firebase.google.com/support/privacy</a></td>
              </tr>
              <tr>
                <td>Google / Apple platform konuşma servisleri</td>
                <td>Sesli turlar için konuşmadan metne dönüştürme</td>
                <td>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a> ·
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a>
                </td>
              </tr>
              <tr>
                <td>Google Gemini</td>
                <td>Yapay zekâ oyun içeriği oluşturma</td>
                <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a></td>
              </tr>
              <tr>
                <td>RevenueCat</td>
                <td>Abonelik / satın alma yönetimi</td>
                <td><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">revenuecat.com/privacy</a></td>
              </tr>
              <tr>
                <td>Apple App Store / Google Play</td>
                <td>Ödeme işleme</td>
                <td>
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a> ·
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>Kişisel bilgilerinizi <strong>satmıyoruz</strong> ve bunları çapraz bağlamlı davranışsal reklamcılık için <strong>paylaşmıyoruz</strong>.</p>
          <p>Yasalarca gerekli olduğunda veya haklarımızı, güvenliğimizi, mülkümüzü ya da kullanıcılarımızınkini korumak için bilgi açıklayabiliriz.</p>`,
        ],
      },
      {
        h2: "5. Veri saklama",
        body: [
          `<ul>
            <li>Analiz ve çökme verilerini Firebase'in sunduğu saklama süreleri boyunca tutuyoruz (analiz için genellikle 14 aya kadar, çökme verileri için sınırlı bir süre).</li>
            <li>Satın alma/hak kayıtları, hizmeti sağlamak ve vergi/muhasebe yükümlülüklerine uymak için gerektiği sürece saklanır.</li>
            <li>Yapay zekâ istek metni, işleme ve kötüye kullanımı önleme amacıyla kendi politikalarımıza ve Google Gemini'nin politikalarına göre geçici olarak tarafımızca ve onlarca saklanabilir.</li>
          </ul>`,
        ],
      },
      {
        h2: "6. Seçimleriniz ve haklarınız",
        body: [
          `<ul>
            <li><strong>Mikrofon / konuşma</strong>: Cihaz ayarlarınızdan mikrofon iznini reddedebilir veya geri alabilirsiniz. Bu izin olmadan sesli turlar çalışmaz, ancak oyunun geri kalanı çalışır.</li>
            <li><strong>Bildirimler</strong>: Push bildirimlerini cihaz ayarlarınızdan devre dışı bırakabilirsiniz.</li>
            <li><strong>Analiz</strong>: Cihazınızın gizlilik ayarları aracılığıyla (ör. iOS "Uygulamaların Takip Etmesine İzin Ver" ve Android reklam ayarları) reklam/analiz izlemesini sınırlayabilirsiniz.</li>
            <li><strong>Erişim / silme</strong>: Hesap gerektirmediğimiz için sizi kişisel olarak tanımlayan çok az veri tutuyoruz ya da hiç tutmuyoruz. Kurulumunuzla ilişkili herhangi bir veriye erişim ya da silme talebinde bulunmak için bize <a href="mailto:{supportEmail}">{supportEmail}</a> adresinden ulaşın.</li>
          </ul>
          <p>Yaşadığınız yere bağlı olarak, kişisel verilerinize erişme, düzeltme, silme veya işlenmesini kısıtlama hakkı ile bir denetim otoritesine şikâyette bulunma hakkı dahil olmak üzere <strong>GDPR</strong> (AEA/İngiltere) veya <strong>CCPA/CPRA</strong> (Kaliforniya) kapsamında haklara sahip olabilirsiniz.</p>`,
        ],
      },
      {
        h2: "7. Çocukların gizliliği",
        body: [
          `<p>AI Charades <strong>genel bir kitleye</strong> yöneliktir ve 13 yaşın altındaki çocuklara yönelik değildir. Bu yaşın altındaki çocuklardan bilerek kişisel bilgi toplamıyoruz. Bir çocuğun bize kişisel bilgi verdiğini düşünüyorsanız bizimle iletişime geçin, bilgiyi sileriz.</p>`,
        ],
      },
      {
        h2: "8. Uluslararası veri aktarımları",
        body: [
          `<p>Hizmet sağlayıcılarımız, bilgileri yaşadığınız ülke dışındaki ülkelerde, Amerika Birleşik Devletleri dahil, işleyebilir ve saklayabilir. Gerekli olduğunda bu aktarımlar için uygun güvenceler kullanırız (Standart Sözleşme Hükümleri gibi).</p>`,
        ],
      },
      {
        h2: "9. Güvenlik",
        body: [
          `<p>Bilgileri korumak için sektör standardı önlemler kullanıyoruz (iletim şifrelemesi ve Firebase App Check dahil). Hiçbir iletim veya saklama yöntemi %100 güvenli değildir ve mutlak güvenlik garanti edemeyiz.</p>`,
        ],
      },
      {
        h2: "10. Bu politikadaki değişiklikler",
        body: [
          `<p>Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Yeni sürümü Uygulamada ve/veya bu URL'de yayınlayacak ve yukarıdaki "Son güncelleme" tarihini güncelleyeceğiz. Önemli değişiklikler mümkün olduğunca vurgulanacaktır.</p>`,
        ],
      },
      {
        h2: "11. Bize ulaşın",
        body: [
          `<p>Bu Gizlilik Politikası veya verileriniz hakkında sorularınız varsa iletişime geçin:<br /><a href="mailto:{supportEmail}">{supportEmail}</a></p>`,
        ],
      },
    ],
  },
  terms: {
    metaTitle: "Kullanım Koşulları — AI Charades",
    metaDescription: "AI Charades mobil uygulamasının iOS ve Android için Kullanım Koşulları.",
    h1: "Kullanım Koşulları",
    lastUpdatedLabel: "Son güncelleme:",
    dateValue: "6 Temmuz 2026",
    intro:
      `Bu Kullanım Koşulları ("Koşullar"), <strong>AI Charades</strong> mobil uygulamasını ("Uygulama") kullanımınızı düzenler. Uygulamayı indirerek, kurarak veya kullanarak bu Koşulları kabul etmiş olursunuz. Kabul etmiyorsanız lütfen Uygulamayı kullanmayın.`,
    sections: [
      {
        h2: "1. Uygulama",
        body: [`<p>AI Charades, solo yapay zekâ destekli bir mod ve çevrimdışı kafada tabu parti modu sunan bir kelime bulma oyunudur. Uygulama indirmesi ve oynanması ücretsizdir.</p>`],
      },
      {
        h2: "2. Kabul edilebilir kullanım",
        body: [
          `<ul>
            <li>Uygulamayı herhangi bir yasa dışı amaçla veya başkalarının haklarını ihlal edecek şekilde kullanmayacaksınız.</li>
            <li>Uygulamanın işleyişini veya arka uç servislerini tersine mühendislik yapmaya, çözümlemeye veya bunlara müdahale etmeye çalışmayacaksınız.</li>
            <li>Oluşturduğunuz özel kategoriler ve kelimeler yasa dışı içerik barındırmamalıdır; yapay zekâ arka ucumuza gönderilen içerik dahil, gönderdiğiniz içerikten siz sorumlusunuz.</li>
          </ul>`,
        ],
      },
      {
        h2: "3. Yapay zekâ tarafından oluşturulan içerik",
        body: [`<p>Yapay zekâ modu tarafından oluşturulan kelime paketleri, sorular, ipuçları ve yanıtlar otomatik olarak üretilir ve zaman zaman hatalı, eksik veya beklenmedik olabilir. Uygulama yalnızca eğlence amaçlıdır.</p>`],
      },
      {
        h2: "4. Uygulama içi satın almalar",
        body: [`<p>Abonelikler veya uygulama içi satın almalar, kendi şartlarına uygun olarak Apple App Store veya Google Play tarafından faturalandırılır ve işlenir. Satın alma yönetimi (haklar), <a href="/{lang}/privacy-policy">Gizlilik Politikamızda</a> açıklandığı gibi RevenueCat tarafından yürütülür.</p>`],
      },
      {
        h2: "5. Fikri mülkiyet",
        body: [`<p>Tasarımı, maskotu ("Fiesta"), kelime paketleri ve yazılımı dahil olmak üzere Uygulama bize aittir ve fikri mülkiyet yasalarıyla korunur. İzin almadan Uygulamanın herhangi bir kısmını kopyalayamaz, değiştiremez veya dağıtamazsınız.</p>`],
      },
      {
        h2: "6. Garanti reddi",
        body: [`<p>Uygulama, açık veya zımni hiçbir garanti olmaksızın "olduğu gibi" sunulmaktadır. Uygulamanın kesintisiz, hatasız veya her zaman kullanılabilir olacağını garanti etmiyoruz.</p>`],
      },
      {
        h2: "7. Sorumluluk sınırlaması",
        body: [`<p>Yasaların izin verdiği azami ölçüde, Uygulamayı kullanımınızdan kaynaklanan dolaylı, arızi veya sonuçsal zararlardan sorumlu değiliz.</p>`],
      },
      {
        h2: "8. Fesih",
        body: [`<p>Bu Koşulları ihlal eden kullanıcıların Uygulamaya erişimini askıya alabilir veya sonlandırabiliriz.</p>`],
      },
      {
        h2: "9. Bu Koşullardaki değişiklikler",
        body: [`<p>Bu Koşulları zaman zaman güncelleyebiliriz. Değişiklikler yürürlüğe girdikten sonra Uygulamayı kullanmaya devam etmeniz, revize edilmiş Koşulları kabul ettiğiniz anlamına gelir.</p>`],
      },
      {
        h2: "10. İletişim",
        body: [`<p>Bu Koşullar hakkında sorularınız mı var? Bize <a href="mailto:{supportEmail}">{supportEmail}</a> adresinden ulaşın.</p>`],
      },
    ],
  },
  support: {
    metaTitle: "Destek — AI Charades",
    metaDescription: "AI Charades — beyinli kelime oyunu için yardım alın.",
    h1: "Destek",
    intro: "AI Charades ile ilgili yardıma mı ihtiyacınız var? Geri bildiriminiz mi var, bir hata mı buldunuz, ya da yeni bir kelime paketi mi önermek istiyorsunuz? Sizden haber almak isteriz.",
    emailIntro: "Bize <a href=\"mailto:{supportEmail}\">{supportEmail}</a> adresinden e-posta gönderin, en kısa sürede size döneriz.",
    commonQuestionsH2: "Sık sorulan sorular",
    commonQuestionsBody: "Hızlı yanıtlar mı arıyorsunuz? Oyun modları, çevrimdışı oynama, diller ve daha fazlası hakkında ayrıntılar için ana sayfadaki <a href=\"/{lang}/#faq\">SSS</a> bölümüne göz atın.",
    legalH2: "Yasal",
  },
};
