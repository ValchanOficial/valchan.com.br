import styled from "styled-components";

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
`

export const Content = styled.div`
    background: var(--background);
    display: flex;
    flex-direction: row-reverse;
`