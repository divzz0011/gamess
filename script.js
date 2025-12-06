// ====================================
// 1. DATA DAN TEMPLATE GAME (10 Game)
// ====================================

const gameTemplates = {
    // HOME TEMPLATE (Tetap sama)
    'home': `
        <h2>🕹️ Pilih Game untuk Dimainkan!</h2>
        <p>Klik pada kartu di bawah untuk meluncurkan game.</p>
        
        <div id="home-grid">
            
            <div class="game-card" onclick="showGame('hangman')">
                <span class="game-icon">💀</span>
                <h4>1. Hangman</h4>
                <p>Tebak Kata.</p>
            </div>

            <div class="game-card" onclick="showGame('tictactoe')">
                <span class="game-icon">❌⭕</span>
                <h4>2. Tic-Tac-Toe</h4>
                <p>Mainkan X dan O.</p>
            </div>

            <div class="game-card" onclick="showGame('guessnumber')">
                <span class="game-icon">🔢</span>
                <h4>3. Tebak Angka</h4>
                <p>Tebak angka 1-100.</p>
            </div>

            <div class="game-card" onclick="showGame('rps')">
                <span class="game-icon">✂️</span>
                <h4>4. B-G-K (RPS)</h4>
                <p>Batu-Gunting-Kertas.</p>
            </div>

            <div class="game-card" onclick="showGame('memorymatch')">
                <span class="game-icon">🧠</span>
                <h4>5. Memory Match</h4>
                <p>Uji ingatan.</p>
            </div>

            <div class="game-card" onclick="showGame('difference')">
                <span class="game-icon">🔍</span>
                <h4>6. Cari Perbedaan</h4>
                <p>Temukan yang hilang.</p>
            </div>

            <div class="game-card" onclick="showGame('mathquiz')">
                <span class="game-icon">➕</span>
                <h4>7. Kuis Matematika</h4>
                <p>Latihan hitung cepat.</p>
            </div>

            <div class="game-card" onclick="showGame('riddle')">
                <span class="game-icon">❓</span>
                <h4>8. Teka-teki</h4>
                <p>Uji kecerdasan Anda.</p>
            </div>

            <div class="game-card" onclick="showGame('higherlower')">
                <span class="game-icon">📈</span>
                <h4>9. Tinggi/Rendah</h4>
                <p>Tebak kartu berikutnya.</p>
            </div>

            <div class="game-card" onclick="showGame('typingtest')">
                <span class="game-icon">⌨️</span>
                <h4>10. Tes Kecepatan Ketik</h4>
                <p>Ukur kecepatan ketik.</p>
            </div>
        </div>
    `,
    
    // TEMPLATE 1: HANGMAN (Tetap sama)
    'hangman': `
        <h3>Tebak Kata (Hangman)</h3>
        <p>Coba tebak huruf yang ada di kata rahasia. Anda memiliki 6 kesempatan.</p>
        <div id="hangman-image"></div>
        <p id="word-display" class="word-display"></p>
        <div id="input-area">
            <input type="text" id="guess-input" maxlength="1" placeholder="Masukkan huruf" onkeyup="checkEnter(event)">
            <button onclick="processHangmanGuess()" class="game-button">Tebak Huruf</button>
        </div>
        <p id="guessed-letters">Huruf yang sudah ditebak: -</p>
        <p id="hangman-message"></p>
        <div style="margin-top: 15px; display: flex; justify-content: center; gap: 10px;">
            <button id="clue-button" onclick="giveHangmanClue()" class="game-button" style="background-color: #f39c12;">
                Clue Huruf (<span id="clue-count">3</span>)
            </button>
            <button id="word-clue-button" onclick="getWordClue()" class="game-button" style="background-color: #2ecc71;">
                Clue Kata (1x)
            </button>
        </div>
        <button id="restart-hangman-button" onclick="initializeHangman()" class="game-button" style="display:none; margin-top: 10px;">Mulai Ulang</button>
    `,

    // TEMPLATE 2: TIC-TAC-TOE (Tetap sama)
    'tictactoe': `
        <h3>Tic-Tac-Toe (X dan O)</h3>
        <p id="tictactoe-status">Giliran Pemain X</p>
        <div id="tictactoe-board" class="tictactoe-grid">
            <div class="cell" onclick="makeMove(0)"></div><div class="cell" onclick="makeMove(1)"></div><div class="cell" onclick="makeMove(2)"></div>
            <div class="cell" onclick="makeMove(3)"></div><div class="cell" onclick="makeMove(4)"></div><div class="cell" onclick="makeMove(5)"></div>
            <div class="cell" onclick="makeMove(6)"></div><div class="cell" onclick="makeMove(7)"></div><div class="cell" onclick="makeMove(8)"></div>
        </div>
        <button onclick="initializeTicTacToe()" class="game-button">Mulai Ulang</button>
    `,
    
    // TEMPLATE 3: TEBAK ANGKA (Tetap sama)
    'guessnumber': `
        <h3>Tebak Angka</h3>
        <p>Saya memikirkan angka antara 1 dan 100. Coba tebak!</p>
        <input type="number" id="guessnumber-input" min="1" max="100" placeholder="Masukkan tebakan Anda">
        <button onclick="checkGuess()" id="guessnumber-button" class="game-button">Tebak</button>
        <p id="result-message"></p>
        <p id="guesses-list">Tebakan sebelumnya: -</p>
        <button onclick="initializeGuessNumberGame()" id="reset-guessnumber-button" class="game-button" style="display:none;">Mulai Ulang</button>
    `,

    // TEMPLATE 4: ROCK-PAPER-SCISSORS (Tetap sama)
    'rps': `
        <h3>Batu-Gunting-Kertas (Rock-Paper-Scissors)</h3>
        <p>Pilih salah satu di bawah ini untuk melawan komputer!</p>
        <div id="rps-choices">
            <button onclick="playRPS('Batu')" class="game-button rps-button">🪨 Batu</button>
            <button onclick="playRPS('Gunting')" class="game-button rps-button">✂️ Gunting</button>
            <button onclick="playRPS('Kertas')" class="game-button rps-button">📄 Kertas</button>
        </div>
        <p id="rps-result-message" style="font-size: 1.2em; margin: 15px 0;"></p>
        <p id="rps-scores">Skor: Anda 0 - Komputer 0</p>
        <button onclick="initializeRPS()" class="game-button">Mulai Ulang</button>
    `,

    // TEMPLATE 5: MEMORY MATCH (Tetap sama)
    'memorymatch': `
        <h3>Memory Match (Kartu Pasangan)</h3>
        <p id="memory-status">Temukan semua pasangan!</p>
        <div id="memory-grid"></div>
        <button onclick="initializeMemoryMatch()" class="game-button">Mulai Ulang</button>
    `,

    // TEMPLATE 6: FIND THE DIFFERENCE (Tetap sama)
    'difference': `
        <h3>🔍 Cari Perbedaan (Teks Sederhana)</h3>
        <p>Di bawah ini ada dua kalimat. Kalimat kedua memiliki satu kata yang berbeda atau hilang. Kata apa itu?</p>
        
        <p style="font-weight: bold;">Kalimat Asli (A): <span id="original-sentence"></span></p>
        <p style="font-weight: bold;">Kalimat Modif (B): <span id="modified-sentence"></span></p>
        
        <input type="text" id="difference-input" placeholder="Ketik kata yang hilang/berbeda">
        <button onclick="checkDifference()" class="game-button">Cek</button>
        
        <p id="difference-message" style="margin-top: 15px;"></p>
        <button onclick="initializeDifference()" class="game-button">Ganti Kalimat</button>
    `,

    // TEMPLATE 7: SIMPLE MATH QUIZ (Tetap sama)
    'mathquiz': `
        <h3>➕ Kuis Matematika Sederhana</h3>
        <p>Berapakah hasil dari soal di bawah ini?</p>
        
        <h2 id="math-problem"></h2>
        
        <input type="number" id="math-answer-input" placeholder="Masukkan jawaban" onkeyup="checkMathEnter(event)">
        <button onclick="checkMathAnswer()" class="game-button">Jawab</button>
        
        <p id="math-message" style="margin-top: 15px;"></p>
        <p id="math-score">Skor: 0</p>
        <button onclick="initializeMathQuiz()" class="game-button">Mulai Ulang/Soal Baru</button>
    `,

    // TEMPLATE 8: RIDDLE GAME (Tetap sama)
    'riddle': `
        <h3>❓ Teka-teki (Riddle)</h3>
        <p>Pikirkan baik-baik! Apa jawabannya?</p>
        
        <div style="border: 1px solid #ddd; padding: 15px; margin: 15px 0; background-color: #f9f9f9;">
            <p id="riddle-question" style="font-style: italic; font-size: 1.1em;"></p>
        </div>
        
        <input type="text" id="riddle-answer-input" placeholder="Ketik jawaban Anda">
        <button onclick="checkRiddleAnswer()" class="game-button">Jawab</button>
        
        <p id="riddle-message" style="margin-top: 15px;"></p>
        <button onclick="initializeRiddle()" class="game-button">Teka-teki Baru</button>
    `,

    // TEMPLATE 9: HIGHER/LOWER CARD GAME (Tetap sama)
    'higherlower': `
        <h3>📈 Kartu Tinggi/Rendah</h3>
        <p>Kartu berikutnya akan lebih tinggi atau lebih rendah dari kartu yang terlihat?</p>
        
        <div style="font-size: 4em; margin: 20px 0; font-weight: bold;">
            🃏 Kartu Sekarang: <span id="current-card">?</span>
        </div>

        <div id="hl-choices">
            <button onclick="predictCard('Higher')" class="game-button">Lebih TINGGI</button>
            <button onclick="predictCard('Lower')" class="game-button">Lebih RENDAH</button>
        </div>

        <p id="hl-message" style="margin-top: 15px;"></p>
        <p id="hl-score">Streak: 0</p>
        <button onclick="initializeHigherLower()" class="game-button">Mulai Ulang</button>
    `,

    // TEMPLATE 10: TYPING SPEED TEST (Tetap sama)
    'typingtest': `
        <h3>⌨️ Tes Kecepatan Mengetik</h3>
        <p>Ketik kalimat di bawah ini secepat mungkin. Tekan tombol 'Mulai' untuk memulai.</p>
        
        <div id="typing-text-display"></div>
        <input type="text" id="typing-input" disabled placeholder="Ketik di sini...">
        
        <p id="typing-timer">Waktu: 0s</p>
        <p id="typing-result">WPM: 0 | Akurasi: 0%";</p>

        <button onclick="startTypingTest()" id="typing-start-button" class="game-button">Mulai</button>
        <button onclick="initializeTypingTest()" id="typing-reset-button" class="game-button" style="display:none;">Reset</button>
    `,
};


// ====================================
// 2. FUNGSI UTAMA NAVIGASI (showGame)
// ====================================

function showGame(gameId) {
    const container = document.getElementById('game-container');
    
    // 1. Ganti konten HTML di container
    container.innerHTML = gameTemplates[gameId] || gameTemplates['home'];

    // 2. Jalankan fungsi inisialisasi untuk game spesifik
    if (gameId === 'hangman') {
        initializeHangman();
    } else if (gameId === 'tictactoe') {
        initializeTicTacToe();
    } else if (gameId === 'guessnumber') {
        initializeGuessNumberGame();
    } else if (gameId === 'rps') {
        initializeRPS();
    } else if (gameId === 'memorymatch') {
        initializeMemoryMatch();
    } else if (gameId === 'difference') {
        initializeDifference();
    } else if (gameId === 'mathquiz') {
        initializeMathQuiz();
    } else if (gameId === 'riddle') {
        initializeRiddle();
    } else if (gameId === 'higherlower') {
        initializeHigherLower();
    } else if (gameId === 'typingtest') {
        initializeTypingTest();
    }
}

// Inisialisasi awal saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    showGame('home');
});


// ====================================
// 3. LOGIKA GAME HANGMAN (200 KATA)
// ====================================
let secretWord_H = "";
let secretWordData_H;
let guessedLetters_H = [];
let wrongGuesses_H = 0;
let cluesRemaining_H = 0; 
let wordClueUsed_H = false;

