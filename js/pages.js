$(document).ready(function () {
    $('.navbar-nav li').eq(-1).click(function () {
        $('#why-us').fadeIn();
        $('#catig-albums').fadeOut();
    });

    $('.navbar-nav li').eq(1).click(function () {
        $('#catig-albums').fadeIn();
        $('#why-us').fadeOut();
        $(this).addClass('active').siblings().removeClass('active');
    });
});
// Start index Filterable photos 
var containerEl;
var mixer = mixitup('.filter-gallery2');
var mixer = mixitup(".filter-gallery2", {
    // selectors: {
    //     target: '.blog-item'
    // },
    animation: {
        // effects: 'fade translateZ(-100px)', /* fade scale */
        // easing: 'ease-in-out',
        duration: 200, /* 600 */
        reverseOut: false,
        // effects: "fade scale(0.41)",
        effects: 'fade translateZ(-360px) stagger(34ms)'
    }
});