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
      file(relativePath: { eq: "valchan.jpg" }) {
        childImageSharp {
          gatsbyImageData(quality: 100)
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
