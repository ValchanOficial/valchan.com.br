import styled from "styled-components";


export const SocialLinksWrapper = styled.nav`
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
    color: black;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
        color: #A51073;
    }
`

export const Icon = styled.div`
    fill: black;
    width: 30px;
    height: 30px;
`