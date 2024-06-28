window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    const logo = document.querySelector('.logo')
    const topBtn = this.document.querySelector('#topBtn')
    if (window.scrollY > 0) {
        header.classList.add('fixed');
        logo.src = 'img/MCakes-logo-white.png';
        topBtn.classList.add('btn-pink');
    } else {
        header.classList.remove('fixed');
        logo.src = 'img/MCakes-logo-black.png';
        topBtn.classList.remove('btn-pink');
        // topBtn.classList.add('btn-brown');
    }
});


let slideIndex = 0;
const slidesToShow = 2;
const slides = document.querySelectorAll(".slide-content img");

function showSlides() {
    if (slideIndex >= slides.length - slidesToShow + 1) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }
    const slideWidth = slides[0].clientWidth;
    const offset = -slideWidth * slideIndex;
    document.querySelector(".slide-content").style.transform = `translateX(${offset}px)`;
}

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex < 0) {
        slideIndex = slides.length - slidesToShow;
    }
    if (slideIndex >= slides.length - slidesToShow + 1) {
        slideIndex = 0;
    }
    const slideWidth = slides[0].clientWidth;
    const offset = -slideWidth * slideIndex;
    document.querySelector(".slide-content").style.transform = `translateX(${offset}px)`;
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides();
    setInterval(showSlides, 3000); // Change image every 3 seconds
});
