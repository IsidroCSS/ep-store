const carouselFotos = document.getElementById('carousel-fotos');
const prevBtnFotos = document.getElementById('prevBtnFotos');
const nextBtnFotos = document.getElementById('nextBtnFotos');
const itemWidthFotos = document.querySelector('.carousel-item-fotos').offsetWidth;
let currentIndexFotos = 0;

nextBtnFotos.addEventListener('click', () => {
    if (currentIndexFotos < 3) {
        currentIndexFotos++;
    } else {
        currentIndexFotos = 0;
    }
    updateCarouselFotos();
});

prevBtnFotos.addEventListener('click', () => {
    if (currentIndexFotos > 0) {
        currentIndexFotos--;
    } else {
        currentIndexFotos = 3;
    }
    updateCarouselFotos();
});

function updateCarouselFotos() {
    const translateValue = -currentIndexFotos * itemWidthFotos;
    carouselFotos.style.transform = `translateX(${translateValue}px)`;
}