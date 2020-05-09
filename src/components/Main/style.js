import styled from "styled-components";
import media from "styled-media-query";

export const LayoutWrapper = styled.section`
  background: var(--background);
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const LayoutMain = styled.main`
    background: var(--background);
    padding-right: 2rem;
    padding-left: 4rem;
    width: 100%;

    body#grid & {
      grid-template-areas: "posts" "pagination";
    }

    ${media.lessThan("large")`
      margin: 0;
      padding-left: 2.5rem;
      padding-right: 2.5rem;
    `}
`

export const Content = styled.div`
    background: var(--background);
    display: flex;
    flex-direction: row-reverse;

    ${media.lessThan("large")`
      flex-direction: column;
      align-items: center;
    `}
`