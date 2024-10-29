let slideIndex = 0;
let startX = 0;
let autoSlideInterval;

const slides = document.querySelectorAll(".slide");
const dots = document.getElementsByClassName("dot");
const slideWrapper = document.getElementById("slideWrapper");

// Fungsi untuk menampilkan slide sesuai index
function showSlide(index) {
  slideIndex = (index + slides.length) % slides.length;
  
  slideWrapper.style.transform = `translateX(-${slideIndex * 100}%)`;

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex].className += " active";

  clearTimeout(autoSlideInterval);
  autoSlideInterval = setTimeout(() => showSlide(slideIndex + 1), 3000); // Ganti slide otomatis setiap 3 detik
}

// Fungsi untuk memilih slide dengan klik pada dot
function currentSlide(n) {
  showSlide(n - 1);
}

// Fungsi untuk mendeteksi swipe
document.getElementById("slider").addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.getElementById("slider").addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) {
    showSlide(slideIndex + 1); // Swipe kiri
  } else if (endX - startX > 50) {
    showSlide(slideIndex - 1); // Swipe kanan
  }
});

// Menjalankan slide otomatis pertama kali
showSlide(slideIndex);

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(new FormData(event.target)).toString()
  })
  .then(() => {
    document.getElementById("success-message").style.display = "block";
    event.target.reset();
  })
  .catch(error => alert("Error: " + error));
});
