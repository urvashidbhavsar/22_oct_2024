function mphasis() {
    const sliders = document.querySelectorAll(".slider");
    sliders.forEach((slider) => {
        const slides = slider.querySelectorAll(".slide");
        const dots = slider.querySelectorAll(".dot");

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove("active");
                dots[i].classList.remove("active");

            })
            slides[index].classList.add("active");
            dots[index].classList.add("active");

        }
        dots.forEach((dot) => {
            dot.addEventListener("click", function () {
              const index = parseInt(dot.getAttribute("data-dot"));
                showSlide(index);
            })
        })
    })
}
mphasis()