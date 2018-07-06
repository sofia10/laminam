function openModal2() {
    document.getElementById('myModal2').style.display = "block";
}

function closeModal2() {
    document.getElementById('myModal2').style.display = "none";
}

var slideIndex1 = 1;
showSlidess(slideIndex1);

function plusSlidess(n) {
    showSlidess(slideIndex1 += n);
}

function currentSlide(n) {
    showSlidess(slideIndex1 = n);
}

function showSlidess(n) {
    var i;
    var slidess = document.getElementsByClassName("mySlides2");
    if (n > slidess.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex1 = slidess.length}
    for (i = 0; i < slidess.length; i++) {
        slidess[i].style.display = "none";
    }
    slidess[slideIndex1-1].style.display = "block";
}


///////////

function openslider() {
    document.getElementById('slidemodal').style.display = "block";
}

function closeslider() {
    document.getElementById('slidemodal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide1(n) {
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
