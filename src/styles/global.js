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
    max-width: 100%;
  }

  p {
    font-style: normal;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: Dosis, Arial, Helvetica, sans-serif;
  }

  small {
    font-family: Montserrat, Arial, Helvetica, sans-serif;
  }

  address {
    font-size: 1rem;
    font-weight: 300;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    color: #A51073;
  }

  hr {
    border: 0;
    height: 2px;
    background-image: linear-gradient(to right, transparent, #7F054E, transparent);
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

  /* Themes */

  body.dark {
    --background: #232130;
    --text: #F1C4CB;
    --color: #E5183A;
    --mainTitle: #e43f5a;
    --secTitle: #F793A4;
    --postHeader: #FA607A;
    --link: #F1C4CB;
    --linkHover: #e43f5a;
    --colorTag: #E5183A;
    --colorTagTwo: #FA607A;
    --avatarColor: #e43f5a;
    --avatarColorTwo: #F793A4;
    --border: #e43f5a;
    --mark: #E5183A;
    --textarea: #e43f5a;
    --thead: #F1C4CB;
    --recommendedPost: #201E2D;
    --input: #e43f5a;
    --hover: #E5183A;
    --menuBarHover: #e43f5a;
  }
  
  body.light {
    --background: #F1C4CB;
    --text: #222;
    --color: #E5183A;
    --mainTitle: #e43f5a;
    --secTitle: #222;
    --postHeader: #E5183A;
    --link: #222;
    --linkHover: #E5183A;
    --colorTag: #E5183A;
    --colorTagTwo: #FA607A;
    --avatarColor: #E5183A;
    --avatarColorTwo: #F793A4;
    --border: #e43f5a;
    --mark: #FA607A;
    --textarea: #FA607A;
    --thead: #F1C4CB;
    --recommendedPost: #F793A4;
    --input: #FA607A;
    --hover: #FA607A;
    --menuBarHover: #e43f5a;
  }

  *{
    scrollbar-color: #FA607A #F793A4;
    scrollbar-shadow-color: none;
  }

`
export default GlobalStyles;