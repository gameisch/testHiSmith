$(document).ready(function () {
    let heroSlider = $('.hero .swiper-container');
    if (heroSlider.length) {
        const ps = new Swiper(heroSlider, {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: false,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.hero-sb.hero-sb--right',
                prevEl: '.hero-sb.hero-sb--left'
            }
        });
    }
});
