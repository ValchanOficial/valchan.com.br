import styled from "styled-components"

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
`

export const RestingBird = styled.img`
  max-width: 20rem;
  position: absolute;
  bottom: 5rem;
  right: 5rem;
`

export const WaitingBird = styled.img`
  max-width: 20rem;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`

export const LovelyBird = styled.img`
  max-width: 30rem;
  position: absolute;
  bottom: 15rem;
  left: 5rem;
`

export const Butterfly = styled.img`
  max-width: 15rem;
  position: absolute;
  top: -4rem;
  left: 0;
  z-index: 1;
`
export const Crown = styled.img`
  max-width: 25rem;
  position: absolute;
  top: 4rem;
  right: 4rem;
`

export const Error404 = styled.img`
  max-width: 20rem;
`

export const Rocket = styled.img`
  max-width: 20rem;
  max-width: 20rem;
  align-self: flex-end;
  display: flex;
  margin: 0;
`

export const Stars = styled.img`
  max-width: 20rem;
  align-self: flex-start;
  display: flex;
  margin: 0;
`

export const Developer = styled.img`
  max-width: 20rem;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
`

export const Flower = styled.img`
  max-width: 20rem;
`
