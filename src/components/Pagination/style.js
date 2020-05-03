import styled from 'styled-components';

export const PaginationWrapper = styled.section`
  margin-top: 0.5rem;
  align-items: center;
  border-top: 6px double var(--border);
  color: var(--text);
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;

  a {
    color: var(--text);
    font-weight: bold;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
        color: var(--color);
    }
  }
`