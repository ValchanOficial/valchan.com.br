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
  width: 165px;
  height: 165px;
  border-radius: 100%;
  background: linear-gradient(
    to bottom right,
    var(--avatarColor),
    var(--avatarColorTwo)
  );

  ${media.lessThan("large")`
        width: 110px;
        height: 110px;
    `}
`

export const AvatarImg = styled(GatsbyImage)`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  margin: auto;

  ${media.lessThan("large")`
        height: 100px;
        width: 100px;
    `}
`
