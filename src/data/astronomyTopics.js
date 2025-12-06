import { Star } from 'lucide-react';

export const astronomyTopics = [
  {
    id: 'stars',
    title: 'Bintang: Api Kosmik yang Menyala Abadi',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-purple-300">Bagaimana Bintang Terbentuk?</h3>
        <p className="text-lg leading-relaxed">
          Bintang terbentuk dalam awan molekul raksasa yang disebut <strong>nebula</strong>. Ketika bagian dari nebula ini runtuh di bawah pengaruh gravitasinya sendiri, materi mulai berkumpul membentuk bola gas yang sangat panas dan padat di pusatnya.
        </p>
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-500/30">
          <h4 className="font-semibold text-xl mb-3 text-purple-200">Proses Pembentukan Bintang:</h4>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li><strong>Nebula</strong> - Awan gas dan debu raksasa di ruang angkasa</li>
            <li><strong>Kolaps Gravitasi</strong> - Materi mulai berkumpul karena gaya gravitasi</li>
            <li><strong>Protobintang</strong> - Bola gas panas yang belum melakukan fusi nuklir</li>
            <li><strong>Fusi Nuklir</strong> - Ketika suhu mencapai 10 juta Kelvin, hidrogen berubah menjadi helium</li>
            <li><strong>Bintang Utama</strong> - Bintang mencapai keseimbangan dan mulai bersinar</li>
          </ol>
        </div>
        <p className="text-lg leading-relaxed">
          Bintang seperti matahari kita menghabiskan 90% hidupnya dalam tahap <strong>deret utama</strong>, di mana ia melakukan fusi hidrogen menjadi helium. Ketika bahan bakar hidrogen habis, bintang akan berevolusi menjadi raksasa merah, dan akhirnya menjadi katai putih, bintang neutron, atau lubang hitam tergantung pada massanya.
        </p>
      </div>
    )
  },
  {
    id: 'galaxies',
    title: 'Galaksi: Kota Kosmik yang Luar Biasa',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-purple-300">Struktur dan Jenis Galaksi</h3>
        <p className="text-lg leading-relaxed">
          Galaksi adalah sistem gravitasi yang terdiri dari miliaran bintang, gas, debu, dan materi gelap. Galaksi Bima Sakti kita sendiri berisi sekitar 100-400 miliar bintang dan memiliki diameter sekitar 100.000 tahun cahaya.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-4 rounded-lg border border-purple-500/30">
            <h4 className="font-semibold text-lg mb-2 text-purple-200">Jenis Galaksi:</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Spiral (seperti Bima Sakti)</li>
              <li>• Elips</li>
              <li>• Tak Beraturan</li>
              <li>• Spiral Batang</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-4 rounded-lg border border-purple-500/30">
            <h4 className="font-semibold text-lg mb-2 text-purple-200">Fakta Menarik:</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Ada 2 triliun galaksi di alam semesta</li>
              <li>• Galaksi Andromeda akan bertabrakan dengan Bima Sakti dalam 4 miliar tahun</li>
              <li>• Lubang hitam supermasif ada di pusat setiap galaksi besar</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'blackhole',
    title: 'Lubang Hitam: Misteri Terbesar di Alam Semesta',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-purple-300">Apa Itu Lubang Hitam?</h3>
        <p className="text-lg leading-relaxed">
          Lubang hitam adalah wilayah di ruang-waktu yang gravitasinya sangat kuat sehingga <strong>tidak ada apa pun</strong> yang bisa lolos dari tarikannya — bahkan cahaya sekalipun. Konsep ini pertama kali diprediksi oleh <strong>Karl Schwarzschild</strong> pada 1916 dari teori relativitas umum Einstein.
        </p>
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-500/30">
          <h4 className="font-semibold text-xl mb-3 text-purple-200">Struktur Lubang Hitam:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Event Horizon</strong>: Batas tak-terlihat di mana cahaya mulai tidak bisa lolos</li>
            <li><strong>Singularitas</strong>: Titik pusat dengan kerapatan tak terhingga</li>
            <li><strong>Accretion Disk</strong>: Cakram gas panas yang berputar di sekitar lubang hitam</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-purple-200">Jenis-Jenis Lubang Hitam:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Stellar</strong>: Terbentuk dari bintang masif yang kolaps (3–20 massa matahari)</li>
          <li><strong>Supermasif</strong>: Jutaan hingga miliaran massa matahari — ada di pusat galaksi (termasuk Bima Sakti)</li>
          <li><strong>Intermediate</strong>: Ukuran sedang — masih dalam penelitian</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Stephen Hawking membuktikan bahwa lubang hitam bisa memancarkan radiasi (radiasi Hawking) dan perlahan menguap. Lubang hitam pertama yang difoto langsung oleh <strong>Event Horizon Telescope</strong> pada 2019 adalah M87*.
        </p>
      </div>
    )
  },
  {
    id: 'bigbang',
    title: 'Teori Big Bang: Kelahiran Alam Semesta',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-purple-300">Bagaimana Semuanya Dimulai?</h3>
        <p className="text-lg leading-relaxed">
          Teori Big Bang menyatakan bahwa alam semesta dimulai dari <strong>titik singularitas</strong> yang sangat panas dan padat sekitar <strong>13,8 miliar tahun lalu</strong>. Titik itu meledak dan mengembang, membentuk ruang, waktu, materi, dan energi.
        </p>
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-500/30">
          <h4 className="font-semibold text-xl mb-3 text-purple-200">Bukti Utama Big Bang:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Latar Belakang Gelombang Mikro Kosmik (CMB)</strong>: Sisa panas dari ledakan awal — ditemukan 1965 oleh Penzias &amp; Wilson</li>
            <li><strong>Ekspansi Alam Semesta</strong>: Galaksi menjauh — ditemukan oleh Edwin Hubble (1929)</li>
            <li><strong>Kelimpahan Unsur Ringan</strong>: Rasio H:He sesuai prediksi (75% hidrogen, 25% helium)</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-purple-200">Timeline Awal Alam Semesta:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>10⁻⁴³ detik</strong>: Era Planck — fisika kuantum &amp; gravitasi menyatu</li>
          <li><strong>10⁻³⁶ detik</strong>: Inflasi kosmik — alam semesta mengembang eksponensial</li>
          <li><strong>380.000 tahun</strong>: Atom terbentuk, foton bebas — CMB lahir</li>
          <li><strong>200 juta tahun</strong>: Bintang pertama menyala</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Tanpa Big Bang, tidak ada penjelasan ilmiah untuk asal-usul alam semesta yang kita amati hari ini.
        </p>
      </div>
    )
  },
  {
    id: 'exoplanets',
    title: 'Eksoplanet: Dunia di Luar Tata Surya',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-purple-300">Planet di Sekitar Bintang Lain</h3>
        <p className="text-lg leading-relaxed">
          Eksoplanet adalah planet yang mengorbit bintang di luar Tata Surya kita. Planet pertama ditemukan pada <strong>1992</strong>, dan kini lebih dari <strong>5.600 eksoplanet</strong> telah dikonfirmasi oleh misi seperti <strong>Kepler</strong> dan <strong>TESS</strong>.
        </p>
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-500/30">
          <h4 className="font-semibold text-xl mb-3 text-purple-200">Jenis Eksoplanet:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Hot Jupiter</strong>: Raksasa gas dekat bintang — panas &amp; cepat orbit</li>
            <li><strong>Super-Earth</strong>: 1–10 kali massa Bumi — bisa berbatu atau berair</li>
            <li><strong>Mini-Neptune</strong>: Atmosfer tebal, inti berbatu</li>
            <li><strong>Planet Layan (Eyeball)</strong>: Satu sisi selalu menghadap bintang</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-purple-200">Metode Deteksi:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Transit</strong>: Planet lewat di depan bintang → cahaya redup</li>
          <li><strong>Kecepatan Radial</strong>: Bintang "bergoyang" karena tarikan gravitasi planet</li>
          <li><strong>Pencitraan Langsung</strong>: Foto langsung (sulit, tapi mungkin untuk planet jauh)</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Misi James Webb Space Telescope (JWST) kini menganalisis atmosfer eksoplanet untuk mencari tanda kehidupan — seperti oksigen, metana, dan air.
        </p>
      </div>
    )
  },
  {
    id: 'nebulae',
    title: 'Nebula: Pabrik Bintang dan Kuburan Kosmik',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-purple-300">Awan Kosmik yang Menakjubkan</h3>
        <p className="text-lg leading-relaxed">
          Nebula adalah awan raksasa gas (hidrogen, helium) dan debu di antar bintang. Ada dua tipe utama: <strong>nebula emisi</strong> (bersinar karena ionisasi) dan <strong>nebula refleksi</strong> (memantulkan cahaya bintang).
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-4 rounded-lg border border-purple-500/30">
            <h4 className="font-semibold text-lg mb-2 text-purple-200">Nebula Terkenal:</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Nebula Orion — pabrik bintang aktif</li>
              <li>• Nebula Kepiting — sisa ledakan supernova</li>
              <li>• Nebula Cincin — bintang sekarat</li>
              <li>• Pillars of Creation — tiang debu di Nebula Elang</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-4 rounded-lg border border-purple-500/30">
            <h4 className="font-semibold text-lg mb-2 text-purple-200">Peran Nebula:</h4>
            <ul className="space-y-1 text-gray-300">
              <li>• Tempat lahir bintang (nebula gelap)</li>
              <li>• Tempat kematian bintang (nebula planet &amp; supernova)</li>
              <li>• Sumber unsur berat (karbon, oksigen, besi)</li>
            </ul>
          </div>
        </div>
        <p className="text-lg leading-relaxed">
          Semua materi di tubuh kita — karbon, oksigen, kalsium — berasal dari nebula kuno. Kita literally adalah "debu bintang".
        </p>
      </div>
    )
  },
  {
    id: 'darkmatter',
    title: 'Materi Gelap: Misteri 85% Alam Semesta',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-purple-300">Apa Itu Materi Gelap?</h3>
        <p className="text-lg leading-relaxed">
          Materi gelap adalah bentuk materi yang <strong>tidak memancarkan, menyerap, atau memantulkan cahaya</strong>, sehingga tidak terlihat. Tapi keberadaannya diketahui dari <strong>pengaruh gravitasinya</strong> pada galaksi dan cahaya.
        </p>
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-500/30">
          <h4 className="font-semibold text-xl mb-3 text-purple-200">Bukti Keberadaan:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Rotasi Galaksi</strong>: Bintang di tepi berputar terlalu cepat → butuh massa tak terlihat</li>
            <li><strong>Lensa Gravitasi</strong>: Cahaya dibelokkan lebih dari yang terlihat</li>
            <li><strong>Struktur Kosmik</strong>: Galaksi terbentuk terlalu cepat tanpa materi gelap</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-purple-200">Kandidat Partikel:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>WIMP</strong> (Weakly Interacting Massive Particles)</li>
          <li><strong>Axion</strong> (partikel ringan dari teori QCD)</li>
          <li><strong>Neutrino Steril</strong> (varian neutrino tak terdeteksi)</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Meski belum terdeteksi langsung, materi gelap diyakini menyusun <strong>27%</strong> dari total energi-alam semesta — jauh lebih banyak dari materi biasa (5%).
        </p>
      </div>
    )
  },
  {
    id: 'darkenergy',
    title: 'Energi Gelap: Pendorong Percepatan Alam Semesta',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-purple-300">Mengapa Alam Semesta Melebar Lebih Cepat?</h3>
        <p className="text-lg leading-relaxed">
          Pada 1998, astronom menemukan bahwa ekspansi alam semesta <strong>semakin cepat</strong>, bukan melambat seperti yang diperkirakan. Penyebabnya disebut <strong>energi gelap</strong> — bentuk energi misterius yang menembus ruang hampa.
        </p>
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-500/30">
          <h4 className="font-semibold text-xl mb-3 text-purple-200">Fakta Kunci:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Menyusun <strong>68%</strong> dari total energi alam semesta</li>
            <li>Bersifat repulsif — mendorong ruang-waktu mengembang</li>
            <li>Kerapatannya konstan — semakin alam semesta membesar, semakin banyak energi gelap</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-purple-200">Teori Utama:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Konstanta Kosmologis (Λ)</strong>: Energi vakum (Einstein)</li>
          <li><strong>Quintessence</strong>: Medan dinamis yang berubah seiring waktu</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Energi gelap adalah salah satu misteri terbesar fisika modern — dan menentukan nasib akhir alam semesta: "Big Freeze" atau "Big Rip".
        </p>
      </div>
    )
  },
  {
    id: 'cosmicmicrowave',
    title: 'Radiasi Latar Kosmik: Gema Big Bang',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-purple-300">Foto Bayi Alam Semesta</h3>
        <p className="text-lg leading-relaxed">
          Cosmic Microwave Background (CMB) adalah radiasi lemah yang memenuhi seluruh alam semesta — sisa panas dari Big Bang <strong>380.000 tahun setelah ledakan awal</strong>.
        </p>
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-500/30">
          <h4 className="font-semibold text-xl mb-3 text-purple-200">Penemuan &amp; Signifikansi:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Ditemukan 1965</strong> oleh Arno Penzias &amp; Robert Wilson (Nobel 1978)</li>
            <li><strong>Suhu</strong>: 2,725 Kelvin (-270°C)</li>
            <li><strong>Fluktuasi</strong>: Perbedaan suhu 1 bagian dalam 100.000 — benih galaksi</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-purple-200">Misi Penting:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>COBE (1989)</strong>: Konfirmasi spektrum hitam sempurna</li>
          <li><strong>WMAP (2001)</strong>: Peta detail fluktuasi → usia alam semesta = 13,7 miliar tahun</li>
          <li><strong>Planck (2009)</strong>: Presisi tinggi → komposisi alam semesta (5% biasa, 27% gelap, 68% energi gelap)</li>
        </ul>
        <p className="text-lg leading-relaxed">
          CMB adalah "foto" paling awal alam semesta — dan bukti paling kuat bahwa Big Bang benar-benar terjadi.
        </p>
      </div>
    )
  },
  {
    id: 'multiverse',
    title: 'Teori Multialam: Apakah Kita Hanya Satu dari Banyak Alam Semesta?',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-purple-300">Realitas di Luar Alam Semesta Kita</h3>
        <p className="text-lg leading-relaxed">
          Teori multialam (multiverse) menyatakan bahwa alam semesta kita hanyalah <strong>satu dari banyak alam semesta</strong> yang eksis secara paralel. Ini bukan fiksi ilmiah, tapi konsekuensi dari teori fisika modern.
        </p>
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-xl border border-purple-500/30">
          <h4 className="font-semibold text-xl mb-3 text-purple-200">Jenis Multialam:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Inflasi Kekal</strong>: Setiap gelembung inflasi = alam semesta baru</li>
            <li><strong>Mekanika Kuantum (Many-Worlds)</strong>: Setiap keputusan kuantum cabangkan realitas</li>
            <li><strong>Brane Multiverse</strong>: Alam semesta hidup di membran 11-dimensi (teori string)</li>
            <li><strong>Matematis</strong>: Semua struktur matematis eksis secara fisik</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-purple-200">Implikasi &amp; Kontroversi:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li>• Bisa jelaskan "fine-tuning" hukum fisika</li>
          <li>• Tapi sulit diuji → beberapa ilmuwan anggap bukan sains</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Meski belum terbukti, multialam adalah ide serius yang muncul dari relativitas, kuantum, dan kosmologi — dan mungkin kunci memahami "kenapa ada sesuatu, bukan tidak ada".
        </p>
      </div>
    )
  }
];
