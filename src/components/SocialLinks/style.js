import styled from "styled-components"
import media from "styled-media-query"

export const SocialLinksWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const SocialLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  flex-wrap: wrap;
  width: 100%;
  gap: 0.5rem;
  margin-left: 0.2rem;

  ${media.lessThan("large")`
    justify-content: center;
    margin: 0;
  `}
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
  color: var(--text);
  text-decoration: none;
  transition: color 0.5s;

  &:hover {
    color: var(--text-light);
  }
`

export const Icon = styled.div`
  fill: var(--text);
  width: 2rem;
  height: auto;

  svg {
    height: 30px;
    width: 30px;
  }

  ${media.lessThan("large")`
    width: 3rem;
    margin-left: 0.2rem;

    svg {
      height: 40px;
      width: 40px;
    }
  `}
`