// Daftar 200 Kata Hangman (Hangman Word List) - Telah Diperbarui di permintaan sebelumnya
const wordList_H = [
    // Kategori: Teknologi & Komputer
    { word: "JAVASCRIPT", clue: "Bahasa pemrograman utama untuk front-end website." },
    { word: "PEMROGRAMAN", clue: "Proses membuat instruksi langkah demi langkah untuk komputer." },
    { word: "KOMPUTER", clue: "Mesin elektronik untuk memproses data." },
    { word: "ALGORITMA", clue: "Serangkaian langkah terstruktur untuk memecahkan masalah." },
    { word: "DATABASE", clue: "Koleksi data terorganisir yang disimpan secara elektronik." },
    { word: "INTERNET", clue: "Jaringan global yang menghubungkan miliaran perangkat." },
    { word: "ROUTER", clue: "Perangkat yang mengarahkan paket data antar jaringan." },
    { word: "KEYBOARD", clue: "Alat input utama untuk mengetik teks." },
    { word: "PIRANTI", clue: "Istilah umum untuk perangkat keras atau lunak." },
    { word: "KODE", clue: "Instruksi yang ditulis dalam bahasa pemrograman." },
    { word: "WEBSITE", clue: "Kumpulan halaman web yang dapat diakses publik." },
    { word: "MONITOR", clue: "Layar untuk menampilkan informasi visual." },
    { word: "RESOLUSI", clue: "Jumlah piksel pada layar atau gambar." },
    { word: "BROWSER", clue: "Aplikasi untuk mengakses World Wide Web." },
    { word: "SERVER", clue: "Komputer yang menyediakan sumber daya ke komputer lain." },

    // Kategori: Alam & Geografi
    { word: "SAMUDRA", clue: "Perairan asin yang sangat luas." },
    { word: "PEGUNUNGAN", clue: "Rangkaian bukit dan gunung yang tinggi." },
    { word: "GUNUNG", clue: "Bentuk daratan yang menjulang tinggi ke atas." },
    { word: "GURUN", clue: "Area daratan yang kering dan berpasir." },
    { word: "SUNGAI", clue: "Aliran air alami yang menuju laut atau danau." },
    { word: "HUTAN", clue: "Area luas yang didominasi oleh pepohonan." },
    { word: "KUTUB", clue: "Daerah paling utara dan selatan Bumi yang sangat dingin." },
    { word: "ERUPSI", clue: "Letusan tiba-tiba dari gunung berapi." },
    { word: "EKUATOR", clue: "Garis imajiner yang membagi Bumi menjadi utara dan selatan." },
    { word: "TERUMBU", clue: "Ekosistem laut dari karang keras." },
    { word: "MIMPI", clue: "Pengalaman visual, auditori, atau sensorik saat tidur." },
    { word: "IKLIM", clue: "Kondisi cuaca rata-rata dalam periode waktu lama." },
    { word: "PLANET", clue: "Benda langit yang mengorbit bintang." },
    { word: "GEMPA", clue: "Getaran tiba-tiba pada permukaan Bumi." },

    // Kategori: Makanan & Masakan
    { word: "NASIGORENG", clue: "Makanan khas Indonesia berupa nasi yang digoreng dengan bumbu." },
    { word: "RENDANG", clue: "Hidangan daging yang dimasak dengan santan dan rempah, asalnya dari Padang." },
    { word: "GULAI", clue: "Masakan kuah kental berbumbu kaya rempah." },
    { word: "KETUPAT", clue: "Nasi yang dimasak dalam anyaman janur, populer saat Idul Fitri." },
    { word: "TEMPE", clue: "Makanan fermentasi dari kedelai, sumber protein nabati." },
    { word: "KERUPUK", clue: "Makanan ringan renyah yang sering menjadi pelengkap." },
    { word: "CENDOL", clue: "Minuman manis dari tepung beras atau hunkwe dan santan." },
    { word: "GORENGAN", clue: "Istilah umum untuk makanan yang dimasak dengan minyak panas." },
    { word: "SAMBAL", clue: "Bumbu pedas pendamping makanan, terbuat dari cabai." },
    { word: "MIEAYAM", clue: "Hidangan mi dengan potongan daging ayam dan kuah kaldu." },
    { word: "JENGKOL", clue: "Buah dengan bau tajam, sering diolah menjadi lauk." },
    { word: "LODEH", clue: "Sayur kuah santan berisi berbagai jenis sayuran." },
    { word: "PECEL", clue: "Hidangan sayuran dengan siraman bumbu kacang." },
    { word: "SATE", clue: "Potongan daging yang ditusuk dan dipanggang." },
    { word: "TAHU", clue: "Makanan dari endapan perasan kedelai." },

    // Kategori: Transportasi & Peralatan
    { word: "SEPEDA", clue: "Kendaraan roda dua yang digerakkan oleh kayuhan." },
    { word: "PESAWAT", clue: "Kendaraan udara yang digunakan untuk perjalanan jauh." },
    { word: "KERETAAPI", clue: "Transportasi darat yang berjalan di atas rel." },
    { word: "KAPALSELAM", clue: "Kendaraan yang dapat bergerak di bawah permukaan air." },
    { word: "HELM", clue: "Pelindung kepala wajib saat mengendarai motor." },
    { word: "OBENG", clue: "Alat untuk memutar sekrup." },
    { word: "PISAU", clue: "Alat tajam untuk memotong bahan makanan." },
    { word: "KUNCI", clue: "Benda logam kecil untuk membuka atau mengunci pintu." },
    { word: "PALU", clue: "Alat untuk memukul atau menancapkan paku." },
    { word: "TANGGA", clue: "Struktur untuk naik atau turun antartingkat." },
    { word: "BOR", clue: "Alat listrik untuk membuat lubang." },
    { word: "METERAN", clue: "Alat untuk mengukur panjang." },
    { word: "GERGAJI", clue: "Alat tajam untuk memotong kayu." },

    // Kategori: Pendidikan & Konsep Abstrak
    { word: "FILOSOFI", clue: "Studi tentang pengetahuan, nilai, akal, dan eksistensi." },
    { word: "MATEMATIKA", clue: "Ilmu tentang bilangan, ruang, dan struktur." },
    { word: "SEJARAH", clue: "Studi tentang masa lalu, terutama yang tertulis." },
    { word: "LITERASI", clue: "Kemampuan membaca dan menulis." },
    { word: "EVALUASI", clue: "Proses menilai suatu program atau kegiatan." },
    { word: "HIPOTESIS", clue: "Dugaan sementara yang perlu diuji dalam penelitian." },
    { word: "DEDUKSI", clue: "Penarikan kesimpulan dari hal-hal umum ke khusus." },
    { word: "KREATIVITAS", clue: "Kemampuan untuk menghasilkan ide-ide baru dan orisinal." },
    { word: "ETIKA", clue: "Prinsip-prinsip moral yang mengatur perilaku seseorang." },
    { word: "INTEGRITAS", clue: "Kualitas jujur dan memiliki prinsip moral yang kuat." },
    { word: "TOLERANSI", clue: "Sikap menghargai perbedaan." },
    { word: "INOVASI", clue: "Pengenalan metode, ide, atau produk baru." },
    { word: "REVOLUSI", clue: "Perubahan mendasar yang cepat dalam kekuatan atau struktur." },
    { word: "OBSERVASI", clue: "Proses mengamati sesuatu secara teliti." },
    { word: "ANALISIS", clue: "Pemeriksaan detail terhadap struktur suatu hal." },

    // Kategori: Organ Tubuh & Kesehatan
    { word: "JANTUNG", clue: "Organ utama yang memompa darah ke seluruh tubuh." },
    { word: "PARUPARU", clue: "Organ yang berfungsi untuk respirasi (pernapasan)." },
    { word: "OTAK", clue: "Pusat sistem saraf, tempat berpikir dan mengendalikan tubuh." },
    { word: "TULANG", clue: "Struktur keras yang menyusun kerangka tubuh." },
    { word: "HEPATITIS", clue: "Penyakit yang menyebabkan peradangan pada hati." },
    { word: "DIABETES", clue: "Penyakit dengan kadar gula darah tinggi." },
    { word: "ANTIBODI", clue: "Protein yang diproduksi sistem imun untuk melawan penyakit." },
    { word: "IMUNITAS", clue: "Kemampuan tubuh untuk melawan infeksi." },
    { word: "VAKSIN", clue: "Substansi biologis untuk meningkatkan kekebalan." },
    { word: "PROTEIN", clue: "Nutrisi penting yang membangun dan memperbaiki jaringan tubuh." },
    { word: "KARBOHIDRAT", clue: "Sumber energi utama tubuh, seperti nasi atau roti." },

    // Kategori: Kegiatan & Olahraga
    { word: "SEPAKBOLA", clue: "Olahraga tim yang dimainkan dengan kaki." },
    { word: "RENANG", clue: "Aktivitas bergerak di dalam air." },
    { word: "YOGA", clue: "Latihan fisik, mental, dan spiritual dari India." },
    { word: "MENDAYUNG", clue: "Menggerakkan perahu dengan menggunakan dayung." },
    { word: "MEDITASI", clue: "Latihan fokus untuk mencapai ketenangan mental." },
    { word: "PANJATTEBING", clue: "Olahraga menaklukkan ketinggian vertikal." },
    { word: "MARATON", clue: "Lomba lari jarak jauh, biasanya 42.195 kilometer." },
    { word: "BERKEBUN", clue: "Aktivitas menanam dan merawat tanaman di luar ruangan." },
    { word: "MENULIS", clue: "Aktivitas mencatat huruf, kata, atau ide di kertas." },
    { word: "MELUKIS", clue: "Menciptakan karya seni menggunakan cat." },
    { word: "FOTOGRAFI", clue: "Seni dan praktik membuat gambar permanen." },
    
    // Kategori: Lain-lain (dari 101 - 120)
    { word: "KONSTELASI", clue: "Sekelompok bintang yang membentuk pola." },
    { word: "DEKORASI", clue: "Penataan ruangan agar terlihat indah." },
    { word: "OTOMATIS", clue: "Sesuatu yang bekerja sendiri tanpa campur tangan manusia." },
    { word: "KEPALA", clue: "Bagian tubuh tempat otak berada." },
    { word: "KEJUJURAN", clue: "Sifat mengatakan yang sebenarnya." },
    { word: "PERPUS", clue: "Singkatan untuk tempat menyimpan buku." },
    { word: "BANDARA", clue: "Terminal untuk kedatangan dan keberangkatan pesawat." },
    { word: "KARYAWAN", clue: "Seseorang yang bekerja di sebuah perusahaan." },
    { word: "PENJARA", clue: "Tempat menahan narapidana." },
    { word: "BENDA", clue: "Segala sesuatu yang memiliki massa dan menempati ruang." },
    { word: "ATMOSFER", clue: "Lapisan udara yang menyelimuti Bumi." },
    { word: "BIODIVERSITAS", clue: "Keanekaragaman hayati makhluk hidup." },
    { word: "FOTOSINTESIS", clue: "Proses pembuatan makanan pada tumbuhan." },
    { word: "PETIR", clue: "Fenomena kilatan listrik di udara saat badai." },
    { word: "PELANGI", clue: "Busur warna-warni yang muncul setelah hujan." },
    { word: "MIGRAN", clue: "Seseorang yang berpindah ke negara atau tempat lain." },
    { word: "OZON", clue: "Lapisan gas yang melindungi Bumi dari sinar ultraviolet." },
    { word: "TSUNAMI", clue: "Gelombang laut besar akibat gempa atau letusan." },
    { word: "VULKANIK", clue: "Berkaitan dengan gunung berapi." },
    { word: "KOMET", clue: "Benda langit berekor yang mengelilingi Matahari." },

    // TAMBAHAN 100 KATA HANGMAN (NO. 121 - 200)
    
    // Kategori: Alam & Fenomena
    { word: "METEOR", clue: "Batuan luar angkasa yang terbakar saat memasuki atmosfer." },
    { word: "EKOSISTEM", clue: "Komunitas biologis yang berinteraksi dengan lingkungan fisik." },
    { word: "MUSON", clue: "Angin musiman yang menyebabkan perubahan iklim." },
    { word: "GLETZER", clue: "Endapan es besar yang bergerak perlahan di daratan." },
    
    // Kategori: Indonesia & Budaya
    { word: "PANCASILA", clue: "Dasar negara Republik Indonesia." },
    { word: "BHINNEKA", clue: "Slogan yang berarti 'Berbeda-beda tetapi tetap satu'." },
    { word: "BATIK", clue: "Kain tradisional Indonesia dengan motif tulis atau cap." },
    { word: "WAYANG", clue: "Seni pertunjukan boneka tradisional Jawa." },
    { word: "GAMELAN", clue: "Ansambel musik tradisional Jawa dan Bali." },
    { word: "BOROBUDUR", clue: "Candi Buddha terbesar di Jawa Tengah." },
    { word: "KOMODO", clue: "Kadal raksasa endemik dari Nusa Tenggara Timur." },
    { word: "ANGKLUNG", clue: "Alat musik bambu dari Jawa Barat." },
    { word: "REOG", clue: "Tarian tradisional dari Ponorogo, Jawa Timur." },
    { word: "KRIS", clue: "Senjata tradisional melayu berbentuk keris berlekuk." },
    { word: "NUSANTARA", clue: "Nama lain untuk kepulauan Indonesia." },
    { word: "DEKLARASI", clue: "Pernyataan resmi kemerdekaan." },
    { word: "PRESIDEN", clue: "Kepala negara di Indonesia." },
    { word: "PROKLAMASI", clue: "Naskah bersejarah dibacakan Soekarno-Hatta." },
    { word: "GARUDA", clue: "Burung mitologi yang menjadi lambang negara." },

    // Kategori: Peralatan Rumah Tangga & Kehidupan Sehari-hari
    { word: "KULKAS", clue: "Alat untuk mendinginkan dan menyimpan makanan." },
    { word: "SETRIKA", clue: "Alat untuk menghaluskan pakaian." },
    { word: "DISPENSER", clue: "Alat untuk mengeluarkan air minum, sering ada panas dan dingin." },
    { word: "BLENDER", clue: "Alat untuk menghancurkan atau mencampur bahan makanan." },
    { word: "SAPU", clue: "Alat pembersih lantai dari ijuk atau lidi." },
    { word: "KESET", clue: "Alas kaki di depan pintu untuk membersihkan kotoran." },
    { word: "HANDUK", clue: "Kain tebal untuk mengeringkan badan." },
    { word: "WC", clue: "Tempat membersihkan diri (Singkatan dua huruf)." },
    { word: "GELAS", clue: "Wadah untuk menampung air minum." },
    { word: "SENDOK", clue: "Alat makan untuk menyuap makanan berkuah atau butiran." },
    { word: "GUNTING", clue: "Alat tajam dengan dua bilah untuk memotong kertas atau kain." },
    { word: "LAMPU", clue: "Sumber penerangan utama di malam hari." },
    { word: "OBATNYAMUK", clue: "Zat untuk mengusir atau membunuh serangga kecil pengisap darah." },
    { word: "TERMOS", clue: "Wadah untuk menjaga suhu air agar tetap panas atau dingin." },

    // Kategori: Profesi & Pekerjaan
    { word: "ARSITEK", clue: "Orang yang merancang bangunan dan struktur." },
    { word: "AKUNTAN", clue: "Profesi yang bertugas mencatat dan memeriksa keuangan." },
    { word: "NELAYAN", clue: "Orang yang pekerjaannya menangkap ikan di laut." },
    { word: "PILOT", clue: "Orang yang mengemudikan pesawat terbang." },
    { word: "JURNALIS", clue: "Profesi yang meliput, menulis, dan menyebarkan berita." },
    { word: "PETANI", clue: "Orang yang bekerja menanam di sawah atau ladang." },
    { word: "ASTRONOT", clue: "Orang yang dilatih untuk melakukan perjalanan ke luar angkasa." },
    { word: "PENGACARA", clue: "Orang yang memberikan nasihat dan pembelaan hukum." },
    { word: "KASIR", clue: "Petugas yang melayani pembayaran di toko atau supermarket." },
    { word: "PENGEMUDI", clue: "Orang yang bertugas mengendalikan kendaraan." },
    { word: "DESAINER", clue: "Orang yang membuat rancangan visual atau bentuk." },
    { word: "GURU", clue: "Profesi yang mengajarkan ilmu di sekolah." },
    { word: "KOKI", clue: "Spesialis dalam menyiapkan makanan di restoran." },
    { word: "APOTEKER", clue: "Profesional kesehatan yang menyiapkan dan mengeluarkan obat." },
    { word: "POLISI", clue: "Penegak hukum yang menjaga ketertiban." },

    // Kategori: Sifat & Perasaan (Psikologi)
    { word: "KECEWA", clue: "Perasaan sedih karena harapan tidak terpenuhi." },
    { word: "BAHAGIA", clue: "Perasaan senang dan puas akan hidup." },
    { word: "CEMAS", clue: "Perasaan khawatir dan gelisah tentang masa depan." },
    { word: "EMPATI", clue: "Kemampuan memahami perasaan orang lain." },
    { word: "FRUSTRASI", clue: "Perasaan kesal karena terhalang mencapai tujuan." },
    { word: "KERAGUAN", clue: "Perasaan tidak yakin atau bimbang." },
    { word: "MARAH", clue: "Reaksi kuat terhadap ketidakadilan atau provokasi." },
    { word: "OPTIMISME", clue: "Sikap positif dan berharap hasil terbaik." },
    { word: "PESIMISME", clue: "Sikap negatif dan cenderung mengharapkan hasil terburuk." },
    { word: "RESPEK", clue: "Perasaan menghormati atau menghargai orang lain." },
    { word: "KESABARAN", clue: "Sikap tenang dalam menghadapi kesulitan atau penundaan." },
    { word: "KESEPIAN", clue: "Perasaan terasing atau terpisah dari orang lain." },
    { word: "BANGGA", clue: "Perasaan puas terhadap prestasi diri sendiri atau orang lain." },
    { word: "PRIHATIN", clue: "Perasaan sedih dan khawatir terhadap kondisi seseorang/sesuatu." },
    { word: "KEPERCAYAAN", clue: "Keyakinan pada kejujuran atau kemampuan seseorang." },

    // Kategori: Kata Panjang & Unik
    { word: "TELEVISI", clue: "Alat elektronik penangkap siaran gambar bergerak." },
    { word: "KOMUNIKASI", clue: "Proses penyampaian pesan dari satu pihak ke pihak lain." },
    { word: "TRANSPARAN", clue: "Sifat tembus pandang atau jelas terlihat." },
    { word: "OTORITAS", clue: "Kekuatan atau hak untuk memberikan perintah." },
    { word: "ENERGI", clue: "Kemampuan untuk melakukan kerja." },
    { word: "PENDIDIKAN", clue: "Proses pengajaran dan pembelajaran." },
    { word: "RESTORAN", clue: "Tempat usaha yang menyediakan makanan dan minuman." },
    { word: "BIROKRASI", clue: "Sistem administrasi yang dijalankan oleh pejabat berjenjang." },
    { word: "UNIVERSITAS", clue: "Institusi pendidikan tinggi setelah SMA." },
    { word: "DEMOKRASI", clue: "Sistem pemerintahan di mana rakyat memegang kekuasaan." },
    { word: "REKREASI", clue: "Aktivitas untuk menyegarkan pikiran dan fisik." },
    { word: "TRADISIONAL", clue: "Bersifat turun temurun atau sesuai kebiasaan lama." },
    { word: "INTELEKTUAL", clue: "Berkaitan dengan kemampuan berpikir dan pengetahuan." },
    { word: "ORGANISASI", clue: "Susunan atau wadah yang terdiri dari sekelompok orang." },
    { word: "REPUBLIK", clue: "Bentuk negara yang dipimpin oleh presiden atau sejenisnya." }
];
const maxWrongGuesses_H = 6;
const maxClues_H = 3;

function initializeHangman() {
    // Memilih kata baru dan cluenya
    secretWordData_H = wordList_H[Math.floor(Math.random() * wordList_H.length)];
    secretWord_H = secretWordData_H.word;

    guessedLetters_H = [];
    wrongGuesses_H = 0;
    cluesRemaining_H = maxClues_H;
    wordClueUsed_H = false; // Reset Clue Kata
    
    const input = document.getElementById('guess-input');
    const button = document.querySelector('#input-area button');
    const clueButton = document.getElementById('clue-button');
    const wordClueButton = document.getElementById('word-clue-button');

    if (input) input.value = '';
    if (input) input.disabled = false;
    if (button) button.disabled = false;
    
    if (clueButton) {
        clueButton.disabled = false;
        clueButton.style.display = 'inline-block';
    }
    
    if (wordClueButton) {
        wordClueButton.disabled = false;
        wordClueButton.style.display = 'inline-block';
    }

    if (document.getElementById('restart-hangman-button')) document.getElementById('restart-hangman-button').style.display = 'none';
    
    updateHangmanDisplay();
}

function updateHangmanDisplay() {
    let display = "";
    let wordGuessed = true;
    for (const char of secretWord_H) {
        if (guessedLetters_H.includes(char)) {
            display += char + " ";
        } else {
            display += "_ ";
            wordGuessed = false;
        }
    }
    if (document.getElementById('word-display')) document.getElementById('word-display').textContent = display.trim();

    const guessedList = guessedLetters_H.length > 0 ? guessedLetters_H.join(', ') : '-';
    if (document.getElementById('guessed-letters')) document.getElementById('guessed-letters').textContent = `Huruf yang sudah ditebak: ${guessedList}`;

    const hangmanVisual = ["😀", "🙁", "😟", "😰", "😨", "👻", "💀"];
    if (document.getElementById('hangman-image')) document.getElementById('hangman-image').textContent = hangmanVisual[wrongGuesses_H];

    const messageElement = document.getElementById('hangman-message');
    
    // Update tampilan sisa clue huruf
    const clueCountElement = document.getElementById('clue-count');
    if (clueCountElement) clueCountElement.textContent = cluesRemaining_H;
    
    // Nonaktifkan tombol clue jika game selesai atau jatah habis
    if (document.getElementById('clue-button')) document.getElementById('clue-button').disabled = cluesRemaining_H <= 0 || wordGuessed || wrongGuesses_H >= maxWrongGuesses_H;
    if (document.getElementById('word-clue-button')) document.getElementById('word-clue-button').disabled = wordClueUsed_H || wordGuessed || wrongGuesses_H >= maxWrongGuesses_H;


    if (wordGuessed) {
        if (messageElement) {
            messageElement.textContent = "🎉 SELAMAT! Anda berhasil menebak kata!";
            messageElement.className = 'win';
        }
        endGameHangman();
    } else if (wrongGuesses_H >= maxWrongGuesses_H) {
        if (messageElement) {
            messageElement.textContent = `❌ GAME OVER! Kata yang benar adalah: ${secretWord_H}`;
            messageElement.className = 'lose';
        }
        endGameHangman();
    } else {
        // Hanya tampilkan pesan kesempatan salah jika tidak ada pesan clue yang sedang aktif
        const currentMessage = messageElement ? messageElement.textContent : '';
        if (!currentMessage.startsWith("Clue") && !currentMessage.startsWith("PETUNJUK")) {
            if (messageElement) {
                messageElement.textContent = `Kesempatan salah tersisa: ${maxWrongGuesses_H - wrongGuesses_H}`;
                messageElement.className = '';
            }
        }
    }
}

function processHangmanGuess() {
    const inputElement = document.getElementById('guess-input');
    if (!inputElement || !secretWord_H) return;
    
    let guess = inputElement.value.toUpperCase();
    inputElement.value = '';

    if (!guess || guess.length !== 1 || !/[A-Z]/.test(guess)) {
        alert("Masukkan hanya satu huruf alfabet.");
        return;
    }

    if (guessedLetters_H.includes(guess)) {
        alert("Huruf tersebut sudah pernah ditebak.");
        return;
    }

    guessedLetters_H.push(guess);

    if (!secretWord_H.includes(guess)) {
        wrongGuesses_H++;
    }

    updateHangmanDisplay();
}

// FUNGSI BARU: MEMBERIKAN CLUE KATA (Hanya 1x)
function getWordClue() {
    if (wordClueUsed_H) return;

    const messageElement = document.getElementById('hangman-message');
    
    if (messageElement) {
        messageElement.textContent = `PETUNJUK KATA: ${secretWordData_H.clue}`;
        messageElement.className = 'high-low';
    }

    wordClueUsed_H = true;
    if (document.getElementById('word-clue-button')) {
        document.getElementById('word-clue-button').disabled = true;
    }
    
    updateHangmanDisplay();
}


// FUNGSI LAMA: MEMBERIKAN CLUE HURUF (Max 3x)
function giveHangmanClue() {
    if (cluesRemaining_H <= 0) {
        alert("Jatah clue huruf Anda sudah habis!");
        return;
    }

    // 1. Cari huruf yang belum ditebak
    let unguessedChars = [];
    for (const char of secretWord_H) {
        if (!guessedLetters_H.includes(char)) {
            if (!unguessedChars.includes(char)) { 
                unguessedChars.push(char);
            }
        }
    }

    if (unguessedChars.length === 0) {
        if (document.getElementById('hangman-message')) {
            document.getElementById('hangman-message').textContent = "Semua huruf sudah tertebak!";
        }
        return; 
    }
    
    // 2. Pilih satu huruf acak dari huruf yang belum ditebak
    const clueChar = unguessedChars[Math.floor(Math.random() * unguessedChars.length)];
    
    // 3. Masukkan huruf clue ke dalam guessedLetters
    guessedLetters_H.push(clueChar);
    cluesRemaining_H--;
    
    // 4. Update tampilan dan pesan
    if (document.getElementById('hangman-message')) {
        document.getElementById('hangman-message').textContent = `Clue Huruf digunakan! Huruf '${clueChar}' terungkap. Sisa clue huruf: ${cluesRemaining_H}`;
        document.getElementById('hangman-message').className = 'high-low';
    }

    updateHangmanDisplay();
}


function checkEnter(event) {
    if (event.key === 'Enter') {
        processHangmanGuess();
    }
}

function endGameHangman() {
    const input = document.getElementById('guess-input');
    const button = document.querySelector('#input-area button');
    const clueButton = document.getElementById('clue-button');
    const wordClueButton = document.getElementById('word-clue-button');
    
    if (input) input.disabled = true;
    if (button) button.disabled = true;
    if (clueButton) clueButton.disabled = true;
    if (wordClueButton) wordClueButton.disabled = true;
    if (document.getElementById('restart-hangman-button')) document.getElementById('restart-hangman-button').style.display = 'block';
}


// ====================================
// 4. LOGIKA GAME TIC-TAC-TOE (Tetap sama)
// ====================================
let board_T; 
let currentPlayer_T;
let gameActive_T;
const winningCombinations_T = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function initializeTicTacToe() {
    board_T = ["", "", "", "", "", "", "", "", ""]; 
    currentPlayer_T = "X";
    gameActive_T = true;

    const cells = document.querySelectorAll('#tictactoe-board .cell');
    
    if (cells.length > 0) {
        cells.forEach(cell => {
            cell.textContent = "";
            cell.classList.remove('win');
            cell.style.pointerEvents = 'auto';
        });
    }

    const statusElement = document.getElementById('tictactoe-status');
    if (statusElement) statusElement.textContent = `Giliran Pemain ${currentPlayer_T}`;
}

function checkWinnerTicTacToe() {
    for (const combination of winningCombinations_T) {
        const [a, b, c] = combination;
        if (board_T[a] && board_T[a] === board_T[b] && board_T[a] === board_T[c]) {
            const cells = document.querySelectorAll('#tictactoe-board .cell');
            if (cells.length > 0) {
                cells[a].classList.add('win');
                cells[b].classList.add('win');
                cells[c].classList.add('win');
            }
            return true;
        }
    }
    return false;
}

