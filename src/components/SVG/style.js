import styled from "styled-components"
import media from "styled-media-query"

export const FlyingBird = styled.img`
  max-width: 20rem;
  position: absolute;
  top: -8rem;
  right: -14rem;
  animation: flying 0.8s infinite alternate ease-in-out;

  @keyframes flying {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, -1rem);
    }
  }

  ${media.lessThan("large")`
    top: -2rem;
    right: -4rem;
    max-width: 8rem;
  `}
`

export const RestingBird = styled.img`
  max-width: 20rem;
  position: absolute;
  bottom: 5rem;
  right: 5rem;
  z-index: 1;

  ${media.lessThan("large")`
    max-width: 10rem;
  `}
`

export const WaitingBird = styled.img`
  max-width: 20rem;
  position: absolute;
  bottom: 2rem;
  right: 2rem;

  ${media.lessThan("large")`
    max-width: 10rem;
  `}
`

export const LovelyBird = styled.img`
  max-width: 30rem;
  position: absolute;
  bottom: 15rem;
  left: 5rem;

  ${media.lessThan("large")`
    max-width: 10rem;
    bottom: 0;
    left: 0;
  `}
`

export const Butterfly = styled.img`
  max-width: 15rem;
  position: absolute;
  top: -4rem;
  left: 0;
  z-index: 1;

  ${media.lessThan("large")`
    max-width: 8rem;
  `}
`
export const Crown = styled.img`
  max-width: 25rem;
  position: absolute;
  top: 4rem;
  right: 4rem;

  ${media.lessThan("large")`
    max-width: 10rem;
  `}
`

export const Error404 = styled.img`
  max-width: 20rem;
`

export const Rocket = styled.img`
  max-width: 20rem;
  display: flex;
  margin: 0;

  ${media.lessThan("large")`
    max-width: 8rem;
  `}
`

export const Stars = styled.img`
  max-width: 20rem;
  display: flex;
  margin: 0;

  ${media.lessThan("large")`
    max-width: 8rem;
  `}
`

export const Developer = styled.img`
  max-width: 20rem;
  position: absolute;
  bottom: 2rem;
  right: 2rem;

  ${media.lessThan("large")`
    max-width: 10rem;
  `}
`

export const Flower = styled.img`
  max-width: 20rem;
`
