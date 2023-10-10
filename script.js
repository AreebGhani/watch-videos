$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('#backToTopBtn').fadeIn();
        } else {
            $('#backToTopBtn').fadeOut();
        }
    });
    $('#backToTopBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 200);
    });
});