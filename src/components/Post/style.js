import styled from "styled-components";

export const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2em;
`

export const PostHeader = styled.header`
  color: #A51073;
`

export const PostTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

export const PostDescription = styled.h2`
  font-size: 1.5rem;
  font-weight: 200;
  margin-bottom: 2rem;
`

export const PostDate = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
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
    list-style: circle;
    padding-left: 1.5rem;
    margin: 0 auto 1.6rem;
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
    color: #A51073;
    border-left: 0.3rem solid #A51073;
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }

  hr {
    border: 1px solid #38444d;
    margin: 3rem auto;
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
    border-bottom: 1px dashed #A51073;
    color: #A51073;
    text-decoration: none;
    transition: opacity 0.5s;

    svg {
      color: #A51073;
    }

    &:hover {
      opacity: 0.8;
    }
  }

  pre {
    background: #2d2d2d;
    display: block;
    color: white;
    border-radius: 10px;
    font-family: monospace;
    font-size: 15px;
    line-height: 1.2em;
    max-width: 100%;
    overflow: auto;
    word-wrap: break-word;
    margin-bottom: 1rem;
    padding: 1em;
  }
`