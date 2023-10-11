$(document).ready(function () {
    $(".search-field").hide();
    $(".search-icon").click(function (event) {
        event.preventDefault();
        $(".search-field").toggleClass("d-flex");
        event.stopPropagation();
    });
    $(document).click(function (event) {
        if (
            !$(event.target).closest(".search-field").length &&
            !$(event.target).closest(".search-icon").length
        ) {
            $(".search-field").hide();
        }
    });
    $("#sidebar-toggle").click(function () {
        $("#sidebar").toggleClass("show");
        $("#sidebar-toggle i").toggleClass("fa-times");
    });
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