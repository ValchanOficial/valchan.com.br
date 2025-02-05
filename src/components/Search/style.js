import styled from "styled-components";

export const SearchWrapper = styled.section`
  background: var(--background-dark);
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
    padding: 0.5rem 0rem;
  }

  body#grid & {
    .ais-Hits-list {
      padding: 1em;
      background-color: var(--mains);
      display: grid;
      grid-area: card;
      grid-gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    .ais-Hits-item {
      background-color: var(--background-dark);
    }
  }

  .ais-Stats {
    color: var(--cta);
    margin-bottom: 2rem;
  }

  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 6px double var(--cta);
    color: var(--cta);
    display: flex;
    font-size: 1.6rem;
    padding: 0.5rem;
    width: 100%;

    &::placeholder {
      color: var(--cta);
    }
  }

  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`
