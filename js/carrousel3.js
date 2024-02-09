const carouselGorra = document.getElementById('carousel-gorra');
const prevBtnGorra = document.getElementById('prevBtnGorra');
const nextBtnGorra = document.getElementById('nextBtnGorra');
const itemWidthGorra = document.querySelector('.carousel-item-gorra').offsetWidth;
let currentIndexGorra = 0;

nextBtnGorra.addEventListener('click', () => {
    if (currentIndexGorra < 1) {
        currentIndexGorra++;
    } else {
        currentIndexGorra = 0;
    }
    updateCarouselGorra();
});

prevBtnGorra.addEventListener('click', () => {
    if (currentIndexGorra > 0) {
        currentIndexGorra--;
    } else {
        currentIndexGorra = 1;
    }
    updateCarouselGorra();
});

function updateCarouselGorra() {
    const translateValue = -currentIndexGorra * itemWidthGorra;
    carouselGorra.style.transform = `translateX(${translateValue}px)`;
}