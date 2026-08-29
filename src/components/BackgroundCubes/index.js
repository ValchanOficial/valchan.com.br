import React from "react"

import { createCubeParticles } from "../../utils/functions"

import * as S from "./style"

const PARTICLES = createCubeParticles(10, 42)

const BackgroundCubes = () => {
  return (
    <S.BackgroundCubes aria-hidden="true">
      {PARTICLES.map(({ id, size, percentage, delay }) => (
        <li
          key={id}
          style={{
            left: `${percentage}%`,
            width: `${size}rem`,
            height: `${size}rem`,
            bottom: `-${size}rem`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </S.BackgroundCubes>
  )
}

export default BackgroundCubes
