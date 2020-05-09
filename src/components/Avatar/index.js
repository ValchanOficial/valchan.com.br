import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as S from './style';

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
        query {
            avatarImage: file(relativePath: { eq: "valchan.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 150, maxHeight: 150, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    
    return (
        <S.Avatar>
            <S.AvatarDetails>
                <S.AvatarImg fluid={avatarImage.childImageSharp.fluid} alt="Valchan" className="image" />
            </S.AvatarDetails>            
        </S.Avatar>
    );
}

export default Avatar;
