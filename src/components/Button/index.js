import React from "react"
import * as S from "./style"

const Button = ({
  children,
  onClick = () => {},
  disabled = false,
  type = "button",
  style,
  "aria-label": ariaLabel,
}) => {
  return (
    <S.Button
      type={type}
      title={typeof children === "string" ? children : undefined}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}
    </S.Button>
  )
}

export default Button
