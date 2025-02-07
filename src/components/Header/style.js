import { Link } from "gatsby"
import styled from "styled-components"
import media from "styled-media-query"

export const LinkGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 5rem;
  margin-top: 5rem;

  > a::after {
    content: "";
    display: inline-block;
    position: absolute;
    height: 1.5rem;
    width: 2px;
    background-color: var(--text-light);
    margin-left: 0.6rem;

    ${media.lessThan("large")`
      height: 0.8rem;
      margin-left: 0.4rem;
    `}
  }

  > a:last-child::after {
    display: none;
  }

  ${media.lessThan("large")`
    justify-content: center;
    margin: 5rem 0;
  `}
`

export const LinkWrapper = styled(Link)`
  color: var(--text-light);
  text-decoration: none;
  font-family: "Libre Baskerville", serif;
  font-size: 1.5rem;
  margin-right: 1.5rem;
  text-transform: uppercase;

  &:hover {
    color: var(--main);
  }

  ${media.lessThan("large")`
    font-size: 0.8rem;
    margin-right: 1rem;
  `}
`

export const Header = styled.header`
  background: var(--background-dark);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 60rem;
  margin: 15rem auto;

  ${media.lessThan("large")`
      display: none;
  `}

  > p:nth-child(1) {
    align-self: flex-start;
  }
  > p:nth-child(2) {
    align-self: center;
  }
  > q:nth-child(3) {
    align-self: flex-end;
  }
`

export const Title = styled.p`
  color: var(--main);
  text-shadow: 0 0.05rem var(--text);
  text-decoration: none;
  font-family: "Libre Baskerville", serif;
  font-size: 8rem;
  margin-bottom: 0.1rem;
`

export const Role = styled.p`
  color: var(--main);
  text-shadow: 0 0.05rem var(--text);
  text-decoration: none;
  font-family: "Libre Baskerville", serif;
  font-size: 4rem;
  margin-bottom: 1rem;
`

export const Quote = styled.q`
  color: var(--text-light);
  font-family: "Inter", serif;
  font-size: 1.5rem;
  text-align: center;
  max-width: 43rem;
  text-align: start;
`
