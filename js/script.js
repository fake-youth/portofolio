// Toggle menu responsif
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Animasi saat scroll untuk section umum
const sections = document.querySelectorAll('section');

function revealSections() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    }
  });
}

window.addEventListener('scroll', revealSections);
window.addEventListener('load', revealSections);

// Animasi scroll khusus untuk bagian skills dan pendidikan
const elements = document.querySelectorAll('.skills-edu > div');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// Tombol scroll ke atas
const toTop = document.getElementById('toTop');
if (toTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      toTop.classList.add('show');
    } else {
      toTop.classList.remove('show');
    }
  });

  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// =======================
// Modal Zoom Gambar untuk SEMUA GAMBAR
// =======================

const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');

// Aktifkan klik pada semua gambar di halaman
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modal.style.display = "block";
  });
});

// Tutup modal ketika klik tombol ×
function closeModal() {
  modal.style.display = "none";
}

// Tutup modal ketika klik area luar gambar
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

