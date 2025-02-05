import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as S from "./style"

const Avatar = () => {
  const {
    file: {
      childImageSharp: { gatsbyImageData },
    },
  } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "valchan.png" }) {
        childImageSharp {
          gatsbyImageData(quality: 100, width: 200, height: 200)
        }
      }
    }
  `)

  return (
    <S.Avatar>
      <S.AvatarDetails>
        <S.AvatarImg image={gatsbyImageData} alt="Valchan" className="image" />
      </S.AvatarDetails>
    </S.Avatar>
  )
}

export default Avatar
