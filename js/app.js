$(function(){

// preloader js start
$(window).on('load', function () {
    $('#preloader').fadeOut(1000);
 })
// preloader js end

    $('.banner_slider').slick({
        arrows:false,
        autoplay:true,
        speed:500,
        dots:true,
        dotsClass:'banner_slider_dots',
    })
    })

// recent product slider
$('.recent_product_slider').slick({
    slidesToShow:4,
    prevArrow:'<i class="fa-solid fa-chevron-left recent_product_slider_icon"></i>',
    nextArrow:'<i class="fa-solid fa-chevron-right recent_product_slider_icon"></i>'
})