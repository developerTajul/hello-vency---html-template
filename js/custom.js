(function ($) {
    "use strict";
    $(document).ready(function () {

        /*
       Jquery Mobile Menu
       ============================*/
        $('#main-menu').meanmenu({
            meanMenuContainer: '.mobile-nav-menu',
            meanScreenWidth: "991",
            meanExpand: ['<i class="fal fa-plus"></i>'],
        });

        /*
       Jquery Sidebar Toggle
       ============================*/
        $(".mobile-menu-toggle-btn").on("click", function () {
            $(".menu-sidebar-area").addClass("active");
            $(".body-overlay").addClass("active");
        });
        $(".menu-sidebar-close-btn").on("click", function () {
            $(".menu-sidebar-area").removeClass("active");
            $(".body-overlay").removeClass("active");
        });

        /*
       Jquery Body Overlay
       ============================*/
        $(".body-overlay").on("click", function () {
            $(".menu-sidebar-area").removeClass("active");
            $(".body-overlay").removeClass("active");
        });
        /*
        Stikey Js
        ============================*/

        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

        if( height  > 1400 ) {
            const nav = $(".header-menu-area.sticky-header");
            let scrolled = false;
            $(window).scroll(function () {
                if (160 < $(window).scrollTop() && !scrolled) {
                    nav
                        .addClass("sticky_menu animated fadeIn")
                        .animate({"margin-top": "0px"});
                    scrolled = true;
                }
                if (160 > $(window).scrollTop() && scrolled) {
                    nav.removeClass("sticky_menu animated fadeIn").css("margin-top", "0px");
                    scrolled = false;
                }
            });
        }

        /*
        Jquery Empty Post Content Hide
        ============================*/
        $('.blog-area .post-content p').filter(function() {
            return /\u00A0/.test($(this).text());
        }).hide();

        /*
Slider
============================*/
        $(".slider-wrapper").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            prevArrow:
                "<button type='button' class='slider-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='slider-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
            ],
        });

        /*
       Client-Slider
       ============================*/
        $(".client-logo-wrapper").slick({
            slidesToShow: 5,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            swipeToSlide: true,
            speed: 1500,
            rtl: false,
            prevArrow:
                "<button type='button' class='client-slider-btn prev-btn'><div class='swip'><div class='title-wrapper'><i class='icon-left-arrow title-1'></i><i class='icon-left-arrow title-2'></i></div></div></button>",
            nextArrow:
                "<button type='button' class='client-slider-btn next-btn active'><div class='swip'><div class='title-wrapper'><i class='icon-right-arrow title-1'></i><i class='icon-right-arrow title-2'></i></div></div></button>",
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
        });
        /*
       Testimonial Slider
       ============================*/
        $(".testimonial-slider-two").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            centerMode: true,
            rtl: false,
            prevArrow:
                "<button type='button' class='testimonial-arrow-btn prev-btn'><div class='swip'><div class='title-wrapper'><i class='icon-left-arrow title-1'></i><i class='icon-left-arrow title-2'></i></div></div></button>",
            nextArrow:
                "<button type='button' class='testimonial-arrow-btn next-btn active'><div class='swip'><div class='title-wrapper'><i class='icon-right-arrow title-1'></i><i class='icon-right-arrow title-2'></i></div></div></button>",
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        centerMode: false
                    },
                },
                {
                    breakpoint: 769,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 625,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        const sliderElm = $('.testimonial-slider-two');
        sliderElm.attr('dir', 'ltr');

        // arrow button active class
        $(".testimonial-arrow-btn").on("click", function () {
            $(".testimonial-arrow-btn").removeClass("active");
            $(this).addClass("active");
        });


        // portfolio-area slider style-1
        $(".portfolio-slider").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='portfolio-arrow-btn prev-btn'><div class='portfolio-swip'><div class='title-wrapper'><i class='fa-solid fa-angle-left title-1'></i><i class='fa-solid fa-angle-left title-2'></i></div></div></button>",
            nextArrow:
                "<button type='button' class='portfolio-arrow-btn next-btn'><div class='portfolio-swip'><div class='title-wrapper'><i class='fa-solid fa-angle-right title-1'></i><i class='fa-solid fa-angle-right title-2'></i></div></div></button>",
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        autoplay: true,
                        slidesToShow: 2,
                        arrows: false,
                        dots: true
                    },
                },
                {
                    breakpoint: 554,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                        arrows: false,
                        dots: true
                    },
                },
            ],
        });
        // Testimonial-slider-area slider style-1
        $(".testimonial-slider").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            rtl: false,
            prevArrow:
                "<button type='button' class='testimonial-arrow-btn prev-btn'><div class='swip'><div class='title-wrapper'><i class='icon-left-arrow title-1'></i><i class='icon-left-arrow title-2'></i></div></div></button>",
            nextArrow:
                "<button type='button' class='testimonial-arrow-btn next-btn'><div class='swip'><div class='title-wrapper'><i class='icon-right-arrow title-1'></i><i class='icon-right-arrow title-2'></i></div></div></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
            ],
        });

        // portfolio-area slider style-1
        $(".review-slider").slick({
            slidesToShow: 4,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            variableWidth: true,
            prevArrow:
                "<button type='button' class='review-btn prev-btn'><div class='review-swip'><div class='title-wrapper'><i class='fa-solid fa-angle-left title-1'></i><i class='fa-solid fa-angle-left title-2'></i></div></div></button>",
            nextArrow:
                "<button type='button' class='review-btn next-btn'><div class='review-swip'><div class='title-wrapper'><i class='fa-solid fa-angle-right title-1'></i><i class='fa-solid fa-angle-right title-2'></i></div></div></button>",
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        autoplay: true,
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        autoplay: true,
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        dots: true,
                    },
                },
                {
                    breakpoint: 554,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                        dots: true,
                    },
                },
            ],
        });

    // Isotop
    $('.isotope-grid').isotope({
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows'
    });
   var $grid = $('.isotope-grid').isotope({
        itemSelector: '.isotope-item',
        percentPosition: true,
        masonry: {
            columnWidth: '.isotope-item'
        }
    });
    $grid.imagesLoaded().progress( function() {
        $grid.isotope('layout');
    });

    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
    $(".filter-button-group").on("click", 'button', function () {
        $('.filter-button-group button').removeClass("active");
        $(this).addClass("active");
    });

        // accordion
        $("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
            $(e.target)
              .prev()
              .find("i:last-child")
              .toggleClass("fa-minus fa-plus");
          });
          

        /*
        Counter Js
        ============================*/
        $(".counter").counterUp({
            delay: 10,
            time: 1000,
        });

        /*
       Magnific Popup
       ============================*/
        $(".video-play").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });

        /*
        Jquery Wow Js
        ============================*/
        new WOW().init();

        /*
       Jquery Nice Select Js
       ============================*/
        $('select.select_option, select.wpcf7-select').niceSelect();

        /*
       Jquery Tilt Js
       ============================*/
        $('.tilt-animate').tilt({
            maxTilt: 12,
            perspective: 1500,
        })

        /*
        Scroll To Top Js
        ============================*/
        $(function () {
            $("#scrollTop").hide();
            var position = $(window).scrollTop();
            var timer;
            $(window).on('scroll', function () {
                var scrollTop = $(window).scrollTop();
                clearTimeout(timer);
                if (scrollTop > 100) {
                    if (scrollTop > position) {
                        $('#scrollTop').fadeOut();
                    } else {
                        $('#scrollTop').fadeIn();
                        timer = window.setTimeout(function() {
                            $("#scrollTop").fadeOut();
                        }, 3000);
                    }
                    position = scrollTop;
                } else {
                    $('#scrollTop').fadeOut();
                }
            });
            $(".scrollup-btn").click(function() {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
        });
        /*
        Preeloader
        ============================*/
        $(window).on("load", function () {
            $("#preloader").fadeOut();
            $("#preloader-status").delay(200).fadeOut("slow");
            $("body").delay(200).css({"overflow-x": "hidden"});
        });

    });
})(jQuery);
