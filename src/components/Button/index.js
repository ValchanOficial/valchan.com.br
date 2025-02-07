import React from "react"
import * as S from "./style"

const Button = ({ children, onClick = () => {}, style }) => {
  return (
    <S.Button alt={children} title={children} onClick={onClick} style={style}>
      {children}
    </S.Button>
  )
}

export default Button
