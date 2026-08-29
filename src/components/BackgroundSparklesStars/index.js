import React from "react"

import { createStarParticles } from "../../utils/functions"
import * as S from "./style"

const PARTICLES = createStarParticles(100, 84)

const BackgroundSparklesStars = () => {
  return (
    <S.BackgroundSparklesStars aria-hidden="true">
      {PARTICLES.map(({ id, bottom, left, delay }) => (
        <li
          key={id}
          style={{
            bottom: `${bottom}rem`,
            left: `${left}%`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </S.BackgroundSparklesStars>
  )
}

export default BackgroundSparklesStars
