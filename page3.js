document.addEventListener("DOMContentLoaded", function() {
    const projectsPerPage = 10;  // Jumlah proyek yang ditampilkan per halaman
    const projectsContainer = document.getElementById('projects-container');
    const paginationContainer = document.getElementById('pagination');
    const projects = Array.from(document.getElementsByClassName('project')); // Mengambil semua proyek
    const totalProjects = projects.length;
    const totalPages = Math.ceil(totalProjects / projectsPerPage);

    let currentPage = 1;

    // Fungsi untuk menampilkan proyek berdasarkan halaman yang dipilih
    function displayProjects(page) {
        // Menghitung indeks awal dan akhir proyek yang harus ditampilkan
        const startIndex = (page - 1) * projectsPerPage;
        const endIndex = page * projectsPerPage;

        // Sembunyikan semua proyek terlebih dahulu
        projects.forEach((project, index) => {
            project.style.display = 'none';
        });

        // Tampilkan hanya proyek yang berada di halaman saat ini
        projects.slice(startIndex, endIndex).forEach(project => {
            project.style.display = 'block';
        });
    }

    // Fungsi untuk membuat tombol pagination
    function setupPagination() {
        paginationContainer.innerHTML = ''; // Kosongkan kontainer pagination

        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.innerText = i;

            // Ketika tombol diklik, ubah halaman
            button.addEventListener('click', function() {
                currentPage = i;
                displayProjects(currentPage);

                // Update tombol aktif
                document.querySelectorAll('.pagination button').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });

            if (i === currentPage) {
                button.classList.add('active');
            }

            paginationContainer.appendChild(button);
        }
    }

    // Menampilkan proyek halaman pertama saat halaman dimuat
    displayProjects(currentPage);
    setupPagination();
});
