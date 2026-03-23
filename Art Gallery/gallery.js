// 1. Hàm tạo hàng ảnh nhỏ tự động
const thumbBar = document.getElementById('thumb-bar');
images.forEach((img, index) => {
    const thumb = document.createElement('img');
    thumb.src = img.src;
    thumb.onclick = () => { 
        currentIndex = index; 
        updateGallery(); 
    };
    thumbBar.appendChild(thumb);
});

// 2. Cập nhật hàm updateGallery để làm sáng ảnh nhỏ đang chọn
function updateGallery() {
    // ... (giữ lại code cũ của hàm này) ...
    
    // Thêm dòng này vào cuối hàm updateGallery:
    const thumbs = thumbBar.querySelectorAll('img');
    thumbs.forEach((t, i) => t.className = i === currentIndex ? 'active' : '');
}

// 3. Hàm mở và đóng Lightbox
function openLightbox() {
    document.getElementById('lightbox-img').src = images[currentIndex].src;
    document.getElementById('lightbox').style.display = "flex";
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}
