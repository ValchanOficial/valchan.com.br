import styled from "styled-components"

export const Button = styled.button`
  background: var(--main);
  cursor: pointer;
  font-family: "Inter", serif;
  color: var(--text-dark);
  font-size: 1.4rem;
  padding: 0.8em 4.5em;
  font-weight: bold;
  text-transform: uppercase;

  &:active {
    opacity: 0.8;
  }

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`
