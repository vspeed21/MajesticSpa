window.swiper = new Swiper({
  el: '.slider__contenedor',
  slideClass: 'slider__slide',
  createElements: true,
  loop: true,
  pagination: true,
  navigation: true,

  autoplay:{
    delay: 4000
  }
});