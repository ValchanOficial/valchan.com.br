import styled from "styled-components";
import media from "styled-media-query";

export const AsideMenuBar = styled.div`
    background: var(--background);
    display: flex;
    flex-direction: row;
    margin-right: 2.3rem;

    ${media.lessThan("large")`
        margin: 1rem;
    `}
`

export const Aside = styled.aside`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 20rem;
    text-align: center;

    ${media.lessThan("large")`
        margin: 1rem;
        height: unset;
    `}
`