import React from "react"

import Icons from "../Icons"
import * as S from "./style"

const MenuBar = () => {
  return (
    <S.MenuBarWrapper aria-label="Menu rápido">
      <S.MenuBarLink to="/" aria-label="Voltar para Home">
        <S.MenuBarIcon aria-hidden="true">
          <Icons.Home />
        </S.MenuBarIcon>
      </S.MenuBarLink>

      <S.MenuBarLink to="/search" aria-label="Pesquisar">
        <S.MenuBarIcon aria-hidden="true">
          <Icons.Search />
        </S.MenuBarIcon>
      </S.MenuBarLink>
    </S.MenuBarWrapper>
  )
}

export default MenuBar
