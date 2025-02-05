import styled from "styled-components"

export const CircularText = styled.p`
  position: relative;

  [style*="--index"] {
    font-family: monospace;
    text-transform: uppercase;
    font-weight: bold;
    font-size: calc(var(--font-size, 2) * 0.5rem);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
      rotate(calc(360deg / var(--total) * var(--index)))
      translateY(calc(var(--radius, 5) * -1ch));
  }
`

export const CircularTextContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  animation: rotate 6s linear infinite;

  @keyframes rotate {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`
