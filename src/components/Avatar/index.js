import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as S from './style';

const Avatar = () => {
    const { avatar } = useStaticQuery(graphql`
    query {
        avatar: file(relativePath: { eq: "valchan.jpg"}) {
            image: childImageSharp {
                gatsbyImageData(width: 150, height: 150, quality: 100)
            }
        }
    }`);
    
    return (
        <S.Avatar>
            <S.AvatarDetails>
                <S.AvatarImg image={avatar.image.gatsbyImageData} alt="Valchan" className="image" />
            </S.AvatarDetails>            
        </S.Avatar>
    );
}

export default Avatar;
