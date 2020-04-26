import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as S from './style';
import Avatar from '../Avatar';

const Profile = () => {
    const {
        site: {
            siteMetadata: {position, description, author}
        }
    } = useStaticQuery(graphql`
        query MySiteMetaData {
            site {
                siteMetadata {
                    position
                    description
                    author
                }
            }
        }
    `);

    return (
        <S.ProfileWrapper>
            <S.ProfileLink to="/">
                <Avatar/>
                <S.ProfileAuthor>{author}</S.ProfileAuthor>
                <S.ProfilePosition>{position}</S.ProfilePosition> 
            </S.ProfileLink>               
            <S.ProfileSubtitle>About Me</S.ProfileSubtitle>
            <S.ProfileDescription>{description}</S.ProfileDescription>
            <S.ProfileSubtitle>Let's Socialize!</S.ProfileSubtitle>
        </S.ProfileWrapper>
    );
}

export default Profile;