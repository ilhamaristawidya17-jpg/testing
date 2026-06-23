const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const popupOverlay = document.getElementById('popupOverlay');
const loveBtn = document.getElementById('loveBtn');

// Fungsi Membuka Pop Up (Mulai dari halaman 1)
openBtn.addEventListener('click', () => {
    popupOverlay.classList.add('active');
    showPage(1); // Selalu reset ke halaman 1 saat dibuka
    createHeartEffect(3);
});

// Fungsi Menutup Pop Up
function closePopup() {
    popupOverlay.classList.remove('active');
    stopVideo(); // Matikan video saat pop up ditutup
}

closeBtn.addEventListener('click', closePopup);

window.addEventListener('click', (e) => {
    if (e.target === popupOverlay) {
        closePopup();
    }
});

// ==========================================
// LOGIKA PINDAH HALAMAN (SLIDE)
// ==========================================
function showPage(pageNumber) {
    // Sembunyikan semua halaman
    const pages = document.querySelectorAll('.popup-page');
    pages.forEach(page => page.classList.remove('active'));

    // Tampilkan halaman yang diminta
    document.getElementById(`page${pageNumber}`).classList.add('active');

    // Jika pindah dari halaman 2 (video), matikan videonya agar suaranya tidak bocor
    if (pageNumber !== 2) {
        stopVideo();
    }
}

function nextPage(pageNumber) {
    showPage(pageNumber);
}

function prevPage(pageNumber) {
    showPage(pageNumber);
}

// Fungsi untuk memberhentikan video
function stopVideo() {
    const videoElements = document.querySelectorAll('video');
    videoElements.forEach(vid => vid.pause());
}

// ==========================================
// EFEK HATI (HEART ANIMATION)
// ==========================================
loveBtn.addEventListener('click', () => {
    loveBtn.textContent = "Love U More! 💖";
    createHeartEffect(30); 
    
    // Opsional: Pop-up tertutup otomatis setelah 3 detik
    setTimeout(() => {
        closePopup();
        loveBtn.textContent = "Pencet Ini Coba! ✨"; // Reset tulisan
    }, 3000);
});

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '💖'; 
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's'; 
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function createHeartEffect(jumlah) {
    for(let i = 0; i < jumlah; i++) {
        setTimeout(createFloatingHeart, i * 120);
    }
}

// ==========================================
// EVENT LISTENERS UNTUK TOMBOL NAVIGASI
// ==========================================
// Page 1 - Next Button
const page1NextBtn = document.querySelector('#page1 .next-btn');
if (page1NextBtn) {
    page1NextBtn.addEventListener('click', () => nextPage(2));
}

// Page 2 - Navigation Buttons
const page2PrevBtn = document.querySelector('#page2 .prev-btn');
const page2NextBtn = document.querySelector('#page2 .next-btn');
if (page2PrevBtn) {
    page2PrevBtn.addEventListener('click', () => prevPage(1));
}
if (page2NextBtn) {
    page2NextBtn.addEventListener('click', () => nextPage(3));
}

// Page 3 - Navigation Buttons
const page3PrevBtn = document.querySelector('#page3 .prev-btn');
const page3NextBtn = document.querySelector('#page3 .next-btn');
if (page3PrevBtn) {
    page3PrevBtn.addEventListener('click', () => prevPage(2));
}
if (page3NextBtn) {
    page3NextBtn.addEventListener('click', () => nextPage(4));
}

// Page 4 - Navigation Buttons
const page4PrevBtn = document.querySelector('#page4 .prev-btn');
if (page4PrevBtn) {
    page4PrevBtn.addEventListener('click', () => prevPage(3));
}