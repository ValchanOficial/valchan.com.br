import styled from "styled-components";
import { Link } from "gatsby";

export const PostItemLink = styled(Link)`
  color: black;
  display: flex;
  text-decoration: none;
  
  &:hover {
    color: #A51073;
  }
`

export const PostItemWrapper = styled.section`
  align-items: center;
  border: 3px solid #EAB9E1;
  border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
  position: relative;
  display: flex;
  padding: 2rem 2rem;
  width: 100%;
  margin-bottom: 0.5rem;

  &::before {
      content: '';
      border: 2px solid #EAB9E1;
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
      border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
  }
`

export const PostItemTag = styled.div`
  align-items: center;
  box-shadow: 0.2em 0.2em 0.2em #262626;
  transform:rotate(-10deg);
	background: linear-gradient(to bottom right, #A51073, #7F054E);
  color: white;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  min-height: 3rem;
  min-width: 7.1rem;
  text-transform: uppercase;
`

export const PostItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
`

export const PostItemDate = styled.time`
  font-size: 0.9rem;
  font-weight: 300;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
`

export const PostItemTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0.2rem 0 0.5rem;
`

export const PostItemDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.2;
`