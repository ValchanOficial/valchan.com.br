import styled from "styled-components"
import media from "styled-media-query"

export const PostContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const PostContent = styled.div`
  background: var(--background-light);
  display: flex;
  flex-direction: column;
  border: 1px solid var(--main);
  padding: 2rem;
  margin: 1rem;
  width: 100%;
  align-items: center;

  ${media.lessThan("large")`
    padding: 1rem 0.5rem;
  `}
`

export const PostHeader = styled.header`
  color: var(--main);
  padding: 0;
  align-self: flex-start;
`

export const PostTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
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
  font-weight: 400;
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
  font-weight: 400;
  padding-left: 0.1rem;

  ${media.lessThan("large")`
    font-size: 1rem;
  `}
`

export const MainContent = styled.section`
  width: 100%;

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
    font-family: "Atkinson Hyperlegible", sans-serif;
    color: var(--text);
    font-size: 1.15rem;
    font-weight: 400;
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

  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }

  blockquote {
    display: flex;
    margin: auto;
    flex-direction: column;
    color: var(--cta);
    font-family: "Atkinson Hyperlegible", sans-serif;
    font-size: 1.5rem;
    font-style: italic;
    width: 70%;
    margin: 2rem auto 2rem auto;
  }

  blockquote p::before,
  blockquote p::after {
    content: "“";
    color: var(--cta);
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
    color: var(--cta);
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
    font-family: "Atkinson Hyperlegible", sans-serif;
    color: var(--text);
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
    padding: 0;

    ${media.lessThan("large")`
      padding: 0;
    `}
  }

  .instagram-media {
    margin: 1rem auto !important;
  }

  a {
    font-weight: 400;
    color: var(--cta);
    transition: font-weight 0.3s;

    svg {
      color: var(--main);
    }

    &:hover {
      color: var(--text-dark);
      font-weight: 500;
    }
  }

  a[class="hashtag"],
  a[href*="twitter"] {
    border-bottom: none;
  }

  dl {
    font-size: 1.25rem;
    font-weight: 400;
    font-family: "Atkinson Hyperlegible", sans-serif;
    color: var(--text);

    ${media.lessThan("large")`
      font-size: 1rem;
    `}
  }

  form,
  input,
  select {
    font-size: 1.2rem;
    font-weight: 400;
    font-family: "Atkinson Hyperlegible", sans-serif;
    color: var(--text);

    ${media.lessThan("large")`
      font-size: 1rem;
    `}
  }

  input,
  select {
    border-color: none;
    background: var(--secondary);
  }

  select {
    cursor: pointer;
    font-family: "Atkinson Hyperlegible", sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text);
    background: var(--cta);
    padding: 0.2rem;

    border: none;
    -moz-border-radius: 1rem 1rem 1rem 1rem;
    -webkit-border-radius: 1rem 1rem 1rem 1rem;
    border-radius: 1rem 1rem 1rem 1rem;
    box-shadow: 1px 1px 11px var(--cta);

    ${media.lessThan("large")`
      font-size: 1rem;
    `}
  }

  table {
    font-family: "Atkinson Hyperlegible", sans-serif;
    font-size: 1.1rem;
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    color: var(--text);
    line-height: 1.6;

    ${media.lessThan("large")`
      font-size: 0.8rem;
      word-break: break-word;
    `}
  }

  thead {
    background: var(--cta);
    border: 0.1rem solid var(--cta);
  }

  thead th {
    font-weight: 500;
  }

  th,
  td {
    color: var(--text);
    border: 0.1rem solid var(--cta);
    font-weight: 400;
    text-align: left;
    padding: 8px;

    > a {
      color: var(--text);
      transition: unset;
      text-shadow: unset;
      pointer-events: none;
    }
  }

  mark {
    color: var(--text);
    background: var(--secondary);
    font-weight: 700;
  }

  textarea::before {
    border-radius: 8px;
  }

  textarea {
    font-family: "Atkinson Hyperlegible", sans-serif;
    color: var(--text);
    font-size: 1rem;
    display: flex;
    border-radius: 8px;
    padding: 0.8rem;
    margin: auto;
    min-height: 10rem;
    min-width: 10rem;
    border: none;
    background: var(--secondary);

    ${media.lessThan("large")`
      font-size: 0.9rem;
      width: 40rem;
    `}

    ${media.lessThan("medium")`
      width: 20rem;
    `}
  }

  video,
  figure,
  iframe {
    display: flex;
    margin: auto;
    width: auto;
    background: transparent;
    margin-top: 1rem;
    margin-bottom: 1rem;
    min-height: 20rem;
    ${media.lessThan("large")`
      width: 30rem;
    `}

    ${media.lessThan("medium")`
      width: 20rem;
    `}
  }
  */ figure,
  figcaption {
    flex-direction: column;
    align-content: center;
    align-items: center;

    font-size: 1.2rem;
    font-weight: 400;
    font-family: "Atkinson Hyperlegible", sans-serif;
    color: var(--text);
  }

  aside {
    font-size: 1rem;
    font-weight: 400;
    font-family: "Atkinson Hyperlegible", sans-serif;
    color: var(--cta);
  }

  ${media.lessThan("large")`
    word-break: break-word;
  `}
`
