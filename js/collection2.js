function openModal() {
    document.getElementById('myModal1').style.display = "block";
}

function closeModal() {
    document.getElementById('myModal1').style.display = "none";
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
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}

/////


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

