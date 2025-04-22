const slider = document.getElementById('slider');

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}