$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
  AOS.init();
});

//Carousel
let owl = $(".owl-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  nav: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
});
