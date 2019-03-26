$(document).ready(function () {
    let dsliders = [];

    $('.dSlider__item').each(function (index, element) {

        $(this).addClass('dSlider__item--' + index);
        const ds = new Swiper('.dSlider__item--' + index + ' .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: false,
            navigation: {
                nextEl: '.dSlider__item--' + index + ' .dSlider-sb.dSlider-sb--right',
                prevEl: '.dSlider__item--' + index + ' .dSlider-sb.dSlider-sb--left'
            }
        });
        dsliders.push(ds);
    });
});
