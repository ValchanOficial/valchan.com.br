import styled from "styled-components";

export const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
`

export const PostHeader = styled.header`
  color: #A51073;
  padding: 0;
`

export const PostTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

export const PostDescription = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  padding-left: 0.1em;
`

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  padding-left: 0.1rem;
`

export const MainContent = styled.section`
  max-width: 70rem;

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: #A51073;
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
  }

  p {
    color: black;
    margin: 0 auto 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }

  ul,
  ol {
    padding-left: 1.5rem;
    margin: 0 auto 1.6rem;
  }

  ol {
    list-style: normal;
  }

  ol[class="letters"] {
    list-style: lower-latin;
  }

  ol[class="roman"] {
    list-style: upper-roman;
  }

  ul {
    list-style: circle;
  }

  li {
    padding: 0.625rem 0;

    & > ul {
      margin-bottom: 0;
    }
  }

  p,
  li {
    code {
      word-wrap: break-word;
    }
  }

  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }

  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }

  blockquote {
    display:flex;
    margin: auto;
    flex-direction: column;
    color: #A51073;
    font-family: Dosis, Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    font-style: italic;
    width: 70%;
    margin: 2rem auto 2rem auto;
  }

  blockquote p::before,
  blockquote p::after {
    content: "“";
    color: #A51073;
    font-size: 7rem;
    font-family: Georgia;
    margin: -3rem 0 0 -3rem;
    position: absolute;
    opacity: 0.5;
  }

  blockquote p::after {
    content: "”";
    color: #A51073;
    margin: -2rem -4rem 0 0;
  }

  blockquote cite {
    text-align: center;
    color: black;
    font-size: 1.5rem;
    font-weight: 700;
  }

  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }

  h1 {
    font-size: 2.8rem;
  }

  h2 {
    font-size: 2.1rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  h4 {
    font-size: 1.4rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  strong {
    font-size: 1.2rem;    
    font-weight: 400;
  }

  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;

    &.lazyload {
      opacity: 0;
    }

    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }

  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
  }

  .instagram-media {
    margin: 1rem auto !important;
  }

  a {
    font-weight: 300;
    text-shadow: 1px 0.5px black;
    color: #A51073;
    text-decoration: none;
    transition: font-weight 0.3s;

    svg {
      color: #A51073;
    }

    &:hover {
      font-weight: 500;
    }
    
  }

  a[class="hashtag"], a[href*="twitter"] {
    border-bottom: none;
  }

  dl {
    font-size: 1.25rem;
    font-weight: 300;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    color: black;
  }

  form, input, select {
    font-size: 1.2rem;
    font-weight: 300;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    color: black;
  }

  input, select {
    border-color: none;
    background: #FFD3E5;
  }

  select {
	  cursor: pointer;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    font-size: 1.25rem;
    font-weight: bold;
    color: black;
    background: #EAB9E1;
    padding: 0.2rem;

    border: none;
    -moz-border-radius: 1rem 1rem 1rem 1rem;
    -webkit-border-radius: 1rem 1rem 1rem 1rem;
    border-radius: 1rem 1rem 1rem 1rem;
    box-shadow: 1px 1px 11px #A51073;
  }

  table {
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 0.1rem solid #A51073;
  }

  thead {
    background: #EAB9E1;
    border: 0.1rem solid #A51073;
  }

  thead th{
    font-weight: 500;
  }

  th, td {
    border: 0.1rem solid #A51073;
    font-weight: 300;
    text-align: left;
    padding: 8px;
  }

  mark {
    background: #EAB9E1;
  }

  textarea::before {
    border-radius: 8px;
  }

  textarea {
    display:flex;
    border-radius: 8px;
    padding: 0.8rem;
    margin: auto;
    min-height: 10rem;
    border: none;
    background: #EAB9E1;
  }

  video, img, figure{
    display:flex;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    min-height: 20rem;
    max-width: 30rem;
    max-height: 30rem;
  }

  figure, figcaption {
    flex-direction: column;
    align-content: center;
    align-items: center;

    font-size: 1.2rem;
    font-weight: 300;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    color: black;
  }

  pre {
    font-family: Monaco, monospace;
    font-size: 1em;
  }

  code {
    background: #2d2d2d;
    color: white;
    font-family: Monaco, monospace;
    font-size: 1em;
    page-break-inside: avoid;
  
    tab-size: initial;
    overflow: auto;
    white-space: pre-wrap;
    line-height: 1.2em;
    word-wrap: break-word;

    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: block;

    border-radius: 15px;
    border-left: 3px solid #A51073;
    border-right: 3px solid #A51073;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: Dosis, Arial, Helvetica, sans-serif;
    color: #A51073;
  }

  aside {
    font-size: 1rem;
    font-weight: 300;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    color: #A51073;
  }

`