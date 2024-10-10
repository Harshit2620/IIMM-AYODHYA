
  document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#splide', {
      type   : 'loop', // 'loop', 'slide', 'fade', etc.
      perPage: 4,      // Number of slides visible at once
      autoplay: true,  // Enable automatic sliding
      interval: 2000,  // Delay between slides in ms
    }).mount();
  });

