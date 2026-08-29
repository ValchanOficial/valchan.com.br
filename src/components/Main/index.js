import PropTypes from "prop-types"
import React from "react"

import GlobalStyles from "../../styles/global"
import * as S from "./style"

const Main = ({ children }) => {
  return (
    <S.Page>
      <GlobalStyles />
      <S.SkipLink href="#main-content">Ir para o conteúdo principal</S.SkipLink>
      <S.LayoutWrapper id="main-content" tabIndex={-1}>
        {children}
      </S.LayoutWrapper>
    </S.Page>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
