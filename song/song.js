document.addEventListener("DOMContentLoaded", function() {
    const playlist = [
        {
            title: "Cinta Terlarang -Kangen Band",
            file: "Cinta Terlarang.mp3" // Ganti dengan path file lagu sebenarnya
        },
        {
            title: "Untungnya, Hidup Harus Tetap Berjalan -Bernadya",
            file: "Untungnya.mp3" // Ganti dengan path file lagu sebenarnya
        },
        {
            title: "Mr.Loverman -Ricky Montgomery",
            file: "Mr. Loverman.mp3" // Ganti dengan path file lagu sebenarnya
        },
        {
            title: "Masing Masing -Ernni Zakri,Ade Govinda",
            file: "Masing Masing.mp3" // Ganti dengan path file lagu sebenarnya
        }
    ];

    const audioPlayer = document.getElementById('audio-player');
    const songTitle = document.getElementById('song-title');
    const songList = document.getElementById('song-list');
    const songInput = document.getElementById('song-input'); // Input untuk menambahkan lagu baru

    let currentSongIndex = 0;

    function loadSong(song) {
        audioPlayer.src = song.file;
        songTitle.textContent = `Now Playing: ${song.title}`;
        audioPlayer.play();
        setActiveSong(currentSongIndex);  // Set lagu yang aktif di playlist
    }

    function setActiveSong(index) {
        const items = songList.querySelectorAll('li');
        items.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    function createPlaylist() {
        songList.innerHTML = ''; // Bersihkan playlist sebelum diisi ulang
        playlist.forEach((song, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = song.title;

            listItem.addEventListener('click', function() {
                currentSongIndex = index;
                loadSong(song);
            });

            songList.appendChild(listItem);
        });
    }

    songInput.addEventListener('change', function(event) {
        const file = event.target.files[0]; // Ambil file yang dipilih
        if (file) {
            const songTitle = file.name.replace(/\.[^/.]+$/, ""); // Ambil nama file tanpa ekstensi
            const songURL = URL.createObjectURL(file); // Buat URL untuk file yang diunggah

            playlist.push({
                title: songTitle,
                file: songURL
            });

            createPlaylist();

            currentSongIndex = playlist.length - 1;
            loadSong(playlist[currentSongIndex]);
        }
    });

    createPlaylist();

    audioPlayer.addEventListener('ended', function() {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        loadSong(playlist[currentSongIndex]);
    });

    loadSong(playlist[currentSongIndex]);
});
