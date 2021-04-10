import React, {useState, useEffect} from 'react';

import { SearchAlt as Search, HomeAlt as Home, Sun, Moon } from '@styled-icons/boxicons-regular';
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
            <S.MenuBarIcon
                title='Mudar o tema'
                onClick={() => {
                    window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
                }}
                className={theme}
            >
               {isDarkMode ? <Sun /> : <Moon />}
            </S.MenuBarIcon>
        </S.MenuBarWrapper>
    );
}

export default MenuBar;