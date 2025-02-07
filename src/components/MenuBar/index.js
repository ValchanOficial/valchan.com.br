import React from 'react';

import Icons from '../Icons'
import * as S from './style';

const MenuBar = () => {
    return (
        <S.MenuBarWrapper>
            <S.MenuBarLink to='/' title='Voltar para Home'>
                <S.MenuBarIcon>
                    <Icons.Home/>
                </S.MenuBarIcon>
            </S.MenuBarLink>

            <S.MenuBarLink to='/search' title='Pesquisar'>
                <S.MenuBarIcon>
                    <Icons.Search/>
                </S.MenuBarIcon>
            </S.MenuBarLink>
        </S.MenuBarWrapper>
    );
}

export default MenuBar;
