import styled from "styled-components"

export const BackgroundSparklesStars = styled.ul`
  @keyframes sparkle {
    50% {
      opacity: 0.4;
      transform: scale(0.1);
      box-shadow: 0px 0px 10px 5px #ffffff5e;
    }
    50% {
      opacity: 1;
      transform: scale(0.2);
      box-shadow: 0px 0px 10px 5px var(--background-light);
    }
    100% {
      opacity: 0;
      transform: scale(0.4);
      box-shadow: 0px 0px 10px 5px #ffffff5e;
    }
  }

  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;

  li {
    position: absolute;
    width: 2rem;
    height: 2rem;
    background-color: var(--background-light);
    border-radius: 50%;
    opacity: 0;
    animation: sparkle 6s infinite alternate;
  }
`
