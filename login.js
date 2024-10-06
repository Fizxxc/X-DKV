document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil input dari form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Validasi sederhana (bisa diubah sesuai kebutuhan)
    if (username === "user123" && password === "password123") {
        alert('Login berhasil! Selamat datang di game.');
        // Redirect ke halaman game atau lakukan aksi lain
        window.location.href = 'game.html';
    }
    if (username === "Fizzx123" && password === "Fizzx123") {
        alert('Login berhasil! Selamat datang di game.');
        // Redirect ke halaman game atau lakukan aksi lain
        window.location.href = 'game.html';
    } else {
        document.getElementById('error-message').innerText = 'Username atau password salah.';
    }
});
