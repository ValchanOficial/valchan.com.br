import styled from "styled-components";
import media from "styled-media-query";
import { Link } from "gatsby"

export const ProfileWrapper = styled.section`
    color: var(--text);
    display: flex;
    flex-direction: column;
`
export const ProfileLink = styled(Link)`
    color: var(--link);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
        color: var(--linkHover);
    }
`

export const ProfileAuthor = styled.h1`
    font-size: 1.6rem;
    margin: 0.5rem auto 0.8rem;

    ${media.lessThan("large")`
        font-size: 1rem;
    `}
`

export const ProfilePosition = styled.small`
    display: block;
    font-size: 1.2rem;
    margin-bottom: 0.4em;
    font-weight: 400;

    ${media.lessThan("large")`
        font-size: 0.8rem;
    `}
`

export const ProfileDescription = styled.p`
    font-size: 1.2rem;
    font-weight: 300;

    ${media.lessThan("large")`
        display: none;
    `}
`

export const ProfileSubtitle = styled.h2`
    display: block;
    font-size: 1.2rem;
    margin-top: 2em;
    margin-bottom: 0.6em;
    font-weight: bold;

    ${media.lessThan("large")`
        display: none;
    `}
`