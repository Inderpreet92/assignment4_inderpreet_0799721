$(document).ready(function() {
    $('.gallery').on('swipeleft', function() {
        $(this).carousel('next');
    });

    $('.gallery').on('swiperight', function() {
        $(this).carousel('prev');
    });
});
