import type { LegalDictionary } from "../types";

export const id: LegalDictionary = {
  privacy: {
    metaTitle: "Kebijakan Privasi — AI Charades",
    metaDescription: "Bagaimana AI Charades mengumpulkan, menggunakan, dan membagikan informasi di iOS dan Android.",
    h1: "Kebijakan Privasi untuk AI Charades",
    effectiveDate: "Tanggal berlaku:",
    lastUpdated: "Terakhir diperbarui:",
    dateValue: "6 Juli 2026",
    intro: [
      `Kebijakan Privasi ini menjelaskan bagaimana AI Charades ("kami") mengumpulkan, menggunakan, dan membagikan informasi ketika kamu menggunakan aplikasi mobile <strong>AI Charades</strong> ("Aplikasi") di Android dan iOS.`,
      "Dengan menggunakan Aplikasi ini, kamu menyetujui praktik yang dijelaskan dalam kebijakan ini. Jika kamu tidak setuju, mohon untuk tidak menggunakan Aplikasi ini.",
    ],
    contactLabel: "Kontak:",
    appIdLabel: "Identitas aplikasi:",
    sections: [
      {
        h2: "1. Ringkasan (versi singkat)",
        body: [
          `<ul>
            <li>Kami <strong>tidak</strong> meminta kamu membuat akun atau memberikan nama atau email untuk bisa bermain.</li>
            <li>Kami menggunakan <strong>mikrofon dan pengenalan suara</strong> hanya selama ronde suara, untuk mengubah ucapanmu menjadi teks agar game bisa memeriksa tebakanmu.</li>
            <li><strong>Mode game AI</strong> mengirimkan teks game (seperti kategori dan kata-kata yang dihasilkan) ke server kami dan ke Google Gemini untuk menghasilkan konten. Ini <strong>tidak</strong> mengirimkan rekaman suaramu.</li>
            <li>Kami menggunakan <strong>Google Firebase</strong> untuk analitik, laporan crash, dan notifikasi push, serta <strong>RevenueCat</strong> untuk mengelola langganan/pembelian dalam aplikasi.</li>
            <li>Kami <strong>tidak</strong> menjual informasi pribadimu.</li>
          </ul>`,
        ],
      },
      {
        h2: "2. Informasi yang kami kumpulkan",
        body: [
          `<h3>2.1 Informasi yang kamu berikan</h3>
          <p><strong>Konten game dan pengaturan</strong> — kategori yang kamu pilih, kata/kategori custom yang kamu buat, dan preferensi yang kamu atur di Aplikasi. Kata custom yang kamu buat untuk ronde AI dapat dikirim ke backend AI kami untuk menghasilkan gameplay.</p>`,
          `<h3>2.2 Mikrofon dan input suara</h3>
          <p>Saat kamu menggunakan <strong>ronde suara</strong>, Aplikasi mengakses <strong>mikrofon</strong> dan menggunakan layanan <strong>pengenalan suara</strong> perangkat (Apple Speech di iOS, pengenalan suara Google/Android di Android) untuk mengubah tebakan lisanmu menjadi teks. Tergantung pada perangkat dan pengaturan OS-mu, audio ini dapat diproses <strong>di perangkat itu sendiri</strong> atau oleh layanan suara <strong>penyedia sistem operasi</strong> (Apple atau Google) sesuai kebijakan privasi masing-masing. Kami <strong>tidak</strong> merekam, menyimpan, atau mengirimkan audio mentahmu ke server kami sendiri. Kami hanya menggunakan teks hasilnya dalam ronde game yang sedang berlangsung.</p>`,
          `<h3>2.3 Informasi yang dikumpulkan secara otomatis</h3>
          <p>Melalui <strong>Google Firebase</strong> dan layanan platform, kami mungkin mengumpulkan:</p>
          <ul>
            <li><strong>Data analitik</strong> (Firebase Analytics): pembukaan aplikasi, layar yang dilihat, mode game yang dimainkan, peristiwa dalam aplikasi, durasi sesi, negara/wilayah secara umum, bahasa perangkat.</li>
            <li><strong>Data crash dan diagnostik</strong> (Firebase Crashlytics): jejak stack crash, model perangkat, versi OS, versi aplikasi, dan log diagnostik.</li>
            <li><strong>Identitas perangkat/teknis</strong>: ID instalasi Firebase, ID instance aplikasi, dan (untuk push) token Firebase Cloud Messaging.</li>
            <li><strong>Sinyal integritas aplikasi</strong> (Firebase App Check): token yang membuktikan bahwa permintaan berasal dari salinan Aplikasi yang asli dan tidak dimodifikasi (melalui Play Integrity di Android dan App Attest di iOS). Ini digunakan untuk melindungi backend kami dari penyalahgunaan.</li>
          </ul>`,
          `<h3>2.4 Informasi pembelian</h3>
          <p><strong>Langganan dan pembelian dalam aplikasi</strong> diproses oleh <strong>Apple App Store</strong> atau <strong>Google Play</strong>, dan dikelola melalui <strong>RevenueCat</strong>. Kami menerima status pembelian (misalnya, apakah kamu memiliki hak akses "premium" yang aktif), ID pengguna aplikasi RevenueCat yang anonim, dan metadata transaksi. <strong>Kami tidak pernah menerima atau menyimpan detail kartu pembayaranmu secara lengkap</strong> — itu tetap berada di Apple/Google.</p>`,
          `<h3>2.5 Data mode game AI</h3>
          <p>Saat kamu bermain <strong>mode AI</strong>, teks game (seperti kategori yang dipilih dan kata-kata yang dihasilkan untuk ronde tersebut) dikirim ke backend kami (<strong>Google Firebase Cloud Functions</strong>) dan diteruskan ke <strong>Google Gemini</strong> untuk menghasilkan konten gameplay. Teks ini secara desain tidak berisi informasi pribadi kecuali kamu memasukkannya sendiri ke dalam kategori atau kata custom.</p>`,
        ],
      },
      {
        h2: "3. Bagaimana kami menggunakan informasi",
        body: [
          `<p>Kami menggunakan informasi di atas untuk:</p>
          <ul>
            <li>Menyediakan dan menjalankan game, termasuk ronde buatan AI dan tebakan suara.</li>
            <li>Mengelola langgananmu dan membuka fitur premium.</li>
            <li>Mengirim notifikasi push opsional (misalnya, pengingat, konten baru) — hanya jika kamu memberikan izin notifikasi.</li>
            <li>Memahami cara Aplikasi digunakan dan meningkatkan fitur serta performa (analitik).</li>
            <li>Mendiagnosis crash dan memperbaiki bug (laporan crash).</li>
            <li>Melindungi backend kami dari penipuan, penyalahgunaan, dan serangan otomatis (App Check).</li>
          </ul>`,
        ],
      },
      {
        h2: "4. Bagaimana kami membagikan informasi",
        body: [
          `<p>Kami hanya membagikan informasi dengan penyedia layanan yang membantu kami mengoperasikan Aplikasi:</p>
          <table>
            <thead>
              <tr><th>Penyedia</th><th>Tujuan</th><th>Kebijakan privasi</th></tr>
            </thead>
            <tbody>
              <tr>
                <td>Google Firebase (Analytics, Crashlytics, Cloud Messaging, App Check, Cloud Functions)</td>
                <td>Analitik, laporan crash, push, integritas, backend</td>
                <td><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener">firebase.google.com/support/privacy</a></td>
              </tr>
              <tr>
                <td>Layanan suara platform Google / Apple</td>
                <td>Pengubahan suara ke teks untuk ronde suara</td>
                <td>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a> ·
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a>
                </td>
              </tr>
              <tr>
                <td>Google Gemini</td>
                <td>Menghasilkan konten game AI</td>
                <td><a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a></td>
              </tr>
              <tr>
                <td>RevenueCat</td>
                <td>Pengelolaan langganan/pembelian</td>
                <td><a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener">revenuecat.com/privacy</a></td>
              </tr>
              <tr>
                <td>Apple App Store / Google Play</td>
                <td>Pemrosesan pembayaran</td>
                <td>
                  <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener">apple.com/legal/privacy</a> ·
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">policies.google.com/privacy</a>
                </td>
              </tr>
            </tbody>
          </table>
          <p>Kami <strong>tidak</strong> menjual informasi pribadimu, dan kami <strong>tidak</strong> membagikannya untuk iklan berbasis perilaku lintas konteks.</p>
          <p>Kami dapat mengungkapkan informasi jika diwajibkan oleh hukum, atau untuk melindungi hak, keselamatan, atau properti kami maupun pengguna kami.</p>`,
        ],
      },
      {
        h2: "5. Retensi data",
        body: [
          `<ul>
            <li>Kami menyimpan data analitik dan crash selama periode retensi yang disediakan oleh Firebase (umumnya hingga 14 bulan untuk analitik, dan jangka waktu terbatas untuk data crash).</li>
            <li>Catatan pembelian/hak akses disimpan selama diperlukan untuk menyediakan layanan dan memenuhi kewajiban pajak/akuntansi.</li>
            <li>Teks permintaan AI dapat disimpan sementara oleh kami dan oleh Google Gemini untuk pemrosesan dan pencegahan penyalahgunaan, sesuai kebijakan masing-masing.</li>
          </ul>`,
        ],
      },
      {
        h2: "6. Pilihan dan hakmu",
        body: [
          `<ul>
            <li><strong>Mikrofon/suara</strong>: Kamu dapat menolak atau mencabut izin mikrofon di pengaturan perangkatmu. Ronde suara tidak akan berfungsi tanpanya, tetapi sisa game akan tetap berjalan.</li>
            <li><strong>Notifikasi</strong>: Kamu dapat menonaktifkan notifikasi push di pengaturan perangkatmu.</li>
            <li><strong>Analitik</strong>: Kamu dapat membatasi pelacakan iklan/analitik melalui pengaturan privasi perangkatmu (misalnya, "Allow Apps to Request to Track" di iOS dan pengaturan iklan di Android).</li>
            <li><strong>Akses/penghapusan</strong>: Karena kami tidak mewajibkan akun, kami hampir tidak menyimpan data yang mengidentifikasi kamu secara pribadi. Untuk meminta akses atau penghapusan data apa pun yang terkait dengan instalasimu, hubungi kami di <a href="mailto:{supportEmail}">{supportEmail}</a>.</li>
          </ul>
          <p>Tergantung di mana kamu tinggal, kamu mungkin memiliki hak berdasarkan <strong>GDPR</strong> (EEA/Inggris) atau <strong>CCPA/CPRA</strong> (California), termasuk hak untuk mengakses, mengoreksi, menghapus, atau membatasi pemrosesan data pribadimu, dan untuk mengajukan keluhan kepada otoritas pengawas.</p>`,
        ],
      },
      {
        h2: "7. Privasi anak-anak",
        body: [
          `<p>AI Charades ditujukan untuk <strong>audiens umum</strong> dan tidak ditujukan untuk anak-anak di bawah 13 tahun. Kami tidak dengan sengaja mengumpulkan informasi pribadi dari anak-anak di bawah usia tersebut. Jika kamu mengetahui bahwa seorang anak telah memberikan informasi pribadi kepada kami, hubungi kami dan kami akan menghapusnya.</p>`,
        ],
      },
      {
        h2: "8. Transfer data internasional",
        body: [
          `<p>Penyedia layanan kami dapat memproses dan menyimpan informasi di negara selain tempat kamu tinggal, termasuk Amerika Serikat. Jika diperlukan, kami mengandalkan perlindungan yang sesuai (seperti Standard Contractual Clauses) untuk transfer ini.</p>`,
        ],
      },
      {
        h2: "9. Keamanan",
        body: [
          `<p>Kami menggunakan langkah-langkah standar industri (termasuk enkripsi transportasi dan Firebase App Check) untuk melindungi informasi. Tidak ada metode transmisi atau penyimpanan yang 100% aman, dan kami tidak dapat menjamin keamanan mutlak.</p>`,
        ],
      },
      {
        h2: "10. Perubahan pada kebijakan ini",
        body: [
          `<p>Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan mempublikasikan versi baru di Aplikasi dan/atau di URL ini serta memperbarui tanggal "Terakhir diperbarui" di atas. Perubahan besar akan disorot jika memungkinkan.</p>`,
        ],
      },
      {
        h2: "11. Hubungi kami",
        body: [
          `<p>Jika kamu memiliki pertanyaan tentang Kebijakan Privasi ini atau datamu, hubungi:<br /><a href="mailto:{supportEmail}">{supportEmail}</a></p>`,
        ],
      },
    ],
  },
  terms: {
    metaTitle: "Ketentuan Layanan — AI Charades",
    metaDescription: "Ketentuan Layanan untuk aplikasi mobile AI Charades di iOS dan Android.",
    h1: "Ketentuan Layanan",
    lastUpdatedLabel: "Terakhir diperbarui:",
    dateValue: "6 Juli 2026",
    intro:
      `Ketentuan Layanan ("Ketentuan") ini mengatur penggunaanmu atas aplikasi mobile <strong>AI Charades</strong> ("Aplikasi"). Dengan mengunduh, memasang, atau menggunakan Aplikasi, kamu menyetujui Ketentuan ini. Jika kamu tidak setuju, mohon untuk tidak menggunakan Aplikasi.`,
    sections: [
      {
        h2: "1. Aplikasi",
        body: [`<p>AI Charades adalah game tebak kata yang menawarkan mode solo bertenaga AI dan mode party heads-up offline. Aplikasi ini gratis untuk diunduh dan dimainkan.</p>`],
      },
      {
        h2: "2. Penggunaan yang wajar",
        body: [
          `<ul>
            <li>Kamu tidak akan menggunakan Aplikasi untuk tujuan melanggar hukum atau dengan cara yang melanggar hak orang lain.</li>
            <li>Kamu tidak akan mencoba merekayasa balik, mendekompilasi, atau mengganggu pengoperasian Aplikasi atau layanan backend-nya.</li>
            <li>Kategori dan kata custom yang kamu buat tidak boleh berisi konten ilegal; kamu bertanggung jawab atas konten yang kamu kirimkan, termasuk apa pun yang dikirim ke backend AI kami.</li>
          </ul>`,
        ],
      },
      {
        h2: "3. Konten buatan AI",
        body: [`<p>Paket kata, pertanyaan, petunjuk, dan jawaban yang dihasilkan oleh mode AI dibuat secara otomatis dan sesekali dapat tidak akurat, tidak lengkap, atau tidak terduga. Aplikasi ini ditujukan hanya untuk tujuan hiburan.</p>`],
      },
      {
        h2: "4. Pembelian dalam aplikasi",
        body: [`<p>Setiap langganan atau pembelian dalam aplikasi ditagih dan diproses oleh Apple App Store atau Google Play, sesuai dengan ketentuan masing-masing. Pengelolaan pembelian (hak akses) ditangani oleh RevenueCat sebagaimana dijelaskan dalam <a href="/{lang}/privacy-policy">Kebijakan Privasi</a> kami.</p>`],
      },
      {
        h2: "5. Kekayaan intelektual",
        body: [`<p>Aplikasi ini, termasuk desain, maskot ("Fiesta"), paket kata, dan perangkat lunaknya, dimiliki oleh kami dan dilindungi oleh undang-undang kekayaan intelektual. Kamu tidak boleh menyalin, memodifikasi, atau mendistribusikan bagian mana pun dari Aplikasi tanpa izin.</p>`],
      },
      {
        h2: "6. Penyangkalan jaminan",
        body: [`<p>Aplikasi disediakan "apa adanya" tanpa jaminan dalam bentuk apa pun, baik tersurat maupun tersirat. Kami tidak menjamin Aplikasi akan berjalan tanpa gangguan, bebas kesalahan, atau tersedia setiap saat.</p>`],
      },
      {
        h2: "7. Batasan tanggung jawab",
        body: [`<p>Sejauh diizinkan oleh hukum, kami tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan Aplikasi olehmu.</p>`],
      },
      {
        h2: "8. Penghentian",
        body: [`<p>Kami dapat menangguhkan atau menghentikan akses ke Aplikasi bagi pengguna yang melanggar Ketentuan ini.</p>`],
      },
      {
        h2: "9. Perubahan pada Ketentuan ini",
        body: [`<p>Kami dapat memperbarui Ketentuan ini dari waktu ke waktu. Penggunaan Aplikasi yang berkelanjutan setelah perubahan berlaku merupakan penerimaan atas Ketentuan yang direvisi.</p>`],
      },
      {
        h2: "10. Kontak",
        body: [`<p>Ada pertanyaan tentang Ketentuan ini? Hubungi kami di <a href="mailto:{supportEmail}">{supportEmail}</a>.</p>`],
      },
    ],
  },
  support: {
    metaTitle: "Dukungan — AI Charades",
    metaDescription: "Dapatkan bantuan untuk AI Charades — game tebak kata yang punya otak.",
    h1: "Dukungan",
    intro: "Butuh bantuan dengan AI Charades? Punya masukan, menemukan bug, atau ingin mengusulkan paket kata baru? Kami senang mendengarnya darimu.",
    emailIntro: "Kirim email ke <a href=\"mailto:{supportEmail}\">{supportEmail}</a> dan kami akan membalas secepat mungkin.",
    commonQuestionsH2: "Pertanyaan umum",
    commonQuestionsBody: "Mencari jawaban cepat? Lihat <a href=\"/{lang}/#faq\">FAQ</a> di halaman utama untuk detail tentang mode game, main offline, bahasa, dan lainnya.",
    legalH2: "Legal",
  },
};
