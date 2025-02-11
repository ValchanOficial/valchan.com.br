import React from "react"

import { getRandom } from "../../utils/functions"

import * as S from "./style"

const BackgroundCubes = () => {
  const COUNT = 10

  return (
    <S.BackgroundCubes>
      {[...Array(COUNT)].map((_, index) => {
        const size = getRandom(0, 10)
        const percentage = getRandom(1, 100)
        const delay = getRandom(0, 15)

        return (
          <li
            key={index}
            style={{
              left: `${percentage}%`,
              width: `${size}rem`,
              height: `${size}rem`,
              bottom: `-${size}rem`,
              animationDelay: `${delay}s`,
            }}
          />
        )
      })}
    </S.BackgroundCubes>
  )
}

export default BackgroundCubes
