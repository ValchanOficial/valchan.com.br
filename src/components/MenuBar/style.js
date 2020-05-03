import styled from "styled-components";
import { Link } from "gatsby";

export const MenuBarWrapper = styled.aside`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    top: 0;
    height: 100vh;
    margin-left: 0.5rem;
`

export const MenuBarGroup = styled.div`
    display: flex;
    flex-direction: column;
`

export const MenuBarLink = styled(Link)`
    display: block;
`

export const MenuBarIcon = styled.div`
    color: var(--text);
    cursor: pointer;
    width: 2rem;
    height: auto;
    margin-top: 1rem;

    &.dark {
        &:hover {
        color: #e2e240;
        }
    }

    &:hover {
        color: var(--menuBarHover);
    }
`