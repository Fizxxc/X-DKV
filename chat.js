let messageCount = 0; // Variabel untuk menghitung jumlah pesan yang dikirim oleh pengguna
let isBlocked = false; // Status apakah pengguna diblokir

// Daftar kata-kata yang tidak diperbolehkan
const bannedWords = ["anjingg", "babi", "ajg", "bego", "tolol", "kontol", "Kontol", "Memek", "memek", "anjing", "Anjing", "Babi", "kampung", "Kampung"];

// Fungsi untuk memeriksa apakah pesan mengandung kata terlarang
function containsBannedWords(message) {
    return bannedWords.some(word => message.toLowerCase().includes(word));
}

// Fungsi untuk mengirim pesan
function sendMessage(event) {
    if (event && event.key !== "Enter") return; // Hanya kirim jika tombol Enter ditekan atau tombol Kirim di-klik
    
    var userInput = document.getElementById("userInput").value;
    if (userInput.trim() === "") return; // Jangan kirim pesan kosong

    if (isBlocked) {
        alert("Anda telah diblokir karena menggunakan kata-kata yang tidak pantas.");
        return;
    }

    // Periksa apakah pesan mengandung kata terlarang
    if (containsBannedWords(userInput)) {
        blockUser(); // Blokir pengguna jika kata-kata terlarang terdeteksi
        return;
    }

    var chatBox = document.getElementById("chat-box");

    // Buat elemen pesan baru dari pengguna
    var newMessage = document.createElement("div");
    newMessage.classList.add("user-message");
    newMessage.textContent = "Anda: " + userInput;

    // Tambahkan pesan pengguna ke chat box
    chatBox.appendChild(newMessage);

    // Bersihkan input pengguna
    document.getElementById("userInput").value = "";

    // Otomatis scroll ke bawah setelah menambah pesan
    chatBox.scrollTop = chatBox.scrollHeight;

    // Naikkan jumlah pesan yang dikirim oleh pengguna
    messageCount++;

    // Panggil fungsi untuk sistem mengirim pesan berdasarkan jumlah pesan pengguna
    sendSystemMessageBasedOnUser();
}

// Fungsi untuk sistem mengirim pesan berdasarkan jumlah pesan pengguna
function sendSystemMessageBasedOnUser() {
    var chatBox = document.getElementById("chat-box");

    // Cek jumlah pesan yang dikirim oleh pengguna dan kirim balasan yang sesuai
    if (messageCount === 1) {
        var systemMessage1 = document.createElement("div");
        systemMessage1.classList.add("system-message");
        systemMessage1.textContent = "Sistem (Nemoo): Terima kasih atas pesan Anda!,Saat ini anda sedang di awasi oleh system!.";
        chatBox.appendChild(systemMessage1);
        chatBox.scrollTop = chatBox.scrollHeight;

    } else if (messageCount === 2) {
        var systemMessage2 = document.createElement("div");
        systemMessage2.classList.add("system-message");
        systemMessage2.textContent = "Sistem (Nemoo): Dimohon untuk tidak berkata kasar di sini,jika berkata kasar user akan di peringati oleh system kami!!";
        chatBox.appendChild(systemMessage2);
        chatBox.scrollTop = chatBox.scrollHeight;

    } else if (messageCount === 3) {
        var systemMessage3 = document.createElement("div");
        systemMessage3.classList.add("system-message");
        systemMessage3.textContent = "Sistem (Nemoo): Terimakasih sudah menaati peraturan (LIVE CHAT X.DKV) ini,See you next time guys😊😊.";
        chatBox.appendChild(systemMessage3);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// Fungsi untuk memblokir pengguna
function blockUser() {
    isBlocked = true; // Ubah status pengguna menjadi diblokir
    var chatBox = document.getElementById("chat-box");

    // Tambahkan pesan pemberitahuan ke kotak chat
    var blockMessage = document.createElement("div");
    blockMessage.classList.add("system-message");
    blockMessage.textContent = "Sistem (Nemoo): Anda telah diblokir karena menggunakan kata-kata yang tidak pantas.";
    chatBox.appendChild(blockMessage);

    // Otomatis scroll ke bawah setelah pesan
    chatBox.scrollTop = chatBox.scrollHeight;
}
