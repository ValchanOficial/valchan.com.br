import React from "react"
import PropTypes from "prop-types"
import * as S from "./style"

const Header = ({ siteTitle = "Valchan", isPost = false }) => (
  <>
    {isPost && (
      <S.LinkGroup as="nav" aria-label="Navegação do post">
        <S.LinkWrapper to="/">Home</S.LinkWrapper>
      </S.LinkGroup>
    )}

    {!isPost && (
      <>
        <S.LinkGroup as="nav" aria-label="Navegação principal">
          <S.LinkWrapper to="#about">Sobre</S.LinkWrapper>
          <S.LinkWrapper to="#projects">Projetos</S.LinkWrapper>
          <S.LinkWrapper to="#work">Experiência</S.LinkWrapper>
          <S.LinkWrapper to="#blog">Blog</S.LinkWrapper>
          <S.LinkWrapper to="#contact">Contato</S.LinkWrapper>
        </S.LinkGroup>

        <S.Header id="header">
          <S.Title>{siteTitle}</S.Title>
          <S.Role>Software Developer</S.Role>
          <S.Quote>
            “What we know is a drop.. What we don't know is an ocean.” - Isaac
            Newton
          </S.Quote>
        </S.Header>
      </>
    )}
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "Valchan",
}

export default Header
