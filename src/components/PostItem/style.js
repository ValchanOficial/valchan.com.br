import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "gatsby";

export const PostItemLink = styled(Link)`
  color: var(--secTitle);
  display: flex;
  text-decoration: none;
  height: 180px;
  margin-bottom: 2rem; // at ListWrapper gap: 2rem; doesn't work 

  ${media.lessThan("medium")`
    height: 280px;
  `}

  body#grid & {
    background-color: var(--background);
    height: 100%;
  }
  
  &:hover {
    color: var(--linkHover);
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  border: 3px solid var(--border);
  border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
  position: relative;
  display: flex;
  padding: 2rem 2rem;
  width: 100%;
  position: relative;

  ${media.lessThan("medium")`
    padding: 0.5rem;
  `}

  body#grid & {
    border: 2px solid var(--border);
    padding: 2rem 1rem;
    flex-direction: column;
    justify-content: center;
  }

  &::before {
      content: '';
      border: 2px solid var(--border);
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
      border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
  }

  ${media.lessThan("large")`
    border: 1px solid var(--border);
  `}
`

export const PostItemTag = styled.div`
  align-items: center;
  box-shadow: 0.2em 0.2em 0.2em #262626;
  transform:rotate(-10deg);
	background: linear-gradient(to bottom right, var(--colorTag), var(--colorTagTwo));
  color: var(--text);
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  min-height: 3rem;
  min-width: 7.1rem;
  text-transform: uppercase;

  body#grid & {
    margin-bottom: 1.5rem;
  }

  ${media.lessThan("medium")`
    font-size: 0.8rem;
    min-height: 2rem;
    min-width: 5.5rem;

    position: absolute;
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
  `}
`

export const PostItemBreak = styled.span``;

export const PostItemDate = styled.time`
  font-size: 0.9rem;
  font-weight: 300;
  font-family: Montserrat, Arial, Helvetica, sans-serif;

  ${media.lessThan("large")`
    display: flex;
    flex-direction: column;
    
    font-size: 0.9rem;
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
    font-size: 1.2rem;
    margin-bottom: 1.2rem;
  `}
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;  

  ${media.lessThan("large")`
    font-size: 1rem;
  `}
`