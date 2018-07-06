var swiper = new Swiper('.s1', {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

var swiper = new Swiper('.s2', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: '.collection-block .swiper-button-next',
        prevEl: '.collection-block .swiper-button-prev',
    },
    breakpoints: {
        991: {
            slidesPerView: 2,
        },
        575: {
            slidesPerView: 1,
        }
    }
});

function openModal() {
    document.getElementById('myModal').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}