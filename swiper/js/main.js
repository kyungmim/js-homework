const stop = document.querySelector("#stop");

const swiper = new Swiper(".swiper-container", {
  autoplay: {
    delay: 1,
  },
  loop: true,
  speed: 100,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function handleStop() {
  if (swiper.autoplay.running) {
    swiper.autoplay.stop();
  } else {
    swiper.autoplay.start();
  }
}

stop.addEventListener("click", handleStop);
