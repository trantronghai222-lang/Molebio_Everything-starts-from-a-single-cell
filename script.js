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
