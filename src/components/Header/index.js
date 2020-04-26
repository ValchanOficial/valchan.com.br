import PropTypes from "prop-types"
import React from "react"
import * as S from './style';

const Header = ({ siteTitle }) => (
    <S.Header>
      <S.HeaderLink to="/">{siteTitle}</S.HeaderLink>
      <S.HeaderAnimation>"What we know is a drop.. What we don't know is an ocean." - Isaac Newton</S.HeaderAnimation>
    </S.Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
