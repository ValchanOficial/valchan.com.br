import styled from "styled-components"

export const BackgroundCubes = styled.ul`
  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }
    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;

  li {
    position: absolute;
    display: block;
    list-style: none;
    width: 2rem;
    height: 2rem;
    background: rgba(255, 255, 255, 0.5);
    animation: animate 11s linear infinite;
  }
`