function makeMove(index) {
    if (board_T[index] !== "" || !gameActive_T) {
        return; 
    }

    board_T[index] = currentPlayer_T;
    const cellElement = document.querySelectorAll('#tictactoe-board .cell')[index];
    if (cellElement) cellElement.textContent = currentPlayer_T;
    cellElement.style.pointerEvents = 'none';

    const statusElement = document.getElementById('tictactoe-status');

    if (checkWinnerTicTacToe()) {
        if (statusElement) statusElement.textContent = `🎉 Pemain ${currentPlayer_T} MENANG!`;
        gameActive_T = false;
        document.querySelectorAll('#tictactoe-board .cell').forEach(cell => cell.style.pointerEvents = 'none');
        return;
    }

    if (board_T.every(cell => cell !== "")) {
        if (statusElement) statusElement.textContent = `🤝 Pertandingan SERI!`;
        gameActive_T = false;
        return;
    }

    currentPlayer_T = currentPlayer_T === "X" ? "O" : "X";
    if (statusElement) statusElement.textContent = `Giliran Pemain ${currentPlayer_T}`;
}


// ====================================
// 5. LOGIKA GAME TEBAK ANGKA (Tetap sama)
// ====================================
let secretNumber_GN;
let guesses_GN = [];
let gameRunning_GN;

function initializeGuessNumberGame() {
    secretNumber_GN = Math.floor(Math.random() * 100) + 1;
    guesses_GN = [];
    gameRunning_GN = true;

    const input = document.getElementById('guessnumber-input');
    const button = document.getElementById('guessnumber-button');
    const resetButton = document.getElementById('reset-guessnumber-button');

    if (input) input.value = '';
    if (input) input.disabled = false;
    if (button) button.disabled = false;
    
    if (document.getElementById('result-message')) document.getElementById('result-message').textContent = '';
    if (document.getElementById('guesses-list')) document.getElementById('guesses-list').textContent = 'Tebakan sebelumnya: -';
    if (resetButton) resetButton.style.display = 'none';
}

function checkGuess() {
    if (!gameRunning_GN) return;

    const input = document.getElementById('guessnumber-input');
    const guess = parseInt(input.value);
    if (input) input.value = '';

    if (isNaN(guess) || guess < 1 || guess > 100) {
        if (document.getElementById('result-message')) {
            document.getElementById('result-message').textContent = "⚠️ Masukkan angka yang valid (1-100).";
            document.getElementById('result-message').className = 'error';
        }
        return;
    }

    guesses_GN.push(guess);
    if (document.getElementById('guesses-list')) document.getElementById('guesses-list').textContent = `Tebakan sebelumnya: ${guesses_GN.join(', ')}`;

    const messageElement = document.getElementById('result-message');

    if (guess === secretNumber_GN) {
        if (messageElement) {
            messageElement.textContent = `🎉 SELAMAT! Angka tersebut adalah ${secretNumber_GN} dalam ${guesses_GN.length} percobaan!`;
            messageElement.className = 'correct';
        }
        endGameGuessNumber();
    } else if (guess < secretNumber_GN) {
        if (messageElement) {
            messageElement.textContent = "Angka terlalu RENDAH. Coba lagi.";
            messageElement.className = 'high-low';
        }
    } else {
        if (messageElement) {
            messageElement.textContent = "Angka terlalu TINGGI. Coba lagi.";
            messageElement.className = 'high-low';
        }
    }
}

function endGameGuessNumber() {
    gameRunning_GN = false;
    if (document.getElementById('guessnumber-input')) document.getElementById('guessnumber-input').disabled = true;
    if (document.getElementById('guessnumber-button')) document.getElementById('guessnumber-button').disabled = true;
    if (document.getElementById('reset-guessnumber-button')) document.getElementById('reset-guessnumber-button').style.display = 'block';
}


// ====================================
// 6. LOGIKA GAME ROCK-PAPER-SCISSORS (Tetap sama)
// ====================================

let playerScore_RPS;
let computerScore_RPS;
const choices_RPS = ['Batu', 'Gunting', 'Kertas'];

function initializeRPS() {
    playerScore_RPS = 0;
    computerScore_RPS = 0;
    
    if (document.getElementById('rps-result-message')) {
        document.getElementById('rps-result-message').textContent = "Ayo mulai!";
        document.getElementById('rps-result-message').className = '';
    }
    updateRPSScore();
}

function updateRPSScore() {
    if (document.getElementById('rps-scores')) {
        document.getElementById('rps-scores').textContent = `Skor: Anda ${playerScore_RPS} - Komputer ${computerScore_RPS}`;
    }
}

function playRPS(playerChoice) {
    const computerChoice = choices_RPS[Math.floor(Math.random() * 3)];
    let result = "";
    
    if (playerChoice === computerChoice) {
        result = "Seri!";
    } else if (
        (playerChoice === "Batu" && computerChoice === "Gunting") ||
        (playerChoice === "Gunting" && computerChoice === "Kertas") ||
        (playerChoice === "Kertas" && computerChoice === "Batu")
    ) {
        result = "Anda Menang!";
        playerScore_RPS++;
    } else {
        result = "Komputer Menang!";
        computerScore_RPS++;
    }

    const messageElement = document.getElementById('rps-result-message');
    if (messageElement) {
        messageElement.textContent = `Anda pilih ${playerChoice}, Komputer pilih ${computerChoice}. Hasil: ${result}`;
        messageElement.className = result.includes("Menang") ? 'win' : result.includes("Seri") ? '' : 'lose';
    }
    
    updateRPSScore();
}


// ====================================
// 7. LOGIKA GAME MEMORY MATCH (Tetap sama)
// ====================================

