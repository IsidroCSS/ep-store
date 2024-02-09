const carouselBata = document.getElementById('carousel-bata');
const prevBtnBata = document.getElementById('prevBtnBata');
const nextBtnBata = document.getElementById('nextBtnBata');
const itemWidthBata = document.querySelector('.carousel-item-bata').offsetWidth;
let currentIndexBata = 0;

nextBtnBata.addEventListener('click', () => {
    if (currentIndexBata < 4) {
        currentIndexBata++;
    } else {
        currentIndexBata = 0;
    }
    updateCarouselBata();
});

prevBtnBata.addEventListener('click', () => {
    if (currentIndexBata > 0) {
        currentIndexBata--;
    } else {
        currentIndexBata = 4;
    }
    updateCarouselBata();
});

function updateCarouselBata() {
    const translateValue = -currentIndexBata * itemWidthBata;
    carouselBata.style.transform = `translateX(${translateValue}px)`;
}