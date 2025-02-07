import styled from "styled-components"
import media from "styled-media-query"

export const LayoutWrapper = styled.section`
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
