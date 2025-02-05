import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import media from "styled-media-query"

export const Avatar = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AvatarDetails = styled.section`
  display: flex;
  width: 20.5rem;
  height: 20.5rem;
  border-radius: 100%;
  background: linear-gradient(
    to bottom right,
    var(--main),
    var(--secondary)
  );

  ${media.lessThan("large")`
        width: 110px;
        height: 110px;
    `}
`

export const AvatarImg = styled(GatsbyImage)`
  width: 20rem;
  height: 20rem;
  border-radius: 100%;
  margin: auto;

  ${media.lessThan("large")`
    width: 10rem;
    height: 10rem;
  `}
`
