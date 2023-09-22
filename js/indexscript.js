document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");
    const items = document.querySelectorAll(".item");
    const interval = 3000; // 3 segundos

    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateGallery();
    }

    function updateGallery() {
        gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(nextSlide, interval);
});
