import styled from "styled-components"
import media from "styled-media-query"

export const SlideContainer = styled.div`
  max-width: 50%;

  ${media.lessThan("large")`
    max-width: 90%;
  `}
`

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  ${media.lessThan("large")`
    gap: 1rem;
  `}
`

export const ThumbnailGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SlideImg = styled.img`
  width: 45rem;
  height: 25rem;

  ${media.lessThan("large")`
    width: 25rem;
    height: 15rem;
  `}
`

export const SlideDescription = styled.p`
  color: var(--main);
  font-family: "Libre Baskerville", serif;
  font-size: 1.5rem;
  margin-top: 2rem;
  text-align: center;
  word-wrap: break-word;
`

export const ThumbnailImg = styled.img`
  width: 45rem;
  height: 14rem;

  :hover {
    cursor: pointer;
  }

  ${media.lessThan("large")`
    width: 100%;
    height:  100%;
  `}
`

export const Dots = styled.div`
  display: flex;
  padding: 10px 0;
  justify-content: center;
`

export const Dot = styled.button`
  border: none;
  width: 10px;
  height: 10px;
  background: var(--text-light);
  border-radius: 50%;
  margin: 0 5px;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: var(--main);
  }

  &.active {
    background-color: var(--text-dark);
  }
`

export const Arrow = styled.svg`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  fill: var(--text-light);
  cursor: pointer;

  &:hover {
    fill: var(--main);
  }

  &.arrow--disabled {
    fill: var(--transparent);
    cursor: not-allowed;
  }

  &.arrow--left {
    left: 5px;
  }

  &.arrow--right {
    left: auto;
    right: 5px;
  }
`
