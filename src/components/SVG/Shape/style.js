import styled from "styled-components";

export const CustomShape = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(${(props) => props.transform});

  svg {
    position: relative;
    display: block;
    width: calc(150% + 1.3px);
    height: 137px;
    transform: rotateY(180deg);
  }

  path:last-child {
    fill: rgba(255, 255, 255, 0);
  }
`
