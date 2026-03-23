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
function switchCategory(cat) {
    currentCategory = cat;
    images = galleryData[currentCategory]; // Đổi nguồn ảnh
    currentIndex = 0; // Reset về ảnh đầu tiên của nhánh mới
    
    // Cập nhật giao diện nút bấm
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.innerText.toLowerCase().includes(cat === 'tiensi' ? 'tiến sĩ' : 'chuồn chuồn')) {
            btn.classList.add('active');
        }
    });

    // Vẽ lại hàng ảnh nhỏ (Thumbnails) cho nhánh mới
    renderThumbnails();
    updateGallery();
}

function renderThumbnails() {
    const thumbBar = document.getElementById('thumb-bar');
    thumbBar.innerHTML = ""; // Xóa ảnh cũ
    images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img.src;
        thumb.onclick = () => { currentIndex = index; updateGallery(); };
        thumbBar.appendChild(thumb);
    });
}

// Gọi render lần đầu
renderThumbnails();
updateGallery();
