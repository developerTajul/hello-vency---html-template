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

    // Isotop
    $('.isotope-grid').isotope({
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows'
    });
   var $grid = $('.isotope-grid').isotope({
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: '.isotope-item'
        }
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
