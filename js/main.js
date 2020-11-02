$(document).ready(function () {

    // Carousel work 
    $('.carousel').carousel({
        interval: 3000
    });

    // Start smooth scroll 
    $('li a').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top - 60
        }, 1500);
    });

    $('.langs i').on('click', function () {
        $('.select-langs').slideToggle(500);
    });

    // Start Nice Scroll 
    var scrollBotton = $('.srcoll-to-top');

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 500) {

            scrollBotton.show();

        } else {
            scrollBotton.hide();
        }


    });
    scrollBotton.click(function () {

        $('html,body').animate({ scrollTop: 0 }, 700);
    });
    // =========================================
    // Start Catigory pages 
    $('.navbar-nav li').eq(-1).click(function () {
        $('#why-us').fadeIn();
        $('#main-sliser, #features, #for-you, #services, #album, #team, #subscribe, #statis, #client').fadeOut();
        $('.navbar-nav li').eq(-1).addClass('active').siblings().removeClass('active');
    });

    $('.dropdown-menu li').on('click', function () {
        $('#why-us').fadeOut(1000);
    });


    $('img').hover(function () {
        $(this).attr('onClick', 'window.open(this.src)');
    }, function () {
        $(this).removeAttr('onClick')
    });
});

// Start index Filterable photos 
var containerEl;
var mixer = mixitup('.filter-gallery');
var mixer = mixitup(".filter-gallery", {
    // selectors: {
    //     target: '.blog-item'
    // },
    animation: {
        // effects: 'fade translateZ(-100px)', /* fade scale */
        // easing: 'ease-in-out',
        duration: 200, /* 600 */
        nudge: false,
        reverseOut: false,
        // effects: "fade scale(0.41)",
        effects: 'fade translateZ(-360px) stagger(34ms)'
    }
});



