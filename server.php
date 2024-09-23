 <div class="time-container">
        <h1>Waktu Server Saat Ini</h1>
        <p>
            <?php
                // Menampilkan waktu server dalam format Y-m-d H:i:s
                date_default_timezone_set('Asia/Jakarta'); // Mengatur timezone ke Jakarta
                echo date('Y-m-d H:i:s'); // Format tanggal dan waktu
            ?>
        </p>
    </div>