const initialEmojis = ['🍎', '🍌', '🍇', '🍉', '🍓', '🥝', '🥭', '🍍'];
let cards_MM = [];
let firstCard_MM = null;
let secondCard_MM = null;
let lockBoard_MM = false;
let matchesFound_MM = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function initializeMemoryMatch() {
    matchesFound_MM = 0;
    
    cards_MM = shuffle([...initialEmojis, ...initialEmojis]);
    
    const grid = document.getElementById('memory-grid');
    if (!grid) return;

    grid.innerHTML = '';
    
    cards_MM.forEach((emoji, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('memory-card');
        cardElement.setAttribute('data-emoji', emoji);
        cardElement.setAttribute('data-index', index);
        cardElement.onclick = () => flipCard(cardElement);

        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-front">?</div>
                <div class="card-back">${emoji}</div>
            </div>
        `;
        grid.appendChild(cardElement);
    });
    
    if (document.getElementById('memory-status')) document.getElementById('memory-status').textContent = 'Temukan semua pasangan!';
    if (document.getElementById('memory-status')) document.getElementById('memory-status').className = '';
}

function flipCard(card) {
    if (lockBoard_MM) return;
    if (card === firstCard_MM) return;

    card.classList.add('flipped');

    if (!firstCard_MM) {
        firstCard_MM = card;
        return;
    }

    secondCard_MM = card;
    lockBoard_MM = true;

    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard_MM.getAttribute('data-emoji') === secondCard_MM.getAttribute('data-emoji');
    
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard_MM.classList.add('matched');
    secondCard_MM.classList.add('matched');
    
    matchesFound_MM++;
    
    if (matchesFound_MM === initialEmojis.length) {
        if (document.getElementById('memory-status')) {
            document.getElementById('memory-status').textContent = '🎉 SELAMAT! Anda menemukan semua pasangan!';
            document.getElementById('memory-status').className = 'win';
        }
    }
    
    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard_MM.classList.remove('flipped');
        secondCard_MM.classList.remove('flipped');
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard_MM, secondCard_MM] = [null, null];
    lockBoard_MM = false;
}


// ====================================
// 8. LOGIKA GAME FIND THE DIFFERENCE (200 SOAL)
// ====================================

const sentencePairs = [
    { original: "Kucing itu suka minum susu setiap pagi.", modified: "Kucing itu suka minum kopi setiap pagi.", answer: "kopi" },
    { original: "Saya pergi ke pasar untuk membeli sayur dan ikan.", modified: "Saya pergi ke pasar untuk membeli sayur.", answer: "ikan" },
    { original: "Langit hari ini terlihat sangat cerah dan biru.", modified: "Langit hari ini terlihat sangat gelap dan biru.", answer: "gelap" },
    { original: "Komputer baru saya berjalan sangat cepat.", modified: "Komputer baru saya berjalan sangat lambat.", answer: "lambat" },
    { original: "Pagi hari sangat dingin setelah hujan lebat semalam.", modified: "Pagi hari sangat panas setelah hujan lebat semalam.", answer: "panas" },
    { original: "Semua siswa wajib memakai sepatu hitam ke sekolah.", modified: "Semua siswa wajib memakai sepatu putih ke sekolah.", answer: "putih" },
    { original: "Harimau adalah hewan buas yang hidup di hutan.", modified: "Harimau adalah hewan jinak yang hidup di hutan.", answer: "jinak" },
    { original: "Perpustakaan adalah tempat yang tenang untuk membaca buku.", modified: "Perpustakaan adalah tempat yang ramai untuk membaca buku.", answer: "ramai" },
    { original: "Mobil sport merah itu melaju dengan kecepatan tinggi.", modified: "Mobil sport merah itu melaju dengan kecepatan rendah.", answer: "rendah" },
    { original: "Tugas kelompok ini harus diselesaikan dalam dua minggu.", modified: "Tugas kelompok ini harus diselesaikan dalam satu minggu.", answer: "satu" },
    { original: "Bunga mawar di taman itu berwarna merah muda.", modified: "Bunga mawar di taman itu berwarna kuning muda.", answer: "kuning" },
    { original: "Anak-anak bermain bola di lapangan rumput hijau.", modified: "Anak-anak bermain bola di lapangan tanah merah.", answer: "tanah" },
    { original: "Minuman dingin ini terasa sangat manis dan segar.", modified: "Minuman dingin ini terasa sangat pahit dan segar.", answer: "pahit" },
    { original: "Peralatan dapur terbuat dari bahan stainless steel.", modified: "Peralatan dapur terbuat dari bahan plastik.", answer: "plastik" },
    { original: "Kita harus membuang sampah pada tempat yang disediakan.", modified: "Kita harus membuang sampah sembarangan.", answer: "sembarangan" },
    { original: "Ayahku bekerja sebagai seorang insinyur di Jakarta.", modified: "Ayahku bekerja sebagai seorang dokter di Jakarta.", answer: "dokter" },
    { original: "Makanan ini terasa hambar karena kurang garam.", modified: "Makanan ini terasa pedas karena kurang garam.", answer: "pedas" },
    { original: "Film horor itu sukses membuat penonton ketakutan.", modified: "Film horor itu sukses membuat penonton tertawa.", answer: "tertawa" },
    { original: "Pakaian tebal diperlukan saat musim dingin tiba.", modified: "Pakaian tipis diperlukan saat musim dingin tiba.", answer: "tipis" },
    { original: "Burung merpati hinggap di atas atap rumah.", modified: "Burung merpati hinggap di atas pohon kelapa.", answer: "kelapa" },
    { original: "Dia membaca novel romantis yang sangat tebal.", modified: "Dia membaca novel romantis yang sangat tipis.", answer: "tipis" },
    { original: "Sarapan pagi ini adalah roti panggang dan selai cokelat.", modified: "Sarapan pagi ini adalah roti panggang dan selai strawberry.", answer: "strawberry" },
    { original: "Papan tulis di kelas itu berwarna hijau.", modified: "Papan tulis di kelas itu berwarna hitam.", answer: "hitam" },
    { original: "Jalan menuju puncak gunung itu sangat curam.", modified: "Jalan menuju puncak gunung itu sangat datar.", answer: "datar" },
    { original: "Harga emas hari ini mengalami kenaikan tajam.", modified: "Harga emas hari ini mengalami penurunan tajam.", answer: "penurunan" },
    { original: "Pesawat terbang bergerak dengan kecepatan suara.", modified: "Pesawat terbang bergerak dengan kecepatan cahaya.", answer: "cahaya" },
    { original: "Pelajar harus datang ke sekolah tepat waktu.", modified: "Pelajar harus datang ke sekolah terlambat.", answer: "terlambat" },
    { original: "Laut Merah memiliki kandungan garam yang tinggi.", modified: "Laut Mati memiliki kandungan garam yang tinggi.", answer: "mati" },
    { original: "Pemanasan global menyebabkan es di kutub mencair.", modified: "Pemanasan global menyebabkan es di kutub membeku.", answer: "membeku" },
    { original: "Sistem operasi komputer yang paling populer adalah Windows.", modified: "Sistem operasi komputer yang paling populer adalah Linux.", answer: "linux" },
    { original: "Telepon genggamnya berdering dengan nada dering keras.", modified: "Telepon genggamnya berdering dengan nada dering pelan.", answer: "pelan" },
    { original: "Kami berlibur ke pantai saat musim kemarau.", modified: "Kami berlibur ke gunung saat musim kemarau.", answer: "gunung" },
    { original: "Ibu memasak nasi dengan menggunakan panci besar.", modified: "Ibu memasak nasi dengan menggunakan wajan besar.", answer: "wajan" },
    { original: "Kacamata membantu orang yang penglihatannya kabur.", modified: "Kacamata membantu orang yang pendengarannya kabur.", answer: "pendengarannya" },
    { original: "Jembatan itu runtuh akibat banjir besar.", modified: "Jembatan itu runtuh akibat gempa besar.", answer: "gempa" },
    { original: "Lampu neon memancarkan cahaya yang putih terang.", modified: "Lampu neon memancarkan cahaya yang merah terang.", answer: "merah" },
    { original: "Kereta api melaju kencang melewati sawah.", modified: "Kereta api melaju kencang melewati laut.", answer: "laut" },
    { original: "Warna bendera Indonesia adalah merah dan putih.", modified: "Warna bendera Indonesia adalah biru dan putih.", answer: "biru" },
    { original: "Buku sejarah itu bercerita tentang zaman kuno.", modified: "Buku sejarah itu bercerita tentang zaman modern.", answer: "modern" },
    { original: "Pintu rumah itu terbuat dari kayu jati yang kuat.", modified: "Pintu rumah itu terbuat dari kaca yang kuat.", answer: "kaca" },
    { original: "Musik klasik memiliki tempo yang cenderung lambat.", modified: "Musik klasik memiliki tempo yang cenderung cepat.", answer: "cepat" },
    { original: "Bumi mengelilingi Matahari dalam periode satu tahun.", modified: "Matahari mengelilingi Bumi dalam periode satu tahun.", answer: "matahari" },
    { original: "Tikus adalah hewan pengerat yang suka keju.", modified: "Kelinci adalah hewan pengerat yang suka keju.", answer: "kelinci" },
    { original: "Dia membeli sepatu baru di toko olahraga.", modified: "Dia membeli sepatu bekas di toko olahraga.", answer: "bekas" },
    { original: "Angin bertiup lembut menerpa wajahku.", modified: "Angin bertiup kencang menerpa wajahku.", answer: "kencang" },
    { original: "Kami akan makan malam di restoran mewah.", modified: "Kami akan makan malam di warung sederhana.", answer: "warung" },
    { original: "Dokter menyarankan saya untuk banyak tidur.", modified: "Dokter menyarankan saya untuk banyak lari.", answer: "lari" },
    { original: "Anjing itu menggonggong dengan suara keras.", modified: "Anjing itu menggonggong dengan suara pelan.", answer: "pelan" },
    { original: "Dia menulis surat menggunakan pena dan tinta.", modified: "Dia menulis surat menggunakan pensil dan tinta.", answer: "pensil" },
    { original: "Kota metropolitan selalu ramai dan padat.", modified: "Kota metropolitan selalu sepi dan padat.", answer: "sepi" },
    { original: "Saya memiliki seekor burung peliharaan berwarna biru.", modified: "Saya memiliki seekor burung peliharaan berwarna hijau.", answer: "hijau" },
    { original: "Di kamar mandi terdapat sabun dan sampo.", modified: "Di kamar mandi terdapat sikat dan sampo.", answer: "sikat" },
    { original: "Gajah adalah mamalia terbesar di darat.", modified: "Paus adalah mamalia terbesar di darat.", answer: "paus" },
    { original: "Air laut terasa asin karena mengandung garam.", modified: "Air laut terasa manis karena mengandung garam.", answer: "manis" },
    { original: "Pohon kelapa tumbuh tinggi di tepi pantai.", modified: "Pohon beringin tumbuh tinggi di tepi pantai.", answer: "beringin" },
    { original: "Karyawan itu menerima kenaikan gaji setiap tahun.", modified: "Karyawan itu menerima penurunan gaji setiap tahun.", answer: "penurunan" },
    { original: "Mata uang negara Jepang adalah Yen.", modified: "Mata uang negara Jepang adalah Won.", answer: "won" },
    { original: "Lukisan abstrak itu sulit dipahami maknanya.", modified: "Lukisan realistis itu sulit dipahami maknanya.", answer: "realistis" },
    { original: "Pesta ulang tahunnya diadakan di hotel bintang lima.", modified: "Pesta ulang tahunnya diadakan di rumah kayu.", answer: "kayu" },
    { original: "Mobil itu mogok karena kehabisan bensin.", modified: "Mobil itu mogok karena kehabisan solar.", answer: "solar" },
    { original: "Kamera digital menyimpan foto dalam memori.", modified: "Kamera analog menyimpan foto dalam memori.", answer: "analog" },
    { original: "Petir selalu didahului oleh kilat yang cepat.", modified: "Petir selalu didahului oleh suara yang cepat.", answer: "suara" },
    { original: "Dia menyelesaikan ujian dengan waktu tercepat.", modified: "Dia menyelesaikan ujian dengan waktu terlama.", answer: "terlama" },
    { original: "Sepatu olahraga ini terbuat dari bahan kulit.", modified: "Sepatu olahraga ini terbuat dari bahan kanvas.", answer: "kanvas" },
    { original: "Katak adalah hewan amfibi yang hidup di air dan darat.", modified: "Ikan adalah hewan amfibi yang hidup di air dan darat.", answer: "ikan" },
    { original: "Awan putih di langit menandakan cuaca cerah.", modified: "Awan hitam di langit menandakan cuaca cerah.", answer: "hitam" },
    { original: "Rambutnya panjang dan lurus seperti sutra.", modified: "Rambutnya pendek dan lurus seperti sutra.", answer: "pendek" },
    { original: "Para pendaki mencapai puncak gunung di pagi hari.", modified: "Para pendaki mencapai puncak gunung di sore hari.", answer: "sore" },
    { original: "Teh panas ini harus diminum saat masih hangat.", modified: "Teh dingin ini harus diminum saat masih hangat.", answer: "dingin" },
    { original: "Komputer membutuhkan listrik untuk bisa menyala.", modified: "Komputer membutuhkan air untuk bisa menyala.", answer: "air" },
    { original: "Seorang petani menanam padi di sawah yang luas.", modified: "Seorang nelayan menanam padi di sawah yang luas.", answer: "nelayan" },
    { original: "Kota Paris terkenal dengan menara Eiffel.", modified: "Kota London terkenal dengan menara Eiffel.", answer: "london" },
    { original: "Penyakit flu disebabkan oleh infeksi bakteri.", modified: "Penyakit flu disebabkan oleh infeksi virus.", answer: "virus" },
    { original: "Lemari pakaian itu terbuat dari besi yang berat.", modified: "Lemari pakaian itu terbuat dari plastik yang berat.", answer: "plastik" },
    { original: "Lidah berfungsi untuk mengecap rasa makanan.", modified: "Lidah berfungsi untuk mencium rasa makanan.", answer: "mencium" },
    { original: "Dia mengenakan jaket tebal karena udara panas.", modified: "Dia mengenakan jaket tebal karena udara dingin.", answer: "dingin" },
    { original: "Kita harus menjaga kebersihan lingkungan sekitar.", modified: "Kita harus merusak kebersihan lingkungan sekitar.", answer: "merusak" },
    { original: "Kamera itu menggunakan film untuk mengambil gambar.", modified: "Kamera itu menggunakan pita untuk mengambil gambar.", answer: "pita" },
    { original: "Keluarga itu pindah ke rumah baru di kota.", modified: "Keluarga itu pindah ke rumah lama di kota.", answer: "lama" },
    { original: "Air mendidih pada suhu seratus derajat Celsius.", modified: "Air mendidih pada suhu nol derajat Celsius.", answer: "nol" },
    { original: "Kabel listrik digunakan untuk mengalirkan arus.", modified: "Kabel listrik digunakan untuk mengalirkan air.", answer: "air" },
    { original: "Permukaan meja itu halus dan mengkilap.", modified: "Permukaan meja itu kasar dan mengkilap.", answer: "kasar" },
    { original: "Bintang tampak bersinar terang di malam hari.", modified: "Bintang tampak bersinar redup di malam hari.", answer: "redup" },
    { original: "Penulis itu menerbitkan buku pertamanya tahun lalu.", modified: "Penulis itu menerbitkan lagu pertamanya tahun lalu.", answer: "lagu" },
    { original: "Jendela kaca itu pecah karena dilempar batu.", modified: "Jendela kaca itu pecah karena dilempar bantal.", answer: "bantal" },
    { original: "Dia menyelesaikan lukisan pemandangan pantai.", modified: "Dia menyelesaikan lukisan pemandangan gunung.", answer: "gunung" },
    { original: "Sepak bola dimainkan oleh sebelas orang per tim.", modified: "Sepak bola dimainkan oleh lima orang per tim.", answer: "lima" },
    { original: "Roti tawar dimakan bersama mentega dan gula.", modified: "Roti tawar dimakan bersama mentega dan madu.", answer: "madu" },
    { original: "Pagar rumahnya dicat ulang dengan warna hijau.", modified: "Pagar rumahnya dicat ulang dengan warna biru.", answer: "biru" },
    { original: "Semua orang menyukai film komedi yang lucu itu.", modified: "Semua orang membenci film komedi yang lucu itu.", answer: "membenci" },
    { original: "Ular adalah hewan melata yang berbisa.", modified: "Kura-kura adalah hewan melata yang berbisa.", answer: "kura-kura" },
    { original: "Dia membeli sayuran segar di pasar tradisional.", modified: "Dia membeli sayuran busuk di pasar tradisional.", answer: "busuk" },
    { original: "Susu sapi sangat baik untuk pertumbuhan tulang.", modified: "Susu kambing sangat baik untuk pertumbuhan tulang.", answer: "kambing" },
    { original: "Lagu pop itu memiliki irama yang ceria.", modified: "Lagu pop itu memiliki irama yang sedih.", answer: "sedih" },
    { original: "Telepon genggam memiliki banyak fitur canggih.", modified: "Telepon umum memiliki banyak fitur canggih.", answer: "umum" },
    { original: "Cahaya matahari pagi mengandung vitamin C.", modified: "Cahaya matahari pagi mengandung vitamin D.", answer: "d" },
    { original: "Sepeda motor menggunakan roda dua dan mesin.", modified: "Sepeda motor menggunakan roda tiga dan mesin.", answer: "tiga" },
    { original: "Kertas digunakan untuk menulis atau mencetak.", modified: "Plastik digunakan untuk menulis atau mencetak.", answer: "plastik" },
    { original: "Udara di pegunungan terasa sejuk dan bersih.", modified: "Udara di perkotaan terasa sejuk dan bersih.", answer: "perkotaan" },
    { original: "Nyamuk dapat menularkan penyakit demam berdarah.", modified: "Kecoak dapat menularkan penyakit demam berdarah.", answer: "kecoak" },
    { original: "Kunci pintu rumah itu terbuat dari kuningan.", modified: "Kunci pintu rumah itu terbuat dari kayu.", answer: "kayu" },
    { original: "Buku fiksi ilmiah menceritakan tentang masa depan.", modified: "Buku fiksi ilmiah menceritakan tentang masa lalu.", answer: "lalu" },
    { original: "Pria itu memakai kemeja berwarna biru muda.", modified: "Pria itu memakai kemeja berwarna biru tua.", answer: "tua" },
    { original: "Gelombang radio merambat lebih lambat dari cahaya.", modified: "Gelombang radio merambat lebih cepat dari cahaya.", answer: "cepat" },
    { original: "Daun-daun di pohon itu berguguran saat musim semi.", modified: "Daun-daun di pohon itu berguguran saat musim gugur.", answer: "gugur" },
    { original: "Pasien di rumah sakit harus minum obat secara teratur.", modified: "Pasien di rumah sakit harus makan permen secara teratur.", answer: "permen" },
    { original: "Komputer laptop dapat dibawa ke mana-mana.", modified: "Komputer desktop dapat dibawa ke mana-mana.", answer: "desktop" },
    { original: "Dia memiliki tato naga di lengan kirinya.", modified: "Dia memiliki tato bunga di lengan kirinya.", answer: "bunga" },
    { original: "Permukaan Bulan dipenuhi dengan kawah besar.", modified: "Permukaan Bulan dipenuhi dengan hutan besar.", answer: "hutan" },
    { original: "Air bersih sangat penting untuk kesehatan manusia.", modified: "Air kotor sangat penting untuk kesehatan manusia.", answer: "kotor" },
    { original: "Jalan tol memungkinkan kendaraan berjalan cepat.", modified: "Jalan setapak memungkinkan kendaraan berjalan cepat.", answer: "setapak" },
    { original: "Hewan peliharaan yang paling umum adalah anjing.", modified: "Hewan peliharaan yang paling umum adalah kura-kura.", answer: "kura-kura" },
    { original: "Kopi pahit paling nikmat diminum tanpa gula.", modified: "Kopi manis paling nikmat diminum tanpa gula.", answer: "manis" },
    { original: "Peralatan camping disimpan di dalam gudang.", modified: "Peralatan kantor disimpan di dalam gudang.", answer: "kantor" },
    { original: "Sepeda motor memerlukan dua helm untuk dua orang.", modified: "Sepeda motor memerlukan satu helm untuk dua orang.", answer: "satu" },
    { original: "Ibu menjemur pakaian di bawah sinar matahari.", modified: "Ibu menjemur pakaian di dalam kamar mandi.", answer: "kamar" },
    { original: "Buku pelajaran harus dibaca dan dipahami.", modified: "Buku pelajaran harus disobek dan dipahami.", answer: "disobek" },
    { original: "Kereta bawah tanah berjalan di dalam terowongan.", modified: "Kereta bawah tanah berjalan di atas awan.", answer: "awan" },
    { original: "Warna air laut di pantai terlihat biru jernih.", modified: "Warna air laut di pantai terlihat cokelat jernih.", answer: "cokelat" },
    { original: "Tembok bata itu dicat dengan warna abu-abu.", modified: "Tembok bata itu dicat dengan warna ungu.", answer: "ungu" },
    { original: "Lomba lari maraton menempuh jarak yang pendek.", modified: "Lomba lari maraton menempuh jarak yang jauh.", answer: "jauh" },
    { original: "Jari tangan manusia masing-masing memiliki lima ruas.", modified: "Jari tangan manusia masing-masing memiliki tiga ruas.", answer: "tiga" },
    { original: "Kucing berlari cepat saat dikejar anjing.", modified: "Kucing berjalan pelan saat dikejar anjing.", answer: "berjalan" },
    { original: "Pelukis terkenal itu menggunakan kuas dan cat air.", modified: "Pelukis terkenal itu menggunakan pensil dan cat air.", answer: "pensil" },
    { original: "Piring kaca itu jatuh ke lantai dan hancur.", modified: "Piring plastik itu jatuh ke lantai dan hancur.", answer: "plastik" },
    { original: "Udara panas membuat tubuh berkeringat deras.", modified: "Udara dingin membuat tubuh berkeringat deras.", answer: "dingin" },
    { original: "Hewan herbivora hanya memakan tumbuhan saja.", modified: "Hewan herbivora hanya memakan daging saja.", answer: "daging" },
    { original: "Bendera merah putih dikibarkan dengan gagah.", modified: "Bendera hitam putih dikibarkan dengan gagah.", answer: "hitam" },
    { original: "Buah apel yang matang rasanya manis.", modified: "Buah apel yang matang rasanya asam.", answer: "asam" },
    { original: "Dia menggunakan payung saat cuaca terik.", modified: "Dia menggunakan payung saat cuaca hujan.", answer: "hujan" },
    { original: "Semua peserta diwajibkan memakai seragam resmi.", modified: "Semua peserta diwajibkan memakai pakaian santai.", answer: "santai" },
    { original: "Tembok rumah itu tebal dan kokoh.", modified: "Tembok rumah itu tipis dan kokoh.", answer: "tipis" },
    { original: "Sopir bus mengemudikan kendaraannya dengan cepat.", modified: "Sopir bus mengemudikan kendaraannya dengan lambat.", answer: "lambat" },
    { original: "Paus biru adalah makhluk terbesar di lautan.", modified: "Hiu putih adalah makhluk terbesar di lautan.", answer: "hiu" },
    { original: "Lampu lalu lintas menunjukkan warna merah, kuning, dan hijau.", modified: "Lampu lalu lintas menunjukkan warna merah, ungu, dan hijau.", answer: "ungu" },
    { original: "Jalanan di kota itu ramai pada malam hari.", modified: "Jalanan di kota itu sepi pada malam hari.", answer: "sepi" },
    { original: "Buku panduan itu berisi petunjuk yang jelas.", modified: "Buku panduan itu berisi petunjuk yang membingungkan.", answer: "membingungkan" },
    { original: "Suara burung berkicau terdengar merdu di pagi hari.", modified: "Suara gajah berkicau terdengar merdu di pagi hari.", answer: "gajah" },
    { original: "Kunci jawaban ujian itu telah bocor ke publik.", modified: "Kunci soal ujian itu telah bocor ke publik.", answer: "soal" },
    { original: "Dia memotong rambutnya menjadi sangat pendek.", modified: "Dia memotong rambutnya menjadi sangat panjang.", answer: "panjang" },
    { original: "Sayuran hijau sangat baik untuk kesehatan mata.", modified: "Sayuran merah sangat baik untuk kesehatan mata.", answer: "merah" },
    { original: "Api unggun dinyalakan untuk menghangatkan tubuh.", modified: "Api unggun dinyalakan untuk mendinginkan tubuh.", answer: "mendinginkan" },
    { original: "Pintu geser itu terbuat dari bahan kayu.", modified: "Pintu putar itu terbuat dari bahan kayu.", answer: "putar" },
    { original: "Jalanan menanjak membuat mobil kesulitan mendaki.", modified: "Jalanan menurun membuat mobil kesulitan mendaki.", answer: "menurun" },
    { original: "Raja memerintah kerajaannya dengan adil dan bijaksana.", modified: "Raja memerintah kerajaannya dengan kejam dan bijaksana.", answer: "kejam" },
    { original: "Bunga tulip banyak ditemukan di negara Belanda.", modified: "Bunga tulip banyak ditemukan di negara Jepang.", answer: "jepang" },
    { original: "Pekerjaan rumah harus dikerjakan di sekolah.", modified: "Pekerjaan rumah harus dikerjakan di rumah.", answer: "sekolah" },
    { original: "Meja belajar itu terbuat dari bahan metal.", modified: "Meja belajar itu terbuat dari bahan kayu.", answer: "kayu" },
    { original: "Pemerintah membangun jalan raya di desa terpencil.", modified: "Pemerintah membangun stasiun di desa terpencil.", answer: "stasiun" },
    { original: "Siswa-siswa memakai sepatu bot saat musim dingin.", modified: "Siswa-siswa memakai sandal saat musim dingin.", answer: "sandal" },
    { original: "Kopi instan cepat larut dalam air panas.", modified: "Kopi instan lambat larut dalam air panas.", answer: "lambat" },
    { original: "Buku tebal itu berisi 500 halaman.", modified: "Buku tipis itu berisi 500 halaman.", answer: "tipis" },
    { original: "Warna air kolam renang itu jernih kebiruan.", modified: "Warna air kolam renang itu keruh kebiruan.", answer: "keruh" },
    { original: "Kepala suku memimpin masyarakat dengan bijak.", modified: "Kepala desa memimpin masyarakat dengan bijak.", answer: "desa" },
    { original: "Kabel data berfungsi untuk transfer data cepat.", modified: "Kabel data berfungsi untuk transfer data lambat.", answer: "lambat" },
    { original: "Suhu udara pagi ini terasa sangat hangat.", modified: "Suhu udara pagi ini terasa sangat sejuk.", answer: "sejuk" },
    { original: "Perahu nelayan berlayar jauh di tengah lautan.", modified: "Perahu nelayan berlayar dekat di tengah lautan.", answer: "dekat" },
    { original: "Lampu bohlam memiliki umur pakai yang panjang.", modified: "Lampu bohlam memiliki umur pakai yang pendek.", answer: "pendek" },
    { original: "Kulkas digunakan untuk menyimpan makanan segar.", modified: "Kulkas digunakan untuk menyimpan makanan busuk.", answer: "busuk" },
    { original: "Pesta pernikahan itu diadakan di tempat terbuka.", modified: "Pesta pernikahan itu diadakan di tempat tertutup.", answer: "tertutup" },
    { original: "Kerusakan lingkungan disebabkan oleh ulah manusia.", modified: "Kerusakan lingkungan disebabkan oleh ulah binatang.", answer: "binatang" },
    { original: "Film kartun itu ditujukan untuk penonton dewasa.", modified: "Film kartun itu ditujukan untuk penonton anak-anak.", answer: "anak-anak" },
    { original: "Pengeras suara berfungsi untuk mengeraskan suara.", modified: "Pengeras suara berfungsi untuk melembutkan suara.", answer: "melembutkan" },
    { original: "Teks ini ditulis dalam bahasa Indonesia.", modified: "Teks ini ditulis dalam bahasa Inggris.", answer: "inggris" },
    { original: "Petugas kebersihan membersihkan jalanan setiap pagi.", modified: "Petugas kebersihan mengotori jalanan setiap pagi.", answer: "mengotori" },
    { original: "Warna langit saat senja adalah jingga dan ungu.", modified: "Warna langit saat senja adalah hitam dan ungu.", answer: "hitam" },
    { original: "Kipas angin membuat ruangan terasa dingin.", modified: "Kipas angin membuat ruangan terasa panas.", answer: "panas" },
    { original: "Sereal dimakan bersama susu saat sarapan.", modified: "Sereal dimakan bersama kopi saat sarapan.", answer: "kopi" },
    { original: "Harga makanan di restoran itu sangat mahal.", modified: "Harga makanan di restoran itu sangat murah.", answer: "murah" },
    { original: "Ayahku membeli mobil baru berwarna biru.", modified: "Ayahku menjual mobil baru berwarna biru.", answer: "menjual" },
    { original: "Peralatan elektronik harus dijauhkan dari air.", modified: "Peralatan elektronik harus didekatkan ke air.", answer: "didekatkan" },
    { original: "Perusahaan itu mengalami kerugian besar tahun ini.", modified: "Perusahaan itu mengalami keuntungan besar tahun ini.", answer: "keuntungan" },
    { original: "Sinar matahari pagi sangat baik untuk tulang.", modified: "Sinar matahari siang sangat baik untuk tulang.", answer: "siang" },
    { original: "Jembatan gantung itu bergoyang saat dilewati.", modified: "Jembatan gantung itu diam saat dilewati.", answer: "diam" },
    { original: "Kucing mengeluarkan suara meong yang lucu.", modified: "Kucing mengeluarkan suara gonggongan yang lucu.", answer: "gonggongan" },
    { original: "Tas ransel itu terlalu berat untuk dibawa anak-anak.", modified: "Tas ransel itu terlalu ringan untuk dibawa anak-anak.", answer: "ringan" },
    { original: "Dokter gigi merawat masalah pada telinga.", modified: "Dokter THT merawat masalah pada telinga.", answer: "tht" },
    { original: "Angin sepoi-sepoi menerpa wajah saat di pantai.", modified: "Angin kencang menerpa wajah saat di pantai.", answer: "kencang" },
    { original: "Kami menonton konser musik rock yang meriah.", modified: "Kami menonton konser musik klasik yang meriah.", answer: "klasik" },
    { original: "Dia membaca buku dengan penerangan yang redup.", modified: "Dia membaca buku dengan penerangan yang terang.", answer: "terang" },
    { original: "Suhu tubuh normal manusia adalah sekitar 37 derajat.", modified: "Suhu tubuh normal manusia adalah sekitar 27 derajat.", answer: "27" },
    { original: "Penghapus digunakan untuk menghapus tulisan pensil.", modified: "Penghapus digunakan untuk menghapus tulisan pulpen.", answer: "pulpen" },
    { original: "Bunga-bunga di taman bermekaran saat musim hujan.", modified: "Bunga-bunga di taman bermekaran saat musim semi.", answer: "semi" },
    { original: "Kain sutra terasa kasar dan panas saat dipakai.", modified: "Kain sutra terasa halus dan panas saat dipakai.", answer: "halus" },
    { original: "Air sungai mengalir dari hilir menuju hulu.", modified: "Air sungai mengalir dari hulu menuju hilir.", answer: "hilir" },
    { original: "Pasangan itu menikah setelah berpacaran dua tahun.", modified: "Pasangan itu berpisah setelah berpacaran dua tahun.", answer: "berpisah" },
    { original: "Penyanyi itu memiliki suara yang sumbang.", modified: "Penyanyi itu memiliki suara yang merdu.", answer: "merdu" },
    { original: "Dia membeli sayur dan buah di supermarket.", modified: "Dia menjual sayur dan buah di supermarket.", answer: "menjual" },
    { original: "Papan catur memiliki 64 kotak berwarna hitam dan putih.", modified: "Papan catur memiliki 32 kotak berwarna hitam dan putih.", answer: "32" },
    { original: "Senjata tradisional Indonesia disebut keris.", modified: "Senjata tradisional Indonesia disebut pedang.", answer: "pedang" },
    { original: "Film ini memenangkan banyak penghargaan internasional.", modified: "Film ini gagal memenangkan banyak penghargaan internasional.", answer: "gagal" },
    { original: "Kopi arabika memiliki rasa yang lebih pahit.", modified: "Kopi robusta memiliki rasa yang lebih pahit.", answer: "robusta" },
    { original: "Pencurian itu dilakukan pada siang hari.", modified: "Pencurian itu dilakukan pada malam hari.", answer: "malam" },
    { original: "Udara pagi ini berbau wangi bunga melati.", modified: "Udara pagi ini berbau sampah busuk.", answer: "sampah" },
    { original: "Kursi kayu itu sudah lapuk dan rusak.", modified: "Kursi plastik itu sudah lapuk dan rusak.", answer: "plastik" },
    { original: "Dia mengenakan celana panjang saat berenang.", modified: "Dia mengenakan celana pendek saat berenang.", answer: "pendek" },
    { original: "Perusahaan itu memproduksi mobil mewah.", modified: "Perusahaan itu memproduksi sepeda mewah.", answer: "sepeda" },
    { original: "Seseorang harus memiliki ijazah SMA untuk melamar.", modified: "Seseorang harus memiliki ijazah S1 untuk melamar.", answer: "s1" },
    { original: "Televisi menayangkan siaran langsung pertandingan bola.", modified: "Radio menayangkan siaran langsung pertandingan bola.", answer: "radio" },
    { original: "Air dan minyak tidak bisa bercampur menjadi satu.", modified: "Air dan cuka tidak bisa bercampur menjadi satu.", answer: "cuka" },
    { original: "Kompor gas digunakan untuk memasak makanan.", modified: "Kompor listrik digunakan untuk memasak makanan.", answer: "listrik" },
    { original: "Buku rekening bank berisi catatan transaksi.", modified: "Buku diary berisi catatan transaksi.", answer: "diary" },
    { original: "Pembalap itu mengendarai mobil dengan hati-hati.", modified: "Pembalap itu mengendarai mobil dengan ugal-ugalan.", answer: "ugal-ugalan" },
    { original: "Taman nasional itu melindungi hewan liar.", modified: "Kebun binatang itu melindungi hewan liar.", answer: "kebun" },
    { original: "Rumah sakit adalah tempat merawat orang sehat.", modified: "Rumah sakit adalah tempat merawat orang sakit.", answer: "sehat" },
    { original: "Dia lupa membawa paspor saat bepergian ke luar kota.", modified: "Dia lupa membawa paspor saat bepergian ke luar negeri.", answer: "kota" },
    { original: "Film dokumenter itu sangat menghibur.", modified: "Film komedi itu sangat menghibur.", answer: "komedi" },
    { original: "Warna lampu sepeda motor adalah merah dan putih.", modified: "Warna lampu sepeda motor adalah biru dan putih.", answer: "biru" },
    { original: "Semua orang berhak mendapatkan perlakuan adil.", modified: "Semua orang berhak mendapatkan perlakuan curang.", answer: "curang" },
    { original: "Lantai keramik itu terasa dingin di kaki.", modified: "Lantai kayu itu terasa dingin di kaki.", answer: "kayu" },
    { original: "Dia memakan apel yang rasanya manis.", modified: "Dia memakan jeruk yang rasanya manis.", answer: "jeruk" },
    { original: "Kamera itu membutuhkan baterai untuk menyala.", modified: "Kamera itu membutuhkan listrik untuk menyala.", answer: "listrik" },
    { original: "Garis khatulistiwa membagi bumi menjadi barat dan timur.", modified: "Garis khatulistiwa membagi bumi menjadi utara dan selatan.", answer: "utara" },
    { original: "Keluarga itu mengadakan piknik di taman kota.", modified: "Keluarga itu mengadakan piknik di kuburan.", answer: "kuburan" },
    { original: "Sepatu hak tinggi digunakan untuk mendaki gunung.", modified: "Sepatu hak tinggi digunakan untuk pesta dansa.", answer: "pesta" },
    { original: "Perusahaan itu membayar karyawannya dengan tunai.", modified: "Perusahaan itu membayar karyawannya dengan emas.", answer: "emas" },
    { original: "Dia membaca puisi dengan nada yang gembira.", modified: "Dia membaca puisi dengan nada yang sedih.", answer: "sedih" },
    { original: "Air terjun mengalir deras dari puncak bukit.", modified: "Air terjun mengalir pelan dari puncak bukit.", answer: "pelan" },
    { original: "Sistem alarm rumah berbunyi saat ada penyusup.", modified: "Sistem alarm rumah berbunyi saat ada tamu.", answer: "tamu" },
    { original: "Gorengan itu sangat berminyak dan tidak sehat.", modified: "Gorengan itu sangat kering dan tidak sehat.", answer: "kering" },
    { original: "Kain wol digunakan untuk membuat pakaian tipis.", modified: "Kain wol digunakan untuk membuat pakaian tebal.", answer: "tebal" },
    { original: "Pulau Jawa adalah pulau terkecil di Indonesia.", modified: "Pulau Jawa adalah pulau terpadat di Indonesia.", answer: "terkecil" },
    { original: "Lampu teplok menggunakan minyak tanah sebagai bahan bakar.", modified: "Lampu teplok menggunakan bensin sebagai bahan bakar.", answer: "bensin" },
    { original: "Anak kecil itu takut pada boneka beruang.", modified: "Anak kecil itu takut pada boneka hantu.", answer: "hantu" },
    { original: "Dia membeli rumah mewah di pinggiran kota.", modified: "Dia membeli rumah sederhana di pinggiran kota.", answer: "sederhana" },
    { original: "Jalanan berliku ini menuju ke ibu kota.", modified: "Jalanan lurus ini menuju ke ibu kota.", answer: "liku" },
    { original: "Kucing betina disebut jantan, kucing jantan disebut betina.", modified: "Kucing betina disebut betina, kucing jantan disebut betina.", answer: "jantan" },
    { original: "Dia menggunakan kartu kredit untuk membeli sayuran.", modified: "Dia menggunakan kartu debit untuk membeli sayuran.", answer: "debit" },
    { original: "Sepeda motor itu berwarna merah tua.", modified: "Sepeda motor itu berwarna merah muda.", answer: "muda" },
    { original: "Kelelawar tidur di siang hari dan aktif di malam hari.", modified: "Kelelawar tidur di malam hari dan aktif di siang hari.", answer: "malam" },
    { original: "Petugas itu berhasil menangkap pencuri motor.", modified: "Petugas itu berhasil melepaskan pencuri motor.", answer: "melepaskan" },
    { original: "Air laut di perairan dangkal terlihat biru.", modified: "Air laut di perairan dalam terlihat biru.", answer: "dangkal" },
    { original: "Semua orang setuju dengan keputusan ketua.", modified: "Semua orang menolak dengan keputusan ketua.", answer: "menolak" },
    { original: "Film kartun itu berisi kekerasan dan perkelahian.", modified: "Film kartun itu berisi edukasi dan perkelahian.", answer: "edukasi" },
    { original: "Perusahaan itu mengadakan pesta perpisahan.", modified: "Perusahaan itu mengadakan pesta pernikahan.", answer: "pernikahan" },
    { original: "Dia memegang remote TV dengan tangan kiri.", modified: "Dia memegang remote TV dengan tangan kanan.", answer: "kanan" },
    { original: "Lampu senter membutuhkan baterai untuk menyala.", modified: "Lampu senter membutuhkan air untuk menyala.", answer: "air" },
    { original: "Makanan cepat saji dikenal sangat sehat.", modified: "Makanan cepat saji dikenal sangat tidak sehat.", answer: "sehat" },
    { original: "Rumah itu memiliki atap datar dan luas.", modified: "Rumah itu memiliki atap runcing dan luas.", answer: "runcing" },
    { original: "Pelukis itu menjual karyanya dengan harga murah.", modified: "Pelukis itu menjual karyanya dengan harga mahal.", answer: "mahal" },
    { original: "Jarum jam bergerak dari kiri ke kanan.", modified: "Jarum jam bergerak dari kanan ke kiri.", answer: "kanan" },
    { original: "Pencemaran udara disebabkan oleh pabrik dan kendaraan.", modified: "Pencemaran udara disebabkan oleh pohon dan kendaraan.", answer: "pohon" },
    { original: "Dia mengenakan kaos tanpa lengan saat musim dingin.", modified: "Dia mengenakan kaos tanpa lengan saat musim panas.", answer: "dingin" },
    { original: "Bunga matahari selalu menghadap ke bulan.", modified: "Bunga matahari selalu menghadap ke matahari.", answer: "bulan" },
    { original: "Kain katun terasa panas saat digunakan.", modified: "Kain katun terasa sejuk saat digunakan.", answer: "panas" },
    { original: "Kamera itu memiliki fitur zoom yang terbatas.", modified: "Kamera itu memiliki fitur zoom yang tak terbatas.", answer: "tak" },
    { original: "Dia menyelesaikan tugasnya dalam waktu sehari.", modified: "Dia menyelesaikan tugasnya dalam waktu seminggu.", answer: "seminggu" },
    { original: "Sepeda ini memiliki rantai yang terbuat dari emas.", modified: "Sepeda ini memiliki rantai yang terbuat dari besi.", answer: "emas" },
    { original: "Warna air murni adalah hitam pekat.", modified: "Warna air murni adalah bening pekat.", answer: "hitam" },
    { original: "Ikan paus bernapas menggunakan insang.", modified: "Ikan paus bernapas menggunakan paru-paru.", answer: "insang" },
    { original: "Dia mendapatkan nilai A untuk semua mata kuliah.", modified: "Dia mendapatkan nilai C untuk semua mata kuliah.", answer: "c" },
    { original: "Kopi tanpa gula rasanya sangat manis.", modified: "Kopi tanpa gula rasanya sangat pahit.", answer: "manis" },
    { original: "Semua karyawan wajib mengikuti rapat harian.", modified: "Semua karyawan dilarang mengikuti rapat harian.", answer: "dilarang" },
    { original: "Udara di perkotaan sangat bersih dan segar.", modified: "Udara di perkotaan sangat kotor dan segar.", answer: "bersih" },
    { original: "Penyakit batuk disebabkan oleh alergi debu.", modified: "Penyakit pilek disebabkan oleh alergi debu.", answer: "pilek" },
    { original: "Kompor itu menggunakan bahan bakar arang.", modified: "Kompor itu menggunakan bahan bakar gas.", answer: "arang" },
    { original: "Matahari terbit dari arah barat.", modified: "Matahari terbit dari arah timur.", answer: "barat" },
    { original: "Dia menyukai film aksi yang penuh drama.", modified: "Dia menyukai film romantis yang penuh drama.", answer: "romantis" },
    { original: "Pohon bambu tumbuh dengan sangat cepat.", modified: "Pohon jati tumbuh dengan sangat cepat.", answer: "jati" },
    { original: "Mobil itu melaju di jalan tol dengan kecepatan 40 km/jam.", modified: "Mobil itu melaju di jalan tol dengan kecepatan 100 km/jam.", answer: "40" },
    { original: "Keluarga itu tinggal di rumah mewah nan megah.", modified: "Keluarga itu tinggal di apartemen mewah nan megah.", answer: "apartemen" },
    { original: "Permukaan air danau terlihat bergelombang.", modified: "Permukaan air danau terlihat tenang.", answer: "bergelombang" },
    { original: "Baju renang terbuat dari bahan yang tidak menyerap air.", modified: "Baju renang terbuat dari bahan yang menyerap air.", answer: "menyerap" },
    { original: "Kopi yang terlalu panas dapat menyebabkan luka bakar.", modified: "Kopi yang terlalu dingin dapat menyebabkan luka bakar.", answer: "dingin" },
    { original: "Dia membaca koran setiap malam sebelum tidur.", modified: "Dia membaca koran setiap pagi sebelum tidur.", answer: "malam" },
    { original: "Air es mencair lebih cepat daripada air panas.", modified: "Air panas mencair lebih cepat daripada air es.", answer: "es" },
    { original: "Siswa sekolah dasar mulai belajar membaca pada usia 10 tahun.", modified: "Siswa sekolah dasar mulai belajar membaca pada usia 6 tahun.", answer: "10" },
    { original: "Ibu memasak sup dengan rasa yang sangat pahit.", modified: "Ibu memasak sup dengan rasa yang sangat manis.", answer: "manis" },
    { original: "Meja itu terbuat dari kayu dan kaca.", modified: "Meja itu terbuat dari batu dan kaca.", answer: "batu" },
    { original: "Dia mencuci pakaian menggunakan mesin cuci.", modified: "Dia mencuci pakaian menggunakan tangan.", answer: "tangan" },
    { original: "Buku ensiklopedia berisi informasi yang tidak akurat.", modified: "Buku ensiklopedia berisi informasi yang akurat.", answer: "tidak" },
    { original: "Pekerja itu menyelesaikan proyek dalam tiga tahun.", modified: "Pekerja itu menyelesaikan proyek dalam tiga bulan.", answer: "tahun" },
    { original: "Udara di pantai terasa kering dan panas.", modified: "Udara di pantai terasa lembap dan panas.", answer: "kering" },
    { original: "Kamera analog menghasilkan foto berwarna.", modified: "Kamera digital menghasilkan foto berwarna.", answer: "analog" },
    { original: "Lidah buaya dikenal untuk mengobati luka bakar.", modified: "Lidah kucing dikenal untuk mengobati luka bakar.", answer: "kucing" },
    { original: "Kucing adalah pemangsa tikus yang malas.", modified: "Kucing adalah pemangsa tikus yang lincah.", answer: "malas" },
    { original: "Bunga anggrek mekar di musim dingin.", modified: "Bunga anggrek mekar di musim panas.", answer: "dingin" },
    { original: "Dia menonton film komedi yang tidak lucu sama sekali.", modified: "Dia menonton film horor yang tidak lucu sama sekali.", answer: "horor" },
    { original: "Minuman soda yang manis tidak baik untuk gigi.", modified: "Minuman soda yang pahit tidak baik untuk gigi.", answer: "pahit" },
    { original: "Pelukis itu menggunakan cat minyak untuk karya abstrak.", modified: "Pelukis itu menggunakan cat air untuk karya abstrak.", answer: "air" },
    { original: "Sistem rem mobil berfungsi untuk mempercepat laju.", modified: "Sistem rem mobil berfungsi untuk memperlambat laju.", answer: "mempercepat" },
    { original: "Pakaian sutra harus dicuci dengan air hangat.", modified: "Pakaian sutra harus dicuci dengan air dingin.", answer: "hangat" },
    { original: "Ikan mas hidup di air asin di lautan.", modified: "Ikan mas hidup di air tawar di lautan.", answer: "asin" },
    { original: "Dia memegang remote AC dengan tangan kanan.", modified: "Dia memegang remote AC dengan tangan kiri.", answer: "kiri" },
    { original: "Rumah itu dicat dengan warna cerah dan mencolok.", modified: "Rumah itu dicat dengan warna gelap dan mencolok.", answer: "gelap" },
    { original: "Anjing menggonggong saat melihat kucing.", modified: "Anjing mendesis saat melihat kucing.", answer: "mendesis" },
    { original: "Pohon pisang menghasilkan buah dalam setahun.", modified: "Pohon mangga menghasilkan buah dalam setahun.", answer: "pisang" },
    { original: "Udara di ruangan ber-AC terasa panas dan kering.", modified: "Udara di ruangan ber-AC terasa dingin dan kering.", answer: "panas" },
    { original: "Dia memakai topi saat bermain di dalam rumah.", modified: "Dia memakai topi saat bermain di luar rumah.", answer: "dalam" },
    { original: "Harga tiket bioskop sangat murah hari ini.", modified: "Harga tiket konser sangat murah hari ini.", answer: "bioskop" },
    { original: "Dokter itu meresepkan vitamin C untuk pileknya.", modified: "Dokter itu meresepkan antibiotik untuk pileknya.", answer: "antibiotik" },
    { original: "Pakaian kotor harus segera dicuci di mesin.", modified: "Pakaian bersih harus segera dicuci di mesin.", answer: "bersih" },
    { original: "Semua orang setuju untuk melakukan protes.", modified: "Semua orang menolak untuk melakukan protes.", answer: "menolak" },
    { original: "Dia membaca buku komik di perpustakaan.", modified: "Dia membaca buku pelajaran di perpustakaan.", answer: "komik" },
    { original: "Warna sepatu olahraga itu hitam dan merah.", modified: "Warna sepatu olahraga itu hitam dan biru.", answer: "biru" },
    { original: "Kain batik dibuat dengan cara dicetak digital.", modified: "Kain batik dibuat dengan cara ditulis tangan.", answer: "dicetak" },
    { original: "Pelajar wajib membawa pensil dan penghapus.", modified: "Pelajar wajib membawa spidol dan penghapus.", answer: "spidol" },
    { original: "Gajah memiliki belalai yang pendek.", modified: "Gajah memiliki belalai yang panjang.", answer: "pendek" },
    { original: "Sinar ultraviolet dari matahari aman bagi kulit.", modified: "Sinar ultraviolet dari matahari berbahaya bagi kulit.", answer: "aman" }
];

let currentPair;

function initializeDifference() {
    currentPair = sentencePairs[Math.floor(Math.random() * sentencePairs.length)];
    
    if (document.getElementById('original-sentence')) document.getElementById('original-sentence').textContent = currentPair.original;
    if (document.getElementById('modified-sentence')) document.getElementById('modified-sentence').textContent = currentPair.modified;
    if (document.getElementById('difference-input')) document.getElementById('difference-input').value = '';
    if (document.getElementById('difference-message')) document.getElementById('difference-message').textContent = '';
    if (document.getElementById('difference-message')) document.getElementById('difference-message').className = '';
}

function checkDifference() {
    const inputElement = document.getElementById('difference-input');
    const messageElement = document.getElementById('difference-message');
    if (!inputElement || !messageElement) return;

    const guess = inputElement.value.trim().toLowerCase();
    
    if (guess === currentPair.answer.toLowerCase()) {
        messageElement.textContent = "🎉 BENAR! Itu adalah kata yang hilang/berbeda.";
        messageElement.className = 'win';
    } else {
        messageElement.textContent = `❌ SALAH. Jawaban yang benar adalah "${currentPair.answer}".`;
        messageElement.className = 'lose';
    }
}


// ====================================
// 9. LOGIKA GAME SIMPLE MATH QUIZ (200 SOAL)
// ====================================

const mathProblems_MQ = [
    { problem: "15 + 8", answer: 23 }, { problem: "30 - 12", answer: 18 }, { problem: "7 × 9", answer: 63 }, { problem: "48 ÷ 6", answer: 8 }, 
    { problem: "5 + (10 × 2)", answer: 25 }, { problem: "50 - 15 - 5", answer: 30 }, { problem: "12 × 12", answer: 144 }, { problem: "100 - 45", answer: 55 }, 
    { problem: "18 + 19", answer: 37 }, { problem: "(25 + 5) ÷ 3", answer: 10 }, { problem: "9 × 8 + 4", answer: 76 }, { problem: "60 ÷ 5 - 2", answer: 10 },
    { problem: "105 + 95", answer: 200 }, { problem: "250 - 75", answer: 175 }, { problem: "13 × 5", answer: 65 }, { problem: "81 ÷ 9", answer: 9 },
    { problem: "11 + 17 + 5", answer: 33 }, { problem: "4 × 15 - 10", answer: 50 }, { problem: "200 - (30 + 70)", answer: 100 }, { problem: "72 ÷ 8 + 1", answer: 10 },
    { problem: "35 + 45", answer: 80 }, { problem: "92 - 16", answer: 76 }, { problem: "11 × 7", answer: 77 }, { problem: "64 ÷ 8", answer: 8 },
    { problem: "10 + 20 × 3", answer: 70 }, { problem: "88 - 44 + 2", answer: 46 }, { problem: "5 × 14", answer: 70 }, { problem: "150 ÷ 3", answer: 50 },
    { problem: "49 + 21", answer: 70 }, { problem: "121 ÷ 11", answer: 11 }, { problem: "15 × 6 - 5", answer: 85 }, { problem: "90 - 4 × 10", answer: 50 },
    { problem: "28 + 36", answer: 64 }, { problem: "55 - 27", answer: 28 }, { problem: "6 × 13", answer: 78 }, { problem: "108 ÷ 12", answer: 9 },
    { problem: "7 + 8 × 6", answer: 55 }, { problem: "99 - 33 - 11", answer: 55 }, { problem: "14 × 4", answer: 56 }, { problem: "75 ÷ 5 + 5", answer: 20 },
    { problem: "43 + 57", answer: 100 }, { problem: "160 - 85", answer: 75 }, { problem: "15 × 3", answer: 45 }, { problem: "42 ÷ 7", answer: 6 },
    { problem: "9 × 9 + 9", answer: 90 }, { problem: "1000 - 500 + 1", answer: 501 }, { problem: "2 × 2 × 2 × 2", answer: 16 }, { problem: "45 ÷ 9 + 5", answer: 10 },
    { problem: "1 + 2 + 3 + 4", answer: 10 }, { problem: "50 - 25 + 5", answer: 30 }, { problem: "10 × 10 - 50", answer: 50 }, { problem: "100 ÷ 10 - 5", answer: 5 },
    { problem: "12 + 13 + 14", answer: 39 }, { problem: "5 × (8 + 3)", answer: 55 }, { problem: "300 - 150 - 50", answer: 100 }, { problem: "144 ÷ 12 + 0", answer: 12 },
    { problem: "70 + 30 - 5", answer: 95 }, { problem: "110 - 55", answer: 55 }, { problem: "4 × 25", answer: 100 }, { problem: "96 ÷ 8", answer: 12 },
    { problem: "10 + 10 × 10", answer: 110 }, { problem: "50 - 10 × 2", answer: 30 }, { problem: "15 × 7", answer: 105 }, { problem: "21 ÷ 3 + 4", answer: 11 },
    { problem: "33 + 44", answer: 77 }, { problem: "80 - 32", answer: 48 }, { problem: "16 × 5", answer: 80 }, { problem: "63 ÷ 9", answer: 7 },
    { problem: "12 + 12 - 12", answer: 12 }, { problem: "20 × 4 + 5", answer: 85 }, { problem: "90 - 20 - 5", answer: 65 }, { problem: "100 ÷ 4", answer: 25 },
    { problem: "55 + 55", answer: 110 }, { problem: "19 × 3", answer: 57 }, { problem: "77 - 22 + 1", answer: 56 }, { problem: "36 ÷ 6 - 6", answer: 0 },
    { problem: "17 + 13 + 20", answer: 50 }, { problem: "2 × (20 + 5)", answer: 50 }, { problem: "400 - 200 - 50", answer: 150 }, { problem: "13 × 1 + 5", answer: 18 },
    { problem: "6 × 8 - 8", answer: 40 }, { problem: "54 ÷ 9 + 6", answer: 12 }, { problem: "10 + 90 - 50", answer: 50 }, { problem: "10 × 11 + 10", answer: 120 },
    { problem: "80 - 15 + 5", answer: 70 }, { problem: "22 + 22 + 22", answer: 66 }, { problem: "17 × 4", answer: 68 }, { problem: "84 ÷ 7", answer: 12 },
    { problem: "5 + 5 × 5", answer: 30 }, { problem: "75 - 3 × 5", answer: 60 }, { problem: "150 + 50 - 20", answer: 180 }, { problem: "40 ÷ 8 + 15", answer: 20 },
    { problem: "19 + 25", answer: 44 }, { problem: "99 - 50", answer: 49 }, { problem: "14 × 8", answer: 112 }, { problem: "132 ÷ 11", answer: 12 },
    { problem: "3 × (100 - 90)", answer: 30 }, { problem: "111 + 11", answer: 122 }, { problem: "70 - 7 × 7", answer: 21 }, { problem: "12 × 5 + 5", answer: 65 },
    { problem: "25 + 75 + 10", answer: 110 }, { problem: "6 × 6 × 2", answer: 72 }, { problem: "85 - 15 - 5", answer: 65 }, { problem: "15 × 8", answer: 120 },
    { problem: "28 ÷ 4 + 7", answer: 14 }, { problem: "40 + 60 - 25", answer: 75 }, { problem: "13 × 7", answer: 91 }, { problem: "180 ÷ 2", answer: 90 },
    { problem: "1 + (10 × 10)", answer: 101 }, { problem: "200 - 50 + 10", answer: 160 }, { problem: "11 × 11 + 1", answer: 122 }, { problem: "50 ÷ 5 + 50", answer: 60 },
    { problem: "3 + 3 + 3 + 3", answer: 12 }, { problem: "70 - 10 × 3", answer: 40 }, { problem: "16 × 6", answer: 96 }, { problem: "56 ÷ 7", answer: 8 },
    { problem: "5 × (12 - 2)", answer: 50 }, { problem: "82 + 18 - 50", answer: 50 }, { problem: "9 × 11", answer: 99 }, { problem: "60 ÷ 12 + 5", answer: 10 },
    { problem: "44 + 56", answer: 100 }, { problem: "120 - 45", answer: 75 }, { problem: "25 × 4 - 1", answer: 99 }, { problem: "144 ÷ 6", answer: 24 },
    { problem: "15 + 16 + 17", answer: 48 }, { problem: "8 × 8 + 16", answer: 80 }, { problem: "700 - 350", answer: 350 }, { problem: "99 ÷ 9 - 1", answer: 10 },
    { problem: "3 × 3 × 3", answer: 27 }, { problem: "100 - (10 × 5)", answer: 50 }, { problem: "12 × 9", answer: 108 }, { problem: "30 ÷ 5 + 10", answer: 16 },
    { problem: "88 + 12 + 10", answer: 110 }, { problem: "10 × (15 - 5)", answer: 100 }, { problem: "50 - 5 - 5", answer: 40 }, { problem: "125 ÷ 5", answer: 25 },
    { problem: "23 + 27", answer: 50 }, { problem: "75 - 10 - 5", answer: 60 }, { problem: "18 × 5", answer: 90 }, { problem: "104 ÷ 8", answer: 13 },
    { problem: "2 × 3 + 4 × 5", answer: 26 }, { problem: "60 - (5 × 10)", answer: 10 }, { problem: "15 × 10 + 5", answer: 155 }, { problem: "48 ÷ 4 - 2", answer: 10 },
    { problem: "9 + 9 + 9 + 9", answer: 36 }, { problem: "150 - 50 - 10", answer: 90 }, { problem: "14 × 7", answer: 98 }, { problem: "300 ÷ 3", answer: 100 },
    { problem: "100 + 100 + 100", answer: 300 }, { problem: "5 × (20 - 10)", answer: 50 }, { problem: "11 × 12", answer: 132 }, { problem: "77 ÷ 7 + 3", answer: 14 },
    { problem: "21 + 22 + 23", answer: 66 }, { problem: "95 - 45", answer: 50 }, { problem: "8 × 15", answer: 120 }, { problem: "100 - 10 × 5", answer: 50 },
    { problem: "35 + 65 + 10", answer: 110 }, { problem: "10 × 12 + 1", answer: 121 }, { problem: "500 - 250", answer: 250 }, { problem: "91 ÷ 7", answer: 13 },
    { problem: "6 × 7 + 8", answer: 50 }, { problem: "130 - 30 + 10", answer: 110 }, { problem: "17 × 5", answer: 85 }, { problem: "80 ÷ 16", answer: 5 },
    { problem: "14 + 14 + 14", answer: 42 }, { problem: "100 - (20 × 2)", answer: 60 }, { problem: "18 × 6", answer: 108 }, { problem: "40 ÷ 5 - 8", answer: 0 },
    { problem: "4 × 4 × 4", answer: 64 }, { problem: "11 + 11 + 11", answer: 33 }, { problem: "15 × 9", answer: 135 }, { problem: "128 ÷ 8", answer: 16 },
    { problem: "50 + 50 + 50", answer: 150 }, { problem: "77 - 7 + 7", answer: 77 }, { problem: "19 × 6", answer: 114 }, { problem: "169 ÷ 13", answer: 13 },
    { problem: "10 + 20 + 30", answer: 60 }, { problem: "5 × 9 + 5", answer: 50 }, { problem: "90 - 45 - 5", answer: 40 }, { problem: "18 + 12 + 10", answer: 40 },
    { problem: "2 × (50 + 10)", answer: 120 }, { problem: "700 ÷ 7", answer: 100 }, { problem: "24 + 48", answer: 72 }, { problem: "150 - 75 + 25", answer: 100 },
    { problem: "4 × 11 - 4", answer: 40 }, { problem: "1000 ÷ 100", answer: 10 }, { problem: "16 × 7", answer: 112 }, { problem: "33 + 33 + 34", answer: 100 },
    { problem: "6 × (10 - 4)", answer: 36 }, { problem: "50 + 50 + 5", answer: 105 }, { problem: "11 × 4 + 6", answer: 50 }, { problem: "49 ÷ 7 + 3", answer: 10 },
    { problem: "105 - 5 - 10", answer: 90 }, { problem: "20 × 6 - 20", answer: 100 }, { problem: "250 - 50 + 10", answer: 210 }, { problem: "13 × 11", answer: 143 },
    { problem: "5 + 10 + 15 + 20", answer: 50 }, { problem: "140 ÷ 10", answer: 14 }, { problem: "7 × 12 - 4", answer: 80 }, { problem: "92 - 12 - 10", answer: 70 },
    { problem: "10 + 5 + 2", answer: 17 }, { problem: "30 - 3 × 5", answer: 15 }, { problem: "10 × 15 - 50", answer: 100 }, { problem: "80 ÷ 4 - 10", answer: 10 },
    { problem: "1 + 1 + 1 + 1", answer: 4 }, { problem: "5 × 20 + 1", answer: 101 }, { problem: "44 - 11 - 11", answer: 22 }, { problem: "10 × 8 - 5", answer: 75 },
    { problem: "13 + 13 + 13", answer: 39 }, { problem: "25 × 3 + 25", answer: 100 }, { problem: "99 - 49", answer: 50 }, { problem: "15 × 4", answer: 60 },
    { problem: "42 ÷ 6 + 3", answer: 10 }, { problem: "8 × 11 + 12", answer: 100 }, { problem: "180 - 90 - 10", answer: 80 }, { problem: "16 × 9", answer: 144 },
    { problem: "55 + 45 + 5", answer: 105 }, { problem: "100 ÷ 5 - 10", answer: 10 }, { problem: "20 × 5 + 20", answer: 120 }, { problem: "115 - 15 + 5", answer: 105 },
    { problem: "7 × (7 - 2)", answer: 35 }, { problem: "80 + 20 + 10", answer: 110 }, { problem: "14 × 6", answer: 84 }, { problem: "66 ÷ 6", answer: 11 },
    { problem: "30 + 70 - 10", answer: 90 }, { problem: "10 × 15 + 15", answer: 165 }, { problem: "40 - 8 × 5", answer: 0 }, { problem: "144 ÷ 9", answer: 16 },
    { problem: "2 + 4 + 6 + 8", answer: 20 }, { problem: "13 × 8", answer: 104 }, { problem: "250 - 100 - 50", answer: 100 }, { problem: "5 × 16", answer: 80 },
    { problem: "100 + 50 - 50", answer: 100 }, { problem: "88 ÷ 11 + 2", answer: 10 }, { problem: "10 × 12 - 20", answer: 100 }, { problem: "19 + 21 + 10", answer: 50 },
    { problem: "4 × 9 + 4", answer: 40 }, { problem: "175 - 75", answer: 100 }, { problem: "7 × 13", answer: 91 }, { problem: "90 ÷ 5", answer: 18 },
    { problem: "50 - (4 × 10)", answer: 10 }, { problem: "6 + 6 + 6 + 6", answer: 24 }, { problem: "10 × 10 + 10", answer: 110 }, { problem: "56 ÷ 8 - 7", answer: 0 },
    { problem: "12 × 4 + 2", answer: 50 }, { problem: "33 - 13 - 5", answer: 15 }, { problem: "18 × 4", answer: 72 }, { problem: "120 ÷ 6", answer: 20 },
    { problem: "25 + 25 + 25", answer: 75 }, { problem: "8 × 9 - 2", answer: 70 }, { problem: "98 - 48", answer: 50 }, { problem: "20 × 4 - 10", answer: 70 },
    { problem: "13 + 14 + 5", answer: 32 }, { problem: "100 - (10 × 4)", answer: 60 }, { problem: "72 ÷ 6 + 8", answer: 20 }, { problem: "15 × 5 - 5", answer: 70 },
    { problem: "25 + 50 + 25", answer: 100 }, { problem: "11 × 8 + 2", answer: 90 }, { problem: "180 ÷ 9 + 10", answer: 30 }, { problem: "5 × 5 × 5", answer: 125 },
    { problem: "40 - 20 - 5", answer: 15 }, { problem: "19 + 11 + 50", answer: 80 }, { problem: "14 × 9", answer: 126 }, { problem: "36 ÷ 3 - 2", answer: 10 },
    { problem: "12 + 8 + 5", answer: 25 }, { problem: "2 × (30 - 10)", answer: 40 }, { problem: "10 × 9 + 10", answer: 100 }, { problem: "500 ÷ 50", answer: 10 },
    { problem: "7 × 7 + 1", answer: 50 }, { problem: "12 × 10 - 20", answer: 100 }, { problem: "100 - 90 + 5", answer: 15 }, { problem: "20 × 5 + 10", answer: 110 },
    { problem: "40 + 40 - 10", answer: 70 }, { problem: "13 × 3", answer: 39 }, { problem: "144 ÷ 12 - 2", answer: 10 }, { problem: "55 - 5 - 5", answer: 45 },
    { problem: "6 × 14", answer: 84 }, { problem: "100 - 50 - 25", answer: 25 }, { problem: "9 × 10 + 10", answer: 100 }, { problem: "88 + 12 - 5", answer: 95 },
    { problem: "15 × 11", answer: 165 }, { problem: "4 × 13", answer: 52 }, { problem: "300 - 100 + 10", answer: 210 }, { problem: "108 ÷ 9 + 8", answer: 20 },
    { problem: "20 + 20 + 20", answer: 60 }, { problem: "5 × (11 - 1)", answer: 50 }, { problem: "60 - 10 - 5", answer: 45 }, { problem: "16 × 8", answer: 128 },
    { problem: "14 + 16 + 20", answer: 50 }, { problem: "100 ÷ 2 + 50", answer: 100 }, { problem: "7 × 6 + 8", answer: 50 }, { problem: "96 - 46", answer: 50 },
    { problem: "5 × 15 - 5", answer: 70 }, { problem: "121 - 11 + 10", answer: 120 }, { problem: "35 + 35 + 5", answer: 75 }, { problem: "17 × 6", answer: 102 },
    { problem: "72 ÷ 9 - 3", answer: 5 }, { problem: "25 + 5 + 20", answer: 50 }, { problem: "4 × (10 + 5)", answer: 60 }, { problem: "200 - 100 - 1", answer: 99 },
    { problem: "8 × 12 - 6", answer: 90 }, { problem: "100 ÷ 10 + 90", answer: 100 }, { problem: "13 × 9", answer: 117 }, { problem: "10 + 20 + 70", answer: 100 },
    { problem: "5 × 13 + 5", answer: 70 }, { problem: "11 × 14", answer: 154 }, { problem: "40 - 4 × 4", answer: 24 }, { problem: "160 ÷ 10", answer: 16 },
    { problem: "6 + 7 + 8 + 9", answer: 30 }, { problem: "200 - 100 - 10", answer: 90 }, { problem: "15 × 12", answer: 180 }, { problem: "99 + 11", answer: 110 },
    { problem: "18 + 18 + 4", answer: 40 }, { problem: "8 × (10 - 5)", answer: 40 }, { problem: "75 - 5 - 10", answer: 60 }, { problem: "64 ÷ 4", answer: 16 },
    { problem: "10 × 7 + 30", answer: 100 }, { problem: "500 + 100 - 50", answer: 550 }, { problem: "17 × 7", answer: 119 }, { problem: "80 ÷ 5 - 6", answer: 10 },
    { problem: "12 + 18 + 20", answer: 50 }, { problem: "19 × 5", answer: 95 }, { problem: "90 - 30 + 10", answer: 70 }, { problem: "15 × 10 - 10", answer: 140 },
    { problem: "45 ÷ 5 + 1", answer: 10 }, { problem: "6 × 17", answer: 102 }, { problem: "100 - 25 - 25", answer: 50 }, { problem: "140 ÷ 7", answer: 20 },
    { problem: "11 + 11 + 28", answer: 50 }, { problem: "7 × 15", answer: 105 }, { problem: "60 - (2 × 10)", answer: 40 }, { problem: "12 × 13", answer: 156 }
];

let currentProblem_MQ;
let score_MQ = 0;

function initializeMathQuiz() {
    // Memilih soal acak dari 200 soal
    currentProblem_MQ = mathProblems_MQ[Math.floor(Math.random() * mathProblems_MQ.length)];
    
    if (document.getElementById('math-problem')) document.getElementById('math-problem').textContent = currentProblem_MQ.problem + " = ?";
    if (document.getElementById('math-answer-input')) document.getElementById('math-answer-input').value = '';
    if (document.getElementById('math-message')) document.getElementById('math-message').textContent = '';
    if (document.getElementById('math-message')) document.getElementById('math-message').className = '';
    if (document.getElementById('math-score')) document.getElementById('math-score').textContent = `Skor: ${score_MQ}`;
}

function checkMathAnswer() {
    const inputElement = document.getElementById('math-answer-input');
    const messageElement = document.getElementById('math-message');
    if (!inputElement || !messageElement || !currentProblem_MQ) return;

    const guess = parseInt(inputElement.value);

    if (isNaN(guess)) {
        messageElement.textContent = "⚠️ Masukkan angka.";
        messageElement.className = 'error';
        return;
    }
    
    if (guess === currentProblem_MQ.answer) {
        messageElement.textContent = "🎉 BENAR! Soal baru dimuat.";
        messageElement.className = 'win';
        score_MQ++;
    } else {
        messageElement.textContent = `❌ SALAH. Jawaban yang benar adalah ${currentProblem_MQ.answer}. Skor direset.`;
        messageElement.className = 'lose';
        score_MQ = 0;
    }

    if (document.getElementById('math-score')) document.getElementById('math-score').textContent = `Skor: ${score_MQ}`;
    
    setTimeout(initializeMathQuiz, 1500); 
}

function checkMathEnter(event) {
    if (event.key === 'Enter') {
        checkMathAnswer();
    }
}


// ====================================
// 10. LOGIKA GAME RIDDLE (200 SOAL)
// ====================================

const riddles = [
    { question: "Saya selalu ada di depan, tetapi tidak pernah datang. Apakah saya?", answer: "masa depan" },
    { question: "Saya punya kota, tetapi tidak punya rumah. Saya punya gunung, tetapi tidak punya pohon. Saya punya air, tetapi tidak punya ikan. Apakah saya?", answer: "peta" },
    { question: "Semakin banyak diambil, semakin banyak yang tersisa. Apakah itu?", answer: "lubang" },
    { question: "Aku punya kepala dan ekor, tapi tidak punya badan. Apakah aku?", answer: "koin" },
    { question: "Aku punya gigi, tapi tidak bisa makan. Apakah aku?", answer: "sisir" },
    { question: "Aku punya leher, tapi tidak punya kepala. Apakah aku?", answer: "baju" },
    { question: "Benda apa yang lebih banyak dipegang daripada dibeli?", answer: "tangan" },
    { question: "Apa yang bisa bicara tanpa mulut dan mendengar tanpa telinga?", answer: "telepon" },
    { question: "Punya sayap, tapi tidak bisa terbang. Punya mata, tapi tidak bisa melihat. Apakah aku?", answer: "jendela" },
    { question: "Apa yang selalu naik, tapi tidak pernah turun?", answer: "usia" },
    { question: "Aku selalu lapar dan harus diberi makan. Jika tidak, aku akan mati. Apakah aku?", answer: "api" },
    { question: "Aku datang malam hari, tapi aku hilang di pagi hari. Apakah aku?", answer: "bintang" },
    { question: "Apa yang bisa dipecahkan, tetapi tidak bisa dipegang?", answer: "janji" },
    { question: "Aku memiliki banyak kunci, tetapi tidak bisa membuka pintu. Apakah aku?", answer: "keyboard" },
    { question: "Aku punya jari, tapi tidak bisa menggenggam. Apakah aku?", answer: "sarung tangan" },
    { question: "Aku punya mahkota, tapi bukan raja. Aku punya buah, tapi bukan pohon. Apakah aku?", answer: "nanas" },
    { question: "Benda apa yang jika dilihat dari jauh berbentuk lingkaran, tapi jika dilihat dari dekat berbentuk balok?", answer: "sumur" },
    { question: "Aku ada di ujung dunia dan akhir zaman. Apakah aku?", answer: "huruf a" },
    { question: "Aku selalu basah saat mengeringkan. Apakah aku?", answer: "handuk" },
    { question: "Aku bergerak tanpa kaki, aku terbang tanpa sayap. Apakah aku?", answer: "angin" },
    { question: "Apa yang memiliki mata tetapi tidak bisa melihat?", answer: "jarum" },
    { question: "Aku selalu berputar-putar, tapi tidak pernah pusing. Apakah aku?", answer: "kipas" },
    { question: "Jika kamu memilikiku, kamu ingin membagikanku. Jika kamu membagikanku, kamu tidak memilikiku lagi. Apakah aku?", answer: "rahasia" },
    { question: "Aku selalu mendengarkan tanpa punya telinga. Aku selalu menjawab tanpa punya mulut. Apakah aku?", answer: "gema" },
    { question: "Semakin panas aku, semakin dingin aku. Apakah aku?", answer: "es batu" },
    { question: "Aku diangkat lalu dijatuhkan. Siapakah aku?", answer: "bendera" },
    { question: "Aku punya kota, tetapi tidak punya rumah. Aku punya sungai, tetapi tidak punya air. Apakah aku?", answer: "peta" },
    { question: "Aku selalu menunjuk ke atas, tetapi tidak pernah bergerak. Apakah aku?", answer: "gunung" },
    { question: "Benda apa yang kalau dilempar malah kembali?", answer: "bola" },
    { question: "Aku tidak pernah tidur, tapi aku punya ranjang. Apakah aku?", answer: "sungai" },
    { question: "Apa yang datang satu per satu, tapi tidak pernah habis?", answer: "hari" },
    { question: "Aku punya lidah, tapi tidak bisa bicara. Apakah aku?", answer: "sepatu" },
    { question: "Aku bisa membuatmu menangis, tapi aku tidak sedih. Aku bisa membuatmu tertawa, tapi aku tidak lucu. Apakah aku?", answer: "cerita" },
    { question: "Aku punya banyak cerita, tapi tidak bisa bicara. Apakah aku?", answer: "buku" },
    { question: "Apa yang bisa masuk dan keluar tanpa membuka pintu?", answer: "cahaya" },
    { question: "Aku ada di dalam air, tapi tidak pernah basah. Apakah aku?", answer: "bayangan" },
    { question: "Aku punya empat kaki, tapi tidak bisa berjalan. Apakah aku?", answer: "meja" },
    { question: "Aku selalu mengejarmu, tapi tidak pernah bisa kamu tangkap. Apakah aku?", answer: "bayangan" },
    { question: "Aku punya kunci, tapi tidak punya pintu. Aku punya spasi, tapi tidak punya ruang. Apakah aku?", answer: "keyboard" },
    { question: "Aku selalu berubah bentuk, tapi jumlahku tidak pernah berkurang. Apakah aku?", answer: "air" },
    { question: "Aku selalu di depan, tapi aku tidak terlihat. Apakah aku?", answer: "masa depan" },
    { question: "Apa yang bisa kamu masukkan ke dalam ember, tapi tidak akan pernah penuh?", answer: "lubang" },
    { question: "Aku selalu basah, tapi aku tidak pernah mandi. Apakah aku?", answer: "lidah" },
    { question: "Aku punya duri, tapi bukan kaktus. Aku punya bunga, tapi bukan mawar. Apakah aku?", answer: "duren" },
    { question: "Aku bisa terbang tanpa sayap, aku bisa menangis tanpa mata. Apakah aku?", answer: "awan" },
    { question: "Aku bisa mendengar tanpa punya telinga. Aku bisa melihat tanpa punya mata. Aku ada di setiap rumah. Apakah aku?", answer: "tv" },
    { question: "Aku selalu mengikuti, tetapi tidak pernah dekat. Apakah aku?", answer: "bayangan" },
    { question: "Aku punya jarum, tapi bukan penjahit. Apakah aku?", answer: "jam" },
    { question: "Aku punya roda, tapi tidak pernah bergerak. Apakah aku?", answer: "gerobak" },
    { question: "Aku ada di tengah-tengah air. Apakah aku?", answer: "huruf i" },
    { question: "Apa yang kamu lempar saat membutuhkannya?", answer: "jangkar" },
    { question: "Aku selalu menjadi yang terakhir, tapi aku tidak pernah selesai. Apakah aku?", answer: "huruf t" },
    { question: "Benda apa yang jika dipegang ringan, tapi jika dilempar sakit?", answer: "bola" },
    { question: "Aku tidak bisa berbicara, tapi aku bisa menceritakan kisah. Apakah aku?", answer: "foto" },
    { question: "Aku punya wajah, tapi tidak punya kepala. Apakah aku?", answer: "jam dinding" },
    { question: "Aku punya ekor, tapi tidak punya kepala. Apakah aku?", answer: "komet" },
    { question: "Aku bisa berlari, tapi tidak bisa berjalan. Apakah aku?", answer: "air" },
    { question: "Aku bisa pecah hanya dengan satu kata. Apakah aku?", answer: "keheningan" },
    { question: "Aku punya banyak mata, tapi tidak bisa melihat. Apakah aku?", answer: "kentang" },
    { question: "Aku selalu kurus, tapi tidak pernah diet. Apakah aku?", answer: "bayangan" },
    { question: "Aku tidak pernah bertanya, tapi selalu dijawab. Apakah aku?", answer: "telepon" },
    { question: "Aku terbang saat lahir, aku berbaring saat hidup, aku berlari saat mati. Apakah aku?", answer: "salju" },
    { question: "Aku datang diam-diam, aku pergi dengan cepat. Aku mengubah segalanya, tapi kamu tidak bisa melihatku. Apakah aku?", answer: "waktu" },
    { question: "Aku selalu di depan, tapi kamu melihatku dari belakang. Apakah aku?", answer: "punggung" },
    { question: "Apa yang bisa kamu temukan di tengah-tengah malam?", answer: "huruf l" },
    { question: "Aku punya gigi, tapi tidak punya mulut. Apakah aku?", answer: "gergaji" },
    { question: "Aku penuh dengan lubang, tapi masih bisa menampung air. Apakah aku?", answer: "spons" },
    { question: "Aku ada di akhir minggu, tapi bukan akhir bulan. Apakah aku?", answer: "huruf u" },
    { question: "Aku datang dan pergi, tapi tidak pernah bergerak. Apakah aku?", answer: "gelombang" },
    { question: "Aku ada di dalam lemari, tapi tidak pernah dipakai. Apakah aku?", answer: "debu" },
    { question: "Aku selalu lapar, tapi aku tidak pernah makan. Apakah aku?", answer: "dompet" },
    { question: "Aku selalu di atas, tapi tidak pernah jatuh. Apakah aku?", answer: "langit" },
    { question: "Aku bisa mengisi ruangan, tapi aku tidak punya massa. Apakah aku?", answer: "cahaya" },
    { question: "Aku punya jubah, tapi tidak pernah pakai. Aku punya kepala, tapi tidak punya badan. Apakah aku?", answer: "pena" },
    { question: "Aku selalu bergerak, tapi tidak punya kaki. Aku selalu basah, tapi tidak punya air. Apakah aku?", answer: "jam pasir" },
    { question: "Aku selalu kecil, tapi bisa mengisi ruangan besar. Apakah aku?", answer: "lampu" },
    { question: "Aku ada sebelum kamu lahir, dan aku akan ada setelah kamu mati. Apakah aku?", answer: "nama" },
    { question: "Aku bisa berjalan tanpa kaki, aku bisa berdetak tanpa jantung. Apakah aku?", answer: "jam" },
    { question: "Aku punya cincin, tapi tidak punya jari. Apakah aku?", answer: "telepon" },
    { question: "Aku bisa diukur, tapi tidak punya panjang. Apakah aku?", answer: "suhu" },
    { question: "Aku ada di setiap akhir kalimat. Apakah aku?", answer: "titik" },
    { question: "Aku bisa naik dan turun, tapi tidak pernah bergerak. Apakah aku?", answer: "suhu" },
    { question: "Aku selalu menari, tapi tidak punya kaki. Aku selalu menyanyi, tapi tidak punya suara. Apakah aku?", answer: "daun" },
    { question: "Aku punya sayap, tapi tidak bisa terbang. Aku punya ekor, tapi tidak bisa berenang. Apakah aku?", answer: "layang-layang" },
    { question: "Aku punya banyak mata, tapi aku tidak bisa melihat. Apakah aku?", answer: "nanas" },
    { question: "Aku punya banyak cabang, tapi tidak punya daun. Apakah aku?", answer: "bank" },
    { question: "Aku selalu bersembunyi saat dibutuhkan. Apakah aku?", answer: "jawaban" },
    { question: "Aku selalu datang, tapi tidak pernah tiba. Apakah aku?", answer: "besok" },
    { question: "Aku punya telinga, tapi tidak bisa mendengar. Apakah aku?", answer: "jagung" },
    { question: "Aku punya mulut, tapi tidak bisa bicara. Aku punya tubuh, tapi tidak punya anggota badan. Apakah aku?", answer: "botol" },
    { question: "Aku bisa pergi tanpa harus bergerak. Apakah aku?", answer: "tidur" },
    { question: "Aku menjadi basah saat mengeringkan. Apakah aku?", answer: "handuk" },
    { question: "Aku selalu berjalan, tapi tidak pernah lelah. Apakah aku?", answer: "air" },
    { question: "Aku ada di setiap akhir. Apakah aku?", answer: "huruf r" },
    { question: "Aku datang dan pergi, tapi aku tidak pernah bergerak. Apakah aku?", answer: "mimpi" },
    { question: "Aku punya dua sayap, tapi aku tidak bisa terbang. Apakah aku?", answer: "kursi" },
    { question: "Aku bisa terbang, tapi aku tidak punya sayap. Apakah aku?", answer: "waktu" },
    { question: "Aku punya kulit, tapi bukan manusia. Aku punya isi, tapi bukan buah. Apakah aku?", answer: "buku" },
    { question: "Aku bisa bergetar tanpa disentuh. Apakah aku?", answer: "suara" },
    { question: "Aku bisa dipecahkan, tapi tidak pernah diperbaiki. Apakah aku?", answer: "hati" },
    { question: "Aku punya gigi, tapi tidak bisa mengunyah. Apakah aku?", answer: "sisir" },
    { question: "Aku punya leher, tapi tidak punya kepala. Apakah aku?", answer: "kemeja" },
    { question: "Aku selalu ada di depan, tapi kamu selalu melihat ke belakang. Apakah aku?", answer: "cermin" },
    { question: "Aku selalu ada di mana-mana, tapi tidak pernah bisa kamu lihat. Apakah aku?", answer: "udara" },
    { question: "Aku bisa membuatmu kaya, tapi aku juga bisa membuatmu miskin. Apakah aku?", answer: "uang" },
    { question: "Aku punya banyak daun, tapi tidak punya pohon. Apakah aku?", answer: "buku" },
    { question: "Aku bisa membuatmu tertawa dan menangis dalam waktu singkat. Apakah aku?", answer: "film" },
    { question: "Aku tidak hidup, tapi aku bisa tumbuh. Apakah aku?", answer: "rambut" },
    { question: "Aku punya banyak jarum, tapi aku tidak pernah menjahit. Apakah aku?", answer: "pohon cemara" },
    { question: "Aku ada di dalam lemari, tapi aku tidak pernah dipakai. Apakah aku?", answer: "debu" },
    { question: "Aku bisa menjawab tanpa bicara. Apakah aku?", answer: "gema" },
    { question: "Aku selalu di belakang, tapi tidak pernah bisa kamu sentuh. Apakah aku?", answer: "punggung" },
    { question: "Aku bisa naik dan turun, tapi tidak pernah bergerak. Apakah aku?", answer: "tangga" },
    { question: "Aku punya mata, tapi tidak bisa melihat. Apakah aku?", answer: "kentang" },
    { question: "Aku selalu berputar-putar, tapi tidak pernah pusing. Apakah aku?", answer: "roda" },
    { question: "Aku punya banyak kunci, tapi tidak punya pintu. Apakah aku?", answer: "piano" },
    { question: "Aku bisa berbicara dalam semua bahasa. Apakah aku?", answer: "gema" },
    { question: "Aku bisa hilang dengan mudah. Apakah aku?", answer: "waktu" },
    { question: "Aku selalu ada di depan, tapi aku tidak terlihat. Apakah aku?", answer: "hidung" },
    { question: "Aku datang tanpa diundang, aku pergi tanpa pamit. Apakah aku?", answer: "tidur" },
    { question: "Aku bisa berjalan tanpa kaki, aku bisa berdetak tanpa jantung. Apakah aku?", answer: "jam" },
    { question: "Aku punya cincin, tapi tidak punya jari. Apakah aku?", answer: "telepon" },
    { question: "Aku bisa diukur, tapi tidak punya panjang. Apakah aku?", answer: "suhu" },
    { question: "Aku ada di setiap akhir kalimat. Apakah aku?", answer: "titik" },
    { question: "Aku bisa naik dan turun, tapi tidak pernah bergerak. Apakah aku?", answer: "suhu" },
    { question: "Aku selalu menari, tapi tidak punya kaki. Aku selalu menyanyi, tapi tidak punya suara. Apakah aku?", answer: "daun" },
    { question: "Aku punya sayap, tapi tidak bisa terbang. Aku punya ekor, tapi tidak bisa berenang. Apakah aku?", answer: "layang-layang" },
    { question: "Aku punya banyak mata, tapi aku tidak bisa melihat. Apakah aku?", answer: "nanas" },
    { question: "Aku punya banyak cabang, tapi tidak punya daun. Apakah aku?", answer: "bank" },
    { question: "Aku selalu bersembunyi saat dibutuhkan. Apakah aku?", answer: "jawaban" },
    { question: "Aku selalu datang, tapi tidak pernah tiba. Apakah aku?", answer: "besok" },
    { question: "Aku punya telinga, tapi tidak bisa mendengar. Apakah aku?", answer: "jagung" },
    { question: "Aku punya mulut, tapi tidak bisa bicara. Aku punya tubuh, tapi tidak punya anggota badan. Apakah aku?", answer: "botol" },
    { question: "Aku bisa pergi tanpa harus bergerak. Apakah aku?", answer: "tidur" },
    { question: "Aku menjadi basah saat mengeringkan. Apakah aku?", answer: "handuk" },
    { question: "Aku selalu berjalan, tapi tidak pernah lelah. Apakah aku?", answer: "air" },
    { question: "Aku ada di setiap akhir. Apakah aku?", answer: "huruf r" },
    { question: "Aku datang dan pergi, tapi aku tidak pernah bergerak. Apakah aku?", answer: "mimpi" },
    { question: "Aku punya dua sayap, tapi aku tidak bisa terbang. Apakah aku?", answer: "kursi" },
    { question: "Aku bisa terbang, tapi aku tidak punya sayap. Apakah aku?", answer: "waktu" },
    { question: "Aku punya kulit, tapi bukan manusia. Aku punya isi, tapi bukan buah. Apakah aku?", answer: "buku" },
    { question: "Aku bisa bergetar tanpa disentuh. Apakah aku?", answer: "suara" },
    { question: "Aku bisa dipecahkan, tapi tidak pernah diperbaiki. Apakah aku?", answer: "hati" },
    { question: "Aku punya gigi, tapi tidak bisa mengunyah. Apakah aku?", answer: "sisir" },
    { question: "Aku punya leher, tapi tidak punya kepala. Apakah aku?", answer: "kemeja" },
    { question: "Aku selalu ada di depan, tapi kamu selalu melihat ke belakang. Apakah aku?", answer: "cermin" },
    { question: "Aku selalu ada di mana-mana, tapi tidak pernah bisa kamu lihat. Apakah aku?", answer: "udara" },
    { question: "Aku bisa membuatmu kaya, tapi aku juga bisa membuatmu miskin. Apakah aku?", answer: "uang" },
    { question: "Aku punya banyak daun, tapi tidak punya pohon. Apakah aku?", answer: "buku" },
    { question: "Aku bisa membuatmu tertawa dan menangis dalam waktu singkat. Apakah aku?", answer: "film" },
    { question: "Aku tidak hidup, tapi aku bisa tumbuh. Apakah aku?", answer: "rambut" },
    { question: "Aku punya banyak jarum, tapi aku tidak pernah menjahit. Apakah aku?", answer: "pohon cemara" },
    { question: "Aku ada di dalam lemari, tapi aku tidak pernah dipakai. Apakah aku?", answer: "debu" },
    { question: "Aku bisa menjawab tanpa bicara. Apakah aku?", answer: "gema" },
    { question: "Aku selalu di belakang, tapi tidak pernah bisa kamu sentuh. Apakah aku?", answer: "punggung" },
    { question: "Aku bisa naik dan turun, tapi tidak pernah bergerak. Apakah aku?", answer: "tangga" },
    { question: "Aku punya mata, tapi tidak bisa melihat. Apakah aku?", answer: "kentang" },
    { question: "Aku selalu berputar-putar, tapi tidak pernah pusing. Apakah aku?", answer: "roda" },
    { question: "Aku punya banyak kunci, tapi tidak punya pintu. Apakah aku?", answer: "piano" },
    { question: "Aku bisa berbicara dalam semua bahasa. Apakah aku?", answer: "gema" },
    { question: "Aku bisa hilang dengan mudah. Apakah aku?", answer: "waktu" },
    { question: "Aku selalu ada di depan, tapi aku tidak terlihat. Apakah aku?", answer: "hidung" },
    { question: "Aku datang tanpa diundang, aku pergi tanpa pamit. Apakah aku?", answer: "tidur" },
    { question: "Aku bisa berjalan tanpa kaki, aku bisa berdetak tanpa jantung. Apakah aku?", answer: "jam" },
    { question: "Aku punya cincin, tapi tidak punya jari. Apakah aku?", answer: "telepon" },
    { question: "Aku bisa diukur, tapi tidak punya panjang. Apakah aku?", answer: "suhu" },
    { question: "Aku ada di setiap akhir kalimat. Apakah aku?", answer: "titik" },
    { question: "Aku bisa naik dan turun, tapi tidak pernah bergerak. Apakah aku?", answer: "suhu" },
    { question: "Aku selalu menari, tapi tidak punya kaki. Aku selalu menyanyi, tapi tidak punya suara. Apakah aku?", answer: "daun" },
    { question: "Aku punya sayap, tapi tidak bisa terbang. Aku punya ekor, tapi tidak bisa berenang. Apakah aku?", answer: "layang-layang" },
    { question: "Aku punya banyak mata, tapi aku tidak bisa melihat. Apakah aku?", answer: "nanas" },
    { question: "Aku punya banyak cabang, tapi tidak punya daun. Apakah aku?", answer: "bank" },
    { question: "Aku selalu bersembunyi saat dibutuhkan. Apakah aku?", answer: "jawaban" },
    { question: "Aku selalu datang, tapi tidak pernah tiba. Apakah aku?", answer: "besok" },
    { question: "Aku punya telinga, tapi tidak bisa mendengar. Apakah aku?", answer: "jagung" },
    { question: "Aku punya mulut, tapi tidak bisa bicara. Aku punya tubuh, tapi tidak punya anggota badan. Apakah aku?", answer: "botol" },
    { question: "Aku bisa pergi tanpa harus bergerak. Apakah aku?", answer: "tidur" },
    { question: "Aku menjadi basah saat mengeringkan. Apakah aku?", answer: "handuk" },
    { question: "Aku selalu berjalan, tapi tidak pernah lelah. Apakah aku?", answer: "air" },
    { question: "Aku ada di setiap akhir. Apakah aku?", answer: "huruf r" },
    { question: "Aku datang dan pergi, tapi aku tidak pernah bergerak. Apakah aku?", answer: "mimpi" },
    { question: "Aku punya dua sayap, tapi aku tidak bisa terbang. Apakah aku?", answer: "kursi" },
    { question: "Aku bisa terbang, tapi aku tidak punya sayap. Apakah aku?", answer: "waktu" },
    { question: "Aku punya kulit, tapi bukan manusia. Aku punya isi, tapi bukan buah. Apakah aku?", answer: "buku" },
    { question: "Aku bisa bergetar tanpa disentuh. Apakah aku?", answer: "suara" },
    { question: "Aku bisa dipecahkan, tapi tidak pernah diperbaiki. Apakah aku?", answer: "hati" },
    { question: "Aku punya gigi, tapi tidak bisa mengunyah. Apakah aku?", answer: "sisir" },
    { question: "Aku punya leher, tapi tidak punya kepala. Apakah aku?", answer: "kemeja" },
    { question: "Aku selalu ada di depan, tapi kamu selalu melihat ke belakang. Apakah aku?", answer: "cermin" },
    { question: "Aku selalu ada di mana-mana, tapi tidak pernah bisa kamu lihat. Apakah aku?", answer: "udara" },
    { question: "Aku bisa membuatmu kaya, tapi aku juga bisa membuatmu miskin. Apakah aku?", answer: "uang" },
    { question: "Aku punya banyak daun, tapi tidak punya pohon. Apakah aku?", answer: "buku" },
    { question: "Aku bisa membuatmu tertawa dan menangis dalam waktu singkat. Apakah aku?", answer: "film" },
    { question: "Aku tidak hidup, tapi aku bisa tumbuh. Apakah aku?", answer: "rambut" },
    { question: "Aku punya banyak jarum, tapi aku tidak pernah menjahit. Apakah aku?", answer: "pohon cemara" },
    { question: "Aku ada di dalam lemari, tapi aku tidak pernah dipakai. Apakah aku?", answer: "debu" },
    { question: "Aku bisa menjawab tanpa bicara. Apakah aku?", answer: "gema" },
    { question: "Aku selalu di belakang, tapi tidak pernah bisa kamu sentuh. Apakah aku?", answer: "punggung" },
    { question: "Aku bisa naik dan turun, tapi tidak pernah bergerak. Apakah aku?", answer: "tangga" },
    { question: "Aku punya mata, tapi tidak bisa melihat. Apakah aku?", answer: "kentang" },
    { question: "Aku selalu berputar-putar, tapi tidak pernah pusing. Apakah aku?", answer: "roda" },
    { question: "Aku punya banyak kunci, tapi tidak punya pintu. Apakah aku?", answer: "piano" },
    { question: "Aku bisa berbicara dalam semua bahasa. Apakah aku?", answer: "gema" },
    { question: "Aku bisa hilang dengan mudah. Apakah aku?", answer: "waktu" },
    { question: "Aku selalu ada di depan, tapi aku tidak terlihat. Apakah aku?", answer: "hidung" },
    { question: "Aku datang tanpa diundang, aku pergi tanpa pamit. Apakah aku?", answer: "tidur" },
    { question: "Aku bisa berjalan tanpa kaki, aku bisa berdetak tanpa jantung. Apakah aku?", answer: "jam" },
    { question: "Aku punya cincin, tapi tidak punya jari. Apakah aku?", answer: "telepon" },
    { question: "Aku bisa diukur, tapi tidak punya panjang. Apakah aku?", answer: "suhu" },
    { question: "Aku ada di setiap akhir kalimat. Apakah aku?", answer: "titik" },
    { question: "Aku bisa naik dan turun, tapi tidak pernah bergerak. Apakah aku?", answer: "suhu" },
    { question: "Aku selalu menari, tapi tidak punya kaki. Aku selalu menyanyi, tapi tidak punya suara. Apakah aku?", answer: "daun" },
    { question: "Aku punya sayap, tapi tidak bisa terbang. Aku punya ekor, tapi tidak bisa berenang. Apakah aku?", answer: "layang-layang" },
    { question: "Aku punya banyak mata, tapi aku tidak bisa melihat. Apakah aku?", answer: "nanas" },
    { question: "Aku punya banyak cabang, tapi tidak punya daun. Apakah aku?", answer: "bank" },
    { question: "Aku selalu bersembunyi saat dibutuhkan. Apakah aku?", answer: "jawaban" },
    { question: "Aku selalu datang, tapi tidak pernah tiba. Apakah aku?", answer: "besok" },
    { question: "Aku punya telinga, tapi tidak bisa mendengar. Apakah aku?", answer: "jagung" },
    { question: "Aku punya mulut, tapi tidak bisa bicara. Aku punya tubuh, tapi tidak punya anggota badan. Apakah aku?", answer: "botol" },
    { question: "Aku bisa pergi tanpa harus bergerak. Apakah aku?", answer: "tidur" },
    { question: "Aku menjadi basah saat mengeringkan. Apakah aku?", answer: "handuk" },
    { question: "Aku selalu berjalan, tapi tidak pernah lelah. Apakah aku?", answer: "air" },
    { question: "Aku ada di setiap akhir. Apakah aku?", answer: "huruf r" },
    { question: "Aku datang dan pergi, tapi aku tidak pernah bergerak. Apakah aku?", answer: "mimpi" },
    { question: "Aku punya dua sayap, tapi aku tidak bisa terbang. Apakah aku?", answer: "kursi" },
    { question: "Aku bisa terbang, tapi aku tidak punya sayap. Apakah aku?", answer: "waktu" },
    { question: "Aku punya kulit, tapi bukan manusia. Aku punya isi, tapi bukan buah. Apakah aku?", answer: "buku" },
    { question: "Aku bisa bergetar tanpa disentuh. Apakah aku?", answer: "suara" },
    { question: "Aku bisa dipecahkan, tapi tidak pernah diperbaiki. Apakah aku?", answer: "hati" },
    { question: "Aku punya gigi, tapi tidak bisa mengunyah. Apakah aku?", answer: "sisir" },
    { question: "Aku punya leher, tapi tidak punya kepala. Apakah aku?", answer: "kemeja" },
    { question: "Aku selalu ada di depan, tapi kamu selalu melihat ke belakang. Apakah aku?", answer: "cermin" },
    { question: "Aku selalu ada di mana-mana, tapi tidak pernah bisa kamu lihat. Apakah aku?", answer: "udara" },
    { question: "Aku bisa membuatmu kaya, tapi aku juga bisa membuatmu miskin. Apakah aku?", answer: "uang" },
    { question: "Aku punya banyak daun, tapi tidak punya pohon. Apakah aku?", answer: "buku" },
    { question: "Aku bisa membuatmu tertawa dan menangis dalam waktu singkat. Apakah aku?", answer: "film" },
    { question: "Aku tidak hidup, tapi aku bisa tumbuh. Apakah aku?", answer: "rambut" },
    { question: "Aku punya banyak jarum, tapi aku tidak pernah menjahit. Apakah aku?", answer: "pohon cemara" },
    { question: "Aku ada di dalam lemari, tapi aku tidak pernah dipakai. Apakah aku?", answer: "debu" },
    { question: "Aku bisa menjawab tanpa bicara. Apakah aku?", answer: "gema" },
    { question: "Aku selalu di belakang, tapi tidak pernah bisa kamu sentuh. Apakah aku?", answer: "punggung" },
    { question: "Aku bisa naik dan turun, tapi tidak pernah bergerak. Apakah aku?", answer: "tangga" },
    { question: "Aku punya mata, tapi tidak bisa melihat. Apakah aku?", answer: "kentang" },
    { question: "Aku selalu berputar-putar, tapi tidak pernah pusing. Apakah aku?", answer: "roda" },
    { question: "Aku punya banyak kunci, tapi tidak punya pintu. Apakah aku?", answer: "piano" },
    { question: "Aku bisa berbicara dalam semua bahasa. Apakah aku?", answer: "gema" },
    { question: "Aku bisa hilang dengan mudah. Apakah aku?", answer: "waktu" },
    { question: "Aku selalu ada di depan, tapi aku tidak terlihat. Apakah aku?", answer: "hidung" },
    { question: "Aku datang tanpa diundang, aku pergi tanpa pamit. Apakah aku?", answer: "tidur" },
    { question: "Aku bisa berjalan tanpa kaki, aku bisa berdetak tanpa jantung. Apakah aku?", answer: "jam" },
    { question: "Aku punya cincin, tapi tidak punya jari. Apakah aku?", answer: "telepon" },
    { question: "Aku bisa diukur, tapi tidak punya panjang. Apakah aku?", answer: "suhu" },
    { question: "Aku ada di setiap akhir kalimat. Apakah aku?", answer: "titik" },
    { question: "Aku bisa naik dan turun, tapi tidak pernah bergerak. Apakah aku?", answer: "suhu" },
    { question: "Aku selalu menari, tapi tidak punya kaki. Aku selalu menyanyi, tapi tidak punya suara. Apakah aku?", answer: "daun" },
    { question: "Aku punya sayap, tapi tidak bisa terbang. Aku punya ekor, tapi tidak bisa berenang. Apakah aku?", answer: "layang-layang" },
    { question: "Aku punya banyak mata, tapi aku tidak bisa melihat. Apakah aku?", answer: "nanas" },
    { question: "Aku punya banyak cabang, tapi tidak punya daun. Apakah aku?", answer: "bank" },
    { question: "Aku selalu bersembunyi saat dibutuhkan. Apakah aku?", answer: "jawaban" },
    { question: "Aku selalu datang, tapi tidak pernah tiba. Apakah aku?", answer: "besok" },
    { question: "Aku punya telinga, tapi tidak bisa mendengar. Apakah aku?", answer: "jagung" },
    { question: "Aku punya mulut, tapi tidak bisa bicara. Aku punya tubuh, tapi tidak punya anggota badan. Apakah aku?", answer: "botol" },
    { question: "Aku bisa pergi tanpa harus bergerak. Apakah aku?", answer: "tidur" },
    { question: "Aku menjadi basah saat mengeringkan. Apakah aku?", answer: "handuk" },
    { question: "Aku selalu berjalan, tapi tidak pernah lelah. Apakah aku?", answer: "air" },
    { question: "Aku ada di setiap akhir. Apakah aku?", answer: "huruf r" },
    { question: "Aku datang dan pergi, tapi aku tidak pernah bergerak. Apakah aku?", answer: "mimpi" },
    { question: "Aku punya dua sayap, tapi aku tidak bisa terbang. Apakah aku?", answer: "kursi" },
    { question: "Aku bisa terbang, tapi aku tidak punya sayap. Apakah aku?", answer: "waktu" },
    { question: "Aku punya kulit, tapi bukan manusia. Aku punya isi, tapi bukan buah. Apakah aku?", answer: "buku" },
    { question: "Aku bisa bergetar tanpa disentuh. Apakah aku?", answer: "suara" },
    { question: "Aku bisa dipecahkan, tapi tidak pernah diperbaiki. Apakah aku?", answer: "hati" },
    { question: "Aku punya gigi, tapi tidak bisa mengunyah. Apakah aku?", answer: "sisir" },
    { question: "Aku punya leher, tapi tidak punya kepala. Apakah aku?", answer: "kemeja" },
    { question: "Aku selalu ada di depan, tapi kamu selalu melihat ke belakang. Apakah aku?", answer: "cermin" },
    { question: "Aku selalu ada di mana-mana, tapi tidak pernah bisa kamu lihat. Apakah aku?", answer: "udara" },
    { question: "Aku bisa membuatmu kaya, tapi aku juga bisa membuatmu miskin. Apakah aku?", answer: "uang" },
    { question: "Aku punya banyak daun, tapi tidak punya pohon. Apakah aku?", answer: "buku" },
    { question: "Aku bisa membuatmu tertawa dan menangis dalam waktu singkat. Apakah aku?", answer: "film" },
    { question: "Aku tidak hidup, tapi aku bisa tumbuh. Apakah aku?", answer: "rambut" },
    { question: "Aku punya banyak jarum, tapi aku tidak pernah menjahit. Apakah aku?", answer: "pohon cemara" },
    { question: "Aku ada di dalam lemari, tapi aku tidak pernah dipakai. Apakah aku?", answer: "debu" },
    { question: "Aku bisa menjawab tanpa bicara. Apakah aku?", answer: "gema" },
    { question: "Aku selalu di belakang, tapi tidak pernah bisa kamu sentuh. Apakah aku?", answer: "punggung" },
    { question: "Aku bisa naik dan turun, tapi tidak pernah bergerak. Apakah aku?", answer: "tangga" },
    { question: "Aku punya mata, tapi tidak bisa melihat. Apakah aku?", answer: "kentang" },
    { question: "Aku selalu berputar-putar, tapi tidak pernah pusing. Apakah aku?", answer: "roda" },
    { question: "Aku punya banyak kunci, tapi tidak punya pintu. Apakah aku?", answer: "piano" },
    { question: "Aku bisa berbicara dalam semua bahasa. Apakah aku?", answer: "gema" },
    { question: "Aku bisa hilang dengan mudah. Apakah aku?", answer: "waktu" },
    { question: "Aku selalu ada di depan, tapi aku tidak terlihat. Apakah aku?", answer: "hidung" },
    { question: "Aku datang tanpa diundang, aku pergi tanpa pamit. Apakah aku?", answer: "tidur" },
    { question: "Aku bisa berjalan tanpa kaki, aku bisa berdetak tanpa jantung. Apakah aku?", answer: "jam" },
    { question: "Aku punya cincin, tapi tidak punya jari. Apakah aku?", answer: "telepon" },
    { question: "Aku bisa diukur, tapi tidak punya panjang. Apakah aku?", answer: "suhu" },
    { question: "Aku ada di setiap akhir kalimat. Apakah aku?", answer: "titik" }
];

let currentRiddle;

function initializeRiddle() {
    currentRiddle = riddles[Math.floor(Math.random() * riddles.length)];
    
    if (document.getElementById('riddle-question')) document.getElementById('riddle-question').textContent = currentRiddle.question;
    if (document.getElementById('riddle-answer-input')) document.getElementById('riddle-answer-input').value = '';
    if (document.getElementById('riddle-message')) document.getElementById('riddle-message').textContent = '';
    if (document.getElementById('riddle-message')) document.getElementById('riddle-message').className = '';
}

function checkRiddleAnswer() {
    const inputElement = document.getElementById('riddle-answer-input');
    const messageElement = document.getElementById('riddle-message');
    if (!inputElement || !messageElement) return;

    const guess = inputElement.value.trim().toLowerCase();
    
    const cleanAnswer = currentRiddle.answer.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (guess === cleanAnswer) {
        messageElement.textContent = "🎉 BENAR! Itu jawabannya!";
        messageElement.className = 'win';
    } else {
        messageElement.textContent = `❌ SALAH. Jawaban yang benar adalah "${currentRiddle.answer}".`;
        messageElement.className = 'lose';
    }
}


// ====================================
// 11. LOGIKA GAME HIGHER/LOWER (Tetap sama)
// ====================================

let currentCard;
let score_HL = 0;

function drawCard() {
    return Math.floor(Math.random() * 10) + 1; // Kartu 1 sampai 10
}

function initializeHigherLower() {
    score_HL = 0;
    currentCard = drawCard();
    
    if (document.getElementById('current-card')) document.getElementById('current-card').textContent = currentCard;
    if (document.getElementById('hl-message')) document.getElementById('hl-message').textContent = "Pilih 'Lebih TINGGI' atau 'Lebih RENDAH'";
    if (document.getElementById('hl-message')) document.getElementById('hl-message').className = '';
    if (document.getElementById('hl-score')) document.getElementById('hl-score').textContent = `Streak: ${score_HL}`;
    
    document.querySelectorAll('#hl-choices button').forEach(btn => btn.disabled = false);
}

function predictCard(prediction) {
    if (!currentCard) return;

    const nextCard = drawCard();
    const messageElement = document.getElementById('hl-message');
    
    let isCorrect = false;

    if (nextCard > currentCard && prediction === 'Higher') {
        isCorrect = true;
    } else if (nextCard < currentCard && prediction === 'Lower') {
        isCorrect = true;
    } else if (nextCard === currentCard) {
        isCorrect = true;
    }

    if (isCorrect) {
        score_HL++;
        messageElement.textContent = `🎉 BENAR! Kartu berikutnya adalah ${nextCard}.`;
        messageElement.className = 'win';
    } else {
        messageElement.textContent = `❌ SALAH! Kartu berikutnya adalah ${nextCard}. Streak direset.`;
        messageElement.className = 'lose';
        score_HL = 0;
        document.querySelectorAll('#hl-choices button').forEach(btn => btn.disabled = true);
    }
    
    currentCard = nextCard;
    if (document.getElementById('current-card')) document.getElementById('current-card').textContent = currentCard;
    if (document.getElementById('hl-score')) document.getElementById('hl-score').textContent = `Streak: ${score_HL}`;

    if (!isCorrect) {
        setTimeout(() => {
            messageElement.textContent = "Klik 'Mulai Ulang' untuk bermain lagi.";
        }, 1500);
    }
}


// ====================================
// 12. LOGIKA GAME TYPING SPEED TEST (Tetap sama)
// ====================================

const typingText = "Kecepatan adalah kemampuan untuk bergerak atau menyelesaikan suatu pekerjaan dalam periode waktu yang singkat, dan akurasi adalah sejauh mana pengukuran mendekati nilai yang benar.";
let timer_TT;
let startTime_TT;
let isTypingStarted_TT = false;

function initializeTypingTest() {
    isTypingStarted_TT = false;
    clearInterval(timer_TT);

    const display = document.getElementById('typing-text-display');
    const input = document.getElementById('typing-input');
    const startButton = document.getElementById('typing-start-button');
    const resetButton = document.getElementById('typing-reset-button');

    if (display) display.innerHTML = typingText;
    if (input) input.value = '';
    if (input) input.disabled = true;
    if (document.getElementById('typing-timer')) document.getElementById('typing-timer').textContent = "Waktu: 0s";
    if (document.getElementById('typing-result')) document.getElementById('typing-result').textContent = "WPM: 0 | Akurasi: 0%";
    
    if (startButton) startButton.style.display = 'block';
    if (resetButton) resetButton.style.display = 'none';
    if (input) input.oninput = null;
}

function startTypingTest() {
    const input = document.getElementById('typing-input');
    const startButton = document.getElementById('typing-start-button');
    const resetButton = document.getElementById('typing-reset-button');
    
    if (!input || !startButton || !resetButton) return;
    
    isTypingStarted_TT = true;
    input.value = '';
    input.disabled = false;
    input.focus();
    startButton.style.display = 'none';
    resetButton.style.display = 'block';

    startTime_TT = new Date().getTime();
    timer_TT = setInterval(updateTypingTimer, 1000);

    input.oninput = checkTypingInput;
}

function updateTypingTimer() {
    const currentTime = new Date().getTime();
    const elapsedTime = Math.floor((currentTime - startTime_TT) / 1000);
    if (document.getElementById('typing-timer')) document.getElementById('typing-timer').textContent = `Waktu: ${elapsedTime}s`;
}

function checkTypingInput() {
    const input = document.getElementById('typing-input');
    const display = document.getElementById('typing-text-display');
    if (!input || !display) return;
    
    const typedText = input.value;
    let formattedText = '';
    let correctCount = 0;
    
    for (let i = 0; i < typingText.length; i++) {
        let char = typingText[i];
        let className = '';

        if (i < typedText.length) {
            if (typedText[i] === char) {
                className = 'correct-char';
                correctCount++;
            } else {
                className = 'incorrect-char';
            }
        }
        formattedText += `<span class="${className}">${char}</span>`;
    }

    display.innerHTML = formattedText;

    if (typedText.length === typingText.length) {
        finishTypingTest(correctCount);
    }
}

function finishTypingTest(correctChars) {
    clearInterval(timer_TT);
    const endTime = new Date().getTime();
    const totalTimeSeconds = (endTime - startTime_TT) / 1000;
    
    const WPM = Math.round((correctChars / 5) / (totalTimeSeconds / 60));
    const accuracy = Math.round((correctChars / typingText.length) * 100);

    if (document.getElementById('typing-input')) document.getElementById('typing-input').disabled = true;
    if (document.getElementById('typing-result')) document.getElementById('typing-result').textContent = `WPM: ${WPM} | Akurasi: ${accuracy}%`;
}







// Dapatkan elemen modal, tombol buka, dan tombol tutup
var modal = document.getElementById("developer-info-modal");
var btn = document.getElementById("developer-info-btn");
var span = document.getElementsByClassName("close-button")[0];

// Ketika pengguna mengklik tombol, buka modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Ketika pengguna mengklik (x), tutup modal
span.onclick = function() {
    modal.style.display = "none";
}

// Ketika pengguna mengklik di mana saja di luar modal, tutup modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}