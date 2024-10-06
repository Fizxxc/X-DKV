let score = 0;
let timeLeft = 30;
let timer;
let balloonInterval;
let username;

// Fungsi untuk meminta username hanya sekali
function askUsername() {
    username = localStorage.getItem('username');
    
    // Jika belum ada username, minta input dari pengguna
    if (!username) {
        username = prompt("Masukkan username Anda:");
        
        // Simpan username ke LocalStorage jika pengguna memasukkan sesuatu
        if (username) {
            localStorage.setItem('username', username);
        } else {
            username = "Guest"; // Default jika pengguna tidak memasukkan apapun
        }
    }

    // Tampilkan username di halaman
    document.getElementById('username').innerText = username;
}

// Fungsi untuk membuat balon baru
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('ballon');
    balloon.style.top = Math.random() * 350 + 'px';
    balloon.style.left = Math.random() * 550 + 'px';

    // Saat balon diklik, balon akan hilang dan skor bertambah
    balloon.addEventListener('click', function() {
        score += 1;
        document.getElementById('score').innerText = score;
        balloon.remove();
    });

    document.getElementById('game-area').appendChild(balloon);

    // Balon akan hilang otomatis setelah 3 detik jika tidak diklik
    setTimeout(function() {
        balloon.remove();
    }, 3000);
}

// Fungsi untuk memulai game
function startGame() {
    score = 0;
    timeLeft = 30;
    document.getElementById('score').innerText = score;
    document.getElementById('time').innerText = timeLeft;

    // Timer untuk menghitung waktu
    timer = setInterval(function() {
        timeLeft -= 1;
        document.getElementById('time').innerText = timeLeft;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);

    // Membuat balon setiap 800ms
    balloonInterval = setInterval(createBalloon, 800);

    // Menyembunyikan tombol start selama permainan berlangsung
    document.getElementById('start-btn').style.display = 'none';
}

// Fungsi untuk mengakhiri game
function endGame() {
    clearInterval(timer);
    clearInterval(balloonInterval);

    saveScore(username, score);
    updateLeaderboard();

    alert('Skor akhir Anda: ' + score);
    document.getElementById('start-btn').style.display = 'inline-block';
}

// Fungsi untuk menyimpan skor ke LocalStorage
function saveScore(username, score) {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboard.push({ username, score });
    leaderboard.sort((a, b) => b.score - a.score); // Urutkan berdasarkan skor tertinggi
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

// Fungsi untuk menampilkan leaderboard
function updateLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    const leaderboardBody = document.getElementById('leaderboard-body');
    leaderboardBody.innerHTML = ''; // Hapus isi leaderboard sebelumnya

    leaderboard.forEach((entry) => {
        const row = document.createElement('tr');
        const usernameCell = document.createElement('td');
        const scoreCell = document.createElement('td');

        usernameCell.innerText = entry.username;
        scoreCell.innerText = entry.score;

        row.appendChild(usernameCell);
        row.appendChild(scoreCell);
        leaderboardBody.appendChild(row);
    });
}

// Fungsi untuk menghubungkan tombol start dengan fungsi startGame
document.getElementById('start-btn').addEventListener('click', startGame);

// Memperbarui leaderboard dan meminta username ketika halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    askUsername();
    updateLeaderboard();
});

