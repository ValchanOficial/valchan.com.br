import styled from "styled-components"

export const ShinyText = styled.p`
  color: #b5b5b5a4; /* Adjust this color to change intensity/style */
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 40%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0) 60%
  );

  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  display: inline-block;
  animation: ${props => (props.disabled ? "none" : "shine 4s linear infinite")};

  @keyframes shine {
    0% {
      background-position: 100%;
    }

    100% {
      background-position: -100%;
    }
  }
`
