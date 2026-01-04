
const promoSlider = new Swiper('.promo-swiper', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

export default promoSlider;
