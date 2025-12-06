import { History } from 'lucide-react';

export const historyTopics = [
  {
    id: 'philosophers',
    title: 'Filsuf Besar dan Warisan Pemikiran Mereka',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-amber-300">Dari Yunani Kuno hingga Abad Pencerahan</h3>
        <p className="text-lg leading-relaxed">
          Filsafat adalah ibu dari semua ilmu pengetahuan. Para filsuf kuno tidak hanya bertanya "apa itu?", tetapi juga "mengapa?" dan "bagaimana kita tahu?". Mereka meletakkan fondasi bagi pemikiran rasional dan ilmiah yang kita gunakan hari ini.
        </p>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-4 rounded-xl border border-amber-500/30">
            <h4 className="font-semibold text-xl mb-2 text-amber-200">Socrates (469-399 SM)</h4>
            <p className="text-gray-300">
              Metode Socratic: Bertanya untuk mengungkap kebenaran melalui dialog. "Aku tahu bahwa aku tidak tahu apa-apa" - prinsip kerendahan hati intelektual.
            </p>
          </div>
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-4 rounded-xl border border-amber-500/30">
            <h4 className="font-semibold text-xl mb-2 text-amber-200">Aristoteles (384-322 SM)</h4>
            <p className="text-gray-300">
              Sistematisasi pengetahuan, logika formal, dan observasi empiris. Karyanya menjadi dasar ilmu pengetahuan selama 2000 tahun.
            </p>
          </div>
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-4 rounded-xl border border-amber-500/30">
            <h4 className="font-semibold text-xl mb-2 text-amber-200">Immanuel Kant (1724-1804)</h4>
            <p className="text-gray-300">
              "Dare to know!" - Pencerahan adalah keluar dari ketidakdewasaan. Etika deontologis dan kritik terhadap rasionalisme murni.
            </p>
          </div>
        </div>
        <p className="text-lg leading-relaxed">
          Warisan para filsuf ini masih hidup dalam setiap eksperimen ilmiah, setiap sistem hukum, dan setiap diskusi etis yang kita lakukan hari ini.
        </p>
      </div>
    )
  },
  {
    id: 'egypt',
    title: 'Peradaban Mesir Kuno: Kebangkitan di Tepi Sungai Nil',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-amber-300">Sungai Nil: Nadi Peradaban</h3>
        <p className="text-lg leading-relaxed">
          Peradaban Mesir Kuno lahir sekitar <strong>3100 SM</strong> di sepanjang Sungai Nil. Banjir tahunan Sungai Nil memberikan tanah subur yang memungkinkan pertanian maju, yang menjadi fondasi ekonomi dan budaya mereka.
        </p>
        <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-6 rounded-xl border border-amber-500/30">
          <h4 className="font-semibold text-xl mb-3 text-amber-200">Kontribusi Utama:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Piramida</strong>: Makam firaun, terutama Piramida Giza (Khufu, Khafre, Menkaure)</li>
            <li><strong>Hieroglif</strong>: Sistem tulisan gambar pertama di dunia</li>
            <li><strong>Kalender Matahari</strong>: 365 hari — dasar kalender modern</li>
            <li><strong>Paper (Papirus)</strong>: Media tulis pertama</li>
            <li><strong>Kedokteran</strong>: Teknik bedah, dokter spesialis</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-amber-200">Firaun Terkenal:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-black/20 p-4 rounded-lg">
            <p className="font-bold text-amber-200">Ramses II (1279–1213 SM)</p>
            <p className="text-sm">Firaun terkuat, pembangun besar, hidup 90+ tahun.</p>
          </div>
          <div className="bg-black/20 p-4 rounded-lg">
            <p className="font-bold text-amber-200">Cleopatra VII (69–30 SM)</p>
            <p className="text-sm">Ratu terakhir Mesir, bersekutu dengan Julius Caesar & Marc Antony.</p>
          </div>
        </div>
        <p className="text-lg leading-relaxed">
          Mesir jatuh ke tangan Romawi pada 30 SM setelah kematian Cleopatra. Namun warisannya hidup dalam arsitektur, sains, dan seni dunia.
        </p>
      </div>
    )
  },
  {
    id: 'rome',
    title: 'Kekaisaran Romawi: Dari Republik ke Dunia Kuno',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-amber-300">Republik yang Menjadi Kekaisaran</h3>
        <p className="text-lg leading-relaxed">
          Romawi didirikan sebagai republik pada 509 SM setelah menggulingkan raja. Namun konflik sosial dan militer mengarah pada kekuasaan kaisar pertama: <strong>Augustus (27 SM)</strong>.
        </p>
        <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-6 rounded-xl border border-amber-500/30">
          <h4 className="font-semibold text-xl mb-3 text-amber-200">Warisan Romawi:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Hukum Romawi</strong>: Dasar sistem hukum Eropa modern</li>
            <li><strong>Jalan Raya</strong>: 80.000 km jalan menghubungkan seluruh kekaisaran</li>
            <li><strong>Bahasa Latin</strong>: Akar bahasa Prancis, Spanyol, Italia, dll</li>
            <li><strong>Akuaduk & Arsitektur</strong>: Teknologi air dan beton masih dipakai hari ini</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-amber-200">Tokoh Penting:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Julius Caesar</strong>: Jenderal & diktator (dibunuh 44 SM)</li>
          <li><strong>Constantine</strong>: Kaisar pertama Kristen (312 M)</li>
          <li><strong>Marcus Aurelius</strong>: Filsuf-stoisisme & kaisar bijak</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Romawi Barat runtuh 476 M, tapi Romawi Timur (Bizantium) bertahan hingga 1453 M.
        </p>
      </div>
    )
  },
  {
    id: 'islamic-golden-age',
    title: 'Zaman Keemasan Islam: Cahaya Ilmu di Abad Pertengahan',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-amber-300">Ketika Dunia Islam Menjadi Pusat Ilmu Pengetahuan</h3>
        <p className="text-lg leading-relaxed">
          Antara abad ke-8 hingga ke-14, dunia Islam memimpin peradaban dalam sains, matematika, kedokteran, dan filsafat. Pusatnya: Baghdad, Kairo, Cordoba, dan Samarkand.
        </p>
        <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-6 rounded-xl border border-amber-500/30">
          <h4 className="font-semibold text-xl mb-3 text-amber-200">Tokoh & Kontribusi:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Al-Khwarizmi</strong>: Bapak aljabar ("al-jabr"), algoritma</li>
            <li><strong>Ibnu Sina (Avicenna)</strong>: Buku "The Canon of Medicine" dipakai di Eropa 600 tahun</li>
            <li><strong>Al-Razi</strong>: Pertama bedakan cacar &amp; campak, kimia medis</li>
            <li><strong>Al-Biruni</strong>: Hitung jari-jari Bumi dengan akurasi tinggi</li>
            <li><strong>Ibnu al-Haytham</strong>: Bapak optik modern, metode ilmiah</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-amber-200">Institusi Ilmiah:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Baitul Hikmah (Baghdad)</strong>: Perpustakaan &amp; pusat terjemahan</li>
          <li><strong>Rumah Sakit Pertama</strong>: Di Baghdad (abad ke-9)</li>
          <li><strong>Observatorium</strong>: Untuk astronomi presisi</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Ilmuwan Muslim menerjemahkan &amp; mengembangkan karya Yunani, lalu mentransfernya ke Eropa — jadi jembatan Renaissance.
        </p>
      </div>
    )
  },
  {
    id: 'renaissance',
    title: 'Renaissance: Kelahiran Kembali Peradaban Barat',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-amber-300">Dari Abad Kegelapan ke Zaman Pencerahan</h3>
        <p className="text-lg leading-relaxed">
          Renaissance (14–17 M) adalah gerakan budaya di Eropa yang menekankan humanisme, seni, dan ilmu pengetahuan klasik. Dimulai di Italia, menyebar ke seluruh Eropa.
        </p>
        <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-6 rounded-xl border border-amber-500/30">
          <h4 className="font-semibold text-xl mb-3 text-amber-200">Tokoh & Karya:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Leonardo da Vinci</strong>: Pelukis (Mona Lisa), ilmuwan, insinyur</li>
            <li><strong>Michelangelo</strong>: Patung David, langit-langit Kapel Sistina</li>
            <li><strong>Niccolò Machiavelli</strong>: Penulis "The Prince" — politik realistis</li>
            <li><strong>Galileo Galilei</strong>: Observasi teleskop, hukum gerak</li>
            <li><strong>Nicolaus Copernicus</strong>: Teori heliosentris (matahari pusat tata surya)</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-amber-200">Prinsip Utama:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li>Humanisme: Fokus pada potensi &amp; pencapaian manusia</li>
          <li>Individualisme: Ekspresi diri &amp; bakat pribadi</li>
          <li>Ilmu &amp; Observasi: Menggantikan dogma agama</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Renaissance meletakkan dasar bagi Revolusi Ilmiah dan Abad Pencerahan.
        </p>
      </div>
    )
  },
  {
    id: 'industrial-revolution',
    title: 'Revolusi Industri: Lahirnya Dunia Modern',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-amber-300">Dari Desa ke Pabrik (1760–1840)</h3>
        <p className="text-lg leading-relaxed">
          Revolusi Industri dimulai di Inggris, mengubah masyarakat agraris menjadi industri. Mesin uap, pabrik, dan kereta api mengubah segalanya.
        </p>
        <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-6 rounded-xl border border-amber-500/30">
          <h4 className="font-semibold text-xl mb-3 text-amber-200">Inovasi Kunci:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Mesin Uap (James Watt)</strong>: Tenaga untuk pabrik &amp; transportasi</li>
            <li><strong>Pemintalan Mekanis</strong>: Produksi tekstil massal</li>
            <li><strong>Kereta Api (George Stephenson)</strong>: Transportasi cepat &amp; murah</li>
            <li><strong>Baja &amp; Besi</strong>: Bangunan &amp; mesin tahan lama</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-amber-200">Dampak Sosial:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li>Urbanisasi: Orang pindah ke kota untuk kerja pabrik</li>
          <li>Kelas Pekerja: Upah rendah, jam kerja panjang, anak-anak kerja</li>
          <li>Kapitalisme Modern: Akumulasi modal &amp; produksi massal</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Revolusi Industri menciptakan standar hidup yang lebih tinggi — tapi dengan biaya sosial yang besar.
        </p>
      </div>
    )
  },
  {
    id: 'world-war-1',
    title: 'Perang Dunia I: Perang yang Mengakhiri Dunia Lama',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-amber-300">1914–1918: Perang Parit &amp; Kehancuran Massal</h3>
        <p className="text-lg leading-relaxed">
          PD I dimulai 28 Juli 1914 setelah pembunuhan Archduke Franz Ferdinand. Melibatkan 30+ negara, 20 juta tewas, teknologi perang modern pertama.
        </p>
        <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-6 rounded-xl border border-amber-500/30">
          <h4 className="font-semibold text-xl mb-3 text-amber-200">Sebab Utama:</h4>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li><strong>Militerisme</strong>: Persaingan senjata Eropa</li>
            <li><strong>Aliansi</strong>: Triple Entente vs Triple Alliance</li>
            <li><strong>Imperialisme</strong>: Perebutan koloni</li>
            <li><strong>Nasionalisme</strong>: Serbia vs Austria-Hongaria</li>
          </ol>
        </div>
        <h4 className="text-xl font-semibold text-amber-200">Akibat Langsung:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li>Keruntuhan 4 Kekaisaran: Jerman, Austria-Hongaria, Ottoman, Rusia</li>
          <li>Perjanjian Versailles (1919): Hukum berat pada Jerman → benih PD II</li>
          <li>Pendirian Liga Bangsa-Bangsa (cikal bakal PBB)</li>
        </ul>
        <p className="text-lg leading-relaxed">
          PD I mengubah geopolitik dunia selamanya — dan menunjukkan kehancuran perang modern.
        </p>
      </div>
    )
  },
  {
    id: 'world-war-2',
    title: 'Perang Dunia II: Perang Total &amp; Kebangkitan Dunia Baru',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-amber-300">1939–1945: Perang Terbesar dalam Sejarah</h3>
        <p className="text-lg leading-relaxed">
          PD II dimulai 1 September 1939 ketika Jerman menyerang Polandia. 70–85 juta tewas, Holocaust, bom atom, Perang Dingin.
        </p>
        <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-6 rounded-xl border border-amber-500/30">
          <h4 className="font-semibold text-xl mb-3 text-amber-200">Kubu Utama:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Sekutu</strong>: AS, Inggris, Uni Soviet, Tiongkok</li>
            <li><strong>Axis</strong>: Jerman Nazi, Italia Fasis, Jepang Kekaisaran</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-amber-200">Peristiwa Penting:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Holocaust</strong>: Pembunuhan 6 juta Yahudi oleh Nazi</li>
          <li><strong>Bom Atom Hiroshima &amp; Nagasaki</strong> (1945): Akhir perang</li>
          <li><strong>Konferensi Yalta &amp; Potsdam</strong>: Pembagian Eropa pasca-perang</li>
        </ul>
        <p className="text-lg leading-relaxed">
          PD II berakhir dengan kemenangan Sekutu, lahirnya PBB, dan dimulainya Perang Dingin antara AS &amp; Uni Soviet.
        </p>
      </div>
    )
  },
  {
    id: 'cold-war',
    title: 'Perang Dingin: Konflik Tanpa Tembakan Langsung',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-amber-300">1947–1991: Dunia Terbelah Dua</h3>
        <p className="text-lg leading-relaxed">
          Perang Dingin adalah persaingan ideologis antara blok kapitalis (AS) dan komunis (Uni Soviet). Tidak ada perang langsung, tapi proxy war di seluruh dunia.
        </p>
        <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-6 rounded-xl border border-amber-500/30">
          <h4 className="font-semibold text-xl mb-3 text-amber-200">Krisis Utama:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Perang Korea (1950–1953)</strong>: AS vs Tiongkok</li>
            <li><strong>Krisis Rudal Kuba (1962)</strong>: Dunia nyaris perang nuklir</li>
            <li><strong>Perang Vietnam (1955–1975)</strong>: AS vs komunis Vietnam Utara</li>
            <li><strong>Invasi Afganistan (1979)</strong>: Uni Soviet vs Mujahidin</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-amber-200">Akhir Perang Dingin:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li>Reformasi Gorbachev: Glasnost &amp; Perestroika</li>
          <li>Jatuhnya Tembok Berlin (1989)</li>
          <li>Keruntuhan Uni Soviet (1991)</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Perang Dingin membentuk tatanan dunia modern — termasuk NATO, senjata nuklir, dan globalisasi.
        </p>
      </div>
    )
  },
  {
    id: 'indonesian-independence',
    title: 'Kemerdekaan Indonesia: Perjuangan Tanpa Henti',
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-amber-300">17 Agustus 1945: Lahirnya Republik Indonesia</h3>
        <p className="text-lg leading-relaxed">
          Setelah 350 tahun penjajahan Belanda dan 3,5 tahun pendudukan Jepang, Indonesia memproklamasikan kemerdekaan pada 17 Agustus 1945 oleh Soekarno &amp; Hatta.
        </p>
        <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 p-6 rounded-xl border border-amber-500/30">
          <h4 className="font-semibold text-xl mb-3 text-amber-200">Tokoh Proklamator:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong>Soekarno</strong>: Presiden pertama, arsitek Pancasila</li>
            <li><strong>Mohammad Hatta</strong>: Wakil Presiden pertama, bapak koperasi</li>
            <li><strong>Soemarsono, Chairul Saleh, dll</strong>: Pemuda yang mendesak proklamasi</li>
          </ul>
        </div>
        <h4 className="text-xl font-semibold text-amber-200">Perjuangan Diplomasi &amp; Senjata:</h4>
        <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
          <li><strong>Peristiwa Rengasdengklok</strong>: Pemuda menculik Soekarno-Hatta agar segera proklamasi</li>
          <li><strong>Perang Kemerdekaan (1945–1949)</strong>: Melawan Belanda yang ingin kembali menjajah</li>
          <li><strong>Konferensi Meja Bundar (1949)</strong>: Belanda akui kedaulatan RI</li>
        </ul>
        <p className="text-lg leading-relaxed">
          Kemerdekaan bukan hadiah — tapi hasil perjuangan rakyat dari Sabang sampai Merauke.
        </p>
      </div>
    )
  }
];
