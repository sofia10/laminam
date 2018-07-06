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
    navigation: {
        nextEl: '.product-slider .swiper-button-next',
        prevEl: '.product-slider .swiper-button-prev',
    },
});

$('.onhover').click(function(){
    $('.samples').addClass('active');
});

$('.samples-close').click(function(){
    $('.samples').removeClass('active');
});

var swiper = new Swiper('.sample-s1', {
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
