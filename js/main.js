
$(document).ready(function () {

    // animate
    AOS.init({
        once: true,
        duration: 1000,
        disable: 'mobile'
    });

    // MOBILE MENU --------------------------- //
    $('.burger').on('click', function () {
        $('.header__nav').toggleClass('open');
        $('body').toggleClass('hidden');
        $(this).toggleClass('show');
    });
    $('.close-menu').on('click', function () {
        $('.header__nav').removeClass('open');
        $('.burger').removeClass('show');
        $('body').removeClass('hidden');
    });
    $('.submenu>ul').on('click', function () {
        $('.header__nav').removeClass('open');
        $('.burger').removeClass('show');
        $('body').removeClass('hidden');
    });

    function submenu() {
        $('.submenu').on('click', function () {
            var target = $(this);
            target.toggleClass('active');
            target.children('ul').slideToggle();
        });
    }

    if ($(window).width() < 992) {
        submenu();
    }




    // CHANGE HEADER WITH SCROLL --------------------------- //
    $(window).on('scroll load', function () {
        if ($(this).scrollTop() > 0) {
            $('.header').addClass('change-bg');
        } else {
            $('.header').removeClass('change-bg');
        }
    });

    // socproof slider
    var swiper = new Swiper(".socproof__slider", {
        slidesPerView: 3,
        spaceBetween: 5,
        loop: true,
        speed: 700,
        breakpoints: {
            575: {
                spaceBetween: 30,
            },
            767: {
                spaceBetween: 20,
            },
            991: {
                spaceBetween: 30,
            },
        }
    });

    //  gallery ----------- //
    $('[data-fancybox^="images"]').each(function () {
        var galleryType = $(this).data('fancybox');

        $(`[data-fancybox="${galleryType}"]`).fancybox({
            thumbs: {
                autoStart: true
            },
        });
    });

    // text printed
    $(".printed-text").each(function () {
        var items = [];
        $(this).find("span").each(function () {
            items.push($(this).text());
        });
        $(this).typed({
            strings: items,
            typeSpeed: 130,
            backSpeed: 70,
            backDelay: 1500,
            showCursor: true,
            loop: true
        });
    });


    // platform table content

    $(".infosect__table-content ul").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top - 120 }, 1000);
    });


    const links = document.querySelectorAll('.infosect__table-content li a');
    window.addEventListener('scroll', () => {
        const anchors = document.querySelectorAll('.infosect__content [id]');
        anchors.forEach(anchor => {
            if (anchor.closest('.infosect__content')) {
                const anchorTop = anchor.getBoundingClientRect().top + window.pageYOffset;
                if (window.pageYOffset >= anchorTop - 120) {
                    links.forEach(link => {
                        const correspondingLink = document.querySelector(`.infosect__table-content a[href="#${anchor.id}"]`);
                        if (correspondingLink) {
                            link.classList.remove('active');
                            correspondingLink.classList.add('active');
                        }
                    });
                }
            }
        });
    });

    $(".infosect__table-content").on("click", function () {
        $(this).toggleClass('show');
    });


    // testimonials slider --- //
    var swiper = new Swiper(".testimonials__slider", {
        slidesPerView: 1,
        autoHeight: true,
        speed: 1200,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        breakpoints: {
            576: {
                spaceBetween: 10,
                slidesPerView: 1.8,
                autoHeight: false,
            },
            768: {
                spaceBetween: 10,
                slidesPerView: 2.2,
                autoHeight: false,
            },
            992: {
                spaceBetween: 10,
                slidesPerView: 2.6,
                autoHeight: false,
            },
            1200: {
                spaceBetween: 10,
                slidesPerView: 3,
                autoHeight: false,
            }
        }
    });

    //  accordeon --- //

    $('.talent__accordeon-head').on('click', function () {
        var contentBody = $(this).next('.talent__accordeon-body');
        $('.talent__accordeon-body').not(contentBody).slideUp();
        $(contentBody).slideToggle();
        $('.talent__accordeon-head').not(this).removeClass('active');
        $(this).toggleClass('active');
    });


    // careers block 
    $(".talent__right-content").on("click", function () {
        $(this).toggleClass('show');
    });



});