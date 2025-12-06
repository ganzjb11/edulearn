import { FlaskConical } from 'lucide-react';

export const scienceTopics = [
  {
    id: 'quantum',
    title: 'Fisika Kuantum: Dunia yang Melawan Akal Sehat',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-pink-300">Ketika Partikel Bisa Berada di Dua Tempat Sekaligus</h3>
        <p className="text-lg leading-relaxed">
          Fisika kuantum menggambarkan perilaku materi dan energi pada skala atom dan subatomik. Di dunia ini, hukum klasik tidak berlaku, dan realitas menjadi probabilistik.
        </p>
        <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 p-6 rounded-xl border border-pink-500/30">
          <h4 className="font-semibold text-xl mb-3 text-pink-200">Prinsip-Prinsip Kunci:</h4>
          <ul className="space-y-2 text-gray-300">
            <li><strong>Dualitas Gelombang-Partikel</strong>: Partikel seperti elektron juga berperilaku sebagai gelombang</li>
            <li><strong>Prinsip Ketidakpastian Heisenberg</strong>: Tidak mungkin mengetahui posisi dan momentum secara bersamaan dengan presisi sempurna</li>
            <li><strong>Superposisi Kuantum</strong>: Sistem kuantum dapat berada dalam beberapa keadaan sekaligus</li>
            <li><strong>Keterkaitan Kuantum</strong>: Partikel yang terkait dapat mempengaruhi satu sama lain secara instan, terlepas dari jarak</li>
          </ul>
        </div>
        <p className="text-lg leading-relaxed">
          Meskipun tampak aneh, fisika kuantum adalah teori paling akurat yang pernah dikembangkan manusia. Tanpa pemahaman kuantum, kita tidak akan memiliki laser, transistor, MRI, atau komputer kuantum masa depan.
        </p>
      </div>
    )
  },
  {
    id: 'dna',
    title: 'DNA: Kode Kehidupan yang Mengagumkan',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-pink-300">Apa Itu DNA?</h3>
        <p className="text-lg leading-relaxed">
          DNA (Deoxyribonucleic Acid) adalah molekul yang menyimpan instruksi genetik untuk perkembangan, fungsi, pertumbuhan, dan reproduksi semua organisme hidup. Struktur <strong>double helix</strong> ditemukan oleh <strong>James Watson & Francis Crick</strong> pada 1953 berdasarkan data Rosalind Franklin.
        </p>
        <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 p-6 rounded-xl border border-pink-500/30">
          <h4 className="font-semibold text-xl mb-3 text-pink-200">Struktur DNA:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Basa Nitrogen</strong>: Adenin (A), Timin (T), Guanin (G), Sitosin (C)</li>
            <li><strong>Aturan Pasangan Basa</strong>: A selalu berpasangan dengan T, G dengan C</li>
            <li><strong>Gula-Fosfat</strong>: Rantai punggung double helix</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-pink-200">Proses Penting:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Replikasi</strong>: Salin DNA sebelum pembelahan sel</li>
          <li><strong>Transkripsi</strong>: DNA → RNA</li>
          <li><strong>Translasi</strong>: RNA → Protein</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Proyek Genom Manusia (1990–2003) memetakan seluruh DNA manusia (3 miliar pasangan basa). Kini, CRISPR memungkinkan edit gen — membuka jalan untuk sembuhkan penyakit genetik.
        </p>
      </div>
    )
  },
  {
    id: 'relativity',
    title: 'Teori Relativitas: Mengubah Cara Kita Memahami Ruang & Waktu',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-pink-300">Einstein dan Revolusi Fisika Modern</h3>
        <p className="text-lg leading-relaxed">
          Albert Einstein mengembangkan dua teori relativitas: <strong>Khusus (1905)</strong> dan <strong>Umum (1915)</strong>. Keduanya menggantikan hukum Newton untuk kecepatan tinggi dan gravitasi kuat.
        </p>
        <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 p-6 rounded-xl border border-pink-500/30">
          <h4 className="font-semibold text-xl mb-3 text-pink-200">Relativitas Khusus:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Kecepatan cahaya konstan</strong> di semua kerangka acuan</li>
            <li><strong>Dilatasi Waktu</strong>: Jam bergerak lebih lambat saat kecepatan tinggi</li>
            <li><strong>Kesetaraan Massa-Energi</strong>: E = mc²</li>
          </ul>
        </div>
        <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 p-6 rounded-xl border border-pink-500/30">
          <h4 className="font-semibold text-xl mb-3 text-pink-200">Relativitas Umum:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Gravitasi = Kelengkungan Ruang-Waktu</strong></li>
            <li><strong>Lensa Gravitasi</strong>: Cahaya dibelokkan oleh massa besar</li>
            <li><strong>Lubang Hitam</strong>: Prediksi langsung dari teori ini</li>
          </ul>
        </div>
        <p className="text-lg leading-relaxed">
          Tanpa relativitas, GPS tidak akan akurat — satelit harus koreksi efek relativistik!
        </p>
      </div>
    )
  },
  {
    id: 'evolution',
    title: 'Teori Evolusi: Asal Usul Kehidupan di Bumi',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-pink-300">Charles Darwin dan Seleksi Alam</h3>
        <p className="text-lg leading-relaxed">
          Teori evolusi menyatakan bahwa semua makhluk hidup berasal dari nenek moyang yang sama dan berubah seiring waktu melalui <strong>seleksi alam</strong>.
        </p>
        <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 p-6 rounded-xl border border-pink-500/30">
          <h4 className="font-semibold text-xl mb-3 text-pink-200">Mekanisme Evolusi:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Variasi Genetik</strong>: Mutasi & rekombinasi menciptakan perbedaan</li>
            <li><strong>Seleksi Alam</strong>: Sifat yang membantu bertahan hidup lebih sering diwariskan</li>
            <li><strong>Genetika Populasi</strong>: Perubahan frekuensi gen dari generasi ke generasi</li>
            <li><strong>Spesiasi</strong>: Terbentuknya spesies baru</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-pink-200">Bukti Evolusi:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Fosil</strong>: Menunjukkan bentuk peralihan (contoh: Archaeopteryx)</li>
          <li><strong>Anatomi Perbandingan</strong>: Struktur homolog (tangan manusia vs sayap burung)</li>
          <li><strong>Embriologi</strong>: Embrio vertebrata mirip di tahap awal</li>
          <li><strong>DNA</strong>: Kesamaan genetik antar spesies</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Evolusi adalah fondasi biologi modern — tanpanya, tidak ada pemahaman tentang penyakit, antibiotik, atau biodiversitas.
        </p>
      </div>
    )
  },
  {
    id: 'thermodynamics',
    title: 'Termodinamika: Hukum Energi dan Entropi',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-pink-300">Empat Hukum yang Mengatur Alam Semesta</h3>
        <p className="text-lg leading-relaxed">
          Termodinamika mempelajari hubungan antara panas, kerja, suhu, dan energi. Berlaku untuk mesin, bintang, bahkan lubang hitam.
        </p>
        <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 p-6 rounded-xl border border-pink-500/30">
          <h4 className="font-semibold text-xl mb-3 text-pink-200">Empat Hukum:</h4>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li><strong>Hukum ke-0</strong>: Jika A = B dan B = C, maka A = C (kesetimbangan termal)</li>
            <li><strong>Hukum ke-1</strong>: Energi tidak bisa diciptakan/hilang — hanya berubah bentuk (kekekalan energi)</li>
            <li><strong>Hukum ke-2</strong>: Entropi (kekacauan) alam semesta selalu meningkat</li>
            <li><strong>Hukum ke-3</strong>: Entropi mendekati nol saat suhu mendekati nol mutlak</li>
          </ol>
        </div>
        <h4 className="text-xl font-semibold text-pink-200">Aplikasi:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Mesin Kalor</strong>: Mobil, pesawat, pembangkit listrik</li>
          <li><strong>Kulkas & AC</strong>: Pindahkan panas dari dingin ke panas (butuh kerja)</li>
          <li><strong>Kimia</strong>: Prediksi arah reaksi kimia</li>
          <li><strong>Kosmologi</strong>: Nasib akhir alam semesta (kematian panas)</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Hukum ke-2 termodinamika adalah satu-satunya hukum fisika yang membedakan masa lalu dan masa depan.
        </p>
      </div>
    )
  },
  {
    id: 'cell-biology',
    title: 'Biologi Sel: Unit Dasar Kehidupan',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-pink-300">Sel: Blok Bangunan Semua Makhluk Hidup</h3>
        <p className="text-lg leading-relaxed">
          Semua organisme terdiri dari sel — unit terkecil yang bisa hidup mandiri. Ada dua tipe: <strong>prokariotik</strong> (tanpa inti) dan <strong>eukariotik</strong> (dengan inti).
        </p>
        <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 p-6 rounded-xl border border-pink-500/30">
          <h4 className="font-semibold text-xl mb-3 text-pink-200">Organel Sel Eukariotik:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Nukleus</strong>: Menyimpan DNA</li>
            <li><strong>Mitokondria</strong>: "Pembangkit tenaga" — hasilkan ATP</li>
            <li><strong>Ribosom</strong>: Sintesis protein</li>
            <li><strong>Lisosom</strong>: "Tempat daur ulang" — cerna bahan limbah</li>
            <li><strong>Retikulum Endoplasma</strong>: Sintesis protein & lipid</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-pink-200">Proses Vital:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Respirasi Seluler</strong>: Glukosa + O₂ → CO₂ + H₂O + ATP</li>
          <li><strong>Fotosintesis</strong>: CO₂ + H₂O + cahaya → glukosa + O₂</li>
          <li><strong>Mitosis</strong>: Pembelahan sel untuk pertumbuhan</li>
          <li><strong>Meiosis</strong>: Pembelahan sel untuk reproduksi (sel kelamin)</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Pemahaman sel memungkinkan kemajuan di bidang kanker, stem cell, dan rekayasa genetika.
        </p>
      </div>
    )
  },
  {
    id: 'periodic-table',
    title: 'Tabel Periodik: Peta Unsur Kimia',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-pink-300">Dmitri Mendeleev dan Prediksi Ilmiah</h3>
        <p className="text-lg leading-relaxed">
          Tabel periodik menyusun 118 unsur berdasarkan nomor atom dan sifat kimianya. Dibuat oleh <strong>Dmitri Mendeleev (1869)</strong> — ia tinggalkan celah untuk unsur yang belum ditemukan, dan prediksinya tepat!
        </p>
        <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 p-6 rounded-xl border border-pink-500/30">
          <h4 className="font-semibold text-xl mb-3 text-pink-200">Grup & Periode:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Grup (kolom)</strong>: Unsur dengan valensi sama → sifat kimia mirip</li>
            <li><strong>Periode (baris)</strong>: Jumlah kulit elektron meningkat</li>
            <li><strong>Logam</strong>: Kiri & tengah (konduktor, mengkilap)</li>
            <li><strong>Non-logam</strong>: Kanan (isolator)</li>
            <li><strong>Gas Mulia</strong>: Grup 18 — stabil, tidak reaktif</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-pink-200">Unsur Penting:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Hidrogen (H)</strong>: Unsur paling ringan, bahan bintang</li>
          <li><strong>Karbon (C)</strong>: Dasar kehidupan — 4 ikatan kovalen</li>
          <li><strong>Oksigen (O)</strong>: Penting untuk respirasi</li>
          <li><strong>Besi (Fe)</strong>: Inti Bumi, hemoglobin darah</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Tabel periodik adalah peta yang memungkinkan kita memahami reaksi kimia, material baru, dan bahkan komposisi bintang.
        </p>
      </div>
    )
  },
  {
    id: 'neuroscience',
    title: 'Neurosains: Misteri Otak dan Pikiran',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-pink-300">Bagaimana Otak Menghasilkan Pikiran?</h3>
        <p className="text-lg leading-relaxed">
          Neurosains mempelajari sistem saraf, terutama otak. Otak manusia punya 86 miliar neuron yang terhubung melalui 100 triliun sinapsis.
        </p>
        <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 p-6 rounded-xl border border-pink-500/30">
          <h4 className="font-semibold text-xl mb-3 text-pink-200">Struktur Otak:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Serebrum</strong>: Berpikir, ingatan, kesadaran</li>
            <li><strong>Serebelum</strong>: Koordinasi gerak & keseimbangan</li>
            <li><strong>Brainstem</strong>: Fungsi dasar (napas, detak jantung)</li>
            <li><strong>Sistem Limbik</strong>: Emosi & memori (termasuk amigdala & hipokampus)</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-pink-200">Neuron & Sinyal:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Neuron</strong>: Sel saraf — kirim sinyal listrik & kimia</li>
          <li><strong>Sinapsis</strong>: Celah antar neuron — pakai neurotransmiter</li>
          <li><strong>Potensial Aksi</strong>: Lonjakan listrik saat neuron aktif</li>
          <li><strong>Plastisitas</strong>: Otak bisa berubah & belajar seumur hidup</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Neurosains membantu kita pahami kesadaran, gangguan mental, AI, bahkan sifat manusia itu sendiri.
        </p>
      </div>
    )
  },
  {
    id: 'ecology',
    title: 'Ekologi: Hubungan Makhluk Hidup dan Lingkungan',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-pink-300">Keseimbangan Alam dan Dampak Manusia</h3>
        <p className="text-lg leading-relaxed">
          Ekologi mempelajari interaksi antara organisme dan lingkungannya. Dari ekosistem hutan hujan hingga lautan dalam.
        </p>
        <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 p-6 rounded-xl border border-pink-500/30">
          <h4 className="font-semibold text-xl mb-3 text-pink-200">Tingkat Organisasi:</h4>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Individu → Populasi → Komunitas → Ekosistem → Biosfer</li>
          </ol>
        </div>
        <h4 className="text-xl font-semibold text-pink-200">Konsep Kunci:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Rantai Makanan</strong>: Produsen → Konsumen → Pengurai</li>
          <li><strong>Siklus Biogeokimia</strong>: Air, karbon, nitrogen, fosfor</li>
          <li><strong>Keberagaman Hayati</strong>: Jumlah spesies dalam suatu area</li>
          <li><strong>Keseimbangan Ekosistem</strong>: Homeostasis alam</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Ekologi penting untuk konservasi, perubahan iklim, pertanian berkelanjutan, dan kelangsungan hidup manusia.
        </p>
      </div>
    )
  },
  {
    id: 'particle-physics',
    title: 'Fisika Partikel: Mencari Batu Bata Dasar Alam Semesta',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-pink-300">Model Standar dan Pencarian Teori Segalanya</h3>
        <p className="text-lg leading-relaxed">
          Fisika partikel mempelajari partikel terkecil penyusun alam semesta. Model Standar menjelaskan semua partikel dan gaya (kecuali gravitasi).
        </p>
        <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 p-6 rounded-xl border border-pink-500/30">
          <h4 className="font-semibold text-xl mb-3 text-pink-200">Partikel Dasar:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Kuark</strong>: Pembentuk proton & neutron (6 jenis)</li>
            <li><strong>Lepton</strong>: Elektron, neutrino, dll</li>
            <li><strong>Boson</strong>: Pembawa gaya (foton, gluon, Higgs)</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-pink-200">Gaya Fundamental:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Elektromagnetik</strong>: Foton</li>
          <li><strong>Kuat</strong>: Gluon (ikat kuark)</li>
          <li><strong>Lemah</strong>: W & Z boson (peluruhan radioaktif)</li>
          <li><strong>Gravitasi</strong>: Belum masuk Model Standar</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Large Hadron Collider (LHC) di CERN menemukan boson Higgs (2012) — partikel yang memberi massa pada partikel lain.
        </p>
      </div>
    )
  }
];
