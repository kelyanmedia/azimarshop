/*
Документація по роботі у шаблоні:
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from "swiper"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss"
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  if (document.querySelector(".sd1234342")) {
    new Swiper(".sd1sdsd2324234", {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      //autoHeight: true,
      speed: 800,

      // lazyPreloaderClass: 'preloader',

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
      /*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // Події
      on: {},
    })
  }
  if (document.querySelector(".hero__slider")) {
    new Swiper(".hero__slider", {
      modules: [Pagination, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 800,

      lazyPreloaderClass: "preloader",
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".hero__slider .pagination",
        clickable: true,
      },
    })
  }
  if (document.querySelector(".partners__items")) {
    new Swiper(".partners__items", {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,

      speed: 500,
      loop: true,

      pagination: {
        el: ".partners .pagination",
        clickable: true,
      },

      navigation: {
        prevEl: ".partners .button-prev",
        nextEl: ".partners .button-next",
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 25,
        },
      },
    })
  }
  if (document.querySelector(".products__slider")) {
    new Swiper(".products__slider", {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,

      speed: 600,
      loop: true,
      lazyPreloaderClass: "preloader",
      pagination: {
        el: ".products__slider .pagination",
        clickable: true,
      },

      navigation: {
        prevEl: ".products__slider .button-prev",
        nextEl: ".products__slider .button-next",
      },

      breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 15,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        991: {
          slidesPerView: 3.5,
          spaceBetween: 10,
        },
        1150: {
          slidesPerView: 5,
          spaceBetween: 10,
        },
      },
    })
  }
  if (document.querySelector(".offers__slider")) {
    new Swiper(".offers__slider", {
      modules: [Pagination, Navigation, Autoplay],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 10,
      speed: 800,
      loop: true,

      lazyPreloaderClass: "preloader",

      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".offers__slider .pagination",
        clickable: true,
      },
      navigation: {
        prevEl: ".offers__slider .button-prev",
        nextEl: ".offers__slider .button-next",
      },
    })
  }

  for (const mobileSlider of document.querySelectorAll(".product__items")) {
    if (mobileSlider) {
      ;(function () {
        "use strict"

        const breakpoint = window.matchMedia("(min-width:991px)")
        let slider

        const enableSwiper = function () {
          slider = new Swiper(mobileSlider, {
            modules: [Pagination, Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 20,
            speed: 800,
            loop: true,

            pagination: {
              el: ".product .product__pagination",
              clickable: true,
            },
            navigation: {
              prevEl: ".product .button-prev",
              nextEl: ".product .button-next",
            },
          })
        }
        const breakpointChecker = function () {
          if (breakpoint.matches === true) {
            if (slider !== undefined) slider.destroy(true, true)

            return
          } else if (breakpoint.matches === false) {
            return enableSwiper()
          }
        }

        breakpoint.addListener(breakpointChecker)
        breakpointChecker()
      })()
    }
  }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll")
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index]
      const sliderScrollBar = sliderScrollItem.querySelector(".swiper-scrollbar")
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      })
      sliderScroll.scrollbar.updateSize()
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск ініціалізації слайдерів
  initSliders()
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
})
