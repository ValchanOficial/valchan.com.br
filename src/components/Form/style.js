import styled from "styled-components"
// import media from "styled-media-query";
// import { Link } from "gatsby";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

export const InputContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin-bottom: 1em;
`

export const Input = styled.input`
  width: 100%;
  height: 24px;
  border-radius: 2px;
  margin-left: 0.1em;
  margin-right: 0.1em;
`

export const Button = styled.button`
  cursor: pointer;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  border-radius: 4px;
  border-color: var(--border);
  background-color: var(--background);
  color: var(--text);
  font-size: 1rem;
  padding: 0.4em 1.6em;
  width: 100%;

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
