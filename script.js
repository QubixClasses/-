const scrollContainer = document.querySelector('.scroll-container');

function scrollLeft() {
    scrollContainer.scrollBy({
        left: -scrollContainer.clientWidth,
        behavior: 'smooth'
    });
}

function scrollRight() {
    scrollContainer.scrollBy({
        left: scrollContainer.clientWidth,
        behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger-menu");
    const mobileMenu = document.querySelector(".mobile-menu");

    hamburger.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
    });
});

