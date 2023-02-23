$(".hamburger").on("click", function () {
    $(this).toggleClass("is-active");
    $(".mobile-menu").toggleClass("is-open");
    $("body").toggleClass("block-scroll");
});
