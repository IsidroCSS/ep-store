const carousel1 = document.getElementById('carousel1');
const carousel2 = document.getElementById('carousel2');
const prevBtn1 = document.getElementById('prevBtn1');
const nextBtn1 = document.getElementById('nextBtn1');
const prevBtn2 = document.getElementById('prevBtn2');
const nextBtn2 = document.getElementById('nextBtn2');
const itemWidth = document.querySelector('.carousel-item').offsetWidth;
// const visibleItems = 4;
let currentIndex1 = 0;
let currentIndex2 = 0;


// nextBtn1.addEventListener('click', () => {
//     if (currentIndex1 < 2) {
//         currentIndex1++;
//     } else {
//         currentIndex1 = 0;
//     }
//     updateCarousel1();
// });

// prevBtn1.addEventListener('click', () => {
//     if (currentIndex1 > 0) {
//         currentIndex1--;
//     } else {
//         currentIndex1 = 2;
//     }
//     updateCarousel1();
// });

// function updateCarousel1() {
//     const translateValue = -currentIndex1 * itemWidth;
//     carousel1.style.transform = `translateX(${translateValue}px)`;
// }



// nextBtn2.addEventListener('click', () => {
//     if (currentIndex2 < 2) {
//         currentIndex2++;
//     } else {
//         currentIndex2 = 0;
//     }
//     updateCarousel2();
// });

// prevBtn2.addEventListener('click', () => {
//     if (currentIndex2 > 0) {
//         currentIndex2--;
//     } else {
//         currentIndex2 = 2;
//     }
//     updateCarousel2();
// });

// function updateCarousel2() {
//     const translateValue = -currentIndex2 * itemWidth;
//     carousel2.style.transform = `translateX(${translateValue}px)`;
// }



// Media query

const isSmallScreen = window.innerWidth <= 412; 

if (isSmallScreen) {
    nextBtn1.addEventListener('click', () => {
        if (currentIndex1 < 4) {
            currentIndex1++;
        } else {
            currentIndex1 = 0;
        }
        updateCarousel1();
    });


    prevBtn1.addEventListener('click', () => {
        if (currentIndex1 > 0) {
            currentIndex1--;
        } else {
            currentIndex1 = 4;
        }
        updateCarousel1();
    });

    function updateCarousel1() {
        const translateValue = -currentIndex1 * itemWidth;
        carousel1.style.transform = `translateX(${translateValue}px)`;
    }
} else {
    nextBtn1.addEventListener('click', () => {
        if (currentIndex1 < 2) {
            currentIndex1++;
        } else {
            currentIndex1 = 0;
        }
        updateCarousel1();
    });


    prevBtn1.addEventListener('click', () => {
        if (currentIndex1 > 0) {
            currentIndex1--;
        } else {
            currentIndex1 = 2;
        }
        updateCarousel1();
    });

    function updateCarousel1() {
        const translateValue = -currentIndex1 * itemWidth;
        carousel1.style.transform = `translateX(${translateValue}px)`;
    }
}



if (isSmallScreen) {
    nextBtn2.addEventListener('click', () => {
        if (currentIndex2 < 4) {
            currentIndex2++;
        } else {
            currentIndex2 = 0;
        }
        updateCarousel2();
    });

    prevBtn2.addEventListener('click', () => {
        if (currentIndex2 > 0) {
            currentIndex2--;
        } else {
            currentIndex2 = 4;
        }
        updateCarousel2();
    });

    function updateCarousel2() {
        const translateValue = -currentIndex2 * itemWidth;
        carousel2.style.transform = `translateX(${translateValue}px)`;
    }
} else {
    nextBtn2.addEventListener('click', () => {
        if (currentIndex2 < 2) {
            currentIndex2++;
        } else {
            currentIndex2 = 0;
        }
        updateCarousel2();
    });

    prevBtn2.addEventListener('click', () => {
        if (currentIndex2 > 0) {
            currentIndex2--;
        } else {
            currentIndex2 = 2;
        }
        updateCarousel2();
    });

    function updateCarousel2() {
        const translateValue = -currentIndex2 * itemWidth;
        carousel2.style.transform = `translateX(${translateValue}px)`;
    }
}