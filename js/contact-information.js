var swiper = new Swiper('.swiper-container', {
    slidesPerView: 7,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.samples-bar .swiper-button-next',
        prevEl: '.samples-bar .swiper-button-prev',
    },
    breakpoints: {
        1199: {
            slidesPerView: 6,
        },
        991: {
            slidesPerView: 5,
        },
        767: {
            slidesPerView: 3,
        },
        500: {
            slidesPerView: 2,
        },
        375: {
            slidesPerView: 1,
        }
    }
});