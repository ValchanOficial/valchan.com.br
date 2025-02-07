import React from "react"
import * as S from "./style"

// https://codepen.io/jh3y/pen/OJwagZa
const CircularText = ({ children, side = 1.1 }) => {
  const CHARS = children.split("")
  const INNER_ANGLE = 360 / CHARS.length
  return (
    <S.CircularTextContainer>
      <S.CircularText
        style={{
          "--total": CHARS.length,
          "--radius": side / Math.sin(INNER_ANGLE / (180 / Math.PI)),
        }}
      >
        {CHARS.map((char, index) => (
          <span key={index} style={{ "--index": index }}>
            {char}
          </span>
        ))}
      </S.CircularText>
    </S.CircularTextContainer>
  )
}

export default CircularText
