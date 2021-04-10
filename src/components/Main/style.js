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
    padding-right: 1rem;
    padding-left: 1rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${media.greaterThan("large")`
      width: 75%;
    `}

    body#grid & {
      grid-template-areas: "posts" "pagination";
    }

    /* ${media.lessThan("large")`
      width: 95%;
      padding: 0 3rem;
      padding-right: 1rem;
    `} */
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