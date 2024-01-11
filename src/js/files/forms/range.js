// Подключение из node_modules
import * as noUiSlider from "nouislider"

// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
  const priceSliders = document.querySelectorAll("[gata-range]")

  if (priceSliders) {
    priceSliders.forEach(priceSlider => {
      let textFrom = priceSlider.getAttribute("data-from")
      let textTo = priceSlider.getAttribute("data-to")
      let textValuesInputs = priceSlider.closest(".range").querySelectorAll("input[gata-value]")

      noUiSlider.create(priceSlider, {
        start: Number(textTo), // [0,200000]
        connect: [true, false],
        step: 10000,
        range: {
          min: [Number(textFrom)],
          max: [Number(textTo)],
        },
      })

      priceSlider.noUiSlider.on("update", function (values, handle) {
        if (Math.floor(values[handle]) == 0) {
          textValuesInputs[0].value = ""
        } else {
          textValuesInputs[0].value = Math.floor(values[handle])
        }
      })

      textValuesInputs[0].addEventListener("change", function (e) {
        priceSlider.noUiSlider.set(this.value)
      })
    })
  }
}
window.addEventListener("load", () => {
  rangeInit()
})
