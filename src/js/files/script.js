// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, bodyUnlock, menuClose, bodyLock } from "./functions.js"
// Підключення списку активних модулів
import { flsModules } from "./modules.js"

window.addEventListener("load", pageLoad)

function pageLoad() {
  const htmlTag = document.documentElement

  document.addEventListener("click", e => {
    const targetElement = e.target

    if (targetElement.closest(".class")) {
      console.log("1")
    }

    if (
      (htmlTag.closest(".open-search") && !targetElement.closest("[data-search]")) ||
      targetElement.closest("[data-search-close]")
    ) {
      htmlTag.classList.remove("open-search")
      bodyUnlock()
    }

    if (targetElement.closest("[data-search-open]")) {
      e.preventDefault()

      bodyLock()
      menuClose()
      htmlTag.classList.add("open-search")

      let input = document.querySelector("[data-search] input")
      input.focus()
    }

    ///

    if (targetElement.closest("[data-filter]")) {
      bodyLock()
      htmlTag.classList.add("open-filter")
    }

    if (targetElement.closest("[data-filter-close]")) {
      htmlTag.classList.remove("open-filter")
      bodyUnlock()
    }
  })
  if (document.querySelector("[data-zoom]")) {
    if (!htmlTag.closest(".touch")) {
      let globalX = 0
      let globalY = 0

      document.addEventListener("mousemove", function (e) {
        globalX = e.pageX
        globalY = e.pageY
      })

      document.querySelectorAll("[data-zoom]").forEach(function (item) {
        item.addEventListener("mousemove", function (e) {
          let zoom = item.getAttribute("data-zoom") ? item.getAttribute("data-zoom") : 2

          let imgBlock = item.querySelector("img")
          let img = imgBlock.getAttribute("src")
          let imgWidth = imgBlock.width
          let imgHeight = imgBlock.height
          let overlay = document.querySelector("[data-zoom-overlay]")
          let cursor = item.querySelector("[data-zoom-cursor]")

          cursor.style.width = overlay.offsetWidth / zoom + "px"
          cursor.style.height = overlay.offsetHeight / zoom + "px"

          let cursorWidth = cursor.offsetWidth
          let cursorHeight = cursor.offsetHeight

          let rect = item.getBoundingClientRect()
          let posX = globalX - window.scrollX - rect.left - cursorWidth / 2
          let posY = globalY - window.scrollY - rect.top - cursorHeight / 2

          if (posX < 0) {
            posX = 0
          }

          if (posX > imgWidth - cursorWidth) {
            posX = imgWidth - cursorWidth
          }

          if (posY < 0) {
            posY = 0
          }

          if (posY > imgHeight - cursorHeight) {
            posY = imgHeight - cursorHeight
          }

          cursor.style.left = posX + "px"
          cursor.style.top = posY + "px"
          cursor.style.display = "block"

          posX *= zoom
          posY *= zoom

          overlay.style.backgroundImage = `url(${img})`
          overlay.style.backgroundSize = imgWidth * zoom + "px"
          overlay.style.backgroundPosition = `-${posX}px -${posY}px`
          overlay.style.display = "block"
        })

        item.addEventListener("mouseleave", function (e) {
          e.target.querySelector("[data-zoom-cursor]").style.display = "none"
          document.querySelector("[data-zoom-overlay]").style.display = "none"
        })
      })
    }
  }
}

//========================================================================================================================================================

// let globalX = 0;
// let globalY = 0;

// $(document).on("mousemove", function(e) {
// globalX = e.pageX;
// globalY = e.pageY;
// });

// $(".zoom-img-item").on('mousemove', function(){
//   let zoom = 5;
//   let img = $(this).atrr('href')
//   let imgBlock = $(this).find('img')
//   let imgWidth = imgBlock.width()
//   let imgHeight = imgBlock.height()
//   let overlay = $('.zoom-img-overlay')
//   let cursor = $('.zoom-img-cursor')

//   cursor.css('width', overlay.width() / zoom + 'px')
//   cursor.css('height', overlay.height() / zoom + 'px')
//   let cursorWidth = cursor.outerWidth()
//   let cursorHeight = cursor.outerHeight()

//   let posX = globalX - $(this).offset().left - cursorWidth / 2;
//   let posY = globalY - $(this).offset().top - cursorHeight / 2;

//   if (posX < 0) {
//     posX = 0
//   }

//   if (posX > 0) {
//     posX = imgWidth - cursorWidth
//   }

//   if (posY > 0) {
//     posY = imgHeight - cursorHeight
//   }

//   cursor.css('left', posX + 'px')
//   cursor.css('top', posY + 'px')
//   cursor.show()

//   posX *= zoom
//   posY *= zoom

//   overlay.css('background-image', `url(${img})`)
//   overlay.css('background-size', (imgWidth * zoom) + 'px')
//   overlay.css('background-size', `-${posX}px -${posX}px`)
//   overlay.show()
// })

// $(".zoom-img-item").on('mouseleave', function(){
//   $('.zoom-img-cursor').hide()
//   $('.zoom-img-overlay').hide()
// })
