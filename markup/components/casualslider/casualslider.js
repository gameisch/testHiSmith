$(document).ready(function () {
    let sliders = [];

    $('.casSlider').each(function (index, element) {

        $(this).addClass('casSlider--' + index);
        const ps = new Swiper('.casSlider--' + index + ' .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 75,
            loop: false,
            navigation: {
                nextEl: '.casSlider--' + index + ' .casSlider-sb.casSlider-sb--right',
                prevEl: '.casSlider--' + index + ' .casSlider-sb.casSlider-sb--left'
            },
            // breakpoints: {
            //     992: {
            //         slidesPerView: 2
            //     },
            //     768: {
            //         slidesPerView: 1
            //     }
            // }
        });
        sliders.push(ps);
    });
    const pps = new Swiper('.casSlider--people .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 75,
        loop: false,
        navigation: {
            nextEl: '.casSlider--people .casSlider-sb.casSlider-sb--right',
            prevEl: '.casSlider--people .casSlider-sb.casSlider-sb--left'
        },
        breakpoints: {
            992: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 1
            }
        }
    });
});
