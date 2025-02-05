import { Link } from "gatsby"
import styled from "styled-components"
import media from "styled-media-query"

export const PostItemLink = styled(Link)`
  color: var(--text);
  display: flex;
  text-decoration: none;
  height: 180px;
  margin-bottom: 1.5rem; // at ListWrapper gap: 2rem; doesn't work

  ${media.lessThan("medium")`
    height: 280px;
    margin-bottom: 1.5rem;
  `}

  body#grid & {
    background-color: var(--background-dark);
    height: 100%;
  }

  &:hover {
    color: var(--main);
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  border: 1px solid var(--main);
  position: relative;
  display: flex;
  padding: 2rem 2rem;
  width: 100%;
  position: relative;

  body#grid & {
    border: 1px solid var(--main);
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }

  ${media.lessThan("medium")`
    padding: 1.8rem;
  `}

  -webkit-box-shadow:  0px 8px 8px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 8px 8px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 8px 8px 2px rgba(0, 0, 0, 0.1);
`

export const PostItemTag = styled.span`
  color: var(--main);
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: "Atkinson Hyperlegible", sans-serif;

  body#grid & {
    margin-bottom: 1.5rem;
  }

  ${media.lessThan("medium")`
    font-size: 1.5rem;
    min-height: 2rem;
    min-width: 5.5rem;
    top: 10px;
    left: 5px;
  `}
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;

  ${media.lessThan("large")`
    text-align: left;
    margin-right: auto;
  `}
`

export const PostItemBreak = styled.span``

export const PostItemDate = styled.time`
  font-size: 0.8rem;
  font-weight: 400;
  font-family: "Atkinson Hyperlegible", sans-serif;
  margin-top: 1rem;
  text-transform: uppercase;

  ${media.lessThan("large")`
    display: flex;
    flex-direction: column;
    
    font-size: 1rem;
    margin-bottom: 0.8rem;
  `}
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;

  body#grid & {
    line-height: 1.1;
    margin: 0.8rem 0;
  }

  ${media.lessThan("large")`
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  `}
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.2;

  ${media.lessThan("large")`
    font-size: 1.1rem;
  `}
`
