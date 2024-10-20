// Memeriksa apakah LocalStorage memiliki data 'visitCount'
if (localStorage.getItem('visitCount')) {
    // Mengambil data dari LocalStorage
    var visitCount = parseInt(localStorage.getItem('visitCount'));
} else {
    // Jika tidak ada data, set jumlah kunjungan ke 0
    var visitCount = 0;
}

// Setiap kali halaman diakses, jumlah kunjungan bertambah
visitCount++;

// Simpan kembali data yang diperbarui ke LocalStorage
localStorage.setItem('visitCount', visitCount);

// Tampilkan jumlah kunjungan di elemen dengan id 'visitCount'
document.getElementById('visitCount').innerText = visitCount;
