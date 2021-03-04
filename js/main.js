// Шапка сайта - подключение
if ($("#header")) {
    jQuery.ajax({
        url: "../header.html?3",
        dataType: "html",
        success: function(response) {
            document.getElementById('header').innerHTML = response;
        }
    }).done(function() {
        setTimeout(logo_animation_full, 400);
        setTimeout(anchors, 400);
    });
};

// LOGO animation
function logo_animation_full() {

    var logo_wrapper = document.getElementById("logo-wrapper"),
        logo_title = document.getElementById("logo-title"),
        logo_desc = document.getElementById("logo-desc");

    function width_logo(item) {
        item.style.width = '228px';
    }

    function pre_loader() {
        logo_wrapper.style.height = '96px';

        setTimeout(width_logo, 400, logo_title);
        setTimeout(width_logo, 700, logo_desc);
    }

    pre_loader();
    $('.intro').imagesLoaded({
            background: true
        },
        function() {
            $('#background').css('display', 'block')
        });

    // <!-- Изменение шапки при скроле -->
    let header = document.getElementsByClassName("header");


    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 0) {
            logo_wrapper.style.height = '75px';
            $(".header").addClass("headermove");
        } else {
            logo_wrapper.style.height = '96px';
            $(".header").removeClass("headermove");
        }
    });
}


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

$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/


$('.dropdown-menu li').click(function () {
var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
  msg = '<span class="msg">Hidden input value: ';
$('.msg').html(msg + input + '</span>');
}); 

// Подвал
jQuery.ajax({
    url: "../footer.html?2",
    dataType: "html",
    success: function(response) {
        document.getElementById('footer').innerHTML = response;
    }
});