import styled from 'styled-components';
import media from "styled-media-query";

export const PaginationWrapper = styled.section`
  margin-top: 0.5rem;
  align-items: center;
  border-top: 6px double var(--border);
  color: var(--text);
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  margin-bottom: 3rem;
  width: 100%;

  a {
    color: var(--text);
    font-weight: bold;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    text-decoration: none;
    transition: color 0.5s;
    white-space: nowrap;
    display: flex;
    align-items: center;

    &:hover {
      color: var(--color);
    }

    > svg {
      width: 30px;
    }

  }

  > p {
    white-space: nowrap;
  }

  ${media.lessThan("medium")`
    font-size: 0.8rem;
    padding: 1rem 0;

    a {
      > span {
        display: none;
      }

      > svg {
        width: 40px;
      }
    }
  `}
`