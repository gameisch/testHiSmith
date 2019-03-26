function topBaddingCalc() {
    $('body').css('padding-top', $('.header').height() + 'px');
}
$(document).ready(function () {
    const $header = $('.header');
    $(window).resize(function () {
        topBaddingCalc();
    }).trigger('resize');

    let scrollBuffer = 0;
    $(window).scroll(function () {
        const st = $(this).scrollTop();
        if (st > scrollBuffer) {
            if (st <= 100) {
                $header.removeClass('header--scroll');
                scrollBuffer = st;
            } else {
                $header.addClass('header--scroll');
                scrollBuffer = st - 50;
            }
        } else {
            $header.removeClass('header--scroll');
            scrollBuffer = st;
        }
    }).trigger('scroll');

    $('.header__trigger, .header__content-close').click(function () {
        $('.header__content').toggleClass('header__content--show');
    });
});
