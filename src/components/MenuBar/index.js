import React, {useState, useEffect} from 'react';

import { HomeCircle as Home, Grid } from '@styled-icons/boxicons-solid/';
import { SearchAlt as Search } from '@styled-icons/boxicons-regular/SearchAlt';
import { Lightbulb as Light } from "@styled-icons/remix-fill/Lightbulb";
import { ArrowUpCircle as ArrowUp } from '@styled-icons/remix-line/ArrowUpCircle';
import { ThList as List } from "@styled-icons/typicons/ThList";

import * as S from './style';

const MenuBar = () => {
    const [theme, setTheme] = useState('light');
    const [display, setDisplay] = useState('list');

    const isDarkMode = theme === 'dark';
    const isListMode = display === 'list';

    useEffect(() => {
        setTheme(window.__theme);
        setDisplay(window.__display);

        window.__onThemeChange = () => setTheme(window.__theme);
        window.__onDisplayChange = () => setDisplay(window.__display);
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
                    title='Mudar visualização'
                    onClick={() => {
                        window.__setPreferredDisplay(isListMode ? "grid" : "list")
                    }}
                >
                    {isListMode ? <Grid /> : <List />}
                </S.MenuBarIcon>

                <S.MenuBarIcon title='Ir para o Topo'>
                    <ArrowUp />
                </S.MenuBarIcon>
            </S.MenuBarGroup>

        </S.MenuBarWrapper>
    );
}

export default MenuBar;