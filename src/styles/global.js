import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    width: 100vw;
    overflow-x: hidden;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }

  body {
    background: var(--background-dark);
    line-height: 1;
    font-size: 100%;
  }

  img {
    display: block;
    max-width: 80%;
    margin: auto;
  }

  p {
    font-style: normal;
    font-family: "Atkinson Hyperlegible", sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: "Atkinson Hyperlegible", sans-serif;
  }

  small {
    font-family: "Atkinson Hyperlegible", sans-serif;
  }

  address {
    font-size: 1rem;
    font-weight: 400;
    font-family: "Atkinson Hyperlegible", sans-serif;
    color: var(--secondary);
  }

  hr {
    border: 0;
    height: 2px;
    background-image: linear-gradient(to right, transparent, var(--secondary), transparent);
  }

  code[class*="language-"], pre[class*="language-"] {
    white-space: pre-wrap;
    line-height: 1.3em;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  pre {
    margin: 1rem;
    padding: 1rem;
    background: #2d2d2d;
    color: white;
    border-radius: 15px;
    border-left: 3px solid var(--main);
    border-right: 3px solid var(--main);
  }

  .notFound {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2.5rem;
    text-align: center;
    font-weight: 700;
    color: var(--cta);
  }

  .notFound__img {
    max-height: 50rem;
    height: 100%;
  }

  .smallSizeLeft p img,  .smallSizeLeft p span img{
    min-height: 10rem;
    max-height: 10rem;
    margin: 0 !important;
  }

  .smallSize p img,  .smallSize p span img{
    min-height: 10rem;
    max-height: 10rem;
    margin: auto !important;
  }

  .mediumSize p img, .mediumSize p span img {
    min-height: auto;
    max-height: 20rem;
  }

  .midSize p img, .midSize p span img {
    min-height: auto;
    max-height: 35rem;
  }

  .averageSize p img, .averageSize p span img {
    min-height: auto;
    max-height: 50rem;
  }

  .images-row {
    display: flex;
    flex-wrap: wrap;
  }

  .images-column {
    flex: 33.33%;
  }

  .images-column p span img {
    min-height: auto;
    max-width: 20rem;
  }

  .rounded-image p span img {
    border-radius: 100%;
  }

  .gatsby-resp-image-wrapper {
    display: flex !important;;
    justify-content: center !important;;
    margin: auto !important;
  }

  .gatsby-resp-image-background-image {
    display: none !important;
  }

  .gatsby-resp-image-image {
    width: auto !important;
    position: relative !important;
    background: transparent !important;
    margin-top: 1rem !important;
    min-height: 20rem;
    max-height: 30rem;
  }

  * {
    scroll-behavior: smooth;
    scrollbar-color: #222 #cdad7d;
    scrollbar-shadow-color: none;

    --background-dark: #131e3d;
    --background-light: #f4f1ec;
    --main: #cdad7d;
    --text-dark: #222344;
    --text-light: #f4f1ec;
    --cta: #cdad7d;
    --secondary: #dbbf94;
  }

  
  /* [
    #F7E9CC, #131415, #20304f, #A4BECD, #E3D87B, #FDFEF9,
    #4F364B, #262628, #DB3E1D, #C6C3F2, #D6DC82, #FFF6EF,
    #676652, #292929, #70877f, #DDA05D, #EDDDC7, #F6F2EA,
    #D2E8FF, #A37F4F, #413524, #1f2744, #E2CDA5, #F8F0E2
  ] */
`
export default GlobalStyles
