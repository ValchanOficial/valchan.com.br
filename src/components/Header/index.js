import PropTypes from "prop-types"
import React from "react"
import * as S from "./style"

const Header = ({ siteTitle = "Valchan", isPost = false }) => (
  <>
    {isPost && (
      <S.LinkGroup>
        <S.LinkWrapper to="/" id="link">
          Home
        </S.LinkWrapper>
      </S.LinkGroup>
    )}

    {!isPost && (
      <>
        <S.LinkGroup>
          <S.LinkWrapper to="#about" id="link">
            Sobre
          </S.LinkWrapper>
          <S.LinkWrapper to="#work" id="link">
            Experiência
          </S.LinkWrapper>
          <S.LinkWrapper to="#blog" id="link">
            Blog
          </S.LinkWrapper>
          <S.LinkWrapper to="#contact" id="link">
            Contato
          </S.LinkWrapper>
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
  siteTitle: `Valchan`,
}

export default Header
