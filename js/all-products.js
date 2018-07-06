$('.filter-title').click(function(){
    $( event.target ).closest( ".filter" ).toggleClass( "active" );
});

$('.filter-btn').click(function(){
    $('.filters-block').addClass('active-filter');
    $('body').css('overflow','hidden');
});
$('.filter-close').click(function(){
    $('.filters-block').removeClass('active-filter');
    $('body').css('overflow','auto');
});

var myScreenWidth = $(document).width();

if(myScreenWidth <= 991) {
    $('.filter').removeClass('active');
}
console.log(myScreenWidth);

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

$('.onhover').click(function(){
   $('.samples').addClass('active');
});
$('.samples-close').click(function(){
    $('.samples').removeClass('active');
});
