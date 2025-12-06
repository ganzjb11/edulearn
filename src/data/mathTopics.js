import { Calculator } from 'lucide-react';

export const mathTopics = [
  {
    id: 'calculus',
    title: 'Kalkulus: Bahasa Perubahan dan Gerak',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-green-300">Dari Archimedes hingga Newton dan Leibniz</h3>
        <p className="text-lg leading-relaxed">
          Kalkulus adalah cabang matematika yang mempelajari perubahan dan gerak. Dua konsep utamanya adalah <strong>turunan</strong> (rates of change) dan <strong>integral</strong> (akumulasi).
        </p>
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/30">
          <h4 className="font-semibold text-xl mb-4 text-green-200">Rumus Dasar Kalkulus:</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-4">
              <code className="bg-black/30 px-3 py-2 rounded font-mono text-green-100">d/dx [x^n] = n·x^(n-1)</code>
              <span className="text-gray-300">Aturan Pangkat untuk Turunan</span>
            </div>
            <div className="flex items-center space-x-4">
              <code className="bg-black/30 px-3 py-2 rounded font-mono text-green-100">∫ x^n dx = x^(n+1)/(n+1) + C</code>
              <span className="text-gray-300">Aturan Pangkat untuk Integral</span>
            </div>
            <div className="flex items-center space-x-4">
              <code className="bg-black/30 px-3 py-2 rounded font-mono text-green-100">d/dx [sin(x)] = cos(x)</code>
              <span className="text-gray-300">Turunan Fungsi Trigonometri</span>
            </div>
          </div>
        </div>
        <p className="text-lg leading-relaxed">
          Kalkulus digunakan di mana-mana: dari memprediksi gerakan planet, merancang pesawat terbang, hingga memodelkan penyebaran penyakit. Isaac Newton mengembangkan kalkulus untuk memahami hukum gerak dan gravitasi, sementara Gottfried Leibniz mengembangkan notasi yang kita gunakan hari ini.
        </p>
      </div>
    )
  },
  {
    id: 'algebra',
    title: 'Aljabar: Seni Memecahkan Persamaan',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-green-300">Dari Persamaan Linier hingga Polinomial</h3>
        <p className="text-lg leading-relaxed">
          Aljabar adalah cabang matematika yang menggunakan simbol (biasanya huruf) untuk mewakili angka dalam rumus dan persamaan. Dasar dari semua ilmu eksak.
        </p>
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/30">
          <h4 className="font-semibold text-xl mb-3 text-green-200">Konsep Kunci:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Persamaan Linier</strong>: ax + b = 0 → x = -b/a</li>
            <li><strong>Sistem Persamaan</strong>: Metode substitusi & eliminasi</li>
            <li><strong>Polinomial</strong>: ax² + bx + c = 0 → rumus kuadrat</li>
            <li><strong>Rumus Kuadrat</strong>: x = [-b ± √(b² - 4ac)] / (2a)</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-green-200">Sejarah Aljabar:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Al-Khwarizmi (820 M)</strong>: Buku "Al-Kitab al-mukhtasar fi hisab al-jabr wa’l-muqabala"</li>
          <li><strong>François Viète (1591)</strong>: Perkenalkan simbol aljabar modern</li>
          <li><strong>René Descartes</strong>: Gabungkan aljabar & geometri → geometri analitik</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Tanpa aljabar, tidak akan ada fisika, teknik, ekonomi, atau ilmu komputer modern.
        </p>
      </div>
    )
  },
  {
    id: 'geometry',
    title: 'Geometri: Ilmu Bentuk dan Ruang',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-green-300">Dari Euclid hingga Geometri Non-Euclidean</h3>
        <p className="text-lg leading-relaxed">
          Geometri mempelajari bentuk, ukuran, posisi relatif gambar, dan sifat ruang. Dimulai dari pengukuran tanah Mesir kuno.
        </p>
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/30">
          <h4 className="font-semibold text-xl mb-3 text-green-200">Rumus Dasar:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Luas Segitiga</strong>: ½ × alas × tinggi</li>
            <li><strong>Teorema Pythagoras</strong>: a² + b² = c² (segitiga siku-siku)</li>
            <li><strong>Lingkaran</strong>: Keliling = 2πr, Luas = πr²</li>
            <li><strong>Volume Bola</strong>: ⁴/₃ πr³</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-green-200">Cabang Geometri:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Geometri Euclidean</strong>: Bidang datar, postulat paralel</li>
          <li><strong>Geometri Analitik</strong>: Koordinat Kartesius (Descartes)</li>
          <li><strong>Geometri Diferensial</strong>: Kurva & permukaan halus (Einstein pakai ini)</li>
          <li><strong>Topologi</strong>: Sifat ruang yang tidak berubah saat diregangkan</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Geometri adalah dasar arsitektur, seni, navigasi, dan teori relativitas.
        </p>
      </div>
    )
  },
  {
    id: 'trigonometry',
    title: 'Trigonometri: Hubungan Sudut dan Sisi Segitiga',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-green-300">Dari Astronomi Kuno hingga Gelombang Modern</h3>
        <p className="text-lg leading-relaxed">
          Trigonometri mempelajari hubungan antara sudut dan sisi segitiga, terutama segitiga siku-siku. Digunakan di astronomi, navigasi, dan teknik.
        </p>
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/30">
          <h4 className="font-semibold text-xl mb-3 text-green-200">Fungsi Trigonometri Dasar:</h4>
          <div className="grid grid-cols-2 gap-3">
            <div><strong>sin(θ)</strong> = depan / miring</div>
            <div><strong>cos(θ)</strong> = samping / miring</div>
            <div><strong>tan(θ)</strong> = depan / samping</div>
            <div><strong>cot(θ)</strong> = 1 / tan(θ)</div>
          </div>
        </div>
        <h4 className="text-xl font-semibold text-green-200">Identitas Penting:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li>sin²θ + cos²θ = 1</li>
          <li>1 + tan²θ = sec²θ</li>
          <li>sin(A ± B) = sinA cosB ± cosA sinB</li>
          <li>cos(A ± B) = cosA cosB ∓ sinA sinB</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Trigonometri digunakan untuk memetakan bintang, GPS, analisis suara, dan gelombang elektromagnetik.
        </p>
      </div>
    )
  },
  {
    id: 'statistics',
    title: 'Statistika: Ilmu Mengolah Data',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-green-300">Dari Data Mentah ke Keputusan Bijak</h3>
        <p className="text-lg leading-relaxed">
          Statistika adalah ilmu pengumpulan, analisis, interpretasi, dan penyajian data. Dasar dari ilmu data, ekonomi, dan riset ilmiah.
        </p>
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/30">
          <h4 className="font-semibold text-xl mb-3 text-green-200">Konsep Dasar:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Rata-rata (Mean)</strong>: Jumlah data / banyak data</li>
            <li><strong>Median</strong>: Nilai tengah setelah diurutkan</li>
            <li><strong>Modus</strong>: Data yang paling sering muncul</li>
            <li><strong>Deviasi Standar</strong>: Ukuran penyebaran data</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-green-200">Jenis Statistika:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Deskriptif</strong>: Ringkas data (grafik, tabel)</li>
          <li><strong>Inferensial</strong>: Buat prediksi/generalisasi (uji hipotesis)</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Tanpa statistika, tidak ada polling, riset medis, atau algoritma AI yang akurat.
        </p>
      </div>
    )
  },
  {
    id: 'number-theory',
    title: 'Teori Bilangan: Rahasia di Balik Angka',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-green-300">Apa Itu Teori Bilangan?</h3>
        <p className="text-lg leading-relaxed">
          Teori bilangan adalah cabang matematika yang mempelajari sifat dan hubungan bilangan bulat. Disebut "Ratu Matematika" oleh Gauss karena keindahan dan kedalamannya.
        </p>
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/30">
          <h4 className="font-semibold text-xl mb-3 text-green-200">Konsep Kunci:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Bilangan Prima</strong>: Hanya habis dibagi 1 dan dirinya sendiri (2, 3, 5, 7, 11, ...)</li>
            <li><strong>Teorema Fundamental Aritmetika</strong>: Setiap bilangan >1 bisa ditulis sebagai hasil kali bilangan prima</li>
            <li><strong>Algoritma Euclid</strong>: Cari FPB dua bilangan</li>
            <li><strong>Kongruensi</strong>: Sistem modulo (a ≡ b mod n)</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-green-200">Tokoh Penting:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Euclid (300 SM)</strong>: Buktikan ada tak hingga bilangan prima</li>
          <li><strong>Carl Friedrich Gauss (1777–1855)</strong>: Disquisitiones Arithmeticae — fondasi modern</li>
          <li><strong>Andrew Wiles</strong>: Buktikan Teorema Terakhir Fermat (1994)</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Aplikasi: kriptografi (RSA), komputasi, dan keamanan digital. Tanpa teori bilangan, internet tidak aman!
        </p>
      </div>
    )
  },
  {
    id: 'linear-algebra',
    title: 'Aljabar Linear: Dasar Ilmu Data & Fisika',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-green-300">Vektor, Matriks, dan Transformasi</h3>
        <p className="text-lg leading-relaxed">
          Aljabar linear mempelajari vektor, ruang vektor, transformasi linear, dan matriks. Fondasi dari grafik komputer, pembelajaran mesin, dan mekanika kuantum.
        </p>
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/30">
          <h4 className="font-semibold text-xl mb-3 text-green-200">Konsep Inti:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Vektor</strong>: Besaran yang punya arah & besar (contoh: kecepatan)</li>
            <li><strong>Matriks</strong>: Susunan angka dalam baris & kolom</li>
            <li><strong>Determinan</strong>: Ukuran "luas" atau "volume" transformasi</li>
            <li><strong>Eigenvalue & Eigenvector</strong>: Arah yang tidak berubah saat transformasi</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-green-200">Aplikasi Modern:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>AI & Machine Learning</strong>: Operasi matriks untuk neural network</li>
          <li><strong>Grafik 3D</strong>: Rotasi, skala, proyeksi objek</li>
          <li><strong>Fisika Kuantum</strong>: Keadaan partikel sebagai vektor</li>
          <li><strong>Ekonomi</strong>: Model input-output Leontief</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Aljabar linear adalah bahasa universal teknologi modern.
        </p>
      </div>
    )
  },
  {
    id: 'probability',
    title: 'Probabilitas: Ilmu Ketidakpastian',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-green-300">Mengukur Kemungkinan Kejadian</h3>
        <p className="text-lg leading-relaxed">
          Probabilitas mengukur seberapa besar kemungkinan suatu kejadian terjadi. Dasar dari statistika, asuransi, dan teori permainan.
        </p>
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/30">
          <h4 className="font-semibold text-xl mb-3 text-green-200">Rumus Dasar:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Probabilitas</strong>: P(A) = jumlah kejadian A / total kemungkinan</li>
            <li><strong>Aturan Penjumlahan</strong>: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)</li>
            <li><strong>Aturan Perkalian</strong>: P(A ∩ B) = P(A) × P(B|A)</li>
            <li><strong>Teorema Bayes</strong>: P(A|B) = [P(B|A) P(A)] / P(B)</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-green-200">Distribusi Penting:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Binomial</strong>: Kejadian sukses/gagal berulang</li>
          <li><strong>Normal (Gauss)</strong>: Kurva lonceng — banyak di alam</li>
          <li><strong>Poisson</strong>: Kejadian langka dalam waktu tetap</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Probabilitas membantu kita membuat keputusan di dunia yang tidak pasti — dari cuaca hingga keuangan.
        </p>
      </div>
    )
  },
  {
    id: 'logic',
    title: 'Logika Matematika: Fondasi Pemikiran Rasional',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-green-300">Dari Aristoteles hingga Komputer Modern</h3>
        <p className="text-lg leading-relaxed">
          Logika matematika mempelajari prinsip penalaran valid. Dasar dari pembuktian matematika, filosofi, dan ilmu komputer.
        </p>
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/30">
          <h4 className="font-semibold text-xl mb-3 text-green-200">Operator Logika:</h4>
          <div className="grid grid-cols-2 gap-3">
            <div><strong>¬P</strong>: Negasi (bukan P)</div>
            <div><strong>P ∧ Q</strong>: Konjungsi (P dan Q)</div>
            <div><strong>P ∨ Q</strong>: Disjungsi (P atau Q)</div>
            <div><strong>P → Q</strong>: Implikasi (jika P maka Q)</div>
          </div>
        </div>
        <h4 className="text-xl font-semibold text-green-200">Hukum Logika:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Hukum Identitas</strong>: P ∧ true ≡ P</li>
          <li><strong>Hukum Komutatif</strong>: P ∧ Q ≡ Q ∧ P</li>
          <li><strong>Hukum De Morgan</strong>: ¬(P ∧ Q) ≡ ¬P ∨ ¬Q</li>
          <li><strong>Modus Ponens</strong>: Jika P → Q dan P, maka Q</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Tanpa logika, tidak ada algoritma, sirkuit digital, atau AI yang konsisten.
        </p>
      </div>
    )
  },
  {
    id: 'set-theory',
    title: 'Teori Himpunan: Bahasa Universal Matematika',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-green-300">Himpunan, Relasi, dan Fungsi</h3>
        <p className="text-lg leading-relaxed">
          Teori himpunan mempelajari kumpulan objek dan operasi di antara mereka. Dikembangkan oleh Georg Cantor, menjadi fondasi semua matematika modern.
        </p>
        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border border-green-500/30">
          <h4 className="font-semibold text-xl mb-3 text-green-200">Operasi Himpunan:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Gabungan (A ∪ B)</strong>: Semua elemen di A atau B</li>
            <li><strong>Irisan (A ∩ B)</strong>: Elemen yang ada di A dan B</li>
            <li><strong>Selisih (A - B)</strong>: Elemen di A tapi tidak di B</li>
            <li><strong>Komplemen (A')</strong>: Semua elemen di luar A</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-green-200">Konsep Kunci:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Himpunan Kosong (∅)</strong>: Himpunan tanpa elemen</li>
          <li><strong>Himpunan Kuasa</strong>: Semua subset dari himpunan</li>
          <li><strong>Bilangan Kardinal</strong>: Ukuran himpunan (termasuk tak hingga)</li>
          <li><strong>Diagram Venn</strong>: Representasi visual himpunan</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Teori himpunan adalah bahasa yang dipakai semua cabang matematika untuk berkomunikasi.
        </p>
      </div>
    )
  }
];
