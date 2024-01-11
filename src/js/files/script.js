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
  })
}
