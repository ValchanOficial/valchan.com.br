import styled from "styled-components";

export const CommentsWrapper = styled.section`
  max-width: 70rem;
  padding: 3rem;

  iframe[src*="ads-iframe"] {
    display: none;
  }

  #disqus_thread {
    a {
      color: #A51073 !important;
    }
  }
`

export const CommentsTitle = styled.h2`
  text-align: center;
  color: #7F054E;
  font-size: 2.1rem;
  font-weight: 700;
  padding-bottom: 2rem;
`