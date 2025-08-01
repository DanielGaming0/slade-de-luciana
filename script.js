let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const totalSlides = slides.length;

document.getElementById('next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
});

document.getElementById('prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
});

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
}
