document.addEventListener('DOMContentLoaded', () => {
  let swipers = [];
  let swipersAreInitialized = false;
  const [swaperCSSLinkElement] = document.getElementsByClassName('js-swiper-css-link');

  initApp();

  window.addEventListener('resize', () => {
    if (checkIfSmallDeviceWidth()) {
      if (swipersAreInitialized) {
        destroySwipers();
      }
      return;
    }

    if (!swipersAreInitialized) {
      initSwipers();
    }
  }, true);



  function checkIfSmallDeviceWidth() {
    return document.body.offsetWidth < 1200;
  }

  function destroySwipers() {
    swipers.forEach(swiper => {
      swiper.destroy();
    });

    swaperCSSLinkElement.setAttribute('disabled', true);

    swipersAreInitialized = false;
  }

  function initSwipers() {
    swaperCSSLinkElement.removeAttribute('disabled');

    swipersCheck = new Swiper('.swiper', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });

    swipers = Array.isArray(swipersCheck) ? swipersCheck : [swipersCheck];

    swipersAreInitialized = true;
  }

  function initApp() {
    if (!checkIfSmallDeviceWidth()) {
      initSwipers();
    }
  }
});
