import styled from "styled-components";

export const LayoutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const LayoutMain = styled.main`
    background: #FFE9F7;
    height: 100vh;
    width: 100vw;
    padding: 0 3.75rem 0 20rem;
    width: 100%;
`

export const Content = styled.div`
    display: flex;
    flex-direction: row-reverse;
`

export const Footer = styled.footer`
  font-family: Montserrat, Arial, Helvetica, sans-serif;
  text-align: center;
  padding-bottom: 10px;
  width: 100vw;
  color: #720A4C;
  bottom: 0;
`