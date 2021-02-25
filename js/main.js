// Шапка сайта - подключение



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

// Плавное появление блоков AOS
AOS.init();

// Якоря

function anchors() {
    $(document).ready(function() {
        var margin = -75; // переменная для контроля докрутки
        $("a").click(function() { // тут пишите условия, для всех ссылок или для конкретных
            $("html, body").animate({
                scrollTop: $($(this).attr("href")).offset().top + margin + "px" // .top+margin - ставьте минус, если хотите увеличить отступ
            }, {
                duration: 800, // тут можно контролировать скорость
                easing: "swing"
            });
            return false;
        });
    });
}

// Подвал
jQuery.ajax({
    url: "../footer.html",
    dataType: "html",
    success: function(response) {
        document.getElementById('footer').innerHTML = response;
    }
});