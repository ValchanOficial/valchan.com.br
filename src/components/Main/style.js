import styled from "styled-components"
import media from "styled-media-query"

export const Page = styled.div`
  position: relative;
`

export const SkipLink = styled.a`
  position: absolute;
  top: -3rem;
  left: 1rem;
  z-index: 100;
  padding: 0.5rem 1rem;
  background: var(--text-dark);
  color: var(--text-light);
  font-family: "Atkinson Hyperlegible", sans-serif;
  text-decoration: none;

  &:focus {
    top: 1rem;
  }
`

export const LayoutWrapper = styled.main`
  position: relative;
  background: var(--background-dark);
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const LayoutMain = styled.main`
  background: var(--background-dark);
  padding-right: 1rem;
  padding-left: 1rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.greaterThan("large")`
      width: 70%;
    `}

  body#grid & {
    grid-template-areas: "posts" "pagination";
  }

  ${media.lessThan("large")`
      width: 100%;
    `}
`

export const Content = styled.div`
  background: var(--background-dark);
  display: flex;
  flex-direction: row-reverse;

  ${media.lessThan("large")`
      flex-direction: column;
      align-items: center;
    `}
`
