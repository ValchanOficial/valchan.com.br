import styled from "styled-components"

export const Container = styled.form`
  font-family: "Atkinson Hyperlegible", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

export const InputContainer = styled.div`
  font-family: "Atkinson Hyperlegible", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin-bottom: 1em;
`

export const Field = styled.div`
  width: 100%;
`

export const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

export const Input = styled.input`
  font-family: "Atkinson Hyperlegible", sans-serif;
  width: 100%;
  height: 24px;
  border-radius: 2px;
  margin-left: 0.1em;
  margin-right: 0.1em;
`
