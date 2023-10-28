(function ($) {
    "use strict";
    $(document).ready(function () {

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
       Info Card Slider
       ============================*/
        $("#info_card_slider_wrapper").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='info-card-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='info-card-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        /*
       Team Slider
       ============================*/
        $("#team_slider_wrapper").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
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
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            swipeToSlide: true,
            speed: 1500,
            rtl: false,
            prevArrow:
                "<button type='button' class='testimonial-arrow-btn prev-btn'><div class='swip'><div class='title-wrapper'><i class='icon-left-arrow title-1'></i><i class='icon-left-arrow title-2'></i></div></div></button>",
            nextArrow:
                "<button type='button' class='testimonial-arrow-btn next-btn active'><div class='swip'><div class='title-wrapper'><i class='icon-right-arrow title-1'></i><i class='icon-right-arrow title-2'></i></div></div></button>",
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
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
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

        // Review-slider-area button trigger
        $('#review-prev').on('click', function (e) {
            e.preventDefault();
            $('.prev-btn').trigger('click');
        });
        $('#review-next').on('click', function (e) {
            e.preventDefault();
            $('.next-btn').trigger('click');
        });

        /*
       Related Portfolio Slider
       ============================*/
        $("#related_portfolio").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='portfolio-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='portfolio-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 460,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        // portfolio-area slider style-1
        $(".portfolio-slider").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            prevArrow:
                "<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='testimonial-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        autoplay: true,
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 554,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
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
                "<button type='button' class='testimonial-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='testimonial-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
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
                    breakpoint: 554,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                    },
                },
            ],
        });

    });
})(jQuery);
