import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import * as S from './style';
import Avatar from '../Avatar';
import SocialLinks from '../SocialLinks'
import MenuBar from '../MenuBar'

const Profile = () => {
    const {site: { info: {position, description, author}}} = useStaticQuery(graphql`
    query {
      site {
          info: siteMetadata {
              position
              description
              author
          }
      }
    }`);

    return (
        <S.ProfileWrapper>
            <S.ProfileLink to="/">
                <Avatar/>
                <S.ProfileAuthor title={author}>{author}</S.ProfileAuthor>
                <S.ProfilePosition title={position}>{position}</S.ProfilePosition> 
            </S.ProfileLink>               
            <S.ProfileSubtitle>About Me</S.ProfileSubtitle>
            <S.ProfileDescription>{description}</S.ProfileDescription>
            <S.ProfileSubtitle>Let's Socialize!</S.ProfileSubtitle>
            <SocialLinks/>
            <MenuBar/>
        </S.ProfileWrapper>
    );
}

export default Profile;