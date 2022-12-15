import styled from "styled-components"
import media from "styled-media-query"

export const CommentsWrapper = styled.section`
  background: var(--background);
  color: var(--text);
  max-width: 70rem;
  padding: 3rem;
  width: 100%;
  align-self: center;

  iframe[src*="ads-iframe"] {
    display: none;
  }

  #disqus_thread {
    a {
      color: var(--color) !important;
    }
  }
  /* 
  ${media.lessThan("large")`
    display: none;
  `} */
`

export const CommentsTitle = styled.h2`
  text-align: center;
  color: var(--color);
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;

  ${media.lessThan("large")`
    font-size: 1.4rem;
  `}

  ${media.lessThan("large")`
    font-size: 1.2rem;
  `}
`
