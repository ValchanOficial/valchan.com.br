import styled from "styled-components";
import media from "styled-media-query";

export const PostContent = styled.div`
    background: var(--background);
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
    border: 2px solid var(--border);
    border-radius: 1rem;
    padding: 1rem;
    margin-bottom: 1rem;
`

export const PostHeader = styled.header`
  color: var(--postHeader);
  padding: 0;
`

export const PostTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  
  ${media.lessThan("large")`
    font-size: 2rem;
  `}

  ${media.lessThan("medium")`
    font-size: 1.5rem;
  `}
`

export const PostDescription = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  padding-left: 0.1em;

  ${media.lessThan("large")`
    font-size: 1.2rem;
  `}

  ${media.lessThan("medium")`
    font-size: 1rem;
  `}
`

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  padding-left: 0.1rem;

  ${media.lessThan("large")`
    font-size: 1rem;
  `}
`

export const MainContent = styled.section`
  max-width: 70rem;

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  em,
  strong,
  samp,
  form,
  kbd,
  s,
  var,
  iframe {
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    color: var(--text);
    font-size: 1.15rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;

    ${media.lessThan("large")`
      font-size: 1rem;
    `}  

    ${media.lessThan("medium")`
      font-size: 0.9rem;
    `}  
  }

  p {
    margin: 0 auto 1.6rem;
  }

  ul,
  ol {
    padding-left: 1.5rem;
    margin: 0 auto 1.6rem;
  }

  ol {
    color: var(--text);
    list-style: normal;
  }

  ol[class="letters"] {
    list-style: lower-latin;
  }

  ol[class="roman"] {
    list-style: upper-roman;
  }

  ul {
    color: var(--text);
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
  }

  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }

  blockquote {
    display:flex;
    margin: auto;
    flex-direction: column;
    color: var(--color);
    font-family: Dosis, Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    font-style: italic;
    width: 70%;
    margin: 2rem auto 2rem auto;
  }

  blockquote p::before,
  blockquote p::after {
    content: "“";
    color: var(--color);
    font-size: 7rem;
    font-family: Georgia;
    margin: -3rem 0 0 -3rem;
    position: absolute;
    opacity: 0.5;

    ${media.lessThan("medium")`
      font-size: 6rem;
    `}
  }

  blockquote p::after {
    content: "”";
    color: var(--color);
    margin: -2rem -4rem 0 0;
  }

  blockquote cite {
    text-align: center;
    color: var(--text);
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
  h5,
  h6 {    
    font-family: Dosis, Arial, Helvetica, sans-serif;
    color: var(--secTitle);
    margin: 2.4rem auto 1rem;
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

    ${media.lessThan("medium")`
      font-size: 1rem;
    `}
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
    text-shadow: 1px 0.5px var(--color);
    color: var(--link);
    text-decoration: none;
    transition: font-weight 0.3s;

    svg {
      color: var(--linkHover);
    }

    &:hover {
      color: var(--linkHover);
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
    color: var(--text);

    ${media.lessThan("large")`
      font-size: 1rem;
    `}
  }

  form, input, select {
    font-size: 1.2rem;
    font-weight: 300;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    color: var(--text);

    ${media.lessThan("large")`
      font-size: 1rem;
    `}
  }

  input, select {
    border-color: none;
    background: var(--input);
  }

  select {
	  cursor: pointer;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--text);
    background: var(--color);
    padding: 0.2rem;

    border: none;
    -moz-border-radius: 1rem 1rem 1rem 1rem;
    -webkit-border-radius: 1rem 1rem 1rem 1rem;
    border-radius: 1rem 1rem 1rem 1rem;
    box-shadow: 1px 1px 11px var(--color);

    ${media.lessThan("large")`
      font-size: 1rem;
    `}
  }

  table {
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    font-size: 1rem;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 0.1rem solid var(--color);

    ${media.lessThan("large")`
      font-size: 1rem;
    `}
  }

  thead {
    background: var(--thead);
    border: 0.1rem solid var(--color);
  }

  thead th{
    font-weight: 500;
  }

  th, td {
    border: 0.1rem solid var(--color);
    font-weight: 300;
    text-align: left;
    padding: 8px;
  }

  mark {
    color: var(--text);
    background: var(--mark);
  }

  textarea::before {
    border-radius: 8px;
  }

  textarea {    
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    color: var(--text);
    font-size: 1rem;
    display:flex;
    border-radius: 8px;
    padding: 0.8rem;
    margin: auto;
    min-height: 10rem;
    min-width: 10rem;
    border: none;
    background: var(--textarea);

    ${media.lessThan("large")`
      font-size: 0.9rem;
      width: 40rem;
    `}

    ${media.lessThan("medium")`
      width: 20rem;
    `}
  }

  video, img, figure, iframe {
    display:flex;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    min-height: 20rem;
    max-width: 30rem;
    max-height: 30rem;  

    ${media.lessThan("large")`
      background: blue;
      width: 25rem;
    `}

    ${media.lessThan("medium")`
      background: blue;
      width: 20rem;
    `}
  }  

  .smallSize p img, span img {
    min-height: 10rem;
    max-height: 10rem; 
    max-width: auto;
  }

  .averageSize p img, span img {
    min-height: auto;
    max-width: 45rem;
  }

  .images-row {
    display: flex;
    flex-wrap: wrap;
  }

  .images-column {
    flex: 33.33%;
  }

  .images-column p img, span img {
    min-height: auto;
    max-width: 20rem;
  }

  .rounded-image p img, span img {
    border-radius: 100%;
  }

  .images-column p span span {
    display: none;
  }

  .rounded-image p span span {
    display: none;
  }  

  .smallSize p span span {
    display: none;
  }

  .averageSize p span span {
    display: none;
  }

  figure, figcaption {
    flex-direction: column;
    align-content: center;
    align-items: center;

    font-size: 1.2rem;
    font-weight: 300;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    color: var(--text);
  }

  aside {
    font-size: 1rem;
    font-weight: 300;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    color: var(--color);
  }

`