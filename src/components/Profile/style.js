import styled from "styled-components";
import { Link } from "gatsby"

export const ProfileWrapper = styled.section`
    color: black;
    display: flex;
    flex-direction: column;
`
export const ProfileLink = styled(Link)`
    color: black;
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
        color: #A51073;
    }
`

export const ProfileAuthor = styled.h1`
    font-size: 1.6rem;
    margin: 0.5rem auto 0.8rem;
`

export const ProfilePosition = styled.small`
    display: block;
    font-size: 1.2rem;
    margin-bottom: 0.4em;
    font-weight: 400;
`

export const ProfileDescription = styled.p`
    font-size: 1.2rem;
    font-weight: 300;
`

export const ProfileSubtitle = styled.h2`
    display: block;
    font-size: 1.2rem;
    margin-top: 2em;
    margin-bottom: 0.6em;
    font-weight: bold;
`