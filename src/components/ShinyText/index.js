import React from "react"
import * as S from "./style"

const ShinyText = ({ children, disabled = false, speed = 4 }) => {
  const animationDuration = `${speed}s`

  return (
    <S.ShinyText disabled={disabled} style={{ animationDuration }}>
      {children}
    </S.ShinyText>
  )
}

export default ShinyText
