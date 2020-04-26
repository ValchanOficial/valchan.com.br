import React from 'react';

import { HomeCircle as Home, Grid } from '@styled-icons/boxicons-solid/';
import { SearchAlt as Search } from '@styled-icons/boxicons-regular/SearchAlt';
import { Lightbulb as Light } from "@styled-icons/remix-fill/Lightbulb";
import { ArrowUpCircle as ArrowUp } from '@styled-icons/remix-line/ArrowUpCircle';

import * as S from './style';

const MenuBar = () => {
    return (
        <S.MenuBarWrapper>
            <S.MenuBarGroup>
                <S.MenuBarLink to='/' title='Voltar para Home'>
                    <S.MenuBarIcon>
                        <Home />
                    </S.MenuBarIcon>
                </S.MenuBarLink>

                <S.MenuBarLink to='/search' title='Pesquisar'>
                    <S.MenuBarIcon>
                        <Search />
                    </S.MenuBarIcon>
                </S.MenuBarLink>
            </S.MenuBarGroup>
            <S.MenuBarGroup>
                <S.MenuBarIcon title='Mudar o tema'>
                    <Light />
                </S.MenuBarIcon>

                <S.MenuBarIcon title='Mudar visualização'>
                    <Grid />
                </S.MenuBarIcon>

                <S.MenuBarIcon title='Ir para o Topo'>
                    <ArrowUp />
                </S.MenuBarIcon>
            </S.MenuBarGroup>

        </S.MenuBarWrapper>
    )    
}

export default MenuBar;