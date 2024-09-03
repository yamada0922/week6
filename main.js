import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

console.log("Hello world!");

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.12,
  slidesPerGroup: 1,
  spaceBetween: 24,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev"
  },
  pagination: {
    el: ".swiper-pagination-custom",
    type: "fraction"
  },
  breakpoints: {
  992: {
    slidesPerView: 2,
    spaceBetween: 48,
  },
  },
});


const swiperOne = new Swiper(".swiper-container", {
  slidesPerView: 1.1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row"
      }
    }
  }
});

const swiperConten = new Swiper(".swiper-content", {
  slidesPerView: 1.1,
  slidesPerGroup: 1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row"
      }
    }
  }
});
