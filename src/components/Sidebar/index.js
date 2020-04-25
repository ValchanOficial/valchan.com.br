import React from 'react';
import * as S from './style';
import Profile from '../Profile';
import SocialLinks from '../SocialLinks';

const Sidebar = () => {
    return (
        <S.Aside>
            <Profile/>
            <SocialLinks/>
        </S.Aside>
    )
}

export default Sidebar;