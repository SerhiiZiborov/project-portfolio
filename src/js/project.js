// import { initSwiper } from './swiper';

// const projectsInitSwiper = initSwiper('.projects-swiper-container', {
//   keyboard: {
//     enabled: true,
//     onlyInViewport: false,
//   },
//   direction: 'horizontal',
//   slidesPerView: 1,
//   spaceBetween: 280,
//   navigation: {
//     nextEl: '.projects-button-next',
//     prevEl: '.projects-button-prev',
//   },
// });

// JavaScript
// import Swiper from 'swiper';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// const swiper = new Swiper('.swiper', {
//   modules: [Navigation],
//   navigation: {
//     nextEl: '.',
//     prevEl: '.',
//   },
// });

// import Swiper from 'swiper';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';

// const swiper = new Swiper('.projects-swiper-container', {
//   modules: [Navigation], // Указываем модуль навигации
//   navigation: {
//     // Настройки навигации
//     nextEl: '.projects-button-next',
//     prevEl: '.projects-button-prev',
//   },
// });

import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const swiper = new Swiper('.projects-swiper-container', {
  modules: [Navigation, Keyboard],
  navigation: {
    nextEl: '.projects-button-next',
    prevEl: '.projects-button-prev',
  },
  keyboard: {
    enabled: true,
  },
});
