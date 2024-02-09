const carouselCalentador = document.getElementById('carousel-calentador');
const prevBtnCalentador = document.getElementById('prevBtnCalentador');
const nextBtnCalentador = document.getElementById('nextBtnCalentador');
const itemWidthCalentador = document.querySelector('.carousel-item-calentador').offsetWidth;
let currentIndexCalentador = 0;

nextBtnCalentador.addEventListener('click', () => {
    if (currentIndexCalentador < 2) {
        currentIndexCalentador++;
    } else {
        currentIndexCalentador = 0;
    }
    updateCarouselCalentador();
});

prevBtnCalentador.addEventListener('click', () => {
    if (currentIndexCalentador > 0) {
        currentIndexCalentador--;
    } else {
        currentIndexCalentador = 2;
    }
    updateCarouselCalentador();
});

function updateCarouselCalentador() {
    const translateValue = -currentIndexCalentador * itemWidthCalentador;
    carouselCalentador.style.transform = `translateX(${translateValue}px)`;
}