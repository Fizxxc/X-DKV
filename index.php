<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Waktu Server Saat Ini</title>
    <link rel="stylesheet" href="server.css"> <!-- Menghubungkan ke file CSS eksternal -->
</head>
<body>

    <div class="time-container">
        <h1>Waktu Server Saat Ini</h1>
        <p>
            <?php
                // Mengatur zona waktu
                date_default_timezone_set('Asia/Jakarta'); 
                // Menampilkan waktu server dalam format 'Y-m-d H:i:s' (tahun-bulan-hari jam:menit:detik)
                echo date('Y-m-d H:i:s'); 
            ?>
        </p>
    </div>

</body>
</html>
