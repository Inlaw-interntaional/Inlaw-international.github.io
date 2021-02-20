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

// Paralax 
$(document).ready(function(){
    var c1 = new Rellax('.intro', {
     speed: -6
    });
   });

// Плавное появление AOS
AOS.init();

// Якоря

$(document).ready(function() {
    var margin = -75; // переменная для контроля докрутки
    $("a").click(function() { // тут пишите условия, для всех ссылок или для конкретных
       $("html, body").animate({
          scrollTop: $($(this).attr("href")).offset().top+margin+ "px" // .top+margin - ставьте минус, если хотите увеличить отступ
       }, {
          duration: 1600, // тут можно контролировать скорость
          easing: "swing"
       });
       return false;
    });
 });