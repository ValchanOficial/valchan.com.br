import React from "react"

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"

const Slider = (slides = []) => {
  const animation = { duration: 10000, easing: t => t }

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
    created(s) {
      s.moveToIdx(slides.length, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + slides.length, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + slides.length, true, animation)
    },
  })

  return (
    <div ref={sliderRef} className="keen-slider">
      {slides.map((slide, index) => (
        <div key={index} className="keen-slider__slide">
          {slide}
        </div>
      ))}
    </div>
  )
}

export default Slider
