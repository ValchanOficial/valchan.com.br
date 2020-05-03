import styled from "styled-components";

export const SearchWrapper = styled.section`
  background: var(--background);
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;

  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }

  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 3rem;
  }

  body#grid & {
    .ais-Hits-list {
      padding: 1em;
      background-color: var(--borders);
      display: grid;
      grid-area: card;
      grid-gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    .ais-Hits-item {
      background-color: var(--background);
    }
  }

  .ais-Stats {
    color: var(--color);
    margin-bottom: 2rem;
  }

  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 6px double var(--color);
    color: var(--color);
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 100%;

    &::placeholder {
      color: var(--color);
    }
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`