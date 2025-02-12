import styled from "styled-components"
// import media from "styled-media-query";
// import { Link } from "gatsby";

export const Container = styled.div`
  font-family: "Atkinson Hyperlegible", sans-serif;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  max-width: 500rem;
  margin-top: 2rem;
`

export const Message = styled.p`
  font-family: "Atkinson Hyperlegible", sans-serif;
  margin-top: 0.5em;
  width: 210px;
  color: var(--text);
  font-size: 1.1rem;
  width: 100%;
  text-align: center;
`

export const Text = styled.p`
  font-family: "Atkinson Hyperlegible", sans-serif;
  margin-bottom: 0.8em;
  color: var(--text);
  font-size: 1.5rem;
`
