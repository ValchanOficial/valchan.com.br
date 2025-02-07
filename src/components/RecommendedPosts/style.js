import { Link } from "gatsby"
import styled from "styled-components"
import media from "styled-media-query"

export const RecommendedWrapper = styled.section`
  display: flex;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 0.5rem;

  ${media.lessThan("large")`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
`

export const RecommendedLink = styled(Link)`
  background: var(--background-dark);
  font-weight: 700;
  font-family: "Atkinson Hyperlegible", sans-serif;
  align-items: center;
  color: var(--cta);
  display: flex;
  padding: 2.8rem;
  text-decoration: none;
  transition: background-color 0.5s;
  width: 50%;
  margin: 0.2rem;

  &:hover {
    color: var(--text);
    background-color: var(--cta);
  }

  &.previous {
    border-radius: 1rem;
    transition: border-bottom 300ms ease-in-out;
  }

  &.next {
    border-radius: 1rem;
    justify-content: flex-end;
    transition: border-bottom 300ms ease-in-out;
  }

  svg {
    height: 30px;
    width: 30px;
    margin: 0.5rem;
  }

  ${media.lessThan("medium")`
        width: unset;
        margin: unset;
        margin-bottom: 1rem;
        padding: 0;

        > span {
            font-size: 0.8rem;
            padding: 0 1rem;
            word-break: break-word;
        }

        > svg {
            height: 40px;
            width: 40px;
            margin: unset;
        }
    `}
`
