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
    background: #FFE9F7;
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
    color: #BE95C4;
  }

  hr {
    border: 0;
    height: 2px;
    background-image: linear-gradient(to right, transparent, #BE95C4, transparent);
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
    border-left: 3px solid var(--border);
    border-right: 3px solid var(--border);
  }

  .notFound {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2.5rem;
    text-align: center;
    font-weight: 700;
    color: var(--color);
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

  /* Themes */

  body.dark {
    --background: #18191A;
    --text: #edeced;
    --color: #5E548E;
    --mainTitle: #5E548E;
    --secTitle: #CEB1E0;
    --postHeader: #9F86C0;
    --link: #8075B6;
    --linkHover: #5E548E;
    --colorTag: #231942;
    --colorTagTwo: #9F86C0;
    --avatarColor: #5E548E;
    --avatarColorTwo: #CEB1E0;
    --border: #5E548E;
    --mark: #BE95C4;
    --markText: #222;
    --textarea: #5E548E;
    --thead: #BE95C4;
    --recommendedPost: #242526;
    --input: #5E548E;
    --hover: #231942;
  }
  
  body.light {
    --background: #FFF4FF;
    --text: #222;
    --color: #231942;
    --mainTitle: #5E548E;
    --secTitle: #222;
    --postHeader: #231942;
    --link: #5E548E;
    --linkHover: #5E548E;
    --colorTag: #231942;
    --colorTagTwo: #9F86C0;
    --avatarColor: #231942;
    --avatarColorTwo: #CEB1E0;
    --border: #5E548E;
    --mark: #9F86C0;
    --markText: #222;
    --textarea: #9F86C0;
    --thead: #BE95C4;
    --recommendedPost: #CEB1E0;
    --input: #9F86C0;
    --hover: #9F86C0;
  }

  *{
    scrollbar-color: #9F86C0 #CEB1E0;
    scrollbar-shadow-color: none;
  }

`
export default GlobalStyles
