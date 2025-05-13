document.addEventListener('DOMContentLoaded', () => {
  const bannerSwiper = new Swiper('.banner-swiper', {
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 700,
    spaceBetween: 0,
    navigation: {
      nextEl: '.banner-swiper .swiper-button-next',
      prevEl: '.banner-swiper .swiper-button-prev',
    },
  });

  const paketSwiper = new Swiper('.paket-swiper', {
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: {
      nextEl: '.paket-swiper .swiper-button-next',
      prevEl: '.paket-swiper .swiper-button-prev',
    },
    pagination: {
      el: '.paket-swiper .swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
});
