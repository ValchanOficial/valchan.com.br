import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as S from './style';

const Avatar = () => {
    const { avatarImage } = useStaticQuery(
        graphql`
        query {
            avatarImage: file(relativePath: { eq: "valchan.jpg"}) {
                childImageSharp {
                    fixed(width: 150, height: 150, quality: 100) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);
    
    return (
        <S.Avatar>
            <S.AvatarDetails>
                <S.AvatarImg fixed={avatarImage.childImageSharp.fixed} alt="Valchan" className="image" />
            </S.AvatarDetails>            
        </S.Avatar>
    );
}

export default Avatar;
