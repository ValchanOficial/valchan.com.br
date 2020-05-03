import styled from "styled-components";


export const SocialLinksWrapper = styled.nav`
    background: var(--background);
    width: 100%;
`

export const SocialLinksList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
`

export const SocialLinksItem = styled.li``

export const SocialLinksLink = styled.a`
    color: var(--text);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
        color: var(--linkHover);
    }
`

export const Icon = styled.div`
    fill: var(--text);
    width: 30px;
    height: 30px;
`