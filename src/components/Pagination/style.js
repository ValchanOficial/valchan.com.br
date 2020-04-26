import styled from 'styled-components';

export const PaginationWrapper = styled.section`
  margin-top: 0.5rem;
  align-items: center;
  border-top: 6px double #7F054E;
  color: black;
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;

  a {
    color: black;
    font-weight: bold;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
        color: #A51073;
    }
  }
`