document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const navButtons = document.querySelectorAll(".slider-nav button");
    const dots = document.querySelectorAll(".dot");
    const leftBtn = document.querySelector(".l-btn");
    const rightBtn = document.querySelector(".r-btn");
    const underline = document.querySelector(".nav-underline");

    let currentSlide = 0;
    
    function showSlide(index) {
        const total = slides.length;
        currentSlide = (index + total) % total;
       
        document.querySelector(".sliders").style.transform = `translateX(-${currentSlide * 100}%)`;

        navButtons.forEach(btn => btn.classList.remove("active"));
        navButtons[currentSlide].classList.add("active");

        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentSlide].classList.add("active");

        moveUnderline();
    }

    function moveUnderline() {
        const activeBtn = document.querySelector(".slider-nav button.active");
        const navRect = document.querySelector(".slider-nav").getBoundingClientRect();
        const btnRect = activeBtn.getBoundingClientRect();

        underline.style.width = `${btnRect.width}px`;
        underline.style.left = `${btnRect.left - navRect.left}px`;
    }

    navButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => showSlide(index));
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => showSlide(index));
    });

    leftBtn.addEventListener("click", () => showSlide(currentSlide - 1));
    rightBtn.addEventListener("click", () => showSlide(currentSlide + 1));

    showSlide(0);

    window.addEventListener("resize", moveUnderline);
});
