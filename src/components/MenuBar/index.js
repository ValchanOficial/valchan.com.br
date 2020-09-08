import React, {useState, useEffect} from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { HomeCircle as Home } from '@styled-icons/boxicons-solid/';
import { SearchAlt as Search } from '@styled-icons/boxicons-regular/SearchAlt';
import { Lightbulb as Light } from "@styled-icons/remix-fill/Lightbulb";
import { ArrowUpCircle as ArrowUp } from '@styled-icons/remix-line/ArrowUpCircle';

import * as S from './style';

const MenuBar = () => {
    const [theme, setTheme] = useState('light');
    const isDarkMode = theme === 'dark';

    useEffect(() => {
        setTheme(window.__theme);
        window.__onThemeChange = () => setTheme(window.__theme);
    }, []);

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
                <S.MenuBarIcon
                    title='Mudar o tema'
                    onClick={() => {
                        window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
                    }}
                    className={theme}
                >
                    <Light />
                </S.MenuBarIcon>
                
                <S.MenuBarIcon 
                    title='Ir para o Topo'
                    onClick={() => scrollTo('header')}
                    className="display"
                >
                    <ArrowUp />
                </S.MenuBarIcon>
            </S.MenuBarGroup>

        </S.MenuBarWrapper>
    );
}

export default MenuBar;