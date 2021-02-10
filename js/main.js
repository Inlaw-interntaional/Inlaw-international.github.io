// SLider Слайдер
$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 1, // кол-во показывать
        slidesToScroll: 1, //количество перелистываемых слайдеров
        speed: 1000,
        infinite: true, //бесконечый слаайдер
        autoplay: true,
        autoplaySpeed: 4000,
        fade: true
    });
});