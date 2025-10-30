document.addEventListener('DOMContentLoaded', () => {
    // Knowledge Base (Basis Pengetahuan)
    const knowledgeBase = {
        'K1': {
            name: 'Kecerdasan Verbal (Linguistik)',
            totalIndicators: 12, 
            majors: 'Ilmu Komunikasi, Bahasa dan Sastra, Ilmu Hubungan Internasional, Ilmu Hukum, Ilmu Politik.' 
        },
        'K2': {
            name: 'Kecerdasan Logis (Matematika)',
            totalIndicators: 12, 
            majors: 'Statistika, Teknik, Akuntansi, Pendidikan Matematika, Teknik Informatika, Sistem Informasi.' 
        },
        'K3': {
            name: 'Kecerdasan Visual (Spasial)',
            totalIndicators: 12, 
            majors: 'Design Grafis, Teknik Arsitektur, Planologi, Desain Komunikasi Visual, Teknik Sipil.' 
        },
        'K4': {
            name: 'Kecerdasan Musikal',
            totalIndicators: 12, 
            majors: 'Seni Musik.' 
        },
        'K5': {
            name: 'Kecerdasan Kinestetik',
            totalIndicators: 12, 
            majors: 'Pendidikan Olahraga, Seni Peran, Seni Tari, Seni Rupa.' 
        },
        'K6': {
            name: 'Kecerdasan Interpersonal',
            totalIndicators: 12, 
            majors: 'Keperawatan, Ilmu Komunikasi, Psikologi, Pendidikan (Guru), Manajemen, Kesehatan Masyarakat.' 
        },
        'K7': {
            name: 'Kecerdasan Intrapersonal',
            totalIndicators: 12, 
            majors: 'Psikologi, Konseling, Sosiologi, Filsafat.' 
        },
        'K8': {
            name: 'Kecerdasan Naturalis',
            totalIndicators: 12, 
            majors: 'Teknik Geologi, Biologi, Pertanian, Peternakan, Kehutanan, Kelautan, Kedokteran Hewan.' 
        }
    };

    // Rule Base (Basis Aturan) - LENGKAP 96 FAKTA
    const indicatorMap = {
        'F1': 'K1', 'F2': 'K1', 'F3': 'K1', 'F4': 'K1', 'F5': 'K1', 'F6': 'K1',
        'F7': 'K1', 'F8': 'K1', 'F9': 'K1', 'F10': 'K1', 'F11': 'K1', 'F12': 'K1',
        'F13': 'K2', 'F14': 'K2', 'F15': 'K2', 'F16': 'K2', 'F17': 'K2', 'F18': 'K2',
        'F19': 'K2', 'F20': 'K2', 'F21': 'K2', 'F22': 'K2', 'F23': 'K2', 'F24': 'K2',
        'F25': 'K3', 'F26': 'K3', 'F27': 'K3', 'F28': 'K3', 'F29': 'K3', 'F30': 'K3',
        'F31': 'K3', 'F32': 'K3', 'F33': 'K3', 'F34': 'K3', 'F35': 'K3', 'F36': 'K3',
        'F37': 'K4', 'F38': 'K4', 'F39': 'K4', 'F40': 'K4', 'F41': 'K4', 'F42': 'K4',
        'F43': 'K4', 'F44': 'K4', 'F45': 'K4', 'F46': 'K4', 'F47': 'K4', 'F48': 'K4',
        'F49': 'K5', 'F50': 'K5', 'F51': 'K5', 'F52': 'K5', 'F53': 'K5', 'F54': 'K5',
        'F55': 'K5', 'F56': 'K5', 'F57': 'K5', 'F58': 'K5', 'F59': 'K5', 'F60': 'K5',
        'F61': 'K6', 'F62': 'K6', 'F63': 'K6', 'F64': 'K6', 'F65': 'K6', 'F66': 'K6',
        'F67': 'K6', 'F68': 'K6', 'F69': 'K6', 'F70': 'K6', 'F71': 'K6', 'F72': 'K6',
        'F73': 'K7', 'F74': 'K7', 'F75': 'K7', 'F76': 'K7', 'F77': 'K7', 'F78': 'K7',
        'F79': 'K7', 'F80': 'K7', 'F81': 'K7', 'F82': 'K7', 'F83': 'K7', 'F84': 'K7',
        'F85': 'K8', 'F86': 'K8', 'F87': 'K8', 'F88': 'K8', 'F89': 'K8', 'F90': 'K8',
        'F91': 'K8', 'F92': 'K8', 'F93': 'K8', 'F94': 'K8', 'F95': 'K8', 'F96': 'K8'
    };

    // Mengambil elemen-elemen dari HTML
    const form = document.getElementById('expert-form');
    const resultContainer = document.getElementById('result-container');
    const primaryRecommendation = document.getElementById('primary-recommendation');
    const scoreDetails = document.getElementById('score-details');

    // Menjalankan INFERENCE ENGINE saat form di-submit
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Mencegah halaman reload
        runForwardChaining();
    });

    // INFERENCE ENGINE (Mesin Inferensi)
    function runForwardChaining() {
        
        // 1. Inisialisasi Working Memory (untuk menyimpan skor)
        let scores = {
            'K1': 0, 'K2': 0, 'K3': 0, 'K4': 0,
            'K5': 0, 'K6': 0, 'K7': 0, 'K8': 0
        };

        // 2. Mendapatkan semua FAKTA dari input pengguna
        const checkedInputs = document.querySelectorAll('input[type="checkbox"]:checked');

        // 3. Proses FORWARD CHAINING (Data-Driven)
        checkedInputs.forEach(input => {
            const fact = input.value; // misal: 'F1'
            const conclusionCode = indicatorMap[fact]; // misal: 'K1'
            
            if (conclusionCode) {
                scores[conclusionCode]++;
            }
        });

        // 4. Menghitung Hasil Akhir (Kesimpulan)
        let results = [];
        for (const code in scores) {
            const intelligence = knowledgeBase[code];
            const score = scores[code]; // n(It) - jumlah indikator terpilih
            const total = intelligence.totalIndicators; // n(Ik) - jumlah indikator yg dimiliki
            
            const percentage = (total === 0) ? 0 : (score / total) * 100;

            results.push({
                code: code,
                name: intelligence.name,
                percentage: percentage,
                majors: intelligence.majors
            });
        }

        // 5. Mengurutkan hasil dari persentase tertinggi ke terendah
        results.sort((a, b) => b.percentage - a.percentage);

        // 6. Menampilkan hasil ke pengguna
        displayResults(results);
    }

    // Display Hasil
    function displayResults(results) {
        // Membersihkan hasil sebelumnya
        primaryRecommendation.innerHTML = '';
        scoreDetails.innerHTML = '';

        // 1. Filter hasil untuk skor > 70%
        const highScoreResults = results.filter(result => result.percentage > 70);

        // 2. Menampilkan rekomendasi dengan skor > 70%
        if (highScoreResults.length > 0) {
            highScoreResults.forEach((result, index) => {
                const recommendationBlock = document.createElement('div');
                recommendationBlock.className = 'recommendation-item';
                recommendationBlock.innerHTML = `
                    <h3>Rekomendasi ${index + 1}: ${result.name}</h3>
                    <p>Skor: <strong>${result.percentage.toFixed(0)}%</strong></p>
                    <p><strong>Keterangan (Jurusan yang Direkomendasikan):</strong><br> ${result.majors}</p>
                `;
                primaryRecommendation.appendChild(recommendationBlock);
            });

        } else {
            // Cek apakah ada yang di-centang tapi tidak ada yg > 70%
            const anyScorePositive = results.some(result => result.percentage > 0);
            if (anyScorePositive) {
                primaryRecommendation.innerHTML = `
                    <div class="recommendation-item no-dominant">
                        <h3>Tidak Ada Rekomendasi Dominan</h3>
                        <p>Tidak ada kecerdasan yang mencapai skor di atas 70%. Coba pilih lebih banyak pernyataan yang sesuai dengan Anda.</p>
                    </div>
                `;
            } else {
                primaryRecommendation.innerHTML = `
                    <div class="recommendation-item no-dominant">
                        <h3>Tidak Ada Rekomendasi</h3>
                        <p>Silakan pilih setidaknya satu pernyataan yang sesuai dengan Anda.</p>
                    </div>
                `;
            }
        }

        // 3. Menampilkan semua skor (sebagai rincian)
        results.forEach(result => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${result.name}:</strong> ${result.percentage.toFixed(0)}%
            `;
            scoreDetails.appendChild(li);
        });

        // Tampilkan kontainer hasil
        resultContainer.classList.remove('hidden');
        
        // Gulir ke bagian hasil
        resultContainer.scrollIntoView({ behavior: 'smooth' });
    }
});