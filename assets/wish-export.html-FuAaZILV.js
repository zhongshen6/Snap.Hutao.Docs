import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as u,c as h,a,b as n,d as e,w as d,e as t}from"./app-ZaBzkOhj.js";const p={},k=a("h1",{id:"riwayat-harapan",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#riwayat-harapan","aria-hidden":"true"},"#"),n(" Riwayat Harapan")],-1),m=a("p",null,[n("Gacha adalah salah satu gameplay inti dalam Genshin Impact. Baik itu untuk tujuan perayaan dan pamer, atau untuk perencanaan serius strategi gacha, sangat penting untuk melakukan analisis statistik pada riwayat gacha historis. Namun, Genshin Impact hanya menyediakan pemain dengan enam bulan riwayat gacha, yang tidak ramah pengguna "),a("s",null,"(meskipun mereka masih melacak berapa banyak merpati Timmie yang telah Anda bunuh sepanjang tahun)"),n(".")],-1),c=a("p",null,"Oleh karena itu, kita perlu menggunakan catatan gacha dari enam bulan ini untuk mengambil data dan mentransfer rekaman ke perangkat lokal kita. Ini adalah tujuan dari fitur ekspor riwayat harapan di Snap Hutao.",-1),g=t('<p><img src="https://img.alicdn.com/imgextra/i1/1797064093/O1CN01AYR3I41g6dyGBmAw5_!!1797064093.png_.webp" alt="ekspor harapan" loading="lazy"></p><p><strong>Seperti yang ditunjukkan pada gambar di atas, melalui fitur riwayat harapan di Snap Hutao, Anda dapat dengan jelas mendapatkan informasi berikut: jumlah total harapan, jumlah pity saat ini, kuantitas dan persentase item yang diperoleh dengan rarity yang berbeda, jumlah kali item rarity 5 bintang tidak diperoleh, dan status pity saat ini.</strong></p><p><strong>Selain itu, pengguna dengan Hutao Cloud dapat melihat data prediksi yang dihitung oleh server Hutao Cloud</strong></p><div class="hint-container note"><p class="hint-container-title">Keterlambatan dalam Ekspor Data Gacha</p><p>Snap Hutao mengambil catatan gacha dari server MiHoYo, yang berarti bahwa harapan yang baru saja dibuat mungkin tidak segera tersedia. Ketika Anda melihat batch terbaru dari catatan gacha dalam riwayat game sendiri, maka Anda dapat memperoleh statistik yang sesuai dari Snap Hutao.</p></div><h2 id="ambil-riwayat-harapan" tabindex="-1"><a class="header-anchor" href="#ambil-riwayat-harapan" aria-hidden="true">#</a> Ambil Riwayat Harapan</h2>',5),f={id:"refresh-dengan-stoken-cookie",tabindex:"-1"},b=a("a",{class:"header-anchor",href:"#refresh-dengan-stoken-cookie","aria-hidden":"true"},"#",-1),_={class:"hint-container info"},y=a("p",{class:"hint-container-title"},"Petunjuk",-1),w=a("li",null,[a("strong",null,"Metode pembaruan SToken Cookie tidak mendukung server global (HoYoLAB)")],-1),A=a("ul",null,[a("li",null,"Pastikan akun yang ingin Anda perbarui riwayat harapannya sudah masuk ke Snap Hutao"),a("li",null,[n("Beralih ke halaman fitur "),a("code",null,"Riwayat Harapan"),n(" di Snap Hutao")]),a("li",null,[n("Klik tombol "),a("code",null,"Refresh"),n(" dan pilih "),a("code",null,"SToken Refresh")]),a("li",null,"Tunggu hingga tugas pembaruan selesai")],-1),H={id:"refresh-dengan-web-cache",tabindex:"-1"},S=a("a",{class:"header-anchor",href:"#refresh-dengan-web-cache","aria-hidden":"true"},"#",-1),x=t('<ul><li>Beralih ke halaman fitur <code>Riwayat Harapan</code> di Snap Hutao</li><li>Mulai permainan, pergi ke halaman riwayat harapan dalam permainan</li><li>Kembali ke Snap Hutao, klik tombol <code>Refresh</code> dan pilih <code>Refresh dengan Web Cache</code></li><li>Tunggu hingga tugas pembaruan selesai</li></ul><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Jika kesalahan terus terjadi:</p><ul><li>Pergi ke halaman pengaturan di Snap Hutao</li><li>Jalankan operasi <code>Hapus cache web browser yang tertanam di permainan</code></li></ul></div>',2),R={id:"refresh-dengan-input-url-manual",tabindex:"-1"},I=a("a",{class:"header-anchor",href:"#refresh-dengan-input-url-manual","aria-hidden":"true"},"#",-1),j=t('<ul><li>Jika Anda memiliki URL riwayat harapan pribadi, Anda dapat memilih <code>Input Manual</code> dan submit URL riwayat harapan Anda</li><li>Harap diketahui bahwa URL ini bersifat waktu-sensitif</li></ul><h3 id="penjelasan-pada-opsi-full-refresh" tabindex="-1"><a class="header-anchor" href="#penjelasan-pada-opsi-full-refresh" aria-hidden="true">#</a> Penjelasan pada Opsi Full Refresh</h3><p>Secara default, Snap Hutao akan berhenti mengimpor catatan gacha begitu cocok dengan ID Harapan yang sudah ada secara lokal. Namun, jika Anda ingin mendapatkan semua catatan historis dari server Genshin Impact (bahkan jika sudah ada dalam riwayat harapan lokal Anda), Anda dapat memeriksa opsi &quot;Full Refresh&quot;.</p><p>Tidak memilih <code>Full Refresh</code> <strong>tidak</strong> akan membuat Anda kehilangan data harapan Anda, dan memilih <code>Full Refresh</code> <strong>tidak</strong> akan membuat catatan lokal Anda secara keliru menc</p><p>atat data harapan yang sama dua kali.</p>',5),B={id:"impor-data-riwayat-harapan-dari-aplikasi-lain",tabindex:"-1"},D=a("a",{class:"header-anchor",href:"#impor-data-riwayat-harapan-dari-aplikasi-lain","aria-hidden":"true"},"#",-1),G=t('<p>Snap Hutao mendukung impor file data riwayat harapan dalam format data <code>UIGF</code><sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>Jika Anda perlu mengimpor jenis data seperti itu, Anda bisa:</p><ul><li>Mulai Snap Hutao, beralih ke halaman fitur <code>Riwayat Harapan</code></li><li>Pilih <code>Impor</code></li><li>Pilih file data Json UIGF Anda</li><li>Periksa informasi file yang diimpor dan konfirmasikan untuk diimpor</li></ul>',3),v={id:"ekspor-data-riwayat-harapan",tabindex:"-1"},C=a("a",{class:"header-anchor",href:"#ekspor-data-riwayat-harapan","aria-hidden":"true"},"#",-1),U=a("p",null,"Snap Hutao mendukung ekspor data riwayat harapan ke file Json yang ditulis dalam format data UIGF",-1),F=a("p",null,"Jika Anda perlu mengekspor data riwayat harapan, Anda bisa:",-1),M=a("ul",null,[a("li",null,[n("Memulai Snap Hutao, beralih ke halaman fitur "),a("code",null,"Riwayat Harapan")]),a("li",null,[n("Beralih ke arsip yang ingin Anda ekspor, dan pilih "),a("code",null,"Ekspor"),a("ul",null,[a("li",null,"Dalam jendela pop-up, konfirmasikan jalur ekspor Anda")])]),a("li",null,"Konfirmasikan dan ekspor data")],-1),K={id:"sinkronisasi-awan-riwayat-harapan",tabindex:"-1"},L=a("a",{class:"header-anchor",href:"#sinkronisasi-awan-riwayat-harapan","aria-hidden":"true"},"#",-1),T=t('<blockquote><p>Sinkronisasi awan riwayat harapan dirancang di atas Akun Snap Hutao. Anda perlu <a href="hutao-settings#snap-hutao-account">mendaftar akun dalam pengaturan</a> untuk menggunakan fitur ini</p></blockquote><p>Dengan fitur ini, Anda dapat mengunggah riwayat harapan Anda ke Hutao Cloud, untuk menghindari risiko kehilangan data, dan membuatnya lebih mudah untuk mentransfer data antar perangkat.</p><h3 id="hak-sinkronisasi-awan" tabindex="-1"><a class="header-anchor" href="#hak-sinkronisasi-awan" aria-hidden="true">#</a> Hak Sinkronisasi Awan</h3><p>Sinkronisasi awan adalah layanan yang menggunakan sumber daya server Snap Hutao, sehingga ini adalah fitur berbatas waktu. Saat ini, Anda memiliki beberapa cara untuk mengaktifkan Sinkronisasi Awan:</p><ol><li>Berikan donasi kepada kami di AiFaDian. Hak istimewa akan secara otomatis diberikan ke Akun Snap Hutao dengan alamat email yang sama di AiFaDian</li><li>Bagi semua pengguna terdaftar, setelah mengunggah rekaman Abyss dalam setiap jadwal, hak istimewa 3 hari akan secara otomatis diberikan <ul><li>Ini adalah metode yang dapat Anda gunakan secara terus-menerus untuk keuntungan dari Hutao Cloud</li></ul></li><li>Pengguna yang berkontribusi pada komunitas open-source kami, termasuk pengembangan kode, perancangan program, terjemahan lokal, dapat menghubungi tim pengembang untuk mendapatkan manfaat Anda secara gratis <ul><li>Kami sedang merancang sistem otomatisasi untuk memberikan lisensi kepada kontributor kami, itu akan aktif dengan lebih banyak pengembangan Hutao Cloud</li></ul></li></ol><p>Setelah hak istimewa Hutao Cloud Anda kedaluwarsa, Anda tidak akan bisa mengunggah, mengunduh, atau menghapus data Anda, tetapi data Anda tidak akan dihapus. Anda dapat terus mengoperasikannya setelah mendapatkan hak istimewa Anda kembali.</p><h3 id="unggah" tabindex="-1"><a class="header-anchor" href="#unggah" aria-hidden="true">#</a> Unggah</h3><ul><li>Dalam halaman ekspor harapan, pilih arsip yang perlu Anda sinkronkan data</li><li>Klik tombol <code>Snap Hutao Cloud</code> di kanan atas</li><li>Klik <code>Unggah Arsip Harapan Saat Ini</code>, dan kemudian data Anda akan disimpan ke cloud</li></ul><h3 id="unduh" tabindex="-1"><a class="header-anchor" href="#unduh" aria-hidden="true">#</a> Unduh</h3><ul><li>Dalam halaman ekspor harapan, klik tombol <code>Snap Hutao Cloud</code> di kanan atas</li><li>Klik tombol unduh di sisi kanan UID yang data perlu diunduh</li></ul><h3 id="hapus" tabindex="-1"><a class="header-anchor" href="#hapus" aria-hidden="true">#</a> Hapus</h3><ul><li>Dalam halaman ekspor harapan, klik tombol <code>Snap Hutao Cloud</code> di kanan atas</li><li>Klik tombol hapus di sisi kanan UID yang data perlu dihapus</li></ul><hr class="footnotes-sep">',13),P={class:"footnotes"},E={class:"footnotes-list"},J={id:"footnote1",class:"footnote-item"},N={href:"https://uigf.org/",target:"_blank",rel:"noopener noreferrer"},Y=a("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function q(O,V){const s=r("RouterLink"),i=r("Badge"),o=r("ExternalLinkIcon");return u(),h("div",null,[k,m,c,a("p",null,[n("Mengenai prinsip teknis dari mengekspor catatan gacha Genshin Impact, Anda dapat merujuk ke artikel kami tentang "),e(s,{to:"/id/advanced/Sistem-gacha-dan-prinsip-ekspor.html"},{default:d(()=>[n("Sistem Gacha dan Prinsip Ekspor")]),_:1})]),g,a("h3",f,[b,n(" Refresh dengan SToken Cookie "),e(i,{text:"Direkomendasikan",type:"tip"})]),a("div",_,[y,a("ul",null,[a("li",null,[n("Metode ini memerlukan pengguna untuk masuk ke akun MiHoYo BBS di Snap Hutao, lihat "),e(s,{to:"/id/features/mhy-account-switch.html"},{default:d(()=>[n("MiHoYo BBS Account Switch")]),_:1}),n(" untuk mengetahui cara masuk ke akun MiHoYo BBS Anda")]),w])]),A,a("h3",H,[S,n(" Refresh dengan Web Cache "),e(i,{text:"Didukung Server Global",type:"tip"})]),x,a("h3",R,[I,n(" Refresh dengan Input URL Manual "),e(i,{text:"Didukung Server Global",type:"tip"})]),j,a("h3",B,[D,n(" Impor Data Riwayat Harapan dari Aplikasi Lain "),e(i,{text:"UIGF",type:"info"})]),G,a("h2",v,[C,n(" Ekspor Data Riwayat Harapan "),e(i,{text:"UIGF",type:"info"})]),U,F,M,a("h2",K,[L,n(" Sinkronisasi Awan Riwayat Harapan "),e(i,{text:"Beta",type:"info"})]),T,a("section",P,[a("ol",E,[a("li",J,[a("p",null,[n("Format Data Genshin Terstandarisasi Bersatu disediakan oleh "),a("a",N,[n("UIGF-Org"),e(o)]),n(),Y])])])])])}const Q=l(p,[["render",q],["__file","wish-export.html.vue"]]);export{Q as default};