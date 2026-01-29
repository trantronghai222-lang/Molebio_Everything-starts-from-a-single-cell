// Khởi tạo hiệu ứng khi cuộn trang
AOS.init({
    duration: 1000,
    once: false,
    mirror: true
});

// Hiệu ứng đổi màu Navbar khi cuộn
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#ffffff';
        nav.style.padding = '10px 10%';
    } else {
        nav.style.background = '#ffffff';
        nav.style.padding = '20px 10%';
    }
});
// Hiệu ứng Glassmorphism cho Navbar khi cuộn
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.8)';
        nav.style.backdropFilter = 'blur(10px)';
        nav.style.padding = '10px 10%';
    } else {
        nav.style.background = '#fff';
        nav.style.backdropFilter = 'none';
        nav.style.padding = '20px 10%';
    }
});
// Tạo hiệu ứng các hạt phân tử đơn giản
const hero = document.querySelector('.hero');
for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 10 + 5}px;
        height: ${Math.random() * 10 + 5}px;
        background: rgba(80, 200, 120, 0.2);
        border-radius: 50%;
        top: ${Math.random() * 100}%;
        left: ${Math.random() * 100}%;
        pointer-events: none;
        animation: float ${Math.random() * 10 + 5}s infinite linear;
    `;
    hero.appendChild(particle);
}

// CSS cho animation hạt bay (Thêm cái này vào style.css nhé)
/*
@keyframes float {
    0% { transform: translateY(0) rotate(0deg); }
    100% { transform: translateY(-100vh) rotate(360deg); }
}
*/
