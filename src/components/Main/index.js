import PropTypes from "prop-types"
import React from "react"

import GlobalStyles from "../../styles/global"
import * as S from "./style"

const Main = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      {children}
    </S.LayoutWrapper>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
