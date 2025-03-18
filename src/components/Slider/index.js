import React, { useState } from "react"

import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"

import * as S from "./style"

const Slider = ({ slides = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <S.SlideContainer>
        <div ref={sliderRef} className="keen-slider">
          {slides.map(slide => (
            <S.Slide key={`slide-${slide.name}`} className="keen-slider__slide">
              <S.SlideDescription>{slide.name}</S.SlideDescription>
              <S.SlideImg
                src={slide.image}
                alt={slide.name}
                title={slide.name}
              />
            </S.Slide>
          ))}
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={e =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={e =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
      </S.SlideContainer>
      {loaded && instanceRef.current && (
        <S.Dots>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map(idx => {
            return (
              <S.Dot
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={`${currentSlide === idx && "active"}`}
              />
            )
          })}
        </S.Dots>
      )}
    </>
  )
}

function Arrow(props) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <S.Arrow
      onClick={props.onClick}
      tabIndex={0}
      className={`${props.left ? "arrow--left" : "arrow--right"} ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </S.Arrow>
  )
}

export default Slider
