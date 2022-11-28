import styled from "styled-components"

export const ListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 100%;

  body#grid & {
    background-color: var(--borders);
    border-bottom: 1px solid var(--borders);
    display: grid;
    grid-area: posts;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 1fr;
  }
`
