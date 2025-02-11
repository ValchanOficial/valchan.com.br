import React from "react"
import { getRandom } from "../../utils/functions"
import * as S from "./style"

const BackgroundSparklesStars = () => {
  const COUNT = 100

  return (
    <S.BackgroundSparklesStars>
      {[...Array(COUNT)].map((_, index) => {
        const bottom = getRandom(0, 100)
        const left = getRandom(0, 100)
        const delay = getRandom(0, 15)

        return (
          <li
            key={index}
            style={{
              bottom: `${bottom}rem`,
              left: `${left}%`,
              animationDelay: `${delay}s`,
            }}
          />
        )
      })}
    </S.BackgroundSparklesStars>
  )
}

export default BackgroundSparklesStars
