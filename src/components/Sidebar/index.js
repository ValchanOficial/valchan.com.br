import React from 'react';

import * as S from './style';

import Profile from '../Profile';

const Sidebar = () => {
    return (
        <S.AsideMenuBar>
            <S.Aside>
                <Profile/>
            </S.Aside>
        </S.AsideMenuBar>
    )
}

export default Sidebar;